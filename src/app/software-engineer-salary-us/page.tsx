import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { Shell } from "@/components/shell"
import { FAQSection } from "@/components/faq-section"

const COUNTRY = { slug: "us", name: "United States", flag: "\u{1F1FA}\u{1F1F8}", currency: "$", taxAuthority: "Internal Revenue Service (IRS)" }
const SALARY = { average: 120000, entryLevel: 75000, experienced: 180000 }

export const metadata: Metadata = {
  title: "Software Engineer Salary in the United States (2026)",
  description: "Research software engineer salaries in the United States. Compare compensation across experience levels, understand taxes and evaluate purchasing power.",
  alternates: { canonical: `${SITE_URL}/software-engineer-salary-${COUNTRY.slug}` },
  openGraph: {
    title: "Software Engineer Salary in the United States",
    description: "Research software engineer salaries in the United States.",
  },
  twitter: { card: "summary_large_image", title: "Software Engineer Salary in the United States", description: "Research software engineer salaries in the United States." },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Software Engineer Salary in the United States",
  description: "Research software engineer salaries in the United States. Compare compensation across experience levels, understand taxes and evaluate purchasing power.",
  url: `${SITE_URL}/software-engineer-salary-us`,
  datePublished: "2026-01-15",
  dateModified: new Date().toISOString().split("T")[0],
  author: { "@type": "Organization", name: "Olikit", url: SITE_URL },
  publisher: { "@type": "Organization", name: "Olikit", url: SITE_URL },
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/software-engineer-salary-us` },
}

const faqData = [
  { question: "What is the average software engineer salary in the United States?", answer: "The average software engineer salary in the United States is approximately $120,000 per year. Entry-level positions start around $75,000, while experienced engineers earn up to $180,000 or more. Major technology hubs like San Francisco, Seattle, and New York command higher salaries, though cost of living in these cities should be factored into any comparison." },
  { question: "How do US software engineer salaries compare globally?", answer: "The United States offers the highest absolute software engineering salaries globally, significantly exceeding other major markets. A US software engineer earning $120,000 earns approximately 2x the Australian average (A$110,000), 2.2x the Canadian average (C$85,000), 2.8x the UK average (£55,000), and approximately 6x the Indian average (₹12,00,000) at market exchange rates." },
  { question: "Which US city pays software engineers the highest salary?", answer: "San Francisco leads US cities for software engineer compensation, with total packages exceeding $200,000 for senior engineers at major technology companies. Seattle, New York, and Austin follow closely. However, when adjusted for cost of living and state taxes, cities like Austin and Seattle may offer better wealth accumulation outcomes." },
  { question: "How do state income taxes affect software engineer take-home pay?", answer: "State income taxes significantly affect real earnings. Engineers in Texas, Washington, and Florida pay no state income tax, keeping 100% of federal after-tax income. Engineers in California pay up to 13.3% marginal rate, and New Yorkers pay combined state and city taxes up to 12.7%. A $150,000 salary can differ by $10,000-$15,000 in annual take-home pay depending on the state." },
  { question: "What is the job outlook for software engineers in the United States?", answer: "The job outlook for software engineers in the US remains very strong, with the Bureau of Labor Statistics projecting 25% growth over the next decade. Demand is particularly high in artificial intelligence, cloud computing, cybersecurity, and healthcare technology. The US technology sector continues to attract substantial venture capital investment, driving hiring across all experience levels." },
  { question: "How does equity compensation work for US software engineers?", answer: "Equity compensation is common at US technology companies, particularly at publicly traded hyperscalers and venture-backed startups. Restricted Stock Units (RSUs) and stock options can constitute 30-50% of total compensation for senior engineers at major companies. At companies like Microsoft, Amazon, and Google, annual equity grants can range from $50,000 to over $500,000 for senior technical roles." },
  { question: "What is the best state for software engineers considering tax and salary?", answer: "Washington (Seattle) and Texas (Austin) offer strong combinations of high salaries and no state income tax. Washington's technology sector, anchored by companies like Microsoft and Amazon, offers competitive compensation without income tax. Texas offers growing technology hubs with lower housing costs than coastal peers and no state income tax, making Austin a particularly attractive destination." },
]

export default function SoftwareEngineerUS() {
  return (
    <Shell localeSlug="us">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="space-y-12">
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">{COUNTRY.flag} {COUNTRY.name} &mdash; Salary Intelligence</p>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Software Engineer Salary in the United States</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">The United States consistently reports some of the highest software engineering salaries in the world. Technology hubs across California, Washington, New York and Texas offer competitive compensation for skilled engineers.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-md bg-blue-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Average Salary</p><p className="mt-1 text-2xl font-bold text-zinc-950">${SALARY.average.toLocaleString()}</p></div>
            <div className="rounded-md bg-zinc-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Entry Level</p><p className="mt-1 text-2xl font-bold text-zinc-950">${SALARY.entryLevel.toLocaleString()}</p></div>
            <div className="rounded-md bg-zinc-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Experienced</p><p className="mt-1 text-2xl font-bold text-zinc-950">${SALARY.experienced.toLocaleString()}</p></div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/us/tools/salary-calculator" className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">Salary Calculator</a>
            <a href="/us/tools/tax-calculator" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Income Tax Calculator</a>
            <a href={`/us/salary/software-engineer`} className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Full Salary Page</a>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Key Takeaways</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Highest Salaries Globally</h3><p className="text-sm leading-6 text-zinc-600">The US offers some of the highest software engineer salaries in the world, particularly in major technology hubs.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Taxes Affect Take-Home Pay</h3><p className="text-sm leading-6 text-zinc-600">Federal and state income taxes, along with healthcare costs, can significantly affect real earnings.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Location Matters</h3><p className="text-sm leading-6 text-zinc-600">Salaries vary significantly between cities such as San Francisco, Seattle, New York and Austin.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Purchasing Power Varies</h3><p className="text-sm leading-6 text-zinc-600">High salaries in expensive cities may result in similar purchasing power to lower salaries in affordable regions.</p></div>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">US Software Engineer Salary Landscape</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-600">Software engineering remains one of the highest-paid professions in the United States, with strong demand across technology companies, financial institutions and enterprise organizations.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">The US technology sector continues to drive innovation and compensation growth, particularly in artificial intelligence, cloud computing and cybersecurity.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-600">When evaluating compensation, professionals should consider salary alongside taxes, benefits, equity compensation and cost of living.</p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Salary by Experience Level</h2>
          <div className="overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
            <table className="w-full text-sm"><thead><tr className="bg-zinc-50"><th className="px-4 py-3 text-left font-medium text-zinc-700">Level</th><th className="px-4 py-3 text-left font-medium text-zinc-700">Experience</th><th className="px-4 py-3 text-right font-medium text-zinc-700">Annual Salary</th></tr></thead>
            <tbody>
              <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Entry Level</td><td className="px-4 py-3 text-zinc-500">0\u20132 Years</td><td className="px-4 py-3 text-right text-zinc-950">${SALARY.entryLevel.toLocaleString()}</td></tr>
              <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Mid Level</td><td className="px-4 py-3 text-zinc-500">3\u20137 Years</td><td className="px-4 py-3 text-right text-zinc-950">${((SALARY.average + SALARY.experienced) / 2).toLocaleString()}</td></tr>
              <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Senior</td><td className="px-4 py-3 text-zinc-500">8\u201315 Years</td><td className="px-4 py-3 text-right text-zinc-950">${SALARY.experienced.toLocaleString()}</td></tr>
            </tbody></table>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Explore More</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/professions/software-engineer" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Software Engineer Hub</a>
            <a href="/us/salary/software-engineer" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Full Salary Page</a>
            <a href="/us/tools/salary-calculator" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Salary Calculator</a>
            <a href="/us/tools/tax-calculator" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Tax Calculator</a>
            <a href="/rankings" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Global Rankings</a>
          </div>
        </section>

        <FAQSection
          title="Frequently Asked Questions"
          faqs={faqData}
        />
      </div>
    </Shell>
  )
}
