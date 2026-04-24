import { useEffect } from "react";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/700.css";

// ============================================================
// /ops — Internal campaign ops brief. Terminal / intelligence-
// document aesthetic. Not a sales page — no Voluum pixel, no
// outbound CTAs. This is the stylized presentation of
// docs/taboola-campaign-setup.md.
// ============================================================

const INK = "#F2EADB";
const BG = "#0B0A08";
const RULE = "#2A2824";
const AMBER = "#FFB046";
const MUTED = "#7D7669";
const PANEL = "#131210";

const mono: React.CSSProperties = {
  fontFamily:
    '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontFeatureSettings: '"zero" 1, "ss01" 1',
};

type Campaign = {
  n: string;
  name: string;
  route: string;
  voluumId: string;
  publishers: string;
  ctr: string;
  notes: string;
};

const CAMPAIGNS: Campaign[] = [
  {
    n: "01",
    name: "The Quiet Return",
    route: "/quiet-return",
    voluumId: "voluum-quiet-return-landing",
    publishers: "MSN · APPLE NEWS SELECT · CNN",
    ctr: "0.5 – 0.8%",
    notes: "Movable Middle. Report-style. Apolitical. Apple-safe.",
  },
  {
    n: "02",
    name: "The 66-Page Method",
    route: "/method",
    voluumId: "voluum-method-landing",
    publishers: "MSN · FOX LIFESTYLE · CNN",
    ctr: "0.6 – 1.0%",
    notes: "Workhorse. Simplicity promise. Highest expected volume.",
  },
  {
    n: "03",
    name: "The Silent Struggle",
    route: "/silent-struggle",
    voluumId: "voluum-silent-struggle-landing",
    publishers: "FOX · FAITH NETWORK",
    ctr: "0.3 – 0.6%",
    notes: "Confession → relief. Excludes Apple News by design.",
  },
  {
    n: "04",
    name: "The Grandparent's Legacy",
    route: "/legacy",
    voluumId: "voluum-legacy-landing",
    publishers: "APPLE NEWS · FOX · MSN",
    ctr: "highest AOV",
    notes: "Inheritance. No age targeting — creative self-selects.",
  },
  {
    n: "05",
    name: "The Small-Group Favorite",
    route: "/small-group-favorite",
    voluumId: "voluum-small-group-favorite-landing",
    publishers: "FOX · MSN · PATHEOS",
    ctr: "0.5 – 0.8%",
    notes: 'No pastor attribution. Reframed per plan §14.',
  },
];

const LAUNCH_STEPS = [
  "Confirm 200 on hard refresh for /method · /silent-struggle · /quiet-return · /legacy · /small-group-favorite",
  "DevTools Network: CTA → promopage.net/click with UTMs merged",
  "DOM: exactly one #voluum-<angle>-landing-script element per route",
  "Register 5 Voluum landings keyed to the IDs above",
  "Wire GTM dataLayer.push({event:'cta_click', angle}) in handleOutboundClick",
  "Install Taboola pixel via GTM on all 5 routes",
  "S2S postback Voluum → Taboola keyed on click_id",
  "Upload 5 Taboola campaigns with 15-creative matrix each",
  "Exclude Apple News on Silent Struggle",
  "Include Apple News Select on Quiet Return",
  "Submit each campaign to Taboola editorial review (Apple Select ≤48h)",
  "Fire one test click per landing. Confirm Voluum attribution.",
  "Enable campaigns at 50% budget for first 24h. Watch for rejections.",
  "Raise to full $50/day. 72h hands-off. Learning phase.",
];

const UTM_SPEC = [
  "utm_source=taboola",
  "utm_medium=native",
  "utm_campaign=<angle>",
  "utm_content=<creative-id>",
];

const VOLUUM_SPEC = [
  "saints-label-quiet-return",
  "saints-label-method",
  "saints-label-silent-struggle",
  "saints-label-legacy",
  "saints-label-small-group-favorite",
];

const GTM_SPEC = [
  "container: GTM-TCLH9ZZV",
  "event: cta_click",
  "payload: { angle }",
  "TODO slot: OutboundCTA.tsx",
];

const OpsBrief = () => {
  useEffect(() => {
    document.title = "Saints Label — Campaign Ops (Internal)";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Internal operations brief for the Saints Label Taboola campaign stack.",
      );
  }, []);

  return (
    <main
      className="min-h-screen"
      style={{ background: BG, color: INK, ...mono }}
    >
      {/* TICKER BAR ---------------------------------------------------- */}
      <div
        className="overflow-hidden border-b"
        style={{ borderColor: RULE, background: PANEL }}
      >
        <div
          className="flex animate-[ticker_38s_linear_infinite] whitespace-nowrap py-2 text-[0.72rem] uppercase"
          style={{ color: AMBER, letterSpacing: "0.22em" }}
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex shrink-0 gap-8 px-8">
              <span>● LIVE</span>
              <span style={{ color: MUTED }}>/</span>
              <span>5 ROUTES DEPLOYED</span>
              <span style={{ color: MUTED }}>/</span>
              <span>VERCEL · bible.agentifycrm.io</span>
              <span style={{ color: MUTED }}>/</span>
              <span>VOLUUM WIRED</span>
              <span style={{ color: MUTED }}>/</span>
              <span>GTM-TCLH9ZZV</span>
              <span style={{ color: MUTED }}>/</span>
              <span>CAMPAIGN OPS · REV 01</span>
              <span style={{ color: MUTED }}>/</span>
              <span>2026.04.23</span>
              <span style={{ color: MUTED }}>/</span>
            </span>
          ))}
        </div>
        <style>{`@keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }`}</style>
      </div>

      {/* HEADER -------------------------------------------------------- */}
      <header className="mx-auto max-w-[1180px] px-6 pt-12 pb-16 sm:px-10 sm:pt-16 md:pt-20">
        <div
          className="mb-8 flex flex-wrap items-center justify-between gap-4 text-[0.7rem] uppercase"
          style={{ color: MUTED, letterSpacing: "0.24em" }}
        >
          <span>[ SAINTS LABEL / CAMPAIGN OPS ]</span>
          <span>CLASSIFICATION · INTERNAL</span>
        </div>

        <div className="flex items-end gap-5">
          <span
            className="shrink-0 text-[0.72rem] uppercase"
            style={{ color: AMBER, letterSpacing: "0.28em" }}
          >
            01 /
          </span>
          <h1
            className="text-[2.4rem] font-medium leading-[1] tracking-[-0.02em] sm:text-[3.3rem] md:text-[4.25rem]"
            style={{ color: INK }}
          >
            CAMPAIGN<br />CONTROL.
          </h1>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto]">
          <p
            className="max-w-[46ch] text-[1.02rem] leading-[1.75] md:text-[1.08rem]"
            style={{
              color: INK,
              fontFamily:
                'Lora, "Iowan Old Style", "Palatino Linotype", serif',
            }}
          >
            Five Taboola angles. One offer. One funnel. This document is the
            operational ledger for the Saints Label Bible Study Guide Journal
            campaign stack — routes, landing IDs, tracking contracts, creative
            matrices, and launch sequence. Not a pitch.
          </p>
          <dl
            className="grid shrink-0 grid-cols-[auto_1fr] gap-x-6 gap-y-2 self-end text-[0.78rem] uppercase"
            style={{ color: MUTED, letterSpacing: "0.16em" }}
          >
            <dt>Doc</dt>
            <dd style={{ color: INK }}>OPS_V1</dd>
            <dt>Rev</dt>
            <dd style={{ color: INK }}>01 · 2026.04.23</dd>
            <dt>Source</dt>
            <dd style={{ color: INK }}>docs/taboola-campaign-setup.md</dd>
            <dt>Status</dt>
            <dd style={{ color: AMBER }}>DEPLOYED · PRE-LAUNCH</dd>
          </dl>
        </div>
      </header>

      <HR />

      {/* SECTION 1 — CAMPAIGN MATRIX ---------------------------------- */}
      <section className="mx-auto max-w-[1180px] px-6 py-16 sm:px-10 md:py-20">
        <SectionHead n="02 /" label="CAMPAIGN MATRIX">
          Five campaigns, one brand account. Each campaign runs a distinct
          angle against a distinct publisher mix. The Taboola bid engine
          routes readers to the door their mindset matches.
        </SectionHead>

        <div className="mt-12 grid grid-cols-1 gap-[1px] border" style={{ background: RULE, borderColor: RULE }}>
          {CAMPAIGNS.map((c) => (
            <article
              key={c.n}
              className="grid grid-cols-[auto_1fr] gap-8 px-6 py-8 transition-colors hover:bg-[color:var(--row-hover)] sm:grid-cols-[auto_1fr_1fr] sm:gap-10 sm:px-8 md:grid-cols-[auto_1.2fr_1fr_1fr] md:gap-12"
              style={{
                background: BG,
                ["--row-hover" as string]: PANEL,
              }}
            >
              <div
                className="text-[2rem] font-medium leading-[0.9] sm:text-[2.5rem]"
                style={{ color: AMBER }}
              >
                {c.n}
              </div>
              <div>
                <h3
                  className="text-[1.18rem] font-medium tracking-[-0.005em] sm:text-[1.3rem]"
                  style={{ color: INK }}
                >
                  {c.name}
                </h3>
                <div
                  className="mt-2 text-[0.78rem]"
                  style={{ color: MUTED, letterSpacing: "0.04em" }}
                >
                  {c.route}
                </div>
                <div
                  className="mt-1 text-[0.72rem]"
                  style={{ color: MUTED, letterSpacing: "0.02em" }}
                >
                  id · {c.voluumId}
                </div>
              </div>
              <div className="sm:col-start-2 sm:col-end-3 md:col-auto">
                <Label>Publishers</Label>
                <div className="mt-1.5 text-[0.78rem]" style={{ color: INK }}>
                  {c.publishers}
                </div>
                <Label className="mt-4">KPI · CTR</Label>
                <div className="mt-1.5 text-[0.78rem]" style={{ color: AMBER }}>
                  {c.ctr}
                </div>
              </div>
              <div className="sm:col-span-2 md:col-span-1 md:col-auto">
                <Label>Notes</Label>
                <p
                  className="mt-1.5 text-[0.82rem] leading-[1.55]"
                  style={{
                    color: INK,
                    fontFamily:
                      'Lora, "Iowan Old Style", "Palatino Linotype", serif',
                  }}
                >
                  {c.notes}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <HR />

      {/* SECTION 2 — TRACKING CONTRACT -------------------------------- */}
      <section className="mx-auto max-w-[1180px] px-6 py-16 sm:px-10 md:py-20">
        <SectionHead n="03 /" label="TRACKING CONTRACT">
          Every click is attributable, end-to-end. UTMs ride through
          buildOutboundUrl(), Voluum keys on click_id, Taboola's Predictive
          Bid learns from the S2S postback.
        </SectionHead>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <SpecPanel title="UTMs on every ad URL" items={UTM_SPEC} />
          <SpecPanel title="Voluum landing variants" items={VOLUUM_SPEC} />
          <SpecPanel title="GTM · custom event" items={GTM_SPEC} />
        </div>

        <div
          className="mt-10 border px-6 py-6 text-[0.88rem] leading-[1.65] sm:px-8"
          style={{ borderColor: RULE, color: INK, background: PANEL }}
        >
          <span
            className="mr-2 text-[0.7rem] uppercase"
            style={{ color: AMBER, letterSpacing: "0.22em" }}
          >
            fn ·
          </span>
          <code style={mono}>
            buildOutboundUrl()
          </code>{" "}
          merges the landing's inbound query onto{" "}
          <code style={{ ...mono, color: AMBER }}>
            https://promopage.net/click
          </code>
          . Existing params on the base URL win. Single source of truth —
          never hardcode the click URL in a component.
        </div>
      </section>

      <HR />

      {/* SECTION 3 — LAUNCH SEQUENCE ---------------------------------- */}
      <section className="mx-auto max-w-[1180px] px-6 py-16 sm:px-10 md:py-20">
        <SectionHead n="04 /" label="LAUNCH SEQUENCE">
          Sequential. Do not skip. First four steps are pre-deploy; five
          through eight are integrations; nine through fourteen are live
          enablement.
        </SectionHead>

        <ol className="mt-12 border-t" style={{ borderColor: RULE }}>
          {LAUNCH_STEPS.map((step, i) => (
            <li
              key={i}
              className="grid grid-cols-[auto_auto_1fr] items-baseline gap-4 border-b px-2 py-4 sm:gap-6 sm:px-4"
              style={{ borderColor: RULE }}
            >
              <span
                className="text-[0.72rem] font-medium"
                style={{ color: AMBER, letterSpacing: "0.1em" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                aria-hidden
                className="inline-block h-3 w-3 border"
                style={{ borderColor: MUTED }}
              />
              <span
                className="text-[0.9rem] leading-[1.55] sm:text-[0.95rem]"
                style={{ color: INK }}
              >
                {step}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <HR />

      {/* SECTION 4 — PER-ANGLE DEEP-DIVES (pointer only) -------------- */}
      <section className="mx-auto max-w-[1180px] px-6 py-16 sm:px-10 md:py-20">
        <SectionHead n="05 /" label="PER-ANGLE DEEP-DIVES">
          Each campaign has a full packet — 5 headlines, 5 descriptions, 3
          image-generation prompts, targeting rules, and A/B notes. Stored in
          source, not inlined here, to keep this ledger scannable.
        </SectionHead>

        <div className="mt-12 grid grid-cols-1 gap-[1px] border" style={{ background: RULE, borderColor: RULE }}>
          {CAMPAIGNS.map((c) => (
            <a
              key={c.n}
              href="/taboola-campaign-setup"
              onClick={(e) => e.preventDefault()}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 px-6 py-5 transition-colors sm:px-8"
              style={{ background: BG, color: INK, cursor: "default" }}
            >
              <span style={{ color: AMBER }}>{c.n}</span>
              <span className="text-[0.95rem]" style={{ color: INK }}>
                {c.name}
              </span>
              <span
                className="text-[0.72rem] uppercase"
                style={{ color: MUTED, letterSpacing: "0.2em" }}
              >
                docs/taboola-campaign-setup.md §3
              </span>
            </a>
          ))}
        </div>
      </section>

      <HR />

      {/* FOOTER ------------------------------------------------------- */}
      <footer className="mx-auto max-w-[1180px] px-6 py-12 sm:px-10">
        <div
          className="grid grid-cols-1 gap-6 border-t pt-10 text-[0.75rem] uppercase md:grid-cols-2"
          style={{ borderColor: RULE, color: MUTED, letterSpacing: "0.18em" }}
        >
          <div>
            <div style={{ color: INK }}>SAINTS LABEL · OPS_V1</div>
            <div className="mt-1">Synced with docs/taboola-campaign-setup.md</div>
          </div>
          <div className="md:text-right">
            <div style={{ color: INK }}>Companion · /strategy</div>
            <div className="mt-1">Offer-owner strategy brief</div>
          </div>
        </div>
      </footer>
    </main>
  );
};

const HR = () => (
  <div
    className="mx-auto max-w-[1180px] px-6 sm:px-10"
  >
    <div className="h-px w-full" style={{ background: RULE }} />
  </div>
);

const SectionHead = ({
  n,
  label,
  children,
}: {
  n: string;
  label: string;
  children: React.ReactNode;
}) => (
  <div>
    <div
      className="text-[0.7rem] uppercase"
      style={{ color: AMBER, letterSpacing: "0.28em" }}
    >
      {n} {label}
    </div>
    <p
      className="mt-4 max-w-[58ch] text-[1rem] leading-[1.7] md:text-[1.05rem]"
      style={{
        color: INK,
        fontFamily:
          'Lora, "Iowan Old Style", "Palatino Linotype", serif',
      }}
    >
      {children}
    </p>
  </div>
);

const Label = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`text-[0.68rem] uppercase ${className}`}
    style={{ color: MUTED, letterSpacing: "0.22em" }}
  >
    {children}
  </div>
);

const SpecPanel = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
  <div
    className="border px-6 py-6"
    style={{ borderColor: RULE, background: PANEL }}
  >
    <div
      className="text-[0.7rem] uppercase"
      style={{ color: MUTED, letterSpacing: "0.22em" }}
    >
      {title}
    </div>
    <ul className="mt-4 space-y-1.5">
      {items.map((item, i) => (
        <li
          key={i}
          className="text-[0.82rem]"
          style={{ color: INK, ...mono }}
        >
          <span style={{ color: AMBER }}>›</span> {item}
        </li>
      ))}
    </ul>
  </div>
);

export default OpsBrief;
