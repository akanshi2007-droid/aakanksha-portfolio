/** The pop-up in the hero: "NO" shakes and gives a cheeky reply. */
import { $ } from '../utils/dom.js';
import { blip } from './audio.js';

export function initHeroDialog() {
  const dialog = $('#dialog');
  const text = $('#dialogText');
  const noBtn = $('#noBtn');
  if (!dialog || !text || !noBtn) return;

  const original = text.textContent;
  const reply = text.dataset.reply;
  let timer = null;

  noBtn.addEventListener('click', () => {
    text.textContent = reply;
    dialog.classList.remove('shake');
    void dialog.offsetWidth; // restart the CSS animation
    dialog.classList.add('shake');
    blip(330);
    clearTimeout(timer);
    timer = setTimeout(() => { text.textContent = original; }, 2200);
  });
}
