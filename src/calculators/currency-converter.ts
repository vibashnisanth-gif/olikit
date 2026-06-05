import { Calculator, CurrencyConverterInput, CurrencyConverterOutput } from '../types'

export class CurrencyConverterCalculator implements Calculator<CurrencyConverterInput, CurrencyConverterOutput> {
  name = 'Currency Converter'
  description = 'Converts an amount from one currency to another using an exchange rate'
  category = 'currency' as const

  calculate(input: CurrencyConverterInput): CurrencyConverterOutput {
    const { amount, fromCurrency, toCurrency, exchangeRate } = input
    const toAmount = amount * exchangeRate

    return {
      fromAmount: Math.round(amount * 100) / 100,
      toAmount: Math.round(toAmount * 100) / 100,
      fromCurrency: fromCurrency.toUpperCase(),
      toCurrency: toCurrency.toUpperCase(),
      exchangeRate,
    }
  }
}
