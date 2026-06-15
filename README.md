# Servoteh

Veb sajt kompanije Servoteh d.o.o. — Next.js 16 + React 19 + TypeScript + Tailwind v4,
statički export za Cloudflare Pages.

> Za konvencije, arhitekturu i terminološka pravila vidi **`CLAUDE.md`**.

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

Generiše statički sajt u `out/` (čist HTML/CSS/JS, bez servera).

## Postavljanje na GitHub

```bash
git init
git add .
git commit -m "Servoteh — Faza 1 (skelet + homepage hero/stats)"
git branch -M main
git remote add origin https://github.com/<korisnik>/servoteh.git
git push -u origin main
```

`node_modules/`, `.next/` i `out/` se ne komituju (vidi `.gitignore`).

## Deploy na Cloudflare (Workers Static Assets)

Sajt je statički, pa se servira kao **Workers Static Assets** (folder `out/`).
Konfiguracija je u `wrangler.jsonc` (bez `main` polja → čist statički Worker, ne
pokreće se OpenNext adapter koji važi samo za server-side Next.js).

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Import a repository**
   i izaberi repo.
2. Build podešavanja:
   - **Build command:** `npm run build`
   - **Deploy command:** `npx wrangler deploy` (čita `wrangler.jsonc`, kači `out/`)
   - **Node version:** 20+ (env var `NODE_VERSION=20`); Cloudflare default 22 je ok
3. Save and Deploy.

Svaki `git push` na `main` automatski pokreće build i deploy. Grane dobijaju
preview deployment.

> **Napomena:** novi Cloudflare UI gura sve u „Workers". Bez `wrangler.jsonc`,
> auto-detekcija Next.js pokrene OpenNext i deploy pukne na statičkom exportu
> (`ENOENT .next/standalone/...`). `wrangler.jsonc` to rešava — ne diraj ga osim
> ako menjaš izlazni folder.

## Struktura

```
app/            rute, layout, globalni CSS, font
components/     prezentacione komponente (layout, sekcije, ui)
content/        sav tekst (content-as-data); sr/ sada, en/ kasnije
lib/            tipovi
public/assets/  slike, video, logo, brošura
_legacy/        izvorni HTML (referenca za migraciju, ne deploy-uje se)
```

## Napomene

- **Font:** Figtree je self-hostovan (`app/fonts/`), bez poziva ka Google Fonts.
- **Hero video:** `public/assets/hero1.mp4`. Poster je izvučen iz videa
  (`hero-poster.jpg`); ako nabaviš HD poster (1920×1080), samo zameni fajl.
- **Slike:** u statičkom exportu `next/image` optimizacija je isključena; slike
  se serviraju iz `public/assets/`.
