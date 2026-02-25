# LogiQore Website Review
**Date:** 26/02/2026  
**Reviewed by:** Claude (AI Interface Tester)  
**Site:** [logiqore.io](https://logiqore.io)

---

## 1. Visual Design

### ✅ Strengths

- **Brand identity** is strong and distinctive — dark navy/charcoal background with gold/amber accents reads as "technical and premium" without feeling cold or corporate. Colour palette is consistent across all pages.
- **Typography and hierarchy** are excellent. The hero headline uses size, weight, and selective amber colouring to draw the eye to key terms ("economic geologists") naturally.
- **CTA button styling** is well-differentiated — the pill-shaped yellow "Request early access" button is clearly the primary action on every page, contrasted cleanly against ghost-style secondary buttons.
- **Card layouts** for the product suite (Reporter, Database, AutoChem) and feature pills (QAQC automation, Geology data platform, etc.) are clean and scannable.
- **TrueThick and Roadmap sections** are well-composed. The roadmap's timeline with status indicators (Beta / Early Access / Launch Coming Soon) is a smart trust-building element for an early-stage product.
- **Footer** is minimal and clean without feeling empty.

### ⚠️ Issues to Fix

- **Navbar item line-wrapping:** Several nav items ("Reporter Beta", "Why LogiQore", "For Geologists") wrap to two lines at standard desktop widths. This looks unpolished. Consider shortening labels, reducing nav font size, or increasing the navbar width.
- **Large dead space in hero section:** There is a significant vertical gap below the feature pills and above the "LogiQore Ecosystem" card that breaks visual rhythm. Tighten this spacing.
- **Whitespace gap before contact form:** Just above the "Ready to modernize your workflow?" section, there is an unusually long blank area (~300–400px). This is the most noticeable spacing issue on the page and disrupts the scroll flow.
- **Logo box in navbar:** The LogiQore logo appears on a slightly different shade panel/box behind it, which looks slightly awkward against the navbar background. Review the logo container background.

---

## 2. Functionality

### ✅ Working Correctly

- All **nav anchor links** (Products, Why LogiQore, For Geologists, Request early access) scroll to the correct sections.
- The **announcement banner** at the top links correctly to the Reporter Beta page.
- The **TrueThick Orientation Solver** computes and displays DIP / DIP DIRECTION / STRIKE correctly (tested with defaults).
- The **Intercept Analysis tab** in TrueThick switches and loads without issues.
- The **Alpha/Beta ↔ Dip/DipDir mode toggle** in TrueThick functions correctly.
- All **download links** on the Reporter Beta page point to real GitHub release assets with correct filenames and sizes.
- The **"View on GitHub"** link correctly targets the v2.0.0-beta.6 release.
- The **"Contact LogiQore"** link from the beta feedback section anchors correctly to the contact form.
- The **contact form** has appropriate, audience-aware placeholder copy (e.g. "geologist@company.com", "Senior Geologist at Mining Corp").

### ❌ Issues to Fix

- **No mobile navigation menu.** At mobile widths (~390px), all nav links disappear — there is no hamburger menu or slide-out drawer. Only the logo and "Get Access" remain visible. This is a critical gap for mobile visitors. A hamburger/slide-out menu must be added.
- **"Reporter Beta" nav label wraps to two lines** in a way that it visually reads as two separate items ("Reporter" / "Beta"). This should be resolved as part of the navbar fix above.

---

## 3. User Flow & UX

### ✅ Strengths

- **Homepage narrative flow** is logical and well-structured for a B2B early-access product:  
  Hero → Ecosystem overview → Product Suite → Free Utility CTA → Why LogiQore → For Geologists → Roadmap → Contact form.
- **TrueThick embedded directly on its page** as a live, usable tool is a strong conversion tactic — it lets users experience UX quality before committing to anything.
- The **"Current Roadmap / Live Status" section** effectively communicates transparency and sets appropriate expectations for a beta product.
- The **direct email address** (paz@logiqore.io) alongside the form adds a personal, human touch appropriate for an early-stage startup.
- **Page titles are descriptive and SEO-friendly** across all pages.

### ⚠️ Suggestions

- **Database and AutoChem cards have no CTA.** The Reporter card has an "Open Beta Page" button, but the other two products have nothing actionable. Consider adding a subtle "Join Waitlist" or "Coming Soon — Notify Me" micro-action to capture intent from interested users.
- **Footer has no navigation links.** The footer only contains a tagline and copyright. Adding quick links (Products, Utilities, Contact) would improve usability for users who scroll to the bottom seeking navigation.
- **No "back to top" control.** Not critical at current page length, but worth considering as the site grows.

---

## 4. Priority Fix List

| Priority | Area | Issue |
|----------|------|-------|
| 🔴 High | Mobile | No hamburger/mobile navigation menu |
| 🔴 High | Spacing | Large whitespace gap before contact form section |
| 🟡 Medium | Navbar | Nav items wrapping to two lines at desktop widths |
| 🟡 Medium | Footer | No navigation links in footer |
| 🟢 Low | Homepage | No CTA on Database / AutoChem product cards |
| 🟢 Low | Navbar | Logo container background slightly off from navbar |

---

## 5. Overall Assessment

LogiQore.io is a **solid, well-branded early-stage product website**. The visual identity is distinctive, the copy is well-targeted to the audience, and the core pages are purposeful and clean. The TrueThick tool as a live embedded utility is a particularly strong UX decision.

The most important items to address are the **missing mobile navigation** and the **whitespace/spacing issues** on the homepage. Once those are resolved, the site will present very professionally across all devices.
