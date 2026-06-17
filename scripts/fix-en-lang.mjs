// Post-build: postavi <html lang="en"> na svim EN statičkim stranicama.
//
// App Router ima jedan root layout (<html lang="sr">), a static export ne može
// po pod-stablu da menja taj atribut u serviranom HTML-u (HtmlLang to radi tek
// na klijentu). Ovaj skript prepiše lang u već generisanim out/en/**/*.html da
// crawler, screen-reader i no-JS render odmah vide ispravan jezik.
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const EN_DIR = join(process.cwd(), "out", "en");

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(full);
    else if (entry.name.endsWith(".html")) yield full;
  }
}

let patched = 0;
for await (const file of htmlFiles(EN_DIR)) {
  const html = await readFile(file, "utf8");
  const next = html.replace('<html lang="sr"', '<html lang="en"');
  if (next !== html) {
    await writeFile(file, next);
    patched++;
  }
}
console.log(`fix-en-lang: postavljen lang="en" na ${patched} EN stranica.`);
