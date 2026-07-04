// Assemble une simulation 3D : injecte la bibliothèque (vendor/) dans le
// template pour produire le fichier unique autonome (charte IKE : zéro
// dépendance réseau à l'exécution).
//
// Usage : node outils/embarquer.js <template.html> <lib.js> <sortie.html>
'use strict';
const fs = require('fs');

const [, , template, lib, sortie] = process.argv;
if (!template || !lib || !sortie) {
  console.error('Usage : node outils/embarquer.js <template.html> <lib.js> <sortie.html>');
  process.exit(1);
}

const MARQUEUR = '/*__THREE_JS_ICI__*/';
const html = fs.readFileSync(template, 'utf8');
if (!html.includes(MARQUEUR)) {
  console.error(`Marqueur ${MARQUEUR} introuvable dans ${template}`);
  process.exit(1);
}
const js = fs.readFileSync(lib, 'utf8');
const assemble = html.replace(MARQUEUR, () => js);   // fonction : évite l'interprétation des $ de la lib
fs.writeFileSync(sortie, assemble);
console.log(`OK : ${sortie} (${(assemble.length / 1024 / 1024).toFixed(2)} Mo)`);
