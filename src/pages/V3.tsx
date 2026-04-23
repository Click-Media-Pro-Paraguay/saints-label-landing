import { useEffect, useRef, useState } from "react";
import { buildOutboundUrl } from "@/lib/outbound";
import studyDeskImage from "@/assets/ChatGPT Image 23 abr 2026, 05_10_46 a.m..png";
import journalHeldImage from "@/assets/ChatGPT Image 23 abr 2026, 05_13_58 a.m..png";
import journalCoverImage from "@/assets/ChatGPT Image 23 abr 2026, 05_16_51 a.m..png";
import journalOpenDetailImage from "@/assets/ChatGPT Image 23 abr 2026, 05_27_08 a.m..png";
import journalOpenSpreadImage from "@/assets/ChatGPT Image 23 abr 2026, 05_32_29 a.m..png";
import v3HeadlineImage from "@/assets/v3-hero-0530.png";
import whyContextImage from "@/assets/v3-why-context.png";
import whatItIncludesImage from "@/assets/ChatGPT Image 23 abr 2026, 06_38_01 a.m..png";

// ============================================================
// Default landing (/) — editorial advertorial variation
// Slow-burn, problem-first narrative for native (Taboola) traffic.
// Single outbound CTA. No checkout, no nav, no extra pages.
// ============================================================

const VOLUUM_V3_LANDING_ROOT_ID = "voluum-v3-landing";

// Voluum landing page loader (promopage.net) — same snippet as the Voluum / Taboola LP template
const VOLUUM_V3_DELEGATE_CH =
  "sec-ch-ua https://promopage.net; sec-ch-ua-mobile https://promopage.net; sec-ch-ua-arch https://promopage.net; sec-ch-ua-model https://promopage.net; sec-ch-ua-platform https://promopage.net; sec-ch-ua-platform-version https://promopage.net; sec-ch-ua-bitness https://promopage.net; sec-ch-ua-full-version-list https://promopage.net; sec-ch-ua-full-version https://promopage.net";
const VOLUUM_V3_LANDING_IIFE = `(function(e,d,k,n,u,v,g,w,C,f,p,x,D,c,q,r,h,t,y,G,z){function A(){for(var a=d.querySelectorAll(".dtpcnt"),b=0,l=a.length;b<l;b++)a[b][w]=a[b][w].replace(/(^|\\s+)dtpcnt($|\\s+)/g,"")}function E(a,b,l,F){var m=new Date;m.setTime(m.getTime()+(F||864E5));d.cookie=a+"="+b+"; "+l+"samesite=Strict; expires="+m.toGMTString()+"; path=/";k.setItem(a,b);k.setItem(a+"-expires",m.getTime())}function B(a){var b=d.cookie.match(new RegExp("(^| )"+a+"=([^;]+)"));return b?b.pop():k.getItem(a+"-expires")&&+k.getItem(a+"-expires")>(new Date).getTime()?k.getItem(a):null}z="https:"===e.location.protocol?"secure; ":"";e[f]||(e[f]=function(){(e[f].q=e[f].q||[]).push(arguments)},r=d[u],d[u]=function(){r&&r.apply(this,arguments);if(e[f]&&!e[f].hasOwnProperty("params")&&/loaded|interactive|complete/.test(d.readyState))for(;c=d[v][p++];)/\\/?click\\/?($|(\\/[0-9]+)?$)/.test(c.pathname)&&(c[g]="javascrip"+e.postMessage.toString().slice(4,5)+":"+f+'.l="'+c[g]+'",void 0')},setTimeout(function(){(t=RegExp("[?&]cpid(=([^&#]*)|&|#|$)").exec(e.location.href))&&t[2]&&(h=t[2],y=B("vl-"+h));var a=B("vl-cep"),b=location[g];if("savedCep"===D&&a&&(!h||"undefined"===typeof h)&&0>b.indexOf("cep=")){var l=-1<b.indexOf("?")?"&":"?";b+=l+a}c=d.createElement("script");q=d.scripts[0];c.defer=1;c.src=x+(-1===x.indexOf("?")?"?":"&")+"lpref="+n(d.referrer)+"&lpurl="+n(b)+"&lpt="+n(d.title)+"&vtm="+(new Date).getTime()+(y?"&uw=no":"");c[C]=function(){for(p=0;c=d[v][p++];)/dtpCallback\\.l/.test(c[g])&&(c[g]=decodeURIComponent(c[g]).match(/dtpCallback\\.l="([^"]+)/)[1]);A()};q.parentNode.insertBefore(c,q);h&&E("vl-"+h,"1",z)},0),setTimeout(A,7E3))})(window,document,localStorage,encodeURIComponent,"onreadystatechange","links","href","className","onerror","dtpCallback",0,"https://promopage.net/d/.js","savedCep")`;

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

const SECTION_STANDARD = "px-5 py-12 sm:px-6 sm:py-14 md:py-16";
const SECTION_EMPHASIS = "px-5 py-14 sm:px-6 sm:py-16 md:py-20";
const SECTION_COMPACT = "px-5 py-10 sm:px-6 sm:py-12 md:py-14";

// ------------------------------------------------------------
// Outbound click — links use https://promopage.net/click (OUTBOUND_URL) + current query
// ------------------------------------------------------------
function handleOutboundClick(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) {
  e.preventDefault();
  // ============================================================
  // TODO: Paste outbound click event scripts below
  // (e.g. window._tfa?.push({ notify: 'event', name: 'click_out' });
  //       window.dataLayer?.push({ event: 'cta_click' });)
  // ============================================================

  window.location.href = buildOutboundUrl();
}

/** Inline "Bible study" phrase → same Voluum click URL as CTAs */
function OutboundTextLink({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={buildOutboundUrl()}
      onClick={handleOutboundClick}
      className={`underline decoration-[#6E6356]/45 underline-offset-[3px] transition-colors hover:decoration-[#1C1915]/70 ${className}`.trim()}
      style={{ color: COLORS.text }}
    >
      {children}
    </a>
  );
}

// ------------------------------------------------------------
// Reusable building blocks
// ------------------------------------------------------------
const PrimaryCTA = ({ children }: { children: React.ReactNode }) => (
  <a
    href={buildOutboundUrl()}
    data-cta="primary-outbound"
    onClick={handleOutboundClick}
    className="inline-flex min-h-[52px] w-full items-center justify-center rounded-sm px-6 py-4 text-[0.95rem] font-medium tracking-wide transition-opacity hover:opacity-90 sm:w-auto sm:px-7"
    style={{ background: COLORS.ctaBg, color: COLORS.ctaText }}
  >
    {children}
  </a>
);

const SoftCTA = ({ children }: { children: React.ReactNode }) => (
  <a
    href={buildOutboundUrl()}
    data-cta="soft-outbound"
    onClick={handleOutboundClick}
    className="inline-flex min-h-[50px] w-full items-center justify-center rounded-sm border bg-transparent px-6 py-3 text-[0.9rem] font-medium tracking-wide transition-colors hover:bg-[#F1E9D6] sm:w-auto"
    style={{ borderColor: COLORS.softBorder, color: COLORS.text }}
  >
    {children}
  </a>
);

const EditorialImage = ({
  src,
  alt,
  className = "",
  imgClassName = "aspect-[4/3] w-full object-cover",
  unframed = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  unframed?: boolean;
}) =>
  unframed ? (
    <img
      src={src}
      alt={alt}
      className={`${imgClassName} ${className}`.trim()}
    />
  ) : (
    <div
      className={`overflow-hidden rounded-sm border ${className}`}
      style={{ borderColor: COLORS.softBorder, background: COLORS.surface }}
    >
      <img src={src} alt={alt} className={imgClassName} />
    </div>
  );

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2
    className="font-serif text-[1.6rem] leading-[1.2] sm:text-[1.75rem] md:text-[2rem]"
    style={{ color: COLORS.text }}
  >
    {children}
  </h2>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p
    className="text-[1rem] leading-[1.8] sm:text-[1.05rem] md:text-[1.1rem] md:leading-[1.85]"
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
        src={v3HeadlineImage}
        alt="Illustration of a woman at a desk with open books, resting her head in her hand, looking overwhelmed while studying."
        className="mt-5 sm:mt-6"
        imgClassName="aspect-video w-full object-cover"
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
  <section
    id="hidden-friction"
    className={SECTION_STANDARD}
  >
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
        src={studyDeskImage}
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
        src={whyContextImage}
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
        <OutboundTextLink>Bible study</OutboundTextLink> companions can be so helpful. They
        do
        not replace prayer, Scripture, or deeper teaching. They just make it
        easier to start, easier to stay focused, and easier to keep the bigger
        picture in view.
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
          <OutboundTextLink className="font-serif">Bible Study</OutboundTextLink> Guide
          Journal
        </H2>
        <P>
          One example is a 66-page{" "}
          <OutboundTextLink>Bible Study</OutboundTextLink> Guide Journal that gives each
          book of the Bible its own simple, structured page.
        </P>
        <P>
          It is not trying to say everything. It gives readers a steady framework
          for understanding context, noticing key themes, and pausing to reflect
          as they move through Scripture.
        </P>
        <P>
          For someone who wants help without feeling buried in information, a
          tool like this can feel like a gentle place to begin.
        </P>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:mt-12">
        <EditorialImage
          src={journalHeldImage}
          alt="Hands holding a Bible study guide journal."
        />
        <EditorialImage
          src={journalCoverImage}
          alt="A Bible study guide journal photographed on linen fabric."
        />
      </div>

      <EditorialImage
        src={whatItIncludesImage}
        alt="What makes the guide useful: a one-page overview for every book of the Bible, a simple reading structure, reflection space, a dependable physical companion, and a format that reduces mental overload."
        className="mt-8 sm:mt-10"
        imgClassName="w-full object-contain"
      />

      <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
        <P>
          Its value is not in being more complicated. Its value is in making{" "}
          <OutboundTextLink>Bible study</OutboundTextLink> feel easier to begin and easier to
          continue.
        </P>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        <EditorialImage
          src={journalOpenDetailImage}
          alt="A detailed view of the inside pages of a Bible study guide journal with a pen."
        />
        <EditorialImage
          src={journalOpenSpreadImage}
          alt="An overhead view of a Bible study guide journal opened across two pages."
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

const StickyMobileCTA = ({ visible }: { visible: boolean }) => (
  <div
    className={`fixed inset-x-0 bottom-0 z-50 border-t px-4 py-3 transition-transform duration-300 md:hidden ${
      visible ? "translate-y-0" : "translate-y-full"
    }`}
    style={{ background: COLORS.bg, borderColor: COLORS.hairline }}
  >
    <a
      href={buildOutboundUrl()}
      data-cta="primary-outbound"
      onClick={handleOutboundClick}
      className="flex min-h-[52px] w-full items-center justify-center rounded-sm px-5 py-3.5 text-center text-[0.95rem] font-medium tracking-wide"
      style={{ background: COLORS.ctaBg, color: COLORS.ctaText }}
    >
      Take a closer look
    </a>
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
      "Why So Many Faithful Christians Still Struggle to Understand the Bible";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "If reading the Bible often feels confusing or overwhelming, the issue may not be your faith. Context, structure, and a simple study guide can help.",
      );
    }
  }, []);

  // Voluum landing-page tracker (promopage.net / dtpCallback). Injected once per document load; guard avoids double-run under Strict Mode and revisits.
  useEffect(() => {
    if (document.getElementById(`${VOLUUM_V3_LANDING_ROOT_ID}-script`)) return;

    const ch = document.createElement("meta");
    ch.id = `${VOLUUM_V3_LANDING_ROOT_ID}-delegate-ch`;
    ch.httpEquiv = "delegate-ch";
    ch.content = VOLUUM_V3_DELEGATE_CH;
    document.head.appendChild(ch);

    const hideCls = document.createElement("style");
    hideCls.id = `${VOLUUM_V3_LANDING_ROOT_ID}-dtpcnt`;
    hideCls.textContent = ".dtpcnt{opacity: 0;}";
    document.head.appendChild(hideCls);

    const boot = document.createElement("script");
    boot.id = `${VOLUUM_V3_LANDING_ROOT_ID}-script`;
    boot.textContent = VOLUUM_V3_LANDING_IIFE;
    document.body.appendChild(boot);

    const noJs = document.createElement("noscript");
    noJs.id = `${VOLUUM_V3_LANDING_ROOT_ID}-noscript`;
    const fallback = document.createElement("link");
    fallback.href = "https://promopage.net/d/.js?noscript=true&lpurl=";
    fallback.rel = "stylesheet";
    noJs.appendChild(fallback);
    document.body.appendChild(noJs);
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
