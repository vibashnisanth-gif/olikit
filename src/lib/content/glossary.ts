export interface GlossaryEntry {
  slug: string
  term: string
  definition: string
  example: string
  category: "salary" | "tax" | "mortgage" | "investment" | "general"
  relatedCalculatorSlugs: string[]
  relatedGuideSlugs: string[]
  faqs: { question: string; answer: string }[]
}

export const glossaryEntries: GlossaryEntry[] = [
  {
    slug: "gross-salary",
    term: "Gross Salary",
    definition: "Gross salary is the total amount of money an employee earns before any deductions are taken out, including taxes, Social Security, Medicare, retirement contributions, health insurance premiums, and other withholdings. It is typically expressed as an annual figure in employment contracts and is the starting point for calculating take-home pay.",
    example: "If your employment contract states an annual salary of $75,000, that is your gross salary. After federal income tax ($9,000), state income tax ($3,000), Social Security ($4,650), Medicare ($1,088), and health insurance ($2,400), your net take-home pay would be approximately $54,862 per year.",
    category: "salary",
    relatedCalculatorSlugs: ["salary-calculator"],
    relatedGuideSlugs: ["salary-after-tax-by-country"],
    faqs: [
      { question: "What is the difference between gross salary and net salary?", answer: "Gross salary is your total earnings before any deductions. Net salary (take-home pay) is what you actually receive after taxes, insurance, retirement contributions, and other withholdings are subtracted. The difference can be 20-40% depending on your tax bracket and benefits." },
      { question: "Why is gross salary important?", answer: "Gross salary is the standard figure used for comparing job offers, calculating loan eligibility, determining tax brackets, and computing retirement contributions. Employers and lenders typically reference gross salary rather than net pay." },
    ],
  },
  {
    slug: "net-salary",
    term: "Net Salary",
    definition: "Net salary, also known as take-home pay, is the amount of money an employee receives after all deductions have been subtracted from gross salary. These deductions include federal and state income taxes, Social Security contributions, Medicare taxes, retirement plan contributions, health insurance premiums, and other voluntary deductions.",
    example: "An employee with a gross salary of $75,000 might have a net salary of $54,862 after federal and state taxes ($12,000), Social Security ($4,650), Medicare ($1,088), 401(k) contributions ($3,000), and health insurance ($2,400). Use a salary calculator to estimate your specific net salary.",
    category: "salary",
    relatedCalculatorSlugs: ["salary-calculator"],
    relatedGuideSlugs: ["salary-after-tax-by-country"],
    faqs: [
      { question: "How is net salary calculated?", answer: "Net salary = Gross salary - (Federal income tax + State income tax + Social Security + Medicare + Retirement contributions + Health insurance + Other deductions). Use our salary calculator for an accurate estimate." },
      { question: "Can net salary change during the year?", answer: "Yes. Net salary can change if you get a raise, change your W-4 withholding allowances, start or stop retirement contributions, or if tax rates change. Bonuses and overtime can also affect your net pay for specific pay periods." },
    ],
  },
  {
    slug: "effective-tax-rate",
    term: "Effective Tax Rate",
    definition: "The effective tax rate is the average percentage of total income paid in taxes. Unlike the marginal tax rate, which applies only to the last dollar earned, the effective tax rate provides a comprehensive view of your total tax burden by dividing total tax paid by total income. It is always lower than the marginal tax rate in a progressive tax system.",
    example: "If you earn $75,000 and pay $12,000 in total income taxes, your effective tax rate is 16% ($12,000 / $75,000). Despite being in the 22% marginal tax bracket, your effective rate is lower because portions of your income are taxed at lower brackets (10% and 12%).",
    category: "tax",
    relatedCalculatorSlugs: ["tax-calculator", "salary-calculator"],
    relatedGuideSlugs: ["tax-brackets-by-country"],
    faqs: [
      { question: "What is the difference between effective and marginal tax rate?", answer: "The marginal tax rate is the rate applied to your last dollar of income (your highest tax bracket). The effective tax rate is your total tax divided by total income, representing your average tax rate. Effective rates are always lower than marginal rates in progressive systems." },
      { question: "Why does effective tax rate matter?", answer: "The effective tax rate gives you a realistic picture of your tax burden. When comparing salaries or tax situations across states or countries, the effective rate is more meaningful than the marginal rate for understanding your actual take-home pay." },
    ],
  },
  {
    slug: "marginal-tax-rate",
    term: "Marginal Tax Rate",
    definition: "The marginal tax rate is the tax rate applied to the last dollar of income earned. In a progressive tax system, income is taxed in brackets at increasing rates. Your marginal tax rate is the rate of the highest bracket your income reaches, and it only applies to the portion of income within that bracket, not your entire income.",
    example: "For 2025-2026, a single filer earning $75,000 falls into the 22% marginal tax bracket. However, only income above $47,150 is taxed at 22%. The first $11,600 is taxed at 10%, and income from $11,601 to $47,150 is taxed at 12%. The overall effective tax rate is lower than 22%.",
    category: "tax",
    relatedCalculatorSlugs: ["tax-calculator", "salary-calculator"],
    relatedGuideSlugs: ["tax-brackets-by-country"],
    faqs: [
      { question: "Does my marginal tax rate apply to all my income?", answer: "No. In a progressive tax system, only the portion of income within each bracket is taxed at that bracket's rate. Your entire income is not taxed at your marginal rate. This is a common misconception." },
      { question: "How does knowing my marginal tax rate help?", answer: "Knowing your marginal rate helps with financial planning decisions, such as whether to work overtime (you know what portion of extra income goes to taxes), contribute to retirement accounts (tax savings at your marginal rate), or realize capital gains." },
    ],
  },
  {
    slug: "apr",
    term: "APR (Annual Percentage Rate)",
    definition: "APR represents the total annual cost of borrowing money, including the interest rate plus any fees or additional costs associated with the loan. It is expressed as a percentage and provides a more complete picture of loan costs than the nominal interest rate alone. APR is standardized, making it easier to compare loan offers from different lenders.",
    example: "A mortgage with a 6.0% interest rate and $3,000 in origination fees might have an APR of 6.3%. The APR is higher than the interest rate because it spreads the fees across the loan term. When comparing mortgage offers, the lower APR typically represents the better deal, assuming all other terms are equal.",
    category: "mortgage",
    relatedCalculatorSlugs: ["mortgage-calculator"],
    relatedGuideSlugs: ["how-much-house-can-i-afford"],
    faqs: [
      { question: "What is the difference between APR and interest rate?", answer: "The interest rate is the cost of borrowing the principal, while APR includes the interest rate plus lender fees, points, and other charges. APR is always equal to or higher than the interest rate. Use APR to compare total loan costs between lenders." },
      { question: "Why do lenders show both interest rate and APR?", answer: "APR provides a standardized way to compare loan costs including fees. Federal law requires lenders to disclose APR so borrowers can make informed comparisons. The interest rate determines the monthly payment, while APR reflects the total cost." },
    ],
  },
  {
    slug: "apy",
    term: "APY (Annual Percentage Yield)",
    definition: "APY measures the total amount of interest earned on a deposit account over one year, taking into account the effect of compound interest. Unlike simple interest rates, APY reflects how often interest compounds (daily, monthly, quarterly), making it the most accurate measure of an account's earning potential. Higher compounding frequency results in higher APY.",
    example: "A savings account offering 4.50% interest compounded monthly has an APY of 4.59%. This means $10,000 deposited would grow to $10,459 after one year. The same 4.50% rate compounded daily would yield an APY of 4.60%. Always compare APYs rather than interest rates when evaluating savings accounts.",
    category: "investment",
    relatedCalculatorSlugs: ["investment-calculator"],
    relatedGuideSlugs: ["compound-interest-examples"],
    faqs: [
      { question: "What is the difference between APY and APR?", answer: "APY applies to deposit accounts (savings, CDs) and measures what you earn. APR applies to loans and measures what you pay. APY accounts for compound interest, while APR accounts for fees. Both are annualized rates that help consumers compare financial products." },
      { question: "How does compounding frequency affect APY?", answer: "More frequent compounding increases APY. Daily compounding yields a higher APY than monthly compounding at the same nominal interest rate. The difference is small for most accounts but becomes significant over longer periods and larger balances." },
    ],
  },
  {
    slug: "inflation",
    term: "Inflation",
    definition: "Inflation is the rate at which the general level of prices for goods and services rises over time, eroding purchasing power. It is typically measured by the Consumer Price Index (CPI), which tracks the cost of a basket of common goods and services. Central banks target moderate inflation (typically 2%) as a sign of a healthy economy.",
    example: "If the inflation rate is 3% per year, an item that costs $100 today will cost approximately $103 in one year. Over 10 years at 3% inflation, that same item would cost about $134. This means your savings need to grow at least at the inflation rate to maintain purchasing power.",
    category: "general",
    relatedCalculatorSlugs: ["investment-calculator", "retirement-calculator"],
    relatedGuideSlugs: ["retirement-planning-guide"],
    faqs: [
      { question: "How does inflation affect my salary?", answer: "If your salary increases by less than the inflation rate, your real income (purchasing power) is decreasing. When negotiating raises or evaluating job offers, consider whether the increase keeps pace with or exceeds inflation." },
      { question: "How do I protect my savings from inflation?", answer: "Investing in assets that historically outpace inflation (stocks, real estate, TIPS) can protect your purchasing power. Keeping large amounts in low-interest savings accounts means your money loses value over time. Use our investment calculator to model growth against inflation." },
    ],
  },
  {
    slug: "debt-to-income-ratio",
    term: "Debt-to-Income (DTI) Ratio",
    definition: "The debt-to-income (DTI) ratio is the percentage of your gross monthly income that goes toward debt payments, including mortgages, credit cards, student loans, auto loans, and other debts. Lenders use DTI to assess your ability to manage monthly payments and repay borrowed money. A lower DTI indicates better financial health.",
    example: "If your gross monthly income is $6,000 and your total monthly debt payments are $2,100 (mortgage: $1,500, car loan: $400, credit cards: $200), your DTI ratio is 35%. Most lenders prefer DTI ratios below 43% for mortgage approval, and below 36% for optimal rates.",
    category: "mortgage",
    relatedCalculatorSlugs: ["mortgage-calculator"],
    relatedGuideSlugs: ["how-much-house-can-i-afford"],
    faqs: [
      { question: "What is a good debt-to-income ratio?", answer: "A DTI ratio below 36% is considered good, with no more than 28% going toward housing costs. Ratios between 36% and 43% may still qualify for loans but with less favorable terms. Above 43%, mortgage approval becomes difficult." },
      { question: "How can I improve my DTI ratio?", answer: "Pay down existing debts, increase your income, avoid taking on new debt before applying for a mortgage, and consider consolidating high-interest debts. Our mortgage calculator can help you determine an affordable home price based on your DTI." },
    ],
  },
  {
    slug: "compound-interest",
    term: "Compound Interest",
    definition: "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. Unlike simple interest, which is calculated only on the principal, compounding allows your money to grow exponentially over time. The frequency of compounding (daily, monthly, annually) affects the total growth.",
    example: "If you invest $10,000 at 7% annual return compounded yearly, after 30 years you would have approximately $76,123 without adding any additional money. With monthly contributions of $500, the same investment would grow to approximately $611,729. This exponential growth is why starting to invest early is so powerful.",
    category: "investment",
    relatedCalculatorSlugs: ["investment-calculator", "retirement-calculator"],
    relatedGuideSlugs: ["compound-interest-examples", "retirement-planning-guide"],
    faqs: [
      { question: "Why is compound interest powerful?", answer: "Compound interest creates exponential growth because you earn returns on your returns. Over long periods, the majority of growth comes from compounding rather than the initial principal. Starting early maximizes this effect." },
      { question: "How does compounding frequency affect returns?", answer: "More frequent compounding (daily vs. annual) results in slightly higher returns. For example, $10,000 at 7% over 30 years yields $76,123 with annual compounding and $76,466 with daily compounding. The difference grows with larger amounts and longer time horizons." },
    ],
  },
  {
    slug: "mortgage-affordability",
    term: "Mortgage Affordability",
    definition: "Mortgage affordability refers to how much home you can reasonably purchase based on your income, existing debts, down payment, and current interest rates. Lenders use the 28/36 rule: no more than 28% of gross monthly income for housing costs and no more than 36% for total debt payments. Your credit score and employment history also affect affordability.",
    example: "With a $75,000 annual salary ($6,250/month), no other debts, and a 20% down payment, you can afford approximately $2,500 monthly housing costs. At current interest rates, this translates to a home price of roughly $350,000-$400,000 depending on property taxes and insurance.",
    category: "mortgage",
    relatedCalculatorSlugs: ["mortgage-calculator"],
    relatedGuideSlugs: ["how-much-house-can-i-afford"],
    faqs: [
      { question: "How much house can I afford with a $75,000 salary?", answer: "With a $75,000 salary, zero debt, and 20% down, you can typically afford a home between $350,000 and $400,000. Your actual affordable price depends on interest rates, property taxes, insurance, and HOA fees. Use our mortgage calculator for a personalized estimate." },
      { question: "What is the 28/36 rule?", answer: "The 28/36 rule states that no more than 28% of your gross monthly income should go to housing costs, and no more than 36% should go to total debt payments including housing. This is a guideline lenders use to determine mortgage approval and affordable loan amounts." },
    ],
  },
]

export function getGlossaryEntry(slug: string): GlossaryEntry | undefined {
  return glossaryEntries.find(e => e.slug === slug)
}

export function getGlossaryByCategory(category: string): GlossaryEntry[] {
  return glossaryEntries.filter(e => e.category === category)
}
