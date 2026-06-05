import type { StateDataPoints } from "@/types/seo"

export interface StateDataSet {
  stateSlug: string
  stateName: string
  dataPoints: StateDataPoints
  source: string
}

export const stateDataSets: StateDataSet[] = [
  {
    stateSlug: "california",
    stateName: "California",
    dataPoints: {
      averageSalary: 73220,
      medianHouseholdIncome: 92000,
      minimumWage: 16.00,
      stateIncomeTaxRate: "1.0%–13.3% (progressive)",
      effectivePropertyTaxRate: 0.71,
      medianHomeValue: 750000,
      costOfLivingIndex: 142,
    },
    source: "Bureau of Labor Statistics, US Census Bureau, California Department of Tax and Fee Administration (2024)",
  },
  {
    stateSlug: "texas",
    stateName: "Texas",
    dataPoints: {
      averageSalary: 60000,
      medianHouseholdIncome: 73000,
      minimumWage: 7.25,
      stateIncomeTaxRate: "None",
      effectivePropertyTaxRate: 1.60,
      medianHomeValue: 310000,
      costOfLivingIndex: 92,
    },
    source: "Bureau of Labor Statistics, US Census Bureau, Texas Tax Foundation (2024)",
  },
  {
    stateSlug: "florida",
    stateName: "Florida",
    dataPoints: {
      averageSalary: 55000,
      medianHouseholdIncome: 67000,
      minimumWage: 13.00,
      stateIncomeTaxRate: "None",
      effectivePropertyTaxRate: 0.80,
      medianHomeValue: 395000,
      costOfLivingIndex: 100,
    },
    source: "Bureau of Labor Statistics, US Census Bureau, Florida Department of Revenue (2024)",
  },
  {
    stateSlug: "new-york",
    stateName: "New York",
    dataPoints: {
      averageSalary: 68000,
      medianHouseholdIncome: 81000,
      minimumWage: 16.00,
      stateIncomeTaxRate: "4.0%–10.9% (progressive)",
      effectivePropertyTaxRate: 1.40,
      medianHomeValue: 370000,
      costOfLivingIndex: 130,
    },
    source: "Bureau of Labor Statistics, US Census Bureau, New York Department of Taxation and Finance (2024)",
  },
  {
    stateSlug: "illinois",
    stateName: "Illinois",
    dataPoints: {
      averageSalary: 62000,
      medianHouseholdIncome: 78000,
      minimumWage: 14.00,
      stateIncomeTaxRate: "4.95% flat",
      effectivePropertyTaxRate: 2.07,
      medianHomeValue: 250000,
      costOfLivingIndex: 92,
    },
    source: "Bureau of Labor Statistics, US Census Bureau, Illinois Department of Revenue (2024)",
  },
  {
    stateSlug: "pennsylvania",
    stateName: "Pennsylvania",
    dataPoints: {
      averageSalary: 56000,
      medianHouseholdIncome: 72000,
      minimumWage: 7.25,
      stateIncomeTaxRate: "3.07% flat",
      effectivePropertyTaxRate: 1.49,
      medianHomeValue: 240000,
      costOfLivingIndex: 97,
    },
    source: "Bureau of Labor Statistics, US Census Bureau, Pennsylvania Department of Revenue (2024)",
  },
  {
    stateSlug: "ohio",
    stateName: "Ohio",
    dataPoints: {
      averageSalary: 55000,
      medianHouseholdIncome: 66000,
      minimumWage: 10.45,
      stateIncomeTaxRate: "0%–3.99% (progressive)",
      effectivePropertyTaxRate: 1.36,
      medianHomeValue: 200000,
      costOfLivingIndex: 88,
    },
    source: "Bureau of Labor Statistics, US Census Bureau, Ohio Department of Taxation (2024)",
  },
  {
    stateSlug: "georgia",
    stateName: "Georgia",
    dataPoints: {
      averageSalary: 58000,
      medianHouseholdIncome: 71000,
      minimumWage: 7.25,
      stateIncomeTaxRate: "1.0%–5.75% (progressive)",
      effectivePropertyTaxRate: 0.80,
      medianHomeValue: 320000,
      costOfLivingIndex: 94,
    },
    source: "Bureau of Labor Statistics, US Census Bureau, Georgia Department of Revenue (2024)",
  },
  {
    stateSlug: "north-carolina",
    stateName: "North Carolina",
    dataPoints: {
      averageSalary: 58000,
      medianHouseholdIncome: 66000,
      minimumWage: 7.25,
      stateIncomeTaxRate: "4.75% flat",
      effectivePropertyTaxRate: 0.70,
      medianHomeValue: 310000,
      costOfLivingIndex: 96,
    },
    source: "Bureau of Labor Statistics, US Census Bureau, North Carolina Department of Revenue (2024)",
  },
  {
    stateSlug: "washington",
    stateName: "Washington",
    dataPoints: {
      averageSalary: 77000,
      medianHouseholdIncome: 91000,
      minimumWage: 16.28,
      stateIncomeTaxRate: "None",
      effectivePropertyTaxRate: 0.80,
      medianHomeValue: 570000,
      costOfLivingIndex: 120,
    },
    source: "Bureau of Labor Statistics, US Census Bureau, Washington State Department of Revenue (2024)",
  },
]

export function getStateDataBySlug(slug: string): StateDataSet | undefined {
  return stateDataSets.find((s) => s.stateSlug === slug)
}
