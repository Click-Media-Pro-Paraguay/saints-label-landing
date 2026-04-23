import { BookOpen, Check, Star, ShieldCheck, Truck, Heart, Sparkles, Quote } from "lucide-react";

const SHOPIFY_URL = "{{SHOPIFY_PRODUCT_URL}}";

/* ----------------------------- Reusable bits ----------------------------- */

const CTAButton = ({
  children,
  size = "lg",
  className = "",
}: {
  children: React.ReactNode;
  size?: "lg" | "xl";
  className?: string;
}) => (
  <>
    {/* VOLUUM TRACKING PLACEHOLDER - add Voluum click tracking wrapper on all CTAs */}
    <a
      href={SHOPIFY_URL}
      className={`inline-flex w-full items-center justify-center rounded-full bg-gold px-6 text-center font-semibold text-navy shadow-[0_8px_24px_-8px_hsl(var(--gold)/0.7)] ring-1 ring-gold/40 transition hover:brightness-105 active:scale-[0.99] ${
        size === "xl" ? "min-h-[60px] py-4 text-base sm:text-lg" : "min-h-[52px] py-3 text-base"
      } ${className}`}
    >
      {children}
    </a>
  </>
);

const ImagePlaceholder = ({
  label,
  description,
  ratio = "aspect-[4/3]",
}: {
  label: string;
  description: string;
  ratio?: string;
}) => (
  <div
    className={`${ratio} my-8 w-full overflow-hidden rounded-2xl border-2 border-dashed border-gold/50 bg-cream-deep`}
    role="img"
    aria-label={description}
  >
    <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gold/20">
        <BookOpen className="h-6 w-6 text-gold" />
      </div>
      <p className="font-serif text-base font-semibold text-navy">{label}</p>
      <p className="mt-2 max-w-md text-xs leading-relaxed text-muted-foreground sm:text-sm">{description}</p>
    </div>
  </div>
);

const Stars = () => (
  <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
    ))}
  </div>
);

/* --------------------------------- Page --------------------------------- */

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-28 md:pb-0">
      <article className="mx-auto w-full max-w-[680px] px-5 sm:px-6">
        {/* Tiny brand line (no nav) */}
        <header className="flex items-center justify-center pt-6 pb-4">
          <span className="font-serif text-sm tracking-wide text-navy-soft">Saints Label</span>
        </header>

        {/* ============================ HERO ============================ */}
        <section className="pt-2">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            A Note for Christians Who Want to Read the Bible with More Clarity
          </p>
          <h1 className="font-serif text-3xl font-700 leading-[1.15] text-navy sm:text-4xl md:text-[44px] md:leading-[1.1]">
            Why Thousands of Christians Are Finally Reading Scripture with{" "}
            <span className="text-gold">Real Clarity</span> and Purpose
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-navy-soft sm:text-xl">
            The simple 66-page Bible Study Guide Journal that gives every book of the Bible its own dedicated page —
            with context, key themes, and practical daily-life applications.
          </p>

          <div className="mt-7">
            <CTAButton size="xl">Get My Bible Study Guide Now – Special Price + Free Shipping</CTAButton>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Free US shipping · 30-day satisfaction guarantee
            </p>
          </div>

          {/* IMAGE PLACEHOLDER 1: Peaceful 35-45 year old woman sitting at wooden table with morning light, open Bible and open Saints Label journal in front of her, serene "aha" expression, soft warm tones */}
          <ImagePlaceholder
            label="IMAGE PLACEHOLDER 1"
            description='Peaceful 35-45 year old woman sitting at wooden table with morning light, open Bible and open Saints Label journal in front of her, serene "aha" expression, soft warm tones'
            ratio="aspect-[5/4]"
          />
        </section>

        {/* ============================ PROBLEM ============================ */}
        <section className="mt-6">
          <h2 className="font-serif text-2xl font-700 leading-tight text-navy sm:text-3xl">
            If You’ve Ever Felt Lost in Your Own Bible… You’re Not Alone
          </h2>

          <div className="mt-5 space-y-5 text-[17px] leading-[1.8] text-navy-soft">
            <p>
              If you’ve ever opened your Bible with the best intentions… only to feel lost after a few chapters,
              you’re not alone.
            </p>
            <p>
              Maybe you’ve started in Genesis full of faith and excitement — and quietly closed it somewhere in
              Leviticus, wondering what any of it had to do with your life today.
            </p>
            <p>
              Maybe you’ve read the same passage three times and still walked away unsure what God was actually
              saying to <em>you</em>.
            </p>
            <p>
              Maybe you’ve sat in church listening to a powerful sermon and thought,{" "}
              <span className="font-medium text-navy">“I wish I could read Scripture like that on my own.”</span>
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-cream-deep/60 p-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-navy">Sound familiar?</p>
            <ul className="mt-4 space-y-3">
              {[
                "Getting stuck and discouraged in books like Leviticus, Numbers, or the prophets",
                "Reading a chapter and forgetting what it said an hour later",
                "Loving God’s Word but never knowing how to apply it to real, daily life",
                "Feeling like you need a seminary degree just to understand what you’re reading",
                "Wanting a deeper walk with Jesus — but not knowing where to begin",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[16px] leading-relaxed text-navy-soft">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-[17px] leading-[1.8] text-navy-soft">
            For years, this is exactly how I felt. I loved God. I wanted His Word in my life. But every time I tried
            to dig in on my own, I came away more confused than encouraged.
          </p>
        </section>

        {/* ====================== DISCOVERY / STORY ====================== */}
        <section className="mt-14">
          <h2 className="font-serif text-2xl font-700 leading-tight text-navy sm:text-3xl">
            Then I Discovered Something That Changed Everything…
          </h2>

          <div className="mt-5 space-y-5 text-[17px] leading-[1.8] text-navy-soft">
            <p>
              One quiet morning, after another frustrating attempt to “just read more,” I realized something
              simple but profound:
            </p>
            <p>
              <span className="font-semibold text-navy">
                I didn’t need to read the Bible more — I needed to read it with a guide.
              </span>{" "}
              A trusted hand to walk me through each book, explain its purpose, and help me see how it connects to
              my actual life.
            </p>
            <p>
              I started searching for something that could do that. Most resources were either thick academic
              commentaries that read like textbooks… or fluffy devotionals that barely touched the actual
              Scripture.
            </p>
            <p>I wanted something in between. Something warm, beautiful, and genuinely helpful.</p>
            <p>So I created it.</p>
          </div>

          {/* Pull quote */}
          <figure className="my-8 rounded-2xl border-l-4 border-gold bg-gold/10 p-6 sm:p-7">
            <Quote className="h-6 w-6 text-gold" />
            <blockquote className="mt-3 font-serif text-xl leading-snug text-navy sm:text-2xl">
              “For the first time in my life, the Bible felt less like a maze… and more like a love letter written
              directly to me.”
            </blockquote>
          </figure>

          <h3 className="mt-2 font-serif text-xl font-700 text-navy sm:text-2xl">The Solution</h3>
          <div className="mt-4 space-y-5 text-[17px] leading-[1.8] text-navy-soft">
            <p>
              The <span className="font-semibold text-navy">Saints Label Bible Study Guide Journal</span> is a
              66-page companion — one page for every single book of the Bible, from Genesis to Revelation.
            </p>
            <p>
              Each page gives you the context first (who wrote it, when, and why it matters), the key themes you’ll
              encounter, and — most importantly — a practical application you can carry into your day.
            </p>
            <p>
              No more guessing. No more drifting. Just a clear, faithful path through the Word you’ve always wanted
              to know.
            </p>
          </div>
        </section>

        {/* =================== PRODUCT REVEAL + 5 REASONS =================== */}
        <section className="mt-14">
          <h2 className="font-serif text-2xl font-700 leading-tight text-navy sm:text-[32px]">
            The 5 Reasons This Guide Is Changing How Christians Read Scripture
          </h2>

          {/* IMAGE PLACEHOLDER 2: Close-up of hands holding open journal showing clean structured page layout with "Practical Application" section visible */}
          <ImagePlaceholder
            label="IMAGE PLACEHOLDER 2"
            description='Close-up of hands holding open journal showing clean structured page layout with "Practical Application" section visible'
            ratio="aspect-[4/3]"
          />

          <ol className="mt-6 space-y-5">
            {[
              {
                title: "One Dedicated Page for Every Book",
                body:
                  "All 66 books — Genesis to Revelation — each get their own beautifully laid-out page. No more flipping through dense commentaries trying to figure out where to start.",
              },
              {
                title: "Context First, So Nothing Feels Random",
                body:
                  "Before you read a single chapter, you’ll understand who wrote the book, who it was written to, and what was happening at the time. Suddenly the strange parts make sense.",
              },
              {
                title: "Key Themes Pulled Out for You",
                body:
                  "Instead of getting lost in the details, you’ll see the big-picture themes God is weaving through each book — so you read with eyes wide open.",
              },
              {
                title: "Practical, Daily-Life Application",
                body:
                  "Every page ends with a clear, real-world application. Not vague spiritual fluff — actual ways to live the Word in your relationships, work, parenting, and prayer life.",
              },
              {
                title: "Beautiful Journaling Space + Keepsake Design",
                body:
                  "Generous lined space for your own notes, prayers, and revelations. Designed to be a treasured companion you’ll come back to for years — not a workbook you fill in once and forget.",
              },
            ].map((r, i) => (
              <li
                key={r.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:border-gold/50"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy font-serif text-lg font-700 text-cream">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-700 text-navy sm:text-xl">{r.title}</h3>
                    <p className="mt-2 text-[16px] leading-relaxed text-navy-soft">{r.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8">
            <CTAButton size="xl">Get My Bible Study Guide Now – Special Price + Free Shipping</CTAButton>
          </div>
        </section>

        {/* ========================= TESTIMONIALS ========================= */}
        <section className="mt-14">
          <h2 className="font-serif text-2xl font-700 leading-tight text-navy sm:text-3xl">
            Real Christians Are Seeing Real Transformation
          </h2>
          <p className="mt-3 text-[17px] leading-relaxed text-navy-soft">
            Here’s what readers are saying after just a few weeks with the journal:
          </p>

          <div className="mt-6 space-y-4">
            {[
              {
                name: "Sarah M.",
                location: "Austin, TX",
                quote:
                  "I’ve owned 4 study Bibles and never finished any of them. This little journal got me through Genesis with more understanding than I’ve had in 20 years of being a Christian. I cried on page one.",
              },
              {
                name: "Pastor David R.",
                location: "Grand Rapids, MI",
                quote:
                  "I recommend this to every new believer in our church. The application section alone is worth ten times the price. It bridges the gap between Sunday morning and Tuesday afternoon.",
              },
              {
                name: "Linda K.",
                location: "Charlotte, NC",
                quote:
                  "I gifted one to my daughter and ended up buying three more — for me, my sister, and my mom. We’re reading through the Bible together now. It’s the best thing that’s happened to our family this year.",
              },
              {
                name: "Michael T.",
                location: "Phoenix, AZ",
                quote:
                  "I’m not a ‘journal guy.’ But this isn’t really a journal — it’s a guide that finally made the Bible feel approachable. I look forward to mornings now.",
              },
            ].map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <Stars />
                <blockquote className="mt-3 text-[16px] leading-relaxed text-navy">“{t.quote}”</blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 font-serif font-700 text-navy">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ===================== WHO IT'S FOR + OFFER ===================== */}
        <section className="mt-14">
          <h2 className="font-serif text-2xl font-700 leading-tight text-navy sm:text-3xl">
            Who This Is Perfect For
          </h2>
          <p className="mt-3 text-[17px] leading-relaxed text-navy-soft">
            This isn’t a one-size-fits-all gimmick. It was lovingly created for:
          </p>
          <ul className="mt-5 space-y-3">
            {[
              "New believers who want a gentle, clear place to start",
              "Longtime Christians craving a fresh perspective on Scripture",
              "Busy moms and dads who only have 10–15 quiet minutes a day",
              "Small group leaders looking for a simple study companion",
              "Anyone gifting Scripture to a loved one — birthdays, baptisms, graduations, weddings",
              "Believers who’ve tried “read the Bible in a year” plans and given up",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-[16px] leading-relaxed text-navy-soft">
                <Heart className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Offer */}
          <div className="mt-10 overflow-hidden rounded-2xl border-2 border-gold bg-gradient-to-b from-gold/15 to-cream-deep p-7 sm:p-8">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-gold" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Limited-Time Offer</p>
            </div>
            <h3 className="mt-3 font-serif text-2xl font-700 leading-tight text-navy sm:text-3xl">
              A Special Price for First-Time Readers
            </h3>
            <p className="mt-3 text-[16px] leading-relaxed text-navy-soft">
              Right now, you can get the Saints Label Bible Study Guide Journal at a heavily discounted
              introductory price — with{" "}
              <span className="font-semibold text-navy">free shipping anywhere in the US</span> and our{" "}
              <span className="font-semibold text-navy">30-day, no-questions-asked guarantee</span>. If it doesn’t
              transform your time in the Word, send it back. We’ll refund you in full.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl bg-background/70 p-3">
                <Truck className="mx-auto h-5 w-5 text-gold" />
                <p className="mt-2 text-[11px] font-semibold leading-tight text-navy">Free US Shipping</p>
              </div>
              <div className="rounded-xl bg-background/70 p-3">
                <ShieldCheck className="mx-auto h-5 w-5 text-gold" />
                <p className="mt-2 text-[11px] font-semibold leading-tight text-navy">30-Day Guarantee</p>
              </div>
              <div className="rounded-xl bg-background/70 p-3">
                <Sparkles className="mx-auto h-5 w-5 text-gold" />
                <p className="mt-2 text-[11px] font-semibold leading-tight text-navy">Ships in 24 Hours</p>
              </div>
            </div>

            <div className="mt-6">
              <CTAButton size="xl">Get My Bible Study Guide Now – Special Price + Free Shipping</CTAButton>
            </div>
          </div>
        </section>

        {/* =========================== FINAL CTA =========================== */}
        <section className="mt-14">
          {/* IMAGE PLACEHOLDER 3: Clean product hero shot of the journal cover and interior spread on warm wooden surface */}
          <ImagePlaceholder
            label="IMAGE PLACEHOLDER 3"
            description="Clean product hero shot of the journal cover and interior spread on warm wooden surface"
            ratio="aspect-[4/3]"
          />

          <h2 className="font-serif text-2xl font-700 leading-tight text-navy sm:text-3xl">
            Your Bible Is Waiting. So Is the Clarity You’ve Been Praying For.
          </h2>
          <p className="mt-4 text-[17px] leading-[1.8] text-navy-soft">
            You don’t need another app, another podcast, or another five-year plan. You just need a faithful guide
            in your hand — and 10 quiet minutes a day. Let this journal be the companion that finally helps you
            read God’s Word with the clarity and purpose He’s always wanted you to have.
          </p>

          <div className="mt-7">
            <CTAButton size="xl">Get My Bible Study Guide Now – Special Price + Free Shipping</CTAButton>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Free shipping · 30-day guarantee · Ships within 24 hours
            </p>
          </div>
        </section>

        {/* ============================ FOOTER ============================ */}
        <footer className="mt-16 border-t border-border pt-8">
          <div className="grid grid-cols-2 gap-3 text-center sm:grid-cols-4">
            {[
              { icon: ShieldCheck, label: "Secure Checkout" },
              { icon: Truck, label: "Free US Shipping" },
              { icon: Heart, label: "30-Day Guarantee" },
              { icon: Star, label: "10,000+ Happy Readers" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 rounded-xl bg-cream-deep/60 p-4">
                <Icon className="h-5 w-5 text-gold" />
                <p className="text-[11px] font-semibold leading-tight text-navy">{label}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs leading-relaxed text-muted-foreground">
            This is an advertorial. Results and experiences with Scripture vary by individual. Saints Label is an
            independent Christian publisher and is not affiliated with any specific church or denomination.
          </p>
          <p className="mt-4 pb-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Saints Label. All rights reserved.
          </p>
        </footer>
      </article>

      {/* Sticky mobile CTA */}
      <div
        className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-4 pt-3 backdrop-blur md:hidden"
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 0.75rem)" }}
      >
        {/* VOLUUM TRACKING PLACEHOLDER - add Voluum click tracking wrapper on all CTAs */}
        <a
          href={SHOPIFY_URL}
          className="flex min-h-[52px] w-full items-center justify-center rounded-full bg-gold px-4 text-center text-sm font-semibold leading-tight text-navy shadow-[0_8px_24px_-8px_hsl(var(--gold)/0.7)] ring-1 ring-gold/40 active:scale-[0.99]"
        >
          Get My Bible Study Guide – Free Shipping
        </a>
      </div>
    </div>
  );
};

export default Index;
