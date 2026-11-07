/** Fake loading bar -> "PRESS START" -> fades out and starts the music. */
import { $ } from '../utils/dom.js';
import { startMusic, blip, musicAllowed } from './audio.js';

const MESSAGES = ['LOADING...', 'LOADING ASSETS...', 'LOADING PIXELS...', 'READY!'];

export function initIntro() {
  const intro = $('#intro');
  if (!intro) return;

  const bar = $('#introBar');
  const text = $('#introText');
  const startBtn = $('#startBtn');
  const skipBtn = $('#skipBtn');
  let pct = 0;
  let timer = null;

  function close(withMusic) {
    clearInterval(timer);
    intro.classList.add('done');
    document.body.style.overflow = '';
    setTimeout(() => intro.remove(), 500);
    if (withMusic && musicAllowed()) startMusic();
  }

  document.body.style.overflow = 'hidden';
  timer = setInterval(() => {
    pct = Math.min(100, pct + 4 + Math.random() * 6);
    bar.style.width = pct + '%';
    text.textContent = MESSAGES[Math.min(MESSAGES.length - 1, Math.floor(pct / 34))];
    if (pct >= 100) {
      clearInterval(timer);
      startBtn.hidden = false;
      startBtn.focus();
    }
  }, 140);

  startBtn.addEventListener('click', () => { blip(660); close(true); });
  skipBtn.addEventListener('click', () => close(false));
}
