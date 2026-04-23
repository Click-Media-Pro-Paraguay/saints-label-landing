// ============================================================
// OUTBOUND URL CONFIG
// REPLACE the value below with your Voluum click URL when ready.
// ============================================================
export const OUTBOUND_URL = "https://example.com/replace-with-voluum-click-url";

/**
 * Builds the outbound URL, preserving any inbound query parameters
 * (UTMs, click_id, gclid, fbclid, etc.) from the current page.
 * Existing params on the base URL take precedence.
 */
export function buildOutboundUrl(base: string = OUTBOUND_URL): string {
  if (typeof window === "undefined") return base;
  try {
    const incoming = new URLSearchParams(window.location.search);
    const url = new URL(base);
    incoming.forEach((value, key) => {
      if (!url.searchParams.has(key)) {
        url.searchParams.set(key, value);
      }
    });
    return url.toString();
  } catch {
    return base;
  }
}
