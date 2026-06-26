import { test, expect } from "@playwright/test";

const BASE = process.env.BASE_URL || "http://localhost:3000";

test.describe("Smoke Tests", () => {
  test("homepage loads", async ({ page }) => {
    const res = await page.goto(`${BASE}/`);
    expect(res?.status()).toBe(200);
    await expect(page).toHaveTitle(/Olikit/);
  });

  test("no template leaks", async ({ page }) => {
    await page.goto(`${BASE}/`);
    const body = await page.textContent("body");
    expect(body).not.toContain("{country}");
    expect(body).not.toContain("{state}");
    expect(body).not.toContain("{tool}");
  });

  test("locale pages load", async ({ page }) => {
    for (const locale of ["us", "uk", "au"]) {
      const res = await page.goto(`${BASE}/${locale}`);
      expect(res?.status()).toBe(200);
    }
  });

  test("tool pages load", async ({ page }) => {
    const res = await page.goto(`${BASE}/us/tools/salary-calculator`);
    expect(res?.status()).toBe(200);
  });

  test("404 page works", async ({ page }) => {
    const res = await page.goto(`${BASE}/nonexistent-page-xyz`);
    expect(res?.status()).toBe(404);
  });

  test("sitemap loads", async ({ page }) => {
    const res = await page.goto(`${BASE}/sitemap.xml`);
    expect(res?.status()).toBe(200);
    const content = await page.textContent("body");
    expect(content).toContain("<urlset");
  });

  test("robots.txt loads", async ({ page }) => {
    const res = await page.goto(`${BASE}/robots.txt`);
    expect(res?.status()).toBe(200);
  });
});
