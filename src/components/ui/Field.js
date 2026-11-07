import { esc } from '../../utils/dom.js';

/**
 * Form field built from a config object (see src/data/contactForm.json).
 * Error text goes into <p id="{id}Err">; textareas also get a character counter <p id="{id}Count">.
 */
export function Field(f) {
  const errId = `${f.id}Err`;
  const countId = `${f.id}Count`;
  const isArea = f.type === 'textarea';
  const describedBy = [f.required ? errId : '', isArea ? countId : ''].filter(Boolean).join(' ');

  const attrs = [
    `id="${esc(f.id)}"`,
    `name="${esc(f.id)}"`,
    f.autocomplete ? `autocomplete="${esc(f.autocomplete)}"` : '',
    f.required ? 'required' : '',
    f.minlength ? `minlength="${f.minlength}"` : '',
    f.maxlength ? `maxlength="${f.maxlength}"` : '',
    describedBy ? `aria-describedby="${describedBy}"` : ''
  ].filter(Boolean).join(' ');

  const control = isArea
    ? `<textarea ${attrs} rows="${f.rows || 5}"></textarea>`
    : `<input type="${esc(f.type || 'text')}" ${attrs} />`;

  const error = f.required ? `<p class="err" id="${errId}" role="alert"></p>` : '';
  const footer = isArea
    ? `<div class="row-between">${error}<p class="count" id="${countId}">0 / ${f.maxlength || ''}</p></div>`
    : error;

  return `
    <div class="field">
      <label for="${esc(f.id)}">${esc(f.label)}${f.optional ? ' <small>(optional)</small>' : ''}</label>
      ${control}
      ${footer}
    </div>`;
}
