/* Teste le modèle EXTRAIT DE LA SIMULATION LIVRÉE, entre ses deux marqueurs.

   Lancer :  node simulations/respiration/test-modele.js          */
const vm = require('vm'), fs = require('fs'), path = require('path');
const src = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const d = src.indexOf('/*__DEBUT MODELE__*/'), f = src.indexOf('/*__FIN MODELE__*/');
const M = {};
vm.runInNewContext(src.slice(d, f) +
  ';Object.assign(sortie,{AIR_NORMAL,MODES,ETRES,airApres,eauDeChaux,bougie,CARACTERES,SURFACES,caracteresCommuns,etresQuiRespirent,etresDuMode,SEUIL_BOUGIE,SEUIL_CHAUX});',
  { sortie:M, Math, console });
let p = 0, e = 0;
const v = (n, r, a) => { const ok = typeof a === 'number' ? Math.abs(r - a) < 1e-9 : r === a;
  if (ok) p++; else { e++; console.log('  ECHEC ' + n + ' : attendu ' + a + ', obtenu ' + r); } };
const titre = t => console.log('\n— ' + t);

titre('L’air de départ');
v('21 % de dioxygène', M.AIR_NORMAL.o2, 21);
v('la bougie y brûle', M.bougie(21).brule, true);
v('l’eau de chaux y reste limpide', M.eauDeChaux(M.AIR_NORMAL.co2).positif, false);

titre('Un être vivant modifie l’air du bocal');
for (const k of M.etresQuiRespirent()) {
  const a = M.airApres(k, 10);
  v(k + ' : le dioxygène baisse', a.o2 < M.AIR_NORMAL.o2, true);
  v(k + ' : le dioxyde de carbone monte', a.co2 > M.AIR_NORMAL.co2, true);
}

titre('Le témoin ne change rien — sans lui, l’expérience ne prouverait rien');
const t = M.airApres('cailloux', 60);
v('dioxygène inchangé', t.o2, 21);
v('dioxyde de carbone inchangé', t.co2, M.AIR_NORMAL.co2);
v('l’eau de chaux reste limpide', M.eauDeChaux(t.co2).positif, false);
v('la bougie brûle encore', M.bougie(t.o2).brule, true);

titre('Les deux tests finissent par répondre');
v('souris 3 min : eau de chaux troublée', M.eauDeChaux(M.airApres('souris', 3).co2).positif, true);
v('souris 12 min : la bougie s’éteint', M.bougie(M.airApres('souris', 12).o2).brule, false);
v('souris 1 min : rien encore', M.eauDeChaux(M.airApres('souris', 1).co2).positif, false);

titre('LE POINT CARDINAL : les végétaux aussi respirent');
for (const k of ['graines', 'feuilles', 'champignon']) {
  v(k + ' : eau de chaux troublée', M.eauDeChaux(M.airApres(k, 5).co2).positif, true);
  v(k + ' : la bougie finit par s’éteindre', M.bougie(M.airApres(k, 22).o2).brule, false);
}

titre('Les quatre modes ont chacun leurs représentants');
for (const m in M.MODES) v(m + ' : au moins un être', M.etresDuMode(m).length >= 1, true);
v('le poisson respire par des branchies', M.ETRES.poisson.mode, 'branchiale');
v('le criquet par des trachées', M.ETRES.criquet.mode, 'tracheenne');
v('le ver de terre par la peau', M.ETRES.verTerre.mode, 'cutanee');

titre('L’unité : ce que toutes les surfaces ont en commun');
const c = M.caracteresCommuns();
v('trois caractères communs', c.length, 3);
v('une paroi fine', c.indexOf('fine') >= 0, true);
v('humide', c.indexOf('humide') >= 0, true);
v('très étendue', c.indexOf('etendue') >= 0, true);
v('l’irrigation N’EST PAS commune : les trachées font exception',
  c.indexOf('irriguee') >= 0, false);
v('mais les trois autres surfaces sont bien irriguées',
  ['pulmonaire', 'branchiale', 'cutanee'].every(k => M.SURFACES[k].caracteres.indexOf('irriguee') >= 0), true);

titre('La borne du programme : aucune idée d’énergie');
const texte = JSON.stringify(M.MODES) + JSON.stringify(M.CARACTERES) + JSON.stringify(M.SURFACES);
v('le mot « énergie » n’apparaît pas', /énergie|energie/i.test(texte), false);
v('ni « combustion »', /combustion/i.test(texte), false);

console.log('\n' + p + ' vérifications passées, ' + e + ' échec(s).');
process.exit(e ? 1 : 0);
