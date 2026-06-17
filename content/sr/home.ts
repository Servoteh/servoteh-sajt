import type { HomeContent } from "@/lib/types";
import { ctaInviteBody } from "@/content/sr/common";

export const home: HomeContent = {
  meta: {
    title: "SERVOTEH — Specijalne mašine, proizvodne linije i automatizacija",
    description:
      "Servoteh — Inženjerska kompanija iz Dobanovaca. Specijalne mašine, proizvodne linije i industrijska automatizacija za zahtevne industrijske procese, uključujući industriju odbrane. Projekti po meri kupca od 2002. godine.",
  },

  hero: {
    eyebrow: "Beograd, Srbija — porodična inženjerska kompanija od 2002.",
    title: "Specijalne mašine, proizvodne linije i automatizovani sistemi",
    subtitle:
      "Projektujemo, razvijamo i isporučujemo rešenja za zahtevne industrijske procese — od idejnog crteža do montaže, puštanja u rad i dugoročne tehničke podrške.",
    primaryCta: { label: "Pošaljite upit", href: "/#cta" },
    secondaryCta: { label: "Pogledajte rešenja", href: "/#solutions" },
    scrollLabel: "Skroluj",
  },

  stats: [
    { value: "24", suffix: "+", label: "Godina iskustva" },
    { value: "100", suffix: "+", label: "Mašina i sistema" },
    { value: "25", suffix: "+", label: "Razvojnih inženjera" },
    { value: "10.000", suffix: " m²", label: "Razvojnih i proizvodnih kapaciteta", variant: "defence" },
  ],

  defenceIntro: {
    label: "Strateški fokus",
    titleLead: "Fokus na ",
    titleLink: { label: "industriju odbrane", href: "/defence" },
    titleAfterLink: ".",
    titleSecond: "Kompetencija za mnogo više.",
    body: "Tokom poslednjih godina, najveći deo razvoja i realizacije Servoteh sistema vezan je za industriju odbrane — sektor u kome su pouzdanost, preciznost i kontrola procesa presudan uslov, a ne opcija. Isti razvojni kapacitet i inženjerska logika primenjuju se i u drugim zahtevnim industrijskim projektima, tamo gde standardna oprema nije dovoljna i gde se sistem mora razviti od nule.",
    cta: { label: "Pogledajte reference", href: "/reference" },
    cards: [
      { title: "Preciznost i pouzdanost", desc: "Sistemi projektovani za zahteve industrije odbrane", accent: true },
      { title: "Pristup po meri kupca", desc: "Svaki sistem razvijen prema konkretnom zahtevu" },
      { title: "Integrisan razvoj", desc: "Mašinski, elektro i softverski razvoj u jednom timu" },
      { title: "Postprodajna podrška", desc: "Podrška tokom celokupnog životnog veka sistema" },
    ],
  },

  about: {
    label: "O kompaniji",
    title: "Inženjering koji prati zahtev kupca",
    body: "Servoteh je porodična inženjerska kompanija locirana u Dobanovcima, aktivna od 2002. godine. Razvijamo specijalne mašine, proizvodne linije i automatizovane sisteme, prvenstveno za industriju odbrane i druge zahtevne industrijske procese, uz integrisan mašinski, elektro i softverski razvoj.",
    cta: { label: "Pošaljite upit", href: "/#cta" },
    features: [
      { title: "Mašinski razvoj", desc: "Mašinsko projektovanje i izrada sistema prilagođenih konkretnom procesu." },
      { title: "Elektro upravljanje", desc: "Projektovanje i izrada upravljačkih sistema — od električnih šema i ormana do ožičenja mašine i puštanja u rad." },
      { title: "Softver i automatizacija", desc: "PLC, SCADA, HMI i softverska rešenja za upravljanje procesima." },
      { title: "Proizvodnja i montaža", desc: "Sopstveni proizvodni i montažni kapaciteti — kontrola kvaliteta u celom procesu." },
    ],
  },

  kapaciteti: {
    label: "Kapaciteti",
    title: "Sopstveni razvojni i proizvodni kapaciteti",
    body: "Servoteh razvija, proizvodi, montira i integriše sisteme u sopstvenim kapacitetima u Dobanovcima. Ovakav pristup omogućava bolju kontrolu kvaliteta, kraće rokove i pouzdaniju realizaciju složenih projekata — od projektovanja, preko proizvodnje i montaže, do integracije sistema i pripreme za puštanje u rad.",
    body2: "Sopstvena proizvodnja obuhvata CNC mašinsku obradu (glodanje, struganje, brušenje, elektroeroziju…), lasersko, plazma i gasno sečenje, CNC savijanje, zavarivanje najsavremenijim postupcima (MIG, MAG, lasersko zavarivanje…), kao i montažu sklopova. Time ključne faze projekta ostaju pod kontrolom istog tima — od konstrukcije i izrade delova do sklapanja, integracije i završne provere sistema.",
    points: [
      "10.000 m² razvojnih, proizvodnih i montažnih kapaciteta",
      "Razvojni biro za mašinsko, elektro i softversko projektovanje",
      "CNC obrada, sečenje, savijanje, zavarivanje i montaža sklopova",
      "Kontrola kvaliteta, testiranje i priprema sistema za puštanje u rad",
    ],
    slides: [
      { src: "/assets/about-exterior-facility.webp", alt: "Spoljašnji pogled na razvojne i proizvodne hale Servoteh u Dobanovcima", caption: "Upravna i proizvodna lokacija" },
      { src: "/assets/about-production-hall-wide.webp", alt: "Glavna proizvodna hala Servoteh", caption: "Proizvodna hala" },
      { src: "/assets/about-robotic-cell.webp", alt: "Robotizovana ćelija i automatizacija u Servoteh pogonu", caption: "Robotizovana ćelija" },
      { src: "/assets/about-heat-treatment-line.webp", alt: "Linija za termičku obradu u Servoteh pogonu", caption: "Linija termičke obrade" },
      { src: "/assets/about-heavy-machining.webp", alt: "Teška mašinska obrada u Servoteh pogonu", caption: "Teška mašinska obrada" },
      { src: "/assets/about-precision-machining-room.webp", alt: "Prostor za preciznu mašinsku obradu u Servoteh pogonu", caption: "Prostor za preciznu obradu" },
      { src: "/assets/about-boring-machine-night.webp", alt: "Borverk za obradu velikih pozicija u Servoteh pogonu", caption: "Borverk za obradu velikih pozicija" },
    ],
  },

  solutions: {
    label: "Šta radimo",
    title: "Naša rešenja",
    body: "Projektujemo, razvijamo i izrađujemo industrijske sisteme po zahtevu kupca — od specijalnih mašina i automatizacije procesa do kompletnih proizvodnih linija.",
    cards: [
      { tag: "01 — Proizvodne linije", title: "Proizvodne linije", desc: "Kompletna rešenja za organizaciju i automatizaciju proizvodnje — od idejnog rešenja do puštanja sistema u rad.", href: "/proizvodne-linije", img: "/assets/proizvodne-linije.webp", alt: "Kompletna proizvodna linija — Servoteh" },
      { tag: "02 — Industrijska automatizacija", title: "Industrijska automatizacija", desc: "Integracija upravljanja, pogona, senzora i procesne logike u stabilne i pouzdane industrijske sisteme.", href: "/industrijska-automatizacija", img: "/assets/industrijska-automatizacija.webp", alt: "Upravljanje i automatizacija — Servoteh" },
      { tag: "03 — Specijalne mašine", title: "Specijalne mašine", desc: "Namenska tehnička rešenja razvijena za precizno definisane operacije, proizvode i uslove rada.", href: "/specijalne-masine", img: "/assets/specijalne-masine.webp", alt: "Specijalne mašine po meri — Servoteh" },
    ],
  },

  aftersales: {
    label: "Podrška nakon puštanja u rad",
    title: "Tehnički partner i nakon isporuke",
    body: "Servoteh ne završava posao isporukom sistema. Podrška obuhvata puštanje u rad, obuku, dijagnostiku, intervencije, rezervne delove i unapređenja tokom eksploatacije.",
    cta: { label: "Pošaljite upit", href: "/#cta" },
    items: [
      { title: "Puštanje u rad i obuka", desc: "Naš tim prisustvuje prvom pokretanju i obučava vaše operatere." },
      { title: "Dijagnostika i intervencije", desc: "Brza reakcija i tehnička podrška na licu mesta ili daljinski." },
      { title: "Rezervni delovi i unapređenja", desc: "Originalni rezervni delovi i moguća unapređenja sistema tokom eksploatacije." },
    ],
  },

  industries: {
    label: "Oblasti primene",
    title: "Industrije",
    body: "Naš današnji fokus je industrija odbrane, ali iste inženjerske kompetencije primenjujemo i u drugim složenim industrijskim sistemima.",
    cards: [
      { title: "Industrija odbrane", desc: "Namenske mašine, linije i sistemi za industriju odbrane", href: "/defence", featured: true },
      { title: "Automobilska industrija", desc: "Linije sklapanja, testne stanice, manipulatori i specijalne mašine za procese gde su ključni kratak takt, ponovljiv kvalitet i dug životni vek opreme.", href: "/automobilska-industrija" },
      { title: "Prehrambena industrija", desc: "Mašine i linije za preradu, doziranje i pakovanje, projektovane za stabilan kapacitet, higijenske zahteve procesa i pouzdan rad u kontinuiranoj proizvodnji.", href: "/prehrambena-industrija" },
      { title: "Opšta industrijska proizvodnja", desc: "Namenske mašine, linije i automatizovana rešenja za različite grane opšte industrije — tamo gde standardna oprema ne rešava konkretan zahtev procesa, kapaciteta ili kvaliteta.", href: "/opsta-industrijska-proizvodnja" },
    ],
  },

  trust: {
    label: "Reference",
    title: "Rešenja za zahtevne proizvodne procese",
    body: "Svaki projekat koji realizujemo nastaje kao odgovor na konkretan tehnički zahtev koji standardna oprema ne može da ispuni. Naše reference obuhvataju sisteme za industriju odbrane, kao i složene mašine i linije u drugim sektorima — u svim slučajevima, pouzdanost, preciznost i dugoročna eksploatabilnost bili su primarni projektni zahtevi.",
    cta: { label: "Pogledajte reference", href: "/reference" },
    points: [
      { title: "24+ godina iskustva", desc: "Višedecenijsko iskustvo u razvoju i realizaciji specijalnih inženjerskih sistema" },
      { title: "ISO 9001 sertifikovan", desc: "Sistem menadžmenta kvalitetom po međunarodnom standardu" },
      { title: "Globalni tehnološki partneri", desc: "Siemens, ABB, Rexroth, SKF, Aventics — provereni tehnički partneri" },
      { title: "Razvojni i proizvodni centar", desc: "Integrisani prostor za razvoj, proizvodnju, montažu i pripremu sistema" },
    ],
  },

  cta: {
    label: "Sledeći korak",
    title: "Razgovarajmo o vašem projektu",
    body: ctaInviteBody,
    primaryCta: { label: "Pošaljite upit", href: "mailto:office@servoteh.com" },
    phoneCta: { label: "+381 (11) 31-41-564", href: "tel:+381113141564" },
    contactHeading: "Kontakt",
    contacts: [
      { label: "Adresa", lines: ["Ugrinovačka 163, 11272 Dobanovci", "Beograd, Srbija"] },
      { label: "Email", lines: ["office@servoteh.com"], href: "mailto:office@servoteh.com" },
      { label: "Telefon", lines: ["+381 (11) 31-41-564"], href: "tel:+381113141564" },
    ],
    mapButtons: [
      { label: "Otvorite mapu", href: "https://www.google.com/maps/search/?api=1&query=Ugrinova%C4%8Dka%20163%2C%2011272%20Dobanovci%2C%20Beograd%2C%20Srbija" },
      { label: "Kako do nas", href: "https://www.google.com/maps/dir/?api=1&destination=Ugrinova%C4%8Dka%20163%2C%2011272%20Dobanovci%2C%20Beograd%2C%20Srbija" },
    ],
  },
};
