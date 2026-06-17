# Servoteh

Veb sajt kompanije Servoteh d.o.o. — Next.js 16 + React 19 + TypeScript + Tailwind v4,
statički export koji servira **Cloudflare Worker** (asseti + kontakt forma).

> **Status: U PRODUKCIJI** — live na **https://servoteh.com** (SR) i **/en/** (EN).
> `servoteh.rs` i `servoteh.co.rs` → 301 → `servoteh.com`.
> Za konvencije, arhitekturu, terminologiju i pun status vidi **`CLAUDE.md`** i
> **`PROJEKAT-STATUS-I-PLAN.md`**.

## Preduslovi

- Node.js 20+ (preporuka 22)
- npm

## Lokalni razvoj

```bash
npm install
npm run dev
# http://localhost:3000
```

## Produkcijski build

```bash
npm run build
```

Generiše statički sajt u `out/` (čist HTML/CSS/JS, bez servera). Skripta je
`next build` + `node scripts/fix-en-lang.mjs` (post-build: postavlja
`<html lang="en">` na `out/en/**`, jer App Router root layout je `lang="sr"`).

## Git i deploy

Repo: **`Servoteh/servoteh-sajt`**, grana `main`. `node_modules/`, `.next/` i `out/`
se ne komituju (vidi `.gitignore`).

**Auto-deploy:** svaki `git push` na `main` pokreće GitHub Action
(`.github/workflows/deploy.yml`) → `npm run build` + `npx wrangler deploy`.
Preduslov: repo secret **`CLOUDFLARE_API_TOKEN`** (ovlašćenje „Edit Cloudflare Workers").
Ručni deploy: `npm run build && npx wrangler deploy`.

**Hosting:** Cloudflare Worker `servoteh-sajt` (`wrangler.jsonc`, `main = worker/index.ts`).
Worker:
- servira statičke assete iz `out/` (binding `ASSETS`),
- obrađuje `POST /api/contact` → šalje mejl preko **Resend**-a,
- radi **301 redirekte** sa starih URL-ova (`/about_us` → `/#about`, itd.).

Env (Cloudflare → Worker → Settings → Variables):
- `RESEND_API_KEY` — **secret** (obavezno za slanje forme)
- `CONTACT_TO` = `office@servoteh.com`
- `CONTACT_FROM` = `Servoteh <office@servoteh.com>`

**DNS:** sva tri domena (`servoteh.com`, `servoteh.rs`, `servoteh.co.rs`) su na
**Cloudflare** nameserverima (ne više cPanel). `.rs`/`.co.rs` → 301 (Cloudflare Redirect
Rules) na `servoteh.com`. Email (MDaemon, `mail2.servoteh.com`) je očuvan. Detalji u
`PROJEKAT-STATUS-I-PLAN.md`.

## Struktura

```
app/            rute (SR root, EN pod /en/), layout, globalni CSS, font, sitemap/robots
components/     prezentacione komponente (layout, sekcije, deep, ui)
content/        sav tekst (content-as-data): sr/ i en/ (+ ui.ts chrome/aria/forma)
lib/            types.ts, meta.ts (pageMetadata), routes.ts (SR↔EN parovi)
worker/         index.ts — Cloudflare Worker (forma preko Resend-a + 301 redirekti)
public/assets/  slike, video, logo, brošura
_legacy/        izvorni HTML (referenca za migraciju, ne deploy-uje se)
```

## Napomene

- **Font:** Figtree je self-hostovan (`app/fonts/`), bez poziva ka Google Fonts.
- **Hero video:** `public/assets/hero1.mp4`, poster `hero-poster.webp`.
- **Slike/video:** u statičkom exportu `next/image` optimizacija je isključena; mediji
  se serviraju iz `public/assets/`. Za rekompresiju slika je dostupan **`sharp`**; za
  obradu videa **`ffmpeg-static`** (po potrebi `npm i ffmpeg-static ffprobe-static --no-save`).
- **Forma:** podešavanje Resend-a u `FORMA-SETUP.md`.
- **Politika privatnosti:** tekst za pravni pregled u `PRIVACY-ZA-PREGLED.md`.
