// ============================================================
// Editorial design tokens — advertorial-only palette.
//
// Deliberately separate from the Tailwind HSL tokens in src/index.css
// (which drive the shadcn UI primitives). Advertorial landings should
// stay visually stable even if someone tunes shadcn tokens elsewhere.
// See CLAUDE.md "Styling" for the rationale.
// ============================================================

export const COLORS = {
  bg: "#F8F2E7",
  surface: "#FCF7EC",
  text: "#1C1915",
  muted: "#6E6356",
  ctaBg: "#26211B",
  ctaText: "#FBF6EB",
  hairline: "#E5DCC9",
  softBorder: "#D9CFBD",
} as const;

/** Main column images (max-w-[680px] + px-5) */
export const IMAGE_SIZES_FULL =
  "(min-width: 720px) 680px, calc(100vw - 2.5rem)";

/** sm:grid-cols-2 cells: ~half of 680px column minus gap */
export const IMAGE_SIZES_HALF =
  "(min-width: 640px) 340px, calc(100vw - 2.5rem)";

export const SECTION_STANDARD = "px-5 py-12 sm:px-6 sm:py-14 md:py-16";
export const SECTION_EMPHASIS = "px-5 py-14 sm:px-6 sm:py-16 md:py-20";
export const SECTION_COMPACT = "px-5 py-10 sm:px-6 sm:py-12 md:py-14";
