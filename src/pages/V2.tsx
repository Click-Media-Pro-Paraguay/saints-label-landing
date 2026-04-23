import { useCallback } from "react";
import { buildOutboundUrl } from "@/lib/outbound";

// ============================================================
// /v2 — Advertorial Variation (Parchment / Charcoal)
// Single-page pre-sell. One outbound CTA only.
// Palette is scoped inline so this page is independent of /.
// ============================================================

const COLORS = {
  bg: "#F7F1E6",
  surface: "#FBF6EB",
  text: "#1F1B16",
  muted: "#6B5E4E",
  cta: "#2A241E",
  border: "#E7DFD0",
};

function handleOutboundClick(e: React.MouseEvent) {
  e.preventDefault();
  // ============================================================
  // OPTIONAL CLICK EVENT SCRIPTS
  // Paste any extra click-tracking calls here, e.g.:
  //   window._tfa?.push({ notify: 'event', name: 'click_out', id: XXXXX });
  //   window.dataLayer?.push({ event: 'cta_click' });
  // ============================================================
  const url = buildOutboundUrl();
  window.location.href = url;
}

function CTAButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button
      type="button"
      onClick={handleOutboundClick}
      data-cta="primary-outbound"
      className={`cta-primary inline-flex items-center justify-center rounded-md px-7 py-3.5 text-base font-medium tracking-wide text-[#FBF6EB] transition-colors hover:opacity-90 ${className}`}
      style={{ backgroundColor: COLORS.cta, minHeight: 48 }}
    >
      {children}
    </button>
  );
}

function ImagePlaceholder({ label, aspect = "aspect-[4/3]" }: { label: string; aspect?: string }) {
  return (
    <div
      className={`${aspect} w-full rounded-md border border-dashed flex items-center justify-center text-center px-6`}
      style={{ borderColor: COLORS.border, backgroundColor: COLORS.surface }}
    >
      <span className="font-sans text-sm" style={{ color: COLORS.muted }}>
        {label}
      </span>
    </div>
  );
}

function Divider() {
  return <hr className="my-14 md:my-20 border-0 h-px" style={{ backgroundColor: COLORS.border }} />;
}

export default function V2() {
  const sectionWrap = "mx-auto max-w-[680px] px-5";
  const h2 = "font-serif font-medium text-3xl md:text-[2.25rem] leading-tight";
  const body = "font-sans text-[1.075rem] md:text-lg leading-[1.9]";

  return (
    <div
      className="min-h-screen pb-28 md:pb-0"
      style={{ backgroundColor: COLORS.bg, color: COLORS.text }}
    >
      {/* 1. TOP BAR */}
      <div
        className="w-full border-b"
        style={{ borderColor: COLORS.border, backgroundColor: COLORS.surface }}
      >
        <div className="mx-auto max-w-[680px] px-5 py-2.5 text-center">
          <span
            className="font-sans text-[11px] uppercase tracking-[0.2em]"
            style={{ color: COLORS.muted }}
          >
            Advertisement
          </span>
        </div>
      </div>

      {/* 2. HERO */}
      <header className={`${sectionWrap} pt-12 md:pt-20`}>
        <h1
          className="font-serif font-medium text-4xl md:text-5xl leading-[1.15] tracking-tight"
          style={{ color: COLORS.text }}
        >
          Why So Many Believers Are Using This Bible Study Guide to Understand Scripture More Clearly
        </h1>
        <p className={`${body} mt-6`} style={{ color: COLORS.muted }}>
          A simple 66-page guide designed to help readers understand the context, themes, and practical meaning behind every book of the Bible.
        </p>
        <div className="mt-8">
          <CTAButton>See the Guide on the Official Store</CTAButton>
        </div>
        <div className="mt-12 md:mt-16">
          <ImagePlaceholder label="Hero image placeholder – person holding journal" aspect="aspect-[4/3]" />
        </div>
      </header>

      <Divider />

      {/* 3. INTRO / HOOK */}
      <section className={sectionWrap}>
        <p className={body}>
          Many believers want to spend more time in Scripture, but good intentions often collide with a familiar problem: it can be hard to understand how each book fits together, why it was written, and what it means for daily life. That is why simple study tools have become so appealing to readers who want more clarity without feeling overwhelmed.
        </p>
      </section>

      <Divider />

      {/* 4. FIVE REASONS */}
      <section className={sectionWrap}>
        <h2 className={h2}>Five reasons readers are drawn to it</h2>

        <ol className="mt-10 space-y-12 list-none p-0">
          {[
            {
              t: "One page for every book of the Bible",
              b: "Instead of jumping between scattered notes, this guide gives readers a simple overview of each book in one place. That structure can make Bible study feel more approachable, especially for people who want a practical starting point.",
            },
            {
              t: "It helps make context easier to grasp",
              b: "By highlighting key themes, background, and purpose, the guide helps readers understand more than just individual verses. It gives a clearer sense of what each book is about and why it matters.",
            },
            {
              t: "It reduces the feeling of overwhelm",
              b: "For many people, consistency is not the hard part—confusion is. A structured format can reduce friction and make it easier to sit down, read, reflect, and keep going.",
            },
            {
              t: "It supports a more consistent study routine",
              b: "When the format stays simple and repeatable, it becomes easier to build a habit. That can be helpful for morning devotionals, evening reflection, or personal quiet time throughout the week.",
            },
            {
              t: "It also makes a thoughtful Christian gift",
              b: "Because it is practical, faith-centered, and easy to use, this kind of guide can also work well as a gift for a spouse, friend, parent, or fellow believer who wants to spend more meaningful time in Scripture.",
            },
          ].map((r, i) => (
            <li key={i}>
              <h3 className="font-serif font-semibold text-xl md:text-2xl leading-snug">
                <span style={{ color: COLORS.muted }}>{i + 1}.</span> {r.t}
              </h3>
              <p className={`${body} mt-3`}>{r.b}</p>
            </li>
          ))}
        </ol>
      </section>

      <Divider />

      {/* 5. PRODUCT PROOF */}
      <section className={sectionWrap}>
        <h2 className={h2}>What makes it different?</h2>
        <p className={`${body} mt-6`}>
          The appeal is not complexity. It is clarity. This guide is designed for readers who want a simple physical resource that helps them move through Scripture with more structure, reflection, and practical understanding.
        </p>

        <div className="mt-12 space-y-8">
          <ImagePlaceholder label="Inside pages placeholder – close-up of book interior" />
          <ImagePlaceholder label="Lifestyle image placeholder – morning Bible study scene" />
        </div>

        <ul className={`${body} mt-12 space-y-2 list-disc pl-6`}>
          <li>66 pages</li>
          <li>One page per book of the Bible</li>
          <li>Context summaries</li>
          <li>Key themes</li>
          <li>Reflections</li>
          <li>Practical application</li>
        </ul>
      </section>

      <Divider />

      {/* 6. WHO THIS IS FOR */}
      <section className={sectionWrap}>
        <h2 className={h2}>Who this guide may be best for</h2>
        <ul className={`${body} mt-8 space-y-3 list-disc pl-6`}>
          <li>Believers who want a more structured Bible study routine</li>
          <li>Readers who want a simple companion to personal devotional time</li>
          <li>People returning to Scripture and looking for a less overwhelming starting point</li>
          <li>Gift buyers looking for something meaningful and useful</li>
        </ul>
      </section>

      <Divider />

      {/* 7. OBJECTION */}
      <section className={sectionWrap}>
        <h2 className={h2}>What this guide is — and what it is not</h2>
        <p className={`${body} mt-6`}>
          This is not meant to replace a full study Bible, commentary set, or pastoral teaching. It is a simple companion resource for readers who want a more guided and practical way to reflect on each book of the Bible.
        </p>
      </section>

      <Divider />

      {/* 8. TESTIMONIALS */}
      <section className={sectionWrap}>
        <h2 className={h2}>What readers are saying</h2>
        <div className="mt-10 space-y-10">
          {[
            "Having one page per book makes it so much easier to sit down and actually study. I feel less lost when I open my Bible.",
            "I bought it as a gift and ended up getting one for myself. It is simple, calm, and easy to come back to every morning.",
            "It is not a commentary, and that is exactly what I needed. Just enough structure to keep me reading consistently.",
          ].map((q, i) => (
            <figure
              key={i}
              className="pl-5 border-l"
              style={{ borderColor: COLORS.border }}
            >
              <div
                className="font-sans text-[11px] uppercase tracking-[0.18em] mb-2"
                style={{ color: COLORS.muted }}
              >
                Customer feedback placeholder
              </div>
              <blockquote className={`${body} italic`} style={{ color: COLORS.text }}>
                “{q}”
              </blockquote>
            </figure>
          ))}
        </div>
      </section>

      <Divider />

      {/* 9. FINAL CTA */}
      <section className={sectionWrap}>
        <h2 className={h2}>See why so many readers are trying this guide</h2>
        <p className={`${body} mt-6`}>
          If you want a simple, structured way to approach Scripture with more clarity and consistency, you can view the product details on the official store.
        </p>
        <div className="mt-8">
          <CTAButton>Visit the Official Product Page</CTAButton>
        </div>
      </section>

      {/* 10. DISCLAIMER */}
      <footer className={`${sectionWrap} pt-20 pb-10`}>
        <p
          className="font-sans text-xs text-center"
          style={{ color: COLORS.muted }}
        >
          This page is promotional content for the featured product.
        </p>
      </footer>

      {/* 11. STICKY MOBILE CTA */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t"
        style={{
          backgroundColor: COLORS.surface,
          borderColor: COLORS.border,
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        <div className="px-5 py-3">
          <CTAButton className="w-full">Visit the Official Product Page</CTAButton>
        </div>
      </div>
    </div>
  );
}
