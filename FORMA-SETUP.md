# Kontakt forma — Resend setup i test

Kod forme je **kompletan i radi end-to-end** (`components/sections/ContactForm.tsx`
+ `worker/index.ts` → `POST /api/contact`: validacija, honeypot, `reply_to`,
slanje preko Resend-a). Ostaje samo **operativna konfiguracija** (van repo-a) i
**manuelni test**. Dok `RESEND_API_KEY` nije postavljen, forma vraća
`503 "Slanje trenutno nije dostupno."`.

## A) Konfiguracija (Resend + Cloudflare)

1. **Resend — verifikacija domena.** U Resend nalogu dodati domen `servoteh.com`
   i uneti tražene DNS zapise (DKIM/SPF, opc. DMARC) u DNS zonu domena.
   Sačekati da Resend pokaže status „Verified".
2. **Cloudflare → Worker `servoteh-sajt` → Settings → Variables and Secrets:**
   - `RESEND_API_KEY` → dodati kao **Secret** (Encrypt). API ključ se generiše u
     Resend-u (Settings → API Keys). **Ne** stavljati u `wrangler.jsonc`.
   - `CONTACT_FROM` → dodati kao **var**, npr. `Servoteh sajt <upit@servoteh.com>`
     (adresa mora biti sa verifikovanog domena). Bez ovoga se koristi Resend test
     adresa `onboarding@resend.dev` (radi samo ka vlasniku Resend naloga).
   - `CONTACT_TO` → već postavljeno na `office@servoteh.com` u `wrangler.jsonc`.

## B) Lokalni test pre deploy-a

```bash
npm run build              # generiše /out
npx wrangler dev           # lokalni Worker na http://localhost:8787
```

Za lokalni test slanja postaviti `RESEND_API_KEY` (npr. `.dev.vars` fajl koji
NE ide u git):

```
# .dev.vars  (lokalno, ignorisati u git-u)
RESEND_API_KEY=re_xxxxxxxx
CONTACT_FROM=Servoteh sajt <upit@servoteh.com>
```

## C) Test checklist (live-bloker)

- [ ] Validno slanje → mejl stiže na `office@servoteh.com`; `Reply-To` je email
      pošiljaoca (klik na „Odgovori" cilja korisnika).
- [ ] Validacija: ime < 2 znaka, neispravan email, poruka < 10 znakova → ispravne
      SR poruke o grešci.
- [ ] Honeypot: ručno popuniti skriveno `website` polje → odgovor `ok:true`, mejl se
      **ne** šalje.
- [ ] Success ekran „Hvala na upitu" se prikazuje; „Pošaljite novi upit" resetuje formu.
- [ ] Link „Politika privatnosti" ispod dugmeta vodi na `/politika-privatnosti/`.
- [ ] Mobilni prikaz forme (responsive layout, dugme i polja).
- [ ] Bez `RESEND_API_KEY` (produkcija pre podešavanja) → forma vraća jasnu poruku,
      ne pada.

## Napomena

`CONTACT_TO`, `CONTACT_FROM` i ostali env opisani su i u zaglavlju
`worker/index.ts`.
