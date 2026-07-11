# IKE Simulations

Simulations scientifiques interactives pour le **collège au Bénin** (programme PCT/SVT/Maths),
conçues pour être intégrées à une plateforme e-learning — et pour fonctionner sur le terrain :
smartphones Android d'entrée de gamme, salles informatiques anciennes, connexion intermittente ou absente.

Inspiration : [PhET Interactive Simulations](https://phet.colorado.edu) (Université du Colorado).

**🌐 En ligne : https://edgboy.github.io/ike-simulations/** — version de test, partagez le lien pour recueillir des retours.

## Principes techniques (la charte)

| # | Principe | Pourquoi |
|---|----------|----------|
| 1 | **Une simulation = un livrable autonome** (idéalement un seul fichier) | Marche hors-ligne (double-clic), se distribue par clé USB, s'intègre partout (iframe, Moodle, PWA) |
| 2 | **Zéro dépendance réseau à l'exécution** — la techno est libre (bibliothèques type Three.js autorisées) tant qu'elle est **embarquée** dans le livrable et légère | Pas d'internet requis, pas de CDN qui casse ; on choisit l'outil adapté au besoin (3D incluse) |
| 3 | **Budget : < 500 Ko par simulation 2D, < 1,5 Mo si 3D** | Chargement rapide même en 2G/3G |
| 4 | **Tactile d'abord** (Pointer Events, cibles ≥ 48 px) | La majorité des élèves utiliseront un téléphone |
| 5 | **60 fps sur bas de gamme** — Canvas 2D, redessin seulement si nécessaire | Fluidité = crédibilité pédagogique |
| 6 | **Physique correcte** (vrais solveurs, pas d'animations truquées) | Les valeurs affichées doivent être justes ; l'élève peut expérimenter librement |
| 7 | **Français, vocabulaire et symboles du programme** (norme des schémas électriques, virgule décimale…) | Cohérence avec les cours et les évaluations |
| 8 | **Code lisible et commenté en français** | Le code est le support du futur guide de création |

## Structure

```
IKE Simulations/
├── README.md
├── CHANGELOG.md                ← journal des versions (tags git + releases GitHub)
├── index.html                  ← page d'accueil / catalogue des simulations
├── docs/
│   ├── guide-creation-simulations.md  ← LE guide : créer et intégrer une simulation IKE
│   ├── journal-technique.md    ← décisions techniques et leurs raisons
│   ├── programme-sa-pct.md     ← programme officiel PCT (SA par promotion)
│   ├── programme-cursus.md     ← PCT + Maths + SVT (6ᵉ→3ᵉ) + propositions de simulations
│   └── guides cursus/          ← guides officiels de l'enseignant (sources PDF/DOC)
└── simulations/
    ├── circuit-electrique/
    │   └── index.html          ← simulation autonome : double-cliquer pour lancer
    └── optique/
        └── index.html          ← banc d'optique (ombres, chambre noire, lentilles)
```

## Tester une simulation

Double-cliquer sur son `index.html` — aucun serveur, aucune installation.
Pour tester sur téléphone : copier le fichier sur l'appareil, ou le servir sur le réseau local
(`python -m http.server` dans le dossier, puis ouvrir `http://<ip-du-pc>:8000` sur le téléphone).

## Versions

L'historique complet est dans [CHANGELOG.md](CHANGELOG.md). Chaque version est un tag git et une
[release GitHub](https://github.com/edgboy/ike-simulations/releases) :

- Lister les versions : `git tag`
- Consulter une ancienne version : `git checkout v1.5.0` — puis `git checkout main` pour revenir
- La version en cours est affichée sur l'écran de démarrage de chaque simulation

## Feuille de route

1. ✅ **Circuit électrique** (v1) : fils, piles, lampes, interrupteurs, ampèremètre — série/parallèle, court-circuit
2. ✅ Circuit électrique v1.5 : **parcours de 10 missions progressives** (validation par le montage réel, outils débloqués au fur et à mesure, « À retenir » du programme, progression sauvegardée) + mode libre
3. ✅ Deuxième simulation 2D : **Banc d'optique** (5ᵉ→3ᵉ, alignée sur les SA du programme) — les patterns communs sont identifiés (socle : missions, visite, diagnostics, thèmes)
4. ✅ Troisième simulation : **États de la matière** (chimie, 6ᵉ/5ᵉ — molécules, paliers, pression des gaz)
5. ✅ **Prototype 3D** : Molécules en 3D (4ᵉ, Three.js embarqué, 0,63 Mo, compteur FPS pour mesurer sur le terrain)
6. ✅ **[Guide de création et d'intégration](docs/guide-creation-simulations.md)** (philosophie, charte, pas-à-pas, moteur de missions, 3D, checklist)
7. ✅ Cinquième simulation : **Combustions vives** (chimie, 6ᵉ SA3 — triangle du feu, seuil des 15 % d'O₂, eau de chaux)
8. ✅ Circuit électrique v2 : **voltmètre + loi d'Ohm en direct** · Molécules 3D v2 : **atelier d'assemblage**
9. ⬜ Choix de la plateforme e-learning → couche d'intégration (iframe + postMessage, ou SCORM/H5P si Moodle)
