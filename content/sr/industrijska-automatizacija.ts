import type {
  PageMeta, DeepHeroContent, DeepHeaderContent, DeepTrustItem,
  DeepNumberedCard, DeepIconCard, DeepBlock, DeepRefTeaser, DeepCtaContent,
} from "@/lib/types";

export const meta: PageMeta = {
  title: "Industrijska automatizacija — SERVOTEH",
  description:
    "Servoteh projektuje i integriše sisteme industrijske automatizacije — od elektro-upravljačkih ormana, PLC i HMI rešenja, do integracije senzora, robotike, hidraulike i postprodajne podrške.",
};

export const hero: DeepHeroContent = {
  eyebrow: "SERVOTEH / Industrijska automatizacija",
  titleLead: "Industrijska automatizacija za stabilan",
  titleEm: "i nadziran proizvodni proces",
  lead: "Servoteh projektuje i integriše sisteme industrijske automatizacije — od upravljačkih ormana i PLC/HMI rešenja, do integracije senzora, robotike, hidraulike i tehničke podrške.",
  primaryCta: { label: "Pošaljite upit", href: "mailto:office@servoteh.com" },
  secondaryCta: { label: "Pogledajte reference", href: "/reference" },
};

export const intro = {
  label: "Pristup",
  title: "Automatizacija kao upravljanje procesom, a ne samo opremom",
  body: "Industrijska automatizacija nije zamena ručnog rada automatizovanim kretanjem. To je projektovanje upravljanja, logike, pogona, bezbednosti i nadzora u jedinstven sistem — za stabilniji proces, precizniju kontrolu i sigurniji rad.",
  items: [
    { icon: "servers", text: "Elektro-upravljački sistemi" },
    { icon: "chip", text: "PLC, HMI i SCADA integracija" },
    { icon: "gear", text: "Robotika, hidraulika i pneumatika u funkciji procesa" },
    { icon: "code", text: "Modernizacija i automatizacija postojećih mašina i linija" },
  ] as DeepTrustItem[],
};

export const scopeHeader: DeepHeaderContent = {
  label: "Obuhvat",
  title: "Šta obuhvata jedno rešenje industrijske automatizacije",
  body: "Svako rešenje razvija se prema konkretnom procesu — od upravljanja jednom mašinom do povezivanja celih linija, nadzora i prikupljanja podataka.",
};

export const scope: DeepNumberedCard[] = [
  { num: "01", title: "Elektro-upravljački ormani i razvod", desc: "Projektovanje i izrada elektro-upravljačkih sistema kao osnove stabilnog i sigurnog rada proizvodne opreme." },
  { num: "02", title: "PLC, HMI i SCADA logika", desc: "Razvoj upravljačke logike, operatorskih interfejsa i sistema za nadzor procesa, dijagnostiku i praćenje rada." },
  { num: "03", title: "Integracija senzora, aktuatora i pogona", desc: "Povezivanje svih ključnih elemenata sistema radi precizne kontrole, sinhronizacije i stabilnosti procesa." },
  { num: "04", title: "Robotika, hidraulika i pneumatika", desc: "Kod robotskih i manipulacionih sistema razvijamo kompletno rešenje oko procesa: izbor i integraciju robota, projektovanje hvataljki, povezivanje sa postojećom opremom, razvoj aplikativnog softvera, sigurnosnu logiku i puštanje sistema u rad." },
  { num: "05", title: "Nadzor, dijagnostika i bezbednost procesa", desc: "Rešenja koja omogućavaju sigurniji rad, bolju preglednost procesa i brzu reakciju u slučaju odstupanja ili zastoja." },
];

export const tasksHeader: DeepHeaderContent = {
  label: "Primena",
  title: "Tipični zadaci koje rešavamo",
};

export const tasks: DeepBlock[] = [
  { title: "Automatizacija pojedinačnih mašina", desc: "Kada je potrebno unaprediti pouzdanost, ponovljivost i kontrolu rada jedne mašine ili stanice." },
  { title: "Integracija automatike u proizvodne linije", desc: "Kada više mašina i stanica treba povezati u jedinstven i usklađen proizvodni tok." },
  { title: "Modernizacija i retrofit postojećih sistema", desc: "Kada je potrebno zadržati postojeću opremu, a unaprediti upravljanje, sigurnost i produktivnost." },
  { title: "Prilagođena rešenja za specijalne procese", desc: "Kada standardna automatika nije dovoljna i upravljački sistem treba projektovati prema konkretnom procesu i funkcionalnim zahtevima." },
];

export const retrofit = {
  label: "Modernizacija",
  title: "Modernizacija postojećih mašina i linija",
  body: "Unapređenje postojećih mašina i linija kroz novu automatiku, upravljanje, dijagnostiku i bezbednosne funkcije. Kada zamena cele opreme nije opravdana, modernizacija je najracionalniji put do boljih performansi.",
};

export const processHeader: DeepHeaderContent = {
  label: "Proces",
  title: "Od procesa do upravljanja",
};

export const processSteps = [
  "Analiza procesa i zahteva",
  "Definisanje logike upravljanja",
  "Elektro projektovanje i integracija opreme",
  "Softver, testiranje i puštanje u rad",
  "Dijagnostika, optimizacija i podrška",
];

export const whyHeader: DeepHeaderContent = {
  label: "Prednosti",
  title: "Zašto Servoteh za industrijsku automatizaciju",
};

export const why: DeepIconCard[] = [
  { icon: "users", title: "Integracija mašinskog, elektro i softverskog razvoja", desc: "Upravljanje, elektro i softver razvijaju se zajedno — za bolje usklađen i sigurniji sistem." },
  { icon: "layers", title: "Prilagođeno procesu, ne šablonu", desc: "Svaki sistem projektujemo prema konkretnom procesu — sa osloncem na proverene komponente i platforme, uz potrebna prilagođavanja." },
  { icon: "check", title: "Podrška tokom puštanja u rad i eksploatacije", desc: "Dijagnostika, dorade i tehnička podrška — deo iste odgovornosti." },
];

export const refTeaser: DeepRefTeaser = {
  title: "Pogledajte kako pristupamo referentnim projektima",
  body: "Projekti u kojima su upravljanje, automatika i kontrola procesa bili ključni deo rešenja.",
};

export const cta: DeepCtaContent = {
  label: "Kontakt",
  title: "Razgovarajmo o automatizaciji vašeg procesa",
  body: "Pošaljite nam osnovne informacije o mašini, liniji ili procesu koji želite da automatizujete ili unapredite, a naš tim će proceniti sledeće korake.",
};
