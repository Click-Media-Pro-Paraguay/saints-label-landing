import { BookOpen } from "lucide-react";

const SHOPIFY_URL = "{{SHOPIFY_PRODUCT_URL}}";

/* ----------------------------- Reusable bits ----------------------------- */

const CTAButton = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <>
    {/* VOLUUM TRACKING PLACEHOLDER - add Voluum click tracking wrapper on all CTAs */}
    <a
      href={SHOPIFY_URL}
      className={`inline-flex min-h-[48px] items-center justify-center rounded-md bg-gold/90 px-6 py-3 text-center text-[15px] font-medium text-navy transition hover:bg-gold ${className}`}
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
    className={`${ratio} my-10 w-full overflow-hidden rounded-lg border border-dashed border-border bg-cream-deep/60`}
    role="img"
    aria-label={description}
  >
    <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
      <BookOpen className="mb-3 h-5 w-5 text-navy-soft/60" />
      <p className="font-serif text-sm font-semibold text-navy">{label}</p>
      <p className="mt-2 max-w-md text-xs leading-relaxed text-muted-foreground">{description}</p>
    </div>
  </div>
);

/* --------------------------------- Page --------------------------------- */

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-28 md:pb-0">
      <article className="mx-auto w-full max-w-[680px] px-5 sm:px-6">
        {/* Tiny brand line (no nav) */}
        <header className="flex items-center justify-center pt-8 pb-6">
          <span className="font-serif text-sm tracking-wide text-navy-soft">Saints Label</span>
        </header>

        {/* ============================ HERO ============================ */}
        <section className="pt-4">
          <h1 className="font-serif text-[28px] font-semibold leading-[1.2] text-navy sm:text-[34px] md:text-[38px] md:leading-[1.18]">
            Why Thousands of Christians Are Finally Reading Scripture with Real Clarity and Purpose
          </h1>
          <p className="mt-6 text-[18px] leading-[1.7] text-navy-soft">
            The simple 66-page Bible Study Guide Journal that gives every book of the Bible its own dedicated page —
            with context, key themes, and practical daily-life applications.
          </p>

          <div className="mt-8">
            <CTAButton>Get My Bible Study Guide Now – Special Price + Free Shipping</CTAButton>
          </div>

          {/* IMAGE PLACEHOLDER 1: Peaceful 35-45 year old woman sitting at wooden table with morning light, open Bible and open Saints Label journal in front of her, serene "aha" expression, soft warm tones */}
          <ImagePlaceholder
            label="IMAGE PLACEHOLDER 1"
            description='Peaceful 35-45 year old woman sitting at wooden table with morning light, open Bible and open Saints Label journal in front of her, serene "aha" expression, soft warm tones'
            ratio="aspect-[5/4]"
          />
        </section>

        {/* ============================ PROBLEM ============================ */}
        <section className="mt-10">
          <h2 className="font-serif text-[24px] font-semibold leading-snug text-navy sm:text-[28px]">
            If You've Ever Felt Lost in Your Own Bible… You're Not Alone
          </h2>

          <div className="mt-6 space-y-5 text-[17px] leading-[1.85] text-navy-soft">
            <p>
              If you've ever opened your Bible with the best intentions… only to feel lost after a few chapters,
              you're not alone.
            </p>
            <p>
              Maybe you've started in Genesis full of faith and excitement — and quietly closed it somewhere in
              Leviticus, wondering what any of it had to do with your life today.
            </p>
            <p>
              Maybe you've read the same passage three times and still walked away unsure what God was actually
              saying to <em>you</em>.
            </p>
            <p>
              Maybe you've sat in church listening to a powerful sermon and thought,{" "}
              <span className="italic">"I wish I could read Scripture like that on my own."</span>
            </p>
            <p>
              Perhaps it's the familiar feeling of getting stuck and discouraged in books like Leviticus, Numbers,
              or the prophets — reading a chapter and forgetting what it said an hour later, loving God's Word but
              never knowing how to apply it to real, daily life, or feeling like you need a seminary degree just to
              understand what you're reading.
            </p>
            <p>
              For years, this is exactly how I felt. I loved God. I wanted His Word in my life. But every time I
              tried to dig in on my own, I came away more confused than encouraged.
            </p>
          </div>
        </section>

        {/* ====================== DISCOVERY / STORY ====================== */}
        <section className="mt-14">
          <h2 className="font-serif text-[24px] font-semibold leading-snug text-navy sm:text-[28px]">
            Then I Discovered Something That Changed Everything…
          </h2>

          <div className="mt-6 space-y-5 text-[17px] leading-[1.85] text-navy-soft">
            <p>
              One quiet morning, after another frustrating attempt to "just read more," I realized something simple
              but profound:
            </p>
            <p>
              I didn't need to read the Bible more — I needed to read it with a guide. A trusted hand to walk me
              through each book, explain its purpose, and help me see how it connects to my actual life.
            </p>
            <p>
              I started searching for something that could do that. Most resources were either thick academic
              commentaries that read like textbooks… or fluffy devotionals that barely touched the actual
              Scripture.
            </p>
            <p>I wanted something in between. Something warm, beautiful, and genuinely helpful.</p>
            <p>So I created it.</p>
          </div>

          <blockquote className="my-8 border-l-2 border-border pl-5 font-serif text-[20px] italic leading-snug text-navy sm:text-[22px]">
            "For the first time in my life, the Bible felt less like a maze… and more like a love letter written
            directly to me."
          </blockquote>

          <h3 className="mt-10 font-serif text-[20px] font-semibold text-navy sm:text-[22px]">The Solution</h3>
          <div className="mt-4 space-y-5 text-[17px] leading-[1.85] text-navy-soft">
            <p>
              The Saints Label Bible Study Guide Journal is a 66-page companion — one page for every single book
              of the Bible, from Genesis to Revelation.
            </p>
            <p>
              Each page gives you the context first (who wrote it, when, and why it matters), the key themes you'll
              encounter, and — most importantly — a practical application you can carry into your day.
            </p>
            <p>
              No more guessing. No more drifting. Just a clear, faithful path through the Word you've always wanted
              to know.
            </p>
          </div>
        </section>

        {/* =================== PRODUCT REVEAL + 5 REASONS =================== */}
        <section className="mt-14">
          <h2 className="font-serif text-[24px] font-semibold leading-snug text-navy sm:text-[28px]">
            The 5 Reasons This Guide Is Changing How Christians Read Scripture
          </h2>

          {/* IMAGE PLACEHOLDER 2: Close-up of hands holding open journal showing clean structured page layout with "Practical Application" section visible */}
          <ImagePlaceholder
            label="IMAGE PLACEHOLDER 2"
            description='Close-up of hands holding open journal showing clean structured page layout with "Practical Application" section visible'
            ratio="aspect-[4/3]"
          />

          <ol className="mt-4 space-y-9">
            {[
              {
                title: "One Dedicated Page for Every Book",
                body:
                  "All 66 books — Genesis to Revelation — each get their own beautifully laid-out page. No more flipping through dense commentaries trying to figure out where to start.",
              },
              {
                title: "Context First, So Nothing Feels Random",
                body:
                  "Before you read a single chapter, you'll understand who wrote the book, who it was written to, and what was happening at the time. Suddenly the strange parts make sense.",
              },
              {
                title: "Key Themes Pulled Out for You",
                body:
                  "Instead of getting lost in the details, you'll see the big-picture themes God is weaving through each book — so you read with eyes wide open.",
              },
              {
                title: "Practical, Daily-Life Application",
                body:
                  "Every page ends with a clear, real-world application. Not vague spiritual fluff — actual ways to live the Word in your relationships, work, parenting, and prayer life.",
              },
              {
                title: "Beautiful Journaling Space + Keepsake Design",
                body:
                  "Generous lined space for your own notes, prayers, and revelations. Designed to be a treasured companion you'll come back to for years — not a workbook you fill in once and forget.",
              },
            ].map((r, i) => (
              <li key={r.title}>
                <h3 className="font-serif text-[19px] font-semibold leading-snug text-navy sm:text-[20px]">
                  {i + 1}. {r.title}
                </h3>
                <p className="mt-3 text-[17px] leading-[1.85] text-navy-soft">{r.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12">
            <CTAButton>Get My Bible Study Guide Now – Special Price + Free Shipping</CTAButton>
          </div>
        </section>

        {/* ========================= TESTIMONIALS ========================= */}
        <section className="mt-14">
          <h2 className="font-serif text-[24px] font-semibold leading-snug text-navy sm:text-[28px]">
            Real Christians Are Seeing Real Transformation
          </h2>
          <p className="mt-4 text-[17px] leading-[1.85] text-navy-soft">
            Here's what readers are saying after just a few weeks with the journal:
          </p>

          <div className="mt-8 space-y-10">
            {[
              {
                name: "Sarah M.",
                location: "Austin, TX",
                quote:
                  "I've owned 4 study Bibles and never finished any of them. This little journal got me through Genesis with more understanding than I've had in 20 years of being a Christian. I cried on page one.",
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
                  "I gifted one to my daughter and ended up buying three more — for me, my sister, and my mom. We're reading through the Bible together now. It's the best thing that's happened to our family this year.",
              },
              {
                name: "Michael T.",
                location: "Phoenix, AZ",
                quote:
                  "I'm not a 'journal guy.' But this isn't really a journal — it's a guide that finally made the Bible feel approachable. I look forward to mornings now.",
              },
            ].map((t) => (
              <figure key={t.name} className="border-l-2 border-border pl-5">
                <blockquote className="font-serif text-[18px] italic leading-relaxed text-navy">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-3 text-sm text-muted-foreground">
                  — {t.name}, {t.location}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ===================== WHO IT'S FOR + OFFER ===================== */}
        <section className="mt-14">
          <h2 className="font-serif text-[24px] font-semibold leading-snug text-navy sm:text-[28px]">
            Who This Is Perfect For
          </h2>
          <p className="mt-4 text-[17px] leading-[1.85] text-navy-soft">
            This isn't a one-size-fits-all gimmick. It was lovingly created for:
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-[17px] leading-[1.85] text-navy-soft marker:text-navy-soft/60">
            <li>New believers who want a gentle, clear place to start</li>
            <li>Longtime Christians craving a fresh perspective on Scripture</li>
            <li>Busy moms and dads who only have 10–15 quiet minutes a day</li>
            <li>Small group leaders looking for a simple study companion</li>
            <li>Anyone gifting Scripture to a loved one — birthdays, baptisms, graduations, weddings</li>
            <li>Believers who've tried "read the Bible in a year" plans and given up</li>
          </ul>

          <h3 className="mt-12 font-serif text-[20px] font-semibold text-navy sm:text-[22px]">
            A Note on the Offer
          </h3>
          <p className="mt-4 text-[17px] leading-[1.85] text-navy-soft">
            Right now, you can get the Saints Label Bible Study Guide Journal at a heavily discounted introductory
            price, with free shipping anywhere in the US and a 30-day, no-questions-asked guarantee. If it doesn't
            transform your time in the Word, send it back and we'll refund you in full.
          </p>

          <div className="mt-8">
            <CTAButton>Get My Bible Study Guide Now – Special Price + Free Shipping</CTAButton>
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

          <h2 className="font-serif text-[24px] font-semibold leading-snug text-navy sm:text-[28px]">
            Your Bible Is Waiting. So Is the Clarity You've Been Praying For.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.85] text-navy-soft">
            You don't need another app, another podcast, or another five-year plan. You just need a faithful guide
            in your hand — and 10 quiet minutes a day. Let this journal be the companion that finally helps you
            read God's Word with the clarity and purpose He's always wanted you to have.
          </p>

          <div className="mt-8">
            <CTAButton>Get My Bible Study Guide Now – Special Price + Free Shipping</CTAButton>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Free shipping · 30-day guarantee · Ships within 24 hours
            </p>
          </div>
        </section>

        {/* ============================ FOOTER ============================ */}
        <footer className="mt-20 border-t border-border pt-8">
          <p className="text-center text-xs text-muted-foreground">
            Secure Checkout · Free US Shipping · 30-Day Guarantee · 10,000+ Happy Readers
          </p>
          <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">
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
          className="flex min-h-[48px] w-full items-center justify-center rounded-md bg-gold/90 px-4 text-center text-sm font-medium leading-tight text-navy"
        >
          Get My Bible Study Guide – Free Shipping
        </a>
      </div>
    </div>
  );
};

export default Index;
