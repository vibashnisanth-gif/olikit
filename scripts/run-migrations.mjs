import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const migrationsDir = join(__dirname, '..', 'db', 'migrations');

const files = readdirSync(migrationsDir)
  .filter(f => f.endsWith('.sql'))
  .sort();

console.log(`Found ${files.length} migration(s):`);
console.log(files.map(f => `  - ${f}`).join('\n'));

console.log('\nTo apply migrations:');
console.log('  wrangler d1 migrations apply olikit-salary-db');
console.log('  wrangler d1 migrations apply olikit-tax-db');
console.log('  wrangler d1 migrations apply olikit-col-db');
console.log('\nOr seed with:');
console.log('  npx tsx db/seed/index.ts\n');
