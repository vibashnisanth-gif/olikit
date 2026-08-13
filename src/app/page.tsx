import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { getDateModified } from "@/lib/seo/freshness"
import { locales, getLocale } from "@/lib/seo/locales"
import { getProfession } from "@/lib/content/professions-data"
import { getAllCountries, COUNTRY_FLAGS, toUSD } from "@/lib/content/country-registry"
import { Shell } from "@/components/shell"
import { HeaderNew } from "@/components/homepage/header-new"
import { FooterNew } from "@/components/homepage/footer-new"

const hreflangTags: Record<string, string> = { "x-default": SITE_URL }
for (const loc of locales) { hreflangTags[loc.code] = `${SITE_URL}/${loc.slug}` }

export const metadata: Metadata = {
  title: "Olikit — Career Intelligence Across Countries",
  description: "Compare careers, salaries, taxes and financial outcomes across countries using transparent data and practical research.",
  alternates: { canonical: SITE_URL, languages: hreflangTags },
  openGraph: {
    title: "Olikit — Career Intelligence Across Countries",
    description: "Compare careers, salaries, taxes and financial outcomes across countries using transparent data and practical research.",
    url: SITE_URL,
    siteName: "Olikit",
    locale: "en-US",
    type: "website",
  },
  robots: { index: true, follow: true },
}

const dateModified = getDateModified()

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Olikit",
  url: SITE_URL,
  description: "Career and financial intelligence platform helping professionals compare salaries, taxes and living costs across countries.",
}

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Olikit",
  url: SITE_URL,
  description: "Compare careers, salaries, taxes and financial outcomes across countries.",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/search?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
}

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Olikit — Career Intelligence Across Countries",
  description: "Compare careers, salaries, taxes and financial outcomes across countries using transparent data and practical research.",
  url: SITE_URL,
  dateModified,
  publisher: {
    "@type": "Organization",
    name: "Olikit",
    url: SITE_URL,
  },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
  ],
}

// --- Data preparation ---

const seProf = getProfession("software-engineer")!
const displayProfessions = ["software-engineer", "data-scientist", "product-manager", "ai-engineer", "financial-analyst"]
const professionDescriptions: Record<string, string> = {
  "software-engineer": "Compensation and market context",
  "data-scientist": "Compensation and comparisons",
  "product-manager": "Compensation and research",
  "ai-engineer": "Emerging role economics",
  "financial-analyst": "Finance sector context",
}

const countries = getAllCountries()
const displayCountries = countries.slice(0, 4)
const countryDescriptions: Record<string, string> = {
  us: "Salary · tax · financial context",
  uk: "Salary · tax · financial context",
  au: "Salary · tax · financial context",
  ca: "Salary · tax · financial context",
  nz: "Salary · tax · financial context",
  in: "Salary · tax · financial context",
  sg: "Salary · tax · financial context",
}

// Hero visual: top 3 countries for software engineer salary
const heroCountries = ["us", "au", "uk"]
const heroRows = heroCountries.map((slug) => {
  const amount = seProf.salaries[slug]?.average || 0
  const currMap: Record<string, string> = { us: "USD", au: "AUD", uk: "GBP" }
  const curr = currMap[slug] || "USD"
  const fmt = new Intl.NumberFormat("en-US", { style: "currency", currency: curr, maximumFractionDigits: 0 }).format(amount)
  const countryName = countries.find((c) => c.slug === slug)?.name || slug
  return { slug, name: countryName, amount, formatted: fmt }
})
const heroMax = Math.max(...heroRows.map((r) => r.amount), 1)

// Rankings: compute score from USD-normalized average salary across all professions.
// All salaries are converted to USD before averaging to avoid currency-mixing (e.g. INR 1,200,000 + USD 120,000).
const allProfs = ["software-engineer", "data-scientist", "product-manager", "ai-engineer", "financial-analyst", "doctor", "registered-nurse", "accountant", "mechanical-engineer", "project-manager"]
function countryAvgSalary(slug: string): number {
  const currencyCode = getLocale(slug)?.currency.code ?? "USD"
  let total = 0, count = 0
  for (const pSlug of allProfs) {
    const p = getProfession(pSlug)
    if (p?.salaries?.[slug]?.average) {
      total += toUSD(p.salaries[slug].average, currencyCode)
      count++
    }
  }
  return count > 0 ? total / count : 0
}
const rankings = countries
  .map((c) => {
    const avg = countryAvgSalary(c.slug)
    return { slug: c.slug, name: c.name, flag: COUNTRY_FLAGS[c.slug] || "", avg }
  })
  .sort((a, b) => b.avg - a.avg)
  .slice(0, 7)
const rankMax = Math.max(...rankings.map((r) => r.avg), 1)

// Financial panel: US software engineer data
const usSE = seProf.salaries.us
const grossSalary = usSE?.average || 120000
const takeHome = Math.round(grossSalary * 0.737)
const savings = grossSalary - takeHome - Math.round(grossSalary * 0.1)

// --- Sections ---

function Section({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <section className={`border-b ${className}`} style={{ borderBottomColor: "var(--line)", ...style }}>
      <div className="mx-auto px-6" style={{ maxWidth: "var(--max)" }}>
        {children}
      </div>
    </section>
  )
}

export default function GlobalHomePage() {
  return (
    <Shell bare customHeader={<HeaderNew />} customFooter={<FooterNew />}>
      <div style={{ background: "var(--paper)", color: "var(--ink)" }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

        {/* 01 · HERO */}
        <Section className="pt-22 pb-18 sm:pt-[88px] sm:pb-[74px]" style={{ borderBottomColor: "var(--line)" }}>
          <div className="mb-1 text-[10px] font-extrabold uppercase" style={{ color: "var(--blue)", letterSpacing: ".15em" }}>
            Global career intelligence
          </div>
          <h1
            className="mt-3.5 mb-6 max-w-[850px] text-[clamp(48px,7vw,82px)] font-bold leading-[.98]"
            style={{ fontFamily: "Georgia, serif", letterSpacing: "-.058em" }}
          >
            Where does your career make the most sense?
          </h1>
          <p className="mb-7 max-w-[680px] text-[18px] leading-[1.72]" style={{ color: "#55554f" }}>
            Salary is only one part of the decision. Olikit brings compensation, tax, purchasing power and country context together so you can compare the financial reality behind a career and a location.
          </p>
          <div className="mb-4 flex flex-wrap gap-2.5">
            <a
              href="/compare"
              className="inline-flex min-h-[48px] items-center justify-center rounded-[10px] border px-[18px] text-[13px] font-extrabold transition-transform hover:-translate-y-0.5"
              style={{ borderColor: "var(--ink)", background: "var(--ink)", color: "#fff" }}
            >
              Compare countries&nbsp;→
            </a>
            <a
              href="/professions"
              className="inline-flex min-h-[48px] items-center justify-center rounded-[10px] border px-[18px] text-[13px] font-extrabold transition-transform hover:-translate-y-0.5 hover:bg-white"
              style={{ borderColor: "var(--ink)", color: "var(--ink)" }}
            >
              Explore careers
            </a>
          </div>
          <div className="mb-14 flex flex-wrap gap-5 text-[11px]" style={{ color: "var(--muted)" }}>
            <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--green)" }} />Transparent comparisons</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--green)" }} />Published data</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--green)" }} />Practical research</span>
          </div>

          {/* Hero visual */}
          <div className="overflow-hidden rounded-[20px] border shadow-lg" style={{ background: "var(--white)", borderColor: "var(--line)", boxShadow: "var(--shadow)" }}>
            <div className="flex items-center justify-between border-b px-[22px] py-5" style={{ borderColor: "var(--line)" }}>
              <span className="text-[13px] font-extrabold">Software Engineer · annual compensation</span>
              <span className="text-[10px] uppercase" style={{ color: "var(--muted)", letterSpacing: ".1em" }}>Live Olikit data</span>
            </div>
            {heroRows.map((row) => (
              <div key={row.slug} className="grid items-center gap-[18px] border-b px-[22px] py-[17px] last:border-b-0" style={{ borderColor: "var(--line)", gridTemplateColumns: "190px 1fr 120px" }}>
                <div className="text-[13px] font-bold">{row.name}</div>
                <div className="h-2 overflow-hidden rounded-full" style={{ background: "var(--paper-2)" }}>
                  <div className="h-full rounded-full" style={{ width: `${(row.amount / heroMax) * 100}%`, background: "var(--blue)", transformOrigin: "left", animation: "grow .9s cubic-bezier(.2,.7,.2,1) both" }} />
                </div>
                <div className="text-right text-[14px] font-extrabold tabular-nums">{row.formatted}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* 02 · CAREER DISCOVERY */}
        <Section className="py-[72px]">
          <div className="mb-7 flex items-end justify-between gap-8">
            <div>
              <div className="mb-2 text-[10px] font-extrabold uppercase" style={{ color: "var(--blue)", letterSpacing: ".15em" }}>01 · Career discovery</div>
              <h2 className="text-[clamp(31px,4vw,46px)] font-bold leading-[1.05]" style={{ fontFamily: "Georgia, serif", letterSpacing: "-.04em" }}>Start with the work.</h2>
              <p className="mt-2 max-w-[650px] text-[14px]" style={{ color: "var(--muted)" }}>Choose a profession and then see how its economics change from one market to another.</p>
            </div>
            <a className="shrink-0 text-[12px] font-extrabold" style={{ color: "var(--blue)" }} href="/professions">Browse all careers →</a>
          </div>
          <div className="overflow-hidden rounded-[15px] border" style={{ background: "var(--white)", borderColor: "var(--line)" }}>
            <div className="grid items-center gap-[18px] border-b bg-[var(--paper-2)] px-[18px] py-4 text-[9px] font-extrabold uppercase" style={{ borderColor: "var(--line)", gridTemplateColumns: "1.2fr 1fr 120px", letterSpacing: ".1em", color: "var(--muted)" }}>
              <div>Career</div><div>What you can explore</div><div className="text-right">Open</div>
            </div>
            {displayProfessions.map((slug) => {
              const p = getProfession(slug)
              return (
                <div key={slug} className="grid items-center gap-[18px] border-b px-[18px] py-4 text-[13px] last:border-b-0 transition-colors hover:bg-[var(--blue-soft)]" style={{ borderColor: "var(--line)", gridTemplateColumns: "1.2fr 1fr 120px" }}>
                  <div><a href={`/${slug}`} className="font-extrabold">{p?.name || slug}</a></div>
                  <div style={{ color: "var(--muted)" }}>{professionDescriptions[slug] || "Compensation data"}</div>
                  <div className="text-right"><a className="text-[12px] font-extrabold" style={{ color: "var(--blue)" }} href={`/${slug}`}>→</a></div>
                </div>
              )
            })}
          </div>
        </Section>

        {/* 03 · COUNTRY INTELLIGENCE */}
        <Section className="py-[72px]">
          <div className="mb-7 flex items-end justify-between gap-8">
            <div>
              <div className="mb-2 text-[10px] font-extrabold uppercase" style={{ color: "var(--blue)", letterSpacing: ".15em" }}>02 · Country intelligence</div>
              <h2 className="text-[clamp(31px,4vw,46px)] font-bold leading-[1.05]" style={{ fontFamily: "Georgia, serif", letterSpacing: "-.04em" }}>The same career can produce a different outcome.</h2>
              <p className="mt-2 max-w-[650px] text-[14px]" style={{ color: "var(--muted)" }}>Gross salary is only the starting point. Country context changes what an income actually means.</p>
            </div>
            <a className="shrink-0 text-[12px] font-extrabold" style={{ color: "var(--blue)" }} href="/compare">Open comparisons →</a>
          </div>
          <div className="overflow-hidden rounded-[15px] border" style={{ background: "var(--white)", borderColor: "var(--line)" }}>
            <div className="grid items-center gap-[18px] border-b bg-[var(--paper-2)] px-[18px] py-4 text-[9px] font-extrabold uppercase" style={{ borderColor: "var(--line)", gridTemplateColumns: "1.2fr 1fr 120px", letterSpacing: ".1em", color: "var(--muted)" }}>
              <div>Market</div><div>Country intelligence</div><div className="text-right">Explore</div>
            </div>
            {displayCountries.map((c) => (
              <div key={c.slug} className="grid items-center gap-[18px] border-b px-[18px] py-4 text-[13px] last:border-b-0 transition-colors hover:bg-[var(--blue-soft)]" style={{ borderColor: "var(--line)", gridTemplateColumns: "1.2fr 1fr 120px" }}>
                <div><a href={`/${c.slug}`} className="font-extrabold">{COUNTRY_FLAGS[c.slug]} {c.name}</a></div>
                <div style={{ color: "var(--muted)" }}>{countryDescriptions[c.slug] || "Financial context"}</div>
                <div className="text-right"><a className="text-[12px] font-extrabold" style={{ color: "var(--blue)" }} href={`/${c.slug}`}>→</a></div>
              </div>
            ))}
          </div>
        </Section>

        {/* 04 · THE MONEY QUESTION + OUTCOME */}
        <Section className="py-[72px]">
          <div className="grid gap-[18px] md:grid-cols-2">
            {/* Panel: The money question */}
            <div className="rounded-[18px] border p-7" style={{ background: "var(--blue-soft)", borderColor: "#D7E0FF" }}>
              <div className="mb-2 text-[10px] font-extrabold uppercase" style={{ color: "var(--blue)", letterSpacing: ".15em" }}>03 · The money question</div>
              <h3 className="mb-2.5 text-[27px] leading-[1.1]" style={{ fontFamily: "Georgia, serif", letterSpacing: "-.035em" }}>What remains after the headline salary?</h3>
              <p className="mb-5.5 text-[13px]" style={{ color: "var(--muted)" }}>Move from gross compensation to the numbers that matter for a real financial decision.</p>
              <div className="grid gap-2.5">
                {[
                  { label: "Gross salary", value: new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(grossSalary), color: "" },
                  { label: "Estimated take-home", value: new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(takeHome), color: "var(--blue)" },
                  { label: "Potential annual savings", value: new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(savings), color: "var(--green)" },
                ].map((m) => (
                  <div key={m.label} className="flex items-center justify-between rounded-xl border px-4 py-3.5" style={{ background: "rgba(255,255,255,.76)", borderColor: "rgba(23,23,23,.08)" }}>
                    <span className="text-[11px]" style={{ color: "var(--muted)" }}>{m.label}</span>
                    <span className="text-[17px] font-extrabold tabular-nums" style={{ color: m.color || "var(--ink)" }}>{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Panel: Outcome */}
            <div className="flex flex-col justify-between rounded-[18px] border p-7" style={{ background: "var(--green-soft)", borderColor: "#D5EBDD" }}>
              <div>
                <div className="mb-2 text-[10px] font-extrabold uppercase" style={{ color: "var(--green)", letterSpacing: ".15em" }}>04 · Outcome</div>
                <h3 className="mb-2.5 text-[27px] leading-[1.1]" style={{ fontFamily: "Georgia, serif", letterSpacing: "-.035em" }}>Compare the outcome, not just the offer.</h3>
                <p className="mb-5.5 text-[13px]" style={{ color: "var(--muted)" }}>Olikit is designed to put compensation, tax and living costs into the same decision frame.</p>
              </div>
              <a
                href="/compare"
                className="inline-flex min-h-[48px] w-fit items-center justify-center rounded-[10px] border px-[18px] text-[13px] font-extrabold transition-transform hover:-translate-y-0.5"
                style={{ borderColor: "var(--ink)", background: "var(--ink)", color: "#fff" }}
              >
                Compare outcomes →
              </a>
            </div>
          </div>
        </Section>

        {/* 05 · EXPLORE */}
        <Section className="py-[72px]">
          <div className="mb-7 flex items-end justify-between gap-8">
            <div>
              <div className="mb-2 text-[10px] font-extrabold uppercase" style={{ color: "var(--blue)", letterSpacing: ".15em" }}>05 · Explore</div>
              <h2 className="text-[clamp(31px,4vw,46px)] font-bold leading-[1.05]" style={{ fontFamily: "Georgia, serif", letterSpacing: "-.04em" }}>Follow the question that matters.</h2>
              <p className="mt-2 max-w-[650px] text-[14px]" style={{ color: "var(--muted)" }}>A small set of useful entry points, each connected to a real Olikit destination.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/professions", icon: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5h8v2M3 12h18"/></>, title: "Careers", desc: "Explore professions" },
              { href: "/compare", icon: <><path d="M4 8h14M14 4l4 4-4 4M20 16H6M10 12l-4 4 4 4"/></>, title: "Compare", desc: "Put markets side by side" },
              { href: "/rankings", icon: <><path d="M5 20V10M12 20V4M19 20v-7"/></>, title: "Rankings", desc: "See leading markets" },
              { href: "/research", icon: <><path d="M5 4h14v16H5zM8 8h8M8 12h8M8 16h5"/></>, title: "Research", desc: "Understand the evidence" },
            ].map((card) => (
              <a
                key={card.href}
                href={card.href}
                className="rounded-[14px] border p-[18px] transition-all hover:-translate-y-[3px] hover:shadow-lg"
                style={{ borderColor: "var(--line)", background: "var(--white)" }}
              >
                <div
                  className="mb-3.5 grid h-[34px] w-[34px] place-items-center rounded-[9px]"
                  style={{ background: "var(--blue-soft)", color: "var(--blue)" }}
                >
                  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{card.icon}</svg>
                </div>
                <strong className="mb-0.5 block text-[13px]">{card.title}</strong>
                <span className="text-[11px]" style={{ color: "var(--muted)" }}>{card.desc}</span>
              </a>
            ))}
          </div>
        </Section>

        {/* 06 · RANKINGS */}
        <section className="border-b py-[72px]" style={{ background: "var(--ink)", color: "#fff", borderBottomColor: "#30302d" }}>
          <div className="mx-auto px-6" style={{ maxWidth: "var(--max)" }}>
            <div className="mb-7 flex items-end justify-between gap-8">
              <div>
                <div className="mb-2 text-[10px] font-extrabold uppercase" style={{ color: "var(--blue)", letterSpacing: ".15em" }}>06 · Olikit indexes</div>
                <h2 className="text-[clamp(31px,4vw,46px)] font-bold leading-[1.05]" style={{ fontFamily: "Georgia, serif", letterSpacing: "-.04em" }}>See the bigger picture.</h2>
                <p className="mt-2 max-w-[650px] text-[14px]" style={{ color: "#aaa" }}>A compact view of how markets compare across compensation, tax and financial outcomes.</p>
              </div>
              <a className="shrink-0 text-[12px] font-extrabold" style={{ color: "#B9C8FF" }} href="/rankings">View rankings →</a>
            </div>
            <div className="overflow-hidden rounded-[15px] border" style={{ borderColor: "#353531" }}>
              <div className="grid items-center gap-4 border-b px-[18px] py-4 text-[9px] font-extrabold uppercase" style={{ borderColor: "#30302d", gridTemplateColumns: "55px 1fr 90px 110px", letterSpacing: ".1em", color: "#9A9A94" }}>
                <div>#</div><div>Market</div><div className="text-right">Score</div><div className="text-right">Signal</div>
              </div>
              {rankings.map((r, i) => {
                const score = ((r.avg / rankMax) * 40 + 60).toFixed(1)
                const trend = Number(score) >= 85 ? "Strong" : "Stable"
                return (
                  <div key={r.slug} className="grid items-center gap-4 border-b px-[18px] py-4 text-[13px] last:border-b-0" style={{ borderColor: "#30302d", gridTemplateColumns: "55px 1fr 90px 110px" }}>
                    <div className="tabular-nums" style={{ color: "#9A9A94" }}>{String(i + 1).padStart(2, "0")}</div>
                    <div className="font-bold">{r.flag} {r.name}</div>
                    <div className="text-right font-extrabold tabular-nums">{score}</div>
                    <div className="text-right text-[11px]" style={{ color: "#8DD4AC" }}>{trend}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 07 · RESEARCH */}
        <Section className="py-[72px]">
          <div className="mb-7 flex items-end justify-between gap-8">
            <div>
              <div className="mb-2 text-[10px] font-extrabold uppercase" style={{ color: "var(--blue)", letterSpacing: ".15em" }}>07 · Research</div>
              <h2 className="text-[clamp(31px,4vw,46px)] font-bold leading-[1.05]" style={{ fontFamily: "Georgia, serif", letterSpacing: "-.04em" }}>Useful answers, not content for content&apos;s sake.</h2>
              <p className="mt-2 max-w-[650px] text-[14px]" style={{ color: "var(--muted)" }}>Research should explain the numbers and help users make better comparisons.</p>
            </div>
            <a className="shrink-0 text-[12px] font-extrabold" style={{ color: "var(--blue)" }} href="/research">View research →</a>
          </div>
          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { tag: "Global salary", title: "How compensation differs across major markets", desc: "Explore the patterns behind headline salary figures." },
              { tag: "Career economics", title: "What changes the value of an offer?", desc: "Put salary, tax and country context into one frame." },
              { tag: "Country intelligence", title: "Where does income go further?", desc: "Understand why the same income can produce different outcomes." },
            ].map((card) => (
              <a
                key={card.title}
                href="/research"
                className="flex min-h-[205px] flex-col rounded-[16px] border p-[23px] transition-all hover:-translate-y-[3px] hover:shadow-lg"
                style={{ background: "var(--white)", borderColor: "var(--line)" }}
              >
                <span className="text-[9px] font-extrabold uppercase" style={{ letterSpacing: ".12em", color: "var(--blue)" }}>{card.tag}</span>
                <h3 className="mt-[17px] mb-2.5 text-[23px] leading-[1.12]" style={{ fontFamily: "Georgia, serif", letterSpacing: "-.025em" }}>{card.title}</h3>
                <p className="text-[13px]" style={{ color: "var(--muted)" }}>{card.desc}</p>
                <span className="mt-auto pt-5 text-[12px] font-extrabold" style={{ color: "var(--blue)" }}>Read research →</span>
              </a>
            ))}
          </div>
        </Section>

        {/* 08 · TRUST */}
        <Section className="py-[72px]">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <div className="mb-2 text-[10px] font-extrabold uppercase" style={{ color: "var(--blue)", letterSpacing: ".15em" }}>08 · Trust</div>
              <h2 className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.05]" style={{ fontFamily: "Georgia, serif", letterSpacing: "-.04em" }}>Know what the number means.</h2>
              <p className="mt-3.5 max-w-[590px] text-[14px]" style={{ color: "var(--muted)" }}>Important figures should be understandable: what they represent, where they came from, when they were updated and what their limitations are.</p>
            </div>
            <div className="grid gap-[9px]">
              {[
                { href: "/methodology", title: "Methodology", desc: "How comparisons are constructed →" },
                { href: "/data-sources", title: "Data sources", desc: "Inspect the evidence →" },
                { href: "/editorial-policy", title: "Editorial policy", desc: "How information is handled →" },
                { href: "/about", title: "About Olikit", desc: "What the platform does →" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between rounded-xl border px-4 py-4 transition-colors hover:bg-[var(--blue-soft)]"
                  style={{ background: "var(--white)", borderColor: "var(--line)" }}
                >
                  <strong className="text-[13px]">{link.title}</strong>
                  <span className="text-[11px]" style={{ color: "var(--muted)" }}>{link.desc}</span>
                </a>
              ))}
            </div>
          </div>
        </Section>

        {/* Spacer before footer */}
        <div style={{ height: 1 }} />
      </div>
    </Shell>
  )
}
