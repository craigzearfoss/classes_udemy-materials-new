import urllib.request as url

web_data = url.urlopen("https://docs.python.org/2/library/urllib.html")

print(web_data.read())