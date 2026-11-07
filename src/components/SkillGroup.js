import { esc } from '../utils/dom.js';
import { ChipList } from './ui/ChipList.js';

/** One coloured box of skills inside the Skills window. */
export const SkillGroup = ({ title, dot, items }) => `
  <div class="skill-group">
    <h3><span class="dot d-${esc(dot)}"></span>${esc(title)}</h3>
    ${ChipList(items)}
  </div>`;
