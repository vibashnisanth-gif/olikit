import cloakbrowser, time, os, json, csv

REPORTS_DIR = r'C:\Users\vibas\.paperclip\instances\default\workspaces\578b0ebe-0563-45d1-ac46-8231592d8210\olikit\reports'

print("Launching Cloak Browser...")
ctx = cloakbrowser.launch_persistent_context(
    user_data_dir=r'C:\Users\vibas\cloak_profile',
    headless=False,
    viewport={'width': 1280, 'height': 900}
)
page = ctx.new_page()

print("Navigating to GA4 Pages and screens...")
page.goto(
    'https://analytics.google.com/analytics/web/#/a396974866p540462778/reports/explorer?params=_u.dateOption%3Dlast28Days%26_u..nav%3Dmaui&r=all-pages-and-screens&ruid=all-pages-and-screens,business-objectives,examine-user-behavior&collectionId=business-objectives',
    wait_until='load',
    timeout=90000
)
time.sleep(15)

# Close any popups
try:
    page.locator('button[aria-label="Close"]').first.click(timeout=3000)
    time.sleep(1)
except:
    pass

# Change date range to 28 days if possible
try:
    date_btn = page.locator('text=Last 7 days').first
    date_btn.click(timeout=3000)
    time.sleep(1)
    last28 = page.locator('text=Last 28 days').first
    last28.click(timeout=3000)
    time.sleep(5)
except:
    print("Using default date range")

# Scroll down to see the table
page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
time.sleep(3)

# Take a full-page screenshot to see everything
page.screenshot(path=os.path.join(REPORTS_DIR, 'ga4-pages-full.png'), full_page=True)

# Try to extract data with more robust selectors
pages_data = page.evaluate("""() => {
    // GA4 tables use specific data attributes
    const rows = document.querySelectorAll('table tbody tr');
    const data = [];
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const texts = Array.from(cells).map(c => c.innerText?.trim() || '');
        if (texts.length >= 2) {
            data.push(texts);
        }
    });
    return data;
}""")
print(f"Found {len(pages_data)} rows with td cells")

# Also try extracting from any visible table structure
pages_data2 = page.evaluate("""() => {
    // Try role-based selectors
    const rows = document.querySelectorAll('[role="row"]');
    const data = [];
    rows.forEach(row => {
        const cells = row.querySelectorAll('[role="cell"]');
        const texts = Array.from(cells).map(c => c.innerText?.trim() || '');
        if (texts.length >= 2) {
            data.push(texts);
        }
    });
    return data;
}""")
print(f"Found {len(pages_data2)} rows with role=cell")

# Try extracting all text content from the table area
table_text = page.evaluate("""() => {
    // Find the table container
    const tables = document.querySelectorAll('table');
    const results = [];
    tables.forEach(table => {
        results.push(table.innerText);
    });
    return results;
}""")
print(f"Found {len(table_text)} tables")
for i, t in enumerate(table_text):
    print(f"\n--- Table {i} ---")
    print(t[:2000])

# Also try getting the data via the grid/cell elements
grid_data = page.evaluate("""() => {
    const cells = document.querySelectorAll('[data-test-id], [class*="cell"], [class*="row"]');
    const texts = [];
    cells.forEach(c => {
        const text = c.innerText?.trim();
        if (text && text.length < 200) {
            texts.push(text);
        }
    });
    return texts.slice(0, 100);
}""")
print(f"\nGrid data elements: {len(grid_data)}")
for t in grid_data[:30]:
    print(f"  {t}")

# Save whatever we found
if pages_data:
    with open(os.path.join(REPORTS_DIR, 'ga4-top-pages.csv'), 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        for row in pages_data:
            writer.writerow(row)
    print(f"\nSaved {len(pages_data)} rows to ga4-top-pages.csv")
elif pages_data2:
    with open(os.path.join(REPORTS_DIR, 'ga4-top-pages.csv'), 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        for row in pages_data2:
            writer.writerow(row)
    print(f"\nSaved {len(pages_data2)} rows to ga4-top-pages.csv")

# Now get traffic data
print("\n\n=== TRAFFIC ACQUISITION ===")
page.goto(
    'https://analytics.google.com/analytics/web/#/a396974866p540462778/reports/explorer?params=_u.dateOption%3Dlast28Days%26_u..nav%3Dmaui&r=traffic-acquisition&ruid=traffic-acquisition,business-objectives,acquire-new-users&collectionId=business-objectives',
    wait_until='load',
    timeout=90000
)
time.sleep(15)

# Close popups
try:
    page.locator('button[aria-label="Close"]').first.click(timeout=3000)
    time.sleep(1)
except:
    pass

# Scroll to table
page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
time.sleep(3)

page.screenshot(path=os.path.join(REPORTS_DIR, 'ga4-traffic-full.png'), full_page=True)

traffic_text = page.evaluate("""() => {
    const tables = document.querySelectorAll('table');
    const results = [];
    tables.forEach(table => {
        results.push(table.innerText);
    });
    return results;
}""")
print(f"Found {len(traffic_text)} tables")
for i, t in enumerate(traffic_text):
    print(f"\n--- Table {i} ---")
    print(t[:2000])

if traffic_text:
    with open(os.path.join(REPORTS_DIR, 'ga4-traffic.csv'), 'w', newline='', encoding='utf-8') as f:
        for t in traffic_text:
            f.write(t + '\n\n')
    print(f"Saved traffic data to ga4-traffic.csv")

# Landing pages
print("\n\n=== LANDING PAGES ===")
page.goto(
    'https://analytics.google.com/analytics/web/#/a396974866p540462778/reports/explorer?params=_u.dateOption%3Dlast28Days%26_u..nav%3Dmaui&r=landing-page&ruid=landing-page,business-objectives,examine-user-behavior&collectionId=business-objectives',
    wait_until='load',
    timeout=90000
)
time.sleep(15)

try:
    page.locator('button[aria-label="Close"]').first.click(timeout=3000)
    time.sleep(1)
except:
    pass

page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
time.sleep(3)

page.screenshot(path=os.path.join(REPORTS_DIR, 'ga4-landing-full.png'), full_page=True)

landing_text = page.evaluate("""() => {
    const tables = document.querySelectorAll('table');
    const results = [];
    tables.forEach(table => {
        results.push(table.innerText);
    });
    return results;
}""")
print(f"Found {len(landing_text)} tables")
for i, t in enumerate(landing_text):
    print(f"\n--- Table {i} ---")
    print(t[:2000])

if landing_text:
    with open(os.path.join(REPORTS_DIR, 'ga4-landing-pages.csv'), 'w', newline='', encoding='utf-8') as f:
        for t in landing_text:
            f.write(t + '\n\n')
    print(f"Saved landing data to ga4-landing-pages.csv")

page.screenshot(path=os.path.join(REPORTS_DIR, 'ga4-final.png'))
print("\nDone. Closing browser...")
ctx.close()
print("Complete.")
