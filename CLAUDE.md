# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Companion docs

- `AGENTS.md` — repo-level commands, style, and PR conventions. Read before changing scripts/structure.
- `.claude/learnings.md` — hard-won fixes (Vercel SPA 404s, iframe CTA navigation, Voluum IIFE escape layers, Replo/Shopify URL noise). Re-read before touching outbound links, `vercel.json`, or `public/replo-5reasons-listicle.html`.

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

Single-page Vite + React 18 + TypeScript landing site for the Saints Label Bible Study Guide Journal. The codebase is intentionally thin — one marketing page, one iframe-wrapped advertorial, one 404.

### Route map (`src/App.tsx`)

- `/` → `pages/V3.tsx` — the primary long-form editorial advertorial (~600 lines, self-contained). This is the landing page.
- `/5-reasons` → `pages/Listicle5Reasons.tsx` — thin wrapper that renders `public/replo-5reasons-listicle.html` in a full-viewport iframe, forwarding `location.search` so tracking params survive.
- `/v2`, `/v3`, `/v4` → `<Navigate to="/" replace />`. Legacy variants were consolidated; **keep these redirects so campaign URLs don't break.**
- `*` → `NotFound`.

The app tree wraps routes in `QueryClientProvider` + `TooltipProvider` + both toasters (`@/components/ui/toaster` and `sonner`), but there is no data fetching or persistent UI chrome — landings are standalone.

### Outbound click contract (critical)

Every paid-traffic CTA on this site routes through **one** URL builder so UTMs, `click_id`, `gclid`, `fbclid`, etc. are preserved across the Voluum → Shopify handoff.

- `src/lib/outbound.ts` exports `OUTBOUND_URL` (`https://promopage.net/click`) and `buildOutboundUrl()`. `buildOutboundUrl` merges the current page's query onto the base URL; params already present on the base win.
- `V3.tsx` funnels all anchors/buttons through `handleOutboundClick` → `window.location.href = buildOutboundUrl()`. Every CTA element carries `data-cta="primary-outbound"` or `data-cta="soft-outbound"` so Voluum/Taboola scripts can target them.
- The `index.html` head and `V3.tsx` each have a TODO comment block reserved for pasting Voluum/Taboola click pixels — preserve those markers.
- When changing the offer URL, edit **only** `OUTBOUND_URL`. Do not hardcode click URLs in components.

### Tracking injection

- **GTM** (`GTM-TCLH9ZZV`) is loaded statically from `index.html` for the React app, and redundantly from the top of `public/replo-5reasons-listicle.html` for the iframe lander.
- **Voluum landing pixel** (`promopage.net/d/.js` IIFE) is injected at runtime inside `V3.tsx`'s `useEffect`, guarded by a DOM-id check so React Strict Mode's double-mount doesn't double-inject. The same pixel is statically inlined in `public/replo-5reasons-listicle.html`.
- When re-pasting the Voluum IIFE (`VOLUUM_V3_LANDING_IIFE` in `V3.tsx`), remember TS template literals double every backslash: `\\s` in the `.tsx` source is what the browser sees as `\s`. Don't copy the *source* text directly into raw HTML — halve the backslashes. Details in `.claude/learnings.md`.

### Iframe lander gotchas (`/5-reasons`)

`public/replo-5reasons-listicle.html` is a massive Replo-exported Shopify page with hidden nav/footer CSS, an inline CTA-normalization script, and Voluum pixels. Two rules when editing it:

1. **CTAs must break out of the iframe.** Never use `window.location.href = …` or plain `<a href>` without `target`. Use `(window.top || window).open(url, "_blank", "noopener,noreferrer")`, and patch any Voluum `<a>` tags to `target="_blank" rel="noopener noreferrer"`.
2. **Normalize Replo/Shopify URL noise.** Replo emits `promopage.net/clicks/{product-handle}?_pos=…&_sid=…&_ss=…`. The inline script rewrites every `promopage.net` click link to `https://promopage.net/click`, merges its query string, and drops `_pos`/`_sid`/`_ss` while keeping UTMs.

### Deploy (Vercel)

- `vercel.json` has a single catch-all rewrite `"/(.*)" → "/index.html"`. **Do not remove it** — without it, any direct hit to `/5-reasons` (or future routes) returns Vercel's 404 before the SPA can load. Static files under `public/` (e.g. `replo-5reasons-listicle.html`, `og-image.png`) still serve first because Vercel matches real files before rewrites.

### Image pipeline

Hero/editorial images in `V3.tsx` use `vite-imagetools` (plugin registered in `vite.config.ts`):

```ts
import hero from "@/assets/v3-hero-0530.png?w=360;720;1280&quality=84&format=webp&as=img";
// hero: { src, srcset, w, h } — typed as `Img` from "imagetools-core"
```

The `EditorialImage` wrapper in `V3.tsx` reads the `Img` object and passes `IMAGE_SIZES_FULL` / `IMAGE_SIZES_HALF` (`sizes` attr tied to the 680px main column). Prefer this pattern over raw `<img src>` for LCP assets.

### Styling

- Tailwind + shadcn/ui (full set of Radix primitives lives under `src/components/ui/`; config in `components.json`, alias `@/components/ui`).
- Global tokens are HSL CSS vars in `src/index.css` (`--background`, `--foreground`, plus custom `--gold`, `--navy`, `--cream`). Tailwind consumes them via `tailwind.config.ts`.
- Fonts are self-hosted via `@fontsource/inter` and `@fontsource/lora`, imported at the top of `src/index.css` (not Google Fonts CDN).
- **`V3.tsx` deliberately ignores the global tokens.** It defines its own inline `COLORS` object (`#F8F2E7` cream, `#26211B` CTA, etc.) so the advertorial stays visually stable if someone tunes shadcn tokens elsewhere. If you change the landing's palette, edit the `COLORS` constant and `hyperframes/v3-vsl/DESIGN.md` together.

### TypeScript / lint

- Path alias `@/*` → `src/*` (both `tsconfig.app.json` and `vite.config.ts`).
- `strict: false` and `noImplicitAny: false` are intentional — this is a marketing site, not a product. Don't flip them without discussion.
- ESLint uses the flat config in `eslint.config.js` with `@typescript-eslint/no-unused-vars` turned off and `react-refresh/only-export-components` as a warning. `dist/` is ignored.

### Tests

Vitest + Testing Library + jsdom (`vitest.config.ts`, `src/test/setup.ts`). `matchMedia` is polyfilled in setup. There's no coverage gate and only a placeholder test — add smoke tests for new routes/utilities rather than aiming for coverage targets.

## When touching these files, think first

- `src/lib/outbound.ts` — every CTA on the site depends on it. Any change ripples into Voluum attribution.
- `vercel.json` — deleting this silently breaks every non-root route on prod.
- `public/replo-5reasons-listicle.html` — mixed Replo/Shopify/GTM/Voluum output. See the two gotchas above; edit with a browser open.
- `index.html` + the Voluum `useEffect` in `V3.tsx` — tracking is split between them; keep the comment-block placeholders intact so campaign ops know where to paste.
- `src/App.tsx` route list — if you add a route, leave the `/v2|/v3|/v4 → /` redirects alone (live campaign URLs).
