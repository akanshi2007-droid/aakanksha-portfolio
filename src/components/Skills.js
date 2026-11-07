import { Window } from './ui/Window.js';
import { SectionHeader } from './ui/SectionHeader.js';
import { SkillGroup } from './SkillGroup.js';

/** Skills section. `skills` comes from src/data/skills.json. */
export const Skills = ({ skills, section }) => `
  <section id="skills" class="level">
    ${SectionHeader({ level: section.level, title: section.title })}
    ${Window({
      title: skills.windowTitle,
      cls: 'items-win',
      bodyClass: 'skills-grid',
      body: skills.groups.map(SkillGroup).join('')
    })}
  </section>`;
