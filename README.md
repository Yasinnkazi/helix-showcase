# HELIX Portfolio Showcase

The central master showcase for the entire HELIX ecosystem. A curated collection of five premium digital experiences spanning apparel manufacturing, fine dining, elite fitness, creative agency, and architecture — united by one uncompromising standard of craft.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Routing | React Router v6 |
| Styling | Tailwind CSS v3 |
| Motion | Framer Motion + GSAP |
| Icons | Lucide React |
| Build | Vite 6 |
| Fonts | Space Grotesk (display), Inter (body) |

## Getting Started

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build
npm run lint      # run ESLint
```

## Project Structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer
│   └── ui/            # AnimatedText, Button, GlassCard, ScrollReveal, Section
├── hooks/             # useMediaQuery, useMousePosition, useParallax, useScrollReveal
├── pages/             # Home (single-page layout)
├── sections/          # Hero, Overview, Projects, Stats, Philosophy, CTA
├── utils/             # cn (className utility)
├── App.tsx            # Route definitions
├── index.css          # Tailwind directives, glass utilities, selection theme
└── main.tsx           # Entry point with BrowserRouter
```

## Brands in the Ecosystem

- **ThreadForge** — Apparel Manufacturing
- **Aura** — Fine Dining
- **APEX** — Elite Fitness
- **Helix Digital** — Creative Agency
- **Form + Space** — Architecture Studio

## Color System

The palette is built around teal, cyan, and emerald tones using Tailwind's `brand` and `ink` custom scales, on a deep ink-950 background for a premium dark-mode experience.
