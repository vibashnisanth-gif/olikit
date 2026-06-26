import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { buildArticleJsonLd, buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo/json-ld"
import { Shell } from "@/components/shell"
import { FAQSection } from "@/components/faq-section"

const pagePath = "/methodology/olikit-scoring-system"

export const metadata: Metadata = {
  title: "Olikit Scoring System Methodology — Official Documentation",
  description: "Official methodology documentation for all Olikit scoring systems: Compensation Score, Purchasing Power Score, Relocation Score, Career Opportunity Score, and Net Earning Power. Transparent, data-driven frameworks for global salary comparison.",
  alternates: { canonical: `${SITE_URL}${pagePath}` },
  openGraph: {
    title: "Olikit Scoring System Methodology — Official Documentation",
    description: "Transparent methodology for Olikit Compensation, Purchasing Power, Relocation, Career Opportunity, and Net Earning Power scores used in global salary intelligence.",
    url: `${SITE_URL}${pagePath}`,
    siteName: "Olikit",
    type: "article",
  },
}

const articleLocale = { code: "en", name: "English", slug: "en" } as any

const faqData = [
  {
    question: "How often are Olikit scores updated?",
    answer: "Olikit scores are reviewed and updated on a quarterly cycle. Major updates occur in January, April, July, and October to align with tax-year changes and the release of new government labour statistics. Intra-quarter adjustments may be applied when significant events — such as tax reform, currency volatility, or updated immigration policy — materially affect a score.",
  },
  {
    question: "Why does a country with higher salaries sometimes have a lower Olikit score?",
    answer: "Raw salary data is only one input. A country may have high nominal salaries but also high taxes, elevated housing costs, or lower career mobility, all of which reduce its composite scores. For example, a market with a Compensation Score of 95 may have a Purchasing Power Score of only 70 if cost of living consumes a disproportionate share of net income. Each score measures a distinct dimension; they should be read together rather than in isolation.",
  },
  {
    question: "What is Net Earning Power and how is it different from take-home pay?",
    answer: "Net Earning Power is an estimate of the disposable income a professional can expect after accounting for taxes, mandatory social contributions, and essential housing costs. It differs from simple take-home pay because it also adjusts for the cost of securing comparable accommodation in the target market, giving a more realistic view of wealth-building potential.",
  },
  {
    question: "How should the Relocation Score be interpreted?",
    answer: "The Relocation Score should be interpreted as a measure of overall relocation feasibility, not a recommendation. A score of 90 indicates a market with streamlined visa pathways, strong expatriate support, and high quality of life. A score of 50 suggests significant barriers such as complex immigration procedures, limited healthcare access, or cultural adjustment challenges. Professionals should use the score alongside their personal circumstances, family needs, and career goals.",
  },
  {
    question: "Are Olikit scores comparable across professions?",
    answer: "Yes. The scoring frameworks are profession-agnostic at the methodology level. A Compensation Score of 85 means the same thing for a Data Scientist, a Software Engineer, or a Product Manager: the role's compensation ranks in the Strong tier (80-89) relative to its own market benchmarks. However, the underlying inputs — median salary, senior potential, bonus prevalence — differ by profession, so direct nominal comparisons across professions are not meaningful without consulting the profession-specific data pages.",
  },
  {
    question: "What is the difference between the Compensation Score and the Career Opportunity Score?",
    answer: "The Compensation Score measures current earning potential: how competitive salaries are right now. The Career Opportunity Score measures long-term market strength: employer density, industry diversity, promotion pathways, and talent demand. A market may have a high Compensation Score but a moderate Career Opportunity Score if salaries are strong but the market is small or dominated by a single industry.",
  },
  {
    question: "Which data sources does Olikit use?",
    answer: "Olikit aggregates data from government statistical agencies (US Bureau of Labor Statistics, UK Office for National Statistics, Australian Bureau of Statistics, Statistics Canada, and their international counterparts), tax authority publications, World Bank purchasing power parity indicators, OECD cost-of-living indices, publicly available salary datasets, and immigration authority policy documentation. All sources are cited on individual page methodology notes where applicable.",
  },
  {
    question: "Why does the Purchasing Power Score use a 0-100 scale?",
    answer: "The 0-100 scale provides an intuitive, universally understood reference. A score of 100 represents the theoretical maximum: a market where net income, after adjusting for local costs, delivers optimal real-world spending power. Scores below 50 indicate markets where housing and essential costs consume a significant share of net income, reducing discretionary spending capacity.",
  },
  {
    question: "How are currency fluctuations accounted for?",
    answer: "Currency exchange rates are reviewed quarterly. All salary figures are converted to USD equivalents using the average annual exchange rate for the most recent completed calendar year, supplemented by the most recent quarter's rate where significant divergence exists. Users should be aware that short-term currency volatility can affect country rankings and consult the latest data for time-sensitive decisions.",
  },
  {
    question: "Can Olikit scores be used for visa or immigration applications?",
    answer: "No. Olikit Relocation Scores are informational only and are not recognised by any immigration authority for visa, residency, or citizenship applications. They are designed to help professionals compare relocation destinations, not to satisfy legal or regulatory requirements. Applicants must consult official government sources for immigration criteria.",
  },
  {
    question: "How does Olikit handle data gaps for smaller markets?",
    answer: "For markets where comprehensive data is unavailable, Olikit applies proxy indicators from comparable economies, adjusts for known differences, and clearly annotates the limitation on the relevant page. Scores for data-limited markets carry a wider confidence interval and are marked with an asterisk or footnote explaining the data quality tier.",
  },
  {
    question: "What happens when tax laws change?",
    answer: "Significant tax law changes are incorporated within 30 days of enactment. Minor or phased changes are applied during the next quarterly update cycle. The effective date of the most recent tax data update is displayed in the methodology notes on each country salary page.",
  },
  {
    question: "Is there a margin of error for Olikit scores?",
    answer: "All Olikit scores carry an estimated margin of error of plus or minus 3 to 5 points, depending on data quality and market transparency. Scores for established markets with robust statistical infrastructure (United States, United Kingdom, Australia, Canada, Singapore) have tighter confidence intervals. Emerging markets or those with limited official data may have wider intervals. Scores should be treated as directional indicators rather than precise measurements.",
  },
  {
    question: "How does Olikit define senior salary potential?",
    answer: "Senior salary potential is defined as the 75th percentile of total compensation for professionals with 8 or more years of experience in the relevant profession and market. This includes base salary, cash bonuses, and equity grants where applicable. The 75th percentile was chosen because it represents the threshold at which a professional can expect to be compensated at an experienced, high-performing level without reaching executive or C-suite tiers.",
  },
  {
    question: "Can employers use Olikit scores for compensation benchmarking?",
    answer: "Yes. Many Olikit scores are derived from the same inputs used in professional compensation benchmarking, including median salary data, percentile distributions, and market premium factors. Employers may reference Olikit scores as one input among several when evaluating international salary bands, but should not rely solely on any single scoring system for compensation decisions.",
  },
]

export default function OlikitScoringSystemPage() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Methodology", url: `${SITE_URL}/methodology` },
    { label: "Olikit Scoring System", url: `${SITE_URL}${pagePath}` },
  ])

  const articleSchema = buildArticleJsonLd(
    "Olikit Scoring System Methodology",
    "Official methodology documentation for all Olikit scoring systems: Compensation Score, Purchasing Power Score, Relocation Score, Career Opportunity Score, and Net Earning Power.",
    pagePath,
    articleLocale,
  )

  const faqSchema = buildFaqJsonLd(faqData)

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mx-auto max-w-3xl space-y-12">
        {/* HERO */}
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">Methodology</p>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Olikit Scoring System Methodology</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">
            This document describes the official methodology used to calculate all Olikit scoring systems. These frameworks are designed to standardise cross-market comparisons and provide professionals, researchers, and employers with transparent, reproducible measures of compensation, purchasing power, relocation feasibility, career opportunity, and net earning power across global markets.
          </p>
        </section>

        {/* INTRODUCTION */}
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Introduction: Why Olikit Created Scoring Systems</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            Raw salary data alone is insufficient for evaluating international job opportunities or making relocation decisions. A nominal salary figure does not account for differences in tax regimes, cost of living, purchasing power, career mobility, or the practical realities of moving to another country. Two professionals earning the same gross salary in different markets can have vastly different financial outcomes and quality of life.
          </p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            Olikit scoring systems were developed to address this gap. Each score isolates a specific dimension of the employment landscape and normalises it onto a 0-100 scale, enabling meaningful comparisons across countries, professions, and experience levels. The frameworks are designed to be:
          </p>
          <ul className="mb-4 list-disc space-y-1 pl-5 text-sm leading-7 text-zinc-600">
            <li><strong>Transparent:</strong> All inputs, weightings, and calculations are documented.</li>
            <li><strong>Reproducible:</strong> Third parties can verify scores using the same methodology and publicly available data.</li>
            <li><strong>Comparable:</strong> Scores use consistent scales and definitions across all markets and professions.</li>
            <li><strong>Practical:</strong> Each score addresses a specific decision-making need for professionals evaluating markets.</li>
          </ul>
          <p className="text-sm leading-7 text-zinc-600">
            The five scoring systems are designed to be used together. A complete evaluation of a market requires reviewing all five scores in combination with personal circumstances, career stage, and individual preferences.
          </p>
        </section>

        {/* SCORE 1: COMPENSATION */}
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">1. Olikit Compensation Score</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            The Compensation Score measures the earning potential of a given profession within a specific market. It answers the question: how competitive is compensation for this role in this country, relative to global benchmarks?
          </p>

          <h3 className="mb-3 mt-6 text-lg font-semibold text-zinc-950">Inputs and Weighting</h3>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            The Compensation Score is a weighted composite of four input categories. Weightings reflect the relative importance of each factor in determining overall earning potential:
          </p>
          <div className="mb-4 overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-50">
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Input</th>
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Definition</th>
                  <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">Weight</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Median Salary</td><td className="px-4 py-3 text-zinc-600">Market median base salary for the profession at the mid-career level (5 years of experience).</td><td className="px-4 py-3 text-right font-semibold text-zinc-950">50%</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Senior Salary Potential</td><td className="px-4 py-3 text-zinc-600">75th percentile total compensation for experienced professionals (8+ years).</td><td className="px-4 py-3 text-right font-semibold text-zinc-950">20%</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Bonus and Equity Prevalence</td><td className="px-4 py-3 text-zinc-600">Frequency and typical size of performance bonuses, stock grants, and other variable compensation.</td><td className="px-4 py-3 text-right font-semibold text-zinc-950">15%</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Tax Efficiency</td><td className="px-4 py-3 text-zinc-600">Effective tax rate on a mid-career salary, including income tax and mandatory social contributions.</td><td className="px-4 py-3 text-right font-semibold text-zinc-950">15%</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="mb-3 mt-6 text-lg font-semibold text-zinc-950">Calculation Method</h3>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            Each input is normalised to a 0-100 sub-score using min-max scaling against the full range of observed values across all tracked markets. Sub-scores are then combined using the weightings above to produce the composite Compensation Score. The formula is:
          </p>
          <div className="mb-4 rounded-lg bg-zinc-50 px-4 py-3 font-mono text-sm text-zinc-700">
            Compensation Score = (Median Salary × 0.50) + (Senior Potential × 0.20) + (Bonus and Equity × 0.15) + (Tax Efficiency × 0.15)
          </div>

          <h3 className="mb-3 mt-6 text-lg font-semibold text-zinc-950">Interpretation</h3>
          <div className="overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-50">
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Score Range</th>
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Tier</th>
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Interpretation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">90-100</td><td className="px-4 py-3 font-semibold text-emerald-700">Exceptional</td><td className="px-4 py-3 text-zinc-600">Top-tier global compensation. Market-leading salaries with significant bonus and equity potential.</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">80-89</td><td className="px-4 py-3 font-semibold text-emerald-700">Strong</td><td className="px-4 py-3 text-zinc-600">Highly competitive compensation. Above-median salaries with good variable pay opportunities.</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">70-79</td><td className="px-4 py-3 font-semibold text-amber-700">Competitive</td><td className="px-4 py-3 text-zinc-600">Solid compensation aligned with market benchmarks. Moderate variable pay prevalence.</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">60-69</td><td className="px-4 py-3 font-semibold text-amber-700">Moderate</td><td className="px-4 py-3 text-zinc-600">Below-median compensation. Limited bonus and equity availability in the market.</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Below 60</td><td className="px-4 py-3 font-semibold text-red-700">Limited</td><td className="px-4 py-3 text-zinc-600">Significant gap from global benchmarks. May reflect early-stage markets or roles with constrained earning potential.</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SCORE 2: PURCHASING POWER */}
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">2. Olikit Purchasing Power Score</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            The Purchasing Power Score measures the real-world spending power of net compensation after adjusting for local price levels. It answers the question: how far will my income go in this market?
          </p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            High nominal salaries do not automatically translate to high purchasing power. Markets with strong gross compensation often have proportionally elevated costs for housing, goods, and services, which can erode or eliminate the nominal advantage.
          </p>

          <h3 className="mb-3 mt-6 text-lg font-semibold text-zinc-950">Inputs and Weighting</h3>
          <div className="mb-4 overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-50">
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Input</th>
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Definition</th>
                  <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">Weight</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Net Income</td><td className="px-4 py-3 text-zinc-600">After-tax income for a mid-career professional, including mandatory social contributions.</td><td className="px-4 py-3 text-right font-semibold text-zinc-950">30%</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Housing Costs</td><td className="px-4 py-3 text-zinc-600">Median rent for a one-bedroom apartment in a desirable area of the primary tech hub.</td><td className="px-4 py-3 text-right font-semibold text-zinc-950">35%</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Essential Goods and Services</td><td className="px-4 py-3 text-zinc-600">Cost of groceries, transportation, utilities, healthcare, and communication services.</td><td className="px-4 py-3 text-right font-semibold text-zinc-950">20%</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Discretionary Capacity</td><td className="px-4 py-3 text-zinc-600">Proportion of net income remaining after essential expenses, indicating financial flexibility.</td><td className="px-4 py-3 text-right font-semibold text-zinc-950">15%</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="mb-3 mt-6 text-lg font-semibold text-zinc-950">Calculation Method</h3>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            Net income is calculated by applying the applicable tax regime to the median gross salary. Housing costs are subtracted at the market median for a standardised rental unit. Remaining net income is then adjusted using a cost-of-living index derived from World Bank purchasing power parity (PPP) conversion factors and third-party consumer price data. The result is normalised to the 0-100 scale, where 100 represents the maximum observed purchasing power across all tracked markets.
          </p>

          <h3 className="mb-3 mt-6 text-lg font-semibold text-zinc-950">Interpretation</h3>
          <div className="overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-50">
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Score Range</th>
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Tier</th>
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Interpretation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">90-100</td><td className="px-4 py-3 font-semibold text-emerald-700">Exceptional</td><td className="px-4 py-3 text-zinc-600">Net income provides substantial discretionary spending after all essential costs.</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">75-89</td><td className="px-4 py-3 font-semibold text-emerald-700">Strong</td><td className="px-4 py-3 text-zinc-600">Good balance of income and costs with meaningful savings potential.</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">60-74</td><td className="px-4 py-3 font-semibold text-amber-700">Adequate</td><td className="px-4 py-3 text-zinc-600">Essential costs consume a moderate share of net income. Limited discretionary capacity.</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">40-59</td><td className="px-4 py-3 font-semibold text-amber-700">Compressed</td><td className="px-4 py-3 text-zinc-600">Housing and essential costs absorb most of net income. Low financial flexibility.</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Below 40</td><td className="px-4 py-3 font-semibold text-red-700">Stressed</td><td className="px-4 py-3 text-zinc-600">Net income is insufficient to cover essential costs at a comfortable standard. Significant trade-offs required.</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SCORE 3: RELOCATION */}
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">3. Olikit Relocation Score</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            The Relocation Score evaluates how favourable a country is for professionals considering international relocation. It combines objective policy metrics with quality-of-life indicators that affect the overall relocation experience.
          </p>

          <h3 className="mb-3 mt-6 text-lg font-semibold text-zinc-950">Inputs and Weighting</h3>
          <div className="mb-4 overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-50">
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Input</th>
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Definition</th>
                  <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">Weight</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Visa Accessibility</td><td className="px-4 py-3 text-zinc-600">Availability of skilled-worker visa pathways, processing times, and success rates.</td><td className="px-4 py-3 text-right font-semibold text-zinc-950">30%</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Path to Residency</td><td className="px-4 py-3 text-zinc-600">Clarity, duration, and predictability of the pathway from temporary visa to permanent residence and citizenship.</td><td className="px-4 py-3 text-right font-semibold text-zinc-950">20%</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Healthcare Quality</td><td className="px-4 py-3 text-zinc-600">Quality, accessibility, and affordability of healthcare for residents and temporary visa holders.</td><td className="px-4 py-3 text-right font-semibold text-zinc-950">15%</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Safety and Stability</td><td className="px-4 py-3 text-zinc-600">Crime rates, political stability, and rule of law indicators.</td><td className="px-4 py-3 text-right font-semibold text-zinc-950">15%</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Employment Market Access</td><td className="px-4 py-3 text-zinc-600">Ease of obtaining work authorisation, recognition of foreign qualifications, and labour market integration support.</td><td className="px-4 py-3 text-right font-semibold text-zinc-950">20%</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="mb-3 mt-6 text-lg font-semibold text-zinc-950">Scoring Framework</h3>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            Each input is scored using a structured rubric. Visa accessibility, for example, is evaluated against criteria including whether a dedicated tech-worker visa exists, typical processing times, family inclusion policies, and whether the visa is tied to a single employer. Path to residency considers the minimum residency period required before applying for permanent residence, language requirements, and annual caps or quotas. Scores are combined using the weightings above and normalised to 0-100.
          </p>

          <h3 className="mb-3 mt-6 text-lg font-semibold text-zinc-950">Interpretation</h3>
          <div className="overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-50">
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Score Range</th>
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Tier</th>
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Interpretation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">85-100</td><td className="px-4 py-3 font-semibold text-emerald-700">Open</td><td className="px-4 py-3 text-zinc-600">Streamlined immigration pathways, clear residency routes, strong quality of life.</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">70-84</td><td className="px-4 py-3 font-semibold text-emerald-700">Accessible</td><td className="px-4 py-3 text-zinc-600">Structured visa programmes with moderate processing times. Good expatriate support infrastructure.</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">55-69</td><td className="px-4 py-3 font-semibold text-amber-700">Selective</td><td className="px-4 py-3 text-zinc-600">Visa pathways exist but may involve competitive quotas, employer sponsorship requirements, or longer processing times.</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">40-54</td><td className="px-4 py-3 font-semibold text-amber-700">Restrictive</td><td className="px-4 py-3 text-zinc-600">Limited visa options, significant bureaucratic hurdles, or unfavourable conditions for family relocation.</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Below 40</td><td className="px-4 py-3 font-semibold text-red-700">Challenging</td><td className="px-4 py-3 text-zinc-600">Substantial barriers to entry. Limited or no dedicated skilled-worker pathways.</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SCORE 4: CAREER OPPORTUNITY */}
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">4. Olikit Career Opportunity Score</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            The Career Opportunity Score assesses the long-term professional potential of a market. While the Compensation Score measures what you can earn now, the Career Opportunity Score measures the strength and resilience of the market over time.
          </p>

          <h3 className="mb-3 mt-6 text-lg font-semibold text-zinc-950">Inputs and Weighting</h3>
          <div className="mb-4 overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-50">
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Input</th>
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Definition</th>
                  <th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">Weight</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Employer Density</td><td className="px-4 py-3 text-zinc-600">Number of relevant employers per capita and concentration of industry-leading firms.</td><td className="px-4 py-3 text-right font-semibold text-zinc-950">30%</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Industry Diversity</td><td className="px-4 py-3 text-zinc-600">Range of industries employing the profession, indicating market resilience to sector-specific downturns.</td><td className="px-4 py-3 text-right font-semibold text-zinc-950">25%</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Talent Demand</td><td className="px-4 py-3 text-zinc-600">Job posting volume, vacancy-to-candidate ratios, and year-over-year hiring growth.</td><td className="px-4 py-3 text-right font-semibold text-zinc-950">25%</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Market Maturity</td><td className="px-4 py-3 text-zinc-600">Stage of market development: presence of established career ladders, professional networks, and advancement pathways.</td><td className="px-4 py-3 text-right font-semibold text-zinc-950">20%</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="mb-3 mt-6 text-lg font-semibold text-zinc-950">Interpretation</h3>
          <div className="overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-50">
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Score Range</th>
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Tier</th>
                  <th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Interpretation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">90-100</td><td className="px-4 py-3 font-semibold text-emerald-700">Global Leader</td><td className="px-4 py-3 text-zinc-600">Deep talent market with high employer density, diverse industries, and strong long-term demand.</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">75-89</td><td className="px-4 py-3 font-semibold text-emerald-700">Strong</td><td className="px-4 py-3 text-zinc-600">Robust market with good employer variety and healthy talent demand. Solid advancement infrastructure.</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">60-74</td><td className="px-4 py-3 font-semibold text-amber-700">Developing</td><td className="px-4 py-3 text-zinc-600">Growing market with increasing opportunities but limited employer density or industry breadth.</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">40-59</td><td className="px-4 py-3 font-semibold text-amber-700">Emerging</td><td className="px-4 py-3 text-zinc-600">Small or concentrated market. Limited career advancement options and narrower industry exposure.</td></tr>
                <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Below 40</td><td className="px-4 py-3 font-semibold text-red-700">Niche</td><td className="px-4 py-3 text-zinc-600">Very limited market size. Career progression may require geographic mobility or industry switches.</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SCORE 5: NET EARNING POWER */}
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">5. Olikit Net Earning Power</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            Net Earning Power estimates the disposable income available to a mid-career professional after accounting for taxes, mandatory contributions, and essential housing costs. It is the closest single metric to answering: how much wealth can I build in this market?
          </p>

          <h3 className="mb-3 mt-6 text-lg font-semibold text-zinc-950">Formula</h3>
          <div className="mb-4 rounded-lg bg-zinc-50 px-4 py-3 font-mono text-sm text-zinc-700">
            <p>Gross Annual Salary</p>
            <p className="mt-1">Minus: Income Tax (Federal / National + State / Provincial)</p>
            <p className="mt-1">Minus: Mandatory Social Contributions (Pension, Healthcare, Unemployment)</p>
            <p className="mt-1">Minus: Median Annual Rental Cost (One-Bedroom in Primary Tech Hub)</p>
            <p className="mt-2 font-semibold">Equals: Estimated Net Earning Power</p>
          </div>

          <h3 className="mb-3 mt-6 text-lg font-semibold text-zinc-950">Assumptions</h3>
          <ul className="mb-4 list-disc space-y-1 pl-5 text-sm leading-7 text-zinc-600">
            <li>The professional is a single filer with no dependents, using standard deductions where applicable.</li>
            <li>Housing cost is estimated at the median market rent for a one-bedroom apartment in a desirable area of the primary technology employment hub.</li>
            <li>Employer-provided health insurance is assumed where it is standard market practice; in markets with public healthcare, mandatory contributions are included.</li>
            <li>No adjustments are made for discretionary spending, savings instruments, or investment income.</li>
          </ul>

          <h3 className="mb-3 mt-6 text-lg font-semibold text-zinc-950">Limitations</h3>
          <ul className="mb-4 list-disc space-y-1 pl-5 text-sm leading-7 text-zinc-600">
            <li>Net Earning Power is an estimate, not a guarantee. Individual circumstances — tax filing status, dependents, deductions, and lifestyle choices — will produce different outcomes.</li>
            <li>Housing costs vary significantly within markets. The median rental figure may not reflect the experience of professionals who own property, live in shared accommodation, or choose more expensive or economical housing.</li>
            <li>The metric does not account for employer-provided benefits such as retirement contributions, stock grants, education allowances, or relocation packages, which can materially affect total wealth accumulation.</li>
          </ul>

          <h3 className="mb-3 mt-6 text-lg font-semibold text-zinc-950">Interpretation</h3>
          <p className="text-sm leading-7 text-zinc-600">
            Net Earning Power is expressed in USD equivalent to facilitate cross-market comparison. A higher value indicates greater wealth-building potential. The metric is most valuable when comparing two specific offers or markets, as it strips away the confounding effects of different tax regimes and housing cost structures. It should be used alongside the Compensation Score and Purchasing Power Score for a complete financial picture.
          </p>
        </section>

        {/* DATA SOURCES */}
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Data Sources</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            All Olikit scoring systems draw on data from the following categories of sources. Specific source references are provided on individual country and profession pages where scores are displayed.
          </p>
          <ul className="mb-4 list-disc space-y-1 pl-5 text-sm leading-7 text-zinc-600">
            <li><strong>Government Labour Statistics:</strong> National statistical agencies including the US Bureau of Labor Statistics, UK Office for National Statistics, Australian Bureau of Statistics, Statistics Canada, and comparable agencies in other tracked markets.</li>
            <li><strong>Tax Authority Publications:</strong> Official tax brackets, social contribution rates, and tax policy documentation from national revenue authorities.</li>
            <li><strong>Immigration Policy Documentation:</strong> Visa categories, processing times, and residency pathway requirements as published by national immigration departments.</li>
            <li><strong>Cost-of-Living and Purchasing Power Data:</strong> World Bank international comparison programme purchasing power parity indicators, OECD price level indices, and consumer price data from established third-party providers.</li>
            <li><strong>Compensation and Salary Data:</strong> Aggregated industry salary surveys, publicly disclosed compensation data, and labour market reports from recognised research organisations.</li>
          </ul>
          <p className="text-sm leading-7 text-zinc-600">
            Olikit does not fabricate or synthesise data. Where direct data is unavailable, proxy indicators from comparable markets are used and clearly annotated. All data sources and their effective dates are documented on the relevant methodology notes within each page.
          </p>
        </section>

        {/* LIMITATIONS */}
        <section className="rounded-xl border border-zinc-200 bg-zinc-50 px-6 py-8 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Methodological Limitations</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">
            The following limitations apply to all Olikit scoring systems. Users should consider these when interpreting scores and making decisions based on them.
          </p>
          <ul className="mb-4 list-disc space-y-1 pl-5 text-sm leading-7 text-zinc-600">
            <li><strong>Salary Variation:</strong> Salary data represents market estimates and medians. Individual compensation varies by employer, negotiation, specialisation, and performance. Scores should not be interpreted as salary guarantees.</li>
            <li><strong>Geographic Variation:</strong> All country-level scores are based on primary technology employment hubs. Salaries and costs in secondary cities may differ substantially from the hub-based figures used in scoring.</li>
            <li><strong>Currency Fluctuation:</strong> Scores and estimates expressed in USD-equivalent are subject to exchange rate movements. Quarterly updates capture major shifts, but intra-quarter volatility can affect relative rankings.</li>
            <li><strong>Tax Law Changes:</strong> Tax regimes are subject to legislative change. While Olikit incorporates enacted changes within 30 days, proposed or pending legislation is not reflected until enacted.</li>
            <li><strong>Cost-of-Living Dynamics:</strong> Housing and consumer prices can shift rapidly, particularly in markets experiencing high inflation, supply constraints, or demand shocks. Scores may lag behind real-time market conditions until the next update cycle.</li>
            <li><strong>Immigration Policy Volatility:</strong> Visa programmes and residency pathways are subject to policy changes that can occur with limited notice. Relocation Scores reflect the policy environment at the time of the most recent update.</li>
            <li><strong>Data Quality Variance:</strong> Markets with less developed statistical infrastructure may have wider confidence intervals. Scores for data-limited markets are annotated to reflect this uncertainty.</li>
          </ul>
          <p className="text-sm leading-7 text-zinc-600">
            Olikit scoring systems are designed as informational tools to support professional decision-making. They are not a substitute for personalised financial, legal, or immigration advice from qualified professionals.
          </p>
        </section>

        {/* FAQ */}
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-8">
          <FAQSection title="Frequently Asked Questions" faqs={faqData} />
        </section>

        {/* RELATED INTELLIGENCE */}
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Related Intelligence</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/professions/software-engineer" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Software Engineer Hub</a>
            <a href="/professions/data-scientist" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Data Scientist Hub</a>
            <a href="/research/software-engineer-salary-index-2026" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Software Engineer Research</a>
            <a href="/research/data-scientist-salary-index-2026" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Data Scientist Research</a>
            <a href="/rankings/highest-paying-countries-data-scientists" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Highest Paying Countries</a>
            <a href="/rankings/best-countries-for-software-engineers" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Best Countries for Engineers</a>
            <a href="/methodology" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Methodology Hub</a>
          </div>
        </section>
      </div>
    </Shell>
  )
}
