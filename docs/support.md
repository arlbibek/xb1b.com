# Central support page

Canonical URL: https://xb1b.com/support. Nepali: https://xb1b.com/ne/support.
This site owns the support implementation independently of Tithi. Other projects
can link directly to /support; no tracking parameter is required.

## Configure Cloudflare Turnstile

1. Create a Managed widget in Cloudflare Turnstile, allowing xb1b.com.
2. Copy .env.example to .env.local for local development, or set the following
   variables in this main site's Vercel project (Production):
   - NEXT_PUBLIC_TURNSTILE_SITE_KEY: widget site key
   - TURNSTILE_SECRET_KEY: widget secret, server only
   - TURNSTILE_HOSTNAMES: xb1b.com (comma-separated exact hostnames if needed)
3. Rebuild and redeploy. The public key is embedded at build time.
4. Test the challenge and verify the recipient in a banking app before launch.

No keys are copied from Tithi and no production bypass is provided. When keys
are missing, the reveal remains unavailable. Use Cloudflare's documented test
keys only in development, with localhost explicitly allowed if needed. Do not
commit secrets. Add only trusted production/preview hostnames to both the
widget and TURNSTILE_HOSTNAMES.

## Page sections

Below the bank card the page shows "More ways to support" (PayPal, GitHub
Sponsors, eSewa, Khalti, UPI, crypto and others) as muted, non-clickable
"Coming soon" chips in components/support/Gateways.tsx, then "What you're
supporting": Tithi and Brahma as featured cards and open-source repositories
from lib/projects.ts. Star counts come from the GitHub API at build time and
revalidate daily (set GITHUB_TOKEN optionally to avoid rate limits); the static
numbers in lib/projects.ts are the fallback. Private repositories (PocketBar)
are listed without a source link.

## Data and privacy

The private regenerated QR is private/support/bank-qr.png; its exact payload
was independently compared with the original bank QR. No original artwork or
contact number is included. The account fields live in app/api/support/route.ts.
Next output tracing includes the private asset only for the support API.

Neither bank details nor QR are placed in initial HTML, public assets, metadata,
or client bundles. The API validates Turnstile success, the support action and
an allowed hostname before releasing them. Responses use private, no-store and
noindex headers. Nothing is persisted in browser storage. There is no payment
tracking, callback, donor login, or database.

Cloudflare's script loads only when Show bank details is clicked; its browser
and network processing is disclosed on the page. Human verification reduces
scraping but cannot prevent verified people from copying or sharing details.
Repository collaborators and repository readers can read the private source.

## Checks and rollout

Use Node 24, then run npm run test:support, npm run typecheck, and npm run build.
The security suite uses Node's built-in runner; no new dependencies are needed.

Deploy this main site and configure Turnstile first. Tithi's migration replaces
its implementation with footer links and 307 redirects for /support and
/ne/support. Remove unused Turnstile variables from Tithi's deployment later.
