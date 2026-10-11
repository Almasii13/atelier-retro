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
  var SCENE = {"titre": "Jaquette VHS PREY \u2014 style r\u00e9\u00e9dition ROMULUS (104,5 \u00d7 189)", "fichier": "jaquette_prey_romulus", "largeur": 1305, "hauteur": 2303, "reperes": {"coupe": [35.43307086614173, 1269.6850393700788, 35.43307086614173, 2267.716535433071], "secu": [70.86614173228347, 1234.251968503937, 70.86614173228347, 2232.283464566929]}, "plis": [], "polices": ["Antonio-Regular", "ArchivoBlack-Regular", "MonaSans-SemiBold", "TeXGyreHeros-Bold", "TeXGyreHeros-Regular"], "items": [{"calque": "fond", "calqueNom": "Fond (cr\u00e8me, cadre visuel)", "groupe": "", "nom": "Fond cr\u00e8me", "type": "forme", "couleur": [230, 226, 217], "chemins": [[{"a": [-0.03, -0.01]}, {"a": [1305.06, -0.01]}, {"a": [1305.06, 2303.09]}, {"a": [-0.03, 2303.09]}]]}, {"calque": "fond", "calqueNom": "Fond (cr\u00e8me, cadre visuel)", "groupe": "", "nom": "Cadre visuel (fond sombre)", "type": "forme", "couleur": [14, 24, 32], "chemins": [[{"a": [128.41, 121.05]}, {"a": [1176.62, 121.05]}, {"a": [1176.62, 1902.7]}, {"a": [128.41, 1902.7]}]]}, {"calque": "image:visuel", "calqueNom": "Visuel", "groupe": "", "nom": "slot vide", "type": "image", "cle": "visuel", "label": "", "chemins": [[{"a": [128.37, 121.0]}, {"a": [1175.24, 121.0]}, {"a": [1175.24, 1902.25]}, {"a": [128.37, 1902.25]}]], "detoure": false}, {"calque": "fondu", "calqueNom": "Fondu sombre (bas du visuel)", "groupe": "Visuel", "nom": "Visuel \u2013 d\u00e9grad\u00e9 fondu", "type": "degrade", "chemins": [[{"a": [128.37, 1405.47]}, {"a": [1175.24, 1405.47]}, {"a": [1175.24, 1902.34]}, {"a": [128.37, 1902.34]}]], "angle": -90, "stops": [{"c": [14, 24, 32], "pos": 0, "a": 0}, {"c": [14, 24, 32], "pos": 1}]}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "Titre", "nom": "PREY", "type": "texte", "texte": "PREY", "runs": [{"de": 0, "a": 4, "police": "ArchivoBlack-Regular", "taille": 106.44, "approche": 1422, "interligne": 106.44, "couleur": [246, 245, 241], "italique": false, "gras": false, "echelleH": 92.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 4, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [651.57, 1712.68], "angle": 0.0, "encre": [705.0, 73.5], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "Titre", "nom": "PREDATOR", "type": "texte", "texte": "PREDATOR", "runs": [{"de": 0, "a": 8, "police": "MonaSans-SemiBold", "taille": 68.86, "approche": 769, "interligne": 68.86, "couleur": [246, 245, 241], "italique": false, "gras": false, "echelleH": 100.0, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 8, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [653.38, 1815.57], "angle": 0.0, "encre": [742.2, 53.24], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "Pastille", "nom": "Pastille jaune", "type": "forme", "couleur": [226, 216, 42], "chemins": [[{"a": [1142.07, 205.49]}, {"a": [1141.95, 211.21]}, {"a": [1141.57, 216.92]}, {"a": [1140.95, 222.61]}, {"a": [1140.08, 228.26]}, {"a": [1138.96, 233.87]}, {"a": [1137.61, 239.42]}, {"a": [1136.0, 244.92]}, {"a": [1134.17, 250.33]}, {"a": [1132.09, 255.66]}, {"a": [1129.79, 260.9]}, {"a": [1127.26, 266.03]}, {"a": [1124.51, 271.04]}, {"a": [1121.54, 275.93]}, {"a": [1118.36, 280.69]}, {"a": [1114.98, 285.3]}, {"a": [1111.4, 289.76]}, {"a": [1107.63, 294.06]}, {"a": [1103.67, 298.19]}, {"a": [1099.54, 302.15]}, {"a": [1095.24, 305.92]}, {"a": [1090.78, 309.5]}, {"a": [1086.17, 312.88]}, {"a": [1081.41, 316.06]}, {"a": [1076.52, 319.03]}, {"a": [1071.51, 321.78]}, {"a": [1066.38, 324.31]}, {"a": [1061.14, 326.61]}, {"a": [1055.81, 328.69]}, {"a": [1050.39, 330.53]}, {"a": [1044.9, 332.13]}, {"a": [1039.35, 333.49]}, {"a": [1033.74, 334.6]}, {"a": [1028.08, 335.47]}, {"a": [1022.4, 336.09]}, {"a": [1016.69, 336.47]}, {"a": [1010.97, 336.59]}, {"a": [1005.25, 336.47]}, {"a": [999.55, 336.09]}, {"a": [993.86, 335.47]}, {"a": [988.21, 334.6]}, {"a": [982.6, 333.49]}, {"a": [977.04, 332.13]}, {"a": [971.55, 330.53]}, {"a": [966.13, 328.69]}, {"a": [960.8, 326.61]}, {"a": [955.57, 324.31]}, {"a": [950.44, 321.78]}, {"a": [945.42, 319.03]}, {"a": [940.53, 316.06]}, {"a": [935.78, 312.88]}, {"a": [931.16, 309.5]}, {"a": [926.7, 305.92]}, {"a": [922.4, 302.15]}, {"a": [918.27, 298.19]}, {"a": [914.32, 294.06]}, {"a": [910.54, 289.76]}, {"a": [906.96, 285.3]}, {"a": [903.58, 280.69]}, {"a": [900.4, 275.93]}, {"a": [897.44, 271.04]}, {"a": [894.69, 266.03]}, {"a": [892.16, 260.9]}, {"a": [889.85, 255.66]}, {"a": [887.78, 250.33]}, {"a": [885.94, 244.92]}, {"a": [884.34, 239.42]}, {"a": [882.98, 233.87]}, {"a": [881.86, 228.26]}, {"a": [880.99, 222.61]}, {"a": [880.37, 216.92]}, {"a": [880.0, 211.21]}, {"a": [879.87, 205.49]}, {"a": [880.0, 199.77]}, {"a": [880.37, 194.07]}, {"a": [880.99, 188.38]}, {"a": [881.86, 182.73]}, {"a": [882.98, 177.12]}, {"a": [884.34, 171.56]}, {"a": [885.94, 166.07]}, {"a": [887.78, 160.65]}, {"a": [889.85, 155.32]}, {"a": [892.16, 150.09]}, {"a": [894.69, 144.96]}, {"a": [897.44, 139.94]}, {"a": [900.4, 135.05]}, {"a": [903.58, 130.3]}, {"a": [906.96, 125.68]}, {"a": [910.54, 121.22]}, {"a": [914.32, 116.92]}, {"a": [918.27, 112.79]}, {"a": [922.4, 108.84]}, {"a": [926.7, 105.06]}, {"a": [931.16, 101.48]}, {"a": [935.78, 98.1]}, {"a": [940.53, 94.92]}, {"a": [945.42, 91.96]}, {"a": [950.44, 89.21]}, {"a": [955.57, 86.68]}, {"a": [960.8, 84.37]}, {"a": [966.13, 82.3]}, {"a": [971.55, 80.46]}, {"a": [977.04, 78.86]}, {"a": [982.6, 77.5]}, {"a": [988.21, 76.38]}, {"a": [993.86, 75.51]}, {"a": [999.55, 74.89]}, {"a": [1005.25, 74.52]}, {"a": [1010.97, 74.39]}, {"a": [1016.69, 74.52]}, {"a": [1022.4, 74.89]}, {"a": [1028.08, 75.51]}, {"a": [1033.74, 76.38]}, {"a": [1039.35, 77.5]}, {"a": [1044.9, 78.86]}, {"a": [1050.39, 80.46]}, {"a": [1055.81, 82.3]}, {"a": [1061.14, 84.37]}, {"a": [1066.38, 86.68]}, {"a": [1071.51, 89.21]}, {"a": [1076.52, 91.96]}, {"a": [1081.41, 94.92]}, {"a": [1086.17, 98.1]}, {"a": [1090.78, 101.48]}, {"a": [1095.24, 105.06]}, {"a": [1099.54, 108.84]}, {"a": [1103.67, 112.79]}, {"a": [1107.63, 116.92]}, {"a": [1111.4, 121.22]}, {"a": [1114.98, 125.68]}, {"a": [1118.36, 130.3]}, {"a": [1121.54, 135.05]}, {"a": [1124.51, 139.94]}, {"a": [1127.26, 144.96]}, {"a": [1129.79, 150.09]}, {"a": [1132.09, 155.32]}, {"a": [1134.17, 160.65]}, {"a": [1136.0, 166.07]}, {"a": [1137.61, 171.56]}, {"a": [1138.96, 177.12]}, {"a": [1140.08, 182.73]}, {"a": [1140.95, 188.38]}, {"a": [1141.57, 194.07]}, {"a": [1141.95, 199.77]}]]}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "Pastille", "nom": "LIMITED", "type": "texte", "texte": "LIMITED", "runs": [{"de": 0, "a": 7, "police": "TeXGyreHeros-Regular", "taille": 50.69, "approche": 0, "interligne": 50.58, "couleur": [36, 35, 31], "italique": false, "gras": false, "echelleH": 79.16, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 7, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1017.84, 178.64], "angle": 10.0, "encre": [153.12, 37.74], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "Pastille", "nom": "EDITION", "type": "texte", "texte": "EDITION", "runs": [{"de": 0, "a": 7, "police": "TeXGyreHeros-Bold", "taille": 50.15, "approche": 0, "interligne": 48.4, "couleur": [36, 35, 31], "italique": false, "gras": false, "echelleH": 106.35, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 7, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1006.74, 227.08], "angle": 10.0, "encre": [209.42, 39.07], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "G\u00e9n\u00e9rique", "nom": "20TH CENTURY STUDIOS PRESENTS A DAVIS EN", "type": "texte", "texte": "20TH CENTURY STUDIOS PRESENTS A DAVIS ENTERTAINMENT/LAWRENCE GORDON PRODUCTION A DAN TRACHTENBERG FILM \u201cPREY\u201d", "runs": [{"de": 0, "a": 21, "police": "Antonio-Regular", "taille": 22.91, "approche": 0, "interligne": 23.89, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}, {"de": 21, "a": 29, "police": "Antonio-Regular", "taille": 13.75, "approche": 0, "interligne": 23.89, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}, {"de": 29, "a": 30, "police": "Antonio-Regular", "taille": 22.91, "approche": 0, "interligne": 23.89, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}, {"de": 30, "a": 31, "police": "Antonio-Regular", "taille": 13.75, "approche": 0, "interligne": 23.89, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}, {"de": 31, "a": 68, "police": "Antonio-Regular", "taille": 22.91, "approche": 0, "interligne": 23.89, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}, {"de": 68, "a": 78, "police": "Antonio-Regular", "taille": 13.75, "approche": 0, "interligne": 23.89, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}, {"de": 78, "a": 79, "police": "Antonio-Regular", "taille": 22.91, "approche": 0, "interligne": 23.89, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}, {"de": 79, "a": 80, "police": "Antonio-Regular", "taille": 13.75, "approche": 0, "interligne": 23.89, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}, {"de": 80, "a": 98, "police": "Antonio-Regular", "taille": 22.91, "approche": 0, "interligne": 23.89, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}, {"de": 98, "a": 102, "police": "Antonio-Regular", "taille": 13.75, "approche": 0, "interligne": 23.89, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}, {"de": 102, "a": 109, "police": "Antonio-Regular", "taille": 22.91, "approche": 0, "interligne": 23.89, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 109, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [652.16, 1961.24], "angle": 0.0, "encre": [972.71, 21.91], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "G\u00e9n\u00e9rique", "nom": "AMBER MIDTHUNDER  DAKOTA BEAVERS  DANE D", "type": "texte", "texte": "AMBER MIDTHUNDER  DAKOTA BEAVERS  DANE DILIEGRO  STORMEE KIPP  MICHELLE THRUSH  JULIAN BLACK ANTELOPE", "runs": [{"de": 0, "a": 101, "police": "Antonio-Regular", "taille": 22.91, "approche": 0, "interligne": 23.89, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 101, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [653.89, 1984.62], "angle": 0.0, "encre": [965.7, 21.9], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "G\u00e9n\u00e9rique", "nom": "COSTUME DESIGNER", "type": "texte", "texte": "COSTUME\rDESIGNER", "runs": [{"de": 0, "a": 8, "police": "Antonio-Regular", "taille": 7.79, "approche": 20, "interligne": 10.36, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}, {"de": 8, "a": 16, "police": "Antonio-Regular", "taille": 7.79, "approche": 20, "interligne": 10.36, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 8, "align": "left", "retrait1": 0.0, "retraitG": 0.0}, {"de": 8, "a": 16, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [210.26, 2010.54], "angle": 0.0, "encre": [28.74, 17.29], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "G\u00e9n\u00e9rique", "nom": "STEPHANIE PORTER", "type": "texte", "texte": "STEPHANIE PORTER", "runs": [{"de": 0, "a": 16, "police": "Antonio-Regular", "taille": 22.91, "approche": 0, "interligne": 23.89, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 16, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [309.25, 2007.61], "angle": 0.0, "encre": [152.92, 20.31], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "G\u00e9n\u00e9rique", "nom": "MUSIC BY", "type": "texte", "texte": "MUSIC\rBY", "runs": [{"de": 0, "a": 6, "police": "Antonio-Regular", "taille": 7.79, "approche": 20, "interligne": 10.36, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}, {"de": 6, "a": 8, "police": "Antonio-Regular", "taille": 7.79, "approche": 20, "interligne": 10.36, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 6, "align": "left", "retrait1": 0.0, "retraitG": 0.0}, {"de": 6, "a": 8, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [398.57, 2011.62], "angle": 0.0, "encre": [18.64, 15.75], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "G\u00e9n\u00e9rique", "nom": "SARAH SCHACHNER", "type": "texte", "texte": "SARAH SCHACHNER", "runs": [{"de": 0, "a": 15, "police": "Antonio-Regular", "taille": 22.91, "approche": 0, "interligne": 23.89, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 15, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [496.41, 2009.03], "angle": 0.0, "encre": [158.74, 21.98], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "G\u00e9n\u00e9rique", "nom": "EDITED BY", "type": "texte", "texte": "EDITED\rBY", "runs": [{"de": 0, "a": 7, "police": "Antonio-Regular", "taille": 7.79, "approche": 20, "interligne": 10.36, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}, {"de": 7, "a": 9, "police": "Antonio-Regular", "taille": 7.79, "approche": 20, "interligne": 10.36, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 7, "align": "left", "retrait1": 0.0, "retraitG": 0.0}, {"de": 7, "a": 9, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [588.68, 2011.03], "angle": 0.0, "encre": [20.36, 17.35], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "G\u00e9n\u00e9rique", "nom": "ANGELA M. CATANZARO  CLAUDIA CASTELLO", "type": "texte", "texte": "ANGELA M. CATANZARO  CLAUDIA CASTELLO", "runs": [{"de": 0, "a": 37, "police": "Antonio-Regular", "taille": 22.91, "approche": 0, "interligne": 23.89, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 37, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [782.66, 2008.15], "angle": 0.0, "encre": [356.02, 20.39], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "G\u00e9n\u00e9rique", "nom": "DIRECTOR OF PHOTOGRAPHY", "type": "texte", "texte": "DIRECTOR OF\rPHOTOGRAPHY", "runs": [{"de": 0, "a": 12, "police": "Antonio-Regular", "taille": 7.79, "approche": 20, "interligne": 10.36, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}, {"de": 12, "a": 23, "police": "Antonio-Regular", "taille": 7.79, "approche": 20, "interligne": 10.36, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 12, "align": "left", "retrait1": 0.0, "retraitG": 0.0}, {"de": 12, "a": 23, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [983.9, 2010.54], "angle": 0.0, "encre": [42.26, 17.29], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "G\u00e9n\u00e9rique", "nom": "JEFF CUTTER", "type": "texte", "texte": "JEFF CUTTER", "runs": [{"de": 0, "a": 11, "police": "Antonio-Regular", "taille": 22.91, "approche": 0, "interligne": 23.89, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 11, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1061.41, 2007.86], "angle": 0.0, "encre": [99.34, 20.35], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "G\u00e9n\u00e9rique", "nom": "EXECUTIVE PRODUCERS", "type": "texte", "texte": "EXECUTIVE\rPRODUCERS", "runs": [{"de": 0, "a": 10, "police": "Antonio-Regular", "taille": 7.79, "approche": 20, "interligne": 10.36, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}, {"de": 10, "a": 19, "police": "Antonio-Regular", "taille": 7.79, "approche": 20, "interligne": 10.36, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 10, "align": "left", "retrait1": 0.0, "retraitG": 0.0}, {"de": 10, "a": 19, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [224.35, 2033.57], "angle": 0.0, "encre": [33.73, 17.25], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "G\u00e9n\u00e9rique", "nom": "LAWRENCE GORDON  BEN ROSENBLATT  MARC TO", "type": "texte", "texte": "LAWRENCE GORDON  BEN ROSENBLATT  MARC TOBEROFF", "runs": [{"de": 0, "a": 46, "police": "Antonio-Regular", "taille": 22.91, "approche": 0, "interligne": 23.89, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 46, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [478.05, 2031.13], "angle": 0.0, "encre": [457.72, 20.34], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "G\u00e9n\u00e9rique", "nom": "PRODUCED BY", "type": "texte", "texte": "PRODUCED\rBY", "runs": [{"de": 0, "a": 9, "police": "Antonio-Regular", "taille": 7.79, "approche": 20, "interligne": 10.36, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}, {"de": 9, "a": 11, "police": "Antonio-Regular", "taille": 7.79, "approche": 20, "interligne": 10.36, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 9, "align": "left", "retrait1": 0.0, "retraitG": 0.0}, {"de": 9, "a": 11, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [723.5, 2033.52], "angle": 0.0, "encre": [30.34, 17.24], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "G\u00e9n\u00e9rique", "nom": "JOHN DAVIS  JHANE MYERS  MARTY EWING", "type": "texte", "texte": "JOHN DAVIS  JHANE MYERS  MARTY EWING", "runs": [{"de": 0, "a": 36, "police": "Antonio-Regular", "taille": 22.91, "approche": 0, "interligne": 23.89, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 36, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [927.05, 2031.66], "angle": 0.0, "encre": [356.44, 20.42], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "G\u00e9n\u00e9rique", "nom": "BASED ON CHARACTERS CREATED BY", "type": "texte", "texte": "BASED ON CHARACTERS\rCREATED BY", "runs": [{"de": 0, "a": 20, "police": "Antonio-Regular", "taille": 7.79, "approche": 20, "interligne": 10.36, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}, {"de": 20, "a": 30, "police": "Antonio-Regular", "taille": 7.79, "approche": 20, "interligne": 10.36, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 20, "align": "left", "retrait1": 0.0, "retraitG": 0.0}, {"de": 20, "a": 30, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [168.37, 2057.37], "angle": 0.0, "encre": [69.18, 17.26], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "G\u00e9n\u00e9rique", "nom": "JIM THOMAS AND JOHN THOMAS", "type": "texte", "texte": "JIM THOMAS AND JOHN THOMAS", "runs": [{"de": 0, "a": 11, "police": "Antonio-Regular", "taille": 22.91, "approche": 0, "interligne": 23.89, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}, {"de": 11, "a": 14, "police": "Antonio-Regular", "taille": 13.75, "approche": 0, "interligne": 23.89, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}, {"de": 14, "a": 26, "police": "Antonio-Regular", "taille": 22.91, "approche": 0, "interligne": 23.89, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 26, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [339.3, 2055.03], "angle": 0.0, "encre": [256.15, 20.37], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "G\u00e9n\u00e9rique", "nom": "STORY BY", "type": "texte", "texte": "STORY\rBY", "runs": [{"de": 0, "a": 6, "police": "Antonio-Regular", "taille": 7.79, "approche": 20, "interligne": 10.36, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}, {"de": 6, "a": 8, "police": "Antonio-Regular", "taille": 7.79, "approche": 20, "interligne": 10.36, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 6, "align": "left", "retrait1": 0.0, "retraitG": 0.0}, {"de": 6, "a": 8, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [477.47, 2057.32], "angle": 0.0, "encre": [16.87, 17.25], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "G\u00e9n\u00e9rique", "nom": "PATRICK AISON & DAN TRACHTENBERG", "type": "texte", "texte": "PATRICK AISON & DAN TRACHTENBERG", "runs": [{"de": 0, "a": 14, "police": "Antonio-Regular", "taille": 22.91, "approche": 0, "interligne": 23.89, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}, {"de": 14, "a": 15, "police": "Antonio-Regular", "taille": 13.75, "approche": 0, "interligne": 23.89, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}, {"de": 15, "a": 32, "police": "Antonio-Regular", "taille": 22.91, "approche": 0, "interligne": 23.89, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 32, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [648.35, 2055.86], "angle": 0.0, "encre": [305.05, 21.94], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "G\u00e9n\u00e9rique", "nom": "SCREENPLAY BY", "type": "texte", "texte": "SCREENPLAY\rBY", "runs": [{"de": 0, "a": 11, "police": "Antonio-Regular", "taille": 7.79, "approche": 20, "interligne": 10.36, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}, {"de": 11, "a": 13, "police": "Antonio-Regular", "taille": 7.79, "approche": 20, "interligne": 10.36, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 11, "align": "left", "retrait1": 0.0, "retraitG": 0.0}, {"de": 11, "a": 13, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [823.54, 2057.96], "angle": 0.0, "encre": [37.29, 17.34], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "G\u00e9n\u00e9rique", "nom": "PATRICK AISON", "type": "texte", "texte": "PATRICK AISON", "runs": [{"de": 0, "a": 13, "police": "Antonio-Regular", "taille": 22.91, "approche": 0, "interligne": 23.89, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 13, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [911.03, 2055.71], "angle": 0.0, "encre": [121.94, 20.47], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "G\u00e9n\u00e9rique", "nom": "DIRECTED BY", "type": "texte", "texte": "DIRECTED\rBY", "runs": [{"de": 0, "a": 9, "police": "Antonio-Regular", "taille": 7.79, "approche": 20, "interligne": 10.36, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}, {"de": 9, "a": 11, "police": "Antonio-Regular", "taille": 7.79, "approche": 20, "interligne": 10.36, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 9, "align": "left", "retrait1": 0.0, "retraitG": 0.0}, {"de": 9, "a": 11, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [987.54, 2057.08], "angle": 0.0, "encre": [26.94, 17.22], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "G\u00e9n\u00e9rique", "nom": "DAN TRACHTENBERG", "type": "texte", "texte": "DAN TRACHTENBERG", "runs": [{"de": 0, "a": 16, "police": "Antonio-Regular", "taille": 22.91, "approche": 0, "interligne": 23.89, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 107.55, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 16, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1091.84, 2054.69], "angle": 0.0, "encre": [163.01, 20.31], "vertical": false, "boite": null}, {"calque": "cartouche", "calqueNom": "Cartouche mention", "groupe": "Mentions", "nom": "Cartouche mention", "type": "forme", "couleur": [119, 115, 109], "chemins": [[{"a": [571.02, 2085.18]}, {"a": [654.29, 2085.18]}, {"a": [654.29, 2095.81]}, {"a": [571.02, 2095.81]}]]}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "Mentions", "nom": "SOUNDTRACK ON HOLLYWOOD RECORDS", "type": "texte", "texte": "SOUNDTRACK ON HOLLYWOOD RECORDS", "runs": [{"de": 0, "a": 31, "police": "TeXGyreHeros-Bold", "taille": 5.51, "approche": 0, "interligne": 6.43, "couleur": [230, 226, 217], "italique": false, "gras": false, "echelleH": 50.41, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 31, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [613.08, 2091.02], "angle": 0.0, "encre": [57.76, 4.71], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & pastille", "groupe": "Mentions", "nom": "\u00a9 2022 20th Century Studios", "type": "texte", "texte": "\u00a9 2022 20th Century Studios", "runs": [{"de": 0, "a": 27, "police": "TeXGyreHeros-Regular", "taille": 5.13, "approche": 0, "interligne": 4.05, "couleur": [43, 42, 41], "italique": false, "gras": false, "echelleH": 113.28, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 27, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [703.16, 2094.9], "angle": 0.0, "encre": [73.24, 4.73], "vertical": false, "boite": null}, {"calque": "image:logo_vhs", "calqueNom": "Logo VHS", "groupe": "", "nom": "slot detoure vide", "type": "image", "cle": "logo_vhs", "label": "", "chemins": [[{"a": [82.03, 2141.26]}, {"a": [232.03, 2141.26]}, {"a": [232.03, 2216.26]}, {"a": [82.03, 2216.26]}]], "detoure": true}, {"calque": "image:logo", "calqueNom": "Logo studio", "groupe": "", "nom": "slot detoure vide", "type": "image", "cle": "logo", "label": "", "chemins": [[{"a": [1093.65, 2101.12]}, {"a": [1231.15, 2101.12]}, {"a": [1231.15, 2213.62]}, {"a": [1093.65, 2213.62]}]], "detoure": true}, {"calque": "image:mini_logo_1", "calqueNom": "Mini-logo gauche", "groupe": "", "nom": "slot detoure vide", "type": "image", "cle": "mini_logo_1", "label": "", "chemins": [[{"a": [514.31, 2078.66]}, {"a": [561.18, 2078.66]}, {"a": [561.18, 2097.41]}, {"a": [514.31, 2097.41]}]], "detoure": true}, {"calque": "image:mini_logo_2", "calqueNom": "Mini-logo droite", "groupe": "", "nom": "slot detoure vide", "type": "image", "cle": "mini_logo_2", "label": "", "chemins": [[{"a": [744.63, 2082.81]}, {"a": [760.25, 2082.81]}, {"a": [760.25, 2095.31]}, {"a": [744.63, 2095.31]}]], "detoure": true}], "motifs": {}, "images": {}};
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
