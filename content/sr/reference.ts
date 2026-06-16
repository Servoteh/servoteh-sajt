import type { PageMeta } from "@/lib/types";

export const meta: PageMeta = {
  title: "Reference — SERVOTEH",
  description:
    "Servoteh — Projekti razvijeni prema realnim proizvodnim zahtevima. Sistemi za industriju odbrane, specijalne mašine, proizvodne linije i industrijska automatizacija.",
};

export const hero = {
  eyebrow: "SERVOTEH / Reference",
  titleLead: "Reference za zahtevne",
  titleEm: "proizvodne procese",
  leadPre: "Svaki projekat nastaje kao odgovor na konkretan tehnički zahtev. Reference obuhvataju sisteme za ",
  leadLink: { text: "industriju odbrane", href: "/defence" },
  leadPost: ", specijalne mašine, proizvodne linije i automatizovana rešenja za zahtevne industrijske procese.",
  primaryCta: { label: "Pošaljite upit", href: "/#cta" },
  secondaryCta: { label: "Pogledajte rešenja", href: "/#solutions" },
};

export const stats = [
  { value: "24", suffix: "+", label: "Godina iskustva" },
  { value: "100", suffix: "+", label: "Mašina i sistema" },
  { value: "25", suffix: "+", label: "Razvojnih inženjera" },
  { value: "Podrška", label: "U eksploataciji", text: true },
];

export const intro = {
  label: "Naš pristup",
  title: "Projekti razvijeni prema realnim proizvodnim zahtevima",
  body: "Servoteh razvija rešenja kada standardna oprema nije dovoljna. Reference koje prikazujemo obuhvataju projekte kod kojih su preciznost, pouzdanost, kapacitet, bezbednost procesa i dugoročna eksploatacija bili ključni zahtevi.",
  points: [
    { title: "Jedinstven inženjerski tim", desc: "Mašinski, elektro i softverski razvoj objedinjeni su pod istim krovom, u jednom timu." },
    { title: "Standardizovana rešenja uz potrebna prilagođavanja", desc: "Gde god je moguće, oslanjamo se na proverena rešenja, postojeću dokumentaciju i razvijene sisteme. Novi razvoj i posebna prilagođavanja radimo kada proces to zaista zahteva." },
    { title: "Realizacija od koncepta do isporuke", desc: "Jedan tim vodi projekat od ideje do puštanja u rad" },
    { title: "ISO 9001 sertifikovan proces", desc: "Sistem menadžmenta kvalitetom primenjen u svakoj fazi razvoja i realizacije" },
  ],
};

export const categoriesHeader = {
  label: "Oblasti realizacije",
  title: "Kategorije projekata",
  body: "Projekti organizovani prema oblastima inženjerske realizacije — od sistema za industriju odbrane do specijalne industrijske automatizacije.",
};

export const categories = [
  { tag: "01 — Odbrana", title: "Sistemi za industriju odbrane", desc: "Specijalne mašine, linije i sistemi razvijeni za zahtevne proizvodne procese u industriji odbrane — pouzdanost, preciznost i kontrola procesa kao primarni inženjerski zahtevi.", href: "/defence", variant: "defence" },
  { tag: "02 — Mašine", title: "Specijalne mašine", desc: "Mašine razvijene prema konkretnom proizvodnom zadatku, radnom komadu i tehnološkom zahtevu — tamo gde gotova oprema ne daje potrebne rezultate.", href: "/specijalne-masine", variant: "machines" },
  { tag: "03 — Linije", title: "Proizvodne linije", desc: "Kompletne linije sa integracijom mehanike, upravljanja, automatike i bezbednosnih sistema — od ulaza materijala do gotovog proizvoda ili podsklopine.", href: "/proizvodne-linije", variant: "lines" },
  { tag: "04 — Automatizacija", title: "Industrijska automatizacija", desc: "Automatizacija procesa kroz upravljačke, elektro, pneumatske, hidraulične i softverske sisteme — PLC, SCADA, HMI integracija prema konkretnom procesu.", href: "/industrijska-automatizacija", variant: "auto" },
];

export const casesHeader = {
  label: "Primeri realizacije",
  title: "Izdvojeni projekti",
  body: "Primeri projekata koji ilustruju inženjerski pristup i opseg realizacije — od sistema za industriju odbrane do rešenja za opštu industriju. Zbog poverljivosti pojedinih projekata, prikazujemo ih kroz tip rešenja i tehnološki opseg, a ne kroz nazive naručilaca.",
};

export const cases = [
  {
    num: "01", featured: true, title: "Sistem za industriju odbrane",
    desc: "Projektovanje i realizacija sistema razvijenog za visoke zahteve pouzdanosti, preciznosti i kontrole procesa u industriji odbrane. Projekat obuhvata mašinski razvoj, elektro inženjering, softversku integraciju i puštanje u rad.",
    tags: [
      { label: "Industrija odbrane" }, { label: "Po meri kupca" }, { label: "Ključ u ruke" },
      { label: "Postprodajna podrška", neutral: true },
    ],
    meta: "Obim: mašinski razvoj, elektro, softver, puštanje u rad",
  },
  {
    num: "02", title: "Proizvodna linija po meri kupca",
    desc: "Kompletna proizvodna linija prilagođena konkretnom procesu, uz integraciju mehanike, automatike i upravljanja. Od koncepta do puštanja u rad.",
    tags: [
      { label: "Proizvodna linija" }, { label: "Po meri kupca" },
      { label: "Puštanje u rad", neutral: true }, { label: "Obuka osoblja", neutral: true },
    ],
    meta: "Tip: kompletna linija — od koncepta do isporuke",
  },
  {
    num: "03", title: "Automatizovano industrijsko rešenje",
    desc: "Rešenje razvijeno za optimizaciju postojećeg proizvodnog procesa kroz integraciju elektro, softverskih i upravljačkih sistema. PLC programiranje, SCADA implementacija i HMI integracija.",
    tags: [
      { label: "Automatizacija" }, { label: "PLC / SCADA" },
      { label: "Ključ u ruke", neutral: true }, { label: "Postprodajna podrška", neutral: true },
    ],
    meta: "Podrška: servisni ugovor, rezervni delovi i softverska ažuriranja",
  },
  {
    num: "04", title: "Sistem za tela artiljerijskih projektila",
    desc: "Kompletan proizvodni tok za tela projektila do 155 mm — od indukcionog zagrevanja, kovanja i izvlačenja, preko završnog sužavanja, do termičke obrade, hidrostatičkog ispitivanja i kontrole tvrdoće, sa robotizovanom manipulacijom između operacija.",
    tags: [
      { label: "Industrija odbrane" }, { label: "Proizvodni sistem" },
      { label: "Termička obrada", neutral: true }, { label: "Kontrola kvaliteta", neutral: true },
    ],
    meta: "Obim: kompletan tehnološki tok — od pripreme materijala do završne kontrole",
  },
  {
    num: "05", title: "Mašine za flow forming",
    desc: "Vertikalne i horizontalne mašine za flow forming šupljih rotacionih delova — tehnologija koja daje bešavnu konstrukciju visoke čvrstoće, precizne profile i nižu masu gotovog dela.",
    tags: [
      { label: "Specijalne mašine" }, { label: "Flow forming" },
      { label: "Oblikovanje metala", neutral: true },
    ],
    meta: "Tip: napredno oblikovanje šupljih rotacionih delova",
  },
  {
    num: "06", title: "Pogon za balističku zaštitu",
    desc: "Kompletan pogon za proizvodnju balističkih ploča sa hidrauličnim presama, termo-tehničkom instalacijom, regulacijom temperature i SCADA nadzorom procesa.",
    tags: [
      { label: "Industrija odbrane" }, { label: "Hidraulične prese" },
      { label: "SCADA nadzor", neutral: true }, { label: "Termo-tehnika", neutral: true },
    ],
    meta: "Obim: prese, termo-tehnička instalacija i upravljanje sa SCADA nadzorom",
  },
  {
    num: "07", title: "Automatski punjači i podsistemi",
    desc: "Automatski punjači i kasetni podsistemi za savremene samohodne artiljerijske platforme — projektovani za brže punjenje, veću pouzdanost i smanjenje opterećenja posade, uz prilagođavanje arhitekturi konkretne platforme.",
    tags: [
      { label: "Industrija odbrane" }, { label: "155 mm platforme" },
      { label: "Mehanika + hidraulika", neutral: true }, { label: "Bezbednosna logika", neutral: true },
    ],
    meta: "Tip: podsistemi za rukovanje municijom i automatsko punjenje",
  },
  {
    num: "08", title: "Automatska linija za punjenje i pakovanje",
    desc: "Rešenje razvijeno za povećanje proizvodnog kapaciteta i rad sa različitim proizvodima u procesu punjenja i pakovanja, sa prilagođavanjem taktu i tipu proizvoda.",
    tags: [
      { label: "Opšta industrija" }, { label: "Automatska linija" },
      { label: "Punjenje i pakovanje", neutral: true },
    ],
    meta: "Cilj: veći kapacitet i fleksibilan rad sa različitim proizvodima",
  },
  {
    num: "09", title: "Specijalne transportne linije",
    desc: "Konvejerska i transportna rešenja prilagođena proizvodnom toku, prostoru, tipu proizvoda i načinu manipulacije — kao deo šire linije ili kao samostalan sistem.",
    tags: [
      { label: "Opšta industrija" }, { label: "Transport i manipulacija" },
      { label: "Konvejerski sistemi", neutral: true },
    ],
    meta: "Tip: namenska transportna rešenja prilagođena procesu",
  },
  {
    num: "10", title: "Automatska linija za ispravljanje radijatorskih cevi",
    desc: "Namensko rešenje za korekciju deformacija bočnih cevi nakon zavarivanja, sa ciljem stabilnijeg kvaliteta i ponovljivosti procesa.",
    tags: [
      { label: "Opšta industrija" }, { label: "Namensko rešenje" },
      { label: "Ponovljivost procesa", neutral: true },
    ],
    meta: "Obim: korekcija deformacija nakon zavarivanja",
  },
];

export const process = {
  label: "Proces realizacije",
  title: "Od zahteva do puštanja u rad",
  body: "Svaki projekat se razvija u skladu sa konkretnim tehnološkim zahtevom kupca — od inicijalne analize i konstrukcije do finalne isporuke i podrške tokom eksploatacije.",
  steps: [
    { num: "01", title: "Analiza zahteva i koncept", desc: "Razumevanje tehničkog zadatka i radnog okruženja. Definisanje koncepta i specifikacije sa kupcem." },
    { num: "02", title: "Razvoj i projektovanje", desc: "Mašinski, elektro i softverski razvoj u jednom timu. 3D konstrukcija, električna šema, PLC logika i upravljački softver razvijaju se paralelno." },
    { num: "03", title: "Proizvodnja, integracija i montaža", desc: "Realizacija kroz sopstvene kapacitete u Dobanovcima — mehanička obrada, sklapanje, električna integracija, testiranje i kontrola kvaliteta." },
    { num: "04", title: "Puštanje u rad i postprodajna podrška", desc: "Puštanje sistema u rad kod kupca, obuka operatera i tehničkog osoblja. Postprodajna podrška, dijagnostika, rezervni delovi i unapređenja tokom eksploatacije." },
  ],
};

export const focus = {
  label: "Strateški fokus",
  title: "Fokus na industriju odbrane. Kompetencija za mnogo više.",
  body: "Najveći deo novih projekata u poslednjih nekoliko godina vezan je za industriju odbrane. Ipak, isti razvojni pristup i isti inženjerski kapacitet primenjuju se i u drugim industrijskim sistemima — kada proces zahteva specijalno razvijeno, pouzdano i dugoročno održivo rešenje.",
  cta: { label: "Razgovarajmo o projektu", href: "/#cta" },
  cards: [
    { title: "Industrija odbrane", desc: "Sistemi projektovani za visoke zahteve pouzdanosti, preciznosti i kontrole procesa" },
    { title: "Automobilska industrija", desc: "Linije sklapanja, testne stanice, specijalizovani manipulatori i namenske mašine za auto sektor — sa fokusom na produktivnost, kontrolu kvaliteta, kratak ciklus i pouzdan rad u dugoj eksploataciji." },
    { title: "Avio industrija", desc: "Precizna oprema, pomoćni alati za održavanje, dizalice, nosači i sistemi za bezbedno rukovanje sklopovima u vazduhoplovnoj proizvodnji i servisu." },
    { title: "Opšta industrijska proizvodnja", desc: "Namenska rešenja za kompleksne procese u opštoj industrijskoj proizvodnji" },
  ],
};

export const international = {
  label: "Iskustvo",
  title: "Međunarodno iskustvo u realizaciji projekata",
  body: "Servoteh razvija i isporučuje specijalne mašine, proizvodne linije i automatizovane sisteme za kupce iz zemlje i inostranstva. Realizovani su projekti različitog obima i složenosti, od pojedinačnih namenskih sistema do kompletnih rešenja sa puštanjem u rad i podrškom tokom eksploatacije.",
  serbia: {
    title: "Srbija — razvojni i proizvodni centar",
    desc: "Iz kapaciteta u Dobanovcima Servoteh vodi kompletan tok realizacije: projektovanje, proizvodnju, montažu, integraciju, kontrolu kvaliteta i pripremu za puštanje u rad — za domaće i inostrane kupce.",
  },
  regions: [
    {
      title: "Jugoistočna Evropa",
      countries: [
        { name: "Bosna i Hercegovina" },
        { name: "Crna Gora", type: "Hidraulički sistemi" },
        { name: "Severna Makedonija", type: "Automatizacija" },
        { name: "Rumunija", type: "Specijalne mašine" },
      ],
    },
    {
      title: "Severna Afrika",
      countries: [
        { name: "Egipat", type: "Specijalne mašine" },
        { name: "Alžir", type: "Mašine i puštanje u rad sistema" },
        { name: "Namibija", type: "Automatske linije" },
      ],
    },
    {
      title: "Azija",
      countries: [
        { name: "Indija", type: "Mašine i automatske linije" },
        { name: "Kina", type: "Automatizacija" },
        { name: "Azerbejdžan", type: "Specijalne mašine" },
      ],
    },
  ],
};

export const cta = {
  title: "Imate sličan proizvodni zahtev?",
  body: "Pošaljite nam osnovne informacije o procesu, proizvodnoj potrebi ili tehničkom zahtevu, a naš tim će proceniti sledeće korake.",
};
