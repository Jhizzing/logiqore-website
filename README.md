# LogiQore website

Marketing and lead-capture site for [LogiQore](https://logiqore.io): product pages for Reporter, Database and AutoChem, the QAQC Review Services page, and the free TrueThick utility.

## Stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript (strict)
- Tailwind CSS v4, configured with `@theme` in `src/app/globals.css`
- Formspree (`@formspree/react`) for the contact and waitlist form
- Cloudflare Web Analytics (cookieless, optional), hosted as Cloudflare Workers static assets

Every route is statically exported to `out/` (`output: "export"`). There are no API routes, middleware, database or server-side secrets, and no Worker script runs: Cloudflare serves the files directly.

## Getting started

Requires Node 20+ (CI and local checks use Node 22).

```bash
npm ci
npm run dev        # http://localhost:3000
```

`next/font/google` downloads the Inter font at build time, so `npm run build` needs network access.

## Checks

Run these before opening a PR:

```bash
npm run lint
npm run typecheck
npm run audit:ci
npm run test:geo
npm run build
npx playwright install chromium   # first time only
npm run test:e2e
```

`npm run audit:ci` runs `npm audit` and fails on every advisory except those listed in `scripts/audit.mjs`. Each allowlisted advisory has no patched release and affects dev tooling only. It also fails as soon as an allowlisted advisory gets a fix, so the entry can't linger. Production dependencies must be fully clean (`npm audit --omit=dev`).

`npm run test:geo` runs the TrueThick geometry tests: known answers, round trips and edge cases.

`npm run test:e2e` runs the Playwright smoke tests in `tests/` against the static export, served by `wrangler dev` on port 3100 exactly as Cloudflare serves it, including `_headers`, trailing-slash handling and the 404 page. They check that every route renders without CSP violations, that every response carries the security headers from `src/lib/security-headers.ts`, and that the mobile menu at 390 px is opaque and closes properly. They also check TrueThick: it runs sandboxed with an opaque origin, its kenometer default gives dip 57.8° and dip direction 77.2°, its dip/dip-direction default gives alpha 44.7° and beta 105.9°, and its intercept default gives 7.04 m at alpha 44.7°. Finally, they check that the Reporter Launch button handles a healthy or failing `/api/health` (both mocked). GitHub Actions (`.github/workflows/ci.yml`) runs all of these checks on every pull request and on every push to `main`.

To try the production build locally, run `npm run build && npm start` (http://127.0.0.1:3000).

## Project layout

| Path | What it is |
|---|---|
| `src/app/page.tsx` | Home page, composed from the section components in `src/components/` |
| `src/app/products/reporter/` | Reporter beta landing page |
| `src/app/services/` | QAQC Review Services page |
| `src/app/utilities/truethick/` | Page that embeds TrueThick in a sandboxed iframe |
| `src/app/privacy/`, `src/app/terms/` | Legal pages |
| `src/app/sitemap.ts`, `src/app/robots.ts` | SEO routes |
| `public/truethick/` | TrueThick, a static HTML/JS tool. `geo.js` is the geometry engine, `app.js` is the UI and `index.html` is the page. This folder is now the source of truth, taken from the [TrueThick repo](https://github.com/jhizzing/TrueThick) at v3.2. It's embedded in an iframe with `sandbox="allow-scripts"`, so it runs with an opaque origin, and `/truethick/*` is served with `Access-Control-Allow-Origin: *` so that its module scripts can load. The iframe points at `/truethick/` because Cloudflare redirects `/truethick/index.html` there |
| `tests/truethick/geo.test.mjs` | `node:test` suite for the geometry engine (`npm run test:geo`) |
| `src/lib/security-headers.ts` | Security headers and CSP. `/truethick/*` may be framed by this site, and every other route sends `frame-ancestors 'none'` |
| `src/app/%5Fheaders/route.ts` | Writes those headers to `out/_headers` in Cloudflare's format at build time (`%5F` escapes the leading underscore) |
| `next.config.ts` | Static export. Also applies the same headers in `next dev`, which doesn't read `_headers` |
| `wrangler.jsonc` | Cloudflare Workers static-assets config, used by `wrangler dev` and by Cloudflare's build |

## Configuration

| Variable | Default | Purpose |
|---|---|---|
| `NEXT_PUBLIC_REPORTER_APP_URL` | `https://app.logiqore.io` | Where the "Launch Reporter Beta" button points. It's also added to the CSP `connect-src`. Set it to an empty string to show the "temporarily unavailable" state without probing. |
| `NEXT_PUBLIC_CF_BEACON_TOKEN` | unset | Cloudflare Web Analytics site token. When set, the cookieless beacon is added to every page (the CSP already allows it). Unset means no analytics script. |

On the Reporter page, the browser calls `<REPORTER_APP_URL>/api/health` with CORS. If that request fails (the host is down, DNS doesn't resolve, or the host isn't the real Reporter, which allowlists this site's origin), the button switches to a "Beta temporarily unavailable, contact us" state. A slow response keeps the button live.

`NEXT_PUBLIC_*` values are inlined at build time, and so is the CSP in `_headers`. Set them as build variables in the Cloudflare Workers Builds settings, then redeploy.

The Formspree form ID is set in `src/components/ContactSection.tsx`. The form includes a `_gotcha` honeypot field, which Formspree uses to drop bot submissions.

## Deploying

The site is a Cloudflare Worker with static assets only (`wrangler.jsonc`), on the Workers Free plan, where static-asset requests are free and unlimited. Workers Builds is connected to this repo: it runs `npm run build` then `npx wrangler deploy` on every push to `main`, and uploads a preview version with a `*.workers.dev` URL for other branches (`X-Robots-Tag: noindex` there). `logiqore.io` is a Worker custom domain, which needs the zone on Cloudflare DNS; `www.logiqore.io` redirects to it with a Cloudflare redirect rule. `metadataBase` in `src/app/layout.tsx` and the URLs in `src/app/sitemap.ts` assume `https://logiqore.io`, so update them if the domain changes.
