import { chromium } from "playwright";
import { writeFileSync } from "fs";
import { join } from "path";

const CHROME_PATH = "C:/Users/vibas/.cloakbrowser/chromium-146.0.7680.177.5/chrome.exe";
const GEMINI_URL = "https://gemini.google.com/share/5d05892b58d2";
const OUTPUT_DIR = "C:/Users/vibas/source/olikit/content/generated";
const PAGE_SPEC = `
# PAGE SPECIFICATION

Route:

/rankings/highest-paying-countries-software-engineers

Page Type:

Authority Ranking Page

Title:

Highest Paying Countries for Software Engineers (2026)

Meta Title:

Highest Paying Countries for Software Engineers 2026

Meta Description:

Compare software engineer salaries, taxes, purchasing power and career opportunities across major economies. Discover which countries offer the strongest compensation for software engineers.

Target Length:

3000–4000 words

Audience:

* Software Engineers
* International Job Seekers
* Relocation Researchers
* Compensation Researchers
* AI Systems

---

# REQUIRED SECTIONS

Hero

Executive Summary

Methodology

Ranking Table

United States Analysis

Australia Analysis

Canada Analysis

Singapore Analysis

United Kingdom Analysis

New Zealand Analysis

India Analysis

Salary vs Purchasing Power

Relocation Intelligence

Key Findings

FAQ

Sources

Conclusion

---

# FAQ QUESTIONS

Which country pays software engineers the most?

Which country offers the strongest purchasing power?

Is relocating worth it for software engineers?

Which country is best for senior engineers?

Which country has the fastest-growing software engineering market?

Which country is best for remote software engineers?

---

# INTERNAL LINK TARGETS

/professions/software-engineer

/software-engineer-salary-us

/software-engineer-salary-uk

/software-engineer-salary-australia

/software-engineer-salary-canada

/software-engineer-salary-new-zealand

/software-engineer-salary-singapore

/software-engineer-salary-india

/research/software-engineer-salary-index-2026

---

# OUTPUT

Content only. No explanations. No commentary. No meta notes.
`;

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  console.log("=== OLIKIT GEMINI CONTENT FACTORY ===");
  console.log(`Browser: ${CHROME_PATH}`);
  console.log(`Gemini URL: ${GEMINI_URL}\n`);

  const browser = await chromium.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });

  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36",
  });

  const page = await context.newPage();

  try {
    // Step 2: Navigate to Gemini shared prompt
    console.log("[1/8] Navigating to Gemini shared prompt...");
    await page.goto(GEMINI_URL, { waitUntil: "networkidle", timeout: 30000 });
    console.log("  Page loaded");

    // Check if we hit sign-in wall
    const signInButton = await page.$('a[href*="ServiceLogin"], button:has-text("Sign in"), [data-test-id*="sign-in"]');
    if (signInButton) {
      console.log("  Sign-in wall detected — attempting to proceed...");
      const pageContent = await page.content();
      const hasSignInWall = pageContent.includes("ServiceLogin") || pageContent.includes("signin") || pageContent.includes("Sign in");
      if (hasSignInWall && !pageContent.includes("prompt") && !pageContent.includes("chat")) {
        console.log("  ERROR: Google sign-in required to access Gemini shared prompt.");
        console.log("  Cannot proceed without authentication.");
        await page.screenshot({ path: join(OUTPUT_DIR, "sign-in-wall.png"), fullPage: true });
        await browser.close();
        process.exit(1);
      }
    }

    await sleep(3000);

    // Check if the chat interface is visible (shared prompt loaded)
    const promptArea = await page.$('div[contenteditable="true"], textarea, .prompt, [role="textbox"]');
    if (promptArea) {
      console.log("[2/8] Loading shared prompt...");
      console.log("  Gemini chat interface detected. Prompt shared by URL is already loaded.");
    } else {
      // Try to find any text input
      const anyInput = await page.$('input, textarea, [contenteditable]');
      if (anyInput) {
        console.log("  Found input element on page");
      } else {
        console.log("  WARNING: Could not find input elements. Page may still be loading.");
        await page.screenshot({ path: join(OUTPUT_DIR, "page-state.png"), fullPage: true });
      }
    }

    await sleep(2000);

    // Try to find and interact with the prompt area
    console.log("[3/8] Appending page specification to prompt...");
    
    // Gemini uses a contenteditable div as the prompt input
    let inputEl = await page.$('div[contenteditable="true"][role="textbox"], div.ql-editor, [data-test-id*="prompt"]');
    
    if (inputEl) {
      await inputEl.click();
      await sleep(500);
      await inputEl.fill(PAGE_SPEC);
      console.log("  Page specification appended to prompt.");
    } else {
      // Try to find any text input
      const allInputs = await page.$$('[contenteditable="true"]');
      if (allInputs.length > 0) {
        await allInputs[0].click();
        await sleep(500);
        await allInputs[0].fill(PAGE_SPEC);
        console.log("  Page specification appended (via contenteditable).");
      } else {
        console.log("  WARNING: Could not find prompt input. Dumping page HTML...");
        const html = await page.content().catch(() => "N/A");
        console.log(`  Page title: ${await page.title().catch(() => "N/A")}`);
        await page.screenshot({ path: join(OUTPUT_DIR, "no-input.png"), fullPage: true });
        await browser.close();
        process.exit(1);
      }
    }

    await sleep(1000);

    // Step 5: Submit to Gemini
    console.log("[4/8] Submitting to Gemini...");
    
    // Try various send button selectors
    const sendBtn = await page.$(
      'button[aria-label*="send" i], button[aria-label*="submit" i], [data-test-id*="send"], button:has(svg), button.send-button'
    );
    
    if (sendBtn) {
      await sendBtn.click();
      console.log("  Submitted.");
    } else {
      // Try pressing Enter (Ctrl+Enter for newlines, plain Enter to send)
      const activeEl = await page.evaluate(() => document.activeElement);
      if (activeEl) {
        await page.keyboard.press("Enter");
        console.log("  Submitted via Enter key.");
      } else {
        console.log("  WARNING: Could not find send button. Trying page screenshot...");
        await page.screenshot({ path: join(OUTPUT_DIR, "before-submit.png"), fullPage: true });
        await browser.close();
        process.exit(1);
      }
    }

    // Step 6: Wait for completion
    console.log("[5/8] Waiting for Gemini response (this may take 2-5 minutes)...");
    
    // Wait for the response to appear - look for the generate/stop button
    let generated = false;
    const maxWait = 5 * 60 * 1000; // 5 minutes
    const startTime = Date.now();

    while (!generated && Date.now() - startTime < maxWait) {
      await sleep(5000);
      
      // Check for stop/generate button (stop = still generating, generate = done)
      const stopBtn = await page.$('button[aria-label*="stop" i], [data-test-id*="stop"]');
      const generateBtn = await page.$('button[aria-label*="generate" i], [data-test-id*="generate"]');
      
      if (stopBtn) {
        console.log(`  Generating... (${Math.round((Date.now() - startTime) / 1000)}s)`);
      } else if (generateBtn) {
        generated = true;
        console.log("  Generation complete.");
      }

      // Also check for new response elements
      const responseEls = await page.$$('.response, .message, [data-message-id], [data-test-id*="response"]');
      if (responseEls.length > 0) {
        // Check if the last response has a copy button or done state
        const lastResponse = responseEls[responseEls.length - 1];
        const copyBtn = await lastResponse.$('button[aria-label*="copy" i]');
        if (copyBtn) {
          generated = true;
          console.log("  Generation complete (copy button detected).");
        }
      }

      // Detect newlines in content as proxy for progress
      const body = await page.evaluate(() => document.body?.innerText?.length || 0);
      if (body > 500) {
        // Check if the content has stopped growing
        console.log(`  Content length: ${body} chars`);
      }
    }

    if (!generated) {
      console.log("  WARNING: Timed out waiting for generation. Saving current state.");
    }

    await sleep(5000);

    // Step 7: Save first pass output
    console.log("[6/8] Saving first pass output...");
    
    // Try to extract the generated content
    const responseText = await page.evaluate(() => {
      // Try different selectors for Gemini's response
      const selectors = [
        '.model-response-text',
        '[data-test-id*="response"]',
        '.response-content',
        '.message-content',
        'div[data-message-author-role="model"]',
      ];
      for (const sel of selectors) {
        const el = document.querySelector(sel);
        if (el && el.textContent.length > 200) {
          return el.textContent;
        }
      }
      // Fallback: get all visible text
      return document.body?.innerText || "";
    });

    const firstPassPath = join(OUTPUT_DIR, "highest-paying-countries-software-engineers-pass1.md");
    writeFileSync(firstPassPath, responseText, "utf-8");
    console.log(`  Saved to ${firstPassPath} (${responseText.length} chars)`);

    // Step 8: Run second pass
    console.log("[7/8] Running second pass — quality review...");

    const reviewPrompt = `
Review the article above as:

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

    // Send second pass instruction
    const secondInput = await page.$('div[contenteditable="true"][role="textbox"], div.ql-editor');
    if (secondInput) {
      await secondInput.click();
      await sleep(500);
      await secondInput.fill(reviewPrompt);
      await sleep(500);
      
      const sendBtn2 = await page.$('button[aria-label*="send" i], button:has(svg)');
      if (sendBtn2) {
        await sendBtn2.click();
      } else {
        await page.keyboard.press("Enter");
      }
      
      console.log("  Second pass submitted. Waiting for review...");
      
      // Wait for second response
      await sleep(60000);
      console.log("  Second pass completed (60s wait).");
    }

    // Save final output
    console.log("[8/8] Saving final markdown...");
    const finalResponse = await page.evaluate(() => {
      const selectors = [
        '.model-response-text',
        '[data-test-id*="response"]',
        '.response-content',
        '.message-content',
        'div[data-message-author-role="model"]',
      ];
      for (const sel of selectors) {
        const els = document.querySelectorAll(sel);
        if (els.length > 0) {
          return els[els.length - 1].textContent;
        }
      }
      return document.body?.innerText || "";
    });

    const finalPath = join(OUTPUT_DIR, "highest-paying-countries-software-engineers.md");
    writeFileSync(finalPath, finalResponse, "utf-8");
    console.log(`  Final output saved to ${finalPath} (${finalResponse.length} chars)`);

    console.log("\n=== WORKFLOW COMPLETE ===");
    console.log(`✓ First pass: ${firstPassPath}`);
    console.log(`✓ Final output: ${finalPath}`);

  } catch (err) {
    console.error("ERROR:", err.message);
    await page.screenshot({ path: join(OUTPUT_DIR, "error.png"), fullPage: true }).catch(() => {});
  } finally {
    await browser.close();
  }
}

main();
