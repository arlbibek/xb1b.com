# Architecture

## Stack

- Next.js App Router (static-friendly personal site)
- React 19
- Tailwind CSS for utility classes on error/404 surfaces
- Custom CSS for the landing composition (viewport lock, glow layers, name scale)

## Structure

- `app/` — routes only. Root `/` is the landing page. Shared layout, 404, and error UI live here.
- `components/LandingFloatingIcons.tsx` — server-rendered sky: one static layer of point stars plus ~80 tool/technology icons that drift and twinkle. Animation is pure CSS; there is no client JS on the landing.
- `lib/landing-floating-icons.ts` — the icon list (only tools from `bibek - skills.md`; Simple Icons plus four authored marks in `components/icons/`), each with a magnitude (1 = few large bright stars, 3 = many faint ones), and the seeded placement/twinkle config.
- `components/ProjectLinks.tsx` — the foot of the page: the two project links (Tithi, Brahma) and the contact email.
- `lib/site.ts` — the single source of facts about the site and its owner (title, description, summary, expertise, projects, email). Metadata, JSON-LD, `llms.txt` and the foot links all read from it.
- SEO / GEO: `app/layout.tsx` holds the metadata; `app/page.tsx` emits JSON-LD (WebSite, ProfilePage, Person, the two projects) and one screen-reader-only summary paragraph; `app/sitemap.ts`, `app/robots.ts` and `app/llms.txt/route.ts` generate `/sitemap.xml`, `/robots.txt` (AI crawlers allowed by name) and `/llms.txt`.
- `styles/globals.css` — landing visual system (black night sky, left-to-right Milky Way lavender band, sky drift/twinkle keyframes, project links, Helvetica Neue stack, viewport sizing).
- `public/` — static assets: letter-B favicon and app icons, social card (`images/og.png`), web manifest.
- `next.config.js` — short-link redirects (`/github`, `/resume`, etc.).

## Key decisions

- **No backend / no DB.** Config and static assets only. Do not introduce Supabase or other data stores without an explicit product decision.
- **Single page.** Landing only. Other former routes (projects, echo, click) were removed.
- **Viewport-fit landing.** The page uses `100dvh` / `100svh` with `overflow: hidden` so it never scrolls on any screen size.
- **Name-first.** Typography fills most of the viewport. Brand is the entire composition; everything else stays quiet.
- **Icons as stars.** Each icon rests almost dark, then slowly lights up and goes out on its own clock (negative animation delays, so they never pulse in unison). Placement is seeded best-candidate sampling: irregular like a sky, never clumped, identical on server and client. The sky is masked by an ellipse that tracks the name's footprint, so icons never sit over the type.
- **Projects as two named stars.** Small letterspaced links at the bottom centre; a one-line description appears on hover/focus, and sits permanently under the name on touch devices (`@media (hover: none)`). They link out to subdomains — no `/projects` route.
- **Font.** Helvetica Neue is proprietary and not redistributed. The site uses the system stack `"Helvetica Neue", Helvetica, Arial, sans-serif` so Apple devices get Neue and others fall back cleanly.
