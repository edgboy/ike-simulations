# Intégrer l'atelier de molécules à un autre site

L'atelier est une simulation **autonome et sans parcours imposé** (pas de missions) :
elle est faite pour être intégrée à un site tiers, une présentation ou une page de démo.

- **Un seul fichier** : `simulations/atelier-molecules/index.html` (~0,61 Mo, Three.js embarqué)
- **Zéro dépendance réseau** : fonctionne hors-ligne, en local (`file://`), sur clé USB
- **En ligne** : https://edgboy.github.io/ike-simulations/simulations/atelier-molecules/index.html

## Méthode 1 — Iframe (la plus simple)

Colle ce code dans n'importe quelle page HTML :

```html
<iframe
  src="https://edgboy.github.io/ike-simulations/simulations/atelier-molecules/index.html"
  style="width:100%; height:640px; border:0; border-radius:14px;"
  title="Atelier de molécules — IKE Simulations"
  allowfullscreen></iframe>
```

Conseils :
- **Hauteur minimale conseillée : 560 px** (l'en-tête, la scène 3D et la palette doivent tenir).
- Pour du plein écran responsive : `style="width:100%; height:min(80vh, 720px); border:0;"`.
- L'atelier s'adapte au thème du système (clair/sombre) et propose son propre bouton 🌙.

## Méthode 2 — Copie du fichier sur votre serveur

1. Téléchargez `index.html` depuis le dépôt (ou la [release](https://github.com/edgboy/ike-simulations/releases)).
2. Déposez-le où vous voulez (par ex. `/demos/molecules.html`).
3. Pointez votre iframe dessus — ou donnez le lien direct. Aucun autre fichier n'est nécessaire.

## Méthode 3 — Hors-ligne (présentation sans internet)

Copiez le fichier sur l'ordinateur ou la clé USB, puis **double-cliquez** dessus.
Aucune installation, aucun serveur, aucune connexion.

## Ce que fait l'atelier

- **Construction libre** : ajouter des atomes (H, C, N, O, S, Cl), les relier, faire des
  liaisons simples / doubles / triples. Le nombre de liaisons possibles (valence) est respecté :
  impossible de construire une molécule chimiquement absurde.
- **Géométrie réelle émergente** : la molécule trouve **seule** sa forme 3D par relaxation VSEPR
  (les doublets non liants sont simulés). L'eau sort **coudée** (101°), le méthane en **tétraèdre**
  (109,5°), le CO₂ **linéaire** (180°) — validé par tests contre les valeurs réelles.
- **Fiche d'identité en direct** : formule brute (notation de Hill), nom de la molécule si elle est
  reconnue (28 molécules connues), forme géométrique, composition atome par atome.
- **Bouton 👁 Doublets** : affiche les paires d'électrons libres — la clé pour comprendre
  *pourquoi* l'eau est coudée. Argument fort en présentation.
- **Bouton 🧪 Exemples** : construit une molécule d'un seul geste (12 recettes) — idéal pour
  enchaîner en démo sans rien assembler à la main.
- **Guide intégré** (bouton ❓) : 4 étapes + astuces, affiché au premier lancement.
- Vue boules-bâtonnets ⇄ compacte, rotation au doigt, pincer pour zoomer, thème clair/sombre.

## Personnalisation

Le code lisible est dans `app.template.html` ; le fichier final est produit par :

```bash
node outils/embarquer.js simulations/atelier-molecules/app.template.html vendor/three-r128.min.js simulations/atelier-molecules/index.html
```

Points d'entrée faciles à modifier dans `app.template.html` :
- `ATOMES` : ajouter un élément (couleur, rayon, valence, électrons de valence) ;
- `CONNUES` : ajouter une molécule reconnue (clé = formule de Hill avec indices en indices) ;
- `CATALOGUE` : ajouter une recette au bouton « Exemples ».
