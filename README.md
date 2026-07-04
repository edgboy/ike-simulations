# IKE Simulations

Simulations scientifiques interactives pour le **collège au Bénin** (programme PCT/SVT/Maths),
conçues pour être intégrées à une plateforme e-learning — et pour fonctionner sur le terrain :
smartphones Android d'entrée de gamme, salles informatiques anciennes, connexion intermittente ou absente.

Inspiration : [PhET Interactive Simulations](https://phet.colorado.edu) (Université du Colorado).

**🌐 En ligne : https://edgboy.github.io/ike-simulations/** — version de test, partagez le lien pour recueillir des retours.

## Principes techniques (la charte)

| # | Principe | Pourquoi |
|---|----------|----------|
| 1 | **Un fichier HTML autonome par simulation** | Marche hors-ligne (double-clic), se distribue par clé USB, s'intègre partout (iframe, Moodle, PWA) |
| 2 | **Zéro dépendance externe** (pas de CDN, pas de framework) | Pas d'internet requis, pas de version qui casse, taille minimale |
| 3 | **Budget : < 500 Ko par simulation 2D** | Chargement rapide même en 2G/3G |
| 4 | **Tactile d'abord** (Pointer Events, cibles ≥ 48 px) | La majorité des élèves utiliseront un téléphone |
| 5 | **60 fps sur bas de gamme** — Canvas 2D, redessin seulement si nécessaire | Fluidité = crédibilité pédagogique |
| 6 | **Physique correcte** (vrais solveurs, pas d'animations truquées) | Les valeurs affichées doivent être justes ; l'élève peut expérimenter librement |
| 7 | **Français, vocabulaire et symboles du programme** (norme des schémas électriques, virgule décimale…) | Cohérence avec les cours et les évaluations |
| 8 | **Code lisible et commenté en français** | Le code est le support du futur guide de création |

## Structure

```
IKE Simulations/
├── README.md
├── docs/
│   └── journal-technique.md    ← décisions techniques (matière première du futur guide)
└── simulations/
    └── circuit-electrique/
        └── index.html          ← simulation autonome : double-cliquer pour lancer
```

## Tester une simulation

Double-cliquer sur son `index.html` — aucun serveur, aucune installation.
Pour tester sur téléphone : copier le fichier sur l'appareil, ou le servir sur le réseau local
(`python -m http.server` dans le dossier, puis ouvrir `http://<ip-du-pc>:8000` sur le téléphone).

## Feuille de route

1. ✅ **Circuit électrique** (v1) : fils, piles, lampes, interrupteurs, ampèremètre — série/parallèle, court-circuit
2. ✅ Circuit électrique v1.5 : **parcours de 10 missions progressives** (validation par le montage réel, outils débloqués au fur et à mesure, « À retenir » du programme, progression sauvegardée) + mode libre
3. ⬜ Circuit électrique v2 : voltmètre, résistances, sauvegarde/chargement de montages
4. ⬜ Deuxième simulation 2D (optique ou états de la matière) → faire émerger les patterns communs
5. ⬜ Prototype **labo 3D léger** (Three.js embarqué, low-poly) → valider la faisabilité sur Android bas de gamme
6. ⬜ Choix de la plateforme e-learning → couche d'intégration (iframe + postMessage, ou SCORM/H5P si Moodle)
7. ⬜ **Guide de création et d'intégration** rédigé à partir du journal technique et des simulations existantes
