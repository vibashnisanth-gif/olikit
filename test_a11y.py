import urllib.request as u, re
url = 'https://olikit.com/us'
c = u.urlopen(url).read().decode()

# Check for accessibility features
has_viewport = 'viewport' in c
has_lang = 'lang=' in c
has_skip_link = 'skip' in c.lower() and 'link' in c.lower()
has_alt_texts = 'alt=' in c
has_aria_labels = 'aria-label' in c or 'aria-labelledby' in c
has_headings = 'h1' in c and 'h2' in c
has_landmarks = 'main' in c and 'nav' in c and 'footer' in c

print('Accessibility check (homepage):')
print('  Viewport meta:', has_viewport)
print('  Lang attribute:', has_lang)
print('  Skip link:', has_skip_link)
print('  Alt texts:', has_alt_texts)
print('  ARIA labels:', has_aria_labels)
print('  Heading structure:', has_headings)
print('  Landmarks:', has_landmarks)