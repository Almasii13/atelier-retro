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
  var SCENE = {"titre": "Carte Super Battle DBZ n\u00b0181 \u2014 Goku part au paradis \u2014 recto 65x90", "fichier": "carte_dbz_181", "largeur": 839, "hauteur": 1134, "reperes": {"coupe": [35.43307086614173, 803.1496062992126, 35.43307086614173, 1098.4251968503938], "secu": [64.96062992125985, 773.6220472440945, 64.96062992125985, 1068.8976377952756]}, "plis": [], "polices": ["ArchivoBlack-Regular", "BlackOpsOne-Regular", "Oswald-Medium", "RoundedMplus1c-Bold", "RoundedMplus1c-Medium", "TeXGyreHerosCondensed-BoldItalic", "WorkSans-BlackItalic"], "items": [{"calque": "image:fond", "calqueNom": "Fond bleu marbr\u00e9", "groupe": "", "nom": "slot zone-perso ", "type": "image", "cle": "fond", "label": "", "chemins": [[{"a": [0.0, 0.0]}, {"a": [837.5, 0.0]}, {"a": [837.5, 1134.38]}, {"a": [0.0, 1134.38]}]], "detoure": false, "image": "fond"}, {"calque": "cadre", "calqueNom": "Cadre & fen\u00eatre", "groupe": "", "nom": "Cadre noir", "type": "forme", "couleur": [24, 22, 26], "chemins": [[{"a": [71.42, 71.21]}, {"a": [767.05, 71.21]}, {"a": [767.05, 1065.29]}, {"a": [71.42, 1065.29]}]]}, {"calque": "cadre", "calqueNom": "Cadre & fen\u00eatre", "groupe": "Fen\u00eatre", "nom": "Fen\u00eatre \u2013 d\u00e9grad\u00e9 ", "type": "degrade", "chemins": [[{"a": [77.05, 76.86]}, {"a": [761.43, 76.86]}, {"a": [761.43, 1058.11]}, {"a": [77.05, 1058.11]}]], "angle": -90, "stops": [{"c": [223, 233, 243], "pos": 0}, {"c": [201, 215, 230], "pos": 0.55}, {"c": [196, 42, 38], "pos": 0.57}, {"c": [165, 32, 29], "pos": 1}]}, {"calque": "image:personnages", "calqueNom": "Illustration", "groupe": "", "nom": "slot detoure zone-perso vide", "type": "image", "cle": "personnages", "label": "", "chemins": [[{"a": [0.0, 0.0]}, {"a": [837.5, 0.0]}, {"a": [837.5, 1134.38]}, {"a": [0.0, 1134.38]}]], "detoure": true}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Panneau du bas", "nom": "Fond noir du panneau", "type": "forme", "couleur": [24, 22, 26], "chemins": [[{"a": [71.42, 936.21]}, {"a": [767.05, 936.21]}, {"a": [767.05, 1065.29]}, {"a": [71.42, 1065.29]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Panneau du bas", "nom": "Encadr\u00e9 texte", "type": "forme", "couleur": [217, 216, 206], "chemins": [[{"a": [82.05, 941.52]}, {"a": [405.07, 941.52]}, {"a": [405.07, 1055.84]}, {"a": [82.05, 1055.84]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Panneau du bas", "nom": "Bloc POWER LEVEL", "type": "forme", "couleur": [242, 212, 23], "chemins": [[{"a": [413.1, 941.52]}, {"a": [756.43, 941.52]}, {"a": [756.43, 1013.09]}, {"a": [413.1, 1013.09]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Panneau du bas", "nom": "Case 1", "type": "forme", "couleur": [93, 92, 96], "chemins": [[{"a": [413.1, 1019.82]}, {"a": [467.86, 1019.82]}, {"a": [467.86, 1055.84]}, {"a": [413.1, 1055.84]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Panneau du bas", "nom": "Case 2", "type": "forme", "couleur": [93, 92, 96], "chemins": [[{"a": [470.81, 1019.82]}, {"a": [525.58, 1019.82]}, {"a": [525.58, 1055.84]}, {"a": [470.81, 1055.84]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Panneau du bas", "nom": "Case 3", "type": "forme", "couleur": [93, 92, 96], "chemins": [[{"a": [528.53, 1019.82]}, {"a": [583.3, 1019.82]}, {"a": [583.3, 1055.84]}, {"a": [528.53, 1055.84]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Panneau du bas", "nom": "Case 4", "type": "forme", "couleur": [93, 92, 96], "chemins": [[{"a": [586.25, 1019.82]}, {"a": [641.01, 1019.82]}, {"a": [641.01, 1055.84]}, {"a": [586.25, 1055.84]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Panneau du bas", "nom": "Case 5", "type": "forme", "couleur": [47, 154, 63], "chemins": [[{"a": [643.97, 1019.82]}, {"a": [698.73, 1019.82]}, {"a": [698.73, 1055.84]}, {"a": [643.97, 1055.84]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Panneau du bas", "nom": "Case 6", "type": "forme", "couleur": [93, 92, 96], "chemins": [[{"a": [701.68, 1019.82]}, {"a": [756.45, 1019.82]}, {"a": [756.45, 1055.84]}, {"a": [701.68, 1055.84]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Panneau du bas", "nom": "Barre oblique", "type": "forme", "couleur": [24, 22, 26], "chemins": [[{"a": [703.46, 1052.89]}, {"a": [752.32, 1022.78]}, {"a": [754.68, 1022.78]}, {"a": [705.82, 1052.89]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Encadr\u00e9 texte", "nom": "\u307f\u3093\u306a\u3001\u5143\u6c17\u3067\u306a!", "type": "texte", "texte": "\u307f\u3093\u306a\u3001\u5143\u6c17\u3067\u306a!", "runs": [{"de": 0, "a": 4, "police": "RoundedMplus1c-Medium", "taille": 25.87, "approche": 0, "interligne": 22.66, "couleur": [29, 28, 28], "italique": false, "gras": false, "echelleH": 113.62, "echelleV": 100.0, "decalage": 0.0}, {"de": 4, "a": 6, "police": "RoundedMplus1c-Medium", "taille": 25.87, "approche": 0, "interligne": 22.66, "couleur": [29, 28, 28], "italique": false, "gras": false, "echelleH": 113.62, "echelleV": 100.0, "decalage": 0.0}, {"de": 6, "a": 8, "police": "RoundedMplus1c-Medium", "taille": 25.87, "approche": 0, "interligne": 22.66, "couleur": [29, 28, 28], "italique": false, "gras": false, "echelleH": 113.62, "echelleV": 100.0, "decalage": 0.0}, {"de": 8, "a": 9, "police": "RoundedMplus1c-Medium", "taille": 25.87, "approche": 0, "interligne": 22.66, "couleur": [29, 28, 28], "italique": true, "gras": false, "echelleH": 113.62, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 9, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [227.74, 984.96], "angle": 0.0, "encre": [245.12, 25.01], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Encadr\u00e9 texte", "nom": "\u3052\u3093\u304d", "type": "texte", "texte": "\u3052\u3093\u304d", "runs": [{"de": 0, "a": 3, "police": "RoundedMplus1c-Medium", "taille": 11.81, "approche": 0, "interligne": 11.81, "couleur": [29, 28, 28], "italique": false, "gras": false, "echelleH": 113.62, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 3, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [251.21, 966.64], "angle": 0.0, "encre": [39.18, 10.97], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Encadr\u00e9 texte", "nom": "\u30aa\u30e9\u306f\u5929\u56fd\u3078\u884c\u304f\u305e!!", "type": "texte", "texte": "\u30aa\u30e9\u306f\u5929\u56fd\u3078\u884c\u304f\u305e!!", "runs": [{"de": 0, "a": 3, "police": "RoundedMplus1c-Medium", "taille": 29.74, "approche": 0, "interligne": 29.95, "couleur": [29, 28, 28], "italique": false, "gras": false, "echelleH": 99.24, "echelleV": 100.0, "decalage": 0.0}, {"de": 3, "a": 5, "police": "RoundedMplus1c-Medium", "taille": 29.74, "approche": 0, "interligne": 29.95, "couleur": [29, 28, 28], "italique": false, "gras": false, "echelleH": 99.24, "echelleV": 100.0, "decalage": 0.0}, {"de": 5, "a": 6, "police": "RoundedMplus1c-Medium", "taille": 29.74, "approche": 0, "interligne": 29.95, "couleur": [29, 28, 28], "italique": false, "gras": false, "echelleH": 99.24, "echelleV": 100.0, "decalage": 0.0}, {"de": 6, "a": 7, "police": "RoundedMplus1c-Medium", "taille": 29.74, "approche": 0, "interligne": 29.95, "couleur": [29, 28, 28], "italique": false, "gras": false, "echelleH": 99.24, "echelleV": 100.0, "decalage": 0.0}, {"de": 7, "a": 9, "police": "RoundedMplus1c-Medium", "taille": 29.74, "approche": 0, "interligne": 29.95, "couleur": [29, 28, 28], "italique": false, "gras": false, "echelleH": 99.24, "echelleV": 100.0, "decalage": 0.0}, {"de": 9, "a": 11, "police": "RoundedMplus1c-Medium", "taille": 29.74, "approche": 0, "interligne": 29.95, "couleur": [29, 28, 28], "italique": true, "gras": false, "echelleH": 99.24, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 11, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [247.84, 1023.62], "angle": 0.0, "encre": [281.12, 26.61], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Encadr\u00e9 texte", "nom": "\u3066\u3093\u3054\u304f", "type": "texte", "texte": "\u3066\u3093\u3054\u304f", "runs": [{"de": 0, "a": 4, "police": "RoundedMplus1c-Medium", "taille": 11.81, "approche": 0, "interligne": 11.81, "couleur": [29, 28, 28], "italique": false, "gras": false, "echelleH": 99.24, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 4, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [222.65, 1005.6], "angle": 0.0, "encre": [41.89, 10.94], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Encadr\u00e9 texte", "nom": "\u3044", "type": "texte", "texte": "\u3044", "runs": [{"de": 0, "a": 1, "police": "RoundedMplus1c-Medium", "taille": 11.81, "approche": 0, "interligne": 11.81, "couleur": [29, 28, 28], "italique": false, "gras": false, "echelleH": 99.24, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 1, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [296.64, 1006.73], "angle": 0.0, "encre": [10.95, 7.88], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "POWER LEVEL", "nom": "POWER", "type": "texte", "texte": "POWER", "runs": [{"de": 0, "a": 5, "police": "WorkSans-BlackItalic", "taille": 38.49, "approche": -17, "interligne": 41.8, "couleur": [21, 19, 20], "italique": false, "gras": false, "echelleH": 138.48, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 5, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [519.67, 963.39], "angle": 0.0, "encre": [198.37, 28.33], "vertical": false, "boite": null, "degradeTexte": {"angle": -90.0, "stops": [{"c": [21, 19, 20], "pos": 0}, {"c": [21, 19, 20], "pos": 0.22}, {"c": [21, 19, 20], "pos": 0.62}, {"c": [21, 19, 20], "pos": 1}]}}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "POWER LEVEL", "nom": "LEVEL", "type": "texte", "texte": "LEVEL", "runs": [{"de": 0, "a": 5, "police": "WorkSans-BlackItalic", "taille": 42.33, "approche": -17, "interligne": 50.57, "couleur": [21, 19, 20], "italique": false, "gras": false, "echelleH": 138.89, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 5, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [511.18, 996.93], "angle": 0.0, "encre": [181.26, 28.3], "vertical": false, "boite": null, "degradeTexte": {"angle": -90.0, "stops": [{"c": [21, 19, 20], "pos": 0}, {"c": [21, 19, 20], "pos": 0.22}, {"c": [21, 19, 20], "pos": 0.62}, {"c": [21, 19, 20], "pos": 1}]}}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "\u00c9chelle", "nom": "1", "type": "texte", "texte": "1", "runs": [{"de": 0, "a": 1, "police": "ArchivoBlack-Regular", "taille": 30.71, "approche": 0, "interligne": 30.71, "couleur": [255, 255, 255], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 1, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [441.73, 1037.79], "angle": 0.0, "encre": [17.3, 22.01], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "\u00c9chelle", "nom": "2", "type": "texte", "texte": "2", "runs": [{"de": 0, "a": 1, "police": "ArchivoBlack-Regular", "taille": 30.71, "approche": 0, "interligne": 30.71, "couleur": [255, 255, 255], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 1, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [498.8, 1037.8], "angle": 0.0, "encre": [17.3, 22.01], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "\u00c9chelle", "nom": "3", "type": "texte", "texte": "3", "runs": [{"de": 0, "a": 1, "police": "ArchivoBlack-Regular", "taille": 30.71, "approche": 0, "interligne": 30.71, "couleur": [255, 255, 255], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 1, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [557.04, 1038.57], "angle": 0.0, "encre": [17.3, 23.59], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "\u00c9chelle", "nom": "4", "type": "texte", "texte": "4", "runs": [{"de": 0, "a": 1, "police": "ArchivoBlack-Regular", "taille": 30.71, "approche": 0, "interligne": 30.71, "couleur": [255, 255, 255], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 1, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [614.5, 1037.8], "angle": 0.0, "encre": [20.44, 22.01], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "\u00c9chelle", "nom": "5", "type": "texte", "texte": "5", "runs": [{"de": 0, "a": 1, "police": "ArchivoBlack-Regular", "taille": 30.71, "approche": 0, "interligne": 30.71, "couleur": [255, 255, 255], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 1, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [672.1, 1038.57], "angle": 0.0, "encre": [17.3, 23.59], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "POWER LEVEL", "nom": "7", "type": "texte", "texte": "7", "runs": [{"de": 0, "a": 1, "police": "TeXGyreHerosCondensed-BoldItalic", "taille": 156.95, "approche": -83, "interligne": 173.81, "couleur": [224, 38, 31], "italique": false, "gras": false, "echelleH": 148.64, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 1, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [694.12, 942.54], "angle": 0.0, "encre": [107.62, 110.18], "vertical": false, "boite": null, "contour": {"taille": 2.125, "couleur": [24, 22, 26], "centre": false}, "contourSeul": false}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Bandeau", "nom": "Bandeau noir", "type": "forme", "couleur": [28, 26, 30], "chemins": [[{"a": [-78.36, 892.99]}, {"a": [301.49, 809.48]}, {"a": [287.31, 847.3]}, {"a": [-71.08, 926.1]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Bandeau", "nom": "Bandeau rouge", "type": "forme", "couleur": [226, 50, 31], "chemins": [[{"a": [-71.08, 926.1]}, {"a": [514.9, 797.26]}, {"a": [467.54, 867.89]}, {"a": [-58.45, 983.54]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Bandeau", "nom": "Liser\u00e9 bleu", "type": "forme", "couleur": [28, 26, 30], "chemins": [[{"a": [301.43, 809.49]}, {"a": [301.54, 809.46]}, {"a": [287.37, 847.29]}, {"a": [287.25, 847.31]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Bandeau", "nom": "Pastille num\u00e9ro", "type": "forme", "couleur": [28, 26, 30], "chemins": [[{"a": [100.35, 928.67]}, {"a": [100.46, 929.22]}, {"a": [100.54, 929.77]}, {"a": [100.6, 930.32]}, {"a": [100.64, 930.88]}, {"a": [100.65, 931.43]}, {"a": [100.64, 931.99]}, {"a": [100.6, 932.55]}, {"a": [100.54, 933.1]}, {"a": [100.45, 933.65]}, {"a": [100.34, 934.19]}, {"a": [100.21, 934.73]}, {"a": [100.05, 935.27]}, {"a": [99.87, 935.8]}, {"a": [99.67, 936.31]}, {"a": [99.45, 936.82]}, {"a": [99.2, 937.32]}, {"a": [98.93, 937.81]}, {"a": [98.64, 938.28]}, {"a": [98.33, 938.75]}, {"a": [98.0, 939.19]}, {"a": [97.65, 939.63]}, {"a": [97.28, 940.05]}, {"a": [96.9, 940.45]}, {"a": [96.5, 940.83]}, {"a": [96.08, 941.2]}, {"a": [95.64, 941.54]}, {"a": [95.19, 941.87]}, {"a": [94.73, 942.18]}, {"a": [94.25, 942.47]}, {"a": [93.76, 942.74]}, {"a": [93.26, 942.98]}, {"a": [92.75, 943.2]}, {"a": [92.24, 943.41]}, {"a": [91.71, 943.58]}, {"a": [91.17, 943.74]}, {"a": [90.63, 943.87]}, {"a": [90.09, 943.98]}, {"a": [89.54, 944.06]}, {"a": [88.98, 944.12]}, {"a": [88.43, 944.16]}, {"a": [87.87, 944.17]}, {"a": [87.32, 944.15]}, {"a": [86.76, 944.12]}, {"a": [86.21, 944.05]}, {"a": [85.66, 943.97]}, {"a": [85.11, 943.86]}, {"a": [84.57, 943.73]}, {"a": [84.04, 943.57]}, {"a": [83.51, 943.39]}, {"a": [82.99, 943.19]}, {"a": [82.48, 942.96]}, {"a": [81.98, 942.72]}, {"a": [81.5, 942.45]}, {"a": [81.02, 942.16]}, {"a": [80.56, 941.85]}, {"a": [80.11, 941.52]}, {"a": [79.68, 941.17]}, {"a": [79.26, 940.8]}, {"a": [78.86, 940.42]}, {"a": [78.47, 940.01]}, {"a": [78.11, 939.59]}, {"a": [77.76, 939.16]}, {"a": [77.43, 938.71]}, {"a": [77.12, 938.25]}, {"a": [76.84, 937.77]}, {"a": [76.57, 937.28]}, {"a": [76.32, 936.78]}, {"a": [76.1, 936.27]}, {"a": [75.9, 935.75]}, {"a": [75.72, 935.23]}, {"a": [75.57, 934.69]}, {"a": [75.44, 934.15]}, {"a": [75.33, 933.6]}, {"a": [75.25, 933.05]}, {"a": [75.19, 932.5]}, {"a": [75.15, 931.95]}, {"a": [75.14, 931.39]}, {"a": [75.15, 930.83]}, {"a": [75.19, 930.28]}, {"a": [75.25, 929.72]}, {"a": [75.34, 929.17]}, {"a": [75.45, 928.63]}, {"a": [75.58, 928.09]}, {"a": [75.74, 927.55]}, {"a": [75.92, 927.03]}, {"a": [76.12, 926.51]}, {"a": [76.34, 926.0]}, {"a": [76.59, 925.5]}, {"a": [76.86, 925.01]}, {"a": [77.15, 924.54]}, {"a": [77.46, 924.08]}, {"a": [77.79, 923.63]}, {"a": [78.14, 923.2]}, {"a": [78.5, 922.78]}, {"a": [78.89, 922.38]}, {"a": [79.29, 921.99]}, {"a": [79.71, 921.63]}, {"a": [80.15, 921.28]}, {"a": [80.6, 920.95]}, {"a": [81.06, 920.64]}, {"a": [81.54, 920.35]}, {"a": [82.02, 920.09]}, {"a": [82.52, 919.84]}, {"a": [83.03, 919.62]}, {"a": [83.55, 919.42]}, {"a": [84.08, 919.24]}, {"a": [84.61, 919.09]}, {"a": [85.16, 918.95]}, {"a": [85.7, 918.85]}, {"a": [86.25, 918.76]}, {"a": [86.8, 918.7]}, {"a": [87.36, 918.67]}, {"a": [87.92, 918.66]}, {"a": [88.47, 918.67]}, {"a": [89.03, 918.71]}, {"a": [89.58, 918.77]}, {"a": [90.13, 918.85]}, {"a": [90.68, 918.96]}, {"a": [91.22, 919.1]}, {"a": [91.75, 919.25]}, {"a": [92.28, 919.43]}, {"a": [92.8, 919.64]}, {"a": [93.31, 919.86]}, {"a": [93.8, 920.11]}, {"a": [94.29, 920.38]}, {"a": [94.77, 920.67]}, {"a": [95.23, 920.98]}, {"a": [95.68, 921.31]}, {"a": [96.11, 921.65]}, {"a": [96.53, 922.02]}, {"a": [96.93, 922.41]}, {"a": [97.31, 922.81]}, {"a": [97.68, 923.23]}, {"a": [98.03, 923.66]}, {"a": [98.36, 924.11]}, {"a": [98.66, 924.58]}, {"a": [98.95, 925.05]}, {"a": [99.22, 925.54]}, {"a": [99.46, 926.04]}, {"a": [99.69, 926.55]}, {"a": [99.89, 927.07]}, {"a": [100.07, 927.6]}, {"a": [100.22, 928.13]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Bandeau", "nom": "\u305d\u3093\u3054\u304f\u3046", "type": "texte", "texte": "\u305d\u3093\u3054\u304f\u3046", "runs": [{"de": 0, "a": 5, "police": "RoundedMplus1c-Medium", "taille": 15.81, "approche": 0, "interligne": 16.94, "couleur": [247, 241, 239], "italique": false, "gras": false, "echelleH": 104.62, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 5, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [207.51, 849.88], "angle": -12.4, "encre": [78.64, 14.09], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Bandeau", "nom": "\u5b6b\u609f\u7a7a", "type": "texte", "texte": "\u5b6b\u609f\u7a7a", "runs": [{"de": 0, "a": 3, "police": "RoundedMplus1c-Medium", "taille": 27.99, "approche": 0, "interligne": 30.15, "couleur": [247, 241, 239], "italique": false, "gras": false, "echelleH": 108.71, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 3, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [120.8, 866.98], "angle": -12.4, "encre": [89.02, 26.77], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Bandeau", "nom": "\u307e\u305f\u306a! \u5929\u56fd\u3078\u65c5\u7acb\u3061\u3063!!", "type": "texte", "texte": "\u307e\u305f\u306a! \u5929\u56fd\u3078\u65c5\u7acb\u3061\u3063!!", "runs": [{"de": 0, "a": 3, "police": "RoundedMplus1c-Bold", "taille": 34.85, "approche": 0, "interligne": 39.56, "couleur": [247, 241, 239], "italique": false, "gras": false, "echelleH": 94.93, "echelleV": 100.0, "decalage": 0.0}, {"de": 3, "a": 4, "police": "RoundedMplus1c-Bold", "taille": 34.85, "approche": 0, "interligne": 39.56, "couleur": [247, 241, 239], "italique": false, "gras": false, "echelleH": 94.93, "echelleV": 100.0, "decalage": 0.0}, {"de": 4, "a": 5, "police": "RoundedMplus1c-Bold", "taille": 34.85, "approche": 0, "interligne": 39.56, "couleur": [247, 241, 239], "italique": false, "gras": false, "echelleH": 94.93, "echelleV": 100.0, "decalage": 0.0}, {"de": 5, "a": 7, "police": "RoundedMplus1c-Bold", "taille": 34.85, "approche": 0, "interligne": 39.56, "couleur": [247, 241, 239], "italique": false, "gras": false, "echelleH": 94.93, "echelleV": 100.0, "decalage": 0.0}, {"de": 7, "a": 8, "police": "RoundedMplus1c-Bold", "taille": 34.85, "approche": 0, "interligne": 39.56, "couleur": [247, 241, 239], "italique": false, "gras": false, "echelleH": 94.93, "echelleV": 100.0, "decalage": 0.0}, {"de": 8, "a": 10, "police": "RoundedMplus1c-Bold", "taille": 34.85, "approche": 0, "interligne": 39.56, "couleur": [247, 241, 239], "italique": false, "gras": false, "echelleH": 94.93, "echelleV": 100.0, "decalage": 0.0}, {"de": 10, "a": 12, "police": "RoundedMplus1c-Bold", "taille": 34.85, "approche": 0, "interligne": 39.56, "couleur": [247, 241, 239], "italique": false, "gras": false, "echelleH": 94.93, "echelleV": 100.0, "decalage": 0.0}, {"de": 12, "a": 14, "police": "RoundedMplus1c-Bold", "taille": 34.85, "approche": 0, "interligne": 39.56, "couleur": [247, 241, 239], "italique": false, "gras": false, "echelleH": 94.93, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 14, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [288.01, 883.26], "angle": -12.4, "encre": [369.65, 32.84], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Bandeau", "nom": "\u3066\u3093\u3054\u304f", "type": "texte", "texte": "\u3066\u3093\u3054\u304f", "runs": [{"de": 0, "a": 4, "police": "RoundedMplus1c-Medium", "taille": 11.81, "approche": 220, "interligne": 11.81, "couleur": [247, 241, 239], "italique": false, "gras": false, "echelleH": 94.93, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 4, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [255.27, 869.26], "angle": -12.4, "encre": [47.65, 10.98], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Bandeau", "nom": "\u305f\u3073\u3060", "type": "texte", "texte": "\u305f\u3073\u3060", "runs": [{"de": 0, "a": 3, "police": "RoundedMplus1c-Medium", "taille": 11.81, "approche": 220, "interligne": 11.81, "couleur": [247, 241, 239], "italique": false, "gras": false, "echelleH": 94.93, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 3, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [352.32, 848.52], "angle": -12.4, "encre": [37.4, 11.03], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Bandeau", "nom": "181", "type": "texte", "texte": "181", "runs": [{"de": 0, "a": 3, "police": "Oswald-Medium", "taille": 17.53, "approche": 0, "interligne": 12.39, "couleur": [247, 241, 239], "italique": false, "gras": false, "echelleH": 81.73, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 3, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [88.69, 931.2], "angle": -12.4, "encre": [16.63, 14.09], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Badge", "nom": "Badge \u2013 contour noir", "type": "forme", "couleur": [24, 22, 26], "chemins": [[{"a": [644.9, 54.32]}, {"a": [747.72, 54.32]}, {"a": [770.83, 77.44]}, {"a": [770.83, 174.12]}, {"a": [747.72, 197.23]}, {"a": [644.9, 197.23]}, {"a": [621.79, 174.12]}, {"a": [621.79, 77.44]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Badge", "nom": "Badge \u2013 anneau blanc", "type": "forme", "couleur": [236, 232, 228], "chemins": [[{"a": [648.36, 60.23]}, {"a": [744.26, 60.23]}, {"a": [764.93, 80.9]}, {"a": [764.93, 170.66]}, {"a": [744.26, 191.32]}, {"a": [648.36, 191.32]}, {"a": [627.69, 170.66]}, {"a": [627.69, 80.9]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Badge", "nom": "Badge \u2013 fond noir", "type": "forme", "couleur": [24, 22, 26], "chemins": [[{"a": [651.12, 64.95]}, {"a": [741.5, 64.95]}, {"a": [760.2, 83.66]}, {"a": [760.2, 167.89]}, {"a": [741.5, 186.6]}, {"a": [651.12, 186.6]}, {"a": [632.42, 167.89]}, {"a": [632.42, 83.66]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Badge", "nom": "Z", "type": "texte", "texte": "Z", "runs": [{"de": 0, "a": 1, "police": "BlackOpsOne-Regular", "taille": 131.99, "approche": 0, "interligne": 184.38, "couleur": [192, 143, 34], "italique": false, "gras": false, "echelleH": 89.63, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 1, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [700.0, 125.37], "angle": 0.0, "encre": [87.0, 86.1], "vertical": false, "boite": null, "degradeTexte": {"angle": -90.0, "stops": [{"c": [242, 207, 86], "pos": 0}, {"c": [192, 143, 34], "pos": 1}]}}, {"calque": "image:logo", "calqueNom": "Logo", "groupe": "", "nom": "slot detoure zone-logo vide", "type": "image", "cle": "logo", "label": "", "chemins": [[{"a": [86.18, 77.88]}, {"a": [361.18, 77.88]}, {"a": [361.18, 209.13]}, {"a": [86.18, 209.13]}]], "detoure": true}], "motifs": {}, "images": {"fond": {"fichier": "carte_dbz_181_images/fond.jpg", "l": 839, "h": 1134}}};
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
    // d\u00e9codage par blocs (table de correspondance, morceaux de 4096 octets) : rapide m\u00eame pour un gros fichier
    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", T = {}, morceaux = [], o = [];
    for (var k = 0; k < 64; k++) T[t.charAt(k)] = k;
    var b = 0, n = 0;
    for (var i = 0; i < s.length; i++) {
      var c = T[s.charAt(i)];
      if (c === undefined) continue;
      b = ((b << 6) | c) & 0xFFFFFF; n += 6;
      if (n >= 8) { n -= 8; o.push((b >> n) & 255); if (o.length >= 4096) { morceaux.push(String.fromCharCode.apply(null, o)); o = []; } }
    }
    if (o.length) morceaux.push(String.fromCharCode.apply(null, o));
    return morceaux.join("");
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
  var motifsAPoser = [], imagesAPoser = [];

  // ---------- Images des emplacements (logos, photos) ----------
  var fichiersImages = {};
  function fichierImage(cle) {
    if (fichiersImages[cle]) return fichiersImages[cle];
    if (SCENE.images[cle].fichier) {
      // image livr\u00e9e \u00e0 c\u00f4t\u00e9 du script (dossier <nom>_images) : ouverte directement, sans d\u00e9codage
      var g = new File(File($.fileName).parent.fsName + "/" + SCENE.images[cle].fichier);
      if (!g.exists) throw new Error("fichier introuvable : " + SCENE.images[cle].fichier + " (\u00e0 laisser \u00e0 c\u00f4t\u00e9 du script)");
      fichiersImages[cle] = g;
      return g;
    }
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
            // logo / personnage d\u00e9tour\u00e9 : calque rep\u00e8re \u00e0 sa place, l'image est pos\u00e9e apr\u00e8s la construction
            l = doc.artLayers.add(); l.name = it.calqueNom; ranger(l, cont);
            imagesAPoser.push({ repere: l, it: it });
          } else if (avecImage) {
            // photo / texture : forme maintenant, image \u00e9cr\u00eat\u00e9e dessus apr\u00e8s la construction
            l = forme(it.chemins, [128, 128, 128], "Forme \u2013 " + it.calqueNom); ranger(l, cont);
            imagesAPoser.push({ base: l, it: it });
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
  // Images : ouvertes et coll\u00e9es hors de l'historique suspendu (ouvrir un autre document pendant
  // suspendHistory peut bloquer Photoshop)
  for (var im = 0; im < imagesAPoser.length; im++) {
    var P = imagesAPoser[im];
    try {
      if (P.base) { poserImage(P.base, P.it); }
      else { doc.activeLayer = P.repere; poserImage(null, P.it); P.repere.remove(); }
    } catch (e) {
      erreurs.push(P.it.calqueNom + " (image) : " + e.message);
      try {
        var vide = doc.artLayers.add(); vide.name = ">> " + P.it.calqueNom + " : colle ton image ici";
        if (P.base) { vide.move(P.base, ElementPlacement.PLACEBEFORE); vide.grouped = true; }
        else { vide.move(P.repere, ElementPlacement.PLACEBEFORE); P.repere.remove(); }
      } catch (e2) {}
    }
  }
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
