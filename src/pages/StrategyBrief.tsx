import { useEffect } from "react";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/400-italic.css";

// ============================================================
// /strategy — Offer-owner-facing strategy brief. Editorial
// magazine / consultancy memo aesthetic. Stylized presentation
// of docs/strategy-brief-for-offer-owner.md.
// No Voluum pixel, no outbound CTAs — this is a pitch document.
// ============================================================

const PAPER = "#F6EFE2";
const PAPER_DEEP = "#EFE5D1";
const INK = "#1A1512";
const INK_MUTED = "#6A5F52";
const ACCENT = "#8B3A3A"; // deep wine
const RULE = "#C8BBA3";

const display: React.CSSProperties = {
  fontFamily: 'Fraunces, "Times New Roman", Georgia, serif',
  fontOpticalSizing: "auto",
  fontVariationSettings: '"SOFT" 100, "WONK" 0',
};

const body: React.CSSProperties = {
  fontFamily:
    'Inter, -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
  fontFeatureSettings: '"ss01" 1',
};

const doors = [
  {
    n: "I.",
    name: "The Quiet Return",
    line: "A report-style editorial about the 2025 Bible-reading rebound. Apolitical and citation-rich. For the reader on Apple News or MSN who wants to feel informed, not sold.",
  },
  {
    n: "II.",
    name: "The 66-Page Method",
    line: "The workhorse. A clear explanation of what the journal contains and why one page per book is the structural answer to every reason people give for not reading more.",
  },
  {
    n: "III.",
    name: "The Silent Struggle",
    line: "A first-person reader letter about the quiet confession many long-time Christians carry. The most emotional of the five, and the one we expect to convert hardest per click.",
  },
  {
    n: "IV.",
    name: "The Grandparent's Legacy",
    line: "A warm angle about using the journal to leave a written record of faith, book by book, for the next generation. Highest expected order value — many buy more than one.",
  },
  {
    n: "V.",
    name: "The Small-Group Favorite",
    line: "A light, authority-adjacent piece about the habit small groups are quietly passing around. Builds credibility without fabricating testimonials.",
  },
];

const risks = [
  {
    head: "Disclosure first",
    body: "Every landing carries an FTC-compliant sponsored-content disclosure at the top of the page. No ambiguity.",
  },
  {
    head: "Brand-safe placements",
    body: "The two angles most likely to fail Apple News editorial review are pre-excluded or reframed. Only Quiet Return runs on Apple News Select.",
  },
  {
    head: "Honest attribution",
    body: "No fabricated pastor quotes. The small-group angle attributes the habit to readers, not clergy. Easy to upgrade later with real quotes.",
  },
  {
    head: "Spend caps",
    body: "Hard cap of $3,500 across all five angles for the first 14 days. Any campaign running 2× breakeven for 72 consecutive hours is paused, not bid-raised.",
  },
];

const timeline = [
  { head: "Now", body: "Five landings built, tracking wired, production deployed via Vercel." },
  { head: "Week 1", body: "Creative matrices uploaded to Taboola. Editorial review. Half-budget enablement for 24h, then full budget." },
  { head: "Week 2", body: "Cut long tail. Shift 70% of spend onto top two creatives per campaign." },
  { head: "Week 3", body: "Switch to Maximize-Conversions bidding on campaigns past the 30-conversion threshold. Begin CTA copy A/Bs." },
  { head: "Week 4+", body: "Creative rotation every 2–3 weeks. Expand to secondary publishers on proven angles." },
];

const asks = [
  {
    head: "Photography access",
    body: "Optional but helpful. Real photographs of the journal in use — especially older hands writing, intergenerational moments — would lift the Legacy angle.",
  },
  {
    head: "Volume heads-up",
    body: "Rough first-30-day expectation is a few hundred to a few thousand orders depending on CPA. Confirming shipping pipeline capacity helps us pace responsibly.",
  },
  {
    head: "Don't-say list",
    body: "If there are phrasings, denominational positions, or competitive comparisons you'd rather we avoid, send us a one-page list. We'll write around it.",
  },
];

const StrategyBrief = () => {
  useEffect(() => {
    document.title = "Saints Label — A Strategy Brief";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "A strategy brief for the Saints Label Bible Study Guide Journal — the audience, the five-door approach, and how we'll measure the work.",
      );
  }, []);

  return (
    <main
      className="min-h-screen"
      style={{ background: PAPER, color: INK, ...body }}
    >
      {/* MASTHEAD ----------------------------------------------------- */}
      <header
        className="border-b"
        style={{ borderColor: RULE, background: PAPER }}
      >
        <div
          className="mx-auto flex max-w-[1080px] items-center justify-between px-6 py-5 text-[0.72rem] uppercase sm:px-10"
          style={{ color: INK_MUTED, letterSpacing: "0.24em" }}
        >
          <span style={{ color: INK }}>Saints Label — A Strategy Brief</span>
          <span>№ 01 · April 2026</span>
        </div>
      </header>

      {/* COVER -------------------------------------------------------- */}
      <section
        className="relative overflow-hidden"
        style={{ background: PAPER }}
      >
        <div className="mx-auto max-w-[1080px] px-6 pt-16 pb-24 sm:px-10 sm:pt-20 sm:pb-28 md:pt-28 md:pb-32">
          <div
            className="mb-8 flex items-center gap-4 text-[0.78rem] uppercase sm:mb-10"
            style={{ color: INK_MUTED, letterSpacing: "0.28em" }}
          >
            <span
              aria-hidden
              className="h-px w-10 sm:w-16"
              style={{ background: INK_MUTED }}
            />
            <span>A brief for the offer owner</span>
          </div>

          <h1
            className="max-w-[22ch] text-[2.6rem] leading-[1.02] tracking-[-0.015em] sm:text-[3.6rem] md:text-[5.2rem] md:leading-[0.98]"
            style={{ ...display, color: INK, fontWeight: 400 }}
          >
            Five doors
            <br />
            to one{" "}
            <em
              style={{
                fontVariationSettings: '"SOFT" 100, "WONK" 1',
                color: ACCENT,
              }}
            >
              Bible.
            </em>
          </h1>

          <div
            className="mt-10 grid max-w-[1080px] grid-cols-1 gap-8 md:mt-16 md:grid-cols-[1.2fr_1fr]"
          >
            <p
              className="max-w-[52ch] text-[1.08rem] leading-[1.78] md:text-[1.18rem] md:leading-[1.8]"
              style={{ color: INK, ...body }}
            >
              <span
                className="float-left mr-2 mt-[0.08em] text-[3.6rem] leading-[0.82] md:text-[4.4rem]"
                style={{ ...display, color: ACCENT, fontWeight: 500 }}
              >
                F
              </span>
              ifty-one percent of Americans say they wish they read the Bible
              more — and don't. That is the single largest unclaimed demand gap
              in the category, and it is the premise of this strategy. People
              already want the product. They just have not found a way into it
              that fits their real life.
            </p>
            <dl
              className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 self-end text-[0.78rem] uppercase"
              style={{ color: INK_MUTED, letterSpacing: "0.2em" }}
            >
              <dt>Prepared by</dt>
              <dd style={{ color: INK }}>Saints Label traffic team</dd>
              <dt>For</dt>
              <dd style={{ color: INK }}>The offer owner</dd>
              <dt>Date</dt>
              <dd style={{ color: INK }}>April 23, 2026</dd>
              <dt>Reference</dt>
              <dd style={{ color: INK }}>docs/strategy-brief-for-offer-owner.md</dd>
            </dl>
          </div>
        </div>

        {/* Decorative rule with accent dot */}
        <div
          className="mx-auto flex max-w-[1080px] items-center gap-3 px-6 pb-16 sm:px-10"
        >
          <span
            aria-hidden
            className="h-1 w-1 rounded-full"
            style={{ background: ACCENT }}
          />
          <span
            aria-hidden
            className="h-px flex-1"
            style={{ background: RULE }}
          />
          <span
            aria-hidden
            className="h-1 w-1 rounded-full"
            style={{ background: ACCENT }}
          />
        </div>
      </section>

      {/* SECTION I — INSIGHT ------------------------------------------ */}
      <Section no="I." eyebrow="The audience behind the strategy">
        <p>
          The American Bible Society's 2025 State of the Bible and Barna
          Group's 2025 tracking both reported the first meaningful rebound
          in weekly Bible reading in more than a decade. The audience is not
          shrinking — it is resetting. Nine million more adults told
          researchers they were "curious" about Scripture than the year
          before.
        </p>
        <p>
          The reasons people give for not reading more are almost boringly
          practical. The Bible is too big. They don't have time. They don't
          see how it connects to their daily life. Every one of those
          objections is answerable with a smaller, more structured format.
          The 66-page journal does exactly that. That mechanical fit is the
          entire opportunity.
        </p>

        <StatRow />
      </Section>

      {/* SECTION II — FIVE DOORS -------------------------------------- */}
      <Section no="II." eyebrow="Five doors to one product">
        <p>
          A single advertorial optimized for one reader under-performs against
          the other three. Instead, we built five distinct landing pages —
          each calibrated to a different reader mindset at the moment they see
          our ad. One product. Five doors. The Taboola bid engine routes each
          reader to the door their mood fits.
        </p>
        <ol className="mt-12 space-y-8 md:space-y-10">
          {doors.map((d) => (
            <li
              key={d.n}
              className="grid grid-cols-[auto_1fr] items-baseline gap-5 md:gap-8"
            >
              <span
                className="text-[1.6rem] leading-[1] md:text-[2rem]"
                style={{ ...display, color: ACCENT, fontWeight: 500 }}
              >
                {d.n}
              </span>
              <div>
                <h3
                  className="text-[1.4rem] leading-[1.15] tracking-[-0.005em] md:text-[1.75rem]"
                  style={{ ...display, color: INK, fontWeight: 500 }}
                >
                  {d.name}
                </h3>
                <p
                  className="mt-2 max-w-[54ch] text-[1rem] leading-[1.72] md:text-[1.05rem]"
                  style={{ color: INK }}
                >
                  {d.line}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* SECTION III — KPIs ------------------------------------------- */}
      <Section no="III." eyebrow="How we'll know it's working">
        <p>
          We measure three layers — the click, the read, and the conversion.
          Each one tells us something the others don't.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <KpiCard
            label="The click"
            headline="0.5% +"
            body="Click-through rate on the ad itself. Industry Taboola baseline is 0.25–1.0%. Method is expected to exceed 0.5%; Silent Struggle runs lower but converts harder."
          />
          <KpiCard
            label="The read"
            headline="30–45%"
            body="Outbound click-through from the landing. Dwell time and scroll depth as secondary signals."
          />
          <KpiCard
            label="The conversion"
            headline="S2S"
            body="Server-side attribution from Voluum back to Taboola tells us which creative and which publisher actually drove revenue."
          />
        </div>
        <p className="mt-10">
          Daily glance on click-through and cost-per-acquisition. Weekly deep
          dive on attribution and revenue by angle. Nothing inside the first 72
          hours of a new creative gets paused — that is Taboola's learning
          phase, and early pauses damage the bid model.
        </p>
      </Section>

      {/* SECTION IV — RISK POSTURE ------------------------------------ */}
      <Section no="IV." eyebrow="Risk posture">
        <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {risks.map((r) => (
            <div
              key={r.head}
              className="border-t pt-6"
              style={{ borderColor: RULE }}
            >
              <h3
                className="text-[1.15rem] md:text-[1.25rem]"
                style={{ ...display, color: INK, fontWeight: 500 }}
              >
                {r.head}
              </h3>
              <p
                className="mt-2 text-[1rem] leading-[1.72]"
                style={{ color: INK }}
              >
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION V — TIMELINE ----------------------------------------- */}
      <Section no="V." eyebrow="Timeline">
        <ul className="mt-6">
          {timeline.map((t, i) => (
            <li
              key={t.head}
              className="grid grid-cols-[120px_1fr] items-baseline gap-6 border-t py-6 md:grid-cols-[160px_1fr] md:gap-10"
              style={{ borderColor: RULE }}
            >
              <span
                className="text-[0.82rem] uppercase"
                style={{ color: i === 0 ? ACCENT : INK_MUTED, letterSpacing: "0.2em" }}
              >
                {t.head}
              </span>
              <span
                className="text-[1rem] leading-[1.72] md:text-[1.05rem]"
                style={{ color: INK }}
              >
                {t.body}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* SECTION VI — WHAT WE'D LIKE ---------------------------------- */}
      <Section no="VI." eyebrow="What we'd like from you">
        <p>
          A deliberately small list — we want to earn the run, not shift the
          work.
        </p>
        <ol className="mt-10 space-y-8">
          {asks.map((a, i) => (
            <li key={a.head} className="grid grid-cols-[auto_1fr] gap-5">
              <span
                className="text-[1.1rem] tabular-nums"
                style={{ ...display, color: ACCENT, fontWeight: 500 }}
              >
                {String(i + 1).padStart(2, "0")}.
              </span>
              <div>
                <h3
                  className="text-[1.2rem]"
                  style={{ ...display, color: INK, fontWeight: 500 }}
                >
                  {a.head}
                </h3>
                <p
                  className="mt-1.5 max-w-[54ch] text-[1rem] leading-[1.72]"
                  style={{ color: INK }}
                >
                  {a.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* COLOPHON ----------------------------------------------------- */}
      <footer
        className="border-t"
        style={{ borderColor: RULE, background: PAPER_DEEP }}
      >
        <div className="mx-auto max-w-[1080px] px-6 py-16 sm:px-10 md:py-20">
          <div
            className="text-[0.78rem] uppercase"
            style={{ color: INK_MUTED, letterSpacing: "0.28em" }}
          >
            Colophon
          </div>
          <p
            className="mt-4 max-w-[56ch] text-[1.35rem] leading-[1.45] md:text-[1.6rem] md:leading-[1.4]"
            style={{ ...display, color: INK, fontWeight: 400 }}
          >
            That's it. The rest is on us.
          </p>
          <div
            className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t pt-6 text-[0.75rem] uppercase"
            style={{ borderColor: RULE, color: INK_MUTED, letterSpacing: "0.2em" }}
          >
            <span>Saints Label · Strategy Brief № 01</span>
            <span>Companion · /ops</span>
          </div>
        </div>
      </footer>
    </main>
  );
};

const Section = ({
  no,
  eyebrow,
  children,
}: {
  no: string;
  eyebrow: string;
  children: React.ReactNode;
}) => (
  <section className="mx-auto max-w-[1080px] px-6 py-16 sm:px-10 md:py-24">
    <div
      className="mb-6 flex items-center gap-4 text-[0.82rem] uppercase md:mb-8"
      style={{ color: INK_MUTED, letterSpacing: "0.24em" }}
    >
      <span style={{ ...display, color: ACCENT }}>{no}</span>
      <span>{eyebrow}</span>
    </div>
    <div
      className="max-w-[68ch] text-[1.05rem] leading-[1.75] md:text-[1.1rem]"
      style={{ color: INK, ...body }}
    >
      {children}
    </div>
  </section>
);

const StatRow = () => (
  <div className="mt-12 grid grid-cols-1 gap-6 border-t pt-10 md:grid-cols-3" style={{ borderColor: RULE }}>
    {[
      { stat: "51%", label: "Of Americans wish they read the Bible more (ABS, 2025)." },
      { stat: "9 M", label: "More U.S. adults curious about Scripture in 2025 than the year before." },
      { stat: "42%", label: "Weekly Bible reading in 2025 — the first meaningful rebound in a decade." },
    ].map((s) => (
      <div key={s.stat}>
        <div
          className="text-[3rem] leading-[1] tracking-[-0.01em] md:text-[3.8rem]"
          style={{ ...display, color: ACCENT, fontWeight: 500 }}
        >
          {s.stat}
        </div>
        <p
          className="mt-3 max-w-[30ch] text-[0.95rem] leading-[1.55]"
          style={{ color: INK }}
        >
          {s.label}
        </p>
      </div>
    ))}
  </div>
);

const KpiCard = ({
  label,
  headline,
  body: text,
}: {
  label: string;
  headline: string;
  body: string;
}) => (
  <div
    className="border px-6 py-6"
    style={{ borderColor: RULE, background: PAPER_DEEP }}
  >
    <div
      className="text-[0.72rem] uppercase"
      style={{ color: INK_MUTED, letterSpacing: "0.22em" }}
    >
      {label}
    </div>
    <div
      className="mt-4 text-[2.6rem] leading-[1] tracking-[-0.01em] md:text-[3rem]"
      style={{ ...display, color: ACCENT, fontWeight: 500 }}
    >
      {headline}
    </div>
    <p
      className="mt-4 text-[0.95rem] leading-[1.6]"
      style={{ color: INK }}
    >
      {text}
    </p>
  </div>
);

export default StrategyBrief;
