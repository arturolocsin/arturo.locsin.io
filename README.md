# arturo.locsin.io

Arturo Locsin's personal corner of the web — profile, personal works, thoughts and writing. Placeholder for now.

Part of the Locsin family of sites:

- `locsin.io` — family home (separate project)
- `arturo.locsin.io` — this site

Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4. Hosted on Vercel; every push to `main` deploys.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

Edit the homepage in `src/app/page.tsx`.

## Deploying to the subdomain

1. Push this repo to GitHub and import it as a new project in Vercel (framework preset: Next.js).
2. In the Vercel project, go to **Settings → Domains** and add `arturo.locsin.io`.
3. If `locsin.io` uses Vercel nameservers, the record is created automatically. Otherwise add a DNS record at your registrar:
   `CNAME  arturo  cname.vercel-dns.com`
