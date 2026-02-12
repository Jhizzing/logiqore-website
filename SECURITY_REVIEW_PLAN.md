# LogiQore Website — Security Review Plan

## Scope

Public marketing website (Next.js 16.1.1 / React 19.2.3) deployed on Vercel at https://logiqore.io. No authentication, no database, no API routes. Attack surface is limited but still meaningful.

---

## Phase 1: Dependency & Supply Chain Audit

- [ ] Run `npm audit` to check for known vulnerabilities in all dependencies
- [ ] Review `package-lock.json` for transitive dependency risks
- [ ] Verify all packages are from trusted publishers and up-to-date
- [ ] Check for typosquatting risks in dependency names

**Files:** `package.json`, `package-lock.json`

---

## Phase 2: Security Headers & Next.js Configuration

- [ ] Audit `next.config.ts` for missing security headers:
  - Content-Security-Policy (CSP)
  - X-Content-Type-Options
  - X-Frame-Options
  - Referrer-Policy
  - Permissions-Policy
  - Strict-Transport-Security (HSTS)
- [ ] Verify no sensitive data leaks via server response headers
- [ ] Check for open redirects in any route configuration

**Files:** `next.config.ts`

---

## Phase 3: Iframe Security (Streamlit Embed)

- [ ] Audit the Streamlit iframe embed for:
  - Missing `sandbox` attribute (restrict capabilities)
  - Missing `referrerpolicy` attribute
  - Potential clickjacking via the iframe source
  - Data exfiltration risk from embedded third-party app
- [ ] Verify the Streamlit URL is pinned and not user-controllable

**Files:** `src/app/utilities/truethick/page.tsx`

---

## Phase 4: Contact Form & Input Handling

- [ ] Review Formspree integration for:
  - Client-side input validation completeness
  - XSS vectors in form field rendering
  - CSRF protection (Formspree-provided vs custom)
  - Formspree form ID exposure and abuse potential (spam)
  - Rate limiting (Formspree plan-level controls)
- [ ] Check that no user input is rendered as raw HTML

**Files:** `src/components/ContactSection.tsx`

---

## Phase 5: Client-Side Code Review

- [ ] Scan all components for:
  - `dangerouslySetInnerHTML` usage
  - `eval()`, `Function()`, or dynamic code execution
  - Inline event handlers with user-controlled data
  - URL manipulation or open redirect patterns
  - Hardcoded secrets, API keys, or credentials
  - Console.log statements leaking data
- [ ] Review anchor tags (`<a>`) for `target="_blank"` without `rel="noopener noreferrer"`

**Files:** All files in `src/components/` and `src/app/`

---

## Phase 6: SEO & Metadata Review

- [ ] Verify `robots.ts` doesn't expose sensitive paths
- [ ] Verify `sitemap.ts` doesn't expose internal/admin URLs
- [ ] Check Open Graph / meta tags for information disclosure

**Files:** `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/layout.tsx`

---

## Phase 7: Build & Deployment Security

- [ ] Verify `.gitignore` covers sensitive files (.env, build output, IDE files)
- [ ] Check for secrets accidentally committed in git history
- [ ] Review ESLint config for security-relevant rules
- [ ] Confirm TypeScript strict mode is enabled

**Files:** `.gitignore`, `tsconfig.json`, `eslint.config.mjs`

---

## Phase 8: Privacy & Compliance

- [ ] Flag missing privacy policy / terms of service (GDPR/CCPA concern with Formspree + Vercel Analytics)
- [ ] Review Vercel Analytics for cookie/consent requirements
- [ ] Check if contact info (email, phone) exposure is intentional

**Files:** `src/components/ContactSection.tsx`, `src/app/layout.tsx`

---

## Deliverables

After completing all phases, we will:
1. Document all findings with severity ratings (Critical / High / Medium / Low / Info)
2. Implement fixes directly in the codebase where possible
3. Add security headers to `next.config.ts`
4. Add iframe sandboxing attributes
5. Commit all changes to the `claude/plan-security-review-bGlWs` branch
