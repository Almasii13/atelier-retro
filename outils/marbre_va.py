#!/usr/bin/env python3
"""Fond « marbre vert » des cartes Visual Adventure, procédural (format fini + fond perdu 3 mm, 20 px/mm).

  python3 outils/marbre_va.py sortie.png --fonce 24,76,58 --clair 160,200,172 [--graine 3]

Marbrure fine (grain) + veines claires diagonales, montant vers la droite comme sur les cartes.
Le marbre d'origine est caché aux trois quarts (fenêtre, personnage, bandes) : il est recréé plutôt que
recopié de la photo (une recopie donne des raccords visibles).
"""
import cv2, numpy as np
K=20; FP=3
def bruit(rng,H,W,cell):
    h=int(H/cell)+3; w=int(W/cell)+3
    g=rng.standard_normal((h,w)).astype(np.float32)
    return cv2.resize(g,(int(w*cell),int(h*cell)),interpolation=cv2.INTER_CUBIC)[:H,:W]
def fbm(rng,H,W,cell,oct=5,g=0.55):
    s=np.zeros((H,W),np.float32); a=1; t=0
    for o in range(oct):
        s+=a*bruit(rng,H,W,max(cell/2**o,1.5)); t+=a; a*=g
    return s/t
def rot(img,ang):
    H,W=img.shape; M=cv2.getRotationMatrix2D((W/2,H/2),ang,1)
    return cv2.warpAffine(img,M,(W,H),borderMode=cv2.BORDER_REFLECT)
def marbre(out,fonce,clair,seed=3,veines=1.0,angle=28,mott=0.55,gamma=1.0,sombre=0.0,lueur=None):
    rng=np.random.default_rng(seed)
    W,H=(65+2*FP)*K,(90+2*FP)*K; D=int(np.hypot(W,H))+8
    # veines : lignes de niveau d'un bruit étiré (ridged), déformé
    ve=np.zeros((D,D),np.float32)
    for ang,force,et,lg in [(angle,1.0,1.0,1.0),(angle+8,0.8,0.8,0.7),(angle-12,0.7,0.8,0.55),(angle+70,0.5,0.7,0.6),(angle-40,0.45,0.7,0.5),(angle+110,0.35,0.6,0.5)]:
        wx=fbm(rng,D,D,6*K,3)*0.7*K; wy=fbm(rng,D,D,6*K,3)*0.7*K
        X,Y=np.meshgrid(np.arange(D,dtype=np.float32),np.arange(D,dtype=np.float32))
        # étirement : bruit à cellule large en x, fine en y -> lignes allongées
        nx=cv2.resize(fbm(rng,D//5,D,7*K*lg,3,0.45),(D,D))   # étiré ×3 en y ... puis tourné
        nx=cv2.remap(nx,X+wx,Y+wy,cv2.INTER_LINEAR,borderMode=cv2.BORDER_REFLECT)
        r=np.exp(-(nx/(0.13*et))**2)          # crête fine autour de 0
        r*=np.clip(0.5+fbm(rng,D,D,7*K,3)*2.2,0,1)  # veines interrompues
        ve+=force*rot(r,ang+90)
    ve=ve[(D-H)//2:(D-H)//2+H,(D-W)//2:(D-W)//2+W]
    ve=cv2.GaussianBlur(ve,(0,0),2.5)
    gr=fbm(rng,H,W,0.22*K,2,0.6); gr=(gr-gr.mean())/gr.std()
    ve=ve*np.clip(0.75+0.45*gr,0,1.5)
    # marbrure : taches moyennes + grain fin
    mo=fbm(rng,H,W,1.2*K,3,0.6)*0.6+fbm(rng,H,W,0.25*K,2,0.5)*1.0
    mo=(mo-mo.mean())/mo.std()
    lo=fbm(rng,H,W,14*K,3)*1.0; lo=(lo-lo.mean())/lo.std()
    t=0.31+mott*0.16*mo+0.07*lo+veines*0.42*np.clip(ve,0,1.6)-sombre
    t=np.clip(t,0,1)**gamma
    c0=np.array(fonce[::-1],np.float32); c1=np.array(clair[::-1],np.float32)
    im=(c0+(c1-c0)*t[...,None])
    cv2.imwrite(out,np.clip(im,0,255).astype(np.uint8))
if __name__=='__main__':
    import argparse
    a=argparse.ArgumentParser(); a.add_argument('sortie'); a.add_argument('--fonce',default='36,76,58'); a.add_argument('--clair',default='160,200,172')
    a.add_argument('--graine',type=int,default=3); a.add_argument('--clarte',type=float,default=0.0)
    x=a.parse_args(); rgb=lambda s:[int(v) for v in s.split(',')]
    marbre(x.sortie,rgb(x.fonce),rgb(x.clair),seed=x.graine,sombre=-x.clarte)
