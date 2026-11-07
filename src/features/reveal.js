/** Fade-in on scroll. Elements matching `selector` get the .reveal class, then .in when visible. */
import { $$ } from '../utils/dom.js';

export function initReveal(selector = '.window, .level-head, .skill-group') {
  const items = $$(selector);
  items.forEach(el => el.classList.add('reveal'));

  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  items.forEach(el => io.observe(el));
}
