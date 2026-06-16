import type { PageMeta, TechSectionContent } from "@/lib/types";
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
  label: "Četiri programske celine",
  title: "Programske celine",
  body: "Sistemi za industriju odbrane organizovani su kroz četiri programske celine koje pokrivaju ključne proizvodne i tehničke zahteve industrije odbrane.",
};

export const programs = [
  {
    num: "Program 01 — Projektili",
    title: "Proizvodni sistemi za tela artiljerijskih projektila",
    desc: "Kompletan proizvodni program za tela artiljerijskih projektila do 155 mm — od kovanja i izvlačenja, preko termičke obrade i hidrostatičkog ispitivanja, do kontrole tvrdoće i završnih operacija.",
    label: "Program 01",
    img: "/assets/defence-tech/artillery-full-line-render.webp",
    alt: "Kompletna proizvodna linija za tela artiljerijskih projektila",
    accent: true,
  },
  {
    num: "Program 02 — Municija",
    title: "Linije za proizvodnju municije i komponenti",
    desc: "Namenske linije i specijalne mašine za proizvodnju municije i komponenti za različite kalibre — proizvodnja čanče, čaure i finalizacija zrna, uz transfer sisteme i kontrolu kvaliteta.",
    label: "Program 02",
    img: "/assets/defence-tech/ammunition-production-line-overview.webp",
    alt: "Pregled linije za proizvodnju municije i komponenti",
  },
  {
    num: "Program 03 — Platforme",
    title: "Automatski punjači i podsistemi za samohodne artiljerijske platforme",
    desc: "Servoteh razvija automatske punjače i povezane podsisteme za savremene samohodne artiljerijske platforme, sa fokusom na brže punjenje, veću operativnu pouzdanost i smanjenje opterećenja posade.",
    label: "Program 03",
    img: "/assets/defence-tech/defence-automatic-loader-test-bench.webp",
    alt: "Automatski punjač i kasetni podsistem na testnom postolju",
  },
  {
    num: "Program 04 — Specijalne mašine",
    title: "Specijalne namenske mašine",
    desc: "Specijalne mašine, podsistemi i automatizovana rešenja za specifične zahteve industrije odbrane — tamo gde standardna oprema ne može da ispuni traženi tehnološki, kapacitivni ili prostorni zahtev.",
    label: "Program 04",
    img: "/assets/defence-tech/development-tank-barrel-sleeve-press.webp",
    alt: "Specijalna presa za navlačenje ojačavajuće čaure na cev",
  },
];

export const program1Hotspots: Hotspot[] = [
  { left: "12%", top: "52%", edge: "left", label: "Indukciona linija / zagrevanje i odsecanje šipke" },
  { left: "37%", top: "44%", label: "Hidraulična presa 1000 t — predubadanje i ubadanje" },
  { left: "62%", top: "44%", label: "Presa 350 t — izvlačenje" },
  { left: "84%", top: "58%", edge: "right", label: "Presa 630 t — završno sužavanje" },
];

type DetailBlock = {
  tone: "dark" | "light" | "mid";
  reverse: boolean;
  img: string;
  alt: string;
  label: string;
  title: string;
  body: string;
  bullets: string[];
  ctaGhostLight: boolean;
  hotspots: boolean;
  /** opcioni YouTube ID — slika detaljnog bloka postaje „klik-da-pusti" video */
  video?: string;
};

export const detailBlocks: DetailBlock[] = [
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
    video: "u0UFlRB39wY",
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
  {
    tone: "dark",
    reverse: true,
    img: "/assets/defence-tech/development-vertical-flow-forming-machine.webp",
    alt: "Specijalne namenske mašine za industriju odbrane — SERVOTEH",
    label: "Program 04",
    title: "Specijalne namenske mašine i namenska rešenja",
    body: "Pored proizvodnih linija, Servoteh razvija specijalne mašine, podsisteme i automatizovana rešenja za specifične zahteve industrije odbrane — tamo gde standardna oprema ne može da ispuni traženi tehnološki, kapacitivni ili prostorni zahtev. Razvoj obuhvata mašinsko projektovanje, hidrauliku, elektro upravljanje, softver, proizvodnju, montažu i integraciju.",
    bullets: [
      "Prese za navlačenje ojačavajuće čaure na cevi velikih kalibara",
      "Vertikalne i horizontalne mašine za flow forming šupljih rotacionih delova",
      "Univerzalne avionske modularne školske bombe",
      "Pogon za proizvodnju balističkih ploča (hidraulične prese + SCADA)",
      "Kompletan razvoj — od mašinskog projektovanja do montaže i integracije",
    ],
    ctaGhostLight: false,
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
    { num: "04", title: "Puštanje u rad i postprodajna podrška", desc: "Puštanje sistema u rad kod kupca, obuka tehničkog osoblja, dijagnostika, rezervni delovi i unapređenja tokom eksploatacije." },
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

/* ============================================================
   TEHNIČKE SEKCIJE (dopuna sa starog sajta) — umeću se po programu
   ============================================================ */

// Program 01 — tela artiljerijskih projektila (posle detaljnog bloka P1).
// NAPOMENA: presa za završno sužavanje vodi se kao 630t; brojčane sile (kN)
// su namerno izostavljene jer odgovaraju ~400t klasi (interna provera u toku).
export const tech01: TechSectionContent = {
  id: "tehnicka-resenja-projektili",
  tone: "light",
  label: "Program 01 — tehnička rešenja",
  title: "Tehnička rešenja za tela artiljerijskih projektila",
  intro:
    "Kompletan proizvodni tok za tela artiljerijskih projektila do 155 mm — od pripreme i indukcionog zagrevanja, preko kovanja, dubokog izvlačenja i završnog sužavanja, do termičke obrade, hidrostatičkog ispitivanja i kontrole tvrdoće. Sistem se projektuje kao celina, sa robotizovanom manipulacijom između ključnih operacija i integrisanim upravljanjem.",
  cards: [
    {
      img: "/assets/defence-tech/artillery-hydraulic-forging-press-1000t.webp",
      alt: "Hidraulična presa 1000 t za predubadanje i ubadanje tela projektila",
      title: "Hidraulična presa 1000 t za predubadanje i ubadanje (HFP 1000)",
      desc: "Presa za operacije toplog oblikovanja, namenjena predubadanju i ubadanju tela projektila u okviru automatske linije.",
      specs: [
        "Maksimalna sila kovanja: 10.000 kN",
        "Povratna sila: 1.100 kN",
        "Radni hod klizača: 1.000 mm",
        "Radni sto: 1.500 × 1.350 mm",
        "Sila izbacivača: 1.250 kN / hod 500 mm",
        "Nominalna snaga: ~500 kW",
      ],
    },
    {
      img: "/assets/defence-tech/artillery-hydraulic-press-350t-deep-drawing.webp",
      alt: "Hidraulična presa 350 t za duboko izvlačenje u automatskoj liniji",
      title: "Hidraulična presa 350 t za duboko izvlačenje (DPS 400)",
      desc: "Presa za toplo duboko izvlačenje, prilagođena stabilnom radu pod velikim opterećenjima i integraciji u automatizovane tokove.",
      specs: [
        "Maksimalna sila presovanja: 3.500 kN",
        "Povratna sila: 1.500 kN",
        "Hod prese: 4.000 mm",
        "Sila pri maksimalnoj brzini izvlačenja: 1.670 kN",
        "Hod prihvatnika komada: 500 mm",
        "Svetli otvor: 4.540 × 1.910 mm",
      ],
    },
    {
      img: "/assets/defence-tech/artillery-hydraulic-press-400t-narrowing.webp",
      alt: "Hidraulična presa za završno sužavanje tela projektila",
      title: "Hidraulična presa 630 t za završno sužavanje (HFS 630)",
      desc: "Presa za završno sužavanje (nosing) tela nakon predubadanja, ubadanja i izvlačenja. Konstruisana za širok raspon kovačkih zahteva, uz mogućnost dopune pomoćnom opremom prema konkretnom procesu.",
      specs: [
        "Sila kovanja: 6.300 kN",
        "Radna površina: 1.000 × 1.000 mm",
        "Hod klizača: 1.000 mm",
        "Nominalna snaga: 450 kW",
        "Donji izbacivač: 250 kN / hod 500 mm",
        "Gornji izbacivač: 500 kN / hod 150 mm",
      ],
    },
    {
      img: "/assets/defence-tech/artillery-hydrotesting-equipment.webp",
      alt: "Oprema za hidrostatičko ispitivanje tela projektila pod visokim pritiskom",
      title: "Oprema za hidrostatičko ispitivanje",
      desc: "Sistem za proveru integriteta tela projektila pod visokim pritiskom, sa praćenjem deformacija i automatskim generisanjem izveštaja.",
      specs: [
        "Maksimalni ispitni pritisak: 1.200 bar",
        "Maksimalni prečnik komada: 155 mm",
        "Maksimalna masa komada: 80 kg",
        "Merenje deformacije tokom ispitivanja",
        "Izveštaj i grafikon pritisak–deformacija",
        "Pneumatski manipulator za teške komade",
      ],
    },
    {
      img: "/assets/defence-tech/artillery-heat-treatment-line.webp",
      alt: "Linija za termičku obradu — kaljenje, popuštanje, pranje i transport komada",
      title: "Linija za termičku obradu",
      video: "tULt13jHqaw",
      desc: "Kompletna linija za termičku obradu tela projektila — normalizacija, kaljenje, žarenje i otpuštanje, sa pranjem, odmašćivanjem i kontrolisanim hlađenjem. Rad u zaštitnoj atmosferi azota, sa automatizovanim transportom komada i upravljanjem preko Siemens PLC-a, uz recepte termičke obrade i arhiviranje procesnih parametara za stabilan i ponovljiv kvalitet u serijskoj proizvodnji.",
      specs: [
        "Radni prostor: 1.220 × 910 × 910 mm; nosivost 1.000 kg",
        "Komorna peć za kaljenje u ulju, 750–1.000 °C, u zaštitnoj atmosferi azota (N₂)",
        "Peć za žarenje i otpuštanje do 750 °C (grejači u SiC zaštitnim cevima)",
      ],
    },
    {
      img: "/assets/defence-tech/artillery-hardness-testing-equipment.webp",
      alt: "Automatska mašina za kontrolu tvrdoće tela projektila",
      title: "Oprema za kontrolu tvrdoće",
      video: "3cvn8B4DyGs",
      desc: "Automatska mašina za završnu proveru tela projektila, sa automatskim podešavanjem prema kalibru i generisanjem izveštaja.",
      specs: [
        "Opseg kalibara: 80–155 mm",
        "Kapacitet: 80–120 kom/h",
        "Maksimalna masa komada: 80 kg",
        "Glodajuća jedinica za pripremu površine",
        "Ultrazvučna jedinica za ispitivanje tvrdoće",
        "Označavanje OK/NOK i automatski izveštaj",
      ],
    },
    {
      img: "/assets/defence-tech/artillery-rotating-band-crimping-press.webp",
      alt: "Hidraulična presa za utiskivanje vodećeg prstena na telo projektila",
      title: "Presa za utiskivanje vodećeg prstena (SPS)",
      desc: "Specijalizovana hidraulična presa za utiskivanje bakarnih ili mesinganih vodećih prstenova. Za veće kalibre dopunjava se električnom dizalicom ili robotskim rukovanjem.",
      specs: [
        "Broj hidrauličnih cilindara: 6–12",
        "Maksimalna sila utiskivanja: 4,5 MN",
        "Opciona integracija dizalice ili robota za veće kalibre",
      ],
    },
  ],
  cta: { label: "Pošaljite tehnički zahtev", href: "mailto:office@servoteh.com" },
};

// Program 02 — municija i komponente (posle detaljnog bloka P2).
export const tech02: TechSectionContent = {
  id: "tehnicka-resenja-municija",
  tone: "dark",
  label: "Program 02 — tehnička rešenja",
  title: "Linije i specijalne mašine za municiju i komponente",
  intro:
    "Namenske proizvodne linije i specijalne mašine za proizvodnju municije i njenih komponenti za različite kalibre. Rešenja se projektuju prema kapacitetu, tipu komponente, nivou automatizacije i zahtevima kontrole kvaliteta, sa transferom između stanica i bezbednosnom logikom za serijski rad.",
  leadImg: {
    src: "/assets/defence-tech/ammunition-production-line-overview.webp",
    alt: "Pregled linije za proizvodnju municije i komponenti",
  },
  cards: [
    {
      img: "/assets/defence-tech/ammunition-servo-transfer-press.webp",
      alt: "Servo Transfer presa za automatizovanu proizvodnju komponenti municije",
      title: "Servo Transfer presa",
      desc: "Vertikalna presa za sklapanje komponenti zrna sa servo pogonjenim transfer mehanizmima. Senzorska kontrola u svakoj fazi prekida proces pri odstupanju i štiti operatera, alat i komad.",
      specs: [
        "Brzina proizvodnje: do 180 delova/min",
        "Potrošnja energije: ~40 kW",
        "Servo transfer za precizno pomeranje",
        "Integrisana kontrola položaja i kvaliteta",
        "Brzo prilagođavanje kalibrima i alatima",
      ],
    },
    {
      img: "/assets/defence-tech/ammunition-pyrotechnic-retarders-line.webp",
      alt: "Hidraulična presa za duboko izvlačenje komponenti municije",
      title: "Hidraulična presa za duboko izvlačenje",
      desc: "Prese za duboko izvlačenje za integraciju u automatske i poluautomatske linije — za precizno formiranje složenih delova i stabilan rad pod velikim opterećenjima.",
      specs: [
        "Integracija u automatske i poluautomatske linije",
        "Precizno formiranje kompleksnih delova",
        "Stabilan rad pri velikim opterećenjima",
        "Prilagođavanje različitim konfiguracijama alata",
      ],
    },
    {
      img: "/assets/defence-tech/ammunition-hydraulic-deep-drawing-press.webp",
      alt: "Mašina za proizvodnju pirotehničkih usporivača sa linearnim transfer sistemom",
      title: "Mašine za pirotehničke usporivače",
      desc: "Linije sa linearnim transfer sistemom za brz, ponovljiv i kontrolisan ciklus, sa posebnom pažnjom na tačnost doziranja, bezbednost i stabilnost procesa.",
      specs: [
        "Takt ciklusa: 0,8–1,0 s",
        "Tačnost doziranja: 0,03–0,1 g po ciklusu",
        "Maksimalna brzina formiranja: 5 mm/s",
        "Pritisak presovanja: do 2.500 bar",
        "Linearni transfer + bezbednosna logika",
      ],
    },
  ],
  cta: { label: "Pošaljite tehnički zahtev", href: "mailto:office@servoteh.com" },
};

// Program 04 — specijalne namenske mašine (posle detaljnog bloka P4).
export const tech04: TechSectionContent = {
  id: "tehnicka-resenja-specijalne-masine",
  tone: "light",
  label: "Program 04 — tehnička rešenja",
  title: "Specijalne namenske mašine i podsistemi",
  intro:
    "Pored proizvodnih linija, Servoteh razvija specijalne mašine, podsisteme i automatizovana rešenja za specifične zahteve industrije odbrane — tamo gde standardna oprema ne može da ispuni traženi tehnološki, kapacitivni ili prostorni zahtev. Razvoj obuhvata mašinsko projektovanje, hidrauliku, elektro upravljanje, softver, proizvodnju, montažu i integraciju.",
  cards: [
    {
      img: "/assets/defence-tech/development-tank-barrel-sleeve-press.webp",
      alt: "Horizontalna hidraulična presa za navlačenje ojačavajuće čaure na tenkovsku cev",
      title: "Presa za navlačenje ojačavajuće čaure na tenkovsku cev",
      desc: "Specijalna horizontalna hidraulična presa za navlačenje ojačavajuće čaure na prednji deo tenkovske cevi kalibra 125 mm, sa kontrolisanom silom presovanja radi preciznog spoja i veće strukturne čvrstoće.",
      specs: [
        "Horizontalna hidraulična konstrukcija",
        "Kalibar primene: 125 mm",
        "Sila presovanja: 600 t",
        "Interferentni spoj: 0,5 mm",
      ],
    },
    {
      img: "/assets/defence-tech/development-vertical-flow-forming-machine.webp",
      alt: "Vertikalna mašina za flow forming šupljih rotacionih delova",
      title: "Vertikalna mašina za flow forming",
      desc: "Flow forming je napredna tehnologija oblikovanja šupljih rotacionih delova — daje bešavnu konstrukciju visoke čvrstoće, dobru otpornost na udar, precizne profile i nižu masu gotovog dela.",
      specs: [
        "Bešavna konstrukcija visoke čvrstoće",
        "Velika otpornost na udar i nosivost",
        "Precizni profili",
        "Niža masa i niži troškovi proizvodnje",
      ],
    },
    {
      img: "/assets/defence-tech/development-horizontal-flow-forming-machine.webp",
      alt: "Horizontalna mašina za flow forming šupljih rotacionih delova",
      title: "Horizontalna mašina za flow forming",
      desc: "Isti tehnološki princip u horizontalnoj konfiguraciji, pogodnoj za određene geometrije i zahteve manipulacije. Sistem se projektuje prema dimenziji komada, profilu i proizvodnom taktu.",
      specs: [
        "Bešavna konstrukcija visoke čvrstoće",
        "Otpornost na udar i opterećenje",
        "Precizno formiranje profila",
        "Prilagođavanje procesu kupca",
      ],
    },
    {
      img: "/assets/defence-tech/development-universal-aircraft-modular-practice-bomb.webp",
      alt: "Univerzalna avionska modularna školska bomba za obuku pilota",
      title: "Univerzalne avionske modularne školske bombe",
      desc: "Modularna školska bomba namenjena obuci pilota, razvijena za jednostavnu adaptaciju i integraciju na različite tipove vazduhoplova. Performanse potvrđivane kroz integraciju sa avionima Orao, Super Galeb i MiG-21 BIS.",
    },
    {
      img: "/assets/defence-tech/development-ballistic-plates-plant.webp",
      alt: "Pogon za proizvodnju balističkih ploča sa hidrauličnim presama i SCADA upravljanjem",
      title: "Pogon za proizvodnju balističkih ploča",
      desc: "Kompletan pogon sa hidrauličnim presama, termo-tehničkom instalacijom, regulacijom temperature i SCADA upravljanjem.",
      specs: [
        "Tri hidraulične prese: 2 × 400 t + 600 t",
        "Četvorosekcioni alati temperirani termalnim uljem",
        "Sistem za grejanje i hlađenje",
        "Regulacija temperature + SCADA nadzor",
      ],
    },
  ],
  cta: { label: "Pošaljite tehnički zahtev", href: "mailto:office@servoteh.com" },
};
