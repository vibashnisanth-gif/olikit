param(
    [switch]$SkipSemgrep,
    [switch]$SkipPlaywright,
    [switch]$SkipLinkinator,
    [switch]$SkipLighthouse,
    [switch]$SkipCrawl
)

$ErrorActionPreference = "Stop"
$rootDir = Split-Path -Parent $PSScriptRoot
Set-Location $rootDir

$reportDir = "$rootDir\qa"
if (-not (Test-Path $reportDir)) { New-Item -ItemType Directory -Path $reportDir | Out-Null }

$failed = $false

function Run-Step {
    param($Name, $Command)
    Write-Host "`n========================================" -ForegroundColor Cyan
    Write-Host "  $Name" -ForegroundColor Cyan
    Write-Host "========================================`n" -ForegroundColor Cyan
    try {
        Invoke-Expression $Command
        if ($LASTEXITCODE -ne 0) { throw "Exit code: $LASTEXITCODE" }
        Write-Host "`n  [PASS] $Name" -ForegroundColor Green
        return $true
    } catch {
        Write-Host "`n  [FAIL] $Name : $_" -ForegroundColor Red
        $script:failed = $true
        return $false
    }
}

Write-Host "========================================" -ForegroundColor Magenta
Write-Host "  OLIKIT QUALITY MESH PIPELINE" -ForegroundColor Magenta
Write-Host "========================================" -ForegroundColor Magenta

if (-not $SkipSemgrep)    { Run-Step "Semgrep Static Analysis"    "semgrep --config=.semgrep.yaml --error --output=qa/SEMGREP_REPORT.md src/ 2>&1" }
if (-not $SkipPlaywright)  { Run-Step "Playwright Smoke Test"      "npx playwright test --config=qa/playwright.config.ts 2>&1" }
if (-not $SkipLinkinator)  { Run-Step "Linkinator Link Check"      "npx linkinator http://localhost:3456 --config qa/linkinator.config.json 2>&1 | Out-File -FilePath qa/LINK_REPORT.md -Encoding utf8" }
if (-not $SkipLighthouse)  { Run-Step "Lighthouse CI Audit"        "npx lhci autorun --config=qa/lighthouserc.json 2>&1" }
if (-not $SkipCrawl)       { Run-Step "Crawlee Site Crawl"         "node qa/crawl.mjs 2>&1" }

Write-Host "`n========================================" -ForegroundColor Magenta
if ($failed) {
    Write-Host "  PIPELINE FAILED - One or more checks failed" -ForegroundColor Red
    Write-Host "  Review reports in qa/ directory" -ForegroundColor Red
    exit 1
} else {
    Write-Host "  PIPELINE PASSED - All checks passed" -ForegroundColor Green
    exit 0
}
