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

Exports : PNG propre (impression), PNG avec repères de pli, PDF aux dimensions réelles, aperçu sur jaquette.

## Catalogue des modèles

| Modèle | Format | Inspiré de | Statut |
|---|---|---|---|
| `obi-vhs-jp-classique` | Obi VHS enveloppant (verso / tranche / face), 188 mm | Obi LD japonais fin 80's | En test |

## Règles maison

- Pas de logos officiels (éditeurs, franchises) : éditeur fictif « BACK TO 2054 / B2054 ».
- Les visuels de films sont fournis par Cyril (`images/` dans chaque création).
- Zones réservées (VHS 3D, TV cathodique) : classe `.zone-reservee`, visibles en bleu sur les épreuves, invisibles à l'export.
