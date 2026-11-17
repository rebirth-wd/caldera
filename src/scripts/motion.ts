// Shared GSAP setup. Section components add their own timelines in their own <script> blocks
// and may import { gsap, ScrollTrigger, splitChars, EASE } from this module.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
// Framer "spring, bounce 0" ≈ critically damped: power3.out is the closest stock GSAP ease.
export const EASE = 'power3.out';
export const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
/** Wrap each character of el in span.ch (words kept unbroken in span.wd). Returns the char spans. */
export function splitChars(el: HTMLElement): HTMLElement[] {
  if (el.dataset.split === 'done') return [...el.querySelectorAll<HTMLElement>('.ch')];
  const walk = (node: Node) => {
    if (node.nodeType === 3) {
      const frag = document.createDocumentFragment();
      (node.textContent || '').split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) { frag.append(' '); return; }
        const wd = document.createElement('span'); wd.className = 'wd'; wd.style.cssText = 'display:inline-block;white-space:nowrap';
        [...part].forEach((c) => { const s = document.createElement('span'); s.className = 'ch'; s.style.display = 'inline-block'; s.textContent = c; wd.append(s); });
        frag.append(wd);
      });
      node.parentNode!.replaceChild(frag, node);
    } else if (node.nodeType === 1) [...node.childNodes].forEach(walk);
  };
  el.setAttribute('aria-label', el.textContent || ''); [...el.childNodes].forEach(walk); el.dataset.split = 'done';
  return [...el.querySelectorAll<HTMLElement>('.ch')];
}
/** Default scroll reveal for 80px section headings: add data-reveal="chars" to the heading. */
function initHeadingReveals() {
  document.querySelectorAll<HTMLElement>('[data-reveal="chars"]').forEach((el) => {
    const chars = splitChars(el); if (reduced) return;
    gsap.from(chars, { opacity: 0, y: 24, duration: 0.5, ease: EASE, stagger: 0.015, scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initHeadingReveals); else initHeadingReveals();
export { gsap, ScrollTrigger };
