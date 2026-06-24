import urllib.request as u, re
url = 'https://olikit.com/us/search'
c = u.urlopen(url).read().decode()
has_input = 'input' in c and 'search' in c.lower()
has_results = 'result' in c.lower()
has_categories = 'category' in c.lower() or 'calculator' in c.lower() or 'guide' in c.lower()
print('Search page:')
print('  Has search input:', has_input)
print('  Has results section:', has_categories)
print('  Has categories:', has_categories)