import { describe, expect, it } from "vitest";
import { buildOutboundUrl, OUTBOUND_URL } from "./outbound";

describe("buildOutboundUrl", () => {
  it("returns the exact CTA click URL without adding query parameters", () => {
    window.history.replaceState({}, "", "/?utm_source=taboola&click_id=abc123");

    expect(buildOutboundUrl()).toBe("https://promopage.net/click");
    expect(buildOutboundUrl()).toBe(OUTBOUND_URL);
  });
});
