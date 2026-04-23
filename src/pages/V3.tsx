import { useEffect, useRef, useState } from "react";
import { buildOutboundUrl } from "@/lib/outbound";

// ============================================================
// /v3 — Editorial Advertorial Variation
// Slow-burn, problem-first narrative for native (Taboola) traffic.
// Single outbound CTA. No checkout, no nav, no extra pages.
// ============================================================

const COLORS = {
  bg: "#F8F2E7",
  surface: "#FCF7EC",
  text: "#1C1915",
  muted: "#6E6356",
  ctaBg: "#26211B",
  ctaText: "#FBF6EB",
  hairline: "#E5DCC9",
  softBorder: "#D9CFBD",
};

// ------------------------------------------------------------
// Outbound click handler — single source of truth for all
// primary CTAs on this page. Replace OUTBOUND_URL in
// src/lib/outbound.ts with your Voluum click URL.
// ------------------------------------------------------------
function handleOutboundClick(e: React.MouseEvent) {
  e.preventDefault();
  // ============================================================
  // TODO: Paste outbound click event scripts below
  // (e.g. window._tfa?.push({ notify: 'event', name: 'click_out' });
  //       window.dataLayer?.push({ event: 'cta_click' });)
  // ============================================================

  const url = buildOutboundUrl();
  window.location.href = url;
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ------------------------------------------------------------
// Reusable building blocks
// ------------------------------------------------------------
const PrimaryCTA = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    data-cta="primary-outbound"
    onClick={handleOutboundClick}
    className="inline-flex items-center justify-center rounded-sm px-7 py-4 text-[0.95rem] font-medium tracking-wide transition-opacity hover:opacity-90"
    style={{ background: COLORS.ctaBg, color: COLORS.ctaText }}
  >
    {children}
  </button>
);

const SoftCTA = ({
  children,
  targetId,
}: {
  children: React.ReactNode;
  targetId: string;
}) => (
  <button
    type="button"
    onClick={() => scrollToId(targetId)}
    className="inline-flex items-center justify-center rounded-sm border bg-transparent px-6 py-3 text-[0.9rem] font-medium tracking-wide transition-colors hover:bg-[#F1E9D6]"
    style={{ borderColor: COLORS.softBorder, color: COLORS.text }}
  >
    {children}
  </button>
);

const ImagePlaceholder = ({ label }: { label: string }) => (
  <div
    className="my-8 flex aspect-[4/3] w-full items-center justify-center rounded-sm border border-dashed px-6 text-center"
    style={{
      background: COLORS.surface,
      borderColor: COLORS.softBorder,
      color: COLORS.muted,
    }}
  >
    <span className="font-serif text-sm italic">{label}</span>
  </div>
);

const SectionDivider = () => (
  <div
    className="mx-auto my-2 h-px w-full max-w-[680px]"
    style={{ background: COLORS.hairline }}
  />
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2
    className="font-serif text-[1.75rem] leading-tight md:text-[2rem]"
    style={{ color: COLORS.text }}
  >
    {children}
  </h2>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p
    className="text-[1.05rem] leading-[1.85] md:text-[1.1rem]"
    style={{ color: COLORS.text }}
  >
    {children}
  </p>
);

// ------------------------------------------------------------
// Page sections
// ------------------------------------------------------------
const TopBar = () => (
  <div
    className="w-full border-b"
    style={{ borderColor: COLORS.hairline, background: COLORS.bg }}
  >
    <div className="mx-auto max-w-[680px] px-6 py-3 text-center">
      <span
        className="text-[0.7rem] uppercase tracking-[0.2em]"
        style={{ color: COLORS.muted }}
      >
        Advertisement
      </span>
    </div>
  </div>
);

const Hero = ({ heroRef }: { heroRef: React.RefObject<HTMLElement> }) => (
  <section ref={heroRef} className="px-6 pt-14 pb-10 md:pt-20 md:pb-14">
    <div className="mx-auto max-w-[680px]">
      <h1
        className="font-serif text-[2.25rem] leading-[1.15] md:text-[3rem]"
        style={{ color: COLORS.text }}
      >
        Why Reading the Bible Often Feels Harder Than People Admit
      </h1>
      <p
        className="mt-6 font-serif text-[1.2rem] italic leading-[1.6] md:text-[1.35rem]"
        style={{ color: COLORS.muted }}
      >
        For many believers, the issue is not lack of faith or desire — it is
        the feeling of trying to understand something deep and important
        without enough structure, context, or clarity.
      </p>

      <div className="mt-10 space-y-6">
        <P>
          Many believers genuinely want to spend more time in Scripture. They
          want to understand it better, reflect more deeply, and stay
          consistent. But good intentions often run into a quieter problem
          that people do not always talk about: reading the Bible can feel
          mentally overwhelming, especially when the bigger picture feels
          hard to follow.
        </P>
        <P>
          Sometimes the challenge is not motivation. Sometimes it is sitting
          down to read and realizing you are not fully sure how the books
          connect, why certain passages matter in context, or how to move
          through Scripture in a more grounded and consistent way.
        </P>
      </div>

      <div className="mt-10">
        <SoftCTA targetId="hidden-friction">Learn More</SoftCTA>
      </div>

      <ImagePlaceholder label="Hero image placeholder – thoughtful believer reading" />
    </div>
  </section>
);

const HiddenFriction = () => (
  <section id="hidden-friction" className="px-6 py-16 md:py-24">
    <div className="mx-auto max-w-[680px] space-y-6">
      <H2>The struggle is often not what people think</H2>
      <P>
        For many Christians, inconsistency in Bible study is often blamed on
        busyness, distraction, or lack of discipline. And while those can be
        real factors, they are not always the whole story.
      </P>
      <P>
        Often, the deeper friction is cognitive. Scripture is rich, layered,
        and meaningful — but that can also make it hard to approach when
        someone wants both understanding and consistency. When context feels
        unclear, even sincere readers can begin to feel stuck, discouraged,
        or mentally overloaded.
      </P>
      <ImagePlaceholder label="Image placeholder – Bible study desk scene" />
    </div>
  </section>
);

const WhyContext = () => (
  <section className="px-6 py-16 md:py-24">
    <div className="mx-auto max-w-[680px] space-y-6">
      <H2>Why context changes the experience of reading Scripture</H2>
      <P>
        When readers understand the purpose, themes, background, and place of
        a book within the broader story of the Bible, everything can start to
        feel more connected. What once felt scattered may begin to feel more
        coherent.
      </P>
      <P>
        That does not mean Bible study becomes simplistic. It just means the
        reader has more structure to work with. And for many people,
        structure makes it easier to keep showing up.
      </P>

      <div
        className="mt-10 grid grid-cols-1 gap-8 border-t pt-10 md:grid-cols-3 md:gap-10"
        style={{ borderColor: COLORS.hairline }}
      >
        {[
          { label: "Clarity", desc: "understanding the larger picture" },
          {
            label: "Structure",
            desc: "approaching each book in a repeatable way",
          },
          {
            label: "Consistency",
            desc: "reducing the feeling of overwhelm",
          },
        ].map((item) => (
          <div key={item.label} className="space-y-2">
            <div
              className="font-serif text-[1.25rem] font-semibold"
              style={{ color: COLORS.text }}
            >
              {item.label}
            </div>
            <div
              className="text-[0.98rem] leading-[1.7]"
              style={{ color: COLORS.muted }}
            >
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhatOthersDo = () => (
  <section className="px-6 py-16 md:py-24">
    <div className="mx-auto max-w-[680px] space-y-6">
      <H2>Why some believers are turning to simpler study tools</H2>
      <P>
        Not everyone wants an elaborate system. In fact, many readers are
        looking for the opposite: something simple enough to use regularly,
        but thoughtful enough to support real reflection.
      </P>
      <P>
        That is part of why compact Bible study companions and guided
        Scripture tools have become more appealing. They can help reduce
        friction, create structure, and make personal study feel more
        approachable without trying to replace deeper learning.
      </P>
      <div className="pt-4">
        <SoftCTA targetId="soft-reveal">See One Example</SoftCTA>
      </div>
    </div>
  </section>
);

const SoftReveal = () => (
  <section id="soft-reveal" className="px-6 py-16 md:py-24">
    <div className="mx-auto max-w-[680px] space-y-6">
      <H2>One example is this Bible Study Guide Journal</H2>
      <P>
        One example is a 66-page Bible Study Guide Journal designed to give
        readers a simple overview of every book of the Bible in one
        structured format.
      </P>
      <P>
        Rather than trying to do everything at once, the guide focuses on
        practical clarity: giving readers a repeatable way to think about
        context, themes, and reflection as they move through Scripture.
      </P>
      <P>
        This kind of tool may appeal especially to people who want something
        physical, simple, and easy to return to during personal study time.
      </P>
      <ImagePlaceholder label="Image placeholder – hands holding guide" />
      <ImagePlaceholder label="Image placeholder – journal cover close-up" />
    </div>
  </section>
);

const WhatItIncludes = () => (
  <section className="px-6 py-16 md:py-24">
    <div className="mx-auto max-w-[680px] space-y-6">
      <H2>What this guide is designed to help with</H2>
      <ul
        className="list-disc space-y-3 pl-6 text-[1.05rem] leading-[1.8] md:text-[1.1rem]"
        style={{ color: COLORS.text }}
      >
        <li>One page for every book of the Bible</li>
        <li>A more structured way to move through Scripture</li>
        <li>Space for reflection and practical understanding</li>
        <li>A simpler companion for personal Bible study</li>
        <li>
          A format that may feel less overwhelming than scattered notes or
          disconnected references
        </li>
      </ul>
      <P>
        It is not trying to be everything. Its appeal is in being simple,
        structured, and easy to use.
      </P>
      <ImagePlaceholder label="Image placeholder – journal interior close-up" />
      <ImagePlaceholder label="Image placeholder – inside pages placeholder" />
    </div>
  </section>
);

const WhoFor = () => (
  <section className="px-6 py-16 md:py-24">
    <div className="mx-auto max-w-[680px] space-y-6">
      <H2>Who this may resonate with</H2>
      <ul
        className="list-disc space-y-3 pl-6 text-[1.05rem] leading-[1.8] md:text-[1.1rem]"
        style={{ color: COLORS.text }}
      >
        <li>Believers who want more structure in their study routine</li>
        <li>Readers who want a simpler way to stay consistent</li>
        <li>People returning to Scripture after feeling disconnected</li>
        <li>Gift buyers looking for something practical and faith-centered</li>
      </ul>
    </div>
  </section>
);

const HonestFraming = () => (
  <section className="px-6 py-16 md:py-24">
    <div className="mx-auto max-w-[680px] space-y-6">
      <H2>What it is — and what it is not</H2>
      <P>
        This kind of guide is not meant to replace a full study Bible,
        commentary library, or pastoral teaching. It is better understood as
        a simple companion resource — something that helps reduce friction
        and gives readers a more guided starting point.
      </P>
      <P>For the right person, that simplicity may be exactly the point.</P>
    </div>
  </section>
);

const Testimonials = () => {
  const items = [
    {
      label: "Customer feedback placeholder",
      quote:
        "Placeholder quote about how a simpler, structured approach made personal Bible reading feel more approachable.",
    },
    {
      label: "Reader impression placeholder",
      quote:
        "Placeholder quote describing what it felt like to move through Scripture with more clarity and context.",
    },
    {
      label: "Gift buyer feedback placeholder",
      quote:
        "Placeholder quote from someone who chose this as a thoughtful, faith-centered gift for a loved one.",
    },
  ];
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[680px] space-y-10">
        <H2>What readers are saying</H2>
        {items.map((t) => (
          <figure
            key={t.label}
            className="border-l pl-6"
            style={{ borderColor: COLORS.softBorder }}
          >
            <div
              className="mb-2 text-[0.7rem] uppercase tracking-[0.18em]"
              style={{ color: COLORS.muted }}
            >
              {t.label}
            </div>
            <blockquote
              className="font-serif text-[1.1rem] italic leading-[1.75]"
              style={{ color: COLORS.text }}
            >
              “{t.quote}”
            </blockquote>
          </figure>
        ))}
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="px-6 py-16 md:py-24">
    <div className="mx-auto max-w-[680px] space-y-6 text-center">
      <H2>A simpler approach can sometimes make consistency easier</H2>
      <P>
        For readers who want a more structured and approachable way to move
        through Scripture, tools like this may be worth exploring further.
      </P>
      <div className="pt-4">
        <PrimaryCTA>View the Full Details</PrimaryCTA>
      </div>
    </div>
  </section>
);

const Disclaimer = () => (
  <footer
    className="px-6 pb-28 pt-10 md:pb-14"
    style={{ borderTop: `1px solid ${COLORS.hairline}` }}
  >
    <div className="mx-auto max-w-[680px] text-center">
      <p className="text-[0.85rem]" style={{ color: COLORS.muted }}>
        This page is promotional content for the featured product.
      </p>
    </div>
  </footer>
);

const StickyMobileCTA = ({ visible }: { visible: boolean }) => (
  <div
    className={`fixed inset-x-0 bottom-0 z-50 border-t px-4 py-3 transition-transform duration-300 md:hidden ${
      visible ? "translate-y-0" : "translate-y-full"
    }`}
    style={{ background: COLORS.bg, borderColor: COLORS.hairline }}
  >
    <button
      type="button"
      data-cta="primary-outbound"
      onClick={handleOutboundClick}
      className="w-full rounded-sm py-3.5 text-[0.95rem] font-medium tracking-wide"
      style={{ background: COLORS.ctaBg, color: COLORS.ctaText }}
    >
      View the Full Details
    </button>
  </div>
);

// ------------------------------------------------------------
// Page
// ------------------------------------------------------------
const V3 = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    document.title =
      "Why Reading the Bible Often Feels Harder Than People Admit";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Many believers want to read Scripture more consistently — the real obstacle is often overwhelm and lack of context. A simpler approach can help.",
      );
    }
  }, []);

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

  return (
    <main
      className="min-h-screen font-sans antialiased"
      style={{ background: COLORS.bg, color: COLORS.text }}
    >
      <TopBar />
      <Hero heroRef={heroRef} />
      <SectionDivider />
      <HiddenFriction />
      <SectionDivider />
      <WhyContext />
      <SectionDivider />
      <WhatOthersDo />
      <SectionDivider />
      <SoftReveal />
      <SectionDivider />
      <WhatItIncludes />
      <SectionDivider />
      <WhoFor />
      <SectionDivider />
      <HonestFraming />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <FinalCTA />
      <Disclaimer />
      <StickyMobileCTA visible={showSticky} />
    </main>
  );
};

export default V3;
