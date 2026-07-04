# Guide de création et d'intégration des simulations IKE

Ce guide explique comment créer une nouvelle simulation IKE, de l'idée à la mise en ligne.
Il est tiré de l'expérience des quatre premières simulations (circuit électrique, banc
d'optique, états de la matière, molécules 3D) et du [journal technique](journal-technique.md),
qui documente le *pourquoi* de chaque décision.

---

## 1. La philosophie IKE

Une simulation IKE n'est pas une animation à regarder : c'est un **laboratoire à manipuler**,
guidé par des missions. Trois principes pédagogiques non négociables :

1. **C'est le montage réel de l'élève qui valide** — jamais un QCM plaqué. L'élève construit,
   la physique calcule, la mission observe. Toute solution correcte est acceptée.
2. **De zéro à de bonnes bases** — l'élève qui n'a jamais vu la notion doit pouvoir réussir :
   mini-leçon avant chaque mission, outils débloqués progressivement, indices, coup de pouce
   automatique, diagnostics qui expliquent *pourquoi ça ne marche pas*.
3. **Aligné sur le programme** — vocabulaire officiel, symboles normalisés, notions dans
   l'ordre des SA (voir [programme-sa-pct.md](programme-sa-pct.md)). Chaque mission cible
   une SA identifiée.

## 2. La charte technique

| # | Règle | Vérification |
|---|-------|--------------|
| 1 | Une simulation = **un livrable autonome** (un fichier HTML) | double-clic → ça marche, sans internet |
| 2 | **Zéro dépendance réseau à l'exécution** ; bibliothèques autorisées si embarquées (voir §7 pour la 3D) | couper le wifi et recharger |
| 3 | Budget : **< 500 Ko en 2D, < 1,5 Mo en 3D** | taille du fichier |
| 4 | **Tactile d'abord** : Pointer Events, cibles ≥ 40 px, gestes simples (glisser, toucher, maintenir) | test sur un téléphone réel |
| 5 | **Physique correcte** : vraies formules, validées par des tests Node | `node test-xxx.js` |
| 6 | **Français du programme** : virgule décimale, vocabulaire des SA, interface et code commentés en français | relecture par un enseignant |
| 7 | **Thèmes clair et sombre**, préférence système respectée, choix mémorisé (clé commune `ike-theme`) | basculer et vérifier le canvas aussi |

## 3. Anatomie d'une simulation

Toutes les simulations partagent la même structure de fichier — ouvrez
`simulations/etats-matiere/index.html` comme référence :

```
<style>     écran de démarrage IKE · en-tête · barre de mission · scène ·
            commandes · voiles (leçon, lexique, fin, liste) · visite · thème sombre
<body>      les mêmes blocs HTML, dans le même ordre
<script>
  1. MODÈLE        constantes physiques + fonctions pures (testables dans Node)
  2. ÉTAT & SUIVI  l'état manipulé par l'élève + compteurs pour les missions
  3. RENDU         canvas 2D (ou scène Three.js), palette de couleurs par thème
  4. INTERACTIONS  Pointer Events : glisser / toucher / maintenir
  5. MISSIONS      le parcours (données) + le moteur (copié tel quel)
  6. INFOS/FORMULE panneau 📐 en direct + lexique
  7. VISITE        présentation guidée de l'interface
  8. THÈME + DÉMARRAGE
```

**Le socle (à copier sans le modifier)** : moteur de missions, mini-leçons, diagnostics,
indices + coup de pouce, visite guidée, toasts, thème, splash, persistance. Environ 400 lignes
identiques d'une simulation à l'autre. **Ce qui change** : le modèle physique, le rendu,
le geste d'interaction, et les données pédagogiques (missions, leçons, lexique).

## 4. Créer une nouvelle simulation, pas à pas

### Étape 1 — Choisir le sujet dans le programme
Partir de [programme-sa-pct.md](programme-sa-pct.md) : quelle SA ? quel niveau ? quelle
notion est difficile à manipuler en vrai (coût du matériel, danger, invisible à l'œil) ?
C'est là qu'une simulation apporte le plus.

### Étape 2 — Définir le modèle physique
Écrire les **fonctions pures** du phénomène (entrées → sorties, sans DOM) :
- circuit : analyse nodale `G·v = i` ; optique : formules de conjugaison ;
  matière : courbe énergie→température avec paliers.
- Les écrire d'abord dans un fichier de test Node avec les valeurs théoriques attendues.
  *Aucune simulation ne se publie sans ses tests qui passent.*

### Étape 3 — Choisir le geste
Un seul geste principal, adapté au sujet et au tactile :
- **grille** (circuit) : glisser entre deux points — précis au doigt ;
- **banc continu** (optique) : glisser un objet le long d'un axe ;
- **maintenir** (matière) : appuyer longtemps = apporter de l'énergie ;
- **orbiter/toucher** (3D) : tourner la scène, toucher un objet.
Les gestes secondaires sont toujours les mêmes : *toucher pour sélectionner*,
*toucher un interrupteur/bouton pour basculer*.

### Étape 4 — Écrire le parcours (le cœur pédagogique)
10 à 12 missions, chacune = un seul petit concept. Pour chaque mission :

```js
{
  titre: 'Nom court et parlant',
  outils: ['ce', 'qui', 'est', 'débloqué'],   // progressif !
  etapes: [
    { texte: "Consigne impérative en une phrase, tutoiement.",
      test: () => /* prédicat sur l'état physique résolu */ },
  ],
  retenir: "La notion du programme en 2-3 phrases (c'est le cours !).",
  indice: "COMMENT faire, concrètement.",
  diags: [   // les erreurs classiques : POURQUOI ça ne marche pas
    { si: () => /* condition reconnaissable */, msg: "Explication + geste correctif." },
  ],
}
```

Règles d'or :
- une **étape** = un prédicat vérifiable par la physique (jamais « as-tu compris ? ») ;
- l'**indice** dit *comment*, le **diagnostic** dit *pourquoi ça bloque* — deux choses différentes ;
- la **leçon** (tableau `LECONS`, une entrée par mission) pose le vocabulaire *avant* de manipuler ;
- séquence type : notion nouvelle → manipulation guidée → variation → défi final ;
- l'état n'est pas effacé entre missions quand la continuité a du sens.

### Étape 5 — Le panneau 📐 et le lexique
- Le panneau montre **la formule du montage en cours avec les valeurs de l'élève substituées**
  et le calcul déroulé. C'est la meilleure façon d'apprendre à *utiliser* une formule.
- Le lexique : 10-15 termes techniques définis en langage collège, avec des exemples
  pris dans la simulation elle-même.

### Étape 6 — Assembler et tester
1. Copier la simulation la plus proche (2D : `etats-matiere` ; 3D : `molecules-3d`).
2. Remplacer modèle/rendu/interactions/données ; adapter la visite guidée (6 étapes).
3. Renommer les clés localStorage (`ike-<nom>-progression`, `ike-<nom>-visite`…).
4. Vérifier la syntaxe : extraire le `<script>` et `node --check`.
5. Lancer les tests physiques : `node scratchpad/test-<nom>.js` → tout doit passer.
6. Tester à la main : le parcours entier au doigt sur téléphone, les deux thèmes,
   la rotation d'écran, le mode hors-ligne (fichier copié seul).

### Étape 7 — Publier
```bash
git add -A
git commit -m "vX.Y.0 — <résumé en français>"
git tag -a vX.Y.0 -m "<résumé>"
git push origin main --tags
gh release create vX.Y.0 --title "..." --notes "..."
```
Ajouter l'entrée au `CHANGELOG.md`, la carte sur `index.html` (accueil), la ligne au
`journal-technique.md` (les décisions et leurs raisons), et mettre à jour le numéro de
version affiché (splash + pied de page de l'accueil). GitHub Pages reconstruit seul (~1-2 min) ;
vérifier que la nouvelle URL répond.

## 5. Le moteur de missions en deux mots

`evaluerMission()` est appelée après **chaque action de l'élève** (ou ~6×/s pour les
simulations continues). Elle fait avancer les étapes dont le prédicat devient vrai
(dans l'ordre), affiche un diagnostic si rien n'avance, et à la fin de mission :
toast 🎉 → **2 secondes pour admirer le résultat** → panneau « À retenir » →
mission suivante (avec sa leçon). La progression est sauvegardée en localStorage ;
« Réinitialiser le parcours » remet tout à zéro **et relance la visite guidée**
(appareils partagés en classe).

## 6. Conventions françaises

- Virgule décimale : `valeur.toFixed(2).replace('.', ',')` ; signe moins typographique `−`.
- Unités avec espace : « 0,43 A », « 10 cm », « 62 °C ».
- Symboles normalisés du programme (schémas électriques, rayons de construction colorés).
- Tutoiement de l'élève, consignes impératives, une idée par phrase.

## 7. La 3D (Three.js embarqué)

- La bibliothèque est stockée dans `vendor/` (actuellement `three-r128.min.js`, ~590 Ko).
- Le code de la simulation vit dans `app.template.html` (lisible, versionné) avec le
  marqueur `/*__THREE_JS_ICI__*/` ; l'assemblage produit le fichier unique :
  ```bash
  node outils/embarquer.js simulations/<nom>/app.template.html vendor/three-r128.min.js simulations/<nom>/index.html
  ```
- Scène sobre : quelques dizaines de meshes, `MeshPhongMaterial`, 2 lumières,
  `pixelRatio` plafonné à 2, `alpha:true` pour hériter du fond du thème.
- Toujours afficher le **compteur FPS** dans le panneau infos : c'est notre instrument
  de mesure de la faisabilité sur les appareils réels du terrain.
- Gestes : un doigt = tourner, deux doigts = zoomer, toucher bref = sélectionner (Raycaster).

## 8. Intégration à une plateforme e-learning

Le format « un fichier autonome » garde toutes les portes ouvertes :
1. **Iframe** : `<iframe src=".../simulations/<nom>/index.html">` — zéro travail.
2. **Iframe + postMessage** *(à venir)* : événements `mission-reussie`, `parcours-termine`
   pour la traçabilité — à spécifier quand la plateforme sera choisie.
3. **SCORM/H5P** (si Moodle) : envelopper le fichier unique dans un paquet.
4. **Hors-ligne** : distribution par clé USB/WhatsApp du fichier, ou PWA côté plateforme.

## 9. Liste de contrôle avant publication

- [ ] Tests physiques Node : tout passe
- [ ] Parcours entier joué au doigt sur téléphone (et les indices/diagnostics déclenchés exprès)
- [ ] Thème sombre vérifié (interface **et** scène)
- [ ] Hors-ligne : le fichier seul, wifi coupé
- [ ] Budget de taille respecté
- [ ] Textes relus : vocabulaire du programme, virgules décimales
- [ ] CHANGELOG + carte d'accueil + journal technique + version affichée
- [ ] Tag git + release GitHub + site vérifié en ligne
