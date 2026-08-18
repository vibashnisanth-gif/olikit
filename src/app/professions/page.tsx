import type { Metadata } from "next"
import { locales } from "@/lib/seo/locales"
import { SITE_URL } from "@/lib/seo/constants"
import { professions, getProfession } from "@/lib/content/professions-data"
import { getAllCountries, COUNTRY_FLAGS } from "@/lib/content/country-registry"
import { Shell } from "@/components/shell"
import { HeaderNew } from "@/components/homepage/header-new"
import { FooterNew } from "@/components/homepage/footer-new"
import { formatSalaryBySlug } from "@/lib/currency"

export const metadata: Metadata = {
  title: "Olikit \u2014 Career Intelligence Index",
  description:
    "Explore careers by profession, salary and country. Compare career economics across major markets with Olikit\u2019s profession intelligence index.",
  alternates: { canonical: `${SITE_URL}/professions` },
  openGraph: {
    title: "Olikit \u2014 Career Intelligence Index",
    description:
      "Explore careers by profession, salary and country. Compare career economics across major markets.",
    url: `${SITE_URL}/professions`,
    siteName: "Olikit",
    locale: "en-US",
    type: "website",
  },
  robots: { index: true, follow: true },
}

const featuredSlugs = ["software-engineer", "data-scientist", "product-manager"]

const featuredDescriptions: Record<string, string> = {
  "software-engineer":
    "Explore compensation across markets and understand how country context changes the picture.",
  "data-scientist":
    "See data science compensation, market differences and career economics across countries.",
  "product-manager":
    "Compare product management compensation benchmarks across the markets Olikit covers.",
}

const featuredIcons: Record<string, React.ReactNode> = {
  "software-engineer": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
    </svg>
  ),
  "data-scientist": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="7" r="2" /><circle cx="18" cy="7" r="2" /><circle cx="12" cy="17" r="2" />
      <path d="M8 8.5l3 6M16 8.5l-3 6" />
    </svg>
  ),
  "product-manager": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5h16v14H4zM8 9h8M8 13h5" />
    </svg>
  ),
}

const countryDescriptions: Record<string, string> = {
  us: "Large professional market with high compensation benchmarks.",
  uk: "Compare professional compensation with local context.",
  au: "Explore career compensation in the Australian market.",
  ca: "Put professional salary benchmarks into country context.",
  nz: "Understand career economics in the New Zealand market.",
  in: "Compare compensation across India\u2019s major professional markets.",
  sg: "Explore career compensation in Singapore\u2019s market.",
}

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <section
      id={id}
      className={`border-b ${className}`}
      style={{ borderBottomColor: "var(--line)" }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: "var(--max)" }}>
        {children}
      </div>
    </section>
  )
}

export default function ProfessionsPage() {
  const countries = getAllCountries()
  const displayCountries = countries.slice(0, 4)

  const salaryRows = [...professions]
    .sort((a, b) => b.salaries.us.average - a.salaries.us.average)
    .slice(0, 5)

  return (
    <Shell bare customHeader={<HeaderNew />} customFooter={<FooterNew />}>
      <div style={{ background: "var(--paper)", color: "var(--ink)" }}>
        {/* 01 \u00b7 HERO */}
        <Section className="pt-22 pb-18 sm:pt-[88px] sm:pb-[74px]">
          <div
            className="mb-1 text-[10px] font-extrabold uppercase"
            style={{ color: "var(--blue)", letterSpacing: ".15em" }}
          >
            Career intelligence index
          </div>
          <h1
            className="mt-3.5 mb-6 max-w-[850px] text-[clamp(48px,6.5vw,76px)] font-bold leading-[.99]"
            style={{ fontFamily: "Georgia, serif", letterSpacing: "-.055em" }}
          >
            Understand what a career is worth across countries.
          </h1>
          <p
            className="mb-7 max-w-[690px] text-[18px] leading-[1.7]"
            style={{ color: "#55554f" }}
          >
            Explore professions by salary, market and country. Olikit brings career data into one
            place so you can move from a job title to the financial reality behind it.
          </p>
          <div className="mb-7 flex flex-wrap gap-2.5">
            <a
              href="#professions"
              className="inline-flex min-h-[47px] items-center justify-center rounded-[10px] border px-[17px] text-[13px] font-extrabold"
              style={{ borderColor: "var(--ink)", background: "var(--ink)", color: "#fff" }}
            >
              Explore professions&nbsp;\u2192
            </a>
            <a
              href="/compare"
              className="inline-flex min-h-[47px] items-center justify-center rounded-[10px] border px-[17px] text-[13px] font-extrabold transition-colors hover:bg-white"
              style={{ borderColor: "var(--ink)", color: "var(--ink)" }}
            >
              Compare countries
            </a>
          </div>

          {/* Snapshot stats */}
          <div className="grid grid-cols-3 gap-2.5">
            <div
              className="rounded-[14px] border p-[18px]"
              style={{ background: "var(--blue-soft)", borderColor: "#d7e0ff" }}
            >
              <div className="text-[26px] font-extrabold" style={{ letterSpacing: "-.03em" }}>
                {countries.length}
              </div>
              <div className="mt-0.5 text-[11px]" style={{ color: "var(--muted)" }}>
                Markets currently covered
              </div>
            </div>
            <div
              className="rounded-[14px] border bg-white p-[18px]"
              style={{ borderColor: "var(--line)" }}
            >
              <div className="text-[26px] font-extrabold" style={{ letterSpacing: "-.03em" }}>
                {professions.length}+
              </div>
              <div className="mt-0.5 text-[11px]" style={{ color: "var(--muted)" }}>
                Professions in the current dataset
              </div>
            </div>
            <div
              className="rounded-[14px] border bg-white p-[18px]"
              style={{ borderColor: "var(--line)" }}
            >
              <div className="text-[26px] font-extrabold" style={{ letterSpacing: "-.03em" }}>
                1
              </div>
              <div className="mt-0.5 text-[11px]" style={{ color: "var(--muted)" }}>
                Place to start a career comparison
              </div>
            </div>
          </div>
        </Section>

        {/* 02 \u00b7 FEATURED PROFESSION HUBS */}
        <Section className="py-[66px]">
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <div>
              <div
                className="mb-2 text-[10px] font-extrabold uppercase"
                style={{ color: "var(--blue)", letterSpacing: ".15em" }}
              >
                01 \u00b7 Career intelligence hubs
              </div>
              <h2
                className="text-[clamp(31px,4vw,46px)] font-bold leading-[1.05]"
                style={{ fontFamily: "Georgia, serif", letterSpacing: "-.04em" }}
              >
                Start with the professions people compare most.
              </h2>
              <p
                className="mt-2 max-w-[670px] text-[14px]"
                style={{ color: "var(--muted)" }}
              >
                Dedicated profession hubs connect salary data with country comparisons, rankings
                and deeper career analysis.
              </p>
            </div>
            <a
              className="shrink-0 text-[12px] font-extrabold"
              style={{ color: "var(--blue)" }}
              href="#professions"
            >
              Browse all professions&nbsp;\u2192
            </a>
          </div>
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
            {featuredSlugs.map((slug) => {
              const p = getProfession(slug)
              return (
                <a
                  key={slug}
                  href={`/${slug}`}
                  className="flex min-h-[235px] flex-col rounded-[16px] border p-[24px] transition-all hover:-translate-y-[3px] hover:shadow-lg"
                  style={{ background: "var(--white)", borderColor: "var(--line)" }}
                >
                  <div
                    className="grid h-[36px] w-[36px] place-items-center rounded-[9px]"
                    style={{ background: "var(--blue-soft)", color: "var(--blue)" }}
                  >
                    <svg
                      className="h-[18px] w-[18px]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {featuredIcons[slug]}
                    </svg>
                  </div>
                  <h3
                    className="mt-[18px] mb-2.5 text-[24px] leading-[1.08]"
                    style={{ fontFamily: "Georgia, serif", letterSpacing: "-.03em" }}
                  >
                    {p?.name || slug}
                  </h3>
                  <p className="text-[12px]" style={{ color: "var(--muted)" }}>
                    {featuredDescriptions[slug] || "Explore compensation data."}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {["Salary by country", "Rankings", "Comparisons"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-[6px] border px-[7px] py-[5px] text-[9px] font-bold"
                        style={{
                          background: "var(--paper-2)",
                          borderColor: "var(--line)",
                          color: "#55554f",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span
                    className="mt-auto pt-[18px] text-[12px] font-extrabold"
                    style={{ color: "var(--blue)" }}
                  >
                    Explore hub&nbsp;\u2192
                  </span>
                </a>
              )
            })}
          </div>
        </Section>

        {/* 03 \u00b7 PROFESSION DIRECTORY */}
        <Section className="py-[66px]" id="professions">
          <div className="mb-7">
            <div
              className="mb-2 text-[10px] font-extrabold uppercase"
              style={{ color: "var(--blue)", letterSpacing: ".15em" }}
            >
              02 \u00b7 Profession directory
            </div>
            <h2
              className="text-[clamp(31px,4vw,46px)] font-bold leading-[1.05]"
              style={{ fontFamily: "Georgia, serif", letterSpacing: "-.04em" }}
            >
              Every profession is an entry point.
            </h2>
            <p
              className="mt-2 max-w-[670px] text-[14px]"
              style={{ color: "var(--muted)" }}
            >
              Choose a career to move into salary-by-country pages and the broader Olikit
              comparison network.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {professions.map((prof) => (
              <a
                key={prof.id}
                href={`/us/salary/${prof.slug}`}
                className="rounded-[13px] border bg-white p-[17px] transition-all hover:-translate-y-[2px] hover:bg-[var(--blue-soft)]"
                style={{ borderColor: "var(--line)" }}
              >
                <strong className="text-[14px]">{prof.name}</strong>
                <p className="mt-[5px] mb-[11px] text-[11px]" style={{ color: "var(--muted)" }}>
                  {prof.description.split(" ").slice(0, 4).join(" ")}
                </p>
                <span className="text-[11px] font-extrabold" style={{ color: "var(--blue)" }}>
                  View salary data&nbsp;\u2192
                </span>
              </a>
            ))}
          </div>
        </Section>

        {/* 04 \u00b7 SALARY SNAPSHOT */}
        <Section className="py-[66px]">
          <div className="mb-7">
            <div
              className="mb-2 text-[10px] font-extrabold uppercase"
              style={{ color: "var(--blue)", letterSpacing: ".15em" }}
            >
              03 \u00b7 US salary snapshot
            </div>
            <h2
              className="text-[clamp(31px,4vw,46px)] font-bold leading-[1.05]"
              style={{ fontFamily: "Georgia, serif", letterSpacing: "-.04em" }}
            >
              See where the highest salaries sit.
            </h2>
            <p
              className="mt-2 max-w-[670px] text-[14px]"
              style={{ color: "var(--muted)" }}
            >
              A benchmark view generated from the existing profession dataset. Production values
              remain dynamic.
            </p>
          </div>
          <div
            className="overflow-hidden rounded-[15px] border"
            style={{ background: "var(--white)", borderColor: "var(--line)" }}
          >
            <div className="overflow-x-auto">
              <div style={{ minWidth: "640px" }}>
                {/* Table header */}
                <div
                  className="grid items-center gap-4 border-b bg-[var(--paper-2)] px-[18px] py-4 text-[9px] font-extrabold uppercase"
                  style={{
                    borderColor: "var(--line)",
                    gridTemplateColumns: "1.25fr .8fr 150px 90px",
                    letterSpacing: ".1em",
                    color: "var(--muted)",
                  }}
                >
                  <div>Profession</div>
                  <div>Category</div>
                  <div className="text-right">US salary</div>
                  <div className="text-right">Open</div>
                </div>
                {/* Table rows */}
                {salaryRows.map((prof) => (
                  <div
                    key={prof.id}
                    className="grid items-center gap-4 border-b px-[18px] py-[15px] text-[13px] last:border-b-0 transition-colors hover:bg-[var(--blue-soft)]"
                    style={{
                      borderColor: "var(--line)",
                      gridTemplateColumns: "1.25fr .8fr 150px 90px",
                    }}
                  >
                    <div>
                      <a href={`/us/salary/${prof.slug}`} className="font-extrabold">
                        {prof.name}
                      </a>
                    </div>
                    <div className="text-[11px]" style={{ color: "var(--muted)" }}>
                      {prof.id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                    </div>
                    <div className="text-right font-extrabold tabular-nums">
                      {formatSalaryBySlug(prof.salaries.us.average, "us", { showCode: true })}
                    </div>
                    <div className="text-right">
                      <a
                        className="text-[12px] font-extrabold"
                        style={{ color: "var(--blue)" }}
                        href={`/us/salary/${prof.slug}`}
                      >
                        \u2192
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* 05 \u00b7 COUNTRY CONTEXT */}
        <Section className="py-[66px]">
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <div>
              <div
                className="mb-2 text-[10px] font-extrabold uppercase"
                style={{ color: "var(--blue)", letterSpacing: ".15em" }}
              >
                04 \u00b7 Country context
              </div>
              <h2
                className="text-[clamp(31px,4vw,46px)] font-bold leading-[1.05]"
                style={{ fontFamily: "Georgia, serif", letterSpacing: "-.04em" }}
              >
                The profession is only half the question.
              </h2>
              <p
                className="mt-2 max-w-[670px] text-[14px]"
                style={{ color: "var(--muted)" }}
              >
                The same job can have a different financial meaning depending on where it is
                performed.
              </p>
            </div>
            <a
              className="shrink-0 text-[12px] font-extrabold"
              style={{ color: "var(--blue)" }}
              href="/compare"
            >
              Compare countries&nbsp;\u2192
            </a>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {displayCountries.map((c) => (
              <div
                key={c.slug}
                className="rounded-[15px] border bg-white p-5"
                style={{ borderColor: "var(--line)" }}
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3
                      className="text-[22px] leading-[1.1]"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {COUNTRY_FLAGS[c.slug]} {c.name}
                    </h3>
                    <p className="mt-[5px] text-[11px]" style={{ color: "var(--muted)" }}>
                      {countryDescriptions[c.slug] || "Explore career economics."}
                    </p>
                  </div>
                  <a
                    href={`/${c.slug}`}
                    className="text-[11px] font-extrabold"
                    style={{ color: "var(--blue)" }}
                  >
                    Explore&nbsp;\u2192
                  </a>
                </div>
                <div className="grid grid-cols-3 gap-[7px]">
                  <div
                    className="rounded-[8px] border p-[9px]"
                    style={{ background: "var(--paper)", borderColor: "var(--line)" }}
                  >
                    <b className="block text-[11px]">Salary</b>
                    <span className="mt-0.5 block text-[8px]" style={{ color: "var(--muted)" }}>
                      {c.currencyCode}
                    </span>
                  </div>
                  <div
                    className="rounded-[8px] border p-[9px]"
                    style={{ background: "var(--paper)", borderColor: "var(--line)" }}
                  >
                    <b className="block text-[11px]">Tax</b>
                    <span className="mt-0.5 block text-[8px]" style={{ color: "var(--muted)" }}>
                      {c.taxAuthorityAbbr}
                    </span>
                  </div>
                  <div
                    className="rounded-[8px] border p-[9px]"
                    style={{ background: "var(--paper)", borderColor: "var(--line)" }}
                  >
                    <b className="block text-[11px]">Outcome</b>
                    <span className="mt-0.5 block text-[8px]" style={{ color: "var(--muted)" }}>
                      Context
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 06 \u00b7 METHODOLOGY / TRUST */}
        <section
          className="border-b py-[66px]"
          style={{ background: "var(--ink)", color: "#fff", borderBottomColor: "#30302d" }}
        >
          <div className="mx-auto px-6" style={{ maxWidth: "var(--max)" }}>
            <div className="mb-7">
              <div
                className="mb-2 text-[10px] font-extrabold uppercase"
                style={{ color: "var(--blue)", letterSpacing: ".15em" }}
              >
                05 \u00b7 Methodology
              </div>
              <h2
                className="text-[clamp(31px,4vw,46px)] font-bold leading-[1.05]"
                style={{ fontFamily: "Georgia, serif", letterSpacing: "-.04em" }}
              >
                Useful data needs context.
              </h2>
              <p className="mt-2 max-w-[670px] text-[14px]" style={{ color: "#aaa" }}>
                Profession pages are built from Olikit&apos;s underlying datasets. The live
                implementation exposes relevant source and methodology links.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                {
                  title: "Data sources",
                  desc: "Understand where profession and country figures come from.",
                  href: "/data-sources",
                },
                {
                  title: "Methodology",
                  desc: "See how salary and comparison values are constructed.",
                  href: "/methodology",
                },
                {
                  title: "Editorial policy",
                  desc: "Understand how Olikit handles research and information quality.",
                  href: "/editorial-policy",
                },
              ].map((card) => (
                <div
                  key={card.href}
                  className="rounded-[14px] border p-5"
                  style={{ borderColor: "#363632" }}
                >
                  <h3
                    className="text-[20px]"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[11px]" style={{ color: "#aaa" }}>
                    {card.desc}
                  </p>
                  <a
                    href={card.href}
                    className="mt-4 inline-block text-[11px] font-extrabold"
                    style={{ color: "#B9C8FF" }}
                  >
                    {card.title === "Data sources"
                      ? "Inspect sources \u2192"
                      : card.title === "Methodology"
                        ? "Read methodology \u2192"
                        : "Read policy \u2192"}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Shell>
  )
}
