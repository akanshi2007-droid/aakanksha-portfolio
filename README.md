# ♡ Aakanksha Singh | Frontend Developer Portfolio

A cute retro-OS inspired personal portfolio built using **Vanilla HTML, CSS, and JavaScript (ES Modules)**.

The portfolio features reusable UI components, JSON-based content management, interactive elements, and a nostalgic pixel-art interface. No build tools or external dependencies required.

🌐 **Live Portfolio:** [aakankshasingh.vercel.app](https://aakankshasingh.vercel.app/)

<img width="1893" height="911" alt="image" src="https://github.com/user-attachments/assets/3da5152b-9d73-49a6-b7d6-0a7a8408e20f" />


## ✨ Features
- Retro desktop-inspired UI with pastel colours and pixel-art elements.
- Reusable components for clean and organized code.
- JSON-based content management for easy updates.
- Interactive project cards and image lightbox.
- Animated loading screen, floating hearts, and reveal effects.
- Functional contact form with client-side validation.
- Optional background music with a built-in chiptune fallback.
- Responsive design for desktop, tablet, and mobile.
- Accessibility support, including keyboard navigation and reduced-motion preferences.

## 🛠️ Teck Stack
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Architecture:** ES Modules, Reusable Components
- **Data Management:** JSON
- **Deployment:** Vercel
- **Tools:** Git, GitHub, VS Code

## 🚀 Getting Started
ES modules require a local web server. Opening `index.html` directly in a browser will not work.

**Option 1: Using npx**
```bash
npx serve .
```

**Option 2: Using Python**
```bash
python -m http.server 8000
```
Open `http://localhost:8000`.

**Option 3: Using VS Code**

Install the Live Server extension and select **Open with Live Server**.

## 📁 Project Structure

```text
aakanksha-portfolio/
├── index.html
├── package.json
├── README.md
├── assets/
│   ├── images/
│   ├── icons/
│   ├── docs/
│   ├── projects/
│   └── audio/
└── src/
    ├── main.js
    ├── data/
    │   ├── profile.json
    │   ├── nav.json
    │   ├── skills.json
    │   ├── projects.json
    │   └── contactForm.json
    ├── components/
    │   ├── App.js
    │   ├── Hero.js
    │   ├── About.js
    │   ├── Skills.js
    │   ├── Projects.js
    │   ├── Contact.js
    │   └── ui/
    ├── features/
    ├── utils/
    └── styles/
```

## ⚙️ Customization

The portfolio uses JSON files to manage most of its content.

| Customization | File |
|---|---|
| Profile, bio and social links | `src/data/profile.json` |
| Navigation and section titles | `src/data/nav.json` |
| Skills | `src/data/skills.json` |
| Projects and screenshots | `src/data/projects.json` |
| Contact form fields | `src/data/contactForm.json` |
| Theme colours and fonts | `src/styles/tokens.css` |

To add a project, simply add a new object to `projects.json` and include its title, description, technologies, links, and screenshot.

## 🧩 How It Works

1. `index.html` loads `src/main.js` as an ES module.
2. `main.js` fetches the JSON content files.
3. The data is passed to reusable components in `src/components/`.
4. Components generate HTML dynamically and render it inside the main application.
5. JavaScript features handle interactions such as navigation, animations, audio, image previews, and form validation.

The project follows a simple separation of **data, presentation, and behaviour**, making it easier to maintain and extend.

## 🎨 Design & Architecture

- **Theme:** Cute retro operating system / pixel-art aesthetic.
- **Colour Palette:** Pastel pink, lavender, butter yellow, and plum.
- **Typography:** Press Start 2P and VT323.
- **Layout:** CSS Grid with responsive breakpoints.
- **Architecture:** Reusable JavaScript components and JSON-driven content.
- **Accessibility:** Semantic HTML, ARIA labels, visible focus states, and reduced-motion support.

## 🌐
