// Tells Bing, Yandex, Seznam and Naver (and through Bing: ChatGPT search and Copilot) that pages changed.
// Run after each deploy:  npm run indexnow
const KEY = "500e1407a3b12ac4dc429b87a31bc8f1";
const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.esejengineering.com").replace(/\/$/, "");

const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs -> HTTP ${res.status}`);
