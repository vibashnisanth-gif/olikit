export interface UpdateEntry {
  date: string
  title: string
  category: "tax" | "salary" | "mortgage" | "guide" | "data" | "site"
  description: string
  source: string
  relatedPages: { label: string; href: string }[]
}

export const updates: UpdateEntry[] = [
  {
    date: "June 2026",
    title: "Salary and Cost of Living Pages Launched",
    category: "site",
    description: "Launched comprehensive salary hub, average salary by state pages, cost of living by state pages, and salary vs. cost of living analysis for 10 US states. These new pages provide detailed financial intelligence for job seekers, homeowners, and financial planners.",
    source: "Olikit Content Team",
    relatedPages: [
      { label: "Salary Hub", href: "/us/salary" },
      { label: "Average Salary by State", href: "/us/average-salary/california" },
      { label: "Cost of Living by State", href: "/us/cost-of-living/california" },
    ],
  },
  {
    date: "June 2026",
    title: "State Rankings and Research Reports Published",
    category: "guide",
    description: "Published comprehensive state rankings for salary, cost of living, retirement, and home affordability. Research reports cover highest-paying states, most affordable states, income tax analysis, and salary growth trends.",
    source: "Olikit Research Team",
    relatedPages: [
      { label: "Best States for Salary", href: "/us/best-states-for-salary" },
      { label: "Research Center", href: "/us/research" },
    ],
  },
  {
    date: "June 2026",
    title: "Financial Glossary Launched",
    category: "guide",
    description: "Launched a comprehensive financial glossary covering 10 essential terms including gross salary, net salary, effective tax rate, marginal tax rate, APR, APY, inflation, DTI ratio, compound interest, and mortgage affordability.",
    source: "Olikit Content Team",
    relatedPages: [
      { label: "Financial Glossary", href: "/us/glossary" },
    ],
  },
  {
    date: "June 2026",
    title: "Homepage Redesigned for Authority Architecture",
    category: "site",
    description: "Redesigned the homepage with 16 content sections including hero, trust bar, salary hub, country hub, cost of living hub, state rankings, financial data library, and methodology sources. Now surfaces all major content clusters.",
    source: "Olikit Product Team",
    relatedPages: [
      { label: "Home", href: "/us" },
    ],
  },
  {
    date: "May 2026",
    title: "AdSense Integration and Verification",
    category: "site",
    description: "Integrated Google AdSense with proper server-side rendering to ensure crawler visibility. Submission under review for production monetization.",
    source: "Olikit Engineering",
    relatedPages: [],
  },
  {
    date: "May 2026",
    title: "About Page Expanded with Trust Content",
    category: "guide",
    description: "Expanded the About page with detailed methodology, data sources, review process, update frequency, and trust information. Now references official government sources across major economies.",
    source: "Olikit Content Team",
    relatedPages: [
      { label: "About Olikit", href: "/about" },
    ],
  },
  {
    date: "April 2026",
    title: "Site Launched with 400+ Calculator Pages",
    category: "site",
    description: "Initial launch of Olikit.com with 400+ localized calculator pages covering salary, tax, mortgage, investment, retirement, business loan, and profit margin calculations across major economies.",
    source: "Olikit Engineering",
    relatedPages: [
      { label: "All Tools", href: "/us" },
    ],
  },
]

export function getLatestUpdates(count: number = 5): UpdateEntry[] {
  return updates.slice(0, count)
}
