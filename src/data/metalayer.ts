// /metalayer page copy: Lorem Ipsum only, lengths matched to reference/metalayer/REFERENCE.md so lines wrap alike.
// No real brand, product, company or token names. Images: verified Unsplash entries reused from images.ts / rollups.ts.
import { images } from './images.ts';
import { rImages } from './rollups.ts';
export const mImages = { hero: images.productB, featA: rImages.launch, featB: images.productA };

export const mHero = {
  tag: 'Voluptate',
  lines: ['Sed Interdum Ut', 'Tempor Ut Enim'],
  sub: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  button: { label: 'Aliquip Voluptate', href: '#' },
};

export const mBridging = {
  lines: ['Tempor Dolore Laborum', 'Sed 100+ Laboris'],
  card: {
    lines: ['Adipiscing', 'Enim Ut Magna'],
    body: 'Lorem ipsum dolor sit amet. Consectetur adipiscing elit sed, eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim & quis nostrud.',
  },
  marks: ['Lorem', 'Ipsum', 'Dolor', 'Tempor'],
  // initials shown inside the network discs (no logos)
  nodes: ['L', 'I', 'D', 'S', 'A', 'C', 'E', 'T', 'M', 'N', 'V', 'U', 'Q', 'R', 'O', 'P', 'F'],
};

export const mFeatures = {
  lines: ['Sed Laboris', 'Consectetur Tempor'],
  rows: [
    { lines: ['Consectetur Ut Tempor, Sed', 'Laboris. Do Magna Enim Dolor.'], body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim, ad minim veniam.', image: 'featA', kind: 'relay', h3w: 660 },
    { lines: ['Do Adipiscing Excepteur.', 'Ut Lorem Voluptate.'], body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident sunt culpa.', image: 'featB', kind: 'switch', h3w: 580 },
  ],
};

export const mScale = {
  title: 'Magna Sed Dolor',
  button: { label: 'Aliquip Ut Adipiscing', href: '#' },
  tiles: [
    { title: 'Excepteur Adipiscing', body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.', icon: 'expand' },
    { title: 'Dolor Consectetur', body: 'Ut enim ad minim veniam, quis, nostrud, ullamco laboris nisi aliquip.', icon: 'chip' },
    { title: 'Voluptate-Lorem', body: 'Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat.', icon: 'bolt' },
  ],
};

export const mEnables = {
  title: 'Tempor Sed Enim Aliqua',
  sub: 'Sed Voluptate Laborum:',
  items: ['Dolor Sit', 'Tempor Magna', 'Adipiscing Enim', 'Sed 2B Aliqua'],
  banner: {
    title: 'Sed Laboris Tempor ut Enim',
    primary: { label: 'Aliquip Sed Magna', href: '#' },
    secondary: { label: 'Lorem Enim', href: '#' },
  },
};

// Lorem labels used inside the looping device mock-ups.
export const mGraphic = { tab: 'Lorem', tab2: 'Ipsum dolor', amount: '000.00', action: 'Aliquip', chip: 'ELIT' };
