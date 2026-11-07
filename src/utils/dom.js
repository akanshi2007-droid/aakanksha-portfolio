/** Tiny DOM helpers shared by components and features. */

export const $ = (selector, scope = document) => scope.querySelector(selector);
export const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const ENTITIES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
/** Escape text before it goes into an HTML string. */
export const esc = (value = '') => String(value).replace(/[&<>"']/g, ch => ENTITIES[ch]);

export const rand = (min, max) => min + Math.random() * (max - min);

export const prefersReducedMotion = () =>
  Boolean(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

/** Turn an HTML string into a single DOM element. */
export function fromHTML(html) {
  const tpl = document.createElement('template');
  tpl.innerHTML = html.trim();
  return tpl.content.firstElementChild;
}
