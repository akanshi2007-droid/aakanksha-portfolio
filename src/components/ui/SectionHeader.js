import { esc } from '../../utils/dom.js';

/** Heading block shared by every section: "LEVEL 02" pill + title (+ optional sub text). */
export function SectionHeader({ level, title, subtitle = '' }) {
  return `
    <header class="level-head">
      <p class="level-no">LEVEL ${String(level).padStart(2, '0')}</p>
      <h2>${esc(title)}</h2>
      ${subtitle ? `<p class="level-sub">${esc(subtitle)}</p>` : ''}
    </header>`;
}
