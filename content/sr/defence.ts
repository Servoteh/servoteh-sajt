import type { PageMeta } from "@/lib/types";
import type { Hotspot } from "@/components/deep/HotspotImage";

export const meta: PageMeta = {
  title: "Sistemi za industriju odbrane — SERVOTEH",
  description:
    "Servoteh — Specijalni sistemi za industriju odbrane. Proizvodni sistemi za artiljerijske projektile, linije za municiju i automatski punjači za platforme.",
};

export const hero = {
  eyebrow: "SERVOTEH / Sistemi za industriju odbrane",
  titleLead: "Specijalni sistemi za",
  titleEm: "industriju odbrane",
  lead: "Servoteh razvija specijalne mašine, proizvodne linije i automatizovane sisteme za industriju odbrane — sa fokusom na preciznost, pouzdanost, kontrolu procesa i dugoročnu tehničku podršku.",
  brochureLabel: "Preuzmite brošuru (PDF)",
  brochureHref: "/assets/brochures/defence-brochure.pdf",
  breadcrumb: [
    { label: "Početna", href: "/" },
    { label: "Rešenja", href: "/#solutions" },
    { label: "Sistemi za industriju odbrane" },
  ],
};

export const intro = {
  label: "Pristup",
  title: "Inženjering sa fokusom na industriju odbrane",
  body: "U projektima za industriju odbrane, tehnički zahtevi ne ostavljaju prostor za improvizaciju. Servoteh razvija sisteme kod kojih su preciznost, stabilnost procesa, bezbednost rada i ponovljivost rezultata osnovni uslovi. Naš pristup zasniva se na razvoju namenskih rešenja, prilagođenih konkretnom proizvodnom zahtevu i realnim uslovima eksploatacije.",
  points: [
    "Pristup po meri kupca — svaki sistem razvijen prema konkretnom zadatku",
    "Realizacija po principu ključ u ruke — od analize zahteva do puštanja u rad",
    "Integracija mašinskog, elektro i softverskog razvoja u jednom timu",
    "Postprodajna podrška tokom celokupnog veka eksploatacije sistema",
  ],
};

export const programsHeader = {
  label: "Tri osnovna programa",
  title: "Programske celine",
  body: "Sistemi za industriju odbrane organizovani su kroz tri programske celine koje pokrivaju ključne proizvodne i tehničke zahteve industrije odbrane.",
};

export const programs = [
  {
    num: "Program 01 — Projektili",
    title: "Proizvodni sistemi za tela artiljerijskih projektila",
    desc: "Kompletan proizvodni program za tela artiljerijskih projektila do 155 mm — od kovanja i izvlačenja, preko termičke obrade i hidrostatičkog ispitivanja, do kontrole tvrdoće i završnih operacija.",
    items: [
      "Automatska linija za kovanje",
      "Presa 1000t za predubadanje i ubadanje",
      "Presa 350t za izvlačenje",
      "Presa 400t za završno sužavanje",
      "Oprema za hidrostatičko ispitivanje",
      "Termička obrada i kontrola tvrdoće",
    ],
    label: "Program 01",
    accent: true,
  },
  {
    num: "Program 02 — Municija",
    title: "Linije za proizvodnju municije i komponenti",
    desc: "Servoteh razvija i isporučuje namenske linije i specijalne mašine za proizvodnju municije i njenih komponenti za različite kalibre. Rešenja su projektovana za stabilan rad, visok kapacitet, precizno vođenje procesa i pouzdan kvalitet gotovih delova. Program obuhvata proizvodnju čanče, proizvodnju čaure i finalizaciju zrna, uz mogućnost integracije automatizovanih stanica, transfer sistema i kontrole kvaliteta.",
    items: [
      "Proizvodnja čanče",
      "Proizvodnja čaure",
      "Finalizacija zrna",
      "Servo Transfer presa",
      "Mašine za proizvodnju pirotehničkih usporivača",
    ],
    label: "Program 02",
  },
  {
    num: "Program 03 — Platforme",
    title: "Automatski punjači i podsistemi za samohodne artiljerijske platforme",
    desc: "Servoteh razvija automatske punjače i povezane podsisteme za savremene samohodne artiljerijske platforme, sa fokusom na brže punjenje, veću operativnu pouzdanost i smanjenje opterećenja posade.",
    items: [
      "Automatski punjač — samohodni artiljerijski sistemi nove generacije",
      "Automatski punjač za NORA B-52",
      "Automatski punjač za Aleksandar",
      "Kasetni i dopunski podsistemi za rukovanje municijom",
      "Presa za navlačenje ojačavajuće čaure na tenkovsku cev",
    ],
    label: "Program 03",
  },
];

export const program1Hotspots: Hotspot[] = [
  { left: "12%", top: "52%", edge: "left", label: "Indukciona linija / zagrevanje i odsecanje šipke" },
  { left: "37%", top: "44%", label: "Hidraulična presa 1000 t — predubadanje i ubadanje" },
  { left: "62%", top: "44%", label: "Presa 350 t — izvlačenje" },
  { left: "84%", top: "58%", edge: "right", label: "Presa 630 t — završno sužavanje" },
];

export const detailBlocks = [
  {
    tone: "dark",
    reverse: false,
    img: "/assets/defence/programme-1-detail.webp",
    alt: "Kompletan proizvodni program za tela artiljerijskih projektila do 155 mm — SERVOTEH",
    label: "Program 01",
    title: "Kompletan proizvodni program za tela artiljerijskih projektila do 155 mm",
    body: "Servoteh razvija i isporučuje kompletan proizvodni program za tela artiljerijskih projektila do 155 mm. Rešenje obuhvata ceo tehnološki tok — od pripreme i zagrevanja polaznog materijala, preko kovanja, izvlačenja i završnog oblikovanja tela, do termičke obrade, hidrostatičkog ispitivanja, kontrole i merenja tvrdoće i završnih operacija. Program uključuje i robotizovanu manipulaciju između faza procesa, dekunderisanje i integrisana rešenja za stabilan, ponovljiv i bezbedan rad proizvodnje.",
    bullets: [
      "Indukciono zagrevanje i toplo sečenje polaznog materijala",
      "Kovanje i formiranje tela projektila",
      "Izvlačenje i završno oblikovanje",
      "Robotizovana manipulacija vrućim komadima",
      "Dekunderisanje između operacija",
      "Termička obrada",
      "Hidrostatičko ispitivanje",
      "Kontrola i merenje tvrdoće",
      "Utiskivanje vodećeg prstena",
    ],
    ctaGhostLight: false,
    hotspots: true,
  },
  {
    tone: "light",
    reverse: true,
    img: "/assets/defence/programme-2-detail.webp",
    alt: "Linije za proizvodnju municije i komponenti — SERVOTEH",
    label: "Program 02",
    title: "Linije za proizvodnju municije i komponenti",
    body: "Modularne linije i mašine za automatizovanu proizvodnju komponenti municije projektovane su za stabilan rad u uslovima visokog kapaciteta i stroge kontrole dimenzija. Rešenja obuhvataju proizvodnju čanče, proizvodnju čaure i finalizaciju zrna, uz mogućnost integracije transfer sistema, automatizovanog rukovanja i kontrole kvaliteta.",
    bullets: [
      "Modularna arhitektura linija prilagodljiva različitim kalibrima i komponentama",
      "Servo Transfer presa za precizno taktno rukovanje komponentama",
      "Automatizovani procesi sa integrisanom dimenzionalnom kontrolom",
      "Stabilnost procesa i visoka produktivnost kao primarni projektni zahtevi",
      "Mašine za proizvodnju pirotehničkih usporivača razvijene prema posebnim bezbednosnim zahtevima",
    ],
    ctaGhostLight: true,
    hotspots: false,
  },
  {
    tone: "mid",
    reverse: false,
    img: "/assets/defence/programme-3-detail.webp",
    alt: "Automatski punjači za samohodne artiljerijske sisteme nove generacije — SERVOTEH",
    label: "Program 03",
    title: "Automatski punjači za samohodne artiljerijske sisteme nove generacije",
    body: "Servoteh razvija automatske punjače i povezane podsisteme za savremene 155 mm samohodne artiljerijske sisteme. Rešenja su projektovana za brže punjenje, veću operativnu pouzdanost i manje opterećenje posade, uz prilagođavanje arhitekturi konkretne platforme i režimu rada u poljskim uslovima.",
    bullets: [
      "Automatski punjači za samohodne artiljerijske sisteme nove generacije",
      "Rešenja za 155 mm platforme sa fokusom na brzinu punjenja i pouzdanost rada",
      "Smanjenje opterećenja posade kao ključni operativni zahtev",
      "Razvoj prilagođen arhitekturi konkretne platforme — NORA B-52, Aleksandar i sistemi nove generacije",
    ],
    ctaGhostLight: true,
    hotspots: false,
  },
];

export const requirements = {
  label: "Projektni zahtevi",
  title: "Zahtevi koje sistem mora da ispuni",
  body: "Svaki sistem koji Servoteh razvija za industriju odbrane mora da zadovolji pet ključnih inženjerskih zahteva koji određuju konstrukciju, izbor materijala i arhitekturu upravljanja.",
  cards: [
    { title: "Preciznost", desc: "Tačnost dimenzija i ponovljivost rezultata kao temeljni projektni zahtev za svaki element sistema." },
    { title: "Pouzdanost", desc: "Stabilan rad u dugim serijama bez pada performansi — bez kompromisa u operativnim uslovima." },
    { title: "Kontrola procesa", desc: "Integrisani sistemi praćenja i verifikacije parametara procesa u realnom vremenu." },
    { title: "Bezbednost rada", desc: "Bezbednosna arhitektura integralna u konstrukciju sistema — ne naknadno dodata." },
    { title: "Dugoročna održivost", desc: "Konstruktivna rešenja koja omogućavaju dugotrajan rad, servisiranje i unapređenja sistema." },
  ],
};

export const process = {
  label: "Proces realizacije",
  title: "Od zahteva do puštanja u rad",
  body: "Svaki sistem razvija se prema konkretnom proizvodnom zadatku — od analize zahteva i mašinskog projektovanja do integracije, puštanja u rad i podrške.",
  steps: [
    { num: "01", title: "Analiza zahteva i koncept", desc: "Detaljna analiza tehničkog zadatka, procesa i radnog okruženja. Definisanje konceptnog rešenja u saradnji sa kupcem." },
    { num: "02", title: "Razvoj i mašinsko projektovanje", desc: "Mašinski, elektro i softverski razvoj objedinjeni u jednom timu — 3D konstrukcija, električna šema i upravljački softver razvijaju se paralelno." },
    { num: "03", title: "Proizvodnja i integracija", desc: "Realizacija kroz sopstvene kapacitete u Dobanovcima — mašinska obrada, sklapanje, elektro integracija i kontrola kvaliteta u svakom koraku." },
    { num: "04", title: "Puštanje u rad i podrška", desc: "Instalacija, puštanje u rad, obuka osoblja i dugoročna tehnička podrška tokom celog veka eksploatacije sistema." },
  ],
};

export const why = {
  label: "Zašto Servoteh",
  title: "Tri razloga",
  cards: [
    { num: "01", title: "Integrisani mašinski razvoj", desc: "Mašinski, elektro i softverski razvoj objedinjeni su u jednom timu. Multidisciplinarni pristup koji eliminiše koordinacione gubitke i skraćuje vreme realizacije projekta." },
    { num: "02", title: "Sopstveni kapaciteti realizacije", desc: "Mašinska obrada, sklapanje, integracija i kontrola kvaliteta u okviru sopstvenih kapaciteta u Dobanovcima — bez zavisnosti od podizvođača u ključnim fazama projekta." },
    { num: "03", title: "Podrška nakon isporuke", desc: "Puštanje u rad, obuka osoblja, servisne intervencije, rezervni delovi i dugoročna tehnička podrška — Servoteh ostaje tehnički partner tokom celokupnog veka eksploatacije sistema." },
  ],
};

export const refLink = {
  title: "Pogledajte kako pristupamo referentnim projektima",
  body: "Reference obuhvataju projekte razvijene za zahtevne proizvodne procese, sa fokusom na pouzdanost, preciznost i dugoročnu eksploataciju sistema.",
};

export const cta = {
  title: "Razgovarajmo o vašem tehničkom zahtevu",
  body: "Pošaljite nam osnovne informacije o procesu, proizvodnoj potrebi ili sistemu koji treba razviti, a naš tim će proceniti sledeće korake.",
};
