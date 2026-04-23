import { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  Layers,
  BookOpen,
  Repeat,
  Check,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buildOutboundUrl } from "@/lib/outbound";
import logo from "@/assets/logo.avif";

// ============================================================
// /v4 — Direct-Response Sales Landing Page
// Bible Study Guide Journal – 66 Pages
// ============================================================

const COLORS = {
  bg: "#FAF7F2",
  surface: "#FFFFFF",
  border: "#EDE6DA",
  text: "#16140F",
  muted: "#6B6357",
  dark: "#1A1714",
  cream: "#FAF7F2",
  tint: "#F3EDE2",
};

// ============================================================
// OUTBOUND CLICK HANDLER
// ------------------------------------------------------------
// Paste your Voluum / Taboola / GTM click-event scripts here.
// e.g. window._tfa?.push({ notify: 'event', name: 'click_out' });
// e.g. window.dataLayer?.push({ event: 'outbound_click' });
// The buildOutboundUrl() preserves all inbound query params
// (UTMs, click_id, gclid, fbclid) when forwarding to Voluum.
// ============================================================
function handleOutboundClick(e: React.MouseEvent) {
  e.preventDefault();
  const url = buildOutboundUrl();
  window.location.href = url;
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ------------------------------------------------------------
// Reusable buttons
// ------------------------------------------------------------
function PrimaryCTA({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href="#"
      data-cta="primary-outbound"
      onClick={handleOutboundClick}
      className={`cta-primary inline-flex items-center justify-center rounded-md px-7 py-4 text-base font-semibold tracking-wide transition-all duration-200 shadow-[0_2px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(245,199,106,0.35)] hover:ring-2 hover:ring-[#F5C76A] ${className}`}
      style={{ background: COLORS.dark, color: COLORS.cream }}
    >
      {children}
    </a>
  );
}

function PrimaryCTAInverted({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      data-cta="primary-outbound"
      onClick={handleOutboundClick}
      className="cta-primary inline-flex items-center justify-center rounded-md px-7 py-4 text-base font-semibold tracking-wide transition-all duration-200 hover:ring-2 hover:ring-[#F5C76A]"
      style={{ background: COLORS.cream, color: COLORS.dark }}
    >
      {children}
    </a>
  );
}

function SecondaryCTA({
  children,
  onClick,
  inverted = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  inverted?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-md px-7 py-4 text-base font-semibold tracking-wide transition-colors duration-200 border ${
        inverted
          ? "border-[#FAF7F2] text-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#16140F]"
          : "border-[#16140F] text-[#16140F] bg-white hover:bg-[#16140F] hover:text-[#FAF7F2]"
      }`}
    >
      {children}
    </button>
  );
}

// ------------------------------------------------------------
// Image placeholder
// ------------------------------------------------------------
function ImagePlaceholder({
  label,
  className = "",
  aspect = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`${aspect} ${className} w-full rounded-lg flex items-center justify-center text-center px-6 border`}
      style={{ background: COLORS.tint, borderColor: COLORS.border }}
    >
      <span
        className="text-xs uppercase tracking-[0.18em] font-medium"
        style={{ color: COLORS.muted }}
      >
        {label}
      </span>
    </div>
  );
}

// ============================================================
// Sections
// ============================================================
function AnnouncementBar() {
  const items = [
    "Designed for intentional Bible study",
    "Simple format for all 66 books",
    "Thoughtful Christian gift idea",
  ];
  return (
    <div
      className="border-b"
      style={{ background: COLORS.surface, borderColor: COLORS.border }}
    >
      <div className="max-w-6xl mx-auto px-5 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
        <img
          src={logo}
          alt="Brand logo"
          className="h-7 w-auto"
          loading="eager"
        />
        <div
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs md:text-[13px] font-medium"
          style={{ color: COLORS.text }}
        >
          {items.map((it, i) => (
            <div key={it} className="flex items-center gap-5">
              <span>{it}</span>
              {i < items.length - 1 && (
                <span
                  className="hidden md:inline-block h-3 w-px"
                  style={{ background: COLORS.border }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const bullets = [
    "One page for every book of the Bible",
    "Helps make study feel more structured",
    "Practical and easy to return to",
    "Thoughtful gift for believers",
  ];
  return (
    <section ref={undefined} id="hero" className="py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div>
          <span
            className="inline-block text-[11px] uppercase tracking-[0.22em] font-semibold mb-5 px-3 py-1 rounded-full"
            style={{ background: COLORS.tint, color: COLORS.text }}
          >
            Bible Study Guide Journal · 66 Pages
          </span>
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5"
            style={{ color: COLORS.text, fontFamily: "Lora, serif" }}
          >
            A Simpler Way to Understand Every Book of the Bible
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed mb-7"
            style={{ color: COLORS.muted }}
          >
            This 66-page Bible Study Guide Journal helps readers approach
            Scripture with more clarity, structure, and consistency — without
            feeling overwhelmed.
          </p>
          <ul className="space-y-3 mb-8">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span
                  className="mt-1 inline-flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
                  style={{ background: COLORS.dark }}
                >
                  <Check className="w-3 h-3" color={COLORS.cream} />
                </span>
                <span
                  className="text-base md:text-[17px]"
                  style={{ color: COLORS.text }}
                >
                  {b}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <PrimaryCTA>View the Full Details</PrimaryCTA>
            <SecondaryCTA onClick={() => scrollToId("product-breakdown")}>
              See What's Inside
            </SecondaryCTA>
          </div>
        </div>
        <div>
          <ImagePlaceholder
            label="Hero product image placeholder – journal cover and open pages"
            aspect="aspect-[4/5]"
          />
        </div>
      </div>
    </section>
  );
}

function BenefitGrid() {
  const items = [
    {
      icon: Sparkles,
      title: "Less overwhelm",
      body: "A simpler format can make Scripture feel easier to approach consistently.",
    },
    {
      icon: Layers,
      title: "More structure",
      body: "Each book is organized in a way that helps readers stay grounded.",
    },
    {
      icon: BookOpen,
      title: "Better reflection",
      body: "The guide supports thoughtful, practical engagement with what is being read.",
    },
    {
      icon: Repeat,
      title: "Easy to keep using",
      body: "A repeatable format can make it easier to come back day after day.",
    },
  ];
  return (
    <section className="py-14 md:py-20" style={{ background: COLORS.tint }}>
      <div className="max-w-6xl mx-auto px-5">
        <h2
          className="font-serif text-3xl md:text-4xl font-bold text-center mb-10 md:mb-14"
          style={{ color: COLORS.text, fontFamily: "Lora, serif" }}
        >
          Why readers are drawn to this guide
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-xl p-6 border shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
              style={{
                background: COLORS.surface,
                borderColor: COLORS.border,
              }}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                style={{ background: COLORS.dark }}
              >
                <Icon className="w-5 h-5" color={COLORS.cream} />
              </div>
              <h3
                className="font-serif text-xl font-bold mb-2"
                style={{ color: COLORS.text, fontFamily: "Lora, serif" }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: COLORS.muted }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemSolution() {
  return (
    <section className="py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div>
          <h2
            className="font-serif text-3xl md:text-4xl font-bold mb-5 leading-tight"
            style={{ color: COLORS.text, fontFamily: "Lora, serif" }}
          >
            When Bible study feels scattered, structure matters
          </h2>
          <p
            className="text-lg leading-relaxed mb-5"
            style={{ color: COLORS.muted }}
          >
            Many believers want to spend more time in Scripture, but good
            intentions often collide with a familiar frustration: too many
            notes, disconnected references, or uncertainty about how the books
            fit together.
          </p>
          <p
            className="text-lg leading-relaxed mb-8"
            style={{ color: COLORS.muted }}
          >
            This guide is designed to simplify that experience by giving readers
            a more structured and approachable way to move through the Bible.
          </p>
          <PrimaryCTA>View the Guide</PrimaryCTA>
        </div>
        <ImagePlaceholder
          label="Lifestyle image placeholder – believer using guide"
          aspect="aspect-[4/5]"
        />
      </div>
    </section>
  );
}

function ProductBreakdown() {
  const bullets = [
    "One page for every book of the Bible",
    "Structured format for personal study",
    "Designed to support context and reflection",
    "Physical guide that is easy to revisit",
    "Useful for devotionals, quiet time, or gifting",
  ];
  return (
    <section
      id="product-breakdown"
      className="py-14 md:py-20"
      style={{ background: COLORS.tint }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            className="font-serif text-3xl md:text-4xl font-bold mb-5"
            style={{ color: COLORS.text, fontFamily: "Lora, serif" }}
          >
            What's inside
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: COLORS.muted }}>
            This Bible Study Guide Journal is built around one simple idea: make
            Scripture easier to approach in a repeatable, practical way.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <ul className="space-y-4">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-4 p-5 rounded-lg border"
                style={{
                  background: COLORS.surface,
                  borderColor: COLORS.border,
                }}
              >
                <span
                  className="mt-1 inline-flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0"
                  style={{ background: COLORS.dark }}
                >
                  <Check className="w-3.5 h-3.5" color={COLORS.cream} />
                </span>
                <span
                  className="text-base md:text-lg font-medium"
                  style={{ color: COLORS.text }}
                >
                  {b}
                </span>
              </li>
            ))}
          </ul>
          <div className="space-y-5">
            <ImagePlaceholder label="Product detail placeholder – inside pages close-up" />
            <ImagePlaceholder label="Product detail placeholder – journal interior spread" />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyItWorks() {
  const blocks = [
    { title: "Clarity", body: "A simpler structure helps readers stay focused on what matters." },
    { title: "Structure", body: "A consistent format reduces friction every time you sit down." },
    { title: "Consistency", body: "Showing up day after day becomes easier when the path is clear." },
  ];
  return (
    <section className="py-14 md:py-20">
      <div className="max-w-3xl mx-auto px-5 text-center mb-12">
        <h2
          className="font-serif text-3xl md:text-4xl font-bold mb-5"
          style={{ color: COLORS.text, fontFamily: "Lora, serif" }}
        >
          Why a simple format can make a big difference
        </h2>
        <p
          className="text-lg leading-relaxed mb-4"
          style={{ color: COLORS.muted }}
        >
          Sometimes the biggest barrier to consistency is not motivation — it is
          friction. When study feels scattered or mentally heavy, it becomes
          harder to keep going.
        </p>
        <p className="text-lg leading-relaxed" style={{ color: COLORS.muted }}>
          A simpler, more structured format can reduce that friction and make it
          easier to show up with focus, reflection, and consistency.
        </p>
      </div>
      <div className="max-w-5xl mx-auto px-5 grid md:grid-cols-3 gap-8 md:gap-10">
        {blocks.map((b) => (
          <div
            key={b.title}
            className="pt-6 border-t"
            style={{ borderColor: COLORS.border }}
          >
            <h3
              className="font-serif text-2xl font-bold mb-2"
              style={{ color: COLORS.text, fontFamily: "Lora, serif" }}
            >
              {b.title}
            </h3>
            <p className="text-base leading-relaxed" style={{ color: COLORS.muted }}>
              {b.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhoFor() {
  const items = [
    "Believers who want a more structured Bible study routine",
    "Readers who want a simple companion for personal devotion time",
    "People returning to Scripture after time away",
    "Gift buyers looking for something meaningful and practical",
  ];
  return (
    <section className="py-14 md:py-20" style={{ background: COLORS.tint }}>
      <div className="max-w-5xl mx-auto px-5">
        <h2
          className="font-serif text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12"
          style={{ color: COLORS.text, fontFamily: "Lora, serif" }}
        >
          Who this guide is for
        </h2>
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {items.map((t) => (
            <div
              key={t}
              className="p-6 rounded-xl border flex items-start gap-4"
              style={{
                background: COLORS.surface,
                borderColor: COLORS.border,
              }}
            >
              <span
                className="mt-1 inline-flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0"
                style={{ background: COLORS.dark }}
              >
                <Check className="w-3.5 h-3.5" color={COLORS.cream} />
              </span>
              <span
                className="text-base md:text-lg"
                style={{ color: COLORS.text }}
              >
                {t}
              </span>
            </div>
          ))}
        </div>
        <ImagePlaceholder
          label="Lifestyle image placeholder – hands holding guide"
          aspect="aspect-[16/7]"
        />
      </div>
    </section>
  );
}

function GiftAngle() {
  return (
    <section className="py-14 md:py-20" style={{ background: COLORS.bg }}>
      <div className="max-w-6xl mx-auto px-5">
        <div
          className="rounded-2xl p-8 md:p-14 grid md:grid-cols-2 gap-10 md:gap-14 items-center"
          style={{ background: COLORS.tint }}
        >
          <div>
            <h2
              className="font-serif text-3xl md:text-4xl font-bold mb-5 leading-tight"
              style={{ color: COLORS.text, fontFamily: "Lora, serif" }}
            >
              Also makes a meaningful Christian gift
            </h2>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: COLORS.muted }}
            >
              Because it is practical, faith-centered, and easy to use, this
              guide can also be a thoughtful gift for a spouse, parent, friend,
              small group member, or fellow believer.
            </p>
            <PrimaryCTA>See the Full Product</PrimaryCTA>
          </div>
          <ImagePlaceholder
            label="Gift angle image placeholder – wrapped Christian gift"
            aspect="aspect-[4/3]"
            className="bg-white"
          />
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const items = [
    {
      label: "Customer feedback placeholder",
      quote:
        "Replace this short placeholder with a real customer quote about how the guide helped their study routine.",
      attr: "— Verified buyer placeholder",
    },
    {
      label: "Reader impression placeholder",
      quote:
        "Replace this with a placeholder reader impression describing what they appreciated about the format.",
      attr: "— Reader placeholder",
    },
    {
      label: "Gift buyer feedback placeholder",
      quote:
        "Replace this with a placeholder note from someone who gave the guide as a Christian gift.",
      attr: "— Gift buyer placeholder",
    },
  ];
  return (
    <section className="py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-5">
        <h2
          className="font-serif text-3xl md:text-4xl font-bold text-center mb-10 md:mb-14"
          style={{ color: COLORS.text, fontFamily: "Lora, serif" }}
        >
          What readers like about this kind of guide
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t) => (
            <div
              key={t.label}
              className="p-7 rounded-xl border shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
              style={{
                background: COLORS.surface,
                borderColor: COLORS.border,
              }}
            >
              <div
                className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
                style={{ color: COLORS.muted }}
              >
                {t.label}
              </div>
              <p
                className="italic text-base leading-relaxed mb-4"
                style={{ color: COLORS.text }}
              >
                "{t.quote}"
              </p>
              <div
                className="text-sm font-medium"
                style={{ color: COLORS.muted }}
              >
                {t.attr}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Objection() {
  return (
    <section className="py-14 md:py-20" style={{ background: COLORS.tint }}>
      <div className="max-w-2xl mx-auto px-5 text-center">
        <h2
          className="font-serif text-3xl md:text-4xl font-bold mb-6"
          style={{ color: COLORS.text, fontFamily: "Lora, serif" }}
        >
          What this guide is — and what it is not
        </h2>
        <p
          className="text-lg leading-relaxed mb-5"
          style={{ color: COLORS.muted }}
        >
          This is not a replacement for a full study Bible, a commentary set, or
          pastoral teaching. It is a simple companion resource designed for
          readers who want more structure, less friction, and a practical way to
          move through Scripture.
        </p>
        <p className="text-lg leading-relaxed" style={{ color: COLORS.muted }}>
          That simplicity is exactly why it appeals to many people.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Is this a Bible?",
      a: "No. It is a Bible Study Guide Journal designed to accompany personal Scripture reading.",
    },
    {
      q: "How is it structured?",
      a: "It uses a simple format that gives readers a structured way to reflect on each book of the Bible.",
    },
    {
      q: "Who is it best for?",
      a: "It may be especially useful for believers who want more structure, consistency, and clarity in personal study time.",
    },
    {
      q: "Can it work as a gift?",
      a: "Yes. Its practical and faith-centered format can make it a meaningful gift for many Christian readers.",
    },
    {
      q: "Is this meant to replace deeper study tools?",
      a: "No. It works best as a simple companion resource, not a replacement for full theological study materials.",
    },
  ];
  return (
    <section className="py-14 md:py-20">
      <div className="max-w-2xl mx-auto px-5">
        <h2
          className="font-serif text-3xl md:text-4xl font-bold text-center mb-10"
          style={{ color: COLORS.text, fontFamily: "Lora, serif" }}
        >
          Frequently asked questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              style={{ borderColor: COLORS.border }}
            >
              <AccordionTrigger
                className="text-left text-base md:text-lg font-semibold py-5 hover:no-underline"
                style={{ color: COLORS.text }}
              >
                {f.q}
              </AccordionTrigger>
              <AccordionContent
                className="text-base leading-relaxed pb-5"
                style={{ color: COLORS.muted }}
              >
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-16 md:py-24" style={{ background: COLORS.dark }}>
      <div className="max-w-3xl mx-auto px-5 text-center">
        <h2
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
          style={{ color: COLORS.cream, fontFamily: "Lora, serif" }}
        >
          If you want a simpler, more structured way to approach Scripture, take
          a closer look
        </h2>
        <p
          className="text-lg md:text-xl leading-relaxed mb-9"
          style={{ color: "#C9C2B5" }}
        >
          This guide is designed for readers who want a practical, approachable
          companion for moving through the Bible with more clarity and
          consistency.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <PrimaryCTAInverted>View the Full Details</PrimaryCTAInverted>
          <SecondaryCTA
            inverted
            onClick={() => scrollToId("product-breakdown")}
          >
            See What's Inside
          </SecondaryCTA>
        </div>
      </div>
    </section>
  );
}

function Disclaimer() {
  return (
    <footer
      className="py-8 text-center"
      style={{ background: COLORS.bg }}
    >
      <p className="text-xs" style={{ color: COLORS.muted }}>
        This page is promotional content for the featured product.
      </p>
    </footer>
  );
}

function StickyMobileCTA({ visible }: { visible: boolean }) {
  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 py-3 border-t transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{
        background: COLORS.surface,
        borderColor: COLORS.border,
        boxShadow: "0 -4px 20px rgba(0,0,0,0.06)",
      }}
    >
      <a
        href="#"
        data-cta="primary-outbound"
        onClick={handleOutboundClick}
        className="cta-primary w-full inline-flex items-center justify-center rounded-md px-6 py-4 text-base font-semibold tracking-wide"
        style={{ background: COLORS.dark, color: COLORS.cream }}
      >
        View the Full Details
      </a>
    </div>
  );
}

// ============================================================
// Page
// ============================================================
export default function V4() {
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    document.title = "Bible Study Guide Journal – 66 Pages";
    const onScroll = () => setStickyVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="min-h-screen font-sans"
      style={{
        background: COLORS.bg,
        color: COLORS.text,
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* ============================================================
          TRACKING PIXELS
          ------------------------------------------------------------
          Taboola base pixel and GTM container should be placed in
          index.html (already prepared from /v2). No edits needed here.
          ============================================================ */}
      <AnnouncementBar />
      <Hero />
      <BenefitGrid />
      <ProblemSolution />
      <ProductBreakdown />
      <WhyItWorks />
      <WhoFor />
      <GiftAngle />
      <SocialProof />
      <Objection />
      <FAQ />
      <FinalCTA />
      <Disclaimer />
      <StickyMobileCTA visible={stickyVisible} />
      {/* spacer so sticky bar doesn't cover footer text on mobile */}
      <div className="md:hidden h-20" aria-hidden="true" />
    </div>
  );
}
