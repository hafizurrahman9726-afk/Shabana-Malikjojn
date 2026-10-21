import urllib.request, re, http.cookiejar, json

cj = http.cookiejar.MozillaCookieJar("/tmp/wp_cookies.txt")
cj.load()
opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))

# Open post edit screen for page 44
req = urllib.request.Request("https://aipromptzyra.com/wp-admin/post.php?post=44&action=edit", headers={"User-Agent": "Mozilla/5.0"})
with opener.open(req) as resp:
    html = resp.read().decode("utf-8")

matches = re.findall(r'wpApiSettings\s*=\s*({[^;]+});', html)
print("wpApiSettings match:", matches)
if not matches:
    # Look for "nonce" or "apiFetch"
    print("nonce occurrences:", re.findall(r'\"nonce\"\s*:\s*\"([a-f0-9]+)\"', html))
    print("createNonce occurrences:", re.findall(r'apiFetch\.createNonceMiddleware\(\s*\"([a-f0-9]+)\"\s*\)', html))
