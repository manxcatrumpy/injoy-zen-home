// Build guardrail: fail if any asset referenced by the built HTML/JS/CSS is
// missing from dist/. This catches the class of bug where the deployed output
// references asset filenames that were never emitted (e.g. hash mismatches),
// which would otherwise ship broken images/scripts to production unnoticed.
//
// Runs in CI as part of `npm run build`, so a broken build never deploys.
import { readFile, readdir, stat } from "node:fs/promises";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const DIST = fileURLToPath(new URL("../dist", import.meta.url));
const ASSET_RE = /\/assets\/[A-Za-z0-9._-]+\.(?:webp|avif|png|jpe?g|svg|js|css|woff2?)/g;
const SCAN_EXT = new Set([".html", ".js", ".css"]);

async function exists(p) {
  try {
    return (await stat(p)).isFile();
  } catch {
    return false;
  }
}

// Recursive readdir (Node 20 compatible).
const entries = await readdir(DIST, { recursive: true });
const sourceFiles = entries
  .filter((e) => SCAN_EXT.has(extname(e)))
  .map((e) => join(DIST, e));

const refs = new Set();
for (const f of sourceFiles) {
  const text = await readFile(f, "utf-8");
  for (const m of text.matchAll(ASSET_RE)) refs.add(m[0]);
}

const missing = [];
for (const ref of refs) {
  if (!(await exists(join(DIST, ref)))) missing.push(ref);
}

if (missing.length > 0) {
  console.error(
    `\n[check-assets] ✖ ${missing.length} referenced asset(s) missing from dist/:`,
  );
  for (const m of missing.sort()) console.error("  -", m);
  console.error(
    "\nThe build references assets that were not emitted. Refusing to deploy.\n",
  );
  process.exit(1);
}

console.log(`[check-assets] ✓ all ${refs.size} referenced assets exist in dist/`);
