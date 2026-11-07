/**
 * Contact form: live validation + submit.
 * Rules live in utils/validators.js, fields in src/data/contactForm.json.
 * On submit it opens the visitor's email app with the message filled in.
 * To send without an email app, replace the mailto block with a fetch() to
 * Formspree / Web3Forms (see README).
 */
import { $ } from '../utils/dom.js';
import { validators } from '../utils/validators.js';
import { blip } from './audio.js';

export function initContactForm({ email, config }) {
  const form = $('#contactForm');
  const status = $('#formStatus');
  if (!form) return;

  // fields that have a validation rule
  const fields = config.fields
    .filter(f => validators[f.id])
    .map(f => ({
      id: f.id,
      el: $('#' + f.id),
      err: $('#' + f.id + 'Err'),
      count: $('#' + f.id + 'Count'),
      check: validators[f.id],
      max: f.maxlength
    }));

  function validate(field) {
    const message = field.check(field.el.value);
    const wrap = field.el.closest('.field');
    field.err.textContent = message;
    wrap.classList.toggle('invalid', !!message);
    wrap.classList.toggle('valid', !message && field.el.value.trim() !== '');
    field.el.setAttribute('aria-invalid', message ? 'true' : 'false');
    return !message;
  }

  fields.forEach(field => {
    field.el.addEventListener('blur', () => validate(field));
    field.el.addEventListener('input', () => {
      if (field.el.closest('.field').classList.contains('invalid')) validate(field);
      if (field.count) field.count.textContent = `${field.el.value.length} / ${field.max}`;
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    status.className = 'form-status';

    const results = fields.map(validate);
    if (results.includes(false)) {
      fields[results.indexOf(false)].el.focus();
      status.textContent = '✖ Please fix the highlighted fields.';
      status.classList.add('bad');
      blip(220);
      return;
    }

    const value = id => $('#' + id).value.trim();
    const name = value('name');
    const subject = value('subject') || `Portfolio message from ${name}`;
    const body = `${value('message')}\n\n— ${name} (${value('email')})`;

    window.location.href =
      `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    status.textContent = `✔ Thanks, ${name.split(' ')[0]}! Your email app should open with the message ready to send.`;
    status.classList.add('ok');
    blip(990);
    form.reset();
    fields.forEach(f => { if (f.count) f.count.textContent = `0 / ${f.max}`; });
    form.querySelectorAll('.field').forEach(f => f.classList.remove('valid', 'invalid'));
  });
}
