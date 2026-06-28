import {Calculator, CostOfLivingInput, CostOfLivingOutput} from "../types";

const CITY_INDICES: Record<string, number> = {
  // United States (NYC = 100 baseline)
  "New York": 100,
  "San Francisco": 95,
  "Los Angeles": 78,
  Chicago: 72,
  Houston: 62,
  Miami: 74,
  Seattle: 85,
  Boston: 88,
  Austin: 68,
  // United Kingdom
  London: 85,
  Manchester: 62,
  Birmingham: 58,
  Edinburgh: 64,
  Bristol: 60,
  // Australia
  Sydney: 82,
  Melbourne: 74,
  Brisbane: 68,
  Perth: 66,
  Adelaide: 60,
  // Canada
  Toronto: 76,
  Vancouver: 80,
  Montreal: 60,
  Calgary: 66,
  Ottawa: 62,
  // New Zealand
  Auckland: 72,
  Wellington: 68,
  Christchurch: 58,
  // India
  Mumbai: 30,
  Delhi: 26,
  Bangalore: 28,
  Chennai: 24,
  Hyderabad: 22,
  // Singapore
  Singapore: 84,
};

const EXPENSE_WEIGHTS = [
  {category: "Rent", weight: 0.3},
  {category: "Groceries", weight: 0.15},
  {category: "Transport", weight: 0.12},
  {category: "Dining Out", weight: 0.1},
  {category: "Utilities", weight: 0.08},
  {category: "Healthcare", weight: 0.07},
  {category: "Entertainment", weight: 0.06},
  {category: "Other", weight: 0.12},
];

export class CostOfLivingCalculator implements Calculator<CostOfLivingInput, CostOfLivingOutput> {
  name = "Cost of Living Calculator";
  description = "Compare cost of living between two cities and calculate salary adjustment";
  category = "budget" as const;

  calculate(input: CostOfLivingInput): CostOfLivingOutput {
    const sourceIdx = CITY_INDICES[input.sourceCity] ?? 70;
    const targetIdx = CITY_INDICES[input.targetCity] ?? 70;
    const ratio = sourceIdx > 0 ? targetIdx / sourceIdx : 1;
    const adjustedIncome = Math.round(input.monthlyIncome * ratio * 100) / 100;
    const costDifferencePercent = Math.round((ratio - 1) * 10000) / 100;
    const savingsDifference = Math.round((adjustedIncome - input.monthlyIncome) * 100) / 100;

    const expenseBreakdown = EXPENSE_WEIGHTS.map((e) => ({
      category: e.category,
      source: Math.round(input.monthlyIncome * e.weight * 100) / 100,
      target: Math.round(adjustedIncome * e.weight * 100) / 100,
    }));

    return {
      adjustedIncome,
      costDifferencePercent,
      sourceIndex: sourceIdx,
      targetIndex: targetIdx,
      savingsDifference,
      expenseBreakdown,
    };
  }
}

export const COST_OF_LIVING_CITIES = Object.keys(CITY_INDICES).sort();
