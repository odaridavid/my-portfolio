# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Personal developer portfolio for **odari.dev**. Single Next.js App Router site with a handful of static pages (home, blog, projects, experience, life, contact). Deployed on Vercel.

## Stack

- **Next.js 15** (App Router, Turbopack dev server)
- **React 19**
- **TypeScript** (strict mode, `@/*` aliased to `src/*`)
- **Tailwind CSS v4** (via `@tailwindcss/postcss`)
- **framer-motion** for animations
- **react-icons** for iconography
- **@vercel/analytics** — `<Analytics />` is mounted in `src/app/layout.tsx`

## Commands

```bash
npm run dev      # next dev --turbopack
npm run build    # next build
npm run start    # next start (serves the production build)
npm run lint     # next lint
```

## Layout

```
src/app/
  layout.tsx          # Root layout: <html>, Navbar, main, Footer, <Analytics />
  page.tsx            # Home
  globals.css         # Tailwind entry + global styles
  components/
    Navbar.tsx
    Footer.tsx
  blog/page.tsx
  projects/page.tsx
  experience/page.tsx
  life/page.tsx
  contact/page.tsx
public/                # static assets
```

All routes are static (`○` in the build output). Keep them that way unless there's a real reason to opt into dynamic rendering.

## Conventions

- Pages are server components by default. Add `"use client"` only when a component needs hooks, browser APIs, or framer-motion.
- Styling is Tailwind utility classes; avoid one-off CSS files. Global tokens belong in `src/app/globals.css`.
- Dark theme is the only theme (`<html className="dark">` is hardcoded in the root layout).
- Import shared modules via the `@/` alias rather than long relative paths.

## Deployment

Pushes to `main` deploy automatically on Vercel. Analytics page views appear in the Vercel dashboard after the deploy receives traffic.
