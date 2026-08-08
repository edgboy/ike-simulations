# Journal des versions

Chaque version est un **tag git** (`vX.Y.Z`) et une **release GitHub** :
https://github.com/edgboy/ike-simulations/releases

Revenir à une version pour la consulter : `git checkout v1.5.0` (puis `git checkout main` pour revenir au présent).

## v4.39.0 — 2026-08-08

🔺 **Les transformations du plan rejoignent le socle — la campagne est bouclée.**

Cinquième et dernière ancienne simulation, et la seule de **mathématiques** : douze missions, du
miroir au choix raisonné de la transformation. La géométrie ne bouge pas — symétrie axiale,
symétrie centrale, translation et rotation sont calculées comme avant.

- **Les cinq points communs** : jetons du design system, en-tête à icônes, plan de mission à
  pastille et chevron, modales `.carte-modale`, mode libre en drapeau. Le splash disparaît,
  remplacé par l'accueil et ses trois portes.
- **Le QCM de fin de mission arrive** : **24 questions**, deux par mission. Les douze leçons
  deviennent de vraies fiches notion, avec sous-titre et mots de lexique cliquables.
- **Le quiz libre**, trois niveaux, **21 questions**. Le niveau 3 attaque la symétrie centrale crue
  retourner la figure comme un miroir, la symétrie axiale crue agrandir quand l'axe s'éloigne, la
  translation crue faire pivoter avec un vecteur incliné, +90° et −90° crus donner la même image,
  le centre cru devoir être sur la figure, la figure superposée à son image crue n'avoir subi
  aucune transformation, et les angles crus non conservés par le miroir.
- **Le quadrillage suivait déjà la place disponible dans les deux sens** — la seule des cinq à ne
  pas avoir le défaut de marge fixe.

**Les cinq anciennes simulations sont désormais alignées** : circuit électrique, combustions, états
de la matière, banc d'optique et transformations du plan. Toutes partagent le même accueil, le même
plan de mission, les mêmes modales, la même mécanique de mode libre, un QCM à chaque fin de mission
et un quiz libre à trois niveaux. Un contrôle transversal vérifie sur les cinq : bloc de style
unique, utilitaire `$` déclaré avant usage, huit voiles du socle présents, aucun reste de l'ancienne
interface.

## v4.38.0 — 2026-08-08

🔭 **Le banc d'optique rejoint le socle.**

Quatrième migration : douze missions, de la source de lumière à la loupe. Le tracé de rayons ne
bouge pas — ombres par triangles semblables, chambre noire, formule de conjugaison et
grandissement sont ceux d'avant.

- **Les cinq points communs** : jetons du design system, en-tête à icônes, plan de mission à
  pastille et chevron, modales `.carte-modale`, mode libre en drapeau. Le splash disparaît,
  remplacé par l'accueil et ses trois portes. « Tout enlever » descend au bout du matériel.
- **Le QCM de fin de mission arrive** : **24 questions**, deux par mission. Les douze leçons
  deviennent de vraies fiches notion, avec sous-titre et mots de lexique cliquables.
- **Le quiz libre**, trois niveaux, **21 questions**. Le niveau 3 attaque l'objet cru visible dans
  le noir complet, l'ombre crue de la taille de l'objet, le trou de la chambre noire cru
  « retourner » la lumière, l'image floue crue venir d'une mauvaise lentille, l'image de la loupe
  crue captable sur un écran, la demi-lentille crue donner une demi-image, et l'objet lointain cru
  donner une grande image.

**L'échelle du banc ne se déduisait que de sa largeur.** C'est le défaut annoncé après les états
de la matière, et il était bien là : en paysage sur téléphone, les flèches de l'objet et de l'image
sortaient par le haut, et les étiquettes des éléments par le bas. L'échelle est maintenant bornée
**dans les deux sens** — ce qui doit tenir au-dessus et au-dessous de l'axe est déclaré en
centimètres de banc — et quand c'est la hauteur qui commande, le banc se centre au lieu de rester
collé à gauche.

Deux autres défauts corrigés : les notes du panneau 📐 se collaient bout à bout sur une seule ligne
(« Ø = 4 cmD = 76 cmd = 33 cm »), et la barre de réglage, centrée en bas, recouvrait l'étiquette
« ombre : … cm » que la mission demande justement de lire — elle se range désormais à gauche quand
le banc est écrasé.

## v4.37.0 — 2026-08-08

🧊 **Les états de la matière rejoignent le socle — la plus grosse des anciennes.**

Treize missions, du grain de matière au cycle de l'eau. Le modèle thermique ne bouge pas : la
courbe énergie → température en cinq segments, ses deux paliers à 0 et 100 °C, et la pression du
gaz enfermé sont ceux d'avant.

- **Les cinq points communs de la migration** : jetons du design system, en-tête à icônes, plan de
  mission à pastille et chevron, modales `.carte-modale`, mode libre en drapeau. Le splash
  disparaît, remplacé par l'accueil et ses trois portes.
- **Le QCM de fin de mission arrive**, comme pour les combustions : **26 questions**, deux par
  mission. Les treize leçons deviennent de vraies fiches notion, avec sous-titre et mots de
  lexique cliquables.
- **Le quiz libre**, trois niveaux, **21 questions**. Le niveau 3 attaque la température crue
  monter pendant la fusion, la vapeur crue être le nuage blanc au-dessus d'une marmite, la glace
  crue être une autre matière que l'eau, le liquide cru compressible, la buée crue traverser le
  verre, l'eau qui bout crue devenir plus chaude avec le temps, et la solidification crue se faire
  plus bas que la fusion.
- **Les deux gestes se distinguent au premier regard** : ❄️ Refroidir prend le bleu, 🔥 Chauffer
  l'orange, et celui que la mission attend appelle l'élève tant qu'il n'a rien touché.

**Trois défauts de rendu corrigés**, tous trouvés en mesurant l'écran :

- **L'enceinte tombait à 9 pixels de hauteur en paysage sur téléphone.** Ses marges étaient fixes —
  56 px en haut, 46 en bas — écrites pour un grand écran. Elles suivent maintenant la place
  disponible, avec un plancher pour le nom de l'état et la plaque chauffante : l'enceinte remonte
  à **73 px**, et le réseau de molécules est borné pour y tenir. Rien ne change sur grand écran.
- **Le nom de l'état se cognait à l'étiquette du piston** dès que celui-ci était remonté à fond.
  Il se pose désormais *dans* l'enceinte, en haut.
- **Une consigne longue occupait six lignes même une fois le plan replié**, ne laissant qu'un tiers
  d'écran à l'expérience. Repliée, elle est bornée à trois lignes ; le chevron la déplie en entier.

Le panneau 📐 ne s'ouvre plus tout seul sur téléphone, même quand la mission s'y lit : il
recouvrirait l'enceinte que l'élève doit justement regarder. La pression reste affichée sur la
scène, et un message indique où trouver le détail du calcul.

## v4.36.0 — 2026-08-08

🔥 **Les combustions vives rejoignent le socle — et gagnent leur QCM.**

Deuxième ancienne simulation alignée, après le circuit électrique. Le modèle ne bouge pas : les
21 % de dioxygène de l'air, la consommation proportionnelle au volume de la cloche, le seuil
d'extinction à 15 %, l'eau de chaux et la buée sont ceux d'avant.

- **Jetons du design system, en-tête à icônes, plan de mission à pastille et chevron, modales
  `.carte-modale`, mode libre en drapeau** — les cinq points communs à toute migration. Le splash
  disparaît, remplacé par l'accueil « Que veux-tu faire ? » et ses trois portes.
- **Le cycle de mission est complété.** Il s'arrêtait aux étapes : la simulation n'avait pas de
  QCM. Chaque mission reçoit **deux questions** écrites pour elle, entre la réussite et l'écran de
  passage — le cycle du socle est désormais entier. Les dix leçons deviennent de vraies fiches
  notion, avec leur sous-titre et leurs mots de lexique cliquables.
- **Le quiz libre arrive**, avec ses trois niveaux et ses **21 questions**. Le niveau 3 attaque la
  flamme crue s'éteindre faute de tout dioxygène, l'air cru être du dioxygène pur, le souffle cru
  priver d'air, la cire crue disparaître, la combustion crue démarrer seule, l'eau de chaux crue
  réagir à la vapeur d'eau, et la grande cloche crue protéger indéfiniment.

**Trois défauts d'affichage corrigés en chemin**, tous trouvés en pilotant la simulation :

- **La jauge de CO₂ sortait de l'écran sur 320 px.** La réserve de place à droite ne comptait
  qu'une seule jauge alors que deux sont dessinées : neuf pixels passaient par-dessus bord. La
  géométrie du couple de jauges est maintenant une constante partagée par le dessin et la réserve.
- **La barre des gestes se cassait en trois rangées** sur un écran étroit et mangeait 175 px de
  paillasse. Elle passe en rang unique défilable : la paillasse récupère **la moitié de l'écran**
  au lieu d'un tiers.
- **Le panneau 🔺 recouvrait la moitié de la paillasse** sur téléphone. Il s'y ouvre désormais
  replié — le bouton posé sur la paillasse le déplie, et la mission qui s'y lit l'ouvre d'elle-même.
  Ouvert sur un petit écran, il défile chez lui au lieu d'être coupé.

## v4.35.0 — 2026-08-08

⚡ **Le circuit électrique rejoint le socle.**

La plus ancienne simulation du catalogue — et la première du programme de 6ᵉ — gardait sa propre
palette, ses propres modales et son propre vocabulaire de code. Elle reprend maintenant la forme
commune à toute la plateforme, sans qu'un seul trait de sa physique ne bouge : le solveur nodal,
les quinze missions, leurs diagnostics et le panneau 📐 sont ceux d'avant.

- **Les jetons du design system** remplacent l'ancienne palette. La grille elle-même suit : ses
  points, ses conducteurs et le fond de scène étaient des gris bleutés qui juraient avec le reste
  dès qu'on basculait en sombre. Le thème se mémorise désormais sous la clé commune `ike-theme`,
  partagée avec les autres simulations.
- **L'en-tête** passe à la rangée d'icônes compactes : retour au catalogue, vue 👁 réaliste ou
  symboles, missions, lexique, aide, thème. « Tout enlever » descend au bout de l'établi, à portée
  de pouce, et le panneau 📐 rejoint les commandes posées sur la grille.
- **Le plan de mission** prend la forme du socle : pastille numérotée, rang, but, jauge d'avancement
  et **chevron de repli**. La première étape franchie, il se replie tout seul sur un téléphone —
  la grille reprend la place. Le diagnostic, lui, reste visible même replié : c'est lui qui dit
  *pourquoi* le montage ne marche pas.
- **Les modales** deviennent des `.carte-modale` : leçon d'avant-mission, QCM, écran de passage,
  liste des missions, lexique et guide d'accueil. Le splash disparaît, remplacé par l'accueil.
- **Le mode libre suit la mécanique du socle.** Il était une valeur de la mission en cours
  (`m: 'libre'`) et écrasait donc la place de l'élève dans le parcours. C'est désormais un drapeau :
  on va sur la grille libre et on en revient sans rien perdre.
- **Le quiz libre arrive**, avec ses trois niveaux et ses **21 questions** écrites pour cette
  simulation. Le niveau 3 attaque le courant cru « usé » par la lampe, le court-circuit cru sans
  danger sur une petite pile, le voltmètre cru se brancher en série, les lampes en dérivation crues
  se partager l'éclat, l'interrupteur ouvert cru laisser filer un peu de courant, et la résistance
  crue grandir avec la tension.
- **Sur écran large**, la mission passe en colonne à gauche et la grille prend tout le reste.

Deux défauts d'affichage trouvés en chemin, sur les écrans les plus petits : sur 320 px de large,
le premier composant de l'établi partait hors de la zone visible sans qu'on puisse y revenir ;
et en paysage, un plan de mission à trois étapes ne laissait qu'un filet de grille. L'établi se
centre autrement, et le plan mesure sa hauteur à l'ouverture — au-delà de 45 % de l'écran, il
s'ouvre déjà replié.

Les anciennes simulations restant à aligner : combustions, états de la matière, optique,
transformations, plus les deux ateliers de molécules retirés du catalogue.

## v4.34.0 — 2026-08-08

🏅 **Le quiz libre est posé sur les huit simulations du socle.**

Les quatre dernières reçoivent leur banque, écrite pour elles. Comme convenu, les simulations qui
tournent autour d'**une notion centrale** n'ont que deux niveaux — « Je me souviens » et « On ne me
piège plus » —, les plus denses en gardent trois.

- **Construis ton alambic** — 14 questions. Le niveau 3 attaque le palier d'ébullition (la
  température ne monte plus quand on chauffe davantage), le distillat sans réfrigérant, le sel cru
  « détruit » par la chaleur, et le nuage blanc au-dessus d'une casserole pris pour le gaz lui-même.
- **Fabrique ta lampe de poche** — 14 questions. La surtension qui grille l'ampoule, la grosse pile
  crue plus « puissante » alors qu'elle donne les mêmes 1,5 V, les piles tête-bêche, le réflecteur
  cru producteur de lumière.
- **Fabrique ton tam-tam** — 14 questions. Frapper plus fort cru rendre le son plus aigu, la baguette
  crue changer la hauteur, la peau lourde crue plus aiguë, le collage cru accordable.
- **Fabrique de la glace** — 14 questions. Le sel cru « produire du froid », le thermomètre bloqué à
  0 °C cru défectueux, l'isolant cru refroidir davantage, le givre cru venir d'une fuite.

**La pondération du score s'adapte au nombre de niveaux.** Elle était écrite en dur pour trois
(1 × / 2 × / 3 ×, sur 6). Chaque niveau porte maintenant son poids et le total s'ajuste : sur deux
niveaux, « Je me souviens » seul plafonne à **25 %**. La sévérité demandée est conservée.

## v4.33.0 — 2026-08-08

🏅 **Le quiz libre s'étend, et son niveau 3 prend le registre d'un énoncé.**

**Le niveau « On ne me piège plus » est reformulé.** *« L'idéal ce serait que ce soit formulé comme
un énoncé scolaire. »* Les questions citaient une phrase parlée — « Le feu de bois, c'est naturel,
donc ce n'est pas dangereux. » Elles prennent le registre d'un exercice : impersonnel, précis, avec
le vocabulaire de la leçon — « Un élève affirme que la fumée d'un feu de bois est sans danger,
**parce que le bois est naturel**. Cette affirmation est-elle exacte ? » L'idée fausse reste au
centre ; c'est la formulation qui change. L'affichage sévère du score est conservé tel quel.

**Trois simulations de plus** sont équipées, avec leurs trois niveaux et leur banque écrite pour
elles :

- **Pourquoi mes marmites noircissent ?** — 21 questions. Le niveau 3 attaque l'eau jetée sur du
  pétrole enflammé, la mèche sortie au maximum, la flamme bleue crue « moins chaude » parce qu'elle
  éclaire moins, et la buée prise pour de l'humidité de l'air.
- **La flamme de la bougie** — 21 questions. Le centre cru le plus chaud, la zone lumineuse crue la
  mieux brûlée, la mèche crue combustible, le noir de fumée pris pour de la cendre.
- **Les premiers pas du circuit** — 21 questions. La lampe posée sur la pile sans fil, la DEL crue
  défectueuse alors qu'elle est à l'envers, la couleur prise pour un indice de conduction.

**Le moteur du quiz devient autonome.** Il empruntait le mélangeur de propositions de la simulation
hôte. Or les questionnaires existent en deux familles — `q.choix` d'un côté, `q.r` de l'autre — et
le quiz de la flamme plantait sur cette différence. Il mélange désormais lui-même.

## v4.32.0 — 2026-08-08

🫙 **La bougie sous cloche : des proportions justes.**

Défaut trouvé en interne, non signalé par les testeurs. La cloche montait à **60 % de la hauteur du
plan** alors que la bougie n'en fait qu'un dixième : celle-ci se perdait au fond d'un grand vide, et
la cuve d'eau filait jusque sous la table. La cloche descend à **44 %** et la bougie grandit d'un
tiers — elle occupe désormais sa cloche au lieu d'y flotter. La lecture de la montée d'eau, qui se
compte en pourcentage du volume, n'est pas affectée.

Ceci clôt le **lot C** de la deuxième vague de retours : tam-tam, alambic, fabrique de glace,
marmites et flamme sont tous repris.

## v4.31.0 — 2026-08-08

🧯 **Les quatre gestes contre l'incendie : on voit enfin ce qui les produit.**

*« Il faut revoir le design des animations pour les quatre actions à effectuer, ça doit être un peu
plus réaliste. »* Chaque geste montrait un amas de ronds tombant du ciel : neuf ellipses bleues
alignées pour l'eau, trente-quatre points pour le sable, une tache verte pour les feuilles, vingt-six
cercles gris pour l'extincteur. On ne voyait jamais **l'objet** qui agit.

- **Le seau d'eau** bascule, verse une **nappe continue** qui part en arc, et éclabousse au contact
  du pétrole — d'où les flammes qui s'étalent.
- **Le sable** est versé d'une **pelle** qui s'incline ; il tombe en cône, et le tas s'amoncelle sur
  la flaque jusqu'à l'étouffer.
- **Les feuilles vertes** sont une **branche feuillue** qu'on abat, avec ses six feuilles et son
  balancement — et les **braises** qu'elle projette, qui expliquent pourquoi le feu se disperse.
- **L'extincteur** a son corps rouge, son étiquette, sa poignée, son flexible et sa lance ; il
  projette un **cône de poudre** qui recouvre le foyer.

## v4.30.0 — 2026-08-08

🧊 **La fabrique de glace : chaque isolant a sa matière, et le plan respire sur téléphone.**

**Les trois isolants se ressemblaient à une teinte près** — le même rectangle arrondi, gris clair,
blanc cassé ou beige. Chacun a maintenant sa matière : le **polystyrène** est une caisse à parois
épaisses au grain de billes soudées, le **coton** une ouate au contour bosselé parsemée de flocons,
les **chiffons** des bandes de tissu enroulées, de trois teintes, avec leurs plis.

**Le plan de travail était encombré sur téléphone.** La fiche des températures, posée en haut à
gauche, couvrait la moitié gauche de la scène : le récipient se retrouvait écrasé dans un coin. Trois
changements :

- la fiche devient un **bandeau d'une ligne** au-dessus de la scène — « LE MÉLANGE 0,3 °C ·
  L'EAU DU FLACON 14,3 °C » — et rend toute sa place au montage ;
- la courbe passe **sous** la scène au lieu de lui prendre la moitié droite : sur un écran étroit, le
  montage prend toute la largeur même quand le plan est large et bas ;
- les quatre isolants tiennent sur **une seule ligne** qui défile au doigt, et les réglages se
  resserrent — la hauteur gagnée revient au plan de travail.

Le montage se recentre : la place qui était réservée à la fiche ne l'est plus quand celle-ci n'est
plus posée dessus.

## v4.29.0 — 2026-08-07

🥁 **Le tam-tam : une calebasse est un demi-cercle.**

*« Une calebasse, c'est plus un demi-cercle que la forme qu'il a mise là par défaut. Que les
éléments soient plus ressemblants à ce qu'ils sont censés représenter. Les animations où un élément
frappe le tam-tam, c'est médiocre franchement. »*

**Les quatre caisses ont chacune leur forme et leur matière.** Elles partageaient un seul tronc de
cône évasé, teinté différemment. Désormais : la **calebasse** est une demi-sphère — la gourde coupée
en deux —, avec ses taches de séchage ; la **boîte de conserve** a ses nervures et ses bourrelets ; la
**boîte de lait** son étiquette de papier ; le **bidon** ses nervures, sa poignée et son bouchon.

**La peau se voit enfin.** Elle se confondait avec la caisse : c'est maintenant une membrane épaisse,
avec son dégradé et son reflet, qui se déforme sous le coup. On voit ce qu'on frappe.

**Les fixations sont ce qu'elles disent.** La ficelle croisée fait un vrai **laçage en V** entre deux
anneaux de corde, et sa largeur suit celle du corps — sur la calebasse, les cordes se resserraient
dans le vide. Le cerclage est un cercle métallique avec sa vis de serrage, le collage un cordon qui a
coulé.

**La frappe a un geste.** La baguette descendait tout droit. Elle prend maintenant son **élan** en
arrière, **tombe** sur la peau en pivotant, **rebondit**, et laisse un **éclat** au point d'impact. La
main nue est dessinée — c'était un emoji ✋ —, la baguette gainée porte son tissu enroulé.

**Du relief** : dégradés sur les corps, reflets, ombres portées. La mention « l'air résonne »
s'écrit en clair sur le corps désormais opaque.

Vérifié : les six missions rendent leurs étapes, et la physique est intacte — 296 Hz pour la boîte de
lait, 198 pour la conserve, 119 pour la calebasse, 99 pour le bidon : plus la caisse est large, plus
le son est grave.

## v4.28.0 — 2026-08-07

🌑 **L'arrière-plan s'efface derrière les modales et la visite guidée.**

*« Même pour moi adulte, c'est difficile de concentrer mon attention sur ce qui est réellement
important. En termes UX c'est catastrophique — surtout vu qu'on parle d'enfants. »*

Le voile des modales était à **55 %** d'opacité et celui de la visite guidée à **62 %** : le plan de
travail, le plan de mission et les curseurs restaient parfaitement lisibles derrière un
questionnaire, et se disputaient l'attention avec lui.

Mesuré sur « Allume le réchaud », en luminance de l'arrière-plan derrière un questionnaire ouvert :

| | avant | après |
|---|---|---|
| Astuce (fond bleu clair) | 129 | **33** |
| Fond de l'en-tête | 140 | **34** |
| Barre des curseurs | 129 | **33** |

Il ne reste plus que **13 à 14 %** de la clarté d'origine, contre 55 % auparavant. Le contraste entre
la carte de la modale et ce qui l'entoure passe de 1,9 à **4,8 pour 1**.

Le voile des modales passe à **93 %**, celui de la visite guidée à **91 %** — un peu moins, parce que
le halo y montre volontairement la zone dont on parle, et qu'un minimum de contexte autour reste
utile. Aucun flou n'a été ajouté : il coûte trop cher aux téléphones d'entrée de gamme visés.

Appliqué aux **huit** simulations.

## v4.27.0 — 2026-08-07

⚗️ **L'alambic : on voit enfin le liquide arriver dans le flacon.**

**D'abord une mise au point.** *« Il y a des corrections que j'avais apportées qui n'ont pas été
intégrées, notamment le linge mouillé et l'écoulement du liquide dans le flacon dont l'animation a
disparu. »* Vérification faite dans l'historique : **rien n'a jamais été retiré de ce dépôt** — le
linge et les gouttes y figurent en nombre identique depuis la v4.4.0. Ces corrections n'ont donc
jamais été intégrées ici. Le dessin était mauvais depuis l'origine, et c'est lui qui est repris.

**Les gouttes tombent enfin.** *« On ne voit que le niveau monter. »* Le flacon se remplissait tout
seul, sans qu'on comprenne d'où venait le liquide. Des gouttes se détachent maintenant du bout du
tuyau, tombent jusqu'à la surface, et y font une **ondulation** à l'impact. Elles n'apparaissent que
si la vapeur se condense vraiment.

**La vapeur se perd quand rien ne la refroidit.** Sans réfrigérant, des bouffées s'échappent au bout
du tuyau avec la mention « la vapeur se perd ». C'est ce qui manquait pour comprendre à quoi sert un
réfrigérant : mesuré à l'identique, on récupère **0 mL sans réfrigérant, 25 mL avec un linge mouillé,
43 mL avec le serpentin dans l'eau froide**.

**Le linge mouillé entoure vraiment le tuyau.** C'étaient quatre pastilles grises flottant à côté.
C'est maintenant un tissu enroulé, dont on voit les tours passer devant le tuyau, les plis, et l'eau
qui perle dessous.

**Les feuilles ressemblent à des feuilles** — cinq feuilles avec leur nervure et leurs nervures
secondaires, qui flottent à la surface et se balancent, au lieu de quatre ellipses vertes.

**Passe générale** : la chaudière reçoit ses **deux anses** et son bord roulé, le réchaud devient un
vrai **brûleur** (corps, couronne percée, manette) ou trois **bûches croisées**, le thermomètre a son
**réservoir** et ses graduations, et le flacon un **col** et une lèvre — c'est par là que tombent les
gouttes.

## v4.26.0 — 2026-08-07

🏅 **Le quiz libre — modèle sur « Qui pollue vraiment ? ».**

Première simulation équipée, à juger sur pièce avant de dérouler les sept autres.

**Trois niveaux qui ne demandent pas la même chose.** Empiler des questions plus dures ne ferait que
trier les élèves ; ici les niveaux changent de nature de pensée :

- 🥉 **Je me souviens** — les mots et les faits que le parcours a posés.
- 🥈 **Je comprends** — les mêmes idées, dans des situations que la simulation n'a pas montrées :
  un capteur à 2 m puis à 15 m d'un feu, une cuisine fermée, une soustraction sur les rejets du
  quartier.
- 🥇 **On ne me piège plus** — les erreurs que presque tout le monde fait. Ce niveau est bâti sur les
  **idées fausses** que la simulation combat déjà : le tuyau relevé qui ferait disparaître la fumée,
  la fumée blanche « propre », « c'est naturel donc sans danger », la couche d'ozone confondue avec
  l'effet de serre.

**24 questions** au total, huit par niveau ; six sont tirées au sort par série, propositions
mélangées. Réponse → **correction immédiate avec l'explication** : c'est un exercice, pas un examen.
On peut refaire une série autant qu'on veut, le **meilleur résultat est gardé**.

**Le score de maîtrise pèse les niveaux 1 × / 2 × / 3 ×.** Réussir le premier niveau seul plafonne à
**17 %** ; il faut affronter les pièges pour dépasser 80 %. C'est ce qui donne son sens à « plus le
score est élevé dans les modes difficiles, plus la compréhension est actée ». Étoiles par niveau
(⭐ à la moitié, ⭐⭐ à 80 %, ⭐⭐⭐ au sans-faute) et un mot sur la barre : *Découverte · En bonne voie ·
Solide · Maîtrisée*.

**Les questions ratées renvoient à leur mission** — « Mission 3 — Le tuyau de Faton ». Le quiz
ramène au parcours au lieu de s'y substituer.

**Deux portes d'entrée** : une troisième carte 🏅 **M'exercer** sur l'écran d'accueil, verrouillée
comme Expérimenter jusqu'à la fin du parcours et affichant le score de maîtrise ; et une carte au bas
de la liste des missions, pour que le professeur puisse la lancer en pleine séance.

## v4.25.0 — 2026-08-06

🔦 **La visite guidée remplace la liste écrite**, et 🧩 **les modales « bancales » sont réparées.**

**On montre l'écran au lieu de le décrire.** *« Je ne pense pas que le format texte soit meilleur que
le format encadrement et tutoriel pas à pas qu'on avait avant. »* La liste « Où est quoi sur
l'écran ? » ajoutée à la version précédente est retirée : la **visite guidée** revient, dans les huit
simulations. Un **halo encadre la zone dont on parle** et assombrit tout le reste ; une carte se pose
à côté, avec son commentaire, son compteur « 3 / 6 », « Passer » et « Suivant ».

Le composant reprend celui du circuit électrique, remis aux jetons Labo-Bénin, avec deux
améliorations : la carte **cherche une place libre** autour de la zone — dessous, dessus, à droite, à
gauche — et ne se replie dans un coin que si la zone occupe presque tout l'écran ; et les étapes dont
la cible n'est pas affichée au moment du lancement sont **écartées**, plutôt que de montrer un halo
vide. Quatre à six étapes par simulation, écrites pour ses zones réelles.

La visite part toute seule après « Apprendre », tant que la première mission n'est pas gagnée. Le
bouton ❓ garde les consignes de jeu et propose « 🔍 Revoir la visite guidée ».

🧩 **Les modales « bancales » : le style et le code ne parlaient pas des mêmes noms.**

*« L'UI des modales des questionnaires, bouton continuer de la modale de succès, missions et autres
est à revoir absolument »* (flamme) · *« Pareil pour les quizs, la modale de mission, le lexique »*
(fabrique de glace). Diagnostic fait en capturant les modales une à une : ce n'était pas une
question de goût, mais une **désynchronisation entre la feuille de style et le code** dans ces deux
simulations — les six autres étaient conformes.

**Le questionnaire n'avait aucun style.** La feuille habillait `.q-choix` en carte cliquable, mais
dans ces deux fichiers `q-choix` désigne le **conteneur** et `q-rep` chaque proposition. Résultat :
le cadre recevait le style d'un bouton, et les trois réponses s'affichaient en **boutons bruts du
navigateur**, minuscules et collés. Le style est remis en face du code : propositions en cartes
pleine largeur, bonne réponse en vert avec ✔️, mauvaise en rouge avec ❌, et le mot de la fin dans
son bloc teinté — comme dans les six autres simulations.

**Les titres étaient collés à leur description.** Dans la liste des missions, « Les trois parties de
la flammeUne flamme n'est pas d'un seul bloc… » : le balisage produit ne portait pas la classe qui
sépare les deux lignes. Même défaut au **lexique**, où le mot et sa définition se suivaient sans
respirer : « Combustion complèteLe combustible brûle jusqu'au bout… ».

**Les missions verrouillées ne se voyaient pas.** La classe `verrou` n'avait **aucune règle** dans
aucun fichier : une mission fermée ressemblait trait pour trait à une mission ouverte. Les cartes
deviennent de vrais boutons, comme ailleurs : cadenas et grisé quand c'est fermé — et **cliquables
pour rejouer une mission** quand c'est ouvert, ce qui n'existait pas dans ces deux simulations.

**Un détecteur de classes orphelines** a été passé sur les huit fichiers pour trouver mécaniquement
ce genre d'écart plutôt qu'à l'œil : plus aucune classe employée par le code n'est sans style.

## v4.23.0 — 2026-08-06

🚪 **L'accueil « Que veux-tu faire ? » est de retour, et chaque simulation dit où est quoi.**

**Deux portes d'entrée, dans les huit simulations.** *« Le système qu'on avait mis en place qui
accueillait les gens au départ de toute simulation — Apprendre / Expérimenter — faudra penser à le
ramener. »* Il est là, et il s'appuie sur le mode libre complété à la version précédente :

- 🎓 **Apprendre** — le parcours guidé. Le bouton dit où l'on en est : « Commencer », « Reprendre ·
  3/6 », ou « Terminé ✓ ».
- 🧪 **Expérimenter** — le plan de travail libre. **Verrouillé tant que le parcours n'est pas
  terminé**, avec la raison écrite dessous : « Termine les 6 missions d'Apprendre pour ouvrir
  Expérimenter. »

L'écran se présente à chaque ouverture de la simulation. C'est lui, désormais, qui enchaîne sur le
guide de repérage — celui-ci ne s'ouvre plus tout seul au chargement.

**« Où est quoi sur l'écran ? » dans les six guides qui ne l'avaient pas.** *« Plus que jamais, il
est important qu'il y ait un guide qui explique chaque partie de la simulation dès la première
entrée »* (fabrique de glace) · *« Un guide de navigation dans l'interface ici aussi, c'est non
négociable »* (pollution). Seules la flamme et la fabrique de glace en avaient un. L'alambic, la
lampe de poche, les marmites, la pollution, les premiers pas et le tam-tam ont maintenant le leur —
**quatre repères écrits pour chacune**, nommant ses zones réelles : le plan de mission et son
chevron, le plan de travail et ce qu'on y manipule, les commandes du bas, et les boutons de
l'en-tête. Les consignes de jeu suivent, sous leur propre titre.

Vérifié sur les huit : l'accueil s'ouvre, Expérimenter reste verrouillé tant que les missions ne
sont pas finies puis mène bien au mode libre, et « Apprendre » enchaîne sur le repérage tant que la
première mission n'est pas gagnée. Sur téléphone, la carte d'accueil tient dans l'écran (402 px) et
le guide, plus long, défile jusqu'à son bouton.

## v4.22.0 — 2026-08-05

∞ **Le mode libre donne enfin accès à tout le matériel.** C'était la demande la plus répétée de la
deuxième vague : quatre simulations, quatre situations différentes.

**Les premiers pas du circuit : la DEL et le moteur étaient inaccessibles.** *« Dans le monde libre
on devrait avoir accès aux autres récepteurs aussi. On a uniquement accès aux éléments à
intercaler. »* Le montage libre forçait la lampe, sans aucun moyen d'en changer. Un **bac de
récepteurs** s'ouvre désormais au-dessus des objets à intercaler : lampe, DEL, moteur du tourniquet.
Changer de récepteur remet les fils à zéro — les bornes ne portent pas les mêmes noms d'un appareil
à l'autre.

**Les marmites : les deux plans de travail.** Le réchaud à pétrole et la lanterne qui s'embrase sont
maintenant deux plans que l'élève choisit. Le passage de l'un à l'autre remet la table en ordre :
réchaud éteint et marmite propre, ou lanterne intacte à rallumer. Le bouton d'action suit —
« 🔥 Allumer » ou « 🏮 Lancer la scène ».

**La flamme de la bougie : un mode libre, qui n'existait pas.** La simulation n'avait aucune sortie
après la dernière mission. Elle en a une, avec ses **deux plans** : la bougie et ses quatre outils,
et la bougie sous cloche posée sur l'eau. Tous les outils sont ouverts, y compris ceux qu'une
mission tardive débloquait, et les étiquettes de repérage de la mission 1 ne s'invitent plus.

**La fabrique de glace : un mode libre, qui n'existait pas non plus.** *« Il n'y a même pas de mode
libre ici maintenant. »* Le parcours terminé, on revenait au plan de travail avec les consignes de
la dernière mission. L'exploration libre ouvre le sel jusqu'à la dose maximale, les **quatre
isolants** — dont le polystyrène et le coton, réservés à la mission 3 — et le chiffon pour essuyer
le givre, jusqu'ici réservé à la mission 5.

**Partout : le mode libre se retrouve au retour.** Il n'était enregistré nulle part dans les premiers
pas ni dans les marmites : un simple rechargement de page renvoyait l'élève au parcours. Le mode et
le plan choisi sont désormais sauvegardés, comme la progression.

Les cinq missions de chaque simulation ont été rejouées pour vérifier que rien du parcours n'a bougé :
étapes, verrous d'outils et repères sont inchangés.

## v4.21.0 — 2026-08-05

🔧 **Deuxième vague de retours — le lot « ça casse ».** Six constats dont la cause a été localisée
dans le code, plus l'audit transversal qu'ils ont déclenché.

**Marmites, mission 8 : le parcours ne se terminait jamais.** *« Le mode libre ne se déclenche pas
automatiquement à la fin de la mission 8, dont le message de succès n'apparaît pas. »* La cause
était plus profonde : `allumer()` détournait la mission de l'incendie vers sa mise en scène et
sortait par un `return`, si bien que le chemin de réussite — test, bilan, questionnaire, écran de
passage — n'était **jamais emprunté**. La mission était gagnée dans l'état mais jamais enregistrée.
Le geste qui étouffe le feu conclut désormais la mission comme partout ailleurs, avec le bouton
« 🎓 Mission réussie — continuer ». Au passage, un **second chemin de réussite orphelin** (la modale
`v-feu`, devenue inaccessible quand les gestes sont passés sur le plan de travail en v4.17.0) a été
retiré : c'est exactement le genre de doublon qui avait produit le défaut.

**Marmites, mission 4 : l'étape qui se décochait.** *« Dès qu'on nettoie, la première tâche se
décroche et se considère comme non faite. »* L'étape « fais une flamme qui fume » testait l'état
**courant** de la flamme au lieu de se souvenir de l'acte accompli : la flamme bleue que l'étape
suivante réclame la rendait fausse. Les flammes obtenues sont maintenant mémorisées.

**Audit transversal des étapes.** Le défaut ci-dessus appartient à une famille : une étape qui décrit
un acte accompli ne doit pas relire l'état présent. Les **neuf simulations** ont été passées en revue.
Un seul autre cas trouvé — « allume et laisse la marmite noircir », que le nettoyage effaçait —,
corrigé de la même façon. Partout ailleurs, les étapes décrivent une **configuration exigée** et
relire l'état est le comportement juste.

**Pollution : le tuyau du moulin.** *« Lorsque le tuyau est monté plus haut, il faut qu'on puisse le
voir. »* Le défaut allait plus loin : la mission 3 **racontait** que Faton avait relevé son tuyau,
mais l'état disait le contraire et le panneau d'action restait verrouillé jusqu'à la mission 5. Le
tuyau était donc bas au dessin **et dans le calcul des mesures**, pendant toute la mission qui parle
de lui. Il est désormais relevé dès le départ — comme Faton l'affirme dans la scène —, dessiné haut
avec le **repère pointillé de sa hauteur d'origine** et une flèche « relevé ». Et parce que c'est le
sujet de la mission, il reste le **seul réglage manipulable** avant la mission 5 : on peut le baisser
et remesurer à son pied (418 µg/m³ tuyau bas contre 203 tuyau haut), pour constater que le voisin
immédiat respire mieux sans que le quartier reçoive un gramme de moins.

**Pollution : l'astuce du tribunal.** *« L'astuce qui dit de cliquer sur Vérifier est cachée car la
liste des étapes est rétractée. »* Une mission peut maintenant **épingler** son astuce : elle reste
lisible même plan replié. La dernière mission le fait, puisque son action ne se joue pas sur le plan
de travail. Les autres gardent le repli complet.

**Catalogue : deux cartes, un seul fichier.** « Trouve la bonne pile » et « Fabrique ta lampe de
poche » ouvraient **la même simulation**. La première rejoint la feuille de route et s'affiche
« bientôt », en attendant d'exister vraiment.

**Flamme de la bougie : le glissement sur mobile.** *« L'UX de déplacement des éléments testeurs est
très peu fluide. »* Deux causes. Le plan portait `touch-action: manipulation`, qui laisse au
navigateur le geste de défilement : le doigt était disputé entre le défilement et l'outil. Et la
conversion écran → scène inversait la matrice du SVG **à chaque mouvement du doigt**, soit une
lecture de géométrie par événement. Le plan prend maintenant le geste entièrement, la matrice est
calculée une fois par prise, et le texte ne se sélectionne plus sous le doigt.

## v4.20.0 — 2026-08-05

⚡ **Les premiers pas du circuit — on voit enfin le courant circuler.**

**Le courant circule sous les yeux de l'élève.** *« Voir la circulation du courant. »* Dès que le
circuit est fermé, des **flèches bleues avancent sur les fils** : elles sortent de la borne +,
descendent jusqu'au récepteur, en ressortent et remontent vers la borne −. Chaque tronçon parcouru
porte les siennes, y compris les fils de liaison qui relient les bornes à l'appareil, et une phrase
sous le montage rappelle le trajet. Rien ne bouge quand le courant ne passe pas : DEL à l'envers,
isolant intercalé, boucle ouverte — l'absence de mouvement fait partie de la leçon.

**Les objets sont dessinés pour de vrai.** *« Un vrai clou en fer, une règle graduée, un bout de
bois — pas un rectangle avec le nom écrit dessus. »* Les sept objets à tester ont chacun leur
dessin : le fil de cuivre est enroulé, le clou a sa tête plate et sa pointe, la règle porte ses
graduations et ses chiffres, la craie a sa bague de papier, le bois ses veines et son écorce, la
gomme ses deux bouts. Le même dessin sert de vignette dans le bac du bas. Dans le circuit, l'objet
est **tenu par deux pinces crocodiles**, comme sur une paillasse.

**La pile, la lampe et le moteur aussi.** La pile est devenue une **pile plate 4,5 V** avec son
étiquette et ses deux lamelles d'acier ; la lampe, une vraie ampoule — plot, bague isolante, culot
fileté, verre et **filament** ; le tourniquet, un petit moteur à carcasse et arbre de sortie.

**La broche longue de la DEL est dessinée longue.** *« Mission 4 : la broche la plus longue doit
être dessinée plus longue. »* La DEL est maintenant couchée, son corps à droite : la broche de la
grande borne mesure plus du double de l'autre, chacune nommée sur le plan. Les fils de liaison en
cuivre les relient aux bornes, distincts des broches en métal.

**Les hélices du tourniquet tournent vraiment.** *« Faire tourner les hélices pour de vrai, à une
vitesse qui laisse reconnaître le sens. »* Quatre pales bicolores tournent à **200 degrés par
seconde** — assez lentement pour qu'on lise le sens, assez vivement pour qu'on voie le mouvement —
et une flèche courbe en fait le tour dans le sens de rotation.

**Deux défauts trouvés au passage.** Les noms des bornes s'écrivaient à droite, par-dessus
l'appareil : ils passent au-dessus et au-dessous. Et en thème sombre, le **+ et le − de la pile
étaient blancs sur pastille blanche**, donc invisibles.

**Le titre ne se casse plus dans la colonne (huit simulations).** Sur écran large, « Les premiers
pas du circuit » s'affichait sur quatre lignes, écrasé par la rangée d'icônes. Les icônes passent
sous le titre. Vérifié sur les huit simulations à colonne.

Sur téléphone, le plan de mission se replie aussi dès le premier fil branché.

## v4.19.0 — 2026-08-05

🏘️ **Qui pollue vraiment ? — le quartier prend forme, et les chiffres reviennent dans les bilans.**

**Le quartier est redessiné.** *« Graphismes approximatifs : mets de vraies motos, arbres, etc. »*
Chaque source est devenue une petite scène : un manguier avec ses mangues et son banc, deux
**motos** complètes (roues à rayons, cadre, réservoir, selle, guidon, phare, pot d'échappement), le
zem d'Élie avec son conducteur en chemise jaune, un moulin à gas-oil sous son abri de tôle — moteur,
volant d'inertie, trémie, sacs de maïs et cheminée —, un coin cuisine avec son coal-pot, ses braises
et sa marmite, un tas d'ordures où l'on reconnaît le pneu, le carton et la bouteille, et une brousse
d'arbres calcinés dans les flammes. **Les quatre personnes qui donnent leur avis se tiennent
désormais près de leur source**, chacune signalée par une bulle. Le décor s'y ajoute : ciel dégradé,
collines, toits du quartier, et une bande de sol qui porte la rue. Les actions se voient : la cuisine
reçoit sa bouteille de gaz, les ordures deviennent des sacs fermés, la brousse reverdit, les arbres
plantés poussent dans les espaces libres de la rue.

**« Agir » se prend sur le plan de travail.** Le bouton quitte la barre d'icônes de l'en-tête pour
devenir une pastille posée sur la scène, en haut à droite — et **elle clignote quand la mission
demande de l'ouvrir**.

**La fiche du capteur ne déborde plus sur téléphone.** *« Modale du capteur trop encombrante sur
mobile, surtout quand elle porte beaucoup d'informations. »* La longue phrase de la personne d'à côté
en sort : elle a maintenant **sa propre bulle, sous la scène**, où la place ne manque pas. Le reste
se resserre — nom de lieu abrégé, verdict en version courte, chiffres plus compacts. Téléphone
couché, la fiche et la bulle se rangent dans les **marges de cadrage** laissées libres par la scène,
au lieu de la recouvrir.

**Les bilans citent les mesures.** *« Citer les valeurs mesurées dans les bilans des missions de
comparaison. »* Chaque mission réussie rappelle les chiffres relevés par l'élève avant d'énoncer sa
conclusion : « Près du Zem, dont la fumée est blanche : 612 µg/m³. Près du moulin, dont la fumée est
noire : 418 µg/m³. Ton capteur en compte 194 de plus du côté de la fumée blanche. » Les six missions
en ont un, repris sur l'écran de passage.

**Le plan de mission se replie de nouveau tout seul.** Sur téléphone, dès le premier glissement du
capteur : la fonction existait mais n'était appelée nulle part.

**Trois défauts trouvés au passage :** glisser le capteur sélectionnait les étiquettes de la rue
(corrigé) ; les nombres décimaux s'écrivaient à l'anglaise, « 45.7 » au lieu de « 45,7 » (corrigé
partout) ; et sur écran large, le titre de la simulation se cassait sur quatre lignes dans la
colonne — les icônes passent maintenant sous le titre.

**Le guide d'accueil ne s'ouvre plus indéfiniment (six simulations).** Il devait rester proposé
*tant que la première mission n'est pas gagnée* ; il testait `etat.faits` alors que ces fichiers
tiennent leur liste dans `etat.faites`, si bien qu'il s'ouvrait à **chaque** lancement, pour
toujours. Corrigé dans l'alambic, la lampe de poche, les marmites, les premiers pas, le tam-tam et
la pollution.

## v4.18.0 — 2026-08-03

💬 **Qui pollue vraiment ? — les mesures et le panneau d'action.**

**Les mesures ne se transmettent plus d'une mission à l'autre.** *« Une fois que des mesures sont
prises, elles sont gardées, et toutes les étapes des missions suivantes liées à ces mesures sont
directement barrées. Certes c'est un raccourci, mais cela donne une mauvaise UX d'apprentissage :
l'enfant doit refaire les mesures et faire les comparaisons pertinentes pour bien assimiler. »*
Chaque relevé porte désormais la mission où il a été pris, et une mission ne valide ses étapes
qu'avec **ses propres mesures**. Vérifié : quatre mesures prises en mission 1 y valident les trois
étapes, et laissent la mission 2 entièrement à faire. Le carnet conserve l'historique complet.

**Le panneau « Agir » s'ouvre en lecture seule.** *« Lorsqu'il est suggéré pour la première fois
d'ouvrir Agir et de voir ce que le quartier rejette chaque jour, que l'enfant n'ait pas la
possibilité de cocher une des cases. »* Avant la mission qui le demande, les six actions sont
visibles mais désactivées, avec un mot qui explique pourquoi et à quel moment elles s'ouvriront.
Le clic ne fait plus rien d'autre que le rappeler.

## v4.17.0 — 2026-08-03

🔥 **La lanterne de Sissi se joue sur le plan de travail.**

*« Elle parle d'un scénario où une lanterne s'embrase, mais sur l'établi on ne voit pas de
lanterne, ni de processus d'embrasement. Il serait intéressant de vraiment mener ces actions et
voir les résultats. »* La mission se réduisait à une liste de choix dans une fenêtre. Elle devient
une scène.

**L'embrasement se regarde.** La nuit tombe sur l'établi : la table de Sissi, son cahier ouvert, sa
lanterne allumée. Au lancement, le réservoir prend feu — les flammes montent seconde après seconde,
le pétrole se répand en flaque sombre, la fumée noire s'élève.

**Les quatre gestes se mènent pour de vrai**, chacun avec l'effet qu'il produit réellement :
- **le seau d'eau** tombe en gouttes… et la flaque enflammée **s'élargit** : le pétrole flotte ;
- **le sable** pleut sur le foyer et **étouffe** les flammes, qui s'éteignent ;
- **les feuilles vertes** battent le feu et le **dispersent en quatre foyers** au lieu d'un ;
- **l'extincteur** projette son nuage blanc et **éteint**.

Chaque geste ouvre son bilan : ce qu'on vient de voir, et pourquoi. On peut tous les essayer — la
mission ne demande pas de deviner du premier coup, mais d'avoir essayé l'eau et d'avoir trouvé un
geste qui éteint vraiment.

## v4.16.0 — 2026-08-03

🧑‍🏫 **Retours des testeurs — deuxième lot : le niveau de langue et les marmites.**

**« Des enfants qui sortent juste de l'école primaire »** — la remarque la plus importante des
retours. **Vingt-trois passages ont été réécrits** dans trois simulations. L'exemple cité était
juste : la bonne réponse à « d'où vient le noir de la marmite ? » tenait en une phrase savante —
« c'est du carbone : du pétrole qui n'a pas brûlé faute de dioxygène » — alors que la simulation
venait d'enseigner la chose pas à pas. Elle devient : « c'est du pétrole qui n'a pas fini de
brûler, parce qu'il manquait d'air », et l'explication refait tout le chemin dans l'ordre où
l'élève l'a parcouru : la mèche apporte le pétrole, l'arrivée d'air apporte le dioxygène, il y a
trop de l'un et pas assez de l'autre, donc une partie ne peut pas brûler. Même travail sur la
flamme de la bougie et la fabrique de glace.

**Les témoins sont sur l'établi** — *« au lieu d'aller cliquer sur l'icône du tube à essai qui
affiche une modale, on ramène pour de vrai les éléments sur le plan de travail »*. Une paillasse
porte maintenant la **soucoupe**, le **verre d'eau de chaux** et la **coupelle de poudre blanche**.
On en prend un d'un doigt, il vient au-dessus de la flamme, et sa réaction se dessine sous les
yeux : la soucoupe se couvre de noir, le liquide devient blanc et trouble, la poudre bleuit.
Tenir un témoin au-dessus du feu suppose d'ôter la marmite : elle s'écarte d'elle-même.

**Trois tests, trois missions** — *« vu que ce sont des notions importantes, qu'on les prenne un à
un dans une mission dédiée »*. La mission unique qui enchaînait quatre tests devient **la
soucoupe**, **l'eau de chaux** et **le sulfate de cuivre**, chacune avec ses étapes, sa conclusion
et ses deux questions. La mission de la soucoupe fait faire l'essai **deux fois** — flamme qui
fume, puis flamme bleue — comme demandé. Le parcours passe de six à **huit missions**.

Nettoyer la marmite lave aussi la soucoupe et la repose sur la paillasse, pour que le second essai
reparte d'un état propre.

## v4.15.0 — 2026-08-03

🧪 **Retours des testeurs — premier lot : ce qui touchait toutes les simulations.**

**La bonne réponse n'est plus toujours la première** — *« l'enfant peut cliquer nonchalamment sur
le premier choix à chaque fois »*. Le constat était vérifié : sur huit simulations, la bonne
réponse occupait la **première position dans 100 % des questions**. Les propositions sont
désormais mélangées à l'ouverture de chaque questionnaire, et l'indice de la bonne réponse
recalculé. Neuf simulations corrigées, vérifiées par tirage : sur 40 ouvertures, les trois
positions sortent à parts comparables.

**Le guide n'apparaissait plus** — il ne s'ouvrait qu'à la toute première visite, puis plus
jamais : un élève qui revient, ou qui reprend l'appareil d'un camarade, tombait directement sur le
plan de travail. Il est maintenant proposé **tant que la première mission n'est pas gagnée**, et
reste accessible par le bouton ❓. Huit simulations.

**Le guide présente les parties de l'écran** — pour les deux simulations les plus denses (la
flamme et la fabrique de glace), il commence par un repérage : où sont les thermomètres, le
chrono, le montage, la courbe, les réglages, la mission et son chevron.

**Sur mobile, les étapes avaient disparu** — régression réelle : le style n'affiche, panneau
replié, que l'étape portant une classe précise, et cette classe n'était jamais posée ; le repli
basculait par-dessus le marché une classe inexistante. L'étape en cours est de nouveau visible, le
chevron déploie la liste complète. Les étapes franchies retrouvent aussi leur texte barré.

**Le bilan n'est plus recouvert** — *« on n'a même pas le temps de lire que la modale de mission
réussie apparaît »*. Le questionnaire s'ouvrait sur minuterie. Il attend désormais que l'élève
ferme son bilan : le bouton devient **« 🎓 Mission réussie — continuer »** et c'est lui qui
enchaîne.

**Les outils se saisissent par tout leur corps** (la flamme de la bougie) — le point de contact
était la pointe même de l'objet, qui sautait sous le doigt. On attrape maintenant le thermomètre,
la soucoupe, le fil ou l'allumette n'importe où sur leur longueur : la pointe garde sa position
relative pendant le déplacement, et reste seule à donner la mesure. Poser le doigt à côté de
l'outil l'y amène, comme avant.

**Les curseurs partent au repos** (les marmites noircies) — mèche, air et hauteur étaient déjà
réglés à l'ouverture. Ils sont à zéro au départ **et au début de chaque mission** : c'est l'élève
qui pose son réglage.

**Le curseur de sel ne mentait plus** (la fabrique de glace) — au changement de mission, la valeur
repartait de zéro mais la poignée restait en place : l'affichage et l'effet se contredisaient.

**Le récipient ne ressemble plus à de l'eau** (la fabrique de glace) — *« difficile de parler de
givre alors que le flacon a l'air d'être dans de l'eau »*. Le mélange est redessiné en **glace
pilée serrée** avec un simple fond de saumure, le flacon **émerge** nettement, et le givre ne se
dépose que sur sa partie à l'air libre. Deux étiquettes sur pastille disent ce qu'il y a dans le
récipient et ce qu'il y a autour.

## v4.14.0 — 2026-08-02

🧊 **Nouvelle simulation : Fabrique de la glace** (PCT 6ᵉ, SA4) — comment geler de l'eau en pleine
chaleur, sans congélateur. Cinq missions sur le gabarit atelier, avec une **courbe
température-temps** qui se trace pendant l'expérience.

**Ce que l'élève fait**
- **Mission 1 — De la glace, et rien d'autre.** Le flacon d'eau dans la glace pilée : le mélange
  ne descend jamais sous 0 °C et l'eau ne gèle pas. Il faut plus froid
- **Mission 2 — Le sel qui refroidit.** Le curseur de sel fait plonger le mélange jusqu'à
  **−21 °C** vers 23 %. Au-delà, le sel ne se dissout plus : les grains s'accumulent au fond et
  rien ne change
- **Mission 3 — Garder le froid.** Deux essais de cinq minutes, sans rien puis avec du
  polystyrène, et le relevé se prend tout seul : **1,2 °C** contre **−13,9 °C**. Un isolant ne
  fabrique pas de froid, il ralentit la chaleur qui entre
- **Mission 4 — Fabrique ta glace.** Avec 23 % de sel et du polystyrène, l'eau du flacon gèle. La
  courbe montre le **palier de solidification** : la température reste bloquée à 0 °C pendant six
  minutes, puis repart vers le bas une fois la glace complète
- **Mission 5 — Le givre sur le flacon.** Un dépôt blanc se forme sur la paroi glacée. Essuyé, il
  revient : il ne sort pas du flacon fermé mais de la **vapeur d'eau de l'air**, qui se dépose
  directement en glace — la **condensation solide**

**Le modèle, validé avant l'interface**
Douze vérifications passées sous Node : la courbe de température du mélange interpolée entre des
points mesurés (0, −6,5, −11, −16,5, −21,1 °C) plutôt qu'inventée, la saturation à 23,3 %, le
classement des quatre isolants, l'échec de la congélation sans isolant, et l'existence d'un palier
d'au moins une minute à 0 °C.

**Deux dispositions selon l'écran**
Le plan choisit sa mise en page : montage à gauche et courbe à droite quand c'est large, l'un
au-dessus de l'autre en portrait. Le montage se décale de lui-même pour ne jamais passer sous le
panneau des deux thermomètres.

## v4.13.0 — 2026-08-02

🕯️ **Nouvelle simulation : La flamme de la bougie** (PCT 6ᵉ, SA3) — complément de la SA3, qui
attendait encore deux activités du guide : les trois parties de la flamme et la composition de
l'air. Les deux tiennent dans une seule simulation, en cinq missions.

**Ce que l'élève fait**
- **Mission 1 — Les trois parties.** Il promène un thermomètre dans la flamme ; le panneau de
  lecture nomme la partie touchée et donne sa température. Zone sombre au cœur, grande zone
  lumineuse, liseré bleu au bord et à la base
- **Mission 2 — Où fait-il le plus chaud ?** Il mesure les trois parties, puis chauffe un fil de
  cuivre : le fil ne rougit que dans le liseré bleu, à 1400 °C. Le cœur sombre est le plus froid —
  contre-intuitif, et c'est précisément le point du programme
- **Mission 3 — D'où vient le noir de fumée ?** Une soucoupe tenue dans la zone lumineuse se
  couvre de carbone ; nettoyée puis tenue dans le liseré bleu, elle reste propre. Le lien est fait
  avec la SA3 des marmites noircies
- **Mission 4 — L'allumette qui ne brûle pas au milieu.** Posée en travers de la flamme, elle
  ressort avec **deux marques et un milieu intact** : la flamme est creuse, elle brûle sur ses bords
- **Mission 5 — De quoi est fait l'air ?** Bougie allumée sur l'eau, cloche posée dessus : la
  flamme s'éteint d'elle-même et l'eau monte d'un cinquième, lu sur une graduation en cinq parts.
  La cloche reste pleine de gaz — les quatre cinquièmes de diazote

**Le modèle, validé avant l'interface**
Seize vérifications passées sous Node avant d'écrire une ligne d'interface : position et
température des trois parties, dépôt de carbone réservé à la zone lumineuse, allumette intacte au
centre et brûlée aux bords, montée d'eau entre 15 et 22 % du volume. Deux d'entre elles portent sur
l'ergonomie et non sur la physique — **chaque partie doit offrir une bande assez large pour être
visée au doigt** sur un écran de 412 px ; c'est ce test qui a conduit à resserrer le cœur sombre
et à affiner le fuseau.

**La scène se dimensionne à la place disponible**
Aucune dimension figée : la flamme, la bougie, la table et la cloche se recalculent à partir de la
taille réelle du plan. Le cadrage suit même l'outil en main — l'allumette traverse la flamme de
part en part, la scène se recentre pour qu'elle tienne entière. En paysage sur téléphone, le bac
d'outils passe par-dessus le plan : la flamme y gagne 60 % de hauteur.

Le catalogue fusionne les deux entrées prévues — « La flamme de la bougie » et « De quoi est fait
l'air ? » — en une seule : la simulation couvre les deux activités.

## v4.12.1 — 2026-08-02

📐 **Composition de la scène des combustions** — suite de la passe d'ergonomie : le panneau de
travail laissait un vide au milieu, et les éléments étaient dessinés à des tailles fixes qui ne
suivaient pas l'écran.

- **La scène est mise à l'échelle** : bougie, flamme, halo, fumée et tube d'eau de chaux
  s'adaptent à la place disponible au lieu de garder des dimensions figées. Le vide entre le
  panneau d'informations et la paillasse a disparu
- **La cloche a sa propre contrainte de largeur.** Elle mesurait jusqu'à 340 px de large pour
  412 px d'écran en portrait : à plein volume, elle **sortait du cadre**. Ses dimensions
  naturelles sont resserrées et son échelle est bornée par trois critères — la hauteur libre,
  la place à laisser au tube d'eau de chaux à gauche, et celle des jauges à droite
- **La cloche contient toujours la bougie et sa flamme**, avec de l'air au-dessus : sa hauteur
  minimale est calculée à partir de celle de la bougie plutôt que fixée
- **Le tube d'eau de chaux et son étiquette restent entièrement lisibles** : ils se placent à
  gauche de la cloche, qui leur réserve la place nécessaire

Le défaut de largeur de la cloche préexistait à la passe d'ergonomie : il n'apparaissait qu'en
posant la cloche à son volume maximal sur un écran étroit, cas qu'aucune capture précédente
n'avait montré.

## v4.12.0 — 2026-08-02

🔍 **Passe d'ergonomie sur les onze simulations** — retour utilisateur : « sur la SA3 l'UX est
claquée, la partie “ce que tu retiens” n'est pas lisible et la présentation du panneau de travail
n'est pas top ». Le constat était juste, et les défauts allaient au-delà de la SA3.

**Lisibilité — « Ce que tu as appris »**
L'harmonisation avait laissé l'ancien encadré vert **imbriqué** dans le nouveau bloc bleu : un
double fond, avec du texte vert foncé par-dessus. Six simulations étaient touchées. Le bloc est
désormais uni, contraste mesuré à **10,1**.

**Lisibilité — textes d'accent**
Faute d'accessibilité de fond : « Mission 1 sur 6 », les intitulés de sections et les étiquettes
utilisaient le bleu d'accent #5BC5F2 **comme couleur de texte**. Sur fond clair, cela donne un
contraste de **2,0** — largement sous le seuil de 4,5. Le design system l'énonçait pour le blanc
sur fond coloré ; la réciproque était tout aussi vraie. Une variante foncée `--accent-texte` a
été introduite et appliquée aux **onze** simulations.

**Lisibilité — bandeaux d'état**
Les bandeaux verts et orange portaient du texte blanc à 2 ou 3 de contraste. Les teintes
porteuses sont assombries : le blanc y est maintenant lisible (4,8 à 5,9).

**Panneau de travail des combustions**
- Le panneau de formule utilisait une police **monospace** en `nowrap` : les phrases étaient
  coupées en plein milieu — « combustible : la cire de la boug… ». Police du corps, retour à la
  ligne autorisé
- Le bouton **Allumer**, action motrice de la simulation, était un bouton neutre pâle : il prend
  le lime des actions principales
- La paillasse occupait un quart de l'écran dans un brun très saturé : elle descend à 85 % et
  adopte un ton bois cohérent avec le reste
- La bougie gardait une taille fixe quelle que soit la place : elle s'adapte désormais à l'écran

Vérification automatisée sur les onze simulations — textes tronqués, polices monospace
résiduelles, contrastes sous 3, débordements horizontaux : **aucun défaut restant**.

## v4.11.0 — 2026-08-02

🔌 **Nouvelle simulation : « Les premiers pas du circuit »** (PCT 6ᵉ, SA1) — elle couvre
**trois activités expérimentales du guide** qui attendaient encore.

Avant de construire des montages en série et en dérivation, il faut savoir faire le plus simple :
allumer une lampe avec une pile. C'est l'activité n°1 du guide, et elle manquait.

- **On branche en touchant deux bornes** : une borne de la pile, une borne du récepteur, et le
  fil apparaît. Toucher un fil le débranche. Les bornes portent leur vrai nom — **culot** et
  **plot central** pour la lampe, comme le demande le guide
- **Activité 1 — Allumer la lampe** : il faut relier les **deux** bornes, sur des bornes
  **différentes** de chaque côté. Une mission entière est consacrée à l'erreur classique — les
  deux fils sur la même borne — parce qu'on apprend autant de ce qui ne marche pas
- **Activité 3 — Conducteurs et isolants** : sept objets du guide à intercaler dans le circuit
  (fil de cuivre, clou en fer, fil d'aluminium, règle en plastique, bâton de craie, bois sec,
  gomme). Le classement se construit au fil des essais et se consulte à tout moment ; l'élève
  découvre que **tous les conducteurs sont des métaux**
- **Activité 3 — Sens du courant** : la **DEL** ne s'allume que dans un sens. En la retournant,
  l'élève établit lui-même que le courant sort de la borne **+**
- **Le tourniquet de Vignon**, réinvestissement du guide : le moteur change de sens quand on
  inverse la pile — et les pales tournent à l'écran dans le bon sens
- **5 missions**, 8 questions de QCM et un **lexique de 10 mots**

L'activité 4 du guide — l'adaptation générateur / récepteur, avec sous-tension et surtension —
était déjà couverte par l'atelier « Fabrique ta lampe de poche » : le catalogue y renvoie
désormais explicitement.

## v4.10.0 — 2026-08-02

🎨 **Les cinq dernières simulations passent au standard actuel.** Tout le catalogue partage
désormais la même identité et le même enchaînement : combustions, états de la matière, banc
d'optique, molécules en 3D et transformations du plan rejoignent le circuit et les ateliers.

- **Design system Labo-Bénin** : polices Baloo 2 et Inter, surfaces « paper », accent PCT,
  boutons d'action en lime. 556 déclarations de couleur converties au total
- **Toutes les étapes de la mission sont visibles**, barrées à mesure, avec la pastille de
  l'étape en cours qui pulse
- **L'écran de fin annonce la mission suivante** — numéro, titre et première consigne — avec
  un bouton « Commencer la mission N → »
- Les **écrans de démarrage** et l'invite « tourne ton téléphone » du banc d'optique, restés
  en bleu roi, adoptent eux aussi le fond clair du design system

La conversion des couleurs a été refaite **par rôle de propriété** (fond, texte, bordure) et non
plus par valeur, précisément pour éviter le défaut rencontré sur le circuit en v4.7.0 : les
mêmes teintes servaient de fond en thème clair et de texte en thème sombre. Contraste vérifié
au navigateur sur les cinq, dans les deux thèmes — de 12 à 13,7 pour 4,5 exigé.

## v4.9.0 — 2026-08-02

🍲 **Nouvelle simulation : « Pourquoi mes marmites noircissent ? »** (PCT 6ᵉ, SA3) — la
**situation de départ du guide**, qui n'était pas traitée.

Thérèse rend visite à la mère de Daouda et s'étonne : marmites et murs sont couverts de noir de
fumée, alors qu'elle-même utilise « le même réchaud et le même pétrole » sans rien salir. Toute
la SA3 tient dans cette énigme — et la réponse est le **réglage**.

- **Trois curseurs** : hauteur de la mèche, arrivée d'air, hauteur de la marmite. La flamme
  change de couleur en direct — **bleue** quand tout brûle, jaune puis **orange fuligineuse**
  quand le dioxygène manque
- **La cuisson se déroule dans le temps** : la température monte, la marmite **noircit sous les
  yeux**, le mur se salit aussi. Les deux réglages du guide donnent des résultats opposés :
  celui de la mère de Daouda dépose **9 626 mg de suie** et n'atteint même pas l'ébullition en
  25 min ; celui de Thérèse fait bouillir en **14 min sans une trace**
- **Une flamme jaune gaspille** : rendement de 12 % contre 52 %, et davantage de pétrole
  consommé. Mal régler coûte cher, en plus de salir
- **Les trois témoins du guide** identifient ce qui se forme : la **soucoupe froide** ressort
  noircie de carbone (ou seulement embuée si la combustion est complète), l'**eau de chaux**
  se trouble — dioxyde de carbone —, le **sulfate de cuivre** bleuit — eau
- **Le réinvestissement du guide** ferme le parcours : la lanterne de Sissi s'embrase, et
  l'élève choisit entre l'eau, le sable, les feuilles vertes et l'extincteur. **L'eau étale le
  feu** — le pétrole flotte dessus
- **6 missions**, 10 questions de QCM et un **lexique de 13 mots** (combustible, comburant,
  triangle du feu, combustion complète et incomplète, noir de fumée, monoxyde de carbone,
  tests d'identification, composition de l'air, rendement)

Correctif trouvé en test : l'affichage du résultat d'un test était écrasé par le rafraîchissement
de la liste, juste après avoir été écrit — aucun test ne montrait jamais sa réponse.

## v4.8.0 — 2026-08-02

💬 **Nouvelle simulation : « Qui pollue vraiment ? »** (PCT 6ᵉ, SA5) — et avec elle, le
**troisième gabarit** du projet : ni expliquer un phénomène, ni fabriquer un objet, mais
**enquêter et prendre position**.

La SA5 pèse **26 heures**, un tiers du volume horaire de l'année, et n'avait aucune couverture.
Le guide fournit une scène clé en main : devant l'article « Feu de brousse dans la région de
Sota », quatre personnes affirment chacune quelque chose de partiellement faux.

**Le principe : on ne discute pas d'opinions, on mesure.** L'élève fait glisser un capteur d'air
le long de la rue de son quartier. Le capteur affiche en direct les **poussières fines** (µg/m³)
et le **monoxyde de carbone** (ppm) là où il se trouve, et la parole du personnage voisin
s'affiche à côté du chiffre — de sorte que l'affirmation et la mesure se contredisent sous les yeux.

- **Les quatre raisonnements du guide sont démontés par les relevés**, sans caricature :
  la **fumée blanche** du Zem d'Élie pollue **plus** que la fumée noire du moulin (612 contre
  418 µg/m³), car elle est faite d'huile imbrûlée ; le **tuyau relevé** de Faton soulage son
  voisin immédiat mais ne change rien à 12 m et **pas un gramme** de ce qui est rejeté chaque
  jour ; la **moto neuve** de Yèmi fume peu mais dégage autant de monoxyde de carbone que le
  moulin ; le **vieux Fignon** se trompe sur le passé — le feu de bois polluait beaucoup — mais
  vise juste sur l'essentiel, les feux de brousse pesant plus lourd que tout le reste réuni
- **Un carnet de mesures** conserve les relevés : ce sont eux qui servent de preuves
- **Le tribunal des idées** : l'élève juge les quatre affirmations — vrai, en partie vrai, faux —
  et reçoit l'explication adossée à ses propres mesures. C'est le moment de la prise de position
- **Un panneau « Agir »** : chaque action réduit ce que le quartier rejette chaque jour, et se
  voit sur la scène — le moteur réglé fume moins, la cuisine passe au gaz, la brousse reverdit.
  Relever un tuyau, lui, affiche « ne réduit rien »
- **6 missions**, 10 questions de QCM et un **lexique de 13 mots** (poussières fines, monoxyde
  de carbone, combustion incomplète, imbrûlés, effet de serre, couche d'ozone, déforestation,
  développement durable, prendre position)
- Données calibrées sur les ordres de grandeur réels et validées par 16 tests avant l'écriture
  de l'interface

## v4.7.0 — 2026-08-02

⚡ **Le circuit électrique passe au standard actuel.** C'est la SA1, la première simulation de
l'année, et celle qui précède immédiatement la lampe de poche : la rupture d'expérience entre
les deux sautait aux yeux.

- **Design system Labo-Bénin** appliqué : polices Baloo 2 et Inter, fond et surfaces « paper »,
  bordures douces, accent bleu PCT, boutons d'action en lime. Le bleu roi et les dégradés de
  l'ancienne version ont disparu
- **Toutes les étapes de la mission sont visibles**, comme dans les ateliers : celles qui sont
  faites barrées avec une coche verte, celle en cours en gras avec sa pastille qui pulse.
  Auparavant une seule étape s'affichait à la fois, sans vue d'ensemble
- **L'écran de fin de mission annonce la suivante** : ce qu'on vient d'apprendre, puis le
  numéro, le titre et la première consigne de la mission à venir, avec un bouton
  « Commencer la mission N → ». Le changement de mission ne passe plus inaperçu
- Barre de mission réorganisée : les étapes occupent toute la largeur, les boutons passent
  dessous ; l'en-tête défile sur petit écran au lieu de tronquer ses boutons

Correctif de thème : `#eceff1` et `#cfd8dc` servaient à la fois de fond clair et de couleur de
texte en mode nuit. La conversion aux jetons les avait tous transformés en couleurs de surface,
rendant **39 déclarations de texte illisibles sur fond sombre** — corrigé et vérifié.

## v4.6.0 — 2026-08-02

🥁 **Nouvelle simulation : « Fabrique ton tam-tam »** (PCT 6ᵉ, SA6) — troisième et dernier
atelier de fabrication. **Les trois SA technologiques de 6ᵉ sont désormais couvertes.**

Le guide part de la préparation du **kaléta** de fin d'année : les tam-tams du quartier ont
disparu, il faut en fabriquer avec ce qu'on trouve — boîte de lait, calebasse, tronc évidé,
ballon de baudruche, peau de chèvre, papier de sac de ciment, ficelle.

- **La peau vibre sous les yeux, ralentie 80 fois.** Une membrane à 120 Hz est invisible ;
  au ralenti, on voit le va-et-vient, les **grains de riz sauter** dessus, les **ondes partir
  dans l'air** et un **oscillogramme** tracer la vibration amortie. C'est la « nature vibratoire
  du son » que demande le programme, montrée plutôt qu'énoncée
- **Les trois lois de régulation du son sont manipulables**, et vérifiées par test :
  le **diamètre** (boîte de lait 296 Hz contre tronc évidé 85 Hz), la **tension** — un curseur
  dédié, avec le rapport en racine carrée exact (×4 de tension = ×2 de fréquence) — et la
  **masse de la peau** (ballon 184 Hz contre peau de chèvre 119 Hz)
- **Les erreurs se voient** : une peau trop tendue **se déchire à l'écran**, en lambeaux ;
  une peau trop molle fait un bruit sourd ; le collage interdit de retendre, donc d'accorder
- **6 missions** : faire sonner → obtenir un grave → monter dans les aigus → **accorder sur
  200 Hz** → fabriquer solide pour toute la fête → le tam-tam qui mènera le kaléta
- **10 questions de QCM** et un **lexique de 14 mots** (son, vibration, fréquence, hertz,
  hauteur, grave et aigu, tension, caisse de résonance, intensité, timbre, propagation,
  percussion, kaléta)
- **Le son est coupé par défaut** : le visuel se suffit à lui-même, et un bouton 🔇 / 🔊
  permet de l'activer quand le contexte s'y prête. Il est alors synthétisé à la volée — modes
  d'une membrane, non harmoniques comme une vraie peau — sans aucun fichier à télécharger

## v4.5.0 — 2026-08-02

🔥 **L'alambic se déroule sous les yeux** — retour testeur, et il touchait le cœur pédagogique :
la SA4 porte sur un **processus**, pas sur un résultat. Voir l'eau quitter la chaudière pour
remplir le flacon *est* la leçon. La simulation calculait tout d'un coup ; elle se déroule
maintenant dans le temps.

- **Les flammes naissent à l'allumage**, et diffèrent selon le réchaud : bleue et régulière pour
  le gaz, jaune franche pour le pétrole, orangée et vacillante pour le feu de bois
- **La température monte progressivement** sur le thermomètre, jusqu'au **palier à 100 °C** —
  2,4 min au gaz contre 7 min au feu de bois, la différence se voit et s'attend
- **L'ébullition se déclenche** : frémissement dès 85 °C, puis bulles franches
- **La vapeur circule dans le tuyau** sous forme de bouffées qui progressent, **blanches tant
  qu'elles sont gazeuses, bleues une fois condensées** dans le réfrigérant — la transformation
  se voit à l'endroit exact où elle se produit
- **Le niveau d'eau baisse dans la chaudière** pendant que **le flacon se remplit**, les deux
  volumes affichés en millilitres
- **Le sel se dépose au fond** à mesure que l'eau s'en va : il ne s'évapore pas
- **La vapeur s'échappe** en nuages selon le chapiteau — partout sans couvercle, sur les côtés
  avec un couvercle simplement posé, nulle part avec un couvercle luté
- **Le roseau noircit** progressivement au passage de la vapeur brûlante : la carbonisation
  n'est plus annoncée, elle est visible
- Le bouton devient **⏹ Arrêter le feu** pendant la chauffe puis **🔄 Recommencer**, avec un
  **⏩ ×3** pour accélérer. Toute modification du montage interrompt le feu et repart à zéro
- Une distillation complète se regarde en une vingtaine de secondes, moins en accéléré

Effet de bord bienvenu : le plan de travail occupe désormais **72 % de l'écran en portrait**
contre 24 % auparavant, les repères ayant été resserrés.

## v4.4.0 — 2026-08-01

⚗️ **Nouvelle simulation : « Construis ton alambic »** (PCT 6ᵉ, SA4) — deuxième atelier de
fabrication, et remise de la SA4 dans l'axe du programme.

Le recensement du guide officiel avait montré que la SA4 était **hors cible** : notre simulation
« États de la matière » fait observer des paliers de température, alors que le programme demande
de **fabriquer un distillateur** et de dire dans quel état est l'eau **dans chaque partie**.
C'est désormais couvert.

- **Sept éléments à choisir**, tous cités par le guide : source de chaleur (feu de bois, réchaud
  à pétrole, réchaud à gaz), chaudière (marmite, boîte de conserve, bidon), contenu, chapiteau,
  tuyau (cuivre, verre, roseau), réfrigérant (serpentin dans l'eau froide, linge mouillé), flacon
- **L'état de l'eau est écrit dans chaque partie** pendant la distillation — LIQUIDE dans la
  chaudière, VAPEUR (GAZ) dans le tuyau, LIQUIDE dans le flacon — avec les changements d'état
  nommés à l'endroit où ils se produisent : **↑ vaporisation** sur le feu, **↓ condensation** au
  réfrigérant. C'est le cœur de la SA4
- **Physique calculée**, validée par 15 tests avant l'écriture de l'interface : montée à 100 °C
  (2,4 min au gaz, 7 min au feu de bois), palier d'ébullition, chaleur latente de vaporisation,
  rendement selon l'étanchéité et la qualité du refroidissement. 72 montages sûrs dépassent 100 mL
- **La sécurité est vécue**, comme y insiste le guide : une chaudière fermée sans tuyau de sortie
  déclenche un avertissement de surpression ; un bidon en plastique fond sur le feu ; un roseau
  se carbonise et donne un goût de fumée au distillat
- **6 missions** : faire bouillir l'eau → attraper la vapeur → la transformer en gouttes →
  distiller de l'eau salée (le sel reste au fond) → chercher le meilleur rendement →
  **extraire une huile essentielle** par entraînement à la vapeur, le réinvestissement du guide
- **10 questions de QCM** et un **lexique de 14 mots** (alambic, chaudière, chapiteau, réfrigérant,
  distillat, les trois états, vaporisation, condensation, ébullition, fusion, sublimation,
  entraînement à la vapeur, buée)

🔌 **Lampe de poche** — retour testeur : il manquait la **liaison entre la borne + de la dernière
pile et le plot de l'ampoule**. Le fil de retour existait, mais rien ne montrait par où le courant
*arrive* à l'ampoule : le circuit paraissait ouvert. Le conducteur est maintenant tracé, et
s'épaissit avec le fil de retour quand la lampe éclaire.

## v4.3.1 — 2026-08-01

💡 **L'ampoule était au mauvais endroit** — retour testeur, et ce n'était pas qu'un détail de dessin.

Elle était logée dans le **corps** du boîtier, avec le réflecteur placé devant elle. Or sur une
vraie lampe de poche, l'ampoule se visse dans la **tête**, au creux du réflecteur qui l'entoure.
Un élève de 6ᵉ pouvait donc mémoriser un schéma faux — et surtout, la disposition contredisait
la notion même que la mission « Loin devant » cherche à installer : **le réflecteur ne renvoie la
lumière vers l'avant que parce qu'il entoure l'ampoule**.

- La **tête est allongée** pour loger la douille, l'ampoule et le réflecteur
- L'**ampoule est placée au foyer**, à l'entrée de l'entonnoir, culot vissé dans la douille
- Le **réflecteur est dessiné en deux parois évasées qui entourent l'ampoule**, au lieu d'un
  panneau posé devant elle
- Le **fil de retour** rejoint la douille à l'entrée de la tête
- Les textes suivent : le rôle de l'ampoule précise qu'elle se loge dans la tête « et jamais dans
  le corps où logent les piles » ; celui du réflecteur explique que c'est **parce qu'il entoure
  l'ampoule** qu'il porte plus loin ; l'explication du QCM du réflecteur le redit ; une entrée
  **« Tête de la lampe »** entre au lexique (douille, réflecteur, vitre)

## v4.3.0 — 2026-08-01

🔁 **Retours testeurs : le passage d'une mission à l'autre** — c'était le point noir, il est repris
en entier.

Le diagnostic des testeurs était juste : l'établi restait garni entre deux missions, et **tout le
reste en découlait**. La barre de progression paraissait déjà pleine, les étapes de la mission
suivante s'affichaient barrées d'office (l'assemblage précédent les satisfaisait), et rien
n'annonçait le changement de mission.

- **Écran de passage** entre deux missions : « Mission 1 réussie », ce que l'élève vient
  d'apprendre, puis l'annonce de la suivante avec son numéro, son titre, son but, et un bouton
  **« Commencer la mission 2 → »**. Le CTA manquant est là
- **Chaque mission repart d'un établi vide** : on refabrique une lampe, comme le demandaient
  les testeurs. Progression à zéro, aucune étape barrée d'avance
- **Le numéro de mission est affiché en permanence** : « Mission 2 sur 6 »
- **Bouton « Recommencer tout le parcours »** rétabli, dans la fenêtre des missions

📊 **Le panneau de mesures ne masque plus la lampe** (proposition des testeurs, adoptée) :

- Après un test, un bouton **« 📊 Voir les mesures » clignote** sur le plan de travail ; l'élève
  l'ouvre quand il veut. La lampe reste visible
- Le panneau ne s'ouvre de lui-même que lorsqu'il apporte quelque chose : une **panne à
  diagnostiquer**, une **ampoule grillée**, ou une **mission réussie** — et il porte alors une
  **croix pour le réduire**
- Quand la lampe éclaire sans satisfaire la mission, le panneau rappelle **ce qu'il reste à faire**

🔌 **Le fil de retour est dessiné** dans le boîtier, du contact du fond au culot de l'ampoule.
Il fait partie du boîtier — l'élève ne le choisit pas — et s'épaissit quand la lampe éclaire :
on voit enfin par où le courant revient, notion pourtant présente au lexique.

📱 **Mobile** : le plan de la mission se replie tout seul dès la première pièce posée, pour rendre
la place à la lampe ; seule l'étape en cours reste affichée, et un bouton la redéploie. La lampe
occupe 49 % de l'écran en portrait, 56 % en paysage, 69 % sur PC.

Correctif de guidage : les étapes visant « une lampe complète » n'avaient pas de cible, donc
**rien ne clignotait** ; elles pointent maintenant vers la première pièce manquante.

## v4.2.0 — 2026-07-28

🧭 **Retours testeurs sur l'atelier de fabrication** — guidage et disposition entièrement repris.

**Le bac permanent est supprimé.** C'était la cause des deux problèmes signalés : il mangeait
la moitié de l'écran en portrait, rendait la lampe presque invisible en paysage, imposait un
défilement horizontal pénible à la souris sur PC — et ne laissait plus de place pour guider.

- **On touche l'emplacement, pas une barre** : chaque emplacement de la lampe (boîtier, piles,
  ampoule, contact, interrupteur, réflecteur, vitre) s'ouvre sur une feuille ne montrant que
  **ses** variantes, en grille, avec le rôle du composant expliqué en tête. Plus aucun
  défilement horizontal, dans aucun format
- **La lampe récupère l'écran** : elle occupe 56 % de la surface en paysage, contre une bande
  résiduelle auparavant. Sur grand écran, la mission passe en colonne à gauche
- **La barre de mission remonte en haut** de l'écran

🎓 **Guidage pas à pas, comme demandé pour des élèves de 6ᵉ** :

- Chaque mission se décompose en **étapes cochables** : « choisis un boîtier », « glisse au
  moins une pile », « visse une ampoule », « pose un contact au fond », « appuie sur Tester ».
  L'étape en cours est en gras, les précédentes barrées
- **L'emplacement à remplir clignote en bleu sur la lampe**, et le bouton Tester s'anime
  quand c'est lui qu'on attend
- Une **astuce** accompagne chaque mission, et la feuille de choix signale l'option
  **conseillée** au regard de la mission en cours
- **Les missions se suivent** : chacune déverrouille la suivante
- **QCM « Je m'évalue » après chaque mission réussie** (10 questions au total), avec icônes
  ✔️ / ❌ et explication de ce qui rendait la réponse fausse
- **Lexique de 15 mots** (circuit, générateur, récepteur, bornes, tension d'usage,
  sous-tension, surtension, piles en série, en opposition, filament, culot et plot, ressort,
  autonomie, démarche technologique), atteignable à tout moment
- **Guide d'accueil** au premier lancement, en cinq points

Correctifs d'affichage : les étiquettes « Ampoule » et « Réflecteur » se chevauchaient ;
zones tactiles agrandies pour le doigt.

## v4.1.0 — 2026-07-28

🔦 **Nouveau gabarit : l'atelier de fabrication** — et sa première simulation,
**« Fabrique ta lampe de poche »** (PCT 6ᵉ, SA2).

Trois des six SA de 6ᵉ relèvent de la **démarche technologique** (CD2) : on n'y explique
pas un phénomène, on fabrique un objet qui marche. Ce gabarit était le trou le plus large
du catalogue ; il est prototypé ici sur la lampe de poche, la SA la plus proche de ce que
le moteur électrique sait déjà faire.

- **Plusieurs assemblages réussissent** — c'est la différence de fond avec les simulations
  d'observation. On n'évalue plus juste/faux mais **portée, autonomie, solidité, finition**.
  Un test exhaustif le vérifie : 192 assemblages éclairent correctement, 5 seulement
  satisfont le défi final
- **Les choix ont des conséquences réelles** : le boîtier (tube PVC, bambou, boîte de
  conserve, carton) décide du nombre de piles, de la solidité et du poids ; les grosses
  piles durent 5 fois plus longtemps mais triplent la masse ; le réflecteur double la portée
- **Les erreurs du programme sont vécues, pas racontées** : sans contact arrière le circuit
  reste ouvert ; une lame rigide ne touche pas la pile si le boîtier n'est pas plein (le
  ressort, lui, rattrape le jeu) ; 4,5 V sur une ampoule 2,5 V **fait griller le filament** ;
  une pile retournée s'oppose aux autres et la lampe faiblit — l'adaptation
  générateur / récepteur de la SA1 (sous-tension, tension d'usage, surtension) est ainsi
  couverte au passage
- **6 défis** dont « La lampe de Jean », le réinvestissement du guide : 5 km de vélo la nuit,
  donc 8 m de portée, 8 heures d'autonomie, une lampe solide et finie
- Le bandeau rappelle les cinq temps de la démarche technologique : explorer, choisir,
  fabriquer, tester, améliorer
- Physique validée par tests avant l'écriture de l'interface (tensions, courants,
  autonomies et portées calculés, pas décoratifs)

## v4.0.0 — 2026-07-28

🎨 **Nouvelle identité et nouvelle organisation du site.**

Le catalogue en onglets laisse place à une navigation **matière → classe → situation
d'apprentissage → activité**, et le site adopte le design system Labo-Bénin
(voir `docs/references/design-system-lyceen.md`).

- **Page d'accueil refondue** : sensation *paper* (surfaces claires, ombres douces,
  couleurs vives employées avec parcimonie), titres en **Baloo 2**, texte en **Inter** —
  polices servies localement depuis `assets/polices/`, donc toujours hors connexion
- **Une couleur par matière** pour l'identification visuelle : PCT bleu, Maths orange,
  SVT vert d'eau. Le lime reste la couleur de la plateforme (boutons, marque)
- **Le catalogue est la feuille de route** : chaque SA du programme affiche toutes ses
  activités, celles à venir marquées « bientôt ». On voit d'un coup d'œil ce qui est
  couvert et ce qui manque — 3 activités sur 26 en PCT 6ᵉ aujourd'hui
- **Progression réelle** lue depuis chaque simulation : pourcentage par activité, barre de
  couverture par classe, et un bloc « Reprendre » qui ramène à la simulation la plus avancée
- **Recherche** sur tout le programme, activités à venir comprises, insensible aux accents
- **Navigation par ancre** (`#/pct/6e`) : le bouton Retour du navigateur fonctionne, et un
  lien direct vers une classe se partage
- **Thème sombre** complet, partagé avec les simulations (clé `ike-theme`)
- Feuille de style partagée `assets/labo.css` (jetons, composants, thèmes), réutilisable
  par les simulations lors de leur migration

📚 **Dépouillement intégral du guide officiel de 6ᵉ SPCT** (115 pages) →
`docs/recensement-6e-spct.md` : les 6 SA, leurs activités expérimentales et les
**26 simulations** qu'on peut en tirer. Constat structurant : 3 SA sur 6 relèvent de la
démarche **technologique** (fabriquer un objet qui marche) et la plus longue de l'année
(SA5, 26 h) de la **prise de position** — deux familles que le gabarit actuel ne sait pas
encore traiter.

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
