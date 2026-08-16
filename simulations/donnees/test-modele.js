/* Teste le modèle EXTRAIT DE LA SIMULATION LIVRÉE, contre les données du guide.

   Lancer :  node simulations/donnees/test-modele.js          */
const vm = require('vm'), fs = require('fs'), path = require('path');
const src = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const d = src.indexOf('/*__DEBUT MODELE__*/'), f = src.indexOf('/*__FIN MODELE__*/');
const M = {};
vm.runInNewContext(src.slice(d, f) +
  ';Object.assign(sortie,{MARQUES,RELEVE,CARACTERES,effectifs,effectifTotal,frequence,angleSemi,moyenne,moyenneLitres,tableau,coefficient,estProportionnel,PRIX_LITRE,prixDe,prendrePourcent,appliquerEchelle,echelleDe});',
  { sortie:M, Math, Object, String, parseInt, console });
let p = 0, e = 0;
const v = (n, r, a, tol) => { const ok = typeof a === 'number'
  ? Math.abs(r - a) <= (tol === undefined ? 1e-9 : tol) : r === a;
  if (ok) p++; else { e++; console.log('  ECHEC ' + n + ' : attendu ' + a + ', obtenu ' + r); } };
const titre = t => console.log('\n— ' + t);

titre('Le relevé du guide, tel qu’il est');
v('78 opérations', M.RELEVE.length, 78);
v('sept marques', Object.keys(M.MARQUES).length, 7);
v('toutes les marques du relevé sont connues',
  M.RELEVE.every(o => !!M.MARQUES[o.marque]), true);
v('tous les litres sont des nombres',
  M.RELEVE.every(o => Number.isFinite(o.litres) && o.litres > 0), true);
v('la première opération est R20',
  M.RELEVE[0].marque === 'R' && M.RELEVE[0].litres === 20, true);
v('la dernière est T30',
  M.RELEVE[77].marque === 'T' && M.RELEVE[77].litres === 30, true);

titre('Les effectifs');
const n = M.effectifs(M.RELEVE, 'marque');
v('Audi 17', n.A, 17); v('Toyota 15', n.T, 15); v('Mercedes 13', n.M, 13);
v('Opel 11', n.O, 11); v('Peugeot 9', n.P, 9); v('Renault 7', n.R, 7);
v('Volkswagen 6', n.V, 6);
v('la somme des effectifs fait l’effectif total',
  Object.keys(n).reduce((s, k) => s + n[k], 0), 78);

titre('Fréquences et angles du diagramme SEMI-circulaire');
v('fréquence d’Audi', M.frequence(17, 78).part, 17 / 78);
v('Audi en pourcentage', M.frequence(17, 78).pourcent, 17 / 78 * 100, 1e-9);
v('la somme des fréquences fait 1',
  Object.keys(n).reduce((s, k) => s + M.frequence(n[k], 78).part, 0), 1, 1e-12);
v('Mercedes tombe pile sur 30°', M.angleSemi(13, 78), 30, 1e-12);
v('la somme des angles fait 180 et non 360',
  Object.keys(n).reduce((s, k) => s + M.angleSemi(n[k], 78), 0), 180, 1e-12);

titre('La moyenne');
v('moyenne générale', M.moyenneLitres(M.RELEVE), 2170 / 78, 1e-12);
v('soit environ 27,8 litres', Math.round(M.moyenneLitres(M.RELEVE) * 10) / 10, 27.8);
v('total des litres',
  M.RELEVE.reduce((s, o) => s + o.litres, 0), 2170);

titre('Le tableau statistique');
const T = M.tableau(M.RELEVE);
v('sept lignes', T.length, 7);
v('rangé du plus grand effectif au plus petit',
  T.every((l, i) => i === 0 || T[i - 1].effectif >= l.effectif), true);
v('Audi en tête', T[0].cle, 'A');
v('Volkswagen en queue', T[6].cle, 'V');
v('les litres d’Opel', T.find(l => l.cle === 'O').litres, 395);

titre('Caractère qualitatif ou quantitatif');
v('la marque est qualitative', M.CARACTERES.marque.type, 'qualitatif');
v('les litres sont quantitatifs', M.CARACTERES.litres.type, 'quantitatif');

titre('Proportionnalité');
v('litres → prix est proportionnel',
  M.estProportionnel([[10, 7000], [20, 14000], [45, 31500]]), true);
v('le coefficient est le prix du litre',
  M.coefficient([[10, 7000], [20, 14000]]), M.PRIX_LITRE);
v('un tableau qui ne l’est pas',
  M.estProportionnel([[10, 7000], [20, 15000]]), false);
v('prix de 40 litres', M.prixDe(40), 28000);
v('prix de toute la journée', M.prixDe(2170), 1519000);

titre('Pourcentage et échelle, comme opérateurs');
v('25 % de 2170', M.prendrePourcent(25, 2170), 542.5);
v('prendre 100 % ne change rien', M.prendrePourcent(100, 78), 78);
v('à l’échelle 1/200, 6 m deviennent 3 cm',
  M.appliquerEchelle(1 / 200, 600), 3, 1e-12);
v('l’échelle d’un plan de 3 cm pour 6 m',
  M.echelleDe(3, 600), 1 / 200, 1e-12);

console.log('\n' + p + ' vérifications passées, ' + e + ' échec(s).');
process.exit(e ? 1 : 0);
