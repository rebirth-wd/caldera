# Reference measurements — /metalayer (captured by the orchestrator, viewport 1440×723, document height 6674)

Rects are `x,y,w,h` in page coordinates at rest. Screenshots (0.5 scale): `ref-y{0,700,1300,2150,2560,3060,3900,4780,5380,5951}.jpg`.
Header is the shared header; the second nav link carries the current-page Ember underline. Footer (shared) starts at y=6277.
Section stack (y, height): spacer 0/112 · hero 112/544 · bridging 656/1423 · features 2079/1693 · scale 3772/909 · enables 4681/1596 · footer 6277/397.
Text below is quoted only to give lengths — replace everything with length-matched Lorem Ipsum; no real names.

## Hero `0,112,1440,544` (padding 0 56px; row, gap 16)
- Media `56,112,582,544` radius 40: Ember background with a black/white isometric illustration (hub with radial dot-burst,
  linked to four small nodes by rods) → replace with Unsplash duotone (ember) + looping graphic.
- Info card `654,112,730,544` #f7f6f3 radius 40 padding 48, space-between:
  tag pill `702,160,102,34` Sulfur (#f2ef89 measured) radius 24 padding 7px 14px, DM Sans 16/20 (9 chars);
  h1 `702,226,634,132` display 70px/65.8px, 2 lines (30 chars, 6 words: 3+3 per line);
  paragraph `702,470,532,50` DM Sans 16/24.8, 2 lines (~115 chars);
  button `702,552,215,56` dark pill (#151317 measured), radius 800, padding 12px 32px, DM Sans 18/20 #f7f6f2 (17 chars).

## Bridging `0,656,1440,1423` (padding 168px 56px 200px)
- Heading `283,824,874,176` centred display 80/88, two lines (21 + 16 chars).
- Image `251,1080,938,464` radius 40, Limestone: network diagram — one large black disc in the centre and ~16 smaller black
  discs (white glyphs) joined by thin dotted lines (see ref-y700, ref-y1300) → custom looping graphic (discs with Lorem
  initials/dot glyphs, dotted links with travelling pulses), no real logos.
- Cards row `251,1560,938,319` gap 15.4: violet card `251,1560,407,319` radius 40 padding 40 gap 40: h5 display 32/32
  ls 0.64px #f7f6f2 `291,1600,210,64` (2 lines, 24 chars); p DM Sans 18/27 #f7f6f2 `291,1704,327,135` (5 lines, ~190 chars).
  Violet connector neck between the two (svg 16×141 at `658,1649`, neck 5×59).
  Violet grid card `673,1560,516,319` radius 40 padding 40: 2×2 cells 195×82 at x=725,943 / y=1618,1740 holding white
  partner logos → white Lorem wordmarks; dotted white dividers (one vertical per row, one horizontal between rows).

## Features `0,2079,1440,1693` (padding 200px 56px 160px; drifting dot-field background)
- Heading `56,2279,1328,258` display 137px/128.78px, two lines left (11 + 18 chars).
- Row 1 `56,2629,1328,484` gap 16: media `56,2629,555,484` Ember radius 40 (isometric illustration → duotone + loop);
  card `627,2629,757,484` #f7f6f3 radius 40 padding 40, space-between: h3 display 48/48 `667,2669,660,96` (2 lines, 55 chars);
  p DM Sans 18/27 `667,2991,532,81` (3 lines, ~150 chars).
- Row 2 `56,3128,1328,484`: card `56,3128,757,484` (h3 `96,3168,580,96`, 43 chars; p `96,3491,532,81`, ~170 chars);
  media `829,3128,555,484` Violet radius 40.

## Scale `0,3772,1440,909` (padding 200px 56px 160px; plain canvas)
- Heading `400,3972,640,88` centred display 80/88 (15 chars); dotted pill button `610,4100,221,48` (21 chars).
- Tiles row `56,4228,1328,293` gap 15.4: three tiles 432×293 at x=56,504,952, Limestone, radius 32, padding 32, gap 72:
  icon tile 72×72 obsidian radius 16 with 42px white dot glyph at `+32,+32`; h5 display 27/27 ls 0.54px at y+176;
  p DM Sans 14/21 at y+219 (2 lines, ~60–85 chars). Limestone connector necks between tiles (svg 16×141, neck 5×59).

## Enables `0,4681,1440,1596` (padding 160px 56px 100px; drifting dot-field background)
- Heading `270,4841,900,88` centred display 80/88 one line (22 chars).
- Title tile `251,5013,938,128` Limestone radius 40 padding 40: h3 display 48/48 centred (22 chars).
  Vertical connector neck below it, centred (`650,5140,141,16`, i.e. the same neck rotated 90°), joining to:
- Grid card `251,5156,938,264` #f7f6f3 radius 40 padding 48: 2×2 of centred h5 display 32/32 ls 0.64px (9–15 chars each),
  rows 64 and 84 tall, dotted vertical divider in the middle and dotted horizontal divider between rows (ref-y4780).
- Banner `251,5436,938,741` violet (#514ae8 measured) radius 40, padding 64px 0 0: h3 display 48/48 #f7f6f2 centred
  `299,5539,842,48` (26 chars); buttons row y=5619: Limestone pill `404,5619,311,48` (obsidian text, 17 chars) and
  dotted-white-border pill `725,5619,311,48` (#f7f6f2 text, 10 chars); image `251,5729,938,448` clipped by the card:
  a phone and a tablet mock-up drawn with thick black outlines showing a form UI (ref-y5380, ref-y5951) → custom looping
  line-art device mock-ups with Lorem UI, no real product UI.

## Motion
Not sampled on this page (capture was read-only and static). Use the home-page conventions: headings char reveal,
cards/tiles from opacity 0 / scale 0.9 with stagger, rows y 40→0, dot-field drift. Label these as inferred.
