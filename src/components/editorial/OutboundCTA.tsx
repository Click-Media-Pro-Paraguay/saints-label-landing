import type { MouseEvent, ReactNode } from "react";
import { buildOutboundUrl } from "@/lib/outbound";
import { COLORS } from "@/lib/editorial-tokens";

// ============================================================
// Outbound CTA — all landing-page CTAs funnel through here.
// Keeps the single-source-of-truth contract with src/lib/outbound.ts
// and preserves the data-cta markers Voluum/Taboola scripts target.
// ============================================================

export function handleOutboundClick(
  e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
) {
  e.preventDefault();
  // ============================================================
  // TODO: Paste outbound click event scripts below
  // (e.g. window._tfa?.push({ notify: 'event', name: 'click_out' });
  //       window.dataLayer?.push({ event: 'cta_click' });)
  // ============================================================

  window.location.href = buildOutboundUrl();
}

export const PrimaryCTA = ({ children }: { children: ReactNode }) => (
  <a
    href={buildOutboundUrl()}
    data-cta="primary-outbound"
    onClick={handleOutboundClick}
    className="inline-flex min-h-[52px] w-full items-center justify-center rounded-sm px-6 py-4 text-[0.95rem] font-medium tracking-wide transition-opacity hover:opacity-90 sm:w-auto sm:px-7"
    style={{ background: COLORS.ctaBg, color: COLORS.ctaText }}
  >
    {children}
  </a>
);

export const SoftCTA = ({ children }: { children: ReactNode }) => (
  <a
    href={buildOutboundUrl()}
    data-cta="soft-outbound"
    onClick={handleOutboundClick}
    className="inline-flex min-h-[50px] w-full items-center justify-center rounded-sm border bg-transparent px-6 py-3 text-[0.9rem] font-medium tracking-wide transition-colors hover:bg-[#F1E9D6] sm:w-auto"
    style={{ borderColor: COLORS.softBorder, color: COLORS.text }}
  >
    {children}
  </a>
);

/** Inline body-text link → same Voluum click URL as CTAs */
export function OutboundTextLink({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={buildOutboundUrl()}
      onClick={handleOutboundClick}
      className={`underline decoration-[#6E6356]/45 underline-offset-[3px] transition-colors hover:decoration-[#1C1915]/70 ${className}`.trim()}
      style={{ color: COLORS.text }}
    >
      {children}
    </a>
  );
}
