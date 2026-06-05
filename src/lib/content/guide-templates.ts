import type { Guide } from "@/types/seo"

export const guides: Guide[] = [
  {
    id: "salary-after-tax-by-country",
    slug: "salary-after-tax-by-country",
    name: "Salary After Tax by Country",
    shortName: "Salary Comparison",
    category: "salary",
    description:
      "Compare take-home pay after taxes across {country}. See how income tax brackets, social security, and deductions affect your net salary.",
    metaTitleTemplate:
      "{guide} - Compare Take-Home Pay Across 7 Countries",
    metaDescriptionTemplate:
      "Compare salary after tax across 7 countries. See how much you keep after income tax, social security, and deductions in each country with our detailed guide.",
    keywords: [
      "salary after tax",
      "take home pay comparison",
      "net salary by country",
      "income tax comparison",
      "salary calculator international",
    ],
    relatedToolSlugs: ["salary-calculator"],
  },
  {
    id: "tax-brackets-by-country",
    slug: "tax-brackets-by-country",
    name: "Tax Brackets by Country",
    shortName: "Tax Brackets",
    category: "tax",
    description:
      "Compare income tax brackets and rates across {country}. Understand progressive tax systems, thresholds, and effective tax rates.",
    metaTitleTemplate:
      "{guide} - Compare Income Tax Rates Across 7 Countries",
    metaDescriptionTemplate:
      "Compare tax brackets and income tax rates across 7 countries. Understand progressive tax systems, marginal rates, and how taxes affect your income.",
    keywords: [
      "tax brackets",
      "income tax rates",
      "tax comparison",
      "marginal tax rate",
      "progressive tax",
    ],
    relatedToolSlugs: ["tax-calculator"],
  },
  {
    id: "how-much-house-can-i-afford",
    slug: "how-much-house-can-i-afford",
    name: "How Much House Can I Afford?",
    shortName: "House Affordability",
    category: "mortgage",
    description:
      "Calculate how much house you can afford in {country}. Learn about mortgage affordability rules, down payments, and monthly costs.",
    metaTitleTemplate:
      "{guide} - Mortgage Affordability Calculator Guide",
    metaDescriptionTemplate:
      "Find out how much house you can afford in each country. Learn the 28% rule, down payment strategies, and total homeownership costs in our comprehensive guide.",
    keywords: [
      "how much house can i afford",
      "mortgage affordability",
      "home buying budget",
      "mortgage calculator",
      "affordable home price",
    ],
    relatedToolSlugs: ["mortgage-calculator"],
  },
  {
    id: "retirement-planning-guide",
    slug: "retirement-planning-guide",
    name: "Retirement Planning Guide",
    shortName: "Retirement Guide",
    category: "retirement",
    description:
      "Plan your retirement across {country}. Learn about savings targets, pension systems, and investment strategies for a comfortable retirement.",
    metaTitleTemplate:
      "{guide} - Retirement Savings & Planning by Country",
    metaDescriptionTemplate:
      "Comprehensive retirement planning guide covering 7 countries. Learn how much to save, pension options, and investment strategies for a secure retirement.",
    keywords: [
      "retirement planning",
      "retirement savings",
      "pension guide",
      "how much to retire",
      "retirement calculator",
    ],
    relatedToolSlugs: ["retirement-calculator", "investment-calculator"],
  },
  {
    id: "compound-interest-examples",
    slug: "compound-interest-examples",
    name: "Compound Interest Examples",
    shortName: "Compound Interest",
    category: "investment",
    description:
      "See compound interest examples and projections for {country}. Learn how regular investing builds wealth over time.",
    metaTitleTemplate:
      "{guide} - Real Compound Interest Examples & Projections",
    metaDescriptionTemplate:
      "Real compound interest examples showing how investments grow in each country. See projections, regular contribution impact, and start investing smarter.",
    keywords: [
      "compound interest",
      "investment examples",
      "compound growth",
      "investing for beginners",
      "compound interest calculator",
    ],
    relatedToolSlugs: ["investment-calculator", "retirement-calculator"],
  },
]

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug)
}
