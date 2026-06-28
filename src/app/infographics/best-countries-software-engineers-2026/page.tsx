import {Metadata} from "next";
import Link from "next/link";
import {Shell} from "@/components/shell";
import {professions} from "@/lib/content/professions-data";
import {SITE_URL} from "@/lib/seo/constants";

export const metadata: Metadata = {
  title: "Best Countries for Software Engineers 2026 - Salary, Quality of Life, Opportunities",
  description:
    "Ranked list of the best countries for software engineers in 2026 based on salary, cost of living, tax efficiency, quality of life, and job market. Original data analysis.",
  openGraph: {
    title: "Best Countries for Software Engineers 2026",
    description:
      "Ranked list of the best countries for software engineers based on salary, cost of living, tax efficiency, and quality of life.",
    url: `${SITE_URL}/infographics/best-countries-software-engineers-2026`,
    siteName: "Olikit",
    type: "article",
  },
};

const rankings = [
  {
    rank: 1,
    country: "United States",
    flag: "🇺🇸",
    salary: 120000,
    col: 80,
    tax: 25,
    takeHome: 90000,
    quality: 8,
    jobMarket: 10,
    score: 92,
  },
  {
    rank: 2,
    country: "Singapore",
    flag: "🇸🇬",
    salary: 95000,
    col: 85,
    tax: 11,
    takeHome: 84550,
    quality: 9,
    jobMarket: 8,
    score: 88,
  },
  {
    rank: 3,
    country: "Australia",
    flag: "🇦🇺",
    salary: 100000,
    col: 78,
    tax: 27,
    takeHome: 73000,
    quality: 9,
    jobMarket: 8,
    score: 85,
  },
  {
    rank: 4,
    country: "United Kingdom",
    flag: "🇬🇧",
    salary: 75000,
    col: 72,
    tax: 28,
    takeHome: 54000,
    quality: 8,
    jobMarket: 8,
    score: 82,
  },
  {
    rank: 5,
    country: "Canada",
    flag: "🇨🇦",
    salary: 85000,
    col: 70,
    tax: 25,
    takeHome: 63750,
    quality: 8,
    jobMarket: 7,
    score: 80,
  },
  {
    rank: 6,
    country: "Germany",
    flag: "🇩🇪",
    salary: 70000,
    col: 68,
    tax: 30,
    takeHome: 49000,
    quality: 8,
    jobMarket: 7,
    score: 78,
  },
  {
    rank: 7,
    country: "New Zealand",
    flag: "🇳🇿",
    salary: 75000,
    col: 65,
    tax: 20,
    takeHome: 60000,
    quality: 9,
    jobMarket: 6,
    score: 76,
  },
  {
    rank: 8,
    country: "Netherlands",
    flag: "🇳🇱",
    salary: 65000,
    col: 70,
    tax: 35,
    takeHome: 42250,
    quality: 8,
    jobMarket: 7,
    score: 74,
  },
  {
    rank: 9,
    country: "India",
    flag: "🇮🇳",
    salary: 30000,
    col: 35,
    tax: 20,
    takeHome: 24000,
    quality: 6,
    jobMarket: 8,
    score: 70,
  },
  {
    rank: 10,
    country: "UAE",
    flag: "🇦🇪",
    salary: 80000,
    col: 75,
    tax: 0,
    takeHome: 80000,
    quality: 7,
    jobMarket: 7,
    score: 72,
  },
];

export default function BestCountriesInfographic() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Countries for Software Engineers 2026",
    description:
      "Ranked list of the best countries for software engineers based on salary, cost of living, and quality of life",
    url: `${SITE_URL}/infographics/best-countries-software-engineers-2026`,
    author: {name: "Olikit Research"},
    publisher: {name: "Olikit"},
    datePublished: "2026-01-15",
    dateModified: "2026-06-28",
  };

  return (
    <Shell>
      <div className="mx-auto max-w-5xl px-4 py-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />

        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/us" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/infographics" className="hover:text-blue-600">
            Infographics
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Best Countries for Software Engineers 2026</span>
        </nav>

        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Best Countries for Software Engineers 2026
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          Original data analysis ranking 10 countries by salary, cost of living, tax efficiency,
          quality of life, and job market.
        </p>

        {/* Hero stat */}
        <div className="mb-8 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
          <div className="text-center">
            <div className="text-5xl font-bold">$120,000</div>
            <div className="mt-2 text-lg text-blue-100">
              Highest average software engineer salary (US)
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="text-2xl font-bold">10</div>
              <div className="text-blue-200">Countries analyzed</div>
            </div>
            <div>
              <div className="text-2xl font-bold">$30K-$120K</div>
              <div className="text-blue-200">Salary range</div>
            </div>
            <div>
              <div className="text-2xl font-bold">0-35%</div>
              <div className="text-blue-200">Tax rate range</div>
            </div>
          </div>
        </div>

        {/* Rankings table */}
        <div className="mb-12 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left text-xs uppercase text-gray-500">
                <th className="pb-3 pr-4">Rank</th>
                <th className="pb-3 pr-4">Country</th>
                <th className="pb-3 pr-4 text-right">Avg Salary</th>
                <th className="pb-3 pr-4 text-right">Tax Rate</th>
                <th className="pb-3 pr-4 text-right">Take-Home</th>
                <th className="pb-3 pr-4 text-right">Quality of Life</th>
                <th className="pb-3 text-right">Job Market</th>
                <th className="pb-3 text-right">Score</th>
              </tr>
            </thead>
            <tbody>
              {rankings.map((r, i) => (
                <tr key={r.country} className={`border-b ${i < 3 ? "bg-blue-50" : ""}`}>
                  <td className="py-3 pr-4 font-bold text-gray-900">{r.rank}</td>
                  <td className="py-3 pr-4">
                    <span className="mr-2 text-lg">{r.flag}</span>
                    <span className="font-medium text-gray-900">{r.country}</span>
                  </td>
                  <td className="py-3 pr-4 text-right font-mono text-gray-700">
                    ${r.salary.toLocaleString()}
                  </td>
                  <td className="py-3 pr-4 text-right text-gray-600">{r.tax}%</td>
                  <td className="py-3 pr-4 text-right font-mono font-medium text-green-700">
                    ${r.takeHome.toLocaleString()}
                  </td>
                  <td className="py-3 pr-4 text-right">
                    <span
                      className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${r.quality >= 8 ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"}`}
                    >
                      {r.quality}/10
                    </span>
                  </td>
                  <td className="py-3 text-right">
                    <span
                      className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${r.jobMarket >= 8 ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"}`}
                    >
                      {r.jobMarket}/10
                    </span>
                  </td>
                  <td className="py-3 text-right font-bold text-gray-900">{r.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Key findings */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">Key Findings</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "US leads in raw salary",
                desc: "Average $120K, but 25% tax reduces take-home to $90K.",
              },
              {
                title: "Singapore best for tax efficiency",
                desc: "Only 11% tax means $95K salary yields $84.5K take-home.",
              },
              {
                title: "UAE is tax-free",
                desc: "$80K salary = $80K take-home, but smaller tech market.",
              },
              {
                title: "India offers best value",
                desc: "Low salary ($30K) but CoL is 35, giving strong purchasing power.",
              },
              {
                title: "Australia balances all factors",
                desc: "Good salary, great quality of life, strong job market.",
              },
              {
                title: "Europe trades salary for benefits",
                desc: "Lower salaries but healthcare, vacation, and social safety nets.",
              },
            ].map((f) => (
              <div key={f.title} className="rounded-lg border p-4">
                <h3 className="font-medium text-gray-900">{f.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-12 border-t pt-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">Methodology</h2>
          <p className="mb-4 text-sm text-gray-600">
            Rankings are based on five weighted factors: average software engineer salary (30%), tax
            efficiency (25%), cost of living (20%), quality of life (15%), and job market size
            (10%). Salary data sourced from Glassdoor, Levels.fyi, and local statistical agencies.
            Cost of living from Numbeo. Tax rates from government sources.
          </p>
          <p className="text-sm text-gray-600">
            This analysis is for informational purposes only. Individual results vary based on
            experience, company, negotiation, and specific location within each country.
          </p>
        </section>

        {/* Related */}
        <section className="border-t pt-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">Related</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/infographics/software-engineer-salary-global-comparison"
              className="rounded-lg border p-4 hover:border-blue-300 hover:bg-blue-50"
            >
              <div className="font-medium text-gray-900">
                Software Engineer Salary: Global Comparison
              </div>
              <div className="text-sm text-gray-500">Visual comparison across 7 countries</div>
            </Link>
            <Link
              href="/us/city/san-francisco/software-engineer"
              className="rounded-lg border p-4 hover:border-blue-300 hover:bg-blue-50"
            >
              <div className="font-medium text-gray-900">
                Software Engineer Salary in San Francisco
              </div>
              <div className="text-sm text-gray-500">
                Detailed breakdown for the highest-paying US city
              </div>
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  );
}
