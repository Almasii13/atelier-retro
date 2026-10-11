#target photoshop
/*  ATELIER RETRO \u2014 construction automatique du document dans Photoshop
    ---------------------------------------------------------------------
    Utilisation : Photoshop > Fichier > Scripts > Parcourir\u2026 > choisir ce fichier.
    Le script cr\u00e9e le document au format final (fond perdu compris, 300 ppi) avec :
      - de vrais calques de texte modifiables (polices, tailles, approches, interlignages, couleurs, rotations) ;
      - des calques de forme vectoriels ;
      - pour chaque image : une forme + un calque vide \u00e9cr\u00eat\u00e9 au-dessus (colle ton image dedans) ;
      - les zones r\u00e9serv\u00e9es (VHS 3D, TV\u2026) dans un groupe masqu\u00e9 ;
      - les rep\u00e8res : coupe, s\u00e9curit\u00e9, plis.
    Polices : installe celles du dossier lib/fonts de l'atelier avant de lancer le script.
    Le PSD est enregistr\u00e9 \u00e0 c\u00f4t\u00e9 de ce script.
*/
(function () {
 try {
  var SCENE = {"titre": "Jaquette VHS STAR WARS \u2014 20th Century Fox Video (104,5 \u00d7 189)", "fichier": "jaquette_star_wars", "largeur": 1305, "hauteur": 2303, "reperes": {"coupe": [35.43307086614173, 1269.6850393700788, 35.43307086614173, 2267.716535433071], "secu": [70.86614173228347, 1234.251968503937, 70.86614173228347, 2232.283464566929]}, "plis": [], "polices": ["RobotoCondensed-BlackItalic", "TeXGyreHeros-Bold", "TeXGyreHeros-Regular"], "items": [{"calque": "fond", "calqueNom": "Fond (rayures, cartouche, bandeaux, panneau)", "groupe": "", "nom": "Rayures \u2013 fond clair", "type": "forme", "couleur": [221, 227, 233], "chemins": [[{"a": [-0.03, -0.01]}, {"a": [1305.06, -0.01]}, {"a": [1305.06, 288.76]}, {"a": [-0.03, 288.76]}]]}, {"calque": "fond", "calqueNom": "Fond (rayures, cartouche, bandeaux, panneau)", "groupe": "", "nom": "Rayures \u2013 demi-teinte", "type": "forme", "couleur": [178, 185, 196], "chemins": [[{"a": [-0.03, 278.48]}, {"a": [1305.06, 278.48]}, {"a": [1305.06, 282.62]}, {"a": [-0.03, 282.62]}], [{"a": [-0.03, 261.12]}, {"a": [1305.06, 261.12]}, {"a": [1305.06, 265.26]}, {"a": [-0.03, 265.26]}], [{"a": [-0.03, 243.76]}, {"a": [1305.06, 243.76]}, {"a": [1305.06, 247.89]}, {"a": [-0.03, 247.89]}], [{"a": [-0.03, 226.4]}, {"a": [1305.06, 226.4]}, {"a": [1305.06, 230.53]}, {"a": [-0.03, 230.53]}], [{"a": [-0.03, 209.04]}, {"a": [1305.06, 209.04]}, {"a": [1305.06, 213.17]}, {"a": [-0.03, 213.17]}], [{"a": [-0.03, 191.67]}, {"a": [1305.06, 191.67]}, {"a": [1305.06, 195.81]}, {"a": [-0.03, 195.81]}], [{"a": [-0.03, 174.31]}, {"a": [1305.06, 174.31]}, {"a": [1305.06, 178.45]}, {"a": [-0.03, 178.45]}], [{"a": [-0.03, 156.95]}, {"a": [1305.06, 156.95]}, {"a": [1305.06, 161.08]}, {"a": [-0.03, 161.08]}], [{"a": [-0.03, 139.59]}, {"a": [1305.06, 139.59]}, {"a": [1305.06, 143.72]}, {"a": [-0.03, 143.72]}], [{"a": [-0.03, 122.23]}, {"a": [1305.06, 122.23]}, {"a": [1305.06, 126.36]}, {"a": [-0.03, 126.36]}], [{"a": [-0.03, 104.87]}, {"a": [1305.06, 104.87]}, {"a": [1305.06, 109.0]}, {"a": [-0.03, 109.0]}], [{"a": [-0.03, 87.5]}, {"a": [1305.06, 87.5]}, {"a": [1305.06, 91.64]}, {"a": [-0.03, 91.64]}], [{"a": [-0.03, 70.14]}, {"a": [1305.06, 70.14]}, {"a": [1305.06, 74.28]}, {"a": [-0.03, 74.28]}], [{"a": [-0.03, 52.78]}, {"a": [1305.06, 52.78]}, {"a": [1305.06, 56.91]}, {"a": [-0.03, 56.91]}], [{"a": [-0.03, 35.42]}, {"a": [1305.06, 35.42]}, {"a": [1305.06, 39.55]}, {"a": [-0.03, 39.55]}], [{"a": [-0.03, 18.06]}, {"a": [1305.06, 18.06]}, {"a": [1305.06, 22.19]}, {"a": [-0.03, 22.19]}], [{"a": [-0.03, 0.69]}, {"a": [1305.06, 0.69]}, {"a": [1305.06, 4.83]}, {"a": [-0.03, 4.83]}]]}, {"calque": "fond", "calqueNom": "Fond (rayures, cartouche, bandeaux, panneau)", "groupe": "", "nom": "Rayures \u2013 sombre", "type": "forme", "couleur": [132, 139, 154], "chemins": [[{"a": [-0.03, 271.4]}, {"a": [1305.06, 271.4]}, {"a": [1305.06, 278.48]}, {"a": [-0.03, 278.48]}], [{"a": [-0.03, 254.04]}, {"a": [1305.06, 254.04]}, {"a": [1305.06, 261.12]}, {"a": [-0.03, 261.12]}], [{"a": [-0.03, 236.67]}, {"a": [1305.06, 236.67]}, {"a": [1305.06, 243.76]}, {"a": [-0.03, 243.76]}], [{"a": [-0.03, 219.31]}, {"a": [1305.06, 219.31]}, {"a": [1305.06, 226.4]}, {"a": [-0.03, 226.4]}], [{"a": [-0.03, 201.95]}, {"a": [1305.06, 201.95]}, {"a": [1305.06, 209.04]}, {"a": [-0.03, 209.04]}], [{"a": [-0.03, 184.59]}, {"a": [1305.06, 184.59]}, {"a": [1305.06, 191.67]}, {"a": [-0.03, 191.67]}], [{"a": [-0.03, 167.23]}, {"a": [1305.06, 167.23]}, {"a": [1305.06, 174.31]}, {"a": [-0.03, 174.31]}], [{"a": [-0.03, 149.86]}, {"a": [1305.06, 149.86]}, {"a": [1305.06, 156.95]}, {"a": [-0.03, 156.95]}], [{"a": [-0.03, 132.5]}, {"a": [1305.06, 132.5]}, {"a": [1305.06, 139.59]}, {"a": [-0.03, 139.59]}], [{"a": [-0.03, 115.14]}, {"a": [1305.06, 115.14]}, {"a": [1305.06, 122.23]}, {"a": [-0.03, 122.23]}], [{"a": [-0.03, 97.78]}, {"a": [1305.06, 97.78]}, {"a": [1305.06, 104.87]}, {"a": [-0.03, 104.87]}], [{"a": [-0.03, 80.42]}, {"a": [1305.06, 80.42]}, {"a": [1305.06, 87.5]}, {"a": [-0.03, 87.5]}], [{"a": [-0.03, 63.05]}, {"a": [1305.06, 63.05]}, {"a": [1305.06, 70.14]}, {"a": [-0.03, 70.14]}], [{"a": [-0.03, 45.69]}, {"a": [1305.06, 45.69]}, {"a": [1305.06, 52.78]}, {"a": [-0.03, 52.78]}], [{"a": [-0.03, 28.33]}, {"a": [1305.06, 28.33]}, {"a": [1305.06, 35.42]}, {"a": [-0.03, 35.42]}], [{"a": [-0.03, 10.97]}, {"a": [1305.06, 10.97]}, {"a": [1305.06, 18.06]}, {"a": [-0.03, 18.06]}], [{"a": [-0.03, -6.39]}, {"a": [1305.06, -6.39]}, {"a": [1305.06, 0.69]}, {"a": [-0.03, 0.69]}]]}, {"calque": "fond", "calqueNom": "Fond (rayures, cartouche, bandeaux, panneau)", "groupe": "", "nom": "Cartouche logo", "type": "forme", "couleur": [74, 78, 103], "chemins": [[{"a": [514.92, -0.01]}, {"a": [790.11, -0.01]}, {"a": [790.11, 288.88]}, {"a": [514.92, 288.88]}]]}, {"calque": "fond", "calqueNom": "Fond (rayures, cartouche, bandeaux, panneau)", "groupe": "", "nom": "Bandeau VIDEO", "type": "forme", "couleur": [74, 78, 103], "chemins": [[{"a": [-0.03, 288.76]}, {"a": [1305.06, 288.76]}, {"a": [1305.06, 400.49]}, {"a": [-0.03, 400.49]}]]}, {"calque": "fond", "calqueNom": "Fond (rayures, cartouche, bandeaux, panneau)", "groupe": "", "nom": "Filet blanc", "type": "forme", "couleur": [238, 241, 238], "chemins": [[{"a": [-0.03, 400.37]}, {"a": [1305.06, 400.37]}, {"a": [1305.06, 413.95]}, {"a": [-0.03, 413.95]}]]}, {"calque": "fond", "calqueNom": "Fond (rayures, cartouche, bandeaux, panneau)", "groupe": "", "nom": "Filet gris clair", "type": "forme", "couleur": [207, 209, 202], "chemins": [[{"a": [-0.03, 1882.63]}, {"a": [1305.06, 1882.63]}, {"a": [1305.06, 1899.75]}, {"a": [-0.03, 1899.75]}]]}, {"calque": "fond", "calqueNom": "Fond (rayures, cartouche, bandeaux, panneau)", "groupe": "", "nom": "Panneau bleu nuit", "type": "forme", "couleur": [74, 78, 103], "chemins": [[{"a": [-0.03, 1899.75]}, {"a": [1305.06, 1899.75]}, {"a": [1305.06, 2303.09]}, {"a": [-0.03, 2303.09]}]]}, {"calque": "image:visuel", "calqueNom": "Visuel", "groupe": "", "nom": "slot vide", "type": "image", "cle": "visuel", "label": "", "chemins": [[{"a": [0.0, 413.92]}, {"a": [1306.25, 413.92]}, {"a": [1306.25, 1882.67]}, {"a": [0.0, 1882.67]}]], "detoure": false}, {"calque": "image:logo_titre", "calqueNom": "Logo titre STAR WARS", "groupe": "", "nom": "slot detoure vide", "type": "image", "cle": "logo_titre", "label": "", "chemins": [[{"a": [76.71, 1440.87]}, {"a": [754.83, 1440.87]}, {"a": [754.83, 1881.49]}, {"a": [76.71, 1881.49]}]], "detoure": true}, {"calque": "image:logo", "calqueNom": "Logo 20th Century Fox", "groupe": "", "nom": "slot detoure vide", "type": "image", "cle": "logo", "label": "", "chemins": [[{"a": [538.53, 42.48]}, {"a": [766.65, 42.48]}, {"a": [766.65, 276.86]}, {"a": [538.53, 276.86]}]], "detoure": true}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "\u00c9tiquette VHS", "nom": "\u00c9tiquette rouge", "type": "forme", "couleur": [228, 77, 71], "chemins": [[{"a": [-0.03, 1939.91]}, {"a": [7.36, 1939.91]}, {"a": [14.75, 1939.91]}, {"a": [22.14, 1939.91]}, {"a": [29.53, 1939.91]}, {"a": [36.92, 1939.91]}, {"a": [44.31, 1939.91]}, {"a": [51.7, 1939.91]}, {"a": [59.09, 1939.91]}, {"a": [66.48, 1939.91]}, {"a": [73.87, 1939.91]}, {"a": [81.26, 1939.91]}, {"a": [88.65, 1939.91]}, {"a": [96.04, 1939.91]}, {"a": [103.43, 1939.91]}, {"a": [110.83, 1939.91]}, {"a": [118.22, 1939.91]}, {"a": [125.61, 1939.91]}, {"a": [133.0, 1939.91]}, {"a": [140.39, 1939.91]}, {"a": [147.78, 1939.91]}, {"a": [155.17, 1939.91]}, {"a": [162.56, 1939.91]}, {"a": [169.95, 1939.91]}, {"a": [177.34, 1939.91]}, {"a": [184.73, 1939.91]}, {"a": [192.12, 1939.91]}, {"a": [199.51, 1939.91]}, {"a": [206.9, 1939.91]}, {"a": [214.29, 1939.91]}, {"a": [221.63, 1940.5]}, {"a": [227.6, 1944.57]}, {"a": [229.65, 1951.58]}, {"a": [229.69, 1958.97]}, {"a": [229.69, 1966.36]}, {"a": [229.69, 1973.75]}, {"a": [229.69, 1981.14]}, {"a": [229.69, 1988.53]}, {"a": [229.69, 1995.92]}, {"a": [229.69, 2003.31]}, {"a": [229.69, 2010.7]}, {"a": [229.69, 2018.09]}, {"a": [229.69, 2025.48]}, {"a": [229.69, 2032.88]}, {"a": [229.69, 2040.27]}, {"a": [229.69, 2047.66]}, {"a": [229.69, 2055.05]}, {"a": [228.93, 2062.36]}, {"a": [224.5, 2068.07]}, {"a": [217.4, 2069.82]}, {"a": [210.01, 2069.83]}, {"a": [202.62, 2069.83]}, {"a": [195.23, 2069.83]}, {"a": [187.84, 2069.83]}, {"a": [180.45, 2069.83]}, {"a": [173.06, 2069.83]}, {"a": [165.67, 2069.83]}, {"a": [158.28, 2069.83]}, {"a": [150.89, 2069.83]}, {"a": [143.5, 2069.83]}, {"a": [136.11, 2069.83]}, {"a": [128.72, 2069.83]}, {"a": [121.33, 2069.83]}, {"a": [113.94, 2069.83]}, {"a": [106.55, 2069.83]}, {"a": [99.15, 2069.83]}, {"a": [91.76, 2069.83]}, {"a": [84.37, 2069.83]}, {"a": [76.98, 2069.83]}, {"a": [69.59, 2069.83]}, {"a": [62.2, 2069.83]}, {"a": [54.81, 2069.83]}, {"a": [47.42, 2069.83]}, {"a": [40.03, 2069.83]}, {"a": [32.64, 2069.83]}, {"a": [25.25, 2069.83]}, {"a": [17.86, 2069.83]}, {"a": [10.47, 2069.83]}, {"a": [3.08, 2069.83]}, {"a": [-0.03, 2065.55]}, {"a": [-0.03, 2058.16]}, {"a": [-0.03, 2050.77]}, {"a": [-0.03, 2043.38]}, {"a": [-0.03, 2035.99]}, {"a": [-0.03, 2028.59]}, {"a": [-0.03, 2021.2]}, {"a": [-0.03, 2013.81]}, {"a": [-0.03, 2006.42]}, {"a": [-0.03, 1999.03]}, {"a": [-0.03, 1991.64]}, {"a": [-0.03, 1984.25]}, {"a": [-0.03, 1976.86]}, {"a": [-0.03, 1969.47]}, {"a": [-0.03, 1962.08]}, {"a": [-0.03, 1954.69]}, {"a": [-0.03, 1947.3]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "St\u00e9r\u00e9o", "nom": "Filets MONO", "type": "forme", "couleur": [243, 242, 236], "chemins": [[{"a": [1051.81, 1992.47]}, {"a": [1102.6, 1992.47]}, {"a": [1100.73, 2001.33]}, {"a": [1049.95, 2001.33]}], [{"a": [1051.89, 2003.33]}, {"a": [1102.67, 2003.33]}, {"a": [1100.73, 2012.55]}, {"a": [1049.95, 2012.55]}], [{"a": [1051.93, 2014.91]}, {"a": [1102.72, 2014.91]}, {"a": [1100.73, 2024.36]}, {"a": [1049.95, 2024.36]}], [{"a": [1191.76, 1992.47]}, {"a": [1242.55, 1992.47]}, {"a": [1240.69, 2001.33]}, {"a": [1189.91, 2001.33]}], [{"a": [1191.84, 2003.33]}, {"a": [1242.63, 2003.33]}, {"a": [1240.69, 2012.55]}, {"a": [1189.91, 2012.55]}], [{"a": [1191.89, 2014.91]}, {"a": [1242.68, 2014.91]}, {"a": [1240.69, 2024.36]}, {"a": [1189.91, 2024.36]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "En-t\u00eate", "nom": "VIDEO", "type": "texte", "texte": "VIDEO", "runs": [{"de": 0, "a": 5, "police": "TeXGyreHeros-Bold", "taille": 62.34, "approche": 302, "interligne": 62.07, "couleur": [243, 242, 236], "italique": false, "gras": false, "echelleH": 89.38, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 5, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [660.53, 309.87], "angle": 0.0, "encre": [237.63, 48.48], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Mentions visuel", "nom": "*TM", "type": "texte", "texte": "*TM", "runs": [{"de": 0, "a": 3, "police": "TeXGyreHeros-Regular", "taille": 29.75, "approche": 62, "interligne": 31.22, "couleur": [243, 242, 236], "italique": false, "gras": false, "echelleH": 110.63, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 3, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [800.84, 1848.44], "angle": 0.0, "encre": [60.62, 21.92], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Mentions visuel", "nom": "*TM  \u00a9 1977 Lucasfilm Ltd.", "type": "texte", "texte": "*TM  \u00a9 1977 Lucasfilm Ltd.", "runs": [{"de": 0, "a": 26, "police": "TeXGyreHeros-Regular", "taille": 30.84, "approche": 0, "interligne": 33.55, "couleur": [243, 242, 236], "italique": false, "gras": false, "echelleH": 62.5, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 26, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1114.71, 1847.83], "angle": 0.0, "encre": [230.49, 25.0], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "\u00c9tiquette VHS", "nom": "VHS", "type": "texte", "texte": "VHS", "runs": [{"de": 0, "a": 3, "police": "RobotoCondensed-BlackItalic", "taille": 87.05, "approche": 0, "interligne": 87.88, "couleur": [243, 242, 236], "italique": false, "gras": false, "echelleH": 68.57, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 3, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [134.88, 1991.6], "angle": 0.0, "encre": [97.61, 64.13], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "St\u00e9r\u00e9o", "nom": "STEREO", "type": "texte", "texte": "STEREO", "runs": [{"de": 0, "a": 6, "police": "RobotoCondensed-BlackItalic", "taille": 76.47, "approche": 0, "interligne": 77.35, "couleur": [243, 242, 236], "italique": false, "gras": false, "echelleH": 79.65, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 6, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1155.35, 1959.08], "angle": 0.0, "encre": [191.85, 57.87], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "St\u00e9r\u00e9o", "nom": "MONO", "type": "texte", "texte": "MONO", "runs": [{"de": 0, "a": 4, "police": "RobotoCondensed-BlackItalic", "taille": 42.93, "approche": 0, "interligne": 43.34, "couleur": [243, 242, 236], "italique": false, "gras": false, "echelleH": 80.95, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 4, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1145.72, 2008.94], "angle": 0.0, "encre": [87.48, 32.89], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "St\u00e9r\u00e9o", "nom": "COMPATIBLE", "type": "texte", "texte": "COMPATIBLE", "runs": [{"de": 0, "a": 10, "police": "RobotoCondensed-BlackItalic", "taille": 45.95, "approche": 0, "interligne": 47.04, "couleur": [243, 242, 236], "italique": false, "gras": false, "echelleH": 78.68, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 10, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1139.33, 2046.66], "angle": 0.0, "encre": [188.13, 34.38], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "G\u00e9n\u00e9rique", "nom": "TWENTIETH CENTURY-FOX Presents", "type": "texte", "texte": "TWENTIETH CENTURY-FOX Presents", "runs": [{"de": 0, "a": 30, "police": "TeXGyreHeros-Bold", "taille": 21.12, "approche": 0, "interligne": 21.58, "couleur": [243, 242, 236], "italique": false, "gras": false, "echelleH": 72.81, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 30, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [650.34, 1929.14], "angle": 0.0, "encre": [272.84, 17.25], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "G\u00e9n\u00e9rique", "nom": "A LUCASFILM LTD. PRODUCTION", "type": "texte", "texte": "A LUCASFILM LTD. PRODUCTION", "runs": [{"de": 0, "a": 27, "police": "TeXGyreHeros-Bold", "taille": 25.78, "approche": 0, "interligne": 24.46, "couleur": [243, 242, 236], "italique": false, "gras": false, "echelleH": 83.55, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 27, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [649.46, 1947.73], "angle": 0.0, "encre": [345.89, 20.39], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "G\u00e9n\u00e9rique", "nom": "STAR WARS", "type": "texte", "texte": "STAR WARS", "runs": [{"de": 0, "a": 9, "police": "TeXGyreHeros-Bold", "taille": 25.23, "approche": 0, "interligne": 23.43, "couleur": [243, 242, 236], "italique": false, "gras": false, "echelleH": 84.42, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 9, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [649.83, 1975.95], "angle": 0.0, "encre": [125.96, 18.85], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "G\u00e9n\u00e9rique", "nom": "Starring MARK HAMILL    HARRISON FORD   ", "type": "texte", "texte": "Starring MARK HAMILL    HARRISON FORD    CARRIE FISHER", "runs": [{"de": 0, "a": 8, "police": "TeXGyreHeros-Bold", "taille": 18.17, "approche": 0, "interligne": 27.98, "couleur": [243, 242, 236], "italique": false, "gras": false, "echelleH": 74.23, "echelleV": 100.0, "decalage": 0.0}, {"de": 8, "a": 54, "police": "TeXGyreHeros-Bold", "taille": 29.31, "approche": 0, "interligne": 27.98, "couleur": [243, 242, 236], "italique": false, "gras": false, "echelleH": 74.23, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 54, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [649.5, 2005.35], "angle": 0.0, "encre": [611.0, 26.6], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "G\u00e9n\u00e9rique", "nom": "PETER CUSHING", "type": "texte", "texte": "PETER CUSHING", "runs": [{"de": 0, "a": 13, "police": "TeXGyreHeros-Bold", "taille": 25.23, "approche": 0, "interligne": 23.43, "couleur": [243, 242, 236], "italique": false, "gras": false, "echelleH": 87.01, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 13, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [638.11, 2030.11], "angle": 0.0, "encre": [178.58, 20.37], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "G\u00e9n\u00e9rique", "nom": "and", "type": "texte", "texte": "and", "runs": [{"de": 0, "a": 3, "police": "TeXGyreHeros-Bold", "taille": 18.21, "approche": 0, "interligne": 15.6, "couleur": [243, 242, 236], "italique": false, "gras": false, "echelleH": 81.71, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 3, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [648.81, 2061.31], "angle": 0.0, "encre": [26.91, 14.12], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "G\u00e9n\u00e9rique", "nom": "ALEC GUINNESS", "type": "texte", "texte": "ALEC GUINNESS", "runs": [{"de": 0, "a": 13, "police": "TeXGyreHeros-Bold", "taille": 25.23, "approche": 0, "interligne": 23.43, "couleur": [243, 242, 236], "italique": false, "gras": false, "echelleH": 86.43, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 13, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [648.87, 2086.74], "angle": 0.0, "encre": [178.64, 20.36], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "G\u00e9n\u00e9rique", "nom": "Written and Directed by GEORGE LUCAS Pro", "type": "texte", "texte": "Written and Directed by GEORGE LUCAS Produced by GARY KURTZ Music by JOHN WILLIAMS", "runs": [{"de": 0, "a": 23, "police": "TeXGyreHeros-Bold", "taille": 15.24, "approche": 0, "interligne": 19.68, "couleur": [243, 242, 236], "italique": false, "gras": false, "echelleH": 91.68, "echelleV": 100.0, "decalage": 0.0}, {"de": 23, "a": 37, "police": "TeXGyreHeros-Bold", "taille": 24.59, "approche": 0, "interligne": 19.68, "couleur": [243, 242, 236], "italique": false, "gras": false, "echelleH": 91.68, "echelleV": 100.0, "decalage": 0.0}, {"de": 37, "a": 48, "police": "TeXGyreHeros-Bold", "taille": 15.24, "approche": 0, "interligne": 19.68, "couleur": [243, 242, 236], "italique": false, "gras": false, "echelleH": 91.68, "echelleV": 100.0, "decalage": 0.0}, {"de": 48, "a": 60, "police": "TeXGyreHeros-Bold", "taille": 24.59, "approche": 0, "interligne": 19.68, "couleur": [243, 242, 236], "italique": false, "gras": false, "echelleH": 91.68, "echelleV": 100.0, "decalage": 0.0}, {"de": 60, "a": 68, "police": "TeXGyreHeros-Bold", "taille": 15.24, "approche": 0, "interligne": 19.68, "couleur": [243, 242, 236], "italique": false, "gras": false, "echelleH": 91.68, "echelleV": 100.0, "decalage": 0.0}, {"de": 68, "a": 82, "police": "TeXGyreHeros-Bold", "taille": 24.59, "approche": 0, "interligne": 19.68, "couleur": [243, 242, 236], "italique": false, "gras": false, "echelleH": 91.68, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 82, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [650.49, 2115.35], "angle": 0.0, "encre": [839.42, 21.91], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "G\u00e9n\u00e9rique", "nom": "PANAVISION\u00a9    PRINTS BY DELUXE\u00a9    TECH", "type": "texte", "texte": "PANAVISION\u00a9    PRINTS BY DELUXE\u00a9    TECHNICOLOR\u00a9", "runs": [{"de": 0, "a": 48, "police": "TeXGyreHeros-Bold", "taille": 23.57, "approche": 0, "interligne": 24.76, "couleur": [243, 242, 236], "italique": false, "gras": false, "echelleH": 67.54, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 48, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [652.88, 2142.9], "angle": 0.0, "encre": [435.62, 20.35], "vertical": false, "boite": null}], "motifs": {}, "images": {}};
  if (!confirm("Atelier Retro\n\nConstruire le document \u00ab " + SCENE.titre + " \u00bb ?\n(1 a 2 minutes)")) return;

  function cTID(s) { return charIDToTypeID(s); }
  function sTID(s) { return stringIDToTypeID(s); }
  var erreurs = [];

  // ---------- V\u00e9rification des polices ----------
  var installees = {};
  for (var f = 0; f < app.fonts.length; f++) { installees[app.fonts[f].postScriptName] = true; }
  var manquantes = [];
  for (var i = 0; i < SCENE.polices.length; i++) { if (!installees[SCENE.polices[i]]) manquantes.push(SCENE.polices[i]); }
  if (manquantes.length) {
    if (!confirm("Polices non install\u00e9es (Photoshop les remplacera) :\n\n  " + manquantes.join("\n  ") +
                 "\n\nInstalle-les depuis lib/fonts puis relance, ou clique OK pour continuer quand m\u00eame.")) return;
  }

  var prefsRU = app.preferences.rulerUnits, prefsTU = app.preferences.typeUnits, dlg = app.displayDialogs;
  app.preferences.rulerUnits = Units.PIXELS;
  app.preferences.typeUnits = TypeUnits.POINTS;
  app.displayDialogs = DialogModes.NO;

  // Construction \u00e0 72 ppi (1 pt = 1 px : textes et trac\u00e9s exacts), passage \u00e0 300 ppi sans r\u00e9\u00e9chantillonnage \u00e0 la fin.
  // Nom de document sans caract\u00e8res interdits (\u00ab : \u00bb, \u00ab \u2014 \u00bb\u2026) : cause d'\u00e9chec de la commande \u00ab Cr\u00e9er \u00bb sous Windows
  var nomDoc = SCENE.fichier;
  var doc;
  try {
    doc = app.documents.add(new UnitValue(SCENE.largeur, "px"), new UnitValue(SCENE.hauteur, "px"), 72, nomDoc,
                            NewDocumentMode.RGB, DocumentFill.WHITE);
  } catch (e1) {
    doc = app.documents.add(new UnitValue(SCENE.largeur, "px"), new UnitValue(SCENE.hauteur, "px"), 72);
  }

  // ---------- Utilitaires ----------
  function couleurRGB(rgb) { var c = new SolidColor(); c.rgb.red = rgb[0]; c.rgb.green = rgb[1]; c.rgb.blue = rgb[2]; return c; }
  function descCouleur(rgb) {
    var c = new ActionDescriptor();
    c.putDouble(cTID("Rd  "), rgb[0]); c.putDouble(cTID("Grn "), rgb[1]); c.putDouble(cTID("Bl  "), rgb[2]);
    return c;
  }
  function px(u) { return (typeof u === "number") ? u : u.as("px"); }
  function centreEncre(l) { var b = l.bounds; return [(px(b[0]) + px(b[2])) / 2, (px(b[1]) + px(b[3])) / 2]; }
  function largeurEncre(l) { var b = l.bounds; return px(b[2]) - px(b[0]); }

  function ranger(calque, conteneur) {
    try { calque.move(conteneur, ElementPlacement.PLACEATBEGINNING); }
    catch (e) { try { calque.move(conteneur, ElementPlacement.INSIDE); } catch (e2) {} }
  }

  // Groupes : un groupe par calque logique, sous-groupes par zone de la mise en page
  var groupes = {};
  function groupeDe(it) {
    var cle = it.calque;
    var parent = groupes[cle];
    if (!parent) {
      parent = doc.layerSets.add();
      parent.name = it.calqueNom;
      ranger(parent, doc);
      groupes[cle] = parent;
      if (cle.indexOf("zone:") === 0) parent.visible = false;
    }
    if (!it.groupe) return parent;
    var cle2 = cle + "/" + it.groupe;
    var g = groupes[cle2];
    if (!g) { g = doc.layerSets.add(); g.name = it.groupe; ranger(g, parent); groupes[cle2] = g; }
    return g;
  }

  // ---------- Formes vectorielles ----------
  var nChemin = 0;
  // remplissage : null (couleur unie rgb) ou {angle, stops} (d\u00e9grad\u00e9 lin\u00e9aire)
  function forme(chemins, rgb, nom, remplissage, xor) {
    var subs = [];
    for (var c = 0; c < chemins.length; c++) {
      var pts = [];
      for (var p = 0; p < chemins[c].length; p++) {
        var a = chemins[c][p].a, pp = new PathPointInfo();
        pp.kind = PointKind.CORNERPOINT; pp.anchor = a; pp.leftDirection = a; pp.rightDirection = a;
        pts.push(pp);
      }
      var sp = new SubPathInfo();
      sp.operation = (xor && c > 0) ? ShapeOperation.SHAPEXOR : ShapeOperation.SHAPEADD; sp.closed = true; sp.entireSubPath = pts;
      subs.push(sp);
    }
    var chemin = doc.pathItems.add("atelier_tmp_" + (nChemin++), subs);
    var d = new ActionDescriptor(), r = new ActionReference();
    r.putClass(sTID("contentLayer")); d.putReference(cTID("null"), r);
    var d2 = new ActionDescriptor(), d3 = new ActionDescriptor();
    if (remplissage) {
      d3.putObject(cTID("Grad"), cTID("Grdn"), descDegrade(remplissage.stops));
      d3.putUnitDouble(cTID("Angl"), cTID("#Ang"), remplissage.angle);
      d3.putEnumerated(cTID("Type"), cTID("GrdT"), cTID("Lnr "));
      d3.putBoolean(cTID("Algn"), true);
      d2.putObject(cTID("Type"), sTID("gradientLayer"), d3);
    } else {
      d3.putObject(cTID("Clr "), cTID("RGBC"), descCouleur(rgb));
      d2.putObject(cTID("Type"), sTID("solidColorLayer"), d3);
    }
    d.putObject(cTID("Usng"), sTID("contentLayer"), d2);
    try {
      try { chemin.select(); executeAction(cTID("Mk  "), d, DialogModes.NO); }
      catch (e) {  // repli : s\u00e9lection + calque de remplissage masqu\u00e9
        chemin.makeSelection(0, true, SelectionType.REPLACE);
        executeAction(cTID("Mk  "), d, DialogModes.NO);
        doc.selection.deselect();
      }
    } finally {
      try { chemin.remove(); } catch (e3) {}
    }
    var l = doc.activeLayer; l.name = nom;
    return l;
  }

  // ---------- D\u00e9grad\u00e9s ----------
  function descDegrade(stops) {
    var g = new ActionDescriptor();
    g.putString(cTID("Nm  "), "Atelier");
    g.putEnumerated(cTID("GrdF"), cTID("GrdF"), cTID("CstS"));
    g.putDouble(cTID("Intr"), 4096);
    var cl = new ActionList();
    for (var i = 0; i < stops.length; i++) {
      var st = new ActionDescriptor();
      st.putObject(cTID("Clr "), cTID("RGBC"), descCouleur(stops[i].c));
      st.putEnumerated(cTID("Type"), cTID("Clry"), cTID("UsrS"));
      st.putInteger(cTID("Lctn"), Math.round(Math.max(0, Math.min(1, stops[i].pos)) * 4096));
      st.putInteger(cTID("Mdpn"), 50);
      cl.putObject(cTID("Clrt"), st);
    }
    g.putList(cTID("Clrs"), cl);
    var tl = new ActionList(), avecAlpha = false;
    for (var q = 0; q < stops.length; q++) if (stops[q].a !== undefined) avecAlpha = true;
    var nT = avecAlpha ? stops.length : 2;
    for (var k = 0; k < nT; k++) {
      var t = new ActionDescriptor();
      t.putUnitDouble(cTID("Opct"), cTID("#Prc"), avecAlpha ? Math.round((stops[k].a === undefined ? 1 : stops[k].a) * 100) : 100);
      t.putInteger(cTID("Lctn"), avecAlpha ? Math.round(Math.max(0, Math.min(1, stops[k].pos)) * 4096) : k * 4096);
      t.putInteger(cTID("Mdpn"), 50);
      tl.putObject(cTID("TrnS"), t);
    }
    g.putList(cTID("Trns"), tl);
    return g;
  }
  function couleurMoyenne(stops) { return stops[Math.floor(stops.length / 2)].c; }

  function formeDegradee(it) {
    // calque de remplissage d\u00e9grad\u00e9 avec masque vectoriel ; repli : couleur m\u00e9diane
    try { return forme(it.chemins, null, it.nom, { angle: it.angle, stops: it.stops }); }
    catch (e) {
      erreurs.push(it.nom + " (d\u00e9grad\u00e9 remplac\u00e9 par une couleur unie) : " + e.message);
      return forme(it.chemins, couleurMoyenne(it.stops), it.nom);
    }
  }

  function incrustationDegrade(dg) {
    var d = new ActionDescriptor(), r = new ActionReference();
    r.putProperty(cTID("Prpr"), cTID("Lefx")); r.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
    d.putReference(cTID("null"), r);
    var fx = new ActionDescriptor(), g = new ActionDescriptor();
    fx.putUnitDouble(cTID("Scl "), cTID("#Prc"), 100);
    g.putBoolean(cTID("enab"), true);
    g.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
    g.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
    g.putObject(cTID("Grad"), cTID("Grdn"), descDegrade(dg.stops));
    g.putUnitDouble(cTID("Angl"), cTID("#Ang"), dg.angle);
    g.putEnumerated(cTID("Type"), cTID("GrdT"), cTID("Lnr "));
    g.putBoolean(cTID("Algn"), true);
    g.putUnitDouble(cTID("Scl "), cTID("#Prc"), 100);
    fx.putObject(cTID("GrFl"), cTID("GrFl"), g);
    d.putObject(cTID("T   "), cTID("Lefx"), fx);
    executeAction(cTID("setd"), d, DialogModes.NO);
  }

  // ---------- Textes ----------
  function creerTexte(texte, runs, paras, boite, vertical) {
    var d = new ActionDescriptor(), r = new ActionReference();
    r.putClass(sTID("textLayer")); d.putReference(cTID("null"), r);
    var t = new ActionDescriptor();
    t.putString(sTID("textKey"), texte);
    var clic = new ActionDescriptor();
    clic.putUnitDouble(sTID("horizontal"), sTID("percentUnit"), 10);
    clic.putUnitDouble(sTID("vertical"), sTID("percentUnit"), 10);
    t.putObject(sTID("textClickPoint"), sTID("paint"), clic);
    var formes = new ActionList(), f = new ActionDescriptor();
    f.putEnumerated(sTID("char"), sTID("char"), sTID(boite ? "box" : "paint"));
    f.putEnumerated(sTID("orientation"), sTID("orientation"), sTID(vertical ? "vertical" : "horizontal"));
    if (boite) {
      var b = new ActionDescriptor();
      b.putUnitDouble(sTID("top"), sTID("pointsUnit"), 0);
      b.putUnitDouble(sTID("left"), sTID("pointsUnit"), 0);
      b.putUnitDouble(sTID("bottom"), sTID("pointsUnit"), boite.h);
      b.putUnitDouble(sTID("right"), sTID("pointsUnit"), boite.l);
      f.putObject(sTID("bounds"), sTID("rectangle"), b);
    }
    formes.putObject(sTID("textShape"), f);
    t.putList(sTID("textShape"), formes);

    var styles = new ActionList();
    for (var i = 0; i < runs.length; i++) {
      var ru = runs[i], rd = new ActionDescriptor(), st = new ActionDescriptor();
      rd.putInteger(sTID("from"), ru.de); rd.putInteger(sTID("to"), ru.a);
      st.putString(sTID("fontPostScriptName"), ru.police);
      st.putUnitDouble(sTID("size"), sTID("pointsUnit"), ru.taille);
      st.putInteger(sTID("tracking"), ru.approche);
      st.putDouble(sTID("horizontalScale"), ru.echelleH);
      if (ru.echelleV && Math.abs(ru.echelleV - 100) > 0.5) st.putDouble(sTID("verticalScale"), ru.echelleV);
      if (ru.decalage && Math.abs(ru.decalage) > 0.05) st.putUnitDouble(sTID("baselineShift"), sTID("pointsUnit"), ru.decalage);
      st.putBoolean(sTID("syntheticItalic"), ru.italique);
      st.putBoolean(sTID("syntheticBold"), ru.gras);
      if (ru.interligne) { st.putBoolean(sTID("autoLeading"), false); st.putUnitDouble(sTID("leading"), sTID("pointsUnit"), ru.interligne); }
      else { st.putBoolean(sTID("autoLeading"), true); }
      st.putObject(sTID("color"), cTID("RGBC"), descCouleur(ru.couleur));
      rd.putObject(sTID("textStyle"), sTID("textStyle"), st);
      styles.putObject(sTID("textStyleRange"), rd);
    }
    t.putList(sTID("textStyleRange"), styles);

    var pl = new ActionList();
    for (var j = 0; j < paras.length; j++) {
      var pa = paras[j], pd = new ActionDescriptor(), ps = new ActionDescriptor();
      pd.putInteger(sTID("from"), pa.de); pd.putInteger(sTID("to"), Math.max(pa.a, pa.de + 1));
      ps.putEnumerated(sTID("align"), sTID("alignmentType"), sTID(pa.align));
      ps.putUnitDouble(sTID("firstLineIndent"), sTID("pointsUnit"), pa.retrait1);
      ps.putUnitDouble(sTID("startIndent"), sTID("pointsUnit"), pa.retraitG);
      pd.putObject(sTID("paragraphStyle"), sTID("paragraphStyle"), ps);
      pl.putObject(sTID("paragraphStyleRange"), pd);
    }
    t.putList(sTID("paragraphStyleRange"), pl);
    d.putObject(cTID("Usng"), sTID("textLayer"), t);
    executeAction(cTID("Mk  "), d, DialogModes.NO);
    return doc.activeLayer;
  }

  // Place l'encre du calque sur le centre voulu puis tourne autour de ce centre
  function placer(l, centre, angle) {
    var c = centreEncre(l);
    l.translate(centre[0] - c[0], centre[1] - c[1]);
    if (Math.abs(angle) > 0.01) l.rotate(angle, AnchorPosition.MIDDLECENTER);
  }

  // Masque vectoriel (polygone, px document) sur le calque actif
  function masqueVectoriel(points) {
    var pts = [];
    for (var i = 0; i < points.length; i++) {
      var pp = new PathPointInfo();
      pp.kind = PointKind.CORNERPOINT; pp.anchor = points[i]; pp.leftDirection = points[i]; pp.rightDirection = points[i];
      pts.push(pp);
    }
    var sp = new SubPathInfo(); sp.operation = ShapeOperation.SHAPEADD; sp.closed = true; sp.entireSubPath = pts;
    var cible = doc.activeLayer;
    var chemin = doc.pathItems.add("atelier_masque_" + (nChemin++), [sp]);
    try {
      doc.activeLayer = cible;
      chemin.select();
      var d = new ActionDescriptor(), r = new ActionReference();
      r.putClass(cTID("Path")); d.putReference(cTID("null"), r);
      var r2 = new ActionReference(); r2.putEnumerated(cTID("Path"), cTID("Path"), sTID("vectorMask"));
      d.putReference(cTID("At  "), r2);
      var r3 = new ActionReference(); r3.putEnumerated(cTID("Path"), cTID("Ordn"), cTID("Trgt"));
      d.putReference(cTID("Usng"), r3);
      executeAction(cTID("Mk  "), d, DialogModes.NO);
    } finally { try { chemin.remove(); } catch (e) {} }
  }

  function contour(taille, rgb, centre) {
    var d = new ActionDescriptor(), r = new ActionReference();
    r.putProperty(cTID("Prpr"), cTID("Lefx")); r.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
    d.putReference(cTID("null"), r);
    var fx = new ActionDescriptor(), s = new ActionDescriptor();
    fx.putUnitDouble(cTID("Scl "), cTID("#Prc"), 100);
    s.putBoolean(cTID("enab"), true);
    s.putEnumerated(cTID("Styl"), cTID("FStl"), cTID(centre ? "CtrF" : "OutF"));
    s.putEnumerated(cTID("PntT"), cTID("FrFl"), cTID("SClr"));
    s.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
    s.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
    s.putUnitDouble(cTID("Sz  "), cTID("#Pxl"), Math.max(1, Math.round(taille)));
    s.putObject(cTID("Clr "), cTID("RGBC"), descCouleur(rgb));
    fx.putObject(cTID("FrFX"), cTID("FrFX"), s);
    d.putObject(cTID("T   "), cTID("Lefx"), fx);
    executeAction(cTID("setd"), d, DialogModes.NO);
  }

  function texte(it) {
    var l = creerTexte(it.texte, it.runs, it.paras, it.boite, it.vertical);
    l.name = it.nom;
    // Ajustement fin de l'approche des lignes simples pour retrouver la largeur exacte de la maquette
    if (!it.vertical && !it.boite && it.runs.length === 1 && it.texte.indexOf("\r") < 0 && it.texte.length > 2) {
      var w = largeurEncre(l), cible = it.encre[0];
      if (w > 0 && Math.abs(w - cible) / cible > 0.01) {
        var delta = (cible - w) / (it.texte.length - 1) / it.runs[0].taille * 1000;
        try { l.textItem.tracking = it.runs[0].approche + Math.round(delta); } catch (e) {}
      }
    }
    placer(l, it.centre, it.angle);
    if (it.contour) contour(it.contour.taille, it.contour.couleur, it.contour.centre);
    if (it.contourSeul) { try { l.fillOpacity = 0; } catch (e) {} }
    if (it.masque) { try { masqueVectoriel(it.masque); } catch (e) { erreurs.push(it.nom + " (masque) : " + e.message); } }
    if (it.opacite) { try { l.opacity = it.opacite; } catch (e) {} }
    if (it.degradeTexte) { try { incrustationDegrade(it.degradeTexte); } catch (e) { erreurs.push(it.nom + " (d\u00e9grad\u00e9 du texte) : " + e.message); } }
    return l;
  }

  // ---------- Textures incrust\u00e9es (motif bois\u2026) ----------
  // Le PNG est embarqu\u00e9 en base64 dans le script : \u00e9crit dans le dossier temporaire, ouvert, copi\u00e9,
  // puis coll\u00e9 juste au-dessus du texte en calque \u00e9cr\u00eat\u00e9 (masque d'\u00e9cr\u00eatage) : le texte reste modifiable.
  function b64bin(s) {
    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = [], b = 0, n = 0;
    for (var i = 0; i < s.length; i++) {
      var c = t.indexOf(s.charAt(i));
      if (c < 0) continue;
      b = ((b << 6) | c) & 0xFFFFFF; n += 6;
      if (n >= 8) { n -= 8; o.push(String.fromCharCode((b >> n) & 255)); }
    }
    return o.join("");
  }
  var fichiersMotifs = {};
  function fichierMotif(cle) {
    if (fichiersMotifs[cle]) return fichiersMotifs[cle];
    var f = new File(Folder.temp.fsName + "/atelier_motif_" + cle + ".png");
    f.encoding = "BINARY"; f.open("w"); f.write(b64bin(SCENE.motifs[cle].b64)); f.close();
    fichiersMotifs[cle] = f;
    return f;
  }
  // Texture plac\u00e9e (Fichier > Importer incorpor\u00e9) dans le document lui-m\u00eame : aucun changement de document,
  // compatible avec l'historique suspendu ; repli : ouverture + copier-coller.
  function poserMotif(texteCalque, it) {
    var f = fichierMotif(it.motif), m = SCENE.motifs[it.motif], l = null;
    doc.activeLayer = texteCalque;
    try {
      var d = new ActionDescriptor();
      d.putPath(cTID("null"), f);
      d.putEnumerated(cTID("FTcs"), cTID("QCSt"), cTID("Qcsa"));
      executeAction(cTID("Plc "), d, DialogModes.NO);
      l = doc.activeLayer;
      if (l === texteCalque) throw new Error("import incorpor\u00e9 refus\u00e9");
    } catch (e1) {
      var tex = app.open(f);
      tex.selection.selectAll(); tex.selection.copy();
      tex.close(SaveOptions.DONOTSAVECHANGES);
      app.activeDocument = doc; doc.activeLayer = texteCalque;
      l = doc.paste(); if (!l || l === texteCalque) l = doc.activeLayer;
    }
    l.name = "Motif " + it.motif + " (incrust\u00e9 dans \u00ab " + it.nom + " \u00bb)";
    // taille exacte de la texture (l'import peut la redimensionner selon les pr\u00e9f\u00e9rences)
    var b = l.bounds, w = px(b[2]) - px(b[0]), h = px(b[3]) - px(b[1]);
    if (w > 0 && h > 0 && (Math.abs(w - m.l) > 1 || Math.abs(h - m.h) > 1)) l.resize(m.l / w * 100, m.h / h * 100, AnchorPosition.MIDDLECENTER);
    var c = centreEncre(l);
    l.translate(it.centre[0] - c[0], it.centre[1] - c[1]);
    l.grouped = true;  // masque d'\u00e9cr\u00eatage sur le texte
    return l;
  }
  var motifsAPoser = [];

  // ---------- Images des emplacements (logos, photos) ----------
  var fichiersImages = {};
  function fichierImage(cle) {
    if (fichiersImages[cle]) return fichiersImages[cle];
    var f = new File(Folder.temp.fsName + "/atelier_image_" + cle + ".png");
    f.encoding = "BINARY"; f.open("w"); f.write(b64bin(SCENE.images[cle].b64)); f.close();
    fichiersImages[cle] = f;
    return f;
  }
  // base : calque forme sur lequel l'image est \u00e9cr\u00eat\u00e9e (null = image pos\u00e9e librement, PNG d\u00e9tour\u00e9)
  function poserImage(base, it) {
    var src = app.open(fichierImage(it.image));
    src.selection.selectAll(); src.selection.copy();
    src.close(SaveOptions.DONOTSAVECHANGES);
    app.activeDocument = doc;
    if (base) doc.activeLayer = base;
    var l = doc.paste();
    if (!l || l === base) l = doc.activeLayer;
    l.name = it.calqueNom;
    var x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
    for (var c = 0; c < it.chemins.length; c++) for (var p = 0; p < it.chemins[c].length; p++) {
      var a = it.chemins[c][p].a;
      x0 = Math.min(x0, a[0]); x1 = Math.max(x1, a[0]); y0 = Math.min(y0, a[1]); y1 = Math.max(y1, a[1]);
    }
    var b = l.bounds, w = px(b[2]) - px(b[0]), h = px(b[3]) - px(b[1]);
    var s = it.detoure ? Math.min((x1 - x0) / w, (y1 - y0) / h) : Math.max((x1 - x0) / w, (y1 - y0) / h);
    if (Math.abs(s - 1) > 0.002) l.resize(s * 100, s * 100, AnchorPosition.MIDDLECENTER);
    var c2 = centreEncre(l);
    l.translate((x0 + x1) / 2 - c2[0], (y0 + y1) / 2 - c2[1]);
    if (base) l.grouped = true;
    return l;
  }

  function arc(it, conteneur) {
    var g = doc.layerSets.add(); g.name = it.nom; ranger(g, conteneur);
    for (var i = 0; i < it.car.length; i++) {
      var c = it.car[i];
      if (c.c === " ") continue;
      var l = creerTexte(c.c, [{ de: 0, a: 1, police: it.police, taille: it.taille, approche: 0, echelleH: 100,
                                  italique: it.italique, gras: false, interligne: null, couleur: it.couleur }],
                         [{ de: 0, a: 1, align: "left", retrait1: 0, retraitG: 0 }], null);
      l.name = c.c;
      ranger(l, g);
      placer(l, c.centre, c.angle);
    }
  }

  // ---------- Construction ----------
  $.global.__atelierConstruire = function () {
    for (var n = 0; n < SCENE.items.length; n++) {
      var it = SCENE.items[n];
      try {
        var cont = groupeDe(it), l;
        if (it.type === "forme") {
          l = forme(it.chemins, it.couleur, it.nom, null, it.xor); ranger(l, cont);
          if (it.opacite) { try { l.opacity = it.opacite; } catch (e) {} }
        }
        else if (it.type === "degrade") { l = formeDegradee(it); ranger(l, cont); }
        else if (it.type === "texte") {
          l = texte(it); ranger(l, cont);
          if (it.motif && SCENE.motifs && SCENE.motifs[it.motif]) {
            motifsAPoser.push({ l: l, it: it });  // pos\u00e9s apr\u00e8s la construction (hors historique suspendu)
          }
        }
        else if (it.type === "arc") { arc(it, cont); }
        else if (it.type === "image") {
          var avecImage = !!(it.image && SCENE.images && SCENE.images[it.image]);
          if (avecImage && it.detoure) {
            // logo / personnage d\u00e9tour\u00e9 : l'image fournie est pos\u00e9e telle quelle (PNG transparent), sans forme dessous
            try { l = poserImage(null, it); ranger(l, cont); }
            catch (e) { erreurs.push(it.calqueNom + " (image) : " + e.message); avecImage = false; }
          } else if (avecImage) {
            l = forme(it.chemins, [128, 128, 128], "Forme \u2013 " + it.calqueNom); ranger(l, cont);
            try { poserImage(l, it); }  // photo : calque \u00e9cr\u00eat\u00e9 sur la forme
            catch (e) { erreurs.push(it.calqueNom + " (image) : " + e.message); avecImage = false; }
          }
          if (!avecImage) {
            l = forme(it.chemins, [128, 128, 128], "Forme \u2013 " + it.calqueNom); ranger(l, cont);
            if (it.detoure) { try { l.fillOpacity = 0; } catch (e) {} }  // image d\u00e9tour\u00e9e : la forme d\u00e9coupe sans se voir
            var img = doc.artLayers.add(); img.name = ">> " + it.calqueNom + " : colle ton image ici";
            ranger(img, cont); img.grouped = true;
          }
        }
        else if (it.type === "zone") {
          l = forme(it.chemins, [0, 160, 233], "Zone \u2013 " + it.label); ranger(l, cont); l.opacity = 30;
        }
      } catch (e) { erreurs.push((it.nom || it.type) + " : " + e.message); }
    }
    // Rep\u00e8res
    var R = SCENE.reperes;
    var v = [R.coupe[0], R.coupe[1], R.secu[0], R.secu[1]].concat(SCENE.plis), h = [R.coupe[2], R.coupe[3], R.secu[2], R.secu[3]];
    for (var a = 0; a < v.length; a++) { try { doc.guides.add(Direction.VERTICAL, v[a]); } catch (e) {} }
    for (var b = 0; b < h.length; b++) { try { doc.guides.add(Direction.HORIZONTAL, h[b]); } catch (e) {} }
  };

  try { doc.suspendHistory("Atelier Retro", "__atelierConstruire()"); }
  catch (e) { erreurs.push("Construction : " + e.message); }
  for (var mo = 0; mo < motifsAPoser.length; mo++) {
    try { poserMotif(motifsAPoser[mo].l, motifsAPoser[mo].it); }
    catch (e) { erreurs.push(motifsAPoser[mo].it.nom + " (motif " + motifsAPoser[mo].it.motif + ") : " + e.message); }
  }

  doc.resizeImage(undefined, undefined, 300, ResampleMethod.NONE);
  app.preferences.rulerUnits = prefsRU; app.preferences.typeUnits = prefsTU; app.displayDialogs = dlg;

  var fichier = new File(File($.fileName).parent.fsName + "/" + File($.fileName).name.replace(/\.jsx$/i, "").replace(/_photoshop$/i, "") + ".psd");
  try { var o = new PhotoshopSaveOptions(); o.layers = true; doc.saveAs(fichier, o, false, Extension.LOWERCASE); }
  catch (e) { erreurs.push("Enregistrement : " + e.message); }

  alert("Atelier Retro \u2014 document construit.\n\n" +
        "Fichier : " + fichier.fsName + "\n" +
        "Rep\u00e8res : coupe (fond perdu " + "3 mm), s\u00e9curit\u00e9, plis.\n" +
        (manquantes.length ? "\nPolices remplac\u00e9es : " + manquantes.join(", ") + "\n" : "") +
        (erreurs.length ? "\n\u00c9l\u00e9ments non cr\u00e9\u00e9s (" + erreurs.length + ") :\n- " + erreurs.slice(0, 12).join("\n- ") : "\nAucune erreur."));

 } catch (err) {
  alert("Atelier Retro \u2014 erreur\n\nLigne " + err.line + " : " + err.message +
        "\n\nEnvoie une capture de ce message a Claude.");
 }
})();
