import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Funngro — Earn from real brand campaigns | India's #1 teen earning app" },
      {
        name: "description",
        content:
          "70 lakh young Indians earn from real brand campaigns on Funngro — promotion, content, referrals, surveys & micro-tasks. Free, paid in UPI. Featured on Shark Tank India S2.",
      },
      { name: "keywords", content: "funngro, earn money online india, teen jobs, student earning app, brand campaigns, micro influencer india, UPI payouts" },
      { property: "og:title", content: "Funngro — Get paid by brands you already love" },
      { property: "og:description", content: "Real brands. Real rupees. Every day. Featured on Shark Tank India S2." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Funngro — Get paid by brands you already love" },
      { name: "twitter:description", content: "70 lakh young Indians earn from real brand campaigns on Funngro." },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MobileApplication",
          name: "Funngro",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Android, iOS",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.2", ratingCount: "70000" },
          offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
        }),
      },
    ],
  }),
  component: Index,
});

const brands = [
  ["BFSI", "ICICI"], ["D2C", "Novio"], ["FINTECH", "Paytm"], ["RESEARCH", "Toluna"],
  ["MOBILITY", "CarDekho"], ["D2C", "Lifelong"], ["BFSI", "Kotak"], ["FINTECH", "LXME"],
  ["RESEARCH", "Nielsen"], ["FINTECH", "Mpokket"],
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top announcement */}
      <div className="border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <span className="font-mono text-muted-foreground">🦈 Shark Tank India S2 · Backed by SucSEED</span>
          <a href="#shark-tank" className="font-mono text-brand hover:underline">Read the inside story ▸</a>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-primary-foreground font-bold">F</span>
            <span className="text-xl font-display">Funngro</span>
          </a>
          <nav className="hidden gap-6 text-sm md:flex">
            <Link to="/teen" className="rounded-full bg-brand/15 px-3 py-1 text-brand">For Teens</Link>
            <Link to="/company" className="rounded-full px-3 py-1 text-muted-foreground hover:text-foreground">For Companies</Link>
            {["Stories", "Arcade", "Blog"].map(n => (
              <a key={n} href={`#${n.toLowerCase()}`} className="text-muted-foreground hover:text-foreground">{n}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden gap-1 rounded-full border border-border p-1 font-mono text-xs sm:flex">
              <span className="rounded-full bg-brand px-3 py-1 text-primary-foreground">EN</span>
              <span className="px-3 py-1 text-muted-foreground">Hi-En</span>
            </div>
            <a href="#download" className="group inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:shadow-glow">
              Download <span className="grid h-6 w-6 place-items-center rounded-full bg-primary-foreground/15">→</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero — Bento grid */}
      <section className="relative overflow-hidden bg-hero">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:pt-20">
          <div className="grid grid-cols-12 gap-4 auto-rows-fr">

            {/* Main hero tile */}
            <div className="bento-tile col-span-12 lg:col-span-8 row-span-2 relative overflow-hidden p-10 md:p-14 flex flex-col justify-center">
              <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand/30 blur-[120px]" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-primary-foreground font-bold">F</span>
                  <span className="label-eyebrow">India's Youth · India's Brands · 2026</span>
                </div>
                <h1 className="text-5xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
                  Get paid by brands{" "}
                  <span className="italic-accent">YOU already love.</span>
                </h1>
                <p className="mt-8 max-w-xl text-lg text-muted-foreground">
                  Seventy lakh young Indians work with India's biggest brands on Funngro — brand promotion, content, referrals, sampling, surveys. Get paid in UPI. Free, forever.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a href="#download" className="inline-flex items-center gap-2 rounded-2xl bg-brand px-7 py-4 font-bold text-primary-foreground transition hover:shadow-glow">
                    Download app <span>→</span>
                  </a>
                  <a href="#how" className="inline-flex items-center gap-2 rounded-2xl border border-border bg-white/5 px-7 py-4 font-bold hover:bg-white/10">
                    See how it works
                  </a>
                </div>
              </div>
            </div>

            {/* Live earnings tile */}
            <div className="bento-tile col-span-12 md:col-span-6 lg:col-span-4 row-span-2 relative overflow-hidden p-8 flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500/10 px-3 py-2 text-xs font-bold text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-dot" />
                  LIVE EARNINGS
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">This Week</div>
              </div>
              <div className="my-8">
                <div className="font-display text-5xl text-cream tracking-tight">₹14,10,462</div>
                <p className="mt-2 text-sm text-muted-foreground">Distributed to 481 teens today</p>
              </div>
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  <div className="h-10 w-10 rounded-full border-2 border-card bg-brand/40" />
                  <div className="h-10 w-10 rounded-full border-2 border-card bg-brand-glow/40" />
                  <div className="h-10 w-10 rounded-full border-2 border-card bg-brand/60" />
                </div>
                <span className="ml-3 font-mono text-xs text-muted-foreground">+4.2k active now</span>
              </div>
            </div>

            {/* Stat tile — users */}
            <div className="bento-tile col-span-6 lg:col-span-4 p-8 flex flex-col justify-center items-center text-center">
              <div className="font-display text-5xl text-cream">70 Lakh+</div>
              <div className="mt-2 label-eyebrow text-muted-foreground">Young Indians</div>
            </div>

            {/* Stat tile — rating (indigo solid) */}
            <div className="bento-tile col-span-6 lg:col-span-4 relative overflow-hidden p-8 flex flex-col justify-center items-center text-center" style={{ background: "var(--brand)", borderColor: "transparent" }}>
              <div className="font-display text-5xl text-white">4.2 ★</div>
              <div className="mt-2 font-mono text-[10px] font-bold uppercase tracking-widest text-white/80">Play Store</div>
            </div>

            {/* Backed by tile */}
            <div className="bento-tile col-span-12 lg:col-span-4 p-8 flex items-center justify-between">
              <div>
                <p className="label-eyebrow mb-1">Backed by</p>
                <p className="font-display text-base text-cream">Shark Tank India S2</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="text-right">
                <p className="label-eyebrow mb-1">Trusted by</p>
                <p className="font-display text-base text-cream">HDFC, Tata & 100+</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Brand wall */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="label-eyebrow">· The brand wall ·</p>
          <h2 className="mt-4 max-w-3xl text-4xl text-cream sm:text-5xl">
            Real brands. <span className="italic-accent">Real rupees.</span> Every day.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">From the bank that holds your salary to the apps on your home screen — they all work with Funngro users.</p>

          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {[["5,000+", "Real Indian brands"], ["70 Lakh+", "Young Indians earning"], ["1,000+", "Live projects right now"], ["12+", "Work categories"]].map(([n, l]) => (
              <div key={l} className="bg-background p-8">
                <div className="font-display text-5xl text-brand">{n}</div>
                <div className="mt-2 text-sm text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>

          <p className="label-eyebrow mt-16">· On the wall right now ·</p>
          <div className="mt-6 space-y-4 overflow-hidden">
            {[brands, [...brands].reverse()].map((row, i) => (
              <div key={i} className="flex w-max animate-marquee gap-3" style={{ animationDirection: i ? "reverse" : "normal" }}>
                {[...row, ...row, ...row].map(([cat, name], idx) => (
                  <div key={idx} className="flex items-center gap-3 whitespace-nowrap rounded-full border border-border bg-card px-5 py-3">
                    <span className="font-mono text-[10px] text-brand">{cat}</span>
                    <span className="font-display text-lg">{name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="label-eyebrow mt-8 text-center">· and many, many more ·</p>
        </div>
      </section>

      {/* Shark Tank */}
      <section id="shark-tank" className="border-t border-border bg-secondary/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="label-eyebrow">🦈 As seen on national television</p>
          <h2 className="mt-4 max-w-4xl text-4xl text-cream sm:text-5xl">
            Featured on Shark Tank India · <span className="italic-accent">Season 2.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            We pitched a platform where young India can earn from real brand campaigns. The pitch led to an investment from Amit Jain and a subsequent investment by SucSEED — and lit the fuse on what came next.
          </p>
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-6">
              {[["40,000", "70 lakh", "Young Indians earning"], ["170", "5,000+", "Brand partners"], ["S2", "#1", "Trusted by Gen Z"]].map(([a, b, l]) => (
                <div key={l} className="flex items-baseline gap-4 border-b border-border pb-4">
                  <span className="font-display text-2xl text-muted-foreground line-through opacity-60">{a}</span>
                  <span className="text-muted-foreground">→</span>
                  <span className="font-display text-3xl text-brand">{b}</span>
                  <span className="ml-auto font-mono text-xs text-muted-foreground">{l}</span>
                </div>
              ))}
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card">
              <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-brand/30 to-transparent">
                <button className="grid h-20 w-20 place-items-center rounded-full bg-brand text-3xl text-primary-foreground shadow-glow transition hover:scale-105">▶</button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-background/80 p-4 backdrop-blur">
                <span className="font-mono text-xs">THE PITCH · 9:42</span>
                <span className="font-mono text-xs text-brand">🦈 SONY LIV</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="label-eyebrow">· How it works ·</p>
          <h2 className="mt-4 max-w-3xl text-4xl text-cream sm:text-5xl">
            Get started in <span className="italic-accent">3 simple steps.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">First payout in under twenty-four hours.</p>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              ["01", "Download & sign up", "Get the Funngro app. OTP verification, two minutes. You're in."],
              ["02", "Pick a brand campaign", "Brand promotion, sampling, referrals, influencer briefs — from 5,000+ real brands. Pick what suits you."],
              ["03", "Get paid in UPI or bank", "Complete the campaign and receive instant payouts to UPI or bank transfer. Real money."],
            ].map(([n, t, d]) => (
              <div key={n} className="group rounded-2xl border border-border bg-card p-8 transition hover:border-brand">
                <div className="font-mono text-sm text-brand">{n}</div>
                <h3 className="mt-6 text-2xl text-cream">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <a href="#" className="mt-10 inline-flex font-mono text-sm text-brand hover:underline">See the 5-step deep dive ▸</a>
        </div>
      </section>

      {/* Income ladder */}
      <section className="border-t border-border bg-secondary/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="label-eyebrow">· The income & influence ladder ·</p>
          <h2 className="mt-4 max-w-4xl text-4xl text-cream sm:text-5xl">
            Your path from first task to <span className="italic-accent">your own business.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">Not just a gig platform. A progressive system where your earnings, influence, and capabilities grow together.</p>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              ["Stage 01 · Start", "Your First Income", "Brand surveys, sampling, simple promotion tasks. Earn your first real income with zero investment.", "₹1K–₹3K/mo"],
              ["Stage 02 · Grow · Popular", "Multiply & Influence", "Refer friends, build your network, create content. Your earnings multiply as your influence grows.", "₹3K–₹7K/mo"],
              ["Stage 03 · Build", "Your Own Business", "Run brand promotions at scale, lead teams, manage campaigns. Build your own micro-business on the platform.", "₹7K–₹15K+/mo"],
            ].map(([eyebrow, t, d, pay], i) => (
              <div key={t} className={`relative rounded-2xl border bg-card p-8 ${i === 1 ? "border-brand shadow-glow" : "border-border"}`}>
                <div className="font-mono text-[10px] uppercase tracking-widest text-brand">{eyebrow}</div>
                <h3 className="mt-4 text-3xl text-cream">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{d}</p>
                <div className="mt-8 font-display text-3xl text-brand">{pay}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center font-mono text-xs text-muted-foreground">Average active user ₹4,100/mo · Top 5% ₹18,000+/mo</p>
        </div>
      </section>

      {/* Four kinds of work */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="label-eyebrow">· What you can do ·</p>
          <h2 className="mt-4 max-w-3xl text-4xl text-cream sm:text-5xl">
            Four kinds of work. <span className="italic-accent">All from real brands.</span>
          </h2>
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {[
              ["01", "Content creation", "Reels, posts, blogs, photos — for real brand campaigns. Your phone is the studio."],
              ["02", "Brand promotion", "Share, post, talk about brands you already follow. Get paid for genuine recommendations."],
              ["03", "Referrals", "Bring friends to brands they'll like. Earn when they sign up, transact, or stay."],
              ["04", "Micro tasks from brands", "Sampling, surveys, app testing, product ideation. Small, fast, paid by the task."],
            ].map(([n, t, d]) => (
              <div key={n} className="bg-background p-10 transition hover:bg-card">
                <div className="font-mono text-sm text-brand">{n}</div>
                <h3 className="mt-6 text-2xl text-cream">{t}</h3>
                <p className="mt-3 max-w-md text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section id="stories" className="border-t border-border bg-secondary/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="label-eyebrow">· Real youth · Real earnings ·</p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="mt-4 max-w-3xl text-4xl text-cream sm:text-5xl">
              People you'll <span className="italic-accent">want to become.</span>
            </h2>
            <a href="#" className="font-mono text-sm text-brand hover:underline">See all stories ▸</a>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["👨", "DELHI", "Sarthak", "16", "100 rejection emails. Never quit. Now I work with the founders on Funngro's product.", "₹3,90,000+ total"],
              ["👩", "MUMBAI", "Anshika", "20", "Thought earning apps were fake. First instant withdrawal changed everything.", "₹2,25,000+ total"],
              ["🧑", "—", "Sayyam Mehta", "18", "Joined unsure. First live meeting changed my path. Now I lead Clan Leaders.", "₹63,000+ total"],
              ["👨", "HYDERABAD", "Naitik Mishra", "16", "Took initiative. Got promoted. Growing step by step.", "— leads 30"],
              ["👨", "PUNE", "Soham", "21", "Showed up. Helped users. Now in the founders' mentorship program.", "Sept '23 → today"],
            ].map(([emoji, city, name, age, quote, stat]) => (
              <article key={name as string} className="flex flex-col rounded-2xl border border-border bg-card p-8">
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-brand/15 text-3xl">{emoji}</div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-brand">· {city} ·</div>
                    <div className="font-display text-xl">{name} <span className="text-muted-foreground">· Age {age}</span></div>
                  </div>
                </div>
                <blockquote className="mt-6 flex-1 text-lg leading-snug text-cream/90">"{quote}"</blockquote>
                <div className="mt-6 border-t border-border pt-4 font-mono text-xs text-brand">{stat}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="label-eyebrow">· As featured in ·</p>
          <h2 className="mt-4 max-w-3xl text-4xl text-cream sm:text-5xl">
            The world is talking <span className="italic-accent">about Funngro.</span>
          </h2>
          <div className="mt-12 flex flex-wrap gap-3">
            {["Business News Week", "FM Live", "IBS Intelligence", "Times of India", "The Daily Brunch", "Entrackr"].map(p => (
              <span key={p} className="rounded-full border border-border bg-card px-5 py-3 font-display text-lg">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="border-t border-border bg-hero py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="label-eyebrow">· Your turn ·</p>
          <h2 className="mt-6 text-5xl text-cream sm:text-7xl">
            Your first rupee <span className="italic-accent">is three taps away.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">Free forever. Zero fees. Real brands. Real money. Instant UPI.</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-3 rounded-full bg-brand px-7 py-4 font-medium text-primary-foreground transition hover:shadow-glow">Google Play →</a>
            <a href="#" className="inline-flex items-center gap-3 rounded-full border border-border px-7 py-4 font-medium hover:bg-secondary">App Store →</a>
          </div>
          <p className="mt-8 font-mono text-xs text-muted-foreground">Have questions? <a href="#" className="text-brand hover:underline">Read the FAQ ▸</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand text-primary-foreground font-bold">F</span>
            <span className="font-display text-lg text-foreground">Funngro</span>
          </div>
          <div className="font-mono text-xs">© 2026 · Made in India · For India's youth</div>
        </div>
      </footer>
    </div>
  );
}
