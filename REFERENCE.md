# Reference measurements — caldera.xyz home, captured 2026-11-17

Viewport 1440×723 (DPR 2). Document height 8386. All rects are `x,y,w,h` in **page** coordinates
(y includes scroll). Screenshots at 0.5 scale: `reference/ref-y<scrollY>.jpg`
(y = 0, 700, 1150, 1900, 2440, 3040, 4000, 4250, 5020, 6050, 6560, 7260, 7663).
The reference is a Framer site; its motion is re-implemented here in GSAP.

Fonts measured: display = PP Neue Corp Compact Ultrabold (here `.display` class, weight via class),
body = DM Sans 500. Colours measured: canvas #e2e2df, card #f7f6f2/#f7f6f3, ember #fc5000,
violet #524ae9, obsidian #070607, sulfur #f5f28e. Text on Ember buttons/cards measured as #f7f6f2.

Global layout: every section is a full-width row with 56px side padding; inner container x=56, w=1328.
Section stack (y, height): header-space 0/112 · hero 112/615 · ecosystem 727/1125 · products 1852/1990 ·
use-cases 3842/1125 · news 4967/983 · community 5950/1292 · sections("backed by") 7242/748 · footer 7989/397.
Each section's outer height MUST equal the reference so later sections land on the same page y.

## Header (fixed, top 0, 1440×112, padding 24px 40px)
- Wrapper pill: at page top `40,24,1360,64`, transparent bg, radius 800, padding 8px 8px 8px 24px.
- Left group x=64: logo `64,40,152,32`; dotted vertical divider `248,38,4,36` (1.5px dotted obsidian);
  menu starts x=284,y=44, links DM Sans 16px/24.8px w500 obsidian, gap 24px (5 links, ref widths 54,74,32,39,38).
  Each link has a 1px obsidian underline 20px below baseline box (y=64) at opacity 0 → 1 on hover.
- Right group `1068,32,324,48` gap 32: three 24×24 social icons (gap 24) at x=1068,1116,1164 y=44; divider `1220,38,4,36`;
  CTA pill `1256,32,136,48` ember, radius 800, padding 12px 24px, text DM Sans 16px/20px #f7f6f2.
- Scrolled state (scrollY > ~13): wrapper becomes a centred Limestone (#f7f6f2) pill `314,16,812,64`;
  the logo container clips to icon only (visible ~40px, wordmark hidden) so Left group is `338,30,420,36`,
  divider at x=396, menu at x=424; Right group `810,24,308,48`, CTA `982,24,136,48`. Animated transition (≈0.4–0.5s).
  See ref-y700 / ref-y1150 for the collapsed pill.

## Hero (section 0,112,1440,615; container 56,112,1328,615)
- Media block `56,112,1328,615`, radius 40: looping halftone artwork (orange dots over violet↔orange gradient,
  dot grid ≈ 9px pitch, dot size modulated by a slowly drifting field). Reference uses an MP4; here a custom
  looping canvas animation in the same style.
- Title box (canvas-coloured cut-out, top-left) `56,112,590,246`, bg #e2e2df, radius 0 0 40px 0;
  14px top padding, title `56,126,590,182` display 96px / 91.2px, two lines (line 2 at y=217), 50px bottom padding.
  Inverted-corner 40×40 SVGs (concave corner, canvas colour) at `645,112` (right of box, top) and `56,356` (below box, left).
- Description box (cut-out, bottom-right) `845,540,539,187`, bg #e2e2df, radius 40px 0 0 0; 40px top + 40px left padding;
  paragraph `885,580,499,54` DM Sans 18px/27px; 37px gap; buttons row `885,671` gap 16: two 242×56 pills
  (ember fill #f7f6f2 text 18px/20px; second: transparent with 1.5px dotted obsidian border, obsidian text).
  Inverted corners 40×40 at `805,687` (left of box, bottom) and `1344,504` (above box, right; rotated 180°).
- Appear (measured from Framer data): title box x −1000→0, delay 0.6s, 0.7s; description box x +1000→0, delay 0.6s, 0.7s;
  one element y 52→0 delay 1.4s 0.4s; one element opacity 0→1 + y 32→0 delay 1.6s 0.3s (assign: buttons row, paragraph).
  All "spring, bounce 0" → GSAP `power3.out`. Headline is split per character in the reference.

## Ecosystem (section 0,727,1440,1125; padding 168px 56px 200px)
- Heading block `283,895,874,256`, centred: h2 display 80px/88px two lines (y=895, 983), 32px gap,
  dotted pill button `605,1127,230,48` (padding 12px, 16px/20px).
- CORRECTED (first capture was mid-appear at scale 0.9): content `137,1231,1166,421`; stat cards row `137,1231,1166,251`: four cards 280×251 at x=137,432.5,728,1023.5 (gap 15.4), ember bg, radius 40, padding 40;
  label `+36,+36` DM Sans 18px/27px #f7f6f2; value at y+132 display 64px/64px #f7f6f2.
  Between adjacent cards a "connector": ember bridge 5px wide × 53px tall centred vertically in the 14px gap with
  concave rounded notches above and below (svg 14×127) — cards look fused by a small neck (see ref-y1150).
- Logo strip (resting) `137,1498,1166,154`, Limestone, radius 40, padding 40, six cells ≈146×74,
  separated by 2px-wide dotted vertical dividers (x=381,550,719,888,1058; h 67). Each cell holds a 131×49 slot that
  cycles vertically through several marks (current slides out downward, next slides in from above), staggered per cell.
- Scroll appear: cards row and logo strip start opacity 0 / scale 0.9 → 1; labels and values then fade in.

## Products (section 0,1852,1440,1990; padding 200px 56px 160px)
- Background: large pale halftone dot field (grey dots of varying radius on canvas, see ref-y1900) that drifts
  horizontally with scroll (translateX parallax). Sits behind content, full section.
- Heading `56,2052,1328,355`: display 189px / 177.66px, two lines, left aligned.
- Row 1 `56,2487,1328,589` gap 16: text card `56,2487,544,589` (#f7f6f3, radius 40, padding 40, space-between):
  icon tile `96,2527,83,83` obsidian radius 16 with 55px white dotted glyph; info block bottom-aligned `96,2782,464,254`:
  h4 display 40px/40px (max-w 380), 20px gap, p 16px/24.8px, 32px gap, dotted pill button h48 padding 12px 20px gap 18
  with 12×17 play-triangle arrow. Image block `616,2487,768,589` radius 40.
- Row 2 `56,3092,1328,589`: image `56,3092,768,589` then text card `840,3092,544,589` (h4 max-w 440; info `880,3363,464,279`).
- Reference images are flat isometric illustrations (violet bg row 1, ember bg row 2). Here: Unsplash photos with a
  duotone/halftone treatment keyed to violet (row 1) and ember (row 2), plus a looping animated overlay graphic.

## Use cases / tabs (section 0,3842,1440,1125; padding 200px 56px 100px)
- Heading `400,4042,640,180` centred, display 80px/88px two lines.
- Content `137,4302,1166,565` gap 16: nav column `137,4302,420,565` gap 16 + panel `573,4302,730,565`.
- Active tab card `137,4302,420,384`: Limestone, radius 32, padding 40, space-between: icon tile 71×71 obsidian radius 16
  at `177,4342`; title h3 display 48px/48px at y=4534; tagline 16px/24.8px at y=4596 (14px gap).
- Closed tabs `137,4698,420,80` and `137,4786,420,80`: transparent, 1.5px dotted obsidian border, radius 40,
  padding 0 40px, title display 32px/32px letter-spacing 0.64px, vertically centred. (ref-y4250)
- Panel: violet #524ae9, radius 40, padding 48, space-between: body p `621,4350,634,·` DM Sans 30px/45px #f7f6f2;
  bottom block at y=4698: 32px top padding, label 16px/24.8px #f7f6f2 at y=4730, logos row y=4787 h32 gap 20.
- Behaviour: clicking a closed tab expands it (height 80→384, icon+tagline fade in) and collapses the active one;
  panel text cross-fades. Auto-advance every ~5s is an inference, pause on hover.

## News (section 0,4967,1440,983; padding 100px 0 200px 56px — bleeds off the right edge)
- Heading row `56,5067,1384,96`: title display 80px/96px left; controls right: dotted pill `1277,5095,107,56`
  (1.5px dotted, radius 800) containing two 40×40 round buttons at x=1283 and 1339 (◀ ▶ obsidian triangles) with a dotted
  divider between.
- Track `56,5243,1384,507`: CORRECTED resting cards 422×445.5 at y=5243, step 438px (gap 16); the 379×401 figures that follow were captured at scale 0.9, Limestone, radius 40, padding 16.
  Card: image `+14,+14,351,197` radius ≈24; Sulfur tag pill at `+36,+243` h≈23, DM Sans 14px/16.8px, padding ≈4px 8px;
  h6 display 26px/31.2px `+29,+275,322,56` clamped to 2 lines with ellipsis; date `+29,+350` DM Sans 16px/24.8px.
  Infinite loop carousel; first card visible at x≈56 with previous card peeking at the left edge (ref-y5020).

## Community (section 0,5950,1440,1292; padding 160px 56px 100px)
- Same drifting halftone dot background as Products.
- Heading `361,6110,719,180` centred display 80px/88px two lines.
- Tiles row `251,6370,938,300`: three 302×300 Limestone tiles at x=251,569,887 (gap 16), radius 40, padding 40;
  ember circle icon 72×72 at `+40,+40` with 36px obsidian glyph; value h2 display 56px/56px at y+204.
  Connectors between tiles as in stat cards (Limestone neck 5×59, svg 16×141).
- Signup card `251,6686,938,456`: violet, radius 40, padding 88px 64px 64px, gap 80; h3 display 48px/48px #f7f6f2
  centred `428,6774,584,144` (3 lines); input `315,6998,810,80` transparent, 1.5px dotted white, radius 100,
  padding 24px 64px 24px 32px, placeholder DM Sans; 40×40 play-arrow submit at `1065,7018`.

## Sections grid ("Backed by", section 0,7242,1440,748; padding 100px 56px 160px)
- Dot background continues. Heading `56,7342,1328,88` display 80px/88px left.
- Grid `56,7514,1328,316`: 4×2 cards 320×150, gap 16 (x=56,392,728,1064; y=7514,7680), Limestone, radius 40,
  padding 40px 24px, centred mark 209×70 (reference: monochrome investor logos; here display-type wordmarks).

## Footer (0,7989,1440,397; padding 56)
- CTA card `56,8045,664,285`: obsidian, radius 40, padding 40, space-between: logo `96,8085,151,32`;
  h4 display 40px/40px #f7f6f2 `96,8138,491,80`; ember pill `96,8242,·,48`.
- Right column x=736 w=648: row of seven 79×79 ember circles (gap 16) at y=8045 with 39px obsidian glyphs;
  box `736,8140,648,190` #f7f6f3 radius 40 padding 40px 32px: links row y=8180 DM Sans 16px gap 22;
  1.5px dotted divider; copyright DM Sans 14px/21px at y=8269.
