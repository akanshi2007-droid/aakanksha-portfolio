import { esc } from '../utils/dom.js';

/** Bottom bar: start button, current section, music toggle, clock. */
export const Taskbar = ({ taskbar }) => `
  <div class="taskbar">
    <a href="#home" class="start" data-sfx>${esc(taskbar.start)}</a>
    <span class="task-item" id="taskLabel">Home</span>
    <span class="spacer"></span>
    <button id="musicBtn" class="music" aria-pressed="false" aria-label="Toggle music">♪ MUSIC: OFF</button>
    <span class="clock" id="clock" aria-label="Clock">--:--</span>
  </div>`;
