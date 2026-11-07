import { esc } from '../utils/dom.js';
import { Icon } from './ui/Icon.js';
import { Window } from './ui/Window.js';
import { Field } from './ui/Field.js';
import { Button } from './ui/Button.js';
import { SectionHeader } from './ui/SectionHeader.js';
import { SocialLinks } from './SocialLinks.js';

/** Contact section. Form fields come from src/data/contactForm.json. */
export function Contact({ profile, form, section }) {
  const { contact } = profile;
  return `
    <section id="contact" class="level">
      ${SectionHeader({ level: section.level, title: section.title })}
      <div class="contact-grid">
        <div class="cat-help">
          <div class="bubble">${esc(contact.bubble)}</div>
          ${Icon('cat', 'cat-big')}
          ${Icon('daisy', 'daisy')}
          ${Icon('heart', 'heart-s')}
          ${SocialLinks(contact.social)}
        </div>
        ${Window({
          title: contact.formWindow,
          cls: 'form-win',
          bodyTag: 'form',
          bodyAttrs: 'id="contactForm" novalidate',
          body: `
            ${form.fields.map(Field).join('')}
            ${Button({ label: form.submitLabel, variant: 'pink', type: 'submit', cls: '' })}
            <p id="formStatus" class="form-status" role="status" aria-live="polite"></p>`
        })}
      </div>
    </section>`;
}
