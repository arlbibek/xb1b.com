# Setup

## Requirements

- Node.js 20+ (Node 24 LTS preferred)

## Install and run

```bash
git clone https://github.com/arlbibek/bibeka.com.np.git
cd bibeka.com.np # repo keeps its old name; the site is xb1b.com
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run test:support` | Bank reveal security checks (Node 24 recommended) |
| `npm run typecheck` | TypeScript check (`tsc --noEmit`) |

## Environment variables

The landing needs no environment variables. To enable the support page’s bank reveal,
configure the public Turnstile site key, server secret, and allowed hostnames from
[Support setup](./support.md). Rebuild after setting the public key.

## Dependencies of note

- `lucide-react` / `react-icons` — security tool icons for the landing starfield.
