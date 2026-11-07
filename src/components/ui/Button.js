import { esc } from '../../utils/dom.js';

/**
 * Button({ label, href, variant, external, download, cls, id, type, sfx })
 * Renders an <a> when href is given, otherwise a <button>.
 * Variants: pink | hot | yellow | cream | blue (see components/button.css).
 */
export function Button({ label, href, variant = 'pink', external = false, download = false, cls = '', id = '', type = 'button', sfx = true }) {
  const klass = `btn btn-${esc(variant)}${cls ? ' ' + esc(cls) : ''}`;
  const idAttr = id ? ` id="${esc(id)}"` : '';
  if (href) {
    return `<a class="${klass}"${idAttr} href="${esc(href)}"${external ? ' target="_blank" rel="noopener"' : ''}${download ? ' download' : ''}${sfx ? ' data-sfx' : ''}>${esc(label)}</a>`;
  }
  return `<button class="${klass}"${idAttr} type="${esc(type)}">${esc(label)}</button>`;
}
