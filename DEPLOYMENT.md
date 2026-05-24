# HELIX Portfolio Showcase — Deployment Guide

## Vercel Deployment

1. Push to Git repository
2. Import in Vercel
3. Framework: Vite
4. Build: `npm run build`
5. Output: `dist`
6. Install: `npm install`

## Manual Build

```bash
npm install
npm run build
```

## Multi-Project Deployment

Each project in the ecosystem deploys independently:

| Project | Directory | Domain |
|---------|-----------|--------|
| Showcase | portfolio-showcase | helix.build |
| ThreadForge | printing-brand | threadforge.app |
| Aura | restaurant-brand | aura.dining |
| APEX | fitness-brand | apexfitness.io |
| Helix Digital | creative-agency | helixdigital.studio |
| Form + Space | architecture-studio | formandspace.design |

## Requirements

- Node.js >= 18
