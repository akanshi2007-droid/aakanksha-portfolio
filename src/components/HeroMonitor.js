import { esc } from '../utils/dom.js';
import { Icon } from './ui/Icon.js';
import { Button } from './ui/Button.js';

/** The retro monitor on the left of the hero. */
export function HeroMonitor({ firstName, name, hero }) {
  const letters = [...firstName.toUpperCase()].map(ch => `<i>${esc(ch)}</i>`).join('');
  return `
    <div class="monitor">
      ${Icon('cat', 'cat-top')}
      <div class="monitor-name" aria-hidden="true">${letters}</div>
      <div class="screen">
        <p class="kicker">${esc(hero.kicker)}</p>
        <h1 class="hero-title">${esc(hero.title)}</h1>
        <p class="hero-name">${esc(hero.greeting)} <strong>${esc(name)}</strong></p>
        <p class="hero-role">${esc(hero.role)}</p>
        <div class="bar bar-hero" aria-hidden="true"><span></span></div>
        <p class="loading-note">${esc(hero.loadingNote)}</p>
        <div class="cta">${hero.ctas.map(Button).join('')}</div>
      </div>
      <div class="monitor-base">
        <i class="smile s-a" aria-hidden="true">☻</i>
        <i class="smile s-b" aria-hidden="true">☻</i>
        <span class="slot"></span>
        ${hero.stickers.map((text, i) => `<span class="sticker st-${i + 1}">${esc(text)}</span>`).join('')}
      </div>
      <div class="sticky" aria-label="Status note">${hero.stickyNote.map(esc).join('<br>')} ${Icon('heart', 'mini-heart')}</div>
    </div>`;
}
