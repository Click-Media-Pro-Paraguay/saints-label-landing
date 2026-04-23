

# /v4 — Direct-Response Sales Landing Page

A high-conversion, product-led sales page at `/v4`. Visually and psychologically the opposite of /v3 — bold hierarchy, benefit stacking, multiple CTA blocks, polished cards. Reuses existing tracking infrastructure.

## Files

- `src/App.tsx` — add `<Route path="/v4" element={<V4 />} />` above the catch-all.
- `src/pages/V4.tsx` — new self-contained page with inline subcomponents (`AnnouncementBar`, `Hero`, `BenefitGrid`, `ProblemSolution`, `ProductBreakdown`, `WhyItWorks`, `WhoFor`, `GiftAngle`, `SocialProof`, `Objection`, `FAQ`, `FinalCTA`, `Disclaimer`, `StickyMobileCTA`).
- `src/assets/logo.avif` — copy uploaded logo here for use in announcement strip.
- No edits to `src/lib/outbound.ts` or `index.html` — reuse existing `buildOutboundUrl()` and tracking placeholders.
- No changes to `/`, `/v2`, `/v3`.

## Logo placement

- Copy `user-uploads://Logo_Fixed_NEW_125x@2x.avif` → `src/assets/logo.avif`.
- Render it small (h-7) in the top announcement/trust strip on the left, with the 3 trust statements aligned to the right (stacks on mobile).

## Design system (scoped inline to /v4)

Premium DTC, warm neutrals + dark accent, distinct from /v2 and /v3:

- Page bg: `#FAF7F2` (soft warm neutral)
- Card surface: `#FFFFFF` with subtle border `#EDE6DA` and soft shadow
- Text primary: `#16140F` (deep near-black)
- Text muted: `#6B6357`
- Accent / primary CTA: `#1A1714` solid with `#F5C76A` warm gold hover ring (subtle, not flashy) — cream text
- Secondary CTA: white bg, `#16140F` text, `#16140F` border, hover fills dark
- Headings: Lora (serif) for big hero/section heads, Inter for everything else. Bold hierarchy.
- Tighter rhythm than /v3: `py-14 md:py-20` per section, content grid `max-w-6xl` for product/grid sections, `max-w-2xl` for prose.

## CTA behavior

All primary CTAs share:
- `className="cta-primary"`, `data-cta="primary-outbound"`
- `onClick={handleOutboundClick}` → calls `buildOutboundUrl()` → `window.location.href = url`
- Inline comment block above handler for Voluum / Taboola click scripts (matches /v2, /v3)

Secondary "See What's Inside" CTAs use `scrollIntoView` to `#product-breakdown`. No `data-cta`.

Primary CTA appears in: hero, problem/solution, gift angle, final CTA, **and a sticky mobile bottom bar** (`md:hidden`, visible after hero scroll-past).

## Page structure (verbatim copy from brief)

1. **Announcement / trust strip** — slim dark-on-cream bar. Logo (left) + 3 trust statements with hairline dividers between (right). Stacks on mobile.

2. **Hero** — 2-col on desktop (`md:grid-cols-2`), stacked on mobile.
   - Left: H1 "A Simpler Way to Understand Every Book of the Bible", subhead, 4 benefit bullets (with small check marks), primary CTA "View the Full Details" + secondary "See What's Inside" (scrolls to `#product-breakdown`).
   - Right: large hero product image placeholder card.

3. **Quick benefit grid** — H2 "Why readers are drawn to this guide" + 4 benefit cards (`md:grid-cols-4`). Each card: small icon block (lucide icon: `Sparkles`, `Layers`, `BookOpen`, `Repeat`), bold title, short body. White cards with subtle border.

4. **Problem / solution** — 2-col: copy on left (H2 + 2 paragraphs + primary CTA "View the Guide"), lifestyle image placeholder on right.

5. **Product breakdown** (`id="product-breakdown"`) — H2 "What's inside", 2-col layout: bullet list with check marks on left, two stacked product detail image placeholders on right.

6. **Why it works** — H2 + 2 paragraphs + 3 mini blocks (`md:grid-cols-3`): Clarity / Structure / Consistency. Bold serif label, one-line descriptor each. Plain blocks with hairline top border.

7. **Who it's for** — H2 + 4 persuasive bullet cards (`md:grid-cols-2`) + lifestyle image placeholder below.

8. **Gift angle** — 2-col: copy + primary CTA "See the Full Product" on left, gift image placeholder on right. Soft tinted background `#F3EDE2` to break visual rhythm.

9. **Social proof** — H2 + 3 testimonial cards (`md:grid-cols-3`). Each card: small-caps placeholder label at top, italic placeholder quote, short attribution line. Polished cards with border + subtle shadow. No fake names.

10. **Objection handling** — H2 + 2 paragraphs, centered, max-w-2xl.

11. **FAQ** — H2 + 5 accordion items using existing `@/components/ui/accordion` (already in project). Verbatim Q&A from brief.

12. **Final CTA** — Dark band (`bg-[#16140F]` cream text). H2 + body + primary CTA "View the Full Details" (cream button on dark, inverted) + secondary "See What's Inside" (outline cream).

13. **Bottom disclaimer** — small centered muted text: "This page is promotional content for the featured product."

14. **Sticky mobile CTA bar** (`md:hidden`) — appears after scrolling past hero. Single primary outbound button.

## Technical notes

- React + Vite, no new dependencies.
- Uses existing `Accordion` from `@/components/ui/accordion`, `Button` from `@/components/ui/button` for consistent styling, lucide-react icons (already installed).
- Logo imported as ES6 module: `import logo from "@/assets/logo.avif"`.
- Outbound URL stays in `src/lib/outbound.ts` — single source of truth across /v2, /v3, /v4.
- Inline comment block above `handleOutboundClick` marks where to paste Voluum/Taboola click scripts.

## Out of scope

- No checkout, cart, navbar, footer links, login, search, blog, forms, popups, countdowns, fake branding, extra pages.
- No real images — labeled placeholder boxes only.
- No edits to `/`, `/v2`, `/v3`, `index.html`, or `src/lib/outbound.ts`.

