import { useEffect } from "react";
import openerImage from "@/assets/v3-hero-0530.png?w=360;720;1280&quality=84&format=webp&as=img";
import journalHeldImage from "@/assets/ChatGPT Image 23 abr 2026, 05_13_58 a.m..png?w=360;720;1280&quality=82&format=webp&as=img";
import journalCoverImage from "@/assets/ChatGPT Image 23 abr 2026, 05_16_51 a.m..png?w=360;720;1280&quality=82&format=webp&as=img";

import { COLORS, SECTION_COMPACT, SECTION_STANDARD } from "@/lib/editorial-tokens";
import { useVoluumLandingPixel } from "@/lib/voluum";
import { PrimaryCTA, SoftCTA } from "@/components/editorial/OutboundCTA";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { H2, P } from "@/components/editorial/Typography";
import { StickyMobileCTA } from "@/components/editorial/StickyMobileCTA";
import { SponsoredDisclosure } from "@/components/editorial/SponsoredDisclosure";
import { useHeroOutOfView } from "@/hooks/use-hero-out-of-view";

// ============================================================
// /silent-struggle — "The Silent Struggle" (Taboola Angle 3).
// Confession → relief. First-person byline voice; peer, not
// advertiser. Primary placement: Fox News + faith network.
// Excludes Apple News (too confessional for curation).
// ============================================================

const Hero = ({ heroRef }: { heroRef: React.RefObject<HTMLElement> }) => (
  <section
    ref={heroRef}
    className="px-5 pt-8 pb-10 sm:px-6 sm:pt-10 sm:pb-12 md:pt-14 md:pb-14"
  >
    <div className="mx-auto max-w-[680px]">
      <div
        className="mb-4 text-[0.72rem] uppercase tracking-[0.2em] sm:mb-5"
        style={{ color: COLORS.muted }}
      >
        A letter from a reader
      </div>

      <p
        className="font-serif text-[1.5rem] leading-[1.35] sm:text-[1.7rem] md:text-[2rem] md:leading-[1.3]"
        style={{ color: COLORS.text }}
      >
        I grew up in church. I said the right things. I still closed my Bible
        more confused than when I opened it.
      </p>

      <EditorialImage
        image={openerImage}
        alt="A woman at a study desk with an open Bible, looking thoughtful."
        className="mt-6 sm:mt-7"
        imgClassName="aspect-video w-full object-cover"
        priority
      />

      <div className="mt-6 space-y-4 sm:mt-7 sm:space-y-5">
        <P>
          This is not the kind of thing most Christians say out loud. You
          learn early that you should already know this. You should already be
          applying it. You should already be feeling whatever you are supposed
          to feel when you read Romans or Leviticus.
        </P>
        <P>
          For years, I did not. And for years, I assumed that meant something
          was wrong with my faith.
        </P>
      </div>
    </div>
  </section>
);

const Universal = () => (
  <section className={SECTION_STANDARD}>
    <div className="mx-auto max-w-[680px] space-y-5 sm:space-y-6">
      <H2>I thought it was just me</H2>
      <P>
        It took me a long time to learn that the quiet version of that
        confession is everywhere. Research from Lifeway and Barna has found
        that most American Christians — including long-time churchgoers —
        read the Bible far less consistently than they want to. Many say
        plainly that they wish they read more.
      </P>
      <P>
        What surprised me was how rarely I heard any of this in church. In
        church, everyone seemed fluent. Outside of it, almost no one was.
      </P>
      <P>
        The gap is not a lack of belief. It is a reading problem — a book
        written across thousands of years, in genres we no longer read, to
        people we do not know, about events we were not part of. Without a
        frame, it is hard to keep your bearings.
      </P>

      <div className="pt-3 sm:pt-4">
        <PrimaryCTA>See the Journal</PrimaryCTA>
      </div>
    </div>
  </section>
);

const TheTurn = () => (
  <section className={SECTION_STANDARD}>
    <div className="mx-auto max-w-[680px] space-y-5 sm:space-y-6">
      <H2>Something finally clicked</H2>
      <P>
        The shift for me was accidental. I stopped trying to read the Bible
        like a textbook and started reading it the way you would read a long
        letter — one book at a time, with a little context about who wrote
        it, who they wrote it to, and why.
      </P>
      <P>
        The pages started to hold together. Not every verse turned into a
        lightning bolt. But the reading stopped feeling like I was lost in
        the middle of someone else's conversation.
      </P>
      <EditorialImage
        image={journalHeldImage}
        alt="Hands holding a Bible study guide journal on a quiet morning."
        className="mt-7 sm:mt-8"
      />
    </div>
  </section>
);

const ToolReveal = () => (
  <section className={SECTION_STANDARD}>
    <div className="mx-auto max-w-[680px] space-y-5 sm:space-y-6">
      <H2>The thing that finally helped</H2>
      <P>
        A few months into that slower approach, I picked up a simple
        one-page-per-book study guide journal. Sixty-six books of the Bible,
        sixty-six pages. Each page carried a short block of context, the key
        themes of the book, and a daily-life prompt.
      </P>
      <P>
        It was not a commentary. It was not another plan I was going to fall
        behind on. It was a small frame I could hold in my head — and that
        turned out to be what I had been missing for decades.
      </P>
      <EditorialImage
        image={journalCoverImage}
        alt="A Bible study guide journal photographed on linen fabric."
        className="mt-7 sm:mt-8"
      />
      <div className="pt-3 sm:pt-4">
        <SoftCTA>See what it looks like</SoftCTA>
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
      <H2>If the Bible has felt confusing, you are not alone</H2>
      <P>
        A quieter, more structured way of reading Scripture is not a failure
        of faith. For many of us, it is how faith actually became
        intelligible.
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
        This page is promotional content for the featured product. The reader
        letter reflects a common pattern, not a clinical claim about any
        individual.
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

const SilentStruggle = () => {
  const { heroRef, showSticky } = useHeroOutOfView();
  useVoluumLandingPixel("voluum-silent-struggle-landing");

  useEffect(() => {
    document.title = "A Quiet Confession Many Christians Share";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "If reading the Bible has left you more confused than when you started, you are not alone. A gentler, structured way to understand Scripture.",
      );
    }
  }, []);

  return (
    <main
      className="min-h-screen font-sans antialiased"
      style={{ background: COLORS.bg, color: COLORS.text }}
    >
      <SponsoredDisclosure label="Sponsored · A reader letter about understanding the Bible more simply." />
      <Hero heroRef={heroRef} />
      <Universal />
      <TheTurn />
      <ToolReveal />
      <Close />
      <Disclaimer />
      <StickyMobileCTA visible={showSticky} label="See the Journal" />
    </main>
  );
};

export default SilentStruggle;
