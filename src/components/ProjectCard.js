import { esc } from '../utils/dom.js';
import { Window } from './ui/Window.js';
import { Button } from './ui/Button.js';
import { ChipList } from './ui/ChipList.js';

/**
 * One screenshot slot. If the image file is missing, the dashed placeholder
 * (with the expected file name) stays visible - see main.js for the error handler.
 */
function Screenshot(shot, index) {
  const big = index === 0;
  const file = shot.src.split('/').pop();
  const label = big ? `SCREENSHOT ${index + 1}<small>${esc(shot.src)}</small>` : `SHOT ${index + 1}<small>${esc(file)}</small>`;
  return `
    <figure class="shot${big ? ' big' : ''}">
      <span class="slot-label">${label}</span>
      <img src="${esc(shot.src)}" alt="${esc(shot.alt)}" loading="lazy" />
    </figure>`;
}

/** Reusable project card. `project` is one entry of src/data/projects.json. */
export function ProjectCard(project, index) {
  const { links } = project;
  const buttons = [
    links.github && Button({ label: 'GITHUB ↗', href: links.github, variant: 'blue', external: true }),
    links.demo && Button({ label: 'LIVE DEMO ↗', href: links.demo, variant: 'cream', external: true })
  ].filter(Boolean).join('');

  return Window({
    title: project.windowTitle,
    cls: 'project',
    before: `<span class="stage">★ STAGE ${String(index + 1).padStart(2, '0')}</span>`,
    body: `
      <div class="shots" data-gallery>${project.screenshots.map(Screenshot).join('')}</div>
      <div class="proj-info">
        <h3>${esc(project.title)}</h3>
        <p>${esc(project.description)}</p>
        <ul class="bullets">${project.highlights.map(h => `<li>${esc(h)}</li>`).join('')}</ul>
        ${ChipList(project.tech, 'small')}
        <div class="links">${buttons}</div>
      </div>`
  });
}
