# Journal des versions

Chaque version est un **tag git** (`vX.Y.Z`) et une **release GitHub** :
https://github.com/edgboy/ike-simulations/releases

Revenir à une version pour la consulter : `git checkout v1.5.0` (puis `git checkout main` pour revenir au présent).

## v3.4.0 — 2026-07-18

🔍 **Retours testeurs — circuit (6ᵉ vague) et prototype 3D (2ᵉ vague)** :

Circuit électrique :
- **Zoom et déplacement du plan de travail** : boutons + / − / ⟲ à l'écran et geste de
  pincement à deux doigts (zoomer + faire glisser) — on peut désormais écarter le circuit
  du panneau de calculs qui le cachait
- **Bouton « 🗑 Vider »** clairement nommé sur le plan de travail
- **Fiche notion de synthèse série / dérivation** (mission finale) : tableau récapitulatif
  des lois de la tension et de l'intensité dans les deux montages

Prototype 3D glisser-déposer + atelier de molécules :
- **Forme canonique immédiate** : dès qu'une liaison est créée ou modifiée, une rafale de
  relaxation amène la molécule à sa géométrie de nomenclature internationale — CO₂ devient
  bien **linéaire** (validé ≥ 176° par test), CH₄ tétraédrique, sans attente
- **Appui long sur un atome → la molécule se dissocie** (toutes ses liaisons cassent) ;
  le glisser vers le bac (suppression) reste et est annoncé dans le guide dès le départ
- **Bac à atomes en bulles rondes colorées** avec le nom de l'atome, façon perles de
  chimie — fini les tuiles carrées chargées de texte

## v3.3.0 — 2026-07-18

🎨 **Retours testeurs sur le circuit nouvelle génération** (5ᵉ vague) :

- **Bouton « Continuer → » qui pulse** : animation d'appel doux pour rediriger l'attention
  de l'élève vers la poursuite de la mission (moins d'exploration hors sujet)
- **QCM : icônes ✔️ / ❌** ajoutées aux couleurs — des repères universels pour des élèves
  moins habitués aux conventions du numérique (aussi appliqué à l'atelier de molécules)
- **Langage accessible + analogies concrètes** dans les fiches notion et les explications :
  l'interrupteur ouvert = « couper le chemin avec des ciseaux ✂️ », l'intensité = « le débit
  d'eau dans un tuyau », la tension = « la poussée du château d'eau », série = « la file
  indienne », dérivation = « deux routes séparées », court-circuit = « le raccourci interdit »
- **Diagnostics « pourquoi ça ne marche pas »** étendus : boucle incomplète (« suis le circuit
  avec ton doigt, tu trouveras le trou ! »), interrupteur posé à côté du circuit
- **Mission « Double énergie » vécue** : l'élève doit maintenant INVERSER une pile
  (tout s'éteint — les tensions s'annulent) puis la remettre dans le bon sens — la notion
  n'est plus racontée, elle est expérimentée

## v3.2.1 — 2026-07-18

🔗 **Correctif liaisons covalentes** (atelier + prototype) — retour testeur : sur N₂, après la
liaison double, les atomes se collaient au point de rendre la liaison incliquable (triple impossible).

- **Cause** : les longueurs de liaison du modèle (facteurs 1,5/1,35/1,25) étaient inférieures ou
  égales à la somme des rayons dessinés — les sphères avalaient le bâtonnet
- **Correction** : nouvelles longueurs (2,0/1,85/1,75) garantissant un **espace visible entre les
  sphères pour tous les ordres** de liaison (N≡N compris), la triple restant plus courte que la
  double comme en vraie chimie — angles VSEPR revalidés par tests (CH₄ à 109,47°)
- **Cible de clic élargie** : chaque liaison porte un cylindre invisible 4× plus large que le
  bâtonnet — toucher une liaison au doigt devient fiable même sur petit écran
- Bâtonnets légèrement épaissis (rayon 0,085 → 0,1)

## v3.2.0 — 2026-07-18

⚡ **Le circuit électrique migre vers la structure Labo-Bénin** (1ʳᵉ des 6 migrations)
et 🧲 **prototype R&D : l'assemblage par glisser-déposer en 3D**.

**Circuit électrique — nouvelle génération pédagogique**
- **Fiche notion** avant chaque mission : la notion en 2 paragraphes, la formule en
  encadré, et des **pastilles lexique** cliquables (le lexique s'ouvre par-dessus sans
  fermer la fiche) → bouton « 🚀 Commencer la mission »
- **Lexique intégré** : 13 termes de l'électricité en langage collège
- **QCM « Je m'évalue »** en fin de chaque mission : 31 questions au total, avec
  correction visuelle (bonne/mauvaise réponse) et explication ; score affiché dans
  le panneau de fin
- **Étapes à rythme de l'élève** : chaque étape validée affiche ✓ et un bouton
  « Continuer → » — l'élève observe son montage aussi longtemps qu'il veut
- **Déverrouillage séquentiel** : les missions se débloquent l'une après l'autre ;
  panneau du parcours refondu en cartes (badge, notion, statut) avec **barre de
  progression et pourcentage**

**Prototype R&D — Assemblage 3D par glisser-déposer** (`simulations/atelier-molecules/prototype-drag.html`)
- On **glisse** les atomes depuis le bac dans la scène 3D (déplacement dans le plan
  face caméra) ; à l'approche d'un atome compatible, un **lien fantôme** apparaît et
  la liaison **s'aimante** au relâcher (snap)
- Identité propre : contrairement à PhET (2D), la molécule assemblée **prend sa vraie
  géométrie** par relaxation VSEPR ; doigt sur le vide = rotation, glisser vers le bac
  = suppression, toucher une liaison = simple/double/triple
- Molécule validée → bandeau + **sélecteur de vue** 🔗 bâtonnets / ⚪ compacte
- Hors catalogue (fichier autonome de 0,61 Mo, à évaluer par l'équipe)

## v3.1.0 — 2026-07-17

🎓 **Revue générale : le modèle « Apprendre / Expérimenter » entre dans toutes les simulations**
(aligné sur la vision « Labo-Bénin » — `docs/references/vision-labo-benin.pdf`).

**Atelier de molécules** (retiré du catalogue en ligne pour l'instant, conservé dans le dépôt)
- La **version retravaillée par l'équipe** devient la base officielle : missions structurées
  Introduction → Réalisation guidée → QCM « Je m'évalue », déverrouillage séquentiel,
  fiches notion avec lexique contextuel — c'est la référence UI/UX du futur socle
- 🔴 **Mode Expérimenter verrouillé** tant que le parcours n'est pas terminé, avec le message
  explicatif et le déblocage automatique (+ toast « Mode Expérimenter débloqué ! »)
- 🔴 **Modales indépendantes** : fermer le lexique ne ferme plus la modale de mission
  en dessous (fermeture scopée + empilement z-index)
- 🟡 **Bug de la liaison triple corrigé** : l'ordre maximal se calcule désormais à partir de
  l'ordre actuel + bras libres — le passage double → triple (N≡N) fonctionne

**Les 6 simulations à missions** (circuit, optique, états de la matière, combustions,
transformations, molécules 3D)
- 🔴 **Écran d'entrée « Que veux-tu faire ? »** : deux grands boutons 🎓 Apprendre /
  🧪 Expérimenter. Expérimenter est **visible mais verrouillé** tant que toutes les missions
  ne sont pas réussies (« Se débloque à la fin du parcours (3/12 missions réussies) ») ;
  tenté trop tôt → « Termine d'abord toutes les missions d'apprentissage… »
- **Onglet de bascule dans l'en-tête** (🔒/🧪 Expérimenter ⇄ 🎓 Apprendre), visible en
  permanence pour montrer que le second mode existe ; verrou rétroactif sur les anciennes
  progressions « mode libre »
- 🔴 **Modales indépendantes** : la croix du lexique ne ferme que le lexique
- 🟡 Le temps d'observation après une mission réussie est conservé (comportement validé)

**R&D notée** : prototype drag & drop des atomes avec assemblage magnétique (snap), à
évaluer sans copier PhET — voir feuille de route.

## v3.0.0 — 2026-07-07

⚗️ **Atelier de molécules — simulation autonome, intégrable et sans parcours imposé.**

Pensée pour être **intégrée à un autre site** (présentation, page de démo) : voir
[`docs/integration-atelier-molecules.md`](docs/integration-atelier-molecules.md) et son snippet iframe.

- **Construction libre** : ajouter des atomes (H, C, N, O, S, Cl), les relier, cycler les
  liaisons simple → double → triple. La **valence est respectée** : impossible de construire
  une molécule chimiquement absurde (message explicatif à l'appui).
- **Moteur VSEPR : la géométrie réelle émerge de la physique** — les doublets non liants sont
  simulés comme des particules invisibles qui repoussent. Résultats validés par tests contre
  les valeurs réelles : CH₄ **109,5°** (tétraèdre), CO₂ **180,0°** (linéaire), H₂O **101,5°**
  (coudée — et non linéaire !), NH₃ **103,7°** (pyramidale).
- **👁 Doublets** : bouton qui révèle les paires d'électrons libres — la réponse visuelle
  au « pourquoi l'eau est-elle coudée ? »
- **Fiche d'identité en direct** : formule brute (Hill), nom parmi **28 molécules connues**,
  forme géométrique, composition, bras libres restants.
- **🧪 Exemples** : 12 recettes construites d'un seul geste (idéal en démo), **guide intégré**
  en 4 étapes, vue boules-bâtonnets ⇄ compacte, thème clair/sombre, rotation et zoom tactiles.
- Fichier unique de 0,61 Mo, hors-ligne, iframe-friendly.

## v2.9.0 — 2026-07-07

🏠 **Page d'accueil réorganisée en onglets** — l'espace est optimisé, le catalogue se scanne d'un coup d'œil.

- **Onglets par matière** : 🔬 Physique-Chimie (5) · 📐 Mathématiques (1) · 🌱 SVT (0),
  avec le **nombre de simulations** affiché sur chaque onglet ; barre collante en haut,
  onglet mémorisé d'une visite à l'autre, navigation au clavier (flèches ← →), rôles ARIA
- **En-tête compact** (logo, titre et badge sur une seule ligne) : les simulations sont
  visibles dès l'ouverture, sans faire défiler
- **Cartes plus denses** : icône et titre sur la même ligne, niveau et bouton « Lancer »
  côte à côte, nombre de missions indiqué. Plus de simulations visibles par écran.
- L'onglet SVT annonce les deux simulations à venir (besoins des végétaux, immunité)

## v2.8.0 — 2026-07-07

🔺 **Sixième simulation : Transformations du plan** — *IKE entre en mathématiques !*

- SA « **Applications du plan** », présente dans **les quatre classes** (6ᵉ → 3ᵉ) : une seule
  simulation sert tout le collège
- **Les 4 transformations** : symétrie axiale (miroir), symétrie centrale (demi-tour),
  translation (glissement), rotation (pivot). L'élève **fait glisser l'élément** (axe, centre,
  vecteur) et l'image se reconstruit en direct, avec les **traits de construction** :
  pointillés vers l'image, codage des distances égales, arcs de rotation, vecteurs fléchés
- **Panneau 📐 des propriétés** : coordonnées de A et A′, égalité des longueurs (AB = A′B′),
  conservation de l'aire, et le **sens** (conservé / inversé) — les théorèmes se vérifient
  sous les yeux de l'élève au lieu d'être récités
- **12 missions** dont deux moments-clés : « La grande découverte » (la rotation de 180° EST
  la symétrie centrale) et le défi final (trouver le centre qui envoie A sur une cible donnée
  — la propriété du milieu utilisée pour résoudre un problème)
- Moteur géométrique validé par **22 tests** (points invariants, involution, conservation des
  aires, orientation inversée par la symétrie axiale, composition de deux symétries = translation)
- Accueil réorganisé en deux sections : PCT et Mathématiques

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
