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
  var SCENE = {"titre": "Sachet HERO COLLECTION 3 \u2014 corps verso", "fichier": "corps_verso", "largeur": 906, "hauteur": 1232, "reperes": {"coupe": [35.43307086614173, 870.4724409448819, 35.43307086614173, 1196.4566929133857], "secu": [59.05511811023622, 846.8503937007874, 59.05511811023622, 1172.8346456692914]}, "plis": [], "polices": ["ArchivoBlack-Regular", "ZenKakuGothicNew-Black", "ZenKakuGothicNew-Bold", "ZenKakuGothicNew-Medium"], "items": [{"calque": "fond", "calqueNom": "Fond noir, panneau bleu & \u00e9claboussures", "groupe": "", "nom": "forme", "type": "forme", "couleur": [11, 10, 12], "chemins": [[{"a": [-23.65, -23.65]}, {"a": [929.46, -23.65]}, {"a": [929.46, 1255.44]}, {"a": [-23.65, 1255.44]}]]}, {"calque": "fond", "calqueNom": "Fond noir, panneau bleu & \u00e9claboussures", "groupe": "", "nom": "forme", "type": "forme", "couleur": [29, 98, 171], "chemins": [[{"a": [76.74, 89.73]}, {"a": [524.36, 89.73]}, {"a": [524.36, 950.72]}, {"a": [76.74, 950.72]}]]}, {"calque": "fond", "calqueNom": "Fond noir, panneau bleu & \u00e9claboussures", "groupe": "", "nom": "\u00c9claboussures", "type": "forme", "couleur": [179, 199, 220], "chemins": [[{"a": [464.13, 327.12]}, {"a": [464.13, 330.08]}, {"a": [470.03, 330.08]}, {"a": [470.03, 328.9]}, {"a": [467.67, 327.12]}], [{"a": [523.77, 328.31]}, {"a": [514.91, 321.22]}, {"a": [512.55, 320.63]}, {"a": [509.01, 317.68]}, {"a": [507.82, 317.68]}, {"a": [505.46, 319.45]}, {"a": [500.74, 319.45]}, {"a": [500.15, 320.04]}, {"a": [495.42, 320.04]}, {"a": [494.24, 320.63]}, {"a": [488.34, 327.12]}, {"a": [488.34, 330.08]}, {"a": [523.77, 330.08]}], [{"a": [513.14, 311.77]}, {"a": [513.14, 314.13]}, {"a": [516.09, 316.49]}, {"a": [517.27, 316.49]}, {"a": [517.27, 314.72]}, {"a": [514.32, 311.77]}], [{"a": [461.17, 308.23]}, {"a": [461.17, 309.41]}, {"a": [462.94, 310.59]}, {"a": [464.13, 310.59]}, {"a": [467.67, 308.82]}, {"a": [467.67, 307.64]}, {"a": [465.9, 306.46]}, {"a": [462.94, 306.46]}], [{"a": [448.77, 305.87]}, {"a": [448.77, 308.23]}, {"a": [455.86, 308.23]}, {"a": [455.86, 307.05]}, {"a": [455.27, 306.46]}, {"a": [451.13, 306.46]}, {"a": [450.54, 305.87]}], [{"a": [491.29, 305.27]}, {"a": [490.11, 304.09]}, {"a": [488.93, 304.09]}, {"a": [488.34, 303.5]}, {"a": [486.57, 303.5]}, {"a": [485.97, 304.09]}, {"a": [480.07, 304.09]}, {"a": [475.35, 306.46]}, {"a": [472.39, 307.05]}, {"a": [472.39, 308.23]}, {"a": [477.71, 308.23]}, {"a": [479.48, 309.41]}, {"a": [484.79, 309.41]}, {"a": [490.7, 307.05]}, {"a": [491.29, 306.46]}], [{"a": [483.61, 246.81]}, {"a": [481.84, 249.17]}, {"a": [481.84, 251.54]}, {"a": [483.02, 253.31]}, {"a": [484.79, 254.49]}, {"a": [487.75, 254.49]}, {"a": [489.52, 252.72]}, {"a": [489.52, 250.36]}, {"a": [487.75, 247.4]}], [{"a": [489.52, 232.05]}, {"a": [488.93, 231.46]}, {"a": [486.57, 231.46]}, {"a": [484.79, 232.64]}, {"a": [483.61, 232.64]}, {"a": [483.02, 233.23]}, {"a": [483.02, 234.41]}, {"a": [485.38, 234.41]}, {"a": [487.16, 233.23]}, {"a": [489.52, 233.23]}], [{"a": [519.64, 230.28]}, {"a": [519.04, 229.69]}, {"a": [517.27, 229.69]}, {"a": [515.5, 231.46]}, {"a": [515.5, 232.64]}, {"a": [518.45, 232.64]}, {"a": [519.64, 231.46]}], [{"a": [522.59, 210.79]}, {"a": [521.41, 211.97]}, {"a": [521.41, 215.51]}, {"a": [522.0, 216.1]}, {"a": [523.77, 216.1]}, {"a": [523.77, 210.79]}], [{"a": [461.17, 211.38]}, {"a": [457.63, 216.1]}, {"a": [457.63, 221.42]}, {"a": [459.99, 226.73]}, {"a": [463.53, 230.28]}, {"a": [467.08, 232.05]}, {"a": [468.26, 233.23]}, {"a": [469.44, 233.23]}, {"a": [471.21, 232.05]}, {"a": [474.16, 232.05]}, {"a": [478.3, 229.1]}, {"a": [479.48, 227.32]}, {"a": [479.48, 225.55]}, {"a": [480.07, 224.96]}, {"a": [480.07, 221.42]}, {"a": [478.3, 217.88]}, {"a": [478.3, 216.7]}, {"a": [472.98, 211.38]}, {"a": [471.8, 211.38]}, {"a": [469.44, 210.2]}, {"a": [463.53, 210.2]}], [{"a": [500.15, 179.49]}, {"a": [498.97, 180.67]}, {"a": [498.97, 182.44]}, {"a": [500.15, 184.81]}, {"a": [501.33, 184.81]}, {"a": [503.69, 183.03]}, {"a": [503.69, 181.85]}, {"a": [501.92, 179.49]}], [{"a": [507.23, 173.59]}, {"a": [507.23, 175.36]}, {"a": [508.42, 175.95]}, {"a": [510.19, 175.95]}, {"a": [510.78, 175.36]}, {"a": [510.78, 174.18]}, {"a": [510.19, 173.59]}], [{"a": [446.41, 152.92]}, {"a": [443.46, 153.51]}, {"a": [435.19, 160.59]}, {"a": [434.6, 161.78]}, {"a": [434.6, 165.32]}, {"a": [435.78, 165.32]}, {"a": [436.37, 164.14]}, {"a": [438.73, 161.78]}, {"a": [439.32, 161.78]}, {"a": [439.91, 160.59]}, {"a": [445.23, 155.28]}, {"a": [445.82, 155.28]}], [{"a": [474.16, 149.37]}, {"a": [469.44, 149.37]}, {"a": [468.85, 150.56]}, {"a": [466.49, 152.33]}, {"a": [464.13, 151.74]}, {"a": [463.53, 150.56]}, {"a": [461.17, 150.56]}, {"a": [461.17, 152.33]}, {"a": [462.35, 154.1]}, {"a": [462.35, 155.28]}, {"a": [461.76, 155.87]}, {"a": [461.76, 161.19]}, {"a": [461.17, 161.78]}, {"a": [461.17, 165.32]}, {"a": [461.76, 165.91]}, {"a": [461.76, 168.27]}, {"a": [462.35, 169.45]}, {"a": [465.31, 168.86]}, {"a": [466.49, 164.73]}, {"a": [470.03, 158.82]}, {"a": [469.44, 156.46]}, {"a": [471.8, 154.1]}, {"a": [475.35, 154.1]}, {"a": [476.53, 152.92]}, {"a": [476.53, 151.15]}], [{"a": [449.36, 108.63]}, {"a": [449.36, 110.4]}, {"a": [450.54, 112.76]}, {"a": [450.54, 116.9]}, {"a": [448.18, 121.62]}, {"a": [447.59, 128.71]}, {"a": [442.87, 133.43]}, {"a": [442.28, 133.43]}, {"a": [442.87, 137.56]}, {"a": [449.95, 145.24]}, {"a": [452.31, 145.24]}, {"a": [452.91, 143.47]}, {"a": [455.86, 140.52]}, {"a": [458.22, 139.34]}, {"a": [461.17, 138.75]}, {"a": [462.35, 139.93]}, {"a": [461.76, 141.11]}, {"a": [460.58, 141.7]}, {"a": [460.58, 147.01]}, {"a": [464.72, 147.01]}, {"a": [466.49, 145.83]}, {"a": [468.26, 145.83]}, {"a": [474.16, 139.34]}, {"a": [475.94, 135.79]}, {"a": [475.94, 128.71]}, {"a": [476.53, 128.12]}, {"a": [477.71, 123.39]}, {"a": [474.75, 118.08]}, {"a": [474.16, 115.12]}, {"a": [471.21, 113.94]}, {"a": [468.26, 110.99]}, {"a": [468.26, 109.81]}, {"a": [467.08, 109.81]}, {"a": [465.31, 111.58]}, {"a": [460.58, 111.58]}, {"a": [454.68, 108.63]}], [{"a": [515.5, 108.63]}, {"a": [506.64, 108.04]}, {"a": [503.69, 110.99]}, {"a": [503.1, 110.99]}, {"a": [500.74, 113.94]}, {"a": [500.74, 115.71]}, {"a": [499.56, 118.08]}, {"a": [500.15, 123.98]}, {"a": [501.92, 126.34]}, {"a": [502.51, 128.12]}, {"a": [507.23, 132.84]}, {"a": [507.82, 135.2]}, {"a": [505.46, 137.56]}, {"a": [504.28, 137.56]}, {"a": [503.69, 138.15]}, {"a": [499.56, 138.15]}, {"a": [497.79, 139.34]}, {"a": [492.47, 145.24]}, {"a": [491.88, 148.78]}, {"a": [491.29, 149.37]}, {"a": [491.29, 154.1]}, {"a": [488.93, 157.64]}, {"a": [488.93, 161.78]}, {"a": [490.11, 164.14]}, {"a": [493.06, 166.5]}, {"a": [497.79, 166.5]}, {"a": [498.38, 167.09]}, {"a": [500.74, 167.09]}, {"a": [503.1, 168.27]}, {"a": [507.23, 168.27]}, {"a": [509.01, 167.09]}, {"a": [511.96, 166.5]}, {"a": [516.68, 159.41]}, {"a": [516.68, 158.23]}, {"a": [517.27, 157.64]}, {"a": [517.27, 150.56]}, {"a": [516.09, 148.19]}, {"a": [516.09, 146.42]}, {"a": [513.73, 143.47]}, {"a": [513.14, 141.7]}, {"a": [515.5, 138.75]}, {"a": [516.09, 136.38]}, {"a": [518.45, 134.02]}, {"a": [523.18, 133.43]}, {"a": [523.18, 132.25]}, {"a": [523.77, 131.66]}, {"a": [523.77, 127.53]}, {"a": [521.41, 124.57]}, {"a": [521.41, 121.62]}, {"a": [523.77, 118.08]}, {"a": [523.77, 113.94]}, {"a": [523.18, 112.76]}, {"a": [520.23, 111.58]}, {"a": [517.27, 109.22]}, {"a": [516.09, 109.22]}], [{"a": [465.9, 96.82]}, {"a": [466.49, 99.77]}, {"a": [467.08, 100.36]}, {"a": [468.26, 100.36]}, {"a": [468.85, 99.77]}, {"a": [468.85, 97.41]}, {"a": [468.26, 96.82]}], [{"a": [426.33, 91.5]}, {"a": [426.92, 93.86]}, {"a": [431.65, 98.0]}, {"a": [433.42, 98.0]}, {"a": [437.55, 93.86]}, {"a": [439.32, 93.86]}, {"a": [439.32, 92.09]}, {"a": [438.14, 91.5]}, {"a": [434.6, 91.5]}, {"a": [434.01, 90.91]}, {"a": [426.92, 90.91]}], [{"a": [515.5, 90.91]}, {"a": [514.91, 91.5]}, {"a": [514.91, 93.27]}, {"a": [516.09, 95.05]}, {"a": [522.59, 100.95]}, {"a": [523.77, 100.95]}, {"a": [523.77, 95.64]}, {"a": [522.59, 93.27]}, {"a": [522.59, 91.5]}, {"a": [521.41, 90.32]}]]}, {"calque": "image:personnages", "calqueNom": "Personnages", "groupe": "", "nom": "slot detoure zone-perso vide", "type": "image", "cle": "personnages", "label": "", "chemins": [[{"a": [0.0, 0.0]}, {"a": [906.25, 0.0]}, {"a": [906.25, 1231.25]}, {"a": [0.0, 1231.25]}]], "detoure": true}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Accroche rouge", "nom": "\u30ef\u30f3\u30e9\u30f3\u30af", "type": "texte", "texte": "\u30ef\u30f3\u30e9\u30f3\u30af", "runs": [{"de": 0, "a": 5, "police": "ZenKakuGothicNew-Black", "taille": 44.54, "approche": -29, "interligne": 49.41, "couleur": [214, 41, 59], "italique": true, "gras": false, "echelleH": 106.99, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 5, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [259.18, 688.2], "angle": -15.8, "encre": [127.27, 39.13], "vertical": false, "boite": null, "contour": {"taille": 4.725, "couleur": [255, 255, 255], "centre": false}, "contourSeul": false}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Accroche rouge", "nom": "\u30a2\u30c3\u30d7\u306e\u30ab\u30fc\u30c9", "type": "texte", "texte": "\u30a2\u30c3\u30d7\u306e\u30ab\u30fc\u30c9", "runs": [{"de": 0, "a": 7, "police": "ZenKakuGothicNew-Black", "taille": 39.15, "approche": -29, "interligne": 38.17, "couleur": [214, 41, 59], "italique": true, "gras": false, "echelleH": 110.59, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 7, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [341.55, 712.84], "angle": -15.8, "encre": [287.27, 35.99], "vertical": false, "boite": null, "contour": {"taille": 4.725, "couleur": [255, 255, 255], "centre": false}, "contourSeul": false}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Accroche rouge", "nom": "\u30b3\u30ec\u30af\u30b7\u30e7\u30f3!!", "type": "texte", "texte": "\u30b3\u30ec\u30af\u30b7\u30e7\u30f3!!", "runs": [{"de": 0, "a": 8, "police": "ZenKakuGothicNew-Black", "taille": 39.19, "approche": -29, "interligne": 38.25, "couleur": [214, 41, 59], "italique": true, "gras": false, "echelleH": 116.39, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 8, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [423.73, 750.53], "angle": -15.8, "encre": [283.54, 33.01], "vertical": false, "boite": null, "contour": {"taille": 4.725, "couleur": [255, 255, 255], "centre": false}, "contourSeul": false}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Encadr\u00e9s", "nom": "Encadr\u00e9s \u2013 forme", "type": "forme", "couleur": [242, 239, 223], "chemins": [[{"a": [605.85, 93.86]}, {"a": [825.53, 93.86]}, {"a": [825.53, 342.48]}, {"a": [605.85, 342.48]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Encadr\u00e9s", "nom": "Encadr\u00e9s \u2013 forme", "type": "forme", "couleur": [242, 239, 223], "chemins": [[{"a": [642.47, 369.64]}, {"a": [786.55, 369.64]}, {"a": [786.55, 855.06]}, {"a": [642.47, 855.06]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Encadr\u00e9s", "nom": "Code-barres EAN-13", "type": "forme", "couleur": [17, 17, 17], "chemins": [[{"a": [680.26, 416.88]}, {"a": [781.83, 416.88]}, {"a": [781.83, 421.43]}, {"a": [680.26, 421.43]}], [{"a": [680.26, 425.99]}, {"a": [781.83, 425.99]}, {"a": [781.83, 430.54]}, {"a": [680.26, 430.54]}], [{"a": [680.26, 444.19]}, {"a": [781.83, 444.19]}, {"a": [781.83, 448.74]}, {"a": [680.26, 448.74]}], [{"a": [680.26, 453.29]}, {"a": [781.83, 453.29]}, {"a": [781.83, 462.39]}, {"a": [680.26, 462.39]}], [{"a": [680.26, 471.49]}, {"a": [781.83, 471.49]}, {"a": [781.83, 476.03]}, {"a": [680.26, 476.03]}], [{"a": [680.26, 489.69]}, {"a": [781.83, 489.69]}, {"a": [781.83, 494.23]}, {"a": [680.26, 494.23]}], [{"a": [680.26, 507.89]}, {"a": [781.83, 507.89]}, {"a": [781.83, 516.99]}, {"a": [680.26, 516.99]}], [{"a": [680.26, 521.54]}, {"a": [781.83, 521.54]}, {"a": [781.83, 526.09]}, {"a": [680.26, 526.09]}], [{"a": [680.26, 530.64]}, {"a": [781.83, 530.64]}, {"a": [781.83, 548.84]}, {"a": [680.26, 548.84]}], [{"a": [680.26, 553.39]}, {"a": [781.83, 553.39]}, {"a": [781.83, 557.94]}, {"a": [680.26, 557.94]}], [{"a": [680.26, 571.59]}, {"a": [781.83, 571.59]}, {"a": [781.83, 576.14]}, {"a": [680.26, 576.14]}], [{"a": [680.26, 585.25]}, {"a": [781.83, 585.25]}, {"a": [781.83, 589.79]}, {"a": [680.26, 589.79]}], [{"a": [680.26, 594.34]}, {"a": [781.83, 594.34]}, {"a": [781.83, 603.45]}, {"a": [680.26, 603.45]}], [{"a": [680.26, 612.54]}, {"a": [781.83, 612.54]}, {"a": [781.83, 621.65]}, {"a": [680.26, 621.65]}], [{"a": [680.26, 626.19]}, {"a": [781.83, 626.19]}, {"a": [781.83, 630.74]}, {"a": [680.26, 630.74]}], [{"a": [680.26, 635.3]}, {"a": [781.83, 635.3]}, {"a": [781.83, 639.85]}, {"a": [680.26, 639.85]}], [{"a": [680.26, 644.39]}, {"a": [781.83, 644.39]}, {"a": [781.83, 658.05]}, {"a": [680.26, 658.05]}], [{"a": [680.26, 667.14]}, {"a": [781.83, 667.14]}, {"a": [781.83, 671.7]}, {"a": [680.26, 671.7]}], [{"a": [680.26, 676.25]}, {"a": [781.83, 676.25]}, {"a": [781.83, 689.9]}, {"a": [680.26, 689.9]}], [{"a": [680.26, 698.99]}, {"a": [781.83, 698.99]}, {"a": [781.83, 703.55]}, {"a": [680.26, 703.55]}], [{"a": [680.26, 708.1]}, {"a": [781.83, 708.1]}, {"a": [781.83, 712.65]}, {"a": [680.26, 712.65]}], [{"a": [680.26, 726.3]}, {"a": [781.83, 726.3]}, {"a": [781.83, 730.85]}, {"a": [680.26, 730.85]}], [{"a": [680.26, 739.95]}, {"a": [781.83, 739.95]}, {"a": [781.83, 749.05]}, {"a": [680.26, 749.05]}], [{"a": [680.26, 758.15]}, {"a": [781.83, 758.15]}, {"a": [781.83, 767.25]}, {"a": [680.26, 767.25]}], [{"a": [680.26, 771.81]}, {"a": [781.83, 771.81]}, {"a": [781.83, 780.9]}, {"a": [680.26, 780.9]}], [{"a": [680.26, 790.01]}, {"a": [781.83, 790.01]}, {"a": [781.83, 799.1]}, {"a": [680.26, 799.1]}], [{"a": [680.26, 803.65]}, {"a": [781.83, 803.65]}, {"a": [781.83, 817.3]}, {"a": [680.26, 817.3]}], [{"a": [680.26, 821.85]}, {"a": [781.83, 821.85]}, {"a": [781.83, 826.41]}, {"a": [680.26, 826.41]}], [{"a": [680.26, 835.5]}, {"a": [781.83, 835.5]}, {"a": [781.83, 840.05]}, {"a": [680.26, 840.05]}], [{"a": [680.26, 844.61]}, {"a": [781.83, 844.61]}, {"a": [781.83, 849.15]}, {"a": [680.26, 849.15]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Encadr\u00e9s", "nom": "Encadr\u00e9s \u2013 forme", "type": "forme", "couleur": [201, 201, 193], "chemins": [[{"a": [588.73, 983.2]}, {"a": [811.36, 983.2]}, {"a": [811.36, 1109.58]}, {"a": [588.73, 1109.58]}]]}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Encadr\u00e9 vertical", "nom": "\u73a9\u5177\u5b89\u5168\u57fa\u6e96\u5408\u683c", "type": "texte", "texte": "\u73a9\u5177\u5b89\u5168\u57fa\u6e96\u5408\u683c", "runs": [{"de": 0, "a": 8, "police": "ZenKakuGothicNew-Bold", "taille": 21.6, "approche": 0, "interligne": 24.69, "couleur": [26, 26, 26], "italique": false, "gras": false, "echelleH": 125.57, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 8, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [802.0, 217.48], "angle": 90.0, "encre": [216.25, 21.92], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Encadr\u00e9 vertical", "nom": "4970381 007119", "type": "texte", "texte": "4970381 007119", "runs": [{"de": 0, "a": 14, "police": "ZenKakuGothicNew-Bold", "taille": 27.86, "approche": 0, "interligne": 41.08, "couleur": [26, 26, 26], "italique": false, "gras": false, "echelleH": 121.91, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 14, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [776.42, 219.37], "angle": 90.0, "encre": [213.34, 20.31], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Encadr\u00e9 vertical", "nom": "\u3233\u65e5\u672c\u73a9\u5177\u5354\u4f1a", "type": "texte", "texte": "\u3233\u65e5\u672c\u73a9\u5177\u5354\u4f1a", "runs": [{"de": 0, "a": 7, "police": "ZenKakuGothicNew-Bold", "taille": 22.22, "approche": 0, "interligne": 26.13, "couleur": [26, 26, 26], "italique": false, "gras": false, "echelleH": 141.63, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 7, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [645.65, 219.98], "angle": 90.0, "encre": [220.41, 20.44], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Encadr\u00e9 vertical", "nom": "\u6771\u4eac\u90fd\u58a8\u7530\u533a\u6771\u99d2\u5f624-22-4", "type": "texte", "texte": "\u6771\u4eac\u90fd\u58a8\u7530\u533a\u6771\u99d2\u5f624-22-4", "runs": [{"de": 0, "a": 15, "police": "ZenKakuGothicNew-Bold", "taille": 19.59, "approche": 0, "interligne": 20.3, "couleur": [26, 26, 26], "italique": false, "gras": false, "echelleH": 98.46, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 15, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [621.0, 220.62], "angle": 90.0, "encre": [225.25, 18.8], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Encadr\u00e9 vertical", "nom": "ST", "type": "texte", "texte": "ST", "runs": [{"de": 0, "a": 2, "police": "ArchivoBlack-Regular", "taille": 88.09, "approche": 0, "interligne": 93.86, "couleur": [17, 17, 17], "italique": false, "gras": false, "echelleH": 93.3, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 2, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [724.71, 216.14], "angle": 90.0, "encre": [114.36, 64.43], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Encadr\u00e9 vertical", "nom": "3", "type": "texte", "texte": "3", "runs": [{"de": 0, "a": 1, "police": "ZenKakuGothicNew-Bold", "taille": 24.24, "approche": 0, "interligne": 31.09, "couleur": [26, 26, 26], "italique": false, "gras": false, "echelleH": 184.1, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 1, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [679.83, 322.84], "angle": 90.0, "encre": [17.42, 17.34], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Code-barres", "nom": "4970381007119", "type": "texte", "texte": "4970381007119", "runs": [{"de": 0, "a": 13, "police": "ZenKakuGothicNew-Medium", "taille": 34.66, "approche": 0, "interligne": 48.42, "couleur": [17, 17, 17], "italique": false, "gras": false, "echelleH": 218.1, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 13, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [661.47, 628.33], "angle": 90.0, "encre": [446.9, 26.59], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Adresse", "nom": "\u767a\u58f2\u5143\u3000\u5929\u7530\u5370\u5237\u52a0\u5de5\u3231", "type": "texte", "texte": "\u767a\u58f2\u5143\u3000\u5929\u7530\u5370\u5237\u52a0\u5de5\u3231", "runs": [{"de": 0, "a": 11, "police": "ZenKakuGothicNew-Bold", "taille": 28.9, "approche": 0, "interligne": 33.66, "couleur": [255, 255, 255], "italique": false, "gras": false, "echelleH": 100.66, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 11, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [268.88, 979.74], "angle": 0.0, "encre": [321.02, 28.28], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Adresse", "nom": "\u57fc\u7389\u770c\u8349\u52a0\u5e02\u7a32\u83771-11-1", "type": "texte", "texte": "\u57fc\u7389\u770c\u8349\u52a0\u5e02\u7a32\u83771-11-1", "runs": [{"de": 0, "a": 14, "police": "ZenKakuGothicNew-Bold", "taille": 27.81, "approche": 0, "interligne": 31.19, "couleur": [255, 255, 255], "italique": false, "gras": false, "echelleH": 108.59, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 14, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [263.77, 1015.77], "angle": 0.0, "encre": [314.6, 26.62], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Adresse", "nom": "TEL 0489-31-2131\u3239", "type": "texte", "texte": "TEL 0489-31-2131\u3239", "runs": [{"de": 0, "a": 17, "police": "ZenKakuGothicNew-Bold", "taille": 29.12, "approche": 0, "interligne": 34.19, "couleur": [255, 255, 255], "italique": false, "gras": false, "echelleH": 101.78, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 17, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [231.99, 1051.32], "angle": 0.0, "encre": [251.42, 28.14], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Adresse", "nom": "1995 MADE IN JAPAN", "type": "texte", "texte": "1995 MADE IN JAPAN", "runs": [{"de": 0, "a": 18, "police": "ZenKakuGothicNew-Bold", "taille": 31.48, "approche": 0, "interligne": 39.94, "couleur": [255, 255, 255], "italique": false, "gras": false, "echelleH": 95.82, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 18, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [247.75, 1089.7], "angle": 0.0, "encre": [283.02, 23.44], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & formes", "groupe": "Sceau", "nom": "2", "type": "texte", "texte": "2", "runs": [{"de": 0, "a": 1, "police": "ZenKakuGothicNew-Black", "taille": 24.24, "approche": 0, "interligne": 33.16, "couleur": [17, 17, 17], "italique": false, "gras": false, "echelleH": 117.42, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 1, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [786.93, 1011.23], "angle": 0.0, "encre": [12.92, 17.29], "vertical": false, "boite": null}, {"calque": "image:sceau", "calqueNom": "Sceau", "groupe": "", "nom": "slot detoure zone-sceau vide", "type": "image", "cle": "sceau", "label": "", "chemins": [[{"a": [593.46, 987.94]}, {"a": [805.96, 987.94]}, {"a": [805.96, 1103.56]}, {"a": [593.46, 1103.56]}]], "detoure": true}]};
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
