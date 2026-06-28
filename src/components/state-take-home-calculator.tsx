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
import {STATE_SEO_CONTENT} from "@/lib/content/state-seo-content";
import {formatSalary} from "@/lib/currency";

const FICA_SS_RATE = 6.2;
const FICA_SS_MAX = 176100;
const FICA_MEDICARE_RATE = 1.45;
const FICA_MEDICARE_ADDITIONAL_THRESHOLD = 200000;
const FICA_MEDICARE_ADDITIONAL_RATE = 0.9;

function computeFica(gross: number) {
  const ss = (Math.min(gross, FICA_SS_MAX) * FICA_SS_RATE) / 100;
  const medicareBase = (gross * FICA_MEDICARE_RATE) / 100;
  const medicareAdditional =
    gross > FICA_MEDICARE_ADDITIONAL_THRESHOLD
      ? ((gross - FICA_MEDICARE_ADDITIONAL_THRESHOLD) * FICA_MEDICARE_ADDITIONAL_RATE) / 100
      : 0;
  return Math.round((ss + medicareBase + medicareAdditional) * 100) / 100;
}

export function StateTakeHomeCalculator({stateSlug}: {stateSlug: string}) {
  const [salary, setSalary] = useState(75000);
  const [filingStatus, setFilingStatus] = useState<"single" | "married">("single");
  const [k401k, setK401k] = useState(0);
  const [healthInsurance, setHealthInsurance] = useState(0);
  const taxCalc = useMemo(() => new TaxCalculator(), []);
  const stateName = getStateName(stateSlug);
  const seo = STATE_SEO_CONTENT[stateSlug];

  const result = useMemo(() => {
    const taxableForFica = salary - 0;

    const fedResult = taxCalc.calculate({
      annualIncome: salary - k401k,
      deductions: filingStatus === "married" ? 29200 : 14600,
      filingStatus,
      taxYear: 2026,
      locale: "us",
    } as never);

    const stateResult = computeStateTax(stateSlug, salary - k401k);

    const fica = computeFica(taxableForFica);

    const sdi =
      seo?.hasSDI && seo.sdiRate ? Math.round(((salary * seo.sdiRate) / 100) * 100) / 100 : 0;

    const stateTax = stateResult?.stateTax ?? 0;
    const totalDeductions = k401k + healthInsurance;
    const totalTax = fedResult.totalTax + stateTax + fica + sdi;
    const takeHome = salary - totalDeductions - totalTax;

    return {
      gross: salary,
      k401k,
      healthInsurance,
      federalTax: fedResult.totalTax,
      federalRate: fedResult.effectiveTaxRate,
      stateTax,
      stateRate: stateResult?.effectiveRate ?? 0,
      stateMarginalRate: stateResult?.marginalRate ?? 0,
      fica,
      sdi,
      totalTax,
      takeHome,
      takeHomeMonthly: Math.round(takeHome / 12),
      effectiveRate: salary > 0 ? (totalTax / salary) * 100 : 0,
      stateBrackets: stateResult?.brackets ?? [],
    };
  }, [salary, filingStatus, k401k, healthInsurance, stateSlug, taxCalc, seo]);

  return (
    <section className="rounded-xl border border-zinc-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
      <h2 className="text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl">
        {stateName} Take-Home Pay Calculator
      </h2>
      <p className="mt-2 text-sm leading-6 text-zinc-500">
        Enter your salary to see federal tax, {stateName} state tax, and FICA deductions.
      </p>

      {/* Inputs */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
              className="w-full rounded-r-lg border border-zinc-300 px-3 py-2.5 text-sm font-semibold text-zinc-950 outline-none focus:border-zinc-500"
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
            className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm font-medium text-zinc-700 outline-none focus:border-zinc-500"
          >
            <option value="single">Single</option>
            <option value="married">Married filing jointly</option>
          </select>
        </div>
        <div>
          <label htmlFor="sth-401k" className="mb-1 block text-xs font-medium text-zinc-500">
            401(k) contribution (%)
          </label>
          <div className="flex items-center">
            <input
              id="sth-401k"
              type="number"
              value={k401k}
              onChange={(e) => setK401k(Math.min(23500, Math.max(0, Number(e.target.value))))}
              className="w-full rounded-l-lg border border-zinc-300 px-3 py-2.5 text-sm font-semibold text-zinc-950 outline-none focus:border-zinc-500"
              min={0}
              max={23500}
              step={500}
            />
            <span className="rounded-r-lg border border-l-0 border-zinc-300 bg-zinc-50 px-3 py-2.5 text-sm text-zinc-400">
              /yr
            </span>
          </div>
          <p className="mt-0.5 text-[10px] text-zinc-400">Max $23,500 (2025)</p>
        </div>
        <div>
          <label htmlFor="sth-health" className="mb-1 block text-xs font-medium text-zinc-500">
            Health insurance premium (/yr)
          </label>
          <div className="flex items-center">
            <span className="rounded-l-lg border border-r-0 border-zinc-300 bg-zinc-50 px-3 py-2.5 text-sm text-zinc-400">
              $
            </span>
            <input
              id="sth-health"
              type="number"
              value={healthInsurance}
              onChange={(e) => setHealthInsurance(Math.max(0, Number(e.target.value)))}
              className="w-full rounded-r-lg border border-zinc-300 px-3 py-2.5 text-sm font-semibold text-zinc-950 outline-none focus:border-zinc-500"
              min={0}
              step={100}
            />
          </div>
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
          {formatSalary(result.takeHomeMonthly, "USD")}/month ·{" "}
          {formatSalary(Math.round(result.takeHome / 26), "USD")}/biweekly · Effective tax rate:{" "}
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
        {result.k401k > 0 && (
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-sm text-zinc-600">401(k) contribution</span>
            <span className="text-sm font-semibold tabular-nums text-blue-600">
              -{formatSalary(result.k401k, "USD")}
            </span>
          </div>
        )}
        {result.healthInsurance > 0 && (
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-sm text-zinc-600">Health insurance</span>
            <span className="text-sm font-semibold tabular-nums text-blue-600">
              -{formatSalary(result.healthInsurance, "USD")}
            </span>
          </div>
        )}
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
        {result.sdi > 0 && (
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-sm text-zinc-600">{stateName} SDI</span>
            <span className="text-sm font-semibold tabular-nums text-red-600">
              -{formatSalary(result.sdi, "USD")}
            </span>
          </div>
        )}
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
