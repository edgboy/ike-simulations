/* Teste le modèle géométrique EXTRAIT DE LA SIMULATION LIVRÉE, entre ses deux
   marqueurs /*__DEBUT MODELE__*''/ et /*__FIN MODELE__*''/. Le modèle testé est
   donc exactement celui qui tourne en classe : il ne peut pas diverger d'une
   copie de travail restée sur un coin de bureau.

   Lancer :  node simulations/triangles/test-modele.js          */
const fs = require('fs'), vm = require('vm');
const F = require('path').join(__dirname, 'index.html');
const src = fs.readFileSync(F, 'utf8');
const d = src.indexOf('/*__DEBUT MODELE__*/'), f = src.indexOf('/*__FIN MODELE__*/');
if (d < 0 || f < 0) { console.error('Marqueurs de modèle introuvables.'); process.exit(1); }
const G = {};
vm.runInNewContext(src.slice(d, f) + '\n;Object.assign(sortie, { dist, angle, estRectangleEn,' +
  ' sommetDroit, pythagore, reciproquePythagore, projete, relationsMetriques, abscisse,' +
  ' paralleles, thales, semblables, trigo, hauteurParOmbre });',
  { sortie:G, Math, console });

let passes = 0, echecs = 0;
const P = (x, y) => ({ x, y });
function verifie(nom, reel, attendu, tol = 1e-9) {
  const ok = typeof attendu === 'boolean' ? reel === attendu : Math.abs(reel - attendu) <= tol;
  if (ok) passes++;
  else { echecs++; console.log('  ECHEC ' + nom + ' : attendu ' + attendu + ', obtenu ' + reel); }
}
const titre = t => console.log('\n— ' + t);

titre('Longueurs et angles');
verifie('distance 3-4-5', G.dist(P(0, 0), P(3, 4)), 5);
verifie('angle droit', G.angle(P(1, 0), P(0, 0), P(0, 1)), 90);
verifie('angle du triangle équilatéral', G.angle(P(0, 0), P(1, 0), P(.5, Math.sqrt(3) / 2)), 60);

titre('Propriété de Pythagore');
const p345 = G.pythagore(P(0, 0), P(3, 0), P(0, 4));
verifie('BC = 5', p345.bc, 5);
verifie('3² + 4² = 25', p345.somme, 25);
verifie('écart nul', p345.ecart, 0);
verifie('sommet droit = A', G.sommetDroit(P(0, 0), P(3, 0), P(0, 4)) === 'A', true);
verifie('réciproque sur 3-4-5', G.reciproquePythagore(P(0, 0), P(3, 0), P(0, 4)), true);
verifie('réciproque sur 5-12-13', G.reciproquePythagore(P(0, 0), P(5, 0), P(0, 12)), true);
const cx = (36 + 121 - 64) / 12, C6811 = P(cx, Math.sqrt(121 - cx * cx));
verifie('le triangle construit a bien BC = 8', G.dist(P(6, 0), C6811), 8, 1e-12);
verifie('6-8-11 non rectangle', G.reciproquePythagore(P(0, 0), P(6, 0), C6811), false);
verifie('diagonale du carré de côté 1 = √2', G.dist(P(0, 0), P(1, 1)), Math.SQRT2, 1e-12);

titre('Relations métriques du triangle rectangle');
const rm = G.relationsMetriques(P(0, 0), P(3, 0), P(0, 4));
verifie('AH = 2,4', rm.ah, 2.4);
verifie('BH = 1,8', rm.bh, 1.8);
verifie('HC = 3,2', rm.ch, 3.2);
verifie('BH + HC = BC', rm.bh + rm.ch, rm.bc);
verifie('AB·AC = AH·BC', rm.produit.gauche, rm.produit.droite);
verifie('AH² = BH·HC', rm.moyenne.gauche, rm.moyenne.droite);
verifie('AH² = 5,76', rm.moyenne.gauche, 5.76);
verifie('AB² = BH·BC', rm.projection.gauche, rm.projection.droite);

titre('Propriété de Thalès et sa réciproque');
const A = P(0, 0), B = P(8, 0), C = P(2, 6);
let th = G.thales(A, B, C, P(4, 0), P(1, 3));
verifie('AM/AB = 1/2', th.rapportM, .5, 1e-12);
verifie('rapports égaux', th.rapportsEgaux, true);
verifie('même position', th.memePosition, true);
verifie('(MN) ∥ (BC)', th.paralleles, true);
verifie('MN = BC/2', th.mn, th.bc / 2, 1e-12);
th = G.thales(A, B, C, P(4, 0), P(1.4, 4.2));
verifie('rapports inégaux', th.rapportsEgaux, false);
verifie('non parallèles', th.paralleles, false);
// LE PIÈGE du guide : N de l'autre côté de A
th = G.thales(A, B, C, P(4, 0), P(-1, -3));
verifie('piège : rapports de longueurs égaux', th.rapportsEgaux, true);
verifie('piège : positions opposées', th.memePosition, false);
verifie('piège : droites NON parallèles', th.paralleles, false);
th = G.thales(A, B, C, P(-4, 0), P(-1, -3));
verifie('symétrique complet : parallèles', th.paralleles, true);

titre('Triangles semblables');
let s = G.semblables([P(0, 0), P(3, 0), P(0, 4)], [P(0, 0), P(6, 0), P(0, 8)]);
verifie('semblables', s.ok, true);
verifie('rapport de similitude = 2', s.rapport, 2, 1e-12);
verifie('non semblables', G.semblables([P(0, 0), P(3, 0), P(0, 4)], [P(0, 0), P(6, 0), P(0, 7)]).ok, false);

titre('Trigonométrie');
let tr = G.trigo(P(0, 0), P(1, 0), P(0, Math.sqrt(3)));
verifie('mesure = 60°', tr.mesure, 60);
verifie('cos 60° = 0,5', tr.cos, .5, 1e-12);
verifie('sin 60° = √3/2', tr.sin, Math.sqrt(3) / 2, 1e-12);
tr = G.trigo(P(0, 0), P(1, 0), P(0, 1));
verifie('mesure = 45°', tr.mesure, 45);
verifie('cos 45° = √2/2', tr.cos, Math.SQRT2 / 2, 1e-12);
tr = G.trigo(P(0, 0), P(Math.sqrt(3), 0), P(0, 1));
verifie('mesure = 30°', tr.mesure, 30);
verifie('cos 30° = √3/2', tr.cos, Math.sqrt(3) / 2, 1e-12);
verifie('cosinus indépendant de la taille',
  G.trigo(P(0, 0), P(2, 0), P(0, 2)).cos, G.trigo(P(0, 0), P(9, 0), P(0, 9)).cos, 1e-12);

titre("La hauteur de l'obélisque");
verifie('bâton 1,5 m, ombres 2 et 12 → 9 m', G.hauteurParOmbre(1.5, 2, 12), 9, 1e-12);
verifie('même hauteur avec un autre bâton', G.hauteurParOmbre(3, 4, 12), 9, 1e-12);
verifie('poteau 2 m, ombres 3 et 12 → 8 m', G.hauteurParOmbre(2, 3, 12), 8, 1e-12);

console.log('\n' + passes + ' vérifications passées, ' + echecs + ' échec(s).');
process.exit(echecs ? 1 : 0);
