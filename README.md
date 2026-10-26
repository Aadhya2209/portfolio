# Aadhya Sharma | Portfolio

Personal portfolio of **Aadhya Sharma**, a Computer Engineering student at GCET Jammu and Research Intern at IIT Jammu, working on graph and hypergraph neural networks for computer vision and audio, and building full-stack web apps.

Built with **React 18 + Vite**.

**Live site:** https://aadhya2209.github.io

---

## Interface overview

A single scrolling page with a dark green theme, lime green accents and bold typography: immersive at the top, clean and easy to scan below.

### 1. Navigation bar
- Sticky, translucent and blurred so it stays readable over the hero image.
- Links: **About, Research, Experience, Projects, Skills**, plus a lime **Let's talk** button.
- The link for the section on screen lights up with a green underline.

### 2. Hero
- Full-width AI-themed illustration (a portrait made of neural circuitry) blended into the dark theme with layered gradients and a vignette.
- Headline **"Building *intelligent* systems that see and hear."** with "intelligent" in lime green and a soft glow.
- Intro, **View my research** and **GitHub** buttons, and a stats row (2× IIT Jammu research internships, 4 internships, 9+ certifications, 7.5 CGPA).
- Text fades up on load; the background drifts with a slow parallax on scroll.

### 3. Skills ticker
A strip that endlessly scrolls her core skills and pauses on hover.

### 4. What I do
Three cards: **AI/ML Research**, **Full-Stack Development**, **Data Analytics**.

### 5. Research
Two IIT Jammu research cards, each with a small animated canvas visual:
- **Graph Refinement in Latent Space: Hypergraph Convolution for Underwater Object Detection** (in progress)
- **Infant Cry Classification with Graph Convolutional Networks** (completed)

### 6. Experience
A timeline of internships with a green line that draws itself as you scroll.

### 7. Projects
A bento grid of glass cards: two large featured projects, three medium and four small. Each card has an illustrated preview of the project, tilts in 3D toward the cursor with a glowing gradient border, and links to its GitHub repo (and live site where there is one):

| Project | What it is | Link |
|---|---|---|
| QueueSetu | Queue management app | [repo](https://github.com/Aadhya2209/queuesetu-app) |
| Campus Placement Analytics | Streamlit dashboard on campus placement data (IBM SkillsBuild) | [repo](https://github.com/Aadhya2209/IBM_Project) |
| FreshFusionBowl | Multi-page website for a healthy-food cloud kitchen | [live](https://fresh-fusion-bowl.vercel.app) · [repo](https://github.com/Aadhya2209/FreshFusionBowl) |
| DigiBridge | Digital learning resource platform with Firebase OTP login | [repo](https://github.com/Aadhya2209/new_digibridge) |
| Global AQI Dashboard | Air quality analysis across 50+ countries in Power BI | [repo](https://github.com/Aadhya2209/AQI_ANALSIS_PROJECT_POWER_BI) |
| Cached Info | Login and profile system with Firebase storage | [repo](https://github.com/Aadhya2209/Cached-info) |
| DreamScape | Mobile-first sleep tracker | [repo](https://github.com/Aadhya2209/project_dreamscape) |
| Ludo in the browser | Ludo board game in vanilla JavaScript | [repo](https://github.com/Aadhya2209/GAME) |
| Chat application | Messaging app in Java | [repo](https://github.com/Aadhya2209/Chatting_Application) |

### 8. Skills and credentials
Tech stack grouped by area, certifications (IBM, Oracle, Google, Microsoft, Reliance Foundation, Deloitte, HP LIFE) and education scores.

### 9. Contact
**"Ready to build something together?"** with her email, a copy button and a LinkedIn link.

---

## Interactions and animations

| Effect | Where it lives |
|---|---|
| Hero text entrance | CSS keyframes in `index.css` |
| Hero parallax | `useParallax` hook |
| Skills ticker | `Ticker.jsx` + CSS marquee |
| Scroll reveal of cards and rows | `useRevealChildren` hook |
| Cursor spotlight on cards | `spotlight` handler |
| Count-up numbers | `CountUp.jsx` + `useInView` hook |
| Experience timeline drawing | `useScrollProgress` hook |
| Active nav link | `useActiveSection` hook |
| Research visuals | `ResearchViz.jsx` (canvas) |
| Project previews and 3D tilt | `ProjectArt.jsx` (SVG) + `Projects.jsx` |

All motion switches off for visitors with "reduce motion" turned on.

---

## Project structure

```
├── index.html                 page shell and Google Fonts
├── vite.config.js
├── package.json
├── .github/workflows/
│   └── deploy.yml             auto-deploy to GitHub Pages on every push
└── src/
    ├── main.jsx               React entry point
    ├── App.jsx                puts the sections together
    ├── data.js                ALL site content (edit this to update the site)
    ├── index.css              design tokens and styles
    ├── assets/
    │   └── hero-ai.webp       hero background image
    ├── hooks/
    │   └── motion.js          scroll, reveal, parallax and in-view hooks
    └── components/
        ├── Nav.jsx            Hero.jsx        Ticker.jsx
        ├── Services.jsx       Research.jsx    ResearchViz.jsx
        ├── Experience.jsx     Projects.jsx    Skills.jsx
        ├── Contact.jsx        Footer.jsx      CountUp.jsx
        ├── Icon.jsx           SectionHead.jsx
        └── ProjectArt.jsx     illustrated project previews
```

Content and layout are separated: components only render what's in `src/data.js`.

---

## Run locally

Requires [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev
```

Open the address it prints (usually http://localhost:5173).

| Command | What it does |
|---|---|
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |

## Deploy on GitHub Pages

1. Create a repo named `Aadhya2209.github.io` and push this project to the `main` branch.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Every push to `main` now builds and deploys automatically (see `.github/workflows/deploy.yml`).
4. The site goes live at `https://aadhya2209.github.io`.

Vercel or Netlify also work: import the repo, build command `npm run build`, output folder `dist`.

## Updating content

- **Text, projects, links, stats:** edit `src/data.js`. To add a project, add an object to the `projects` array with a `size` (`lg`, `md` or `sm`) and an `art` preview (`queue`, `analytics`, `food`, `learn`, `air`, `auth`, `sleep`, `ludo`, `chat`).
- **Colors:** change the tokens under `:root` at the top of `src/index.css`.
- **Hero image:** replace `src/assets/hero-ai.webp` (keep the same name, or update the import in `Hero.jsx`).

## Design

| Token | Color | Used for |
|---|---|---|
| Background | `#080F0C` | Page background |
| Card | `#101C15` | Cards and panels |
| Accent | `#8BE65A` | Highlights, buttons, links |
| Text | `#F1F5F0` | Main text |
| Secondary | `#A2B2A8` | Descriptions |
| Border | `#203328` | Card borders and dividers |

Fonts: **Sora** (headings), **DM Sans** (body), **JetBrains Mono** (labels).

---

## Contact

- **Email:** officialaadhyasharma@gmail.com
- **LinkedIn:** [aadhya-sharma-67488b2a5](https://www.linkedin.com/in/aadhya-sharma-67488b2a5/)
- **GitHub:** [Aadhya2209](https://github.com/Aadhya2209)

© 2026 Aadhya Sharma
