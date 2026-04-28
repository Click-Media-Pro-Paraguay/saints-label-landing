import { useEffect } from "react";
import heroBibleTable from "@/assets/ChatGPT Image 23 abr 2026, 05_10_46 a.m..png?w=480;760;1280;1600&quality=84&format=webp&as=img";
import silentStruggle from "@/assets/v3-hero-0530.png?w=480;760;1280&quality=82&format=webp&as=img";
import journalInLap from "@/assets/ChatGPT Image 23 abr 2026, 05_13_58 a.m..png?w=480;760;1280&quality=84&format=webp&as=img";
import spreadRuth from "@/assets/ChatGPT Image 23 abr 2026, 05_27_08 a.m..png?w=420;640;960&quality=84&format=webp&as=img";
import spreadEcclesiastes from "@/assets/ChatGPT Image 23 abr 2026, 05_32_29 a.m..png?w=420;640;960&quality=84&format=webp&as=img";

import { buildOutboundUrl } from "@/lib/outbound";
import { handleOutboundClick } from "@/components/editorial/OutboundCTA";
import { useVoluumLandingPixel } from "@/lib/voluum";
import { useHeroOutOfView } from "@/hooks/use-hero-out-of-view";

// ============================================================
// /quiet-hour — "The Quiet Hour" advertorial.
// Long-form editorial advertorial designed in Claude Design and
// ported into the React app. CSS is the prototype's CSS verbatim,
// scoped under `.quiet-hour`. CTAs route through the project's
// outbound contract (buildOutboundUrl + handleOutboundClick) so
// Voluum/Taboola tracking continues to work.
// ============================================================

const STYLES = `
.quiet-hour{
  --cream:#F8F2E7;
  --cream-2:#F1E9D8;
  --ink:#26211B;
  --ink-soft:#5B5147;
  --rule:#D9CDB6;
  --burgundy:#7A2E2A;
  --burgundy-deep:#5E2220;
  --gold:#A07B2C;
  --col: 680px;
  background:var(--cream);
  color:var(--ink);
  font-family:'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size:18px;
  line-height:1.75;
  -webkit-font-smoothing:antialiased;
  text-rendering:optimizeLegibility;
}
.quiet-hour *{ box-sizing:border-box; }
@media (min-width:760px){ .quiet-hour{ font-size:19px; } }

.quiet-hour a{ color:var(--burgundy); text-decoration:underline; text-underline-offset:3px; text-decoration-thickness:1px; }
.quiet-hour a:hover{ color:var(--burgundy-deep); }

.quiet-hour .wrap{ max-width: var(--col); margin: 0 auto; padding: 0 22px; }
.quiet-hour .wide{ max-width: 980px; margin: 0 auto; padding: 0 22px; }

/* —————— Sponsored strip —————— */
.quiet-hour .sponsored{
  background:#EFE6D2;
  border-bottom:1px solid var(--rule);
  font-family:'Inter',sans-serif;
  font-size:11px;
  letter-spacing:.14em;
  text-transform:uppercase;
  color:#6B6053;
  padding:9px 22px;
  text-align:center;
}
.quiet-hour .sponsored b{ color:var(--ink); font-weight:600; }
.quiet-hour .sponsored .dot{ display:inline-block; width:4px; height:4px; background:#A89878; border-radius:50%; vertical-align:middle; margin:0 9px; }

/* —————— Masthead —————— */
.quiet-hour .masthead{
  border-bottom:1px solid var(--rule);
  padding:18px 22px;
  text-align:center;
}
.quiet-hour .masthead .pub{
  font-family:'Fraunces',serif;
  font-weight:600;
  font-size:22px;
  letter-spacing:.02em;
}
.quiet-hour .masthead .section{
  font-family:'Inter',sans-serif;
  font-size:11px;
  letter-spacing:.22em;
  text-transform:uppercase;
  color:var(--ink-soft);
  margin-top:4px;
}

/* —————— Headline block —————— */
/* Top/bottom only — preserves the 22px horizontal gutter from .wrap */
.quiet-hour .head{ padding-top: 44px; padding-bottom: 28px; }
.quiet-hour .kicker{
  font-family:'Inter',sans-serif;
  font-size:12px;
  letter-spacing:.22em;
  text-transform:uppercase;
  color:var(--burgundy);
  margin-bottom:18px;
  font-weight:600;
}
.quiet-hour h1.headline{
  font-family:'Fraunces',serif;
  font-weight:500;
  font-size: clamp(34px, 6.2vw, 56px);
  line-height:1.08;
  letter-spacing:-0.015em;
  margin:0 0 22px;
  text-wrap:balance;
}
.quiet-hour .dek{
  font-family:'Fraunces',serif;
  font-weight:400;
  font-style:italic;
  font-size: clamp(19px, 2.4vw, 23px);
  line-height:1.5;
  color:#3a342c;
  margin:0 0 28px;
  text-wrap:pretty;
}
.quiet-hour .byline{
  display:flex; align-items:center; gap:14px;
  padding-top:18px;
  border-top:1px solid var(--rule);
  font-family:'Inter',sans-serif;
  font-size:14px;
  color:var(--ink-soft);
}
.quiet-hour .avatar{
  width:44px;height:44px;border-radius:50%;
  background: radial-gradient(circle at 35% 35%, #C9B894 0%, #A08862 60%, #7B6240 100%);
  flex:0 0 44px;
  border:1px solid var(--rule);
}
.quiet-hour .byline .who{ color:var(--ink); font-weight:600; }
.quiet-hour .byline .meta{ display:block; color:var(--ink-soft); font-size:13px; }

/* —————— Hero & figures —————— */
.quiet-hour .hero{ margin: 16px auto 40px; }
.quiet-hour figure.fig{ margin: 0; }
.quiet-hour figure.fig img{
  display:block;
  width:100%;
  height:auto;
  border:1px solid #E8DFC8;
  border-radius: 4px;
  background:#EFE6D2;
}
.quiet-hour figure.fig figcaption{
  font-family:'Inter',sans-serif;
  font-style:italic;
  font-size:13px;
  color:var(--ink-soft);
  line-height:1.55;
  margin-top:10px;
  padding: 0 2px;
}
.quiet-hour figure.fig figcaption b{ color:var(--ink); font-weight:600; font-style:normal; }

.quiet-hour figure.fig.half{
  max-width: 460px;
  margin: 28px auto;
}

.quiet-hour .spread-grid{
  display:grid;
  grid-template-columns: 1fr;
  gap: 22px;
  margin: 28px 0 8px;
}
@media (min-width: 720px){
  .quiet-hour .spread-grid{
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    width: min(820px, calc(100vw - 44px));
    max-width: none;
    margin-left:50%;
    transform: translateX(-50%);
  }
}

/* —————— Body —————— */
.quiet-hour .body p{ margin: 0 0 1.15em; text-wrap:pretty; }
.quiet-hour .body .lead::first-letter{
  font-family:'Fraunces',serif;
  font-weight:500;
  float:left;
  font-size:5.4em;
  line-height:.86;
  padding: 6px 10px 0 0;
  color:var(--ink);
}
.quiet-hour .body h2{
  font-family:'Fraunces',serif;
  font-weight:500;
  font-size: clamp(26px, 3.6vw, 32px);
  line-height:1.2;
  letter-spacing:-0.01em;
  margin: 48px 0 14px;
  text-wrap:balance;
}
.quiet-hour .body h2 .num{
  display:block;
  font-family:'Inter',sans-serif;
  font-size:11px;
  letter-spacing:.24em;
  text-transform:uppercase;
  color:var(--burgundy);
  margin-bottom:10px;
  font-weight:600;
}

/* —————— Pull quote —————— */
.quiet-hour .pullquote{
  margin: 56px 0;
  padding: 28px 0 32px;
  border-top:1px solid var(--rule);
  border-bottom:1px solid var(--rule);
  text-align:center;
}
.quiet-hour .pullquote q{
  font-family:'Fraunces',serif;
  font-weight:400;
  font-style:italic;
  font-size: clamp(22px, 3vw, 28px);
  line-height:1.35;
  quotes:"\\201C" "\\201D";
  color:var(--ink);
  text-wrap:balance;
}
.quiet-hour .pullquote q::before{ content:open-quote; color:var(--burgundy); margin-right:.05em; }
.quiet-hour .pullquote q::after{ content:close-quote; color:var(--burgundy); margin-left:.05em; }
.quiet-hour .pullquote .attr{
  display:block;
  margin-top:14px;
  font-family:'Inter',sans-serif;
  font-size:12px;
  letter-spacing:.18em;
  text-transform:uppercase;
  color:var(--ink-soft);
}

/* —————— Reader's note —————— */
.quiet-hour .reader-note{
  margin: 48px 0;
  padding: 26px 24px;
  background:var(--cream-2);
  border-left:3px solid var(--burgundy);
}
.quiet-hour .reader-note .label{
  font-family:'Inter',sans-serif;
  font-size:11px;
  letter-spacing:.22em;
  text-transform:uppercase;
  color:var(--burgundy);
  font-weight:600;
  margin-bottom:10px;
}
.quiet-hour .reader-note p{
  font-family:'Fraunces',serif;
  font-style:italic;
  font-size:18px;
  line-height:1.6;
  margin:0 0 10px;
}
.quiet-hour .reader-note .sig{
  font-family:'Inter',sans-serif;
  font-style:normal;
  font-size:14px;
  color:var(--ink-soft);
}

/* —————— Inside list —————— */
.quiet-hour .inside{ margin: 28px 0 8px; border-top:1px solid var(--rule); }
.quiet-hour .inside .row{
  display:grid;
  grid-template-columns: 56px 1fr;
  gap: 18px;
  padding: 22px 0;
  border-bottom:1px solid var(--rule);
  align-items:start;
}
.quiet-hour .inside .n{
  font-family:'Fraunces',serif;
  font-style:italic;
  font-weight:400;
  font-size:30px;
  color:var(--burgundy);
  line-height:1;
  padding-top:4px;
}
.quiet-hour .inside h3{
  font-family:'Fraunces',serif;
  font-weight:500;
  font-size:22px;
  line-height:1.25;
  margin:0 0 6px;
}
.quiet-hour .inside p{
  margin:0;
  font-size:17px;
  line-height:1.65;
  color:#3a342c;
}

/* —————— Who it's for —————— */
.quiet-hour .for-list{ list-style:none; padding:0; margin: 16px 0 8px; }
.quiet-hour .for-list li{
  padding: 14px 0 14px 28px;
  border-bottom:1px solid var(--rule);
  position:relative;
  font-size:17px;
  line-height:1.55;
}
.quiet-hour .for-list li:first-child{ border-top:1px solid var(--rule); }
.quiet-hour .for-list li::before{
  content:"";
  position:absolute;
  left:2px; top:24px;
  width:10px; height:10px;
  border:1.5px solid var(--burgundy);
  transform:rotate(45deg);
}

/* —————— Inline CTA —————— */
.quiet-hour .cta-inline{
  margin: 44px 0 36px;
  padding: 32px 26px;
  background:#EFE6D2;
  border:1px solid var(--rule);
  text-align:center;
}
.quiet-hour .cta-inline .eyebrow{
  font-family:'Inter',sans-serif;
  font-size:11px;
  letter-spacing:.22em;
  text-transform:uppercase;
  color:var(--burgundy);
  font-weight:600;
  margin-bottom:10px;
}
.quiet-hour .cta-inline h3{
  font-family:'Fraunces',serif;
  font-weight:500;
  font-size: clamp(22px, 3vw, 26px);
  margin:0 0 8px;
  line-height:1.25;
  text-wrap:balance;
}
.quiet-hour .cta-inline p{
  margin:0 0 18px;
  color:var(--ink-soft);
  font-size:15px;
  line-height:1.55;
}
.quiet-hour .btn{
  display:inline-block;
  background:var(--burgundy);
  color:#FBF6EC;
  text-decoration:none;
  font-family:'Inter',sans-serif;
  font-weight:600;
  font-size:16px;
  letter-spacing:.02em;
  padding: 15px 28px;
  border:1px solid var(--burgundy-deep);
  transition: background .15s ease, transform .15s ease;
  cursor:pointer;
}
.quiet-hour .btn:hover{ background:var(--burgundy-deep); color:#FBF6EC; }
.quiet-hour .btn .arrow{ display:inline-block; margin-left:8px; transition:transform .2s ease; }
.quiet-hour .btn:hover .arrow{ transform:translateX(3px); }
.quiet-hour .cta-inline .small{
  display:block;
  margin-top:12px;
  font-size:12px;
  letter-spacing:.04em;
  color:var(--ink-soft);
}

/* —————— Soft closing CTA —————— */
.quiet-hour .closing{ margin: 48px 0 12px; text-align:center; }
.quiet-hour .closing h2{
  font-family:'Fraunces',serif;
  font-weight:500;
  font-size: clamp(26px, 3.6vw, 34px);
  line-height:1.2;
  margin: 0 0 14px;
  text-wrap:balance;
}
.quiet-hour .closing p{
  color:var(--ink-soft);
  margin:0 auto 24px;
  max-width: 540px;
}

/* —————— Sticky mobile CTA —————— */
.quiet-hour .sticky-cta{
  position:fixed;
  left:12px; right:12px; bottom:12px;
  z-index:50;
  background:var(--burgundy);
  color:#FBF6EC;
  border:1px solid var(--burgundy-deep);
  padding:14px 16px;
  display:flex; align-items:center; justify-content:space-between; gap:12px;
  box-shadow: 0 10px 30px rgba(38,33,27,.18);
  transform: translateY(140%);
  transition: transform .35s cubic-bezier(.2,.7,.2,1);
  font-family:'Inter',sans-serif;
}
.quiet-hour .sticky-cta.visible{ transform: translateY(0); }
.quiet-hour .sticky-cta .lbl{ font-size:13px; line-height:1.25; letter-spacing:.01em; }
.quiet-hour .sticky-cta .lbl b{ display:block; font-weight:600; font-size:14px; }
.quiet-hour .sticky-cta .lbl span{ opacity:.78; font-size:12px; }
.quiet-hour .sticky-cta a{
  color:#FBF6EC;
  text-decoration:none;
  background:rgba(0,0,0,.18);
  border:1px solid rgba(255,255,255,.18);
  padding:10px 14px;
  font-weight:600;
  font-size:13px;
  white-space:nowrap;
  flex-shrink:0;
}
@media (min-width:820px){ .quiet-hour .sticky-cta{ display:none; } }
.quiet-hour.has-sticky{ padding-bottom: 96px; }
@media (min-width:820px){ .quiet-hour.has-sticky{ padding-bottom:0; } }

/* —————— Footer —————— */
.quiet-hour footer{
  margin-top: 64px;
  border-top:1px solid var(--rule);
  background:#EFE6D2;
  padding: 36px 22px 48px;
  color:var(--ink-soft);
  font-size:13px;
  line-height:1.7;
}
.quiet-hour footer .wrap{ padding:0; }
.quiet-hour footer .disclosure{
  font-size:12px;
  line-height:1.65;
  color:#6B6053;
  margin-bottom:18px;
}
.quiet-hour footer .links{
  margin: 14px 0 18px;
  display:flex; flex-wrap:wrap; gap: 6px 18px;
  font-size:13px;
}
.quiet-hour footer .links a{ color:var(--ink-soft); text-decoration:none; }
.quiet-hour footer .links a:hover{ color:var(--burgundy); text-decoration:underline; }
.quiet-hour footer .copy{
  font-size:12px;
  color:#7A6F5F;
  border-top:1px solid var(--rule);
  padding-top:14px;
}

/* —————— Reading progress —————— */
.quiet-hour .progress{
  position:fixed; left:0; top:0; height:2px;
  background:var(--burgundy);
  width:0%;
  z-index:60;
  transition: width .08s linear;
}

/* —————— Decorative —————— */
.quiet-hour .end-mark{
  text-align:center;
  margin: 32px 0 0;
  color:var(--burgundy);
  font-family:'Fraunces',serif;
  font-size:18px;
  letter-spacing:.4em;
}
.quiet-hour .ornament{
  text-align:center;
  margin: 36px 0;
  color:var(--rule);
  font-family:'Fraunces',serif;
  letter-spacing:1em;
  font-size:14px;
}

.quiet-hour ::selection{ background: #E8D9B5; color:var(--ink); }
`;

const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600&display=swap";

const CtaButton = ({ children }: { children: React.ReactNode }) => (
  <a
    className="btn"
    href={buildOutboundUrl()}
    onClick={handleOutboundClick}
    data-cta="primary-outbound"
    rel="sponsored noopener"
  >
    {children} <span className="arrow">→</span>
  </a>
);

const InlineLink = ({ children }: { children: React.ReactNode }) => (
  <a
    href={buildOutboundUrl()}
    onClick={handleOutboundClick}
    rel="sponsored noopener"
  >
    {children}
  </a>
);

const QuietHour = () => {
  const { heroRef, showSticky } = useHeroOutOfView();
  useVoluumLandingPixel("voluum-quiet-hour-landing");

  // Page metadata + Google Fonts (Fraunces + Inter aren't loaded site-wide).
  useEffect(() => {
    document.title =
      "The quiet practice that brought my Bible back to life — Saints Label";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "A Sunday-school teacher's account of the small daily practice that quietly returned her to Scripture — and the Bible Study Guide Journal at the center of it.",
      );
    }
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = FONTS_HREF;
    document.head.appendChild(link);
    return () => {
      link.parentNode?.removeChild(link);
    };
  }, []);

  // Reading-progress bar (matches the prototype's behavior).
  useEffect(() => {
    const bar = document.getElementById("quiet-hour-progress");
    if (!bar) return;
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
      bar.style.width = `${pct}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Pad the page bottom while the sticky CTA is visible (mirrors `.has-sticky`).
  const rootClass = `quiet-hour${showSticky ? " has-sticky" : ""}`;

  return (
    <div className={rootClass}>
      <style>{STYLES}</style>

      <div className="progress" id="quiet-hour-progress" />

      {/* 1. Sponsored disclosure */}
      <div className="sponsored">
        <b>Advertisement</b>
        <span className="dot" />
        Sponsored content
        <span className="dot" />
        Paid partnership with Saints Label
      </div>

      {/* Masthead */}
      <header className="masthead">
        <div className="pub">The Quiet Hour</div>
        <div className="section">Faith · Reflection · Daily Practice</div>
      </header>

      {/* 2. Headline + dek + byline */}
      <article>
        <div className="wrap head">
          <div className="kicker">A Personal Essay</div>
          <h1 className="headline">
            My Bible had been sitting on the same shelf for eleven years. Then
            a small journal changed my mornings.
          </h1>
          <p className="dek">
            I'd been a Sunday-school teacher for three decades. I knew the
            verses. What I'd quietly lost was the practice — the slow, ordinary
            kind that holds a faith together on a Tuesday.
          </p>
          <div className="byline">
            <div className="avatar" aria-hidden="true" />
            <div>
              <span className="who">By a quiet Sunday-school teacher</span>
              <span className="meta">
                Sponsored essay · 7 min read · Updated this spring
              </span>
            </div>
          </div>
        </div>

        {/* 3. Hero photo (also the trigger for the sticky CTA reveal) */}
        <section className="wrap hero" ref={heroRef as React.RefObject<HTMLElement>}>
          <figure className="fig">
            <img
              src={heroBibleTable.src}
              srcSet={heroBibleTable.srcset}
              sizes="(min-width: 720px) 680px, calc(100vw - 2.5rem)"
              width={heroBibleTable.w}
              height={heroBibleTable.h}
              alt="Open Bible on a wooden kitchen table in morning light, with a coffee mug, a small potted plant, a handwritten journal, reading glasses and a leather notebook arranged around it."
              decoding="async"
              fetchPriority="high"
            />
            <figcaption>
              <b>The corner of my kitchen table — most mornings.</b> The light
              comes in around quarter to seven. I've learned to be there before
              it leaves.
            </figcaption>
          </figure>
        </section>

        {/* 4. Body */}
        <div className="wrap body">
          <p className="lead">
            For a long time I didn't tell anyone. You don't, when you're the
            woman who teaches the seven-year-olds about Daniel and the lions
            every other Sunday. You smile, you bring the orange slices, you go
            home. And you put your Bible back on the same shelf where it has
            lived, more or less untouched, for eleven years.
          </p>

          <p>
            It wasn't a crisis of faith. It was quieter than that. It was the
            slow, embarrassed feeling of a woman in her sixties who can recite
            the Beatitudes and still couldn't tell you the last time she'd
            actually <em>sat</em> with them. My prayers had gone shorthand. My
            Bible had become a reference book I trusted other people to read
            for me.
          </p>

          <p>
            I'm writing this because I think a lot of us are quietly in the
            same place, and nobody talks about it.
          </p>

          <div className="pullquote">
            <q>
              I could recite the Beatitudes. I couldn't remember the last time
              I'd actually sat with them.
            </q>
            <span className="attr">— from the essay</span>
          </div>

          <h2>
            <span className="num">I. The silent struggle</span>The shelf, the
            guilt, and the Tuesday problem
          </h2>
          <p>
            Sundays were never the issue. Sundays have momentum. The hymns
            carry you, the people carry you, the pastor carries you. The
            trouble was Tuesday. Wednesday. The long ordinary middle of the
            week, when faith is supposed to be a practice and mine had become a
            memory.
          </p>

          <figure className="fig half">
            <img
              loading="lazy"
              src={silentStruggle.src}
              srcSet={silentStruggle.srcset}
              sizes="(min-width: 720px) 460px, calc(100vw - 2.5rem)"
              width={silentStruggle.w}
              height={silentStruggle.h}
              alt="Illustrated portrait of a woman with her hand on her forehead, sitting at a table over an open Bible, with papers and a coffee mug around her."
              decoding="async"
            />
            <figcaption>An illustration, but you'll know the feeling.</figcaption>
          </figure>

          <p>
            I tried the obvious things. I bought one of those one-year-Bible
            plans with the dated readings. By February it was a quiet
            accusation on my nightstand. I tried a devotional app — three of
            them, actually — and discovered that I do not want to meet God
            through a push notification. I tried just "reading more," which is
            the worst kind of advice, like telling a tired person to sleep
            harder.
          </p>

          <p>
            What I needed, and didn't know how to ask for, was something small
            enough to actually do, and structured enough that I couldn't talk
            myself out of it at 6:30 in the morning.
          </p>

          <h2>
            <span className="num">II. Why most journals fail</span>Blank pages
            are a kind of bullying
          </h2>
          <p>
            I'd tried Bible journals before. Beautiful ones, even. The trouble
            with most of them is that they hand you a beautiful blank page and
            a suggestion — <em>reflect</em> — and then leave you alone with it.
            At 6:30 in the morning, with a half-warm cup of coffee, "reflect"
            is not a prompt. It's a wall.
          </p>

          <p>
            The other kind goes too far the other direction: rigid, dense, full
            of theology that reads like homework. By page six I'd feel like I
            was failing a class I'd signed up for in good faith.
          </p>

          <p>
            What was missing, in both, was the gentle middle: a hand on your
            back, not a hand on your shoulder. Something that told you where to
            look today, gave you a few honest questions, and let your own life
            walk into the page.
          </p>

          <div className="ornament">• • •</div>

          <h2>
            <span className="num">III. Discovering it</span>A daughter-in-law,
            a brown paper package
          </h2>
          <p>
            My daughter-in-law sent it. She is not a sentimental person, which
            is part of why I trusted the gesture. The package came on a
            Thursday — a cloth-bound journal, the color of an old hymnal, with
            a small note: <em>Mom, this is the one I use. Just try a week.</em>
          </p>

          <figure className="fig">
            <img
              loading="lazy"
              src={journalInLap.src}
              srcSet={journalInLap.srcset}
              sizes="(min-width: 720px) 680px, calc(100vw - 2.5rem)"
              width={journalInLap.w}
              height={journalInLap.h}
              alt="A woman in a cream cable-knit sweater holds a brown leather Bible Study Guide journal in her lap, with a small plant on a wooden table behind her."
              decoding="async"
            />
            <figcaption>
              <b>The package my daughter-in-law sent</b> —{" "}
              <InlineLink>
                the cloth-bound one in the color of an old hymnal
              </InlineLink>
              .
            </figcaption>
          </figure>

          <p>
            It's called the{" "}
            <InlineLink>
              <strong>Saints Label Bible Study Guide Journal</strong>
            </InlineLink>
            . I had not heard of it. I almost set it aside, the way you set
            aside a kindness you're not ready for. But Friday morning, the
            kettle was already on, and the journal was already on the table,
            and I thought: a week.
          </p>

          <p>
            Reader, I am now four months in. I have not missed more than two
            mornings in a row. I want to tell you, plainly, what is different
            about it.
          </p>

          <div className="pullquote">
            <q>
              A hand on your back, not a hand on your shoulder. That's what was
              missing.
            </q>
            <span className="attr">— on what most journals get wrong</span>
          </div>

          <h2>
            <span className="num">IV. What's inside</span>Three spreads that
            did the quiet work
          </h2>
          <p>
            I want to be careful here. I'm not going to walk you through every
            page — partly because that would spoil it, and partly because{" "}
            <InlineLink>the journal</InlineLink> isn't really about its
            features. It's about what happens to a Tuesday morning when you
            have it open. But three spreads, in particular, are why I kept
            going.
          </p>

          <div className="inside">
            <div className="row">
              <div className="n">i.</div>
              <div>
                <h3>The Daily Anchor</h3>
                <p>
                  One passage. Three honest questions underneath it — not "what
                  does this mean," which is a sermon, but "where did I see this
                  yesterday," which is a life. It takes about twelve minutes.
                  That's the whole genius. It's small enough to actually do.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="n">ii.</div>
              <div>
                <h3>The Weekly Examen</h3>
                <p>
                  A single page, on Sundays, with room to look back at the week
                  with God instead of against yourself. I have cried on this
                  page more than once. It's the page that turned this from a
                  reading habit into a praying habit.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="n">iii.</div>
              <div>
                <h3>The Margin</h3>
                <p>
                  A wide, unruled margin running down every page — for the
                  names of people you're praying for, the verse that found you,
                  the question you're carrying. By month three, my margin is
                  the part I read first.
                </p>
              </div>
            </div>
          </div>

          <div className="spread-grid">
            <figure className="fig">
              <img
                loading="lazy"
                src={spreadRuth.src}
                srcSet={spreadRuth.srcset}
                sizes="(min-width: 720px) 410px, calc(100vw - 2.5rem)"
                width={spreadRuth.w}
                height={spreadRuth.h}
                alt="Open Bible Study Guide journal on a wooden table, showing the Ruth study spread with key themes, symbolism, and reflection prompts."
                decoding="async"
              />
              <figcaption>
                Ruth — key themes, symbolism, reflection prompts.
              </figcaption>
            </figure>
            <figure className="fig">
              <img
                loading="lazy"
                src={spreadEcclesiastes.src}
                srcSet={spreadEcclesiastes.srcset}
                sizes="(min-width: 720px) 410px, calc(100vw - 2.5rem)"
                width={spreadEcclesiastes.w}
                height={spreadEcclesiastes.h}
                alt="Open Bible Study Guide journal on a soft cream cloth, showing the Ecclesiastes study spread with the same gentle scaffolding."
                decoding="async"
              />
              <figcaption>
                Ecclesiastes — written by Solomon, with the same gentle
                scaffolding.
              </figcaption>
            </figure>
          </div>

          {/* Inline CTA — primary outbound, mid-page */}
          <div className="cta-inline">
            <div className="eyebrow">If you've read this far</div>
            <h3>It might be the kind of small thing that holds.</h3>
            <p>
              Saints Label produces the journal in small print runs. You can
              take a quiet look at the spreads, the binding, and the daily
              structure on their site.
            </p>
            <CtaButton>See what's inside the journal</CtaButton>
            <span className="small">
              Sponsored link · opens in a new tab
            </span>
          </div>

          <h2>
            <span className="num">V. Who it's for</span>And, honestly, who it's
            not
          </h2>
          <p>
            I want to be useful here, not just enthusiastic. After four months,
            here's the kind of person I'd hand this to without hesitation:
          </p>
          <ul className="for-list">
            <li>
              The churchgoer who still goes — faithfully — but whose Bible at
              home has gone quiet.
            </li>
            <li>
              The grandmother (or grandfather) who'd like a daily practice
              their grandchildren might one day inherit.
            </li>
            <li>
              Anyone who has tried apps, plans, and beautiful blank journals,
              and quietly given up on all three.
            </li>
            <li>
              The widow or widower whose mornings have gotten too quiet, and
              who needs a small appointment to keep.
            </li>
            <li>
              The Sunday-school teacher, the deacon, the choir alto, who
              teaches the faith and is ready to be taught by it again.
            </li>
          </ul>
          <p>
            And honestly: if you are looking for a theological deep-dive, a
            study Bible, or a strict reading plan, this is not that book. It is{" "}
            <InlineLink>a gentler thing</InlineLink>. It is the thing you do{" "}
            <em>around</em> those books to keep them open.
          </p>

          <h2>
            <span className="num">VI. A reader's note</span>From a woman in
            Ohio I've never met
          </h2>
          <p>
            After I mentioned the journal in a small newsletter I write for our
            women's group, a woman named Marlene wrote back. With her
            permission, the relevant part:
          </p>

          <div className="reader-note">
            <div className="label">Reader's note</div>
            <p>
              "I'm 71. My husband passed in October. I had stopped opening my
              Bible because every page reminded me of him reading it across the
              table. The journal gave me a different doorway in. Twelve
              minutes, three questions. I cried the first morning. The second
              morning I didn't. I'm still here."
            </p>
            <div className="sig">— Marlene H., Akron, Ohio</div>
          </div>

          <p>
            I include this not as a testimonial — the journal is not a miracle
            — but because it's the most honest description I've read of what a
            small, structured practice can do for a quiet grief, or a quiet
            faith, or a quiet Tuesday.
          </p>

          <div className="pullquote">
            <q>
              Twelve minutes. Three questions. I cried the first morning. The
              second morning I didn't. I'm still here.
            </q>
            <span className="attr">— Marlene H., Akron, Ohio</span>
          </div>

          {/* Soft closing CTA */}
          <div className="closing">
            <h2>
              If your Bible has gone a little quiet, this is a gentle place to
              begin again.
            </h2>
            <p>
              Saints Label keeps the journal simple, well-bound, and honest.
              There is no app, no subscription, no plan to fall behind on. Only
              a small daily appointment with the book you already love.
            </p>
            <CtaButton>See what's inside the journal</CtaButton>
          </div>

          <div className="end-mark">• • •</div>
        </div>
      </article>

      {/* Sticky mobile CTA — driven by useHeroOutOfView */}
      <div
        className={`sticky-cta${showSticky ? " visible" : ""}`}
        role="region"
        aria-label="Continue reading about the journal"
      >
        <div className="lbl">
          <b>The Saints Label Journal</b>
          <span>
            Twelve minutes. Three questions. A daily practice that holds.
          </span>
        </div>
        <a
          href={buildOutboundUrl()}
          onClick={handleOutboundClick}
          data-cta="primary-outbound"
          rel="sponsored noopener"
        >
          See inside →
        </a>
      </div>

      <footer>
        <div className="wrap">
          <div className="disclosure">
            <strong style={{ color: "var(--ink)" }}>Disclosure.</strong> This
            is a paid editorial advertisement (an "advertorial") produced on
            behalf of Saints Label. The personal account above is composed from
            interviews with long-time Saints Label readers; names and
            identifying details have been changed. Saints Label compensated the
            publisher for placement. If you purchase through links on this
            page, the publisher may receive a commission. No medical,
            financial, or pastoral advice is given or implied. Individual
            experience varies.
          </div>
          <div className="links">
            <a href="https://saintslabel.com/pages/about-us" target="_blank" rel="noopener noreferrer">About this advertiser</a>
            <a href="https://saintslabel.com/pages/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href="https://saintslabel.com/pages/terms-of-service" target="_blank" rel="noopener noreferrer">Terms of Service</a>
            <a href="https://saintslabel.com/pages/refund-policy" target="_blank" rel="noopener noreferrer">Refund Policy</a>
            <a href="https://saintslabel.com/pages/shipping" target="_blank" rel="noopener noreferrer">Shipping Policy</a>
            <a href="https://saintslabel.com/pages/contact" target="_blank" rel="noopener noreferrer">Contact</a>
          </div>
          <div className="copy">
            © 2026 Saints Label. All rights reserved. &nbsp;·&nbsp; Saints
            Label is an independent small-press publisher. The Bible Study
            Guide Journal is printed in limited runs in the United States.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QuietHour;
