const fs = require('fs');

async function loginAndGetCookies() {
  const loginUrl = "https://aipromptzyra.com/wp-login.php";
  const params = new URLSearchParams();
  params.append("log", "aipromptzyra");
  params.append("pwd", "AIrahman69543@");
  params.append("wp-submit", "Log In");
  params.append("redirect_to", "https://aipromptzyra.com/wp-admin/");
  params.append("testcookie", "1");

  const loginRes = await fetch(loginUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
    redirect: "manual"
  });

  const cookies = [];
  const setCookie = loginRes.headers.getSetCookie ? loginRes.headers.getSetCookie() : [loginRes.headers.get("set-cookie")];
  for (const c of setCookie) {
    if (c) cookies.push(c.split(";")[0]);
  }
  return cookies.join("; ");
}

function decodeHtmlEntities(str) {
  return str
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'");
}

async function updateThemeFile(cookieHeader, fileName, transformFn) {
  console.log(`\n=== Updating ${fileName} ===`);
  const editorUrl = `https://aipromptzyra.com/wp-admin/theme-editor.php?file=${encodeURIComponent(fileName)}&theme=aipromptzyra`;
  const res = await fetch(editorUrl, { headers: { Cookie: cookieHeader } });
  const html = await res.text();

  const nonce = html.match(/name="nonce"\s*value="([^"]+)"/)?.[1];
  const textareaMatch = html.match(/<textarea[^>]*id="newcontent"[^>]*>([\s\S]*?)<\/textarea>/);

  if (!nonce || !textareaMatch) {
    throw new Error(`Failed to find nonce or textarea for ${fileName}`);
  }

  const originalContent = decodeHtmlEntities(textareaMatch[1]);
  const newContent = transformFn(originalContent);

  if (newContent === originalContent) {
    console.log(`No changes needed for ${fileName}`);
    return true;
  }

  const postParams = new URLSearchParams();
  postParams.append("nonce", nonce);
  postParams.append("_wp_http_referer", `/wp-admin/theme-editor.php?file=${encodeURIComponent(fileName)}&theme=aipromptzyra`);
  postParams.append("action", "update");
  postParams.append("file", fileName);
  postParams.append("theme", "aipromptzyra");
  postParams.append("newcontent", newContent);
  postParams.append("submit", "Update File");

  const saveRes = await fetch("https://aipromptzyra.com/wp-admin/theme-editor.php", {
    method: "POST",
    headers: {
      Cookie: cookieHeader,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: postParams.toString()
  });

  const saveHtml = await saveRes.text();
  const success = saveHtml.includes("File edited successfully") || saveHtml.includes("updated=true");
  console.log(`Save result for ${fileName}: success=${success}, status=${saveRes.status}`);

  if (!success) {
    console.error("Save HTML snippet:", saveHtml.substring(0, 500));
  }
  return success;
}

module.exports = { loginAndGetCookies, updateThemeFile };
