# Aakanksha Singh · Frontend Developer Portfolio ♡

A cute retro-OS portfolio built with **vanilla HTML, CSS and ES modules**.
Reusable components render the page from **JSON content files**. No build step, no dependencies.

## Run it

ES modules need a web server (double-clicking `index.html` will not work).

```bash
npx serve .          # then open the link it prints
# or: python -m http.server 8000   -> http://localhost:8000
# or: VS Code "Live Server" extension -> Open with Live Server
```

## Project structure

```
aakanksha-portfolio/
├── index.html                 Page shell: loads CSS + src/main.js, renders into #app
├── package.json               "npm start" runs a local server
├── README.md
├── assets/
│   ├── images/avatar.png      Your photo (transparent cut-out)
│   ├── icons/sprites.svg      Pixel sprites (cat, hearts, cursor, gamepad, ...)
│   ├── icons/favicon.svg
│   ├── docs/resume.pdf        Download-resume button
│   ├── projects/              ← PUT YOUR PROJECT SCREENSHOTS HERE
│   └── audio/                 ← optional theme.mp3
└── src/
    ├── main.js                Entry: load JSON -> render components -> start features
    ├── data/                  ★ ALL CONTENT LIVES HERE (edit these to change the site)
    │   ├── profile.json       Name, hero text, about, timeline, social links, footer
    │   ├── nav.json           Menu items + section titles
    │   ├── skills.json        Skill groups
    │   ├── projects.json      Projects: text, tech, links, screenshots
    │   └── contactForm.json   Form fields
    ├── components/            Reusable UI (each returns an HTML string)
    │   ├── App.js             Composes the whole page (reorder sections here)
    │   ├── Hero.js · HeroMonitor.js · HeroPhoto.js
    │   ├── About.js · Skills.js · SkillGroup.js
    │   ├── Projects.js · ProjectCard.js
    │   ├── Contact.js · SocialLinks.js
    │   ├── Navbar.js · Footer.js · Taskbar.js · Intro.js · Lightbox.js
    │   └── ui/                Tiny building blocks used everywhere
    │       ├── Window.js · Button.js · ChipList.js · Icon.js
    │       ├── SectionHeader.js · Rainbow.js · Field.js
    ├── features/              Behaviour (no markup)
    │   ├── audio.js · intro.js · nav.js · reveal.js · lightbox.js
    │   ├── contactForm.js · floaties.js · heroDialog.js · clock.js
    ├── utils/                 dom.js · storage.js · loadData.js · validators.js
    └── styles/
        ├── main.css           Imports everything below
        ├── tokens.css         Colours, fonts, shadows (re-theme here)
        ├── base.css · animations.css · responsive.css · cursors.css
        └── components/        One stylesheet per component
```

## Common edits

| I want to...                         | Edit                                                         |
|--------------------------------------|--------------------------------------------------------------|
| Change my bio, links, hero text      | `src/data/profile.json`                                      |
| Add / change a project               | `src/data/projects.json` (add an object; a card appears)     |
| Add a skill                          | `src/data/skills.json`                                       |
| Add my screenshots                   | Drop PNG/JPGs in `assets/projects/` using the names in `projects.json` |
| Set a live-demo link                 | `"demo": "https://..."` in `projects.json` (button hides while empty) |
| Change colours                       | `src/styles/tokens.css`                                      |
| Add a new section                    | New file in `src/components/`, add it to `App.js` + `nav.json` |
| Add a form field                     | `src/data/contactForm.json` (+ a rule in `utils/validators.js` if it needs validation) |

## How it works

1. `index.html` loads `src/main.js` as an ES module.
2. `main.js` fetches the JSON files, passes them to `App()` in `components/App.js`, and sets `#app.innerHTML`.
3. Each component is a plain function `(data) => htmlString`. Small ones in `components/ui/` (`Window`, `Button`, `ChipList`, `Icon`, `Field`, ...) are reused by the bigger ones.
4. After rendering, `features/*.js` attach behaviour: loading screen, scroll spy, reveal-on-scroll, lightbox, form validation, music, floating hearts.
5. All text from JSON goes through `esc()` before it is inserted into HTML.

## Audio

Press **PRESS START** on the loading screen to begin music (browsers require a click first).
If `assets/audio/theme.mp3` exists it plays; otherwise a built-in chiptune loop (Web Audio) plays.
Use royalty-free music only. The ♪ button in the taskbar toggles it and remembers your choice.

## Contact form

Validation is client-side (name, email, message). On submit it opens the visitor's email app with a pre-filled message.
To send without an email app, create a free Formspree form and replace the `mailto` block in `src/features/contactForm.js` with:

```js
fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: new FormData(form) });
```

## Deploy

Static site, so any host works:

- **Vercel:** push to GitHub -> vercel.com -> Add New Project -> import -> Deploy (framework: *Other*, no build command).
- **Netlify:** drag the whole folder onto app.netlify.com/drop.
- **GitHub Pages:** repo Settings -> Pages -> Deploy from branch `main` / root.

## Design notes (for the interview)

- **Theme:** cute retro OS / game UI. Each section is a "level"; content lives in OS-style windows.
- **Palette & type:** pastel pink / lavender / butter with plum ink; Press Start 2P for headings, VT323 for body.
- **Architecture:** data (JSON) is separate from presentation (components) and behaviour (features), so adding a project is a one-object change.
- **Responsive:** CSS Grid; two-column layouts collapse at 1080 / 960 / 820 / 520 px; nav becomes a dropdown on mobile.
- **Usability & a11y:** semantic landmarks, visible focus, ARIA labels and live regions on the form, keyboard-openable lightbox, `prefers-reduced-motion` support, graceful placeholders for missing images.
