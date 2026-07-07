# Journal des versions

Chaque version est un **tag git** (`vX.Y.Z`) et une **release GitHub** :
https://github.com/edgboy/ike-simulations/releases

Revenir à une version pour la consulter : `git checkout v1.5.0` (puis `git checkout main` pour revenir au présent).

## v2.7.0 — 2026-07-07

⚡ **Circuit électrique v2 : le voltmètre et la loi d'Ohm** (4ᵉ SA1)

- Nouveau composant **voltmètre** (résistance de 1 MΩ, comme les vrais) : se branche
  **en parallèle**, affiche la tension en volts sur son écran — validé par 6 tests
  (lecture exacte, circuit non perturbé, courant traversant ≈ 1 µA)
- 3 nouvelles missions (15 au total) : « Le voltmètre » (avec le diagnostic-clé :
  *branché en série, il bloque tout !*), « La tension se partage » (additivité en série),
  « **La loi d'Ohm** » — mesurer U et I et retrouver R = 10 Ω
- **Panneau 📐 rétroporté au circuit** : dès qu'un voltmètre ou un ampèremètre mesure,
  le panneau affiche U, I, puis le calcul U ÷ I = R et « Loi d'Ohm : U = R × I ✓ »

⚛️ **Molécules en 3D v2 : l'atelier d'assemblage** (demande des testeurs)

- 4 nouvelles missions « Atelier » (14 au total) : lire une formule (H₂O, CO₂, CH₄,
  puis NH₃ mystère) et ajouter EXACTEMENT les bons atomes avec des **jetons colorés** —
  la molécule s'assemble toute seule dès que la composition est exacte ✨
- Panneau objectif en direct (« 2 × hydrogène — tu en as 1 »), bouton ↺ Vider,
  diagnostics de lecture (« le 2 compte les oxygènes, pas les carbones ! »)

## v2.6.0 — 2026-07-05

🔥 **Cinquième simulation : Combustions vives** (6ᵉ SA3, chimie) — la carte « Bientôt » tient sa promesse.

- **Paillasse virtuelle** : bougie, allumette, cloche en verre au volume réglable (1–4 L),
  jauges O₂/CO₂ en direct, tube d'eau de chaux, buée sur la paroi, fumée d'extinction
- **Physique honnête** (9 tests) : la flamme meurt à **15 % d'O₂** (pas 0 !, trait rouge
  sur la jauge), durée de combustion proportionnelle au volume (8 s/L), CO₂ produit =
  O₂ consommé, eau de chaux troublée au-delà du seuil
- **🔺 Triangle du feu suivi en direct** dans le panneau : combustible ✓ / comburant ✓ /
  chaleur ✓ — avec le bilan en mots « cire + dioxygène → dioxyde de carbone + eau »
- **10 missions** : allumage (énergie d'activation), étouffement, volumes comparés,
  seuil des 15 %, test du CO₂, la buée, le bilan, souffler ≠ étouffer, casser le
  triangle, défi « flamme marathon » — avec leçons, diagnostics et lexique (10 termes)
- Message de sécurité : en vrai, le feu n'est pas un jeu

## v2.5.0 — 2026-07-05

Retours utilisateurs (4ᵉ vague — merci Espérain !) :

**Toutes les simulations**
- Croix ✕ sur le panneau de réussite : on comprend qu'on peut le fermer pour admirer
  son montage, puis continuer avec « Suivante ▶ » dans la barre

**Banc d'optique**
- Formules explicitées pour les enfants : chaque lettre est définie avec sa valeur
  (« Ø = diamètre de la balle = 4 cm », « D = distance lampe→écran = 75 cm »…)
- **Cotes de distances** affichées en permanence entre les éléments du banc (la « règle »
  demandée — plus besoin de calculer de tête avec les graduations)
- Repères **2F et 2F′** affichés en gris sur l'axe (+ entrée au lexique) ; graduations
  fines tous les 5 cm
- **Mode paysage obligatoire sur téléphone** : écran d'invitation à tourner l'appareil

**États de la matière**
- Le chauffage **ralentit de moitié sur les paliers** : l'élève a le temps de voir que
  la température ne bouge plus
- Correction physique : en refroidissant, les paliers affichent **SOLIDIFICATION** et
  **LIQUÉFACTION** (on ne parle d'ébullition qu'en chauffant !)
- 💥 **Le piston saute** quand la pression dépasse la limite — et c'est la nouvelle
  mission « Et le couvercle saute ! » (pourquoi le couvercle de la marmite se soulève,
  et à quoi sert la soupape d'une cocotte-minute)

**Molécules en 3D**
- **Vue compacte** ⚪ : deuxième représentation des atomes (tailles relatives réalistes,
  atomes en contact), en plus des boules-bâtonnets — bascule dans l'en-tête
- Noté pour une prochaine version : construire soi-même les molécules (atelier d'assemblage)

## v2.4.0 — 2026-07-04

⚛️ **La 3D arrive + le guide de création est rédigé.** Les simulations 2D restent intactes.

- **Molécules en 3D** (prototype de validation 3D, 4ᵉ SA2/SA4) : six molécules
  (H₂O, O₂, N₂, CO₂, CH₄, NH₃) en modèle boules-bâtonnets — rotation au doigt, pincer
  pour zoomer, toucher un atome pour l'identifier. Le tétraèdre du méthane et la
  pyramide de l'ammoniac, enfin montrables ! 10 missions, socle IKE complet.
- **Three.js r128 embarqué** dans le fichier (0,63 Mo, budget 3D < 1,5 Mo respecté),
  zéro dépendance réseau. **Compteur FPS affiché** dans le panneau infos : chaque
  testeur peut mesurer la fluidité sur son propre appareil.
- Nouveau : `vendor/` (bibliothèques), `outils/embarquer.js` (assemblage template + lib
  → fichier unique), `app.template.html` versionné et lisible.
- 📖 **`docs/guide-creation-simulations.md`** : le guide complet — philosophie,
  charte, anatomie d'une simulation, création pas à pas, moteur de missions,
  conventions françaises, 3D, intégration e-learning, liste de contrôle.

## v2.3.0 — 2026-07-04

🧊 **Troisième simulation : États de la matière** — première simulation de chimie.

- **Enceinte à molécules** : 70 particules aux comportements réels — solide (réseau qui vibre),
  liquide (glissement désordonné), gaz (libre et rapide) — pilotées par un modèle
  énergie/température avec **paliers exacts à 0 °C et 100 °C** (validé par 14 tests)
- **Le palier de température**, concept-clé des évaluations, vécu en direct : on chauffe,
  le thermomètre reste bloqué, le panneau 📐 explique pourquoi
- **Piston et pression** (5ᵉ SA5) : comprimer le gaz ou le chauffer enfermé fait monter P,
  avec zone de danger — sécurité des bouteilles de gaz au soleil
- **12 missions** (6ᵉ SA4, 5ᵉ SA3, 5ᵉ SA5) : de « les molécules existent » au cycle complet
  glace → vapeur → glace, avec mini-leçons, diagnostics, lexique de 13 termes
- Boutons « maintenir pour agir » (🔥/❄️), thermomètre gradué animé, tout le socle IKE
- Accueil : carte États de la matière activée, carte « Combustions vives — bientôt »

## v2.2.0 — 2026-07-04

Retours utilisateurs (3ᵉ vague) :

- **Savourer le succès** (les deux simulations) : à la réussite d'une mission, le panneau attend
  ~2 secondes — l'élève voit d'abord ce qui a déclenché son succès (la lampe qui s'allume,
  l'image nette…) avec un grand toast 🎉. Un bouton « Suivante ▶ » apparaît aussi dans la barre
  de mission, pour ceux qui referment le panneau afin d'admirer leur montage.
- **Optique : mini-leçons** — chaque mission s'ouvre sur 3-4 phrases qui posent le vocabulaire
  et le contexte AVANT de manipuler, pour l'élève qui n'a pas encore fait le cours.
  Le banc est nettoyé des éléments hors mission à chaque changement (moins de confusion).
- **Charte technique assouplie** : plus de contrainte « HTML pur » — la règle devient
  « zéro dépendance réseau à l'exécution et rester léger » (bibliothèques embarquées autorisées,
  budget 3D < 1,5 Mo). La porte est officiellement ouverte au labo 3D.
- Numéro de version unifié : les deux simulations affichent désormais la version du projet.

## v2.1.0 — 2026-07-04

Banc d'optique : **comprendre les termes et les formules**.

- **📐 Panneau « Formule » en direct** : la formule du montage en cours s'affiche avec les
  valeurs réelles de l'élève substituées et le calcul déroulé (ombre, chambre noire, relation
  de conjugaison et grandissement de la lentille). Déplacer un élément recalcule tout sous
  les yeux de l'élève. Masquable avec le bouton 📐, choix mémorisé. Cas particuliers expliqués
  (objet au foyer → pas d'image ; dₒ < f → image virtuelle : la loupe).
- **📖 Lexique** : 15 termes techniques définis en langage collège avec des exemples pris
  dans la simulation (foyers, focale, image réelle/virtuelle, grandissement, mise au point…).
- Nouvelle étape dans la visite guidée présentant le panneau formule et le lexique.

## v2.0.0 — 2026-07-04

🔍 **Deuxième simulation : le Banc d'optique** — le catalogue devient multi-simulations.

- **Banc d'optique virtuel** (fichier autonome ~52 Ko) : lampe, objet lumineux, balle opaque,
  sténopé, lentille convergente et écran, à faire glisser le long d'un banc gradué de 100 cm
- Physique par **tracé de rayons analytique** : ombres (triangles semblables), chambre noire,
  lentille mince (position d'image, grandissement, image virtuelle) et **netteté** selon la
  position de l'écran — formules validées par 12 tests
- **12 missions alignées sur le programme officiel** (voir `docs/programme-sa-pct.md`) :
  propagation rectiligne et ombres (5ᵉ SA4) → chambre noire (4ᵉ SA5-6) → lentilles, projecteur,
  appareil photo, loupe (3ᵉ SA6 « l'optique au service de l'homme »)
- Trois rayons de construction colorés (convention des manuels), foyers F/F' affichés,
  curseurs de réglage (hauteur, diamètre, focale), étiquettes de mesure en cm
- Tout le socle pédagogique éprouvé du circuit : visite guidée, diagnostics, indices,
  coup de pouce, thème sombre, progression sauvegardée
- Page d'accueil : carte Optique activée ; programme PCT archivé dans `docs/`

## v1.8.1 — 2026-07-04

- « ↺ Réinitialiser tout le parcours » relance aussi la **visite guidée** (pensé pour les
  appareils partagés en classe : nouvel élève = parcours à zéro = visite immédiate).
  Rappel : le bouton ❓ permet de revoir la visite à tout moment.

## v1.8.0 — 2026-07-04

Deuxième vague de retours utilisateurs :

- **Diagnostic pédagogique** 🤔 : quand les actions de l'élève ne valident pas l'étape, la simulation
  reconnaît les erreurs classiques et lui explique ce qui bloque — « il y a plus de deux lampes »,
  « tes piles se combattent, inverse l'une des deux », « ton interrupteur coupe tout le circuit »,
  « ton ampèremètre n'est pas dans la boucle »… (12 diagnostics couvrant 6 missions, validés par tests)
- **Écran de mesure de l'ampèremètre** : dessiné au premier plan (jamais recouvert par le circuit)
  et décalé perpendiculairement au fil (jamais superposé au conducteur), quel que soit le sens de pose

## v1.7.0 — 2026-07-04

- **Thème sombre** 🌙 : bouton clair/sombre dans l'en-tête de la simulation, choix mémorisé sur l'appareil.
  Au premier lancement, le thème suit la préférence du téléphone/PC (`prefers-color-scheme`).
  Tout est adapté : interface **et** rendu du circuit (grille, composants, symboles normalisés).
- Page d'accueil : thème sombre automatique selon la préférence du système.

## v1.6.0 — 2026-07-04

Améliorations issues des **premiers retours utilisateurs** :

- **Visite guidée de l'interface** au premier lancement (revisionnable avec le bouton ❓) :
  rôle de chaque zone (missions, palette, grille) et gestes (supprimer, inverser une pile, remplacer un composant)
- **Passage d'étape bien plus visible** : points de progression dans la barre de mission,
  flash vert, message « ✅ Étape N réussie ! » et animation du nouvel objectif
- **Indices mis en avant** : bouton « 💡 Indice » coloré et étiqueté + coup de pouce automatique
  (le bouton pulse et un message s'affiche après 45 s de blocage sur une étape)
- **Missions découpées** : 12 missions plus courtes au lieu de 10 (pile/lampe séparées de l'allumage,
  interrupteur appris en deux temps) — pensé pour les élèves qui découvrent la notion
- **Écran de mesure de l'ampèremètre** façon appareil (fond sombre, chiffres verts) :
  plus de confusion possible avec un fil électrique
- Numéro de version affiché sur l'écran de démarrage et la page d'accueil

## v1.5.0 — 2026-07-04

Première version publiée.

- Simulation **Circuit électrique** : construction sur grille tactile, solveur électrique
  par analyse nodale (série, parallèle, court-circuit, piles opposées…), deux vues (réaliste / symboles normalisés)
- **Parcours pédagogique de 10 missions** avec validation par le montage réel de l'élève,
  outils débloqués progressivement, « À retenir » du programme, mode libre
- Écran de démarrage IKE, page d'accueil catalogue
- Mise en ligne : https://edgboy.github.io/ike-simulations/
