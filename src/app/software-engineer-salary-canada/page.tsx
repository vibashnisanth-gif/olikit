import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { buildArticleJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { Shell } from "@/components/shell"
import { FAQSection } from "@/components/faq-section"

const COUNTRY = { slug: "ca", name: "Canada", flag: "\u{1F1E8}\u{1F1E6}", currency: "C$", taxAuthority: "Canada Revenue Agency (CRA)" }
const SALARY = { average: 85000, entryLevel: 50000, experienced: 130000 }

export const metadata: Metadata = {
  title: "Software Engineer Salary in Canada (2026)",
  description: "Research software engineer salaries in Canada. Compare compensation across experience levels, understand taxes and evaluate purchasing power.",
  alternates: { canonical: `${SITE_URL}/software-engineer-salary-canada` },
  openGraph: { title: "Software Engineer Salary in Canada", description: "Research software engineer salaries in Canada." },
  twitter: { card: "summary_large_image", title: "Software Engineer Salary in Canada", description: "Research software engineer salaries in Canada." },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Software Engineer Salary in Canada",
  description: "Research software engineer salaries in Canada. Compare compensation across experience levels, understand taxes and evaluate purchasing power.",
  url: `${SITE_URL}/software-engineer-salary-canada`,
  datePublished: "2026-01-15",
  dateModified: new Date().toISOString().split("T")[0],
  author: { "@type": "Organization", name: "Olikit", url: SITE_URL },
  publisher: { "@type": "Organization", name: "Olikit", url: SITE_URL },
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/software-engineer-salary-canada` },
}

const faqData = [
  { question: "What is the average software engineer salary in Canada?", answer: "The average software engineer salary in Canada is approximately C$85,000 per year. Entry-level positions start around C$50,000, while experienced engineers earn up to C$130,000 or more. Toronto and Vancouver offer the highest salaries, though both cities have elevated housing costs that significantly affect purchasing power." },
  { question: "Which Canadian city pays software engineers the highest salary?", answer: "Toronto generally offers the highest software engineering salaries in Canada, particularly in the financial technology sector. Vancouver follows closely, driven by strong demand from gaming, animation and cloud computing companies. Montreal offers competitive salaries with notably lower housing costs, making it attractive for engineers seeking better purchasing power." },
  { question: "How do Canadian software engineer salaries compare to the United States?", answer: "Canadian software engineer salaries are significantly lower than US equivalents, even adjusting for the exchange rate. A Canadian engineer earning C$85,000 earns approximately 57% of the US average of $120,000. However, Canada's universal healthcare system, stronger social safety net and more manageable work culture partially offset the salary difference." },
  { question: "How do provincial taxes affect Canadian software engineer take-home pay?", answer: "Provincial income taxes vary significantly across Canada. Alberta has the lowest provincial tax rates with a flat 10%, while Quebec has the highest at up to 25.75% combined with federal tax. Ontario and British Columbia fall in between. A C$100,000 salary can result in C$5,000-C$8,000 in take-home differences depending on the province." },
  { question: "What are the immigration pathways for software engineers in Canada?", answer: "Canada offers multiple immigration pathways for software engineers through the Express Entry system, Provincial Nominee Programs and the Global Talent Stream. Software engineering is classified as a skilled occupation eligible for permanent residency. The Global Talent Stream provides expedited work permit processing, typically within two weeks." },
  { question: "How strong is Canada's AI ecosystem for software engineers?", answer: "Canada has emerged as a global leader in artificial intelligence research and development, anchored by institutions like the Vector Institute in Toronto, Mila in Montreal and Amii in Edmonton. Major technology companies have established AI research labs in these cities, creating high-value opportunities for engineers specializing in machine learning and data science." },
  { question: "How does housing affordability affect software engineers across Canadian cities?", answer: "Vancouver and Toronto have among the most expensive housing markets in North America relative to local incomes. A software engineer earning the average C$85,000 faces significant challenges entering these markets. Montreal, Calgary and Ottawa offer more affordable housing while still providing competitive technology salaries, enabling stronger wealth accumulation." },
]

export default function SoftwareEngineerCA() {
  const articleSchema = buildArticleJsonLd(
    "Software Engineer Salary in Canada (2026)",
    "Research software engineer salaries in Canada. Compare compensation across experience levels, understand taxes and evaluate purchasing power.",
    `/software-engineer-salary-canada`,
    { code: "en", name: "English", slug: "en" } as any,
  )

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Salaries", url: `${SITE_URL}/salaries` },
    { label: "Software Engineer Salary Canada", url: `${SITE_URL}/software-engineer-salary-canada` },
  ])

  return (
    <Shell localeSlug="ca">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="space-y-12">
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">{COUNTRY.flag} {COUNTRY.name} &mdash; Salary Intelligence</p>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Software Engineer Salary in Canada</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">Canada's technology sector continues to grow rapidly, with Toronto, Vancouver, Montreal and Calgary emerging as major technology employment centres. Software engineers benefit from strong demand and competitive compensation across fintech, enterprise software, gaming and artificial intelligence.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-md bg-blue-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Average Salary</p><p className="mt-1 text-2xl font-bold text-zinc-950">{COUNTRY.currency}{SALARY.average.toLocaleString()}</p></div>
            <div className="rounded-md bg-zinc-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Entry Level</p><p className="mt-1 text-2xl font-bold text-zinc-950">{COUNTRY.currency}{SALARY.entryLevel.toLocaleString()}</p></div>
            <div className="rounded-md bg-zinc-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Experienced</p><p className="mt-1 text-2xl font-bold text-zinc-950">{COUNTRY.currency}{SALARY.experienced.toLocaleString()}</p></div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/ca/tools/salary-calculator" className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">Salary Calculator</a>
            <a href="/ca/tools/tax-calculator" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Income Tax Calculator</a>
            <a href="/ca/salary/software-engineer" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Full Salary Page</a>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Key Takeaways</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Growing Tech Sector</h3><p className="text-sm leading-6 text-zinc-600">Canada's technology sector continues to expand, with increasing investment from global technology companies.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Toronto Leads the Market</h3><p className="text-sm leading-6 text-zinc-600">Toronto generally offers the highest salaries, though Vancouver and Montreal are competitive markets.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Provincial Tax Variations</h3><p className="text-sm leading-6 text-zinc-600">Tax rates differ by province, impacting net earnings differently across regions.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Strong Immigration Pathways</h3><p className="text-sm leading-6 text-zinc-600">Canada's technology talent visa programs make it an attractive destination for skilled software engineers.</p></div>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Canada Software Engineer Salary Landscape</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-700">Software engineering demand continues to grow across Canada, driven by technology companies, financial institutions and enterprise organizations.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-700">The technology workforce is expanding rapidly, with strong demand for experienced engineers in cloud computing, artificial intelligence and cybersecurity.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-700">When evaluating compensation, professionals should consider salary alongside provincial taxes, housing costs and purchasing power differences between cities.</p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Salary by Experience Level</h2>
          <div className="overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
            <table className="w-full text-sm"><thead><tr className="bg-zinc-50"><th className="px-4 py-3 text-left font-medium text-zinc-700">Level</th><th className="px-4 py-3 text-left font-medium text-zinc-700">Experience</th><th className="px-4 py-3 text-right font-medium text-zinc-700">Annual Salary</th></tr></thead>
            <tbody>
              <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Entry Level</td><td className="px-4 py-3 text-zinc-500">0\u20132 Years</td><td className="px-4 py-3 text-right text-zinc-950">{COUNTRY.currency}{SALARY.entryLevel.toLocaleString()}</td></tr>
              <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Mid Level</td><td className="px-4 py-3 text-zinc-500">3\u20137 Years</td><td className="px-4 py-3 text-right text-zinc-950">{COUNTRY.currency}{((SALARY.average + SALARY.experienced) / 2).toLocaleString()}</td></tr>
              <tr className="border-t border-zinc-100"><td className="px-4 py-3 font-medium text-zinc-950">Senior</td><td className="px-4 py-3 text-zinc-500">8\u201315 Years</td><td className="px-4 py-3 text-right text-zinc-950">{COUNTRY.currency}{SALARY.experienced.toLocaleString()}</td></tr>
            </tbody></table>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Explore More</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/professions/software-engineer" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Software Engineer Hub</a>
            <a href="/ca/salary/software-engineer" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Full Salary Page</a>
            <a href="/ca/tools/salary-calculator" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Salary Calculator</a>
            <a href="/ca/tools/tax-calculator" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Tax Calculator</a>
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
