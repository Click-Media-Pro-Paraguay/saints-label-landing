

# /v2 — Advertorial Variation (Parchment / Charcoal)

A second, fully independent advertorial route at `/v2` for A/B testing against the existing `/`. Calmer, parchment-toned, native-article feel. No nav, no footer links, no checkout — one outbound CTA only.

## Route & file structure

- Add new route `/v2` in `src/App.tsx` (above the catch-all `*`).
- New page: `src/pages/V2.tsx` — single self-contained file with small inline subcomponents (`TopBar`, `Hero`, `Reasons`, `ProductProof`, `WhoFor`, `Objection`, `Testimonials`, `FinalCTA`, `Disclaimer`).
- New shared util: `src/lib/outbound.ts` — exports `OUTBOUND_URL` constant + `buildOutboundUrl()` that preserves inbound query params (UTMs, `click_id`, `gclid`, `fbclid`, etc.) and merges them onto the outbound URL.
- `index.html` — add a clearly-commented `<head>` block for Taboola pixel + optional GTM placeholder, and a `<body>`-end placeholder for click-event scripts. (Taboola comment already exists; expand it cleanly.)

## Design system (scoped to /v2 only)

To avoid disturbing the existing `/` page, /v2 uses **inline Tailwind arbitrary values** with the new palette rather than touching global tokens:

- Background: warm cream `#F7F1E6`
- Surface / card: parchment `#FBF6EB`
- Text primary: charcoal `#1F1B16`
- Text muted: muted brown `#6B5E4E`
- Accent / CTA: deep charcoal-brown `#2A241E` (button bg) with cream text
- Hairlines/borders: `#E7DFD0`
- Headings: Lora (already loaded). Body: Inter (already loaded). No new font loads needed.
- Max content width: `max-w-[680px]`. Mobile-first. Generous whitespace, hairline dividers between sections.

## Page structure (`/v2`)

1. **Top bar** — slim full-width strip, hairline bottom border, centered uppercase tracked label: `Advertisement`.

2. **Hero**
   - H1 (Lora, `text-4xl md:text-5xl`, charcoal): "Why So Many Believers Are Using This Bible Study Guide to Understand Scripture More Clearly"
   - Subhead (Inter, muted brown, `text-lg`): the 66-page subheadline
   - Primary CTA: `See the Guide on the Official Store` — solid charcoal button, cream text, `data-cta="primary-outbound"`, calls `handleOutboundClick`
   - **Hero image placeholder** below headline on mobile, beside on `md+`: parchment box, dashed border, label "Hero image placeholder – person holding journal"

3. **Intro / Hook** — single flowing paragraph (verbatim copy provided).

4. **5 Reasons** — H2 "Five reasons readers are drawn to it". Plain `<ol>` with bold serif title prefixed `1.`–`5.` and supporting paragraph beneath each. No cards, no icons. Generous spacing.

5. **Product Proof** — H2 "What makes it different?", paragraph, two stacked image placeholders ("Inside pages placeholder – close-up of book interior", "Lifestyle image placeholder – morning Bible study scene"), then a plain bullet list: 66 pages, one page per Bible book, context summaries, themes, reflections, practical application.

6. **Who this is for** — H2 + 4 bullets verbatim.

7. **Objection handling** — H2 "What this guide is — and what it is not" + paragraph verbatim.

8. **Testimonials** — H2 "What readers are saying". Three simple italic blockquotes with thin left border. Each labeled in small caps "Customer feedback placeholder" with short generic placeholder quote (no fake names).

9. **Final CTA block** — H2 "See why so many readers are trying this guide", short paragraph, primary CTA "Visit the Official Product Page" (same `data-cta`, same handler).

10. **Bottom disclaimer** — small centered text: "This page is promotional content for the featured product." No links.

11. **Sticky mobile CTA bar** — same as `/`, restyled to charcoal/cream, `data-cta="primary-outbound"`, `md:hidden`.

## Outbound link & tracking behavior

`src/lib/outbound.ts`:
```ts
// REPLACE with your Voluum click URL
export const OUTBOUND_URL = "https://example.com/replace-with-voluum-click-url";

export function buildOutboundUrl(base = OUTBOUND_URL): string {
  if (typeof window === "undefined") return base;
  const incoming = new URLSearchParams(window.location.search);
  const url = new URL(base);
  incoming.forEach((v, k) => { if (!url.searchParams.has(k)) url.searchParams.set(k, v); });
  return url.toString();
}
```

In `V2.tsx`:
- Single `handleOutboundClick(e)` — calls a `// TODO: paste click event scripts here` comment block (e.g. `window._tfa?.push(...)`), then `window.location.href = buildOutboundUrl()`.
- All CTAs are `<button>` (or `<a>` with computed href on mount) with `className="cta-primary"`, `data-cta="primary-outbound"`, `onClick={handleOutboundClick}`. Using a button + JS nav guarantees query-string forwarding at click time.

## `index.html` head additions (clearly commented)

```html
<!-- ============================== -->
<!-- 1. TABOOLA BASE PIXEL (paste below) -->
<!-- ============================== -->

<!-- ============================== -->
<!-- 2. OPTIONAL GOOGLE TAG MANAGER (paste below) -->
<!-- ============================== -->
```

And before `</body>`:
```html
<!-- ============================== -->
<!-- 3. OPTIONAL CLICK EVENT SCRIPTS (paste below) -->
<!-- ============================== -->
```

## Files touched

- `src/App.tsx` — add `<Route path="/v2" element={<V2 />} />`
- `src/pages/V2.tsx` — new, full advertorial
- `src/lib/outbound.ts` — new, outbound URL constant + UTM-preserving builder
- `index.html` — add commented placeholders for Taboola, GTM, and click-event scripts

## Out of scope (intentionally not built)

- No checkout, cart, navbar, footer links, login, search, blog index, or extra pages.
- No real images — placeholder boxes only.
- No backend, forms, auth, or DB.
- The existing `/` page is left completely untouched.

