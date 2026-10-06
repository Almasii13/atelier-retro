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
  var SCENE = {"titre": "Sachet HERO COLLECTION \u2014 en-t\u00eate avant", "fichier": "entete_avant", "largeur": 906, "hauteur": 313, "reperes": {"coupe": [35.43307086614173, 870.4724409448819, 35.43307086614173, 277.5590551181102], "secu": [53.1496062992126, 852.7559055118111, 53.1496062992126, 259.8425196850394]}, "plis": [], "polices": ["ArchivoBlack-Regular", "DelaGothicOne-Regular", "RoundedMplus1c-ExtraBold", "ZenKakuGothicNew-Black"], "items": [{"calque": "fond", "calqueNom": "Fond noir", "groupe": "", "nom": "fond noir", "type": "forme", "couleur": [11, 10, 12], "chemins": [[{"a": [0.0, 0.0]}, {"a": [906.25, 0.0]}, {"a": [906.25, 312.5]}, {"a": [0.0, 312.5]}]]}, {"calque": "zone:trou", "calqueNom": "Rep\u00e8re trou de suspension", "groupe": "", "nom": "zone-reservee trou", "type": "zone", "cle": "trou", "label": "TROU", "chemins": [[{"a": [407.37, 95.65]}, {"a": [501.12, 95.65]}, {"a": [501.12, 192.53]}, {"a": [407.37, 192.53]}]], "detoure": false}, {"calque": "texte", "calqueNom": "Logo & textes", "groupe": "Logo de s\u00e9rie", "nom": "Logo de s\u00e9rie \u2013 cercle", "type": "forme", "couleur": [26, 26, 26], "chemins": [[{"a": [321.86, 139.79]}, {"a": [321.74, 142.53]}, {"a": [321.39, 145.27]}, {"a": [320.81, 147.99]}, {"a": [319.99, 150.7]}, {"a": [318.94, 153.39]}, {"a": [317.67, 156.05]}, {"a": [316.16, 158.68]}, {"a": [314.44, 161.28]}, {"a": [312.49, 163.83]}, {"a": [310.33, 166.34]}, {"a": [307.96, 168.8]}, {"a": [305.37, 171.2]}, {"a": [302.59, 173.54]}, {"a": [299.61, 175.82]}, {"a": [296.43, 178.03]}, {"a": [293.07, 180.17]}, {"a": [289.53, 182.23]}, {"a": [285.82, 184.21]}, {"a": [281.94, 186.11]}, {"a": [277.91, 187.91]}, {"a": [273.72, 189.63]}, {"a": [269.39, 191.25]}, {"a": [264.93, 192.77]}, {"a": [260.34, 194.19]}, {"a": [255.63, 195.51]}, {"a": [250.82, 196.73]}, {"a": [245.9, 197.83]}, {"a": [240.9, 198.82]}, {"a": [235.82, 199.7]}, {"a": [230.66, 200.47]}, {"a": [225.45, 201.12]}, {"a": [220.18, 201.66]}, {"a": [214.88, 202.07]}, {"a": [209.54, 202.37]}, {"a": [204.18, 202.55]}, {"a": [198.82, 202.61]}, {"a": [193.45, 202.55]}, {"a": [188.09, 202.37]}, {"a": [182.76, 202.07]}, {"a": [177.45, 201.66]}, {"a": [172.18, 201.12]}, {"a": [166.97, 200.47]}, {"a": [161.82, 199.7]}, {"a": [156.73, 198.82]}, {"a": [151.73, 197.83]}, {"a": [146.82, 196.73]}, {"a": [142.0, 195.51]}, {"a": [137.29, 194.19]}, {"a": [132.7, 192.77]}, {"a": [128.24, 191.25]}, {"a": [123.91, 189.63]}, {"a": [119.73, 187.91]}, {"a": [115.69, 186.11]}, {"a": [111.81, 184.21]}, {"a": [108.1, 182.23]}, {"a": [104.56, 180.17]}, {"a": [101.2, 178.03]}, {"a": [98.02, 175.82]}, {"a": [95.04, 173.54]}, {"a": [92.26, 171.2]}, {"a": [89.68, 168.8]}, {"a": [87.3, 166.34]}, {"a": [85.14, 163.83]}, {"a": [83.19, 161.28]}, {"a": [81.47, 158.68]}, {"a": [79.97, 156.05]}, {"a": [78.69, 153.39]}, {"a": [77.64, 150.7]}, {"a": [76.83, 147.99]}, {"a": [76.24, 145.27]}, {"a": [75.89, 142.53]}, {"a": [75.77, 139.79]}, {"a": [75.89, 137.05]}, {"a": [76.24, 134.32]}, {"a": [76.83, 131.59]}, {"a": [77.64, 128.88]}, {"a": [78.69, 126.19]}, {"a": [79.97, 123.53]}, {"a": [81.47, 120.9]}, {"a": [83.19, 118.3]}, {"a": [85.14, 115.75]}, {"a": [87.3, 113.24]}, {"a": [89.68, 110.78]}, {"a": [92.26, 108.38]}, {"a": [95.04, 106.04]}, {"a": [98.02, 103.76]}, {"a": [101.2, 101.55]}, {"a": [104.56, 99.41]}, {"a": [108.1, 97.35]}, {"a": [111.81, 95.37]}, {"a": [115.69, 93.47]}, {"a": [119.73, 91.67]}, {"a": [123.91, 89.95]}, {"a": [128.24, 88.33]}, {"a": [132.7, 86.81]}, {"a": [137.29, 85.39]}, {"a": [142.0, 84.07]}, {"a": [146.82, 82.86]}, {"a": [151.73, 81.75]}, {"a": [156.73, 80.76]}, {"a": [161.82, 79.88]}, {"a": [166.97, 79.11]}, {"a": [172.18, 78.46]}, {"a": [177.45, 77.92]}, {"a": [182.76, 77.51]}, {"a": [188.09, 77.21]}, {"a": [193.45, 77.03]}, {"a": [198.82, 76.97]}, {"a": [204.18, 77.03]}, {"a": [209.54, 77.21]}, {"a": [214.88, 77.51]}, {"a": [220.18, 77.92]}, {"a": [225.45, 78.46]}, {"a": [230.66, 79.11]}, {"a": [235.82, 79.88]}, {"a": [240.9, 80.76]}, {"a": [245.9, 81.75]}, {"a": [250.82, 82.86]}, {"a": [255.63, 84.07]}, {"a": [260.34, 85.39]}, {"a": [264.93, 86.81]}, {"a": [269.39, 88.33]}, {"a": [273.72, 89.95]}, {"a": [277.91, 91.67]}, {"a": [281.94, 93.47]}, {"a": [285.82, 95.37]}, {"a": [289.53, 97.35]}, {"a": [293.07, 99.41]}, {"a": [296.43, 101.55]}, {"a": [299.61, 103.76]}, {"a": [302.59, 106.04]}, {"a": [305.37, 108.38]}, {"a": [307.96, 110.78]}, {"a": [310.33, 113.24]}, {"a": [312.49, 115.75]}, {"a": [314.44, 118.3]}, {"a": [316.16, 120.9]}, {"a": [317.67, 123.53]}, {"a": [318.94, 126.19]}, {"a": [319.99, 128.88]}, {"a": [320.81, 131.59]}, {"a": [321.39, 134.32]}, {"a": [321.74, 137.05]}]]}, {"calque": "texte", "calqueNom": "Logo & textes", "groupe": "Logo de s\u00e9rie", "nom": "Logo de s\u00e9rie \u2013 cercle", "type": "forme", "couleur": [244, 207, 51], "chemins": [[{"a": [319.85, 139.79]}, {"a": [319.74, 142.44]}, {"a": [319.39, 145.09]}, {"a": [318.82, 147.73]}, {"a": [318.01, 150.35]}, {"a": [316.98, 152.95]}, {"a": [315.73, 155.53]}, {"a": [314.25, 158.08]}, {"a": [312.55, 160.59]}, {"a": [310.64, 163.06]}, {"a": [308.51, 165.49]}, {"a": [306.18, 167.87]}, {"a": [303.64, 170.2]}, {"a": [300.9, 172.47]}, {"a": [297.96, 174.67]}, {"a": [294.84, 176.81]}, {"a": [291.53, 178.88]}, {"a": [288.05, 180.88]}, {"a": [284.4, 182.79]}, {"a": [280.59, 184.63]}, {"a": [276.62, 186.38]}, {"a": [272.5, 188.04]}, {"a": [268.24, 189.61]}, {"a": [263.85, 191.08]}, {"a": [259.33, 192.46]}, {"a": [254.7, 193.73]}, {"a": [249.97, 194.91]}, {"a": [245.13, 195.97]}, {"a": [240.21, 196.94]}, {"a": [235.21, 197.79]}, {"a": [230.14, 198.53]}, {"a": [225.01, 199.16]}, {"a": [219.83, 199.68]}, {"a": [214.61, 200.08]}, {"a": [209.36, 200.37]}, {"a": [204.1, 200.55]}, {"a": [198.82, 200.6]}, {"a": [193.54, 200.55]}, {"a": [188.27, 200.37]}, {"a": [183.02, 200.08]}, {"a": [177.8, 199.68]}, {"a": [172.62, 199.16]}, {"a": [167.49, 198.53]}, {"a": [162.42, 197.79]}, {"a": [157.42, 196.94]}, {"a": [152.5, 195.97]}, {"a": [147.66, 194.91]}, {"a": [142.93, 193.73]}, {"a": [138.3, 192.46]}, {"a": [133.78, 191.08]}, {"a": [129.39, 189.61]}, {"a": [125.13, 188.04]}, {"a": [121.02, 186.38]}, {"a": [117.05, 184.63]}, {"a": [113.23, 182.79]}, {"a": [109.58, 180.88]}, {"a": [106.1, 178.88]}, {"a": [102.79, 176.81]}, {"a": [99.67, 174.67]}, {"a": [96.74, 172.47]}, {"a": [94.0, 170.2]}, {"a": [91.46, 167.87]}, {"a": [89.12, 165.49]}, {"a": [86.99, 163.06]}, {"a": [85.08, 160.59]}, {"a": [83.38, 158.08]}, {"a": [81.9, 155.53]}, {"a": [80.65, 152.95]}, {"a": [79.62, 150.35]}, {"a": [78.82, 147.73]}, {"a": [78.24, 145.09]}, {"a": [77.9, 142.44]}, {"a": [77.78, 139.79]}, {"a": [77.9, 137.14]}, {"a": [78.24, 134.49]}, {"a": [78.82, 131.85]}, {"a": [79.62, 129.23]}, {"a": [80.65, 126.63]}, {"a": [81.9, 124.05]}, {"a": [83.38, 121.5]}, {"a": [85.08, 118.99]}, {"a": [86.99, 116.52]}, {"a": [89.12, 114.09]}, {"a": [91.46, 111.71]}, {"a": [94.0, 109.38]}, {"a": [96.74, 107.12]}, {"a": [99.67, 104.91]}, {"a": [102.79, 102.77]}, {"a": [106.1, 100.7]}, {"a": [109.58, 98.71]}, {"a": [113.23, 96.79]}, {"a": [117.05, 94.95]}, {"a": [121.02, 93.21]}, {"a": [125.13, 91.54]}, {"a": [129.39, 89.98]}, {"a": [133.78, 88.5]}, {"a": [138.3, 87.12]}, {"a": [142.93, 85.85]}, {"a": [147.66, 84.68]}, {"a": [152.5, 83.61]}, {"a": [157.42, 82.64]}, {"a": [162.42, 81.79]}, {"a": [167.49, 81.05]}, {"a": [172.62, 80.42]}, {"a": [177.8, 79.9]}, {"a": [183.02, 79.5]}, {"a": [188.27, 79.21]}, {"a": [193.54, 79.04]}, {"a": [198.82, 78.98]}, {"a": [204.1, 79.04]}, {"a": [209.36, 79.21]}, {"a": [214.61, 79.5]}, {"a": [219.83, 79.9]}, {"a": [225.01, 80.42]}, {"a": [230.14, 81.05]}, {"a": [235.21, 81.79]}, {"a": [240.21, 82.64]}, {"a": [245.13, 83.61]}, {"a": [249.97, 84.68]}, {"a": [254.7, 85.85]}, {"a": [259.33, 87.12]}, {"a": [263.85, 88.5]}, {"a": [268.24, 89.98]}, {"a": [272.5, 91.54]}, {"a": [276.62, 93.21]}, {"a": [280.59, 94.95]}, {"a": [284.4, 96.79]}, {"a": [288.05, 98.71]}, {"a": [291.53, 100.7]}, {"a": [294.84, 102.77]}, {"a": [297.96, 104.91]}, {"a": [300.9, 107.12]}, {"a": [303.64, 109.38]}, {"a": [306.18, 111.71]}, {"a": [308.51, 114.09]}, {"a": [310.64, 116.52]}, {"a": [312.55, 118.99]}, {"a": [314.25, 121.5]}, {"a": [315.73, 124.05]}, {"a": [316.98, 126.63]}, {"a": [318.01, 129.23]}, {"a": [318.82, 131.85]}, {"a": [319.39, 134.49]}, {"a": [319.74, 137.14]}]]}, {"calque": "texte", "calqueNom": "Logo & textes", "groupe": "Logo de s\u00e9rie", "nom": "Logo de s\u00e9rie \u2013 cercle", "type": "forme", "couleur": [225, 57, 43], "chemins": [[{"a": [314.77, 139.79]}, {"a": [314.66, 142.23]}, {"a": [314.33, 144.67]}, {"a": [313.78, 147.1]}, {"a": [313.01, 149.51]}, {"a": [312.02, 151.9]}, {"a": [310.82, 154.28]}, {"a": [309.41, 156.62]}, {"a": [307.78, 158.93]}, {"a": [305.95, 161.21]}, {"a": [303.91, 163.45]}, {"a": [301.67, 165.64]}, {"a": [299.24, 167.78]}, {"a": [296.61, 169.86]}, {"a": [293.8, 171.89]}, {"a": [290.81, 173.86]}, {"a": [287.64, 175.77]}, {"a": [284.31, 177.6]}, {"a": [280.81, 179.37]}, {"a": [277.16, 181.06]}, {"a": [273.35, 182.67]}, {"a": [269.41, 184.2]}, {"a": [265.33, 185.64]}, {"a": [261.12, 187.0]}, {"a": [256.79, 188.26]}, {"a": [252.36, 189.44]}, {"a": [247.82, 190.52]}, {"a": [243.19, 191.5]}, {"a": [238.48, 192.39]}, {"a": [233.68, 193.17]}, {"a": [228.83, 193.85]}, {"a": [223.91, 194.44]}, {"a": [218.95, 194.91]}, {"a": [213.95, 195.28]}, {"a": [208.92, 195.55]}, {"a": [203.87, 195.71]}, {"a": [198.82, 195.76]}, {"a": [193.76, 195.71]}, {"a": [188.71, 195.55]}, {"a": [183.68, 195.28]}, {"a": [178.68, 194.91]}, {"a": [173.72, 194.44]}, {"a": [168.8, 193.85]}, {"a": [163.95, 193.17]}, {"a": [159.16, 192.39]}, {"a": [154.44, 191.5]}, {"a": [149.81, 190.52]}, {"a": [145.27, 189.44]}, {"a": [140.84, 188.26]}, {"a": [136.51, 187.0]}, {"a": [132.3, 185.64]}, {"a": [128.22, 184.2]}, {"a": [124.28, 182.67]}, {"a": [120.48, 181.06]}, {"a": [116.82, 179.37]}, {"a": [113.32, 177.6]}, {"a": [109.99, 175.77]}, {"a": [106.82, 173.86]}, {"a": [103.83, 171.89]}, {"a": [101.02, 169.86]}, {"a": [98.39, 167.78]}, {"a": [95.96, 165.64]}, {"a": [93.72, 163.45]}, {"a": [91.68, 161.21]}, {"a": [89.85, 158.93]}, {"a": [88.22, 156.62]}, {"a": [86.81, 154.28]}, {"a": [85.61, 151.9]}, {"a": [84.62, 149.51]}, {"a": [83.85, 147.1]}, {"a": [83.3, 144.67]}, {"a": [82.97, 142.23]}, {"a": [82.86, 139.79]}, {"a": [82.97, 137.35]}, {"a": [83.3, 134.91]}, {"a": [83.85, 132.48]}, {"a": [84.62, 130.07]}, {"a": [85.61, 127.68]}, {"a": [86.81, 125.3]}, {"a": [88.22, 122.96]}, {"a": [89.85, 120.65]}, {"a": [91.68, 118.37]}, {"a": [93.72, 116.14]}, {"a": [95.96, 113.95]}, {"a": [98.39, 111.8]}, {"a": [101.02, 109.72]}, {"a": [103.83, 107.69]}, {"a": [106.82, 105.72]}, {"a": [109.99, 103.81]}, {"a": [113.32, 101.98]}, {"a": [116.82, 100.21]}, {"a": [120.48, 98.52]}, {"a": [124.28, 96.91]}, {"a": [128.22, 95.39]}, {"a": [132.3, 93.94]}, {"a": [136.51, 92.58]}, {"a": [140.84, 91.32]}, {"a": [145.27, 90.14]}, {"a": [149.81, 89.06]}, {"a": [154.44, 88.08]}, {"a": [159.16, 87.19]}, {"a": [163.95, 86.41]}, {"a": [168.8, 85.73]}, {"a": [173.72, 85.15]}, {"a": [178.68, 84.67]}, {"a": [183.68, 84.3]}, {"a": [188.71, 84.03]}, {"a": [193.76, 83.87]}, {"a": [198.82, 83.82]}, {"a": [203.87, 83.87]}, {"a": [208.92, 84.03]}, {"a": [213.95, 84.3]}, {"a": [218.95, 84.67]}, {"a": [223.91, 85.15]}, {"a": [228.83, 85.73]}, {"a": [233.68, 86.41]}, {"a": [238.48, 87.19]}, {"a": [243.19, 88.08]}, {"a": [247.82, 89.06]}, {"a": [252.36, 90.14]}, {"a": [256.79, 91.32]}, {"a": [261.12, 92.58]}, {"a": [265.33, 93.94]}, {"a": [269.41, 95.39]}, {"a": [273.35, 96.91]}, {"a": [277.16, 98.52]}, {"a": [280.81, 100.21]}, {"a": [284.31, 101.98]}, {"a": [287.64, 103.81]}, {"a": [290.81, 105.72]}, {"a": [293.8, 107.69]}, {"a": [296.61, 109.72]}, {"a": [299.24, 111.8]}, {"a": [301.67, 113.95]}, {"a": [303.91, 116.14]}, {"a": [305.95, 118.37]}, {"a": [307.78, 120.65]}, {"a": [309.41, 122.96]}, {"a": [310.82, 125.3]}, {"a": [312.02, 127.68]}, {"a": [313.01, 130.07]}, {"a": [313.78, 132.48]}, {"a": [314.33, 134.91]}, {"a": [314.66, 137.35]}]]}, {"calque": "texte", "calqueNom": "Logo & textes", "groupe": "Logo de s\u00e9rie", "nom": "\u7b2c3\u5f3e", "type": "texte", "texte": "\u7b2c3\u5f3e", "runs": [{"de": 0, "a": 1, "police": "ZenKakuGothicNew-Black", "taille": 22.44, "approche": 26, "interligne": 22.44, "couleur": [20, 20, 20], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}, {"de": 1, "a": 2, "police": "ArchivoBlack-Regular", "taille": 28.94, "approche": 20, "interligne": 28.94, "couleur": [196, 36, 28], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}, {"de": 2, "a": 3, "police": "ZenKakuGothicNew-Black", "taille": 22.44, "approche": 26, "interligne": 22.44, "couleur": [20, 20, 20], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 3, "align": "center", "retrait1": 0.0, "retraitG": 0.0}], "centre": [201.66, 94.34], "angle": 0.0, "encre": [67.63, 22.02], "vertical": false, "boite": null, "contour": {"taille": 0.71, "couleur": [20, 20, 20], "centre": false}, "contourSeul": false}, {"calque": "texte", "calqueNom": "Logo & textes", "groupe": "Logo de s\u00e9rie", "nom": "\u30d2\u30fb\u30ed\u30fb\u30b3\u30ec\u30af\u30b7\u30e7\u30f3", "type": "texte", "texte": "\u30d2\u30fb\u30ed\u30fb\u30b3\u30ec\u30af\u30b7\u30e7\u30f3", "runs": [{"de": 0, "a": 10, "police": "DelaGothicOne-Regular", "taille": 50.79, "approche": -58, "interligne": 50.79, "couleur": [42, 42, 42], "italique": false, "gras": false, "echelleH": 63.64, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 10, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [206.18, 150.13], "angle": 0.0, "encre": [263.84, 39.26], "vertical": false, "boite": null, "contour": {"taille": 1.3, "couleur": [42, 42, 42], "centre": false}, "contourSeul": false}, {"calque": "texte", "calqueNom": "Logo & textes", "groupe": "Logo de s\u00e9rie", "nom": "\u30d2\u30fb\u30ed\u30fb\u30b3\u30ec\u30af\u30b7\u30e7\u30f3", "type": "texte", "texte": "\u30d2\u30fb\u30ed\u30fb\u30b3\u30ec\u30af\u30b7\u30e7\u30f3", "runs": [{"de": 0, "a": 10, "police": "DelaGothicOne-Regular", "taille": 50.79, "approche": -58, "interligne": 50.79, "couleur": [180, 176, 167], "italique": false, "gras": false, "echelleH": 63.64, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 10, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [202.87, 146.83], "angle": 0.0, "encre": [263.84, 39.26], "vertical": false, "boite": null, "contour": {"taille": 1.3, "couleur": [28, 28, 28], "centre": false}, "contourSeul": false}, {"calque": "texte", "calqueNom": "Logo & textes", "groupe": "Logo de s\u00e9rie", "nom": "HERO COLLECTION", "type": "texte", "texte": "HERO COLLECTION", "runs": [{"de": 0, "a": 15, "police": "ArchivoBlack-Regular", "taille": 13.58, "approche": 17, "interligne": 13.58, "couleur": [20, 20, 20], "italique": false, "gras": false, "echelleH": 87.23, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 15, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [191.75, 192.77], "angle": 0.0, "encre": [128.12, 9.38], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Logo & textes", "groupe": "Slogan", "nom": "\u30ef\u30f3\u30e9\u30f3\u30af \u30a2\u30c3\u30d7\u306e\u30ab\u30fc\u30c9 \u30b3\u30ec\u30af\u30b7\u30e7\u30f3!!", "type": "texte", "texte": "\u30ef\u30f3\u30e9\u30f3\u30af\r\u30a2\u30c3\u30d7\u306e\u30ab\u30fc\u30c9\r\u30b3\u30ec\u30af\u30b7\u30e7\u30f3!!", "runs": [{"de": 0, "a": 6, "police": "RoundedMplus1c-ExtraBold", "taille": 36.02, "approche": -39, "interligne": 37.44, "couleur": [243, 236, 74], "italique": true, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}, {"de": 6, "a": 14, "police": "RoundedMplus1c-ExtraBold", "taille": 36.02, "approche": -39, "interligne": 37.44, "couleur": [243, 236, 74], "italique": true, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}, {"de": 14, "a": 22, "police": "RoundedMplus1c-ExtraBold", "taille": 36.02, "approche": -39, "interligne": 37.44, "couleur": [243, 236, 74], "italique": true, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 6, "align": "left", "retrait1": 0.0, "retraitG": 0.0}, {"de": 6, "a": 14, "align": "left", "retrait1": 0.0, "retraitG": 0.0}, {"de": 14, "a": 22, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [699.67, 140.19], "angle": 0.0, "encre": [236.59, 104.98], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Logo & textes", "groupe": "Mention cadeau", "nom": "\u30d7\u30ec\u30bc\u30f3\u30c8\u30ab\u30fc\u30c9\u304c\u51fa\u305f\u3089\u7279\u88fd\u30a2\u30eb\u30d0\u30e0\u304c\u3082\u3089\u3048\u308b\u3088\uff01", "type": "texte", "texte": "\u30d7\u30ec\u30bc\u30f3\u30c8\u30ab\u30fc\u30c9\u304c\u51fa\u305f\u3089\u7279\u88fd\u30a2\u30eb\u30d0\u30e0\u304c\u3082\u3089\u3048\u308b\u3088\uff01", "runs": [{"de": 0, "a": 25, "police": "ZenKakuGothicNew-Black", "taille": 27.76, "approche": -21, "interligne": 27.76, "couleur": [255, 255, 255], "italique": false, "gras": false, "echelleH": 100.92, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 25, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [437.34, 230.91], "angle": 0.0, "encre": [674.03, 26.65], "vertical": false, "boite": null}]};
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
