import { Calculator, BudgetInput, BudgetOutput } from '../types'

export class BudgetCalculator implements Calculator<BudgetInput, BudgetOutput> {
  name = 'Budget Calculator'
  description = 'Analyzes income and expenses to calculate surplus and spending breakdown'
  category = 'budget' as const

  calculate(input: BudgetInput): BudgetOutput {
    const { incomeSources, expenseCategories } = input
    const totalIncome = incomeSources.reduce((sum, s) => sum + s.amount, 0)
    const totalExpenses = expenseCategories.reduce((sum, e) => sum + e.amount, 0)
    const surplus = totalIncome - totalExpenses
    const surplusRatio = totalIncome > 0 ? (surplus / totalIncome) * 100 : 0

    const expenseBreakdown = expenseCategories.map(e => ({
      name: e.name,
      amount: e.amount,
      percentage: totalExpenses > 0 ? Math.round((e.amount / totalExpenses) * 10000) / 100 : 0,
      isFixed: e.isFixed,
    }))

    const topExpenseCategories = [...expenseCategories]
      .sort((a, b) => b.amount - a.amount)
      .slice(0, 5)
      .map(e => e.name)

    return {
      totalIncome: Math.round(totalIncome * 100) / 100,
      totalExpenses: Math.round(totalExpenses * 100) / 100,
      surplus: Math.round(surplus * 100) / 100,
      surplusRatio: Math.round(surplusRatio * 100) / 100,
      expenseBreakdown,
      topExpenseCategories,
    }
  }
}
