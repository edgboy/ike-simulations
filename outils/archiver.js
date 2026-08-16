// Rassemble les simulations téléchargeables en une seule archive, pour
// l'enseignant qui veut emporter tout le catalogue sur une clé.
//
// Le format ZIP est écrit à la main : le dépôt n'a aucune dépendance npm et
// n'a pas à en gagner une pour empaqueter dix-sept fichiers. On stocke sans
// compression (méthode 0) — les polices embarquées en base64 ne se compressent
// presque pas, et un ZIP « stored » s'ouvre partout, y compris sur les
// gestionnaires de fichiers Android les plus rustiques.
//
// Usage : node outils/archiver.js
'use strict';
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const RACINE = path.join(__dirname, '..');
const DOSSIER = path.join(RACINE, 'telechargement');
const ARCHIVE = path.join(DOSSIER, 'kondo-labo-toutes-les-simulations.zip');

// CRC-32, exigé par le format ZIP pour chaque fichier
const TABLE = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();
function crc32(buf) {
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = TABLE[(c ^ buf[i]) & 0xFF] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}

function archiver(fichiers) {
  const morceaux = [], entrees = [];
  let position = 0;
  for (const f of fichiers) {
    const nom = Buffer.from(path.basename(f), 'utf8');
    const brut = fs.readFileSync(f);
    const comprime = zlib.deflateRawSync(brut, { level: 9 });
    // on ne comprime que si ça vaut la peine
    const gagne = comprime.length < brut.length;
    const donnees = gagne ? comprime : brut;
    const methode = gagne ? 8 : 0;
    const somme = crc32(brut);

    const enTete = Buffer.alloc(30);
    enTete.writeUInt32LE(0x04034b50, 0);      // signature
    enTete.writeUInt16LE(20, 4);              // version requise
    enTete.writeUInt16LE(0x0800, 6);          // drapeau : noms en UTF-8
    enTete.writeUInt16LE(methode, 8);
    enTete.writeUInt16LE(0, 10);              // heure
    enTete.writeUInt16LE(0x2181, 12);         // date : 1 janvier 2027, fixe (archive reproductible)
    enTete.writeUInt32LE(somme, 14);
    enTete.writeUInt32LE(donnees.length, 18);
    enTete.writeUInt32LE(brut.length, 22);
    enTete.writeUInt16LE(nom.length, 26);
    enTete.writeUInt16LE(0, 28);

    morceaux.push(enTete, nom, donnees);
    entrees.push({ nom, somme, compresse: donnees.length, brut: brut.length, methode, position });
    position += enTete.length + nom.length + donnees.length;
  }

  const central = [];
  for (const e of entrees) {
    const c = Buffer.alloc(46);
    c.writeUInt32LE(0x02014b50, 0);
    c.writeUInt16LE(20, 4); c.writeUInt16LE(20, 6);
    c.writeUInt16LE(0x0800, 8);
    c.writeUInt16LE(e.methode, 10);
    c.writeUInt16LE(0, 12); c.writeUInt16LE(0x2181, 14);
    c.writeUInt32LE(e.somme, 16);
    c.writeUInt32LE(e.compresse, 20);
    c.writeUInt32LE(e.brut, 24);
    c.writeUInt16LE(e.nom.length, 28);
    c.writeUInt32LE(e.position, 42);
    central.push(c, e.nom);
  }
  const debutCentral = position;
  const tailleCentral = central.reduce((n, b) => n + b.length, 0);

  const fin = Buffer.alloc(22);
  fin.writeUInt32LE(0x06054b50, 0);
  fin.writeUInt16LE(entrees.length, 8);
  fin.writeUInt16LE(entrees.length, 10);
  fin.writeUInt32LE(tailleCentral, 12);
  fin.writeUInt32LE(debutCentral, 16);

  return Buffer.concat([...morceaux, ...central, fin]);
}

if (!fs.existsSync(DOSSIER)) {
  console.error('Lance d’abord : node outils/autonomiser.js');
  process.exit(1);
}
const fichiers = fs.readdirSync(DOSSIER)
  .filter(f => f.endsWith('.html'))
  .sort()
  .map(f => path.join(DOSSIER, f));
if (!fichiers.length) { console.error('Aucun fichier à archiver.'); process.exit(1); }

const zip = archiver(fichiers);
fs.writeFileSync(ARCHIVE, zip);

// Le poids de l'archive rejoint le relevé, pour que le catalogue l'annonce
// sans qu'on ait à le recopier.
const releve = path.join(DOSSIER, 'tailles.json');
if (fs.existsSync(releve)) {
  const t = JSON.parse(fs.readFileSync(releve, 'utf8'));
  t.__archive = Math.round(zip.length / 1024);
  fs.writeFileSync(releve, JSON.stringify(t, null, 1));
}
console.log(path.basename(ARCHIVE) + ' · ' + fichiers.length + ' simulations · ' +
  (zip.length / 1024 / 1024).toFixed(1) + ' Mo');
