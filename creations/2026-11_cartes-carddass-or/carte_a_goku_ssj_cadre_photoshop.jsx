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
  var SCENE = {"titre": "Carte custom \u5b6b\u609f\u7a7a \u8d85\u30b5\u30a4\u30e4\u4eba \u2014 cadre dor\u00e9 SPECIAL \u2014 cadre dor\u00e9 seul \u2014 65x90", "fichier": "carte_a_goku_ssj_cadre", "largeur": 839, "hauteur": 1134, "reperes": {"coupe": [35.43307086614173, 803.1496062992126, 35.43307086614173, 1098.4251968503938], "secu": [64.96062992125985, 773.6220472440945, 64.96062992125985, 1068.8976377952756]}, "plis": [], "polices": [], "items": [{"calque": "cadre", "calqueNom": "Cadre dor\u00e9 & \u00e9clairs", "groupe": "Cadre dor\u00e9", "nom": "Cadre dor\u00e9 \u2013 d\u00e9grad\u00e9 ", "type": "degrade", "chemins": [[{"a": [257.81, 912.11]}, {"a": [259.52, 910.6]}, {"a": [261.38, 909.23]}, {"a": [263.33, 908.01]}, {"a": [265.43, 907.03]}, {"a": [267.63, 906.25]}, {"a": [269.87, 905.71]}, {"a": [272.17, 905.37]}, {"a": [274.46, 905.27]}, {"a": [624.22, 905.27]}, {"a": [626.51, 905.37]}, {"a": [628.81, 905.71]}, {"a": [631.05, 906.25]}, {"a": [633.25, 907.03]}, {"a": [635.35, 908.01]}, {"a": [637.3, 909.23]}, {"a": [639.16, 910.6]}, {"a": [640.87, 912.11]}, {"a": [642.43, 913.82]}, {"a": [643.8, 915.67]}, {"a": [645.02, 917.68]}, {"a": [646.0, 919.78]}, {"a": [646.78, 921.92]}, {"a": [647.31, 924.17]}, {"a": [647.66, 926.42]}, {"a": [647.8, 928.76]}, {"a": [647.8, 1047.36]}, {"a": [647.66, 1049.71]}, {"a": [647.31, 1051.95]}, {"a": [646.78, 1054.2]}, {"a": [646.0, 1056.35]}, {"a": [645.02, 1058.45]}, {"a": [643.8, 1060.45]}, {"a": [642.43, 1062.3]}, {"a": [640.87, 1064.01]}, {"a": [639.16, 1065.53]}, {"a": [637.3, 1066.89]}, {"a": [635.35, 1068.12]}, {"a": [633.25, 1069.09]}, {"a": [631.05, 1069.87]}, {"a": [628.81, 1070.41]}, {"a": [626.51, 1070.75]}, {"a": [624.22, 1070.9]}, {"a": [274.46, 1070.9]}, {"a": [272.17, 1070.75]}, {"a": [269.87, 1070.41]}, {"a": [267.63, 1069.87]}, {"a": [265.43, 1069.09]}, {"a": [263.33, 1068.12]}, {"a": [261.38, 1066.89]}, {"a": [259.52, 1065.53]}, {"a": [257.81, 1064.01]}, {"a": [256.25, 1062.3]}, {"a": [254.88, 1060.45]}, {"a": [253.66, 1058.45]}, {"a": [252.69, 1056.35]}, {"a": [251.9, 1054.2]}, {"a": [251.37, 1051.95]}, {"a": [251.03, 1049.71]}, {"a": [250.93, 1047.36]}, {"a": [250.93, 928.76]}, {"a": [251.03, 926.42]}, {"a": [251.37, 924.17]}, {"a": [251.9, 921.92]}, {"a": [252.69, 919.78]}, {"a": [253.66, 917.68]}, {"a": [254.88, 915.67]}, {"a": [256.25, 913.82]}, {"a": [257.81, 912.11]}, {"a": [266.36, 922.9]}, {"a": [265.09, 924.32]}, {"a": [263.96, 925.83]}, {"a": [262.99, 927.49]}, {"a": [262.16, 929.2]}, {"a": [261.52, 931.01]}, {"a": [261.04, 932.81]}, {"a": [260.79, 934.72]}, {"a": [260.69, 936.62]}, {"a": [260.69, 1040.09]}, {"a": [260.79, 1041.99]}, {"a": [261.04, 1043.9]}, {"a": [261.52, 1045.7]}, {"a": [262.16, 1047.51]}, {"a": [262.99, 1049.22]}, {"a": [263.96, 1050.88]}, {"a": [265.09, 1052.39]}, {"a": [266.36, 1053.81]}, {"a": [267.77, 1055.08]}, {"a": [269.29, 1056.2]}, {"a": [270.95, 1057.18]}, {"a": [272.66, 1058.01]}, {"a": [274.46, 1058.64]}, {"a": [276.32, 1059.08]}, {"a": [278.22, 1059.38]}, {"a": [280.13, 1059.47]}, {"a": [618.12, 1059.47]}, {"a": [620.02, 1059.38]}, {"a": [621.88, 1059.08]}, {"a": [623.73, 1058.64]}, {"a": [625.54, 1058.01]}, {"a": [627.25, 1057.18]}, {"a": [628.91, 1056.2]}, {"a": [630.42, 1055.08]}, {"a": [631.84, 1053.81]}, {"a": [633.11, 1052.39]}, {"a": [634.28, 1050.88]}, {"a": [635.25, 1049.22]}, {"a": [636.04, 1047.51]}, {"a": [636.72, 1045.7]}, {"a": [637.16, 1043.9]}, {"a": [637.45, 1041.99]}, {"a": [637.55, 1040.09]}, {"a": [637.55, 936.62]}, {"a": [637.45, 934.72]}, {"a": [637.16, 932.81]}, {"a": [636.72, 931.01]}, {"a": [636.04, 929.2]}, {"a": [635.25, 927.49]}, {"a": [634.28, 925.83]}, {"a": [633.11, 924.32]}, {"a": [631.84, 922.9]}, {"a": [630.42, 921.63]}, {"a": [628.91, 920.51]}, {"a": [627.25, 919.53]}, {"a": [625.54, 918.7]}, {"a": [623.73, 918.07]}, {"a": [621.88, 917.63]}, {"a": [620.02, 917.33]}, {"a": [618.12, 917.24]}, {"a": [280.13, 917.24]}, {"a": [278.22, 917.33]}, {"a": [276.32, 917.63]}, {"a": [274.46, 918.07]}, {"a": [272.66, 918.7]}, {"a": [270.95, 919.53]}, {"a": [269.29, 920.51]}, {"a": [267.77, 921.63]}, {"a": [266.36, 922.9]}]], "angle": 90, "stops": [{"c": [230, 173, 80], "pos": 0}, {"c": [231, 179, 93], "pos": 0.017}, {"c": [238, 202, 136], "pos": 0.051100000000000007}, {"c": [250, 246, 235], "pos": 0.10210000000000001}, {"c": [248, 244, 232], "pos": 0.1106}, {"c": [241, 212, 159], "pos": 0.1532}, {"c": [224, 172, 78], "pos": 0.21280000000000002}, {"c": [215, 154, 53], "pos": 0.23829999999999998}, {"c": [172, 123, 55], "pos": 0.2809}, {"c": [109, 77, 48], "pos": 0.37450000000000006}, {"c": [115, 81, 49], "pos": 0.4}, {"c": [147, 104, 50], "pos": 0.4426}, {"c": [207, 146, 51], "pos": 0.5021}, {"c": [226, 169, 72], "pos": 0.5191}, {"c": [239, 208, 150], "pos": 0.5532}, {"c": [249, 240, 223], "pos": 0.5787}, {"c": [246, 242, 229], "pos": 0.5871999999999999}, {"c": [216, 204, 160], "pos": 0.6213000000000001}, {"c": [184, 158, 89], "pos": 0.6638}, {"c": [198, 135, 40], "pos": 0.7404000000000001}, {"c": [202, 126, 32], "pos": 0.7745000000000001}, {"c": [153, 104, 41], "pos": 0.8255}, {"c": [124, 91, 52], "pos": 0.8765999999999999}, {"c": [140, 98, 52], "pos": 0.9020999999999999}, {"c": [203, 145, 53], "pos": 0.9787}, {"c": [218, 156, 63], "pos": 1}]}, {"calque": "cadre", "calqueNom": "Cadre dor\u00e9 & \u00e9clairs", "groupe": "Cadre dor\u00e9", "nom": "Cadre dor\u00e9 \u2013 d\u00e9grad\u00e9 ", "type": "degrade", "chemins": [[{"a": [264.7, 921.29]}, {"a": [266.26, 919.82]}, {"a": [268.02, 918.6]}, {"a": [269.82, 917.48]}, {"a": [271.78, 916.55]}, {"a": [273.78, 915.87]}, {"a": [275.83, 915.33]}, {"a": [277.98, 915.04]}, {"a": [280.08, 914.94]}, {"a": [617.82, 914.94]}, {"a": [619.92, 915.04]}, {"a": [622.07, 915.33]}, {"a": [624.12, 915.87]}, {"a": [626.12, 916.55]}, {"a": [628.08, 917.48]}, {"a": [629.88, 918.6]}, {"a": [631.64, 919.82]}, {"a": [633.2, 921.29]}, {"a": [634.62, 922.85]}, {"a": [635.89, 924.56]}, {"a": [637.01, 926.42]}, {"a": [637.94, 928.32]}, {"a": [638.62, 930.32]}, {"a": [639.16, 932.42]}, {"a": [639.45, 934.52]}, {"a": [639.6, 936.62]}, {"a": [639.6, 1040.09]}, {"a": [639.45, 1042.19]}, {"a": [639.16, 1044.29]}, {"a": [638.62, 1046.39]}, {"a": [637.94, 1048.39]}, {"a": [637.01, 1050.29]}, {"a": [635.89, 1052.15]}, {"a": [634.62, 1053.86]}, {"a": [633.2, 1055.42]}, {"a": [631.64, 1056.88]}, {"a": [629.88, 1058.11]}, {"a": [628.08, 1059.23]}, {"a": [626.12, 1060.16]}, {"a": [624.12, 1060.84]}, {"a": [622.07, 1061.38]}, {"a": [619.92, 1061.67]}, {"a": [617.82, 1061.82]}, {"a": [280.08, 1061.82]}, {"a": [277.98, 1061.67]}, {"a": [275.83, 1061.38]}, {"a": [273.78, 1060.84]}, {"a": [271.78, 1060.16]}, {"a": [269.82, 1059.23]}, {"a": [268.02, 1058.11]}, {"a": [266.26, 1056.88]}, {"a": [264.7, 1055.42]}, {"a": [263.28, 1053.86]}, {"a": [262.01, 1052.15]}, {"a": [260.89, 1050.29]}, {"a": [259.96, 1048.39]}, {"a": [259.28, 1046.39]}, {"a": [258.74, 1044.29]}, {"a": [258.45, 1042.19]}, {"a": [258.35, 1040.09]}, {"a": [258.35, 936.62]}, {"a": [258.45, 934.52]}, {"a": [258.74, 932.42]}, {"a": [259.28, 930.32]}, {"a": [259.96, 928.32]}, {"a": [260.89, 926.42]}, {"a": [262.01, 924.56]}, {"a": [263.28, 922.85]}, {"a": [264.7, 921.29]}, {"a": [275.44, 932.08]}, {"a": [274.17, 933.5]}, {"a": [273.0, 935.01]}, {"a": [272.02, 936.67]}, {"a": [271.24, 938.38]}, {"a": [270.56, 940.19]}, {"a": [270.12, 941.99]}, {"a": [269.82, 943.9]}, {"a": [269.73, 945.8]}, {"a": [269.73, 1031.49]}, {"a": [269.82, 1033.4]}, {"a": [270.12, 1035.3]}, {"a": [270.56, 1037.11]}, {"a": [271.24, 1038.92]}, {"a": [272.02, 1040.62]}, {"a": [273.0, 1042.29]}, {"a": [274.17, 1043.8]}, {"a": [275.44, 1045.21]}, {"a": [276.86, 1046.48]}, {"a": [278.37, 1047.61]}, {"a": [279.98, 1048.58]}, {"a": [281.74, 1049.41]}, {"a": [283.5, 1050.05]}, {"a": [285.35, 1050.49]}, {"a": [287.26, 1050.78]}, {"a": [289.16, 1050.88]}, {"a": [608.64, 1050.88]}, {"a": [610.55, 1050.78]}, {"a": [612.4, 1050.49]}, {"a": [614.26, 1050.05]}, {"a": [616.06, 1049.41]}, {"a": [617.77, 1048.58]}, {"a": [619.43, 1047.61]}, {"a": [620.95, 1046.48]}, {"a": [622.36, 1045.21]}, {"a": [623.63, 1043.8]}, {"a": [624.76, 1042.29]}, {"a": [625.73, 1040.62]}, {"a": [626.56, 1038.92]}, {"a": [627.2, 1037.11]}, {"a": [627.69, 1035.3]}, {"a": [627.93, 1033.4]}, {"a": [628.03, 1031.49]}, {"a": [628.03, 945.8]}, {"a": [627.93, 943.9]}, {"a": [627.69, 941.99]}, {"a": [627.2, 940.19]}, {"a": [626.56, 938.38]}, {"a": [625.73, 936.67]}, {"a": [624.76, 935.01]}, {"a": [623.63, 933.5]}, {"a": [622.36, 932.08]}, {"a": [620.95, 930.81]}, {"a": [619.43, 929.69]}, {"a": [617.77, 928.71]}, {"a": [616.06, 927.88]}, {"a": [614.26, 927.25]}, {"a": [612.4, 926.81]}, {"a": [610.55, 926.51]}, {"a": [608.64, 926.42]}, {"a": [289.16, 926.42]}, {"a": [287.26, 926.51]}, {"a": [285.35, 926.81]}, {"a": [283.5, 927.25]}, {"a": [281.74, 927.88]}, {"a": [279.98, 928.71]}, {"a": [278.37, 929.69]}, {"a": [276.86, 930.81]}, {"a": [275.44, 932.08]}]], "angle": 51.5, "stops": [{"c": [255, 243, 220], "pos": 0}, {"c": [255, 243, 220], "pos": 0.027999999999999997}, {"c": [248, 226, 186], "pos": 0.032}, {"c": [234, 193, 122], "pos": 0.036000000000000004}, {"c": [227, 172, 76], "pos": 0.0401}, {"c": [227, 169, 69], "pos": 0.0441}, {"c": [238, 202, 136], "pos": 0.08410000000000001}, {"c": [253, 250, 243], "pos": 0.1362}, {"c": [236, 197, 127], "pos": 0.2043}, {"c": [213, 151, 52], "pos": 0.2644}, {"c": [108, 77, 46], "pos": 0.3925}, {"c": [149, 106, 52], "pos": 0.4526}, {"c": [211, 150, 53], "pos": 0.5086999999999999}, {"c": [222, 160, 59], "pos": 0.5167}, {"c": [232, 185, 106], "pos": 0.5367000000000001}, {"c": [251, 248, 241], "pos": 0.5848}, {"c": [208, 190, 140], "pos": 0.6288}, {"c": [183, 155, 80], "pos": 0.6648999999999999}, {"c": [207, 131, 34], "pos": 0.7490000000000001}, {"c": [208, 126, 31], "pos": 0.7609999999999999}, {"c": [156, 105, 44], "pos": 0.8090999999999999}, {"c": [123, 90, 52], "pos": 0.8571}, {"c": [206, 148, 55], "pos": 0.9573}, {"c": [194, 139, 54], "pos": 0.9612999999999999}, {"c": [142, 102, 51], "pos": 0.9693}, {"c": [138, 101, 54], "pos": 1}]}, {"calque": "cadre", "calqueNom": "Cadre dor\u00e9 & \u00e9clairs", "groupe": "\u00c9clair", "nom": "\u00c9clair \u2013 d\u00e9grad\u00e9 ", "type": "degrade", "chemins": [[{"a": [573.24, 1034.72]}, {"a": [607.62, 1043.7]}, {"a": [602.49, 1053.47]}]], "angle": -31.840000000000003, "stops": [{"c": [166, 135, 74], "pos": 0}, {"c": [166, 135, 74], "pos": 0.050499999999999996}, {"c": [141, 93, 45], "pos": 0.1264}, {"c": [187, 116, 39], "pos": 0.2022}, {"c": [192, 136, 46], "pos": 0.2527}, {"c": [184, 148, 71], "pos": 0.30329999999999996}, {"c": [191, 161, 98], "pos": 0.3286}, {"c": [236, 218, 182], "pos": 0.3791}, {"c": [250, 233, 194], "pos": 0.4044}, {"c": [248, 222, 167], "pos": 0.42969999999999997}, {"c": [235, 193, 118], "pos": 0.4549}, {"c": [212, 160, 74], "pos": 0.4802}, {"c": [188, 133, 52], "pos": 0.5055}, {"c": [141, 98, 43], "pos": 0.556}, {"c": [118, 79, 42], "pos": 0.6065999999999999}, {"c": [134, 97, 48], "pos": 0.6570999999999999}, {"c": [214, 156, 70], "pos": 0.7582}, {"c": [244, 212, 158], "pos": 0.8341}, {"c": [252, 221, 172], "pos": 0.8593000000000001}, {"c": [254, 218, 164], "pos": 1}]}, {"calque": "cadre", "calqueNom": "Cadre dor\u00e9 & \u00e9clairs", "groupe": "\u00c9clair", "nom": "\u00c9clair \u2013 d\u00e9grad\u00e9 ", "type": "degrade", "chemins": [[{"a": [606.25, 1043.12]}, {"a": [632.71, 1071.24]}, {"a": [601.46, 1052.39]}]], "angle": -29.769999999999996, "stops": [{"c": [231, 207, 163], "pos": 0}, {"c": [231, 207, 163], "pos": 0.0909}, {"c": [155, 116, 62], "pos": 0.1364}, {"c": [140, 100, 44], "pos": 0.1592}, {"c": [179, 113, 37], "pos": 0.2274}, {"c": [201, 130, 42], "pos": 0.2728}, {"c": [193, 145, 62], "pos": 0.341}, {"c": [194, 172, 116], "pos": 0.3865}, {"c": [239, 222, 194], "pos": 0.43200000000000005}, {"c": [250, 228, 192], "pos": 0.4547}, {"c": [236, 192, 114], "pos": 0.5002}, {"c": [216, 164, 74], "pos": 0.5229}, {"c": [195, 140, 53], "pos": 0.5457}, {"c": [135, 90, 51], "pos": 0.6139}, {"c": [115, 78, 46], "pos": 0.6593000000000001}, {"c": [159, 114, 44], "pos": 0.7503}, {"c": [202, 143, 56], "pos": 0.7958}, {"c": [236, 182, 98], "pos": 0.8412000000000001}, {"c": [246, 225, 197], "pos": 0.9322}, {"c": [246, 225, 197], "pos": 1}]}, {"calque": "cadre", "calqueNom": "Cadre dor\u00e9 & \u00e9clairs", "groupe": "\u00c9clair", "nom": "\u00c9clair \u2013 d\u00e9grad\u00e9 ", "type": "degrade", "chemins": [[{"a": [632.47, 1071.0]}, {"a": [594.97, 1059.47]}, {"a": [601.22, 1052.25]}]], "angle": -29.769999999999996, "stops": [{"c": [180, 130, 58], "pos": 0}, {"c": [178, 128, 57], "pos": 0.1108}, {"c": [135, 95, 48], "pos": 0.1773}, {"c": [141, 98, 48], "pos": 0.19940000000000002}, {"c": [197, 124, 36], "pos": 0.2659}, {"c": [199, 137, 42], "pos": 0.3102}, {"c": [191, 145, 64], "pos": 0.35450000000000004}, {"c": [194, 169, 110], "pos": 0.39880000000000004}, {"c": [234, 221, 193], "pos": 0.44310000000000005}, {"c": [246, 230, 199], "pos": 0.4653}, {"c": [212, 158, 65], "pos": 0.5318}, {"c": [192, 137, 45], "pos": 0.5539000000000001}, {"c": [127, 94, 44], "pos": 0.6204}, {"c": [114, 80, 45], "pos": 0.6647}, {"c": [135, 96, 56], "pos": 0.7090000000000001}, {"c": [210, 146, 56], "pos": 0.7976000000000001}, {"c": [224, 172, 79], "pos": 0.8420000000000001}, {"c": [232, 213, 194], "pos": 0.9306}, {"c": [232, 213, 194], "pos": 1}]}, {"calque": "cadre", "calqueNom": "Cadre dor\u00e9 & \u00e9clairs", "groupe": "\u00c9clair", "nom": "\u00c9clair \u2013 d\u00e9grad\u00e9 ", "type": "degrade", "chemins": [[{"a": [594.92, 1059.72]}, {"a": [573.24, 1034.72]}, {"a": [601.37, 1052.44]}]], "angle": -31.840000000000003, "stops": [{"c": [185, 135, 71], "pos": 0}, {"c": [195, 142, 54], "pos": 0.2045}, {"c": [192, 140, 60], "pos": 0.2556}, {"c": [210, 144, 66], "pos": 0.30670000000000003}, {"c": [199, 145, 54], "pos": 0.409}, {"c": [213, 151, 59], "pos": 0.4857}, {"c": [211, 158, 72], "pos": 0.7413}, {"c": [216, 163, 82], "pos": 0.818}, {"c": [230, 197, 140], "pos": 0.8691}, {"c": [226, 200, 159], "pos": 0.8946999999999999}, {"c": [226, 200, 159], "pos": 1}]}, {"calque": "cadre", "calqueNom": "Cadre dor\u00e9 & \u00e9clairs", "groupe": "\u00c9clair", "nom": "\u00c9clair \u2013 d\u00e9grad\u00e9 ", "type": "degrade", "chemins": [[{"a": [607.62, 1031.3]}, {"a": [641.99, 1040.28]}, {"a": [636.87, 1050.05]}]], "angle": -31.909999999999997, "stops": [{"c": [224, 197, 156], "pos": 0}, {"c": [224, 197, 156], "pos": 0.0704}, {"c": [239, 205, 154], "pos": 0.09390000000000001}, {"c": [245, 198, 117], "pos": 0.1408}, {"c": [195, 133, 52], "pos": 0.2346}, {"c": [138, 90, 50], "pos": 0.305}, {"c": [110, 76, 44], "pos": 0.35200000000000004}, {"c": [128, 91, 46], "pos": 0.39890000000000003}, {"c": [191, 132, 48], "pos": 0.4693}, {"c": [210, 154, 64], "pos": 0.4928}, {"c": [245, 225, 189], "pos": 0.5632}, {"c": [238, 223, 188], "pos": 0.5866}, {"c": [187, 160, 82], "pos": 0.657}, {"c": [196, 136, 44], "pos": 0.7273999999999999}, {"c": [191, 123, 39], "pos": 0.7743000000000001}, {"c": [154, 101, 44], "pos": 0.8447}, {"c": [183, 130, 56], "pos": 0.8917}, {"c": [183, 130, 56], "pos": 1}]}, {"calque": "cadre", "calqueNom": "Cadre dor\u00e9 & \u00e9clairs", "groupe": "\u00c9clair", "nom": "\u00c9clair \u2013 d\u00e9grad\u00e9 ", "type": "degrade", "chemins": [[{"a": [643.26, 1040.38]}, {"a": [672.36, 1068.51]}, {"a": [637.99, 1049.66]}]], "angle": -29.83, "stops": [{"c": [175, 118, 47], "pos": 0}, {"c": [175, 118, 47], "pos": 0.10550000000000001}, {"c": [191, 140, 47], "pos": 0.19}, {"c": [200, 150, 70], "pos": 0.25329999999999997}, {"c": [209, 180, 118], "pos": 0.3166}, {"c": [222, 188, 126], "pos": 0.401}, {"c": [224, 181, 114], "pos": 0.42210000000000003}, {"c": [205, 142, 60], "pos": 0.4643}, {"c": [129, 92, 40], "pos": 0.5488000000000001}, {"c": [116, 78, 43], "pos": 0.6121}, {"c": [197, 145, 60], "pos": 0.7598}, {"c": [215, 173, 83], "pos": 0.802}, {"c": [232, 215, 181], "pos": 0.9076000000000001}, {"c": [234, 218, 191], "pos": 1}]}, {"calque": "cadre", "calqueNom": "Cadre dor\u00e9 & \u00e9clairs", "groupe": "\u00c9clair", "nom": "\u00c9clair \u2013 d\u00e9grad\u00e9 ", "type": "degrade", "chemins": [[{"a": [671.63, 1068.95]}, {"a": [631.01, 1057.42]}, {"a": [637.79, 1050.2]}]], "angle": -29.83, "stops": [{"c": [185, 137, 46], "pos": 0}, {"c": [185, 137, 46], "pos": 0.0823}, {"c": [137, 98, 45], "pos": 0.1646}, {"c": [126, 87, 45], "pos": 0.3085}, {"c": [136, 95, 52], "pos": 0.3908}, {"c": [205, 144, 60], "pos": 0.5965}, {"c": [237, 182, 104], "pos": 0.6788}, {"c": [250, 229, 189], "pos": 0.7611}, {"c": [247, 241, 211], "pos": 0.8228}, {"c": [243, 236, 210], "pos": 0.8432999999999999}, {"c": [185, 168, 146], "pos": 0.9256}, {"c": [185, 168, 146], "pos": 1}]}, {"calque": "cadre", "calqueNom": "Cadre dor\u00e9 & \u00e9clairs", "groupe": "\u00c9clair", "nom": "\u00c9clair \u2013 d\u00e9grad\u00e9 ", "type": "degrade", "chemins": [[{"a": [631.69, 1059.42]}, {"a": [607.62, 1031.3]}, {"a": [638.87, 1051.27]}]], "angle": -31.909999999999997, "stops": [{"c": [101, 71, 29], "pos": 0}, {"c": [101, 71, 29], "pos": 0.0712}, {"c": [185, 120, 26], "pos": 0.1661}, {"c": [185, 144, 54], "pos": 0.2373}, {"c": [192, 167, 98], "pos": 0.2848}, {"c": [232, 226, 184], "pos": 0.3323}, {"c": [247, 239, 199], "pos": 0.35600000000000004}, {"c": [250, 229, 179], "pos": 0.3797}, {"c": [241, 200, 134], "pos": 0.4035}, {"c": [223, 165, 88], "pos": 0.42719999999999997}, {"c": [200, 138, 61], "pos": 0.4509}, {"c": [128, 86, 45], "pos": 0.5221}, {"c": [116, 78, 43], "pos": 0.5458}, {"c": [120, 84, 46], "pos": 0.5932999999999999}, {"c": [212, 157, 61], "pos": 0.7120000000000001}, {"c": [249, 217, 166], "pos": 0.8069}, {"c": [243, 208, 160], "pos": 0.8306}, {"c": [168, 130, 81], "pos": 0.8781}, {"c": [168, 130, 81], "pos": 1}]}, {"calque": "cadre", "calqueNom": "Cadre dor\u00e9 & \u00e9clairs", "groupe": "\u00c9clair", "nom": "\u00c9clair \u2013 d\u00e9grad\u00e9 ", "type": "degrade", "chemins": [[{"a": [232.71, 910.21]}, {"a": [263.96, 917.63]}, {"a": [259.33, 925.83]}]], "angle": -31.709999999999994, "stops": [{"c": [255, 234, 197], "pos": 0}, {"c": [255, 231, 191], "pos": 0.1067}, {"c": [248, 195, 117], "pos": 0.1867}, {"c": [204, 143, 54], "pos": 0.2668}, {"c": [128, 92, 37], "pos": 0.3735}, {"c": [110, 78, 37], "pos": 0.4268}, {"c": [136, 96, 47], "pos": 0.4802}, {"c": [207, 149, 60], "pos": 0.5602}, {"c": [224, 172, 88], "pos": 0.5869}, {"c": [243, 216, 178], "pos": 0.6403}, {"c": [239, 222, 194], "pos": 0.6668999999999999}, {"c": [224, 212, 178], "pos": 0.6936}, {"c": [194, 166, 97], "pos": 0.747}, {"c": [192, 144, 60], "pos": 0.8003}, {"c": [200, 138, 44], "pos": 0.8537}, {"c": [201, 136, 43], "pos": 1}]}, {"calque": "cadre", "calqueNom": "Cadre dor\u00e9 & \u00e9clairs", "groupe": "\u00c9clair", "nom": "\u00c9clair \u2013 d\u00e9grad\u00e9 ", "type": "degrade", "chemins": [[{"a": [264.26, 918.12]}, {"a": [290.77, 943.12]}, {"a": [259.52, 926.42]}]], "angle": -29.629999999999995, "stops": [{"c": [199, 116, 36], "pos": 0}, {"c": [196, 118, 36], "pos": 0.12}, {"c": [143, 96, 46], "pos": 0.2159}, {"c": [188, 130, 43], "pos": 0.2879}, {"c": [197, 136, 50], "pos": 0.33590000000000003}, {"c": [224, 195, 137], "pos": 0.4559}, {"c": [235, 207, 147], "pos": 0.5038}, {"c": [228, 195, 124], "pos": 0.5278}, {"c": [190, 142, 66], "pos": 0.5758}, {"c": [137, 90, 45], "pos": 0.6478}, {"c": [114, 74, 36], "pos": 0.7198}, {"c": [147, 111, 61], "pos": 0.7678}, {"c": [236, 177, 85], "pos": 0.8876999999999999}, {"c": [244, 183, 93], "pos": 1}]}, {"calque": "cadre", "calqueNom": "Cadre dor\u00e9 & \u00e9clairs", "groupe": "\u00c9clair", "nom": "\u00c9clair \u2013 d\u00e9grad\u00e9 ", "type": "degrade", "chemins": [[{"a": [290.92, 945.51]}, {"a": [253.42, 934.03]}, {"a": [259.67, 926.76]}]], "angle": -29.629999999999995, "stops": [{"c": [166, 120, 51], "pos": 0}, {"c": [166, 120, 51], "pos": 0.0935}, {"c": [187, 138, 60], "pos": 0.11689999999999999}, {"c": [222, 192, 122], "pos": 0.1636}, {"c": [231, 200, 144], "pos": 0.2104}, {"c": [225, 184, 110], "pos": 0.2571}, {"c": [207, 142, 61], "pos": 0.3039}, {"c": [142, 99, 42], "pos": 0.39740000000000003}, {"c": [140, 96, 40], "pos": 0.5143}, {"c": [176, 123, 45], "pos": 0.561}, {"c": [201, 145, 60], "pos": 0.5844}, {"c": [238, 199, 125], "pos": 0.6312}, {"c": [244, 226, 182], "pos": 0.6779000000000001}, {"c": [244, 227, 193], "pos": 0.7012999999999999}, {"c": [230, 214, 176], "pos": 0.7247}, {"c": [195, 171, 104], "pos": 0.7714}, {"c": [204, 135, 43], "pos": 0.8416}, {"c": [205, 124, 28], "pos": 0.8883}, {"c": [181, 114, 34], "pos": 0.9351}, {"c": [181, 114, 34], "pos": 1}]}, {"calque": "cadre", "calqueNom": "Cadre dor\u00e9 & \u00e9clairs", "groupe": "\u00c9clair", "nom": "\u00c9clair \u2013 d\u00e9grad\u00e9 ", "type": "degrade", "chemins": [[{"a": [254.39, 932.08]}, {"a": [232.71, 910.21]}, {"a": [260.84, 925.68]}]], "angle": -31.709999999999994, "stops": [{"c": [222, 190, 145], "pos": 0}, {"c": [222, 190, 145], "pos": 0.0809}, {"c": [186, 140, 64], "pos": 0.16190000000000002}, {"c": [180, 129, 41], "pos": 0.2158}, {"c": [200, 137, 59], "pos": 0.3507}, {"c": [223, 164, 63], "pos": 0.8094}, {"c": [228, 179, 83], "pos": 0.8362999999999999}, {"c": [239, 227, 187], "pos": 0.8903}, {"c": [239, 227, 187], "pos": 1}]}, {"calque": "cadre", "calqueNom": "Cadre dor\u00e9 & \u00e9clairs", "groupe": "\u00c9clair", "nom": "\u00c9clair \u2013 d\u00e9grad\u00e9 ", "type": "degrade", "chemins": [[{"a": [270.41, 910.21]}, {"a": [298.54, 918.26]}, {"a": [293.99, 925.83]}]], "angle": -33.879999999999995, "stops": [{"c": [227, 201, 144], "pos": 0}, {"c": [227, 201, 144], "pos": 0.0907}, {"c": [233, 188, 102], "pos": 0.2116}, {"c": [212, 161, 68], "pos": 0.2721}, {"c": [142, 102, 57], "pos": 0.4232}, {"c": [128, 89, 52], "pos": 0.48369999999999996}, {"c": [131, 93, 42], "pos": 0.5744}, {"c": [161, 113, 46], "pos": 0.6347999999999999}, {"c": [194, 144, 71], "pos": 0.6953}, {"c": [203, 162, 90], "pos": 0.7558}, {"c": [201, 148, 60], "pos": 0.8767}, {"c": [201, 148, 60], "pos": 1}]}, {"calque": "cadre", "calqueNom": "Cadre dor\u00e9 & \u00e9clairs", "groupe": "\u00c9clair", "nom": "\u00c9clair \u2013 d\u00e9grad\u00e9 ", "type": "degrade", "chemins": [[{"a": [297.51, 918.21]}, {"a": [318.36, 943.21]}, {"a": [293.36, 926.03]}]], "angle": -31.810000000000002, "stops": [{"c": [199, 146, 58], "pos": 0}, {"c": [196, 143, 59], "pos": 0.1632}, {"c": [178, 119, 44], "pos": 0.27190000000000003}, {"c": [199, 142, 52], "pos": 0.3807}, {"c": [217, 195, 143], "pos": 0.4623}, {"c": [237, 215, 175], "pos": 0.5167}, {"c": [236, 205, 154], "pos": 0.5439}, {"c": [200, 143, 60], "pos": 0.5982999999999999}, {"c": [179, 123, 44], "pos": 0.6255}, {"c": [136, 93, 44], "pos": 0.6799}, {"c": [119, 81, 42], "pos": 0.7343000000000001}, {"c": [123, 86, 47], "pos": 0.7615000000000001}, {"c": [187, 140, 75], "pos": 0.8702}, {"c": [209, 162, 103], "pos": 0.9246}, {"c": [209, 162, 103], "pos": 1}]}, {"calque": "cadre", "calqueNom": "Cadre dor\u00e9 & \u00e9clairs", "groupe": "\u00c9clair", "nom": "\u00c9clair \u2013 d\u00e9grad\u00e9 ", "type": "degrade", "chemins": [[{"a": [318.99, 941.26]}, {"a": [287.74, 931.15]}, {"a": [293.21, 925.63]}]], "angle": -31.810000000000002, "stops": [{"c": [192, 130, 50], "pos": 0}, {"c": [192, 130, 50], "pos": 0.10619999999999999}, {"c": [177, 123, 54], "pos": 0.1594}, {"c": [187, 137, 44], "pos": 0.3187}, {"c": [196, 145, 74], "pos": 0.3718}, {"c": [212, 184, 132], "pos": 0.425}, {"c": [236, 203, 150], "pos": 0.4781}, {"c": [234, 205, 148], "pos": 0.5046}, {"c": [222, 191, 122], "pos": 0.5578}, {"c": [172, 132, 62], "pos": 0.6374}, {"c": [138, 101, 53], "pos": 0.6906}, {"c": [124, 85, 48], "pos": 0.7437}, {"c": [164, 112, 52], "pos": 0.8233}, {"c": [220, 170, 79], "pos": 0.903}, {"c": [220, 170, 79], "pos": 1}]}, {"calque": "cadre", "calqueNom": "Cadre dor\u00e9 & \u00e9clairs", "groupe": "\u00c9clair", "nom": "\u00c9clair \u2013 d\u00e9grad\u00e9 ", "type": "degrade", "chemins": [[{"a": [286.91, 932.08]}, {"a": [270.41, 910.21]}, {"a": [292.29, 926.12]}]], "angle": -33.879999999999995, "stops": [{"c": [222, 195, 148], "pos": 0}, {"c": [222, 195, 148], "pos": 0.0919}, {"c": [175, 117, 43], "pos": 0.1839}, {"c": [177, 116, 29], "pos": 0.2145}, {"c": [196, 135, 36], "pos": 0.2758}, {"c": [191, 154, 67], "pos": 0.3677}, {"c": [191, 163, 85], "pos": 0.39840000000000003}, {"c": [198, 183, 121], "pos": 0.429}, {"c": [216, 208, 163], "pos": 0.4597}, {"c": [235, 224, 184], "pos": 0.4903}, {"c": [240, 223, 178], "pos": 0.5209}, {"c": [230, 180, 104], "pos": 0.5821999999999999}, {"c": [213, 152, 69], "pos": 0.6129}, {"c": [189, 129, 54], "pos": 0.6435}, {"c": [134, 96, 50], "pos": 0.7354}, {"c": [130, 91, 46], "pos": 0.8273999999999999}, {"c": [110, 76, 48], "pos": 0.8887}, {"c": [110, 76, 48], "pos": 1}]}], "motifs": {}, "images": {}};
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
