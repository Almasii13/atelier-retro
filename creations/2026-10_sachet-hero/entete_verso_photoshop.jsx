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
  var SCENE = {"titre": "Sachet HERO COLLECTION 3 \u2014 ent\u00eate verso", "fichier": "entete_verso", "largeur": 906, "hauteur": 313, "reperes": {"coupe": [35.43307086614173, 870.4724409448819, 35.43307086614173, 277.5590551181102], "secu": [59.05511811023622, 846.8503937007874, 59.05511811023622, 253.93700787401576]}, "plis": [], "polices": ["ArchivoBlack-Regular", "DelaGothicOne-Regular", "ZenKakuGothicNew-Black", "ZenKakuGothicNew-Medium"], "items": [{"calque": "fond", "calqueNom": "Fond noir", "groupe": "", "nom": "fond noir", "type": "forme", "couleur": [11, 10, 12], "chemins": [[{"a": [-23.63, -23.63]}, {"a": [929.49, -23.63]}, {"a": [929.49, 335.74]}, {"a": [-23.63, 335.74]}]]}, {"calque": "logo_serie", "calqueNom": "Logo de s\u00e9rie", "groupe": "Logo \u30d2\u30fc\u30ed\u30fc\u30b3\u30ec\u30af\u30b7\u30e7\u30f3", "nom": "Logo \u30d2\u30fc\u30ed\u30fc\u30b3\u30ec\u30af\u30b7\u30e7\u30f3 \u2013 cercle", "type": "forme", "couleur": [242, 210, 46], "chemins": [[{"a": [323.59, 145.82]}, {"a": [323.47, 148.73]}, {"a": [323.1, 151.63]}, {"a": [322.47, 154.53]}, {"a": [321.6, 157.4]}, {"a": [320.49, 160.26]}, {"a": [319.13, 163.09]}, {"a": [317.53, 165.88]}, {"a": [315.69, 168.64]}, {"a": [313.62, 171.35]}, {"a": [311.31, 174.02]}, {"a": [308.78, 176.63]}, {"a": [306.03, 179.18]}, {"a": [303.07, 181.67]}, {"a": [299.89, 184.09]}, {"a": [296.51, 186.43]}, {"a": [292.93, 188.71]}, {"a": [289.16, 190.89]}, {"a": [285.2, 193.0]}, {"a": [281.07, 195.01]}, {"a": [276.77, 196.93]}, {"a": [272.31, 198.75]}, {"a": [267.7, 200.47]}, {"a": [262.94, 202.09]}, {"a": [258.05, 203.6]}, {"a": [253.04, 205.0]}, {"a": [247.91, 206.29]}, {"a": [242.67, 207.46]}, {"a": [237.34, 208.52]}, {"a": [231.93, 209.45]}, {"a": [226.44, 210.27]}, {"a": [220.88, 210.96]}, {"a": [215.27, 211.53]}, {"a": [209.62, 211.97]}, {"a": [203.94, 212.29]}, {"a": [198.23, 212.48]}, {"a": [192.51, 212.54]}, {"a": [186.79, 212.48]}, {"a": [181.09, 212.29]}, {"a": [175.4, 211.97]}, {"a": [169.75, 211.53]}, {"a": [164.14, 210.96]}, {"a": [158.58, 210.27]}, {"a": [153.09, 209.45]}, {"a": [147.68, 208.52]}, {"a": [142.35, 207.46]}, {"a": [137.11, 206.29]}, {"a": [131.98, 205.0]}, {"a": [126.97, 203.6]}, {"a": [122.08, 202.09]}, {"a": [117.33, 200.47]}, {"a": [112.71, 198.75]}, {"a": [108.25, 196.93]}, {"a": [103.95, 195.01]}, {"a": [99.82, 193.0]}, {"a": [95.87, 190.89]}, {"a": [92.1, 188.71]}, {"a": [88.52, 186.43]}, {"a": [85.13, 184.09]}, {"a": [81.96, 181.67]}, {"a": [78.99, 179.18]}, {"a": [76.24, 176.63]}, {"a": [73.71, 174.02]}, {"a": [71.41, 171.35]}, {"a": [69.33, 168.64]}, {"a": [67.5, 165.88]}, {"a": [65.89, 163.09]}, {"a": [64.54, 160.26]}, {"a": [63.42, 157.4]}, {"a": [62.55, 154.53]}, {"a": [61.93, 151.63]}, {"a": [61.55, 148.73]}, {"a": [61.43, 145.82]}, {"a": [61.55, 142.91]}, {"a": [61.93, 140.0]}, {"a": [62.55, 137.11]}, {"a": [63.42, 134.23]}, {"a": [64.54, 131.38]}, {"a": [65.89, 128.55]}, {"a": [67.5, 125.75]}, {"a": [69.33, 123.0]}, {"a": [71.41, 120.28]}, {"a": [73.71, 117.62]}, {"a": [76.24, 115.01]}, {"a": [78.99, 112.46]}, {"a": [81.96, 109.97]}, {"a": [85.13, 107.55]}, {"a": [88.52, 105.2]}, {"a": [92.1, 102.93]}, {"a": [95.87, 100.74]}, {"a": [99.82, 98.64]}, {"a": [103.95, 96.62]}, {"a": [108.25, 94.7]}, {"a": [112.71, 92.88]}, {"a": [117.33, 91.16]}, {"a": [122.08, 89.54]}, {"a": [126.97, 88.03]}, {"a": [131.98, 86.63]}, {"a": [137.11, 85.35]}, {"a": [142.35, 84.17]}, {"a": [147.68, 83.12]}, {"a": [153.09, 82.18]}, {"a": [158.58, 81.37]}, {"a": [164.14, 80.68]}, {"a": [169.75, 80.11]}, {"a": [175.4, 79.67]}, {"a": [181.09, 79.35]}, {"a": [186.79, 79.16]}, {"a": [192.51, 79.09]}, {"a": [198.23, 79.16]}, {"a": [203.94, 79.35]}, {"a": [209.62, 79.67]}, {"a": [215.27, 80.11]}, {"a": [220.88, 80.68]}, {"a": [226.44, 81.37]}, {"a": [231.93, 82.18]}, {"a": [237.34, 83.12]}, {"a": [242.67, 84.17]}, {"a": [247.91, 85.35]}, {"a": [253.04, 86.63]}, {"a": [258.05, 88.03]}, {"a": [262.94, 89.54]}, {"a": [267.7, 91.16]}, {"a": [272.31, 92.88]}, {"a": [276.77, 94.7]}, {"a": [281.07, 96.62]}, {"a": [285.2, 98.64]}, {"a": [289.16, 100.74]}, {"a": [292.93, 102.93]}, {"a": [296.51, 105.2]}, {"a": [299.89, 107.55]}, {"a": [303.07, 109.97]}, {"a": [306.03, 112.46]}, {"a": [308.78, 115.01]}, {"a": [311.31, 117.62]}, {"a": [313.62, 120.28]}, {"a": [315.69, 123.0]}, {"a": [317.53, 125.75]}, {"a": [319.13, 128.55]}, {"a": [320.49, 131.38]}, {"a": [321.6, 134.23]}, {"a": [322.47, 137.11]}, {"a": [323.1, 140.0]}, {"a": [323.47, 142.91]}]]}, {"calque": "logo_serie", "calqueNom": "Logo de s\u00e9rie", "groupe": "Logo \u30d2\u30fc\u30ed\u30fc\u30b3\u30ec\u30af\u30b7\u30e7\u30f3", "nom": "Logo \u30d2\u30fc\u30ed\u30fc\u30b3\u30ec\u30af\u30b7\u30e7\u30f3 \u2013 cercle", "type": "forme", "couleur": [224, 41, 43], "chemins": [[{"a": [317.1, 145.82]}, {"a": [316.98, 148.44]}, {"a": [316.62, 151.07]}, {"a": [316.03, 153.68]}, {"a": [315.21, 156.28]}, {"a": [314.15, 158.85]}, {"a": [312.85, 161.4]}, {"a": [311.33, 163.93]}, {"a": [309.59, 166.42]}, {"a": [307.62, 168.86]}, {"a": [305.43, 171.27]}, {"a": [303.02, 173.63]}, {"a": [300.41, 175.93]}, {"a": [297.59, 178.18]}, {"a": [294.57, 180.36]}, {"a": [291.35, 182.48]}, {"a": [287.95, 184.53]}, {"a": [284.37, 186.51]}, {"a": [280.61, 188.4]}, {"a": [276.68, 190.22]}, {"a": [272.59, 191.95]}, {"a": [268.36, 193.6]}, {"a": [263.97, 195.15]}, {"a": [259.45, 196.61]}, {"a": [254.8, 197.98]}, {"a": [250.04, 199.24]}, {"a": [245.16, 200.4]}, {"a": [240.19, 201.46]}, {"a": [235.12, 202.41]}, {"a": [229.98, 203.26]}, {"a": [224.76, 203.99]}, {"a": [219.48, 204.62]}, {"a": [214.15, 205.13]}, {"a": [208.77, 205.53]}, {"a": [203.37, 205.82]}, {"a": [197.95, 205.99]}, {"a": [192.51, 206.04]}, {"a": [187.08, 205.99]}, {"a": [181.65, 205.82]}, {"a": [176.25, 205.53]}, {"a": [170.88, 205.13]}, {"a": [165.55, 204.62]}, {"a": [160.27, 203.99]}, {"a": [155.05, 203.26]}, {"a": [149.9, 202.41]}, {"a": [144.83, 201.46]}, {"a": [139.86, 200.4]}, {"a": [134.98, 199.24]}, {"a": [130.22, 197.98]}, {"a": [125.57, 196.61]}, {"a": [121.05, 195.15]}, {"a": [116.67, 193.6]}, {"a": [112.43, 191.95]}, {"a": [108.34, 190.22]}, {"a": [104.41, 188.4]}, {"a": [100.66, 186.51]}, {"a": [97.07, 184.53]}, {"a": [93.67, 182.48]}, {"a": [90.45, 180.36]}, {"a": [87.43, 178.18]}, {"a": [84.61, 175.93]}, {"a": [82.0, 173.63]}, {"a": [79.6, 171.27]}, {"a": [77.41, 168.86]}, {"a": [75.44, 166.42]}, {"a": [73.69, 163.93]}, {"a": [72.17, 161.4]}, {"a": [70.88, 158.85]}, {"a": [69.82, 156.28]}, {"a": [68.99, 153.68]}, {"a": [68.4, 151.07]}, {"a": [68.04, 148.44]}, {"a": [67.92, 145.82]}, {"a": [68.04, 143.19]}, {"a": [68.4, 140.57]}, {"a": [68.99, 137.96]}, {"a": [69.82, 135.36]}, {"a": [70.88, 132.78]}, {"a": [72.17, 130.23]}, {"a": [73.69, 127.71]}, {"a": [75.44, 125.22]}, {"a": [77.41, 122.77]}, {"a": [79.6, 120.36]}, {"a": [82.0, 118.01]}, {"a": [84.61, 115.7]}, {"a": [87.43, 113.46]}, {"a": [90.45, 111.27]}, {"a": [93.67, 109.15]}, {"a": [97.07, 107.1]}, {"a": [100.66, 105.13]}, {"a": [104.41, 103.23]}, {"a": [108.34, 101.41]}, {"a": [112.43, 99.68]}, {"a": [116.67, 98.04]}, {"a": [121.05, 96.48]}, {"a": [125.57, 95.02]}, {"a": [130.22, 93.66]}, {"a": [134.98, 92.39]}, {"a": [139.86, 91.23]}, {"a": [144.83, 90.17]}, {"a": [149.9, 89.22]}, {"a": [155.05, 88.38]}, {"a": [160.27, 87.64]}, {"a": [165.55, 87.02]}, {"a": [170.88, 86.5]}, {"a": [176.25, 86.11]}, {"a": [181.65, 85.82]}, {"a": [187.08, 85.65]}, {"a": [192.51, 85.59]}, {"a": [197.95, 85.65]}, {"a": [203.37, 85.82]}, {"a": [208.77, 86.11]}, {"a": [214.15, 86.5]}, {"a": [219.48, 87.02]}, {"a": [224.76, 87.64]}, {"a": [229.98, 88.38]}, {"a": [235.12, 89.22]}, {"a": [240.19, 90.17]}, {"a": [245.16, 91.23]}, {"a": [250.04, 92.39]}, {"a": [254.8, 93.66]}, {"a": [259.45, 95.02]}, {"a": [263.97, 96.48]}, {"a": [268.36, 98.04]}, {"a": [272.59, 99.68]}, {"a": [276.68, 101.41]}, {"a": [280.61, 103.23]}, {"a": [284.37, 105.13]}, {"a": [287.95, 107.1]}, {"a": [291.35, 109.15]}, {"a": [294.57, 111.27]}, {"a": [297.59, 113.46]}, {"a": [300.41, 115.7]}, {"a": [303.02, 118.01]}, {"a": [305.43, 120.36]}, {"a": [307.62, 122.77]}, {"a": [309.59, 125.22]}, {"a": [311.33, 127.71]}, {"a": [312.85, 130.23]}, {"a": [314.15, 132.78]}, {"a": [315.21, 135.36]}, {"a": [316.03, 137.96]}, {"a": [316.62, 140.57]}, {"a": [316.98, 143.19]}]]}, {"calque": "logo_serie", "calqueNom": "Logo de s\u00e9rie", "groupe": "Logo \u30d2\u30fc\u30ed\u30fc\u30b3\u30ec\u30af\u30b7\u30e7\u30f3", "nom": "\u7b2c3\u5f3e", "type": "texte", "texte": "\u7b2c3\u5f3e", "runs": [{"de": 0, "a": 1, "police": "ZenKakuGothicNew-Black", "taille": 22.65, "approche": 0, "interligne": 19.75, "couleur": [26, 26, 26], "italique": false, "gras": false, "echelleH": 110.71, "echelleV": 100.0, "decalage": 0.0}, {"de": 1, "a": 2, "police": "ArchivoBlack-Regular", "taille": 32.85, "approche": 0, "interligne": 19.75, "couleur": [26, 26, 26], "italique": false, "gras": true, "echelleH": 110.71, "echelleV": 100.0, "decalage": 0.0}, {"de": 2, "a": 3, "police": "ZenKakuGothicNew-Black", "taille": 22.65, "approche": 0, "interligne": 19.75, "couleur": [26, 26, 26], "italique": false, "gras": false, "echelleH": 110.71, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 3, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [188.16, 102.0], "angle": 0.0, "encre": [73.0, 25.12], "vertical": false, "boite": null}, {"calque": "logo_serie", "calqueNom": "Logo de s\u00e9rie", "groupe": "Logo \u30d2\u30fc\u30ed\u30fc\u30b3\u30ec\u30af\u30b7\u30e7\u30f3", "nom": "\u30d2\u30fb\u30ed\u30fb\u30b3\u30ec\u30af\u30b7\u30e7\u30f3", "type": "texte", "texte": "\u30d2\u30fb\u30ed\u30fb\u30b3\u30ec\u30af\u30b7\u30e7\u30f3", "runs": [{"de": 0, "a": 10, "police": "DelaGothicOne-Regular", "taille": 69.33, "approche": -34, "interligne": 92.48, "couleur": [138, 138, 138], "italique": false, "gras": false, "echelleH": 45.31, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 10, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [193.67, 144.87], "angle": 0.0, "encre": [261.93, 54.83], "vertical": false, "boite": null, "degradeTexte": {"angle": -90.0, "stops": [{"c": [226, 226, 226], "pos": 0}, {"c": [138, 138, 138], "pos": 1}]}, "contour": {"taille": 1.89, "couleur": [53, 53, 53], "centre": false}, "contourSeul": false}, {"calque": "logo_serie", "calqueNom": "Logo de s\u00e9rie", "groupe": "Logo \u30d2\u30fc\u30ed\u30fc\u30b3\u30ec\u30af\u30b7\u30e7\u30f3", "nom": "HERO COLLECTION", "type": "texte", "texte": "HERO COLLECTION", "runs": [{"de": 0, "a": 15, "police": "ArchivoBlack-Regular", "taille": 14.23, "approche": 62, "interligne": 21.43, "couleur": [26, 26, 26], "italique": false, "gras": false, "echelleH": 66.75, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 15, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [198.93, 182.86], "angle": 0.0, "encre": [109.25, 11.02], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9 \u30bb\u30c3\u30c8\u5185\u5bb9", "nom": "Encadr\u00e9 \u30bb\u30c3\u30c8\u5185\u5bb9 \u2013 fond encadre", "type": "forme", "couleur": [240, 233, 182], "chemins": [[{"a": [526.71, 58.4]}, {"a": [845.46, 58.4]}, {"a": [845.46, 230.27]}, {"a": [526.71, 230.27]}]]}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9 \u30bb\u30c3\u30c8\u5185\u5bb9", "nom": "\u30bb\u30c3\u30c8\u5185\u5bb9", "type": "texte", "texte": "\u30bb\u30c3\u30c8\u5185\u5bb9", "runs": [{"de": 0, "a": 5, "police": "ZenKakuGothicNew-Medium", "taille": 25.05, "approche": 0, "interligne": 27.95, "couleur": [26, 26, 26], "italique": false, "gras": false, "echelleH": 99.83, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 5, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [626.07, 86.72], "angle": 0.0, "encre": [121.67, 23.44], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9 \u30bb\u30c3\u30c8\u5185\u5bb9", "nom": "\u25a0\u4e00\u822c\u30ab\u30fc\u30c9 \u2026\u2026\u20268\u679a", "type": "texte", "texte": "\u25a0\u4e00\u822c\u30ab\u30fc\u30c9 \u2026\u2026\u20268\u679a", "runs": [{"de": 0, "a": 12, "police": "ZenKakuGothicNew-Medium", "taille": 25.33, "approche": 0, "interligne": 28.58, "couleur": [26, 26, 26], "italique": false, "gras": false, "echelleH": 112.79, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 12, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [687.3, 125.34], "angle": 0.0, "encre": [296.95, 25.07], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9 \u30bb\u30c3\u30c8\u5185\u5bb9", "nom": "\u25a0\u30ec\u30fc\u30b6\u30fc\u30ab\u30fc\u30c9 \u20261\u679a", "type": "texte", "texte": "\u25a0\u30ec\u30fc\u30b6\u30fc\u30ab\u30fc\u30c9 \u20261\u679a", "runs": [{"de": 0, "a": 12, "police": "ZenKakuGothicNew-Medium", "taille": 25.55, "approche": 0, "interligne": 29.1, "couleur": [26, 26, 26], "italique": false, "gras": false, "echelleH": 110.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 12, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [682.47, 166.21], "angle": 0.0, "encre": [294.16, 25.02], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9 \u30bb\u30c3\u30c8\u5185\u5bb9", "nom": "\u25a0\u30d7\u30e9\u30c1\u30ca\u30ab\u30fc\u30c9\u3000\u20261\u679a", "type": "texte", "texte": "\u25a0\u30d7\u30e9\u30c1\u30ca\u30ab\u30fc\u30c9\u3000\u20261\u679a", "runs": [{"de": 0, "a": 12, "police": "ZenKakuGothicNew-Medium", "taille": 25.89, "approche": 0, "interligne": 29.87, "couleur": [26, 26, 26], "italique": false, "gras": false, "echelleH": 100.69, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 12, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [683.82, 209.62], "angle": 0.0, "encre": [291.48, 25.04], "vertical": false, "boite": null}, {"calque": "zone:trou", "calqueNom": "Rep\u00e8re trou", "groupe": "", "nom": "zone-reservee trou", "type": "zone", "cle": "trou", "label": "TROU", "chemins": [[{"a": [396.78, 86.77]}, {"a": [493.65, 86.77]}, {"a": [493.65, 183.64]}, {"a": [396.78, 183.64]}]], "detoure": false}]};
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
  function forme(chemins, rgb, nom, remplissage) {
    var subs = [];
    for (var c = 0; c < chemins.length; c++) {
      var pts = [];
      for (var p = 0; p < chemins[c].length; p++) {
        var a = chemins[c][p].a, pp = new PathPointInfo();
        pp.kind = PointKind.CORNERPOINT; pp.anchor = a; pp.leftDirection = a; pp.rightDirection = a;
        pts.push(pp);
      }
      var sp = new SubPathInfo();
      sp.operation = ShapeOperation.SHAPEADD; sp.closed = true; sp.entireSubPath = pts;
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
    var tl = new ActionList();
    for (var k = 0; k < 2; k++) {
      var t = new ActionDescriptor();
      t.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
      t.putInteger(cTID("Lctn"), k * 4096);
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
    if (it.degradeTexte) { try { incrustationDegrade(it.degradeTexte); } catch (e) { erreurs.push(it.nom + " (d\u00e9grad\u00e9 du texte) : " + e.message); } }
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
        if (it.type === "forme") { l = forme(it.chemins, it.couleur, it.nom); ranger(l, cont); }
        else if (it.type === "degrade") { l = formeDegradee(it); ranger(l, cont); }
        else if (it.type === "texte") { l = texte(it); ranger(l, cont); }
        else if (it.type === "arc") { arc(it, cont); }
        else if (it.type === "image") {
          l = forme(it.chemins, [128, 128, 128], "Forme \u2013 " + it.calqueNom); ranger(l, cont);
          if (it.detoure) { try { l.fillOpacity = 0; } catch (e) {} }  // image d\u00e9tour\u00e9e : la forme d\u00e9coupe sans se voir
          var img = doc.artLayers.add(); img.name = ">> " + it.calqueNom + " : colle ton image ici";
          ranger(img, cont); img.grouped = true;
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
