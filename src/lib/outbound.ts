// ============================================================
// OUTBOUND URL CONFIG
// GTM owns tracking. CTAs should stay as plain links to this exact URL.
// ============================================================
export const OUTBOUND_URL = "https://promopage.net/click";

export function buildOutboundUrl(base: string = OUTBOUND_URL): string {
  return base;
}
