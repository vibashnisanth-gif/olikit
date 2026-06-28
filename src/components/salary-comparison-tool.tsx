"use client";

import {useState, useMemo} from "react";

const countryTaxRates: Record<string, number> = {
  us: 25,
  uk: 28,
  au: 27,
  ca: 25,
  nz: 20,
  in: 20,
  sg: 11,
};

const taxLabels: Record<string, string> = {
  us: "US (avg federal + state)",
  uk: "UK (avg income tax)",
  au: "Australia (avg income tax)",
  ca: "Canada (avg income tax)",
  nz: "New Zealand (avg income tax)",
  in: "India (avg income tax)",
  sg: "Singapore (avg income tax)",
};

export function SalaryComparisonTool() {
  const [salaryA, setSalaryA] = useState(100000);
  const [salaryB, setSalaryB] = useState(90000);
  const [cityA, setCityA] = useState("San Francisco, United States");
  const [cityB, setCityB] = useState("Chicago, United States");

  const parsed = useMemo(() => {
    const colA = parseInt(cityA.match(/CoL: (\d+)/)?.[1] || "100");
    const colB = parseInt(cityB.match(/CoL: (\d+)/)?.[1] || "100");
    const countryA = cityA.split(", ").pop() || "";
    const countryB = cityB.split(", ").pop() || "";
    const countrySlugA =
      Object.keys(countryTaxRates).find((k) => countryA.toLowerCase().includes(k)) || "us";
    const countrySlugB =
      Object.keys(countryTaxRates).find((k) => countryB.toLowerCase().includes(k)) || "us";
    const taxRateA = countryTaxRates[countrySlugA];
    const taxRateB = countryTaxRates[countrySlugB];

    const ratio = colA > 0 ? colB / colA : 1;
    const adjustedB = Math.round(salaryA * ratio);
    const difference = salaryB - salaryA;
    const percentDiff = salaryA > 0 ? ((difference / salaryA) * 100).toFixed(1) : "0";

    const takeHomeA = Math.round(salaryA * (1 - taxRateA / 100));
    const takeHomeB = Math.round(salaryB * (1 - taxRateB / 100));
    const takeHomeDiff = takeHomeB - takeHomeA;

    const powerA = colA > 0 ? Math.round((takeHomeA / colA) * 100) : 0;
    const powerB = colB > 0 ? Math.round((takeHomeB / colB) * 100) : 0;
    const powerDiff = powerB - powerA;

    const winner = powerA > powerB ? "A" : powerB > powerA ? "B" : "tie";

    return {
      colA,
      colB,
      taxRateA,
      taxRateB,
      adjustedB,
      difference: difference,
      percentDiff,
      takeHomeA,
      takeHomeB,
      takeHomeDiff,
      powerA,
      powerB,
      powerDiff,
      winner,
      countrySlugA,
      countrySlugB,
    };
  }, [salaryA, salaryB, cityA, cityB]);

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">City A</h3>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">City</label>
            <select
              value={cityA}
              onChange={(e) => setCityA(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 text-sm"
            >
              {getCityOptions()}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Annual Salary</label>
            <input
              type="number"
              value={salaryA}
              onChange={(e) => setSalaryA(Number(e.target.value))}
              className="w-full rounded-lg border px-3 py-2 text-sm"
              min={0}
              step={1000}
            />
          </div>
          <div className="rounded-lg bg-gray-50 p-3 text-sm">
            <div className="text-gray-600">
              Cost of Living Index: <span className="font-medium text-gray-900">{parsed.colA}</span>
            </div>
            <div className="text-gray-600">
              Tax Rate: <span className="font-medium text-gray-900">{parsed.taxRateA}%</span>
            </div>
            <div className="text-gray-600">
              Take-Home:{" "}
              <span className="font-medium text-green-700">
                ${parsed.takeHomeA.toLocaleString()}
              </span>
            </div>
            <div className="text-gray-600">
              Purchasing Power: <span className="font-medium text-gray-900">{parsed.powerA}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">City B</h3>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">City</label>
            <select
              value={cityB}
              onChange={(e) => setCityB(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 text-sm"
            >
              {getCityOptions()}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Annual Salary</label>
            <input
              type="number"
              value={salaryB}
              onChange={(e) => setSalaryB(Number(e.target.value))}
              className="w-full rounded-lg border px-3 py-2 text-sm"
              min={0}
              step={1000}
            />
          </div>
          <div className="rounded-lg bg-gray-50 p-3 text-sm">
            <div className="text-gray-600">
              Cost of Living Index: <span className="font-medium text-gray-900">{parsed.colB}</span>
            </div>
            <div className="text-gray-600">
              Tax Rate: <span className="font-medium text-gray-900">{parsed.taxRateB}%</span>
            </div>
            <div className="text-gray-600">
              Take-Home:{" "}
              <span className="font-medium text-green-700">
                ${parsed.takeHomeB.toLocaleString()}
              </span>
            </div>
            <div className="text-gray-600">
              Purchasing Power: <span className="font-medium text-gray-900">{parsed.powerB}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl border-2 p-4">
        {parsed.winner === "tie" ? (
          <div className="text-center text-lg font-semibold text-gray-900">
            Both offers are equal in purchasing power
          </div>
        ) : (
          <>
            <div
              className={`text-center text-lg font-semibold ${parsed.winner === "A" ? "text-blue-700" : "text-green-700"}`}
            >
              {parsed.winner === "A" ? "City A" : "City B"} has better purchasing power
            </div>
            <div className="mt-2 grid grid-cols-3 gap-4 text-center text-sm">
              <div>
                <div className="text-gray-500">Salary Difference</div>
                <div
                  className={`font-semibold ${parsed.difference > 0 ? "text-green-700" : parsed.difference < 0 ? "text-red-600" : "text-gray-900"}`}
                >
                  {parsed.difference > 0 ? "+" : ""}
                  {parsed.difference.toLocaleString()} ({parsed.percentDiff}%)
                </div>
              </div>
              <div>
                <div className="text-gray-500">Take-Home Difference</div>
                <div
                  className={`font-semibold ${parsed.takeHomeDiff > 0 ? "text-green-700" : parsed.takeHomeDiff < 0 ? "text-red-600" : "text-gray-900"}`}
                >
                  {parsed.takeHomeDiff > 0 ? "+" : ""}
                  {parsed.takeHomeDiff.toLocaleString()}
                </div>
              </div>
              <div>
                <div className="text-gray-500">Purchasing Power Diff</div>
                <div
                  className={`font-semibold ${parsed.powerDiff > 0 ? "text-green-700" : parsed.powerDiff < 0 ? "text-red-600" : "text-gray-900"}`}
                >
                  {parsed.powerDiff > 0 ? "+" : ""}
                  {parsed.powerDiff}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function getCityOptions() {
  const cities = [
    {name: "New York", country: "United States", col: 100},
    {name: "San Francisco", country: "United States", col: 95},
    {name: "Los Angeles", country: "United States", col: 78},
    {name: "Chicago", country: "United States", col: 72},
    {name: "Houston", country: "United States", col: 65},
    {name: "Phoenix", country: "United States", col: 62},
    {name: "London", country: "United Kingdom", col: 85},
    {name: "Manchester", country: "United Kingdom", col: 70},
    {name: "Sydney", country: "Australia", col: 82},
    {name: "Melbourne", country: "Australia", col: 75},
    {name: "Toronto", country: "Canada", col: 78},
    {name: "Vancouver", country: "Canada", col: 80},
    {name: "Auckland", country: "New Zealand", col: 72},
    {name: "Mumbai", country: "India", col: 35},
    {name: "Delhi", country: "India", col: 32},
    {name: "Singapore", country: "Singapore", col: 85},
    {name: "Berlin", country: "Germany", col: 70},
    {name: "Dubai", country: "UAE", col: 75},
  ];
  return cities.map((c) => (
    <option key={`${c.name}-${c.country}`} value={`${c.name}, ${c.country} (CoL: ${c.col})`}>
      {c.name}, {c.country} (CoL: {c.col})
    </option>
  ));
}
