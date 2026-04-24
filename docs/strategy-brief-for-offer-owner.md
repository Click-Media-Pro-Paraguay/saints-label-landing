# Saints Label — Taboola Strategy Brief

Prepared for the offer owner. A short explanation of how we plan to promote the Bible Study Guide Journal on native advertising, why this approach, and what we will measure.

---

## The insight behind the strategy

The single most striking number in the current Christian publishing landscape is this: **51% of Americans say they wish they read the Bible more** but don't (American Bible Society, 2025). It is the largest untapped demand gap in the entire category. People want the product we're selling. They just haven't found a way into it that fits their real life.

This year the American Bible Society and Barna Group both reported the first meaningful rebound in weekly Bible reading in over a decade — 42% of Americans now read the Bible weekly, up sharply. Nine million more adults told researchers they were "curious about Scripture" than the year before. The audience is not shrinking. It's resetting.

The reasons people give for not reading more are practical, not spiritual: the Bible is too big, they don't have time, they don't see how it relates to their daily life. Every one of those objections is answerable with a smaller, more structured format. The 66-page journal does exactly that — one page per book, context, themes, application — and that mechanical fit is the entire opportunity.

---

## Why five landing pages, not one

We're running the offer on Taboola, which places our ads next to content on Fox News, CNN, MSN.com, and Apple News — four very different reader audiences. A single advertorial optimized for one of them under-performs against the other three.

Instead of a one-size-fits-all pitch, we built **five distinct landing pages**, each designed to match the mindset of a different reader at the moment they see our ad. One product. Five doors. The Taboola bid engine routes each reader to the door their mood fits.

### The five doors

**1. The Quiet Return** — A measured, report-style editorial about the 2025 rebound in American Bible reading. Apolitical, non-denominational, citation-rich. Built to run on Apple News, MSN.com, and CNN without brand-safety friction. The reader feels informed, not sold to.

**2. The 66-Page Method** — The workhorse. A clear explanation of what the journal contains and why the constraint (one page per book) is exactly what most struggling readers need. Practical, simplicity-first. Runs widely — the easiest to scale.

**3. The Silent Struggle** — A first-person reader letter about the quiet confession most long-time Christians carry: they said the right things in church but still felt lost in the Bible. The most emotional of the five, and the one we expect to convert highest per click. Runs on Fox News and faith-network placements; excluded from Apple News on purpose.

**4. The Grandparent's Legacy** — A warm angle about using the journal to leave a written record of your faith to your grandchildren, book by book, in your own hand. Lowest-pressure of the five and the highest expected order value (many buy multiple — one for themselves, others to give). Runs on Apple News, Fox, and MSN.

**5. The Small-Group Favorite** — A light, authority-adjacent piece about the one-page habit that small groups are quietly passing around. Builds credibility without inventing testimonials. Runs on Fox, MSN, and Patheos.

Each door leads to the same outbound click URL. Attribution is clean end-to-end. The offer owner doesn't have to manage five different funnels — just sees five sources of clicks feeding the existing one.

---

## How we will know it's working

We'll track three layers of performance:

- **Click-through rate on the ad itself.** Industry baseline on Taboola is 0.25–1.0%. We're targeting 0.5%+ as a promising creative, with the Method angle expected to exceed that and the Silent Struggle angle running lower but converting harder.
- **Engagement on the landing.** We measure dwell time, scroll depth, and the outbound click-through rate — the share of readers who land on the page and click through to the offer. Target: 30–45% click-through.
- **Downstream conversions.** S2S attribution from Voluum back to Taboola tells us which creative and which publisher drove revenue, not just traffic. This is what lets us scale spend on winners and cut losers.

Reporting cadence: a daily glance at click-through and cost-per-acquisition, and a weekly deep-dive on attribution and revenue by angle. Nothing inside the first 72 hours of a new creative gets paused — that's Taboola's learning phase and early pauses damage the bid model.

---

## Risk posture

We built the rollout with deliberate guardrails:

- **FTC disclosure** at the top of every landing — clearly marked sponsored content on every page.
- **Apple News brand safety.** The two angles most likely to fail Apple News editorial review (Silent Struggle, and the earlier "pastor-recommended" framing of Angle 5) have been pre-excluded or reframed. Only the Quiet Return angle runs on Apple News Select, and it was written specifically to pass that review.
- **No fabricated testimonials.** The small-group-favorite angle attributes the quiet habit to "small-group readers," not to individual pastors, because we don't have citable clergy quotes on file. We can upgrade to real attributed quotes later if the offer owner has them — for now, we'd rather be honest than inventive.
- **Spend caps.** First 14 days are hard-capped at $3,500 across all five angles. If any single angle's CPA runs more than 2× breakeven for 72 consecutive hours, we pause it and rewrite rather than raise the bid.

---

## Timeline

- **Already built and live:** five landing pages at `bible.agentifycrm.io/method`, `/silent-struggle`, `/quiet-return`, `/legacy`, `/small-group-favorite`. Tracking wired. Production build shipped and deployed via Vercel. The existing main landing at `/` is unchanged.
- **Week 1:** upload creative matrices to Taboola (15 creatives per campaign × 5 campaigns = 75 total). Submit for editorial review. Enable at half-budget for 24-hour monitoring. Raise to full budget once clean.
- **Week 2:** identify top two creatives per campaign, cut the long tail. Shift 70% of spend onto winners.
- **Week 3:** switch bid strategy from CPC-fixed to Maximize-Conversions target-CPA on campaigns that crossed the 30-conversion threshold. Begin CTA-copy A/B tests on the top angles.
- **Week 4+:** introduce new creative rotations every 2–3 weeks per Taboola guidance on creative fatigue. Expand to secondary publishers on proven angles.

---

## What we'd like from you

Deliberately small list — we want to earn the run, not the work:

1. **Product photography access** (optional but helpful). The five landings currently use the existing AI-generated imagery that's been tested on your existing page. For the Legacy angle in particular, real photographs of the journal in use (older hands writing, intergenerational moments) would lift conversion. If you have a photo library or can arrange a simple shoot, we'll integrate it.
2. **Volume heads-up.** If we hit our targets, we expect the Method and Small-Group Favorite angles to scale fastest. Rough expected range in the first 30 days is a few hundred to a few thousand orders, depending on CPA. Confirming your shipping pipeline can absorb that — and at what rate it gets uncomfortable — helps us pace.
3. **Claims you want us to avoid.** If there are specific phrasings, denominational positions, or competitive comparisons you'd rather we not make, send us a one-page "don't say" list. We will write around it. Our default is reverent, apolitical, non-denominational — but your product, your guardrails.

That's it. The rest is on us.

---

Prepared by the Saints Label traffic team. Full technical runbook lives at `docs/taboola-campaign-setup.md` in the repo; full research and angle strategy lives at `.claude/plans/use-tavily-to-research-abstract-waffle.md`.
