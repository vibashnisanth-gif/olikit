export interface GlossaryEntry {
  slug: string
  term: string
  definition: string
  example: string
  detailedExplanation: string
  salaryImplications: string
  relatedTerms: string[]
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
    detailedExplanation: "Gross salary represents the total compensation agreed upon between employer and employee before any statutory or voluntary deductions. It includes base pay, overtime, bonuses, commissions, and other forms of direct compensation. Gross salary is the figure used in employment contracts, salary negotiations, and job advertisements. It is also the basis for calculating employer costs such as payroll taxes, workers compensation insurance, and retirement benefit contributions. Understanding gross salary is essential because many financial decisions — from mortgage applications to child support calculations — are based on gross rather than net income.",
    salaryImplications: "A higher gross salary does not always mean proportionally higher take-home pay due to progressive tax brackets and deduction thresholds. As your gross salary increases, portions of income may be taxed at higher marginal rates. Additionally, certain tax credits and government benefits phase out at higher income levels. When evaluating job offers or negotiating raises, consider both the gross amount and how deductions in your specific tax situation will affect net income. Use a salary calculator to estimate the actual take-home difference between two gross salary figures.",
    relatedTerms: ["net-salary", "effective-tax-rate", "marginal-tax-rate"],
    category: "salary",
    relatedCalculatorSlugs: ["salary-calculator"],
    relatedGuideSlugs: ["salary-after-tax-by-country"],
    faqs: [
      { question: "What is the difference between gross salary and net salary?", answer: "Gross salary is your total earnings before any deductions. Net salary (take-home pay) is what you actually receive after taxes, insurance, retirement contributions, and other withholdings are subtracted. The difference can be 20-40% depending on your tax bracket and benefits." },
      { question: "Why is gross salary important?", answer: "Gross salary is the standard figure used for comparing job offers, calculating loan eligibility, determining tax brackets, and computing retirement contributions. Employers and lenders typically reference gross salary rather than net pay." },
      { question: "Does gross salary include employer contributions?", answer: "No, gross salary refers only to your direct earnings. Employer contributions to pensions, health insurance, social security, and other benefits are additional costs borne by the employer and are not part of your gross salary. Your total compensation package includes both gross salary and employer-paid benefits." },
      { question: "How does gross salary affect my tax bracket?", answer: "Your gross salary determines which tax brackets apply to your income. As gross salary increases, you move into higher marginal tax brackets, but only the portion of income within each bracket is taxed at that rate. A raise that pushes you into a higher bracket does not mean all your income is taxed at the higher rate." },
      { question: "What deductions are taken from gross salary?", answer: "Common deductions from gross salary include federal and state income taxes, social security and Medicare taxes, retirement plan contributions, health and dental insurance premiums, life insurance, flexible spending accounts, and garnishments. Voluntary deductions like retirement contributions can be adjusted to manage your taxable income." },
    ],
  },
  {
    slug: "net-salary",
    term: "Net Salary",
    definition: "Net salary, also known as take-home pay, is the amount of money an employee receives after all deductions have been subtracted from gross salary. These deductions include federal and state income taxes, Social Security contributions, Medicare taxes, retirement plan contributions, health insurance premiums, and other voluntary deductions.",
    example: "An employee with a gross salary of $75,000 might have a net salary of $54,862 after federal and state taxes ($12,000), Social Security ($4,650), Medicare ($1,088), 401(k) contributions ($3,000), and health insurance ($2,400). Use a salary calculator to estimate your specific net salary.",
    detailedExplanation: "Net salary (take-home pay) is what actually appears in your bank account after your employer processes payroll deductions. The gap between gross and net salary varies significantly by country, income level, and personal circumstances. In countries with high tax rates and extensive social programs, the difference can exceed 40%. Understanding net salary is critical for budgeting — your lifestyle depends on net, not gross income. Net salary is also the figure used for most personal financial planning, including rent or mortgage affordability, savings rate calculations, and discretionary spending budgets.",
    salaryImplications: "The ratio of net to gross salary varies dramatically by location. In high-tax jurisdictions, a $100,000 gross salary may yield only $60,000-$65,000 net. In low-tax jurisdictions, the same gross salary might yield $80,000-$85,000 net. When comparing international job offers, always convert both offers to net salary in your target country to make a fair comparison. Our salary calculator handles country-specific tax rules to provide accurate net salary estimates.",
    relatedTerms: ["gross-salary", "effective-tax-rate", "marginal-tax-rate"],
    category: "salary",
    relatedCalculatorSlugs: ["salary-calculator"],
    relatedGuideSlugs: ["salary-after-tax-by-country"],
    faqs: [
      { question: "How is net salary calculated?", answer: "Net salary = Gross salary - (Federal income tax + State income tax + Social Security + Medicare + Retirement contributions + Health insurance + Other deductions). Use our salary calculator for an accurate estimate." },
      { question: "Can net salary change during the year?", answer: "Yes. Net salary can change if you get a raise, change your W-4 withholding allowances, start or stop retirement contributions, or if tax rates change. Bonuses and overtime can also affect your net pay for specific pay periods." },
      { question: "What is the difference between net salary and total compensation?", answer: "Net salary is cash in hand after deductions. Total compensation includes gross salary plus employer-paid benefits such as health insurance premiums, pension contributions, stock options, bonuses, and other perks. Total compensation can be 20-50% higher than gross salary." },
      { question: "How does net salary affect loan eligibility?", answer: "Lenders typically use gross income for pre-approval but verify net income for final approval. Your net salary determines your actual ability to make monthly payments. A general guideline is that monthly debt payments should not exceed 36% of your gross monthly income." },
      { question: "Can I increase my net salary without a raise?", answer: "Yes. Adjusting your W-4 withholding allowances, maximizing pre-tax retirement contributions (which reduce taxable income), using pre-tax benefits like health savings accounts or flexible spending accounts, and relocating to a lower-tax jurisdiction can all increase net pay without changing gross salary." },
    ],
  },
  {
    slug: "effective-tax-rate",
    term: "Effective Tax Rate",
    definition: "The effective tax rate is the average percentage of total income paid in taxes. Unlike the marginal tax rate, which applies only to the last dollar earned, the effective tax rate provides a comprehensive view of your total tax burden by dividing total tax paid by total income. It is always lower than the marginal tax rate in a progressive tax system.",
    example: "If you earn $75,000 and pay $12,000 in total income taxes, your effective tax rate is 16% ($12,000 / $75,000). Despite being in the 22% marginal tax bracket, your effective rate is lower because portions of your income are taxed at lower brackets (10% and 12%).",
    detailedExplanation: "The effective tax rate is arguably the most important tax metric for financial planning because it reflects your actual tax burden rather than the theoretical rate on your last dollar earned. It smooths out the complexity of progressive tax brackets into a single, comparable figure. The effective rate includes all taxes paid — federal, state, and local — divided by total income. When comparing tax burdens across different countries or states, the effective tax rate is the most meaningful comparison metric because it accounts for differences in bracket structures, deductions, and credits.",
    salaryImplications: "Your effective tax rate directly determines how much of your gross income you keep as take-home pay. A professional earning $150,000 with a 22% effective rate takes home $117,000, while the same gross salary with a 32% effective rate yields only $102,000 — a $15,000 difference. When negotiating salaries in different locations, use effective tax rates to compare real income. Our tax calculator computes both effective and marginal rates automatically.",
    relatedTerms: ["marginal-tax-rate", "gross-salary", "net-salary"],
    category: "tax",
    relatedCalculatorSlugs: ["tax-calculator", "salary-calculator"],
    relatedGuideSlugs: ["tax-brackets-by-country"],
    faqs: [
      { question: "What is the difference between effective and marginal tax rate?", answer: "The marginal tax rate is the rate applied to your last dollar of income (your highest tax bracket). The effective tax rate is your total tax divided by total income, representing your average tax rate. Effective rates are always lower than marginal rates in progressive systems." },
      { question: "Why does effective tax rate matter?", answer: "The effective tax rate gives you a realistic picture of your tax burden. When comparing salaries or tax situations across states or countries, the effective rate is more meaningful than the marginal rate for understanding your actual take-home pay." },
      { question: "How do deductions affect my effective tax rate?", answer: "Deductions reduce your taxable income, which lowers your effective tax rate. For example, a $10,000 retirement contribution by someone in the 22% bracket saves $2,200 in taxes, reducing their effective rate. Maximizing pre-tax deductions is an effective strategy for lowering your effective tax rate." },
      { question: "Is a lower effective tax rate always better?", answer: "Not necessarily. A lower effective rate may result from a lower income, not necessarily a better tax situation. The most useful comparison is effective tax rate at the same income level across different locations or filing statuses. Also consider what your taxes fund — healthcare, education, and infrastructure vary significantly by jurisdiction." },
      { question: "How does my effective tax rate change as my income grows?", answer: "In progressive systems, your effective tax rate increases as your income grows, but at a decreasing rate. The gap between marginal and effective rates narrows at higher incomes because a larger portion of income falls into higher brackets. At very high incomes, the effective rate approaches the marginal rate." },
    ],
  },
  {
    slug: "marginal-tax-rate",
    term: "Marginal Tax Rate",
    definition: "The marginal tax rate is the tax rate applied to the last dollar of income earned. In a progressive tax system, income is taxed in brackets at increasing rates. Your marginal tax rate is the rate of the highest bracket your income reaches, and it only applies to the portion of income within that bracket, not your entire income.",
    example: "For 2025-2026, a single filer earning $75,000 falls into the 22% marginal tax bracket. However, only income above $47,150 is taxed at 22%. The first $11,600 is taxed at 10%, and income from $11,601 to $47,150 is taxed at 12%. The overall effective tax rate is lower than 22%.",
    detailedExplanation: "The marginal tax rate is one of the most misunderstood tax concepts. Many people mistakenly believe their entire income is taxed at their marginal rate, leading to the misconception that a raise could actually reduce net income by pushing them into a higher bracket. In reality, only the portion of income within each bracket is taxed at that bracket's rate. The marginal rate is crucial for decision-making because it determines the tax impact of earning additional income — whether from a raise, bonus, side business, or selling investments. It also determines the tax benefit of additional deductions, as each dollar of deduction saves taxes at your marginal rate.",
    salaryImplications: "Your marginal tax rate directly affects the net value of salary increases, bonuses, and additional income. If you are in the 32% marginal bracket, a $10,000 raise yields only $6,800 after federal taxes (excluding state taxes). This does not mean the raise is not worthwhile — it simply means you should know the net impact. Marginal rate also affects decisions about retirement contributions (which save taxes at your marginal rate), Roth vs. traditional IRA choices, and when to realize capital gains or losses.",
    relatedTerms: ["effective-tax-rate", "gross-salary", "net-salary"],
    category: "tax",
    relatedCalculatorSlugs: ["tax-calculator", "salary-calculator"],
    relatedGuideSlugs: ["tax-brackets-by-country"],
    faqs: [
      { question: "Does my marginal tax rate apply to all my income?", answer: "No. In a progressive tax system, only the portion of income within each bracket is taxed at that bracket's rate. Your entire income is not taxed at your marginal rate. This is a common misconception." },
      { question: "How does knowing my marginal tax rate help?", answer: "Knowing your marginal rate helps with financial planning decisions, such as whether to work overtime (you know what portion of extra income goes to taxes), contribute to retirement accounts (tax savings at your marginal rate), or realize capital gains." },
      { question: "Does a raise that pushes me into a higher bracket reduce my net income?", answer: "No. Only the income within the new bracket is taxed at the higher rate. You always keep more money after a raise, though the incremental gain is smaller than the gross raise amount. This is sometimes called the 'tax bracket myth'." },
      { question: "How do state taxes affect my marginal rate?", answer: "State income taxes add to your overall marginal rate. If you are in a 22% federal bracket and a 5% state bracket, your combined marginal rate is 27%. This higher combined rate should be used for financial planning decisions like evaluating additional income or deductions." },
      { question: "What is the highest marginal tax rate in the US?", answer: "For 2025-2026, the highest federal marginal tax rate is 37% for income over $609,350 (single filers). With the additional 3.8% Net Investment Income Tax and state taxes, top marginal rates can exceed 50% in high-tax states like California and New York." },
    ],
  },
  {
    slug: "apr",
    term: "APR (Annual Percentage Rate)",
    definition: "APR represents the total annual cost of borrowing money, including the interest rate plus any fees or additional costs associated with the loan. It is expressed as a percentage and provides a more complete picture of loan costs than the nominal interest rate alone. APR is standardized, making it easier to compare loan offers from different lenders.",
    example: "A mortgage with a 6.0% interest rate and $3,000 in origination fees might have an APR of 6.3%. The APR is higher than the interest rate because it spreads the fees across the loan term. When comparing mortgage offers, the lower APR typically represents the better deal, assuming all other terms are equal.",
    detailedExplanation: "APR was introduced as a consumer protection measure to ensure borrowers could compare the true cost of loans across different lenders. Before APR disclosure requirements, lenders could advertise low interest rates while hiding significant fees in the fine print. APR solves this by combining the interest rate with all mandatory fees — origination charges, discount points, processing fees, and mortgage insurance — into a single annualized percentage. APR does not include all costs (such as title insurance, appraisal fees, or credit report fees), but it captures the primary costs that vary by lender. The APR calculation assumes the loan is held for its full term, which may not reflect the cost if you refinance or sell early.",
    salaryImplications: "APR directly affects your monthly payments and total borrowing costs. For mortgages, a 0.5% difference in APR on a $300,000 loan amounts to approximately $90 per month and over $32,000 in additional interest over 30 years. Your salary determines how much you can borrow regardless of APR, but a lower APR means more of your income goes toward principal rather than interest. When comparing loan offers, focus on APR rather than the interest rate, especially for loans with significant fees.",
    relatedTerms: ["mortgage-affordability", "debt-to-income-ratio"],
    category: "mortgage",
    relatedCalculatorSlugs: ["mortgage-calculator"],
    relatedGuideSlugs: ["how-much-house-can-i-afford"],
    faqs: [
      { question: "What is the difference between APR and interest rate?", answer: "The interest rate is the cost of borrowing the principal, while APR includes the interest rate plus lender fees, points, and other charges. APR is always equal to or higher than the interest rate. Use APR to compare total loan costs between lenders." },
      { question: "Why do lenders show both interest rate and APR?", answer: "APR provides a standardized way to compare loan costs including fees. Federal law requires lenders to disclose APR so borrowers can make informed comparisons. The interest rate determines the monthly payment, while APR reflects the total cost." },
      { question: "Does APR include all loan costs?", answer: "No. APR includes the interest rate, lender fees, discount points, and mortgage insurance. It does not typically include third-party fees such as title insurance, appraisal fees, credit report charges, or escrow deposits. Always review the full Loan Estimate document for complete cost breakdown." },
      { question: "How does loan term affect APR?", answer: "APR is calculated over the full loan term. For shorter-term loans, fees are spread over fewer months, which can make the APR appear higher. This does not necessarily mean the short-term loan is more expensive overall — compare total interest costs alongside APR for a complete picture." },
      { question: "Should I always choose the loan with the lowest APR?", answer: "Generally yes, but consider other factors: whether you plan to keep the loan for its full term, the monthly payment amount, prepayment penalties, and adjustable-rate features. A slightly higher APR with lower upfront costs might be better if you plan to sell or refinance within a few years." },
    ],
  },
  {
    slug: "apy",
    term: "APY (Annual Percentage Yield)",
    definition: "APY measures the total amount of interest earned on a deposit account over one year, taking into account the effect of compound interest. Unlike simple interest rates, APY reflects how often interest compounds (daily, monthly, quarterly), making it the most accurate measure of an account's earning potential. Higher compounding frequency results in higher APY.",
    example: "A savings account offering 4.50% interest compounded monthly has an APY of 4.59%. This means $10,000 deposited would grow to $10,459 after one year. The same 4.50% rate compounded daily would yield an APY of 4.60%. Always compare APYs rather than interest rates when evaluating savings accounts.",
    detailedExplanation: "APY is the standardized measure that allows consumers to compare deposit account returns regardless of compounding frequency. Without APY, comparing a monthly-compounding account at 4.5% to a daily-compounding account at 4.45% would require complex calculations. APY normalizes these differences into a single figure representing the actual annual return. The formula for APY is: APY = (1 + r/n)^n - 1, where r is the nominal interest rate and n is the number of compounding periods per year. As n approaches infinity (continuous compounding), APY approaches e^r - 1. The difference between nominal rate and APY grows with the rate and compounding frequency.",
    salaryImplications: "APY determines how quickly your savings grow without any active work on your part. For emergency funds and short-term savings, a high APY account can meaningfully outpace inflation. On a $50,000 emergency fund, the difference between a 0.5% APY (traditional bank) and a 4.5% APY (high-yield savings) is $2,000 per year — equivalent to a small part-time job. For long-term investors, APY on fixed-income products like CDs provides predictable returns that complement more volatile stock market investments.",
    relatedTerms: ["compound-interest", "inflation"],
    category: "investment",
    relatedCalculatorSlugs: ["investment-calculator"],
    relatedGuideSlugs: ["compound-interest-examples"],
    faqs: [
      { question: "What is the difference between APY and APR?", answer: "APY applies to deposit accounts (savings, CDs) and measures what you earn. APR applies to loans and measures what you pay. APY accounts for compound interest, while APR accounts for fees. Both are annualized rates that help consumers compare financial products." },
      { question: "How does compounding frequency affect APY?", answer: "More frequent compounding increases APY. Daily compounding yields a higher APY than monthly compounding at the same nominal interest rate. The difference is small for most accounts but becomes significant over longer periods and larger balances." },
      { question: "What is a good APY for a savings account currently?", answer: "High-yield savings accounts currently offer APYs ranging from 3.5% to 5.0%, while traditional banks offer 0.01% to 0.50%. Online banks and credit unions typically offer the highest APYs. Always check whether the APY is promotional (limited-time) or ongoing." },
      { question: "Does APY guarantee my return?", answer: "For FDIC-insured deposit accounts, the APY is the annual return assuming you do not withdraw funds. However, APYs are variable and can change at any time. CDs may offer a fixed APY for the term. Unlike investments, FDIC-insured accounts cannot lose principal up to $250,000 per depositor." },
      { question: "How do I calculate interest earned using APY?", answer: "Interest earned = Principal × APY. For monthly compounding, divide APY by 12 for approximate monthly return. For example, $25,000 at 4.5% APY earns approximately $1,125 in the first year, or about $94 per month. Actual amounts depend on the exact compounding schedule and any deposits or withdrawals." },
    ],
  },
  {
    slug: "inflation",
    term: "Inflation",
    definition: "Inflation is the rate at which the general level of prices for goods and services rises over time, eroding purchasing power. It is typically measured by the Consumer Price Index (CPI), which tracks the cost of a basket of common goods and services. Central banks target moderate inflation (typically 2%) as a sign of a healthy economy.",
    example: "If the inflation rate is 3% per year, an item that costs $100 today will cost approximately $103 in one year. Over 10 years at 3% inflation, that same item would cost about $134. This means your savings need to grow at least at the inflation rate to maintain purchasing power.",
    detailedExplanation: "Inflation represents the decline of purchasing power over time. While moderate inflation (2-3%) is considered healthy for economic growth, high inflation erodes savings, distorts investment decisions, and disproportionately affects people on fixed incomes. Inflation is measured through various indices, with CPI being the most commonly referenced. Core CPI excludes volatile food and energy prices to show underlying inflation trends. The Personal Consumption Expenditures (PCE) index is the Federal Reserve's preferred measure. Understanding inflation is crucial for long-term financial planning because it determines the real (inflation-adjusted) return on your investments and savings.",
    salaryImplications: "Inflation directly affects your real income. If you receive a 3% raise but inflation is 5%, your purchasing power has actually decreased by 2%. Over a career, this gap compounds significantly. Salary negotiations should always consider inflation expectations. Additionally, many tax brackets, social security payments, and government benefits are inflation-indexed, meaning they automatically adjust upward with CPI. Understanding whether your income sources are inflation-protected is essential for financial planning.",
    relatedTerms: ["compound-interest", "apy"],
    category: "general",
    relatedCalculatorSlugs: ["investment-calculator", "retirement-calculator"],
    relatedGuideSlugs: ["retirement-planning-guide"],
    faqs: [
      { question: "How does inflation affect my salary?", answer: "If your salary increases by less than the inflation rate, your real income (purchasing power) is decreasing. When negotiating raises or evaluating job offers, consider whether the increase keeps pace with or exceeds inflation." },
      { question: "How do I protect my savings from inflation?", answer: "Investing in assets that historically outpace inflation (stocks, real estate, TIPS) can protect your purchasing power. Keeping large amounts in low-interest savings accounts means your money loses value over time. Use our investment calculator to model growth against inflation." },
      { question: "What causes inflation?", answer: "Inflation can be caused by demand-pull factors (too much money chasing too few goods), cost-push factors (rising production costs passed to consumers), or monetary factors (increases in money supply). Supply chain disruptions, energy price shocks, and fiscal policy can all contribute to inflationary pressure." },
      { question: "How does the central bank control inflation?", answer: "Central banks control inflation primarily through interest rate policy. Raising interest rates makes borrowing more expensive, reducing spending and cooling the economy. Quantitative tightening (reducing money supply) is another tool. The Federal Reserve targets 2% annual inflation as measured by the PCE index." },
      { question: "What is the difference between nominal and real returns?", answer: "Nominal return is the raw percentage return on an investment. Real return = Nominal return - Inflation rate. If your investment returns 7% and inflation is 3%, your real return is approximately 4%. Always consider real returns when evaluating long-term investment performance." },
    ],
  },
  {
    slug: "debt-to-income-ratio",
    term: "Debt-to-Income (DTI) Ratio",
    definition: "The debt-to-income (DTI) ratio is the percentage of your gross monthly income that goes toward debt payments, including mortgages, credit cards, student loans, auto loans, and other debts. Lenders use DTI to assess your ability to manage monthly payments and repay borrowed money. A lower DTI indicates better financial health.",
    example: "If your gross monthly income is $6,000 and your total monthly debt payments are $2,100 (mortgage: $1,500, car loan: $400, credit cards: $200), your DTI ratio is 35%. Most lenders prefer DTI ratios below 43% for mortgage approval, and below 36% for optimal rates.",
    detailedExplanation: "DTI is one of the most important factors lenders evaluate when considering mortgage applications. It is calculated by dividing total monthly debt payments by gross monthly income. Lenders typically distinguish between front-end DTI (housing costs only) and back-end DTI (all debt payments). The front-end ratio should ideally be below 28%, while the back-end ratio should be below 36%. DTI requirements vary by loan type — conventional loans typically require DTI below 43%, while FHA loans may allow up to 50% with compensating factors. DTI is not the same as credit score — they evaluate different aspects of financial health.",
    salaryImplications: "Your salary directly determines how much debt you can carry. A higher salary increases your debt capacity without increasing your DTI. For example, someone earning $120,000 with $3,000 in monthly debt payments has a 30% DTI, while someone earning $60,000 with the same $3,000 in payments has a 60% DTI. When considering major purchases like a home, understanding how your DTI changes with different loan amounts is essential. Our mortgage calculator includes DTI analysis to help you find an affordable price range.",
    relatedTerms: ["mortgage-affordability", "apr"],
    category: "mortgage",
    relatedCalculatorSlugs: ["mortgage-calculator"],
    relatedGuideSlugs: ["how-much-house-can-i-afford"],
    faqs: [
      { question: "What is a good debt-to-income ratio?", answer: "A DTI ratio below 36% is considered good, with no more than 28% going toward housing costs. Ratios between 36% and 43% may still qualify for loans but with less favorable terms. Above 43%, mortgage approval becomes difficult." },
      { question: "How can I improve my DTI ratio?", answer: "Pay down existing debts, increase your income, avoid taking on new debt before applying for a mortgage, and consider consolidating high-interest debts. Our mortgage calculator can help you determine an affordable home price based on your DTI." },
      { question: "Does DTI include utilities and living expenses?", answer: "No. DTI only includes debt payments listed on your credit report — mortgages, car loans, student loans, credit card minimum payments, personal loans, and child support. Utilities, groceries, insurance, and everyday living expenses are not included in DTI calculations." },
      { question: "How does DTI differ from the 28/36 rule?", answer: "The 28/36 rule is a specific DTI guideline: no more than 28% of gross income for housing costs (front-end) and no more than 36% for total debt (back-end). DTI is the general metric; 28/36 is one common threshold used by conventional lenders." },
      { question: "Can I get a mortgage with a high DTI?", answer: "Yes, but with limitations. FHA loans may allow DTI up to 50% with compensating factors like a high credit score or large down payment. Some conventional loans accept up to 45-50% DTI. A high DTI typically results in higher interest rates and may require additional documentation." },
    ],
  },
  {
    slug: "compound-interest",
    term: "Compound Interest",
    definition: "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. Unlike simple interest, which is calculated only on the principal, compounding allows your money to grow exponentially over time. The frequency of compounding (daily, monthly, annually) affects the total growth.",
    example: "If you invest $10,000 at 7% annual return compounded yearly, after 30 years you would have approximately $76,123 without adding any additional money. With monthly contributions of $500, the same investment would grow to approximately $611,729. This exponential growth is why starting to invest early is so powerful.",
    detailedExplanation: "Compound interest is often called the eighth wonder of the world because of its ability to generate wealth exponentially over time. The key insight is that your money works for you — earning returns on both your original investment and on previously earned returns. The formula is A = P(1 + r/n)^(nt), where A is the final amount, P is principal, r is annual rate, n is compounding frequency, and t is time. The most important factor in compounding is time, not the amount invested. Starting to invest at age 25 versus 35 can mean hundreds of thousands of dollars difference at retirement, even with the same contribution amount. This is why financial advisors stress the importance of starting early.",
    salaryImplications: "Compound interest is the primary mechanism through which salary earners build long-term wealth. By consistently investing a portion of your salary, you harness compounding to multiply your savings. For example, investing 15% of a $75,000 salary ($937 monthly) at 7% return from age 30 to 67 yields approximately $1.8 million — far more than the $422,000 actually contributed. Your salary determines how much you can invest, but time and compounding determine how much that investment grows. Our investment calculator models these scenarios to help you see the impact of different savings rates and time horizons.",
    relatedTerms: ["apy", "inflation"],
    category: "investment",
    relatedCalculatorSlugs: ["investment-calculator", "retirement-calculator"],
    relatedGuideSlugs: ["compound-interest-examples", "retirement-planning-guide"],
    faqs: [
      { question: "Why is compound interest powerful?", answer: "Compound interest creates exponential growth because you earn returns on your returns. Over long periods, the majority of growth comes from compounding rather than the initial principal. Starting early maximizes this effect." },
      { question: "How does compounding frequency affect returns?", answer: "More frequent compounding (daily vs. annual) results in slightly higher returns. For example, $10,000 at 7% over 30 years yields $76,123 with annual compounding and $76,466 with daily compounding. The difference grows with larger amounts and longer time horizons." },
      { question: "What is the Rule of 72?", answer: "The Rule of 72 is a quick way to estimate how long it takes to double your money: divide 72 by your expected annual return rate. At 7% returns, your money doubles approximately every 10.3 years (72/7 = 10.3). This rule helps visualize the power of compounding without complex calculations." },
      { question: "How much difference does starting early make?", answer: "Starting 10 years earlier can triple your final nest egg. Someone investing $500 monthly from age 25 to 65 at 7% accumulates approximately $1.4 million. Waiting until age 35 to start the same contributions yields only about $650,000 — less than half, despite contributing only $60,000 less out of pocket." },
      { question: "Does compound interest work against me on debt?", answer: "Yes. Credit cards and other high-interest debt use compound interest against you. Minimum payments on a credit card with 20% APR can mean paying two to three times the original purchase amount over time. This is why paying down high-interest debt should typically take priority over investing." },
    ],
  },
  {
    slug: "mortgage-affordability",
    term: "Mortgage Affordability",
    definition: "Mortgage affordability refers to how much home you can reasonably purchase based on your income, existing debts, down payment, and current interest rates. Lenders use the 28/36 rule: no more than 28% of gross monthly income for housing costs and no more than 36% for total debt payments. Your credit score and employment history also affect affordability.",
    example: "With a $75,000 annual salary ($6,250/month), no other debts, and a 20% down payment, you can afford approximately $2,500 monthly housing costs. At current interest rates, this translates to a home price of roughly $350,000-$400,000 depending on property taxes and insurance.",
    detailedExplanation: "Mortgage affordability is determined by multiple factors that lenders weigh together. Your debt-to-income ratio is the primary metric, but lenders also consider your credit score (minimum 620 for conventional loans, 580 for FHA), employment history (typically 2+ years stable), down payment size (affects PMI requirements), and cash reserves (typically 2-6 months of payments). The affordable price is not just what a lender will approve — it is what you can comfortably afford given your lifestyle, other financial goals, and risk tolerance. A common mistake is buying at the maximum approval amount, leaving no room for savings, travel, or unexpected expenses. Most financial advisors recommend buying below your maximum approved amount.",
    salaryImplications: "Your salary determines your borrowing power more than any other factor. A general guideline: you can typically afford a home worth 3-5 times your annual income depending on interest rates and down payment. At a $75,000 salary with 20% down and 6.5% rates, you might afford $350,000-$400,000 (4.7-5.3x salary). At a $150,000 salary, the range increases to $700,000-$800,000. However, higher earners in high-cost areas may need to stretch beyond traditional guidelines. Our mortgage calculator shows how different salaries, down payments, and rates affect your affordable home price range.",
    relatedTerms: ["debt-to-income-ratio", "apr"],
    category: "mortgage",
    relatedCalculatorSlugs: ["mortgage-calculator"],
    relatedGuideSlugs: ["how-much-house-can-i-afford"],
    faqs: [
      { question: "How much house can I afford with a $75,000 salary?", answer: "With a $75,000 salary, zero debt, and 20% down, you can typically afford a home between $350,000 and $400,000. Your actual affordable price depends on interest rates, property taxes, insurance, and HOA fees. Use our mortgage calculator for a personalized estimate." },
      { question: "What is the 28/36 rule?", answer: "The 28/36 rule states that no more than 28% of your gross monthly income should go to housing costs, and no more than 36% should go to total debt payments including housing. This is a guideline lenders use to determine mortgage approval and affordable loan amounts." },
      { question: "How does my down payment affect affordability?", answer: "A larger down payment reduces your loan amount and monthly payment, and eliminates PMI at 20% down. A 10% down payment on a $400,000 home adds roughly $200-300 monthly for PMI compared to 20% down. Our calculator helps compare different down payment scenarios to find the optimal balance." },
      { question: "How do interest rates affect what I can afford?", answer: "Interest rates have a dramatic effect on affordability. A 1% rate increase on a $300,000 loan adds approximately $170 to your monthly payment. At 6% vs 7%, the difference on a $400,000 home is about $250 per month, which equates to roughly $40,000 in purchasing power." },
      { question: "Should I include HOA fees in my affordability calculation?", answer: "Yes. HOA fees can range from $100-$1,000+ monthly and count toward your housing cost. Include them in your monthly housing budget when calculating affordability. Our mortgage calculator includes an HOA field to ensure your estimate is accurate." },
    ],
  },
]

export function getGlossaryEntry(slug: string): GlossaryEntry | undefined {
  return glossaryEntries.find(e => e.slug === slug)
}

export function getGlossaryByCategory(category: string): GlossaryEntry[] {
  return glossaryEntries.filter(e => e.category === category)
}
