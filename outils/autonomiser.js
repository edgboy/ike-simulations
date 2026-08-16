// Produit la version TÉLÉCHARGEABLE d'une simulation : un fichier HTML unique
// qui s'ouvre en double-clic, sans internet et sans rien d'autre à côté.
//
// Les simulations servies par le site partagent une feuille de polices
// (assets/polices.css) et les fichiers .woff2 qu'elle appelle : c'est ce qu'il
// faut faire en ligne, où le navigateur ne les télécharge qu'une fois pour
// tout le catalogue. Mais un fichier envoyé seul par WhatsApp ou copié sur une
// clé perd ces ressources : il fonctionne encore — rien n'y est cassé — mais
// il réclame un fichier absent et retombe sur les polices du système.
//
// Cet outil embarque donc les polices dans le fichier, en data:, et remplace
// le lien « retour au catalogue » par l'adresse du site en ligne, qui ne mène
// nulle part depuis un dossier de téléchargement.
//
// Usage : node outils/autonomiser.js            (toutes les simulations)
//         node outils/autonomiser.js triangles  (une seule)
'use strict';
const fs = require('fs');
const path = require('path');

const RACINE = path.join(__dirname, '..');
const SIMS = path.join(RACINE, 'simulations');
const SORTIE = path.join(RACINE, 'telechargement');
const SITE = 'https://edgboy.github.io/ike-simulations/';

/* Les quatre @font-face de assets/polices.css pointent en réalité vers deux
   fichiers seulement : baloo2-700 et -800 sont identiques, inter-400 et -600
   aussi. On ne lit donc chaque fichier qu'une fois, et le cache évite de
   doubler inutilement le poids du téléchargement. */
const cache = new Map();
function enBase64(fichier) {
  if (!cache.has(fichier)) {
    cache.set(fichier, fs.readFileSync(fichier).toString('base64'));
  }
  return cache.get(fichier);
}

// Réécrit polices.css avec les woff2 en data:, prêt à être posé dans un <style>
function policesEmbarquees() {
  const css = fs.readFileSync(path.join(RACINE, 'assets', 'polices.css'), 'utf8');
  return css.replace(/url\('polices\/([^']+)'\)/g, (_, nom) => {
    const f = path.join(RACINE, 'assets', 'polices', nom);
    if (!fs.existsSync(f)) throw new Error('Police introuvable : ' + nom);
    return "url('data:font/woff2;base64," + enBase64(f) + "')";
  });
}

function autonomiser(dossier, polices) {
  const source = path.join(SIMS, dossier, 'index.html');
  let html = fs.readFileSync(source, 'utf8');

  // Une simulation peut n'avoir aucun lien de polices — l'atelier de molécules,
  // assemblé avec sa bibliothèque 3D, est déjà autonome. Ce n'est pas une
  // erreur : on ne fait alors rien de ce côté-là.
  const lien = '<link rel="stylesheet" href="../../assets/polices.css">';
  const avaitDesPolices = html.includes(lien);
  if (avaitDesPolices) html = html.replace(lien,
    '<!-- Polices embarquées : ce fichier ne dépend de rien. -->\n<style>\n' + polices + '\n</style>');

  // Le retour au catalogue pointe vers ../../index.html, qui n'existe pas à
  // côté d'un fichier téléchargé. On l'envoie vers le site.
  html = html.replace(/href="\.\.\/\.\.\/index\.html([^"]*)"/g,
    (_, ancre) => 'href="' + SITE + (ancre ? ancre.replace('#', '#') : '') + '" target="_blank" rel="noopener"');

  if (html.includes('../../')) {
    const restes = [...new Set(html.match(/[^"']*\.\.\/\.\.\/[^"']*/g) || [])];
    throw new Error(dossier + ' : références externes restantes → ' + restes.join(', '));
  }

  const cible = path.join(SORTIE, 'kondo-labo-' + dossier + '.html');
  fs.writeFileSync(cible, html);
  return { cible, taille: Buffer.byteLength(html), avaitDesPolices };
}

const demande = process.argv[2];
const dossiers = fs.readdirSync(SIMS)
  .filter(d => fs.existsSync(path.join(SIMS, d, 'index.html')))
  .filter(d => !demande || d === demande);
if (!dossiers.length) {
  console.error('Aucune simulation à traiter' + (demande ? ' pour « ' + demande + ' »' : ''));
  process.exit(1);
}

fs.mkdirSync(SORTIE, { recursive: true });
const polices = policesEmbarquees();
const tailles = {};
let total = 0;
for (const d of dossiers) {
  const { cible, taille, avaitDesPolices } = autonomiser(d, polices);
  total += taille;
  tailles[d] = Math.round(taille / 1024);
  console.log(path.basename(cible).padEnd(38) + (taille / 1024).toFixed(0).padStart(5) + ' Ko' +
    (avaitDesPolices ? '' : '   (déjà autonome)'));
}

/* Le catalogue affiche le poids de chaque fichier : sur un forfait béninois,
   savoir avant de cliquer qu'on va prendre 380 Ko n'est pas un détail. On
   écrit donc le relevé ici plutôt que de le recopier à la main dans la page —
   recopié, il aurait menti dès la version suivante. Le relevé n'est complet
   que si l'outil a traité toutes les simulations. */
if (!demande) {
  fs.writeFileSync(path.join(SORTIE, 'tailles.json'), JSON.stringify(tailles, null, 1));
  console.log('\nrelevé des poids écrit dans telechargement/tailles.json');
}
console.log('\n' + dossiers.length + ' fichier(s) · ' + (total / 1024 / 1024).toFixed(1) + ' Mo au total');
