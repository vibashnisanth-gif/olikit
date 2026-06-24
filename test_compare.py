import urllib.request as u, re
url = 'https://olikit.com/us/comparisons/salary/us-vs-uk'
c = u.urlopen(url).read().decode()
has_table = 'table' in c.lower()
has_takeaways = 'key takeaways' in c.lower() or 'key-takeaways' in c
has_faq = 'faq' in c.lower()
has_winner = 'winner' in c.lower()
print('Comparison page:')
print('  Has table:', has_table)
print('  Has takeaways:', has_takeaways)
print('  Has FAQ:', has_faq)
print('  Has winner:', has_winner)