import { buildOutboundUrl } from "@/lib/outbound";
import { COLORS } from "@/lib/editorial-tokens";
import { handleOutboundClick } from "./OutboundCTA";

// ============================================================
// Mobile-only sticky bottom CTA — reveals once the hero is out
// of view (wire `visible` from useHeroOutOfView).
//
// The CTA label is configurable per landing page; the default
// ("Take a closer look") matches V3.tsx's existing copy.
// ============================================================

type StickyMobileCTAProps = {
  visible: boolean;
  label?: string;
};

export const StickyMobileCTA = ({
  visible,
  label = "Take a closer look",
}: StickyMobileCTAProps) => (
  <div
    className={`fixed inset-x-0 bottom-0 z-50 border-t px-4 py-3 transition-transform duration-300 md:hidden ${
      visible ? "translate-y-0" : "translate-y-full"
    }`}
    style={{ background: COLORS.bg, borderColor: COLORS.hairline }}
  >
    <a
      href={buildOutboundUrl()}
      data-cta="primary-outbound"
      onClick={handleOutboundClick}
      className="flex min-h-[52px] w-full items-center justify-center rounded-sm px-5 py-3.5 text-center text-[0.95rem] font-medium tracking-wide"
      style={{ background: COLORS.ctaBg, color: COLORS.ctaText }}
    >
      {label}
    </a>
  </div>
);
