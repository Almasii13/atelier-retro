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
- Furigana : `data-ruby` sur la base → petit texte posé au-dessus (calque séparé dans Photoshop).
- Dégradés : fonds en `linear-gradient` → calques de remplissage dégradé ; texte découpé dans un dégradé → incrustation de dégradé.
- `outils/mesurer_encre.py` : compare l'encre de chaque texte à des cotes cibles (mm) relevées sur la référence.
- `<nom>_photoshop_verification.png` : contrôle du script sans Photoshop (original | reconstruction depuis les données du script | différence), via `outils/verifier_jsx.py`.

## Catalogue des modèles

| Modèle | Format | Inspiré de | Statut |
|---|---|---|---|
| `obi-vhs-jp-classique` | Obi VHS enveloppant, bandeaux noirs + tranche rouge | Libre | V1 (abandonnée) |
| `obi-vhs-starburst` | Obi VHS enveloppant (verso / tranche / face), 188 mm | Obi LD « Ariel VISUAL 1 » — face calquée élément par élément | En test (V3) |
| `carte-hero-wgl` | Recto de carte 65×90 : bandes noires, fenêtre prisme pyramide vectorielle, titre bleu en arche (échelle verticale par lettre), CARD / numéro / NUMBER | Carte prisme « HERO COLLECTION » WGL-1 (Goku SSJ3) | En test (V1) |
| `carte-hero-diagonale` | Recto de carte 65×90 : fond bleu / prisme séparés par une diagonale, grand titre au trait découpé par la diagonale (masques vectoriels), filet parallèle, bandeau rouge | Carte prisme « HERO COLLECTION » WGL-1 (Vegeta & Trunks) | En test (V1) |
| `carte-special-data` | Dos de carte 65×90 (coins arrondis 3,2 mm) : bande verticale, panneau SPECIAL DATA, quiz avec furigana, éclaboussures vectorisées | PP card « SUPER SAIYAN BATTLE / SPECIAL DATA » (1995) | En test (V1) |
| `affiche-vertical-4dx` | Affiche portrait B5 (échelle libre) : accroche haute, personnage détouré, accroche verticale mincho, grand logo italique | Affiche « 機動警察パトレイバー the Movie 4DX » (2020) | En test (V1) |
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
