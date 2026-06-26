import { defineConfig, devices } from "@playwright/test";

const baseUrl = process.env.BASE_URL || "http://localhost:3000";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? [["html", { open: "never" }], ["list"]] : "list",
  use: {
    baseURL: baseUrl,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "smoke",
      testMatch: /smoke/,
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "accessibility",
      testMatch: /a11y/,
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "seo",
      testMatch: /seo/,
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "desktop",
      testMatch: /\.spec\.ts$/,
      exclude: [/smoke/, /a11y/, /seo/],
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile",
      testMatch: /\.spec\.ts$/,
      exclude: [/smoke/, /a11y/, /seo/],
      use: { ...devices["iPhone 14"] },
    },
  ],
  webServer: process.env.CI
    ? undefined
    : {
        command: "npm run dev",
        url: baseUrl,
        reuseExistingServer: true,
        timeout: 120000,
      },
});
