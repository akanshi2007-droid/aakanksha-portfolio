import { esc } from '../utils/dom.js';

/** Pill links under the cat in the contact section. */
export const SocialLinks = links => `
  <ul class="socials">
    ${links.map(l => `<li><a href="${esc(l.href)}"${l.external ? ' target="_blank" rel="noopener"' : ''} data-sfx>${esc(l.icon)} ${esc(l.label)}</a></li>`).join('')}
  </ul>`;
