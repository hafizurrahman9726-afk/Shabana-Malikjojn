const fs = require('fs');

async function inspectLiveGuides() {
  const loginUrl = "https://aipromptzyra.com/wp-login.php";
  const params = new URLSearchParams();
  params.append("log", "aipromptzyra");
  params.append("pwd", "AIrahman69543@");
  params.append("wp-submit", "Log In");
  params.append("redirect_to", "https://aipromptzyra.com/wp-admin/");
  params.append("testcookie", "1");

  const initRes = await fetch(loginUrl);
  const setCookie = initRes.headers.getSetCookie ? initRes.headers.getSetCookie() : [initRes.headers.get("set-cookie")];
  const cookieHeader = setCookie.map(c => c.split(";")[0]).join("; ") + "; wordpress_test_cookie=WP%20Cookie%20check";

  const loginRes = await fetch(loginUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded", "Cookie": cookieHeader, "User-Agent": "Mozilla/5.0" },
    body: params.toString(),
    redirect: "manual"
  });

  const authCookies = (loginRes.headers.getSetCookie ? loginRes.headers.getSetCookie() : [loginRes.headers.get("set-cookie")])
    .map(c => c.split(";")[0]).join("; ");

  const res = await fetch("https://aipromptzyra.com/wp-admin/theme-editor.php?file=front-page.php&theme=aipromptzyra", {
    headers: { "Cookie": authCookies, "User-Agent": "Mozilla/5.0" }
  });
  const html = await res.text();
  const textareaMatch = html.match(/<textarea[^>]*id="newcontent"[^>]*>([\s\S]*?)<\/textarea>/);
  if (textareaMatch) {
    let content = textareaMatch[1]
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, "\"")
      .replace(/&#039;/g, "'");
    fs.writeFileSync("/tmp/live_front_page.php", content);
    console.log("Saved live front-page.php! Length:", content.length);
    const idx = content.indexOf("guides_query");
    console.log("Snippet from guides_query:\n", content.substring(idx, idx + 2500));
  } else {
    console.log("No textarea match");
  }
}
inspectLiveGuides();
