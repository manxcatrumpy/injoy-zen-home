// Post-build prerender: serve the single `vite build` output, visit each route
// with a headless browser, and save the fully-rendered HTML as a static file.
//
// Why this approach: there is exactly ONE build, so every asset hash referenced
// by the captured HTML already exists in dist/ (no dual-build hash mismatch).
// GitHub Pages serves foo.html at /foo with a 200, so crawlers index each route.
import { createServer } from "node:http";
import { readFile, writeFile, stat } from "node:fs/promises";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const DIST = fileURLToPath(new URL("../dist", import.meta.url));
const PORT = 4322;

// Routes to prerender. "/" overwrites index.html; the rest become <name>.html.
const ROUTES = ["/", "/about", "/dining", "/space", "/life", "/shop", "/location"];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".avif": "image/avif",
  ".json": "application/json",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

async function tryFile(p) {
  try {
    const s = await stat(p);
    if (s.isFile()) return p;
  } catch {
    /* not found */
  }
  return null;
}

// Static server with SPA fallback to index.html for unknown routes.
function startServer() {
  const server = createServer(async (req, res) => {
    const urlPath = decodeURIComponent(req.url.split("?")[0]);
    let file =
      (await tryFile(join(DIST, urlPath))) ||
      (await tryFile(join(DIST, urlPath, "index.html"))) ||
      join(DIST, "index.html"); // SPA fallback
    try {
      const body = await readFile(file);
      res.writeHead(200, { "Content-Type": MIME[extname(file)] || "application/octet-stream" });
      res.end(body);
    } catch {
      res.writeHead(404);
      res.end("Not found");
    }
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

// While prerendering, the browser fires the font link's onload and rewrites
// media="print" -> "all", which would make the captured stylesheet render-
// blocking again. Re-assert media="print" on the Google Fonts stylesheet link
// (the preload and <noscript> copies are left alone) so first paint stays fast.
function keepFontsNonBlocking(html) {
  return html.replace(/<link\b[^>]*>/g, (tag) => {
    if (
      tag.includes("fonts.googleapis.com") &&
      /rel=["']stylesheet["']/.test(tag) &&
      tag.includes("onload")
    ) {
      return /\smedia=["'][^"']*["']/.test(tag)
        ? tag.replace(/\smedia=["'][^"']*["']/, ' media="print"')
        : tag.replace("<link ", '<link media="print" ');
    }
    return tag;
  });
}

async function main() {
  const server = await startServer();
  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const route of ROUTES) {
    await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: "networkidle" });
    // Wait until the SPA has rendered real content into #root.
    await page.waitForFunction(() => {
      const root = document.getElementById("root");
      return root && root.children.length > 0;
    });

    let html = "<!DOCTYPE html>\n" + (await page.content()).replace(/^<!DOCTYPE html>/i, "");
    html = keepFontsNonBlocking(html);
    const outName = route === "/" ? "index.html" : `${route.slice(1)}.html`;
    await writeFile(join(DIST, outName), html, "utf-8");
    const title = await page.title();
    console.log(`  ✓ ${route.padEnd(12)} → ${outName}  (${title})`);
  }

  await browser.close();
  server.close();
  console.log(`[prerender] ${ROUTES.length} routes prerendered.`);
}

main().catch((err) => {
  console.error("[prerender] failed:", err);
  process.exit(1);
});
