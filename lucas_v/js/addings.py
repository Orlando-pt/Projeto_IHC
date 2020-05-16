import requests
import json
import urllib

out = open("result.txt", "a")
url = "https://api.jsonbin.io/b/5ebad993a47fdd6af162107f/2"

response = urllib.urlopen(url)

data = json.loads(response.read())
print(data)