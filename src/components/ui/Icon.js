import { esc } from '../../utils/dom.js';

/** Pixel sprites live in assets/icons/sprites.svg. Sizes are the viewBox of each symbol. */
const SHEET = 'assets/icons/sprites.svg';
const SIZES = {
  cat: [18, 13], heart: [11, 10], sparkle: [9, 9], star: [11, 11], cursor: [10, 15],
  gamepad: [18, 11], folder: [18, 12], daisy: [13, 12], bow: [15, 8]
};

/**
 * Icon('heart', 'pix pix-heart') -> <svg> that uses the sprite sheet.
 * Colour comes from CSS `color` for the sprites drawn with currentColor.
 */
export function Icon(name, cls = '', attrs = '') {
  const size = SIZES[name];
  if (!size) throw new Error(`Unknown icon: ${name}`);
  const [w, h] = size;
  const klass = cls ? ` class="${esc(cls)}"` : '';
  return `<svg${klass} viewBox="0 0 ${w} ${h}" aria-hidden="true" focusable="false"${attrs ? ' ' + attrs : ''}><use href="${SHEET}#${name}"/></svg>`;
}
