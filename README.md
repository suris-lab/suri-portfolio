# Shan Lai Portfolio

Personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and a Three.js hero treatment.

## Update Content

Content is component-local:

- `components/about.tsx` for positioning, disciplines, and stats
- `components/projects.tsx` for selected work
- `components/design-gallery.tsx` for placeholder design samples
- `components/technical-arsenal.tsx` for CV-backed hard skills
- `components/experience.tsx` for career history
- `components/contact.tsx` for contact links and the mailto form
- `components/hero.tsx` for the opening hero copy

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy With Vercel

1. Push this repo to GitHub.
2. Import the GitHub repo in Vercel.
3. Keep the default Next.js settings.
4. Deploy.

Vercel will install dependencies and run `npm run build` automatically.

## Useful Files

- `app/page.tsx` controls the page structure.
- `app/globals.css` controls the visual system.
- `components/void-sphere.tsx` controls the 3D hero visual.
- `public/projects/` contains selected-work preview images.
- `vercel.json.example` documents optional Vercel settings.

## What To Replace Next

- Add live case-study URLs when ready.
- Set `NEXT_PUBLIC_SITE_URL` in Vercel once the production domain is chosen.
