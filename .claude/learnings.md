# Learnings
Hard-won fixes, API quirks, and technical discoveries.

## Vercel: SPA routes 404 on hard refresh (e.g. `/5-reasons`)
**Date:** 2026-04-23
**Context:** `saints-label-landing` — Vite + React Router on Vercel (`bible.agentifycrm.io`)

**Problem:** Opening `https://…/5-reasons` in a new tab returned Vercel `404 NOT_FOUND` while client-side navigation from `/` worked.
**Root cause:** The CDN only has real files for `/`, assets, and `public/*` (e.g. `replo-5reasons-listicle.html`). There is no file at `/5-reasons`, so the edge returned 404 before the SPA could load.
**Fix:** Add [`vercel.json`](vercel.json) with a rewrite: `"source": "/(.*)"`, `"destination": "/index.html"`. Vercel still serves matching static files first; unknown paths get `index.html` so React Router can render the route.

## Iframe lander: Voluum/shop CTAs must not use `location.href` in the iframe
**Date:** 2026-04-23
**Context:** [`public/replo-5reasons-listicle.html`](public/replo-5reasons-listicle.html) embedded from [`Listicle5Reasons.tsx`](src/pages/Listicle5Reasons.tsx)

**Problem:** CTA “opened” the Voluum URL inside the iframe instead of a normal full-tab checkout flow.
**Root cause:** `window.location.href = buildClickUrl()` runs in the iframe document, so navigation replaced only the iframe’s document, not the top-level tab.
**Fix:** On intercepted clicks, use `(window.top || window).open(url, "_blank", "noopener,noreferrer")` with a fallback if popups are blocked; patch Voluum `<a>` tags with `target="_blank"` and `rel="noopener noreferrer"` so modifier/middle-click behaves correctly.

## Replo export: wrong Voluum path and Shopify query noise on CTAs
**Date:** 2026-04-23
**Context:** [`public/replo-5reasons-listicle.html`](public/replo-5reasons-listicle.html)

**Problem:** Links pointed at `https://promopage.net/clicks/bible-study-guide-journal-66-pages-1?_pos=…&_sid=…&_ss=…` instead of the single offer click URL `https://promopage.net/click`.
**Root cause:** Replo/Shopify integration generated `/clicks/{handle}` URLs and appended Shopify internal params (`_pos`, `_sid`, `_ss`).
**Fix:** Replace static `promopage.net/clicks…` hrefs with `/click`; in the inline patch script, normalize any `promopage.net` click links to `https://promopage.net/click` and merge query strings while **dropping** `_pos`, `_sid`, `_ss`, keeping UTMs / ad params.

## Pasting Voluum’s minified IIFE into static HTML: escape layers
**Date:** 2026-04-23
**Context:** Copying `VOLUUM_V3_LANDING_IIFE` from [`V3.tsx`](src/pages/V3.tsx) into a raw `<script>` block

**Problem:** Landing pixel broke or behaved oddly after embedding; regex fragments in the snippet showed doubled backslashes (`\\s` vs `\s`).
**Root cause:** TypeScript template literals encode backslashes for regex; pasting the **source** text into HTML feeds the browser invalid/over-escaped JavaScript.
**Fix:** Decode TS template literal rules when generating the script (each `\\` pair in the TS source → one `\` in the output JS), or inject the same snippet via bundler/`textContent` from a tested module instead of hand-copying.

## /5-reasons CTA: clicks open new tab AND redirect main tab
**Date:** 2026-05-05
**Context:** [`public/replo-5reasons-listicle.html`](public/replo-5reasons-listicle.html) — iframe lander with Voluum landing pixel

**Problem:** Clicking the CTA opened `promopage.net/click` in a new tab AND simultaneously redirected the parent (main) tab to the same URL. Two parallel navigations from one click. Earlier symptom: lander had no observed outbound clicks at all because Voluum-rewritten `javascript:dtpCallback.l=…` hrefs slipped past the inline iframe-breakout matcher.
**Root cause:**
1. Voluum's IIFE rewrites `<a href="…/click">` to `javascript:dtpCallback.l="…",void 0` once `document.readyState` flips to `interactive`/`complete`. Our `isVoluumOutboundHref()` matcher only tested for `promopage.net/click(?|$|#)` and `/clicks/`, so `javascript:` hrefs never matched and the click handler never intercepted.
2. After fixing #1, both our handler and Voluum's own capture-phase click listener (loaded by `promopage.net/d/.js`) ran. Our `e.stopPropagation()` blocks bubbling but does **not** stop other capture listeners on the same element (`document`). Voluum still fired and navigated `window.top.location` → main tab redirected, while our `topWin.open(url, "_blank", …)` opened the new tab in parallel.
**Fix:** Two patches in [`replo-5reasons-listicle.html`](public/replo-5reasons-listicle.html) (commits `d7cb562`, `53ccdd2`):
- Extend the click handler's match to also intercept `javascript:` hrefs that contain `promopage.net/click` (`isVoluumJsHref` branch).
- Replace `e.stopPropagation()` with `e.stopImmediatePropagation()` so the later-registered Voluum capture listener on `document` does not also run. Result: only `topWin.open(url, "_blank", "noopener,noreferrer")` executes. **Lesson:** when sharing `document` with a vendor script that registers capture-phase listeners, always use `stopImmediatePropagation()` — `stopPropagation()` doesn't reach sibling listeners on the same element.
