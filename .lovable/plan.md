

# Editorial Refinement — Saints Label Advertorial

Strip the page back to a quiet, long-form Christian blog feel. Keep all copy, image placeholders, CTA links (`{{SHOPIFY_PRODUCT_URL}}`), and Voluum/Taboola tracking comments exactly as they are. Keep sticky mobile CTA.

## Typography
- Swap heading font from Playfair Display → **Lora** (Georgia fallback). Update Google Fonts link in `index.html` and `font-serif` stack in `tailwind.config.ts`.
- Body stays Inter. Bump body line-height to ~1.85, shrink heading sizes slightly so they feel editorial, not promotional.

## Color usage
- Keep cream `#FBF7EF` background and navy `#1F2A44` text. Gold becomes a near-invisible accent — used only as a thin underline on inline links and a muted fill on CTA buttons.
- Calmer CTA: replace bright gold pill with a softer navy-outlined / muted-gold button (no heavy glow, no ring shadow). Smaller, rounded-md, normal weight.

## Section-by-section changes (`src/pages/Index.tsx`)

1. **Hero** — Remove the gold uppercase kicker line entirely. Remove the gold span highlight on "Real Clarity" (plain navy). Keep headline + subheadline + single CTA + Image Placeholder 1.

2. **Problem** — Remove the boxed "Sound familiar?" panel and the `Check`-icon bulleted list. Convert frustrations into a single short flowing paragraph (or a plain unstyled `<ul>` with simple bullets, no icons, no background).

3. **Discovery / Story** — Remove the gold-bordered pull-quote box and Quote icon. Render the quote as a simple italic serif `<blockquote>` with a thin left border in muted border color (no gold fill). Keep "The Solution" as a plain serif subhead.

4. **5 Reasons** — Remove cards, borders, shadows, and numbered navy circles. Render as a clean `<ol>` with each item: bold serif heading prefixed with "1." / "2." inline, followed by a paragraph. Generous vertical spacing between items. Remove the inline secondary CTA after reason #5 (or keep one understated text-link CTA — will keep one calm button for conversion).

5. **Testimonials** — Remove `Stars`, avatar circles, card borders/backgrounds. Render each as a simple italic serif blockquote with a thin left border, name + location in small sans-serif underneath. Delete the `Stars` component and the `Star` import where unused.

6. **Who It's For + Offer** —
   - "Who It's For": remove `Heart` icons; plain bullet list.
   - Offer: remove the gold-bordered gradient box and the 3-column trust badge grid. Replace with a simple paragraph subhead "A Note on the Offer" + flowing paragraph stating the introductory price, free US shipping, and 30-day guarantee. Follow with one calm CTA button.

7. **Final CTA** — Keep image placeholder + headline + paragraph + single calm CTA + reassurance line. No styling changes beyond the new button look.

8. **Footer** — Remove the 4-up icon trust grid. Replace with a single centered line of plain text: "Secure Checkout · Free US Shipping · 30-Day Guarantee · 10,000+ Happy Readers". Keep disclaimer + copyright.

9. **Sticky mobile CTA** — Keep, but restyle to match the new calmer button (muted gold fill, no glow shadow).

## Files touched
- `src/pages/Index.tsx` — full rewrite of structure per above; remove unused icon imports (`Star`, `Quote`, `Heart`, `Sparkles`, `Truck`, `ShieldCheck`, `Check`, `BookOpen` only kept inside `ImagePlaceholder`).
- `src/index.css` — bump body line-height; no palette change.
- `tailwind.config.ts` — change `font-serif` to `['Lora','Georgia','Cambria','serif']`.
- `index.html` — swap Playfair Display Google Fonts link for Lora (keep Inter, keep Taboola pixel comment).

## Preserved exactly
- All body copy, headlines, testimonial text.
- All three image placeholders with their JSX comments and descriptions.
- All CTA `href="{{SHOPIFY_PRODUCT_URL}}"` and `{/* VOLUUM TRACKING PLACEHOLDER */}` comments above each CTA.
- Sticky bottom CTA on mobile.
- Taboola pixel placeholder in `<head>`.

