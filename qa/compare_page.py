import sys, glob, re, numpy as np
from PIL import Image
page, prefix = sys.argv[1], sys.argv[2]
tot=[]
for f in sorted(glob.glob(f'reference/{page}/ref-y*.jpg'), key=lambda s:int(re.search(r'y(\d+)',s).group(1))):
    y=int(re.search(r'y(\d+)',f).group(1))
    try: b=Image.open(f'qa/out/{prefix}-y{y}.png').convert('RGB')
    except FileNotFoundError: continue
    r=Image.open(f).convert('RGB'); w,h=r.size; b=b.resize((w, round(b.height*w/b.width)), Image.LANCZOS); hh=min(h,b.height)
    d=np.abs(np.asarray(r.crop((0,0,w,hh)),dtype=int)-np.asarray(b.crop((0,0,w,hh)),dtype=int)).mean(axis=2)
    tot.append((y,100*(1-d.mean()/255),100*(d<32).mean()))
    im=Image.new('RGB',(w*2+10,hh),(255,0,255)); im.paste(r.crop((0,0,w,hh)),(0,0)); im.paste(b.crop((0,0,w,hh)),(w+10,0)); im.save(f'qa/out/cmp-{page}-y{y}.png')
for y,s,c in tot: print(f'{page} y{y}: {s:.1f}% / {c:.1f}%')
if tot: print(page,'avg similarity', round(sum(s for _,s,_ in tot)/len(tot),1), 'within tolerance', round(sum(c for _,_,c in tot)/len(tot),1))
