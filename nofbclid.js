function fbclidStrip(req) {
  const url = new URL(req.url)
  const cid = url.searchParams.get("fbclid")
  if (cid) {
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