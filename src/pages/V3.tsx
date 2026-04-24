import { useEffect } from "react";
import studyDeskImage from "@/assets/ChatGPT Image 23 abr 2026, 05_10_46 a.m..png?w=360;720;1280&quality=82&format=webp&as=img";
import journalHeldImage from "@/assets/ChatGPT Image 23 abr 2026, 05_13_58 a.m..png?w=240;480;720&quality=82&format=webp&as=img";
import journalCoverImage from "@/assets/ChatGPT Image 23 abr 2026, 05_16_51 a.m..png?w=240;480;720&quality=82&format=webp&as=img";
import journalOpenDetailImage from "@/assets/ChatGPT Image 23 abr 2026, 05_27_08 a.m..png?w=240;480;720&quality=82&format=webp&as=img";
import journalOpenSpreadImage from "@/assets/ChatGPT Image 23 abr 2026, 05_32_29 a.m..png?w=240;480;720&quality=82&format=webp&as=img";
import v3HeadlineImage from "@/assets/v3-hero-0530.png?w=360;720;1280&quality=84&format=webp&as=img";
import whyContextImage from "@/assets/v3-why-context.png?w=360;720;1280&quality=82&format=webp&as=img";
import whatItIncludesImage from "@/assets/ChatGPT Image 23 abr 2026, 06_38_01 a.m..png?w=360;720;1280&quality=82&format=webp&as=img";

import {
  COLORS,
  SECTION_COMPACT,
  SECTION_EMPHASIS,
  SECTION_STANDARD,
} from "@/lib/editorial-tokens";
import { useVoluumLandingPixel } from "@/lib/voluum";
import {
  OutboundTextLink,
  PrimaryCTA,
  SoftCTA,
} from "@/components/editorial/OutboundCTA";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { H2, P } from "@/components/editorial/Typography";
import { StickyMobileCTA } from "@/components/editorial/StickyMobileCTA";
import { useHeroOutOfView } from "@/hooks/use-hero-out-of-view";

// ============================================================
// Default landing (/) — editorial advertorial.
// Slow-burn, problem-first narrative for native (Taboola) traffic.
// Single outbound CTA. No checkout, no nav, no extra pages.
// ============================================================

const TopBar = () => (
  <div
    className="w-full border-b"
    style={{ borderColor: COLORS.hairline, background: COLORS.bg }}
  >
    <div className="mx-auto max-w-[680px] px-5 py-3 text-center sm:px-6">
      <span
        className="text-[0.7rem] tracking-[0.2em]"
        style={{ color: COLORS.muted }}
      >
        You are reading this for a reason
      </span>
    </div>
  </div>
);

const Hero = ({ heroRef }: { heroRef: React.RefObject<HTMLElement> }) => (
  <section
    ref={heroRef}
    className="px-5 pt-10 pb-12 sm:px-6 sm:pt-12 sm:pb-14 md:pt-16 md:pb-16"
  >
    <div className="mx-auto max-w-[680px]">
      <h1
        className="max-w-[14ch] font-serif text-[2rem] leading-[1.1] sm:text-[2.25rem] md:max-w-none md:text-[3rem] md:leading-[1.15]"
        style={{ color: COLORS.text }}
      >
        Why So Many Faithful Christians Still Struggle to Understand the Bible
      </h1>
      <EditorialImage
        image={v3HeadlineImage}
        alt="Illustration of a woman at a desk with open books, resting her head in her hand, looking overwhelmed while studying."
        className="mt-5 sm:mt-6"
        imgClassName="aspect-video w-full object-cover"
        priority
      />
      <p
        className="mt-4 max-w-[34rem] font-serif text-[1.08rem] italic leading-[1.55] sm:mt-5 sm:text-[1.15rem] md:mt-6 md:text-[1.35rem] md:leading-[1.6]"
        style={{ color: COLORS.muted }}
      >
        For many believers, the problem is not lack of faith. It is trying to
        read a deep, connected, holy book without enough context, guidance, or
        a simple way to hold the big picture together.
      </p>

      <div className="mt-7 space-y-4 sm:mt-8 sm:space-y-5 md:mt-10">
        <P>
          Many Christians sincerely want to spend more time in Scripture. They
          want to understand it, trust it, and live by it. But many open the
          Bible with good intentions and still walk away unsure of what they
          just read or how it fits into the larger story.
        </P>
        <P>
          That can feel discouraging. Some believers quietly assume they need
          more discipline, more knowledge, or a stronger spiritual life. But
          often the real issue is simpler: the Bible is rich and layered, and
          reading it without enough context can leave even sincere readers
          feeling lost.
        </P>
      </div>

      <div className="mt-8 sm:mt-9 md:mt-10">
        <SoftCTA>What could help</SoftCTA>
      </div>
    </div>
  </section>
);

const HiddenFriction = () => (
  <section id="hidden-friction" className={SECTION_STANDARD}>
    <div className="mx-auto max-w-[680px] space-y-5 sm:space-y-6">
      <H2>The struggle is often not a lack of devotion</H2>
      <P>
        Christians often blame themselves when Bible reading feels difficult.
        They assume they are too distracted, too inconsistent, or not
        spiritually mature enough. Those things can play a role, but they are
        not always the full story.
      </P>
      <P>
        Scripture was written across different times, places, authors, and
        situations. Without some help seeing how those pieces connect, it is
        easy to feel mentally overloaded. What should feel nourishing can start
        to feel confusing, and confusion often leads to inconsistency.
      </P>
      <EditorialImage
        image={studyDeskImage}
        alt="An overhead view of an open Bible on a study desk with coffee, notes, and glasses."
        className="mt-8 sm:mt-9"
      />
    </div>
  </section>
);

const WhyContext = () => (
  <section className={SECTION_STANDARD}>
    <div className="mx-auto max-w-[680px] space-y-5 sm:space-y-6">
      <H2>Why context changes the way Scripture reads</H2>
      <P>
        When you know who a book was written to, why it was written, and where
        it fits in the larger story of redemption, the Bible begins to feel far
        less scattered. Passages that once felt random start to make more
        sense.
      </P>
      <P>
        That does not make Scripture shallow. It makes it more approachable.
        Structure does not replace depth. It helps readers stay with the text
        long enough to actually discover that depth.
      </P>

      <EditorialImage
        image={whyContextImage}
        alt="Clarity, structure, and consistency: how context changes the way Scripture reads — seeing how each book fits the story, knowing what to look for, and returning without overwhelm."
        className="mt-7 sm:mt-8 md:mt-9"
        imgClassName="h-auto w-full object-contain"
        unframed
      />
    </div>
  </section>
);

const HelpBridge = () => (
  <section className={SECTION_EMPHASIS}>
    <div className="mx-auto max-w-[680px] space-y-5 sm:space-y-6">
      <H2>What can help when Scripture feels hard to follow</H2>
      <P>
        Not everyone wants an elaborate study system or a shelf full of
        commentaries. Many believers are simply looking for something clear
        enough to use regularly and thoughtful enough to support real
        understanding.
      </P>
      <P>
        That is why simple{" "}
        <OutboundTextLink>Bible study</OutboundTextLink> companions can be so
        helpful. They do not replace prayer, Scripture, or deeper teaching.
        They just make it easier to start, easier to stay focused, and easier
        to keep the bigger picture in view.
      </P>
      <div className="pt-1 sm:pt-2 md:pt-3">
        <SoftCTA>This could help</SoftCTA>
      </div>
    </div>
  </section>
);

const GuideReveal = () => (
  <section id="soft-reveal" className={SECTION_COMPACT}>
    <div className="mx-auto max-w-[680px]">
      <div className="space-y-5 sm:space-y-6">
        <H2>
          One helpful example is this{" "}
          <OutboundTextLink className="font-serif">Bible Study</OutboundTextLink>{" "}
          Guide Journal
        </H2>
        <P>
          One example is a 66-page{" "}
          <OutboundTextLink>Bible Study</OutboundTextLink> Guide Journal that
          gives each book of the Bible its own simple, structured page.
        </P>
        <P>
          It is not trying to say everything. It gives readers a steady
          framework for understanding context, noticing key themes, and pausing
          to reflect as they move through Scripture.
        </P>
        <P>
          For someone who wants help without feeling buried in information, a
          tool like this can feel like a gentle place to begin.
        </P>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:mt-12">
        <EditorialImage
          image={journalHeldImage}
          alt="Hands holding a Bible study guide journal."
          layout="half"
        />
        <EditorialImage
          image={journalCoverImage}
          alt="A Bible study guide journal photographed on linen fabric."
          layout="half"
        />
      </div>

      <EditorialImage
        image={whatItIncludesImage}
        alt="What makes the guide useful: a one-page overview for every book of the Bible, a simple reading structure, reflection space, a dependable physical companion, and a format that reduces mental overload."
        className="mt-8 sm:mt-10"
        imgClassName="w-full object-contain"
      />

      <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
        <P>
          Its value is not in being more complicated. Its value is in making{" "}
          <OutboundTextLink>Bible study</OutboundTextLink> feel easier to begin
          and easier to continue.
        </P>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        <EditorialImage
          image={journalOpenDetailImage}
          alt="A detailed view of the inside pages of a Bible study guide journal with a pen."
          layout="half"
        />
        <EditorialImage
          image={journalOpenSpreadImage}
          alt="An overhead view of a Bible study guide journal opened across two pages."
          layout="half"
        />
      </div>
    </div>
  </section>
);

const WhoFor = () => (
  <section className={SECTION_STANDARD}>
    <div className="mx-auto max-w-[680px] space-y-5 sm:space-y-6">
      <H2>Who this can be especially helpful for</H2>
      <ul
        className="list-disc space-y-3 pl-5 text-[1rem] leading-[1.7] sm:pl-6 sm:text-[1.05rem] sm:leading-[1.8] md:text-[1.1rem]"
        style={{ color: COLORS.text }}
      >
        <li>Christians who love the Bible but often feel lost in it</li>
        <li>Readers who want more understanding, not just more reading</li>
        <li>People returning to Scripture after feeling discouraged or stuck</li>
        <li>Believers who want a simple companion for personal study time</li>
      </ul>
    </div>
  </section>
);

const TrustNote = () => (
  <section className={SECTION_COMPACT}>
    <div
      className="mx-auto max-w-[680px] rounded-sm border px-5 py-6 sm:px-6 sm:py-7"
      style={{ borderColor: COLORS.softBorder, background: COLORS.surface }}
    >
      <div
        className="mb-3 text-[0.7rem] uppercase tracking-[0.18em]"
        style={{ color: COLORS.muted }}
      >
        A simple note
      </div>
      <P>
        A guide like this is not a replacement for Scripture, wise pastoral
        teaching, or deeper study resources. It is better understood as a
        companion that helps readers approach the Bible with more clarity and
        less confusion.
      </P>
    </div>
  </section>
);

const Testimonials = () => {
  const items = [
    {
      label: "Sharon P.",
      quote:
        "I find it to be a great asset to learning, understanding, and applying the Word.",
    },
    {
      label: "Kay L.",
      quote:
        "Fantastic book. It is a gem, and I hope future editions make the font easier to read.",
    },
    {
      label: "Yvonne P.",
      quote:
        "I would love to be able to get this and learn more about what I read in my Bible.",
    },
  ];
  return (
    <section className={SECTION_STANDARD}>
      <div className="mx-auto max-w-[680px] space-y-7 sm:space-y-8 md:space-y-10">
        <H2>What readers are saying</H2>
        {items.map((t) => (
          <figure
            key={t.label}
            className="rounded-sm border bg-[#FBF6EB]/70 p-5 sm:border-l-2 sm:border-r-0 sm:border-y-0 sm:bg-transparent sm:p-0 sm:pl-6"
            style={{ borderColor: COLORS.softBorder }}
          >
            <div
              className="mb-2 text-[0.7rem] uppercase tracking-[0.18em]"
              style={{ color: COLORS.muted }}
            >
              {t.label}
            </div>
            <blockquote
              className="font-serif text-[1rem] italic leading-[1.65] sm:text-[1.05rem] md:text-[1.1rem] md:leading-[1.75]"
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
  <section className="px-5 pt-6 pb-14 sm:px-6 sm:pt-8 sm:pb-16 md:pt-10 md:pb-20">
    <div
      className="mx-auto max-w-[680px] space-y-5 rounded-sm border px-5 py-8 text-center sm:space-y-6 sm:px-8 sm:py-10"
      style={{ borderColor: COLORS.softBorder, background: COLORS.surface }}
    >
      <H2>If reading the Bible has felt frustrating, a simple guide may help</H2>
      <P>
        Sometimes the next step is not trying harder. It is using a resource
        that helps you read with more context, more clarity, and less
        overwhelm.
      </P>
      <div className="pt-2 sm:pt-3 md:pt-4">
        <PrimaryCTA>Take a closer look</PrimaryCTA>
      </div>
    </div>
  </section>
);

const Disclaimer = () => (
  <footer
    className="px-5 pb-24 pt-8 sm:px-6 sm:pb-24 sm:pt-10 md:pb-14"
    style={{ borderTop: `1px solid ${COLORS.hairline}` }}
  >
    <div className="mx-auto max-w-[680px] text-center">
      <p className="text-[0.85rem]" style={{ color: COLORS.muted }}>
        This page is promotional content for the featured product.
      </p>
    </div>
  </footer>
);

const V3 = () => {
  const { heroRef, showSticky } = useHeroOutOfView();
  useVoluumLandingPixel("voluum-v3-landing");

  useEffect(() => {
    document.title =
      "Why So Many Faithful Christians Still Struggle to Understand the Bible";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "If reading the Bible often feels confusing or overwhelming, the issue may not be your faith. Context, structure, and a simple study guide can help.",
      );
    }
  }, []);

  return (
    <main
      className="min-h-screen font-sans antialiased"
      style={{ background: COLORS.bg, color: COLORS.text }}
    >
      <TopBar />
      <Hero heroRef={heroRef} />
      <HiddenFriction />
      <WhyContext />
      <HelpBridge />
      <GuideReveal />
      <WhoFor />
      <Testimonials />
      <TrustNote />
      <FinalCTA />
      <Disclaimer />
      <StickyMobileCTA visible={showSticky} />
    </main>
  );
};

export default V3;
