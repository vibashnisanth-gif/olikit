import type {Tool} from "@/types/seo";

export const tools: Tool[] = [
  {
    id: "salary-calculator",
    slug: "salary-calculator",
    name: "Salary Calculator",
    shortName: "Salary",
    category: "salary",
    description: "Calculate your take-home pay after income tax, social security, and deductions.",
    metaTitleTemplate: "{tool} {country} - Free Take-Home Pay Calculator",
    metaDescriptionTemplate:
      "Calculate your take-home pay in {country}. Free salary calculator with {country} tax brackets, social security, and deduction estimates.",
    keywords: ["salary calculator", "take home pay", "pay calculator", "after tax salary"],
    relatedTools: ["tax-calculator", "retirement-calculator", "budget-planner"],
  },
  {
    id: "tax-calculator",
    slug: "tax-calculator",
    name: "Tax Calculator",
    shortName: "Tax",
    category: "tax",
    description: "Estimate your income tax with {country} tax brackets and deductions.",
    metaTitleTemplate: "{tool} {country} - Free Income Tax Estimator",
    metaDescriptionTemplate:
      "Estimate your {country} income tax for {taxYear}. Free tax calculator with current tax brackets, deductions, and marginal rates.",
    keywords: ["tax calculator", "income tax estimator", "tax bracket", "tax refund"],
    relatedTools: ["salary-calculator", "mortgage-calculator", "investment-calculator"],
  },
  {
    id: "mortgage-calculator",
    slug: "mortgage-calculator",
    name: "Mortgage Calculator",
    shortName: "Mortgage",
    category: "mortgage",
    description: "Calculate monthly mortgage payments, interest, and amortization schedule.",
    metaTitleTemplate: "{tool} {country} - Free Monthly Mortgage Payment Calculator",
    metaDescriptionTemplate:
      "Calculate your monthly mortgage payments in {country}. Free mortgage calculator with amortization schedule, interest rates, and {country} property tax estimates.",
    keywords: [
      "mortgage calculator",
      "home loan calculator",
      "monthly payment",
      "amortization schedule",
    ],
    relatedTools: ["tax-calculator", "investment-calculator", "retirement-calculator"],
  },
  {
    id: "investment-calculator",
    slug: "investment-calculator",
    name: "Investment Calculator",
    shortName: "Investment",
    category: "investment",
    description: "Project investment growth with compound interest and regular contributions.",
    metaTitleTemplate: "{tool} {country} - Free Compound Interest Calculator",
    metaDescriptionTemplate:
      "Project your investment growth in {country} with our free compound interest calculator. Calculate returns with regular contributions and different compounding frequencies.",
    keywords: [
      "investment calculator",
      "compound interest",
      "return on investment",
      "growth calculator",
    ],
    relatedTools: ["retirement-calculator", "tax-calculator", "salary-calculator"],
  },
  {
    id: "retirement-calculator",
    slug: "retirement-calculator",
    name: "Retirement Calculator",
    shortName: "Retirement",
    category: "retirement",
    description: "Plan your retirement savings and estimate how much you need to save.",
    metaTitleTemplate: "{tool} {country} - Free Retirement Savings Planner",
    metaDescriptionTemplate:
      "Plan your retirement in {country} with our free retirement calculator. Estimate how much you need to save based on your current savings, contributions, and expected returns.",
    keywords: ["retirement calculator", "retirement savings", "pension planner", "401k calculator"],
    relatedTools: ["investment-calculator", "salary-calculator", "budget-planner"],
  },
  {
    id: "business-loan-calculator",
    slug: "business-loan-calculator",
    name: "Business Loan Calculator",
    shortName: "Business Loan",
    category: "loan",
    description: "Calculate business loan payments, total interest, and affordability.",
    metaTitleTemplate: "{tool} {country} - Free Business Loan Payment Calculator",
    metaDescriptionTemplate:
      "Calculate your business loan payments in {country}. Free business loan calculator with interest rates, repayment schedules, and {country} SME loan options.",
    keywords: ["business loan calculator", "SME loan", "business financing", "loan repayment"],
    relatedTools: ["mortgage-calculator", "tax-calculator", "investment-calculator"],
  },
  {
    id: "break-even-calculator",
    slug: "break-even-calculator",
    name: "Break-Even Calculator",
    shortName: "Break-Even",
    category: "business",
    description: "Calculate your break-even point, contribution margin, and unit economics.",
    metaTitleTemplate: "{tool} {country} - Free Break-Even Point Calculator",
    metaDescriptionTemplate:
      "Calculate your break-even point in {country} with our free calculator. Break-even units, revenue, and contribution margin analysis for {country} businesses.",
    keywords: [
      "break-even calculator",
      "break-even point",
      "contribution margin",
      "unit economics",
    ],
    relatedTools: ["business-loan-calculator", "tax-calculator", "salary-calculator"],
  },
  {
    id: "cost-of-living-calculator",
    slug: "cost-of-living-calculator",
    name: "Cost of Living Calculator",
    shortName: "Cost of Living",
    category: "budget",
    description:
      "Compare cost of living between cities worldwide and calculate salary adjustments.",
    metaTitleTemplate: "Cost of Living Calculator {country} - Compare Cities & Salary",
    metaDescriptionTemplate:
      "Compare cost of living between {country} cities and worldwide. Free calculator to adjust salary for relocation with rent, groceries, transport, and lifestyle breakdown.",
    keywords: [
      "cost of living calculator",
      "cost of living comparison",
      "salary adjustment",
      "relocation calculator",
      "city comparison",
    ],
    relatedTools: ["salary-calculator", "tax-calculator", "mortgage-calculator"],
  },
];

export const tierAToolSlugs = [
  "mortgage-calculator",
  "tax-calculator",
  "salary-calculator",
  "retirement-calculator",
  "business-loan-calculator",
  "cost-of-living-calculator",
];

export const stateSeoToolSlugs = ["salary-calculator", "mortgage-calculator", "tax-calculator"];

export function getToolsBySlugs(slugs: string[]): Tool[] {
  const slugSet = new Set(slugs);
  return tools.filter((tool) => slugSet.has(tool.slug));
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: string): Tool[] {
  return tools.filter((t) => t.category === category);
}
