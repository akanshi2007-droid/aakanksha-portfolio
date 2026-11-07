/** Decorative extras: rising pixel hearts in the background + a burst of hearts/sparkles on every click. */
import { $, fromHTML, rand, prefersReducedMotion } from '../utils/dom.js';
import { Icon } from '../components/ui/Icon.js';

const COLORS = ['#ff7eb6', '#ff4f9a', '#a07bff', '#ffd84d', '#ffffff', '#6c7cff'];

export function initFloaties() {
  const layer = $('#floaties');
  if (!layer || prefersReducedMotion()) return;

  const count = window.innerWidth < 600 ? 9 : 16;
  for (let i = 0; i < count; i++) {
    const icon = i % 3 === 0 ? 'sparkle' : 'heart';
    const style =
      `left:${rand(0, 98).toFixed(1)}%;--s:${rand(16, 32).toFixed(0)}px;--c:${COLORS[i % COLORS.length]};` +
      `--d:${rand(14, 28).toFixed(1)}s;--dl:${(-rand(0, 28)).toFixed(1)}s;--x:${rand(-50, 50).toFixed(0)}px`;
    layer.appendChild(fromHTML(Icon(icon, 'fh', `style="${style}"`)));
  }
}

export function initClickBurst() {
  if (prefersReducedMotion()) return;

  document.addEventListener('click', e => {
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI * 2 * i) / 6 + rand(-0.3, 0.3);
      const dist = rand(34, 64);
      const style =
        `left:${e.clientX - 9}px;top:${e.clientY - 9}px;--c:${COLORS[Math.floor(rand(0, COLORS.length))]};` +
        `--bx:${Math.cos(angle) * dist}px;--by:${Math.sin(angle) * dist}px`;
      const el = fromHTML(Icon(i % 2 ? 'sparkle' : 'heart', 'burst', `style="${style}"`));
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 800);
    }
  });
}
