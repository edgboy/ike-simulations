# Journal des versions

Chaque version est un **tag git** (`vX.Y.Z`) et une **release GitHub** :
https://github.com/edgboy/ike-simulations/releases

Revenir à une version pour la consulter : `git checkout v1.5.0` (puis `git checkout main` pour revenir au présent).

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
