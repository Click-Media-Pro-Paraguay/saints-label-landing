import { useEffect } from "react";
import heroImage from "@/assets/ChatGPT Image 23 abr 2026, 05_32_29 a.m..png?w=360;720;1280&quality=84&format=webp&as=img";
import structureImage from "@/assets/ChatGPT Image 23 abr 2026, 06_38_01 a.m..png?w=360;720;1280&quality=82&format=webp&as=img";
import detailImage from "@/assets/ChatGPT Image 23 abr 2026, 05_27_08 a.m..png?w=360;720;1280&quality=82&format=webp&as=img";

import { COLORS, SECTION_COMPACT, SECTION_STANDARD } from "@/lib/editorial-tokens";
import { useVoluumLandingPixel } from "@/lib/voluum";
import { PrimaryCTA, SoftCTA } from "@/components/editorial/OutboundCTA";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { H2, P } from "@/components/editorial/Typography";
import { StickyMobileCTA } from "@/components/editorial/StickyMobileCTA";
import { SponsoredDisclosure } from "@/components/editorial/SponsoredDisclosure";
import { useHeroOutOfView } from "@/hooks/use-hero-out-of-view";

// ============================================================
// /method — "The 66-Page Method" (Taboola Angle 2).
// Simplicity / how-to workhorse. Hybrid PAS → AIDA arc.
// Primary placements: MSN.com, Fox News Lifestyle.
// ============================================================

const Hero = ({ heroRef }: { heroRef: React.RefObject<HTMLElement> }) => (
  <section
    ref={heroRef}
    className="px-5 pt-8 pb-10 sm:px-6 sm:pt-10 sm:pb-12 md:pt-14 md:pb-14"
  >
    <div className="mx-auto max-w-[680px]">
      <h1
        className="font-serif text-[2rem] leading-[1.1] sm:text-[2.25rem] md:text-[2.75rem] md:leading-[1.15]"
        style={{ color: COLORS.text }}
      >
        66 books of the Bible. 66 pages. One simple method.
      </h1>
      <EditorialImage
        image={heroImage}
        alt="Overhead view of an open Bible study guide journal across two pages."
        className="mt-5 sm:mt-6"
        imgClassName="aspect-video w-full object-cover"
        priority
      />
      <p
        className="mt-5 max-w-[34rem] font-serif text-[1.08rem] italic leading-[1.55] sm:text-[1.15rem] md:mt-6 md:text-[1.3rem] md:leading-[1.6]"
        style={{ color: COLORS.muted }}
      >
        Most reading plans collapse inside a month. Readers who follow a
        structured plan are dramatically more likely to actually finish —
        sometimes the fix is not more discipline, but a smaller structure.
      </p>
      <div className="mt-8 sm:mt-9 md:mt-10">
        <PrimaryCTA>See the Journal</PrimaryCTA>
      </div>
    </div>
  </section>
);

const WhatsOnAPage = () => (
  <section className={SECTION_STANDARD}>
    <div className="mx-auto max-w-[680px] space-y-5 sm:space-y-6">
      <H2>What a single page contains</H2>
      <P>
        The method is not a devotional. It is a one-page overview for every
        book of the Bible — designed so a reader can approach any book with
        enough scaffolding to understand what they are reading, without getting
        buried in commentary.
      </P>
      <P>
        Each page holds three things: a short block of context, the key themes
        of the book, and a daily-life application prompt. Nothing else. No
        trivia, no footnotes, no filler.
      </P>
      <EditorialImage
        image={structureImage}
        alt="A single page overview: context, key themes, and a daily application prompt for each book of the Bible."
        className="mt-7 sm:mt-8"
        imgClassName="w-full object-contain"
        unframed
      />
    </div>
  </section>
);

const TheMath = () => (
  <section className={SECTION_STANDARD}>
    <div className="mx-auto max-w-[680px] space-y-6 sm:space-y-7">
      <H2>Ten minutes a day — or a book a week</H2>
      <P>
        Sixty-six books. Sixty-six pages. Readers who use it daily often
        finish in roughly two months; others move at a page a week and finish
        in a year. Both work. The point is that it fits a real life.
      </P>

      <div className="space-y-6 pt-2 sm:space-y-7">
        <div>
          <h3
            className="font-serif text-[1.15rem] leading-[1.3] sm:text-[1.2rem] md:text-[1.3rem]"
            style={{ color: COLORS.text }}
          >
            Context without commentary
          </h3>
          <P>
            Each page gives readers the historical and narrative frame of the
            book in a few clear lines — not a seminary lecture, not an
            opinion. Enough to read with confidence.
          </P>
        </div>

        <div>
          <h3
            className="font-serif text-[1.15rem] leading-[1.3] sm:text-[1.2rem] md:text-[1.3rem]"
            style={{ color: COLORS.text }}
          >
            Themes without jargon
          </h3>
          <P>
            The recurring ideas of each book are surfaced in plain language so
            a reader can notice the same thread appearing across chapters
            instead of losing the thread entirely.
          </P>
        </div>

        <div>
          <h3
            className="font-serif text-[1.15rem] leading-[1.3] sm:text-[1.2rem] md:text-[1.3rem]"
            style={{ color: COLORS.text }}
          >
            Application without homework
          </h3>
          <P>
            A single reflection prompt turns reading into something to sit
            with for the rest of the day. Nothing to hand in, nothing to
            finish.
          </P>
        </div>
      </div>

      <EditorialImage
        image={detailImage}
        alt="A close-up of the inside pages of a Bible study guide journal with a pen."
        className="mt-8 sm:mt-9"
      />

      <div className="pt-2 sm:pt-3">
        <SoftCTA>See what a page looks like</SoftCTA>
      </div>
    </div>
  </section>
);

const Close = () => (
  <section className="px-5 pt-4 pb-14 sm:px-6 sm:pt-6 sm:pb-16 md:pt-8 md:pb-20">
    <div
      className="mx-auto max-w-[680px] space-y-5 rounded-sm border px-5 py-8 text-center sm:space-y-6 sm:px-8 sm:py-10"
      style={{ borderColor: COLORS.softBorder, background: COLORS.surface }}
    >
      <H2>A smaller plan, made to be finished</H2>
      <P>
        Not every reader needs a bigger system. Sometimes a simpler structure
        — one page per book — is what finally makes Scripture feel
        approachable again.
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
        This page is promotional content for the featured product.
      </p>
    </div>
  </footer>
);

const MethodPage = () => {
  const { heroRef, showSticky } = useHeroOutOfView();
  useVoluumLandingPixel("voluum-method-landing");

  useEffect(() => {
    document.title =
      "How to Read Every Book of the Bible — One Page Per Book";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "The simple 66-page method: context, themes, and a daily-life prompt on one page for every book of the Bible. Designed for real schedules.",
      );
    }
  }, []);

  return (
    <main
      className="min-h-screen font-sans antialiased"
      style={{ background: COLORS.bg, color: COLORS.text }}
    >
      <SponsoredDisclosure />
      <Hero heroRef={heroRef} />
      <WhatsOnAPage />
      <TheMath />
      <Close />
      <Disclaimer />
      <StickyMobileCTA visible={showSticky} label="See the Journal" />
    </main>
  );
};

export default MethodPage;
