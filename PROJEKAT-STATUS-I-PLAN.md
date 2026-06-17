# Servoteh sajt — status produkcije, kako je urađeno i plan razvoja

> **Status: ✅ LIVE U PRODUKCIJI.** Sajt je pušten na `servoteh.com` (i `.rs`/`.co.rs` redirekti).
> Ovaj dokument je jedinstveni izvor istine: šta je pušteno, kako radi infrastruktura,
> i šta je plan za dalje.
>
> **Zamrzavanje promena:** trenutno stanje je stabilno; veće izmene se pauziraju.
> Plan razvoja (dole) je za naredne faze, kad se odluči da se nastavi.
>
> Poslednje ažuriranje: 2026-06-17.

---

## 1. Šta je sajt
Veb sajt kompanije **Servoteh d.o.o.** (Dobanovci, Beograd) — specijalne mašine,
proizvodne linije, industrijska automatizacija, sa fokusom na industriju odbrane.
Migracija ranijeg ručno kodiranog sajta u **Next.js**, verna 1:1, dvojezično (SR + EN).

## 2. Tehnologije i arhitektura
- **Next.js 16** (App Router) + React 19 + TypeScript, **Tailwind v4** (CSS-first u `app/globals.css`)
- **Statički export** (`output: "export"`) → `/out`
- **Cloudflare Worker** (`worker/index.ts`) servira `/out` + obrađuje formu (`POST /api/contact`)
- Framer Motion (animacije), react-hook-form + Zod (forma), self-hostovan font Figtree
- **Sadržaj odvojen od prezentacije:** sav tekst u `content/<locale>/*.ts`; komponente prezentacione
- Chrome/aria/forma stringovi: locale `ui` rečnik (`content/{sr,en}/ui.ts`)

## 3. Produkcija — trenutno stanje
| Šta | Stanje |
|---|---|
| `servoteh.com` + `www` | ✅ Live, novi sajt (SR root, EN pod `/en/`) |
| `servoteh.rs` + `www` | ✅ 301 → `servoteh.com` |
| `servoteh.co.rs` + `www` | ✅ 301 → `servoteh.com` |
| `automation.servoteh.com` | ❌ Ugašen (stari server se gasi) |
| EN verzija | ✅ `/en/` (sve strane) |
| Kontakt forma | ✅ Šalje na `office@servoteh.com` (Resend) |
| Email (MDaemon) | ✅ Netaknut |
| Auto-deploy | ✅ Push na `main` → automatski deploy |
| Privacy | ✅ Pregledao pravnik |
| Defence sadržaj | ✅ Interno odobren za javno |

**Rute (SR):** `/`, `/defence/`, `/reference/`, `/specijalne-masine/`, `/proizvodne-linije/`,
`/industrijska-automatizacija/`, `/automobilska-industrija/`, `/prehrambena-industrija/`,
`/opsta-industrijska-proizvodnja/`, `/politika-privatnosti/`.
**EN:** isto pod `/en/` sa engleskim slugovima (`/en/defence/`, `/en/special-purpose-machines/`,
`/en/production-lines/`, `/en/industrial-automation/`, `/en/automotive-industry/`,
`/en/food-industry/`, `/en/general-industrial-production/`, `/en/references/`, `/en/privacy-policy/`).

## 4. Infrastruktura (reference)
- **DNS:** na **Cloudflare-u** (preseljeno sa `cpanelhosting.rs`).
  - `servoteh.com` i `servoteh.rs` NS: `amalia.ns.cloudflare.com` / `max.ns.cloudflare.com`
  - `servoteh.co.rs` NS: `cloe.ns.cloudflare.com` / `bradley.ns.cloudflare.com`
  - DNS se ubuduće uređuje **u Cloudflare-u**, ne u cPanel Zone Editor-u.
- **Email:** MDaemon, `MX → mail2.servoteh.com`; DKIM `mdaemon._domainkey` + `default._domainkey`,
  SPF, DMARC — sve „DNS only", **netaknuto** selidbom. cPanel se i dalje koristi za mejl/hosting.
- **Worker:** `servoteh-sajt` (Cloudflare), Custom Domain za `servoteh.com` + `www`.
- **Redirekti `.rs`/`.co.rs`:** Cloudflare **Redirect Rules** (301 → `servoteh.com`, čuva putanju).
- **Forma / Resend:** domen `servoteh.com` verifikovan u Resend-u (DKIM `resend._domainkey`,
  `send.servoteh.com` SPF/MX, EU region — paralelno sa MDaemon-om, bez konflikta).
  Worker env: `RESEND_API_KEY` (secret), `CONTACT_TO=office@servoteh.com`,
  `CONTACT_FROM="Servoteh <office@servoteh.com>"`.
- **Deploy:** GitHub Action `.github/workflows/deploy.yml` → na push na `main` radi
  `npm run build` + `wrangler deploy`. Preduslov: GitHub secret `CLOUDFLARE_API_TOKEN`.
  Ručni fallback: `npm run build && npx wrangler deploy`.
- **Stari URL-ovi (SEO):** 301 mapa u `worker/index.ts` (`/about_us`→`/#about`, `/defence`→`/defence/`,
  `/artillery_plant|ammunition|development|loaders`→`/defence/`, `/solutions`→`/industrijska-automatizacija/`,
  `/forming-technology`→`/proizvodne-linije/`, itd.).

## 5. Ključni fajlovi
| Putanja | Šta |
|---|---|
| `app/globals.css` | dizajn tokeni + svi stilovi (dugme `.btn`, sekcije…) |
| `app/layout.tsx` | root layout, font, `metadataBase`, root OG |
| `app/sitemap.ts`, `app/robots.ts` | sitemap (SR+EN, hreflang) i robots |
| `app/en/**` | EN rute (engleski slugovi) |
| `lib/meta.ts` | `pageMetadata()` — title/description + canonical + OG + hreflang |
| `lib/routes.ts` | parovi ruta SR↔EN (LangSwitch + hreflang) |
| `worker/index.ts` | Worker: forma (Resend) + 301 redirect mapa |
| `content/sr/*`, `content/en/*` | sav vidljiv tekst (po locale) |
| `content/{sr,en}/ui.ts` | chrome/aria/forma stringovi |
| `wrangler.jsonc` | Worker config + env vars |
| `FORMA-SETUP.md` | uputstvo za Resend |
| `PRIVACY-ZA-PREGLED.md` | tekst Politike privatnosti za pravnika |

## 6. Hronologija — šta je sve urađeno (commit-ovi)
1. **Pred-lansirno I** (`2b0e3cb`, `94e1e9c`): SEO meta (canonical/OG/Twitter, `lib/meta.ts`),
   sitemap+robots, PIB/MB u footeru, Politika privatnosti (ruta + sadržaj + saglasnost na formi),
   footer mapa „Otvorite mapu/Kako do nas", footer a11y, sadržajna doterivanja
   (kapaciteti ton, Bosch/ZF proof strip, cross-link na linijama, defence „zahtev" varijacija).
2. **Redirect mapa** (`95f983b`): 301 sa stvarnih starih `servoteh.com` URL-ova.
3. **EN verzija — Faza 4** (`a6c229e`): `content/en/*` (12 fajlova), `/en` rute, `ui` rečnik,
   LangSwitch, `HtmlLang`, hreflang, EN sitemap.
4. **EN copy-polish** (`9175c01`, `36bd96a`, `4613a1a`): kraći H1, British English,
   „Learn more", footer aria „Phone", razmaci (copyright, „EN | SR"), CTA/footer spacing.
5. **Auto-deploy** (`db8e74a`): GitHub Action.
6. **Go-live infrastruktura:** selidba DNS-a na Cloudflare (email očuvan), Worker custom domain
   za `servoteh.com`+`www`, `automation` ugašen, `.rs`/`.co.rs` → 301.
7. **Resend** (`be4370e` + secret): forma šalje mejlove; `CONTACT_FROM` postavljen.
8. **Perf/UI** (`59b2681`, `acb5aac`): kompaktnije dugme `.btn`; 3 defence slike
   rekompresovane (sharp, ~6 MB → ~151 KB).

## 7. Operativne napomene (kako uraditi)
- **Izmena teksta:** `content/sr/*.ts` (i `content/en/*.ts` za EN) → commit → push → auto-deploy.
- **Dizajn:** `app/globals.css` ili komponenta.
- **Nova strana:** ruta u `app/...` + `app/en/...`, sadržaj u `content/{sr,en}/`,
  par u `lib/routes.ts` (za hreflang+LangSwitch), unos u `app/sitemap.ts`,
  metapodaci preko `pageMetadata(meta, "/putanja/")`.
- **Deploy:** samo `git push` na `main` (Action odradi). Ručno: `npm run build && npx wrangler deploy`.
- **DNS izmene:** u **Cloudflare** dashboard-u (ne cPanel).
- **Privacy izmene:** posle pravnika → `content/{sr,en}/privacy.ts`.

---

## 8. Plan razvoja (roadmap) — naredne faze

### Faza 6 — Proširenje Referenci (predlog: ~10 detaljnih stranica projekata)
**Cilj:** trenutno `/reference` prikazuje projekte grupisano i kroz tip rešenja (zbog
poverljivosti). Plan je dodati **pojedinačne detaljne stranice projekata** sa više sadržaja.

**Predlog pristupa (u skladu sa postojećom arhitekturom):**
- Novi tip sadržaja: `content/sr/projekti/*.ts` (i `content/en/...`) — niz/po fajl po projektu.
- Ruta: `/reference/<slug>/` (statički generisane; npr. `app/reference/[slug]/page.tsx` sa
  `generateStaticParams`) + EN `/en/references/<slug>/`.
- Svaka stranica: naslov, sektor, **zadatak/izazov**, tehnološki opseg, rešenje, rezultat,
  slike/renderi, tagovi — **bez poverljivih imena naručilaca** (zadržati postojeći okvir:
  „zbog poverljivosti prikazujemo kroz tip rešenja i tehnologiju").
- Kartice na `/reference` vode na detaljne stranice.
- Obavezno: EN verzije (≈20 stranica ukupno), `pageMetadata` (canonical/OG/hreflang),
  unos u `sitemap.ts`, optimizovane slike (sharp, kao defence).
- **Pre izrade:** odlučiti koji projekti, koje slike smeju javno, i tačan tekst (pravnik/interno
  odobrenje za defence projekte — kao i dosad).

**Procena:** srednje-veliki posao (sadržaj + slike su glavni; tehnička šema je laka jer reuse
postojećih `Deep*` komponenti). Najbolje raditi kao zasebnu fazu sa pripremljenim sadržajem.

### Faza 7 — Performanse i mediji (nije blokер)
- **Hero video** `hero1.mp4` (4.4 MB): ne učitavati na mobilnom (samo poster) i/ili kompresovati (~1.5 MB, 720p).
- **Namenska OG slika** 1200×630 (sad je privremeno `hero-poster.webp`) → zameniti u `lib/meta.ts` (`OG_IMAGE`).
- **PDF brošura** `defence-brochure.pdf` (12 MB) → kompresovati.
- Ostali self-host video (`opsta`, `prehrambena`) — već `preload="metadata"` (učitava se na klik), ok.
- **Lighthouse mobilni** prolaz na ključnim stranama → fino podešavanje.

### Faza 8 — Sitnice / opciono
- `ftp.servoteh.com` → ako se koristi FTP, postaviti A na cPanel IP (sad prati apex/Worker).
- Defence detalj slike: ako neka deluje meko na q76 — prepakovati na višu kvalitetu (sharp).
- Eventualni dodatni sadržaj po sektorima.

---

## 9. Otvorene / odložene stavke (sažetak)
- [ ] Faza 6: References — ~10 detaljnih projektnih stranica (+ EN)
- [ ] Hero video optimizacija (mobilni)
- [ ] Namenska OG slika 1200×630
- [ ] PDF brošura kompresija
- [ ] Lighthouse/mobile QA prolaz
- [ ] (opc.) FTP zapis, fino podešavanje slika

> Sve gore navedeno je **opciono/za kasnije** — sajt je pun i funkcionalan u produkciji.
