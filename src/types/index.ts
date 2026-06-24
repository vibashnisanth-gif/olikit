export interface Calculator<I, O> {
  name: string
  description: string
  category: CalculatorCategory
  calculate(input: I): O
}

export type CalculatorCategory =
  | 'investment'
  | 'loan'
  | 'retirement'
  | 'tax'
  | 'business'
  | 'personal-finance'
  | 'salary'
  | 'budget'
  | 'valuation'

export interface AmortizationRow {
  period: number
  payment: number
  principal: number
  interest: number
  balance: number
}

export interface CompoundInterestInput {
  principal: number
  monthlyContribution: number
  annualRate: number
  years: number
  compoundsPerYear: number
}
export interface CompoundInterestOutput {
  futureValue: number
  totalContributions: number
  totalInterest: number
  effectiveAnnualRate: number
}

export interface LoanAmortizationInput {
  loanAmount: number
  annualRate: number
  termYears: number
  paymentsPerYear: number
}
export interface LoanAmortizationOutput {
  monthlyPayment: number
  totalPayment: number
  totalInterest: number
  schedule: AmortizationRow[]
  payoffDate: string
}

export interface InvestmentReturnInput {
  initialInvestment: number
  finalValue: number
  years: number
  additionalContributions?: number
}
export interface InvestmentReturnOutput {
  totalReturn: number
  totalReturnPercent: number
  cagr: number
  absoluteReturn: number
}

export interface RetirementSavingsInput {
  currentAge: number
  retirementAge: number
  lifeExpectancy: number
  currentSavings: number
  monthlyContribution: number
  expectedReturnRate: number
  currentAnnualIncome: number
  desiredReplacementRate: number
  inflationRate: number
}
export interface RetirementSavingsOutput {
  savingsAtRetirement: number
  monthlyRetirementIncome: number
  targetSavings: number
  savingsGap: number
  isOnTrack: boolean
  withdrawalRate: number
}

export interface MortgageInput {
  homePrice: number
  downPayment: number
  annualRate: number
  termYears: number
  annualPropertyTax: number
  annualInsurance: number
  monthlyHOA: number
}
export interface MortgageOutput {
  loanAmount: number
  monthlyPrincipalAndInterest: number
  monthlyPropertyTax: number
  monthlyInsurance: number
  monthlyHOA: number
  totalMonthlyPayment: number
  totalInterest: number
  totalPayment: number
  schedule: AmortizationRow[]
  loanToValueRatio: number
}

export interface ROIInput {
  initialInvestment: number
  finalValue: number
  holdingPeriodYears: number
}
export interface ROIOutput {
  roi: number
  annualizedROI: number
  netProfit: number
}

export interface NPVInput {
  initialInvestment: number
  discountRate: number
  cashFlows: number[]
}
export interface NPVOutput {
  npv: number
  profitabilityIndex: number
  decision: 'accept' | 'reject'
}

export interface IRRInput {
  initialInvestment: number
  cashFlows: number[]
  guess?: number
}
export interface IRROutput {
  irr: number
}

export interface BreakEvenInput {
  fixedCosts: number
  variableCostPerUnit: number
  sellingPricePerUnit: number
}
export interface BreakEvenOutput {
  breakEvenUnits: number
  breakEvenRevenue: number
  contributionMarginPerUnit: number
  contributionMarginRatio: number
}

export interface TaxInput {
  annualIncome: number
  deductions: number
  filingStatus: 'single' | 'married' | 'headOfHousehold'
  taxYear: number
}
export interface TaxOutput {
  grossIncome: number
  taxableIncome: number
  totalTax: number
  effectiveTaxRate: number
  marginalTaxRate: number
  brackets: TaxBracketResult[]
}
export interface TaxBracketResult {
  rate: number
  from: number
  to: number
  taxInBracket: number
}

export interface InflationInput {
  amount: number
  years: number
  inflationRate: number
  direction: 'future' | 'present'
}
export interface InflationOutput {
  resultAmount: number
  cumulativeInflationRate: number
  purchasingPowerChange: number
}

export interface CurrencyConverterInput {
  amount: number
  fromCurrency: string
  toCurrency: string
  exchangeRate: number
}
export interface CurrencyConverterOutput {
  fromAmount: number
  toAmount: number
  fromCurrency: string
  toCurrency: string
  exchangeRate: number
}

export interface SalaryInput {
  amount: number
  period: 'hourly' | 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'annual'
  hoursPerWeek: number
  daysPerWeek: number
}
export interface SalaryOutput {
  hourly: number
  daily: number
  weekly: number
  biweekly: number
  monthly: number
  annual: number
}

export interface BudgetInput {
  incomeSources: { name: string; amount: number }[]
  expenseCategories: { name: string; amount: number; isFixed: boolean }[]
}
export interface BudgetOutput {
  totalIncome: number
  totalExpenses: number
  surplus: number
  surplusRatio: number
  expenseBreakdown: { name: string; amount: number; percentage: number; isFixed: boolean }[]
  topExpenseCategories: string[]
}

export interface CreditCardPayoffInput {
  balance: number
  apr: number
  monthlyPayment: number
}
export interface CreditCardPayoffOutput {
  monthsToPayoff: number
  totalInterest: number
  totalPayment: number
  payoffDate: string
  schedule: { month: number; payment: number; interest: number; principal: number; balance: number }[]
}

export interface SavingsGoalInput {
  targetAmount: number
  currentSavings: number
  monthlyContribution: number
  annualRate: number
}
export interface SavingsGoalOutput {
  monthsToGoal: number
  totalContributions: number
  totalInterestEarned: number
  finalBalance: number
  schedule: { month: number; balance: number; contribution: number; interest: number }[]
}

export interface BondYieldInput {
  faceValue: number
  currentPrice: number
  couponRate: number
  yearsToMaturity: number
  paymentsPerYear: number
}
export interface BondYieldOutput {
  currentYield: number
  yieldToMaturity: number
  annualCouponPayment: number
  capitalGainAtMaturity: number
}

export interface StockReturnInput {
  buyPrice: number
  sellPrice: number
  shares: number
  dividendsReceived: number
  holdingPeriodYears: number
  commissions?: number
}
export interface StockReturnOutput {
  totalReturn: number
  totalReturnPercent: number
  annualizedReturn: number
  capitalGain: number
  dividendIncome: number
  dividendYield: number
}

export interface DividendInput {
  currentAnnualDividend: number
  dividendGrowthRate: number
  years: number
  initialShares: number
  annualSharePurchases: number
  sharePrice: number
}
export interface DividendOutput {
  projectedAnnualIncome: number
  totalShares: number
  totalDividendIncome: number
  finalAnnualDividendPerShare: number
  schedule: { year: number; shares: number; dividendPerShare: number; annualIncome: number }[]
}

export interface BusinessValuationInput {
  annualRevenue: number
  annualEbitda: number
  revenueMultiple: number
  ebitdaMultiple: number
  growthRate: number
}
export interface BusinessValuationOutput {
  revenueBasedValuation: number
  ebitdaBasedValuation: number
  blendedValuation: number
  evToRevenue: number
  evToEbitda: number
}
