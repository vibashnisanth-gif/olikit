import { defineConfig } from "@playwright/test"

export default defineConfig({
  testDir: ".",
  testMatch: "smoke.spec.ts",
  timeout: 30000,
  retries: 1,
  use: {
    baseURL: process.env.BASE_URL || "http://localhost:3456",
    headless: true,
  },
  webServer: {
    command: "npm run dev -- -p 3456",
    port: 3456,
    timeout: 180000,
    reuseExistingServer: true,
  },
})
