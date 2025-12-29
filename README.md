# Quantica-test

# Fest Website

Starter React + Vite + TypeScript project with Retro 8-bit styling.

## Local setup

Prerequisites:

- Node.js 18+ (or latest LTS)
- npm (comes with Node) or yarn

Steps to run locally:

1. Clone the repository

```bash
git clone <your-repo-url> && cd Quantica-test
```

2. Install dependencies

```bash
npm install
# or with yarn
# yarn
```

3. Start the development server

```bash
npm run dev
```

4. Open the app

Visit http://localhost:5173 in your browser (Vite default port).

## Key files

- `src/pages/Home.tsx` — main landing page layout (hero, marquee, gallery, events).
- `src/components` — UI components (Header, Footer, PastTournaments, GalleryBento, EventsSection, CarouselStyleSizes, TestimonialsMarquee, SponsorsMarquee, CountdownTimer, retroui components).
- `src/styles/style.css` — global theme, Retro UI CSS variables and animations.
- `vite.config.ts`, `tsconfig.json`, `tailwind.config.cjs` — project config files.

## Notes

- RetroUI components are scaffolded in `src/components/retroui` (Button, Card, Avatar, Carousel, etc.).
- Placeholder images use `picsum.photos` seeded URLs. Replace with your assets in `src/assets` and update component paths.
- The gallery uses a deterministic bento layout; testimonials use a marquee scroller.
- To change marquee speed or pause-on-hover, edit the `.marquee` animation in `src/styles/style.css`.
