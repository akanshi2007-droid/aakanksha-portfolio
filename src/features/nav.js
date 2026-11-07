/** Mobile menu toggle, active-link highlight (scroll spy), taskbar label and the scroll "XP" bar. */
import { $, $$ } from '../utils/dom.js';

export function initNav() {
  const toggle = $('#menuToggle');
  const nav = $('#mainNav');
  const links = $$('.nav a');
  const label = $('#taskLabel');

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));

  // scroll spy
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
      label.textContent = id.charAt(0).toUpperCase() + id.slice(1);
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach(s => spy.observe(s));

  // scroll progress
  const fill = $('#xpFill');
  const update = () => {
    const el = document.documentElement;
    const max = el.scrollHeight - el.clientHeight;
    fill.style.width = (max > 0 ? (el.scrollTop / max) * 100 : 0) + '%';
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
}
