import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {locales, getLocale, getSubRegion} from "@/lib/seo/locales";
import {SITE_URL} from "@/lib/seo/constants";
import {StateTakeHomeCalculator} from "@/components/state-take-home-calculator";
import {getStateName, hasStateTax, ALL_STATE_SLUGS} from "@/lib/content/state-tax-brackets";
import {STATE_SEO_CONTENT} from "@/lib/content/state-seo-content";
import Link from "next/link";

type Props = {
  params: Promise<{locale: string; subregion: string}>;
};

export async function generateStaticParams() {
  const params: {locale: string; subregion: string}[] = [];
  const usLocale = locales.find((l) => l.slug === "us");
  if (usLocale?.states) {
    for (const state of usLocale.states) {
      params.push({locale: "us", subregion: state.slug});
    }
  }
  return params;
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale: localeSlug, subregion: subregionSlug} = await params;
  const locale = getLocale(localeSlug);
  if (!locale) return {};
  const subRegion = getSubRegion(locale, subregionSlug);
  if (!subRegion) return {};

  const stateName = getStateName(subregionSlug);
  const hasTax = hasStateTax(subregionSlug);

  return {
    title: `${stateName} Take-Home Pay Calculator 2026 | After Tax Income`,
    description: `Calculate your take-home pay in ${stateName}. See federal tax, state income tax${hasTax ? "" : " (no state income tax)"}, and FICA deductions for 2025-2026. Free calculator with instant breakdown.`,
    alternates: {
      canonical: `${SITE_URL}/us/state/${subregionSlug}/take-home-pay`,
    },
    openGraph: {
      title: `${stateName} Take-Home Pay Calculator 2026`,
      description: `Estimate your after-tax income in ${stateName} with federal, state, and FICA deductions. Free calculator with instant breakdown.`,
      url: `${SITE_URL}/us/state/${subregionSlug}/take-home-pay`,
      siteName: "Olikit",
      type: "website",
    },
  };
}

export default async function StateTakeHomePayPage({params}: Props) {
  const {locale: localeSlug, subregion: subregionSlug} = await params;
  const locale = getLocale(localeSlug);
  if (!locale) notFound();
  const subRegion = getSubRegion(locale, subregionSlug);
  if (!subRegion) notFound();

  const stateName = getStateName(subregionSlug);
  const hasTax = hasStateTax(subregionSlug);
  const seo = STATE_SEO_CONTENT[subregionSlug];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is the take-home pay on a $75,000 salary in ${stateName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `On a $75,000 salary in ${stateName}, a single filer takes home approximately $56,000-$58,000 after federal tax, ${hasTax ? `state tax, ` : ""}and FICA deductions. Use the calculator above for your exact breakdown.`,
        },
      },
      {
        "@type": "Question",
        name: `Does ${stateName} have state income tax?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: hasTax
            ? `Yes, ${stateName} has a state income tax. ${seo ? `The top marginal rate is ${seo.topRate}%.` : ""} Rates vary by income level.`
            : `No, ${stateName} does not levy a state income tax on wages and salaries. Residents pay only federal income tax and FICA deductions.`,
        },
      },
      {
        "@type": "Question",
        name: `What is the effective tax rate in ${stateName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `The effective tax rate in ${stateName} depends on your income and filing status. For a typical $75,000 salary, the combined effective rate is approximately 22-28%. Use the calculator above to estimate your total federal, state, and FICA tax burden.`,
        },
      },
      {
        "@type": "Question",
        name: `How is take-home pay calculated in ${stateName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Take-home pay is calculated by subtracting federal income tax, ${stateName} state income tax (if applicable), Social Security tax (6.2% up to $176,100), and Medicare tax (1.45%) from your gross salary. The federal standard deduction for 2025 is $14,600 for single filers.`,
        },
      },
      {
        "@type": "Question",
        name: `What is the take-home pay on a $100,000 salary in ${stateName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `On a $100,000 salary in ${stateName}, a single filer takes home approximately $72,000-$75,000 after all taxes. Use the calculator above for your exact breakdown based on your filing status.`,
        },
      },
      {
        "@type": "Question",
        name: `How much Social Security and Medicare tax do I pay in ${stateName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `FICA taxes are the same nationwide: Social Security is 6.2% on the first $176,100 of wages, and Medicare is 1.45% on all wages. An additional 0.9% Medicare surtax applies to wages above $200,000 for single filers.`,
        },
      },
      {
        "@type": "Question",
        name: `What is the difference between marginal and effective tax rate in ${stateName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Your marginal tax rate is the rate on your last dollar earned, while your effective tax rate is the average rate on all income. In ${stateName}, the marginal rate${hasTax ? ` can be as high as ${seo?.topRate ?? "varies"}%` : " is 0%"}, but your effective rate is always lower because lower brackets are taxed at lower rates.`,
        },
      },
      {
        "@type": "Question",
        name: `How can I increase my take-home pay in ${stateName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `You can increase your take-home pay by maximizing pre-tax deductions like 401(k) contributions (up to $23,500 in 2025), HSA contributions, and adjusting your W-4 withholding. Consider consulting a tax professional for personalized advice.`,
        },
      },
      {
        "@type": "Question",
        name: `${stateName} vs Texas take-home pay — which is better?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: hasTax
            ? `Texas has no state income tax, so you take home more in Texas. For a $100,000 salary, the difference is typically $3,000-$7,000 depending on your bracket. However, Texas has higher property taxes.`
            : `${stateName} already has no state income tax, same as Texas. Your take-home pay would be identical for the same salary, but cost of living differences may affect your overall financial picture.`,
        },
      },
      {
        "@type": "Question",
        name: `Does ${stateName} have a state disability insurance (SDI) tax?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: seo?.hasSDI
            ? `Yes, ${stateName} has a state disability insurance tax of ${seo.sdiRate}% on wages. ${seo.sdiNote ?? ""} This is separate from federal FICA taxes.`
            : `No, ${stateName} does not have a state disability insurance (SDI) tax. Only a handful of states (CA, NJ, NY, RI, HI) require SDI contributions.`,
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {"@type": "ListItem", position: 1, name: "Home", item: SITE_URL},
      {"@type": "ListItem", position: 2, name: "United States", item: `${SITE_URL}/us`},
      {
        "@type": "ListItem",
        position: 3,
        name: stateName,
        item: `${SITE_URL}/us/state/${subregionSlug}`,
      },
      {"@type": "ListItem", position: 4, name: "Take-Home Pay"},
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(faqJsonLd)}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbJsonLd)}}
      />

      <div className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/" className="hover:text-zinc-700">
            Home
          </Link>
          <span>/</span>
          <Link href="/us" className="hover:text-zinc-700">
            United States
          </Link>
          <span>/</span>
          <Link href={`/us/state/${subregionSlug}`} className="hover:text-zinc-700">
            {stateName}
          </Link>
          <span>/</span>
          <span className="text-zinc-950 font-medium">Take-Home Pay</span>
        </nav>

        {/* H1 + intro */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            {stateName} Take-Home Pay Calculator
          </h1>
          <p className="mt-3 text-base leading-7 text-zinc-600">
            Calculate your estimated take-home pay in {stateName} after federal income tax,{" "}
            {hasTax ? "state income tax" : "no state income tax"}, and FICA deductions. Enter your
            salary and filing status for an instant breakdown of your paycheck.
          </p>
        </div>

        {/* Calculator */}
        <StateTakeHomeCalculator stateSlug={subregionSlug} />

        {/* Quick answer - featured snippet target */}
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-6 py-6">
          <h2 className="text-lg font-semibold text-zinc-950">
            What is the take-home pay on a $75,000 salary in {stateName}?
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-600">
            On a $75,000 salary in {stateName}, a single filer takes home approximately{" "}
            <strong>$56,000-$58,000</strong> per year after federal tax
            {hasTax ? ", state income tax" : ""}, and FICA deductions. This breaks down to roughly{" "}
            <strong>$4,700-$4,800 per month</strong> or{" "}
            <strong>$2,150-$2,230 per biweekly paycheck</strong>.
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Here is a quick comparison at common salary levels (single filer):
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  <th className="pb-2 pr-4">Gross Salary</th>
                  <th className="pb-2 pr-4">Federal Tax</th>
                  {hasTax && <th className="pb-2 pr-4">{stateName} Tax</th>}
                  <th className="pb-2 pr-4">FICA</th>
                  <th className="pb-2">Take-Home</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {[
                  {salary: 40000, label: "$40,000"},
                  {salary: 60000, label: "$60,000"},
                  {salary: 75000, label: "$75,000"},
                  {salary: 100000, label: "$100,000"},
                  {salary: 150000, label: "$150,000"},
                ].map(({salary, label}) => (
                  <tr key={salary} className="text-zinc-600">
                    <td className="py-2 pr-4 font-medium text-zinc-950">{label}</td>
                    <td className="py-2 pr-4">~${Math.round(salary * 0.12).toLocaleString()}</td>
                    {hasTax && (
                      <td className="py-2 pr-4">
                        ~$
                        {Math.round(
                          salary * (seo?.topRate ? (seo.topRate * 0.4) / 100 : 0.04)
                        ).toLocaleString()}
                      </td>
                    )}
                    <td className="py-2 pr-4">~${Math.round(salary * 0.0765).toLocaleString()}</td>
                    <td className="py-2 font-semibold text-blue-">
                      ~${Math.round(salary * 0.73).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-zinc-400">
            Estimates for single filers. Actual amounts vary by deductions, credits, and filing
            status. Use the calculator above for your exact breakdown.
          </p>
        </div>

        {/* Tax overview */}
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-6 py-6">
          <h2 className="text-lg font-semibold text-zinc-950">{stateName} Tax Overview</h2>
          <div className="mt-3 space-y-3 text-sm leading-6 text-zinc-600">
            <p>
              {hasTax
                ? `${stateName} levies a state income tax on wages and salaries. ${seo ? `The top marginal rate is ${seo.topRate}% on income above $${seo.topRateAppliesAbove.toLocaleString()}.` : ""} Combined with federal income tax and FICA (Social Security at 6.2% and Medicare at 1.45%), your total tax burden depends on your income level and filing status.`
                : `${stateName} does not levy a state income tax on wages. Residents pay only federal income tax and FICA deductions (Social Security at 6.2% up to $176,100 and Medicare at 1.45%).`}
            </p>
            <p>
              The federal standard deduction for 2025-2026 is $14,600 for single filers and $29,200
              for married filing jointly. This reduces your taxable income before federal tax is
              calculated.
            </p>
            {seo?.hasSDI && (
              <p>
                <strong>State Disability Insurance (SDI):</strong> {stateName} also requires SDI
                contributions of {seo.sdiRate}% on wages. {seo.sdiNote ?? ""} This is in addition to
                federal FICA taxes and further reduces your take-home pay.
              </p>
            )}
            {seo?.hasLocalTax && (
              <p>
                <strong>Local taxes:</strong> {seo.localTaxNote}
              </p>
            )}
          </div>
        </div>

        {/* State-specific insights */}
        {seo && (
          <div className="rounded-xl border border-zinc-200 bg-white px-6 py-6">
            <h2 className="text-lg font-semibold text-zinc-950">
              Key Facts About {stateName} Taxes
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-zinc-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Top Marginal Rate
                </p>
                <p className="mt-1 text-2xl font-bold text-zinc-950">{seo.topRate}%</p>
                <p className="text-xs text-zinc-500">
                  on income above ${seo.topRateAppliesAbove.toLocaleString()}
                </p>
              </div>
              <div className="rounded-lg bg-zinc-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Median Household Income
                </p>
                <p className="mt-1 text-2xl font-bold text-zinc-950">
                  ${seo.medianHouseholdIncome.toLocaleString()}
                </p>
                <p className="text-xs text-zinc-500">U.S. Census Bureau</p>
              </div>
              <div className="rounded-lg bg-zinc-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Standard Deduction (Single)
                </p>
                <p className="mt-1 text-2xl font-bold text-zinc-950">
                  ${seo.standardDeductionSingle.toLocaleString()}
                </p>
                <p className="text-xs text-zinc-500">2025 state deduction</p>
              </div>
              <div className="rounded-lg bg-zinc-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  {seo.hasSDI ? "SDI Rate" : "State Income Tax"}
                </p>
                <p className="mt-1 text-2xl font-bold text-zinc-950">
                  {seo.hasSDI ? `${seo.sdiRate}%` : hasTax ? `${seo.topRate}%` : "None"}
                </p>
                <p className="text-xs text-zinc-500">
                  {seo.hasSDI
                    ? "on all wages"
                    : hasTax
                      ? "top marginal rate"
                      : "no state income tax"}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm italic text-zinc-500">{seo.funFact}</p>
          </div>
        )}

        {/* How take-home pay is calculated */}
        <div className="rounded-xl border border-zinc-200 bg-white px-6 py-6">
          <h2 className="text-lg font-semibold text-zinc-950">
            How Take-Home Pay is Calculated in {stateName}
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-6 text-zinc-600">
            <div className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-xs font-bold text-white">
                1
              </span>
              <div>
                <p className="font-semibold text-zinc-950">Start with gross salary</p>
                <p>
                  This is your total compensation before any deductions — your annual salary or
                  hourly wage multiplied by hours worked.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-xs font-bold text-white">
                2
              </span>
              <div>
                <p className="font-semibold text-zinc-950">Subtract federal income tax</p>
                <p>
                  The IRS uses progressive brackets from 10% to 37%. The 2025 standard deduction of
                  $14,600 (single) reduces your taxable income first.
                </p>
              </div>
            </div>
            {hasTax && (
              <div className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-xs font-bold text-white">
                  3
                </span>
                <div>
                  <p className="font-semibold text-zinc-950">
                    Subtract {stateName} state income tax
                  </p>
                  <p>
                    {stateName} uses progressive brackets
                    {seo ? ` ranging from ${seo.topRate > 5 ? "1%" : "0%"} to ${seo.topRate}%` : ""}
                    . Your marginal rate depends on how much you earn.
                  </p>
                </div>
              </div>
            )}
            <div className="flex gap-3">
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-xs font-bold text-white`}
              >
                {hasTax ? "4" : "3"}
              </span>
              <div>
                <p className="font-semibold text-zinc-950">Subtract FICA taxes</p>
                <p>
                  Social Security (6.2% on the first $176,100) and Medicare (1.45% on all wages).
                  These are federal and apply in every state.
                </p>
              </div>
            </div>
            {seo?.hasSDI && (
              <div className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-xs font-bold text-white">
                  {hasTax ? "5" : "4"}
                </span>
                <div>
                  <p className="font-semibold text-zinc-950">Subtract {stateName} SDI</p>
                  <p>
                    State Disability Insurance of {seo.sdiRate}% on wages provides short-term
                    disability benefits. {seo.sdiNote ?? ""}
                  </p>
                </div>
              </div>
            )}
            <div className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue- text-xs font-bold text-white">
                ✓
              </span>
              <div>
                <p className="font-semibold text-zinc-950">Result: Your take-home pay</p>
                <p>
                  The remaining amount is your net pay — what you actually receive in your bank
                  account each pay period.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Other states */}
        <div>
          <h2 className="text-lg font-semibold text-zinc-950">Take-Home Pay by State</h2>
          <p className="mt-1 text-sm text-zinc-500">
            Compare after-tax income across all 50 states and DC.
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
            {ALL_STATE_SLUGS.filter((s) => s !== subregionSlug)
              .slice(0, 12)
              .map((slug) => (
                <Link
                  key={slug}
                  href={`/us/state/${slug}/take-home-pay`}
                  className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950 transition-colors"
                >
                  {getStateName(slug)}
                </Link>
              ))}
          </div>
          <Link
            href="/us/states"
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue- hover:text-blue-"
          >
            View all states →
          </Link>
        </div>

        {/* FAQ */}
        <div className="rounded-xl border border-zinc-200 bg-white px-6 py-6">
          <h2 className="text-lg font-semibold text-zinc-950">
            Frequently Asked Questions About {stateName} Take-Home Pay
          </h2>
          <div className="mt-4 divide-y divide-zinc-100">
            {faqJsonLd.mainEntity.map((faq, i) => (
              <details key={i} className="group py-4 first:pt-0 last:pb-0">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-zinc-950 select-none">
                  {faq.name}
                  <svg
                    className="h-4 w-4 shrink-0 text-zinc-400 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-2 text-sm leading-6 text-zinc-500">{faq.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Methodology */}
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-6 py-6">
          <h2 className="text-lg font-semibold text-zinc-950">Tax Calculation Methodology</h2>
          <div className="mt-3 space-y-2 text-sm leading-6 text-zinc-600">
            <p>
              This calculator uses 2025-2026 federal income tax brackets from the IRS and{" "}
              {hasTax
                ? `${stateName} state tax brackets from the ${stateName} Department of Revenue`
                : "no state income tax"}
              .
            </p>
            <p>
              <strong>Federal brackets:</strong> 10% ($0-$11,925), 12% ($11,925-$48,475), 22%
              ($48,475-$103,350), 24% ($103,350-$197,300), 32% ($197,300-$250,525), 35%
              ($250,525-$626,350), 37% ($626,350+) for single filers.
            </p>
            <p>
              <strong>FICA:</strong> Social Security 6.2% on the first $176,100. Medicare 1.45% on
              all wages. Additional Medicare 0.9% on wages above $200,000 (single).
            </p>
            <p>
              <strong>Standard deduction:</strong> $14,600 (single), $29,200 (married filing
              jointly) for federal.{" "}
              {seo
                ? `${stateName} standard deduction: $${seo.standardDeductionSingle.toLocaleString()} (single).`
                : ""}
            </p>
            <p className="text-xs text-zinc-400">
              Tax brackets sourced from IRS, state departments of revenue. 2025-2026 estimates for
              educational purposes only. Not tax advice.
            </p>
          </div>
        </div>

        <p className="text-[11px] text-zinc-400">
          Tax brackets sourced from IRS, state departments of revenue. 2025-2026 estimates for
          educational purposes only.
        </p>
      </div>
    </>
  );
}
