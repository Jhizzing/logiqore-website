# LogiQore Website — Security Review Findings

**Date:** 2026-02-12
**Scope:** Full codebase review of `logiqore-website` (Next.js 16.1.1 / React 19.2.3)
**Reviewer:** Automated security audit via Claude

---

## Summary

| Severity | Count |
|----------|-------|
| High     | 1     |
| Medium   | 2     |
| Low      | 2     |
| Info     | 3     |

---

## HIGH Severity

### H-1: Known Vulnerabilities in Next.js 16.1.1

**File:** `package.json` (line 14)
**CVEs:**
- [GHSA-9g9p-9gw9-jx7f](https://github.com/advisories/GHSA-9g9p-9gw9-jx7f) — DoS via Image Optimizer `remotePatterns` configuration
- [GHSA-h25m-26qc-wcjf](https://github.com/advisories/GHSA-h25m-26qc-wcjf) — HTTP request deserialization DoS with insecure React Server Components
- [GHSA-5f7q-jpqc-wp7h](https://github.com/advisories/GHSA-5f7q-jpqc-wp7h) — Unbounded memory consumption via PPR Resume Endpoint

**Impact:** Denial of service against the production website. While some of these require specific configurations (e.g., self-hosted mode, PPR), the HTTP deserialization issue affects default setups.

**Fix:** Upgrade `next` to `>=16.1.6`. Run `npm audit fix --force`.

**Status:** FIXED — updated to `16.1.6` in this review.

---

## MEDIUM Severity

### M-1: No Security Headers Configured

**File:** `next.config.ts`
**Issue:** The Next.js configuration is empty — no custom HTTP security headers are defined. The site relies entirely on Vercel's defaults, which do not include:
- `Content-Security-Policy` (CSP)
- `X-Content-Type-Options`
- `X-Frame-Options` / `X-XSS-Protection`
- `Referrer-Policy`
- `Permissions-Policy`
- `Strict-Transport-Security` (HSTS)

**Impact:** Without a CSP, the site is more vulnerable to XSS if a vulnerability is introduced in the future. Missing `X-Frame-Options` means the site could be embedded in malicious iframes (clickjacking). Missing HSTS means the first request could be intercepted on HTTP before redirect.

**Fix:** Add comprehensive security headers to `next.config.ts`.

**Status:** FIXED — security headers added in this review.

---

### M-2: Unsandboxed Third-Party Iframe

**File:** `src/app/utilities/truethick/page.tsx` (line 52-62)
**Issue:** The Streamlit app is embedded via `<iframe>` without `sandbox` or `referrerpolicy` attributes. The embedded app has full access to:
- Form submission
- JavaScript execution
- Top-level navigation
- Popups / new windows

**Impact:** If the Streamlit app at `truethick-57m8oofqscnacn6mhoq4wj.streamlit.app` were compromised, it could redirect users, display phishing content, or access browser features. The iframe also sends the full referrer URL to Streamlit's servers.

**Fix:** Add `sandbox="allow-scripts allow-same-origin allow-forms"` and `referrerpolicy="no-referrer"` to restrict capabilities to only what the Streamlit app needs.

**Status:** FIXED — sandbox and referrerpolicy attributes added in this review.

---

## LOW Severity

### L-1: Formspree Form ID Hardcoded and Publicly Exposed

**File:** `src/components/ContactSection.tsx` (line 9)
**Issue:** The Formspree form ID `mqangevl` is hardcoded in the client-side source. While this is expected for Formspree (it's designed to be public), it means anyone can submit to this form endpoint programmatically, enabling spam.

**Impact:** Spam submissions to the contact form. Formspree provides some built-in spam protection (honeypot, reCAPTCHA options), but none are configured here.

**Recommendation:** Enable Formspree's built-in spam protection (reCAPTCHA or honeypot field) via the Formspree dashboard. This is a Formspree-side configuration, not a code change.

**Status:** No code fix — requires Formspree dashboard configuration.

---

### L-2: No `rel="noopener noreferrer"` Audit Needed (PASS)

**Files:** All components
**Finding:** No external links use `target="_blank"`. All links are internal (`next/link` or hash anchors). The `mailto:` and `tel:` links correctly do not use `target="_blank"`. This is clean — no fix needed.

**Status:** PASS — no issues found.

---

## INFORMATIONAL

### I-1: Missing Privacy Policy & Terms of Service

**Files:** All pages
**Finding:** The site collects email addresses and optional personal data (role/company) via the contact form, and uses Vercel Analytics for tracking. There is no privacy policy or terms of service page.

**Impact:** Potential GDPR/CCPA compliance gap. Users in the EU/California may expect disclosure of data collection practices.

**Recommendation:** Add a `/privacy` page describing:
- What data is collected (email, role, analytics)
- How data is processed (Formspree, Vercel Analytics)
- Data retention policies
- User rights (access, deletion)

---

### I-2: Personal Contact Information Publicly Exposed

**File:** `src/components/ContactSection.tsx` (lines 31-36, 117-140)
**Finding:** Personal email (`paz@logiqore.io`) and phone number (`0472 520 000`) are displayed in the HTML source.

**Impact:** Crawlers and scrapers can harvest these for spam/phishing. This appears intentional for a business contact page.

**Recommendation:** If spam becomes an issue, consider a contact form-only approach or obfuscation.

---

### I-3: Sitemap Missing TrueThick Utility Page

**File:** `src/app/sitemap.ts`
**Finding:** The sitemap only lists the homepage (`https://logiqore.io`). The `/utilities/truethick` page is not included. This isn't a security issue but could affect SEO. The `robots.ts` allows all paths.

**Recommendation:** Add the TrueThick page to the sitemap for completeness.

---

## Checks That Passed (No Issues)

| Check | Result |
|-------|--------|
| `dangerouslySetInnerHTML` usage | None found |
| `eval()` / `Function()` / dynamic code execution | None found |
| Hardcoded secrets / API keys in source | None found |
| Secrets in git history | None found |
| `console.log` data leaks | None found |
| `target="_blank"` without `rel="noopener"` | None found |
| Open redirect patterns | None found |
| User-controlled URLs | None found |
| TypeScript strict mode | Enabled |
| `.gitignore` coverage for `.env*` | Properly configured |
| XSS via form input rendering | React auto-escapes; no raw HTML rendering |
| CSRF on Formspree | Handled by Formspree library (origin validation) |
