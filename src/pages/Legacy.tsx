import { useEffect } from "react";
import writingImage from "@/assets/ChatGPT Image 23 abr 2026, 05_27_08 a.m..png?w=360;720;1280&quality=84&format=webp&as=img";
import journalCoverImage from "@/assets/ChatGPT Image 23 abr 2026, 05_16_51 a.m..png?w=360;720;1280&quality=82&format=webp&as=img";
import journalHeldImage from "@/assets/ChatGPT Image 23 abr 2026, 05_13_58 a.m..png?w=360;720;1280&quality=82&format=webp&as=img";

import { COLORS, SECTION_COMPACT, SECTION_STANDARD } from "@/lib/editorial-tokens";
import { useVoluumLandingPixel } from "@/lib/voluum";
import { PrimaryCTA, SoftCTA } from "@/components/editorial/OutboundCTA";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { H2, P } from "@/components/editorial/Typography";
import { StickyMobileCTA } from "@/components/editorial/StickyMobileCTA";
import { SponsoredDisclosure } from "@/components/editorial/SponsoredDisclosure";
import { useHeroOutOfView } from "@/hooks/use-hero-out-of-view";

// ============================================================
// /legacy — "The Grandparent's Legacy" (Taboola Angle 4).
// Inheritance / nostalgia / purpose. AIDA with quiet-observation
// opener. Primary placements: Apple News, Fox News, MSN.
// Photography: AI-generated; per plan §14 resolved decision.
// Targeting note: do NOT target on age at the adset level
// (Taboola sensitive-attribute rule); let the creative self-select.
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
        The inheritance most Christian grandparents never think to leave.
      </h1>

      <EditorialImage
        image={writingImage}
        alt="Older hands writing on a single page of a Bible study journal, wedding ring visible."
        className="mt-5 sm:mt-6"
        imgClassName="aspect-video w-full object-cover"
        priority
      />

      <p
        className="mt-5 max-w-[34rem] font-serif text-[1.08rem] italic leading-[1.55] sm:text-[1.15rem] md:mt-6 md:text-[1.3rem] md:leading-[1.6]"
        style={{ color: COLORS.muted }}
      >
        We leave photographs. We leave money. We rarely leave the simpler
        thing grandchildren end up asking for later — a written record of
        what you believed, in your own hand.
      </p>

      <div className="mt-8 sm:mt-9 md:mt-10">
        <PrimaryCTA>See the Journal</PrimaryCTA>
      </div>
    </div>
  </section>
);

const WhatItContains = () => (
  <section className={SECTION_STANDARD}>
    <div className="mx-auto max-w-[680px] space-y-5 sm:space-y-6">
      <H2>A written record outlives a sermon</H2>
      <P>
        Sermons are remembered in fragments. A letter is remembered in full.
        A single-page record of what a grandparent saw in each book of the
        Bible — written slowly over a year, in the margins of a journal — is
        a different kind of inheritance. Not an argument. A voice.
      </P>
      <P>
        The journaling method that makes this possible is simpler than it
        sounds. Sixty-six books, sixty-six pages. Each page holds a little
        context, the themes that matter most, and a few lines of your own.
        That is the whole structure.
      </P>
      <EditorialImage
        image={journalCoverImage}
        alt="A Bible study guide journal resting on linen fabric."
        className="mt-7 sm:mt-8"
      />
    </div>
  </section>
);

const HowItsUsed = () => (
  <section className={SECTION_STANDARD}>
    <div className="mx-auto max-w-[680px] space-y-5 sm:space-y-6">
      <H2>A page a week. Or a gift at a wedding.</H2>
      <P>
        Some grandparents write in theirs every Sunday afternoon. A page a
        week, quietly. At that pace, a full 66-page record takes a little
        over a year to finish. The result is one small book, one person's
        quiet inheritance, easier to read than a stack of handwritten
        letters.
      </P>
      <P>
        Others hand a blank one to each grandchild — at a baptism, a
        confirmation, a wedding — with a single page already filled out on
        the inside cover. It becomes the kind of gift you do not throw away.
      </P>
      <P>
        Either way, the value is not in any single entry. It is in the fact
        that somebody who loved them once sat down, read a book of the Bible,
        and wrote down what they saw.
      </P>
      <EditorialImage
        image={journalHeldImage}
        alt="Hands holding a Bible study journal with a pen tucked between the pages."
        className="mt-7 sm:mt-8"
      />
      <div className="pt-2 sm:pt-3">
        <SoftCTA>See what's inside</SoftCTA>
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
      <H2>For yourself — or for someone you love</H2>
      <P>
        A simple 66-page journal is not a legacy on its own. It is the frame
        for one. Some readers buy one for themselves; others keep a few on
        the shelf for the next wedding, graduation, or birthday.
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

const Legacy = () => {
  const { heroRef, showSticky } = useHeroOutOfView();
  useVoluumLandingPixel("voluum-legacy-landing");

  useEffect(() => {
    document.title =
      "The Inheritance Most Christian Grandparents Never Think to Leave";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "A quiet 66-page journal for writing what you believe, book by book — for yourself, or as a gift passed on to a grandchild.",
      );
    }
  }, []);

  return (
    <main
      className="min-h-screen font-sans antialiased"
      style={{ background: COLORS.bg, color: COLORS.text }}
    >
      <SponsoredDisclosure label="Sponsored · A reader story about passing on a quiet written record of faith." />
      <Hero heroRef={heroRef} />
      <WhatItContains />
      <HowItsUsed />
      <Close />
      <Disclaimer />
      <StickyMobileCTA visible={showSticky} label="See the Journal" />
    </main>
  );
};

export default Legacy;
