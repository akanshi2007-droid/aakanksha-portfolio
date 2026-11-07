import { esc } from '../utils/dom.js';
import { Icon } from './ui/Icon.js';

/** Loading screen shown on first visit. Behaviour lives in features/intro.js. */
export const Intro = ({ intro }) => `
  <div id="intro" class="intro" role="dialog" aria-label="Loading screen">
    <div class="intro-box">
      ${Icon('cat', 'intro-cat')}
      <div class="intro-title">${esc(intro.title)}</div>
      <div class="bar" aria-hidden="true"><span id="introBar"></span></div>
      <p id="introText" class="intro-text">LOADING...</p>
      <button id="startBtn" class="btn btn-pink" hidden>▶ PRESS START</button>
      <button id="skipBtn" class="link-btn">skip intro</button>
    </div>
  </div>`;
