#target illustrator
/*  ATELIER RETRO \u2014 construction automatique du document dans Illustrator
    ----------------------------------------------------------------------
    Utilisation : Illustrator > Fichier > Scripts > Autre script\u2026 > choisir ce fichier.
    Le script cr\u00e9e le document au format fini (plan de travail = coupe) avec le fond perdu r\u00e9gl\u00e9, puis :
      - des calques par plan de la maquette (fond, cadre, images, textes\u2026) et des sous-calques par zone ;
      - des trac\u00e9s vectoriels (couleurs RVB exactes, d\u00e9grad\u00e9s lin\u00e9aires, trac\u00e9s transpar\u00e9s : cadres, anneaux) ;
      - de vrais textes modifiables (police, corps, approche, \u00e9chelles, alignement) cal\u00e9s sur l'encre de la maquette ;
      - pour chaque image : un groupe de d\u00e9coupe (colle ton image dans le groupe, sous le trac\u00e9 de d\u00e9coupe) ;
      - les rep\u00e8res : zone de s\u00e9curit\u00e9 et plis (rep\u00e8res comment\u00e9s), zones r\u00e9serv\u00e9es dans un calque masqu\u00e9.
    Polices : installe celles du dossier lib/fonts de l'atelier avant de lancer le script.
    Le fichier .ai est enregistr\u00e9 \u00e0 c\u00f4t\u00e9 de ce script.
*/
(function () {
 try {
  var SCENE = {"titre": "Carte Invitation Carddass \u2014 verso 65x90", "fichier": "carte_invitation_verso", "largeur": 839, "hauteur": 1134, "reperes": {"coupe": [35.43307086614173, 803.1496062992126, 35.43307086614173, 1098.4251968503938], "secu": [64.96062992125985, 773.6220472440945, 64.96062992125985, 1068.8976377952756]}, "plis": [], "polices": ["MPLUS1p-Medium", "OpenSans-CondensedBoldItalic"], "items": [{"calque": "fond", "calqueNom": "Fond, cadre or & cartouches", "groupe": "", "nom": "Fond noir", "type": "forme", "couleur": [23, 20, 28], "chemins": [[{"a": [-0.03, -0.0]}, {"a": [838.51, -0.0]}, {"a": [838.51, 1133.79]}, {"a": [-0.03, 1133.79]}]]}, {"calque": "fond", "calqueNom": "Fond, cadre or & cartouches", "groupe": "", "nom": "Cadre or", "type": "forme", "couleur": [217, 152, 15], "chemins": [[{"a": [99.41, 68.5]}, {"a": [176.18, 68.5]}, {"a": [176.18, 131.09]}, {"a": [158.46, 131.09]}, {"a": [158.46, 152.35]}, {"a": [138.39, 152.35]}, {"a": [138.39, 733.42]}, {"a": [116.89, 733.42]}, {"a": [116.89, 1029.86]}, {"a": [721.58, 1029.86]}, {"a": [721.58, 733.42]}, {"a": [700.09, 733.42]}, {"a": [700.09, 152.35]}, {"a": [680.01, 152.35]}, {"a": [680.01, 131.09]}, {"a": [662.3, 131.09]}, {"a": [662.3, 68.5]}, {"a": [739.06, 68.5]}, {"a": [739.06, 93.3]}, {"a": [766.23, 93.3]}, {"a": [766.23, 1041.67]}, {"a": [739.3, 1041.67]}, {"a": [739.3, 1068.84]}, {"a": [99.18, 1068.84]}, {"a": [99.18, 1041.67]}, {"a": [72.25, 1041.67]}, {"a": [72.25, 93.3]}, {"a": [99.41, 93.3]}]]}, {"calque": "fond", "calqueNom": "Fond, cadre or & cartouches", "groupe": "", "nom": "Cartouche blanc (haut)", "type": "forme", "couleur": [245, 243, 239], "chemins": [[{"a": [192.48, -0.0]}, {"a": [646.0, -0.0]}, {"a": [646.0, 255.1]}, {"a": [192.48, 255.1]}]]}, {"calque": "fond", "calqueNom": "Fond, cadre or & cartouches", "groupe": "", "nom": "Encadr\u00e9 blanc", "type": "forme", "couleur": [245, 243, 239], "chemins": [[{"a": [706.23, 747.0]}, {"a": [706.46, 747.02]}, {"a": [706.69, 747.06]}, {"a": [706.91, 747.14]}, {"a": [707.12, 747.24]}, {"a": [707.31, 747.37]}, {"a": [707.48, 747.52]}, {"a": [707.64, 747.7]}, {"a": [707.77, 747.89]}, {"a": [707.87, 748.1]}, {"a": [707.94, 748.32]}, {"a": [707.99, 748.54]}, {"a": [708.0, 748.77]}, {"a": [708.0, 1015.1]}, {"a": [707.99, 1015.33]}, {"a": [707.94, 1015.56]}, {"a": [707.87, 1015.78]}, {"a": [707.77, 1015.98]}, {"a": [707.64, 1016.18]}, {"a": [707.48, 1016.35]}, {"a": [707.31, 1016.5]}, {"a": [707.12, 1016.63]}, {"a": [706.91, 1016.74]}, {"a": [706.69, 1016.81]}, {"a": [706.46, 1016.86]}, {"a": [706.23, 1016.87]}, {"a": [132.25, 1016.87]}, {"a": [132.01, 1016.86]}, {"a": [131.79, 1016.81]}, {"a": [131.57, 1016.74]}, {"a": [131.36, 1016.63]}, {"a": [131.17, 1016.5]}, {"a": [130.99, 1016.35]}, {"a": [130.84, 1016.18]}, {"a": [130.71, 1015.98]}, {"a": [130.61, 1015.78]}, {"a": [130.53, 1015.56]}, {"a": [130.49, 1015.33]}, {"a": [130.47, 1015.1]}, {"a": [130.47, 748.77]}, {"a": [130.49, 748.54]}, {"a": [130.53, 748.32]}, {"a": [130.61, 748.1]}, {"a": [130.71, 747.89]}, {"a": [130.84, 747.7]}, {"a": [130.99, 747.52]}, {"a": [131.17, 747.37]}, {"a": [131.36, 747.24]}, {"a": [131.57, 747.14]}, {"a": [131.79, 747.06]}, {"a": [132.01, 747.02]}, {"a": [132.25, 747.0]}]]}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Titre \u2013 ombre jaune", "nom": "INVITATION", "type": "texte", "texte": "INVITATION", "runs": [{"de": 0, "a": 10, "police": "OpenSans-CondensedBoldItalic", "taille": 145.23, "approche": 0, "interligne": 198.41, "couleur": [242, 204, 18], "italique": false, "gras": false, "echelleH": 107.22, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 10, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [417.04, 419.47], "angle": 0.0, "encre": [644.06, 107.94], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Titre \u2013 ombre jaune", "nom": "CARDDASS", "type": "texte", "texte": "CARDDASS", "runs": [{"de": 0, "a": 8, "police": "OpenSans-CondensedBoldItalic", "taille": 145.23, "approche": 0, "interligne": 198.41, "couleur": [242, 204, 18], "italique": false, "gras": false, "echelleH": 118.34, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 8, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [417.52, 593.47], "angle": 0.0, "encre": [633.02, 106.67], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Titre", "nom": "INVITATION", "type": "texte", "texte": "INVITATION", "runs": [{"de": 0, "a": 10, "police": "OpenSans-CondensedBoldItalic", "taille": 145.23, "approche": 0, "interligne": 198.41, "couleur": [224, 24, 28], "italique": false, "gras": false, "echelleH": 107.22, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 10, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [425.91, 408.21], "angle": 0.0, "encre": [644.06, 107.94], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Titre", "nom": "CARDDASS", "type": "texte", "texte": "CARDDASS", "runs": [{"de": 0, "a": 8, "police": "OpenSans-CondensedBoldItalic", "taille": 145.23, "approche": 0, "interligne": 198.41, "couleur": [224, 24, 28], "italique": false, "gras": false, "echelleH": 118.35, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 8, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [426.82, 582.18], "angle": 0.0, "encre": [633.08, 106.67], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u30fb\u672c\u5238\uff11\u679a\u306b\u3064\u304d", "type": "texte", "texte": "\u30fb\u672c\u5238\uff11\u679a\u306b\u3064\u304d", "runs": [{"de": 0, "a": 1, "police": "MPLUS1p-Medium", "taille": 39.38, "approche": 0, "interligne": 63.58, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 87.26, "echelleV": 100.0, "decalage": 0.0}, {"de": 1, "a": 3, "police": "MPLUS1p-Medium", "taille": 39.38, "approche": 0, "interligne": 63.58, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 87.26, "echelleV": 100.0, "decalage": 0.0}, {"de": 3, "a": 4, "police": "MPLUS1p-Medium", "taille": 39.38, "approche": 0, "interligne": 63.58, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 87.26, "echelleV": 100.0, "decalage": 0.0}, {"de": 4, "a": 5, "police": "MPLUS1p-Medium", "taille": 39.38, "approche": 0, "interligne": 63.58, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 87.26, "echelleV": 100.0, "decalage": 0.0}, {"de": 5, "a": 8, "police": "MPLUS1p-Medium", "taille": 39.38, "approche": 0, "interligne": 63.58, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 87.26, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 8, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [281.82, 798.23], "angle": 0.0, "encre": [258.76, 37.66], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u307b\u3093\u3051\u3093", "type": "texte", "texte": "\u307b\u3093\u3051\u3093", "runs": [{"de": 0, "a": 4, "police": "MPLUS1p-Medium", "taille": 15.35, "approche": 0, "interligne": 15.35, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 87.26, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 4, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [208.71, 763.46], "angle": 0.0, "encre": [52.14, 14.15], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u307e\u3044", "type": "texte", "texte": "\u307e\u3044", "runs": [{"de": 0, "a": 2, "police": "MPLUS1p-Medium", "taille": 15.35, "approche": 0, "interligne": 15.35, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 87.26, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 2, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [293.5, 763.85], "angle": 0.0, "encre": [24.77, 14.19], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u3054\uff11\u540d\u69d8\u3001\uff11\u56de\u3054\u5165\u5834\u3067\u304d\u307e\u3059\u3002", "type": "texte", "texte": "\u3054\uff11\u540d\u69d8\u3001\uff11\u56de\u3054\u5165\u5834\u3067\u304d\u307e\u3059\u3002", "runs": [{"de": 0, "a": 2, "police": "MPLUS1p-Medium", "taille": 39.38, "approche": 0, "interligne": 63.58, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 82.53, "echelleV": 100.0, "decalage": 0.0}, {"de": 2, "a": 4, "police": "MPLUS1p-Medium", "taille": 39.38, "approche": 0, "interligne": 63.58, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 82.53, "echelleV": 100.0, "decalage": 0.0}, {"de": 4, "a": 6, "police": "MPLUS1p-Medium", "taille": 39.38, "approche": 0, "interligne": 63.58, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 82.53, "echelleV": 100.0, "decalage": 0.0}, {"de": 6, "a": 7, "police": "MPLUS1p-Medium", "taille": 39.38, "approche": 0, "interligne": 63.58, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 82.53, "echelleV": 100.0, "decalage": 0.0}, {"de": 7, "a": 8, "police": "MPLUS1p-Medium", "taille": 39.38, "approche": 0, "interligne": 63.58, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 82.53, "echelleV": 100.0, "decalage": 0.0}, {"de": 8, "a": 10, "police": "MPLUS1p-Medium", "taille": 39.38, "approche": 0, "interligne": 63.58, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 82.53, "echelleV": 100.0, "decalage": 0.0}, {"de": 10, "a": 15, "police": "MPLUS1p-Medium", "taille": 39.38, "approche": 0, "interligne": 63.58, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 82.53, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 15, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [410.02, 859.39], "angle": 0.0, "encre": [464.51, 37.63], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u3081\u3044\u3055\u307e", "type": "texte", "texte": "\u3081\u3044\u3055\u307e", "runs": [{"de": 0, "a": 4, "police": "MPLUS1p-Medium", "taille": 15.35, "approche": 0, "interligne": 15.35, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 82.53, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 4, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [269.79, 824.77], "angle": 0.0, "encre": [49.31, 14.15], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u304b\u3044", "type": "texte", "texte": "\u304b\u3044", "runs": [{"de": 0, "a": 2, "police": "MPLUS1p-Medium", "taille": 15.35, "approche": 0, "interligne": 15.35, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 82.53, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 2, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [386.73, 825.16], "angle": 0.0, "encre": [24.72, 14.19], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u306b\u3085\u3046\u3058\u3087\u3046", "type": "texte", "texte": "\u306b\u3085\u3046\u3058\u3087\u3046", "runs": [{"de": 0, "a": 6, "police": "MPLUS1p-Medium", "taille": 15.35, "approche": 0, "interligne": 15.35, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 82.53, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 6, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [466.84, 824.48], "angle": 0.0, "encre": [72.5, 14.12], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u30fb\u5f53\u65e5\u306f\u5fc5\u305a\u672c\u5238\u3092\u3054\u6301\u53c2\u304f\u3060\u3055\u3044\u3002", "type": "texte", "texte": "\u30fb\u5f53\u65e5\u306f\u5fc5\u305a\u672c\u5238\u3092\u3054\u6301\u53c2\u304f\u3060\u3055\u3044\u3002", "runs": [{"de": 0, "a": 1, "police": "MPLUS1p-Medium", "taille": 39.92, "approche": 0, "interligne": 65.34, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 84.16, "echelleV": 100.0, "decalage": 0.0}, {"de": 1, "a": 3, "police": "MPLUS1p-Medium", "taille": 39.92, "approche": 0, "interligne": 65.34, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 84.16, "echelleV": 100.0, "decalage": 0.0}, {"de": 3, "a": 4, "police": "MPLUS1p-Medium", "taille": 39.92, "approche": 0, "interligne": 65.34, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 84.16, "echelleV": 100.0, "decalage": 0.0}, {"de": 4, "a": 5, "police": "MPLUS1p-Medium", "taille": 39.92, "approche": 0, "interligne": 65.34, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 84.16, "echelleV": 100.0, "decalage": 0.0}, {"de": 5, "a": 6, "police": "MPLUS1p-Medium", "taille": 39.92, "approche": 0, "interligne": 65.34, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 84.16, "echelleV": 100.0, "decalage": 0.0}, {"de": 6, "a": 8, "police": "MPLUS1p-Medium", "taille": 39.92, "approche": 0, "interligne": 65.34, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 84.16, "echelleV": 100.0, "decalage": 0.0}, {"de": 8, "a": 10, "police": "MPLUS1p-Medium", "taille": 39.92, "approche": 0, "interligne": 65.34, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 84.16, "echelleV": 100.0, "decalage": 0.0}, {"de": 10, "a": 12, "police": "MPLUS1p-Medium", "taille": 39.92, "approche": 0, "interligne": 65.34, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 84.16, "echelleV": 100.0, "decalage": 0.0}, {"de": 12, "a": 17, "police": "MPLUS1p-Medium", "taille": 39.92, "approche": 0, "interligne": 65.34, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 84.16, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 17, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [420.59, 922.52], "angle": 0.0, "encre": [535.49, 39.08], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u3068\u3046\u3058\u3064", "type": "texte", "texte": "\u3068\u3046\u3058\u3064", "runs": [{"de": 0, "a": 4, "police": "MPLUS1p-Medium", "taille": 15.35, "approche": 0, "interligne": 15.35, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 84.16, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 4, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [207.56, 889.12], "angle": 0.0, "encre": [50.29, 14.15], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u304b\u306a\u3089", "type": "texte", "texte": "\u304b\u306a\u3089", "runs": [{"de": 0, "a": 3, "police": "MPLUS1p-Medium", "taille": 15.35, "approche": 0, "interligne": 15.35, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 84.16, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 3, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [289.21, 889.31], "angle": 0.0, "encre": [37.1, 14.17], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u307b\u3093\u3051\u3093", "type": "texte", "texte": "\u307b\u3093\u3051\u3093", "runs": [{"de": 0, "a": 4, "police": "MPLUS1p-Medium", "taille": 15.35, "approche": 0, "interligne": 15.35, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 84.16, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 4, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [374.56, 889.12], "angle": 0.0, "encre": [50.29, 14.15], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u3058\u3055\u3093", "type": "texte", "texte": "\u3058\u3055\u3093", "runs": [{"de": 0, "a": 3, "police": "MPLUS1p-Medium", "taille": 15.35, "approche": 0, "interligne": 15.35, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 84.16, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 3, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [510.13, 889.31], "angle": 0.0, "encre": [37.1, 14.17], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u30fb\u304a\u554f\u3044\u5408\u308f\u305b\uff0f0120-357512", "type": "texte", "texte": "\u30fb\u304a\u554f\u3044\u5408\u308f\u305b\uff0f0120-357512", "runs": [{"de": 0, "a": 2, "police": "MPLUS1p-Medium", "taille": 39.84, "approche": 0, "interligne": 65.11, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 80.52, "echelleV": 100.0, "decalage": 0.0}, {"de": 2, "a": 3, "police": "MPLUS1p-Medium", "taille": 39.84, "approche": 0, "interligne": 65.11, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 80.52, "echelleV": 100.0, "decalage": 0.0}, {"de": 3, "a": 4, "police": "MPLUS1p-Medium", "taille": 39.84, "approche": 0, "interligne": 65.11, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 80.52, "echelleV": 100.0, "decalage": 0.0}, {"de": 4, "a": 5, "police": "MPLUS1p-Medium", "taille": 39.84, "approche": 0, "interligne": 65.11, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 80.52, "echelleV": 100.0, "decalage": 0.0}, {"de": 5, "a": 19, "police": "MPLUS1p-Medium", "taille": 39.84, "approche": 0, "interligne": 65.11, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 80.52, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 19, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [382.56, 983.74], "angle": 0.0, "encre": [458.38, 37.53], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u3068", "type": "texte", "texte": "\u3068", "runs": [{"de": 0, "a": 1, "police": "MPLUS1p-Medium", "taille": 15.35, "approche": 0, "interligne": 15.35, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 80.52, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 1, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [221.72, 950.1], "angle": 0.0, "encre": [8.9, 14.21], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Encadr\u00e9", "nom": "\u3042", "type": "texte", "texte": "\u3042", "runs": [{"de": 0, "a": 1, "police": "MPLUS1p-Medium", "taille": 15.35, "approche": 0, "interligne": 15.35, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 80.52, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 1, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [284.63, 950.1], "angle": 0.0, "encre": [11.45, 14.21], "vertical": false, "boite": null}, {"calque": "texte", "calqueNom": "Textes", "groupe": "Copyright", "nom": "\u00a9\u30d0\u30fc\u30c9\u30b9\u30bf\u30b8\u30aa/\u96c6\u82f1\u793e\u30fb\u30d5\u30b8\u30c6\u30ec\u30d3\u30fb\u6771\u6620\u52d5\u753b", "type": "texte", "texte": "\u00a9\u30d0\u30fc\u30c9\u30b9\u30bf\u30b8\u30aa/\u96c6\u82f1\u793e\u30fb\u30d5\u30b8\u30c6\u30ec\u30d3\u30fb\u6771\u6620\u52d5\u753b", "runs": [{"de": 0, "a": 23, "police": "MPLUS1p-Medium", "taille": 23.17, "approche": 0, "interligne": 23.92, "couleur": [26, 23, 24], "italique": false, "gras": false, "echelleH": 110.64, "echelleV": 100.0, "decalage": 0.0}], "paras": [{"de": 0, "a": 23, "align": "left", "retrait1": 0.0, "retraitG": 0.0}], "centre": [420.5, 1048.9], "angle": 0.0, "encre": [571.62, 23.48], "vertical": false, "boite": null}], "motifs": {}};
  if (!confirm("Atelier Retro (Illustrator)\n\nConstruire le document \u00ab " + SCENE.titre + " \u00bb ?")) return;

  var K = 72 / 300;                       // px sc\u00e8ne (300 ppi) -> points
  var erreurs = [];
  var R = SCENE.reperes;
  var B = R.coupe[0] * K;                 // fond perdu (pt)
  var LT = (R.coupe[1] - R.coupe[0]) * K; // largeur finie (pt)
  var HT = (R.coupe[3] - R.coupe[2]) * K; // hauteur finie (pt)

  // ---------- Polices ----------
  var manquantes = [], polices = {};
  for (var i = 0; i < SCENE.polices.length; i++) {
    try { polices[SCENE.polices[i]] = app.textFonts.getByName(SCENE.polices[i]); }
    catch (e) { manquantes.push(SCENE.polices[i]); }
  }
  if (manquantes.length) {
    if (!confirm("Polices non install\u00e9es (Illustrator les remplacera) :\n\n  " + manquantes.join("\n  ") +
                 "\n\nInstalle-les depuis lib/fonts puis relance, ou clique OK pour continuer quand m\u00eame.")) return;
  }

  // ---------- Document ----------
  var doc = null;
  try {
    var pr = new DocumentPreset();
    pr.width = LT; pr.height = HT; pr.colorMode = DocumentColorSpace.RGB; pr.units = RulerUnits.Millimeters;
    pr.title = SCENE.fichier; pr.numArtboards = 1;
    try { pr.documentBleedLink = true; pr.documentBleedOffset = [B, B, B, B]; } catch (eb) {}
    doc = app.documents.addDocument("Print", pr, false);
  } catch (e1) {
    doc = app.documents.add(DocumentColorSpace.RGB, LT, HT);
  }
  app.coordinateSystem = CoordinateSystem.DOCUMENTCOORDINATESYSTEM;
  var AB = doc.artboards[0].artboardRect;  // [gauche, haut, droite, bas] en coordonn\u00e9es document (y vers le haut)

  // point sc\u00e8ne (px, origine = coin du fond perdu, y vers le bas) -> point document
  function P(p) { return [AB[0] + p[0] * K - B, AB[1] - (p[1] * K - B)]; }

  function rvb(c) { var r = new RGBColor(); r.red = c[0]; r.green = c[1]; r.blue = c[2]; return r; }

  // ---------- Calques ----------
  var calques = {};
  var calqueInitial = doc.layers[0];
  function calqueDe(it) {
    var cle = it.calque, parent = calques[cle];
    if (!parent) {
      parent = doc.layers.add(); parent.name = it.calqueNom; calques[cle] = parent;
      if (cle.indexOf("zone:") === 0) parent.visible = false;
    }
    if (!it.groupe) return parent;
    var cle2 = cle + "/" + it.groupe, g = calques[cle2];
    if (!g) { g = parent.layers.add(); g.name = it.groupe; calques[cle2] = g; }
    return g;
  }

  // ---------- Trac\u00e9s ----------
  function sousTrace(conteneur, pts) {
    var p = conteneur.pathItems.add(), tab = [];
    for (var k = 0; k < pts.length; k++) tab.push(P(pts[k].a));
    p.setEntirePath(tab); p.closed = true;
    return p;
  }
  // chemins : liste de sous-trac\u00e9s ; xor : les suivants percent le premier (cadre, anneau)
  function trace(conteneur, chemins, nom, remplir) {
    var objet;
    if (chemins.length === 1) {
      objet = sousTrace(conteneur, chemins[0]); remplir(objet);
    } else {
      objet = conteneur.compoundPathItems.add();
      for (var c = 0; c < chemins.length; c++) {
        var s = sousTrace(objet, chemins[c]);
        s.evenodd = true; remplir(s);
      }
    }
    objet.name = nom;
    return objet;
  }
  function uni(c) { return function (p) { p.filled = true; p.fillColor = rvb(c); p.stroked = false; }; }

  // D\u00e9grad\u00e9 lin\u00e9aire : angle \u00e0 la mani\u00e8re de Photoshop (0 = gauche->droite, 90 = bas->haut)
  var nDeg = 0;
  function nuancier(stops) {
    var g = doc.gradients.add(); g.name = "Atelier " + (++nDeg); g.type = GradientType.LINEAR;
    while (g.gradientStops.length < stops.length) g.gradientStops.add();
    for (var s = 0; s < stops.length; s++) {
      var gs = g.gradientStops[s];
      gs.rampPoint = Math.max(0, Math.min(100, stops[s].pos * 100));
      gs.midPoint = 50; gs.color = rvb(stops[s].c);
    }
    return g;
  }
  function degrade(stops, angle) {
    var g = nuancier(stops);
    return function (p) {
      var gc = new GradientColor(); gc.gradient = g;
      p.filled = true; p.stroked = false; p.fillColor = gc;
      // d\u00e9grad\u00e9 couvrant toute la bo\u00eete dans la direction voulue
      var b = p.geometricBounds, cx = (b[0] + b[2]) / 2, cy = (b[1] + b[3]) / 2;
      var a = angle * Math.PI / 180, w = b[2] - b[0], h = b[1] - b[3];
      var lg = Math.abs(w * Math.cos(a)) + Math.abs(h * Math.sin(a));
      try {
        var gc2 = new GradientColor(); gc2.gradient = g; gc2.angle = angle; gc2.length = lg;
        gc2.origin = [cx - Math.cos(a) * lg / 2, cy - Math.sin(a) * lg / 2];
        p.fillColor = gc2;
      } catch (e) { try { p.rotate(angle, false, false, true, false, Transformation.CENTER); } catch (e2) {} }
    };
  }
  function couleurMoyenne(stops) { return stops[Math.floor(stops.length / 2)].c; }

  // ---------- Textes ----------
  var JUST = { left: Justification.LEFT, center: Justification.CENTER, right: Justification.RIGHT,
               justifyLeft: Justification.FULLJUSTIFYLASTLINELEFT, justifyAll: Justification.FULLJUSTIFY };

  function boiteEncre(tf) {  // emprise r\u00e9elle des glyphes (contours provisoires)
    var d = tf.duplicate(), o = d.createOutline(), b = o.geometricBounds;
    o.remove();
    return b;
  }
  function styler(ca, ru, couleur) {
    var f = polices[ru.police];
    if (f) ca.textFont = f;
    ca.size = ru.taille * K;
    ca.tracking = ru.approche;
    ca.horizontalScale = ru.echelleH;
    ca.verticalScale = (ru.echelleV && Math.abs(ru.echelleV - 100) > 0.5) ? ru.echelleV : 100;
    ca.baselineShift = (ru.decalage && Math.abs(ru.decalage) > 0.05) ? ru.decalage * K : 0;
    if (ru.interligne) { ca.autoLeading = false; ca.leading = ru.interligne * K; } else ca.autoLeading = true;
    ca.fillColor = rvb(couleur || ru.couleur);
    if (ru.gras) { ca.strokeColor = rvb(couleur || ru.couleur); ca.strokeWeight = ru.taille * K * 0.025; }  // gras simul\u00e9
  }
  function creerTexte(conteneur, it) {
    var tf;
    if (it.boite) {
      var r = conteneur.pathItems.rectangle(0, 0, it.boite.l * K, it.boite.h * K);
      tf = conteneur.textFrames.areaText(r);
    } else tf = conteneur.textFrames.add();
    if (it.vertical) { try { tf.orientation = TextOrientation.VERTICAL; } catch (e) {} }
    tf.contents = it.texte.replace(/\n/g, "\r");
    var n = tf.characters.length;
    for (var i = 0; i < it.runs.length; i++) {
      var ru = it.runs[i];
      if (ru.de === 0 && ru.a >= n) { styler(tf.textRange.characterAttributes, ru); continue; }
      for (var k = ru.de; k < Math.min(ru.a, n); k++) styler(tf.characters[k].characterAttributes, ru);
    }
    for (var j = 0; j < it.paras.length && j < tf.paragraphs.length; j++) {
      var pa = it.paras[j], pp = tf.paragraphs[j].paragraphAttributes;
      try { pp.justification = JUST[pa.align] || Justification.LEFT; } catch (e) {}
      try { pp.firstLineIndent = pa.retrait1 * K; pp.leftIndent = pa.retraitG * K; } catch (e) {}
    }
    var ital = false;
    for (var q = 0; q < it.runs.length; q++) if (it.runs[q].italique) ital = true;
    if (ital) {  // italique simul\u00e9 : inclinaison de 12\u00b0
      var m = app.getIdentityMatrix(); m.mValueC = Math.tan(12 * Math.PI / 180);
      tf.transform(m);
    }
    return tf;
  }
  // Place le centre de l'encre sur le point voulu, puis tourne autour de ce point
  function placer(objet, centre, angle, ref) {
    var b = boiteEncre(ref || objet), c = P(centre);
    var dx = c[0] - (b[0] + b[2]) / 2, dy = c[1] - (b[1] + b[3]) / 2;
    objet.translate(dx, dy);
    if (Math.abs(angle) > 0.01) {
      objet.translate(-c[0], -c[1]);
      objet.rotate(-angle, true, true, true, true, Transformation.DOCUMENTORIGIN);
      objet.translate(c[0], c[1]);
    }
  }
  function ajusterApproche(tf, it) {  // largeur d'encre exacte des lignes simples
    if (it.vertical || it.boite || it.runs.length !== 1 || it.texte.indexOf("\r") >= 0 || it.texte.length < 3) return;
    var b = boiteEncre(tf), w = b[2] - b[0], cible = it.encre[0] * K;
    if (w > 0 && Math.abs(w - cible) / cible > 0.01) {
      var delta = (cible - w) / (it.texte.length - 1) / (it.runs[0].taille * K) * 1000;
      try { tf.textRange.characterAttributes.tracking = it.runs[0].approche + Math.round(delta); } catch (e) {}
    }
  }
  function texte(conteneur, it) {
    var tf = creerTexte(conteneur, it);
    tf.name = it.nom;
    ajusterApproche(tf, it);
    if (it.degradeTexte) {
      try {
        var g = nuancier(it.degradeTexte.stops), gc = new GradientColor(); gc.gradient = g;
        try { gc.angle = it.degradeTexte.angle; } catch (ea) {}  // dans le rep\u00e8re du texte (-90 = haut -> bas)
        tf.textRange.characterAttributes.fillColor = gc;
      } catch (e) { erreurs.push(it.nom + " (d\u00e9grad\u00e9 du texte remplac\u00e9 par une couleur unie) : " + e.message);
                    tf.textRange.characterAttributes.fillColor = rvb(couleurMoyenne(it.degradeTexte.stops)); }
    }
    var objet = tf;
    if (it.contour) {
      var ct = it.contour;
      if (ct.centre || it.contourSeul) {
        tf.textRange.characterAttributes.strokeColor = rvb(ct.couleur);
        tf.textRange.characterAttributes.strokeWeight = ct.taille * K;
        if (it.contourSeul) tf.textRange.characterAttributes.fillColor = new NoColor();
      } else {  // contour ext\u00e9rieur : copie dessous, filet double \u00e9paisseur
        var dessous = tf.duplicate(); dessous.name = it.nom + " (contour)";
        dessous.textRange.characterAttributes.strokeColor = rvb(ct.couleur);
        dessous.textRange.characterAttributes.strokeWeight = 2 * ct.taille * K;
        dessous.textRange.characterAttributes.fillColor = rvb(ct.couleur);
        dessous.move(tf, ElementPlacement.PLACEAFTER);
        var gr = conteneur.groupItems.add(); gr.name = it.nom;
        dessous.move(gr, ElementPlacement.PLACEATEND); tf.move(gr, ElementPlacement.PLACEATBEGINNING);
        objet = gr;
      }
    }
    placer(objet, it.centre, it.angle, tf);
    if (it.masque) {
      try {
        var gm = conteneur.groupItems.add(); gm.name = it.nom + " (masque)";
        objet.move(gm, ElementPlacement.PLACEATEND);
        var mp = sousTrace(gm, (function () { var t = []; for (var u = 0; u < it.masque.length; u++) t.push({ a: it.masque[u] }); return t; })());
        mp.move(gm, ElementPlacement.PLACEATBEGINNING); mp.clipping = true; gm.clipped = true;
      } catch (e) { erreurs.push(it.nom + " (masque) : " + e.message); }
    }
    return tf;
  }
  // ---------- Textures incrust\u00e9es (motif bois\u2026) ----------
  // PNG embarqu\u00e9 en base64 : \u00e9crit dans le dossier temporaire, import\u00e9 (incorpor\u00e9), puis masqu\u00e9 par une
  // copie du texte (masque d'\u00e9cr\u00eatage \u00e0 texte vivant). Le texte d'origine reste dessous, modifiable.
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
  function poserMotif(conteneur, tf, it) {
    var m = SCENE.motifs[it.motif];
    var img = conteneur.placedItems.add();
    img.file = fichierMotif(it.motif);
    img.width = m.l * K; img.height = m.h * K;
    var c = P(it.centre), b = img.geometricBounds;
    img.translate(c[0] - (b[0] + b[2]) / 2, c[1] - (b[1] + b[3]) / 2);
    try { img.embed(); img = conteneur.pageItems[0]; } catch (e0) {}  // incorpor\u00e9e : devient une image (RasterItem) au m\u00eame rang
    var masque = tf.duplicate();
    masque.move(img, ElementPlacement.PLACEBEFORE);  // au-dessus de l'image
    doc.selection = null;
    masque.selected = true; img.selected = true;
    app.executeMenuCommand("makeMask");  // masque d'\u00e9cr\u00eatage : le texte copi\u00e9 d\u00e9coupe la texture
    var g = doc.selection[0];
    if (g) g.name = "Motif " + it.motif + " (incrust\u00e9 dans \u00ab " + it.nom + " \u00bb)";
    doc.selection = null;
    return g;
  }

  function arc(conteneur, it) {
    var sc = conteneur.layers.add(); sc.name = it.nom;
    for (var i = 0; i < it.car.length; i++) {
      var c = it.car[i];
      if (c.c === " ") continue;
      var tf = creerTexte(sc, { texte: c.c, runs: [{ de: 0, a: 1, police: it.police, taille: it.taille, approche: 0, echelleH: 100,
                                   italique: it.italique, gras: false, interligne: null, couleur: it.couleur }],
                                paras: [{ de: 0, a: 1, align: "left", retrait1: 0, retraitG: 0 }] });
      tf.name = c.c;
      placer(tf, c.centre, c.angle);
    }
  }

  // ---------- Construction ----------
  for (var n = 0; n < SCENE.items.length; n++) {
    var it = SCENE.items[n];
    try {
      var cont = calqueDe(it);
      if (it.type === "forme") trace(cont, it.chemins, it.nom, uni(it.couleur));
      else if (it.type === "degrade") {
        try { trace(cont, it.chemins, it.nom, degrade(it.stops, it.angle)); }
        catch (e) { erreurs.push(it.nom + " (d\u00e9grad\u00e9 remplac\u00e9 par une couleur unie) : " + e.message);
                    trace(cont, it.chemins, it.nom, uni(couleurMoyenne(it.stops))); }
      }
      else if (it.type === "texte") {
        var tfx = texte(cont, it);
        if (it.motif && SCENE.motifs && SCENE.motifs[it.motif]) {
          try { poserMotif(cont, tfx, it); } catch (e) { erreurs.push(it.nom + " (motif " + it.motif + ") : " + e.message); }
        }
      }
      else if (it.type === "arc") arc(cont, it);
      else if (it.type === "image") {
        var g = cont.groupItems.add(); g.name = it.calqueNom + " : colle ton image dans ce groupe";
        var fond = trace(g, it.chemins, "Emplacement (\u00e0 remplacer)", uni([128, 128, 128]));
        if (it.detoure) fond.opacity = 0;  // image d\u00e9tour\u00e9e : la d\u00e9coupe ne se voit pas
        var decoupe = trace(g, it.chemins, "D\u00e9coupe \u2013 " + it.calqueNom, uni([128, 128, 128]));
        decoupe.clipping = true; g.clipped = true;
      }
      else if (it.type === "zone") {
        var z = trace(cont, it.chemins, "Zone \u2013 " + it.label, uni([0, 160, 233])); z.opacity = 30;
      }
    } catch (e) { erreurs.push((it.nom || it.type) + " : " + e.message); }
  }

  // ---------- Rep\u00e8res (zone de s\u00e9curit\u00e9, plis) ----------
  try {
    var rg = doc.layers.add(); rg.name = "Rep\u00e8res";
    var s = R.secu;  // [gauche, droite, haut, bas] en px sc\u00e8ne
    var a = P([s[0], s[2]]), b = P([s[1], s[3]]);
    var sec = rg.pathItems.rectangle(a[1], a[0], b[0] - a[0], a[1] - b[1]);
    sec.name = "Zone de s\u00e9curit\u00e9"; sec.filled = false; sec.guides = true;
    for (var pl = 0; pl < SCENE.plis.length; pl++) {
      var h = P([SCENE.plis[pl], 0]), bas = P([SCENE.plis[pl], SCENE.hauteur]);
      var l = rg.pathItems.add(); l.setEntirePath([h, bas]); l.name = "Pli"; l.guides = true;
    }
  } catch (e) { erreurs.push("Rep\u00e8res : " + e.message); }

  // calque vide cr\u00e9\u00e9 avec le document
  try { if (calqueInitial.pageItems.length === 0 && calqueInitial.layers.length === 0) calqueInitial.remove(); } catch (e) {}

  var fichier = new File(File($.fileName).parent.fsName + "/" + File($.fileName).name.replace(/\.jsx$/i, "").replace(/_illustrator$/i, "") + ".ai");
  try { var o = new IllustratorSaveOptions(); o.pdfCompatible = true; doc.saveAs(fichier, o); }
  catch (e) { erreurs.push("Enregistrement : " + e.message); }

  alert("Atelier Retro \u2014 document Illustrator construit.\n\n" +
        "Fichier : " + fichier.fsName + "\n" +
        "Plan de travail = format fini, fond perdu " + Math.round(B / 72 * 25.4 * 10) / 10 + " mm.\n" +
        (manquantes.length ? "\nPolices remplac\u00e9es : " + manquantes.join(", ") + "\n" : "") +
        (erreurs.length ? "\n\u00c9l\u00e9ments non cr\u00e9\u00e9s (" + erreurs.length + ") :\n- " + erreurs.slice(0, 12).join("\n- ") : "\nAucune erreur."));

 } catch (err) {
  alert("Atelier Retro \u2014 erreur\n\nLigne " + err.line + " : " + err.message +
        "\n\nEnvoie une capture de ce message a Claude.");
 }
})();
