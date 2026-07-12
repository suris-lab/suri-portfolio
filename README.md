# Suri Slai Portfolio

Personal portfolio website built with Next.js, TypeScript, and Vercel-ready defaults.

## Update Content

Most portfolio content lives in:

- `src/data/portfolio.ts`

Update that file for profile links, experience, projects, metrics, and principles. Replace placeholder experience after copying the latest LinkedIn details into the data shape.

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
- `public/hero-workspace.png` is the generated hero image.
- `vercel.json.example` documents optional Vercel settings.

## What To Replace Next

- `profile.email`
- Experience entries
- Featured projects
- Project links
- A real profile image or stronger personal visual asset
