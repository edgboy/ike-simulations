/* Teste le modèle EXTRAIT DE LA SIMULATION LIVRÉE, entre ses deux marqueurs.

   Lancer :  node simulations/regimes-alimentaires/test-modele.js
   Le point cardinal : les OUTILS suffisent à annoncer le régime. Si ce n'est
   pas vrai dans le modèle, la simulation enseignerait un raisonnement faux. */
const vm = require('vm'), fs = require('fs'), path = require('path');
const src = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const d = src.indexOf('/*__DEBUT MODELE__*/'), f = src.indexOf('/*__FIN MODELE__*/');
const M = {};
vm.runInNewContext(src.slice(d, f) +
  ';Object.assign(sortie,{OUTILS,ANIMAUX,REGIMES,deduireRegime,indicesDe,convient,assortimentValide,animauxDuRegime});',
  { sortie:M, Math, console });

let p = 0, e = 0;
const v = (n, r, a) => { const ok = typeof a === 'boolean' ? r === a : r === a;
  if (ok) p++; else { e++; console.log('  ECHEC ' + n + ' : attendu ' + a + ', obtenu ' + r); } };
const titre = t => console.log('\n— ' + t);

titre('Chaque animal a des outils connus et un régime connu');
for (const a in M.ANIMAUX) {
  const an = M.ANIMAUX[a];
  v(a + ' : régime déclaré valide', !!M.REGIMES[an.regime], true);
  v(a + ' : outils tous définis', an.outils.every(c => !!M.OUTILS[c]), true);
  v(a + ' : au moins un indice', M.indicesDe(a).length > 0, true);
}

titre('LE POINT CARDINAL : les outils annoncent le régime, pour TOUS les animaux');
for (const a in M.ANIMAUX) {
  const r = M.deduireRegime(M.ANIMAUX[a].outils, a);
  v(a + ' → ' + M.ANIMAUX[a].regime, r.regime, M.ANIMAUX[a].regime);
}

titre('Le cas de l’abeille : deux indices contraires, tranchés par l’outil principal');
v('sans l’animal, l’abeille est ambiguë',
  M.deduireRegime(M.ANIMAUX.abeille.outils).regime, null);
v('avec l’animal, la trompe l’emporte',
  M.deduireRegime(M.ANIMAUX.abeille.outils, 'abeille').regime, 'liquides');

titre('Une pièce que tout le monde a ne conclut à rien');
v('les incisives ne sont l’indice d’aucun régime', M.OUTILS.incisive.signe, null);
v('les incisives seules ne concluent pas', M.deduireRegime(['incisive']).regime, null);
v('mais elles conviennent à un zoophage', M.convient('incisive', 'zoophage'), true);
v('et aussi à un phytophage', M.convient('incisive', 'phytophage'), true);

titre('L’adaptation : quel outil pour quel régime');
v('les carnassières ne conviennent pas à un phytophage', M.convient('carnassiere', 'phytophage'), false);
v('les molaires plates ne conviennent pas à un zoophage', M.convient('molaire', 'zoophage'), false);
v('le diastème convient à un phytophage', M.convient('diasteme', 'phytophage'), true);
v('la trompe ne convient pas à un zoophage', M.convient('trompe', 'zoophage'), false);

titre('Assortiments cohérents');
let A = M.assortimentValide(['incisive', 'canine', 'carnassiere'], 'zoophage');
v('lion : cohérent', A.coherent, true);
v('lion : suffisant', A.suffisant, true);
A = M.assortimentValide(['incisive', 'diasteme', 'molaire'], 'phytophage');
v('mouton : valide', A.ok, true);
A = M.assortimentValide(['incisive'], 'phytophage');
v('incisives seules : cohérent mais insuffisant', A.coherent && !A.suffisant, true);
A = M.assortimentValide(['canine', 'molaire'], 'phytophage');
v('canines + molaires : incohérent', A.coherent, false);

titre('Les trois régimes sont représentés');
for (const r in M.REGIMES)
  v(r + ' : au moins trois animaux', M.animauxDuRegime(r).length >= 3, true);

console.log('\n' + p + ' vérifications passées, ' + e + ' échec(s).');
process.exit(e ? 1 : 0);
