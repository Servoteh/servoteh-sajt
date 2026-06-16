import type { LegalPageContent } from "@/lib/types";

/**
 * Politika privatnosti — SR nacrt (ZZPL „Zakon o zaštiti podataka o ličnosti"
 * + GDPR), fokus na podatke prikupljene preko kontakt forme.
 * NAPOMENA: pre puštanja u produkciju pregleda pravnik.
 */
export const privacy: LegalPageContent = {
  meta: {
    title: "Politika privatnosti — SERVOTEH",
    description:
      "Kako Servoteh d.o.o. prikuplja, koristi i štiti lične podatke unete preko kontakt forme na sajtu.",
  },
  title: "Politika privatnosti",
  updated: "16. jun 2026.",
  intro:
    "Servoteh d.o.o. poštuje privatnost posetilaca sajta. Ova politika objašnjava koje lične podatke prikupljamo putem kontakt forme, u koju svrhu i na kom pravnom osnovu ih obrađujemo, koliko ih čuvamo i koja prava imate u vezi sa svojim podacima.",
  sections: [
    {
      heading: "Rukovalac podacima",
      paragraphs: [
        "Rukovalac podataka o ličnosti je Servoteh d.o.o., PIB 101017443, matični broj 17400169, Ugrinovačka 163, 11272 Dobanovci, Beograd, Srbija.",
        "Za sva pitanja u vezi sa obradom ličnih podataka možete nas kontaktirati na office@servoteh.com.",
      ],
    },
    {
      heading: "Koje podatke prikupljamo",
      paragraphs: [
        "Putem kontakt forme prikupljamo isključivo podatke koje sami unesete:",
      ],
      items: [
        "ime i prezime",
        "naziv kompanije (opciono)",
        "email adresu",
        "broj telefona (opciono)",
        "sadržaj poruke",
      ],
    },
    {
      heading: "Svrha i pravni osnov obrade",
      paragraphs: [
        "Unete podatke koristimo isključivo da bismo odgovorili na vaš upit i uspostavili poslovnu komunikaciju.",
        "Pravni osnov obrade je preduzimanje radnji na vaš zahtev pre eventualnog zaključenja ugovora, odnosno naš legitimni interes da odgovorimo na poslovne upite.",
      ],
    },
    {
      heading: "Čuvanje podataka",
      paragraphs: [
        "Podatke čuvamo onoliko koliko je potrebno da odgovorimo na upit i vodimo s tim povezanu poslovnu komunikaciju, a najduže u skladu sa važećim propisima. Nakon prestanka svrhe podaci se brišu.",
      ],
    },
    {
      heading: "Deljenje podataka",
      paragraphs: [
        "Vaše podatke ne prodajemo i ne ustupamo trećim licima u marketinške svrhe. Poruka poslata preko forme dostavlja se našim poslovnim email kanalom putem pružaoca usluge slanja email poruka, koji podatke obrađuje isključivo radi isporuke poruke.",
      ],
    },
    {
      heading: "Vaša prava",
      paragraphs: ["U skladu sa propisima o zaštiti podataka o ličnosti imate pravo na:"],
      items: [
        "pristup svojim podacima i informaciju o obradi",
        "ispravku netačnih podataka",
        "brisanje podataka kada za to postoji osnov",
        "ograničenje obrade i prigovor na obradu",
        "pritužbu Povereniku za informacije od javnog značaja i zaštitu podataka o ličnosti",
      ],
    },
    {
      heading: "Kolačići",
      paragraphs: [
        "Sajt ne koristi kolačiće za praćenje niti reklamne kolačiće. Koriste se samo tehnički neophodni elementi za rad sajta.",
      ],
    },
    {
      heading: "Izmene politike",
      paragraphs: [
        "Ovu politiku možemo povremeno ažurirati. Datum poslednje izmene naveden je na vrhu stranice.",
      ],
    },
  ],
};
