/* Teste le modèle nutritionnel EXTRAIT DE LA SIMULATION LIVRÉE, entre ses deux
   marqueurs. Le modèle testé est donc exactement celui qui tourne en classe :
   il ne peut pas diverger d'une copie de travail.

   Lancer :  node simulations/alimentation/test-modele.js          */
const vm = require('vm'), fs = require('fs'), path = require('path');
const src = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const d = src.indexOf('/*__DEBUT MODELE__*/'), f = src.indexOf('/*__FIN MODELE__*/');
const M = {};
vm.runInNewContext(src.slice(d, f) + ';Object.assign(sortie,{ALIMENTS,TESTS,reaction,BESOINS,apports,diagnostic,ETAPES_DIGESTION,avancement,usureDent,PARTIES_DENT});',
  { sortie:M, Math, console });
let p = 0, e = 0;
const v = (n, r, a) => { const ok = typeof a === 'boolean' ? r === a : Math.abs(r - a) < 1e-9;
  if (ok) p++; else { e++; console.log('  ECHEC ' + n + ' : attendu ' + a + ', obtenu ' + r); } };
const titre = t => console.log('\n— ' + t);

titre('Les tests de la paillasse');
v('igname + eau iodée → positif', M.reaction('igname', 'iode', false).positif, true);
v('poisson + eau iodée → négatif', M.reaction('poisson', 'iode', false).positif, false);
v('sucre + réactif des sucres à froid → négatif', M.reaction('sucre', 'fehling', false).positif, false);
v('sucre + réactif des sucres à froid → il manque la chaleur', M.reaction('sucre', 'fehling', false).manqueChaleur, true);
v('sucre + réactif des sucres à chaud → positif', M.reaction('sucre', 'fehling', true).positif, true);
v('poisson + acide nitrique → positif', M.reaction('poisson', 'nitrique', false).positif, true);
v('igname + acide nitrique → négatif', M.reaction('igname', 'nitrique', false).positif, false);
v('arachide + papier → positif', M.reaction('arachide', 'papier', false).positif, true);
v('riz + papier → négatif', M.reaction('riz', 'papier', false).positif, false);
v('arachide + acide nitrique → positif aussi', M.reaction('arachide', 'nitrique', false).positif, true);

titre('Les apports d’un repas');
const r1 = M.apports({ riz:2, poisson:1, feuilles:1, huile:.2 });
v('énergie du repas', Math.round(r1.energie), Math.round(130 * 2 + 105 + 30 + 884 * .2));
v('protéines du repas', Math.round(r1.proteines), Math.round(3 * 2 + 22 + 3));

titre('Les manques que le guide nomme');
v('gari seul et abondant → kwashiorkor',
  M.diagnostic({ gari:5, huile:.5 }).cle === 'kwashiorkor', true);
v('presque rien → marasme', M.diagnostic({ riz:1 }).cle === 'marasme', true);
v('repas complet → équilibre',
  M.diagnostic({ riz:8, poisson:2, niebe:2, feuilles:2, mangue:1, huile:.5 }).cle === 'equilibre', true);
v('sans fruit ni légume → protecteurs',
  M.diagnostic({ riz:8, poisson:3, huile:.5 }).cle === 'protecteurs', true);

titre('La digestion');
v('cinq étapes', M.ETAPES_DIGESTION.length, 5);
v('rien n’est absorbé dans l’estomac', M.avancement(2).danssang, false);
v('l’intestin grêle fait passer dans le sang', M.avancement(3).danssang, true);
v('solubilisation complète à l’intestin', M.avancement(3).solubilise, 1);
v('la bouche ne solubilise qu’un peu', M.avancement(0).solubilise < .3, true);

titre('La dent');
v('quatre parties', M.PARTIES_DENT.length, 4);
v('brossée, sans sucre : saine à 30 jours', M.usureDent(30, true, false).etat === 'saine', true);
v('non brossée, sucre entre les repas : abîmée à 30 jours',
  M.usureDent(30, false, true).degat > .45, true);
v('le brossage protège', M.usureDent(30, true, true).degat < M.usureDent(30, false, true).degat, true);

console.log('\n' + p + ' vérifications passées, ' + e + ' échec(s).');
process.exit(e ? 1 : 0);
