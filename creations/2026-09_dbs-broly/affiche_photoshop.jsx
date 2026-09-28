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
  var SCENE = {"titre": "Affiche VHS \u2014 Dragon Ball Super: Broly", "fichier": "affiche", "largeur": 2220, "hauteur": 3106, "reperes": {"coupe": [35.43307086614173, 2185.0393700787404, 35.43307086614173, 3070.8661417322837], "secu": [70.86614173228347, 2149.6062992125985, 70.86614173228347, 3035.433070866142]}, "plis": [], "polices": ["ArchivoBlack-Regular", "DelaGothicOne-Regular", "ZenKakuGothicNew-Black", "ZenKakuGothicNew-Bold", "ZenKakuGothicNew-Medium", "ZenOldMincho-Bold", "ZenOldMincho-SemiBold"], "items": [{"calque": "fond", "calqueNom": "Fond", "groupe": "", "nom": "fond fond", "type": "forme", "couleur": [255, 255, 255], "chemins": [[{"a": [-23.63, -23.63]}, {"a": [2245.12, -23.63]}, {"a": [2245.12, 3129.49]}, {"a": [-23.63, 3129.49]}]]}, {"calque": "image:personnage", "calqueNom": "Personnage", "groupe": "", "nom": "slot detoure perso vide", "type": "image", "cle": "personnage", "label": "", "chemins": [[{"a": [277.05, 233.79]}, {"a": [1623.93, 233.79]}, {"a": [1623.93, 2427.54]}, {"a": [277.05, 2427.54]}]]}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "Accroche du haut", "nom": "\u201c\u4f1d\u8aac\u306e\u8d85\u30b5\u30a4\u30e4\u4eba\u201d\u3092VHS\u3067\u4f53\u9a13\u305b\u3088\uff01", "type": "texte", "texte": "\u201c\u4f1d\u8aac\u306e\u8d85\u30b5\u30a4\u30e4\u4eba\u201d\u3092VHS\u3067\u4f53\u9a13\u305b\u3088\uff01", "runs": [{"de": 0, "a": 20, "police": "ZenKakuGothicNew-Black", "taille": 129.74, "approche": 0, "interligne": 152.63, "couleur": [61, 90, 122], "italique": false, "gras": false, "echelleH": 86.41}], "paras": [{"de": 0, "a": 20, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1022.38, 159.38], "angle": 0.0, "encre": [1824.07, 121.88], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "Accroche verticale", "nom": "\u30d6\u30ed\u30ea\u30fc\u306f\u2026\u2026\u3044\u3064\u3060\u3063\u3066\u6700\u5f37\u3060\u3088\u3002", "type": "texte", "texte": "\u30d6\u30ed\u30ea\u30fc\u306f\u2026\u2026\u3044\u3064\u3060\u3063\u3066\u6700\u5f37\u3060\u3088\u3002", "runs": [{"de": 0, "a": 17, "police": "ZenOldMincho-Bold", "taille": 111.93, "approche": 0, "interligne": 111.93, "couleur": [30, 30, 30], "italique": false, "gras": false, "echelleH": 100.0}], "paras": [{"de": 0, "a": 17, "align": "justifyAll", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1582.86, 1396.48], "angle": 0.0, "encre": [108.31, 1833.44], "vertical": true, "boite": {"l": 270.0, "h": 1903.12}}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "G\u00e9n\u00e9rique", "nom": "\u539f\u4f5c\u30fb\u811a\u672c\uff1a\u9ce5\u5c71 \u660e", "type": "texte", "texte": "\u539f\u4f5c\u30fb\u811a\u672c\uff1a\u9ce5\u5c71 \u660e", "runs": [{"de": 0, "a": 10, "police": "ZenOldMincho-SemiBold", "taille": 28.49, "approche": 0, "interligne": 41.21, "couleur": [30, 30, 30], "italique": false, "gras": false, "echelleH": 100.0}], "paras": [{"de": 0, "a": 10, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1827.15, 2023.73], "angle": 0.0, "encre": [262.09, 28.25], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "G\u00e9n\u00e9rique", "nom": "\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u30c7\u30b6\u30a4\u30f3\uff1a\u9ce5\u5c71 \u660e", "type": "texte", "texte": "\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u30c7\u30b6\u30a4\u30f3\uff1a\u9ce5\u5c71 \u660e", "runs": [{"de": 0, "a": 15, "police": "ZenOldMincho-SemiBold", "taille": 28.49, "approche": 0, "interligne": 41.21, "couleur": [30, 30, 30], "italique": false, "gras": false, "echelleH": 100.0}], "paras": [{"de": 0, "a": 15, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1899.32, 2068.07], "angle": 0.0, "encre": [403.34, 28.25], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "G\u00e9n\u00e9rique", "nom": "\u4f5c\u753b\u76e3\u7763\uff1a\u65b0\u8c37\u76f4\u5927", "type": "texte", "texte": "\u4f5c\u753b\u76e3\u7763\uff1a\u65b0\u8c37\u76f4\u5927", "runs": [{"de": 0, "a": 9, "police": "ZenOldMincho-SemiBold", "taille": 28.49, "approche": 0, "interligne": 41.21, "couleur": [30, 30, 30], "italique": false, "gras": false, "echelleH": 100.0}], "paras": [{"de": 0, "a": 9, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1824.02, 2108.5], "angle": 0.0, "encre": [255.82, 26.68], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "G\u00e9n\u00e9rique", "nom": "\u97f3\u697d\uff1a\u4f4f\u53cb\u7d00\u4eba", "type": "texte", "texte": "\u97f3\u697d\uff1a\u4f4f\u53cb\u7d00\u4eba", "runs": [{"de": 0, "a": 7, "police": "ZenOldMincho-SemiBold", "taille": 28.49, "approche": 0, "interligne": 41.21, "couleur": [30, 30, 30], "italique": false, "gras": false, "echelleH": 100.0}], "paras": [{"de": 0, "a": 7, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1794.97, 2149.71], "angle": 0.0, "encre": [197.75, 26.68], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "G\u00e9n\u00e9rique", "nom": "\u767a\u58f2\uff1aCYBERDYN VIDEO", "type": "texte", "texte": "\u767a\u58f2\uff1aCYBERDYN VIDEO", "runs": [{"de": 0, "a": 17, "police": "ZenOldMincho-SemiBold", "taille": 28.49, "approche": 0, "interligne": 41.21, "couleur": [30, 30, 30], "italique": false, "gras": false, "echelleH": 100.0}], "paras": [{"de": 0, "a": 17, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1871.88, 2190.92], "angle": 0.0, "encre": [351.55, 26.68], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "G\u00e9n\u00e9rique", "nom": "\u76e3\u7763\uff1a\u9577\u5cef\u9054\u4e5f", "type": "texte", "texte": "\u76e3\u7763\uff1a\u9577\u5cef\u9054\u4e5f", "runs": [{"de": 0, "a": 7, "police": "ZenOldMincho-SemiBold", "taille": 33.07, "approche": 0, "interligne": 50.88, "couleur": [30, 30, 30], "italique": false, "gras": false, "echelleH": 100.0}], "paras": [{"de": 0, "a": 7, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1810.64, 2235.45], "angle": 0.0, "encre": [229.14, 31.39], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "G\u00e9n\u00e9rique", "nom": "\u5236\u4f5c\uff1a\u6771\u6620\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3 \u8ca9\u58f2\uff1aBACK TO 2054 \u578b\u756a\uff1aBackto20", "type": "texte", "texte": "\u5236\u4f5c\uff1a\u6771\u6620\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\r\u8ca9\u58f2\uff1aBACK TO 2054\r\u578b\u756a\uff1aBackto2054", "runs": [{"de": 0, "a": 13, "police": "ZenOldMincho-SemiBold", "taille": 24.43, "approche": 0, "interligne": 28.49, "couleur": [30, 30, 30], "italique": false, "gras": false, "echelleH": 100.0}, {"de": 13, "a": 29, "police": "ZenOldMincho-SemiBold", "taille": 24.43, "approche": 0, "interligne": 28.49, "couleur": [30, 30, 30], "italique": false, "gras": false, "echelleH": 100.0}, {"de": 29, "a": 42, "police": "ZenOldMincho-SemiBold", "taille": 24.43, "approche": 0, "interligne": 28.49, "couleur": [30, 30, 30], "italique": false, "gras": false, "echelleH": 100.0}], "paras": [{"de": 0, "a": 13, "align": "left", "retrait1": 0.0, "retraitG": 0.0}, {"de": 13, "a": 29, "align": "left", "retrait1": 0.0, "retraitG": 0.0}, {"de": 29, "a": 42, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1841.26, 2317.87], "angle": 0.0, "encre": [290.34, 81.61], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "Texte anglais", "nom": "With the destruction of Planet Vegeta fo", "type": "texte", "texte": "With the destruction of Planet Vegeta forty-one years ago, the proud Saiyan race was believed to have vanished forever. However, on a barren frontier planet, a lone Saiyan known as \"BROLY\" has survived, raised in exile by his father Paragus. Recruited by the Frieza Force, he arrives on Earth to face Goku and Vegeta. As his rage grows, his power awakens beyond every limit, and the clash of the three Saiyans begins to shake the very foundations of the universe itself...", "runs": [{"de": 0, "a": 472, "police": "ZenKakuGothicNew-Bold", "taille": 21.37, "approche": 0, "interligne": 25.69, "couleur": [43, 43, 43], "italique": false, "gras": false, "echelleH": 100.0}], "paras": [{"de": 0, "a": 472, "align": "center", "retrait1": 0.0, "retraitG": 0.0}], "centre": [511.08, 2309.47], "angle": 0.0, "encre": [722.02, 170.35], "vertical": false, "boite": {"l": 738.5, "h": 335.008}}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "Logo", "nom": "BROLY", "type": "texte", "texte": "BROLY", "runs": [{"de": 0, "a": 5, "police": "ArchivoBlack-Regular", "taille": 381.59, "approche": -60, "interligne": 310.36, "couleur": [22, 22, 22], "italique": true, "gras": false, "echelleH": 145.76}], "paras": [{"de": 0, "a": 5, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1129.17, 2549.95], "angle": 0.0, "encre": [1904.02, 272.2], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "Logo", "nom": "\u30c9\u30e9\u30b4\u30f3\u30dc\u30fc\u30eb\u8d85\u30d6\u30ed\u30ea\u30fc", "type": "texte", "texte": "\u30c9\u30e9\u30b4\u30f3\u30dc\u30fc\u30eb\u8d85\u30d6\u30ed\u30ea\u30fc", "runs": [{"de": 0, "a": 12, "police": "DelaGothicOne-Regular", "taille": 117.02, "approche": -44, "interligne": 127.19, "couleur": [22, 22, 22], "italique": true, "gras": false, "echelleH": 86.46}], "paras": [{"de": 0, "a": 12, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1109.16, 2788.67], "angle": 0.0, "encre": [1149.05, 111.01], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "Logo", "nom": "VHS", "type": "texte", "texte": "VHS", "runs": [{"de": 0, "a": 3, "police": "ArchivoBlack-Regular", "taille": 132.28, "approche": 19, "interligne": 127.19, "couleur": [38, 38, 38], "italique": false, "gras": false, "echelleH": 118.57}], "paras": [{"de": 0, "a": 3, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1909.2, 2789.55], "angle": 0.0, "encre": [365.39, 93.86], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "Embl\u00e8me", "nom": "Embl\u00e8me \u2013 forme", "type": "forme", "couleur": [29, 29, 29], "chemins": [[{"a": [223.61, 2752.28]}, {"a": [411.84, 2752.28]}, {"a": [411.84, 2859.11]}, {"a": [223.61, 2859.11]}]]}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "Embl\u00e8me", "nom": "Embl\u00e8me \u2013 forme", "type": "forme", "couleur": [255, 255, 255], "chemins": [[{"a": [249.05, 2772.63]}, {"a": [386.4, 2772.63]}, {"a": [386.4, 2818.42]}, {"a": [249.05, 2818.42]}]]}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "Embl\u00e8me", "nom": "Embl\u00e8me \u2013 cercle", "type": "forme", "couleur": [29, 29, 29], "chemins": [[{"a": [298.65, 2795.52]}, {"a": [298.63, 2796.24]}, {"a": [298.58, 2796.96]}, {"a": [298.51, 2797.68]}, {"a": [298.4, 2798.39]}, {"a": [298.26, 2799.1]}, {"a": [298.08, 2799.8]}, {"a": [297.88, 2800.49]}, {"a": [297.65, 2801.18]}, {"a": [297.39, 2801.85]}, {"a": [297.1, 2802.51]}, {"a": [296.78, 2803.16]}, {"a": [296.43, 2803.79]}, {"a": [296.06, 2804.41]}, {"a": [295.66, 2805.01]}, {"a": [295.23, 2805.59]}, {"a": [294.78, 2806.15]}, {"a": [294.3, 2806.69]}, {"a": [293.81, 2807.21]}, {"a": [293.28, 2807.71]}, {"a": [292.74, 2808.19]}, {"a": [292.18, 2808.64]}, {"a": [291.6, 2809.07]}, {"a": [291.0, 2809.47]}, {"a": [290.38, 2809.84]}, {"a": [289.75, 2810.19]}, {"a": [289.1, 2810.51]}, {"a": [288.44, 2810.8]}, {"a": [287.77, 2811.06]}, {"a": [287.09, 2811.29]}, {"a": [286.39, 2811.49]}, {"a": [285.69, 2811.66]}, {"a": [284.99, 2811.81]}, {"a": [284.27, 2811.92]}, {"a": [283.56, 2811.99]}, {"a": [282.84, 2812.04]}, {"a": [282.11, 2812.06]}, {"a": [281.39, 2812.04]}, {"a": [280.67, 2811.99]}, {"a": [279.96, 2811.92]}, {"a": [279.24, 2811.81]}, {"a": [278.54, 2811.66]}, {"a": [277.84, 2811.49]}, {"a": [277.14, 2811.29]}, {"a": [276.46, 2811.06]}, {"a": [275.79, 2810.8]}, {"a": [275.13, 2810.51]}, {"a": [274.48, 2810.19]}, {"a": [273.85, 2809.84]}, {"a": [273.23, 2809.47]}, {"a": [272.63, 2809.07]}, {"a": [272.05, 2808.64]}, {"a": [271.49, 2808.19]}, {"a": [270.94, 2807.71]}, {"a": [270.42, 2807.21]}, {"a": [269.92, 2806.69]}, {"a": [269.45, 2806.15]}, {"a": [269.0, 2805.59]}, {"a": [268.57, 2805.01]}, {"a": [268.17, 2804.41]}, {"a": [267.8, 2803.79]}, {"a": [267.45, 2803.16]}, {"a": [267.13, 2802.51]}, {"a": [266.84, 2801.85]}, {"a": [266.58, 2801.18]}, {"a": [266.35, 2800.49]}, {"a": [266.14, 2799.8]}, {"a": [265.97, 2799.1]}, {"a": [265.83, 2798.39]}, {"a": [265.72, 2797.68]}, {"a": [265.64, 2796.96]}, {"a": [265.6, 2796.24]}, {"a": [265.58, 2795.52]}, {"a": [265.6, 2794.8]}, {"a": [265.64, 2794.08]}, {"a": [265.72, 2793.37]}, {"a": [265.83, 2792.65]}, {"a": [265.97, 2791.94]}, {"a": [266.14, 2791.24]}, {"a": [266.35, 2790.55]}, {"a": [266.58, 2789.87]}, {"a": [266.84, 2789.2]}, {"a": [267.13, 2788.54]}, {"a": [267.45, 2787.89]}, {"a": [267.8, 2787.26]}, {"a": [268.17, 2786.64]}, {"a": [268.57, 2786.04]}, {"a": [269.0, 2785.46]}, {"a": [269.45, 2784.9]}, {"a": [269.92, 2784.35]}, {"a": [270.42, 2783.83]}, {"a": [270.94, 2783.33]}, {"a": [271.49, 2782.86]}, {"a": [272.05, 2782.41]}, {"a": [272.63, 2781.98]}, {"a": [273.23, 2781.58]}, {"a": [273.85, 2781.2]}, {"a": [274.48, 2780.86]}, {"a": [275.13, 2780.54]}, {"a": [275.79, 2780.25]}, {"a": [276.46, 2779.99]}, {"a": [277.14, 2779.76]}, {"a": [277.84, 2779.55]}, {"a": [278.54, 2779.38]}, {"a": [279.24, 2779.24]}, {"a": [279.96, 2779.13]}, {"a": [280.67, 2779.05]}, {"a": [281.39, 2779.01]}, {"a": [282.11, 2778.99]}, {"a": [282.84, 2779.01]}, {"a": [283.56, 2779.05]}, {"a": [284.27, 2779.13]}, {"a": [284.99, 2779.24]}, {"a": [285.69, 2779.38]}, {"a": [286.39, 2779.55]}, {"a": [287.09, 2779.76]}, {"a": [287.77, 2779.99]}, {"a": [288.44, 2780.25]}, {"a": [289.1, 2780.54]}, {"a": [289.75, 2780.86]}, {"a": [290.38, 2781.2]}, {"a": [291.0, 2781.58]}, {"a": [291.6, 2781.98]}, {"a": [292.18, 2782.41]}, {"a": [292.74, 2782.86]}, {"a": [293.28, 2783.33]}, {"a": [293.81, 2783.83]}, {"a": [294.3, 2784.35]}, {"a": [294.78, 2784.9]}, {"a": [295.23, 2785.46]}, {"a": [295.66, 2786.04]}, {"a": [296.06, 2786.64]}, {"a": [296.43, 2787.26]}, {"a": [296.78, 2787.89]}, {"a": [297.1, 2788.54]}, {"a": [297.39, 2789.2]}, {"a": [297.65, 2789.87]}, {"a": [297.88, 2790.55]}, {"a": [298.08, 2791.24]}, {"a": [298.26, 2791.94]}, {"a": [298.4, 2792.65]}, {"a": [298.51, 2793.37]}, {"a": [298.58, 2794.08]}, {"a": [298.63, 2794.8]}]]}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "Embl\u00e8me", "nom": "Embl\u00e8me \u2013 cercle", "type": "forme", "couleur": [29, 29, 29], "chemins": [[{"a": [369.87, 2795.52]}, {"a": [369.85, 2796.24]}, {"a": [369.81, 2796.96]}, {"a": [369.73, 2797.68]}, {"a": [369.62, 2798.39]}, {"a": [369.48, 2799.1]}, {"a": [369.3, 2799.8]}, {"a": [369.1, 2800.49]}, {"a": [368.87, 2801.18]}, {"a": [368.61, 2801.85]}, {"a": [368.32, 2802.51]}, {"a": [368.0, 2803.16]}, {"a": [367.65, 2803.79]}, {"a": [367.28, 2804.41]}, {"a": [366.88, 2805.01]}, {"a": [366.45, 2805.59]}, {"a": [366.0, 2806.15]}, {"a": [365.52, 2806.69]}, {"a": [365.03, 2807.21]}, {"a": [364.5, 2807.71]}, {"a": [363.96, 2808.19]}, {"a": [363.4, 2808.64]}, {"a": [362.82, 2809.07]}, {"a": [362.22, 2809.47]}, {"a": [361.6, 2809.84]}, {"a": [360.97, 2810.19]}, {"a": [360.32, 2810.51]}, {"a": [359.66, 2810.8]}, {"a": [358.99, 2811.06]}, {"a": [358.31, 2811.29]}, {"a": [357.61, 2811.49]}, {"a": [356.91, 2811.66]}, {"a": [356.21, 2811.81]}, {"a": [355.49, 2811.92]}, {"a": [354.78, 2811.99]}, {"a": [354.06, 2812.04]}, {"a": [353.33, 2812.06]}, {"a": [352.61, 2812.04]}, {"a": [351.89, 2811.99]}, {"a": [351.18, 2811.92]}, {"a": [350.46, 2811.81]}, {"a": [349.76, 2811.66]}, {"a": [349.06, 2811.49]}, {"a": [348.36, 2811.29]}, {"a": [347.68, 2811.06]}, {"a": [347.01, 2810.8]}, {"a": [346.35, 2810.51]}, {"a": [345.7, 2810.19]}, {"a": [345.07, 2809.84]}, {"a": [344.45, 2809.47]}, {"a": [343.85, 2809.07]}, {"a": [343.27, 2808.64]}, {"a": [342.71, 2808.19]}, {"a": [342.17, 2807.71]}, {"a": [341.64, 2807.21]}, {"a": [341.15, 2806.69]}, {"a": [340.67, 2806.15]}, {"a": [340.22, 2805.59]}, {"a": [339.79, 2805.01]}, {"a": [339.39, 2804.41]}, {"a": [339.02, 2803.79]}, {"a": [338.67, 2803.16]}, {"a": [338.35, 2802.51]}, {"a": [338.06, 2801.85]}, {"a": [337.8, 2801.18]}, {"a": [337.57, 2800.49]}, {"a": [337.36, 2799.8]}, {"a": [337.19, 2799.1]}, {"a": [337.05, 2798.39]}, {"a": [336.94, 2797.68]}, {"a": [336.86, 2796.96]}, {"a": [336.82, 2796.24]}, {"a": [336.8, 2795.52]}, {"a": [336.82, 2794.8]}, {"a": [336.86, 2794.08]}, {"a": [336.94, 2793.37]}, {"a": [337.05, 2792.65]}, {"a": [337.19, 2791.94]}, {"a": [337.36, 2791.24]}, {"a": [337.57, 2790.55]}, {"a": [337.8, 2789.87]}, {"a": [338.06, 2789.2]}, {"a": [338.35, 2788.54]}, {"a": [338.67, 2787.89]}, {"a": [339.02, 2787.26]}, {"a": [339.39, 2786.64]}, {"a": [339.79, 2786.04]}, {"a": [340.22, 2785.46]}, {"a": [340.67, 2784.9]}, {"a": [341.15, 2784.35]}, {"a": [341.64, 2783.83]}, {"a": [342.17, 2783.33]}, {"a": [342.71, 2782.86]}, {"a": [343.27, 2782.41]}, {"a": [343.85, 2781.98]}, {"a": [344.45, 2781.58]}, {"a": [345.07, 2781.2]}, {"a": [345.7, 2780.86]}, {"a": [346.35, 2780.54]}, {"a": [347.01, 2780.25]}, {"a": [347.68, 2779.99]}, {"a": [348.36, 2779.76]}, {"a": [349.06, 2779.55]}, {"a": [349.76, 2779.38]}, {"a": [350.46, 2779.24]}, {"a": [351.18, 2779.13]}, {"a": [351.89, 2779.05]}, {"a": [352.61, 2779.01]}, {"a": [353.33, 2778.99]}, {"a": [354.06, 2779.01]}, {"a": [354.78, 2779.05]}, {"a": [355.49, 2779.13]}, {"a": [356.21, 2779.24]}, {"a": [356.91, 2779.38]}, {"a": [357.61, 2779.55]}, {"a": [358.31, 2779.76]}, {"a": [358.99, 2779.99]}, {"a": [359.66, 2780.25]}, {"a": [360.32, 2780.54]}, {"a": [360.97, 2780.86]}, {"a": [361.6, 2781.2]}, {"a": [362.22, 2781.58]}, {"a": [362.82, 2781.98]}, {"a": [363.4, 2782.41]}, {"a": [363.96, 2782.86]}, {"a": [364.5, 2783.33]}, {"a": [365.03, 2783.83]}, {"a": [365.52, 2784.35]}, {"a": [366.0, 2784.9]}, {"a": [366.45, 2785.46]}, {"a": [366.88, 2786.04]}, {"a": [367.28, 2786.64]}, {"a": [367.65, 2787.26]}, {"a": [368.0, 2787.89]}, {"a": [368.32, 2788.54]}, {"a": [368.61, 2789.2]}, {"a": [368.87, 2789.87]}, {"a": [369.1, 2790.55]}, {"a": [369.3, 2791.24]}, {"a": [369.48, 2791.94]}, {"a": [369.62, 2792.65]}, {"a": [369.73, 2793.37]}, {"a": [369.81, 2794.08]}, {"a": [369.85, 2794.8]}]]}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "Embl\u00e8me", "nom": "Embl\u00e8me \u2013 cercle", "type": "forme", "couleur": [255, 255, 255], "chemins": [[{"a": [288.22, 2795.52]}, {"a": [288.21, 2795.79]}, {"a": [288.2, 2796.06]}, {"a": [288.17, 2796.32]}, {"a": [288.13, 2796.58]}, {"a": [288.07, 2796.84]}, {"a": [288.01, 2797.1]}, {"a": [287.94, 2797.36]}, {"a": [287.85, 2797.61]}, {"a": [287.75, 2797.86]}, {"a": [287.65, 2798.1]}, {"a": [287.53, 2798.34]}, {"a": [287.4, 2798.58]}, {"a": [287.26, 2798.8]}, {"a": [287.12, 2799.02]}, {"a": [286.96, 2799.24]}, {"a": [286.79, 2799.45]}, {"a": [286.62, 2799.65]}, {"a": [286.43, 2799.84]}, {"a": [286.24, 2800.02]}, {"a": [286.04, 2800.2]}, {"a": [285.83, 2800.37]}, {"a": [285.62, 2800.52]}, {"a": [285.39, 2800.67]}, {"a": [285.17, 2800.81]}, {"a": [284.93, 2800.94]}, {"a": [284.69, 2801.06]}, {"a": [284.45, 2801.16]}, {"a": [284.2, 2801.26]}, {"a": [283.95, 2801.35]}, {"a": [283.69, 2801.42]}, {"a": [283.44, 2801.48]}, {"a": [283.17, 2801.54]}, {"a": [282.91, 2801.58]}, {"a": [282.65, 2801.6]}, {"a": [282.38, 2801.62]}, {"a": [282.11, 2801.63]}, {"a": [281.85, 2801.62]}, {"a": [281.58, 2801.6]}, {"a": [281.32, 2801.58]}, {"a": [281.05, 2801.54]}, {"a": [280.79, 2801.48]}, {"a": [280.53, 2801.42]}, {"a": [280.28, 2801.35]}, {"a": [280.03, 2801.26]}, {"a": [279.78, 2801.16]}, {"a": [279.53, 2801.06]}, {"a": [279.3, 2800.94]}, {"a": [279.06, 2800.81]}, {"a": [278.83, 2800.67]}, {"a": [278.61, 2800.52]}, {"a": [278.4, 2800.37]}, {"a": [278.19, 2800.2]}, {"a": [277.99, 2800.02]}, {"a": [277.8, 2799.84]}, {"a": [277.61, 2799.65]}, {"a": [277.44, 2799.45]}, {"a": [277.27, 2799.24]}, {"a": [277.11, 2799.02]}, {"a": [276.97, 2798.8]}, {"a": [276.83, 2798.58]}, {"a": [276.7, 2798.34]}, {"a": [276.58, 2798.1]}, {"a": [276.47, 2797.86]}, {"a": [276.38, 2797.61]}, {"a": [276.29, 2797.36]}, {"a": [276.22, 2797.1]}, {"a": [276.15, 2796.84]}, {"a": [276.1, 2796.58]}, {"a": [276.06, 2796.32]}, {"a": [276.03, 2796.06]}, {"a": [276.02, 2795.79]}, {"a": [276.01, 2795.52]}, {"a": [276.02, 2795.26]}, {"a": [276.03, 2794.99]}, {"a": [276.06, 2794.73]}, {"a": [276.1, 2794.46]}, {"a": [276.15, 2794.2]}, {"a": [276.22, 2793.94]}, {"a": [276.29, 2793.69]}, {"a": [276.38, 2793.44]}, {"a": [276.47, 2793.19]}, {"a": [276.58, 2792.94]}, {"a": [276.7, 2792.7]}, {"a": [276.83, 2792.47]}, {"a": [276.97, 2792.24]}, {"a": [277.11, 2792.02]}, {"a": [277.27, 2791.81]}, {"a": [277.44, 2791.6]}, {"a": [277.61, 2791.4]}, {"a": [277.8, 2791.21]}, {"a": [277.99, 2791.02]}, {"a": [278.19, 2790.85]}, {"a": [278.4, 2790.68]}, {"a": [278.61, 2790.52]}, {"a": [278.83, 2790.37]}, {"a": [279.06, 2790.24]}, {"a": [279.3, 2790.11]}, {"a": [279.53, 2789.99]}, {"a": [279.78, 2789.88]}, {"a": [280.03, 2789.79]}, {"a": [280.28, 2789.7]}, {"a": [280.53, 2789.63]}, {"a": [280.79, 2789.56]}, {"a": [281.05, 2789.51]}, {"a": [281.32, 2789.47]}, {"a": [281.58, 2789.44]}, {"a": [281.85, 2789.42]}, {"a": [282.11, 2789.42]}, {"a": [282.38, 2789.42]}, {"a": [282.65, 2789.44]}, {"a": [282.91, 2789.47]}, {"a": [283.17, 2789.51]}, {"a": [283.44, 2789.56]}, {"a": [283.69, 2789.63]}, {"a": [283.95, 2789.7]}, {"a": [284.2, 2789.79]}, {"a": [284.45, 2789.88]}, {"a": [284.69, 2789.99]}, {"a": [284.93, 2790.11]}, {"a": [285.17, 2790.24]}, {"a": [285.39, 2790.37]}, {"a": [285.62, 2790.52]}, {"a": [285.83, 2790.68]}, {"a": [286.04, 2790.85]}, {"a": [286.24, 2791.02]}, {"a": [286.43, 2791.21]}, {"a": [286.62, 2791.4]}, {"a": [286.79, 2791.6]}, {"a": [286.96, 2791.81]}, {"a": [287.12, 2792.02]}, {"a": [287.26, 2792.24]}, {"a": [287.4, 2792.47]}, {"a": [287.53, 2792.7]}, {"a": [287.65, 2792.94]}, {"a": [287.75, 2793.19]}, {"a": [287.85, 2793.44]}, {"a": [287.94, 2793.69]}, {"a": [288.01, 2793.94]}, {"a": [288.07, 2794.2]}, {"a": [288.13, 2794.46]}, {"a": [288.17, 2794.73]}, {"a": [288.2, 2794.99]}, {"a": [288.21, 2795.26]}]]}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "Embl\u00e8me", "nom": "Embl\u00e8me \u2013 cercle", "type": "forme", "couleur": [255, 255, 255], "chemins": [[{"a": [359.44, 2795.52]}, {"a": [359.43, 2795.79]}, {"a": [359.42, 2796.06]}, {"a": [359.39, 2796.32]}, {"a": [359.35, 2796.58]}, {"a": [359.29, 2796.84]}, {"a": [359.23, 2797.1]}, {"a": [359.16, 2797.36]}, {"a": [359.07, 2797.61]}, {"a": [358.97, 2797.86]}, {"a": [358.87, 2798.1]}, {"a": [358.75, 2798.34]}, {"a": [358.62, 2798.58]}, {"a": [358.48, 2798.8]}, {"a": [358.34, 2799.02]}, {"a": [358.18, 2799.24]}, {"a": [358.01, 2799.45]}, {"a": [357.84, 2799.65]}, {"a": [357.65, 2799.84]}, {"a": [357.46, 2800.02]}, {"a": [357.26, 2800.2]}, {"a": [357.05, 2800.37]}, {"a": [356.84, 2800.52]}, {"a": [356.61, 2800.67]}, {"a": [356.39, 2800.81]}, {"a": [356.15, 2800.94]}, {"a": [355.91, 2801.06]}, {"a": [355.67, 2801.16]}, {"a": [355.42, 2801.26]}, {"a": [355.17, 2801.35]}, {"a": [354.91, 2801.42]}, {"a": [354.66, 2801.48]}, {"a": [354.39, 2801.54]}, {"a": [354.13, 2801.58]}, {"a": [353.87, 2801.6]}, {"a": [353.6, 2801.62]}, {"a": [353.33, 2801.63]}, {"a": [353.07, 2801.62]}, {"a": [352.8, 2801.6]}, {"a": [352.54, 2801.58]}, {"a": [352.27, 2801.54]}, {"a": [352.01, 2801.48]}, {"a": [351.75, 2801.42]}, {"a": [351.5, 2801.35]}, {"a": [351.25, 2801.26]}, {"a": [351.0, 2801.16]}, {"a": [350.75, 2801.06]}, {"a": [350.52, 2800.94]}, {"a": [350.28, 2800.81]}, {"a": [350.05, 2800.67]}, {"a": [349.83, 2800.52]}, {"a": [349.62, 2800.37]}, {"a": [349.41, 2800.2]}, {"a": [349.21, 2800.02]}, {"a": [349.02, 2799.84]}, {"a": [348.83, 2799.65]}, {"a": [348.66, 2799.45]}, {"a": [348.49, 2799.24]}, {"a": [348.33, 2799.02]}, {"a": [348.19, 2798.8]}, {"a": [348.05, 2798.58]}, {"a": [347.92, 2798.34]}, {"a": [347.8, 2798.1]}, {"a": [347.69, 2797.86]}, {"a": [347.6, 2797.61]}, {"a": [347.51, 2797.36]}, {"a": [347.44, 2797.1]}, {"a": [347.37, 2796.84]}, {"a": [347.32, 2796.58]}, {"a": [347.28, 2796.32]}, {"a": [347.25, 2796.06]}, {"a": [347.24, 2795.79]}, {"a": [347.23, 2795.52]}, {"a": [347.24, 2795.26]}, {"a": [347.25, 2794.99]}, {"a": [347.28, 2794.73]}, {"a": [347.32, 2794.46]}, {"a": [347.37, 2794.2]}, {"a": [347.44, 2793.94]}, {"a": [347.51, 2793.69]}, {"a": [347.6, 2793.44]}, {"a": [347.69, 2793.19]}, {"a": [347.8, 2792.94]}, {"a": [347.92, 2792.7]}, {"a": [348.05, 2792.47]}, {"a": [348.19, 2792.24]}, {"a": [348.33, 2792.02]}, {"a": [348.49, 2791.81]}, {"a": [348.66, 2791.6]}, {"a": [348.83, 2791.4]}, {"a": [349.02, 2791.21]}, {"a": [349.21, 2791.02]}, {"a": [349.41, 2790.85]}, {"a": [349.62, 2790.68]}, {"a": [349.83, 2790.52]}, {"a": [350.05, 2790.37]}, {"a": [350.28, 2790.24]}, {"a": [350.52, 2790.11]}, {"a": [350.75, 2789.99]}, {"a": [351.0, 2789.88]}, {"a": [351.25, 2789.79]}, {"a": [351.5, 2789.7]}, {"a": [351.75, 2789.63]}, {"a": [352.01, 2789.56]}, {"a": [352.27, 2789.51]}, {"a": [352.54, 2789.47]}, {"a": [352.8, 2789.44]}, {"a": [353.07, 2789.42]}, {"a": [353.33, 2789.42]}, {"a": [353.6, 2789.42]}, {"a": [353.87, 2789.44]}, {"a": [354.13, 2789.47]}, {"a": [354.39, 2789.51]}, {"a": [354.66, 2789.56]}, {"a": [354.91, 2789.63]}, {"a": [355.17, 2789.7]}, {"a": [355.42, 2789.79]}, {"a": [355.67, 2789.88]}, {"a": [355.91, 2789.99]}, {"a": [356.15, 2790.11]}, {"a": [356.39, 2790.24]}, {"a": [356.61, 2790.37]}, {"a": [356.84, 2790.52]}, {"a": [357.05, 2790.68]}, {"a": [357.26, 2790.85]}, {"a": [357.46, 2791.02]}, {"a": [357.65, 2791.21]}, {"a": [357.84, 2791.4]}, {"a": [358.01, 2791.6]}, {"a": [358.18, 2791.81]}, {"a": [358.34, 2792.02]}, {"a": [358.48, 2792.24]}, {"a": [358.62, 2792.47]}, {"a": [358.75, 2792.7]}, {"a": [358.87, 2792.94]}, {"a": [358.97, 2793.19]}, {"a": [359.07, 2793.44]}, {"a": [359.16, 2793.69]}, {"a": [359.23, 2793.94]}, {"a": [359.29, 2794.2]}, {"a": [359.35, 2794.46]}, {"a": [359.39, 2794.73]}, {"a": [359.42, 2794.99]}, {"a": [359.43, 2795.26]}]]}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "Embl\u00e8me", "nom": "Embl\u00e8me \u2013 forme", "type": "forme", "couleur": [255, 255, 255], "chemins": [[{"a": [269.4, 2838.76]}, {"a": [366.05, 2838.76]}, {"a": [358.42, 2851.48]}, {"a": [277.03, 2851.48]}]]}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "Embl\u00e8me", "nom": "Embl\u00e8me \u2013 forme", "type": "forme", "couleur": [29, 29, 29], "chemins": [[{"a": [289.75, 2731.93]}, {"a": [345.7, 2731.93]}, {"a": [355.88, 2752.28]}, {"a": [279.57, 2752.28]}]]}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "Embl\u00e8me", "nom": "CYBERDYN", "type": "texte", "texte": "CYBERDYN", "runs": [{"de": 0, "a": 8, "police": "ArchivoBlack-Regular", "taille": 61.05, "approche": 0, "interligne": 66.14, "couleur": [29, 29, 29], "italique": false, "gras": false, "echelleH": 92.73}], "paras": [{"de": 0, "a": 8, "align": "center", "retrait1": 0.0, "retraitG": 0.0}], "centre": [327.88, 2924.22], "angle": 0.0, "encre": [346.19, 43.92], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "Embl\u00e8me", "nom": "VIDEO by BACK TO 2054", "type": "texte", "texte": "VIDEO by BACK TO 2054", "runs": [{"de": 0, "a": 21, "police": "ZenKakuGothicNew-Bold", "taille": 29.26, "approche": 0, "interligne": 29.26, "couleur": [51, 51, 51], "italique": false, "gras": false, "echelleH": 100.0}], "paras": [{"de": 0, "a": 21, "align": "center", "retrait1": 0.0, "retraitG": 0.0}], "centre": [327.88, 2968.07], "angle": 0.0, "encre": [316.16, 28.17], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "Embl\u00e8me", "nom": "\u00a9 BACK TO 2054 / CYBERDYN VIDEO", "type": "texte", "texte": "\u00a9 BACK TO 2054 / CYBERDYN VIDEO", "runs": [{"de": 0, "a": 31, "police": "ZenKakuGothicNew-Medium", "taille": 23.92, "approche": 0, "interligne": 23.92, "couleur": [85, 85, 85], "italique": false, "gras": false, "echelleH": 100.0}], "paras": [{"de": 0, "a": 31, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [336.87, 3012.89], "angle": 0.0, "encre": [399.12, 20.35], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "\u00c9dition", "nom": "\u00c9dition \u2013 fond edition", "type": "forme", "couleur": [242, 153, 74], "chemins": [[{"a": [647.07, 2885.74]}, {"a": [922.07, 2885.74]}, {"a": [922.07, 2991.99]}, {"a": [647.07, 2991.99]}]]}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "\u00c9dition", "nom": "\u5287\u5834\u7248", "type": "texte", "texte": "\u5287\u5834\u7248", "runs": [{"de": 0, "a": 3, "police": "ZenKakuGothicNew-Black", "taille": 73.77, "approche": 34, "interligne": 73.77, "couleur": [27, 27, 27], "italique": false, "gras": false, "echelleH": 100.0}], "paras": [{"de": 0, "a": 3, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [785.99, 2939.79], "angle": 0.0, "encre": [276.49, 109.97], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "\u00c9dition", "nom": "\uff08VHS\u30ea\u30de\u30b9\u30bf\u30fc\u7248\uff09", "type": "texte", "texte": "\uff08VHS\u30ea\u30de\u30b9\u30bf\u30fc\u7248\uff09", "runs": [{"de": 0, "a": 11, "police": "ZenKakuGothicNew-Bold", "taille": 33.07, "approche": 0, "interligne": 33.07, "couleur": [30, 30, 30], "italique": false, "gras": false, "echelleH": 100.0}], "paras": [{"de": 0, "a": 11, "align": "center", "retrait1": 0.0, "retraitG": 0.0}], "centre": [779.74, 3013.53], "angle": 0.0, "encre": [285.36, 31.36], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "Mentions", "nom": "Original Story, Screenplay & Character D", "type": "texte", "texte": "Original Story, Screenplay & Character Design AKIRA TORIYAMA\rDirected by TATSUYA NAGAMINE\rAnimation Director NAOHIRO SHINTANI Music NORIHITO SUMITOMO\rAnimation Production TOEI ANIMATION\rVHS Edition CYBERDYN VIDEO\rModel No. Backto2054\rCOLOR / 100min. / Hi-Fi STEREO\rA BACK TO 2054 Release", "runs": [{"de": 0, "a": 61, "police": "ZenKakuGothicNew-Bold", "taille": 10.94, "approche": 0, "interligne": 12.46, "couleur": [51, 51, 51], "italique": false, "gras": false, "echelleH": 100.0}, {"de": 61, "a": 90, "police": "ZenKakuGothicNew-Bold", "taille": 10.94, "approche": 0, "interligne": 12.46, "couleur": [51, 51, 51], "italique": false, "gras": false, "echelleH": 100.0}, {"de": 90, "a": 150, "police": "ZenKakuGothicNew-Bold", "taille": 10.94, "approche": 0, "interligne": 12.46, "couleur": [51, 51, 51], "italique": false, "gras": false, "echelleH": 100.0}, {"de": 150, "a": 186, "police": "ZenKakuGothicNew-Bold", "taille": 10.94, "approche": 0, "interligne": 12.46, "couleur": [51, 51, 51], "italique": false, "gras": false, "echelleH": 100.0}, {"de": 186, "a": 213, "police": "ZenKakuGothicNew-Bold", "taille": 10.94, "approche": 0, "interligne": 12.46, "couleur": [51, 51, 51], "italique": false, "gras": false, "echelleH": 100.0}, {"de": 213, "a": 234, "police": "ZenKakuGothicNew-Bold", "taille": 10.94, "approche": 0, "interligne": 12.46, "couleur": [51, 51, 51], "italique": false, "gras": false, "echelleH": 100.0}, {"de": 234, "a": 265, "police": "ZenKakuGothicNew-Bold", "taille": 10.94, "approche": 0, "interligne": 12.46, "couleur": [51, 51, 51], "italique": false, "gras": false, "echelleH": 100.0}, {"de": 265, "a": 287, "police": "ZenKakuGothicNew-Bold", "taille": 10.94, "approche": 0, "interligne": 12.46, "couleur": [51, 51, 51], "italique": false, "gras": false, "echelleH": 100.0}], "paras": [{"de": 0, "a": 61, "align": "center", "retrait1": 0.0, "retraitG": 0.0}, {"de": 61, "a": 90, "align": "center", "retrait1": 0.0, "retraitG": 0.0}, {"de": 90, "a": 150, "align": "center", "retrait1": 0.0, "retraitG": 0.0}, {"de": 150, "a": 186, "align": "center", "retrait1": 0.0, "retraitG": 0.0}, {"de": 186, "a": 213, "align": "center", "retrait1": 0.0, "retraitG": 0.0}, {"de": 213, "a": 234, "align": "center", "retrait1": 0.0, "retraitG": 0.0}, {"de": 234, "a": 265, "align": "center", "retrait1": 0.0, "retraitG": 0.0}, {"de": 265, "a": 287, "align": "center", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1134.33, 2910.5], "angle": 0.0, "encre": [334.77, 92.3], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "Mentions", "nom": "Mentions \u2013 fond barre", "type": "forme", "couleur": [27, 27, 27], "chemins": [[{"a": [1040.23, 2968.51]}, {"a": [1227.73, 2968.51]}, {"a": [1227.73, 2990.38]}, {"a": [1040.23, 2990.38]}]]}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "Mentions", "nom": "Hi-Fi STEREO", "type": "texte", "texte": "Hi-Fi STEREO", "runs": [{"de": 0, "a": 12, "police": "ZenKakuGothicNew-Bold", "taille": 11.7, "approche": 130, "interligne": 11.7, "couleur": [255, 255, 255], "italique": false, "gras": false, "echelleH": 100.0}], "paras": [{"de": 0, "a": 12, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1133.54, 2973.39], "angle": 0.0, "encre": [89.21, 9.39], "vertical": false, "boite": {"l": 188.5, "h": 75.00800000000001}}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "Mentions", "nom": "CYBERDYN VIDEO PRESENTS", "type": "texte", "texte": "CYBERDYN VIDEO PRESENTS", "runs": [{"de": 0, "a": 23, "police": "ArchivoBlack-Regular", "taille": 23.41, "approche": 0, "interligne": 23.41, "couleur": [51, 51, 51], "italique": false, "gras": false, "echelleH": 100.0}], "paras": [{"de": 0, "a": 23, "align": "center", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1133.5, 3006.79], "angle": 0.0, "encre": [380.14, 17.21], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "Date", "nom": "12.14", "type": "texte", "texte": "12.14", "runs": [{"de": 0, "a": 5, "police": "ZenKakuGothicNew-Black", "taille": 132.28, "approche": -19, "interligne": 132.28, "couleur": [61, 90, 122], "italique": false, "gras": false, "echelleH": 78.0}], "paras": [{"de": 0, "a": 5, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1476.8, 2951.42], "angle": 0.0, "encre": [201.35, 95.43], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "Date", "nom": "(\u91d1)", "type": "texte", "texte": "(\u91d1)", "runs": [{"de": 0, "a": 3, "police": "ZenKakuGothicNew-Black", "taille": 27.98, "approche": 0, "interligne": 29.38, "couleur": [61, 90, 122], "italique": false, "gras": false, "echelleH": 78.0}], "paras": [{"de": 0, "a": 3, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1603.13, 2928.03], "angle": 0.0, "encre": [36.63, 28.18], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "Date", "nom": "\u3088\u308a", "type": "texte", "texte": "\u3088\u308a", "runs": [{"de": 0, "a": 2, "police": "ZenKakuGothicNew-Black", "taille": 27.98, "approche": 0, "interligne": 29.38, "couleur": [61, 90, 122], "italique": false, "gras": false, "echelleH": 78.0}], "paras": [{"de": 0, "a": 2, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1603.13, 2958.4], "angle": 0.0, "encre": [36.9, 25.23], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes & graphismes", "groupe": "Date", "nom": "VHS\u767a\u58f2!", "type": "texte", "texte": "VHS\u767a\u58f2!", "runs": [{"de": 0, "a": 6, "police": "ZenKakuGothicNew-Black", "taille": 132.28, "approche": -19, "interligne": 132.28, "couleur": [61, 90, 122], "italique": false, "gras": false, "echelleH": 78.0}], "paras": [{"de": 0, "a": 6, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [1830.51, 2947.75], "angle": 0.0, "encre": [398.31, 122.18], "vertical": false, "boite": null}]};
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
  function forme(chemins, rgb, nom) {
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
    d3.putObject(cTID("Clr "), cTID("RGBC"), descCouleur(rgb));
    d2.putObject(cTID("Type"), sTID("solidColorLayer"), d3);
    d.putObject(cTID("Usng"), sTID("contentLayer"), d2);
    try { chemin.select(); executeAction(cTID("Mk  "), d, DialogModes.NO); }
    catch (e) {  // repli : s\u00e9lection + calque de remplissage masqu\u00e9
      chemin.makeSelection(0, true, SelectionType.REPLACE);
      executeAction(cTID("Mk  "), d, DialogModes.NO);
      doc.selection.deselect();
    }
    chemin.remove();
    var l = doc.activeLayer; l.name = nom;
    return l;
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

  function contour(taille, rgb) {
    var d = new ActionDescriptor(), r = new ActionReference();
    r.putProperty(cTID("Prpr"), cTID("Lefx")); r.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
    d.putReference(cTID("null"), r);
    var fx = new ActionDescriptor(), s = new ActionDescriptor();
    fx.putUnitDouble(cTID("Scl "), cTID("#Prc"), 100);
    s.putBoolean(cTID("enab"), true);
    s.putEnumerated(cTID("Styl"), cTID("FStl"), cTID("OutF"));
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
    if (it.contour) contour(it.contour.taille, it.contour.couleur);
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
        else if (it.type === "texte") { l = texte(it); ranger(l, cont); }
        else if (it.type === "arc") { arc(it, cont); }
        else if (it.type === "image") {
          l = forme(it.chemins, [128, 128, 128], "Forme \u2013 " + it.calqueNom); ranger(l, cont);
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

  var fichier = new File(File($.fileName).parent.fsName + "/" + File($.fileName).name.replace(/_photoshop\.jsx$/i, "") + ".psd");
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
