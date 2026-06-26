# CLAUDE.md — Servoteh sajt

Kontekst i pravila za rad na ovom projektu (čita Claude Code u Cursoru).

## Šta je ovo

Veb sajt kompanije **Servoteh d.o.o.** — porodična inženjerska kompanija iz
Dobanovaca (Beograd), osnovana 2002. Razvija specijalne mašine, proizvodne linije
i industrijsku automatizaciju, sa fokusom na industriju odbrane, ali i druge
zahtevne industrijske procese.

Ovo je **migracija** ranijeg ručno kodiranog HTML/CSS/JS sajta (6 stranica) u
Next.js. Cilj je **verna 1:1 migracija** postojećeg dizajna i sadržaja — ne
redizajn. Dizajn sistem je već utvrđen; ne izmišljati novi.

## Tehnologije

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first, konfiguracija u `app/globals.css`)
- **Framer Motion** — scroll-reveal animacije (`Reveal.tsx`); hero ulazna animacija je čist CSS (zbog LCP — tekst nije sakriven do hidratacije)
- **react-hook-form + Zod** — kontakt forma (šalje preko **Resend**-a)
- **lucide-react** — ikonice
- **next/font/local** — Figtree (self-hostovan, vidi dole)
- Build: **statički export** (`output: 'export'`) → servira **Cloudflare Worker**
  (`worker/index.ts`: asseti iz `/out` + `POST /api/contact` → Resend + 301 redirect mapa)
- **sharp** (slike) i `ffmpeg-static` (video; instalira se po potrebi `--no-save`) za obradu medija

## Arhitektura — sadržaj odvojen od prezentacije

Najvažnije pravilo strukture:

- **Sav vidljiv tekst živi u `content/<locale>/`** kao tipizirani podaci.
  Komponente su **čisto prezentacione** i ne sadrže hardkodiran tekst.
- Editorska izmena → diraš `content/sr/*.ts`. Dizajnerska izmena → diraš
  komponentu ili `globals.css`. Ne mešati to dvoje.
- EN verzija je **urađena**: paralelni `content/en/*` rečnik + rute pod `/en/`
  (engleski slugovi). Chrome/aria/forma stringovi su u `content/{sr,en}/ui.ts`;
  deljene komponente primaju opcioni `ui` prop sa SR default-om → SR strane netaknute.

```
app/                  rute (App Router); SR na rootu, EN pod /en/ (engleski slugovi)
  layout.tsx          font (Figtree local), metadataBase + root OG, <html lang="sr">
  page.tsx            homepage (SR)
  en/                 EN rute + en/layout.tsx (HtmlLang → "en")
  sitemap.ts robots.ts  sitemap (SR+EN, hreflang) i robots
  globals.css         tokeni (:root) + bazni/chrome stilovi
  fonts/              self-hostovan Figtree woff2
components/
  layout/             Header, Footer, LangSwitch
  sections/           Hero, Stats, Cta (ContactForm), Careers (oglasi za posao), …
  deep/               DeepSections (dubinske strane), TechCards, HotspotImage
  ui/                 Container, …
  Reveal.tsx          Framer Motion scroll-reveal wrapper
content/
  sr/  en/            site.ts, home.ts, …, ui.ts (chrome/aria/forma)
lib/
  types.ts            tipovi sadržaja (+ UiDict)
  meta.ts             pageMetadata() — canonical + Open Graph + hreflang
  routes.ts           parovi ruta SR↔EN (LangSwitch + hreflang)
worker/index.ts       Worker: forma (Resend) + 301 redirect mapa starih URL-ova
.github/workflows/    deploy.yml — auto-deploy (wrangler) na push na main
public/assets/        slike, video, logo, brošura
```

EN ton/terminologija: **British English**, tehnički B2B, suzdržano — rečnik u
`PROJEKAT-STATUS-I-PLAN.md` (defence, turnkey, commissioning, special-purpose machines…).

## Dizajn tokeni (izvor istine: `app/globals.css` → `:root`)

- Font: **Figtree** (jedini font — ne uvoditi druge bez dogovora)
- Akcent: `#e8401c` (hover `#ff5533`)
- Ritam sekcija: naizmenično **dark** (hero, solutions, trust, cta) i **light**
  (about, kapaciteti, industries)
- Kontejneri: `.container` (max 1440px) i `.container-wide` (min(94vw, 1680px))
- Radijus: `--radius: 16px`, header visina `--header-h: 68px`

## Jezik i terminologija (OBAVEZNO na srpskim stranicama)

Koristiti:
- **mašinski** (ne „mehanički") — mašinski razvoj/projektovanje
- **industrija odbrane** / **industriju odbrane** (nikad „defence" u vidljivom tekstu)
- **postprodajna podrška** / **podrška nakon puštanja u rad** (ne „aftersales")
- **princip ključ u ruke** (ne „turnkey")
- **namenska rešenja** (ne „custom made")
- **program** (ne „programme")
- pravilni padeži; izbegavati bukvalan prevod i marketing fraze

Razlika između stranica rešenja:
- **specijalne-masine** = pojedinačna namenska mašina za određenu operaciju
- **proizvodne-linije** = kompletan integrisan proizvodni tok
- **industrijska-automatizacija** = upravljanje, logika, nadzor, retrofit

## Stil rada

Hirurška preciznost. Izmene ograničene na tačno ono što je traženo. Bez
redizajna, bez preuređivanja sadržaja, bez diranja već finalizovanih sekcija.
Kad nešto treba da izgleda kao deo postojećeg sistema — povući tačan obrazac iz
postojećih komponenti/tokena, ne izmišljati.

## Font — napomena

Figtree je **self-hostovan** preko `next/font/local` (`app/fonts/Figtree-Variable.woff2`).
Varijabilni font 300–900, subset latinica + latin-ext (srpske dijakritike) +
interpunkcija/strelice. Bez poziva ka Google Fonts — radi offline, brže, GDPR-čisto.

## Build i deploy

```bash
npm install
npm run dev      # lokalni razvoj
npm run build    # statički export u /out + post-build patch
```

`npm run build` = `next build` **+** `node scripts/fix-en-lang.mjs` (post-build:
postavlja `<html lang="en">` na `out/en/**` — App Router root je `lang="sr"`, a
static export ne može po pod-stablu da menja taj atribut u serviranom HTML-u).

**Deploy:** Cloudflare Worker `servoteh-sajt` servira `/out` i obrađuje formu.
`git push` na `main` → **GitHub Action** (`.github/workflows/deploy.yml`) radi
`npm run build` + `wrangler deploy` (preduslov: repo secret `CLOUDFLARE_API_TOKEN`).
Ručno: `npx wrangler deploy`. **DNS je na Cloudflare-u** (sva tri domena), ne u cPanel-u.
Detalji: `README.md` i `PROJEKAT-STATUS-I-PLAN.md`.

## Status — U PRODUKCIJI ✅

Sajt je **live na `servoteh.com`** (SR root, EN pod `/en/`). `servoteh.rs` i
`servoteh.co.rs` (+ www) → **301 → `servoteh.com`**. Kontakt forma šalje na
`office@servoteh.com` (Resend; MDaemon mejl netaknut). Auto-deploy na push.

- [x] **Faza 1–3** — Skelet + homepage + dubinske strane (SR)
- [x] **Faza 4 — EN** (sve rute, engleski slugovi, `ui` rečnik, LangSwitch, hreflang)
- [x] **Faza 5 — Kontakt forma** (Worker + Resend)
- [x] **Pred-live** — SEO (canonical/OG/sitemap/robots), 301 redirect mapa starih URL-ova,
      pravni (PIB/MB u footeru + Politika privatnosti), perf (rekompresija slika),
      **go-live** (selidba DNS-a na Cloudflare, `.rs`/`.co.rs` redirekti, `automation` ugašen)
- [x] **Post-launch (jun 2026)** — EN copy polish (native industrijski B2B: workpiece,
      infeed, shell bodies, automatic loaders, ISO 9001…) + nova strana **Karijera**
      (`/karijera`, EN `/en/careers`) sa oglasima: content-driven (`content/{sr,en}/karijera.ts`,
      `CareersContent`/`JobPosting`), komponenta `Careers.tsx`, prijave → `mailto:posao@servoteh.com`
- [ ] **Roadmap (kasnije):** Faza 6 Reference (+~10 detaljnih strana), namenska OG slika,
      Lighthouse/mobile QA (hero video već kompresovan 4.4→1.5 MB; hero LCP sređen)

Pun status, infrastruktura i plan razvoja: **`PROJEKAT-STATUS-I-PLAN.md`**.
Izvorni HTML svih stranica je u `_legacy/` (referenca za migraciju, ne deploy-uje se).
