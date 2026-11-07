import { esc } from '../utils/dom.js';

/** Top menu bar. `nav` comes from src/data/nav.json. */
export const Navbar = ({ logo, nav }) => `
  <header class="menubar">
    <a href="#home" class="logo" aria-label="Go to top">${esc(logo.text)}<span>${esc(logo.suffix)}</span></a>
    <button class="menu-toggle" id="menuToggle" aria-expanded="false" aria-controls="mainNav">☰ MENU</button>
    <nav id="mainNav" class="nav" aria-label="Main">
      ${nav.map(item => `<a href="#${esc(item.id)}" data-sfx>${esc(item.label)}</a>`).join('\n      ')}
    </nav>
    <div class="xp" aria-hidden="true"><span id="xpFill"></span></div>
  </header>`;
