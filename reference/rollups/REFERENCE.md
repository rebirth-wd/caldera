# Reference measurements — /rollups page, captured 2026-11-17

Viewport 1440×779 (DPR 2; the window would not go to 723 — no vh-dependent sizes were found). Document height 7261.
All rects `x,y,w,h` in page coordinates. Screenshots at 0.5 scale: `reference/rollups/ref-y<scrollY>.jpg`
(y = 0, 600, 1200, 1800, 2400, 3000, 3600, 4200, 4800, 5400, 6000, 6482). Framer site; no video, no canvas, 1 hidden iframe.
Fonts/colours as on the home page (display = PP Neue Corp Compact Ultrabold, body = DM Sans 500).
New colour readings: hero primary button fill rgb(21,19,23); tag pill rgb(242,239,137); tiles #f7f6f2.

Section stack (y, height): header-space 0/112 · hero 112/544.1 · ecosystem 656.1/1291.6 · features 1947.6/2282.5 ·
scale("infrastructure") 4230.1/1363.8 · community("connect") 5593.9/1270.6 · footer 6864.6/396.7.

## Header
Same as home. Current-page link (first menu item) has a 2px ember underline `284,66.4,54×2` radius 10 (always visible)
instead of the 1px hover line. Collapsed pill on scroll as on home (ref-y600…).

## Hero (0,112,1440,544; padding 0 56; row gap 16)
- Image `56,112,582,544` radius 40: static SVG illustration (isometric black/white machine on a conveyor, violet bg).
- Info card `654,112,730,544` #f7f6f3 radius 40 padding 48, column space-between.
  - Tag pill `702,160,82,34` sulfur, radius 24, padding 7px 14px, DM Sans 16/20 «Rollups» [7].
  - 32px gap; title `702,226,480,132` display 70px/65.8px, 2 lines «Deploy Rollups / In One Click» [27].
  - Bottom block `702,470.5,634,138` gap 32: p `702,470.5,406,50` DM Sans 16/24.8, 2 lines [83]
    «Launch … rollups with …'s Rollup Engine.»; buttons row `702,552,·,56` gap 10:
    dark pill `702,552,196,56` (fill rgb(21,19,23), padding 12px 32px, 18/20 #f7f6f2) «Deploy A Rollup» [15];
    dotted pill `908,552,259,56` (1.5px dotted obsidian via ::after, padding 12, 18/20) «Explore The ecosystem» [21].

## Ecosystem / "Everything" (0,656,1440,1292; padding 168 56 200; wrapper gap 80)
- Heading block `283,824,874,170` gap 32: h2 `283,824,874,88` display 80/88 centred, 1 line «Everything You Need» [19];
  p `517,944,406,50` 16/24.8 centred, 2 lines [79].
- Content `137,1074,1166,674` gap 16.
- Stat cards row `137,1074,1166,278`, gap 15.4, align centre; ember, radius 40, padding 40, column gap 80:
  card 1 `137,1074,378,278` (label wraps to 2 lines in its 200px box → taller), card 2 `531,1087,378,251`,
  card 3 `925,1087,378,251`. Label box 200 wide DM Sans 18/27 #f7f6f2; value display 64/64 at label-bottom + 80
  (y 1248 / 1234). Texts: «Peak Total Value Locked» [23] «1B+» · «Total Transactions» [18] «360M» · «Unique Wallets» [14] «30M».
  Connectors between cards: svg 16×141 centred on the row (y 1142–1283) with a 5×59 ember neck.
- Boxes `137,1368,1166,380` gap 16:
  - Top `137,1368,1166,150` #f7f6f3 radius 40, padding 40 40 40 72, row space-between: h5 `209,1427,186,32`
    display 32/32 ls 0.64 «Rollup Stack» [12]; logo grid `780,1408,483,70` 3 × 161 cols, each a centred 124×70 mark
    (icon + small name); 1.5px dotted obsidian left border on cols 2–3. (Middle cell rendered empty at capture.)
  - Bottom row `137,1534,1166,214` gap 16: box A `137,1534,571,214` (padding 32 32 32 40, column gap 40, centred):
    h5 `305,1566,242,32` «Data Availability» [17]; grid `177,1638,499,78` 4 × 124.75 cols, 112×78 marks, dotted left
    borders on cols 2–4. Box B `724,1534,579,214` (padding 32 40): h5 `885,1566,256,32` «Settlement Layer» [16];
    grid `764,1638,499,78` 3 × 166.3 cols, 154×78 marks.

## Features (0,1948,1440,2282.5; padding 200 56 160) — drifting dot background as on home Products
- Heading `56,2148,1328,258` (+12 bottom padding = 270): display 137px/128.78px, 2 lines
  «Custom Rollups, / Ready To Scale» [30]. 80 gap.
- Rows (gap 16), info card 757 wide (#f7f6f3, radius 40, padding 48, space-between) + image 555 wide (radius 40):
  - Row 1 `56,2497,1328,529`: card `56,2497,757,529`, image `829,2497,555,529` (violet; UI mock: two black
    panels with 3 selectable cells each).
  - Row 2 `56,3042,1328,484`: image `56,3042,555,484` (ember; UI mock: chain card + custom-domain input),
    card `627,3042,757,484`.
  - Row 3 `56,3541.5,1328,529`: card left, image `829,3541.5,555,529` (sulfur; analytics panel: 2 stat cells + bar chart).
  - Card: icon tile 76×76 obsidian radius 16 at +48,+48 with a 50px dot-matrix numeral (1, 2, 3);
    info block bottom-aligned (`104,2819,661,158` / `675,3294,661,183` / `104,3864,661,158`): h4 display 40/40
    («Build» [5], «Launch» [6], «Scale» [5]); 20 gap; list (padding-left 8, gap 12) of 3 points, each
    "•" (5.9 wide) + 8 gap + p DM Sans 16/24.8 (639 wide). Lengths: 69, 86, 54 · 38, 71, 107 (2 lines) · 60, 34, 24.

## Scale / "Infrastructure" (0,4230,1440,1364; padding 200 56; wrapper gap 80)
- Heading `400,4430,640,282` gap 32: h2 `400,4430,640,176` display 80/88 centred 2 lines
  «Infrastructure / You Can Rely On» [30]; p `463,4638,514,74` 16/24.8 centred 3 lines [141].
- Tiles grid `320,4792.5,800,601` 2×2, cells 392.3×293, gap 15.4: `320,4792.5` `727.7,4792.5` `320,5101` `727.7,5101`.
  Tile #f7f6f2 radius 32 padding 32 column gap 72: icon 72×72 obsidian radius 16 with 42px dot-matrix glyph;
  h5 display 27/27 ls 0.54 at +176; 16 gap; p DM Sans 14/21, 2 lines (328 wide) at +219.
  Texts: «High Availability» [17]/[68] · «Accessible Everywhere» [21]/[50] · «Protected From Attacks» [22]/[82] ·
  «Seriously Secure» [16]/[84].
  Connectors (limestone neck 5×59 in a 16×141 svg): horizontal between columns at `711.7,4868.5` and `711.7,5177`
  (tile top + 76); vertical between rows at `445.6,5085.4,141,16` and `853.3,5085.4,141,16`.

## Community / "Connect" (0,5594,1440,1270.6; padding 160 56 100; wrapper gap 80) — dot background
- h2 `156.5,5754,1127,264` display 80/88 centred, 3 lines [78].
- Boxes grid `137,6098,1166,667`: two 575×667 (x 137 / 728, gap 16), radius 40, padding 40 0 0, column gap 32;
  box 1 violet, box 2 ember. Info (padding 0 40, gap 40): h4 `+40,+40,495,120` display 40/40 #f7f6f2, 3 lines
  ([78] / [70]); pill button at +40,+200 h48 padding 12 24, fill #f7f6f2, obsidian text 16/20
  («Deploy A Rollup» 165 wide, «Explore The Ecosystem» 223 wide). Image `+0,+280,575,387` flush to the box bottom:
  static isometric illustrations (machine on violet; hub with six linked nodes on ember).

## Footer (0,6865,1440,397) — same as home.

## Motion
- `__framer__appearAnimationsContent`: 5 entries, 4 null; the only readable one is opacity 0.001→1, y −32→0,
  tween 0.4s, ease cubic-bezier(0.37,0.97,0.64,1), delay 0 (target element not identifiable from the data).
- Nothing loops on this page (no ticker, carousel or video). Dot backgrounds drift in x with scroll (translateX).
- Hover states were not sampled.
