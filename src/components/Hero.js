import { esc } from '../utils/dom.js';
import { Icon } from './ui/Icon.js';
import { HeroMonitor } from './HeroMonitor.js';
import { HeroPhoto } from './HeroPhoto.js';

/** Home section: floating decorations + monitor + photo window. */
export const Hero = profile => `
  <section id="home" class="hero">
    <span class="deco s1">${Icon('sparkle')}</span>
    <span class="deco s2">${Icon('sparkle')}</span>
    <span class="deco s3">${Icon('star')}</span>
    <span class="deco s4">${Icon('sparkle')}</span>
    <span class="deco s5">${Icon('sparkle')}</span>
    <div class="cloud c1"></div><div class="cloud c2"></div>

    <div class="hero-grid">
      ${HeroMonitor(profile)}
      ${HeroPhoto(profile.hero)}
    </div>

    <a href="#about" class="scroll-hint" data-sfx>${esc(profile.hero.scrollHint)}</a>
  </section>`;
