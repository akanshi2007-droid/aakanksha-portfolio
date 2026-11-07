import { esc } from '../utils/dom.js';
import { Button } from './ui/Button.js';

export const Footer = ({ name, footer }) => `
  <footer class="footer">
    <p>© ${new Date().getFullYear()} ${esc(name)} · ${esc(footer.text)}</p>
    ${Button({ label: footer.backToTop, href: '#home', variant: 'yellow' })}
  </footer>`;
