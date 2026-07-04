# Journal des versions

Chaque version est un **tag git** (`vX.Y.Z`) et une **release GitHub** :
https://github.com/edgboy/ike-simulations/releases

Revenir à une version pour la consulter : `git checkout v1.5.0` (puis `git checkout main` pour revenir au présent).

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
