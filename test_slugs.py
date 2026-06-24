import urllib.request as ur, re
c = ur.urlopen('https://olikit.com/us/states').read().decode()
states = re.findall(r'href="/us/state/([^"]+)"', c)
print(states[:10])