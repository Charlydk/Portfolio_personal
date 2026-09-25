# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Vite dev server at localhost:5173
npm run build      # Production build → dist/
npm run preview    # Preview the production build locally
npm run lint       # ESLint
npm run deploy     # predeploy runs build, then gh-pages -d dist
```

No test suite configured.

## Stack

React 19 + Vite 6, plain JSX (no TypeScript). Bootstrap 5 + react-bootstrap for UI, react-icons / bootstrap-icons for icons. AOS for scroll animations. Contact form posts to a hardcoded Formspree endpoint in `ContactForm.jsx` (no backend). Deployed to GitHub Pages at `https://charlydk.github.io/Portfolio_personal/`.

## Architecture

Single-page app with no router. `src/App.jsx` renders the sections vertically in this order:

```
NavbarComponent → HeroSection → AboutMe → ExperienciaComponent → ProjectsSection → ContactForm → FooterComponent
```

- **Navigation is anchor-based**: navbar and hero buttons link to `#home`, `#about`, `#experiencia`, `#projects`, `#contact`. These must match the `id` on each section's root `<section>`; renaming one breaks navigation silently.
- **AOS** is initialized once, globally, in `src/main.jsx` (`duration: 1000`, `once: true`). Sections only add `data-aos` / `data-aos-delay` attributes.
- **Projects**: `ProjectsSection` maps `src/data/projectsData.js` into `ProjectCard`s and owns the selected-project state. The modal is a static subcomponent, `ProjectCard.Modal`.

## Content

UI copy is in Spanish. All content is hardcoded in source files, with no CMS or MDX:

- **Projects** (`src/data/projectsData.js`): fields `id`, `title`, `description`, `imageUrl`, `technologies`, plus the optional `modalContent` (`{ title, text[] }`), `videoUrl`, `projectUrl`, `repoUrl`, and `badge`.
  - Omit `repoUrl` for private repos (client or business projects). The card then shows a disabled "Repositorio Privado" button instead of a link that would 404.
  - `modalContent.text` entries are rendered with `dangerouslySetInnerHTML`, so inline HTML (`<strong>`, etc.) works.
  - `gallery` (`[{ src, caption }]`) renders as a carousel in the modal. Screenshots of client or internal systems must have personal data and client names blurred before they are added.
  - `videoUrl` must be a YouTube **embed** URL (`/embed/...`). When it is present, the modal shows the video and its title becomes "Video Demo: …".
- **Experience, About, Hero**: content lives directly in each component's JSX.

## GitHub Pages Considerations

`vite.config.js` sets `base: '/Portfolio_personal/'`. Files in `public/` (e.g. `public/images/*`) that are referenced by a string path must be prefixed with `import.meta.env.BASE_URL`. Otherwise they work in `npm run dev` but break once deployed. Assets in `src/assets/` that are pulled in with an ES `import` get the right path from Vite automatically.
