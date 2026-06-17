import type {
  PageMeta, DeepHeroContent, DeepHeaderContent, DeepTrustItem,
  DeepNumberedCard, DeepIconCard, DeepBlock, DeepCtaContent, DeepRelatedCard,
} from "@/lib/types";

export const meta: PageMeta = {
  title: "Proizvodne linije — SERVOTEH",
  description:
    "Servoteh razvija kompletne proizvodne linije prilagođene konkretnom tehnološkom procesu — od projektovanja i proizvodnje do integracije, puštanja u rad i postprodajne podrške.",
};

export const hero: DeepHeroContent = {
  eyebrow: "SERVOTEH / Proizvodne linije",
  titleLead: "Kompletne proizvodne linije",
  titleEm: "za zahtevne industrijske procese",
  lead: "Servoteh razvija i integriše kompletne proizvodne linije prilagođene konkretnom procesu — od manipulacije između operacija, do upravljanja, kontrole kvaliteta i puštanja u rad.",
  primaryCta: { label: "Pošaljite upit", href: "mailto:office@servoteh.com" },
  secondaryCta: { label: "Pogledajte reference", href: "/reference" },
};

export const intro = {
  label: "Pristup",
  title: "Linija kao celovit proizvodni sistem",
  body: "Proizvodna linija nije samo skup povezanih mašina — to je usklađen tehnološki tok u kome stanice, transfer, kontrola i upravljanje funkcionišu kao celina. Razvijamo linije kombinujući proverena rešenja i module sa potrebnim prilagođavanjima ili novim razvojem kada proces to stvarno zahteva.",
  items: [
    { icon: "layers", text: "Projektovanje linije prema konkretnom procesu" },
    { icon: "gear", text: "Integracija mašina, manipulacije i upravljanja" },
    { icon: "check", text: "Kontrola kvaliteta kroz ceo tok" },
    { icon: "cabinet", text: "Puštanje u rad i postprodajna podrška" },
  ] as DeepTrustItem[],
};

export const scopeHeader: DeepHeaderContent = {
  label: "Obuhvat",
  title: "Šta obuhvata jedna proizvodna linija",
  body: "Svaka linija se projektuje kao celovit sistem — prema radnom komadu, kapacitetu, prostoru i zahtevima procesa, sa osloncem na proverene podsisteme i module gde je to moguće.",
};

export const scope: DeepNumberedCard[] = [
  { num: "01", title: "Ulaz i priprema materijala", desc: "Početna priprema sirovine, pozicioniranje i organizovano uvođenje materijala u proces." },
  { num: "02", title: "Tehnološke operacije i radne stanice", desc: "Povezivanje specijalnih mašina i radnih stanica u logičan i usklađen tok obrade, oblikovanja, sklapanja ili testiranja." },
  { num: "03", title: "Manipulacija i transport između faza", desc: "Transfer sistemi, manipulatori, pozicioneri i druga rešenja za kontrolisano kretanje komada kroz proces." },
  { num: "04", title: "Kontrola procesa i kvaliteta", desc: "Integrisana merenja, nadzor parametara i kontrolne tačke koje omogućavaju stabilan kvalitet i ponovljivost." },
  { num: "05", title: "Izlaz, završne operacije i pakovanje", desc: "Završne faze procesa, priprema gotovog proizvoda i organizovan izlaz iz sistema." },
];

export const typesHeader: DeepHeaderContent = {
  label: "Tipovi",
  title: "Tipovi proizvodnih linija koje razvijamo",
};

export const types: DeepBlock[] = [
  { title: "Montažne linije", desc: "Linije za sastavljanje proizvoda i podsklopova, sa kontrolisanim tokom rada, definisanim taktovima i jasnom organizacijom operacija." },
  { title: "Linije za obradu i formiranje", desc: "Linije koje povezuju više tehnoloških operacija obrade, oblikovanja, izvlačenja, presovanja ili drugih proizvodnih postupaka u jedan usklađen proces." },
  { title: "Automatizovane linije sa transferom i manipulacijom", desc: "Linije sa integrisanim transfer sistemima, manipulatorima, pozicionerima i automatizovanim rukovanjem komadima između operacija." },
  { title: "Prilagođene linije za konkretan proces", desc: "Linije projektovane za specifičan proizvod, proces ili industrijski zahtev — kombinacijom standardizovanih modula i namenskih rešenja tamo gde to proces zahteva." },
];

export const reqsHeader: DeepHeaderContent = {
  label: "Zahtevi",
  title: "Ključni zahtevi koje linija mora da ispuni",
};

export const reqs: DeepIconCard[] = [
  { icon: "activity", title: "Kapacitet", desc: "Linija mora biti projektovana tako da ostvari potreban učinak bez ugrožavanja stabilnosti procesa." },
  { icon: "shield", title: "Stabilnost procesa", desc: "Svaka operacija mora pouzdano da radi u ponovljivim uslovima i bez neplaniranih odstupanja." },
  { icon: "clock", title: "Sinhronizacija operacija", desc: "Stanice, transfer i upravljanje moraju da budu vremenski i procesno usklađeni kao jedna celina." },
  { icon: "check", title: "Kontrola kvaliteta", desc: "Provere i merenja treba da budu ugrađeni u tok procesa, a ne dodati naknadno." },
  { icon: "cabinet", title: "Dugoročna održivost", desc: "Konstrukcija, komponente i logika upravljanja moraju omogućiti servisiranje, održavanje i buduća unapređenja." },
];

export const related: DeepRelatedCard = {
  label: "Primer primene",
  title: "Automatske i poluautomatske linije za automobilsku industriju",
  body: "Konkretan primer proizvodnih linija u praksi — montažne i testne linije, robotske ćelije i kontrola procesa za zahtevne automobilske kupce.",
  cta: { label: "Pogledajte automobilsku industriju", href: "/automobilska-industrija" },
};

export const cta: DeepCtaContent = {
  label: "Sledeći korak",
  title: "Razgovarajmo o vašoj proizvodnoj liniji",
  body: "Pošaljite nam osnovne informacije o procesu, proizvodu, kapacitetu i tehničkom zahtevu, a naš tim će proceniti naredne korake za razvoj linije prilagođene vašem sistemu.",
};
