import { useEffect, useRef, useState } from "react";

// ============================================================
// Fires `showSticky = true` once the hero section scrolls out of
// the viewport. Caller attaches the returned ref to any element
// that represents "the hero is still visible" — typically the
// page's <section ref={heroRef}>…</section> block.
//
// Cleanup is load-bearing: without observer.disconnect() on
// unmount, client-side route changes leak observers.
// ============================================================

export function useHeroOutOfView() {
  const heroRef = useRef<HTMLElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowSticky(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { heroRef, showSticky };
}
