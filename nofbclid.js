const strip = ["fbclid", "igshid"]

function fbclidStrip(req) {
  const url = new URL(req.url)
  let edit = false

  for (let s in strip) {
    let id = url.searchParams.get(s)
    if (id) {
      url.searchParams.delete(s)
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