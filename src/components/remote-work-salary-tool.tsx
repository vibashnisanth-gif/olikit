"use client";

import {useState} from "react";

const locationMultipliers = [
  {city: "San Francisco, US", mult: 1.4, tax: 25},
  {city: "New York, US", mult: 1.35, tax: 25},
  {city: "Los Angeles, US", mult: 1.1, tax: 25},
  {city: "Chicago, US", mult: 1.0, tax: 25},
  {city: "Houston, US", mult: 0.9, tax: 25},
  {city: "London, UK", mult: 1.15, tax: 28},
  {city: "Manchester, UK", mult: 0.95, tax: 28},
  {city: "Sydney, AU", mult: 1.1, tax: 27},
  {city: "Melbourne, AU", mult: 1.0, tax: 27},
  {city: "Toronto, CA", mult: 1.05, tax: 25},
  {city: "Vancouver, CA", mult: 1.05, tax: 25},
  {city: "Auckland, NZ", mult: 0.95, tax: 20},
  {city: "Berlin, DE", mult: 0.9, tax: 30},
  {city: "Amsterdam, NL", mult: 0.95, tax: 35},
  {city: "Singapore, SG", mult: 1.1, tax: 11},
  {city: "Dubai, UAE", mult: 1.0, tax: 0},
  {city: "Mumbai, IN", mult: 0.45, tax: 20},
  {city: "Delhi, IN", mult: 0.4, tax: 20},
  {city: "Lisbon, PT", mult: 0.7, tax: 20},
  {city: "Barcelona, ES", mult: 0.75, tax: 24},
  {city: "Bangkok, TH", mult: 0.5, tax: 10},
  {city: "Bali, ID", mult: 0.45, tax: 10},
  {city: "Mexico City, MX", mult: 0.55, tax: 15},
  {city: "Buenos Aires, AR", mult: 0.45, tax: 15},
  {city: "Tallinn, EE", mult: 0.8, tax: 20},
  {city: "Prague, CZ", mult: 0.7, tax: 15},
  {city: "Warsaw, PL", mult: 0.65, tax: 12},
  {city: "Taipei, TW", mult: 0.7, tax: 12},
  {city: "Seoul, KR", mult: 0.85, tax: 15},
  {city: "Tokyo, JP", mult: 0.95, tax: 20},
];

export function RemoteWorkSalaryTool() {
  const [salary, setSalary] = useState(100000);

  const results = locationMultipliers
    .map((loc) => {
      const adjusted = Math.round(salary * loc.mult);
      const tax = Math.round((adjusted * loc.tax) / 100);
      const takeHome = adjusted - tax;
      return {...loc, adjusted, tax, takeHome};
    })
    .sort((a, b) => b.takeHome - a.takeHome);

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Your Base Salary (USD)
        </label>
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(Number(e.target.value))}
          className="w-full rounded-lg border px-4 py-3 text-lg"
          min={0}
          step={1000}
        />
      </div>

      <div className="mb-4 text-sm text-gray-500">
        Sorted by take-home pay (highest first). Top 3 highlighted in green.
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left text-xs uppercase text-gray-500">
              <th className="pb-2 pr-4">City</th>
              <th className="pb-2 pr-4 text-right">Adjusted Salary</th>
              <th className="pb-2 pr-4 text-right">Tax</th>
              <th className="pb-2 text-right">Take-Home</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r, i) => (
              <tr key={r.city} className={`border-b ${i < 3 ? "bg-green-50" : ""}`}>
                <td className="py-2 pr-4 text-sm">{r.city}</td>
                <td className="py-2 pr-4 text-right text-sm font-mono">
                  ${r.adjusted.toLocaleString()}
                </td>
                <td className="py-2 pr-4 text-right text-sm text-gray-500">{r.tax}%</td>
                <td className="py-2 text-right text-sm font-mono font-medium text-green-700">
                  ${r.takeHome.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
