import type {Calculator} from "@/types";
import {CompoundInterestCalculator} from "@/calculators/compound-interest";
import {LoanAmortizationCalculator} from "@/calculators/loan-amortization";
import {MortgageCalculator} from "@/calculators/mortgage";
import {RetirementSavingsCalculator} from "@/calculators/retirement-savings";
import {SalaryCalculator} from "@/calculators/salary";
import {BreakEvenCalculator} from "@/calculators/break-even";
import {TaxCalculator} from "@/calculators/tax";
import {CostOfLivingCalculator, COST_OF_LIVING_CITIES} from "@/calculators/cost-of-living";

import type {
  CompoundInterestInput,
  CompoundInterestOutput,
  LoanAmortizationInput,
  LoanAmortizationOutput,
  MortgageInput,
  MortgageOutput,
  RetirementSavingsInput,
  RetirementSavingsOutput,
  SalaryInput,
  SalaryOutput,
  BreakEvenInput,
  BreakEvenOutput,
  TaxInput,
  TaxOutput,
  CostOfLivingInput,
  CostOfLivingOutput,
} from "@/types";

export interface CalculatorField {
  name: string;
  label: string;
  type: "number" | "select" | "currency" | "percentage";
  defaultValue: number | string;
  min?: number;
  max?: number;
  step?: number;
  options?: {label: string; value: string | number}[];
}

export interface ResultGroup {
  title: string;
  items: {label: string; value: string; highlight?: boolean}[];
}

export type CalculatorValues = Record<string, number | string>;

export interface CalculatorLocale {
  slug: string;
  code: string;
  currencySymbol: string;
}

export interface CalculatorConfig<I extends object, O> {
  calculator: Calculator<I, O>;
  fields: CalculatorField[];
  formatResult(output: O, locale: CalculatorLocale): ResultGroup[];
  calculateResult(input: CalculatorValues, locale: CalculatorLocale): ResultGroup[];
}

type SupportedCalculatorConfig =
  | CalculatorConfig<SalaryInput, SalaryOutput>
  | CalculatorConfig<TaxInput, TaxOutput>
  | CalculatorConfig<MortgageInput, MortgageOutput>
  | CalculatorConfig<CompoundInterestInput, CompoundInterestOutput>
  | CalculatorConfig<RetirementSavingsInput, RetirementSavingsOutput>
  | CalculatorConfig<LoanAmortizationInput, LoanAmortizationOutput>
  | CalculatorConfig<BreakEvenInput, BreakEvenOutput>
  | CalculatorConfig<CostOfLivingInput, CostOfLivingOutput>;

function defineCalculatorConfig<I extends object, O>(
  config: Omit<CalculatorConfig<I, O>, "calculateResult">
): CalculatorConfig<I, O> {
  return {
    ...config,
    calculateResult(input: CalculatorValues, locale: CalculatorLocale): ResultGroup[] {
      const inputWithLocale = {...input, locale: locale.slug} as I;
      return config.formatResult(config.calculator.calculate(inputWithLocale), locale);
    },
  };
}

const LOCALE_TAG_MAP: Record<string, string> = {
  us: "en-US",
  uk: "en-GB",
  au: "en-AU",
  ca: "en-CA",
  nz: "en-NZ",
  in: "en-IN",
  sg: "en-SG",
};

const CURRENCY_SYMBOL_MAP: Record<string, string> = {
  us: "$",
  uk: "\u00a3",
  au: "A$",
  ca: "C$",
  nz: "NZ$",
  in: "\u20b9",
  sg: "S$",
};

function fmt(n: number, locale: CalculatorLocale): string {
  const tag = LOCALE_TAG_MAP[locale.slug] ?? "en-US";
  return n.toLocaleString(tag, {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

function fmtCurrency(n: number, locale: CalculatorLocale): string {
  const symbol = CURRENCY_SYMBOL_MAP[locale.slug] ?? "$";
  return `${symbol}${fmt(n, locale)}`;
}

function fmtPct(n: number): string {
  return `${n.toFixed(2)}%`;
}

const calculatorConfigs: Record<string, SupportedCalculatorConfig> = {
  "salary-calculator": defineCalculatorConfig<SalaryInput, SalaryOutput>({
    calculator: new SalaryCalculator(),
    fields: [
      {name: "amount", label: "Amount", type: "currency", defaultValue: 60000, min: 0},
      {
        name: "period",
        label: "Pay Period",
        type: "select",
        defaultValue: "annual",
        options: [
          {label: "Annual", value: "annual"},
          {label: "Monthly", value: "monthly"},
          {label: "Biweekly", value: "biweekly"},
          {label: "Weekly", value: "weekly"},
          {label: "Daily", value: "daily"},
          {label: "Hourly", value: "hourly"},
        ],
      },
      {
        name: "hoursPerWeek",
        label: "Hours per Week",
        type: "number",
        defaultValue: 40,
        min: 1,
        max: 168,
        step: 1,
      },
      {
        name: "daysPerWeek",
        label: "Days per Week",
        type: "number",
        defaultValue: 5,
        min: 1,
        max: 7,
        step: 1,
      },
    ],
    formatResult(output: SalaryOutput, locale: CalculatorLocale): ResultGroup[] {
      return [
        {
          title: "Salary Breakdown",
          items: [
            {label: "Annual", value: fmtCurrency(output.annual, locale), highlight: true},
            {label: "Monthly", value: fmtCurrency(output.monthly, locale)},
            {label: "Biweekly", value: fmtCurrency(output.biweekly, locale)},
            {label: "Weekly", value: fmtCurrency(output.weekly, locale)},
            {label: "Daily", value: fmtCurrency(output.daily, locale)},
            {label: "Hourly", value: fmtCurrency(output.hourly, locale)},
          ],
        },
      ];
    },
  }),
  "tax-calculator": defineCalculatorConfig<TaxInput, TaxOutput>({
    calculator: new TaxCalculator(),
    fields: [
      {name: "annualIncome", label: "Annual Income", type: "currency", defaultValue: 80000, min: 0},
      {name: "deductions", label: "Deductions", type: "currency", defaultValue: 14600, min: 0},
      {
        name: "filingStatus",
        label: "Filing Status",
        type: "select",
        defaultValue: "single",
        options: [
          {label: "Single", value: "single"},
          {label: "Married", value: "married"},
          {label: "Head of Household", value: "headOfHousehold"},
        ],
      },
      {
        name: "taxYear",
        label: "Tax Year",
        type: "number",
        defaultValue: 2026,
        min: 2025,
        max: 2027,
        step: 1,
      },
    ],
    formatResult(output: TaxOutput, locale: CalculatorLocale): ResultGroup[] {
      return [
        {
          title: "Tax Summary",
          items: [
            {label: "Gross Income", value: fmtCurrency(output.grossIncome, locale)},
            {label: "Taxable Income", value: fmtCurrency(output.taxableIncome, locale)},
            {label: "Total Tax", value: fmtCurrency(output.totalTax, locale), highlight: true},
            {label: "Effective Tax Rate", value: fmtPct(output.effectiveTaxRate)},
            {label: "Marginal Tax Rate", value: fmtPct(output.marginalTaxRate)},
          ],
        },
        {
          title: "Tax Brackets",
          items: output.brackets.map((b) => ({
            label: `${fmtPct(b.rate)} (${fmtCurrency(b.from, locale)} - ${fmtCurrency(b.to, locale)})`,
            value: fmtCurrency(b.taxInBracket, locale),
          })),
        },
      ];
    },
  }),
  "mortgage-calculator": defineCalculatorConfig<MortgageInput, MortgageOutput>({
    calculator: new MortgageCalculator(),
    fields: [
      {name: "homePrice", label: "Home Price", type: "currency", defaultValue: 500000, min: 0},
      {name: "downPayment", label: "Down Payment", type: "currency", defaultValue: 100000, min: 0},
      {
        name: "annualRate",
        label: "Annual Interest Rate",
        type: "percentage",
        defaultValue: 7,
        min: 0,
        max: 30,
        step: 0.1,
      },
      {
        name: "termYears",
        label: "Loan Term (Years)",
        type: "number",
        defaultValue: 30,
        min: 1,
        max: 50,
        step: 1,
      },
      {
        name: "annualPropertyTax",
        label: "Annual Property Tax",
        type: "currency",
        defaultValue: 6000,
        min: 0,
      },
      {
        name: "annualInsurance",
        label: "Annual Insurance",
        type: "currency",
        defaultValue: 1200,
        min: 0,
      },
      {name: "monthlyHOA", label: "Monthly HOA", type: "currency", defaultValue: 200, min: 0},
    ],
    formatResult(output: MortgageOutput, locale: CalculatorLocale): ResultGroup[] {
      return [
        {
          title: "Monthly Payment",
          items: [
            {
              label: "Principal & Interest",
              value: fmtCurrency(output.monthlyPrincipalAndInterest, locale),
            },
            {label: "Property Tax", value: fmtCurrency(output.monthlyPropertyTax, locale)},
            {label: "Insurance", value: fmtCurrency(output.monthlyInsurance, locale)},
            {label: "HOA", value: fmtCurrency(output.monthlyHOA, locale)},
            {
              label: "Total Monthly",
              value: fmtCurrency(output.totalMonthlyPayment, locale),
              highlight: true,
            },
          ],
        },
        {
          title: "Loan Summary",
          items: [
            {label: "Loan Amount", value: fmtCurrency(output.loanAmount, locale)},
            {label: "Total Interest", value: fmtCurrency(output.totalInterest, locale)},
            {label: "Total Payment", value: fmtCurrency(output.totalPayment, locale)},
            {label: "LTV Ratio", value: fmtPct(output.loanToValueRatio)},
          ],
        },
      ];
    },
  }),
  "investment-calculator": defineCalculatorConfig<CompoundInterestInput, CompoundInterestOutput>({
    calculator: new CompoundInterestCalculator(),
    fields: [
      {
        name: "principal",
        label: "Initial Investment",
        type: "currency",
        defaultValue: 10000,
        min: 0,
      },
      {
        name: "monthlyContribution",
        label: "Monthly Contribution",
        type: "currency",
        defaultValue: 500,
        min: 0,
      },
      {
        name: "annualRate",
        label: "Annual Return Rate",
        type: "percentage",
        defaultValue: 8,
        min: 0,
        max: 100,
        step: 0.1,
      },
      {
        name: "years",
        label: "Investment Period (Years)",
        type: "number",
        defaultValue: 10,
        min: 1,
        max: 100,
        step: 1,
      },
      {
        name: "compoundsPerYear",
        label: "Compounds per Year",
        type: "select",
        defaultValue: 12,
        options: [
          {label: "Annually (1)", value: 1},
          {label: "Semi-annually (2)", value: 2},
          {label: "Quarterly (4)", value: 4},
          {label: "Monthly (12)", value: 12},
          {label: "Daily (365)", value: 365},
        ],
      },
    ],
    formatResult(output: CompoundInterestOutput, locale: CalculatorLocale): ResultGroup[] {
      return [
        {
          title: "Investment Results",
          items: [
            {
              label: "Future Value",
              value: fmtCurrency(output.futureValue, locale),
              highlight: true,
            },
            {label: "Total Contributions", value: fmtCurrency(output.totalContributions, locale)},
            {label: "Total Interest Earned", value: fmtCurrency(output.totalInterest, locale)},
            {label: "Effective Annual Rate", value: fmtPct(output.effectiveAnnualRate)},
          ],
        },
      ];
    },
  }),
  "retirement-calculator": defineCalculatorConfig<RetirementSavingsInput, RetirementSavingsOutput>({
    calculator: new RetirementSavingsCalculator(),
    fields: [
      {
        name: "currentAge",
        label: "Current Age",
        type: "number",
        defaultValue: 30,
        min: 18,
        max: 80,
        step: 1,
      },
      {
        name: "retirementAge",
        label: "Retirement Age",
        type: "number",
        defaultValue: 65,
        min: 30,
        max: 90,
        step: 1,
      },
      {
        name: "lifeExpectancy",
        label: "Life Expectancy",
        type: "number",
        defaultValue: 90,
        min: 50,
        max: 120,
        step: 1,
      },
      {
        name: "currentSavings",
        label: "Current Savings",
        type: "currency",
        defaultValue: 50000,
        min: 0,
      },
      {
        name: "monthlyContribution",
        label: "Monthly Contribution",
        type: "currency",
        defaultValue: 1000,
        min: 0,
      },
      {
        name: "expectedReturnRate",
        label: "Expected Return Rate",
        type: "percentage",
        defaultValue: 7,
        min: 0,
        max: 30,
        step: 0.1,
      },
      {
        name: "currentAnnualIncome",
        label: "Current Annual Income",
        type: "currency",
        defaultValue: 80000,
        min: 0,
      },
      {
        name: "desiredReplacementRate",
        label: "Desired Income Replacement Rate",
        type: "percentage",
        defaultValue: 80,
        min: 0,
        max: 100,
        step: 1,
      },
      {
        name: "inflationRate",
        label: "Inflation Rate",
        type: "percentage",
        defaultValue: 3,
        min: 0,
        max: 20,
        step: 0.1,
      },
    ],
    formatResult(output: RetirementSavingsOutput, locale: CalculatorLocale): ResultGroup[] {
      return [
        {
          title: "Retirement Outlook",
          items: [
            {
              label: "Savings at Retirement",
              value: fmtCurrency(output.savingsAtRetirement, locale),
              highlight: true,
            },
            {
              label: "Monthly Retirement Income",
              value: fmtCurrency(output.monthlyRetirementIncome, locale),
            },
            {label: "Target Savings Needed", value: fmtCurrency(output.targetSavings, locale)},
            {label: "Savings Gap", value: fmtCurrency(output.savingsGap, locale)},
            {
              label: "Status",
              value: output.isOnTrack ? "On Track" : "Behind Target",
              highlight: output.isOnTrack,
            },
            {label: "Withdrawal Rate", value: fmtPct(output.withdrawalRate)},
          ],
        },
      ];
    },
  }),
  "business-loan-calculator": defineCalculatorConfig<LoanAmortizationInput, LoanAmortizationOutput>(
    {
      calculator: new LoanAmortizationCalculator(),
      fields: [
        {name: "loanAmount", label: "Loan Amount", type: "currency", defaultValue: 100000, min: 0},
        {
          name: "annualRate",
          label: "Annual Interest Rate",
          type: "percentage",
          defaultValue: 8,
          min: 0,
          max: 30,
          step: 0.1,
        },
        {
          name: "termYears",
          label: "Loan Term (Years)",
          type: "number",
          defaultValue: 5,
          min: 1,
          max: 50,
          step: 1,
        },
        {
          name: "paymentsPerYear",
          label: "Payments per Year",
          type: "select",
          defaultValue: 12,
          options: [
            {label: "Monthly (12)", value: 12},
            {label: "Quarterly (4)", value: 4},
            {label: "Semi-annually (2)", value: 2},
            {label: "Annually (1)", value: 1},
          ],
        },
      ],
      formatResult(output: LoanAmortizationOutput, locale: CalculatorLocale): ResultGroup[] {
        return [
          {
            title: "Payment Summary",
            items: [
              {
                label: "Payment per Period",
                value: fmtCurrency(output.monthlyPayment, locale),
                highlight: true,
              },
              {label: "Total Payment", value: fmtCurrency(output.totalPayment, locale)},
              {label: "Total Interest", value: fmtCurrency(output.totalInterest, locale)},
              {label: "Payoff Date", value: output.payoffDate},
            ],
          },
          {
            title: `Amortization Schedule (${output.schedule.length} payments)`,
            items: output.schedule.slice(0, 12).map((row) => ({
              label: `Period ${row.period}`,
              value: `P: ${fmtCurrency(row.principal, locale)} | I: ${fmtCurrency(row.interest, locale)} | B: ${fmtCurrency(row.balance, locale)}`,
            })),
          },
        ];
      },
    }
  ),
  "break-even-calculator": defineCalculatorConfig<BreakEvenInput, BreakEvenOutput>({
    calculator: new BreakEvenCalculator(),
    fields: [
      {name: "fixedCosts", label: "Fixed Costs", type: "currency", defaultValue: 50000, min: 0},
      {
        name: "variableCostPerUnit",
        label: "Variable Cost per Unit",
        type: "currency",
        defaultValue: 10,
        min: 0,
      },
      {
        name: "sellingPricePerUnit",
        label: "Selling Price per Unit",
        type: "currency",
        defaultValue: 30,
        min: 0,
      },
    ],
    formatResult(output: BreakEvenOutput, locale: CalculatorLocale): ResultGroup[] {
      return [
        {
          title: "Break-Even Analysis",
          items: [
            {
              label: "Break-Even Units",
              value:
                output.breakEvenUnits === Infinity
                  ? "Never"
                  : fmtBreakEvenUnits(output.breakEvenUnits, locale),
              highlight: true,
            },
            {label: "Break-Even Revenue", value: fmtCurrency(output.breakEvenRevenue, locale)},
            {
              label: "Contribution Margin per Unit",
              value: fmtCurrency(output.contributionMarginPerUnit, locale),
            },
            {label: "Contribution Margin Ratio", value: fmtPct(output.contributionMarginRatio)},
          ],
        },
      ];
    },
  }),
  "cost-of-living-calculator": defineCalculatorConfig<CostOfLivingInput, CostOfLivingOutput>({
    calculator: new CostOfLivingCalculator(),
    fields: [
      {
        name: "monthlyIncome",
        label: "Monthly Income",
        type: "currency",
        defaultValue: 5000,
        min: 0,
      },
      {
        name: "sourceCity",
        label: "From City",
        type: "select",
        defaultValue: "New York",
        options: COST_OF_LIVING_CITIES.map((c) => ({label: c, value: c})),
      },
      {
        name: "targetCity",
        label: "To City",
        type: "select",
        defaultValue: "London",
        options: COST_OF_LIVING_CITIES.map((c) => ({label: c, value: c})),
      },
    ],
    formatResult(output: CostOfLivingOutput, locale: CalculatorLocale): ResultGroup[] {
      return [
        {
          title: "Salary Adjustment",
          items: [
            {
              label: "Adjusted Monthly Income",
              value: fmtCurrency(output.adjustedIncome, locale),
              highlight: true,
            },
            {
              label: "Cost Difference",
              value: `${output.costDifferencePercent > 0 ? "+" : ""}${output.costDifferencePercent}%`,
            },
            {
              label: "Monthly Savings Difference",
              value: `${output.savingsDifference > 0 ? "+" : ""}${fmtCurrency(output.savingsDifference, locale)}`,
            },
            {label: "Source City Index", value: `${output.sourceIndex}`},
            {label: "Target City Index", value: `${output.targetIndex}`},
          ],
        },
        {
          title: "Expense Breakdown",
          items: output.expenseBreakdown.map((e) => ({
            label: e.category,
            value: `${fmtCurrency(e.source, locale)} → ${fmtCurrency(e.target, locale)}`,
          })),
        },
      ];
    },
  }),
};

function fmtBreakEvenUnits(n: number, locale: CalculatorLocale): string {
  const tag = LOCALE_TAG_MAP[locale.slug] ?? "en-US";
  return n.toLocaleString(tag);
}

export function getCalculatorConfig(toolSlug: string): SupportedCalculatorConfig | undefined {
  return calculatorConfigs[toolSlug];
}

export function getAllToolSlugs(): string[] {
  return Object.keys(calculatorConfigs);
}
