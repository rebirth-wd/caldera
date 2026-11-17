// Unsplash only. url = images.unsplash.com URL (with ?auto=format&fit=crop&w=..&q=80); credit = photographer.
// Empty url => component shows its solid Ember/Plasma fallback block (DESIGN.md "Imagery").
export type Img = { url: string; alt: string; credit: string; page: string };
export const images: Record<string, Img> = {
  productA: { url: 'https://images.unsplash.com/photo-1592659762303-90081d34b277?auto=format&fit=crop&w=1600&q=80', alt: '', credit: 'Vishnu Mohanan', page: 'https://unsplash.com/photos/close-up-of-dark-blue-circuit-board-pfR18JNEMv8' },
  productB: { url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80', alt: '', credit: 'Jordan Harrison', page: 'https://unsplash.com/photos/blue-utp-cord-40XgDxBfYXM' },
  news1: { url: 'https://images.unsplash.com/photo-1595905710073-c5bf3611d945?auto=format&fit=crop&w=800&q=80', alt: '', credit: 'Josh Withers', page: 'https://unsplash.com/photos/aerial-view-of-ocean-waves-G1R1I3PefNE' },
  news2: { url: 'https://images.unsplash.com/photo-1604782206219-3b9576575203?auto=format&fit=crop&w=800&q=80', alt: '', credit: 'Lea L', page: 'https://unsplash.com/photos/geometric-shapes-on-light-surface-q--99IzY8Lw' },
  news3: { url: 'https://images.unsplash.com/photo-1550275994-2bc88dc68637?auto=format&fit=crop&w=800&q=80', alt: '', credit: 'Bruno Thethe', page: 'https://unsplash.com/photos/abstract-long-exposure-light-trails-qyhLjwn6Gpc' },
  news4: { url: 'https://images.unsplash.com/photo-1619261529873-3c4cc299d23d?auto=format&fit=crop&w=800&q=80', alt: '', credit: 'Valery Fedotov', page: 'https://unsplash.com/photos/brown-wooden-blocks-on-black-table-CqX6IhVj2TI' },
};
