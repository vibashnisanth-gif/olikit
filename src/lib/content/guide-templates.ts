import type { Guide } from "@/types/seo"

export const guides: Guide[] = [
  {
    id: "salary-after-tax-by-country",
    slug: "salary-after-tax-by-country",
    name: "Salary After Tax in {country}",
    shortName: "Salary Comparison",
    category: "salary",
    description:
      "Compare take-home pay after taxes across {country}. See how income tax brackets, social security, and deductions affect your net salary.",
    metaTitleTemplate:
      "{guide} - Compare Take-Home Pay by Country",
    metaDescriptionTemplate:
      "Compare salary after tax across major economies. See how much you keep after income tax, social security, and deductions in each country with our detailed guide.",
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
    name: "Tax Brackets in {country}",
    shortName: "Tax Brackets",
    category: "tax",
    description:
      "Compare income tax brackets and rates across {country}. Understand progressive tax systems, thresholds, and effective tax rates.",
    metaTitleTemplate:
      "{guide} - Compare Income Tax Rates by Country",
    metaDescriptionTemplate:
      "Compare tax brackets and income tax rates across major economies. Understand progressive tax systems, marginal rates, and how taxes affect your income.",
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
      "Comprehensive retirement planning guide covering major economies. Learn how much to save, pension options, and investment strategies for a secure retirement.",
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
  {
    id: "best-money-transfer-services",
    slug: "best-money-transfer-services",
    name: "Best Money Transfer Services in {country}",
    shortName: "Money Transfer",
    category: "salary",
    description:
      "Compare the best money transfer services for sending money internationally from {country}. Find low-fee options with great exchange rates.",
    metaTitleTemplate:
      "Best Money Transfer Services in {country} (2025) - Compare Fees & Rates",
    metaDescriptionTemplate:
      "Compare the best money transfer services in {country}. See fees, exchange rates, and transfer speeds for Wise, Revolut, Remitly, and more. Save on international transfers.",
    keywords: [
      "money transfer",
      "send money abroad",
      "international transfer",
      "currency exchange",
      "best transfer rates",
    ],
    relatedToolSlugs: ["salary-calculator"],
  },
  {
    id: "best-tax-software",
    slug: "best-tax-software",
    name: "Best Tax Software in {country}",
    shortName: "Tax Software",
    category: "tax",
    description:
      "Find the best tax software for filing your taxes in {country}. Compare features, pricing, and ease of use for top tax filing platforms.",
    metaTitleTemplate:
      "Best Tax Software in {country} (2025) - Compare Top Tax Filing Platforms",
    metaDescriptionTemplate:
      "Compare the best tax software in {country}. Find affordable options, free filing, and expert-assisted tax preparation with our comprehensive guide.",
    keywords: [
      "tax software",
      "best tax filing",
      "tax return software",
      "online tax filing",
      "income tax software",
    ],
    relatedToolSlugs: ["tax-calculator", "salary-calculator"],
  },
  {
    id: "best-investment-platforms",
    slug: "best-investment-platforms",
    name: "Best Investment Platforms in {country}",
    shortName: "Investing",
    category: "investment",
    description:
      "Compare the best investment platforms and trading apps available in {country}. Find low-fee options for stocks, ETFs, and managed portfolios.",
    metaTitleTemplate:
      "Best Investment Platforms in {country} (2025) - Compare Trading Apps",
    metaDescriptionTemplate:
      "Compare the best investment platforms in {country}. Find low-fee trading apps, robo-advisors, and managed portfolios. Start investing with confidence.",
    keywords: [
      "investment platforms",
      "best trading apps",
      "online brokerage",
      "investing for beginners",
      "stock trading platform",
    ],
    relatedToolSlugs: ["investment-calculator", "retirement-calculator", "salary-calculator"],
  },
]

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug)
}
