/** Taskbar clock. */
import { $ } from '../utils/dom.js';

export function initClock() {
  const el = $('#clock');
  if (!el) return;
  const tick = () => {
    el.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  tick();
  setInterval(tick, 20000);
}
