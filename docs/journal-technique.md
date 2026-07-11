# Journal technique

Décisions prises pendant le développement, avec leurs raisons.
Ce document est la matière première du futur **guide de création et d'intégration des simulations**.

---

## Simulation 1 : Circuit électrique (2026-07)

### Décision : un seul fichier HTML, zéro dépendance
- **Choix** : tout le code (HTML + CSS + JS) dans un `index.html`, aucun framework, aucune ressource externe.
- **Pourquoi** : fonctionne en double-cliquant le fichier (`file://`), se distribue par clé USB ou WhatsApp,
  s'intègre dans n'importe quelle plateforme par `<iframe src="...">`. Taille finale ~30 Ko (≈ une photo compressée).
- **À retenir pour le guide** : c'est le contrat de base de toute simulation IKE.

### Décision : grille de placement (et non placement libre)
- **Choix** : les composants se posent sur les arêtes d'une grille de points (un composant = un segment entre deux points voisins).
- **Pourquoi** : sur un écran tactile de téléphone, le placement libre (style PhET desktop) est trop imprécis.
  La grille rend le geste fiable au doigt, simplifie énormément le code (pas de gestion de connexions flottantes)
  et produit des schémas propres, proches de ceux du cahier.
- **Compromis accepté** : moins de liberté visuelle qu'un placement libre. Acceptable au collège.

### Décision : vraie physique par analyse nodale (méthode SPICE simplifiée)
- **Choix** : chaque composant est une conductance entre deux nœuds ; la pile est un équivalent de Norton
  (source de courant `E/r` en parallèle avec `r`). On assemble la matrice des conductances `G`,
  on résout `G·v = i` par élimination de Gauss (pivot partiel), puis `I = (v_a − v_b)/R` par branche.
- **Pourquoi** : les montages en série, en parallèle, les courts-circuits, les piles opposées…
  fonctionnent tous **sans aucun cas particulier dans le code**. Les valeurs affichées par l'ampèremètre sont justes.
- **Astuces numériques** :
  - `G_MIN = 1e-9` ajouté sur la diagonale → pas de matrice singulière quand des morceaux de circuit sont isolés.
  - Fils/interrupteurs/ampèremètres = résistance faible (0,01 Ω) et non nulle → chaque arête a un courant défini
    (utile pour animer le sens du courant), et la matrice reste bien conditionnée.
  - Pile : f.é.m. 4,5 V (pile plate, familière), résistance interne 0,5 Ω → le court-circuit donne ~9 A, détectable et pédagogique.
- **Validation** : 12 scénarios testés dans Node.js contre les valeurs théoriques (voir historique) — tous exacts.

### Décision : Canvas 2D, redessin seulement si nécessaire
- **Choix** : rendu dans un seul `<canvas>`, boucle `requestAnimationFrame` qui ne redessine que si
  quelque chose bouge (courant qui circule, glisser en cours, court-circuit qui clignote).
- **Pourquoi** : économie de batterie et fluidité sur Android bas de gamme. `devicePixelRatio` plafonné à 2.

### Décision : Pointer Events + distinction appui/glisser
- **Choix** : `pointerdown/move/up` (unifie doigt, souris, stylet). Un geste de moins de 9 px = un **appui**
  (ouvrir/fermer un interrupteur, sélectionner) ; plus = un **glisser** (poser un composant).
- **Pourquoi** : un seul code pour tous les appareils cibles. Les cibles tactiles font ≥ 40 px.

### Décision : deux vues, « réaliste » et « symboles normalisés »
- **Choix** : un bouton bascule entre un dessin figuratif (pile verte, ampoule qui brille)
  et les symboles normalisés du programme (pile = deux traits, lampe = cercle-croix).
- **Pourquoi** : l'élève manipule d'abord du concret, puis fait le lien avec le schéma
  tel qu'il est exigé aux évaluations. Coût : quelques fonctions de dessin supplémentaires.

### Conventions françaises
- Virgule décimale (« 0,43 A »), vocabulaire du programme (f.é.m., intensité, court-circuit),
  interface et commentaires du code en français.

### v1.5 — Parcours pédagogique (missions progressives)

**Décision : la validation observe ce que l'élève construit, pas un questionnaire.**
- **Choix** : 10 missions ordonnées (du « premier fil » aux deux piles en série), chacune = liste
  d'étapes avec un **prédicat sur l'état électrique résolu**. Après chaque action (pose, suppression,
  bascule d'interrupteur), le solveur recalcule le circuit puis le moteur de missions vérifie l'étape en cours.
- **Pourquoi** : pas de QCM plaqué — c'est le montage réel qui valide. Impossible de « deviner la bonne
  réponse » sans construire. Les étapes multi-phases (« ferme l'interrupteur… maintenant ouvre-le »)
  s'enchaînent naturellement car vérifiées dans l'ordre.
- **Discrimination série/parallèle sans analyse topologique** : on compare les intensités.
  En série, chaque lampe porte le courant de la pile (`|I_lampe| ≈ |I_pile|`) ; en parallèle,
  la pile débite la somme (`|I_pile| ≥ 1,5 × max|I_lampe|`). Règles validées par 9 scénarios Node
  (série/parallèle/piles opposées/piles en parallèle) — aucune confusion possible.
- **Déblocage progressif des outils** : mission 1 = fil seul ; la pile et la lampe arrivent à la mission 2 ;
  l'ampèremètre à la 4. Réduit la surcharge cognitive du débutant (principe des « gammes » PhET).
- **À la réussite** : panneau « À retenir » (la notion du programme, en 2-3 phrases), puis mission suivante.
  Le montage n'est **pas effacé** entre les missions : l'élève enrichit son circuit (continuité pédagogique).
- **Progression persistée** dans `localStorage` (missions faites, mission courante) ; bouton de
  réinitialisation pour les appareils partagés en classe. **Mode libre** (bac à sable) accessible à tout moment.

Séquence : 1 fil → 2 circuit fermé → 3 interrupteur → 4 ampèremètre (série) → 5 unicité de l'intensité
→ 6 série (éclat réduit) → 7 parallèle (dérivation) → 8 indépendance des branches → 9 court-circuit (sécurité)
→ 10 piles en série (tensions qui s'additionnent).

### v1.6 — Premiers retours utilisateurs (2026-07)

Retours reçus → réponses apportées :
| Retour | Réponse |
|---|---|
| « Il faut une présentation de l'interface au début » | **Visite guidée** avec projecteur (halo) zone par zone, au premier lancement + bouton ❓ |
| « Comment supprimer / inverser / remplacer ? » | Carte « Modifier ton circuit » dans la visite (gestes illustrés) |
| « Le passage d'étape n'est pas assez visible » | Points de progression ●●○, flash vert de la barre, toast « Étape N réussie », animation du nouvel objectif |
| « Rendre visibles les astuces / le guide » | Bouton « 💡 Indice » coloré + **coup de pouce automatique** : après 45 s sans progrès, le bouton pulse et un message invite à l'utiliser |
| « Découper les missions pour les débutants » | 10 → **12 missions** : pile/lampe séparées de l'allumage, interrupteur en deux temps ; clé de sauvegarde changée (`-v2`) |
| « La mesure de l'ampèremètre se confond avec un fil » | **Écran de mesure façon appareil** : cadre sombre arrondi, chiffres verts style afficheur digital |
| « La configuration quadratique est top » ✅ | La grille est confirmée comme bon choix — conservée |

Leçon pour le guide : la **détection de blocage** (timer d'étape) et la **visite guidée par projecteur**
sont des mécaniques réutilisables dans toutes les futures simulations.

### Pistes pour la v2 (notées, non faites)
- Voltmètre (se branche en parallèle → interaction à concevoir : appui long sur deux nœuds ?)
- Résistance variable (potentiomètre) ; sauvegarde/chargement d'un montage (JSON dans l'URL ou localStorage)
- API `postMessage` vers la plateforme hôte : événements `mission-reussie`, `mesure-effectuee` (traçabilité)
- Sons de célébration optionnels ; défis chronométrés ; mode enseignant (voir la progression de la classe)

---

## Simulation 2 : Banc d'optique (2026-07, v2.0.0)

### Décision : un banc continu (et non une grille)
- **Choix** : les éléments glissent librement le long d'un banc gradué de 0 à 100 cm
  (position arrondie au demi-cm) ; un seul élément par famille (source / central / récepteur).
- **Pourquoi** : l'optique est une physique de **distances continues** — la grille du circuit
  n'a pas de sens ici. La règle « une seule famille à la fois » reflète le vrai banc d'optique
  du laboratoire et garde la physique lisible. Le modèle d'interaction change, mais tout le
  **socle pédagogique est identique** (voir ci-dessous).
- **Réglages** : l'élément sélectionné affiche un curseur (hauteur de l'objet, diamètre de la
  balle, focale de la lentille) — le geste « sélectionner → régler » remplace « inverser » du circuit.

### Décision : physique analytique (pas de moteur générique)
- Ombre : triangles semblables depuis la source ponctuelle. Sténopé : chaque rayon passe
  en ligne droite par le trou. Lentille mince : `di = f·do/(do−f)`, grandissement `m = −di/do` ;
  image virtuelle si `do < f`. **Netteté** : rayon de flou = ouverture × |écart écran-image| / distance image-lentille.
- **Pourquoi** : trois configurations exactes suffisent au programme du collège ; les formules
  sont celles des manuels, donc les valeurs affichées sont irréprochables. 12 tests Node valident tout.
- Les trois **rayons de construction** (parallèle→F', centre, F→parallèle) sont colorés selon
  la convention des manuels — l'élève retrouve exactement la figure du cours.

### Le socle commun émerge (→ futur guide)
Réutilisés à l'identique du circuit, sans modification de logique : écran de démarrage,
moteur de missions (étapes-prédicats, diagnostics, indices, coup de pouce 45 s), visite guidée
par projecteur, thème clair/sombre (clé partagée `ike-theme`), toasts, persistance localStorage.
**C'est la « recette IKE »** : seuls changent le modèle physique, le rendu et le geste d'interaction.

### Alignement programme
Missions 1-4 : 5ᵉ SA4 (propagation rectiligne, ombres) · missions 5-6 : 4ᵉ SA5-6 (chambre noire)
· missions 7-12 : 3ᵉ SA6 (lentilles : mise au point, projecteur, appareil photo/œil, loupe).
Référence : `docs/programme-sa-pct.md`.

---

## Simulation 3 : États de la matière (2026-07, v2.3.0)

### Décision : un modèle énergie → température (et non température directe)
- **Choix** : les boutons chauffer/refroidir font varier une **énergie E** ; la température
  est déduite par une courbe T(E) en 5 segments, dont deux **plats** (fusion à 0 °C,
  ébullition à 100 °C). Les fractions fondue/vaporisée sortent du même modèle.
- **Pourquoi** : le palier de température — LE concept évalué au collège — émerge
  naturellement : l'élève chauffe, le thermomètre ne bouge pas. Impossible à obtenir
  avec un modèle « température directe ». 14 tests Node valident la courbe.
- **Particules** : 70 molécules, 3 comportements (réseau vibrant / glissement désordonné /
  vol libre avec rebonds), assignées par les fractions du modèle → la transition est visible
  molécule par molécule. Pression du gaz : `P ∝ (T+273)/V`, zone de danger colorée.

### Décision : interaction « maintenir pour agir »
- Les boutons 🔥/❄️ agissent tant qu'on les maintient (pointerdown/up) — geste continu qui
  matérialise l'apport d'énergie dans la durée, condition pour VIVRE le palier.
  Troisième modèle d'interaction du catalogue (grille / glisser sur banc / maintenir).

### Le socle IKE tient sa troisième validation
Missions-prédicats (avec compteurs temporels : « chauffer pendant le palier ≥ 2,5 s »),
mini-leçons, diagnostics, visite, formules en direct, lexique, thèmes — repris sans
modification de logique. La « recette » est prête pour le guide.

---

## Simulation 4 : Molécules en 3D — prototype 3D (2026-07, v2.4.0)

### Décision : valider la 3D sur un sujet qui l'EXIGE
- **Choix** : modèles moléculaires boules-bâtonnets (4ᵉ SA2/SA4) plutôt qu'un labo 3D décoratif.
- **Pourquoi** : le tétraèdre du méthane est indémontrable en 2D — la 3D y est une nécessité
  pédagogique, pas un gadget. Et la scène (≤ 10 sphères + cylindres) est assez légère pour
  les Android d'entrée de gamme.
- **Instrumentation** : compteur d'images/seconde affiché dans le panneau infos → chaque
  testeur du terrain mesure la fluidité réelle. C'est le critère de décision pour les
  futurs labos 3D plus ambitieux.

### Décision : Three.js embarqué via un assemblage
- `vendor/three-r128.min.js` (~590 Ko, build UMD classique) + `app.template.html` lisible
  avec marqueur `/*__THREE_JS_ICI__*/` → `node outils/embarquer.js` produit le fichier
  unique (0,63 Mo < budget 1,5 Mo). Le template reste versionné et lisible ; le fichier
  final respecte la charte (autonome, hors-ligne).
- Rendu : `alpha:true` (le fond suit le thème CSS), `pixelRatio` ≤ 2, matériaux Phong,
  géométries en cache. Gestes : 1 doigt = rotation, 2 doigts = zoom, toucher = Raycaster.
- **Le socle IKE fonctionne tel quel en 3D** : missions-prédicats sur des compteurs
  (rotation cumulée, atomes touchés, séquence de molécules vues), leçons, diagnostics,
  visite, thèmes. Quatrième validation du socle, premier changement de moteur de rendu.

### Le guide est publié
`docs/guide-creation-simulations.md` — rédigé à partir des quatre simulations.
Le journal reste le « pourquoi », le guide est le « comment ».

---

## Simulation 6 : Transformations du plan — première simulation de maths (2026-07, v2.8.0)

### Décision : viser la SA présente dans les 4 classes
- « Applications du plan » existe en 6ᵉ, 5ᵉ, 4ᵉ **et** 3ᵉ (voir `programme-cursus.md`) : une seule
  simulation sert tout le collège. Meilleur effet de levier du catalogue.

### Décision : c'est l'ÉLÉMENT qu'on manipule, pas la figure
- **Choix** : la figure de départ est fixe ; l'élève fait glisser **l'axe, le centre ou le vecteur**,
  et l'image se recalcule à chaque image.
- **Pourquoi** : en géométrie, la difficulté n'est pas de bouger une figure, c'est de comprendre
  **de quoi dépend l'image**. En manipulant l'élément caractéristique, l'élève éprouve directement
  le rôle de l'axe/du centre/du vecteur. Les **traits de construction** (pointillés, codage des
  distances, arcs) sont dessinés en permanence : ce sont exactement ceux du cahier.
- **Le panneau 📐 fait la démonstration** : longueurs conservées, aires conservées, sens
  conservé/inversé — recalculés à chaque geste. Le théorème devient une observation.

### Ce que la première simulation de maths apprend au socle
Le socle IKE fonctionne **hors sciences expérimentales** sans modification : missions-prédicats
(ici : « le centre est en (2;2) », « 3 axes différents essayés », « l'image de A est en (14;8) »),
leçons, diagnostics, visite, thèmes. Sixième validation, deuxième discipline.
Les fonctions du modèle sont ici purement mathématiques (symétries, rotation, aire signée) — donc
particulièrement faciles à tester : 22 tests Node, dont l'orientation et la composition de symétries.

---

## Intégration plateforme (à compléter quand la plateforme sera choisie)

Options gardées ouvertes par le format « un fichier autonome » :
1. **Iframe simple** : `<iframe src="simulations/circuit-electrique/index.html">` — marche partout, zéro travail.
2. **Iframe + postMessage** : la simulation émet des événements (score, actions) que la plateforme écoute — traçabilité.
3. **SCORM / H5P** (si Moodle) : envelopper le HTML dans un paquet SCORM ; le fichier unique rend l'emballage trivial.
4. **PWA hors-ligne** : un service worker au niveau de la plateforme met en cache les simulations déjà visitées.
