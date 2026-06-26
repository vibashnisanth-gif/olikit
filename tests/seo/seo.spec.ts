import { test, expect } from "@playwright/test";

const BASE = process.env.BASE_URL || "http://localhost:3000";

test.describe("SEO Checks", () => {
  test("every page has a title", async ({ page }) => {
    await page.goto(`${BASE}/`);
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(5);
  });

  test("every page has a meta description", async ({ page }) => {
    await page.goto(`${BASE}/`);
    const desc = await page.getAttribute('meta[name="description"]', "content");
    expect(desc).toBeTruthy();
    expect(desc!.length).toBeGreaterThan(20);
  });

  test("every page has a canonical", async ({ page }) => {
    await page.goto(`${BASE}/`);
    const canonical = await page.getAttribute('link[rel="canonical"]', "href");
    expect(canonical).toBeTruthy();
    expect(canonical).toContain("olikit.com");
  });

  test("every page has og:title", async ({ page }) => {
    await page.goto(`${BASE}/`);
    const ogTitle = await page.getAttribute('meta[property="og:title"]', "content");
    expect(ogTitle).toBeTruthy();
  });

  test("every page has og:description", async ({ page }) => {
    await page.goto(`${BASE}/`);
    const ogDesc = await page.getAttribute('meta[property="og:description"]', "content");
    expect(ogDesc).toBeTruthy();
  });

  test("homepage has structured data", async ({ page }) => {
    await page.goto(`${BASE}/`);
    const jsonLd = await page.locator('script[type="application/ld+json"]').first().textContent();
    expect(jsonLd).toBeTruthy();
    const data = JSON.parse(jsonLd!);
    expect(data["@context"]).toBe("https://schema.org");
  });

  test("no duplicate titles across key pages", async ({ page }) => {
    const titles = new Set<string>();
    const urls = ["/", "/about", "/contact", "/methodology", "/us"];

    for (const url of urls) {
      await page.goto(`${BASE}${url}`);
      const title = await page.title();
      expect(titles.has(title), `Duplicate title "${title}" found on ${url}`).toBe(false);
      titles.add(title);
    }
  });

  test("locale pages have hreflang tags", async ({ page }) => {
    await page.goto(`${BASE}/us/salary/software-engineer`);
    const hreflangs = await page.locator('link[rel="alternate"][hreflang]').count();
    expect(hreflangs).toBeGreaterThanOrEqual(7);
  });

  test("no broken internal links on homepage", async ({ page }) => {
    const brokenLinks: string[] = [];
    await page.goto(`${BASE}/`);

    const links = await page.locator("a[href]").all();
    for (const link of links.slice(0, 20)) {
      const href = await link.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("http")) continue;

      try {
        const res = await page.request.fetch(`${BASE}${href}`);
        if (res.status() >= 400) {
          brokenLinks.push(`${href} → ${res.status()}`);
        }
      } catch {
        brokenLinks.push(`${href} → fetch error`);
      }
    }

    expect(brokenLinks, `Broken links found:\n${brokenLinks.join("\n")}`).toHaveLength(0);
  });
});
