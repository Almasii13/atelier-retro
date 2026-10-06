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
  var SCENE = {"titre": "Sachet HERO COLLECTION \u2014 en-t\u00eate arri\u00e8re", "fichier": "entete_arriere", "largeur": 906, "hauteur": 313, "reperes": {"coupe": [35.43307086614173, 870.4724409448819, 35.43307086614173, 277.5590551181102], "secu": [53.1496062992126, 852.7559055118111, 53.1496062992126, 259.8425196850394]}, "plis": [], "polices": ["ArchivoBlack-Regular", "DelaGothicOne-Regular", "ZenKakuGothicNew-Black", "ZenKakuGothicNew-Medium"], "items": [{"calque": "fond", "calqueNom": "Fond noir", "groupe": "", "nom": "fond noir", "type": "forme", "couleur": [11, 10, 12], "chemins": [[{"a": [0.0, 0.0]}, {"a": [906.25, 0.0]}, {"a": [906.25, 312.5]}, {"a": [0.0, 312.5]}]]}, {"calque": "zone:trou", "calqueNom": "Rep\u00e8re trou de suspension", "groupe": "", "nom": "zone-reservee trou", "type": "zone", "cle": "trou", "label": "TROU", "chemins": [[{"a": [403.86, 95.02]}, {"a": [503.86, 95.02]}, {"a": [503.86, 188.77]}, {"a": [403.86, 188.77]}]], "detoure": false}, {"calque": "texte", "calqueNom": "Logo & textes", "groupe": "Logo de s\u00e9rie", "nom": "Logo de s\u00e9rie \u2013 cercle", "type": "forme", "couleur": [26, 26, 26], "chemins": [[{"a": [328.57, 146.7]}, {"a": [328.45, 149.53]}, {"a": [328.09, 152.35]}, {"a": [327.48, 155.17]}, {"a": [326.64, 157.96]}, {"a": [325.56, 160.74]}, {"a": [324.24, 163.49]}, {"a": [322.69, 166.21]}, {"a": [320.91, 168.89]}, {"a": [318.9, 171.52]}, {"a": [316.67, 174.11]}, {"a": [314.22, 176.65]}, {"a": [311.55, 179.13]}, {"a": [308.67, 181.55]}, {"a": [305.59, 183.91]}, {"a": [302.32, 186.19]}, {"a": [298.85, 188.4]}, {"a": [295.19, 190.52]}, {"a": [291.36, 192.57]}, {"a": [287.35, 194.52]}, {"a": [283.19, 196.39]}, {"a": [278.86, 198.16]}, {"a": [274.39, 199.84]}, {"a": [269.78, 201.41]}, {"a": [265.05, 202.88]}, {"a": [260.19, 204.24]}, {"a": [255.21, 205.49]}, {"a": [250.14, 206.63]}, {"a": [244.97, 207.65]}, {"a": [239.73, 208.56]}, {"a": [234.4, 209.36]}, {"a": [229.02, 210.03]}, {"a": [223.58, 210.58]}, {"a": [218.1, 211.01]}, {"a": [212.59, 211.32]}, {"a": [207.06, 211.5]}, {"a": [201.52, 211.57]}, {"a": [195.98, 211.5]}, {"a": [190.45, 211.32]}, {"a": [184.94, 211.01]}, {"a": [179.46, 210.58]}, {"a": [174.02, 210.03]}, {"a": [168.64, 209.36]}, {"a": [163.32, 208.56]}, {"a": [158.07, 207.65]}, {"a": [152.9, 206.63]}, {"a": [147.83, 205.49]}, {"a": [142.86, 204.24]}, {"a": [138.0, 202.88]}, {"a": [133.26, 201.41]}, {"a": [128.65, 199.84]}, {"a": [124.18, 198.16]}, {"a": [119.86, 196.39]}, {"a": [115.69, 194.52]}, {"a": [111.68, 192.57]}, {"a": [107.85, 190.52]}, {"a": [104.2, 188.4]}, {"a": [100.73, 186.19]}, {"a": [97.45, 183.91]}, {"a": [94.37, 181.55]}, {"a": [91.49, 179.13]}, {"a": [88.83, 176.65]}, {"a": [86.38, 174.11]}, {"a": [84.14, 171.52]}, {"a": [82.13, 168.89]}, {"a": [80.35, 166.21]}, {"a": [78.8, 163.49]}, {"a": [77.48, 160.74]}, {"a": [76.4, 157.96]}, {"a": [75.56, 155.17]}, {"a": [74.96, 152.35]}, {"a": [74.59, 149.53]}, {"a": [74.47, 146.7]}, {"a": [74.59, 143.87]}, {"a": [74.96, 141.05]}, {"a": [75.56, 138.23]}, {"a": [76.4, 135.44]}, {"a": [77.48, 132.66]}, {"a": [78.8, 129.91]}, {"a": [80.35, 127.2]}, {"a": [82.13, 124.52]}, {"a": [84.14, 121.88]}, {"a": [86.38, 119.29]}, {"a": [88.83, 116.75]}, {"a": [91.49, 114.27]}, {"a": [94.37, 111.85]}, {"a": [97.45, 109.5]}, {"a": [100.73, 107.21]}, {"a": [104.2, 105.01]}, {"a": [107.85, 102.88]}, {"a": [111.68, 100.83]}, {"a": [115.69, 98.88]}, {"a": [119.86, 97.01]}, {"a": [124.18, 95.24]}, {"a": [128.65, 93.57]}, {"a": [133.26, 91.99]}, {"a": [138.0, 90.53]}, {"a": [142.86, 89.16]}, {"a": [147.83, 87.91]}, {"a": [152.9, 86.77]}, {"a": [158.07, 85.75]}, {"a": [163.32, 84.84]}, {"a": [168.64, 84.05]}, {"a": [174.02, 83.37]}, {"a": [179.46, 82.82]}, {"a": [184.94, 82.39]}, {"a": [190.45, 82.08]}, {"a": [195.98, 81.9]}, {"a": [201.52, 81.83]}, {"a": [207.06, 81.9]}, {"a": [212.59, 82.08]}, {"a": [218.1, 82.39]}, {"a": [223.58, 82.82]}, {"a": [229.02, 83.37]}, {"a": [234.4, 84.05]}, {"a": [239.73, 84.84]}, {"a": [244.97, 85.75]}, {"a": [250.14, 86.77]}, {"a": [255.21, 87.91]}, {"a": [260.19, 89.16]}, {"a": [265.05, 90.53]}, {"a": [269.78, 91.99]}, {"a": [274.39, 93.57]}, {"a": [278.86, 95.24]}, {"a": [283.19, 97.01]}, {"a": [287.35, 98.88]}, {"a": [291.36, 100.83]}, {"a": [295.19, 102.88]}, {"a": [298.85, 105.01]}, {"a": [302.32, 107.21]}, {"a": [305.59, 109.5]}, {"a": [308.67, 111.85]}, {"a": [311.55, 114.27]}, {"a": [314.22, 116.75]}, {"a": [316.67, 119.29]}, {"a": [318.9, 121.88]}, {"a": [320.91, 124.52]}, {"a": [322.69, 127.2]}, {"a": [324.24, 129.91]}, {"a": [325.56, 132.66]}, {"a": [326.64, 135.44]}, {"a": [327.48, 138.23]}, {"a": [328.09, 141.05]}, {"a": [328.45, 143.87]}]]}, {"calque": "texte", "calqueNom": "Logo & textes", "groupe": "Logo de s\u00e9rie", "nom": "Logo de s\u00e9rie \u2013 cercle", "type": "forme", "couleur": [244, 207, 51], "chemins": [[{"a": [326.5, 146.7]}, {"a": [326.38, 149.44]}, {"a": [326.02, 152.17]}, {"a": [325.43, 154.9]}, {"a": [324.6, 157.6]}, {"a": [323.54, 160.29]}, {"a": [322.24, 162.95]}, {"a": [320.71, 165.58]}, {"a": [318.96, 168.18]}, {"a": [316.98, 170.73]}, {"a": [314.79, 173.24]}, {"a": [312.38, 175.7]}, {"a": [309.75, 178.1]}, {"a": [306.93, 180.44]}, {"a": [303.9, 182.72]}, {"a": [300.67, 184.93]}, {"a": [297.26, 187.06]}, {"a": [293.66, 189.12]}, {"a": [289.89, 191.1]}, {"a": [285.95, 193.0]}, {"a": [281.85, 194.8]}, {"a": [277.6, 196.52]}, {"a": [273.2, 198.14]}, {"a": [268.67, 199.66]}, {"a": [264.01, 201.08]}, {"a": [259.23, 202.4]}, {"a": [254.34, 203.61]}, {"a": [249.35, 204.71]}, {"a": [244.27, 205.71]}, {"a": [239.1, 206.59]}, {"a": [233.87, 207.35]}, {"a": [228.57, 208.0]}, {"a": [223.22, 208.54]}, {"a": [217.83, 208.96]}, {"a": [212.41, 209.25]}, {"a": [206.97, 209.43]}, {"a": [201.52, 209.49]}, {"a": [196.07, 209.43]}, {"a": [190.63, 209.25]}, {"a": [185.21, 208.96]}, {"a": [179.82, 208.54]}, {"a": [174.47, 208.0]}, {"a": [169.18, 207.35]}, {"a": [163.94, 206.59]}, {"a": [158.78, 205.71]}, {"a": [153.7, 204.71]}, {"a": [148.7, 203.61]}, {"a": [143.81, 202.4]}, {"a": [139.03, 201.08]}, {"a": [134.37, 199.66]}, {"a": [129.84, 198.14]}, {"a": [125.44, 196.52]}, {"a": [121.19, 194.8]}, {"a": [117.09, 193.0]}, {"a": [113.15, 191.1]}, {"a": [109.38, 189.12]}, {"a": [105.78, 187.06]}, {"a": [102.37, 184.93]}, {"a": [99.15, 182.72]}, {"a": [96.12, 180.44]}, {"a": [93.29, 178.1]}, {"a": [90.67, 175.7]}, {"a": [88.25, 173.24]}, {"a": [86.06, 170.73]}, {"a": [84.08, 168.18]}, {"a": [82.33, 165.58]}, {"a": [80.8, 162.95]}, {"a": [79.51, 160.29]}, {"a": [78.44, 157.6]}, {"a": [77.61, 154.9]}, {"a": [77.02, 152.17]}, {"a": [76.66, 149.44]}, {"a": [76.55, 146.7]}, {"a": [76.66, 143.96]}, {"a": [77.02, 141.23]}, {"a": [77.61, 138.5]}, {"a": [78.44, 135.8]}, {"a": [79.51, 133.11]}, {"a": [80.8, 130.45]}, {"a": [82.33, 127.82]}, {"a": [84.08, 125.22]}, {"a": [86.06, 122.67]}, {"a": [88.25, 120.16]}, {"a": [90.67, 117.71]}, {"a": [93.29, 115.3]}, {"a": [96.12, 112.96]}, {"a": [99.15, 110.68]}, {"a": [102.37, 108.47]}, {"a": [105.78, 106.34]}, {"a": [109.38, 104.28]}, {"a": [113.15, 102.3]}, {"a": [117.09, 100.4]}, {"a": [121.19, 98.6]}, {"a": [125.44, 96.88]}, {"a": [129.84, 95.26]}, {"a": [134.37, 93.74]}, {"a": [139.03, 92.32]}, {"a": [143.81, 91.0]}, {"a": [148.7, 89.79]}, {"a": [153.7, 88.69]}, {"a": [158.78, 87.69]}, {"a": [163.94, 86.81]}, {"a": [169.18, 86.05]}, {"a": [174.47, 85.4]}, {"a": [179.82, 84.86]}, {"a": [185.21, 84.44]}, {"a": [190.63, 84.15]}, {"a": [196.07, 83.97]}, {"a": [201.52, 83.91]}, {"a": [206.97, 83.97]}, {"a": [212.41, 84.15]}, {"a": [217.83, 84.44]}, {"a": [223.22, 84.86]}, {"a": [228.57, 85.4]}, {"a": [233.87, 86.05]}, {"a": [239.1, 86.81]}, {"a": [244.27, 87.69]}, {"a": [249.35, 88.69]}, {"a": [254.34, 89.79]}, {"a": [259.23, 91.0]}, {"a": [264.01, 92.32]}, {"a": [268.67, 93.74]}, {"a": [273.2, 95.26]}, {"a": [277.6, 96.88]}, {"a": [281.85, 98.6]}, {"a": [285.95, 100.4]}, {"a": [289.89, 102.3]}, {"a": [293.66, 104.28]}, {"a": [297.26, 106.34]}, {"a": [300.67, 108.47]}, {"a": [303.9, 110.68]}, {"a": [306.93, 112.96]}, {"a": [309.75, 115.3]}, {"a": [312.38, 117.71]}, {"a": [314.79, 120.16]}, {"a": [316.98, 122.67]}, {"a": [318.96, 125.22]}, {"a": [320.71, 127.82]}, {"a": [322.24, 130.45]}, {"a": [323.54, 133.11]}, {"a": [324.6, 135.8]}, {"a": [325.43, 138.5]}, {"a": [326.02, 141.23]}, {"a": [326.38, 143.96]}]]}, {"calque": "texte", "calqueNom": "Logo & textes", "groupe": "Logo de s\u00e9rie", "nom": "Logo de s\u00e9rie \u2013 cercle", "type": "forme", "couleur": [225, 57, 43], "chemins": [[{"a": [321.25, 146.7]}, {"a": [321.14, 149.22]}, {"a": [320.8, 151.74]}, {"a": [320.23, 154.24]}, {"a": [319.44, 156.74]}, {"a": [318.42, 159.21]}, {"a": [317.17, 161.66]}, {"a": [315.71, 164.08]}, {"a": [314.03, 166.47]}, {"a": [312.14, 168.82]}, {"a": [310.04, 171.13]}, {"a": [307.73, 173.39]}, {"a": [305.21, 175.6]}, {"a": [302.5, 177.75]}, {"a": [299.6, 179.85]}, {"a": [296.51, 181.88]}, {"a": [293.24, 183.85]}, {"a": [289.8, 185.75]}, {"a": [286.19, 187.57]}, {"a": [282.41, 189.31]}, {"a": [278.48, 190.97]}, {"a": [274.41, 192.55]}, {"a": [270.2, 194.04]}, {"a": [265.85, 195.44]}, {"a": [261.39, 196.75]}, {"a": [256.81, 197.96]}, {"a": [252.12, 199.08]}, {"a": [247.34, 200.1]}, {"a": [242.47, 201.01]}, {"a": [237.53, 201.82]}, {"a": [232.51, 202.53]}, {"a": [227.44, 203.12]}, {"a": [222.31, 203.62]}, {"a": [217.15, 204.0]}, {"a": [211.96, 204.27]}, {"a": [206.74, 204.44]}, {"a": [201.52, 204.49]}, {"a": [196.3, 204.44]}, {"a": [191.09, 204.27]}, {"a": [185.89, 204.0]}, {"a": [180.73, 203.62]}, {"a": [175.61, 203.12]}, {"a": [170.53, 202.53]}, {"a": [165.52, 201.82]}, {"a": [160.57, 201.01]}, {"a": [155.7, 200.1]}, {"a": [150.92, 199.08]}, {"a": [146.23, 197.96]}, {"a": [141.65, 196.75]}, {"a": [137.19, 195.44]}, {"a": [132.85, 194.04]}, {"a": [128.63, 192.55]}, {"a": [124.56, 190.97]}, {"a": [120.63, 189.31]}, {"a": [116.86, 187.57]}, {"a": [113.24, 185.75]}, {"a": [109.8, 183.85]}, {"a": [106.53, 181.88]}, {"a": [103.44, 179.85]}, {"a": [100.54, 177.75]}, {"a": [97.83, 175.6]}, {"a": [95.32, 173.39]}, {"a": [93.01, 171.13]}, {"a": [90.9, 168.82]}, {"a": [89.01, 166.47]}, {"a": [87.33, 164.08]}, {"a": [85.87, 161.66]}, {"a": [84.63, 159.21]}, {"a": [83.61, 156.74]}, {"a": [82.81, 154.24]}, {"a": [82.24, 151.74]}, {"a": [81.9, 149.22]}, {"a": [81.79, 146.7]}, {"a": [81.9, 144.18]}, {"a": [82.24, 141.66]}, {"a": [82.81, 139.16]}, {"a": [83.61, 136.66]}, {"a": [84.63, 134.19]}, {"a": [85.87, 131.74]}, {"a": [87.33, 129.32]}, {"a": [89.01, 126.93]}, {"a": [90.9, 124.58]}, {"a": [93.01, 122.28]}, {"a": [95.32, 120.01]}, {"a": [97.83, 117.8]}, {"a": [100.54, 115.65]}, {"a": [103.44, 113.55]}, {"a": [106.53, 111.52]}, {"a": [109.8, 109.55]}, {"a": [113.24, 107.66]}, {"a": [116.86, 105.83]}, {"a": [120.63, 104.09]}, {"a": [124.56, 102.43]}, {"a": [128.63, 100.85]}, {"a": [132.85, 99.36]}, {"a": [137.19, 97.96]}, {"a": [141.65, 96.65]}, {"a": [146.23, 95.44]}, {"a": [150.92, 94.32]}, {"a": [155.7, 93.31]}, {"a": [160.57, 92.39]}, {"a": [165.52, 91.58]}, {"a": [170.53, 90.88]}, {"a": [175.61, 90.28]}, {"a": [180.73, 89.78]}, {"a": [185.89, 89.4]}, {"a": [191.09, 89.13]}, {"a": [196.3, 88.96]}, {"a": [201.52, 88.91]}, {"a": [206.74, 88.96]}, {"a": [211.96, 89.13]}, {"a": [217.15, 89.4]}, {"a": [222.31, 89.78]}, {"a": [227.44, 90.28]}, {"a": [232.51, 90.88]}, {"a": [237.53, 91.58]}, {"a": [242.47, 92.39]}, {"a": [247.34, 93.31]}, {"a": [252.12, 94.32]}, {"a": [256.81, 95.44]}, {"a": [261.39, 96.65]}, {"a": [265.85, 97.96]}, {"a": [270.2, 99.36]}, {"a": [274.41, 100.85]}, {"a": [278.48, 102.43]}, {"a": [282.41, 104.09]}, {"a": [286.19, 105.83]}, {"a": [289.8, 107.66]}, {"a": [293.24, 109.55]}, {"a": [296.51, 111.52]}, {"a": [299.6, 113.55]}, {"a": [302.5, 115.65]}, {"a": [305.21, 117.8]}, {"a": [307.73, 120.01]}, {"a": [310.04, 122.28]}, {"a": [312.14, 124.58]}, {"a": [314.03, 126.93]}, {"a": [315.71, 129.32]}, {"a": [317.17, 131.74]}, {"a": [318.42, 134.19]}, {"a": [319.44, 136.66]}, {"a": [320.23, 139.16]}, {"a": [320.8, 141.66]}, {"a": [321.14, 144.18]}]]}, {"calque": "texte", "calqueNom": "Logo & textes", "groupe": "Logo de s\u00e9rie", "nom": "\u7b2c3\u5f3e", "type": "texte", "texte": "\u7b2c3\u5f3e", "runs": [{"de": 0, "a": 1, "police": "ZenKakuGothicNew-Black", "taille": 22.44, "approche": 26, "interligne": 22.44, "couleur": [20, 20, 20], "italique": false, "gras": false, "echelleH": 103.26, "echelleV": 103.26, "decalage": 0.0}, {"de": 1, "a": 2, "police": "ArchivoBlack-Regular", "taille": 28.94, "approche": 20, "interligne": 28.94, "couleur": [196, 36, 28], "italique": false, "gras": false, "echelleH": 103.26, "echelleV": 103.26, "decalage": 0.0}, {"de": 2, "a": 3, "police": "ZenKakuGothicNew-Black", "taille": 22.44, "approche": 26, "interligne": 22.44, "couleur": [20, 20, 20], "italique": false, "gras": false, "echelleH": 103.26, "echelleV": 103.26, "decalage": 0.0}], "paras": [{"de": 0, "a": 3, "align": "center", "retrait1": 0.0, "retraitG": 0.0}], "centre": [204.46, 101.28], "angle": 0.0, "encre": [69.83, 22.02], "vertical": false, "boite": null, "contour": {"taille": 0.71, "couleur": [20, 20, 20], "centre": false}, "contourSeul": false}, {"calque": "texte", "calqueNom": "Logo & textes", "groupe": "Logo de s\u00e9rie", "nom": "\u30d2\u30fb\u30ed\u30fb\u30b3\u30ec\u30af\u30b7\u30e7\u30f3", "type": "texte", "texte": "\u30d2\u30fb\u30ed\u30fb\u30b3\u30ec\u30af\u30b7\u30e7\u30f3", "runs": [{"de": 0, "a": 10, "police": "DelaGothicOne-Regular", "taille": 50.79, "approche": -58, "interligne": 50.79, "couleur": [42, 42, 42], "italique": false, "gras": false, "echelleH": 65.71, "echelleV": 103.26, "decalage": 0.0}], "paras": [{"de": 0, "a": 10, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [208.58, 155.26], "angle": 0.0, "encre": [271.79, 39.17], "vertical": false, "boite": null, "contour": {"taille": 1.3, "couleur": [42, 42, 42], "centre": false}, "contourSeul": false}, {"calque": "texte", "calqueNom": "Logo & textes", "groupe": "Logo de s\u00e9rie", "nom": "\u30d2\u30fb\u30ed\u30fb\u30b3\u30ec\u30af\u30b7\u30e7\u30f3", "type": "texte", "texte": "\u30d2\u30fb\u30ed\u30fb\u30b3\u30ec\u30af\u30b7\u30e7\u30f3", "runs": [{"de": 0, "a": 10, "police": "DelaGothicOne-Regular", "taille": 50.79, "approche": -58, "interligne": 50.79, "couleur": [180, 176, 167], "italique": false, "gras": false, "echelleH": 65.71, "echelleV": 103.26, "decalage": 0.0}], "paras": [{"de": 0, "a": 10, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [205.16, 151.85], "angle": 0.0, "encre": [271.79, 39.17], "vertical": false, "boite": null, "contour": {"taille": 1.3, "couleur": [28, 28, 28], "centre": false}, "contourSeul": false}, {"calque": "texte", "calqueNom": "Logo & textes", "groupe": "Logo de s\u00e9rie", "nom": "HERO COLLECTION", "type": "texte", "texte": "HERO COLLECTION", "runs": [{"de": 0, "a": 15, "police": "ArchivoBlack-Regular", "taille": 13.58, "approche": 17, "interligne": 13.58, "couleur": [20, 20, 20], "italique": false, "gras": false, "echelleH": 90.07, "echelleV": 103.26, "decalage": 0.0}], "paras": [{"de": 0, "a": 15, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [194.22, 199.8], "angle": 0.0, "encre": [132.3, 9.38], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Logo & textes", "groupe": "Contenu du sachet", "nom": "Contenu du sachet \u2013 fond boite", "type": "forme", "couleur": [241, 237, 192], "chemins": [[{"a": [532.62, 66.7]}, {"a": [851.37, 66.7]}, {"a": [851.37, 238.57]}, {"a": [532.62, 238.57]}]]}, {"calque": "texte", "calqueNom": "Logo & textes", "groupe": "Contenu du sachet", "nom": "\u30bb\u30c3\u30c8\u5185\u5bb9", "type": "texte", "texte": "\u30bb\u30c3\u30c8\u5185\u5bb9", "runs": [{"de": 0, "a": 5, "police": "ZenKakuGothicNew-Medium", "taille": 24.8, "approche": 24, "interligne": 24.8, "couleur": [26, 26, 26], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 5, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [635.35, 90.23], "angle": 0.0, "encre": [125.59, 23.55], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Logo & textes", "groupe": "Contenu du sachet", "nom": "\u25a0\u4e00\u822c\u30ab\u30fc\u30c9", "type": "texte", "texte": "\u25a0\u4e00\u822c\u30ab\u30fc\u30c9", "runs": [{"de": 0, "a": 6, "police": "ZenKakuGothicNew-Medium", "taille": 27.78, "approche": -21, "interligne": 27.78, "couleur": [26, 26, 26], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 6, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [626.66, 136.82], "angle": 0.0, "encre": [157.96, 26.59], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Logo & textes", "groupe": "Contenu du sachet", "nom": "\u2026\u2026\u20268\u679a", "type": "texte", "texte": "\u2026\u2026\u20268\u679a", "runs": [{"de": 0, "a": 5, "police": "ZenKakuGothicNew-Medium", "taille": 27.78, "approche": -21, "interligne": 27.78, "couleur": [26, 26, 26], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 5, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [783.89, 137.84], "angle": 0.0, "encre": [110.3, 26.79], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Logo & textes", "groupe": "Contenu du sachet", "nom": "\u25a0\u30ec\u30fc\u30b6\u30fc\u30ab\u30fc\u30c9", "type": "texte", "texte": "\u25a0\u30ec\u30fc\u30b6\u30fc\u30ab\u30fc\u30c9", "runs": [{"de": 0, "a": 8, "police": "ZenKakuGothicNew-Medium", "taille": 27.78, "approche": -21, "interligne": 27.78, "couleur": [26, 26, 26], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 8, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [654.59, 173.34], "angle": 0.0, "encre": [213.21, 25.08], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Logo & textes", "groupe": "Contenu du sachet", "nom": "\u20261\u679a", "type": "texte", "texte": "\u20261\u679a", "runs": [{"de": 0, "a": 3, "police": "ZenKakuGothicNew-Medium", "taille": 27.78, "approche": -21, "interligne": 27.78, "couleur": [26, 26, 26], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 3, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [810.11, 174.61], "angle": 0.0, "encre": [58.21, 26.75], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Logo & textes", "groupe": "Contenu du sachet", "nom": "\u25a0\u30d7\u30e9\u30c1\u30ca\u30ab\u30fc\u30c9", "type": "texte", "texte": "\u25a0\u30d7\u30e9\u30c1\u30ca\u30ab\u30fc\u30c9", "runs": [{"de": 0, "a": 8, "police": "ZenKakuGothicNew-Medium", "taille": 27.78, "approche": -21, "interligne": 27.78, "couleur": [26, 26, 26], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 8, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [654.59, 211.52], "angle": 0.0, "encre": [213.21, 25.08], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Logo & textes", "groupe": "Contenu du sachet", "nom": "\u20261\u679a", "type": "texte", "texte": "\u20261\u679a", "runs": [{"de": 0, "a": 3, "police": "ZenKakuGothicNew-Medium", "taille": 27.78, "approche": -21, "interligne": 27.78, "couleur": [26, 26, 26], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 3, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [810.11, 212.79], "angle": 0.0, "encre": [58.21, 26.75], "vertical": false, "boite": null}]};
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
