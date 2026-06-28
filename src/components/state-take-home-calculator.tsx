"use client";

import {useState, useMemo} from "react";
import {TaxCalculator} from "@/calculators/tax";
import {computeStateTax} from "@/lib/state-tax";
import {
  getStateName,
  hasStateTax,
  ALL_STATE_SLUGS,
  STATE_NAMES,
} from "@/lib/content/state-tax-brackets";
import {formatSalary} from "@/lib/currency";

const FICA_SS_RATE = 6.2;
const FICA_SS_MAX = 176100;
const FICA_MEDICARE_RATE = 1.45;

function computeFica(gross: number) {
  const ss = (Math.min(gross, FICA_SS_MAX) * FICA_SS_RATE) / 100;
  const medicare = (gross * FICA_MEDICARE_RATE) / 100;
  return Math.round((ss + medicare) * 100) / 100;
}

export function StateTakeHomeCalculator({stateSlug}: {stateSlug: string}) {
  const [salary, setSalary] = useState(75000);
  const [filingStatus, setFilingStatus] = useState<"single" | "married">("single");
  const taxCalc = useMemo(() => new TaxCalculator(), []);
  const stateName = getStateName(stateSlug);

  const result = useMemo(() => {
    // Federal tax
    const fedResult = taxCalc.calculate({
      annualIncome: salary,
      deductions: filingStatus === "married" ? 29200 : 14600,
      filingStatus,
      taxYear: 2026,
      locale: "us",
    } as never);

    // State tax
    const stateResult = computeStateTax(stateSlug, salary);

    // FICA
    const fica = computeFica(salary);

    const stateTax = stateResult?.stateTax ?? 0;
    const totalTax = fedResult.totalTax + stateTax + fica;
    const takeHome = salary - totalTax;

    return {
      gross: salary,
      federalTax: fedResult.totalTax,
      federalRate: fedResult.effectiveTaxRate,
      stateTax,
      stateRate: stateResult?.effectiveRate ?? 0,
      stateMarginalRate: stateResult?.marginalRate ?? 0,
      fica,
      totalTax,
      takeHome,
      takeHomeMonthly: Math.round(takeHome / 12),
      effectiveRate: salary > 0 ? (totalTax / salary) * 100 : 0,
      stateBrackets: stateResult?.brackets ?? [],
    };
  }, [salary, filingStatus, stateSlug, taxCalc]);

  return (
    <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
      <h2 className="text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl">
        {stateName} Take-Home Pay Calculator
      </h2>
      <p className="mt-2 text-sm leading-6 text-zinc-500">
        Enter your salary to see federal tax, {stateName} state tax, and FICA deductions.
      </p>

      {/* Inputs */}
      <div className="mt-6 flex flex-wrap items-end gap-4">
        <div>
          <label htmlFor="sth-salary" className="mb-1 block text-xs font-medium text-zinc-500">
            Annual gross salary (USD)
          </label>
          <div className="flex items-center">
            <span className="rounded-l-lg border border-r-0 border-zinc-300 bg-zinc-50 px-3 py-2.5 text-sm text-zinc-400">
              $
            </span>
            <input
              id="sth-salary"
              type="number"
              value={salary}
              onChange={(e) => setSalary(Math.max(0, Number(e.target.value)))}
              className="w-36 rounded-r-lg border border-zinc-300 px-3 py-2.5 text-sm font-semibold text-zinc-950 outline-none focus:border-zinc-500 sm:w-44"
              min={0}
              step={1000}
            />
          </div>
        </div>
        <div>
          <label htmlFor="sth-status" className="mb-1 block text-xs font-medium text-zinc-500">
            Filing status
          </label>
          <select
            id="sth-status"
            value={filingStatus}
            onChange={(e) => setFilingStatus(e.target.value as "single" | "married")}
            className="rounded-lg border border-zinc-300 px-3 py-2.5 text-sm font-medium text-zinc-700 outline-none focus:border-zinc-500"
          >
            <option value="single">Single</option>
            <option value="married">Married filing jointly</option>
          </select>
        </div>
      </div>

      {/* Take-home highlight */}
      <div className="mt-8 rounded-lg bg-zinc-50 px-6 py-4">
        <p className="text-sm text-zinc-500">Your estimated take-home pay in {stateName}</p>
        <p className="mt-1 text-3xl font-bold text-zinc-950 tabular-nums">
          {formatSalary(result.takeHome, "USD")}
          <span className="ml-2 text-base font-normal text-zinc-400">/year</span>
        </p>
        <p className="mt-1 text-sm text-zinc-500">
          {formatSalary(result.takeHomeMonthly, "USD")}/month · Effective tax rate:{" "}
          {result.effectiveRate.toFixed(1)}%
        </p>
      </div>

      {/* Breakdown table */}
      <div className="mt-6 divide-y divide-zinc-100 rounded-lg border border-zinc-200">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-sm text-zinc-600">Gross salary</span>
          <span className="text-sm font-semibold tabular-nums text-zinc-950">
            {formatSalary(result.gross, "USD")}
          </span>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-sm text-zinc-600">Federal income tax</span>
          <span className="text-sm font-semibold tabular-nums text-red-600">
            -{formatSalary(result.federalTax, "USD")}
          </span>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-sm text-zinc-600">
            {stateName} state tax{" "}
            {hasStateTax(stateSlug) ? `(${result.stateMarginalRate}% marginal)` : "(no income tax)"}
          </span>
          <span className="text-sm font-semibold tabular-nums text-red-600">
            -{formatSalary(result.stateTax, "USD")}
          </span>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-sm text-zinc-600">FICA (Social Security + Medicare)</span>
          <span className="text-sm font-semibold tabular-nums text-red-600">
            -{formatSalary(result.fica, "USD")}
          </span>
        </div>
        <div className="flex items-center justify-between bg-zinc-50 px-4 py-3">
          <span className="text-sm font-semibold text-zinc-950">Take-home pay</span>
          <span className="text-sm font-bold tabular-nums text-emerald-600">
            {formatSalary(result.takeHome, "USD")}
          </span>
        </div>
      </div>

      {/* State brackets */}
      {result.stateBrackets.length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-zinc-950">
            {stateName} income tax brackets (single)
          </h3>
          <div className="mt-2 divide-y divide-zinc-100 rounded-lg border border-zinc-200">
            {result.stateBrackets.map((b, i) => (
              <div key={i} className="flex items-center justify-between px-4 py-2.5 text-sm">
                <span className="text-zinc-600">{b.rate}%</span>
                <span className="tabular-nums text-zinc-500">
                  {b.from === 0 ? "$0" : formatSalary(b.from, "USD")} –{" "}
                  {b.to === Infinity ? "above" : formatSalary(b.to, "USD")}
                </span>
                <span className="font-medium tabular-nums text-zinc-950">
                  {formatSalary(b.tax, "USD")}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <p className="mt-4 text-[11px] text-zinc-400">
        2025-2026 federal and {stateName} state tax brackets,{" "}
        {filingStatus === "single" ? "single" : "married filing jointly"} filer. Estimates only.
      </p>
    </section>
  );
}
