#!/usr/bin/env node
/**
 * Fix: add `slug` to all countryRanking.entries objects across page files.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

const NAME_TO_SLUG = {
  "United States": "us", "USA": "us", "US": "us",
  "United Kingdom": "uk", "UK": "uk",
  "Australia": "au",
  "Canada": "ca",
  "New Zealand": "nz",
  "India": "in",
  "Singapore": "sg",
};

function findTsxFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const s = statSync(full);
    if (s.isDirectory() && !["node_modules", ".next", ".git"].includes(entry)) {
      results.push(...findTsxFiles(full));
    } else if (s.isFile() && entry.endsWith(".tsx")) {
      results.push(full);
    }
  }
  return results;
}

const files = findTsxFiles("src");
let totalFiles = 0;

for (const filePath of files) {
  let content = readFileSync(filePath, "utf-8");
  const original = content;

  // Match entries array patterns with rank, flag, name, salary but no slug
  // Pattern: { rank: N, flag: "🇺🇸", name: "United States", salary: "..." }
  // Need to add slug: "us" after flag
  const regex = /(\{\s*rank:\s*\d+,\s*flag:\s*"[^"]+",\s*name:\s*"([^"]+)")/g;
  
  if (regex.test(content)) {
    content = content.replace(regex, (match, prefix, name) => {
      const slug = NAME_TO_SLUG[name];
      if (!slug) {
        console.log(`  ⚠ Unknown country "${name}" in ${filePath.replace(/.*src\\/, "src/")}`);
        return match;
      }
      return `${prefix}, slug: "${slug}"`;
    });
  }

  if (content !== original) {
    writeFileSync(filePath, content, "utf-8");
    totalFiles++;
    console.log(`✓ ${filePath.replace(/.*src\\/, "src/")}`);
  }
}

console.log(`\nDone: ${totalFiles} files updated`);
