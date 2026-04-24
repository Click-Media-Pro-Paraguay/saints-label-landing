import { useEffect } from "react";
import heroImage from "@/assets/ChatGPT Image 23 abr 2026, 05_10_46 a.m..png?w=360;720;1280&quality=84&format=webp&as=img";
import journalHeldImage from "@/assets/ChatGPT Image 23 abr 2026, 05_13_58 a.m..png?w=360;720;1280&quality=82&format=webp&as=img";
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
// /small-group-favorite — Taboola Angle 5 (fallback framing
// per plan §14: no verified pastor quotes on file, so the
// "pastor-recommended" angle is reframed around small-group
// leaders and readers. Compliance-safer: no fabricated clergy
// attribution; Outbrain/Taboola both prohibit unverifiable
// authority claims).
// Authority + curiosity; AIDA with counterintuitive opener.
// Primary placements: Fox News, MSN, faith publishers.
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
        The Bible habit small-group readers keep quietly passing around.
      </h1>

      <EditorialImage
        image={heroImage}
        alt="An overhead view of an open Bible on a table with a journal, coffee, and a pen."
        className="mt-5 sm:mt-6"
        imgClassName="aspect-video w-full object-cover"
        priority
      />

      <p
        className="mt-5 max-w-[34rem] font-serif text-[1.08rem] italic leading-[1.55] sm:text-[1.15rem] md:mt-6 md:text-[1.3rem] md:leading-[1.6]"
        style={{ color: COLORS.muted }}
      >
        The most durable Bible-study habits in small groups lately are not
        bigger systems. They are smaller ones — a one-page-per-book frame
        that keeps everybody reading the same way.
      </p>

      <div className="mt-8 sm:mt-9 md:mt-10">
        <PrimaryCTA>See the Journal</PrimaryCTA>
      </div>
    </div>
  </section>
);

const Mechanism = () => (
  <section className={SECTION_STANDARD}>
    <div className="mx-auto max-w-[680px] space-y-5 sm:space-y-6">
      <H2>Why one page per book produces clarity</H2>
      <P>
        Most Bible-study plans fail the same way. They either assume you
        already know the shape of a book before you start reading it, or
        they bury you in commentary until you forget what you came for.
      </P>
      <P>
        A one-page-per-book journal takes the opposite approach. Each page
        has three short sections — context, key themes, a daily-life
        application prompt — and nothing else. That constraint forces the
        reader to actually hold the shape of the book in their head instead
        of drowning in footnotes.
      </P>
      <P>
        Sixty-six books, sixty-six pages. No filler. No pressure to keep up
        with a reading plan you were destined to fall behind on.
      </P>
      <EditorialImage
        image={whatItIncludesImage}
        alt="What each page contains: a short block of context, the key themes of the book, and a daily-life application."
        className="mt-7 sm:mt-8"
        imgClassName="w-full object-contain"
      />
    </div>
  </section>
);

const HowGroupsUseIt = () => (
  <section className={SECTION_STANDARD}>
    <div className="mx-auto max-w-[680px] space-y-5 sm:space-y-6">
      <H2>How small groups and individual readers use it</H2>
      <P>
        In small groups, the format gives everybody the same starting block.
        A leader can ask the group to read a single book and its companion
        page during the week, and the discussion that follows starts from a
        shared frame rather than from whoever happens to have already
        studied that book.
      </P>
      <P>
        For individual readers, the pace is entirely up to them. A page a
        day finishes the whole Bible in roughly two months. A page a week
        makes it a year-long project. Either way, a reader always knows
        where they are.
      </P>
      <EditorialImage
        image={journalHeldImage}
        alt="Hands holding a Bible study journal."
        className="mt-7 sm:mt-8"
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
      <H2>A simpler Bible study that actually gets used</H2>
      <P>
        The best studies are not the most elaborate ones. They are the ones
        people finish — and come back to.
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

const SmallGroupFavorite = () => {
  const { heroRef, showSticky } = useHeroOutOfView();
  useVoluumLandingPixel("voluum-small-group-favorite-landing");

  useEffect(() => {
    document.title =
      "The Bible Habit Small-Group Readers Keep Quietly Passing Around";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "A one-page-per-book Bible study journal that small groups and readers quietly use. Context, key themes, and daily-life prompts for every book of the Bible.",
      );
    }
  }, []);

  return (
    <main
      className="min-h-screen font-sans antialiased"
      style={{ background: COLORS.bg, color: COLORS.text }}
    >
      <SponsoredDisclosure label="Sponsored · A note on the one-page-per-book Bible study small groups have quietly been using." />
      <Hero heroRef={heroRef} />
      <Mechanism />
      <HowGroupsUseIt />
      <Close />
      <Disclaimer />
      <StickyMobileCTA visible={showSticky} label="See the Journal" />
    </main>
  );
};

export default SmallGroupFavorite;
