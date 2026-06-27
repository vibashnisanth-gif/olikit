import cloakbrowser, time, os

REPORTS_DIR = r'C:\Users\vibas\.paperclip\instances\default\workspaces\578b0ebe-0563-45d1-ac46-8231592d8210\olikit\reports'
SITE_URL = "https://olikit.com"

print("Launching Cloak Browser...")
ctx = cloakbrowser.launch_persistent_context(
    user_data_dir=r'C:\Users\vibas\cloak_profile',
    headless=False,
    viewport={'width': 1280, 'height': 720}
)
page = ctx.new_page()

# Collect all internal links from the homepage
print("Collecting links from homepage...")
page.goto(f"{SITE_URL}/us", wait_until='load', timeout=60000)
time.sleep(5)

# Get all internal links
links = page.evaluate("""() => {
    const anchors = document.querySelectorAll('a[href]');
    const links = new Set();
    anchors.forEach(a => {
        const href = a.getAttribute('href');
        if (href && href.startsWith('/') && !href.startsWith('//')) {
            links.add(href.split('?')[0].split('#')[0]);
        }
    });
    return Array.from(links);
}""")
print(f"Found {len(links)} internal links on homepage")

# Check each link
broken = []
redirects = []
working = []

for i, link in enumerate(links):
    url = f"{SITE_URL}{link}"
    print(f"[{i+1}/{len(links)}] Checking {link}...", end=" ")
    try:
        response = page.goto(url, wait_until='load', timeout=15000)
        time.sleep(1)
        status = response.status if response else 'unknown'
        final_url = page.url
        
        if status == 404:
            print(f"404 BROKEN")
            broken.append({'link': link, 'status': status})
        elif status >= 300 and status < 400:
            print(f"{status} REDIRECT to {final_url}")
            redirects.append({'link': link, 'status': status, 'redirect': final_url})
        elif status >= 400:
            print(f"{status} ERROR")
            broken.append({'link': link, 'status': status})
        else:
            print(f"{status} OK")
            working.append(link)
    except Exception as e:
        print(f"TIMEOUT/ERROR: {e}")
        broken.append({'link': link, 'status': 'timeout'})

# Save results
with open(os.path.join(REPORTS_DIR, 'broken-links.txt'), 'w', encoding='utf-8') as f:
    f.write("=== BROKEN LINKS (404) ===\n")
    for item in broken:
        f.write(f"{item['link']} - Status: {item['status']}\n")
    f.write(f"\n=== REDIRECTS ===\n")
    for item in redirects:
        f.write(f"{item['link']} -> {item['redirect']}\n")
    f.write(f"\n=== WORKING ({len(working)}) ===\n")
    for link in working:
        f.write(f"{link}\n")

print(f"\n=== SUMMARY ===")
print(f"Working: {len(working)}")
print(f"Broken: {len(broken)}")
print(f"Redirects: {len(redirects)}")

if broken:
    print("\nBROKEN LINKS:")
    for item in broken:
        print(f"  {item['link']} - {item['status']}")

page.screenshot(path=os.path.join(REPORTS_DIR, 'link-checker.png'))
print("\nDone. Closing browser...")
ctx.close()
print("Complete.")
