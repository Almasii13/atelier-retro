#!/usr/bin/env python3
"""Fond de fenêtre de la carte Visual Adventure n° 268 (éclat jaune) tiré de la photo redressée (40 px/mm) :
le personnage est retiré (silhouette remplie du jaune voisin, fondu), le reste de l'illustration est gardé.

  python3 outils/fenetre_va.py photo_redressee_40pxmm.png sortie.png [x0 y0 x1 y1]
"""
import sys
import cv2,numpy as np
a=cv2.imread(sys.argv[1]);K=40
x0,y0,x1,y1=(map(float,sys.argv[3:7]) if len(sys.argv)>6 else (5.2,39.45,59.25,68.65))
w=a[int(y0*K):int(y1*K),int(x0*K):int(x1*K)].copy()
hsv=cv2.cvtColor(w,cv2.COLOR_BGR2HSV).astype(int)
ye=(hsv[...,0]>=12)&(hsv[...,0]<=40)&(hsv[...,1]>45)
wh=(((hsv[...,1]<=45)&(hsv[...,2]>185))|(((hsv[...,0]<12)|(hsv[...,0]>160))&(hsv[...,2]>150))).astype(np.uint8)
n,l,st,_=cv2.connectedComponentsWithStats(wh)
bgw=np.zeros(wh.shape,bool); H,W=wh.shape
for i in range(1,n):
    x,y,ww,hh,ar=st[i]
    if x<=4 or x+ww>=W-4: bgw|=(l==i)
fond=ye|bgw
ch=(~fond).astype(np.uint8)*255
ch=cv2.morphologyEx(ch,cv2.MORPH_OPEN,np.ones((5,5),np.uint8))
n,l,st,_=cv2.connectedComponentsWithStats(ch); keep=np.zeros_like(ch)
for i in range(1,n):
    if st[i,4]>20000: keep[l==i]=255
ch=cv2.morphologyEx(keep,cv2.MORPH_CLOSE,np.ones((25,25),np.uint8))
inv=(ch==0).astype(np.uint8); n,l,st,_=cv2.connectedComponentsWithStats(inv)
for i in range(1,n):
    x,y,ww,hh,ar=st[i]
    if not (x<=0 or y<=0 or x+ww>=W or y+hh>=H): ch[l==i]=255
ch=cv2.dilate(ch,np.ones((11,11),np.uint8))
ring=(cv2.dilate(ch,np.ones((31,31),np.uint8))>0)&(ch==0)&ye
jaune=np.median(w[ring],0)
al=cv2.GaussianBlur((ch>0).astype(np.float32),(0,0),5)[...,None]
o=w*(1-al)+jaune*al
o=cv2.bilateralFilter(o.astype(np.uint8),9,30,6)
cv2.imwrite(sys.argv[2],o[8:-8,8:-8])
