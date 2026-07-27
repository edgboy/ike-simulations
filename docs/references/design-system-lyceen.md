# Design System — Espace lycéen Alitoué

> Source visuelle de la palette : [`alitoue-palette-lime.svg`](../alitoue-palette-lime.svg).

## Contexte et objectifs

L’espace lycéen doit être **joueur, épuré et chaleureux**, sans jamais devenir enfantin ou confus. Le système visuel repose sur une sensation *paper* : des surfaces claires, des ombres douces, des couleurs vives utilisées avec parcimonie, et une hiérarchie lisible pour des adolescents qui scannent rapidement l’interface.

---

## Fondations

### Couleurs

| Token | Valeur | Usage |
|---|---|---|
| `--primary` | `#C4D94E` | Boutons principaux, états actifs, accents forts, icônes clés |
| `--secondary` | `#5BC5F2` | Liens, focus rings, badges informatifs, états sélectionnés |
| `--tertiary` | `#F7A430` | Alertes chaudes, badges, CTAs secondaires, récompenses |
| `--neutral` | `#3A3632` | Texte principal, fonds sombres, contours |
| `--background` | `#F7F5F0` | Fond général de l’application |
| `--surface` | `#FFFFFF` | Cartes, inputs, modales |
| `--surface-muted` | `#F0EEE9` | Sections groupées, lignes alternées |
| `--border` | `#D3CFC8` | Bordures neutres visibles mais discrètes *(dérivé de `--neutral` à ~18 %)* |
| `--border-strong` | `#B0ABA3` | Bordures au survol ou état actif *(dérivé de `--neutral` à ~32 %)* |
| `--ring` | `#5BC5F2` | Anneau de focus |
| `--destructive` | `#E83A4B` | Erreurs, suppressions, actions dangereuses |
| `--success` | `#2A9D8F` | Validation, progression réussie *(dérivé du secondary)* |

La couleur **Destructive** (`#E83A4B`) fait partie intégrante de la palette principale ; elle apparaît comme quatrième carte dédiée dans [`alitoue-palette-lime.svg`](../alitoue-palette-lime.svg), juste après la carte Tertiary.

#### Règles d’application des couleurs

- **Jamais de texte blanc sur `primary`, `secondary` ou `tertiary`.** Ces couleurs sont trop claires. Toujours utiliser `--neutral` (`#3A3632`) comme couleur de texte sur une surface colorée.
- Le `--neutral` sert aussi pour le texte principal sur fond `--background` ou `--surface`.
- `--destructive` est réservé aux actions irréversibles et aux messages d’erreur.
- Les couleurs primaires ne doivent pas occuper plus de **20 %** de la surface d’un écran pour éviter la fatigue visuelle.

### Typographie

| Token | Police | Taille | Graisse | Usage |
|---|---|---|---|---|
| `--font-display` | Baloo 2 | 34 px | 800 | H1, titres de page |
| `--font-display` | Baloo 2 | 24 px | 800 | H2, sections |
| `--font-heading` | Baloo 2 | 20 px | 700 | H3, cartes |
| `--font-heading` | Baloo 2 | 18 px | 700 | H4, sous-sections |
| `--font-body` | Inter | 16 px | 400 | Corps de texte |
| `--font-body` | Inter | 14 px | 400 | Texte secondaire |
| `--font-label` | Inter | 12 px | 600 | Labels, légendes, badges |

#### Règles typographiques

- Les titres utilisent toujours **Baloo 2** pour la personnalité joueuse.
- Le corps de texte utilise **Inter** pour la lisibilité.
- La taille minimale de texte lisible est **12 px**.
- Les labels et badges sont en **majuscules** avec un `letter-spacing: 0.05em`.

### Espacements

Base : **8 px**.

| Token | Valeur | Usage |
|---|---|---|
| `--space-1` | 4 px | Micro-ajustements |
| `--space-2` | 8 px | Icônes inline, petits gaps |
| `--space-3` | 12 px | Padding interne léger |
| `--space-4` | 16 px | Padding standard d’un composant |
| `--space-5` | 24 px | Gap entre sections |
| `--space-6` | 32 px | Marges de page |
| `--space-7` | 48 px | Grands blocs |
| `--space-8` | 64 px | Hero / sections majeures |

### Rayons de bordure

| Token | Valeur | Usage |
|---|---|---|
| `--radius-sm` | 8 px | Badges, chips, petits boutons |
| `--radius-md` | 12 px | Boutons, inputs, cartes compactes |
| `--radius-lg` | 16 px | Cartes, modales, panneaux |
| `--radius-xl` | 24 px | Bottom sheet, grandes modales |
| `--radius-full` | 9999 px | Pills, avatars |

### Élévation *paper*

Ombres **discrètes et fonctionnelles**. Pas d’effet de levée agressif. Trois niveaux :

| Niveau | Usage | Valeur |
|---|---|---|
| **Flat** | Surfaces au repos | `box-shadow: none; border: 1px solid var(--border)` |
| **Soft** | Cartes, panneaux | `box-shadow: 0 4px 16px rgba(58, 54, 50, 0.05)` |
| **Raised** | Bottom nav, FAB | `box-shadow: 0 6px 20px rgba(58, 54, 50, 0.06)` |

### Accentuation (sans levée)

Pour mettre en avant un élément sans utiliser d’ombre large, on utilise :
- une **bordure colorée** (`--primary`, `--secondary` ou `--tertiary`) ;
- un **fond coloré léger** (`--primary/10`, `--secondary/10`, `--tertiary/10`) ;
- un **ring de focus** (`--ring`).

**Interdit** : transformer l’élément au survol (`scale`, `translateY`, etc.) ou augmenter son ombre de manière spectaculaire.

### Bordures et focus rings

Les bordures sont **dérivées du neutre** (`--neutral`) pour rester cohérentes avec la typographie et la structure. Sur fond `--surface` (`#FFFFFF`), `--border` (`#D3CFC8`) assure un contraste suffisant pour délimiter les composants sans être lourde.

| Élément | Bordure par défaut | Bordure au survol | Ring de focus |
|---|---|---|---|
| **Input** | 2 px solid `--border` | 2 px solid `--border-strong` | Anneau `--ring` de 2 px, offset 2 px |
| **Card** | 1 px solid `--border` | 1 px solid `--border-strong` | Pas de ring (sauf carte interactive) |
| **Card interactive** | 1 px solid `--border` | 1 px solid `--border-strong` | Anneau `--ring` de 2 px, offset 2 px |
| **Button outlined** | 2 px solid `--neutral` | 2 px solid `--neutral`, fond `--surface-muted` | Anneau `--ring` de 2 px, offset 2 px |
| **Chip outlined** | 1 px solid `--border` | 1 px solid `--border-strong`, fond `--surface-muted` | Anneau `--ring` de 2 px |

#### Spécification du ring

- Couleur : `--ring` (`#5BC5F2`).
- Épaisseur : **2 px**.
- Offset : **2 px** par rapport au composant.
- Style : `outline: 2px solid var(--ring); outline-offset: 2px;`.
- Pas de box-shadow pour le focus : on garde l’ombre fonctionnelle (soft/raised) séparée du ring.

#### Accessibilité

- Le ring doit être visible sur **tous les fonds** (clair comme sombre).
- `--ring` (#5BC5F2) offre un contraste suffisant sur `--primary`, `--secondary`, `--tertiary`, `--neutral` et `--surface`.

### Transitions

| Token | Valeur | Usage |
|---|---|---|
| `--duration-fast` | 150 ms | Hover, focus |
| `--duration-normal` | 250 ms | Changements d’état |
| `--duration-slow` | 350 ms | Apparition de modales, bottom sheet |
| `--ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | Toutes les transitions |

---

## Composants

### 1. Bouton

#### Anatomy

- Hauteur : **44 px** (touch target confortable, contre 40 px actuellement).
- Padding horizontal : **20 px** (icône + label : **16 px** à gauche).
- Bordure : `--radius-lg` (16 px).
- Police : Inter 14 px, weight 600.

#### Variantes

| Variante | Fond | Texte | Bordure | Usage |
|---|---|---|---|---|
| **Primary** | `--primary` | `--neutral` | none | Action principale |
| **Secondary** | `--secondary` | `--neutral` | none | Action alternative |
| **Tertiary** | `--tertiary` | `--neutral` | none | Mise en avant chaude |
| **Outlined** | `--surface` | `--neutral` | 2 px `--neutral` | Action secondaire |
| **Ghost** | transparent | `--neutral` | none | Action dans une liste |

#### États

| État | Apparence |
|---|---|
| **Default** | Variante de base |
| **Hover** | Fond légèrement assombi (`/90`), **pas de translation ni d’ombre augmentée** |
| **Focus-visible** | Anneau `--ring` de 2 px, offset 2 px |
| **Active** | Fond légèrement assombi (`/85`), **pas de translation** |
| **Disabled** | Opacité 0.5, curseur not-allowed, pas d’ombre |
| **Loading** | Spinner à la place du label, fond inchangé |

### 2. Carte (Card)

#### Anatomy

- Fond : `--surface`.
- Bordure : 1 px `--border`.
- Rayon : `--radius-lg` (16 px).
- Padding : **24 px** (conservé, déjà confortable).
- Ombre : niveau **Soft**.

#### Variantes

| Variante | Usage |
|---|---|
| **Default** | Contenu générique |
| **Interactive** | Carte cliquable : hover bordure `--border-strong`, fond `--surface-muted`, **pas de translation** |
| **Selected** | Bordure 2 px `--primary`, fond `--primary/10` |
| **Flat** | Sans ombre, pour listes denses |

### 3. Input (Text / Search)

#### Anatomy

- Hauteur : **48 px**.
- Fond : `--surface`.
- Bordure : 2 px `--border`.
- Rayon : `--radius-md` (12 px).
- Padding horizontal : **16 px**.
- Icône de gauche : 20 px, couleur `--neutral` à 50 %.

#### États

| État | Apparence |
|---|---|
| **Default** | Bordure `--border` |
| **Hover** | Bordure `--border-strong` |
| **Focus** | Bordure `--border-strong`, anneau `--ring` de 2 px, offset 2 px, ombre soft |
| **Error** | Bordure `--destructive`, icône/message rouge |
| **Disabled** | Fond `--surface-muted`, bordure `--border`, texte `--neutral` à 40 % |

### 4. Badge / Chip

#### Anatomy

- Hauteur : **28 px**.
- Padding horizontal : **12 px**.
- Rayon : `--radius-full`.
- Police : Inter 12 px, weight 600, uppercase, letter-spacing 0.05 em.

#### Variantes

| Variante | Fond | Texte |
|---|---|---|
| **Primary** | `--primary` | `--neutral` |
| **Secondary** | `--secondary` | `--neutral` |
| **Tertiary** | `--tertiary` | `--neutral` |
| **Neutral** | `--surface-muted` | `--neutral` |
| **Outlined** | transparent | `--neutral` + bordure 1 px `--border` |

### 5. Bottom Navigation

#### Anatomy

- Fond : `--surface`.
- Hauteur : **72 px**.
- Rayon supérieur : `--radius-xl` (24 px).
- Ombre : niveau **Raised**.
- 3 à 5 items maximum.

#### États

| État | Apparence |
|---|---|
| **Inactive** | Icône `--neutral` à 60 % |
| **Active** | Icône `--primary`, fond `--primary` à 15 %, pill arrondi |

---

## Accessibilité

### Contraste

- Texte `--neutral` sur `--background` : ratio **> 12:1** ✅
- Texte `--neutral` sur `--primary` : ratio **> 7:1** ✅
- Texte `--neutral` sur `--secondary` : ratio **> 7:1** ✅
- Texte blanc sur `--primary` : ratio **< 1.5:1** ❌ → **interdit**
- Tous les éléments interactifs ont une taille minimale de **44x44 px**.

### Focus

- Tous les éléments focusables ont un `focus-visible` visible.
- Couleur du focus : `--secondary` (`#5BC5F2`).
- Offset minimum de 2 px.

### Mouvement

- Respecter `prefers-reduced-motion` : désactiver les translations sur hover/focus si l’utilisateur le demande.

---

## Ton et contenu

- **Clair et rassurant** : pas de jargon scolaire inutile.
- **Action-oriented** : les boutons utilisent des verbes (“Continuer”, “Valider”, “Revoir”).
- **Encouragement** : messages de progression et de réussite (“Bien joué !”, “Tu progresses”).
- **Concis** : privilégier les courtes phrases, surtout dans les cartes et les labels.

---

## Anti-patterns interdits

- ❌ Utiliser `transform: scale()` ou `translateY()` au survol.
- ❌ Augmenter drastiquement l’ombre au survol pour simuler une levée.
- ❌ Utiliser du texte blanc sur `--primary`, `--secondary` ou `--tertiary`.
- ❌ Hardcoder des couleurs `#hex` dans les composants.
- ❌ Utiliser des ombres trop grandes ou des néons.
- ❌ Mélanger des rayons inconsistants (par exemple 4 px et 24 px sans hiérarchie).
- ❌ Mettre plus de 5 items dans la bottom navigation.
- ❌ Utiliser `--destructive` pour une action non irréversible.
- ❌ Utiliser Baloo 2 pour du corps de texte long.

---

## Migration depuis l’ancien design system

La migration vers la palette lime est effective dans le code (`kondo-platform/app/styles/theme.css`, scope `.lyceen`) et dans la fiche visuelle [`alitoue-palette-lime.svg`](../alitoue-palette-lime.svg). Les principaux changements :

1. `--primary: #342c83` → `--primary: #C4D94E`.
2. `--secondary: #5bc5f2` reste inchangé.
3. `--tertiary: #F7A430` ajouté.
4. `--destructive: #E83A4B` est désormais une couleur de palette dédiée, représentée comme quatrième carte dans le SVG.
5. `--neutral: #3A3632` remplace le noir/texte principal hérité.
6. `--background: #eeeded` → `--background: #F7F5F0`.
7. `--border: #e5e5e5` → `--border: #D3CFC8` ; `--border-strong: #B0ABA3` ajouté (dérivés du neutre).
8. `--ring: #3b4898` → `--ring: #5BC5F2`.
9. Les effets `hover:shadow-md`, `hover:-translate-y-0.5` et transformations au survol ont été supprimés.

---

## Checklist QA (code review)

- [ ] Aucune couleur `#hex` n’est hardcodée dans les composants.
- [ ] Les boutons colorés utilisent `--neutral` comme couleur de texte.
- [ ] Tous les éléments interactifs font au moins 44x44 px.
- [ ] Les états `hover`, `focus-visible`, `active` et `disabled` sont définis.
- [ ] Les ombres utilisent uniquement les trois niveaux Flat / Soft / Raised.
- [ ] Les bordures utilisent `--border` ou `--border-strong`, jamais de gris hardcodé.
- [ ] Le focus ring utilise `--ring` (#5BC5F2) avec 2 px d’épaisseur et 2 px d’offset.
- [ ] La typographie utilise Baloo 2 pour les titres et Inter pour le corps.
- [ ] Le texte respecte les ratios de contraste WCAG 2.2 AA.
- [ ] `prefers-reduced-motion` est géré.
- [ ] Les badges/chips ne dépassent pas une hauteur de 28 px.
- [ ] La bottom navigation contient entre 3 et 5 items.
