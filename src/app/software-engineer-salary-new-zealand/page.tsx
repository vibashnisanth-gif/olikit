import type { Metadata } from "next"
import { SITE_URL } from "@/lib/seo/constants"
import { buildArticleJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo/json-ld"
import { FAQSection } from "@/components/faq-section"
import { FlagImage } from "@/components/ui/flag-image"

const COUNTRY = { slug: "nz", name: "New Zealand", flag: "\u{1F1F3}\u{1F1FF}", currency: "NZ$", taxAuthority: "Inland Revenue (IRD)" }
const SALARY = { average: 95000, entryLevel: 55000, experienced: 140000 }

export const metadata: Metadata = {
  title: "Software Engineer Salary in New Zealand (2026)",
  description: "Research software engineer salaries in New Zealand. Compare compensation across experience levels, understand taxes and evaluate purchasing power.",
  alternates: { canonical: `${SITE_URL}/software-engineer-salary-new-zealand` },
  openGraph: { title: "Software Engineer Salary in New Zealand", description: "Research software engineer salaries in New Zealand." },
  twitter: { card: "summary_large_image", title: "Software Engineer Salary in New Zealand", description: "Research software engineer salaries in New Zealand." },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Software Engineer Salary in New Zealand",
  description: "Research software engineer salaries in New Zealand. Compare compensation across experience levels, understand taxes and evaluate purchasing power.",
  url: `${SITE_URL}/software-engineer-salary-new-zealand`,
  datePublished: "2026-01-15",
  dateModified: new Date().toISOString().split("T")[0],
  author: { "@type": "Organization", name: "Olikit", url: SITE_URL },
  publisher: { "@type": "Organization", name: "Olikit", url: SITE_URL },
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/software-engineer-salary-new-zealand` },
}

const faqData = [
  { question: "What is the average software engineer salary in New Zealand?", answer: "The average software engineer salary in New Zealand is approximately NZ$95,000 per year. Entry-level positions start around NZ$55,000, while experienced engineers earn up to NZ$140,000 or more. Auckland generally commands the highest salaries, followed by Wellington and Christchurch." },
  { question: "How do New Zealand software engineer salaries compare to Australia and the US?", answer: "New Zealand software engineer salaries are competitive regionally but lower than both the US and Australia. An NZ engineer earning NZ$95,000 earns approximately 66% of the US average ($120,000) and about 86% of the Australian average (A$110,000) at market exchange rates. However, New Zealand's lifestyle benefits and manageable pace of life are significant compensating factors." },
  { question: "Which New Zealand city offers the best opportunities for software engineers?", answer: "Auckland offers the largest technology job market and highest salaries in New Zealand, driven by its concentration of financial services, gaming and enterprise technology companies. Wellington has a strong government technology sector and growing startup ecosystem. Christchurch offers lower housing costs with emerging technology opportunities." },
  { question: "How do housing costs affect software engineers in New Zealand?", answer: "Housing affordability is a significant consideration for New Zealand software engineers. Auckland's median house price exceeds NZ$1 million, creating challenges for even well-paid engineers. Wellington and Christchurch offer more affordable options. The housing shortage in major centres has driven increased remote work adoption and interest in regional locations." },
  { question: "What are the immigration pathways for software engineers in New Zealand?", answer: "New Zealand offers the Skilled Migrant Category visa and the Green List pathway for software engineers, which provides a streamlined residence pathway. Software engineering is classified as a Green List occupation, making it eligible for direct residence after two years. The Accredited Employer Work Visa (AEWV) provides an initial pathway for employment." },
  { question: "What is work-life balance like for New Zealand software engineers?", answer: "New Zealand is renowned for its exceptional work-life balance. Standard working hours are 37.5-40 per week with four weeks annual leave. The culture emphasizes outdoor recreation and family time. Remote work is widely accepted, and many technology companies offer flexible arrangements that allow engineers to enjoy New Zealand's natural environment." },
  { question: "How is New Zealand's technology sector growing for software engineers?", answer: "New Zealand's technology sector has experienced steady growth, with particular strength in agritech, gaming, fintech and health technology. The government's Digital Technology Industry Transformation Plan supports sector growth. Increasing venture capital investment and international recognition of New Zealand startups have created expanding opportunities for software engineers." },
]

export default function SoftwareEngineerNZ() {
  const articleSchema = buildArticleJsonLd(
    "Software Engineer Salary in New Zealand (2026)",
    "Research software engineer salaries in New Zealand. Compare compensation across experience levels, understand taxes and evaluate purchasing power.",
    `/software-engineer-salary-new-zealand`,
    { code: "en", name: "English", slug: "en" } as any,
  )

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { label: "Home", url: SITE_URL },
    { label: "Salaries", url: `${SITE_URL}/salaries` },
    { label: "Software Engineer Salary New Zealand", url: `${SITE_URL}/software-engineer-salary-new-zealand` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="space-y-12">
        <section className="rounded-xl border border-zinc-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700"><FlagImage code={COUNTRY.slug} size="lg" /> {COUNTRY.name} &mdash; Salary Intelligence</p>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Software Engineer Salary in New Zealand</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">New Zealand offers a compelling combination of technology career opportunities and high quality of life. Auckland, Wellington and Christchurch are the primary technology employment markets, with growing demand for software engineers across fintech, agritech, gaming and government services.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-md bg-blue-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Average Salary</p><p className="mt-1 text-2xl font-bold text-zinc-950">{COUNTRY.currency}{SALARY.average.toLocaleString()}</p></div>
            <div className="rounded-md bg-zinc-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Entry Level</p><p className="mt-1 text-2xl font-bold text-zinc-950">{COUNTRY.currency}{SALARY.entryLevel.toLocaleString()}</p></div>
            <div className="rounded-md bg-zinc-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Experienced</p><p className="mt-1 text-2xl font-bold text-zinc-950">{COUNTRY.currency}{SALARY.experienced.toLocaleString()}</p></div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/nz/tools/salary-calculator" className="rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">Salary Calculator</a>
            <a href="/nz/tools/tax-calculator" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Income Tax Calculator</a>
            <a href="/nz/salary/software-engineer" className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Full Salary Page</a>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Key Takeaways</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Quality of Life Advantage</h3><p className="text-sm leading-6 text-zinc-600">New Zealand is often chosen for lifestyle and work-life balance alongside career opportunities.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Auckland Commands a Premium</h3><p className="text-sm leading-6 text-zinc-600">Auckland generally offers the highest salaries, though housing costs are also higher than other regions.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">No Regional Taxes</h3><p className="text-sm leading-6 text-zinc-600">New Zealand has no regional or state taxes, simplifying the tax system compared to other countries.</p></div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"><h3 className="mb-1.5 text-base font-semibold text-zinc-950">Growing Tech Ecosystem</h3><p className="text-sm leading-6 text-zinc-600">New Zealand's technology sector continues to grow, with increasing startup activity and global investment.</p></div>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-6 shadow-sm sm:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">New Zealand Software Engineer Salary Landscape</h2>
          <p className="mb-3 text-sm leading-7 text-zinc-700">Software engineering remains a growing profession in New Zealand, with demand across technology, financial services, agriculture and government sectors.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-700">New Zealand's technology sector has seen increased investment and international attention, creating new opportunities for skilled software engineers.</p>
          <p className="mb-3 text-sm leading-7 text-zinc-700">When evaluating compensation, professionals should consider salary alongside tax obligations, housing costs and lifestyle benefits.</p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-950">Salary by Experience Level</h2>
          <div className="overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
            <table className="w-full text-sm"><thead><tr className="bg-zinc-50"><th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Level</th><th scope="col" className="px-4 py-3 text-left font-medium text-zinc-700">Experience</th><th scope="col" className="px-4 py-3 text-right font-medium text-zinc-700">Annual Salary</th></tr></thead>
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
            <a href="/nz/salary/software-engineer" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Full Salary Page</a>
            <a href="/nz/tools/salary-calculator" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Salary Calculator</a>
            <a href="/nz/tools/tax-calculator" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Tax Calculator</a>
            <a href="/rankings" className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">Global Rankings</a>
          </div>
        </section>

        <FAQSection
          title="Frequently Asked Questions"
          faqs={faqData}
        />
      </div>
    </>
  )
}