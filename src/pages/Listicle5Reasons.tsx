import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ============================================================
// /5-reasons — Replo UI in iframe (public/replo-5reasons-listicle.html).
// GTM + Voluum + Voluum click URLs are in that static HTML. V3.tsx unchanged.
// ============================================================

const REPL_IFRAME_SRC = "/replo-5reasons-listicle.html";

const Listicle5Reasons = () => {
  const { search } = useLocation();

  useEffect(() => {
    document.title = "5 Reasons Listicle Clone";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Five reasons believers are reading Scripture differently with the Saints Label Bible Study Guide — original Replo layout.",
      );
    }
  }, []);

  const iframeSrc = `${REPL_IFRAME_SRC}${search}`;

  return (
    <iframe
      title="5 reasons — Saints Label Bible Study Guide"
      src={iframeSrc}
      className="block h-[100dvh] w-full border-0"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default Listicle5Reasons;
