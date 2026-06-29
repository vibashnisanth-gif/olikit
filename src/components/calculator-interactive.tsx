'use client'

import { useState, useMemo, useCallback } from 'react'
import { getCalculatorConfig } from '@/lib/calculator-registry'
import type { CalculatorField, ResultGroup } from '@/lib/calculator-registry'
import { CalculatorShare } from '@/components/calculator-share'
import { getLocale } from '@/lib/seo/locales'

const CURRENCY_SYMBOLS: Record<string, string> = {
  us: '$',
  uk: '\u00a3',
  au: 'A$',
  ca: 'C$',
  nz: 'NZ$',
  in: '\u20b9',
  sg: 'S$',
}

type Props = {
  toolSlug: string
  localeSlug: string
}

function CalculatorFieldInput({
  field,
  value,
  onChange,
  currencySymbol,
  inputId,
}: {
  field: CalculatorField
  value: number | string
  onChange: (name: string, value: number | string) => void
  currencySymbol: string
  inputId?: string
}) {
  if (field.type === 'select') {
    return (
      <select
        id={inputId}
        className="h-10 w-full rounded-md border border-zinc-300 bg-white px-3 text-sm text-zinc-950 outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
        value={String(value)}
        onChange={(e) => onChange(field.name, e.target.value)}
      >
        {field.options?.map((opt) => (
          <option key={String(opt.value)} value={String(opt.value)}>
            {opt.label}
          </option>
        ))}
      </select>
    )
  }

  return (
    <div className="relative">
      {(field.type === 'currency' || field.type === 'percentage') && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium text-zinc-500">
          {field.type === 'currency' ? currencySymbol : '%'}
        </span>
      )}
      <input
        id={inputId}
        type="number"
        className={`h-10 w-full rounded-md border border-zinc-300 bg-white px-3 text-sm text-zinc-950 outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200 ${field.type === 'currency' || field.type === 'percentage' ? 'pl-7' : ''}`}
        value={value}
        min={field.min}
        max={field.max}
        step={field.step ?? 'any'}
        onChange={(e) => onChange(field.name, e.target.value === '' ? '' : parseFloat(e.target.value) || 0)}
      />
    </div>
  )
}

function ResultCard({ group }: { group: ResultGroup }) {
  return (
    <div className="overflow-hidden rounded-md border border-zinc-200 bg-white">
      <div className="border-b border-zinc-200 bg-zinc-50 px-4 py-2">
        <h3 className="text-sm font-semibold text-zinc-800">{group.title}</h3>
      </div>
      <div className="divide-y divide-zinc-100">
        {group.items.map((item, i) => (
          <div
            key={i}
            className={`flex items-start justify-between gap-4 px-4 py-2.5 text-sm ${item.highlight ? 'bg-blue-50 font-semibold' : ''}`}
          >
            <span className="text-zinc-600">{item.label}</span>
            <span className={`text-right tabular-nums ${item.highlight ? 'text-blue-800' : 'text-zinc-950'}`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function CalculatorInteractive({ toolSlug, localeSlug }: Props) {
  const config = getCalculatorConfig(toolSlug)
  const currencySymbol = CURRENCY_SYMBOLS[localeSlug] ?? '$'
  const locale = useMemo(() => {
    const localeData = getLocale(localeSlug)
    return {
      slug: localeSlug,
      code: localeData?.code ?? `en-${localeSlug.toUpperCase()}`,
      currencySymbol,
    }
  }, [localeSlug, currencySymbol])

  const initialValues = useMemo(() => {
    if (!config) return {}

    return Object.fromEntries(
      config.fields.map((field) => [field.name, field.defaultValue]),
    ) as Record<string, number | string>
  }, [config])
  const [overrides, setOverrides] = useState<Record<string, number | string>>({})
  const values = useMemo(
    () => ({ ...initialValues, ...overrides }),
    [initialValues, overrides],
  )

  const handleChange = useCallback((name: string, value: number | string) => {
    setOverrides((prev) => ({ ...prev, [name]: value }))
  }, [])

  const calculation = useMemo(() => {
    if (!config) return { results: null, error: null }

    try {
      const input = { ...values }
      return { results: config.calculateResult(input, locale), error: null }
    } catch (e) {
      return {
        results: null,
        error: e instanceof Error ? e.message : 'Calculation failed',
      }
    }
  }, [config, values, locale])

  if (!config) return null

  return (
    <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
      <div className="border-b border-zinc-200 bg-zinc-950 px-5 py-4 sm:px-6">
        <h2 className="text-lg font-bold text-white">
          {config.calculator.name}
        </h2>
        <p className="mt-1 max-w-2xl text-sm text-zinc-300">{config.calculator.description}</p>
      </div>

      <div className="grid gap-0 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="space-y-4 border-b border-zinc-200 p-5 md:border-b-0 md:border-r sm:p-6">
          <h3 className="text-sm font-semibold uppercase text-zinc-500">Inputs</h3>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
            {config.fields.map((field) => (
              <div key={field.name}>
                <label htmlFor={`calc-${field.name}`} className="mb-1.5 block text-sm font-medium text-zinc-700">
                  {field.label}
                </label>
                <CalculatorFieldInput
                  field={field}
                  value={values[field.name] ?? field.defaultValue}
                  onChange={handleChange}
                  currencySymbol={currencySymbol}
                  inputId={`calc-${field.name}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 bg-zinc-50/70 p-5 sm:p-6">
          <h3 className="text-sm font-semibold uppercase text-zinc-500">Results</h3>
          {calculation.error && (
            <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {calculation.error}
            </div>
          )}
          {calculation.results && (
            <div className="space-y-3">
              {calculation.results.map((group, i) => (
                <ResultCard key={i} group={group} />
              ))}
              <CalculatorShare
                toolSlug={toolSlug}
                localeSlug={localeSlug}
                inputValues={values as Record<string, number | string>}
                resultSummary={calculation.results.map(g => `${g.title}: ${g.items.map(i => `${i.label}: ${i.value}`).join(', ')}`).join(' | ')}
              />
            </div>
          )}
          {!calculation.results && !calculation.error && (
            <div className="rounded-md border border-dashed border-zinc-300 bg-white p-8 text-center text-sm text-zinc-500">
              Adjust inputs to see results
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
