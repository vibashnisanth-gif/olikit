#!/bin/bash
set -euo pipefail

echo "=== Olikit Dataset Pipeline Deployment ==="

echo "Creating D1 databases..."
wrangler d1 create olikit-salary-db 2>/dev/null || echo "  salary DB exists"
wrangler d1 create olikit-tax-db 2>/dev/null || echo "  tax DB exists"
wrangler d1 create olikit-col-db 2>/dev/null || echo "  COL DB exists"

echo ""
echo "Apply this migration:"
echo "  wrangler d1 migrations apply olikit-salary-db --remote"
echo "  wrangler d1 migrations apply olikit-tax-db --remote"
echo "  wrangler d1 migrations apply olikit-col-db --remote"

echo ""
echo "To seed: npx tsx db/seed/index.ts"
echo "To deploy: wrangler deploy"
