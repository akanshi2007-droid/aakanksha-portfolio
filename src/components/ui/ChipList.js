import { esc } from '../../utils/dom.js';

/** ChipList(['React.js', 'Vite'], 'small') -> pill list. */
export const ChipList = (items = [], cls = '') =>
  `<ul class="chips${cls ? ' ' + esc(cls) : ''}">${items.map(item => `<li>${esc(item)}</li>`).join('')}</ul>`;
