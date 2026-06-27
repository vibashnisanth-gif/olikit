import cloakbrowser, time, os, json, csv, io

REPORTS_DIR = r'C:\Users\vibas\.paperclip\instances\default\workspaces\578b0ebe-0563-45d1-ac46-8231592d8210\olikit\reports'
DOWNLOADS_DIR = os.path.expanduser('~/Downloads')

print("Launching Cloak Browser...")
ctx = cloakbrowser.launch_persistent_context(
    user_data_dir=r'C:\Users\vibas\cloak_profile',
    headless=False,
    viewport={'width': 1280, 'height': 720}
)
page = ctx.new_page()

# Navigate to Search Console - go to Performance page (uses currently selected property)
print("Navigating to Search Console Performance...")
page.goto(
    'https://search.google.com/search-console/performance/search-analytics?num_of_days=90',
    wait_until='networkidle',
    timeout=60000
)
time.sleep(5)
page.screenshot(path=os.path.join(REPORTS_DIR, 'gsc-step1.png'))
print(f"URL: {page.url}")
print(f"Title: {page.title()}")

# Check login status
if 'accounts.google.com' in page.url:
    print("NOT LOGGED IN - cannot proceed")
    ctx.close()
    exit(1)

# Check if we have access - if not, try switching property
if 'not-verified' in page.url or 'don\'t have access' in page.title():
    print("No access to current property. Trying to switch to olikit.com...")
    # Click the property selector dropdown
    try:
        prop_dropdown = page.locator('[data-testid="property-selector"], [role="combobox"]:has-text("Search property"), button:has-text("Search property")').first
        prop_dropdown.click(timeout=5000)
        time.sleep(2)
        page.screenshot(path=os.path.join(REPORTS_DIR, 'gsc-property-dropdown.png'))
        
        # Look for olikit.com in the dropdown
        olikit_option = page.locator('text=olikit.com').first
        olikit_option.click(timeout=5000)
        time.sleep(5)
        page.screenshot(path=os.path.join(REPORTS_DIR, 'gsc-step1.png'))
        print(f"After switch - URL: {page.url}")
    except Exception as e:
        print(f"Could not switch property: {e}")
        print("Trying direct URL with https://olikit.com...")
        page.goto(
            'https://search.google.com/search-console/performance/search-analytics?resource_id=https%3A%2F%2Folikit.com&num_of_days=90',
            wait_until='networkidle',
            timeout=60000
        )
        time.sleep(5)
        page.screenshot(path=os.path.join(REPORTS_DIR, 'gsc-step1.png'))
        print(f"URL: {page.url}")

# Get all table data from the page by scraping the DOM
print("\n=== QUERIES TAB ===")
print("Extracting query data from table...")

# Try to get table data via JavaScript
queries_data = page.evaluate("""() => {
    const rows = document.querySelectorAll('table tbody tr');
    const data = [];
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length >= 4) {
            data.push({
                query: cells[0]?.innerText?.trim() || '',
                clicks: cells[1]?.innerText?.trim() || '',
                impressions: cells[2]?.innerText?.trim() || '',
                ctr: cells[3]?.innerText?.trim() || '',
                position: cells[4]?.innerText?.trim() || ''
            });
        }
    });
    return data;
}""")
print(f"Found {len(queries_data)} query rows")

# Try to get ALL data by scrolling
print("Scrolling to load more data...")
for i in range(20):
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    time.sleep(0.5)

# Re-extract after scrolling
queries_data = page.evaluate("""() => {
    const rows = document.querySelectorAll('table tbody tr');
    const data = [];
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length >= 4) {
            data.push({
                query: cells[0]?.innerText?.trim() || '',
                clicks: cells[1]?.innerText?.trim() || '',
                impressions: cells[2]?.innerText?.trim() || '',
                ctr: cells[3]?.innerText?.trim() || '',
                position: cells[4]?.innerText?.trim() || ''
            });
        }
    });
    return data;
}""")
print(f"After scrolling: {len(queries_data)} query rows")

# Save queries data
if queries_data:
    with open(os.path.join(REPORTS_DIR, 'search-console-queries.csv'), 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['query', 'clicks', 'impressions', 'ctr', 'position'])
        writer.writeheader()
        writer.writerows(queries_data)
    print(f"Saved {len(queries_data)} queries to search-console-queries.csv")

# Now get page data
print("\n=== PAGES TAB ===")
try:
    # Click Pages tab
    pages_tab = page.locator('[role="tab"]:has-text("Pages")').first
    pages_tab.click()
    time.sleep(4)
    
    # Scroll to load all
    for i in range(20):
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        time.sleep(0.5)
    
    pages_data = page.evaluate("""() => {
        const rows = document.querySelectorAll('table tbody tr');
        const data = [];
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            if (cells.length >= 4) {
                data.push({
                    page: cells[0]?.innerText?.trim() || '',
                    clicks: cells[1]?.innerText?.trim() || '',
                    impressions: cells[2]?.innerText?.trim() || '',
                    ctr: cells[3]?.innerText?.trim() || '',
                    position: cells[4]?.innerText?.trim() || ''
                });
            }
        });
        return data;
    }""")
    print(f"Found {len(pages_data)} page rows")
    
    if pages_data:
        with open(os.path.join(REPORTS_DIR, 'search-console-pages.csv'), 'w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=['page', 'clicks', 'impressions', 'ctr', 'position'])
            writer.writeheader()
            writer.writerows(pages_data)
        print(f"Saved {len(pages_data)} pages to search-console-pages.csv")
except Exception as e:
    print(f"Error on Pages tab: {e}")

# Now get country data
print("\n=== COUNTRIES TAB ===")
try:
    countries_tab = page.locator('[role="tab"]:has-text("Countries")').first
    countries_tab.click()
    time.sleep(4)
    
    for i in range(10):
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        time.sleep(0.5)
    
    countries_data = page.evaluate("""() => {
        const rows = document.querySelectorAll('table tbody tr');
        const data = [];
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            if (cells.length >= 4) {
                data.push({
                    country: cells[0]?.innerText?.trim() || '',
                    clicks: cells[1]?.innerText?.trim() || '',
                    impressions: cells[2]?.innerText?.trim() || '',
                    ctr: cells[3]?.innerText?.trim() || '',
                    position: cells[4]?.innerText?.trim() || ''
                });
            }
        });
        return data;
    }""")
    print(f"Found {len(countries_data)} country rows")
    
    if countries_data:
        with open(os.path.join(REPORTS_DIR, 'search-console-countries.csv'), 'w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=['country', 'clicks', 'impressions', 'ctr', 'position'])
            writer.writeheader()
            writer.writerows(countries_data)
        print(f"Saved {len(countries_data)} countries to search-console-countries.csv")
except Exception as e:
    print(f"Error on Countries tab: {e}")

# Also try the export button approach
print("\n=== ATTEMPTING CSV EXPORT ===")
try:
    # Go back to Queries tab
    queries_tab = page.locator('[role="tab"]:has-text("Queries")').first
    queries_tab.click()
    time.sleep(3)
    
    # Look for export menu button (three dots or download icon)
    export_btns = page.locator('button[aria-label*="Export"], button[aria-label*="Download"], [data-export], button:has(svg)').all()
    print(f"Found {len(export_btns)} potential export buttons")
    
    for btn in export_btns[:5]:
        try:
            label = btn.get_attribute('aria-label') or btn.inner_text()
            print(f"  Button: {label}")
        except:
            pass
except Exception as e:
    print(f"Export button search error: {e}")

page.screenshot(path=os.path.join(REPORTS_DIR, 'gsc-final.png'))
print("\nDone. Closing browser...")
ctx.close()
print("Complete.")
