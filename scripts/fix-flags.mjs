#!/usr/bin/env node
/**
 * Global fix: replace all emoji flag renderings with <FlagImage> component.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

const FLAG_IMPORT = 'import { FlagImage } from "@/components/ui/flag-image"';

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
let totalReplacements = 0;

for (const filePath of files) {
  let content = readFileSync(filePath, "utf-8");
  const original = content;
  let replacements = 0;

  // Skip files that already import FlagImage
  if (content.includes('FlagImage')) continue;

  // Pattern 1: {COUNTRY.flag} → <FlagImage code={COUNTRY.slug} size="lg" />
  {
    const regex = /\{COUNTRY\.flag\}/g;
    if (regex.test(content)) {
      content = content.replace(regex, '<FlagImage code={COUNTRY.slug} size="lg" />');
      replacements++;
    }
  }

  // Pattern 2: {c.flagA} in span → <FlagImage code={c.slugA} size="xl" />
  {
    const regexA = /<span[^>]*>\{c\.flagA\}<\/span>/g;
    if (regexA.test(content)) {
      content = content.replace(regexA, '<FlagImage code={c.slugA} size="xl" />');
      replacements++;
    }
    const regexB = /<span[^>]*>\{c\.flagB\}<\/span>/g;
    if (regexB.test(content)) {
      content = content.replace(regexB, '<FlagImage code={c.slugB} size="xl" />');
      replacements++;
    }
  }

  // Pattern 3: COUNTRY_FLAGS[slug] in span → <FlagImage code={slug} size="xl" />
  {
    const regex = /<span[^>]*>\{COUNTRY_FLAGS\[([^\]]+)\]\}<\/span>/g;
    if (regex.test(content)) {
      content = content.replace(regex, (_, slug) => `<FlagImage code={${slug}} size="xl" />`);
      replacements++;
    }
  }

  // Pattern 4: COUNTRY_FLAGS[slug] inline (not in span) → <FlagImage code={slug} size="sm" />
  {
    const regex = /\{COUNTRY_FLAGS\[([^\]]+)\]\}/g;
    if (regex.test(content)) {
      content = content.replace(regex, (_, slug) => `<FlagImage code={${slug}} size="sm" />`);
      replacements++;
    }
  }

  // Pattern 5: {c.flag} in span → <FlagImage code={c.slug} size="xl" />
  {
    const regex = /<span[^>]*>\{c\.flag\}<\/span>/g;
    if (regex.test(content)) {
      content = content.replace(regex, '<FlagImage code={c.slug} size="xl" />');
      replacements++;
    }
  }

  // Pattern 6: {c.flag} inline → <FlagImage code={c.slug} size="lg" />
  // Be careful: only replace if not already handled by Pattern 5
  {
    const regex = /\{c\.flag\}/g;
    if (regex.test(content)) {
      content = content.replace(regex, '<FlagImage code={c.slug} size="lg" />');
      replacements++;
    }
  }

  // Pattern 7: {r.flag}/{d.flag}/{data.flag}/{country.flag}/{row.flag}/{card.flag}/{countryA.flag}/{countryB.flag}
  {
    const regex = /\{([a-zA-Z]+)\.flag\}/g;
    if (regex.test(content)) {
      content = content.replace(regex, (_, varName) => {
        const slugMap = {
          r: "r.slug", d: "d.slug", data: "data.slug", country: "country.slug",
          row: "row.slug", card: "card.slug", countryA: "countryA.slug", countryB: "countryB.slug",
        };
        const slugProp = slugMap[varName] || `${varName}.slug`;
        return `<FlagImage code={${slugProp}} size="lg" />`;
      });
      replacements++;
    }
  }

  // Pattern 8: {flag} / {countryFlag} destructured
  {
    if (/\{flag\}/.test(content)) {
      content = content.replace(/\{flag\}/g, '<FlagImage code={slug} size="lg" />');
      replacements++;
    }
    if (/\{countryFlag\}/.test(content)) {
      content = content.replace(/\{countryFlag\}/g, '<FlagImage code={slug} size="lg" />');
      replacements++;
    }
  }

  // Pattern 9: entry.flag in ranking entries
  {
    if (/\{entry\.flag\}/.test(content)) {
      content = content.replace(/\{entry\.flag\}/g, '<FlagImage code={entry.slug} size="sm" />');
      replacements++;
    }
  }

  // Add FlagImage import if we made replacements
  if (replacements > 0 && content !== original) {
    if (!content.includes('import { FlagImage }')) {
      const lastImportIdx = content.lastIndexOf('\nimport ');
      if (lastImportIdx !== -1) {
        const endOfLine = content.indexOf('\n', lastImportIdx + 1);
        content = content.slice(0, endOfLine + 1) + FLAG_IMPORT + '\n' + content.slice(endOfLine + 1);
      } else {
        content = FLAG_IMPORT + '\n' + content;
      }
    }

    writeFileSync(filePath, content, "utf-8");
    totalFiles++;
    totalReplacements += replacements;
    console.log(`✓ ${filePath.replace(/.*src\\/, "src/")} (${replacements})`);
  }
}

console.log(`\nDone: ${totalFiles} files, ${totalReplacements} replacements`);
