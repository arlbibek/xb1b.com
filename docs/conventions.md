# Conventions

## Code

- TypeScript strict. No `any`.
- Prefer Server Components. Client components only for interactive error recovery — the landing ships no client JS.
- Keep the landing visual system in `styles/globals.css` — do not recreate glow/name sizing with ad-hoc Tailwind on the home page.
- Comment only non-obvious why.

## Naming

- Route folders under `app/` use lowercase path segments.
- CSS classes for the landing use a `landing` / `landing__*` BEM-ish prefix.

## Gotchas

- Helvetica Neue is not loaded via `next/font` or a CDN. Changing the font means updating the stack in `styles/globals.css` (and Tailwind `fontFamily.sans` if used).
- Viewport units: prefer `dvh`/`svh` over `vh` so mobile browser chrome does not cause scroll.
- Short-link redirects live in `next.config.js`, not as app routes. Keep them `permanent: false` so a target can be changed later.
- Sky icons live in `lib/landing-floating-icons.ts`. Only add tools that are actually in `bibek - skills.md`. Drift animates the `.sky__star` wrapper and twinkle animates `.sky__glyph`; putting opacity on the wrapper dims the twinkle.
- The `.sky` mask uses the same `min(vw, vh)` basis as the name's `font-size`. If the name's size changes, change the mask with it.
- Stars are kept out of the bottom strip where the project links sit and the top strip where the contact links sit (`inCore` in `lib/landing-floating-icons.ts`).
- Icons and the social card in `public/images/` are generated (white Nimbus Sans Bold "B" on black); regenerate all sizes together rather than editing one.
