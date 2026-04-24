import type { ReactNode } from "react";
import { COLORS } from "@/lib/editorial-tokens";

// ============================================================
// Editorial typography primitives — match V3.tsx's scale.
// Deliberately uses inline styles so the advertorial palette
// stays isolated from the global Tailwind HSL tokens.
// ============================================================

export const H2 = ({ children }: { children: ReactNode }) => (
  <h2
    className="font-serif text-[1.6rem] leading-[1.2] sm:text-[1.75rem] md:text-[2rem]"
    style={{ color: COLORS.text }}
  >
    {children}
  </h2>
);

export const P = ({ children }: { children: ReactNode }) => (
  <p
    className="text-[1rem] leading-[1.8] sm:text-[1.05rem] md:text-[1.1rem] md:leading-[1.85]"
    style={{ color: COLORS.text }}
  >
    {children}
  </p>
);
