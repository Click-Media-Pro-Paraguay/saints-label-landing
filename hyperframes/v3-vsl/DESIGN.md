# V3 VSL — Visual identity (from `src/pages/V3.tsx`)

## Style

Editorial, warm, faith-adjacent direct response. Calm and trustworthy: cream paper background, deep brown-black text, soft borders. The tone is empathetic and clear—problems first, then context, then the product as a gentle companion (not hype).

## Colors

| Role | Hex | Use |
|------|-----|-----|
| Page background | `#F8F2E7` | All scenes |
| Surface / card | `#FCF7EC` | CTA block, image frames |
| Primary text | `#1C1915` | Headlines, body |
| Muted / secondary | `#6E6356` | Kicker, subtitles, pull quotes |
| CTA background | `#26211B` | Primary button |
| CTA label | `#FBF6EB` | On CTA |
| Hairline / border | `#E5DCC9`, `#D9CFBD` | Rules, frames |

## Typography

- **Headlines / pull quotes:** Lora (serif)
- **UI / labels / body support:** Inter (sans-serif)
- Titles: strong contrast on cream; kicker in uppercase tracking, muted color

## Output checks

- `npx hyperframes lint` and `npx hyperframes validate` from `hyperframes/v3-vsl/`.
- If `validate` reports low contrast on the final CTA, it is a known quirk: the audit can sample the button label as if it were on the page background. Visually, the CTA is `#fbf6eb` on `#26211b` (per `V3.tsx`). Use `validate --no-contrast` while iterating, or check the render.

## What NOT to Do

- No neon, cyan, or purple “tech” gradients
- No stock “success” or aggressive countdown tropes
- No tiny body copy below 20px in the 1920×1080 comp (scale for legibility in video)
- No pure black/white; keep warm neutrals
- No `visibility` or `display` animation (GSAP: opacity/transform only per HyperFrames)
