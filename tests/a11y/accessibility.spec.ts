import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const BASE = process.env.BASE_URL || "http://localhost:3000";

const PAGES = [
  { name: "Homepage", url: "/" },
  { name: "US Locale", url: "/us" },
  { name: "UK Locale", url: "/uk" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
  { name: "Methodology", url: "/methodology" },
  { name: "Data Sources", url: "/data-sources" },
  { name: "Privacy Policy", url: "/privacy-policy" },
  { name: "Terms", url: "/terms" },
  { name: "Comparisons", url: "/comparisons" },
  { name: "Salary Calculator", url: "/us/tools/salary-calculator" },
  { name: "Tax Calculator", url: "/us/tools/tax-calculator" },
  { name: "Mortgage Calculator", url: "/us/tools/mortgage-calculator" },
  { name: "Software Engineer Salary", url: "/us/salary/software-engineer" },
  { name: "US States", url: "/us/states" },
];

for (const p of PAGES) {
  test(`a11y: ${p.name} passes axe`, async ({ page }) => {
    await page.goto(`${BASE}${p.url}`, { waitUntil: "networkidle" });

    const results = await new AxeBuilder({ page })
      .disableRules(["color-contrast"])
      .analyze();

    const violations = results.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );

    expect(
      violations,
      `Critical/serious a11y violations on ${p.name}:\n${violations.map((v) => `  - ${v.id}: ${v.description} (${v.nodes.length} nodes)`).join("\n")}`
    ).toHaveLength(0);
  });
}
