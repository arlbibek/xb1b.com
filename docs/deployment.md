# Deployment

## Host

Deployed on Vercel from the GitHub repository.

## Steps

1. Push to the connected branch (`master` is production; `dev` gets a preview deployment).
2. Vercel runs `npm install` and `npm run build` (Next.js detected automatically).
3. Production URL: [https://xb1b.com](https://xb1b.com).

## Notes

- The landing needs no environment variables. The support reveal requires Turnstile configuration and a rebuild; see [Support](./support.md).
- Custom domain and TLS are managed in the Vercel project settings. `xb1b.com` is primary; the old `bibeka.com.np` should redirect to it there, not in code.
- Projects live on subdomains as separate deployments (`tithi.xb1b.com`, `brahma.xb1b.com`); this site only links to them.
- Short paths (`/github`, `/resume`, `/cv`, …) are handled as redirects in `next.config.js`.
