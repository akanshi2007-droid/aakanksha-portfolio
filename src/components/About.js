import { esc } from '../utils/dom.js';
import { Window } from './ui/Window.js';
import { Button } from './ui/Button.js';
import { SectionHeader } from './ui/SectionHeader.js';

/** About section: avatar window, bio window, timeline window. */
export function About({ profile, section }) {
  const { about, hero } = profile;

  const avatar = Window({
    title: about.avatarWindow,
    cls: 'avatar-win',
    bodyClass: 'avatar-body',
    body: `
      <figure class="avatar-slot">
        <img src="${esc(hero.photo.src)}" alt="Portrait of ${esc(profile.name)}" width="${hero.photo.width}" height="${hero.photo.height}" loading="lazy" />
      </figure>
      <p class="player-tag">${esc(about.playerTag)}</p>`
  });

  const bio = Window({
    title: about.bioWindow,
    cls: 'bio-win',
    body: `
      <h3>${esc(about.heading)}</h3>
      ${about.paragraphs.map(p => `<p>${esc(p)}</p>`).join('')}
      <ul class="stats">
        ${about.stats.map(s => `<li><b>${esc(s.label)}</b> ${esc(s.value)}</li>`).join('')}
      </ul>
      ${Button({ label: about.resumeLabel, href: profile.resume, variant: 'pink', download: true })}`
  });

  const timeline = Window({
    title: about.timelineWindow,
    cls: 'log-win',
    body: `
      <ol class="timeline">
        ${about.timeline.map(t => `
          <li><time>${esc(t.when)}</time><strong>${esc(t.title)}</strong><span>${esc(t.detail)}</span></li>`).join('')}
      </ol>`
  });

  return `
    <section id="about" class="level">
      ${SectionHeader({ level: section.level, title: section.title })}
      <div class="about-grid">${avatar}${bio}${timeline}</div>
    </section>`;
}
