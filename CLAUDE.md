# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Companion docs

- `AGENTS.md` — repo-level commands, style, and PR conventions. Read before changing scripts/structure.
- `.claude/learnings.md` — hard-won fixes (Vercel SPA 404s, iframe CTA navigation, Voluum IIFE escape layers, Replo/Shopify URL noise). Re-read before touching outbound links, `vercel.json`, or `public/replo-5reasons-listicle.html`.
- `.claude/plans/use-tavily-to-research-abstract-waffle.md` — full Taboola strategy + research + extraction map + ship log for the 5 angle landings.
- `docs/taboola-campaign-setup.md` — operator runbook (rendered visually at `/ops`).
- `docs/strategy-brief-for-offer-owner.md` — pitch brief for the offer owner (rendered visually at `/strategy`).

## Commands

```bash
npm install              # install (lockfile is package-lock.json; bun.lock* present but npm is canonical)
npm run dev              # Vite dev server on port 8080 (not 5173 — see vite.config.ts server.port)
npm run build            # production build → dist/
npm run build:dev        # build with development mode settings
npm run preview          # serve the built dist/ locally
npm run lint             # ESLint (flat config in eslint.config.js)
npm run test             # Vitest once, jsdom
npm run test:watch       # Vitest watch mode
```

Run a single test file: `npx vitest run src/path/to/thing.test.tsx`. Filter by name: `npx vitest run -t "expression"`.

## High-level architecture

Single-page Vite + React 18 + TypeScript site for the Saints Label Bible Study Guide Journal. **Two tiers of pages**: paid-traffic advertorials (warm editorial palette, Voluum-tracked) and internal/pitch reference briefs (`/ops`, `/strategy` — own design systems, no tracking). All routes ship from one SPA — no SSR, no API.

### Route map (`src/App.tsx`)

**Paid-traffic advertorials.** Each fires `useVoluumLandingPixel("<unique-landing-id>")` on mount and funnels every CTA through `buildOutboundUrl()` → `https://promopage.net/click`.

- `/` → `pages/V3.tsx` — main long-form editorial advertorial. The original landing.
- `/method` → `pages/MethodPage.tsx` — Taboola Angle 2, simplicity workhorse.
- `/silent-struggle` → `pages/SilentStruggle.tsx` — Angle 3, first-person confession; **Apple News excluded at the campaign level**.
- `/quiet-return` → `pages/QuietReturn.tsx` — Angle 1, 2025-report framing; brand-safe for Apple News Select.
- `/legacy` → `pages/Legacy.tsx` — Angle 4, inheritance angle.
- `/small-group-favorite` → `pages/SmallGroupFavorite.tsx` — Angle 5 fallback (no pastor attribution; see plan §14).
- `/5-reasons` → `pages/Listicle5Reasons.tsx` — iframe wrapper around `public/replo-5reasons-listicle.html`. Forwards `location.search` so tracking params survive.

**Internal / pitch reference pages.** No Voluum, no outbound CTAs.

- `/ops` → `pages/OpsBrief.tsx` — terminal-aesthetic operator runbook (renders the campaign-setup doc).
- `/strategy` → `pages/StrategyBrief.tsx` — editorial-aesthetic offer-owner pitch (renders the strategy doc).

**Legacy redirects.** `/v2`, `/v3`, `/v4` → `<Navigate to="/" replace />`. **Keep these — campaign URLs from prior runs still point there.**

`*` → `NotFound`.

The app tree wraps every route in `QueryClientProvider` + `TooltipProvider` + both toasters (`@/components/ui/toaster` and `sonner`). There is no data fetching or persistent UI chrome — every landing is standalone.

### Shared editorial toolkit

The five angle landings + V3 are built from a small toolkit extracted from V3.tsx so each new page is ~250 lines instead of ~600. **Reuse these — do not re-derive their logic in a new landing.**

- `src/lib/editorial-tokens.ts` — `COLORS`, `IMAGE_SIZES_FULL`/`HALF`, `SECTION_STANDARD`/`EMPHASIS`/`COMPACT`. Inline-style palette deliberately separate from the Tailwind HSL tokens in `src/index.css`.
- `src/lib/voluum.ts` — `useVoluumLandingPixel(landingId)` hook + the minified `VOLUUM_LANDING_IIFE` string + `VOLUUM_DELEGATE_CH` constant. **Pass a unique `landingId` per page** (e.g. `"voluum-method-landing"`) — the DOM-id guard against React Strict Mode double-mount keys on it.
- `src/lib/voluum.test.ts` — Vitest guard that `new Function(VOLUUM_LANDING_IIFE)` parses and that the escape fragments (`\\s+`, `\\/`, `dtpCallback\\.l`) survive. **Keep this test green** — it's the canary on the backslash-escape rule below.
- `src/components/editorial/OutboundCTA.tsx` — `PrimaryCTA`, `SoftCTA`, `OutboundTextLink`, `handleOutboundClick`. Every component preserves the `data-cta="primary-outbound"` / `"soft-outbound"` markers.
- `src/components/editorial/EditorialImage.tsx` — wraps `Img` from `imagetools-core` (see image pipeline below).
- `src/components/editorial/Typography.tsx` — `H2`, `P`.
- `src/components/editorial/StickyMobileCTA.tsx` — accepts a `label` prop so each angle can override the default "Take a closer look".
- `src/components/editorial/SponsoredDisclosure.tsx` — FTC-compliant disclosure strip; every angle landing ships with one. V3 still uses its own legacy "You are reading this for a reason" `TopBar`.
- `src/hooks/use-hero-out-of-view.ts` — IntersectionObserver pattern returning `{heroRef, showSticky}` for the sticky mobile CTA reveal.

### Outbound click contract (critical)

Every paid-traffic CTA on this site routes through **one** URL builder so UTMs, `click_id`, `gclid`, `fbclid`, etc. are preserved across the Voluum → Shopify handoff.

- `src/lib/outbound.ts` exports `OUTBOUND_URL` (`https://promopage.net/click`) and `buildOutboundUrl()`. `buildOutboundUrl` merges the current page's query onto the base URL; params already present on the base win.
- All CTA primitives live in `src/components/editorial/OutboundCTA.tsx`. Use `PrimaryCTA` / `SoftCTA` / `OutboundTextLink` — never roll a new `<a href={buildOutboundUrl()}>` in a page.
- The `index.html` head and the `handleOutboundClick` body in `OutboundCTA.tsx` each have a TODO comment block reserved for pasting Voluum/Taboola click pixels — preserve those markers. The `dataLayer.push({event: 'cta_click', angle})` GTM hook is still pending.
- When changing the offer URL, edit **only** `OUTBOUND_URL`. Do not hardcode click URLs in components.

### Tracking injection

- **GTM** (`GTM-TCLH9ZZV`) is loaded statically from `index.html` for the React app, and redundantly from the top of `public/replo-5reasons-listicle.html` for the iframe lander.
- **Voluum landing pixel** (`promopage.net/d/.js` IIFE) is injected at runtime through the `useVoluumLandingPixel(landingId)` hook in `src/lib/voluum.ts`. The hook DOM-id-guards against React Strict Mode double-mount; passing a unique `landingId` per page also makes client-side route changes between two landings safe in one session. The same pixel is statically inlined in `public/replo-5reasons-listicle.html`.
- When re-pasting the Voluum IIFE, remember TS template literals double every backslash: `\\s` in the `.ts` source is what the browser sees as `\s`. Don't copy the *source* text directly into raw HTML — halve the backslashes. Details in `.claude/learnings.md`. The Vitest guard in `src/lib/voluum.test.ts` will catch a regression here.

### Iframe lander gotchas (`/5-reasons`)

`public/replo-5reasons-listicle.html` is a massive Replo-exported Shopify page with hidden nav/footer CSS, an inline CTA-normalization script, and Voluum pixels. Two rules when editing it:

1. **CTAs must break out of the iframe.** Never use `window.location.href = …` or plain `<a href>` without `target`. Use `(window.top || window).open(url, "_blank", "noopener,noreferrer")`, and patch any Voluum `<a>` tags to `target="_blank" rel="noopener noreferrer"`.
2. **Normalize Replo/Shopify URL noise.** Replo emits `promopage.net/clicks/{product-handle}?_pos=…&_sid=…&_ss=…`. The inline script rewrites every `promopage.net` click link to `https://promopage.net/click`, merges its query string, and drops `_pos`/`_sid`/`_ss` while keeping UTMs.

### Deploy (Vercel)

- `vercel.json` has a single catch-all rewrite `"/(.*)" → "/index.html"`. **Do not remove it** — without it, any direct hit to a non-root route returns Vercel's 404 before the SPA can load. Static files under `public/` (e.g. `replo-5reasons-listicle.html`, `og-image.png`) still serve first because Vercel matches real files before rewrites.
- Pushes to `main` auto-deploy. Two recent commits worth knowing about: `17991f8` (extracted the toolkit), `e19e324` (shipped the 5 angle landings), `b879885` (added `/ops` and `/strategy` brief pages).

### Image pipeline

Hero/editorial images use `vite-imagetools` (plugin registered in `vite.config.ts`):

```ts
import hero from "@/assets/v3-hero-0530.png?w=360;720;1280&quality=84&format=webp&as=img";
// hero: { src, srcset, w, h } — typed as `Img` from "imagetools-core"
```

`EditorialImage` from the shared toolkit reads the `Img` object and emits `srcset` + the right `sizes` attr (`IMAGE_SIZES_FULL` / `IMAGE_SIZES_HALF`, tied to the 680px editorial column). Prefer this pattern over raw `<img src>` for LCP assets.

### Styling

- Tailwind + shadcn/ui (full set of Radix primitives lives under `src/components/ui/`; config in `components.json`, alias `@/components/ui`).
- Global tokens are HSL CSS vars in `src/index.css` (`--background`, `--foreground`, plus custom `--gold`, `--navy`, `--cream`). Tailwind consumes them via `tailwind.config.ts`.
- **Three font families, three import strategies.** `@fontsource/inter` + `@fontsource/lora` are imported globally from the top of `src/index.css` (used by V3 + the 5 angle landings). `@fontsource/jetbrains-mono` and `@fontsource/fraunces` are imported **per-page** inside `OpsBrief.tsx` / `StrategyBrief.tsx` so the advertorial routes don't pay their bundle cost. If you add a brief-only font, follow the per-page import pattern.
- **Advertorial palette is isolated.** `src/lib/editorial-tokens.ts`'s `COLORS` object (`#F8F2E7` cream, `#26211B` CTA, etc.) deliberately bypasses the global Tailwind HSL tokens so the angle landings stay visually stable if someone tunes shadcn tokens elsewhere. **The two brief pages (`/ops`, `/strategy`) define their *own* inline palettes — do not consolidate any of the three.**

### TypeScript / lint

- Path alias `@/*` → `src/*` (both `tsconfig.app.json` and `vite.config.ts`).
- `strict: false` and `noImplicitAny: false` are intentional — this is a marketing site, not a product. Don't flip them without discussion.
- ESLint uses the flat config in `eslint.config.js` with `@typescript-eslint/no-unused-vars` off and `react-refresh/only-export-components` as a warning. `dist/` is ignored. `OutboundCTA.tsx` carries that warning by design (exports the helper alongside components, same pattern as 7 shadcn files in the repo).

### Tests

Vitest + Testing Library + jsdom (`vitest.config.ts`, `src/test/setup.ts`). `matchMedia` is polyfilled in setup. **`src/lib/voluum.test.ts` is the canary** for the IIFE backslash-escape rule — keep it green. There's no coverage gate; add smoke tests for new utilities or pixel integrations rather than aiming for coverage targets.

## When touching these files, think first

- `src/lib/outbound.ts` — every CTA on the site depends on it. Any change ripples into Voluum attribution.
- `src/lib/voluum.ts` — the IIFE string is fragile. The backslash escapes are not a typo. Run `npm run test` after any edit; the parse-and-escape test will catch silent corruption.
- `src/components/editorial/OutboundCTA.tsx` — six pages import from it; the `data-cta` markers are load-bearing for Voluum/Taboola scripts.
- `vercel.json` — deleting this silently breaks every non-root route on prod.
- `public/replo-5reasons-listicle.html` — mixed Replo/Shopify/GTM/Voluum output. See the two gotchas above; edit with a browser open.
- `index.html` + the GTM TODO slot in `OutboundCTA.tsx` — tracking is split between them; keep the comment-block placeholders intact so campaign ops know where to paste.
- `src/App.tsx` route list — if you add a route, leave the `/v2|/v3|/v4 → /` redirects alone (live campaign URLs). Add new advertorial routes above the catch-all and pair them with a unique `landingId` in `useVoluumLandingPixel()`.
