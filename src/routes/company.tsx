import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "Funngro for Companies — Reach 70 Lakh+ young Indians with authentic campaigns" },
      {
        name: "description",
        content:
          "Run brand promotion, influencer, sampling, survey & referral campaigns at scale with Funngro. Tap 70 lakh+ verified young Indian creators across 5,000+ brands.",
      },
      { name: "keywords", content: "influencer marketing india, gen z marketing, micro influencer platform, brand campaigns india, youth marketing, funngro for brands" },
      { property: "og:title", content: "Funngro for Companies — India's youth marketing engine" },
      { property: "og:description", content: "Run authentic campaigns with 70 lakh+ verified Gen Z creators. Trusted by 5,000+ Indian brands." },
      { property: "og:url", content: "/company" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Funngro for Companies" },
      { name: "twitter:description", content: "Reach 70 lakh+ young Indians with authentic brand campaigns." },
    ],
    links: [
      { rel: "canonical", href: "/company" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Funngro for Brands",
          provider: { "@type": "Organization", name: "Funngro" },
          areaServed: "IN",
          description:
            "Performance-led influencer, sampling, content and referral campaigns powered by 70 lakh+ young Indian creators.",
          serviceType: "Influencer & Performance Marketing",
        }),
      },
    ],
  }),
  component: CompanyPage,
});

const stats = [
  ["70 Lakh+", "Verified young creators"],
  ["5,000+", "Brand partners"],
  ["12+", "Campaign formats"],
  ["28", "States covered"],
];

const offerings = [
  ["01", "Brand Promotion", "Authentic social posts, reels and stories from Gen Z micro-influencers your audience actually follows."],
  ["02", "Influencer Content", "On-brief reels, UGC, reviews & long-form video — produced and approved in days, not months."],
  ["03", "Sampling & Trials", "Get product into hands of the right youth cohorts with verified pin-code level targeting."],
  ["04", "Surveys & Research", "Ship surveys to 70L+ users and get statistically significant Gen Z insights in 48 hours."],
  ["05", "Referrals & Acquisition", "Pay-per-install, pay-per-signup and pay-per-transaction performance campaigns."],
  ["06", "Community AMAs", "Run live AMAs, beta-testing rooms and product-ideation jams with your most engaged users."],
];

const brands = [
  "ICICI", "Paytm", "Kotak", "CarDekho", "Toluna", "Nielsen", "Lifelong", "LXME", "Mpokket", "Novio",
];

const steps = [
  ["01", "Brief us", "Share your KPIs — awareness, installs, sales, research. We map the campaign in 24 hours."],
  ["02", "Go live", "We activate the right creators by age, city, interest & language. Approve content from the dashboard."],
  ["03", "Measure & scale", "See real-time reach, engagement and conversions. Double-down on what works, instantly."],
];

const testimonials = [
  ["Head of Growth, Fintech Unicorn", "Funngro delivered 3.2x cheaper installs than meta ads — and the users actually transact."],
  ["Brand Manager, D2C Skincare", "We sampled 50,000 sachets across 200 cities in 11 days. Insights came back the same week."],
  ["VP Marketing, BFSI", "The Gen Z creator pool here is unmatched. Compliance and brand safety were taken seriously."],
];

const faqs = [
  ["What's the minimum campaign size?", "We run pilots starting at ₹1 lakh and scale to multi-crore always-on programmes."],
  ["How fast can we go live?", "Most campaigns are activated within 72 hours of brief sign-off."],
  ["Is the creator base verified?", "Yes — every creator is KYC-verified, age-tagged and reputation-scored on the platform."],
  ["Do you guarantee outcomes?", "Performance campaigns (installs / signups / sales) are billed only on verified conversions."],
];

function CompanyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <span className="font-mono text-muted-foreground">🏢 Trusted by 5,000+ Indian brands · ISO-grade brand safety</span>
          <a href="#contact" className="font-mono text-brand hover:underline">Talk to sales ▸</a>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-primary-foreground font-bold">F</span>
            <span className="text-xl font-display">Funngro</span>
          </Link>
          <nav className="hidden gap-6 text-sm md:flex">
            <Link to="/" className="rounded-full px-3 py-1 text-muted-foreground hover:text-foreground">For Teens</Link>
            <Link to="/company" className="rounded-full bg-brand/15 px-3 py-1 text-brand">For Companies</Link>
            <a href="#offerings" className="text-muted-foreground hover:text-foreground">Offerings</a>
            <a href="#how" className="text-muted-foreground hover:text-foreground">How it works</a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground">FAQ</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:shadow-glow">
            Book a demo →
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:pt-28">
          <div>
            <p className="label-eyebrow mb-6">· For brands · For agencies · 2026 ·</p>
            <h1 className="text-5xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
              India's youth.<br />
              <span className="italic-accent">Activated on demand.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              Funngro is the always-on marketing engine that connects your brand to 70 lakh+ verified young Indians — for influencer, sampling, performance and research campaigns. Pay only for outcomes.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-3 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:shadow-glow">
                Book a demo <span>→</span>
              </a>
              <a href="#case-studies" className="inline-flex items-center gap-3 rounded-full border border-border px-6 py-3.5 text-sm hover:bg-secondary">
                See case studies ▸
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-4">
              {stats.map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl text-brand">{n}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-10 rounded-[3rem] bg-brand/20 blur-3xl" />
            <div className="relative rounded-2xl border border-border bg-card p-6 shadow-glow">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-muted-foreground">CAMPAIGN · LIVE</span>
                <span className="font-mono text-brand">● ACTIVE</span>
              </div>
              <h3 className="mt-3 font-display text-2xl text-cream">HDFC Credit Card · Q2</h3>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[["Reach", "8.4M"], ["Installs", "42,180"], ["CPI", "₹38"]].map(([k, v]) => (
                  <div key={k} className="rounded-xl border border-border p-3">
                    <div className="font-mono text-[10px] text-muted-foreground">{k.toUpperCase()}</div>
                    <div className="mt-1 font-display text-xl text-brand">{v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 space-y-2">
                {[["@kushal.k · Delhi", "1.2K"], ["@anshika.m · Mumbai", "3.4K"], ["@sayyam.18 · Pune", "920"]].map(([n, v]) => (
                  <div key={n} className="flex items-center justify-between rounded-lg bg-secondary/40 px-3 py-2 text-xs">
                    <span>{n}</span>
                    <span className="font-mono text-brand">{v} clicks</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl bg-brand/10 p-3 text-xs">
                <div className="flex items-center justify-between"><span>Today's spend</span><span className="font-mono text-brand">₹1,60,284</span></div>
                <div className="mt-1 flex items-center justify-between text-muted-foreground"><span>Conversions</span><span className="font-mono">4,221</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo wall */}
      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="label-eyebrow text-center">· Loved by India's biggest brands ·</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {brands.map(b => (
              <span key={b} className="rounded-full border border-border bg-card px-5 py-3 font-display text-lg">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section id="offerings" className="border-t border-border bg-secondary/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="label-eyebrow">· What we run for you ·</p>
          <h2 className="mt-4 max-w-3xl text-4xl text-cream sm:text-5xl">
            One platform. <span className="italic-accent">Every youth campaign.</span>
          </h2>
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {offerings.map(([n, t, d]) => (
              <div key={n} className="bg-background p-8 transition hover:bg-card">
                <div className="font-mono text-sm text-brand">{n}</div>
                <h3 className="mt-4 text-xl text-cream">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="label-eyebrow">· How it works ·</p>
          <h2 className="mt-4 max-w-3xl text-4xl text-cream sm:text-5xl">
            From brief to live in <span className="italic-accent">72 hours.</span>
          </h2>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {steps.map(([n, t, d]) => (
              <div key={n} className="rounded-2xl border border-border bg-card p-8 transition hover:border-brand">
                <div className="font-mono text-sm text-brand">{n}</div>
                <h3 className="mt-6 text-2xl text-cream">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies / testimonials */}
      <section id="case-studies" className="border-t border-border bg-secondary/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="label-eyebrow">· In their words ·</p>
          <h2 className="mt-4 max-w-3xl text-4xl text-cream sm:text-5xl">
            Brands ship faster <span className="italic-accent">with Funngro.</span>
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map(([who, quote]) => (
              <figure key={who} className="rounded-2xl border border-border bg-card p-8">
                <blockquote className="text-lg leading-snug text-cream/90">"{quote}"</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4 font-mono text-xs text-muted-foreground">— {who}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / FAQ */}
      <section id="faq" className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="label-eyebrow">· Frequently asked ·</p>
          <h2 className="mt-4 max-w-3xl text-4xl text-cream sm:text-5xl">
            The fine print, <span className="italic-accent">up front.</span>
          </h2>
          <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card">
            {faqs.map(([q, a]) => (
              <details key={q} className="group p-6">
                <summary className="flex cursor-pointer items-center justify-between text-lg text-cream">
                  {q}
                  <span className="font-mono text-brand transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="border-t border-border bg-hero py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="label-eyebrow">· Ready when you are ·</p>
          <h2 className="mt-6 text-5xl text-cream sm:text-7xl">
            Activate young India. <span className="italic-accent">This week.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">Tell us your goal. We'll come back in 24 hours with a tailored plan and a sample creator list.</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:brands@funngro.com" className="inline-flex items-center gap-3 rounded-full bg-brand px-7 py-4 font-medium text-primary-foreground transition hover:shadow-glow">brands@funngro.com →</a>
            <Link to="/" className="inline-flex items-center gap-3 rounded-full border border-border px-7 py-4 font-medium hover:bg-secondary">See the teen side ▸</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand text-primary-foreground font-bold">F</span>
            <span className="font-display text-lg text-foreground">Funngro</span>
          </div>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-foreground">For Teens</Link>
            <Link to="/company" className="hover:text-foreground">For Companies</Link>
          </div>
          <div className="font-mono text-xs">© 2026 · Made in India</div>
        </div>
      </footer>
    </div>
  );
}
