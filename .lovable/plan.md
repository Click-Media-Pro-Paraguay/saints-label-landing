
# Saints Label Bible Study Guide Journal — Advertorial Landing Page

A mobile-first, advertorial-style pre-lander designed for Taboola native traffic, written to feel like a trusted Christian blog post rather than an ad.

## Design system
- **Background:** Soft cream (`#FBF7EF`)
- **Primary text/accent:** Warm navy (`#1F2A44`)
- **Highlight accent:** Soft gold (`#C9A24A`)
- **Muted body:** Warm gray-brown for sub-copy
- **Typography:** Serif (Playfair Display / Lora) for headings; clean sans-serif (Inter) for body — large, readable line-height (1.7+)
- **Layout:** Single narrow column (max ~680px on desktop), generous whitespace, no top nav, scannable

## Page sections (single-page React app at `/`)

1. **Hero**
   - Small kicker: "A Note for Christians Who Want to Read the Bible with More Clarity"
   - Headline: *"Why Thousands of Christians Are Finally Reading Scripture with Real Clarity and Purpose"*
   - Subheadline about the 66-page guide journal
   - Primary CTA → `{{SHOPIFY_PRODUCT_URL}}`: *"Get My Bible Study Guide Now – Special Price + Free Shipping"*
   - **Image Placeholder 1** (large, framed div with descriptive comment): peaceful woman at wooden table with Bible + journal

2. **The Problem** — empathetic opening copy ("If you've ever opened your Bible with the best intentions…"), short paragraphs, a bullet list of common frustrations (lost in Leviticus, forgetting what was read, no clear application, etc.)

3. **Discovery / Story** — *"Then I Discovered Something That Changed Everything…"* — narrative copy leading into The Solution, with a pull-quote styled callout in soft gold

4. **Product Reveal + 5 Reasons** — *"The 5 Reasons This Guide Is Changing How Christians Read Scripture"*
   - Numbered cards (1–5): one page per book, context first, key themes, practical daily application, journaling space, beautiful keepsake design
   - **Image Placeholder 2**: hands holding open journal showing "Practical Application" page
   - Inline secondary CTA after reason #5

5. **Testimonials** — *"Real Christians Are Seeing Real Transformation"*
   - 4 testimonial cards with placeholder avatars, names, locations, gold star rating, short quote (Sarah M., Pastor David R., Linda K., Michael T.)

6. **Who It's For + Offer**
   - "Who This Is Perfect For" — bullet list (new believers, longtime Christians wanting fresh perspective, small group leaders, gift givers, etc.)
   - "Limited-Time Offer" — highlighted box with special price framing, free shipping, satisfaction guarantee badge

7. **Final CTA**
   - **Image Placeholder 3**: product hero shot of journal cover + interior spread
   - Large prominent CTA button → `{{SHOPIFY_PRODUCT_URL}}`
   - Reassurance line: "Free shipping • 30-day guarantee • Ships within 24 hours"
   - Sticky mobile CTA bar fixed to bottom of viewport on small screens

8. **Footer / Trust bar**
   - Trust signals row (Secure Checkout • Free US Shipping • 30-Day Guarantee • 10,000+ Happy Readers)
   - Small disclaimer + copyright © Saints Label

## Technical requirements
- Replace `src/pages/Index.tsx` with the full advertorial; all sections in one component, broken into small subcomponents for readability
- Update `src/index.css` design tokens to the cream / warm navy / soft gold palette (HSL) and add Google Fonts (Playfair Display + Inter) via `index.html`
- Update `tailwind.config.ts` with `font-serif` / `font-sans` families
- Mobile-first responsive: single column on mobile, comfortable max-width on desktop
- Image placeholders rendered as large aspect-ratio divs with dashed border, icon, descriptive label text, AND an exact JSX comment matching the spec so they're easy to find/replace
- All CTA buttons are `<a href="{{SHOPIFY_PRODUCT_URL}}">` (literal placeholder string preserved)
- In `index.html` `<head>`: add `<!-- TABOOLA PIXEL PLACEHOLDER - paste your Taboola pixel code here -->`
- Above each CTA in JSX: add `{/* VOLUUM TRACKING PLACEHOLDER - add Voluum click tracking wrapper on all CTAs */}`
- Sticky bottom CTA on mobile only (`md:hidden`), with safe-area padding
- No external images, no heavy libraries — keeps it fast
- Smooth scroll, accessible button sizes (min 48px tap targets), semantic HTML (`<article>`, `<section>`, `<h1>`–`<h3>`)

## Out of scope (can add later)
- Real product imagery (placeholders ready to swap)
- Actual Taboola/Voluum scripts (placeholders in place)
- Shopify product URL (literal `{{SHOPIFY_PRODUCT_URL}}` left for you to find-and-replace)
