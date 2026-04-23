

# /v3 — Editorial Advertorial Variation

A third advertorial route at `/v3`, designed for native traffic with a slow-burn, empathetic, problem-first narrative. Reuses the existing `src/lib/outbound.ts` utility and tracking placeholders already added to `index.html` for /v2. The `/` and `/v2` pages are not touched.

## Route & files

- `src/App.tsx` — add `<Route path="/v3" element={<V3 />} />` above the catch-all.
- `src/pages/V3.tsx` — new self-contained page with inline subcomponents (`TopBar`, `Hero`, `HiddenFriction`, `WhyContext`, `WhatOthersDo`, `SoftReveal`, `WhatItIncludes`, `WhoFor`, `HonestFraming`, `Testimonials`, `FinalCTA`, `Disclaimer`, `StickyMobileCTA`).
- No changes to `src/lib/outbound.ts` — reuse the existing `buildOutboundUrl()` (preserves inbound UTMs/click_id/gclid/fbclid).
- No changes to `index.html` — Taboola / GTM / click-script placeholders are already there from /v2.

## Design system (scoped inline to /v3)

Calmer parchment, slightly warmer than /v2 to feel distinct in A/B reporting:

- Background: `#F8F2E7` (warm cream)
- Surface (placeholders, soft cards): `#FCF7EC`
- Text primary: `#1C1915` (near-black charcoal)
- Text muted: `#6E6356`
- CTA primary (solid, calm): `#26211B` charcoal-brown, cream text
- CTA soft (scroll links, "Learn More" / "See One Example"): transparent background, charcoal text, hairline border `#D9CFBD`, subtle hover
- Hairlines: `#E5DCC9`
- Headings: Lora (already loaded). Body: Inter. No new fonts.
- Measure: `max-w-[680px]` mx-auto, mobile-first, generous `py-16 md:py-24` between sections, `space-y-6` between paragraphs, `leading-[1.85]`.

## CTA behavior

Two distinct button kinds, both following native-friendly psychology:

1. **Soft scroll CTAs** (mid-article): "Learn More" (after hero) and "See One Example" (end of "What some believers are doing"). These do NOT click out — they `scrollIntoView({ behavior: 'smooth' })` to a target section id. No `data-cta` attribute. Outline/ghost style.
2. **Primary outbound CTA** (final section + sticky mobile bar only): "View the Full Details". Uses the existing pattern:
   - `data-cta="primary-outbound"`
   - `onClick={handleOutboundClick}` which calls `buildOutboundUrl()` and `window.location.href = url`
   - Inline comment block above the handler for Voluum / Taboola click-event scripts (matches /v2)

Crucial: the first screen contains only the soft "Learn More" CTA — no outbound CTA above the fold, per the brief.

## Page structure (verbatim copy from brief)

1. **Top disclosure bar** — hairline bottom border, centered uppercase tracked label `Advertisement` (small, subtle).

2. **Hero** — H1 "Why Reading the Bible Often Feels Harder Than People Admit", subhead, two reflective intro paragraphs, soft "Learn More" button (scrolls to `#hidden-friction`), then hero image placeholder labeled "Hero image placeholder – thoughtful believer reading".

3. **The hidden friction** (`id="hidden-friction"`) — H2 + 2 paragraphs + image placeholder "Image placeholder – Bible study desk scene".

4. **Why context matters** — H2 + 2 paragraphs + a clean 3-up editorial mini-block (no icons, just bold serif label + one-line descriptor): Clarity / Structure / Consistency. Stacks on mobile, 3 columns `md:grid-cols-3`. Hairline dividers between, no card backgrounds.

5. **What some believers are doing differently** — H2 + 2 paragraphs + soft "See One Example" button (scrolls to `#soft-reveal`).

6. **Soft product reveal** (`id="soft-reveal"`) — H2 "One example is this Bible Study Guide Journal" + 3 paragraphs + two image placeholders ("Image placeholder – hands holding guide", "Image placeholder – journal cover close-up").

7. **What it includes** — H2 + plain `<ul>` (5 bullets verbatim) + closing paragraph + two image placeholders ("Image placeholder – journal interior close-up", "Image placeholder – inside pages placeholder").

8. **Who it may resonate with** — H2 + 4 verbatim bullets.

9. **Honest framing** — H2 + 2 paragraphs.

10. **Testimonial placeholders** — three simple italic blockquotes with thin left border. Each with a small-caps label above ("Customer feedback placeholder", "Reader impression placeholder", "Gift buyer feedback placeholder") and short generic placeholder text underneath. No fake names.

11. **Final section** — H2 "A simpler approach can sometimes make consistency easier" + body paragraph + primary outbound CTA "View the Full Details".

12. **Bottom disclaimer** — small centered muted text: "This page is promotional content for the featured product." No links.

13. **Sticky mobile CTA** (`md:hidden`) — appears only after the user scrolls past the hero (simple `IntersectionObserver` on the hero, or just always-visible after first 600px scroll using a tiny `useEffect` listener). Same primary outbound styling, `data-cta="primary-outbound"`. Keeps the first screen clean per the "no hard sell above the fold" rule.

## Technical notes

- React + Vite, no new dependencies.
- All styling via Tailwind arbitrary values + a small inline `COLORS` const (same pattern as `V2.tsx`).
- Section components defined inline in `V3.tsx` for easy manual editing.
- Comments above the click handler clearly mark where to paste outbound tracking calls.
- Outbound URL lives in `src/lib/outbound.ts` (already created) — single source of truth for all three variations.

## Out of scope

- No checkout, cart, navbar, footer links, login, search, blog, forms, popups, countdowns, fake branding, or extra pages.
- No real images — placeholder boxes only.
- No edits to `/`, `/v2`, `index.html`, or `src/lib/outbound.ts`.

