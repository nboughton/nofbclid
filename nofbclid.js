function fbclidStrip(req) {
  const url = new URL(req.url)
  let edit = false

  for (const param of ["fbclid", "igshid"]) { // params to delete
    if (url.searchParams.get(param)) {
      url.searchParams.delete(param)
      edit = true
    }
  }

  if (edit) {
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
