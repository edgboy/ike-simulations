# Retours des testeurs — suivi

Constats remontés par les testeurs (août 2026) sur les simulations de PCT 6ᵉ, l'état de
traitement de chacun, et l'ordre dans lequel la suite doit être prise.

Ce fichier est le **point de reprise** : il vaut plus que la mémoire d'une session.

---

## Traité

### v4.15.0 — lot transversal

| Constat | Traitement |
|---|---|
| La bonne réponse du QCM est toujours en premier | Propositions mélangées à l'ouverture, indice recalculé. Le défaut était vérifié : **100 % des questions de huit simulations**. Neuf simulations corrigées |
| Le guide d'accueil n'apparaît pas | Il ne s'ouvrait qu'à la toute première visite. Il est proposé **tant que la première mission n'est pas gagnée** (huit simulations) |
| « Besoin de présenter les parties de l'interface » | Le guide de la flamme et de la fabrique de glace commence par un repérage de l'écran |
| Sur mobile, les actions sous les missions n'apparaissent pas | Régression réelle : la classe `a-montrer` attendue par le style n'était jamais posée, et le repli basculait `body.replie`, classe inexistante. L'étape en cours est de retour, le chevron déploie |
| Le bilan est recouvert par « Mission réussie » | Le questionnaire partait sur minuterie. Il attend la fermeture du bilan, dont le bouton devient « 🎓 Mission réussie — continuer » |
| Le point de contact = la pointe de l'outil | On saisit l'outil par tout son corps ; la pointe garde sa position relative et reste seule à mesurer (flamme) |
| Les curseurs des marmites sont déjà montés | À zéro au départ **et au début de chaque mission** |
| Le curseur de sel ne suit pas la mission | Resynchronisé sur la valeur réelle |
| Le flacon a l'air plongé dans de l'eau | Mélange redessiné en glace pilée serrée, flacon émergé, givre limité à la partie à l'air libre |

### v4.16.0 — langue et marmites

| Constat | Traitement |
|---|---|
| Niveau de langue trop élevé pour des sortants du primaire | **23 passages réécrits** dans trois simulations. Les raisonnements sont décomposés dans l'ordre où l'élève les a rencontrés |
| Les tests d'identification sont dans une modale | Soucoupe, eau de chaux et coupelle de poudre **posées sur une paillasse du plan de travail**. On les prend, ils viennent au-dessus de la flamme, la réaction se dessine |
| « Prendre ces notions une à une, dans une mission dédiée » | La mission unique éclate en **trois missions** (soucoupe / eau de chaux / sulfate). Les marmites passent de 6 à **8 missions** |
| La soucoupe doit se tester sur deux flammes | La mission fait faire l'essai deux fois : flamme qui fume, puis flamme bleue |

### v4.17.0 — la lanterne

| Constat | Traitement |
|---|---|
| On ne voit ni lanterne ni embrasement | Scène nocturne sur l'établi : table, cahier, lanterne. Le réservoir prend feu progressivement (flammes, flaque, fumée) |
| « Mener vraiment les actions et voir les résultats » | Les quatre gestes produisent leur effet : l'eau **élargit** la flaque, le sable **étouffe**, les feuilles **dispersent en quatre foyers**, l'extincteur **éteint**. Chacun ouvre son bilan |

### v4.18.0 — pollution

| Constat | Traitement |
|---|---|
| Les mesures sont héritées, les étapes déjà barrées | Chaque relevé porte sa mission ; une mission ne valide ses étapes qu'avec **ses propres** mesures. Le carnet garde l'historique |
| « Agir » permet de cocher trop tôt | Panneau en lecture seule avant la mission 5, avec un mot qui dit pourquoi et quand il s'ouvrira |

### v4.19.0 — pollution : le quartier et les chiffres

| Constat | Traitement |
|---|---|
| Graphismes approximatifs, « mets de vraies motos, arbres, etc. » | Chaque source est une scène dessinée : motos complètes (roues à rayons, cadre, réservoir, pot), zem avec son conducteur, moulin à gas-oil sous abri, coal-pot et marmite, tas d'ordures identifiable, brousse en feu. Les quatre personnes se tiennent près de leur source. Décor : ciel, collines, toits, sol |
| Bouton « Agir » mal placé | Il quitte l'en-tête pour une pastille sur la scène, qui clignote quand la mission le demande |
| Modale du capteur trop encombrante sur mobile | La parole de la personne sort dans **sa propre bulle sous la scène** ; la fiche se resserre (nom court, verdict bref). Téléphone couché, fiche et bulle se rangent dans les marges de cadrage |
| Citer les valeurs mesurées dans les bilans | Les six missions rappellent les relevés de l'élève avant leur conclusion, dans le bilan et sur l'écran de passage |
| Le plan de mission ne se replie pas | `replierSiPetitEcran()` existait sans être appelée nulle part : elle l'est au premier glissement du capteur |

Trouvés au passage et corrigés : le glissement du capteur sélectionnait les étiquettes ; les
décimales s'écrivaient « 45.7 » ; le titre se cassait sur quatre lignes dans la colonne large.

### v4.19.0 — transversal

| Constat | Traitement |
|---|---|
| Le guide d'accueil se rouvre à chaque lancement, pour toujours | Il testait `etat.faits` là où six fichiers tiennent leur liste dans `etat.faites`. Corrigé dans alambic, lampe de poche, marmites, premiers pas, tam-tam, pollution |

### v4.20.0 — les premiers pas du circuit

| Constat | Traitement |
|---|---|
| Voir la circulation du courant | Des flèches avancent sur chaque tronçon parcouru, du + vers le −, fils de liaison compris. Rien ne bouge quand le courant ne passe pas |
| Objets dessinés pour de vrai | Les sept objets ont leur dessin (fil enroulé, clou à tête et pointe, règle graduée et chiffrée, craie à bague de papier, bois veiné, gomme à deux bouts), repris en vignette dans le bac. Ils sont tenus par deux **pinces crocodiles**. La pile devient une pile plate 4,5 V, la lampe une vraie ampoule à filament, le tourniquet un moteur à carcasse |
| Mission 4 : la broche longue doit être dessinée longue | La DEL est couchée, corps à droite : la broche de la grande borne fait plus du double de l'autre, chacune nommée |
| Mission 5 : faire tourner les hélices | Quatre pales bicolores tournent à 200°/s, avec une flèche courbe dans le sens de rotation |

Trouvés au passage et corrigés : les noms des bornes s'écrivaient par-dessus l'appareil ; en thème
sombre le + et le − de la pile étaient blancs sur pastille blanche. Le titre se cassait sur quatre
lignes dans la colonne large — corrigé sur les **huit** simulations à colonne.

---

## Deuxième vague de retours (5 août 2026)

Reçue en une fois, sur huit simulations. Triée ci-dessous : d'abord ce qui casse, puis ce qui est
commun à plusieurs simulations, puis le travail de dessin simulation par simulation.

### A. Ce qui casse un parcours — **traité en v4.21.0**

| # | Constat du testeur | Cause trouvée dans le code |
|---|---|---|
| A1 | Marmites : le mode libre ne se déclenche pas à la fin de la mission 8, le message de succès n'apparaît pas | `allumer()` détourne la mission du feu vers `lancerFeu()` et **sort par un `return`** : le chemin de réussite (`eteindre()` → `test()` → bilan → écran de passage) n'est jamais emprunté. La mission est gagnée dans l'état mais jamais enregistrée dans `faites` → le parcours ne se termine jamais |
| A2 | Marmites mission 4 : la 1ʳᵉ étape se décoche quand on nettoie pour faire la flamme bleue | L'étape teste l'état **courant** (`!etat.resultat.complete`) au lieu de se souvenir de l'acte accompli. Dès que la flamme devient bleue, la condition redevient fausse |
| A3 | Pollution : le tuyau relevé du moulin doit se voir | Plus grave que l'affichage : la mission 3 **raconte** que Faton a relevé son tuyau, mais `etat.actions.tuyau` est faux et le panneau Agir est en lecture seule jusqu'à la mission 5. Le tuyau est donc bas — au dessin **et dans le calcul des mesures** — pendant toute la mission qui parle de lui |
| A4 | Pollution, dernière mission : l'astuce « appuie sur Vérifier » est cachée par le repli du plan | Le repli masque toute étape sans `a-montrer`, l'astuce comprise. Rien ne distingue cette mission, où l'action ne se fait pas sur le plan de travail |
| A5 | « Trouve la bonne pile » est identique à « Fabrique ta lampe de poche » | Exact : le chantier n'a jamais commencé. Le catalogue affiche pourtant **deux cartes qui ouvrent le même fichier** (`dos: 'lampe-de-poche'` pour les deux) |
| A6 | Flamme de la bougie : sur mobile, déplacer les instruments est très peu fluide | À instrumenter |

**Audit mené (v4.21.0)** : les neuf simulations passées en revue. Un seul autre cas — « allume et
laisse la marmite noircir », que le nettoyage effaçait —, corrigé de la même façon. Partout ailleurs
les étapes décrivent une **configuration exigée**, et relire l'état courant est le comportement juste.

Deux ajouts venus de A3 : le tuyau du moulin est le **seul réglage manipulable** avant la mission 5,
puisqu'il est le sujet de la mission 3 et ne retire aucun rejet ; et la phrase du tribunal qui disait
la moto de Yèmi « aussi polluante en CO que le moulin » a été refaite, le relèvement du tuyau ayant
fait passer le moulin nettement sous la moto.

### B. Commun à plusieurs simulations

| # | Chantier | Où |
|---|---|---|
| B1 | ~~Le mode libre doit donner accès à tout le matériel~~ — **traité en v4.22.0** | Premiers pas : bac des trois récepteurs · Marmites : les deux plans au choix · Flamme : mode libre créé, deux plans · Glace : mode libre créé, tout le matériel ouvert. Le mode libre est aussi **sauvegardé** : il était perdu à chaque rechargement dans deux simulations |
| B2 | ~~UI des modales à revoir~~ — **traité en v4.24.0** | Ce n'était pas du goût : dans la flamme et la fabrique de glace, le style et le code employaient des **noms de classes différents**. Questionnaire sans aucun style (boutons bruts), titres collés à leur description dans les missions et le lexique, missions verrouillées indiscernables (`verrou` sans règle) et cartes non cliquables. Les six autres étaient conformes. Un détecteur de classes orphelines a été ajouté aux vérifications |
| B3 | ~~Guide de repérage de l'interface~~ — **traité en v4.23.0, refait en v4.25.0** | La liste écrite ne convenait pas : *« le format encadrement et tutoriel pas à pas qu'on avait avant »* est meilleur. La **visite guidée** (halo + carte pas à pas) est de retour dans les huit simulations, la liste écrite retirée, et le bouton ❓ propose de la revoir |
| B4 | ~~Ramener l'écran d'accueil « Apprendre / Expérimenter »~~ — **traité en v4.23.0** | Posé dans les huit simulations. Expérimenter reste verrouillé jusqu'à la fin du parcours ; Apprendre indique où l'on en est et enchaîne sur le repérage |
| B5 | **Quiz libre à niveaux** — les **8 simulations du socle** sont équipées (v4.26.0 → v4.34.0) | Niveau 3 en **énoncé scolaire**, affichage sévère conservé. Trois niveaux pour pollution, marmites, flamme, premiers pas ; deux pour alambic, lampe de poche, tam-tam, fabrique de glace. La pondération s'adapte au nombre de niveaux. **Reste : les anciennes simulations** (circuit électrique, combustions, états de la matière, optique, transformations, molécules), qui n'ont ni l'écran d'accueil ni le mode libre dont dépend la porte « M'exercer » |

### B bis. L'arrière-plan derrière les modales — **traité en v4.28.0**

| Constat | Traitement |
|---|---|
| « Le tutoriel guidé avec sa modale, l'arrière-plan des quiz : il faudrait qu'il soit beaucoup moins visible. En termes UX c'est catastrophique, surtout vu qu'on parle d'enfants » | Le voile des modales passe de **55 % à 93 %**, celui de la visite guidée de **62 % à 91 %**. Mesuré derrière un questionnaire : la luminance de l'arrière-plan tombe de 129 à 33, soit **13 % de la clarté d'origine** au lieu de 55 %. Pas de flou : trop coûteux sur les téléphones visés |

### C. Dessin et animations, simulation par simulation

| # | Simulation | Demande |
|---|---|---|
| C1 | ~~Tam-tam~~ — **traité en v4.29.0** | Calebasse en demi-sphère, conserve nervurée, boîte de lait à étiquette, bidon à poignée et bouchon. Membrane épaisse et visible. Laçage en V dont la largeur suit le corps. Frappe avec élan, pivot, rebond et éclat d'impact ; main nue dessinée au lieu d'un emoji. Dégradés et reflets |
| C2 | ~~Alambic~~ — **traité en v4.27.0** | **Ce n'étaient pas des régressions** : l'historique montre que rien n'a jamais été retiré de ce dépôt depuis la v4.4.0 ; ces corrections n'y avaient jamais été intégrées. Repris : gouttes qui tombent du tuyau avec ondulation à l'impact, vapeur qui se perd sans réfrigérant (0 / 25 / 43 mL selon le refroidissement), linge enroulé autour du tuyau, vraies feuilles nervurées, plus la passe générale (anses de la chaudière, brûleur, bûches, thermomètre à réservoir, flacon à col) |
| C3 | ~~Fabrique de glace~~ — **traité en v4.30.0** | Polystyrène à grain de billes, coton en ouate bosselée, chiffons en bandes de tissu pliées. Sur téléphone : la fiche des températures devient un bandeau d'une ligne, la courbe passe sous la scène, les isolants tiennent sur une ligne qui défile, et le montage se recentre |
| C4 | ~~Marmites : les quatre gestes~~ — **traité en v4.31.0** | On voit désormais l'objet qui agit : le seau bascule et verse une nappe qui éclabousse, la pelle s'incline et le tas de sable étouffe la flaque, la branche feuillue s'abat et projette des braises, l'extincteur a son flexible, sa lance et son cône de poudre |
| C5 | **Premiers pas** | Rien : « excellent côté design » |
| C6 | **Pollution** | Rien : « les illustrations sont beaucoup mieux » |
| C7 | ~~Flamme : la cloche trop grande~~ — **traité en v4.32.0** | La cloche montait à 60 % de la hauteur du plan pour une bougie qui en fait un dixième. Elle descend à 44 % et la bougie grandit d'un tiers |

### D. Reste de la vague précédente, non traité

- **« Trouve la bonne pile »** : simulation dédiée, tirée de la lampe de poche, réorientée sur
  **sous-tension / tension d'usage / surtension**.
- Poursuivre la **passe de langue** sur les simulations non encore reprises.

---

## Repères techniques utiles à la reprise

**Familles de code des questionnaires** — deux structures coexistent :
- `q.choix` + `qcm = { liste, n }` : alambic, lampe de poche, marmites, pollution, premiers pas,
  tam-tam ; et `circuit-electrique` avec sa propre boucle (`qcmMelange`).
- `q.r` + `.q-rep` + `qcmCourant` : flamme de la bougie, fabrique de glace.
Dans les deux cas, `melangerQuestion()` est déclarée au niveau général du script.

**Repli du panneau de mission** : le style masque, panneau replié, toute étape sans la classe
`a-montrer` — c'est `#mission.ouvert` qui commande, pas une classe sur `body`.

**Vérification systématique avant publication** :
1. syntaxe de chaque bloc `<script>` (`new vm.Script(...)` sur le contenu extrait) ;
2. parcours complet en navigateur avec puppeteer-core — binaire :
   `C:/Users/Edge/.cache/puppeteer/chrome-headless-shell/win64-151.0.7922.47/chrome-headless-shell-win64/chrome-headless-shell.exe`,
   option `--allow-file-access-from-files` ;
3. contrôle des débordements horizontaux et des contrastes sous 3.

**Rituel de publication** : bump du `<span class="ver">` dans `index.html` racine, entrée de
CHANGELOG, commit, `git tag -a`, `git push --tags`, `gh release create`, puis
`gh api -X POST repos/edgboy/ike-simulations/pages/builds` et attente du déploiement.

**Écueils d'outillage rencontrés** : les heredocs bash cassent sur les apostrophes typographiques
et les backticks — écrire les scripts avec l'outil d'écriture de fichier, et éviter les littéraux
de gabarit imbriqués quand un script génère du code qui en contient.

---

## Les anciennes simulations : état des lieux (8 août 2026)

Décision du 8 août : **le quiz libre ira sur toutes les simulations de la plateforme.** Or les
anciennes n'ont pas la structure dont il dépend. Diagnostic du **circuit électrique**, la première
nommée et la plus utilisée du programme de 6ᵉ.

**Bonne nouvelle : l'accueil et la visite guidée y sont déjà** — et c'est de là qu'ils viennent.
`#choix-mode` porte le « ⚡ Que veux-tu faire ? » avec Apprendre / Expérimenter, Expérimenter étant
verrouillé tant que les 15 missions ne sont pas finies. `#visite` porte le halo et la carte pas à
pas. C'est le modèle que le socle a repris ; il n'a jamais été retiré ici.

**Ce qui manque pour l'aligner sur le socle** (2 573 lignes, 124 Ko) :

| Point | État |
|---|---|
| Jetons du design system (`--primary`, `--accent`, rayons, polices) | Palette et polices propres, différentes du socle |
| En-tête | Boutons texte pleine largeur, au lieu de la rangée d'icônes compactes |
| Panneau de mission | Barre pleine largeur en haut : pas de pastille numérotée, pas de jauge, pas de chevron de repli |
| Modales | `mfin`, `mintro`, `mqcm`, `mlexique`, `mliste` — noms et styles propres, pas `.carte-modale` |
| Mode libre | `etat.libre` absent : « Expérimenter » existe mais ne suit pas la mécanique du socle |
| Quiz | Absent, et sa porte « M'exercer » dépend de l'accueil du socle |

**Ordre proposé** : jetons et en-tête d'abord (effet visible immédiat, risque faible), puis le
panneau de mission, puis les modales, puis le mode libre au sens du socle, et le quiz en dernier —
il ne peut se poser qu'une fois l'accueil aligné.

Sur téléphone, la simulation tient correctement : les boutons d'en-tête se réduisent à leurs icônes
et la barre de mission reste lisible. Ce n'est donc pas une urgence d'affichage, mais une mise en
cohérence.

Les autres anciennes simulations à traiter ensuite : **combustions, états de la matière, optique,
transformations**, plus les deux ateliers de molécules retirés du catalogue.

### Alignement fait (v4.35.0)

Les six points du tableau sont traités, dans l'ordre proposé. Ce qu'on a appris en le faisant,
et qui servira pour les quatre suivantes :

- **Le socle n'a pas de fiche notion.** Le circuit en a quinze, une par mission — le cours, posé
  avant de manipuler. On ne les a pas jetées : elles deviennent une modale `v-lecon` au format
  `.carte-modale`. Aligner la forme n'oblige pas à perdre le fond ; les autres anciennes en ont
  aussi, il faudra faire pareil.
- **`etat.libre` du socle se traduit ici en `progression.libre`** : `etat` désigne déjà le circuit
  posé sur la grille. C'est le mécanisme qui compte, pas le nom — un drapeau, pas une valeur de la
  mission en cours, sinon le passage en libre efface la place de l'élève dans le parcours.
- **La palette du canvas fait partie du design system.** On y pense pour l'interface et on l'oublie
  pour la scène : les gris bleutés du circuit juraient avec le fond chaud du socle, en clair comme
  en sombre. À vérifier sur chaque simulation à canvas.
- **Deux pièges d'attribut `hidden`** : une règle d'auteur `display:flex` l'emporte sur lui — il
  faut redire `[hidden] { display:none }` ; et un élément peut être `hidden=false` tout en restant
  masqué par le repli du plan de mission — le bouton « Indice » ne faisait rien tant qu'il ne
  rouvrait pas le plan.
- **Le diagnostic ne se replie pas.** Le socle masque l'astuce quand le plan est replié ; le
  diagnostic, lui, doit rester — c'est la réponse au « pourquoi ça ne marche pas », et elle est
  attendue au moment même où l'élève regarde sa grille.
- **Le quiz a trois niveaux ici** (21 questions) : quinze missions, du fil conducteur à la loi
  d'Ohm, c'est une simulation dense au sens de la règle posée en v4.34.0.

- **Le rang d'outils qui défile ne se centre pas avec `justify-content`.** Sur un écran de 320 px,
  le premier composant partait à gauche hors de la zone visible, sans moyen d'y revenir. Le rang
  vit maintenant dans une boîte intérieure centrée par `margin:0 auto` : les marges s'effacent
  d'elles-mêmes dès qu'il faut défiler. Piège classique, à surveiller sur toute barre défilable.
- **En paysage sur téléphone, un plan de mission à trois étapes mangeait l'écran.** Le repli
  n'arrivait qu'après la première étape franchie — trop tard pour construire. Le plan mesure
  désormais sa propre hauteur à l'ouverture : au-delà de 45 % de l'écran, il s'ouvre replié.

Vérification : parcours joué de bout en bout dans Chrome piloté par CDP — accueil, visite, leçon,
mission, repli du plan, indice, diagnostic, QCM, écran de passage, liste, quiz complet, grille
libre, lexique, aide, vue symboles, thème sombre. Débordement horizontal contrôlé à 320, 390, 740,
820 et 1280 px : aucun. Progression toujours lue par le catalogue. Aucune erreur JS.
144 Ko, 2 900 lignes.

### Combustions vives (v4.36.0)

Deuxième migration. Les six points du circuit s'appliquent tels quels ; ce qui s'ajoute :

- **La simulation n'avait pas de QCM.** Le cycle du socle est `étapes → QCM → écran de passage` :
  il s'arrêtait aux étapes. Dix missions × deux questions ont donc été écrites. À prévoir sur les
  suivantes — c'est le poste de travail le plus long de la migration, bien avant le CSS.
- **Le repli du plan se décide sur la place laissée, pas sur sa propre taille.** Première version :
  « replier si le plan dépasse 45 % ». Mauvais critère — ce qui compte est que la scène reste
  regardable. Deuxième version : « replier si la scène tombe sous 45 % », qui se corrige seule
  quand la barre du bas change de hauteur.
- **Un rang de boutons qui se casse en plusieurs lignes coûte très cher en hauteur.** Ici, trois
  rangées mangeaient 175 px sur un écran de 640 : la paillasse tombait à un tiers de l'écran. En
  rang unique défilable — la même boîte intérieure centrée que l'établi du circuit — elle remonte
  à la moitié. À vérifier sur toute barre de commandes.
- **Un panneau flottant se ferme par défaut sur téléphone.** Le triangle du feu recouvrait la
  moitié de la scène. Il s'ouvre à la demande, et la mission dont l'étape se lit dedans l'ouvre
  elle-même (drapeau `panneau` sur la mission). Il défile chez lui : la scène le rognait.
- **Piège de rendu à chercher partout : une réserve de place qui ne compte qu'un objet.** La marge
  droite réservait la largeur d'une jauge alors que deux sont dessinées — sur 320 px, la seconde
  passait par-dessus bord. La géométrie est devenue une constante partagée entre le dessin et la
  réserve, pour que les deux ne puissent plus diverger.

Vérification : même protocole. Parcours, QCM, passage, quiz complet, paillasse libre, diagnostic
replié, indice, lexique, aide, thème sombre. Cinq largeurs sans débordement, part de l'écran
laissée à la scène mesurée à chaque taille. Aucune erreur JS. 112 Ko, 2 272 lignes.

### États de la matière (v4.37.0)

Troisième migration, la plus grosse : treize missions, 26 questions de QCM écrites. La recette des
deux précédentes s'applique sans surprise — le temps est passé dans les questions, pas dans le
code. Ce qui s'ajoute :

- **Mesurer l'écran fait trouver ce que l'œil laisse passer.** Le protocole à cinq tailles a sorti
  trois défauts qu'aucune relecture n'aurait vus : l'enceinte réduite à **9 px** de hauteur en
  paysage, le nom de l'état qui se cogne à l'étiquette du piston, et une consigne de six lignes qui
  survit au repli du plan. Aucun n'avait été signalé par les testeurs.
- **Les marges fixes d'un rendu sont un piège récurrent.** Après la réserve de place des jauges des
  combustions, ce sont ici les 56 px au-dessus de l'enceinte : des valeurs écrites pour un grand
  écran, qui ne laissent rien quand la hauteur fond. La règle à appliquer partout : *toute marge de
  rendu se calcule en proportion, avec un plancher — jamais en dur.*
- **Replier ne suffit pas si le contenu est long.** Le repli ne montre qu'une étape, mais une étape
  peut faire six lignes. Elle est bornée à trois, dépliable au chevron.
- **Un panneau flottant ne s'ouvre pas tout seul sur téléphone, même quand la mission s'y lit.** Il
  recouvrirait justement ce qu'il faut regarder. Ici, la pression est déjà lisible sur la scène :
  le panneau n'apporte que le détail du calcul, et un message le signale.

Vérification : même protocole, plus le contrôle de la géométrie de l'enceinte à chaque taille
(hauteur de la boîte, pas du réseau, tenue du réseau dans la boîte). Aucune erreur JS.
120 Ko, 2 401 lignes.

### Banc d'optique (v4.38.0)

Quatrième migration. **La règle sur les marges de rendu a payé dès la première vérification** :
l'échelle du banc (pixels par centimètre) ne se déduisait que de sa largeur, si bien qu'en paysage
sur téléphone les flèches sortaient par le haut et les étiquettes par le bas. Elle est bornée dans
les deux sens, à partir de ce qui doit tenir au-dessus et au-dessous de l'axe, déclaré en
centimètres. Quand la hauteur commande, le banc se centre au lieu de rester collé à gauche.

Trois écueils de méthode, à éviter sur les migrations suivantes :

- **Ne pas couper un fichier « à partir de tel repère » sans regarder ce qu'il y a après.** Ici,
  le panneau de calcul et le lexique venaient *après* la visite guidée — contrairement aux trois
  simulations précédentes. Les remplacer d'un bloc les a supprimés. Récupérés depuis git et
  réintégrés, mais la leçon vaut : **vérifier l'ordre des sections dans chaque fichier**, elles ne
  sont pas rangées pareil.
- **Une fonction utilitaire ajoutée dans le gabarit doit être déclarée dans le fichier cible.**
  `$` était utilisé partout dans la queue reprise du gabarit, mais jamais déclaré ici. Le contrôle
  d'identifiants ne l'a pas vu — il vérifiait les `id` du DOM, pas les symboles. Contrôle ajouté :
  déclaration présente *et* placée avant le premier usage, sur les quatre simulations.
- **Assembler du CSS par concaténation demande de savoir où se ferme `<style>`.** Le gabarit
  s'arrêtait à `</style>` inclus : les ajouts se sont retrouvés *hors* du bloc, rendus comme du
  texte dans la page — l'atelier tombait à zéro pixel. Symptôme trompeur : tout le JS passait, seul
  l'écran était faux. À surveiller sur toute génération de fichier par morceaux.

Deux défauts d'affichage aussi : les notes du panneau se collaient bout à bout (`.fnote` sans
`display:block`), et la barre de réglage recouvrait l'étiquette « ombre : … cm » que la mission
demande de lire — elle se range à gauche quand le banc est écrasé.

Vérification : même protocole, en formats **paysage uniquement** (le banc de 100 cm l'exige, un
écran le rappelle en portrait) — 640×360, 740×380, 1024×768, 1280×800. Tenue de la scène contrôlée
au-dessus *et* au-dessous de l'axe à chaque taille. Aucune erreur JS. 136 Ko, 2 778 lignes.
