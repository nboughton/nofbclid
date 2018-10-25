function fbclidStrip(req) {
  if (req.url.match("fbclid")) {
    const url = new URL(req.url)

    url.searchParams.delete("fbclid")
    return {
      redirectUrl: url.href
    }
  }
}

browser.webRequest.onBeforeRequest.addListener(
  fbclidStrip,
  { urls: ["<all_urls>"] },
  ["blocking"]
)