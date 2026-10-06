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
  var SCENE = {"titre": "Sachet HERO COLLECTION 3 \u2014 ent\u00eate recto", "fichier": "entete_recto", "largeur": 906, "hauteur": 313, "reperes": {"coupe": [35.43307086614173, 870.4724409448819, 35.43307086614173, 277.5590551181102], "secu": [59.05511811023622, 846.8503937007874, 59.05511811023622, 253.93700787401576]}, "plis": [], "polices": ["ArchivoBlack-Regular", "DelaGothicOne-Regular", "RoundedMplus1c-ExtraBold", "ZenKakuGothicNew-Black"], "items": [{"calque": "fond", "calqueNom": "Fond noir", "groupe": "", "nom": "fond noir", "type": "forme", "couleur": [11, 10, 12], "chemins": [[{"a": [-23.63, -23.63]}, {"a": [929.49, -23.63]}, {"a": [929.49, 335.74]}, {"a": [-23.63, 335.74]}]]}, {"calque": "logo_serie", "calqueNom": "Logo de s\u00e9rie", "groupe": "Logo \u30d2\u30fc\u30ed\u30fc\u30b3\u30ec\u30af\u30b7\u30e7\u30f3", "nom": "Logo \u30d2\u30fc\u30ed\u30fc\u30b3\u30ec\u30af\u30b7\u30e7\u30f3 \u2013 cercle", "type": "forme", "couleur": [242, 210, 46], "chemins": [[{"a": [319.46, 131.06]}, {"a": [319.34, 133.81]}, {"a": [318.98, 136.56]}, {"a": [318.38, 139.3]}, {"a": [317.54, 142.03]}, {"a": [316.47, 144.73]}, {"a": [315.16, 147.41]}, {"a": [313.61, 150.05]}, {"a": [311.84, 152.66]}, {"a": [309.84, 155.23]}, {"a": [307.62, 157.76]}, {"a": [305.18, 160.23]}, {"a": [302.53, 162.65]}, {"a": [299.67, 165.0]}, {"a": [296.61, 167.29]}, {"a": [293.35, 169.52]}, {"a": [289.9, 171.67]}, {"a": [286.26, 173.74]}, {"a": [282.45, 175.73]}, {"a": [278.47, 177.64]}, {"a": [274.32, 179.45]}, {"a": [270.02, 181.18]}, {"a": [265.58, 182.81]}, {"a": [260.99, 184.34]}, {"a": [256.28, 185.77]}, {"a": [251.45, 187.1]}, {"a": [246.5, 188.32]}, {"a": [241.46, 189.43]}, {"a": [236.32, 190.42]}, {"a": [231.1, 191.31]}, {"a": [225.81, 192.08]}, {"a": [220.45, 192.74]}, {"a": [215.04, 193.28]}, {"a": [209.59, 193.69]}, {"a": [204.11, 193.99]}, {"a": [198.61, 194.17]}, {"a": [193.1, 194.23]}, {"a": [187.59, 194.17]}, {"a": [182.09, 193.99]}, {"a": [176.61, 193.69]}, {"a": [171.16, 193.28]}, {"a": [165.75, 192.74]}, {"a": [160.4, 192.08]}, {"a": [155.1, 191.31]}, {"a": [149.88, 190.42]}, {"a": [144.75, 189.43]}, {"a": [139.7, 188.32]}, {"a": [134.76, 187.1]}, {"a": [129.92, 185.77]}, {"a": [125.21, 184.34]}, {"a": [120.62, 182.81]}, {"a": [116.18, 181.18]}, {"a": [111.88, 179.45]}, {"a": [107.73, 177.64]}, {"a": [103.75, 175.73]}, {"a": [99.94, 173.74]}, {"a": [96.3, 171.67]}, {"a": [92.85, 169.52]}, {"a": [89.59, 167.29]}, {"a": [86.53, 165.0]}, {"a": [83.67, 162.65]}, {"a": [81.02, 160.23]}, {"a": [78.58, 157.76]}, {"a": [76.36, 155.23]}, {"a": [74.36, 152.66]}, {"a": [72.59, 150.05]}, {"a": [71.05, 147.41]}, {"a": [69.74, 144.73]}, {"a": [68.66, 142.03]}, {"a": [67.82, 139.3]}, {"a": [67.22, 136.56]}, {"a": [66.86, 133.81]}, {"a": [66.74, 131.06]}, {"a": [66.86, 128.3]}, {"a": [67.22, 125.55]}, {"a": [67.82, 122.81]}, {"a": [68.66, 120.08]}, {"a": [69.74, 117.38]}, {"a": [71.05, 114.7]}, {"a": [72.59, 112.06]}, {"a": [74.36, 109.45]}, {"a": [76.36, 106.88]}, {"a": [78.58, 104.35]}, {"a": [81.02, 101.88]}, {"a": [83.67, 99.47]}, {"a": [86.53, 97.11]}, {"a": [89.59, 94.82]}, {"a": [92.85, 92.59]}, {"a": [96.3, 90.44]}, {"a": [99.94, 88.37]}, {"a": [103.75, 86.38]}, {"a": [107.73, 84.47]}, {"a": [111.88, 82.66]}, {"a": [116.18, 80.93]}, {"a": [120.62, 79.3]}, {"a": [125.21, 77.77]}, {"a": [129.92, 76.34]}, {"a": [134.76, 75.01]}, {"a": [139.7, 73.8]}, {"a": [144.75, 72.69]}, {"a": [149.88, 71.69]}, {"a": [155.1, 70.8]}, {"a": [160.4, 70.03]}, {"a": [165.75, 69.37]}, {"a": [171.16, 68.84]}, {"a": [176.61, 68.42]}, {"a": [182.09, 68.12]}, {"a": [187.59, 67.94]}, {"a": [193.1, 67.88]}, {"a": [198.61, 67.94]}, {"a": [204.11, 68.12]}, {"a": [209.59, 68.42]}, {"a": [215.04, 68.84]}, {"a": [220.45, 69.37]}, {"a": [225.81, 70.03]}, {"a": [231.1, 70.8]}, {"a": [236.32, 71.69]}, {"a": [241.46, 72.69]}, {"a": [246.5, 73.8]}, {"a": [251.45, 75.01]}, {"a": [256.28, 76.34]}, {"a": [260.99, 77.77]}, {"a": [265.58, 79.3]}, {"a": [270.02, 80.93]}, {"a": [274.32, 82.66]}, {"a": [278.47, 84.47]}, {"a": [282.45, 86.38]}, {"a": [286.26, 88.37]}, {"a": [289.9, 90.44]}, {"a": [293.35, 92.59]}, {"a": [296.61, 94.82]}, {"a": [299.67, 97.11]}, {"a": [302.53, 99.47]}, {"a": [305.18, 101.88]}, {"a": [307.62, 104.35]}, {"a": [309.84, 106.88]}, {"a": [311.84, 109.45]}, {"a": [313.61, 112.06]}, {"a": [315.16, 114.7]}, {"a": [316.47, 117.38]}, {"a": [317.54, 120.08]}, {"a": [318.38, 122.81]}, {"a": [318.98, 125.55]}, {"a": [319.34, 128.3]}]]}, {"calque": "logo_serie", "calqueNom": "Logo de s\u00e9rie", "groupe": "Logo \u30d2\u30fc\u30ed\u30fc\u30b3\u30ec\u30af\u30b7\u30e7\u30f3", "nom": "Logo \u30d2\u30fc\u30ed\u30fc\u30b3\u30ec\u30af\u30b7\u30e7\u30f3 \u2013 cercle", "type": "forme", "couleur": [224, 41, 43], "chemins": [[{"a": [312.97, 131.06]}, {"a": [312.85, 133.53]}, {"a": [312.51, 136.0]}, {"a": [311.94, 138.45]}, {"a": [311.14, 140.9]}, {"a": [310.12, 143.32]}, {"a": [308.88, 145.73]}, {"a": [307.42, 148.1]}, {"a": [305.74, 150.44]}, {"a": [303.84, 152.75]}, {"a": [301.74, 155.01]}, {"a": [299.42, 157.23]}, {"a": [296.91, 159.4]}, {"a": [294.19, 161.51]}, {"a": [291.29, 163.57]}, {"a": [288.2, 165.56]}, {"a": [284.92, 167.49]}, {"a": [281.47, 169.35]}, {"a": [277.86, 171.14]}, {"a": [274.08, 172.85]}, {"a": [270.15, 174.48]}, {"a": [266.07, 176.03]}, {"a": [261.85, 177.49]}, {"a": [257.5, 178.86]}, {"a": [253.03, 180.15]}, {"a": [248.45, 181.34]}, {"a": [243.76, 182.43]}, {"a": [238.97, 183.43]}, {"a": [234.1, 184.32]}, {"a": [229.15, 185.12]}, {"a": [224.12, 185.81]}, {"a": [219.04, 186.4]}, {"a": [213.92, 186.88]}, {"a": [208.75, 187.25]}, {"a": [203.55, 187.52]}, {"a": [198.33, 187.69]}, {"a": [193.1, 187.74]}, {"a": [187.87, 187.69]}, {"a": [182.65, 187.52]}, {"a": [177.46, 187.25]}, {"a": [172.29, 186.88]}, {"a": [167.16, 186.4]}, {"a": [162.08, 185.81]}, {"a": [157.06, 185.12]}, {"a": [152.11, 184.32]}, {"a": [147.23, 183.43]}, {"a": [142.44, 182.43]}, {"a": [137.75, 181.34]}, {"a": [133.17, 180.15]}, {"a": [128.7, 178.86]}, {"a": [124.35, 177.49]}, {"a": [120.13, 176.03]}, {"a": [116.05, 174.48]}, {"a": [112.12, 172.85]}, {"a": [108.34, 171.14]}, {"a": [104.73, 169.35]}, {"a": [101.28, 167.49]}, {"a": [98.01, 165.56]}, {"a": [94.91, 163.57]}, {"a": [92.01, 161.51]}, {"a": [89.3, 159.4]}, {"a": [86.78, 157.23]}, {"a": [84.47, 155.01]}, {"a": [82.36, 152.75]}, {"a": [80.47, 150.44]}, {"a": [78.79, 148.1]}, {"a": [77.32, 145.73]}, {"a": [76.08, 143.32]}, {"a": [75.06, 140.9]}, {"a": [74.26, 138.45]}, {"a": [73.69, 136.0]}, {"a": [73.35, 133.53]}, {"a": [73.24, 131.06]}, {"a": [73.35, 128.58]}, {"a": [73.69, 126.12]}, {"a": [74.26, 123.66]}, {"a": [75.06, 121.21]}, {"a": [76.08, 118.79]}, {"a": [77.32, 116.38]}, {"a": [78.79, 114.01]}, {"a": [80.47, 111.67]}, {"a": [82.36, 109.36]}, {"a": [84.47, 107.1]}, {"a": [86.78, 104.88]}, {"a": [89.3, 102.71]}, {"a": [92.01, 100.6]}, {"a": [94.91, 98.54]}, {"a": [98.01, 96.55]}, {"a": [101.28, 94.62]}, {"a": [104.73, 92.76]}, {"a": [108.34, 90.97]}, {"a": [112.12, 89.26]}, {"a": [116.05, 87.63]}, {"a": [120.13, 86.08]}, {"a": [124.35, 84.62]}, {"a": [128.7, 83.25]}, {"a": [133.17, 81.97]}, {"a": [137.75, 80.78]}, {"a": [142.44, 79.68]}, {"a": [147.23, 78.69]}, {"a": [152.11, 77.79]}, {"a": [157.06, 76.99]}, {"a": [162.08, 76.3]}, {"a": [167.16, 75.71]}, {"a": [172.29, 75.23]}, {"a": [177.46, 74.86]}, {"a": [182.65, 74.59]}, {"a": [187.87, 74.42]}, {"a": [193.1, 74.37]}, {"a": [198.33, 74.42]}, {"a": [203.55, 74.59]}, {"a": [208.75, 74.86]}, {"a": [213.92, 75.23]}, {"a": [219.04, 75.71]}, {"a": [224.12, 76.3]}, {"a": [229.15, 76.99]}, {"a": [234.1, 77.79]}, {"a": [238.97, 78.69]}, {"a": [243.76, 79.68]}, {"a": [248.45, 80.78]}, {"a": [253.03, 81.97]}, {"a": [257.5, 83.25]}, {"a": [261.85, 84.62]}, {"a": [266.07, 86.08]}, {"a": [270.15, 87.63]}, {"a": [274.08, 89.26]}, {"a": [277.86, 90.97]}, {"a": [281.47, 92.76]}, {"a": [284.92, 94.62]}, {"a": [288.2, 96.55]}, {"a": [291.29, 98.54]}, {"a": [294.19, 100.6]}, {"a": [296.91, 102.71]}, {"a": [299.42, 104.88]}, {"a": [301.74, 107.1]}, {"a": [303.84, 109.36]}, {"a": [305.74, 111.67]}, {"a": [307.42, 114.01]}, {"a": [308.88, 116.38]}, {"a": [310.12, 118.79]}, {"a": [311.14, 121.21]}, {"a": [311.94, 123.66]}, {"a": [312.51, 126.12]}, {"a": [312.85, 128.58]}]]}, {"calque": "logo_serie", "calqueNom": "Logo de s\u00e9rie", "groupe": "Logo \u30d2\u30fc\u30ed\u30fc\u30b3\u30ec\u30af\u30b7\u30e7\u30f3", "nom": "\u7b2c3\u5f3e", "type": "texte", "texte": "\u7b2c3\u5f3e", "runs": [{"de": 0, "a": 1, "police": "ZenKakuGothicNew-Black", "taille": 23.21, "approche": 0, "interligne": 20.73, "couleur": [26, 26, 26], "italique": false, "gras": false, "echelleH": 92.61, "echelleV": 100.0, "decalage": 0.0}, {"de": 1, "a": 2, "police": "ArchivoBlack-Regular", "taille": 33.65, "approche": 0, "interligne": 20.73, "couleur": [26, 26, 26], "italique": false, "gras": true, "echelleH": 92.61, "echelleV": 100.0, "decalage": 0.0}, {"de": 2, "a": 3, "police": "ZenKakuGothicNew-Black", "taille": 23.21, "approche": 0, "interligne": 20.73, "couleur": [26, 26, 26], "italique": false, "gras": false, "echelleH": 92.61, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 3, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [186.11, 89.11], "angle": 0.0, "encre": [62.83, 26.82], "vertical": false, "boite": null}, {"calque": "logo_serie", "calqueNom": "Logo de s\u00e9rie", "groupe": "Logo \u30d2\u30fc\u30ed\u30fc\u30b3\u30ec\u30af\u30b7\u30e7\u30f3", "nom": "\u30d2\u30fb\u30ed\u30fb\u30b3\u30ec\u30af\u30b7\u30e7\u30f3", "type": "texte", "texte": "\u30d2\u30fb\u30ed\u30fb\u30b3\u30ec\u30af\u30b7\u30e7\u30f3", "runs": [{"de": 0, "a": 10, "police": "DelaGothicOne-Regular", "taille": 60.65, "approche": -34, "interligne": 70.79, "couleur": [138, 138, 138], "italique": false, "gras": false, "echelleH": 48.91, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 10, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [197.05, 136.43], "angle": 0.0, "encre": [247.81, 47.06], "vertical": false, "boite": null, "degradeTexte": {"angle": -90.0, "stops": [{"c": [226, 226, 226], "pos": 0}, {"c": [138, 138, 138], "pos": 1}]}, "contour": {"taille": 1.89, "couleur": [53, 53, 53], "centre": false}, "contourSeul": false}, {"calque": "logo_serie", "calqueNom": "Logo de s\u00e9rie", "groupe": "Logo \u30d2\u30fc\u30ed\u30fc\u30b3\u30ec\u30af\u30b7\u30e7\u30f3", "nom": "HERO COLLECTION", "type": "texte", "texte": "HERO COLLECTION", "runs": [{"de": 0, "a": 15, "police": "ArchivoBlack-Regular", "taille": 13.2, "approche": 63, "interligne": 18.44, "couleur": [26, 26, 26], "italique": false, "gras": false, "echelleH": 74.38, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 15, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [198.84, 173.34], "angle": 0.0, "encre": [112.84, 9.38], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Accroche", "nom": "\u30ef\u30f3\u30e9\u30f3\u30af", "type": "texte", "texte": "\u30ef\u30f3\u30e9\u30f3\u30af", "runs": [{"de": 0, "a": 5, "police": "ZenKakuGothicNew-Black", "taille": 35.5, "approche": -162, "interligne": 41.04, "couleur": [245, 238, 98], "italique": true, "gras": false, "echelleH": 119.87, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 5, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [653.46, 90.19], "angle": 0.0, "encre": [174.94, 29.82], "vertical": false, "boite": null, "contour": {"taille": 1.655, "couleur": [43, 42, 16], "centre": false}, "contourSeul": false}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Accroche", "nom": "\u30a2\u30c3\u30d7\u306e\u30ab\u30fc\u30c9", "type": "texte", "texte": "\u30a2\u30c3\u30d7\u306e\u30ab\u30fc\u30c9", "runs": [{"de": 0, "a": 7, "police": "ZenKakuGothicNew-Black", "taille": 31.0, "approche": -162, "interligne": 31.29, "couleur": [245, 238, 98], "italique": true, "gras": false, "echelleH": 127.59, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 7, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [685.23, 131.35], "angle": 0.0, "encre": [231.49, 28.15], "vertical": false, "boite": null, "contour": {"taille": 1.655, "couleur": [43, 42, 16], "centre": false}, "contourSeul": false}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Accroche", "nom": "\u30b3\u30ec\u30af\u30b7\u30e7\u30f3!!", "type": "texte", "texte": "\u30b3\u30ec\u30af\u30b7\u30e7\u30f3!!", "runs": [{"de": 0, "a": 8, "police": "ZenKakuGothicNew-Black", "taille": 35.5, "approche": -162, "interligne": 41.04, "couleur": [245, 238, 98], "italique": true, "gras": false, "echelleH": 122.14, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 8, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [681.19, 174.95], "angle": 0.0, "encre": [227.31, 29.71], "vertical": false, "boite": null, "contour": {"taille": 1.655, "couleur": [43, 42, 16], "centre": false}, "contourSeul": false}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Ligne cadeau", "nom": "\u30d7\u30ec\u30bc\u30f3\u30c8\u30ab\u30fc\u30c9\u304c\u51fa\u305f\u3089\u7279\u88fd\u30a2\u30eb\u30d0\u30e0\u304c\u3082\u3089\u3048\u308b\u3088\uff01", "type": "texte", "texte": "\u30d7\u30ec\u30bc\u30f3\u30c8\u30ab\u30fc\u30c9\u304c\u51fa\u305f\u3089\u7279\u88fd\u30a2\u30eb\u30d0\u30e0\u304c\u3082\u3089\u3048\u308b\u3088\uff01", "runs": [{"de": 0, "a": 25, "police": "RoundedMplus1c-ExtraBold", "taille": 29.43, "approche": 0, "interligne": 30.55, "couleur": [255, 255, 255], "italique": false, "gras": false, "echelleH": 92.76, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 25, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [437.42, 217.19], "angle": 0.0, "encre": [668.84, 28.15], "vertical": false, "boite": null}, {"calque": "zone:trou", "calqueNom": "Rep\u00e8re trou", "groupe": "", "nom": "zone-reservee trou", "type": "zone", "cle": "trou", "label": "TROU", "chemins": [[{"a": [408.59, 96.78]}, {"a": [492.97, 96.78]}, {"a": [492.97, 181.15]}, {"a": [408.59, 181.15]}]], "detoure": false}]};
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
