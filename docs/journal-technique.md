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
- Résistance variable (potentiomètre) ; sauvegarde/chargement d'un montage (JSON dans l'URL ou localStorage)
- API `postMessage` vers la plateforme hôte : événements `mission-reussie`, `mesure-effectuee` (traçabilité)
- Sons de célébration optionnels ; défis chronométrés ; mode enseignant (voir la progression de la classe)

### Alignement sur le socle (2026-08, v4.35.0)

La simulation qui a **inventé** l'accueil et la visite guidée est la dernière à en recevoir la
forme commune. Refonte de l'habillage sans toucher au solveur nodal ni aux quinze missions.

| Décision | Pourquoi |
|---|---|
| La **palette du canvas** reprend les jetons (`--background`, `--surface`, `--neutral`, `--border`) | On aligne l'interface et on oublie la scène : les gris bleutés d'origine juraient avec le fond chaud du socle. À vérifier sur toute simulation à canvas. |
| Le mode libre devient un **drapeau** `progression.libre`, plus une valeur de `progression.m` | `m: 'libre'` écrasait la place de l'élève dans le parcours : on partait expérimenter, on revenait ailleurs. |
| Les couleurs sémantiques de la scène restent en dur (filament, bornes de pile, écran d'appareil) | Ce sont les couleurs **de l'objet réel**, pas celles du thème. Un + de pile est laiton dans les deux thèmes. |
| La fiche notion devient `v-lecon` au format `.carte-modale` | Le socle n'a pas de fiche notion ; le circuit en a quinze, et c'est le cours. Aligner la forme n'oblige pas à jeter le fond. |
| Le **diagnostic reste visible** quand le plan de mission est replié | L'astuce peut attendre ; le « pourquoi ça ne marche pas » est attendu pile au moment où l'élève regarde sa grille. |
| « Tout enlever » descend au bout de l'établi ; 📐 rejoint les commandes de la grille | Cinq icônes maximum dans l'en-tête, comme les autres simulations : au-delà, un téléphone de 360 px écrase le titre. |

**Deux pièges d'attribut `hidden`**, à retenir pour les prochaines migrations : une règle d'auteur
`display:flex` l'emporte sur `hidden` — il faut écrire `[hidden] { display:none }` explicitement ;
et un élément peut être `hidden = false` tout en restant masqué par une règle de repli — le bouton
« Indice » ne faisait rien tant qu'il ne rouvrait pas le plan de mission.

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

## Revue « Labo-Bénin » (2026-07, v3.1.0) — le socle change de génération

La vision produit (`docs/references/vision-labo-benin.pdf`) redéfinit la cible :
approche **notionnelle** (« Concept-First », pas de récits), interface 90 % manipulation /
10 % texte, deux volets par simulation (🎓 Apprendre guidé / 🧪 Expérimenter libre),
et à terme une application Élève (mobile) + une plateforme Enseignant (démonstration).

### Décisions de cette revue
- **L'atelier de molécules retravaillé par l'équipe devient la référence** du futur socle :
  missions `intro → étapes vérifiées en direct → QCM`, déverrouillage séquentiel des missions,
  fiche notion avec lexique contextuel (`docs/references/exemple-uiux-atelier-2026-07.htm`).
- **Verrou de progression** : Expérimenter (bac à sable) se mérite — visible dès l'entrée,
  déverrouillé à la fin du parcours. Appliqué aux 7 simulations.
- **Modales indépendantes** : règle générale — un bouton de fermeture ne ferme QUE sa modale ;
  le lexique s'empile au-dessus (z-index dédié). `fermerVoiles()` est réservé aux transitions.
- **Bug liaison triple** : `max = ordre_actuel + min(bras_libres)` (et non `1 + min`) —
  leçon : tester chaque chemin d'un cycle d'états, pas seulement le premier passage.

### Chantier ouvert (prochaines versions)
- Migrer les 6 simulations à missions vers la structure complète de l'exemple
  (fiches notion, QCM « Je m'évalue », déverrouillage séquentiel).
- R&D : drag & drop des atomes avec snap magnétique (identité propre, sans copier PhET).
- Mode Enseignant (masquage/révélation, saisie précise, superposition théorique).

---

## Migration des anciennes simulations vers le socle (2026-08)

Les simulations d'avant le socle sont reprises une à une. Le circuit électrique (v4.35.0) a servi
de premier cas — ses décisions sont notées dans sa propre section. Ce qui s'ajoute avec les
**combustions vives** (v4.36.0), et qui vaut pour les suivantes :

| Décision | Pourquoi |
|---|---|
| Le **QCM de fin de mission** est écrit, pas porté | Le cycle du socle est `étapes → QCM → passage`. Une simulation qui n'en a pas doit en recevoir un : dix missions × deux questions ici. C'est le plus long poste de la migration, loin devant le CSS. |
| Le repli du plan se décide sur **la place laissée à la scène**, pas sur la taille du plan | « Replier si le plan dépasse 45 % » ne dit rien de ce qu'on cherche. « Replier si la scène tombe sous 45 % » se corrige seul quand la barre du bas change de hauteur. |
| Une barre de commandes ne se **casse pas en plusieurs rangées** | Trois rangées coûtaient 175 px de hauteur sur un écran de 640 : la scène tombait à un tiers. En rang unique défilable, elle remonte à la moitié. |
| Un panneau flottant s'ouvre **replié sur téléphone** | Le triangle du feu recouvrait la moitié de la scène. Un drapeau `panneau` sur la mission dont l'étape s'y lit le rouvre automatiquement. Et il défile chez lui, sinon la scène le rogne. |
| La **réserve de place** d'un rendu doit compter *tous* les objets qu'elle protège | La marge droite réservait la largeur d'une jauge alors que deux sont dessinées : sur 320 px, la seconde sortait de l'écran. La géométrie est passée en constante partagée entre le dessin et la réserve. |

S'y ajoute, avec les **états de la matière** (v4.37.0) :

| Décision | Pourquoi |
|---|---|
| **Toute marge de rendu se calcule en proportion, avec un plancher — jamais en dur** | Les 56 px réservés au-dessus de l'enceinte, écrits pour un grand écran, ne laissaient que **9 px** de hauteur utile en paysage sur téléphone. Même famille de bug que la réserve des jauges : une constante juste sur un écran, fausse sur un autre. |
| Une **étape longue est bornée quand le plan est replié** | Replier ne montre qu'une étape — mais une étape peut faire six lignes et manger le tiers de l'écran. Trois lignes, dépliables au chevron. |
| Un **panneau flottant ne s'ouvre pas tout seul sur téléphone**, même quand la mission s'y lit | Il recouvre justement ce qu'il faut regarder. Vérifier d'abord si l'information est déjà lisible sur la scène — ici, la pression y était. |
| Les étiquettes de scène se posent **dans** la zone dessinée, pas au-dessus | Le nom de l'état, posé dans la marge, se cognait à l'étiquette du piston dès que celui-ci remontait à fond. Dedans, il n'y a plus de collision possible. |

Le **banc d'optique** (v4.38.0) confirme la règle des marges : son échelle en pixels par centimètre
ne se déduisait que de la largeur du banc, si bien que les flèches sortaient par le haut et les
étiquettes par le bas en paysage. Elle est bornée dans les deux sens, à partir de ce qui doit tenir
au-dessus et au-dessous de l'axe optique, déclaré en centimètres — et le banc se centre quand c'est
la hauteur qui commande. **Chercher ce défaut en premier sur chaque nouvelle migration.**

### Le repère d'une scène SVG se cadre sur le dessin, pas sur un gabarit (v4.44.0)

Même famille, côté SVG cette fois. Un `viewBox="0 0 660 3xx"` écrit une fois pour toutes vaut
gabarit : avec `preserveAspectRatio="meet"`, c'est la dimension la plus contraignante qui fixe
l'échelle, et sur un téléphone c'est toujours la largeur. Le résultat se mesure : sur les huit
simulations en SVG, quatre perdaient **de 42 % à 54 %** de leur plan de travail en bandes vides.

Le cadrage se calcule donc à partir de ce qui est dessiné (`cadrerPlan()` dans `alambic`,
`premiers-pas`, `tam-tam`). Trois pièges, chacun trouvé par l'essai :

| Piège | Ce qu'il produit |
|---|---|
| Cadrer sur `plan.getBBox()` | Les groupes en attente à `opacity 0` comptent quand même : l'oscillogramme du tam-tam réservait la moitié droite du repère et poussait le tam-tam dans le coin. Il faut parcourir les enfants et sauter les invisibles. |
| Cadrer sur le `getBBox()` d'un groupe | `getBBox()` rend la boîte dans le repère **local** du groupe, sans sa propre transformation : la baguette qui pivote tirait le cadre à 80 unités au-dessus de la scène. Passer par `getBoundingClientRect()` puis revenir au plan via `getScreenCTM().inverse()`. |
| Cadrer avant l'animation | Les pièces créées puis placées par la boucle (flèches de courant, flammes, vapeur) traînent à l'origine du plan tant qu'elle n'a pas tourné. Cadrer **après** `animer()` quand elle est synchrone, marquer `data-anim` et sauter quand elle ne l'est pas. |

Deux garde-fous à garder : le cadre **ne fait que grandir** — sinon l'échelle saute pendant que
l'élève manipule, et une pièce hors cadre serait rognée ; la **marge se calcule à l'écriture**, pas
dans le cadre mémorisé, sinon elle s'ajoute à elle-même à chaque dessin.

**Un espace inutilisé n'est pas toujours un défaut** : `pollution-air` affiche 48 % de perte au même
calcul, mais son dessin remplit exactement son repère — la bande de rue est une composition large,
voulue. Mesurer la part occupée *par le dessin*, pas seulement la part occupée par le repère.
`fabrique-glace` et `flamme-bougie`, qui recalculent leur repère en pixels depuis leur conteneur,
n'avaient aucun défaut : c'est le modèle.

Trois écueils d'outillage relevés en assemblant ce fichier, qui valent pour toute génération de
code par morceaux :

- **L'ordre des sections diffère d'un fichier à l'autre.** Ici, le panneau de calcul et le lexique
  venaient *après* la visite guidée, contrairement aux trois précédents : les remplacer d'un bloc
  les a supprimés. Lire ce qui suit le repère avant de couper.
- **Une fonction utilitaire du gabarit doit être déclarée dans le fichier cible.** `$` était utilisé
  partout et déclaré nulle part. Le contrôle croisé portait sur les `id` du DOM, pas sur les
  symboles : il est désormais complété par une vérification « déclaré, et avant le premier usage ».
- **Concaténer du CSS demande de savoir où se ferme `<style>`.** Le gabarit s'arrêtait à `</style>`
  inclus ; les ajouts se sont retrouvés hors du bloc, rendus comme du texte. Symptôme trompeur :
  tout le JavaScript passait, seul l'écran était faux.

**Protocole de vérification** établi sur ces migrations, à reprendre tel quel : Chrome piloté par
CDP, parcours joué de bout en bout (accueil → visite → leçon → mission → QCM → passage → liste →
quiz → mode libre), puis contrôle du débordement horizontal, de la part d'écran laissée à la scène
et de la tenue du dessin dans ses bornes, sur cinq tailles — 320, 390, 740 (paysage), 820 et
1280 px. Le banc d'optique se teste en paysage seulement : 640×360, 740×380, 1024×768, 1280×800.

Les **transformations du plan** (v4.39.0) closent la campagne. Seule des cinq à ne pas avoir le
défaut de marge fixe : son quadrillage se déduisait déjà de la largeur *et* de la hauteur. Deux
leçons s'ajoutent :

| Décision | Pourquoi |
|---|---|
| Un moteur repris d'une autre simulation traîne ses **noms de données** | `outilsAutorises()` référençait `OUTILS` (banc d'optique) au lieu de `TRANSFOS`. Syntaxe correcte, contrôle d'identifiants au vert : seul le pilotage l'a trouvé. Relire les symboles référencés, pas seulement les `id` du DOM. |
| **Mesurer d'abord, regarder ensuite** | Une capture prise trop tôt après un changement de taille montre un écran faux : l'émulation n'est pas encore appliquée. Les mesures, elles, étaient justes. Laisser une pause après redimensionnement avant de capturer. |

**Contrôle transversal**, à relancer après toute retouche : un seul bloc `</style>` par fichier,
`$` déclaré avant son premier usage, les huit voiles du socle présents, aucun reste de l'ancienne
interface. Les cinq simulations sont au vert.

**Campagne terminée** : circuit électrique, combustions, états de la matière, banc d'optique et
transformations du plan partagent désormais le même socle. Restent hors périmètre les deux ateliers
de molécules, retirés du catalogue.

---

## Le contrat de progression (2026-08, v4.40.0)

La campagne a fait apparaître une divergence que personne n'avait vue : les deux générations
écrivaient **le même sens sous deux noms**. Les huit simulations du socle enregistraient
`{ mission, faits }`, les six autres `{ m, faites }` — et le catalogue s'en sortait avec un
`champ:` par simulation, un contournement plutôt qu'un contrat.

**Forme unique, écrite par les quatorze :**

```json
{ "mission": 3, "faites": [0, 1, 2], "libre": false, "maitrise": { "pieges": 0.83 } }
```

| Champ | Sens |
|---|---|
| `mission` | index de la mission en cours (0 = la première) |
| `faites` | indices des missions réussies — l'accord correct : *les missions faites* |
| `libre` | l'élève est dans le mode libre |
| `maitrise` | meilleur résultat par niveau de quiz, de 0 à 1 |

Les champs propres à une simulation (notes de pollution, classement des premiers pas, plan libre de
la flamme…) restent à côté et ne regardent qu'elle.

**Règle de migration, à reprendre pour tout changement de format** : on change ce qu'on **écrit**,
jamais ce qu'on **lit**. Les anciens noms `faits` et `m` restent acceptés partout — un appareil déjà
utilisé en classe reprend où il en était, et bascule à la nouvelle forme au premier enregistrement.
Il n'existe aucun moyen de prévenir un élève qu'il a perdu sa progression : la compatibilité de
lecture n'est pas une politesse, c'est la seule protection.

**Piège rencontré** : le remplacement automatique a bien changé les huit écritures, mais **trois
lectures sur huit** ont échappé au motif (indentation différente). Écrire `faites` en ne lisant que
`faits` aurait effacé la progression de tous les élèves de ces trois simulations. Vérifier les deux
côtés séparément, et tester avec une charge utile à l'ancien format.

C'est le préalable à toute lecture extérieure de la progression — le tableau de bord enseignant du
manifeste, notamment : sans cela il faudrait connaître la génération de chaque simulation.

---

## Intégration plateforme (à compléter quand la plateforme sera choisie)

Options gardées ouvertes par le format « un fichier autonome » :
1. **Iframe simple** : `<iframe src="simulations/circuit-electrique/index.html">` — marche partout, zéro travail.
2. **Iframe + postMessage** : la simulation émet des événements (score, actions) que la plateforme écoute — traçabilité.
3. **SCORM / H5P** (si Moodle) : envelopper le HTML dans un paquet SCORM ; le fichier unique rend l'emballage trivial.
4. **PWA hors-ligne** : un service worker au niveau de la plateforme met en cache les simulations déjà visitées.

---

## Une simulation de mathématiques : ce qui change (v4.45.0)

Première simulation bâtie sur un **guide officiel lu à la source** plutôt que sur un résumé. Le PDF
du programme de 3ᵉ donne le découpage de la SA1 semaine par semaine, l'énoncé exact des propriétés,
et jusqu'à la situation de départ — l'obélisque de Baké. Extraire ce texte coûte cinq minutes
(`pypdf`) et évite de deviner. **À faire pour chaque nouvelle SA.**

Le vocabulaire compte : le programme béninois dit « **propriété** de Pythagore » et « **propriété**
de Thalès », pas « théorème ». Un mot faux dans l'en-tête décrédibilise le reste.

### Les prédicats de mission ne peuvent pas tous porter sur la figure du moment

Trois missions demandent **deux figures successives** : le 6-8-10 puis un triangle qui n'en est pas
un, 45° puis 60°. Écrites sur l'état courant, leurs étapes se décochaient dès que l'élève
construisait la seconde — il voyait son travail s'effacer. Les prédicats lisent donc une **mémoire
de ce qui a été construit** (`etat.vus`), alimentée à chaque recalcul. Même mécanisme pour
« recommence avec trois autres formes » : on compte des **signatures distinctes** (les trois côtés
au dixième près), sinon un aller-retour du doigt suffirait à cocher l'étape.

### Ce qu'un quadrillage entier permet, et ce qu'il interdit

Poser les sommets sur les croisements garde les longueurs simples — mais interdit certaines figures.
Un triangle de côtés exactement 6 et 8 qui ne serait pas rectangle **n'existe pas** sur un
quadrillage entier : les seules positions à distance 8 d'un point sont sur les axes. La mission a été
réécrite (« déplace un sommet d'un carreau ») au lieu de forcer une figure impossible. De même,
60° n'a pas de tangente rationnelle : on accepte l'approche à 1,5° près, que 7 et 12 réalisent.
**Vérifier qu'une consigne est constructible avant de l'écrire.**

### Le modèle est testé là où il tourne

`simulations/triangles/test-modele.js` extrait le modèle du fichier livré entre `/*__DEBUT MODELE__*/`
et `/*__FIN MODELE__*/`, puis lui applique 45 vérifications. Une copie de travail testée séparément
peut diverger du code publié ; celle-ci ne le peut pas. **Modèle à reprendre pour les prochaines
simulations.**

### Pièges d'assemblage rencontrés en repartant d'un donneur

| Piège | Ce qu'il produit |
|---|---|
| `el()` n'a pas la même signature partout | Celui de `fabrique-glace` ne prend que deux arguments ; les autres en acceptent trois, dont le texte. **Tous les textes SVG étaient muets** sans qu'aucune erreur ne soit levée. Vérifier la signature des utilitaires empruntés, pas seulement leur nom. |
| Une classe CSS l'emporte sur un attribut de présentation | `text-anchor="start"` sur un élément de classe `.etiq-note { text-anchor:middle }` est ignoré : l'étiquette d'unité sortait à moitié de l'écran. Passer par `style:` en ligne. |
| Une classe du donneur supprimée mais toujours référencée | `.rg-choix` avait disparu avec le CSS de la fabrique de glace ; le conteneur des outils n'était plus un flex, et les boutons s'empilaient — **130 px de hauteur** volés à la scène en paysage. Chercher les classes du corps qui n'ont plus de règle. |
| `reprendre()` n'est appelé que par le socle | Au tout premier chargement, personne ne l'appelle : la mission 1 s'ouvrait avec la figure par défaut et sans ses outils. `demarrerMission()` s'en charge désormais lui-même. |

### Le cadre s'élargit, il ne rétrécit pas

Les carrés de Pythagore sortent largement du quadrillage et se faisaient rogner. Le cadrage suit
donc l'étendue réellement dessinée — mais **monotone à l'intérieur d'une mission** : recalculé à
chaque geste, l'échelle sautait sous le doigt et l'élève voyait sa figure grandir et rétrécir au
lieu de comparer des longueurs. Il repart du quadrillage à l'entrée en mission.

### Un rappel sur le paysage téléphone

À 740 × 380, la scène tombe à 23 % de l'écran ici — mieux que `premiers-pas` (18 %) et bien mieux que
`tam-tam` (6 %), mais l'étranglement reste un travers de la plateforme, pas d'une simulation. Le
chantier « rendre la scène tenable en paysage » reste ouvert pour tout le catalogue.

---

## Le paysage sur téléphone, enfin traité (v4.47.0)

Le journal signalait depuis longtemps que « chaque pixel de hauteur compte » en paysage. La mesure
systématique a montré bien pire que de l'inconfort : **deux simulations affichaient une scène de
zéro pixel**, et huit étaient sous 25 % de l'écran.

### Une intention juste, appliquée sans regarder la hauteur

Six simulations ouvrent le plan de mission à chaque début de mission, puis le replient dès la
première action de l'élève. C'est bon sur un écran haut. La fonction ne consultait que la
**largeur** :

```js
if (etat.repliFait || window.innerWidth >= 880) return;   // la hauteur n'entre jamais en jeu
```

En paysage, le plan garde 300 px sur 380. L'élève ne voit rien, donc n'agit pas, donc le plan ne se
replie jamais : **le déblocage dépendait de l'action que le blocage empêchait**. C'est le genre de
boucle qu'une mesure trouve et qu'une relecture manque.

### La règle retenue

| Décision | Pourquoi |
|---|---|
| **Un seuil de hauteur partagé** — `placePourLePlan()`, 500 px | La contrainte du paysage est la hauteur. Une règle en largeur ne la voit pas. |
| **Le plan ne s'ouvre pas tout seul sous le seuil**, mais le chevron l'ouvre toujours | On ne retire rien à l'élève : on change ce qui se passe *par défaut*. Le défaut doit protéger ce qu'il faut regarder. |
| **Le repli s'impose au redimensionnement**, pas seulement au chargement | Tourner l'appareil est le geste même qui crée le problème. |
| **La compaction est proportionnée** : ce qui s'efface en paysage est ce qui est disponible ailleurs (le but de la mission est dans la modale des missions) | Compacter ne doit pas faire disparaître une information unique. |

### Le rappel qui revient une troisième fois

Le socle avait **deux versions divergentes** de la même fonction : les quatre simulations récentes
avaient la bonne, les six anciennes la mauvaise. Même famille que le contrat de progression
(v4.40) et que `carteExercer()` (v4.44.1).

**Quand une fonction du socle est corrigée dans une simulation, la corriger dans toutes le jour
même** — sinon la divergence se découvre des mois plus tard, par une mesure, et sur du travail déjà
entre les mains des élèves. Un contrôle transversal existe (`console.js`, `modalemissions.js`,
`paysage.js` dans le bac à sable) : le lancer après toute retouche du socle.
