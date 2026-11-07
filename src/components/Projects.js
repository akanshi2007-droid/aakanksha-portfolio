import { SectionHeader } from './ui/SectionHeader.js';
import { ProjectCard } from './ProjectCard.js';

/** Projects section. `projects` comes from src/data/projects.json. */
export const Projects = ({ projects, section }) => `
  <section id="projects" class="level">
    ${SectionHeader({ level: section.level, title: section.title, subtitle: section.subtitle })}
    <div class="projects">${projects.map(ProjectCard).join('')}</div>
  </section>`;
