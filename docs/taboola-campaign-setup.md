# Taboola Campaign Setup — Saints Label (Operator Runbook)

Everything needed to launch the 5 angle-specific campaigns on Taboola for the Saints Label Bible Study Guide Journal. All 5 landing pages are live at `bible.agentifycrm.io`. This doc is the campaign-side of the plan in `.claude/plans/use-tavily-to-research-abstract-waffle.md` — it does not re-derive the research, just gives you what you need to set things up.

---

## 1. Quick reference

| # | Angle | Route | Voluum Landing ID | Primary publishers | CTA copy | Day-1 budget |
|---|---|---|---|---|---|---|
| 1 | Quiet Return | `/quiet-return` | `voluum-quiet-return-landing` | MSN.com, Apple News Select, CNN | See the Journal / Continue Reading | $50/day |
| 2 | 66-Page Method | `/method` | `voluum-method-landing` | MSN.com, Fox News Lifestyle | See the Journal / See Inside | $50/day |
| 3 | Silent Struggle | `/silent-struggle` | `voluum-silent-struggle-landing` | Fox News, faith network | See the Journal | $50/day |
| 4 | Grandparent's Legacy | `/legacy` | `voluum-legacy-landing` | Apple News, Fox, MSN | See the Journal / See what's inside | $50/day |
| 5 | Small-Group Favorite | `/small-group-favorite` | `voluum-small-group-favorite-landing` | Fox News, MSN, Patheos | See the Journal / See what a page looks like | $50/day |

**Live ad URLs** (what you paste into Taboola):
- `https://bible.agentifycrm.io/quiet-return?utm_source=taboola&utm_medium=native&utm_campaign=quiet-return&utm_content={creative-id}`
- `https://bible.agentifycrm.io/method?utm_source=taboola&utm_medium=native&utm_campaign=method&utm_content={creative-id}`
- `https://bible.agentifycrm.io/silent-struggle?utm_source=taboola&utm_medium=native&utm_campaign=silent-struggle&utm_content={creative-id}`
- `https://bible.agentifycrm.io/legacy?utm_source=taboola&utm_medium=native&utm_campaign=legacy&utm_content={creative-id}`
- `https://bible.agentifycrm.io/small-group-favorite?utm_source=taboola&utm_medium=native&utm_campaign=small-group-favorite&utm_content={creative-id}`

**Funnel end.** Every CTA on every landing fires `buildOutboundUrl()` → `https://promopage.net/click` with inbound query merged through. UTMs/`click_id`/`gclid`/`fbclid` survive the handoff.

---

## 2. Tracking contract

### 2.1 UTM structure (mandatory on every ad URL)
- `utm_source=taboola`
- `utm_medium=native`
- `utm_campaign=<angle>` (one of: `quiet-return`, `method`, `silent-struggle`, `legacy`, `small-group-favorite`)
- `utm_content=<creative-id>` (Taboola's Item ID — use a consistent pattern like `qr-hl1-thumb1` for Quiet-Return, headline 1, thumbnail 1)

### 2.2 Voluum
Each angle maps to a distinct landing in Voluum:

| Angle | Voluum landing name | Landing ID in code |
|---|---|---|
| Quiet Return | `saints-label-quiet-return` | `voluum-quiet-return-landing` |
| Method | `saints-label-method` | `voluum-method-landing` |
| Silent Struggle | `saints-label-silent-struggle` | `voluum-silent-struggle-landing` |
| Legacy | `saints-label-legacy` | `voluum-legacy-landing` |
| Small-Group Favorite | `saints-label-small-group-favorite` | `voluum-small-group-favorite-landing` |

Register all 5 as new landings in Voluum before enabling any Taboola campaign. S2S postback on purchase events keyed on `click_id` — without this, Taboola's Predictive Bid can't optimize to revenue.

### 2.3 GTM
- Container `GTM-TCLH9ZZV` fires on every route (already live in `index.html`).
- **Pending TODO**: wire `dataLayer.push({event: 'cta_click', angle: '<angle>'})` into `src/components/editorial/OutboundCTA.tsx` → `handleOutboundClick`. The comment block is already in place for you to paste into. Add before Week 1 optimization so we can A/B test CTA engagement inside GTM.
- Taboola pixel installs through GTM (keep source control clean). Fire on page view for each route.

---

## 3. Per-angle packets

Each packet has: URL, landing ID, targeting, KPIs, 5 headlines (test all), 5 descriptions (test all), 3 image-gen prompts (test all), CTA copy, A/B notes, compliance notes.

---

### Angle 1 — The Quiet Return

**URL:** `https://bible.agentifycrm.io/quiet-return`
**Voluum landing ID:** `voluum-quiet-return-landing`
**Targeting:** US; all devices; include Apple News Select. **Do not** target on age. No religious-interest narrowing — this is a Movable-Middle angle.
**KPI target:** CTR 0.5–0.8%; landing dwell 45s+; outbound click-through 35–45%.
**CTA to test:** Primary = "See the Journal". A/B the top CTA: "Continue Reading" (curiosity) vs "See the Journal" (direct).

#### Headlines (35–45 chars)
1. The quiet Bible comeback nobody's talking about
2. Millions returned to Scripture this year
3. A simple page that brought readers back
4. Why quiet believers are reopening their Bibles
5. The one-page method behind the 2025 rebound

#### Descriptions (180–200 chars)
1. After years of decline, weekly Bible reading climbed back to 42 percent in 2025. The people coming back describe a method that is smaller, not bigger — one page per book of the Bible.
2. Barna's 2025 tracking found the first double-digit uptick in American Bible reading in more than a decade. A look at what changed, and the quiet practical habit behind it.
3. Nine million more Americans told researchers they were curious about Scripture in 2025. A short report on what they are reading — and why it is working.
4. For readers who wanted to come back to the Bible but never knew how to start, a simple one-page-per-book frame has been quietly showing up again. Here is what it actually contains.
5. Most Bible plans fail the same way. The readers finding their way back in 2025 describe a smaller structure — 66 books, 66 pages — that finally fits a real life.

#### Image-generation prompts (target 16:9, 1200×674)

**V1 — Hands, no face** (safest for Apple News)
> Editorial photograph, warm natural late-afternoon light. Two adult hands resting on a small open journal and a closed Bible on a wooden kitchen table. Out-of-focus background with a ceramic mug and a folded linen napkin. Warm cream + muted navy + soft gold palette. Matte finish, slight grain, no text overlays, no logos, no visible faces, no stock-photo glossiness. 16:9 aspect ratio, 1200×674.

**V2 — Contemplative woman at kitchen table**
> Editorial photograph, shoulders-up, soft morning window light. A 55-year-old woman in a cream sweater sitting at a wooden kitchen table with an open journal and a worn Bible in front of her. Thoughtful expression, no smile, eyes on the page. Warm cream + navy + muted gold palette. Shallow depth of field, slight film grain, no text overlays, no logos. 16:9 aspect ratio.

**V3 — Overhead flat-lay**
> Top-down overhead photograph, wooden surface, natural window light from the upper left. A 66-page Bible study journal (neutral linen-textured cover) open to a page with simple handwritten notes, a pen resting across it, a closed leather Bible beside it, and a ceramic mug of black coffee. Warm cream + navy + soft gold palette. Editorial magazine feel, no text overlays, no logos, no lifestyle props that feel staged. 16:9 aspect ratio.

**A/B notes.** Test V1 (no face) first on Apple News Select. Test V2 (face, color) vs V2 (same composition in B/W) on MSN + Fox.

**Compliance.** No "pastor" language anywhere. ABS/Barna numbers cited verbatim in description 1, 2, 3.

---

### Angle 2 — The 66-Page Method

**URL:** `https://bible.agentifycrm.io/method`
**Voluum landing ID:** `voluum-method-landing`
**Targeting:** US; all devices; no publisher exclusions at launch. This is the workhorse — run it wide.
**KPI target:** CTR 0.6–1.0% (highest of the five). Highest expected downstream CVR.
**CTA to test:** Primary = "See the Journal". A/B "See Inside" (curiosity) on the top CTA.

#### Headlines
1. How to read every book of the Bible in one page
2. The 66-page method that actually works
3. One page per book. That's the whole plan.
4. Why Bible plans fail — and the simpler fix
5. Finish the Bible in 66 short pages

#### Descriptions
1. Most Bible reading plans collapse inside a month. Readers who use structured one-page-per-book guides are dramatically more likely to finish — here is what that actually looks like.
2. Sixty-six books of the Bible, sixty-six pages. A small study method that fits a ten-minute morning and gets actually used, instead of sitting unread.
3. Context without commentary. Themes without jargon. A daily application without homework. One page per book of the Bible. Nothing else.
4. If Bible study feels too big to start, the problem may not be willpower. A smaller structure — one page per book — answers the size objection, the time objection, and the relevance objection in one move.
5. The simplest way to finally read every book of the Bible — a short, structured page for each one. Designed for real schedules, not Sunday-school idealism.

#### Image-generation prompts

**V1 — Overhead open page with handwriting**
> Top-down overhead editorial photograph, natural window light. A 66-page Bible study journal open to a single page showing three short sections — context, key themes, a daily application prompt — with simple handwritten notes in blue-black ink. A pen resting across the page. Wooden table surface. Warm cream + navy palette, matte finish, slight film grain. No text overlays, no logos, no visible product branding. 16:9 aspect ratio, 1200×674.

**V2 — Close-up of hands writing one line**
> Close-up editorial photograph, soft natural side light. Adult hands holding a pen mid-stroke, writing a short handwritten line on a journal page. Frame is tight on the hand and page; face and body out of frame. Warm cream paper, warm wood background. Matte, no gloss, no text overlay, no logos. 16:9 aspect ratio.

**V3 — Split visual: stacked books vs one slim journal**
> Editorial still-life photograph, overhead. Left side of frame: a tall stack of six thick Bible commentaries and study books, slightly worn. Right side of frame: one slim 66-page Bible study journal lying open, with a smaller pocket Bible beside it. Negative space between them. Wooden surface, warm cream + navy palette, natural window light, slight film grain. Communicates "less is more" without text. 16:9 aspect ratio.

**A/B notes.** Run Tier-3 opener-arc test here (AIDA discovery lede vs PAS problem lede). This is the only angle that runs that experiment.

**Compliance.** No specific completion-rate claim unless sourced from Lifeway. Use "dramatically more likely" phrasing that the landing's Lifeway citation supports.

---

### Angle 3 — The Silent Struggle

**URL:** `https://bible.agentifycrm.io/silent-struggle`
**Voluum landing ID:** `voluum-silent-struggle-landing`
**Targeting:** US; all devices. **Exclude Apple News at the placement level** — too confessional for Apple News editorial curation. Include Fox News and Taboola faith-network publishers.
**KPI target:** CTR 0.3–0.6% (lower, self-selecting); highest dwell + highest CVR of the five.
**CTA to test:** Primary = "See the Journal". Do not test "Buy Now" or any transactional CTA — whiplash against the confessional tone.

#### Headlines
1. I've gone to church 40 years. I still didn't get the Bible.
2. The quiet confession Christians don't share
3. Why so many believers feel lost in Scripture
4. A gentler way to finally understand the Bible
5. If the Bible feels overwhelming, you're not alone

#### Descriptions
1. A long-time churchgoer on the thing most Christians will not say out loud — and the quiet shift that finally made Scripture hold together.
2. If reading the Bible has left you more confused than when you started, you are not the only one. A short letter from a reader on what actually changed.
3. Research from Lifeway and Barna finds that most American Christians — including long-time churchgoers — read the Bible less than they want to. A gentler way through.
4. You do not need more discipline or more commentaries. You might just need a smaller frame. A one-page-per-book approach that finally fits a real reader.
5. The confession most believers keep to themselves: church felt fluent, the Bible didn't. A reader describes what finally made Scripture legible.

#### Image-generation prompts

**V1 — Close-up older woman, Bible on lap**
> Editorial photograph, shoulders-up close-up, soft morning window light. A 60-year-old woman in a neutral-toned cardigan sitting in a wooden chair, a worn closed Bible resting on her lap. Honest, slightly tired expression, no smile, no preachiness. Warm cream + navy + muted gold palette. Shallow depth of field, slight film grain, no text overlay, no logos, no stock-photo glossiness. 16:9 aspect ratio, 1200×674.

**V2 — Same composition in black-and-white**
> Same subject and composition as V1 — 60-year-old woman, shoulders-up, worn closed Bible on lap, morning window light — but rendered in soft black-and-white with documentary warmth. Slight film grain, gentle highlights. No text overlay, no logos. 16:9 aspect ratio.

**V3 — Hands on windowsill, no face**
> Editorial photograph, natural diffused window light from the left. Two adult hands resting on a closed leather Bible on a painted wooden windowsill. Soft out-of-focus backyard or porch visible through the window. Warm cream + navy palette, matte finish, slight film grain. No face visible, no text overlay, no logos, no stock feel. 16:9 aspect ratio.

**A/B notes.** Run Tier-5 (color vs B/W) here: V1 vs V2. B/W often wins on Taboola publisher data — confirm in-market. Do not rotate the headline wording on V3 without testing — the "no face" thumbnail pairs best with headline #1 (first-person).

**Compliance.** Opener is marked "A letter from a reader" on the landing — safe. Never reframe as advertiser voice. Never use "you're doing it wrong."

---

### Angle 4 — The Grandparent's Legacy

**URL:** `https://bible.agentifycrm.io/legacy`
**Voluum landing ID:** `voluum-legacy-landing`
**Targeting:** US; all devices. **Do not target on age** (Taboola sensitive-attribute rule). Let the creative self-select. Include Apple News, Fox News, MSN.
**KPI target:** highest AOV of the five (gift + self-use stacking). Lower CTR acceptable; higher order value compensates.
**CTA to test:** Primary = "See the Journal". On CTA #2 (end of page), A/B "Order One for Each Grandchild" (gift-stack framing) vs "See the Journal" (baseline).

#### Headlines
1. What she wrote in one journal became her grandkids' faith
2. The inheritance no will can capture
3. One page per book. One life of faith. Passed on.
4. She left a Bible journal. They still read it.
5. The legacy most Christian families forget to leave

#### Descriptions
1. We leave photographs and money. We rarely leave the one thing grandchildren ask for later — a written record of what you believed, book by book.
2. A 66-page journal for writing your faith in your own hand, one page per book of the Bible. For yourself or as a gift passed on.
3. A sermon is remembered in fragments. A handwritten page is remembered in full. A quiet approach to leaving Scripture behind for the next generation.
4. Some grandparents fill one in over a year, a page a week. Others keep a few blank on the shelf for the next wedding or baptism. A small, durable kind of inheritance.
5. Not a will, not a letter — something smaller and more used. A page-per-book Bible journal that can be written over a year and handed down.

#### Image-generation prompts

**V1 — Older hands writing (sepia-toned)**
> Editorial photograph, warm sepia-toned natural light from a window. An older adult's hand with a visible gold wedding ring holding a pen mid-stroke, writing a short handwritten line on a journal page. Tight frame on hand and page; no face, no body. Warm cream paper, wood grain visible. Muted amber + cream + soft brown palette. Matte finish, slight film grain, no text overlay, no logos. 16:9 aspect ratio, 1200×674.

**V2 — Two generations, one journal**
> Editorial photograph, warm afternoon window light. An older adult and a young adult (roughly grandparent-and-grandchild age gap) sitting across a wooden kitchen table, a single open Bible study journal between them. Neither figure is the focal point — the open journal is. Faces mostly out of frame or softly lit. Warm cream + navy + muted gold palette, slight film grain, no text overlay, no logos, no staged "family portrait" feel. 16:9 aspect ratio.

**V3 — Stack of journals on a shelf**
> Editorial still-life photograph. A wooden bookshelf with three 66-page Bible study journals stacked, each with a simple handwritten paper label (no readable text — just the impression of handwriting). A few leather-bound Bibles leaning beside them. Warm afternoon shadows, warm cream + navy + muted gold palette, matte finish, slight film grain. No text overlay, no logos, no branding. 16:9 aspect ratio.

**A/B notes.** V1 tends to outperform on emotional resonance; V3 is the best "gifting" visual — pair V3 with the "Order One for Each Grandchild" CTA test. Do not use explicit age targeting — creative self-selects.

**Compliance.** Never use "before it's too late" or any urgency framing — forbidden category on Taboola.

---

### Angle 5 — The Small-Group Favorite

**URL:** `https://bible.agentifycrm.io/small-group-favorite`
**Voluum landing ID:** `voluum-small-group-favorite-landing`
**Targeting:** US; all devices. Include Fox News, MSN, Patheos. No publisher exclusions.
**KPI target:** CTR 0.5–0.8% on Fox.
**CTA to test:** Primary = "See the Journal". A/B "See what small groups use" on CTA #1.

#### Headlines (note: "small groups," not "pastors" — fallback framing per plan §14)
1. The Bible habit small groups keep quietly sharing
2. A one-page method small-group readers swear by
3. What small groups quietly recommend for Bible clarity
4. The simplest Bible practice small groups actually use
5. Why small-group readers keep passing this around

#### Descriptions
1. In small groups across the country, one quiet habit keeps getting passed around — a one-page-per-book Bible journal that is easier to finish than most study plans.
2. Sixty-six books of the Bible, sixty-six pages. A small-group favorite because everybody arrives at the meeting on the same page — literally.
3. The best Bible studies are not the most elaborate ones. They are the ones people finish. A short look at the one-page method quietly spreading in small groups.
4. Not a commentary. Not a reading plan. A simple page-per-book frame that small groups and individual readers have been quietly keeping on the shelf.
5. Context, key themes, and a daily-life prompt — one page per book of the Bible. A study method small groups come back to.

#### Image-generation prompts

**V1 — Open journal on a church pew**
> Editorial photograph, soft daylight from a stained-glass window (cool tones, not saturated). A 66-page Bible study journal lying open on a wooden church pew seat, a pen resting across the open page. No people in frame. Warm cream paper, dark wood, gentle blue + amber light from the window, matte finish, slight film grain. No text overlay, no logos, no overt branding. 16:9 aspect ratio, 1200×674.

**V2 — Hands around an open journal in a small group**
> Editorial photograph, warm natural lamplight. Three or four adult hands resting on or gesturing around an open Bible study journal on a round wooden table, with two worn Bibles beside it. Faces mostly out of frame — the focal point is the shared open journal. Warm cream + navy + muted gold palette, slight film grain, no text overlay, no logos, no staged feel. 16:9 aspect ratio.

**V3 — Journal on a shelf with worn Bibles**
> Editorial still-life photograph. A wooden bookshelf with one slim 66-page Bible study journal standing upright beside three or four well-worn leather Bibles of various sizes. Natural window light from the upper left. Warm cream + navy + muted gold palette, matte finish, slight film grain. No text overlay, no logos, no hero-product framing. Reads as "one reliable tool among trusted books," not "product shot." 16:9 aspect ratio.

**A/B notes.** V2 (small-group hands) tends to beat V3 (still life) on engagement. If Taboola editorial flags the word "small-group" in any headline, reframe to "readers" and re-submit.

**Compliance.** Never fabricate quotes or attribution. If you want a testimonial block, source real quotes from the offer owner first.

---

## 4. Taboola campaign structure

### 4.1 Account layout
One Taboola Ads account → one Saints Label brand → **5 campaigns**, one per angle.

### 4.2 Creative matrix per campaign
3 thumbnails × 5 headlines = **15 creatives**. Upload all 15 on day 1. Description rotates per creative (use the 5 descriptions as your starting pool; Taboola will select the best per serve).

### 4.3 Bid strategy
- **Week 1 (learning):** CPC fixed at $0.35–$0.55. Do not enable Maximize Conversions until the pixel has 30+ conversions per campaign. Taboola guidance is explicit about this.
- **Week 2+:** switch to Maximize Conversions with a target CPA after each campaign passes the 30-conversion threshold.

### 4.4 Targeting
- **Geo:** US only at launch.
- **Device:** no exclusions; let Taboola decide. CNN + MSN skew mobile; Fox skews both; Apple News is all-iOS.
- **Age:** do NOT target on age (Taboola sensitive-attribute rule). Angles 3 + 4 self-select through creative.
- **Publisher exclusions:**
  - Silent Struggle: **exclude Apple News**.
- **Publisher inclusions:**
  - Quiet Return: **include Apple News Select** explicitly.

### 4.5 Daily budget allocation
- **Week 1:** $50/day × 5 campaigns = $250/day gym spend.
- **Week 2+:** reallocate 70% of spend to the top 2 campaigns by CPA. Reserve 20% of total spend for Quiet Return on Apple News Select regardless of CPA — it's the only brand-safe angle for that premium inventory.
- **Hard cap:** $3.5K across the account for the 14-day learning window. Pause-and-review if CPA exceeds 2× breakeven for 72 consecutive hours on any single campaign.

---

## 5. A/B test sequence

Run sequentially — no multivariate until Tier 1 resolves.

| Tier | Test | Scope | Sample requirement |
|---|---|---|---|
| 1 | Creative (headline × thumbnail) | All 5 campaigns, weeks 1–2 | ≥1,000 impressions per variant or 14 days |
| 2 | CTA copy | Angles 1, 2, 5 only (skip 3 + 4 — they need soft CTAs) | ≥1,000 clicks per variant |
| 3 | Opener arc | Method only — AIDA lede vs PAS lede | Requires a code change; ship as a feature-flagged variant |
| 4 | Subhead cadence | All 5 campaigns | Measure scroll depth + outbound click-through, not CTR |
| 5 | Color vs B/W thumb | Angles 1 + 3 | Dedicated A/B test on Taboola publisher data conflict |

**Reporting cadence.** Daily glance at CTR + CPA per campaign. Weekly deep-dive in Voluum for attribution + downstream revenue. **Never pause a creative inside its first 72 hours** (Taboola learning phase).

---

## 6. Launch-day checklist

Sequential — do not skip steps.

1. [ ] Confirm all 5 routes return 200 on hard refresh (open `https://bible.agentifycrm.io/<route>` in a new tab — not client-nav). `vercel.json` rewrite should handle this; if any returns 404, stop.
2. [ ] Open each route, click every CTA, confirm DevTools Network tab shows the request going to `promopage.net/click` with UTMs and any inbound tracking params merged.
3. [ ] Confirm exactly one `#voluum-<angle>-landing-script` element in DOM per page (React Strict Mode double-mount guard).
4. [ ] Register 5 Voluum landings (one per Voluum Landing ID in §2.2).
5. [ ] Wire GTM `dataLayer.push({event: 'cta_click', angle})` in `handleOutboundClick` (TODO slot is prepared in code) — commit + deploy before Week 1.
6. [ ] Install Taboola pixel via GTM on all 5 routes.
7. [ ] Set up S2S postback Voluum → Taboola keyed on `click_id`.
8. [ ] Upload 5 Taboola campaigns with 15-creative matrix each.
9. [ ] Apply publisher exclusions: Silent Struggle excludes Apple News.
10. [ ] Apply publisher inclusions: Quiet Return includes Apple News Select.
11. [ ] Submit each campaign to Taboola editorial review. Apple News Select may take up to 48h.
12. [ ] Fire one test click from each landing through Voluum → confirm attribution lands on the correct campaign + creative.
13. [ ] Enable campaigns at 50% of Day-1 budget ($25/day each) for the first 24h. Watch for editorial rejections.
14. [ ] If clean at 24h, raise to full $50/day. 72-hour hands-off on creative changes after enabling (learning phase).

---

## 7. Compliance checklist (every angle must pass)

- [ ] `SponsoredDisclosure` strip renders at top of every landing.
- [ ] No doomsday / fear / false urgency language on page or in ad copy.
- [ ] No unverifiable numeric claims in ad copy. ABS, Barna, and Lifeway numbers are OK because they cite public sources on the landing.
- [ ] No shaming, no denominational wedges, no political adjacency anywhere.
- [ ] No fabricated testimonials. Angle 5 uses "small-group readers," not "pastors" — maintain this across ads.
- [ ] Headlines 35–45 chars (60 max), descriptions 180–200 (250 max).
- [ ] Thumbnails: no heavy text overlay, no logos, no stock-photo artifice.
- [ ] Every landing has exactly one primary CTA destination: `buildOutboundUrl()` → `promopage.net/click`.
- [ ] `useVoluumLandingPixel()` called with the correct unique `landingId` per page (verify by DOM inspection on each route).
- [ ] Iframe lander `/5-reasons` still breaks out properly (regression check after any `src/` change).

---

## 8. Where the plan lives

- Full research + strategy: `.claude/plans/use-tavily-to-research-abstract-waffle.md`
- Refactor notes + extraction map: sections 4 + 15 of the plan.
- Learnings that apply to tracking: `.claude/learnings.md`.
- Project architecture: `CLAUDE.md`.
- Offer-owner-facing strategy brief: `docs/strategy-brief-for-offer-owner.md`.
