import { COLORS } from "@/lib/editorial-tokens";

// ============================================================
// Sponsored-content disclosure strip — FTC + Taboola / Outbrain
// requirement. Sits at the top of every angle-specific landing
// so there's never ambiguity that the reader is on a sponsored
// article. V3.tsx keeps its own "You are reading this for a
// reason" strip; this is for the newer per-angle pages.
// ============================================================

export const SponsoredDisclosure = ({
  label = "Sponsored · A reader story and guide about a Bible-study journaling method.",
}: {
  label?: string;
}) => (
  <div
    className="w-full border-b"
    style={{ borderColor: COLORS.hairline, background: COLORS.surface }}
  >
    <div className="mx-auto max-w-[680px] px-5 py-2.5 text-center sm:px-6">
      <span
        className="text-[0.7rem] uppercase tracking-[0.18em]"
        style={{ color: COLORS.muted }}
      >
        {label}
      </span>
    </div>
  </div>
);
