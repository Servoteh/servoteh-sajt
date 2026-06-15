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

## Deploy na Cloudflare Pages

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git** i izaberi repo.
2. Build podešavanja:
   - **Framework preset:** Next.js (Static HTML Export) — ili „None"
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** 20 ili noviji (env var `NODE_VERSION=20`)
3. Save and Deploy.

Svaki `git push` na `main` automatski pokreće build i deploy. Grane dobijaju
preview deployment.

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
