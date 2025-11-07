# Center for Nexus of Air Quality, Health, Ecosystem, and Climate

<div align="center">
   <img src="./public/AQC_logo.ico" alt="Air Quality Nexus Center Logo" width="100" height="100">

   <strong>Official website for the Air Quality Nexus Center at the Asian Institute of Technology (AIT)</strong>

   <br/>
   <a href="https://hunwinthu.github.io/Center-for-Nexus-of-Air-Quality-Health-Ecosystem-and-Climate/">
      <img alt="Live Site" src="https://img.shields.io/badge/Live%20Site-Visit-blue"/>
   </a>
   <a href="https://react.dev/">
      <img alt="React 18" src="https://img.shields.io/badge/React-18.3.1-61DAFB"/>
   </a>
   <a href="https://www.typescriptlang.org/">
      <img alt="TypeScript 5" src="https://img.shields.io/badge/TypeScript-5.5.3-3178C6"/>
   </a>
   <a href="https://vitejs.dev/">
      <img alt="Vite 5" src="https://img.shields.io/badge/Vite-5.4.19-646CFF"/>
   </a>
</div>

## About the website

This site showcases research, projects, resources, publications, news, and collaborations led by the Center for Nexus of Air Quality, Health, Ecosystem, and Climate. It’s a modern, responsive React app with smooth animations, deep-linking between sections, and developer-friendly tooling.

Live site: https://hunwinthu.github.io/Center-for-Nexus-of-Air-Quality-Health-Ecosystem-and-Climate/

## Highlights at a glance

- Projects with rich detail pages, including Publications and a visual Gallery
- Resources with deep links to specific reports (anchor navigation) and a Read More / Read Less toggle for long summaries
- News & Events with images and shared data utilities
- Team directory and detailed member profiles
- Thematic Areas displayed in an interactive hexagon grid
- Contact page with email integration

## Navigation overview (matches the website)

- Home (landing) — mission, vision, featured content
- Projects — list of ongoing, completed, and upcoming projects
   - Project Details — includes Publications (links to Resources) and Gallery
- Resources — technical reports and downloadable materials with anchor IDs for direct links:
   - #nepal-report
   - #aqip-sources-report
   - #aqip-inventory-report
   - #aqip-roadmap-report
- Publications — key outputs and links
- News & Events — announcements and event highlights
- Our Thematic Areas — interactive research themes
- Team — members and profiles
- Contact — email form

## Key features explained

- Anchor-based deep linking from Publications on Project Details to specific Resources reports, with smooth scrolling and header offset handling
- Read More / Read Less toggle for long report summaries to keep pages scannable
- Project 1 Gallery with 6 curated images (p1.jpg – p6.jpg)
- Reusable UI built with shadcn/ui + Tailwind, animated with Framer Motion, icons via lucide-react

## Tech stack

- React 18 + TypeScript, Vite 5
- Tailwind CSS + shadcn/ui (Radix primitives)
- Framer Motion for animations
- React Router for routing and hash navigation
- Zustand (light state) and TanStack Query (if/when server state is used)
- Supabase client ready (for data, auth, storage) — optional per page

## Project structure

```
src/
   assets/                # Images and static assets (projects, partners, events, etc.)
   components/
      common/              # ErrorBoundary, LoadingProvider, SEO, etc.
      layout/              # Header, Footer, MainLayout
      thematic/            # Hexagon grid & modal
      ui/                  # shadcn/ui wrappers
      admin/               # Admin layout shell (future-friendly)
   data/                  # News & shared data helpers
   hooks/                 # use-mobile, use-toast, etc.
   lib/                   # emailjs init, utils
   pages/                 # About, Projects, Resources, Publications, Team, News, etc.
   services/              # supabase client and helpers
   store/                 # app store (zustand)
```

## Getting started

Prerequisites: Node.js 18+, npm, Git

1) Install dependencies

```bash
npm install
```

2) Environment variables (if using Supabase-backed features)

Create a .env.local file at the project root:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

3) Run locally

```bash
npm run dev
```

Then open the local URL shown in the terminal (Vite dev server).

4) Build & preview

```bash
npm run build
npm run preview
```

## Content and integrations

- Supabase
   - Client configured in `src/services/supabase.ts` (expects VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY)
   - See `supabase-storage-setup.sql` and `fix-supabase-policies.sql` for storage and policies
   - `supabase-api-examples.md` includes example queries/patterns
- Contact form (EmailJS)
   - Initialization in `src/lib/emailjs.ts`
   - Configure with your EmailJS public key; optionally externalize as an env var
- Content integration
   - See `CONTENT_INTEGRATION.md` for adding/updating page content and assets
   - Admin scaffolding exists under `src/components/admin` (future-friendly shell)

## Available scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — production build
- `npm run build:dev` — development-mode build
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

## Deployment

The site is configured for GitHub Pages deployment (see `homepage` in `package.json`).

- Build locally: `npm run build`
- The live site is published at:
   https://hunwinthu.github.io/Center-for-Nexus-of-Air-Quality-Health-Ecosystem-and-Climate/

## Contributing

Internal workflow:

1) Create a feature branch
2) Make and test your changes
3) Open a pull request to `main`

## Contact

Air Quality Nexus Center, Asian Institute of Technology (AIT)

Address: 58 Moo 9, Km. 42, Paholyothin Highway, Klong Luang, Pathum Thani 12120, Thailand

- Email: airqualitynexus@ait.ac.th
- Phone: +66 9-9797-6360
- Live site: https://hunwinthu.github.io/Center-for-Nexus-of-Air-Quality-Health-Ecosystem-and-Climate/

---

Built to advance air quality research and its co-benefits for health, ecosystems, and climate.