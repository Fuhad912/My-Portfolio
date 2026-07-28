# Fuhad Bello — Portfolio

Personal portfolio built with React, Vite, and Tailwind CSS. Deployed as a static site.

## Stack

- **React 19** + **React Router 7** — routing between Home and Projects
- **Vite 7** — build tooling
- **Tailwind CSS 4** (CSS-first config via `@theme` in `src/index.css`)
- **Framer Motion** — scroll reveals and page transitions (respects `prefers-reduced-motion`)
- **@fontsource-variable/inter** — self-hosted variable font, no external font requests

## Structure

```
src/
  components/   Reusable UI: Navbar, Footer, ProjectCard, SectionHeading, Reveal, MagneticButton
  data/         Content as data — profile.js (bio, focus areas, FAQs) and projects.js
  pages/        Home.jsx and Projects.jsx (route-level composition only)
  index.css     Design tokens (@theme), base styles, .btn-* and .eyebrow components
```

Content lives in `src/data/`, not scattered through JSX — updating copy, projects, or FAQs
means editing one file, not hunting through components.

## Local development

```bash
npm install
npm run dev      # start dev server
npm run build    # production build to dist/
npm run lint     # eslint
```

## Design notes

- 8px-based spacing via Tailwind's default scale, used consistently across sections.
- One accent colour (`--color-accent`) used sparingly — eyebrow labels, bullet markers, a
  single hero glow — rather than scattered across the UI.
- Animation is limited to fade/slide reveals and one static gradient glow; nothing loops
  or draws attention to itself.
