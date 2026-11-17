import sys, numpy as np
from PIL import Image
ys=[0,700,1150,1900,2440,3040,4000,4250,5020,6050,6560,7260,7663]
tot=[]
for i in range(0,len(ys),2):
    rows=[]
    for y in ys[i:i+2]:
        r=Image.open(f'reference/ref-y{y}.jpg').convert('RGB').resize((720,362))
        b=Image.open(f'qa/out/F-y{y}.png').convert('RGB').resize((720,362), Image.LANCZOS)
        d=np.abs(np.asarray(r,dtype=int)-np.asarray(b,dtype=int)).mean(axis=2)
        sim=100*(1-d.mean()/255); close=100*(d<32).mean(); tot.append((y,sim,close))
        row=Image.new('RGB',(1450,362),(255,0,255)); row.paste(r,(0,0)); row.paste(b,(730,0)); rows.append(row)
    im=Image.new('RGB',(1450,362*len(rows)+10*(len(rows)-1)),(255,0,255))
    for k,row in enumerate(rows): im.paste(row,(0,k*372))
    im.save(f'qa/out/cmp-{i//2}.png')
for y,s,c in tot: print(f'y{y}: mean-colour similarity {s:.1f}%  pixels within tolerance {c:.1f}%')
print('avg', round(sum(s for _,s,_ in tot)/len(tot),1), round(sum(c for _,_,c in tot)/len(tot),1))
