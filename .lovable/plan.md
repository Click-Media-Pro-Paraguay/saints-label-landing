

# Final Editorial Polish — Saints Label Advertorial

A small, focused pass to make the page feel like a high-quality Christian blog article (Christianity Today / thoughtful Bible study blog). No copy changes, no structural changes, no placeholder changes.

## Typography
- Body font size up from `text-base` to `text-[1.075rem]` (≈17.2px) on mobile, `text-lg` on desktop. Bump body line-height from 1.85 → ~1.9 in `src/index.css`.
- Headings stay **Lora** serif, but slightly larger and more elegant:
  - H1 (hero): `text-4xl md:text-5xl`, `font-medium`, tighter tracking
  - H2 (section heads): `text-3xl md:text-[2.25rem]`, `font-medium`
  - H3 (sub-heads, "5 Reasons" item titles, "The Solution", etc.): `text-xl md:text-2xl`, `font-semibold`
- Body stays Inter. Increase paragraph spacing (`space-y-5` → `space-y-6`).

## Color & CTA buttons
- Keep cream `#FBF7EF` background and warm navy `#1F2A44` text — unchanged.
- **Remove gold from all buttons.** New CTA style: solid warm navy background, cream/white text, subtle hover (slightly lighter navy), no glow, no ring. `rounded-md`, comfortable padding (`px-7 py-3.5`), normal weight, `tracking-wide`.
- Sticky mobile CTA bar restyled to the same navy/cream button (no gold). Bar background stays cream with a thin top border.
- Inline links: keep a very subtle navy underline (drop the gold underline entirely so gold disappears from the page).

## Whitespace & rhythm
- Increase vertical section padding: `py-14 md:py-20` between major sections.
- Add extra breathing room above/below every image placeholder (`my-14 md:my-20`).
- Add extra space above each H2/H3 sub-head (`mt-12` / `mt-10`).
- Slightly narrower comfortable measure on desktop: keep `max-w-[680px]` container, but tighten inner prose to feel like a column.

## Files touched
- `src/pages/Index.tsx` — restyle the `CTAButton`, hero/section heading sizes, paragraph spacing, image-placeholder margins, sticky mobile bar button. No copy, structure, image placeholders, CTA hrefs, or tracking comments change.
- `src/index.css` — bump body line-height to ~1.9, slightly larger base font size on `body`.
- `tailwind.config.ts` — no change needed (Lora + Inter already configured).
- `index.html` — no change (Lora + Inter Google Fonts link already present; Taboola pixel comment preserved).

## Preserved exactly (verbatim)
- All headlines, body copy, testimonials, offer text, footer text.
- All three `ImagePlaceholder` blocks and their JSX descriptive comments.
- Every CTA `href="{{SHOPIFY_PRODUCT_URL}}"`.
- Every `{/* VOLUUM TRACKING PLACEHOLDER - add Voluum click tracking wrapper on all CTAs */}` comment above each CTA.
- `<!-- TABOOLA PIXEL PLACEHOLDER -->` in `<head>`.
- Sticky mobile CTA bar (just restyled, not removed).

