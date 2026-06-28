import {Metadata} from "next";
import Link from "next/link";
import {Shell} from "@/components/shell";
import {SITE_URL} from "@/lib/seo/constants";

export const metadata: Metadata = {
  title: "Infographics - Salary Data Visualizations | Olikit",
  description:
    "Visual comparisons and data studies on global salaries, cost of living, and career decisions. Original research with shareable graphics.",
  openGraph: {
    title: "Infographics - Salary Data Visualizations",
    description:
      "Visual comparisons and data studies on global salaries, cost of living, and career decisions.",
    url: `${SITE_URL}/infographics`,
    siteName: "Olikit",
    type: "website",
  },
};

const infographics = [
  {
    slug: "software-engineer-salary-global-comparison",
    title: "Software Engineer Salary: US vs UK vs Australia vs Canada",
    description:
      "Visual comparison of software engineer salaries across 7 countries with cost of living adjustments.",
    category: "Salary Comparison",
  },
  {
    slug: "best-countries-software-engineers-2026",
    title: "Best Countries for Software Engineers 2026",
    description:
      "Ranked list of 10 countries by salary, tax efficiency, quality of life, and job market.",
    category: "Rankings",
  },
];

export default function InfographicsHub() {
  return (
    <Shell>
      <div className="mx-auto max-w-4xl px-4 py-8">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/us" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Infographics</span>
        </nav>

        <h1 className="mb-3 text-3xl font-bold text-gray-900">Infographics</h1>
        <p className="mb-8 text-lg text-gray-600">
          Visual data studies and salary comparisons. Original research you can share.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {infographics.map((ig) => (
            <Link
              key={ig.slug}
              href={`/infographics/${ig.slug}`}
              className="group rounded-xl border bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
            >
              <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-0.5 text-xs font-medium text-blue-700">
                {ig.category}
              </span>
              <h2 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                {ig.title}
              </h2>
              <p className="text-sm text-gray-600">{ig.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </Shell>
  );
}
