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
- **Framer Motion** — animacije (scroll reveal, hero)
- **react-hook-form + Zod** — kontakt forma (Faza 5)
- **lucide-react** — ikonice
- **next/font/local** — Figtree (self-hostovan, vidi dole)
- Build: **statički export** (`output: 'export'`) → deploy na **Cloudflare Pages**

## Arhitektura — sadržaj odvojen od prezentacije

Najvažnije pravilo strukture:

- **Sav vidljiv tekst živi u `content/<locale>/`** kao tipizirani podaci.
  Komponente su **čisto prezentacione** i ne sadrže hardkodiran tekst.
- Editorska izmena → diraš `content/sr/*.ts`. Dizajnerska izmena → diraš
  komponentu ili `globals.css`. Ne mešati to dvoje.
- EN verzija se dodaje kao paralelni `content/en/*` rečnik + rute pod `/en/`,
  bez diranja komponenti.

```
app/                  rute (App Router); SR na rootu, EN pod /en (kasnije)
  layout.tsx          font (Figtree local), <html lang="sr">
  page.tsx            homepage
  globals.css         tokeni (:root) + bazni/chrome stilovi
  fonts/              self-hostovan Figtree woff2
components/
  layout/             Header, Footer, LangSwitch
  sections/           Hero, Stats, … (po sekcija)
  ui/                 Container, …
  Reveal.tsx          Framer Motion scroll-reveal wrapper
content/
  sr/                 site.ts (nav/footer), home.ts, …
  en/                 (Faza EN)
lib/types.ts          tipovi sadržaja
public/assets/        slike, video, logo, brošura
```

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
npm run build    # statički export u /out
```

Cloudflare Pages: build command `npm run build`, output direktorijum `out`.
Vidi `README.md` za detalje.

## Status migracije

- [x] **Faza 1 — Skelet**: config, tokeni, font, i18n osnova, content-as-data,
      Header/Footer/LangSwitch, Hero + Stats, build verifikovan.
- [x] **Faza 2 — Homepage (SR)**: sve sekcije — defence-intro, about, kapaciteti
      (slider), solutions, aftersales, industries, trust, cta. Build verifikovan.
- [x] **Faza 3 — Dubinske stranice (SR)**: defence (sa hotspot sistemom), reference,
      specijalne-masine, proizvodne-linije, industrijska-automatizacija. Build verifikovan (7 ruta).
- [ ] **Faza 4 — EN** (sve rute)
- [ ] **Faza 5 — Kontakt forma + Cloudflare Function**

Izvorni HTML svih stranica je u `_legacy/` (referenca za migraciju, ne deploy-uje se).
