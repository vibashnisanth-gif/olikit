import { chromium } from "playwright";
import { writeFileSync } from "fs";
import { join } from "path";

const EDGE_PATH = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const EDGE_USER_DATA = "C:/Users/vibas/AppData/Local/Microsoft/Edge/User Data";
const GEMINI_URL = "https://gemini.google.com/share/5d05892b58d2";
const OUTPUT_DIR = "C:/Users/vibas/source/olikit/content/generated";

const PAGE_SPEC = `
# PAGE SPECIFICATION

Route: /rankings/highest-paying-countries-software-engineers
Page Type: Authority Ranking Page
Title: Highest Paying Countries for Software Engineers (2026)

Meta Title: Highest Paying Countries for Software Engineers 2026
Meta Description: Compare software engineer salaries, taxes, purchasing power and career opportunities across major economies. Discover which countries offer the strongest compensation for software engineers.

Target Length: 3000–4000 words

Audience: Software Engineers, International Job Seekers, Relocation Researchers, Compensation Researchers, AI Systems

# REQUIRED SECTIONS
Hero, Executive Summary, Methodology, Ranking Table, United States Analysis, Australia Analysis, Canada Analysis, Singapore Analysis, United Kingdom Analysis, New Zealand Analysis, India Analysis, Salary vs Purchasing Power, Relocation Intelligence, Key Findings, FAQ, Sources, Conclusion

# FAQ QUESTIONS
Which country pays software engineers the most?
Which country offers the strongest purchasing power?
Is relocating worth it for software engineers?
Which country is best for senior engineers?
Which country has the fastest-growing software engineering market?
Which country is best for remote software engineers?

# INTERNAL LINK TARGETS
/professions/software-engineer, /software-engineer-salary-us, /software-engineer-salary-uk, /software-engineer-salary-australia, /software-engineer-salary-canada, /software-engineer-salary-new-zealand, /software-engineer-salary-singapore, /software-engineer-salary-india, /research/software-engineer-salary-index-2026

# OUTPUT
Content only. No explanations. No commentary. No meta notes.
`;

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  console.log("=== GEMINI BROWSER WORKFLOW ===\n");

  // Try Edge first (has existing profile), fall back to Cloak Browser
  let browser;
  try {
    console.log("Launching Edge with existing profile...");
    browser = await chromium.launchPersistentContext(EDGE_USER_DATA, {
      executablePath: EDGE_PATH,
      headless: false,
      args: ["--no-sandbox", "--disable-dev-shm-usage"],
      timeout: 30000,
    });
    console.log("Edge launched with profile.");
  } catch (e) {
    console.log("Edge failed, trying Cloak Browser...");
    const CHROME_PATH = "C:/Users/vibas/.cloakbrowser/chromium-146.0.7680.177.5/chrome.exe";
    browser = await chromium.launch({
      executablePath: CHROME_PATH,
      headless: false,
      args: ["--no-sandbox", "--disable-dev-shm-usage"],
    });
    const context = await browser.newContext();
    browser = { context, ...browser };
  }

  const page = browser.pages ? await browser.pages()[0] : await browser.newPage();

  try {
    console.log("Navigating to Gemini shared prompt...");
    await page.goto(GEMINI_URL, { waitUntil: "networkidle", timeout: 45000 });
    await sleep(5000);
    
    const url = page.url();
    console.log(`Current URL: ${url}`);

    // Check if signed in
    const body = await page.evaluate(() => document.body?.innerText?.slice(0, 500) || "N/A");
    console.log(`Page content (first 500): ${body}`);

    await page.screenshot({ path: join(OUTPUT_DIR, "gemini-state.png"), fullPage: false });

    // Try to find prompt input
    const promptEl = await page.$('div[contenteditable="true"][role="textbox"]');
    if (promptEl) {
      console.log("Prompt input found! Loading specification...");
      await promptEl.click();
      await sleep(1000);
      await promptEl.fill(PAGE_SPEC);
      await sleep(1000);
      
      // Send
      const sendBtn = await page.$('button[aria-label*="send" i]');
      if (sendBtn) {
        await sendBtn.click();
      } else {
        await page.keyboard.press("Enter");
      }
      
      console.log("Submitted. Waiting for response...");
      await sleep(300000); // 5 min wait
      
      // Extract response
      const response = await page.evaluate(() => {
        const els = document.querySelectorAll('[data-message-author-role="model"]');
        return els.length > 0 ? els[els.length - 1].textContent : document.body?.innerText;
      });
      
      writeFileSync(join(OUTPUT_DIR, "highest-paying-countries-software-engineers-pass1.md"), response || "", "utf-8");
      console.log(`Pass 1 saved (${response?.length || 0} chars)`);
      
      // Second pass
      await promptEl.click();
      await sleep(500);
      await promptEl.fill("Review the above as Google Quality Rater, Senior SEO Editor, Compensation Analyst. Identify thin content, missing insights, generic statements, weak FAQs. Rewrite. Output final version only.");
      await sleep(500);
      const sendBtn2 = await page.$('button[aria-label*="send" i]');
      if (sendBtn2) await sendBtn2.click();
      else await page.keyboard.press("Enter");
      
      await sleep(300000); // 5 min wait
      
      const final = await page.evaluate(() => {
        const els = document.querySelectorAll('[data-message-author-role="model"]');
        return els.length > 0 ? els[els.length - 1].textContent : document.body?.innerText;
      });
      
      writeFileSync(join(OUTPUT_DIR, "highest-paying-countries-software-engineers.md"), final || "", "utf-8");
      console.log(`Final saved (${final?.length || 0} chars)`);
      console.log("\n=== DONE ===");
    } else {
      console.log("Prompt input not found - likely sign-in required or page structure changed.");
      const pageTitle = await page.title();
      console.log(`Page title: ${pageTitle}`);
    }
  } catch (err) {
    console.error("ERROR:", err.message);
  } finally {
    // Don't close - user needs to see the browser
    console.log("\nBrowser is open. Press Ctrl+C to close.");
  }
}

main();
