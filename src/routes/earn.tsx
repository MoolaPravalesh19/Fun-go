import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/earn")({
  head: () => ({
    meta: [
      { title: "How to earn on Funngro — 5-step deep dive | Real brand campaigns, UPI payouts" },
      {
        name: "description",
        content:
          "The complete 5-step guide to earning on Funngro: download, verify, pick a brand campaign, submit your work, get paid in UPI within 24 hours.",
      },
      { property: "og:title", content: "How to earn on Funngro — 5-step deep dive" },
      { property: "og:description", content: "Download → Verify → Pick a campaign → Submit → Get paid in UPI. Real money from real brands." },
      { property: "og:url", content: "/earn" },
      { property: "og:type", content: "article" },
      { name: "twitter:title", content: "How to earn on Funngro — 5-step deep dive" },
      { name: "twitter:description", content: "The complete 5-step playbook for earning real money from real brand campaigns on Funngro." },
    ],
    links: [
      { rel: "canonical", href: "/earn" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: EarnPage,
});

type Step = {
  n: string;
  title: string;
  blurb: string;
  bullets: string[];
  meta: string;
};

const STEPS: Step[] = [
  {
    n: "01",
    title: "Download & sign up",
    blurb:
      "Grab the Funngro app from Play Store or App Store. OTP verification takes two minutes — no documents, no paperwork.",
    bullets: [
      "Phone OTP sign-up, no Aadhaar upload",
      "Pick your interests — fashion, gaming, food, tech, fitness",
      "Build a 60-second creator profile to unlock briefs",
    ],
    meta: "Avg. time: 2 min",
  },
  {
    n: "02",
    title: "Verify your profile",
    blurb:
      "Add your UPI ID (or bank account), connect one social handle, and unlock the full campaign wall. Brands prefer verified creators.",
    bullets: [
      "Add UPI / IFSC for instant payouts",
      "Link Instagram, YouTube Shorts or X",
      "Get a green ✓ — earn 1.4× more on briefs",
    ],
    meta: "One-time setup",
  },
  {
    n: "03",
    title: "Pick a brand campaign",
    blurb:
      "Browse 5,000+ live briefs from real brands — promotion, content, sampling, referrals, surveys, micro-tasks. Filter by payout, effort, or category.",
    bullets: [
      "₹50 to ₹50,000+ per campaign",
      "Clear deliverables, fixed payout, no haggling",
      "Save briefs and apply with one tap",
    ],
    meta: "5,000+ live campaigns",
  },
  {
    n: "04",
    title: "Submit your work",
    blurb:
      "Follow the brief, upload your content or proof inside the app, and hit submit. Brand reviews happen within 24 hours — most within 6.",
    bullets: [
      "In-app uploader for reels, photos, links",
      "Re-submit free if a brand requests edits",
      "Track status live from the Earnings tab",
    ],
    meta: "Review ≤ 24 hr",
  },
  {
    n: "05",
    title: "Get paid in UPI or bank",
    blurb:
      "Once approved, money lands in your UPI or bank within 24 hours. No minimum threshold, no fees, no waiting for monthly cycles.",
    bullets: [
      "Instant UPI to any app — GPay, PhonePe, Paytm",
      "₹0 minimum, ₹0 platform fee",
      "Tax-ready earnings summary every month",
    ],
    meta: "First payout < 24 hr",
  },
];

function EarnPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Header */}
      <header className="border-b border-border/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to="/" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-primary font-bold text-primary-foreground" style={{ fontFamily: "Syne, sans-serif" }}>F</div>
            <span className="text-xl font-bold" style={{ fontFamily: "Syne, sans-serif" }}>Funngro</span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <Link to="/teen" className="hover:text-foreground">For Teens</Link>
            <Link to="/company" className="hover:text-foreground">For Companies</Link>
          </nav>
          <Link to="/" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Download →
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <p className="label-eyebrow text-brand">· THE 5-STEP DEEP DIVE ·</p>
        <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl" style={{ fontFamily: "Syne, sans-serif" }}>
          From download to <span className="italic-accent text-brand">first payout</span> — in under 24 hours.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Here's exactly how 70 lakh+ young Indians turn real brand campaigns into real money on Funngro. No fluff — just the five steps that actually pay.
        </p>

        {/* Quick stats bento */}
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          <div className="bento-tile p-6">
            <p className="font-mono text-xs text-muted-foreground">LIVE EARNINGS TODAY</p>
            <p className="mt-3 text-2xl font-bold text-brand" style={{ fontFamily: "Syne, sans-serif" }}>₹14,10,462</p>
          </div>
          <div className="bento-tile p-6">
            <p className="font-mono text-xs text-muted-foreground">ACTIVE BRIEFS</p>
            <p className="mt-3 text-2xl font-bold" style={{ fontFamily: "Syne, sans-serif" }}>5,000+</p>
          </div>
          <div className="bento-tile p-6">
            <p className="font-mono text-xs text-muted-foreground">AVG. FIRST PAYOUT</p>
            <p className="mt-3 text-2xl font-bold" style={{ fontFamily: "Syne, sans-serif" }}>&lt; 24h</p>
          </div>
          <div className="bento-tile p-6">
            <p className="font-mono text-xs text-muted-foreground">PLATFORM FEE</p>
            <p className="mt-3 text-2xl font-bold" style={{ fontFamily: "Syne, sans-serif" }}>₹0</p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="space-y-6">
          {STEPS.map((step, i) => (
            <article
              key={step.n}
              className="bento-tile grid gap-8 p-8 md:grid-cols-[180px_1fr_220px] md:p-12"
            >
              <div>
                <p className="font-mono text-sm text-brand">{step.n}</p>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">Step {i + 1} of 5</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold md:text-4xl" style={{ fontFamily: "Syne, sans-serif" }}>
                  {step.title}
                </h2>
                <p className="mt-3 text-base text-muted-foreground md:text-lg">{step.blurb}</p>
                <ul className="mt-5 space-y-2">
                  {step.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground/90">
                      <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-between gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-5">
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">At a glance</p>
                <p className="text-lg font-semibold text-brand" style={{ fontFamily: "Syne, sans-serif" }}>{step.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold md:text-5xl" style={{ fontFamily: "Syne, sans-serif" }}>
          Common questions
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            ["Is Funngro really free?", "Yes. Download, sign-up, and payouts are 100% free. There's no subscription and no platform fee deducted from your earnings."],
            ["Do I need followers to earn?", "No. Most campaigns are open to everyone — surveys, micro-tasks, sampling, and referrals don't need any followers."],
            ["How fast is the first payout?", "Most creators receive their first UPI payout within 24 hours of brand approval. Some campaigns pay within minutes."],
            ["What if a brand rejects my work?", "You can re-submit free of cost based on feedback. If a brief is unclear, our support team helps you sort it out within hours."],
          ].map(([q, a]) => (
            <div key={q} className="bento-tile p-7">
              <h3 className="text-lg font-bold" style={{ fontFamily: "Syne, sans-serif" }}>{q}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="bento-tile flex flex-col items-start gap-6 p-10 md:flex-row md:items-center md:justify-between md:p-14">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl" style={{ fontFamily: "Syne, sans-serif" }}>
              Ready for your <span className="italic-accent text-brand">first payout</span>?
            </h2>
            <p className="mt-3 text-muted-foreground">Download Funngro and pick your first brand campaign today.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/" className="rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground hover:bg-primary/90">
              Download the app →
            </Link>
            <Link to="/company" className="rounded-full border border-border px-7 py-3.5 font-medium hover:bg-secondary">
              I'm a brand
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Funngro · India's #1 teen earning app
      </footer>
    </div>
  );
}
