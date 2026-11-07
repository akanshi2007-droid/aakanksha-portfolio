import { Intro } from './Intro.js';
import { Navbar } from './Navbar.js';
import { Hero } from './Hero.js';
import { About } from './About.js';
import { Skills } from './Skills.js';
import { Projects } from './Projects.js';
import { Contact } from './Contact.js';
import { Footer } from './Footer.js';
import { Taskbar } from './Taskbar.js';
import { Lightbox } from './Lightbox.js';
import { Rainbow } from './ui/Rainbow.js';

/**
 * Page composition. Add, remove or reorder sections here.
 * All content is passed in from the JSON files in src/data.
 */
export function App({ profile, nav, skills, projects, form }) {
  const section = id => nav.find(item => item.id === id);

  return `
    <div class="floaties" id="floaties" aria-hidden="true"></div>
    ${Intro(profile)}
    ${Navbar({ logo: profile.logo, nav })}
    <main>
      ${Hero(profile)}
      ${Rainbow()}
      ${About({ profile, section: section('about') })}
      ${Rainbow(true)}
      ${Skills({ skills, section: section('skills') })}
      ${Rainbow()}
      ${Projects({ projects, section: section('projects') })}
      ${Rainbow(true)}
      ${Contact({ profile, form, section: section('contact') })}
    </main>
    ${Footer(profile)}
    ${Taskbar(profile)}
    ${Lightbox()}
    <audio id="bgm" src="assets/audio/theme.mp3" loop preload="none"></audio>`;
}
