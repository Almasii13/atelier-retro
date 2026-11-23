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
  var SCENE = {"titre": "Logo VHS chrom\u00e9 \u2014 version japonaise", "fichier": "logo_vhs_japon", "largeur": 1538, "hauteur": 1410, "reperes": {"coupe": [35.43307086614173, 1502.3622047244096, 35.43307086614173, 1374.8031496062993], "secu": [35.43307086614173, 1502.3622047244096, 35.43307086614173, 1374.8031496062993]}, "plis": [], "polices": ["ArchivoBlack-Regular", "ZenKakuGothicNew-Black"], "items": [{"calque": "fond", "calqueNom": "fond", "groupe": "Fond", "nom": "Fond noir", "type": "forme", "couleur": [0, 0, 0], "chemins": [[{"a": [-0.03, -0.02]}, {"a": [1537.73, -0.02]}, {"a": [1537.73, 1410.18]}, {"a": [-0.03, 1410.18]}]]}, {"calque": "texte", "calqueNom": "texte", "groupe": "VHS chrom\u00e9", "nom": "VHS", "type": "texte", "texte": "VHS", "runs": [{"de": 0, "a": 3, "police": "ArchivoBlack-Regular", "taille": 698.44, "approche": -52, "interligne": 826.05, "couleur": [214, 218, 222], "italique": false, "gras": false, "echelleH": 82.83, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 3, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [774.38, 534.61], "angle": 0.0, "encre": [1260.53, 498.93], "vertical": false, "boite": null, "contour": {"taille": 14.765, "couleur": [214, 218, 222], "centre": false}, "contourSeul": false}, {"calque": "texte", "calqueNom": "texte", "groupe": "VHS chrom\u00e9", "nom": "VHS", "type": "texte", "texte": "VHS", "runs": [{"de": 0, "a": 3, "police": "ArchivoBlack-Regular", "taille": 698.15, "approche": -52, "interligne": 825.35, "couleur": [48, 52, 58], "italique": false, "gras": false, "echelleH": 82.87, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 3, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [773.56, 534.23], "angle": 0.0, "encre": [1259.32, 498.73], "vertical": false, "boite": null, "contour": {"taille": 2.6, "couleur": [48, 52, 58], "centre": false}, "contourSeul": false}, {"calque": "texte", "calqueNom": "texte", "groupe": "VHS chrom\u00e9", "nom": "VHS", "type": "texte", "texte": "VHS", "runs": [{"de": 0, "a": 3, "police": "ArchivoBlack-Regular", "taille": 698.15, "approche": -52, "interligne": 825.35, "couleur": [58, 64, 73], "italique": false, "gras": false, "echelleH": 82.91, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 3, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [773.49, 534.23], "angle": 0.0, "encre": [1259.93, 498.73], "vertical": false, "boite": null, "degradeTexte": {"angle": -90.0, "stops": [{"c": [255, 255, 255], "pos": 0}, {"c": [238, 241, 244], "pos": 0.12}, {"c": [194, 200, 207], "pos": 0.3}, {"c": [111, 119, 129], "pos": 0.44}, {"c": [28, 31, 36], "pos": 0.48}, {"c": [58, 64, 73], "pos": 0.56}, {"c": [127, 136, 146], "pos": 0.66}, {"c": [233, 237, 241], "pos": 0.8}, {"c": [255, 255, 255], "pos": 0.88}, {"c": [169, 176, 184], "pos": 0.94}, {"c": [228, 232, 236], "pos": 1}]}}, {"calque": "texte", "calqueNom": "texte", "groupe": "HI-FI chrom\u00e9", "nom": "HI-FI", "type": "texte", "texte": "HI-FI", "runs": [{"de": 0, "a": 5, "police": "ArchivoBlack-Regular", "taille": 103.77, "approche": 90, "interligne": 91.17, "couleur": [214, 218, 222], "italique": false, "gras": false, "echelleH": 109.72, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 5, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1253.84, 193.15], "angle": 0.0, "encre": [321.67, 72.12], "vertical": false, "boite": null, "contour": {"taille": 4.725, "couleur": [214, 218, 222], "centre": false}, "contourSeul": false}, {"calque": "texte", "calqueNom": "texte", "groupe": "HI-FI chrom\u00e9", "nom": "HI-FI", "type": "texte", "texte": "HI-FI", "runs": [{"de": 0, "a": 5, "police": "ArchivoBlack-Regular", "taille": 103.77, "approche": 90, "interligne": 91.17, "couleur": [48, 52, 58], "italique": false, "gras": false, "echelleH": 109.72, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 5, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1253.84, 193.15], "angle": 0.0, "encre": [321.67, 72.12], "vertical": false, "boite": null, "contour": {"taille": 2.6, "couleur": [48, 52, 58], "centre": false}, "contourSeul": false}, {"calque": "texte", "calqueNom": "texte", "groupe": "HI-FI chrom\u00e9", "nom": "HI-FI", "type": "texte", "texte": "HI-FI", "runs": [{"de": 0, "a": 5, "police": "ArchivoBlack-Regular", "taille": 103.77, "approche": 90, "interligne": 91.17, "couleur": [58, 64, 73], "italique": false, "gras": false, "echelleH": 109.72, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 5, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1253.84, 193.15], "angle": 0.0, "encre": [321.67, 72.12], "vertical": false, "boite": null, "degradeTexte": {"angle": -90.0, "stops": [{"c": [255, 255, 255], "pos": 0}, {"c": [238, 241, 244], "pos": 0.12}, {"c": [194, 200, 207], "pos": 0.3}, {"c": [111, 119, 129], "pos": 0.44}, {"c": [28, 31, 36], "pos": 0.48}, {"c": [58, 64, 73], "pos": 0.56}, {"c": [127, 136, 146], "pos": 0.66}, {"c": [233, 237, 241], "pos": 0.8}, {"c": [255, 255, 255], "pos": 0.88}, {"c": [169, 176, 184], "pos": 0.94}, {"c": [228, 232, 236], "pos": 1}]}}, {"calque": "texte", "calqueNom": "texte", "groupe": "\u00c9tincelles", "nom": "Halo", "type": "forme", "couleur": [255, 255, 255], "chemins": [[{"a": [589.25, 301.15]}, {"a": [589.24, 301.84]}, {"a": [589.19, 302.53]}, {"a": [589.12, 303.22]}, {"a": [589.01, 303.91]}, {"a": [588.88, 304.59]}, {"a": [588.71, 305.26]}, {"a": [588.52, 305.92]}, {"a": [588.3, 306.58]}, {"a": [588.05, 307.23]}, {"a": [587.77, 307.86]}, {"a": [587.46, 308.48]}, {"a": [587.13, 309.09]}, {"a": [586.77, 309.68]}, {"a": [586.38, 310.26]}, {"a": [585.97, 310.81]}, {"a": [585.54, 311.35]}, {"a": [585.08, 311.87]}, {"a": [584.6, 312.37]}, {"a": [584.1, 312.85]}, {"a": [583.58, 313.31]}, {"a": [583.04, 313.74]}, {"a": [582.48, 314.15]}, {"a": [581.91, 314.54]}, {"a": [581.32, 314.9]}, {"a": [580.71, 315.23]}, {"a": [580.09, 315.54]}, {"a": [579.45, 315.82]}, {"a": [578.81, 316.07]}, {"a": [578.15, 316.29]}, {"a": [577.49, 316.48]}, {"a": [576.82, 316.65]}, {"a": [576.14, 316.78]}, {"a": [575.45, 316.89]}, {"a": [574.76, 316.96]}, {"a": [574.07, 317.01]}, {"a": [573.38, 317.02]}, {"a": [572.69, 317.01]}, {"a": [572.0, 316.96]}, {"a": [571.31, 316.89]}, {"a": [570.62, 316.78]}, {"a": [569.94, 316.65]}, {"a": [569.27, 316.48]}, {"a": [568.61, 316.29]}, {"a": [567.95, 316.07]}, {"a": [567.31, 315.82]}, {"a": [566.67, 315.54]}, {"a": [566.05, 315.23]}, {"a": [565.44, 314.9]}, {"a": [564.85, 314.54]}, {"a": [564.28, 314.15]}, {"a": [563.72, 313.74]}, {"a": [563.18, 313.31]}, {"a": [562.66, 312.85]}, {"a": [562.16, 312.37]}, {"a": [561.68, 311.87]}, {"a": [561.22, 311.35]}, {"a": [560.79, 310.81]}, {"a": [560.38, 310.26]}, {"a": [559.99, 309.68]}, {"a": [559.63, 309.09]}, {"a": [559.3, 308.48]}, {"a": [558.99, 307.86]}, {"a": [558.71, 307.23]}, {"a": [558.46, 306.58]}, {"a": [558.24, 305.92]}, {"a": [558.05, 305.26]}, {"a": [557.88, 304.59]}, {"a": [557.75, 303.91]}, {"a": [557.64, 303.22]}, {"a": [557.57, 302.53]}, {"a": [557.52, 301.84]}, {"a": [557.51, 301.15]}, {"a": [557.52, 300.46]}, {"a": [557.57, 299.77]}, {"a": [557.64, 299.08]}, {"a": [557.75, 298.39]}, {"a": [557.88, 297.71]}, {"a": [558.05, 297.04]}, {"a": [558.24, 296.38]}, {"a": [558.46, 295.72]}, {"a": [558.71, 295.08]}, {"a": [558.99, 294.44]}, {"a": [559.3, 293.82]}, {"a": [559.63, 293.21]}, {"a": [559.99, 292.62]}, {"a": [560.38, 292.05]}, {"a": [560.79, 291.49]}, {"a": [561.22, 290.95]}, {"a": [561.68, 290.43]}, {"a": [562.16, 289.93]}, {"a": [562.66, 289.45]}, {"a": [563.18, 288.99]}, {"a": [563.72, 288.56]}, {"a": [564.28, 288.15]}, {"a": [564.85, 287.76]}, {"a": [565.44, 287.4]}, {"a": [566.05, 287.07]}, {"a": [566.67, 286.76]}, {"a": [567.31, 286.49]}, {"a": [567.95, 286.23]}, {"a": [568.61, 286.01]}, {"a": [569.27, 285.82]}, {"a": [569.94, 285.65]}, {"a": [570.62, 285.52]}, {"a": [571.31, 285.41]}, {"a": [572.0, 285.34]}, {"a": [572.69, 285.29]}, {"a": [573.38, 285.28]}, {"a": [574.07, 285.29]}, {"a": [574.76, 285.34]}, {"a": [575.45, 285.41]}, {"a": [576.14, 285.52]}, {"a": [576.82, 285.65]}, {"a": [577.49, 285.82]}, {"a": [578.15, 286.01]}, {"a": [578.81, 286.23]}, {"a": [579.45, 286.49]}, {"a": [580.09, 286.76]}, {"a": [580.71, 287.07]}, {"a": [581.32, 287.4]}, {"a": [581.91, 287.76]}, {"a": [582.48, 288.15]}, {"a": [583.04, 288.56]}, {"a": [583.58, 288.99]}, {"a": [584.1, 289.45]}, {"a": [584.6, 289.93]}, {"a": [585.08, 290.43]}, {"a": [585.54, 290.95]}, {"a": [585.97, 291.49]}, {"a": [586.38, 292.05]}, {"a": [586.77, 292.62]}, {"a": [587.13, 293.21]}, {"a": [587.46, 293.82]}, {"a": [587.77, 294.44]}, {"a": [588.05, 295.08]}, {"a": [588.3, 295.72]}, {"a": [588.52, 296.38]}, {"a": [588.71, 297.04]}, {"a": [588.88, 297.71]}, {"a": [589.01, 298.39]}, {"a": [589.12, 299.08]}, {"a": [589.19, 299.77]}, {"a": [589.24, 300.46]}]]}, {"calque": "texte", "calqueNom": "texte", "groupe": "\u00c9tincelles", "nom": "\u00c9tincelle", "type": "forme", "couleur": [255, 255, 255], "chemins": [[{"a": [573.38, 251.55]}, {"a": [576.53, 298.0]}, {"a": [622.98, 301.15]}, {"a": [576.53, 304.3]}, {"a": [573.38, 350.76]}, {"a": [570.23, 304.3]}, {"a": [523.77, 301.15]}, {"a": [570.23, 298.0]}]]}, {"calque": "texte", "calqueNom": "texte", "groupe": "\u00c9tincelles", "nom": "Halo", "type": "forme", "couleur": [255, 255, 255], "chemins": [[{"a": [1362.03, 302.92]}, {"a": [1362.02, 303.45]}, {"a": [1361.98, 303.98]}, {"a": [1361.93, 304.5]}, {"a": [1361.85, 305.02]}, {"a": [1361.74, 305.54]}, {"a": [1361.62, 306.05]}, {"a": [1361.47, 306.56]}, {"a": [1361.3, 307.06]}, {"a": [1361.11, 307.55]}, {"a": [1360.9, 308.03]}, {"a": [1360.66, 308.51]}, {"a": [1360.41, 308.97]}, {"a": [1360.14, 309.42]}, {"a": [1359.84, 309.86]}, {"a": [1359.53, 310.28]}, {"a": [1359.2, 310.7]}, {"a": [1358.85, 311.09]}, {"a": [1358.49, 311.47]}, {"a": [1358.11, 311.84]}, {"a": [1357.71, 312.19]}, {"a": [1357.3, 312.52]}, {"a": [1356.87, 312.83]}, {"a": [1356.43, 313.12]}, {"a": [1355.98, 313.4]}, {"a": [1355.52, 313.65]}, {"a": [1355.05, 313.88]}, {"a": [1354.56, 314.1]}, {"a": [1354.07, 314.29]}, {"a": [1353.57, 314.46]}, {"a": [1353.07, 314.6]}, {"a": [1352.55, 314.73]}, {"a": [1352.04, 314.83]}, {"a": [1351.51, 314.91]}, {"a": [1350.99, 314.97]}, {"a": [1350.46, 315.0]}, {"a": [1349.94, 315.02]}, {"a": [1349.41, 315.0]}, {"a": [1348.88, 314.97]}, {"a": [1348.36, 314.91]}, {"a": [1347.84, 314.83]}, {"a": [1347.32, 314.73]}, {"a": [1346.81, 314.6]}, {"a": [1346.3, 314.46]}, {"a": [1345.8, 314.29]}, {"a": [1345.31, 314.1]}, {"a": [1344.83, 313.88]}, {"a": [1344.35, 313.65]}, {"a": [1343.89, 313.4]}, {"a": [1343.44, 313.12]}, {"a": [1343.0, 312.83]}, {"a": [1342.57, 312.52]}, {"a": [1342.16, 312.19]}, {"a": [1341.77, 311.84]}, {"a": [1341.38, 311.47]}, {"a": [1341.02, 311.09]}, {"a": [1340.67, 310.7]}, {"a": [1340.34, 310.28]}, {"a": [1340.03, 309.86]}, {"a": [1339.74, 309.42]}, {"a": [1339.46, 308.97]}, {"a": [1339.21, 308.51]}, {"a": [1338.98, 308.03]}, {"a": [1338.76, 307.55]}, {"a": [1338.57, 307.06]}, {"a": [1338.4, 306.56]}, {"a": [1338.25, 306.05]}, {"a": [1338.13, 305.54]}, {"a": [1338.03, 305.02]}, {"a": [1337.95, 304.5]}, {"a": [1337.89, 303.98]}, {"a": [1337.85, 303.45]}, {"a": [1337.84, 302.92]}, {"a": [1337.85, 302.39]}, {"a": [1337.89, 301.87]}, {"a": [1337.95, 301.34]}, {"a": [1338.03, 300.82]}, {"a": [1338.13, 300.3]}, {"a": [1338.25, 299.79]}, {"a": [1338.4, 299.29]}, {"a": [1338.57, 298.79]}, {"a": [1338.76, 298.29]}, {"a": [1338.98, 297.81]}, {"a": [1339.21, 297.34]}, {"a": [1339.46, 296.88]}, {"a": [1339.74, 296.42]}, {"a": [1340.03, 295.99]}, {"a": [1340.34, 295.56]}, {"a": [1340.67, 295.15]}, {"a": [1341.02, 294.75]}, {"a": [1341.38, 294.37]}, {"a": [1341.77, 294.01]}, {"a": [1342.16, 293.66]}, {"a": [1342.57, 293.33]}, {"a": [1343.0, 293.02]}, {"a": [1343.44, 292.72]}, {"a": [1343.89, 292.45]}, {"a": [1344.35, 292.19]}, {"a": [1344.83, 291.96]}, {"a": [1345.31, 291.75]}, {"a": [1345.8, 291.56]}, {"a": [1346.3, 291.39]}, {"a": [1346.81, 291.24]}, {"a": [1347.32, 291.11]}, {"a": [1347.84, 291.01]}, {"a": [1348.36, 290.93]}, {"a": [1348.88, 290.87]}, {"a": [1349.41, 290.84]}, {"a": [1349.94, 290.83]}, {"a": [1350.46, 290.84]}, {"a": [1350.99, 290.87]}, {"a": [1351.51, 290.93]}, {"a": [1352.04, 291.01]}, {"a": [1352.55, 291.11]}, {"a": [1353.07, 291.24]}, {"a": [1353.57, 291.39]}, {"a": [1354.07, 291.56]}, {"a": [1354.56, 291.75]}, {"a": [1355.05, 291.96]}, {"a": [1355.52, 292.19]}, {"a": [1355.98, 292.45]}, {"a": [1356.43, 292.72]}, {"a": [1356.87, 293.02]}, {"a": [1357.3, 293.33]}, {"a": [1357.71, 293.66]}, {"a": [1358.11, 294.01]}, {"a": [1358.49, 294.37]}, {"a": [1358.85, 294.75]}, {"a": [1359.2, 295.15]}, {"a": [1359.53, 295.56]}, {"a": [1359.84, 295.99]}, {"a": [1360.14, 296.42]}, {"a": [1360.41, 296.88]}, {"a": [1360.66, 297.34]}, {"a": [1360.9, 297.81]}, {"a": [1361.11, 298.29]}, {"a": [1361.3, 298.79]}, {"a": [1361.47, 299.29]}, {"a": [1361.62, 299.79]}, {"a": [1361.74, 300.3]}, {"a": [1361.85, 300.82]}, {"a": [1361.93, 301.34]}, {"a": [1361.98, 301.87]}, {"a": [1362.02, 302.39]}]]}, {"calque": "texte", "calqueNom": "texte", "groupe": "\u00c9tincelles", "nom": "\u00c9tincelle", "type": "forme", "couleur": [255, 255, 255], "chemins": [[{"a": [1349.94, 265.13]}, {"a": [1352.35, 300.51]}, {"a": [1387.73, 302.92]}, {"a": [1352.35, 305.33]}, {"a": [1349.94, 340.72]}, {"a": [1347.53, 305.33]}, {"a": [1312.14, 302.92]}, {"a": [1347.53, 300.51]}]]}, {"calque": "texte", "calqueNom": "texte", "groupe": "\u00c9tincelles", "nom": "Halo", "type": "forme", "couleur": [255, 255, 255], "chemins": [[{"a": [310.21, 765.31]}, {"a": [310.2, 765.71]}, {"a": [310.18, 766.1]}, {"a": [310.14, 766.5]}, {"a": [310.08, 766.89]}, {"a": [310.0, 767.28]}, {"a": [309.9, 767.66]}, {"a": [309.79, 768.04]}, {"a": [309.67, 768.42]}, {"a": [309.52, 768.78]}, {"a": [309.36, 769.15]}, {"a": [309.19, 769.5]}, {"a": [309.0, 769.85]}, {"a": [308.79, 770.19]}, {"a": [308.57, 770.52]}, {"a": [308.34, 770.83]}, {"a": [308.09, 771.14]}, {"a": [307.83, 771.44]}, {"a": [307.56, 771.73]}, {"a": [307.27, 772.0]}, {"a": [306.97, 772.26]}, {"a": [306.66, 772.51]}, {"a": [306.34, 772.74]}, {"a": [306.02, 772.96]}, {"a": [305.68, 773.17]}, {"a": [305.33, 773.36]}, {"a": [304.98, 773.53]}, {"a": [304.61, 773.69]}, {"a": [304.24, 773.84]}, {"a": [303.87, 773.96]}, {"a": [303.49, 774.07]}, {"a": [303.11, 774.17]}, {"a": [302.72, 774.25]}, {"a": [302.33, 774.31]}, {"a": [301.93, 774.35]}, {"a": [301.54, 774.37]}, {"a": [301.14, 774.38]}, {"a": [300.75, 774.37]}, {"a": [300.35, 774.35]}, {"a": [299.96, 774.31]}, {"a": [299.57, 774.25]}, {"a": [299.18, 774.17]}, {"a": [298.79, 774.07]}, {"a": [298.41, 773.96]}, {"a": [298.04, 773.84]}, {"a": [297.67, 773.69]}, {"a": [297.31, 773.53]}, {"a": [296.95, 773.36]}, {"a": [296.61, 773.17]}, {"a": [296.27, 772.96]}, {"a": [295.94, 772.74]}, {"a": [295.62, 772.51]}, {"a": [295.31, 772.26]}, {"a": [295.01, 772.0]}, {"a": [294.73, 771.73]}, {"a": [294.45, 771.44]}, {"a": [294.19, 771.14]}, {"a": [293.95, 770.83]}, {"a": [293.71, 770.52]}, {"a": [293.49, 770.19]}, {"a": [293.29, 769.85]}, {"a": [293.1, 769.5]}, {"a": [292.92, 769.15]}, {"a": [292.76, 768.78]}, {"a": [292.62, 768.42]}, {"a": [292.49, 768.04]}, {"a": [292.38, 767.66]}, {"a": [292.29, 767.28]}, {"a": [292.21, 766.89]}, {"a": [292.15, 766.5]}, {"a": [292.11, 766.1]}, {"a": [292.08, 765.71]}, {"a": [292.07, 765.31]}, {"a": [292.08, 764.92]}, {"a": [292.11, 764.52]}, {"a": [292.15, 764.13]}, {"a": [292.21, 763.74]}, {"a": [292.29, 763.35]}, {"a": [292.38, 762.97]}, {"a": [292.49, 762.59]}, {"a": [292.62, 762.21]}, {"a": [292.76, 761.84]}, {"a": [292.92, 761.48]}, {"a": [293.1, 761.12]}, {"a": [293.29, 760.78]}, {"a": [293.49, 760.44]}, {"a": [293.71, 760.11]}, {"a": [293.95, 759.79]}, {"a": [294.19, 759.48]}, {"a": [294.45, 759.18]}, {"a": [294.73, 758.9]}, {"a": [295.01, 758.63]}, {"a": [295.31, 758.36]}, {"a": [295.62, 758.12]}, {"a": [295.94, 757.88]}, {"a": [296.27, 757.66]}, {"a": [296.61, 757.46]}, {"a": [296.95, 757.27]}, {"a": [297.31, 757.09]}, {"a": [297.67, 756.93]}, {"a": [298.04, 756.79]}, {"a": [298.41, 756.66]}, {"a": [298.79, 756.55]}, {"a": [299.18, 756.46]}, {"a": [299.57, 756.38]}, {"a": [299.96, 756.32]}, {"a": [300.35, 756.28]}, {"a": [300.75, 756.25]}, {"a": [301.14, 756.24]}, {"a": [301.54, 756.25]}, {"a": [301.93, 756.28]}, {"a": [302.33, 756.32]}, {"a": [302.72, 756.38]}, {"a": [303.11, 756.46]}, {"a": [303.49, 756.55]}, {"a": [303.87, 756.66]}, {"a": [304.24, 756.79]}, {"a": [304.61, 756.93]}, {"a": [304.98, 757.09]}, {"a": [305.33, 757.27]}, {"a": [305.68, 757.46]}, {"a": [306.02, 757.66]}, {"a": [306.34, 757.88]}, {"a": [306.66, 758.12]}, {"a": [306.97, 758.36]}, {"a": [307.27, 758.63]}, {"a": [307.56, 758.9]}, {"a": [307.83, 759.18]}, {"a": [308.09, 759.48]}, {"a": [308.34, 759.79]}, {"a": [308.57, 760.11]}, {"a": [308.79, 760.44]}, {"a": [309.0, 760.78]}, {"a": [309.19, 761.12]}, {"a": [309.36, 761.48]}, {"a": [309.52, 761.84]}, {"a": [309.67, 762.21]}, {"a": [309.79, 762.59]}, {"a": [309.9, 762.97]}, {"a": [310.0, 763.35]}, {"a": [310.08, 763.74]}, {"a": [310.14, 764.13]}, {"a": [310.18, 764.52]}, {"a": [310.2, 764.92]}]]}, {"calque": "texte", "calqueNom": "texte", "groupe": "\u00c9tincelles", "nom": "\u00c9tincelle", "type": "forme", "couleur": [255, 255, 255], "chemins": [[{"a": [301.14, 736.97]}, {"a": [302.95, 763.51]}, {"a": [329.49, 765.31]}, {"a": [302.95, 767.12]}, {"a": [301.14, 793.66]}, {"a": [299.34, 767.12]}, {"a": [272.8, 765.31]}, {"a": [299.34, 763.51]}]]}, {"calque": "texte", "calqueNom": "texte", "groupe": "\u00c9tincelles", "nom": "Halo", "type": "forme", "couleur": [255, 255, 255], "chemins": [[{"a": [1035.06, 768.86]}, {"a": [1035.05, 769.19]}, {"a": [1035.03, 769.51]}, {"a": [1035.0, 769.84]}, {"a": [1034.95, 770.17]}, {"a": [1034.88, 770.49]}, {"a": [1034.8, 770.81]}, {"a": [1034.71, 771.13]}, {"a": [1034.61, 771.44]}, {"a": [1034.49, 771.75]}, {"a": [1034.35, 772.05]}, {"a": [1034.21, 772.35]}, {"a": [1034.05, 772.64]}, {"a": [1033.88, 772.92]}, {"a": [1033.69, 773.19]}, {"a": [1033.5, 773.46]}, {"a": [1033.29, 773.71]}, {"a": [1033.08, 773.96]}, {"a": [1032.85, 774.2]}, {"a": [1032.61, 774.43]}, {"a": [1032.36, 774.65]}, {"a": [1032.1, 774.85]}, {"a": [1031.84, 775.05]}, {"a": [1031.56, 775.23]}, {"a": [1031.28, 775.4]}, {"a": [1030.99, 775.56]}, {"a": [1030.7, 775.71]}, {"a": [1030.4, 775.84]}, {"a": [1030.09, 775.96]}, {"a": [1029.78, 776.07]}, {"a": [1029.46, 776.16]}, {"a": [1029.14, 776.24]}, {"a": [1028.82, 776.3]}, {"a": [1028.49, 776.35]}, {"a": [1028.16, 776.39]}, {"a": [1027.83, 776.41]}, {"a": [1027.5, 776.41]}, {"a": [1027.17, 776.41]}, {"a": [1026.84, 776.39]}, {"a": [1026.52, 776.35]}, {"a": [1026.19, 776.3]}, {"a": [1025.87, 776.24]}, {"a": [1025.55, 776.16]}, {"a": [1025.23, 776.07]}, {"a": [1024.92, 775.96]}, {"a": [1024.61, 775.84]}, {"a": [1024.31, 775.71]}, {"a": [1024.01, 775.56]}, {"a": [1023.72, 775.4]}, {"a": [1023.44, 775.23]}, {"a": [1023.17, 775.05]}, {"a": [1022.9, 774.85]}, {"a": [1022.64, 774.65]}, {"a": [1022.4, 774.43]}, {"a": [1022.16, 774.2]}, {"a": [1021.93, 773.96]}, {"a": [1021.71, 773.71]}, {"a": [1021.51, 773.46]}, {"a": [1021.31, 773.19]}, {"a": [1021.13, 772.92]}, {"a": [1020.96, 772.64]}, {"a": [1020.8, 772.35]}, {"a": [1020.65, 772.05]}, {"a": [1020.52, 771.75]}, {"a": [1020.4, 771.44]}, {"a": [1020.29, 771.13]}, {"a": [1020.2, 770.81]}, {"a": [1020.12, 770.49]}, {"a": [1020.06, 770.17]}, {"a": [1020.01, 769.84]}, {"a": [1019.97, 769.51]}, {"a": [1019.95, 769.19]}, {"a": [1019.94, 768.86]}, {"a": [1019.95, 768.53]}, {"a": [1019.97, 768.2]}, {"a": [1020.01, 767.87]}, {"a": [1020.06, 767.54]}, {"a": [1020.12, 767.22]}, {"a": [1020.2, 766.9]}, {"a": [1020.29, 766.58]}, {"a": [1020.4, 766.27]}, {"a": [1020.52, 765.96]}, {"a": [1020.65, 765.66]}, {"a": [1020.8, 765.37]}, {"a": [1020.96, 765.08]}, {"a": [1021.13, 764.79]}, {"a": [1021.31, 764.52]}, {"a": [1021.51, 764.25]}, {"a": [1021.71, 764.0]}, {"a": [1021.93, 763.75]}, {"a": [1022.16, 763.51]}, {"a": [1022.4, 763.28]}, {"a": [1022.64, 763.07]}, {"a": [1022.9, 762.86]}, {"a": [1023.17, 762.66]}, {"a": [1023.44, 762.48]}, {"a": [1023.72, 762.31]}, {"a": [1024.01, 762.15]}, {"a": [1024.31, 762.01]}, {"a": [1024.61, 761.87]}, {"a": [1024.92, 761.75]}, {"a": [1025.23, 761.65]}, {"a": [1025.55, 761.55]}, {"a": [1025.87, 761.48]}, {"a": [1026.19, 761.41]}, {"a": [1026.52, 761.36]}, {"a": [1026.84, 761.33]}, {"a": [1027.17, 761.3]}, {"a": [1027.5, 761.3]}, {"a": [1027.83, 761.3]}, {"a": [1028.16, 761.33]}, {"a": [1028.49, 761.36]}, {"a": [1028.82, 761.41]}, {"a": [1029.14, 761.48]}, {"a": [1029.46, 761.55]}, {"a": [1029.78, 761.65]}, {"a": [1030.09, 761.75]}, {"a": [1030.4, 761.87]}, {"a": [1030.7, 762.01]}, {"a": [1030.99, 762.15]}, {"a": [1031.28, 762.31]}, {"a": [1031.56, 762.48]}, {"a": [1031.84, 762.66]}, {"a": [1032.1, 762.86]}, {"a": [1032.36, 763.07]}, {"a": [1032.61, 763.28]}, {"a": [1032.85, 763.51]}, {"a": [1033.08, 763.75]}, {"a": [1033.29, 764.0]}, {"a": [1033.5, 764.25]}, {"a": [1033.69, 764.52]}, {"a": [1033.88, 764.79]}, {"a": [1034.05, 765.08]}, {"a": [1034.21, 765.37]}, {"a": [1034.35, 765.66]}, {"a": [1034.49, 765.96]}, {"a": [1034.61, 766.27]}, {"a": [1034.71, 766.58]}, {"a": [1034.8, 766.9]}, {"a": [1034.88, 767.22]}, {"a": [1034.95, 767.54]}, {"a": [1035.0, 767.87]}, {"a": [1035.03, 768.2]}, {"a": [1035.05, 768.53]}]]}, {"calque": "texte", "calqueNom": "texte", "groupe": "\u00c9tincelles", "nom": "\u00c9tincelle", "type": "forme", "couleur": [255, 255, 255], "chemins": [[{"a": [1027.5, 745.23]}, {"a": [1029.0, 767.36]}, {"a": [1051.12, 768.86]}, {"a": [1029.0, 770.36]}, {"a": [1027.5, 792.48]}, {"a": [1026.0, 770.36]}, {"a": [1003.88, 768.86]}, {"a": [1026.0, 767.36]}]]}, {"calque": "texte", "calqueNom": "texte", "groupe": "Bande arc-en-ciel", "nom": "Bande 1", "type": "forme", "couleur": [254, 237, 9], "chemins": [[{"a": [144.56, 848.58]}, {"a": [481.16, 848.58]}, {"a": [434.7, 970.82]}, {"a": [98.09, 970.82]}]]}, {"calque": "texte", "calqueNom": "texte", "groupe": "Bande arc-en-ciel", "nom": "Bande 2", "type": "forme", "couleur": [254, 130, 17], "chemins": [[{"a": [505.96, 848.58]}, {"a": [683.13, 848.58]}, {"a": [636.66, 970.82]}, {"a": [459.5, 970.82]}]]}, {"calque": "texte", "calqueNom": "texte", "groupe": "Bande arc-en-ciel", "nom": "Bande 3", "type": "forme", "couleur": [251, 4, 48], "chemins": [[{"a": [709.7, 848.58]}, {"a": [862.06, 848.58]}, {"a": [815.61, 970.82]}, {"a": [663.24, 970.82]}]]}, {"calque": "texte", "calqueNom": "texte", "groupe": "Bande arc-en-ciel", "nom": "Bande 4", "type": "forme", "couleur": [244, 6, 118], "chemins": [[{"a": [897.49, 848.58]}, {"a": [941.78, 848.58]}, {"a": [895.33, 970.82]}, {"a": [851.04, 970.82]}]]}, {"calque": "texte", "calqueNom": "texte", "groupe": "Bande arc-en-ciel", "nom": "Bande 5", "type": "forme", "couleur": [229, 6, 180], "chemins": [[{"a": [966.57, 848.58]}, {"a": [1010.86, 848.58]}, {"a": [964.42, 970.82]}, {"a": [920.13, 970.82]}]]}, {"calque": "texte", "calqueNom": "texte", "groupe": "Bande arc-en-ciel", "nom": "Bande 6", "type": "forme", "couleur": [182, 21, 208], "chemins": [[{"a": [1035.66, 848.58]}, {"a": [1078.18, 848.58]}, {"a": [1031.74, 970.82]}, {"a": [989.21, 970.82]}]]}, {"calque": "texte", "calqueNom": "texte", "groupe": "Bande arc-en-ciel", "nom": "Bande 7", "type": "forme", "couleur": [121, 47, 218], "chemins": [[{"a": [1101.23, 848.58]}, {"a": [1143.73, 848.58]}, {"a": [1097.29, 970.82]}, {"a": [1054.77, 970.82]}]]}, {"calque": "texte", "calqueNom": "texte", "groupe": "Bande arc-en-ciel", "nom": "Bande 8", "type": "forme", "couleur": [4, 124, 249], "chemins": [[{"a": [1170.31, 848.58]}, {"a": [1209.28, 848.58]}, {"a": [1162.84, 970.82]}, {"a": [1123.87, 970.82]}]]}, {"calque": "texte", "calqueNom": "texte", "groupe": "Bande arc-en-ciel", "nom": "Bande 9", "type": "forme", "couleur": [3, 184, 252], "chemins": [[{"a": [1235.86, 848.58]}, {"a": [1278.39, 848.58]}, {"a": [1231.94, 970.82]}, {"a": [1189.42, 970.82]}]]}, {"calque": "texte", "calqueNom": "texte", "groupe": "Bande arc-en-ciel", "nom": "Bande 10", "type": "forme", "couleur": [8, 241, 238], "chemins": [[{"a": [1304.96, 848.58]}, {"a": [1439.59, 848.58]}, {"a": [1393.15, 970.82]}, {"a": [1258.51, 970.82]}]]}, {"calque": "texte", "calqueNom": "texte", "groupe": "Bande arc-en-ciel", "nom": "Filet 1", "type": "forme", "couleur": [255, 255, 255], "chemins": [[{"a": [117.78, 1150.93]}, {"a": [532.34, 1150.93]}, {"a": [532.34, 1161.56]}, {"a": [117.78, 1161.56]}]]}, {"calque": "texte", "calqueNom": "texte", "groupe": "Bande arc-en-ciel", "nom": "Filet 2", "type": "forme", "couleur": [255, 255, 255], "chemins": [[{"a": [1014.22, 1150.93]}, {"a": [1419.91, 1150.93]}, {"a": [1419.91, 1161.56]}, {"a": [1014.22, 1161.56]}]]}, {"calque": "texte", "calqueNom": "texte", "groupe": "Accroche", "nom": "\u672a\u6765\u306f\u3082\u3046\u3053\u3053\u306b\u3042\u308b", "type": "texte", "texte": "\u672a\u6765\u306f\u3082\u3046\u3053\u3053\u306b\u3042\u308b", "runs": [{"de": 0, "a": 10, "police": "ZenKakuGothicNew-Black", "taille": 101.57, "approche": 267, "interligne": 101.57, "couleur": [255, 255, 255], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 10, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [770.56, 1055.92], "angle": 0.0, "encre": [1246.12, 93.93], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "texte", "groupe": "Ann\u00e9e", "nom": "1976\u5e74", "type": "texte", "texte": "1976\u5e74", "runs": [{"de": 0, "a": 5, "police": "ZenKakuGothicNew-Black", "taille": 70.87, "approche": 450, "interligne": 70.87, "couleur": [255, 255, 255], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 5, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [770.15, 1156.11], "angle": 0.0, "encre": [324.58, 67.43], "vertical": false, "boite": null}], "motifs": {}, "images": {}};
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
