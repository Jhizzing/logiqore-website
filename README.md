# LogiQore website

Marketing and lead-capture site for [LogiQore](https://logiqore.io): product pages for Reporter, Database and AutoChem, the QAQC Review Services page, and the free TrueThick utility.

## Stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript (strict)
- Tailwind CSS v4, configured with `@theme` in `src/app/globals.css`
- Formspree (`@formspree/react`) for the contact and waitlist form
- Vercel Analytics, hosted on Vercel

Every route is statically prerendered. There are no API routes, database or server-side secrets.

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
npm audit
npm run build
npx playwright install chromium   # first time only
npm run test:e2e
```

`npm run test:e2e` runs the Playwright smoke tests in `tests/` against the production build (`next start` on port 3100). They check that every route renders without CSP violations, that the mobile menu at 390 px is opaque and closes properly, that TrueThick's default case gives 7.04 m at alpha 44.7°, and that the Reporter Launch button handles a healthy or failing `/api/health` (both mocked). GitHub Actions (`.github/workflows/ci.yml`) runs all of these checks on every pull request and on every push to `main`.

To try the production build locally, run `npm run build && npm start`.

## Project layout

| Path | What it is |
|---|---|
| `src/app/page.tsx` | Home page, composed from the section components in `src/components/` |
| `src/app/products/reporter/` | Reporter beta landing page |
| `src/app/services/` | QAQC Review Services page |
| `src/app/utilities/truethick/` | Page that embeds TrueThick in a sandboxed iframe |
| `src/app/privacy/`, `src/app/terms/` | Legal pages |
| `src/app/sitemap.ts`, `src/app/robots.ts` | SEO routes |
| `public/truethick/index.html` | TrueThick, a self-contained HTML/JS tool. It's a copy of the [TrueThick repo](https://github.com/jhizzing/TrueThick), so keep the two in sync |
| `next.config.ts` | Security headers and CSP. `/truethick/*` may be framed by this site, and every other route sends `frame-ancestors 'none'` |

## Configuration

| Variable | Default | Purpose |
|---|---|---|
| `NEXT_PUBLIC_REPORTER_APP_URL` | `https://app.logiqore.io` | Where the "Launch Reporter Beta" button points. It's also added to the CSP `connect-src`. Set it to an empty string to show the "temporarily unavailable" state without probing. |

On the Reporter page, the browser calls `<REPORTER_APP_URL>/api/health` with CORS. If that request fails (the host is down, DNS doesn't resolve, or the host isn't the real Reporter, which allowlists this site's origin), the button switches to a "Beta temporarily unavailable, contact us" state. A slow response keeps the button live.

`NEXT_PUBLIC_*` values are inlined at build time. After changing one in Vercel, redeploy.

The Formspree form ID is set in `src/components/ContactSection.tsx`. The form includes a `_gotcha` honeypot field, which Formspree uses to drop bot submissions.

## Deploying

The site deploys to Vercel from `main`, and preview deployments are built for pull requests. The production domain (`logiqore.io` and `www.logiqore.io`) is attached in the Vercel project settings. `metadataBase` in `src/app/layout.tsx` and the URLs in `src/app/sitemap.ts` assume `https://logiqore.io`, so update them if the domain changes.
