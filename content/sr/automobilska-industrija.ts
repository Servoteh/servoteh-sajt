import type {
  PageMeta, DeepHeroContent, DeepHeaderContent, DeepTrustItem,
  DeepNumberedCard, DeepIconCard, DeepCtaContent,
  TechSectionContent,
} from "@/lib/types";

export const meta: PageMeta = {
  title: "Automobilska industrija — SERVOTEH",
  description:
    "Servoteh projektuje, proizvodi i pušta u rad namenske proizvodne linije, testne stanice, manipulatore i mašine za automobilsku industriju. Reference: Robert Bosch i ZF Group.",
};

export const hero: DeepHeroContent = {
  eyebrow: "SERVOTEH / Automobilska industrija",
  titleLead: "Namenske linije i mašine za",
  titleEm: "automobilsku industriju",
  lead: "Servoteh razvija, proizvodi i pušta u rad automatske i poluautomatske proizvodne linije, testne stanice, manipulacione sisteme, namenske mašine, alate i opremu za automobilski sektor — projektovane prema konkretnom procesu, radnom komadu, taktu i zahtevima kontrole kvaliteta.",
  primaryCta: { label: "Pošaljite upit", href: "mailto:office@servoteh.com" },
  secondaryCta: { label: "Pogledajte reference", href: "/reference" },
};

export const intro = {
  label: "Pristup",
  title: "Rešenja projektovana za zahtevne automobilske procese",
  body: "Automobilska industrija zahteva visok nivo pouzdanosti, ponovljiv kvalitet, kratak takt, dobru ergonomiju i stabilan rad opreme u dugoj eksploataciji. Zato se svako rešenje projektuje kao celina — od mehanike, pneumatskih i hidrauličnih podsistema, preko elektro-upravljanja i softvera, do sigurnosne logike, HMI interfejsa, testiranja i puštanja u rad. Rešenja razvijamo prema konkretnom zahtevu kupca: za nove procese, unapređenje postojećih linija, povećanje kapaciteta ili automatizaciju operacija koje se prethodno rade ručno.",
  items: [
    { icon: "users", text: "Iskustvo sa zahtevnim automobilskim kupcima" },
    { icon: "layers", text: "Automatske i poluautomatske linije" },
    { icon: "activity", text: "Montaža, testiranje i kontrola procesa" },
    { icon: "gear", text: "Namenska rešenja po meri kupca" },
  ] as DeepTrustItem[],
};

/** Proof strip — izdvojene reference (brendovi) za brz dokaz kredibiliteta. */
export const proof = {
  note: "Iskustvo u projektima za zahtevne automobilske kupce",
  brands: ["Robert Bosch", "ZF Group"],
};

export const lines: TechSectionContent = {
  id: "auto-lines",
  tone: "dark",
  label: "Proizvodne linije i testne stanice",
  title: "Automatske i poluautomatske linije za montažu i testiranje",
  intro:
    "Servoteh projektuje, proizvodi i pušta u rad automatske i poluautomatske linije za kompleksne operacije sklapanja, montaže i testiranja. Linije se razvijaju po principima Industrije 4.0 — sa boljom povezanošću opreme, praćenjem statusa procesa, upravljanjem parametrima, kontrolom kvaliteta i osnovom za preventivno održavanje.",
  cards: [
    {
      img: "/assets/automobilska/automotive-assembly-line-station-overview.webp",
      alt: "Automatska proizvodna linija sa montažnim stanicama, transporterima i operatorskim interfejsima.",
      title: "Kompletne montažne i testne linije",
      desc: "Integrisan proizvodni sistem koji smanjuje ručni rad, povećava ponovljivost i olakšava nadzor nad proizvodnjom.",
      specs: [
        "Ulazni i izlazni transporteri",
        "Ručne, poluautomatske i automatske stanice",
        "Sistemi za pozicioniranje i stezanje radnih komada",
        "Povezivanje sa postojećom opremom i proizvodnim sistemom",
      ],
    },
    {
      img: "/assets/automobilska/automotive-automatic-stations-closeup.webp",
      alt: "Automatizovane stanice za montažu i testiranje u automobilskom proizvodnom procesu.",
      title: "Automatizovane stanice",
      desc: "Stanice za pozicioniranje, stezanje, presovanje i kontrolu — projektovane za stabilan i ponovljiv takt.",
    },
    {
      img: "/assets/automobilska/automotive-robotic-assembly-cell.webp",
      alt: "Robotska ćelija i sistemi za manipulaciju delovima u procesu montaže.",
      title: "Robotske ćelije i manipulacija",
      desc: "Robotske ćelije za manipulaciju i pomoćne operacije, sa hvataljkama i sigurnosnom logikom prilagođenom procesu.",
    },
    {
      img: "/assets/automobilska/automotive-testing-station-detail.webp",
      alt: "Namenska stanica za pozicioniranje, testiranje i kontrolu komponenata.",
      title: "Testne i kontrolne stanice",
      desc: "Namenske stanice za funkcionalnu proveru, merenje i smanjenje rizika od greške u proizvodnji.",
    },
    {
      img: "/assets/automobilska/automotive-hmi-process-control.webp",
      alt: "Operatorski HMI panel i procesna oprema za praćenje i upravljanje radom linije.",
      title: "HMI i kontrola procesa",
      desc: "Operatorski interfejsi, signalizacija i dijagnostika — praćenje parametara i statusa linije tokom rada.",
    },
  ],
  cta: { label: "Pogledajte proizvodne linije", href: "/proizvodne-linije" },
};

export const machines: TechSectionContent = {
  id: "auto-machines",
  tone: "light",
  label: "Namenske mašine i alati",
  title: "Mašine, alati i oprema za unapređenje proizvodnog procesa",
  intro:
    "Kada standardna oprema ne može da odgovori na konkretan zahtev procesa, radnog komada, prostora, takta ili ergonomije, Servoteh projektuje namensko rešenje — od koncepta i konstrukcije, preko izrade, montaže i automatizacije, do testiranja i puštanja u rad.",
  cards: [
    {
      img: "/assets/automobilska/automotive-machine-tools-equipment-overview.webp",
      alt: "Namenska mašina, alat ili pomoćna oprema za unapređenje proizvodnog procesa u automobilskoj industriji.",
      title: "Namenske mašine i oprema",
      desc: "Mašine za jednu ili više operacija, sa elektro, pneumatskim i hidrauličnim podsistemima i sigurnosnom opremom.",
    },
    {
      img: "/assets/automobilska/automotive-custom-fixture-station.webp",
      alt: "Namenski uređaj sa komandnim panelima i mehanizmima za pozicioniranje radnih komada.",
      title: "Alati i radne stanice po meri",
      desc: "Alati za pozicioniranje, stezanje, kontrolu i montažu, uz uređaje za rasterećenje operatera.",
    },
    {
      img: "/assets/automobilska/automotive-precision-tooling-detail.webp",
      alt: "Precizni alat i stezni element razvijen prema zahtevu procesa i radnog komada.",
      title: "Precizni alati i stezni elementi",
      desc: "Mehanizmi za ponovljivo pozicioniranje radnog komada, razvijeni prema tolerancijama procesa.",
    },
  ],
};

export const approachHeader: DeepHeaderContent = {
  label: "Rešenja po zahtevu",
  title: "Namenski pristup za konkretan proizvodni proces",
  body: "Servoteh ne razvija rešenja po principu kataloške opreme, već prema stvarnom proizvodnom zahtevu kupca. Već u ranoj fazi analiziraju se radni komad, operacije, takt, kontrolne tačke, prostor, dostupna infrastruktura i način rada operatera — i na osnovu toga definiše koncept, raspored stanica, nivo automatizacije i kontrola procesa.",
};

export const approach: DeepNumberedCard[] = [
  { num: "01", title: "Analiza zahteva i procesa", desc: "Analiza radnog komada, operacija, takta, kontrolnih tačaka, prostora i načina rada operatera." },
  { num: "02", title: "Koncept i nivo automatizacije", desc: "Predlog koncepta, rasporeda stanica i nivoa automatizacije prema konkretnom procesu." },
  { num: "03", title: "Projektovanje", desc: "Mašinsko, elektro i softversko projektovanje u okviru jednog tima." },
  { num: "04", title: "Izrada i integracija", desc: "Izrada delova, montaža i integracija sistema, uz interno testiranje i proveru funkcionalnosti." },
  { num: "05", title: "Puštanje u rad i podrška", desc: "Isporuka, montaža i puštanje u rad kod kupca, uz postprodajnu podršku i moguća unapređenja." },
];

export const referencesHeader: DeepHeaderContent = {
  label: "Reference",
  title: "Reference u automobilskoj industriji",
  body: "Servoteh je realizovao projekte za zahtevne kupce iz automobilske industrije, uključujući Robert Bosch i ZF Group. Zbog poverljivosti proizvodnih procesa, pojedina rešenja prikazujemo kroz tipologiju sistema, tehnologije i oblasti primene.",
};

export const references: DeepIconCard[] = [
  { icon: "layers", title: "Automatske i poluautomatske linije", desc: "Linije za kompleksne operacije montaže, sklapanja, transporta, kontrole i testiranja komponenti." },
  { icon: "activity", title: "Testne stanice i kontrola procesa", desc: "Namenske stanice za proveru funkcionalnosti, pozicioniranje, merenje i praćenje procesa." },
  { icon: "gear", title: "Namenske mašine, alati i oprema", desc: "Rešenja za poboljšanje proizvodnih operacija, ergonomije, takta i ponovljivosti kvaliteta." },
];

export const cta: DeepCtaContent = {
  label: "Sledeći korak",
  title: "Imate zahtev za novu liniju ili namensku mašinu?",
  body: "Pošaljite opis procesa, radnog komada, željeni takt i zahteve kontrole kvaliteta — naš tim može da predloži koncept rešenja, nivo automatizacije i tehnički pravac realizacije.",
};
