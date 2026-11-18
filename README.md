# arturo.locsin.io

Arturo Locsin's personal corner of the web: a short introduction, a photo, and links to find him elsewhere.

Part of the Locsin family of sites:

- `locsin.io` — family home (separate project)
- `arturo.locsin.io` — this site

Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4. Hosted on Vercel; every push to `main` deploys.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Where things live

- `src/app/page.tsx` — the homepage copy and layout.
- `src/app/links.ts` — the list of links (add, remove or reorder here).
- `src/app/globals.css` — every colour, in one place. The site is light mode only.
- `public/halftone.svg` — the halftone dot texture (tinted by the `--dots` colour).
- `public/arturo.jpg` — profile photo.
- `public/arturo-locsin-cv.pdf` — the CV behind the "Download my CV" link. Replace this file to update it (and the size note in `src/app/links.ts`).
- `src/app/projects/page.tsx` — placeholder Projects page.

## Deploying to the subdomain

1. Push this repo to GitHub and import it as a new project in Vercel (framework preset: Next.js).
2. In the Vercel project, go to **Settings → Domains** and add `arturo.locsin.io`.
3. If `locsin.io` uses Vercel nameservers, the record is created automatically. Otherwise add a DNS record at your registrar:
   `CNAME  arturo  cname.vercel-dns.com`
