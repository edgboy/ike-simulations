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
| B1 | **Le mode libre doit donner accès à tout le matériel de la simulation** | Premiers pas : la DEL et le moteur sont inaccessibles, seuls les objets à intercaler le sont · Marmites : les deux plans (réchaud + lanterne) · Flamme : les deux plans (« 3 parties de la flamme » + « bougie sur l'eau ») · Fabrique de glace : **aucun mode libre** |
| B2 | **UI des modales à revoir** : questionnaires, bouton « Continuer » de la modale de réussite, missions, lexique | Flamme, fabrique de glace — et déjà noté à la vague précédente. Passe unique sur le gabarit commun |
| B3 | **Guide de repérage de l'interface dès la première entrée** | « Non négociable » (pollution), « plus que jamais important » (fabrique de glace). À généraliser |
| B4 | **Ramener l'écran d'accueil « Que veux-tu faire ? Apprendre / Expérimenter »** | Toutes. C'était la structure à deux volets de la vision v3.1.0 |
| B5 | **Quiz libre à niveaux, avec score de maîtrise** | Nouveau. À la fin des parcours, quand le mode libre est débloqué. Deux à trois niveaux selon la densité de la simulation ; sert aussi au professeur en mode Expérimentation. Conception laissée au jugement pédagogique |

### C. Dessin et animations, simulation par simulation

| # | Simulation | Demande |
|---|---|---|
| C1 | **Tam-tam** | Une calebasse est un **demi-cercle**, pas la forme actuelle. Éléments ressemblants, animation de frappe (« médiocre franchement »), couleurs et dégradés pour un léger relief |
| C2 | **Alambic** | Régressions : le **linge mouillé** et l'**écoulement du liquide dans le flacon** (animation disparue). Plus la passe déjà notée (vapeur en sortie de tuyau, gouttes, feuilles) et une reprise générale du design |
| C3 | **Fabrique de glace** | Polystyrène, coton et ce qui entoure le bac : à rendre ressemblant. Plan de travail **encombré sur mobile** |
| C4 | **Marmites** | Les **quatre gestes** de la lanterne : animations plus réalistes. Passe de design générale |
| C5 | **Premiers pas** | Rien : « excellent côté design » |
| C6 | **Pollution** | Rien : « les illustrations sont beaucoup mieux » |

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
