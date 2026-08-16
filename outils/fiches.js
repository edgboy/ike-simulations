// Produit la FICHE PÉDAGOGIQUE d'une simulation : une page qu'un enseignant
// lit en deux minutes avant de décider s'il l'emporte en classe.
//
// Un collègue à qui on envoie « kondo-labo-respiration.html » reçoit un fichier
// et rien d'autre. Il ne sait pas quelle situation d'apprentissage c'est, ce
// que ses élèves auront retenu à la fin, ni où ils vont buter. Il devrait tout
// jouer lui-même pour le découvrir — et un enseignant qui n'a pas le temps ne
// le fera pas.
//
// La fiche est EXTRAITE DE LA SIMULATION, jamais écrite à la main : les
// missions, ce qu'elles font retenir, le lexique et les pièges du quiz sont
// déjà dans le fichier livré. Écrite à part, elle mentirait dès la version
// suivante — c'est arrivé assez souvent dans ce dépôt pour qu'on s'en méfie.
//
// Les polices ne sont PAS embarquées ici, contrairement aux simulations : une
// fiche est un document de texte, elle se lit très bien dans la police du
// système, et embarquer 108 Ko dans chacune alourdirait l'archive de deux
// mégaoctets pour un gain nul.
//
// Usage : node outils/fiches.js            (toutes)
//         node outils/fiches.js respiration (une seule)
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const RACINE = path.join(__dirname, '..');
const SIMS = path.join(RACINE, 'simulations');
const SORTIE = path.join(RACINE, 'telechargement');
const SITE = 'https://edgboy.github.io/ike-simulations/';

/* Extrait une déclaration `const NOM = ...;` du source et l'évalue.

   Les tableaux de missions contiennent des fonctions (`ok`, `gagne`) qui
   parlent de variables inconnues ici. Ce n'est pas un problème : on les
   DÉFINIT sans jamais les APPELER, et le corps d'une fonction n'est évalué
   qu'à l'appel. Seules les données littérales — titres, consignes, textes à
   retenir — sont réellement lues. Un Proxy fournit n'importe quel identifiant
   au cas où l'un d'eux serait touché à la définition. */
function extraire(source, nom) {
  const debut = source.indexOf('\nconst ' + nom + ' = ');
  if (debut < 0) return null;
  // on cherche la fin de la déclaration : la première ligne « ]; » ou « }; »
  const fin = source.indexOf('\n];', debut) >= 0 && (source.indexOf('\n};', debut) < 0
      || source.indexOf('\n];', debut) < source.indexOf('\n};', debut))
    ? source.indexOf('\n];', debut) + 3
    : source.indexOf('\n};', debut) + 3;
  if (fin < 3) return null;
  const bac = new Proxy({}, {
    has: () => true,
    get: (c, k) => (k === Symbol.unscopables ? undefined : (c[k] !== undefined ? c[k] : undefined)),
  });
  try {
    return vm.runInNewContext(source.slice(debut, fin) + '\n' + nom + ';', bac, { timeout: 2000 });
  } catch (e) {
    return null;
  }
}

// Le texte pédagogique porte du gras et de l'italique : on les garde, on jette
// le reste.
const propre = t => String(t == null ? '' : t)
  .replace(/<\/?(b|i|em|strong)>/g, m => m.replace('strong', 'b').replace('em', 'i'))
  .replace(/<[^>]+>/g, '');
const echapper = t => String(t == null ? '' : t)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// on échappe, puis on rend le gras et l'italique
const riche = t => echapper(propre(t))
  .replace(/&lt;(\/?)(b|i)&gt;/g, '<$1$2>');

/* Le lexique n'a pas la même forme partout : trois générations cohabitent —
   ['mot', 'définition'], { mot, def }, et { t, d }. On les ramène à une seule
   plutôt que d'en imposer une aux dix-neuf fichiers déjà livrés. */
function normaliserLexique(brut) {
  if (!Array.isArray(brut)) return [];
  return brut.map(e => {
    if (Array.isArray(e)) return { mot:e[0], def:e[1] };
    if (e && typeof e === 'object') return { mot:e.mot || e.t || e.terme, def:e.def || e.d || e.definition };
    return null;
  }).filter(e => e && e.mot && e.def);
}

/* Même chose pour les missions. Trois générations, trois façons de dire la
   même chose :
   — la récente porte un `but` explicite ;
   — les premières (circuit, optique, combustions…) n'en ont pas : le but s'y
     lit dans la PREMIÈRE ÉTAPE, qui dit ce qu'il faut faire ;
   — l'atelier de molécules, jamais aligné sur le socle, a un `sousTitre` et
     aucun bilan de mission.
   On prend ce qui existe plutôt que d'exiger un champ. */
function normaliserMissions(brut) {
  if (!Array.isArray(brut)) return [];
  return brut.map(m => {
    if (!m || typeof m !== 'object') return null;
    const e0 = Array.isArray(m.etapes) && m.etapes[0] ? m.etapes[0] : null;
    return {
      titre: m.titre || m.nom || '',
      but: m.but || m.objectif || m.sousTitre ||
           (e0 ? (e0.texte || e0.t || '') : ''),
      retenir: m.retenir || m.acquis || m.bilan || '',
    };
  }).filter(m => m && m.titre);
}

function lireSimulation(dossier) {
  const src = fs.readFileSync(path.join(SIMS, dossier, 'index.html'), 'utf8');
  const cherche = (re, def) => { const m = src.match(re); return m ? m[1].trim() : def; };
  return {
    dossier,
    titre: cherche(/<h1>([^<]*)<\/h1>/, dossier),
    repere: cherche(/<div class="sous">([^<]*)<\/div>/, ''),
    quoi: cherche(/<meta name="description" content="([^"]*)"/, ''),
    missions: normaliserMissions(extraire(src, 'MISSIONS')),
    lexique: normaliserLexique(extraire(src, 'LEXIQUE')),
    banque: extraire(src, 'BANQUE') || null,
  };
}

function fiche(s) {
  const m = s.missions;
  const pieges = (s.banque && s.banque.pieges) || [];
  const avecBilan = m.some(x => x.retenir);
  const lignes = m.map((x, i) => `
      <tr>
        <td class="n">${i + 1}</td>
        <td>
          <b>${riche(x.titre)}</b>
          <span class="but">${riche(x.but)}</span>
        </td>${avecBilan ? `
        <td class="retenir">${riche(x.retenir)}</td>` : ''}
      </tr>`).join('');

  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Fiche — ${echapper(s.titre)} — KONDO LABO</title>
<style>
  /* Une fiche se lit à l'écran et s'imprime. Pas de police embarquée : c'est
     un document de texte, la police du système lui convient. */
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  body {
    margin: 0; padding: 24px;
    font-family: 'Segoe UI', system-ui, -apple-system, Roboto, sans-serif;
    font-size: 14px; line-height: 1.55; color: #24211E; background: #F7F5F0;
  }
  .feuille { max-width: 820px; margin: 0 auto; background: #FFF;
    border: 1px solid #D3CFC8; border-radius: 12px; padding: 28px 30px 34px; }
  .marque { display: flex; align-items: center; gap: 10px; font-size: 12px;
    letter-spacing: .08em; text-transform: uppercase; color: #6B6560; }
  .pastille { width: 26px; height: 26px; border-radius: 7px; background: #C4D94E;
    display: grid; place-items: center; font-weight: 800; color: #3A3632; }
  h1 { font-size: 26px; margin: 14px 0 4px; line-height: 1.2; }
  .repere { display: inline-block; background: #EDF3D6; border-radius: 6px;
    padding: 3px 10px; font-weight: 700; font-size: 13px; }
  .quoi { margin: 12px 0 0; color: #4A443E; }
  h2 { font-size: 16px; margin: 26px 0 10px; padding-bottom: 6px;
    border-bottom: 2px solid #C4D94E; }
  table { width: 100%; border-collapse: collapse; }
  th { text-align: left; font-size: 11.5px; text-transform: uppercase;
    letter-spacing: .06em; color: #6B6560; padding: 0 8px 6px; font-weight: 700; }
  td { vertical-align: top; padding: 9px 8px; border-top: 1px solid #E7E3DC; }
  td.n { width: 26px; font-weight: 800; color: #6B6560; }
  td b { display: block; }
  .but { display: block; color: #5A544E; font-size: 13px; margin-top: 2px; }
  .retenir { width: 48%; font-size: 13px; }
  ul { margin: 0; padding-left: 20px; }
  li { margin-bottom: 5px; }
  .lex b { font-weight: 700; }
  .piege { margin-bottom: 10px; }
  .piege b { display: block; }
  .piege span { color: #4A443E; font-size: 13px; }
  .pied { margin-top: 26px; padding-top: 12px; border-top: 1px solid #E7E3DC;
    font-size: 12px; color: #6B6560; display: flex; justify-content: space-between;
    gap: 12px; flex-wrap: wrap; }
  a { color: #2F6B86; }
  .note { margin: 12px 0 0; padding: 9px 12px; background: #FBF3E2;
    border-left: 3px solid #E9A23B; font-size: 13px; }
  @media print {
    body { background: #FFF; padding: 0; font-size: 11.5pt; }
    .feuille { border: none; border-radius: 0; padding: 0; max-width: none; }
    h2 { break-after: avoid; }
    tr { break-inside: avoid; }
  }
</style>
</head>
<body>
<div class="feuille">
  <div class="marque"><span class="pastille">K</span> KONDO LABO · fiche pédagogique</div>
  <h1>${echapper(s.titre)}</h1>
  <div class="repere">${echapper(s.repere)}</div>
  <p class="quoi">${echapper(s.quoi)}</p>

  <h2>Le parcours — ${m.length} mission${m.length > 1 ? 's' : ''}</h2>
  <table>
    <thead><tr><th></th><th>Ce que l’élève fait</th>${avecBilan
      ? '<th>Ce qu’il retient</th>' : ''}</tr></thead>
    <tbody>${lignes}</tbody>
  </table>

  ${avecBilan ? '' : `<p class="note">Cette simulation n’affiche pas de bilan à la fin de
    chaque mission : elle n’a pas été alignée sur le socle commun du catalogue.</p>`}

  ${s.lexique.length ? `<h2>Les mots à installer</h2>
  <ul class="lex">${s.lexique.map(e =>
    `<li><b>${echapper(e.mot)}</b> — ${riche(e.def)}</li>`).join('')}</ul>` : ''}

  ${pieges.length ? `<h2>Les erreurs que le quiz vise</h2>
  ${pieges.map(q => `<div class="piege"><b>${riche(q.q)}</b>
    <span>${riche(q.expl)}</span></div>`).join('')}` : ''}

  <div class="pied">
    <span>Chaque mission se termine par une question ; le quiz final compte trois niveaux,
      et les questions difficiles pèsent trois fois plus.</span>
    <span><a href="${SITE}simulations/${encodeURIComponent(s.dossier)}/index.html">Ouvrir la simulation</a></span>
  </div>
</div>
</body>
</html>
`;
}

/* ---- Ce qu'on distribue, et pourquoi pas tout ----
   On ne rend téléchargeable que ce que le CATALOGUE annonce. Une simulation
   sans carte à l'accueil n'est pas un oubli : c'est le cas de l'atelier de
   molécules, qui n'a jamais été aligné sur le socle — ni quiz, ni liste de
   missions, ni polices de la charte — et qui existe pour être intégré par
   iframe dans une plateforme extérieure (voir docs/integration-atelier-molecules.md).
   Il reste servi en ligne à son adresse, qui ne doit pas bouger ; il n'a
   simplement rien à faire dans une archive destinée à un enseignant.

   La règle vaut mieux qu'une liste d'exceptions : ce qui n'est pas au
   catalogue ne part pas dans l'archive, aujourd'hui comme demain. */
function auCatalogue() {
  const cat = fs.readFileSync(path.join(RACINE, 'index.html'), 'utf8');
  const vus = new Set();
  const re = /dos:\s*'([a-z0-9-]+)'/g;
  let m;
  while ((m = re.exec(cat))) vus.add(m[1]);
  return vus;
}

const demande = process.argv[2];
const publiees = auCatalogue();
const dossiers = fs.readdirSync(SIMS)
  .filter(d => fs.existsSync(path.join(SIMS, d, 'index.html')))
  .filter(d => publiees.has(d))
  .filter(d => !demande || d === demande);
const ecartees = fs.readdirSync(SIMS)
  .filter(d => fs.existsSync(path.join(SIMS, d, 'index.html')) && !publiees.has(d));

fs.mkdirSync(SORTIE, { recursive: true });
let sansMission = [];
for (const d of dossiers) {
  const s = lireSimulation(d);
  if (!s.missions.length) { sansMission.push(d); continue; }
  const html = fiche(s);
  fs.writeFileSync(path.join(SORTIE, 'fiche-' + d + '.html'), html);
  console.log(('fiche-' + d + '.html').padEnd(38) +
    String(s.missions.length).padStart(2) + ' missions · ' +
    String(s.lexique.length).padStart(2) + ' mots · ' +
    (html.length / 1024).toFixed(0).padStart(3) + ' Ko');
}
if (sansMission.length)
  console.log('\nsans parcours lisible, donc sans fiche : ' + sansMission.join(', '));
// On annonce ce qui est écarté : un silence passerait pour un oubli.
if (ecartees.length)
  console.log('\nhors distribution, absente(s) du catalogue : ' + ecartees.join(', '));
console.log('\n' + (dossiers.length - sansMission.length) + ' fiche(s)');
