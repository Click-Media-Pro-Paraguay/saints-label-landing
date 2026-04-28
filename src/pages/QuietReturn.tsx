import { useEffect } from "react";
import heroImage from "@/assets/ChatGPT Image 23 abr 2026, 05_13_58 a.m..png?w=360;720;1280&quality=84&format=webp&as=img";
import whyContextImage from "@/assets/v3-why-context.png?w=360;720;1280&quality=82&format=webp&as=img";
import whatItIncludesImage from "@/assets/ChatGPT Image 23 abr 2026, 06_38_01 a.m..png?w=360;720;1280&quality=82&format=webp&as=img";

import { COLORS, SECTION_COMPACT, SECTION_STANDARD } from "@/lib/editorial-tokens";
import { useVoluumLandingPixel } from "@/lib/voluum";
import { PrimaryCTA, SoftCTA } from "@/components/editorial/OutboundCTA";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { H2, P } from "@/components/editorial/Typography";
import { StickyMobileCTA } from "@/components/editorial/StickyMobileCTA";
import { SponsoredDisclosure } from "@/components/editorial/SponsoredDisclosure";
import { useHeroOutOfView } from "@/hooks/use-hero-out-of-view";

// ============================================================
// /quiet-return — "The Quiet Return" (Taboola Angle 1).
// Movable Middle, apolitical, trend-report framing.
// AIDA with discovery-story opener. Primary placements:
// MSN.com carousel, Apple News Select, CNN mobile.
// ============================================================

const Hero = ({ heroRef }: { heroRef: React.RefObject<HTMLElement> }) => (
  <section
    ref={heroRef}
    className="px-5 pt-8 pb-10 sm:px-6 sm:pt-10 sm:pb-12 md:pt-14 md:pb-14"
  >
    <div className="mx-auto max-w-[680px]">
      <div
        className="mb-3 text-[0.7rem] uppercase tracking-[0.22em] sm:mb-4"
        style={{ color: COLORS.muted }}
      >
        2025 Report
      </div>

      <h1
        className="font-serif text-[2rem] leading-[1.1] sm:text-[2.25rem] md:text-[2.75rem] md:leading-[1.15]"
        style={{ color: COLORS.text }}
      >
        Something quiet happened this year. People came back to their Bibles.
      </h1>

      <EditorialImage
        image={heroImage}
        alt="Hands holding a small Bible study journal on a kitchen table in late afternoon light."
        className="mt-5 sm:mt-6"
        imgClassName="aspect-video w-full object-cover"
        priority
      />

      <p
        className="mt-5 max-w-[34rem] font-serif text-[1.08rem] italic leading-[1.55] sm:text-[1.15rem] md:mt-6 md:text-[1.3rem] md:leading-[1.6]"
        style={{ color: COLORS.muted }}
      >
        After years of steady decline, Bible reading rebounded across the
        United States in 2025. The people coming back are not who you might
        expect — and neither is the method most of them describe.
      </p>

      <div className="mt-8 sm:mt-9 md:mt-10">
        <SoftCTA>Continue reading</SoftCTA>
      </div>
    </div>
  </section>
);

const TheData = () => (
  <section className={SECTION_STANDARD}>
    <div className="mx-auto max-w-[680px] space-y-5 sm:space-y-6">
      <H2>The numbers nobody is talking about</H2>
      <P>
        According to the American Bible Society's 2025 State of the Bible
        report, the share of U.S. adults who read the Bible at least weekly
        climbed back to 41 percent. Barna Group's 2025 tracking put the same
        figure even higher — 42 percent — and reported the first
        double-digit uptick in more than a decade.
      </P>
      <P>
        The growth did not come from where most observers expected. Barna's
        data showed the biggest jumps among millennials and Gen Z, with
        weekly Bible reading rising sharply in both groups. Roughly nine
        million more Americans told researchers they were curious about
        Scripture than the year before.
      </P>
      <EditorialImage
        image={whyContextImage}
        alt="Clarity, structure, and consistency: how context changes the way Scripture reads."
        className="mt-7 sm:mt-8"
        imgClassName="h-auto w-full object-contain"
        unframed
      />
      <div className="pt-2 sm:pt-3">
        <PrimaryCTA>See the Journal</PrimaryCTA>
      </div>
    </div>
  </section>
);

const WhyItWorked = () => (
  <section className={SECTION_STANDARD}>
    <div className="mx-auto max-w-[680px] space-y-5 sm:space-y-6">
      <H2>What actually changed</H2>
      <P>
        Lifeway's research identified a small set of reasons Americans say
        they don't read the Bible more: they don't prioritize it, they feel
        short on time, they find it intimidating in size, and they don't
        always see how it relates to their daily life.
      </P>
      <P>
        The readers who have come back this year tend to describe an answer
        that is almost boringly practical. Not more willpower. Not a louder
        devotional. A smaller, more structured approach — something short
        enough to fit into a real morning, with enough context to make each
        book of the Bible feel legible instead of vast.
      </P>
      <P>
        A one-page overview for every book of the Bible is one version of
        that answer. Sixty-six books, sixty-six pages: a fixed, finishable
        frame that answers the size objection, the time objection, and the
        relevance objection in a single structural move.
      </P>
      <EditorialImage
        image={whatItIncludesImage}
        alt="What the one-page method includes: context, key themes, and a daily-life application for every book of the Bible."
        className="mt-7 sm:mt-8"
        imgClassName="w-full object-contain"
      />
    </div>
  </section>
);

const Close = () => (
  <section className="px-5 pt-4 pb-14 sm:px-6 sm:pt-6 sm:pb-16 md:pt-8 md:pb-20">
    <div
      className="mx-auto max-w-[680px] space-y-5 rounded-sm border px-5 py-8 text-center sm:space-y-6 sm:px-8 sm:py-10"
      style={{ borderColor: COLORS.softBorder, background: COLORS.surface }}
    >
      <H2>A quieter way back into Scripture</H2>
      <P>
        For readers who have wanted to return to the Bible but never quite
        knew how to start, a small structured guide can be a gentle opening.
        Not a system. Just a frame.
      </P>
      <div className="pt-2 sm:pt-3 md:pt-4">
        <PrimaryCTA>See the Journal</PrimaryCTA>
      </div>
    </div>
  </section>
);

const Disclaimer = () => (
  <footer
    className={`${SECTION_COMPACT} pb-24 md:pb-14`}
    style={{ borderTop: `1px solid ${COLORS.hairline}` }}
  >
    <div className="mx-auto max-w-[680px] text-center">
      <p className="text-[0.85rem]" style={{ color: COLORS.muted }}>
        This page is promotional content for the featured product. Statistics
        cited are from the American Bible Society's State of the Bible 2025
        and Barna Group's 2025 Bible reading tracking.
      </p>
      <p className="mt-3 text-[0.8rem]" style={{ color: COLORS.muted }}>
        <a href="https://saintslabel.com/pages/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline">Privacy Policy</a>
        {" · "}
        <a href="https://saintslabel.com/pages/terms-of-service" target="_blank" rel="noopener noreferrer" className="underline">Terms of Service</a>
        {" · "}
        <a href="https://saintslabel.com/pages/refund-policy" target="_blank" rel="noopener noreferrer" className="underline">Refund Policy</a>
        {" · "}
        <a href="https://saintslabel.com/pages/shipping" target="_blank" rel="noopener noreferrer" className="underline">Shipping Policy</a>
        {" · "}
        <a href="https://saintslabel.com/pages/contact" target="_blank" rel="noopener noreferrer" className="underline">Contact</a>
      </p>
    </div>
  </footer>
);

const QuietReturn = () => {
  const { heroRef, showSticky } = useHeroOutOfView();
  useVoluumLandingPixel("voluum-quiet-return-landing");

  useEffect(() => {
    document.title = "The Quiet Bible Comeback Nobody Is Talking About";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Bible reading rebounded in 2025 after years of decline. A look at who came back, why — and the simple one-page-per-book method quietly behind it.",
      );
    }
  }, []);

  return (
    <main
      className="min-h-screen font-sans antialiased"
      style={{ background: COLORS.bg, color: COLORS.text }}
    >
      <SponsoredDisclosure label="Sponsored · A 2025 report on the quiet return of Bible reading in America." />
      <Hero heroRef={heroRef} />
      <TheData />
      <WhyItWorked />
      <Close />
      <Disclaimer />
      <StickyMobileCTA visible={showSticky} label="See the Journal" />
    </main>
  );
};

export default QuietReturn;
