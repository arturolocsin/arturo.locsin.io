# arturo.locsin.io

Arturo's personal site: profile, personal works, social media links, and thoughts and writing in the future.
Next.js 16 App Router, React 19, strict TypeScript, Tailwind CSS 4.
Use npm and the committed `package-lock.json`.
Deployed on Vercel from `main`. Keep it simple: no backend, no database.

Before committing: `npm run typecheck && npm run lint && npm run build`.


## Purpose

- This is Arturo Locsin’s personal landing page. Make it feel like a short introduction he would give someone in person. A visitor should quickly get a sense of who he is, what he cares about, and where to find him online.
- Write in a warm, conversational voice. Use first person when it sounds natural. Let Arturo’s interests and curiosity come through alongside what he does for work.
- Keep professional context brief. Mention the kind of work Arturo enjoys in a sentence or two where it fits. Use LinkedIn for detailed career history and `arturo.locsin.io/projects` for projects. Keep résumé sections, employer timelines, and achievement lists out of the landing page.

## Content and links

- Start with a short introduction and a clearly visible group of links. Add a small personal detail or two when Arturo supplies them. Use only details he has approved for public use.
- The initial links are LinkedIn, Arturo’s personal Facebook profile, Instagram, and Projects at `https://arturo.locsin.io/projects`. A YouTube playlist can join them once Arturo chooses a public playlist to share.
- Use the exact URLs Arturo provides. Omit links whose destinations are still unknown. Check that each published link points to the intended public page.
- Keep the blog and X/Twitter out of the initial release. Keep navigation and page sections limited to what visitors can use today.


## Visual direction

- Make the page light, artistic, elegant, and minimalist. Use generous space, carefully chosen typography, and deliberate alignment. Give the introduction a clear focal point and use one small expressive detail, such as a fine blue line or a distinctive typographic treatment.
- Start with warm off-white `#F8F7F3` for the background, royal blue `#2846C7` for links and accents, and pale blue `#DDE5FF` for subtle highlights or hover backgrounds. Use dark ink `#182033` for body text.
- Keep off-white dominant and use blue sparingly so links remain easy to spot. Keep pale blue on surfaces or decorative details. Check text contrast and make keyboard focus clearly visible.
- Use the palette as a starting point. Refine it after seeing the page in the browser, while preserving the warm light background and the two shades of blue. Keep the colors in one place so they’re easy to adjust.
- Keep the link group visually quiet and easy to scan. Avoid turning each link into a large card. Carry the same sense of space and hierarchy onto mobile.

## Implementation and verification

- Inspect the relevant files and project scripts before editing. Reuse the existing framework and components where they fit. Make small, reversible changes directly and outline the approach first for larger changes to layout, navigation, or public copy.
- Keep links in one editable list so Arturo can add, remove, or reorder them easily. Keep the homepage structure simple enough to add a section or blog link later.
- Run the relevant existing checks. For substantial changes, run the production build and any available lint or type checks.
- For visual changes, inspect the running page at about 390 px and 1440 px wide. Check readability, spacing, overflow, contrast, keyboard focus, and whether links are easy to find and tap.
- Push or deploy only when Arturo asks. Finish with a brief summary of what changed, what you verified, and any check you couldn’t run.