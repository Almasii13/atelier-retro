# Atelier Retro — @back_to_2054

Atelier de fabrication graphique (obis, flyers, jaquettes…) piloté par Claude.

## Organisation

- `lib/` : briques communes (`atelier.css`) et moteur de rendu (`render.py`).
- `modeles/` : modèles validés et réutilisables. Un dossier par modèle, avec `template.html`.
- `creations/` : une création = un dossier daté contenant la fiche `.json` (textes, couleurs, dimensions, images) et les exports.

## Rendu

```
pip install jinja2 playwright pillow && playwright install chromium
python3 lib/render.py creations/2026-09_dbs-broly/obi.json --dpi 300
```

Exports :
- `<nom>.pdf` : impression, format fini + fond perdu 3 mm.
- `<nom>.png` : aperçu propre, recadré au format fini.
- `<nom>_epreuve.png` : fond perdu, trait de coupe (magenta), zone de sécurité (bleu), plis, zones réservées.
- `<nom>.psd` : calques Photoshop — Fond / Forme + calque écrêté pour chaque image / repères des zones réservées (masqués) / Textes & graphismes.
- `<nom>_calques/` : les mêmes calques en PNG transparents, pour le montage vidéo (glisser la VHS 3D ou la TV entre le fond et les textes).
- `<nom>_photoshop.jsx` : **script Photoshop** qui reconstruit le document en vrais calques — textes modifiables, formes vectorielles, image en masque d'écrêtage, zones réservées, repères. Photoshop > Fichier > Scripts > Parcourir… Le PSD est enregistré à côté du script. Installer d'abord les polices de `lib/fonts`.
- Textures incrustées dans un texte (`data-motif="clé"` + `images.clé` dans la fiche) : le PNG est embarqué dans les scripts ; Photoshop le colle en calque écrêté sur le texte, Illustrator en masque d'écrêtage à texte vivant. Texture bois procédurale : `python3 outils/bois.py sortie.png --largeur 31 --hauteur 11`.
- Vectoriser un tracé à la main (PNG transparent) : `python3 outils/vectoriser_trace.py trace.png dossier [--queue x0,y0,x1,y1]` → traits lissés d'épaisseur constante + taches gardées telles quelles, SVG + script Illustrator.
- Frise « vague + palmettes » (bordure Carddass) en Bézier : `python3 outils/frise.py dossier [--bande 5] [--periodes 6]` → SVG droite / module / angle + script Illustrator ; contrôle sans Illustrator : `node outils/verifier_frise_ai.js script.jsx sortie.svg`.
- `<nom>_illustrator.jsx` : **script Illustrator** construit à partir de la même scène — plan de travail au format fini avec fond perdu, calques et sous-calques, tracés vectoriels (dégradés, tracés transparés), textes modifiables calés sur l'encre, groupes de découpe pour les images, zone de sécurité en repère. Illustrator > Fichier > Scripts > Autre script… Le .ai est enregistré à côté du script. Contrôle sans Illustrator : `node outils/simulateur_illustrator.js <script> [--arbre] [--svg apercu.svg]`.
- Furigana : `data-ruby` sur la base → petit texte posé au-dessus (calque séparé dans Photoshop).
- Dégradés : fonds en `linear-gradient` → calques de remplissage dégradé ; texte découpé dans un dégradé → incrustation de dégradé.
- `outils/logo_or_3d.py` : logo doré 3D « 究極博 / SUPER MUSEUM » (dégradé métallique + extrusion), PNG transparent : `python3 outils/logo_or_3d.py sortie.png`.
- `outils/feu.py` : fond « marbre de feu » procédural (rouge / orange / jaune) vectorisé.
- `outils/mesurer_boites.py` : encre de chaque élément (repère page ou tourné), pour vérifier centrages et furigana.
- `lib/calage.py` : **calage automatique** — chaque texte listé dans `cibles` (cotes d'encre relevées sur la référence, éventuellement dans un repère tourné) est ajusté en corps, étirement et position (centre de l'encre, déplacement sub-pixel par translate) jusqu'à < 0,1 mm ; le résultat est écrit dans `calage`.
- `outils/mesurer_encre.py` : compare l'encre de chaque texte à des cotes cibles (mm) relevées sur la référence.
- `<nom>_photoshop_verification.png` : contrôle du script sans Photoshop (original | reconstruction depuis les données du script | différence), via `outils/verifier_jsx.py`.

## Catalogue des modèles

| Modèle | Format | Inspiré de | Statut |
|---|---|---|---|
| `obi-vhs-jp-classique` | Obi VHS enveloppant, bandeaux noirs + tranche rouge | Libre | V1 (abandonnée) |
| `obi-vhs-starburst` | Obi VHS enveloppant (verso / tranche / face), 188 mm | Obi LD « Ariel VISUAL 1 » — face calquée élément par élément | En test (V3) |
| `sachet-hero-tete` | Entête de sachet 70,7×20,5 (variantes recto / verso) : logo de série ovale, accroche jaune ou encadré « セット内容 », repère du trou | Sachet « ヒーローコレクション 第3弾 » (1995) | En test (V1) |
| `sachet-hero-corps-recto` | Corps de sachet 70,7×98,3 : fond bleu éclaboussé, contenu avec furigana, pilule et ovale prix | idem | En test (V1) |
| `sachet-hero-corps-verso` | Corps de sachet 70,7×98,3 : panneau illustré, accroche rouge inclinée, encadré vertical, code-barres EAN-13 vectoriel, adresse, sceau | idem | En test (V1) |
| `carte-special-recto` | Recto 65×90 : fenêtre rouge, bande argent avec fanion et texte tourné à furigana, nom à furigana, pastille « 億 », plaque deux lignes à furigana devant « SPECIAL » (bois, 70 %) | Carddass SPECIAL ② Son Gohan | En test (V1) |
| `carte-verso-limite` | Verso 65×90 symétrique (demi-tour) : cadre or à crans et languettes, panneaux crème tramés, bandes à damier, filets blancs, carré « 限 », boule 2 étoiles et disque « 二 » (tracé) — géométrie `outils/verso_limite.py` | Dos Carddass WEEKLY JUMP « 限 » | En test (V1) |
| `carte-invitation-recto` | Recto de carte 65×90 : fond noir, fenêtre dégradée bleu-violet, bande argent avec fanion et texte vertical à furigana (liseré blanc), pastille « 特 » à anneau segmenté, plaque « ご招待券 » (liseré cuivre, texte dégradé détouré) | Carddass Dragon Ball « ご招待券 » | En test (V1) |
| `carte-invitation-verso` | Verso de carte 65×90 : cadre or en escalier symétrique, cartouche blanc, titre italique rouge à ombre jaune décalée, encadré à 4 lignes avec furigana, bandeau copyright | Verso « INVITATION CARDDASS » | En test (V1) |
| `carte-pocket-file` | Recto de carte 65×90 : fond dégradé bleu → blanc, onglet FILE (texte argent), fenêtre à encoche + damier prisme bleu, plaques nom / attaque centrées, titre POCKET MONSTERS (serif condensé, dégradé violet) | Carddass Pocket Monsters FILE No.009 | En test (V1) |
| `carte-power-level` | Recto de carte 65×90 : fond de flammes vectoriel, cadre + damier prisme carré, badge octogonal, bandeau nom incliné (furigana), encadré texte, bloc POWER LEVEL + échelle 1–5 | Carte « Super Battle » Dragon Ball GT n° 749 | En test (V1) |
| `carte-hero-wgl` | Recto de carte 65×90 : bandes noires, fenêtre prisme pyramide vectorielle, titre bleu en arche (échelle verticale par lettre), CARD / numéro / NUMBER | Carte prisme « HERO COLLECTION » WGL-1 (Goku SSJ3) | En test (V1) |
| `carte-hero-diagonale` | Recto de carte 65×90 : fond bleu / prisme séparés par une diagonale, grand titre au trait découpé par la diagonale (masques vectoriels), filet parallèle, bandeau rouge | Carte prisme « HERO COLLECTION » WGL-1 (Vegeta & Trunks) | En test (V1) |
| `carte-special-data` | Dos de carte 65×90 (coins arrondis 3,2 mm) : bande verticale, panneau SPECIAL DATA, quiz avec furigana, éclaboussures vectorisées | PP card « SUPER SAIYAN BATTLE / SPECIAL DATA » (1995) | En test (V1) |
| `affiche-vertical-4dx` | Affiche portrait B5 (échelle libre) : accroche haute, personnage détouré, accroche verticale mincho, grand logo italique | Affiche « 機動警察パトレイバー the Movie 4DX » (2020) | En test (V1) |
| `affiche-carte-fiche` | Affiche 1080×1920 px : cadre central pour une carte, appels latéraux, tableau de caractéristiques, titre rouge à ombre jaune, plaque ご招待券 | Cartes Invitation Carddass (recto / verso) | En test (V1) |
| `affiche-carte-fiche-v2` | Affiche 1080×1920 px : deux logos en haut (image + logo doré 3D reproduit), plaque ご招待券, cadre carte, 6 appels, tableau de 10 lignes | Cartes Invitation Carddass + pamphlet « 究極博 » | En test (V2) |
| `flyer-vhd-double` | Flyer B5 182×257 (haut ciel / bas sable), zones VHS 3D + TV, repère incliné unique | Pub VHD Victor/JVC, magazine « Anime Vision » 1985 | En test (V4) |

## Règles de mise en page (appliquées par tous les modèles)

- Fond perdu 3 mm, marge de sécurité 2,5–3 mm : aucun texte hors de la zone bleue de l'épreuve.
- Textes dans les formes : zone de texte inscrite calculée (`lib/formes.py`), centrage horizontal et vertical, taille ajustée automatiquement (`data-fit`), condensation horizontale si nécessaire (`data-etire`).
- Japonais : justification inter-caractères, kinsoku strict, kana proportionnels (`palt`) sur les titres, colonnes verticales justifiées sur une hauteur commune.
- Polices libres (OFL) embarquées dans `lib/fonts`.
- **Cohérence géométrique** : un seul angle pour tous les éléments inclinés d'une page. Les éléments inclinés sont posés dans un repère incliné commun (`.axe`, paramètres `geo` de la fiche) : les bords des images sont parallèles aux lignes de texte, les colonnes partagent le même bord gauche, les gouttières sont constantes, la diagonale de fond suit le même angle.

## Règles maison

- Pas de logos officiels (éditeurs, franchises). Marque des VHS : **CYBERDYN VIDEO** (label de BACK TO 2054).
- Les visuels de films sont fournis par Cyril (`images/` dans chaque création).
- Zones réservées (VHS 3D, TV cathodique) : classe `.zone-reservee`, visibles en bleu sur les épreuves, invisibles à l'export.
