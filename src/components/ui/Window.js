import { esc } from '../../utils/dom.js';

/**
 * Retro OS window used by About, Skills, Projects and Contact.
 *
 * Window({ title, cls, body, bodyClass, bodyTag, bodyAttrs, before })
 *  - before: extra HTML placed above the title bar (e.g. a stage badge)
 *  - bodyTag: use 'form' when the body itself should be a <form>
 */
export function Window({ title, cls = '', body = '', bodyClass = '', bodyTag = 'div', bodyAttrs = '', before = '' }) {
  return `
    <article class="window${cls ? ' ' + esc(cls) : ''}">
      ${before}
      <div class="titlebar"><span>${esc(title)}</span><span class="ctrl"><i></i><i></i></span></div>
      <${bodyTag} class="win-body${bodyClass ? ' ' + esc(bodyClass) : ''}"${bodyAttrs ? ' ' + bodyAttrs : ''}>${body}</${bodyTag}>
    </article>`;
}
