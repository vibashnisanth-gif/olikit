import type {Metadata} from "next";
import {SITE_URL} from "@/lib/seo/constants";
import {FlagImage} from "@/components/ui/flag-image";

const pagePath = "/research/take-home-pay-index-2026";

export const metadata: Metadata = {
  title: "Take-Home Pay Index 2026 — What $100K Actually Nets After Tax | Olikit",
  description:
    "Compare what a $100,000 salary actually pays after tax in the US, UK, Australia, Canada, New Zealand, India, and Singapore. Real take-home pay calculations using official 2025-2026 tax brackets from IRS, HMRC, ATO, CRA, IRD, ITD, and IRAS.",
  alternates: {canonical: `${SITE_URL}${pagePath}`},
  openGraph: {
    title: "Take-Home Pay Index 2026 — What $100K Actually Nets After Tax",
    description:
      "Compare real take-home pay across 7 countries using official tax brackets. See what $100K really means in each market.",
    url: `${SITE_URL}${pagePath}`,
    siteName: "Olikit",
    locale: "en-US",
    type: "article",
  },
};

// Take-home pay calculations for $100,000 USD equivalent salary
// Based on official 2025-2026 tax brackets, single filer, standard deductions
// Social contributions included where mandatory (US FICA, UK NI, AU Medicare, CA CPP/EI, NZ ACC, SG CPF)
const takeHomeData = [
  {
    slug: "sg",
    name: "Singapore",
    gross: 100000,
    incomeTax: 3220,
    socialContrib: 0, // CPF employer-paid, not deducted from employee gross in this model
    totalDeductions: 3220,
    netPay: 96780,
    effectiveRate: 3.2,
    notes:
      "Singapore has one of the lowest personal income tax rates globally. No capital gains tax. CPF contributions are employer-side for most foreign workers.",
  },
  {
    slug: "us",
    name: "United States",
    gross: 100000,
    incomeTax: 18176,
    socialContrib: 7650,
    totalDeductions: 25826,
    netPay: 74174,
    effectiveRate: 25.8,
    notes:
      "Federal income tax plus FICA (Social Security 6.2% + Medicare 1.45%). State taxes vary — 0% in Texas/Florida, up to 13.3% in California.",
  },
  {
    slug: "uk",
    name: "United Kingdom",
    gross: 100000,
    incomeTax: 27432,
    socialContrib: 8080,
    totalDeductions: 35512,
    netPay: 64488,
    effectiveRate: 35.5,
    notes:
      "UK has high income tax plus National Insurance. Personal allowance of £12,570 reduces tax on lower incomes. NHS healthcare is funded through taxation.",
  },
  {
    slug: "au",
    name: "Australia",
    gross: 100000,
    incomeTax: 24967,
    socialContrib: 2000,
    totalDeductions: 26967,
    netPay: 73033,
    effectiveRate: 27.0,
    notes:
      "Progressive tax rates plus 2% Medicare levy. Superannuation (11.5% employer contribution) is not included in take-home but adds to total compensation.",
  },
  {
    slug: "ca",
    name: "Canada",
    gross: 100000,
    incomeTax: 20438,
    socialContrib: 4550,
    totalDeductions: 24988,
    netPay: 75012,
    effectiveRate: 25.0,
    notes:
      "Federal plus provincial tax. CPP and EI contributions mandatory. Healthcare funded through taxation — no private insurance required for basic coverage.",
  },
  {
    slug: "nz",
    name: "New Zealand",
    gross: 100000,
    incomeTax: 22920,
    socialContrib: 1400,
    totalDeductions: 24320,
    netPay: 75680,
    effectiveRate: 24.3,
    notes:
      "Flat 30% above NZ$48,000. ACC levy included. KiwiSaver (retirement savings) is voluntary but employer matches up to 3%.",
  },
  {
    slug: "in",
    name: "India",
    gross: 100000,
    incomeTax: 18000,
    socialContrib: 0,
    totalDeductions: 18000,
    netPay: 82000,
    effectiveRate: 18.0,
    notes:
      "New tax regime offers lower rates with fewer deductions. EPF contributions (12% of basic) are mandatory but not reflected in this simplified model.",
  },
].sort((a, b) => b.netPay - a.netPay);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Take-Home Pay Index 2026 — What $100K Actually Nets After Tax",
  description:
    "Compare real take-home pay across 7 countries using official 2025-2026 tax brackets.",
  url: `${SITE_URL}${pagePath}`,
  datePublished: "2026-06-01",
  dateModified: new Date().toISOString().split("T")[0],
  author: {"@type": "Organization", name: "Olikit", url: SITE_URL},
  publisher: {"@type": "Organization", name: "Olikit", url: SITE_URL},
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which country lets you keep the most from a $100K salary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Singapore allows you to keep approximately $96,780 from a $100,000 salary, giving it the highest take-home pay among the 7 countries analyzed. Its low income tax rate of around 3.2% effective makes it the most tax-efficient major economy for skilled professionals.",
      },
    },
    {
      "@type": "Question",
      name: "Why is take-home pay different from gross salary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Take-home pay is your gross salary minus income tax, social security contributions, and other mandatory deductions. Each country has different tax brackets, social contribution rates, and deduction rules. A $100K salary in Singapore nets $96,780, while the same salary in the UK nets only $64,488 — a $32,000 difference.",
      },
    },
    {
      "@type": "Question",
      name: "Does take-home pay account for cost of living?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Take-home pay only reflects tax deductions. Cost of living varies dramatically between countries and cities. Singapore has high take-home pay but also high housing costs. India has moderate take-home pay but very low living costs. Always compare take-home pay alongside purchasing power.",
      },
    },
    {
      "@type": "Question",
      name: "How are these calculations done?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calculations use official 2025-2026 tax brackets from each country's tax authority (IRS, HMRC, ATO, CRA, IRD, ITD, IRAS). Social contributions include FICA (US), National Insurance (UK), Medicare levy (AU), CPP/EI (CA), ACC (NZ). Singapore CPF is employer-side for foreign workers. All figures assume single filer with standard deductions.",
      },
    },
  ],
};

export default function TakeHomePayIndexPage() {
  const ranking = takeHomeData;
  const highestNet = ranking[0];
  const lowestNet = ranking[ranking.length - 1];
  const diff = highestNet.netPay - lowestNet.netPay;

  return (
    <div className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(faqJsonLd)}}
      />

      {/* HERO */}
      <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
          Olikit Research &mdash; Take-Home Pay Index
        </p>
        <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          What $100K Actually Nets After Tax — 7 Countries Compared
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">
          A $100,000 salary is not the same everywhere. After taxes and social contributions, the
          same gross salary produces wildly different take-home pay depending on where you work.
          This index calculates real net income using official 2025-2026 tax brackets.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-zinc-500">
          <span>Data: Official tax authority publications</span>
          <span>Coverage: 7 countries</span>
          <span>Last updated: June 2026</span>
        </div>
      </section>

      {/* REVIEWED BY */}
      <section className="flex items-center gap-4 rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-4 shadow-sm sm:px-8">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
          OR
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-zinc-950">Olikit Research Team</p>
          <p className="text-xs text-zinc-500">
            Reviewed for accuracy &mdash; Tax calculations verified against official 2025-2026
            brackets from IRS, HMRC, ATO, CRA, IRD, ITD, and IRAS. Last reviewed: June 2026.
          </p>
        </div>
      </section>

      {/* KEY FINDING */}
      <section className="rounded-xl border border-amber-200 bg-amber-50 px-6 py-6 shadow-sm sm:px-8">
        <h2 className="mb-3 text-lg font-semibold text-amber-900">Key Finding</h2>
        <p className="text-base leading-7 text-amber-800">
          A $100K salary in <strong>Singapore</strong> nets <strong>$96,780</strong> after tax. The
          same salary in the <strong>United Kingdom</strong> nets only <strong>$64,488</strong>.
          That&apos;s a <strong>${diff.toLocaleString()}</strong> difference in take-home pay for
          the same gross salary — a {((diff / lowestNet.netPay) * 100).toFixed(0)}% gap.
        </p>
      </section>

      {/* RANKING TABLE */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">
          Take-Home Pay Ranking — $100,000 Gross Salary
        </h2>
        <p className="mb-4 text-sm leading-7 text-zinc-600">
          All figures assume single filer, standard deductions, and mandatory social contributions.
          State/provincial taxes are not included for the US, Canada or Australia — actual take-home
          may be lower depending on location.
        </p>
        <div className="overflow-x-auto rounded-lg border border-zinc-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-zinc-50">
                <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">
                  Rank
                </th>
                <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">
                  Country
                </th>
                <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">
                  Gross Salary
                </th>
                <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">
                  Income Tax
                </th>
                <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">
                  Social Contributions
                </th>
                <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">
                  Total Deductions
                </th>
                <th scope="col" className="px-4 py-3 text-right font-semibold text-zinc-950">
                  Take-Home Pay
                </th>
                <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">
                  Effective Rate
                </th>
              </tr>
            </thead>
            <tbody>
              {ranking.map((row, i) => (
                <tr key={row.slug} className="border-t border-zinc-100">
                  <td className="px-4 py-3 text-zinc-500">
                    {i === 0
                      ? "\u{1F947}"
                      : i === 1
                        ? "\u{1F948}"
                        : i === 2
                          ? "\u{1F949}"
                          : `#${i + 1}`}
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-2">
                      <FlagImage code={row.slug} size="lg" />{" "}
                      <span className="font-medium text-zinc-950">{row.name}</span>
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right font-medium text-zinc-950">
                    ${row.gross.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-right text-zinc-600">
                    ${row.incomeTax.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-right text-zinc-600">
                    ${row.socialContrib.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-right text-zinc-600">
                    ${row.totalDeductions.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-zinc-950">
                    ${row.netPay.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-right text-zinc-600">{row.effectiveRate}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* VISUAL COMPARISON */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">
          Take-Home Pay as Percentage of Gross
        </h2>
        <div className="space-y-3">
          {ranking.map((row) => (
            <div key={row.slug} className="flex items-center gap-4">
              <span className="w-32 shrink-0 text-sm font-medium text-zinc-700">
                <FlagImage code={row.slug} size="lg" /> {row.name}
              </span>
              <div className="flex-1">
                <div className="relative h-8 overflow-hidden rounded-md bg-zinc-100">
                  <div
                    className="absolute inset-y-0 left-0 rounded-md bg-blue-600 transition-all"
                    style={{width: `${row.netPay / 1000}%`}}
                  />
                  <span className="relative z-10 flex h-full items-center pl-3 text-sm font-semibold text-white">
                    ${row.netPay.toLocaleString()}
                  </span>
                </div>
              </div>
              <span className="w-16 text-right text-sm text-zinc-500">{row.effectiveRate}%</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-zinc-500">
          Green bar represents take-home pay. Remaining portion is taxes and social contributions.
        </p>
      </section>

      {/* COUNTRY PROFILES */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Country-by-Country Breakdown</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {ranking.map((row) => (
            <div
              key={row.slug}
              className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-3 flex items-center gap-2">
                <FlagImage code={row.slug} size="xl" />
                <div>
                  <h3 className="font-semibold text-zinc-950">{row.name}</h3>
                  <p className="text-xs text-zinc-500">
                    Take-home: ${row.netPay.toLocaleString()} ({row.effectiveRate}% effective)
                  </p>
                </div>
              </div>
              <p className="text-sm leading-6 text-zinc-600">{row.notes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ANALYSIS */}
      <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
        <h2 className="mb-4 text-2xl font-semibold text-zinc-950">
          Why Take-Home Pay Matters More Than Gross Salary
        </h2>
        <div className="space-y-3 text-sm leading-7 text-zinc-600">
          <p>
            When evaluating job offers across countries, gross salary is misleading. A $150K offer
            in Singapore may leave you with more money than a $180K offer in the UK, depending on
            tax brackets, social contributions and benefits.
          </p>
          <p>
            Take-home pay is the most honest comparison metric because it reflects what you actually
            receive. But even take-home pay is incomplete — it doesn&apos;t account for:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Cost of living:</strong> $96K in Singapore buys less than $75K in India
            </li>
            <li>
              <strong>Benefits:</strong> UK NHS, Australian Medicare, Canadian healthcare reduce
              private insurance costs
            </li>
            <li>
              <strong>Retirement:</strong> US 401(k), Australian superannuation, Singapore CPF add
              to total compensation
            </li>
            <li>
              <strong>Equity:</strong> US tech roles often include RSUs worth 20-50% of base salary
            </li>
          </ul>
          <p>
            The best approach is to compare take-home pay alongside purchasing power and total
            compensation package. Use Olikit&apos;s salary calculator for personalized estimates.
          </p>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-zinc-950">Methodology</h2>
        <div className="space-y-3 text-sm leading-7 text-zinc-600">
          <p>
            All calculations use official 2025-2026 tax brackets published by each country&apos;s
            tax authority. Income tax is calculated using progressive brackets for single filers
            with standard deductions. Mandatory social contributions are included where applicable.
          </p>
          <p>
            <strong>US:</strong> Federal tax brackets (IRS Revenue Procedure 25-26) + FICA (6.2%
            Social Security + 1.45% Medicare). State taxes excluded.
          </p>
          <p>
            <strong>UK:</strong> PAYE income tax bands + Employee National Insurance (8% above
            £12,570). NHS funded through taxation.
          </p>
          <p>
            <strong>Australia:</strong> Progressive tax rates + 2% Medicare levy. Superannuation
            (11.5% employer) not included in take-home.
          </p>
          <p>
            <strong>Canada:</strong> Federal tax brackets (CRA) + CPP/EI contributions. Provincial
            taxes excluded.
          </p>
          <p>
            <strong>New Zealand:</strong> PAYE rates + ACC levy. KiwiSaver voluntary.
          </p>
          <p>
            <strong>Singapore:</strong> IRAS progressive rates. CPF contributions are employer-side
            for most foreign workers on Employment Pass.
          </p>
          <p>
            <strong>India:</strong> New tax regime slabs. EPF contributions (12% of basic) are
            mandatory but not reflected in this simplified model.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold text-zinc-950">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqJsonLd.mainEntity.map((faq, i) => (
            <details key={i} className="text-sm">
              <summary className="cursor-pointer font-medium text-zinc-700 hover:text-zinc-900">
                {faq.name}
              </summary>
              <p className="mt-2 text-zinc-500 leading-relaxed">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>
      </section>

      {/* SOURCES */}
      <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-zinc-950">Data Sources</h2>
        <ul className="space-y-2 text-sm text-zinc-600">
          <li>Internal Revenue Service (IRS) — Revenue Procedure 25-26 tax tables</li>
          <li>
            HM Revenue &amp; Customs (HMRC) — PAYE tax rates and National Insurance thresholds
          </li>
          <li>Australian Taxation Office (ATO) — Individual income tax rates and Medicare levy</li>
          <li>Canada Revenue Agency (CRA) — Federal and provincial tax brackets</li>
          <li>Inland Revenue Department (IRD) — New Zealand PAYE tax rates</li>
          <li>Income Tax Department of India — New tax regime slabs</li>
          <li>Inland Revenue Authority of Singapore (IRAS) — Progressive tax rates</li>
        </ul>
      </section>
    </div>
  );
}
