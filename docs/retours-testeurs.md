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

---

## Reste à faire, dans l'ordre

### 1. Pollution — ce qui reste
- **Graphismes approximatifs** : « mets de vraies motos, arbres, etc. »
- **Bouton « Agir » à déplacer sur le plan de travail** (sa position actuelle gêne)
- **Modale du capteur trop encombrante sur mobile**, surtout quand elle porte beaucoup d'informations
- **Citer les valeurs mesurées** dans les bilans des missions de comparaison
- Vérifier que le plan de mission **se replie automatiquement** après le démarrage sur mobile

### 2. Les premiers pas du circuit
- **Voir la circulation du courant**
- **Objets dessinés pour de vrai** : un vrai clou en fer, une règle graduée, un bout de bois — pas un rectangle avec le nom écrit dessus
- **Mission 4, la DEL** : la broche la plus longue doit être **dessinée** plus longue
- **Mission 5, le tourniquet** : faire **tourner les hélices** pour de vrai, à une vitesse qui laisse reconnaître le sens

### 3. Alambic
- **La vapeur qui s'échappe** en sortie de tuyau quand il n'y a ni réfrigérant ni flacon
- **Les gouttes qui tombent** dans le flacon — on ne voit que le niveau monter
- **Le linge mouillé** enroulé autour du tuyau : mal représenté et mal disposé
- **Les feuilles de plante** : de simples ellipses vertes, à redessiner

### 4. Passe générale
- **UI des modales** (missions, questionnaires, lexique) : « elles sont bancales »
- Poursuivre la **passe de langue** sur les simulations non encore reprises

### 5. « Trouve la bonne pile »
Simulation dédiée, tirée de la lampe de poche et réorientée sur **sous-tension / tension d'usage /
surtension** spécifiquement.

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
