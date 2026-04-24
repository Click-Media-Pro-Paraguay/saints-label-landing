import { describe, expect, it } from "vitest";
import { VOLUUM_LANDING_IIFE } from "./voluum";

describe("VOLUUM_LANDING_IIFE", () => {
  // Guards the backslash-escaping rule documented in .claude/learnings.md
  // "Pasting Voluum's minified IIFE into static HTML: escape layers".
  // TS template literals double every backslash, so `\\s` in the source
  // is what the browser sees as `\s`. If a future refactor accidentally
  // halves or doubles the backslashes, this parses-as-JS guard catches it.
  it("parses as executable JavaScript", () => {
    expect(() => new Function(VOLUUM_LANDING_IIFE)).not.toThrow();
  });

  it("preserves the escaped regex fragments that Voluum depends on", () => {
    // Each of these fragments lives inside a regex literal in the IIFE.
    // They must remain single-backslash in the runtime string (= double
    // in this test's source literal, same as in src/lib/voluum.ts).
    expect(VOLUUM_LANDING_IIFE).toContain("\\s+");
    expect(VOLUUM_LANDING_IIFE).toContain("\\/");
    expect(VOLUUM_LANDING_IIFE).toContain("dtpCallback\\.l");
  });
});
