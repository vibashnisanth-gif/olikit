import { chromium } from "playwright";
import { writeFileSync } from "fs";
import { join } from "path";

const CHROME_PATH = "C:/Users/vibas/.cloakbrowser/chromium-146.0.7680.177.5/chrome.exe";
const GEMINI_URL = "https://gemini.google.com/share/5d05892b58d2";
const OUTPUT_DIR = "C:/Users/vibas/source/olikit/content/generated";

const REVIEW_PROMPT = `Review the article above as:

* Google Quality Rater — assess EEAT, expertise, authority, trustworthiness
* Senior SEO Editor — assess structure, headings, internal linking, meta quality
* Compensation Analyst — assess salary data accuracy, purchasing power analysis, tax insights

Identify:
- Thin content
- Missing insights
- Generic statements
- Weak FAQs
- Missing relocation analysis
- Missing purchasing power analysis

Rewrite weak sections.

Output final version only.`;

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function waitForElement(page, selectors, timeout = 120000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    for (const sel of selectors) {
      const el = await page.$(sel);
      if (el) return el;
    }
    await sleep(2000);
  }
  return null;
}

async function main() {
  console.log("=== GEMINI BROWSER WORKFLOW ===");
  console.log(`Browser: ${CHROME_PATH}`);
  console.log(`Gemini URL: ${GEMINI_URL}`);
  console.log(`Output: ${OUTPUT_DIR}\n`);

  const pageSpec = `# PAGE SPECIFICATION

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
Content only. No explanations. No commentary. No meta notes.`;

  const browser = await chromium.launch({
    executablePath: CHROME_PATH,
    headless: false,
    args: [
      "--no-sandbox",
      "--disable-dev-shm-usage",
      "--window-size=1280,900",
    ],
  });

  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36",
    viewport: { width: 1280, height: 900 },
  });

  const page = await context.newPage();

  try {
    // Navigate to Gemini shared prompt
    console.log("[1/8] Opening Gemini shared prompt...");
    await page.goto(GEMINI_URL, { waitUntil: "domcontentloaded", timeout: 30000 });
    console.log("  Browser window opened.");
    console.log("\n==============================================");
    console.log("  ACTION REQUIRED: Sign into Google in the");
    console.log("  browser window that just opened.");
    console.log("  After signing in, the shared prompt will load.");
    console.log("==============================================\n");

    // Wait for user to sign in and for the prompt input to appear
    console.log("  Waiting for you to sign in and for the prompt to load...");
    
    const promptInput = await waitForElement(
      page,
      [
        'div[contenteditable="true"][role="textbox"]',
        'div[contenteditable="true"]',
        'div.ql-editor',
        '[data-test-id*="prompt-input"]',
        'textarea',
      ],
      300000 // 5 min timeout for sign-in
    );

    if (!promptInput) {
      console.log("  ERROR: Prompt input not found after 5 minutes.");
      console.log("  Taking screenshot...");
      await page.screenshot({ path: join(OUTPUT_DIR, "timeout.png"), fullPage: true });
      console.log("  Browser remains open. Press Ctrl+C in terminal to close.");
      return;
    }

    console.log("  Prompt input detected! Shared prompt is loaded.\n");

    // Give a moment for the shared prompt to fully load
    await sleep(3000);

    // Append the page specification
    console.log("[2/8] Loading page specification into prompt...");
    await promptInput.click();
    await sleep(1000);
    
    // Type the specification into the prompt
    await page.keyboard.type(pageSpec, { delay: 5 });
    console.log("  Page specification entered.\n");

    // Submit
    console.log("[3/8] Submit the prompt in the browser window.");
    console.log("  Press Ctrl+Enter or click send.");
    console.log("  Waiting for you to submit...\n");

    // Wait for response to start appearing
    console.log("  Waiting for Gemini response...");
    
    // Check for stop button (indicates generation in progress)
    const stopBtn = await waitForElement(
      page,
      [
        'button[aria-label*="stop" i]',
        'button:has-text("Stop")',
        '[data-test-id*="stop"]',
      ],
      60000
    );

    if (stopBtn) {
      console.log("  Generation started. Waiting for completion...");
    } else {
      console.log("  No stop button found. Waiting for response...");
    }

    // Wait for response to complete (look for copy button or regenerate button)
    const responseDone = await waitForElement(
      page,
      [
        'button[aria-label*="copy" i]',
        'button[aria-label*="Copy" i]',
        'button[aria-label*="regenerate" i]',
        'button[aria-label*="Regenerate" i]',
      ],
      300000 // 5 min for generation
    );

    if (responseDone) {
      console.log("  Generation complete!\n");
    } else {
      console.log("  Generation may not be complete but continuing...\n");
    }

    await sleep(5000);

    // Save first pass
    console.log("[4/8] Saving first pass output...");
    const responseText = await page.evaluate(() => {
      const selectors = [
        '[data-message-author-role="model"]',
        '.model-response-text',
        '[data-test-id*="response-content"]',
      ];
      for (const sel of selectors) {
        const els = document.querySelectorAll(sel);
        if (els.length > 0) {
          const texts = Array.from(els).map((el) => el.textContent || "");
          return texts.join("\n\n---\n\n");
        }
      }
      return document.body?.innerText || "";
    });

    const pass1Path = join(OUTPUT_DIR, "highest-paying-countries-software-engineers-pass1.md");
    writeFileSync(pass1Path, responseText, "utf-8");
    console.log(`  Saved (${responseText.length} chars)\n`);

    // Second pass
    console.log("[5/8] Now enter the review prompt.");
    console.log("  Type/paste the review prompt into the chat and submit.");
    console.log("  Waiting for you to submit the second pass...\n");

    // Wait for second response completion
    const secondDone = await waitForElement(
      page,
      [
        'button[aria-label*="copy" i]',
        'button[aria-label*="Copy" i]',
        'button[aria-label*="regenerate" i]',
        'button[aria-label*="Regenerate" i]',
      ],
      420000 // 7 min
    );

    await sleep(5000);

    // Save final output
    console.log("[6/8] Saving final markdown...");
    const finalText = await page.evaluate(() => {
      const selectors = [
        '[data-message-author-role="model"]',
        '.model-response-text',
        '[data-test-id*="response-content"]',
      ];
      for (const sel of selectors) {
        const els = document.querySelectorAll(sel);
        if (els.length > 0) {
          const texts = Array.from(els).map((el) => el.textContent || "");
          return texts[texts.length - 1];
        }
      }
      return document.body?.innerText || "";
    });

    const finalPath = join(OUTPUT_DIR, "highest-paying-countries-software-engineers.md");
    writeFileSync(finalPath, finalText, "utf-8");
    console.log(`  Saved to ${finalPath} (${finalText.length} chars)\n`);

    console.log("=== WORKFLOW COMPLETE ===");
    console.log(`✓ Pass 1: ${pass1Path}`);
    console.log(`✓ Final:  ${finalPath}`);
    console.log("\nBrowser remains open. Press Ctrl+C to close.");

  } catch (err) {
    console.error("ERROR:", err.message);
    await page.screenshot({ path: join(OUTPUT_DIR, "error.png"), fullPage: true }).catch(() => {});
    console.log("\nBrowser remains open. Press Ctrl+C to close.");
  }
}

main();
