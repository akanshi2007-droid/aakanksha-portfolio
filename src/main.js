/**
 * App entry point.
 *  1. load JSON content from src/data
 *  2. render the page from components
 *  3. switch on the interactive features
 */
import { $ } from './utils/dom.js';
import { loadData } from './utils/loadData.js';
import { App } from './components/App.js';

import { initAudio } from './features/audio.js';
import { initIntro } from './features/intro.js';
import { initNav } from './features/nav.js';
import { initReveal } from './features/reveal.js';
import { initLightbox } from './features/lightbox.js';
import { initContactForm } from './features/contactForm.js';
import { initFloaties, initClickBurst } from './features/floaties.js';
import { initHeroDialog } from './features/heroDialog.js';
import { initClock } from './features/clock.js';

// Missing screenshots just keep their dashed placeholder (error events don't bubble, so capture them).
document.addEventListener('error', e => {
  const img = e.target;
  if (img instanceof HTMLImageElement && img.closest('.shot')) img.style.display = 'none';
}, true);

async function boot() {
  const app = $('#app');
  try {
    const [profile, nav, skills, projects, form] = await Promise.all(
      ['profile', 'nav', 'skills', 'projects', 'contactForm'].map(loadData)
    );

    document.title = profile.siteTitle;
    app.innerHTML = App({ profile, nav, skills, projects, form });

    initAudio();
    initIntro();
    initNav();
    initReveal();
    initLightbox();
    initContactForm({ email: profile.email, config: form });
    initFloaties();
    initClickBurst();
    initHeroDialog();
    initClock();
  } catch (err) {
    console.error(err);
    app.innerHTML = `<p style="padding:40px;font:1.4rem monospace;color:#3b2352">Oops, the page could not load. Please run it from a local server (see README) and refresh.</p>`;
  }
}

boot();
