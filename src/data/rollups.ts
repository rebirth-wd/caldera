// /rollups page copy: Lorem Ipsum only, lengths matched to reference/rollups/REFERENCE.md so lines wrap alike.
// No real brand, product, company or token names. Images: Unsplash hot-links seen in search results (see credit/page).
export type RImg = { url: string; alt: string; credit: string; page: string };
const u = (id: string, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
export const rImages: Record<string, RImg> = {
  hero: { url: u('photo-1558494949-ef010cbdcc31'), alt: '', credit: 'Taylor Vick', page: 'https://unsplash.com/photos/cable-network-M5tzZtFCOfs' },
  build: { url: u('photo-1584169417032-d34e8d805e8b'), alt: '', credit: 'İsmail Enes Ayhan', page: 'https://unsplash.com/photos/server-room-aisle-with-metal-equipment-racks-lVZjvw-u9V8' },
  launch: { url: u('photo-1639066648921-82d4500abf1a'), alt: '', credit: 'Matthieu Beaumont', page: 'https://unsplash.com/photos/a-very-large-array-of-electronic-equipment-in-a-room-iYnpYeyu57k' },
  scale: { url: u('photo-1498262257252-c282316270bc'), alt: '', credit: 'Erik Eastman', page: 'https://unsplash.com/photos/curved-white-architectural-ribs--6zFVL4YuaM' },
  ctaA: { url: u('photo-1558591710-4b4a1ae0f04d'), alt: '', credit: 'Jean-Philippe Delberghe', page: 'https://unsplash.com/photos/a-close-up-of-a-white-wall-with-wavy-lines-75xPHEQBmvA' },
  ctaB: { url: u('photo-1532456745301-b2c645d8b80d'), alt: '', credit: 'bady abbas', page: 'https://unsplash.com/photos/white-concrete-building-facade-pattern-hxi_yRxODNc' },
};

export const rHero = {
  tag: 'Laborum',
  lines: ['Tempor Laborum', 'Ut Sed Magna'],
  sub: 'Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod tempor incididunt labore.',
  primary: { label: 'Aliquip A Magna', href: '#' },
  secondary: { label: 'Commodo Sed adipiscing', href: '#' },
};

export const rEverything = {
  title: 'Consectetur Ut Enim',
  sub: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim minim.',
  stats: [
    { label: 'Lorem Ipsum Dolor Tempor', value: '2B+' },
    { label: 'Tempor Incididunt', value: '480M' },
    { label: 'Aliquip Commodo', value: '36M' },
  ],
  stack: { title: 'Lorem Magna', marks: ['Lorem', 'Ipsum', 'Dolor'] },
  boxes: [
    { title: 'Magna Adipiscing', marks: ['Tempor', 'Magna', 'Aliqua', 'Veniam'] },
    { title: 'Consectetur Enim', marks: ['Nostrud', 'Cillum', 'Laboris'] },
  ],
};

export const rFeatures = {
  lines: ['Tempor Laborum,', 'Magna Ut Dolor'],
  cards: [
    { title: 'Lorem', image: 'build', points: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip.',
      'Duis aute irure dolor in reprehenderit voluptate velit.',
    ] },
    { title: 'Aliqua', image: 'launch', points: [
      'Sed ut perspiciatis unde. Omnis iste natus.',
      'Nemo enim ipsam voluptatem quia voluptas sit – aspernatur aut odit fugit.',
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi.',
    ] },
    { title: 'Magna', image: 'scale', points: [
      'Excepteur sint occaecat cupidatat non proident. Sunt in culpa.',
      'Officia deserunt mollit 99.99% anim.',
      'Id est laborum-sed dolore.',
    ] },
  ],
};

export const rInfra = {
  lines: ['Exercitation', 'Sed Do Magna Ut'],
  sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.',
  tiles: [
    { title: 'Dolor Adipiscing', body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed 99.99% eiusmod.', icon: 'bolt' },
    { title: 'Consectetur Eiusmod', body: 'Ut enim ad minim veniam quis nostrud exercitation ullamco.', icon: 'expand' },
    { title: 'Excepteur Sint Occaecat', body: 'Duis aute irure dolor in reprehenderit, in voluptate velit esse cillum dolore eu.', icon: 'shield' },
    { title: 'Voluptate Cillum', body: 'Sed ut perspiciatis unde omnis iste natus error, sit voluptatem accusantium totam.', icon: 'chip' },
  ],
};

export const rConnect = {
  lines: ['Lorem Ipsum A Dolore', 'Tempor Ut Magna Sed Aliqua,', 'Enim, Do, Quis, Ut Nisi'],
  boxes: [
    { lines: ['Aliqua A Sed-Consectetur', 'Tempor Elit Sed Laborum', 'Magna Ut Enim A Minim Dolor'], button: { label: 'Aliquip A Magna', href: '#' }, image: 'ctaA' },
    { lines: ['Excepteur Laboris Commodo', 'Adipiscing Ut Veniam', 'Nostrud Sed Cillum'], button: { label: 'Commodo Sed Adipiscing', href: '#' }, image: 'ctaB' },
  ],
};

// Lorem labels used inside the looping graphics.
export const rGraphic = {
  stack: [{ title: 'Lorem tempor', cells: ['Lorem', 'Ipsum', 'Dolor'] }, { title: 'Consectetur enim', cells: ['Nostrud', 'Cillum', 'Laboris'] }],
  panel: { name: 'Ipsum Dolor', sub: 'Lorem • ID-0000000', action: 'Aliquip ut magna', pairs: [['Tempor', 'Lorem Dolore'], ['Magna Adipiscing', 'Aliqua'], ['Lorem Tempor', 'Lorem Ipsum'], ['Enim Veniam', 'Nostrud']], field: 'Sed magna', url: 'lorem://ipsum.dolor.sit', chip: 'ELIT' },
  analytics: { title: 'Adipiscing', a: 'Lorem ipsum sed dolore', b: 'Tempor Magna', c: 'Aliqua ELIT veniam', up: 'Ut 100%' },
};
