import type {
  PageMeta, DeepHeroContent, DeepHeaderContent, DeepTrustItem,
  DeepNumberedCard, DeepIconCard, DeepRefTeaser, DeepCtaContent,
  TechSectionContent,
} from "@/lib/types";

export const meta: PageMeta = {
  title: "Specijalne mašine — SERVOTEH",
  description:
    "Servoteh razvija specijalne mašine, radne stanice i namenske uređaje za konkretne operacije u proizvodnom procesu — kada standardna oprema nije dovoljna.",
};

export const hero: DeepHeroContent = {
  eyebrow: "SERVOTEH / Specijalne mašine",
  titleLead: "Specijalne mašine razvijene",
  titleEm: "za konkretan proces",
  lead: "Kada standardna oprema ili postojeća rešenja ne ispunjavaju zahtev procesa, Servoteh razvija i prilagođava specijalne mašine prema radnom komadu, operaciji i uslovima rada — od projektovanja do puštanja u rad.",
  primaryCta: { label: "Pošaljite upit", href: "mailto:office@servoteh.com" },
  secondaryCta: { label: "Pogledajte reference", href: "/reference" },
};

export const intro = {
  label: "Pristup",
  title: "Specijalna mašina za tačno određenu operaciju",
  body: "Specijalne mašine su namenska rešenja za konkretne operacije — od obrade i oblikovanja do testiranja i manipulacije. Razvijamo ih kada kataloška oprema, postojeći sistemi ili standardna konfiguracija ne ispunjavaju traženi tehnološki, kapacitivni ili prostorni zahtev.",
  items: [
    { icon: "layers", text: "Standardna baza uz potrebna prilagođavanja" },
    { icon: "gear", text: "Mašinski, elektro i softverski razvoj u jednom timu" },
    { icon: "cabinet", text: "Sopstvena proizvodnja i montaža" },
    { icon: "check", text: "Puštanje u rad i postprodajna podrška" },
  ] as DeepTrustItem[],
};

export const groupsHeader: DeepHeaderContent = {
  label: "Oblasti primene",
  title: "Šta obuhvataju specijalne mašine",
  body: "Svaka mašina razvija se za tačno određenu operaciju — prilagođena radnom komadu, taktu, prostoru i zahtevanom kvalitetu.",
};

export const groups: DeepNumberedCard[] = [
  { num: "01", title: "Mašine za obradu i oblikovanje", desc: "Namenska rešenja za sečenje, bušenje, oblikovanje, izvlačenje, presovanje i druge specifične tehnološke operacije." },
  { num: "02", title: "Mašine za sklapanje i montažu", desc: "Stanice i mašine za pozicioniranje, sastavljanje, spajanje i druge operacije montaže." },
  { num: "03", title: "Mašine za testiranje i kontrolu", desc: "Rešenja za ispitivanje, merenje, proveru funkcionalnosti i kontrolu kvaliteta delova i sklopova." },
  { num: "04", title: "Mašine za manipulaciju i transport", desc: "Specijalni transfer sistemi, manipulatori, pozicioneri i uređaji za interno vođenje komada kroz proces." },
  { num: "05", title: "Rekonstrukcija i unapređenje postojeće opreme", desc: "Modernizacija, retrofit i funkcionalna unapređenja postojećih mašina radi većeg kapaciteta, pouzdanosti i kvaliteta." },
];

export const processHeader: DeepHeaderContent = {
  label: "Proces",
  title: "Od tehnološkog zahteva do gotovog rešenja",
  body: "Svaka mašina nastaje iz konkretnog procesnog problema — analizom radnog komada, operacije, takta i prostornih ograničenja. Na osnovu toga se projektuje, proizvodi i integriše namensko rešenje.",
};

export const processSteps = [
  "Analiza procesa i tehničkog zahteva",
  "Koncept i mašinsko projektovanje",
  "Proizvodnja, sklapanje i integracija",
  "Upravljanje, testiranje i puštanje u rad",
  "Postprodajna podrška i eventualna unapređenja",
];

export const applyHeader: DeepHeaderContent = {
  label: "Industrije",
  title: "Primena u različitim industrijskim procesima",
  body: "Isti pristup primenjujemo u raznim oblastima — fokus je na konkretnoj operaciji, ne na industriji kao etiketi.",
};

export const applyTags = [
  "Industrija odbrane",
  "Automobilska industrija",
  "Vazduhoplovstvo",
  "Prehrambena industrija",
  "Pakovanje",
  "Metaloprerađivačka industrija",
];

export const whyHeader: DeepHeaderContent = {
  label: "Prednosti",
  title: "Zašto Servoteh za specijalne mašine",
};

export const why: DeepIconCard[] = [
  { icon: "users", title: "Integrisan razvoj", desc: "Sve discipline razvoja objedinjene u jednom timu — brža i preciznija realizacija." },
  { icon: "servers", title: "Sopstveni kapaciteti realizacije", desc: "Sopstveni kapaciteti za proizvodnju, montažu i završnu integraciju." },
  { icon: "check", title: "Podrška nakon isporuke", desc: "Obuka, dijagnostika, rezervni delovi i tehnička podrška — u okviru iste odgovornosti." },
];

export const refTeaser: DeepRefTeaser = {
  title: "Pogledajte kako pristupamo referentnim projektima",
  body: "Projekti u kojima je razvijana namenska oprema ili specijalna mašina za zahtevne proizvodne procese.",
};

export const cta: DeepCtaContent = {
  label: "Kontakt",
  title: "Imate operaciju koju standardna oprema ne rešava?",
  body: "Pošaljite nam osnovne informacije o procesu, radnom komadu i tehničkom zahtevu, a naš tim će proceniti da li je potrebno razviti namensku mašinu ili šire sistemsko rešenje.",
};

// Primeri realizovanih specijalnih mašina (dopuna — slike iz defence-tech).
// Tehničke specifikacije su detaljno na /defence; ovde su koncizni prikazi.
export const techExamples: TechSectionContent = {
  id: "sm-primeri",
  tone: "light",
  label: "Realizovani sistemi",
  title: "Primeri specijalnih mašina iz realizovanih sistema",
  intro:
    "Specijalne mašine koje smo razvili za zahtevne proizvodne procese — najvećim delom u okviru sistema za industriju odbrane. Detaljne specifikacije i kompletan proizvodni tok prikazani su na stranici za industriju odbrane.",
  cards: [
    {
      img: "/assets/defence-tech/artillery-hydraulic-forging-press-1000t.webp",
      alt: "Hidraulična presa 1000 t za toplo oblikovanje",
      title: "Hidraulična presa 1000 t",
      desc: "Presa za toplo oblikovanje — predubadanje i ubadanje u okviru automatske kovačke linije.",
    },
    {
      img: "/assets/defence-tech/artillery-hydraulic-press-350t-deep-drawing.webp",
      alt: "Hidraulična presa 350 t za duboko izvlačenje",
      title: "Hidraulična presa 350 t",
      desc: "Presa za toplo duboko izvlačenje, prilagođena radu pod velikim opterećenjima u automatizovanom toku.",
    },
    {
      img: "/assets/defence-tech/artillery-hydraulic-press-400t-narrowing.webp",
      alt: "Hidraulična presa 630 t za završno sužavanje",
      title: "Hidraulična presa 630 t",
      desc: "Presa za završno sužavanje tela nakon predubadanja, ubadanja i izvlačenja.",
    },
    {
      img: "/assets/defence-tech/artillery-hydrotesting-equipment.webp",
      alt: "Oprema za hidrostatičko ispitivanje pod visokim pritiskom",
      title: "Oprema za hidrostatičko ispitivanje",
      desc: "Provera integriteta komada pod visokim pritiskom, sa praćenjem deformacija i automatskim izveštajem.",
    },
    {
      img: "/assets/defence-tech/artillery-hardness-testing-equipment.webp",
      alt: "Automatska mašina za kontrolu tvrdoće",
      title: "Mašina za kontrolu tvrdoće",
      desc: "Automatska kontrola sa podešavanjem prema kalibru, ultrazvučnim ispitivanjem i označavanjem OK/NOK.",
    },
    {
      img: "/assets/defence-tech/artillery-rotating-band-crimping-press.webp",
      alt: "Hidraulična presa za utiskivanje vodećeg prstena",
      title: "Presa za utiskivanje vodećeg prstena",
      desc: "Specijalizovana presa za utiskivanje bakarnih ili mesinganih vodećih prstenova na telo komada.",
    },
    {
      img: "/assets/defence-tech/ammunition-servo-transfer-press.webp",
      alt: "Servo Transfer presa za komponente municije",
      title: "Servo Transfer presa",
      desc: "Vertikalna presa sa servo transferom i senzorskom kontrolom za precizno taktno rukovanje komponentama.",
    },
    {
      img: "/assets/defence-tech/development-tank-barrel-sleeve-press.webp",
      alt: "Horizontalna presa za navlačenje ojačavajuće čaure na tenkovsku cev",
      title: "Presa za navlačenje ojačavajuće čaure",
      desc: "Horizontalna hidraulična presa za navlačenje ojačavajuće čaure na prednji deo tenkovske cevi (125 mm).",
    },
  ],
  cta: { label: "Pogledajte sisteme za industriju odbrane", href: "/defence" },
};
