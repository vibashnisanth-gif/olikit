import urllib.request as u, re
c = u.urlopen('https://olikit.com/us/state/california').read().decode()
tools = re.findall(r'href="/us/state/california/tools/([^"]+)"', c)
print(tools)