# Design Philosophy — HELIX Showcase

## Principles

### Cinematic UX
Every interaction is choreographed like a film. Motion, pacing, and visual hierarchy guide users through seamless, emotionally resonant experiences. The hero particles, drift animations, and staggered reveal sequences all follow a narrative arc.

### Premium Minimalism
Restraint as sophistication. Dark canvas (`ink-950`), generous whitespace, subtle glass-morphism overlays, and a strict content hierarchy ensure every pixel earns its place.

### Motion-First
Animation is communication, not decoration. Framer Motion drives staggered fade-ins, scroll-triggered reveals, floating particles, and glowing orb drifts. GSAP handles performance-critical timeline sequences. Every transition serves clarity and delight.

### Production-Grade
Every component is battle-tested, performant, and accessible. The codebase ships code that scales from startup sprint to enterprise load.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| brand-400 | `#34d399` | Primary accents, CTAs, highlights |
| brand-500 | `#10b981` | Buttons, interactive states |
| brand-300 | `#6ee7b7` | Gradient text highlights |
| cyan-300 | `#67e8f9` | Gradient end-stop, secondary glow |
| cyan-400 | `#22d3ee` | Ambient glow orbs |
| emerald-400 | `#34d399` | Form + Space accent, philosophy card |
| ink-950 | `#042f2e` | Page background (deep dark teal) |
| ink-900 | `#134e4a` | Elevated surfaces |
| white/5–50 | varied | Opacity layers for depth |

### Gradient Signatures Per Brand

| Brand | Gradient |
|-------|----------|
| ThreadForge | blue-600/40 → cyan-600/20 → ink-950 |
| Aura | amber-600/40 → orange-600/20 → ink-950 |
| APEX | red-600/40 → rose-600/20 → ink-950 |
| Helix Digital | purple-600/40 → pink-600/20 → ink-950 |
| Form + Space | emerald-600/40 → teal-600/20 → ink-950 |

## Typography

- **Display / Headlines:** Space Grotesk (weights 400–700) — geometric, confident, modern.
- **Body / UI:** Inter (weights 300–900) — highly legible at all sizes, excellent for long-form and interface text.
- **Scale:** `text-5xl` through `text-8xl` for hero, `text-3xl`–`text-5xl` for section headings, `text-base`–`text-lg` for body copy.

## Motion System

- **Stagger delays:** 0.1–0.15 s offset between sibling elements.
- **Easing:** `[0.25, 0.1, 0.25, 1]` (custom cubic-bezier) for reveals.
- **Scroll triggers:** `whileInView` with `once: true` and `-50px` to `-100px` margins.
- **Ambient:** Floating particles (40 points, 4–10 s loops), glow orbs (8–20 s drift animations), grid pattern overlay at 3% opacity.
- **Counters:** Animated number transitions with cubic ease-out, triggered on viewport entry.

## Glass & Surface Effects

- `.glass`: `rgba(255,255,255,0.05)` backdrop with 16px blur.
- `.glass-dark`: `rgba(0,0,0,0.4)` backdrop with 20px blur.
- Card hover states: border lightening, subtle white overlay, icon scale transforms.
- Selection highlight: brand-500 background with white text.

## Inspiration

- Dark, immersive brand storytelling (Apple, Stripe, Linear)
- Cinematic scroll narratives (locomotive scroll, Awwwards winners)
- Glassmorphism and neumorphism softened for dark mode
- Studio agency portfolios that treat code as craft

## Design Token Map (tailwind.config.js)

```
brand  { 50 → 950 }  — emerald-derived, used for primary UI
ink    { 50 → 950 }  — teal-derived, used for backgrounds/surfaces
```

All custom tokens extend the default Tailwind palette for maximum compatibility.
