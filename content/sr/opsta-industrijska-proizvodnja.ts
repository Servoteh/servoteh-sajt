import type {
  PageMeta, DeepHeroContent, DeepHeaderContent, DeepTrustItem,
  DeepBlock, DeepRefTeaser, DeepCtaContent,
} from "@/lib/types";

export const meta: PageMeta = {
  title: "Opšta industrijska proizvodnja — SERVOTEH",
  description:
    "Servoteh razvija namenske mašine, linije i automatizovana rešenja za različite grane opšte industrije — tamo gde standardna oprema ne rešava konkretan zahtev procesa, kapaciteta ili kvaliteta.",
};

export const hero: DeepHeroContent = {
  eyebrow: "SERVOTEH / Opšta industrijska proizvodnja",
  titleLead: "Namenska rešenja za",
  titleEm: "opštu industriju",
  lead: "Namenske mašine, linije i automatizovana rešenja za različite grane opšte industrije — tamo gde standardna oprema ne rešava konkretan zahtev procesa, kapaciteta ili kvaliteta. Svako rešenje razvijamo prema konkretnoj operaciji, radnom komadu i uslovima proizvodnje.",
  primaryCta: { label: "Pošaljite upit", href: "mailto:office@servoteh.com" },
  secondaryCta: { label: "Pogledajte reference", href: "/reference" },
};

export const intro = {
  label: "Pristup",
  title: "Mašine i sistemi razvijeni prema konkretnom procesu",
  body: "U opštoj industriji rešavamo procese kod kojih su ključni produktivnost, ponovljiv kvalitet, kratak takt i pouzdan rad opreme u dugoj eksploataciji. Razvoj obuhvata mehaniku, elektro-upravljanje i softver u jednom timu — od koncepta i konstrukcije, preko izrade i automatizacije, do testiranja i puštanja u rad. Rešenja razvijamo za nove procese, povećanje kapaciteta ili automatizaciju operacija koje se prethodno rade ručno.",
  items: [
    { icon: "gear", text: "Namenske mašine za specifične operacije" },
    { icon: "layers", text: "Automatizovane linije i sistemi" },
    { icon: "activity", text: "Visoka produktivnost i ponovljivost" },
    { icon: "check", text: "Puštanje u rad i postprodajna podrška" },
  ] as DeepTrustItem[],
};

export const machinesHeader: DeepHeaderContent = {
  label: "Realizovane mašine",
  title: "Izdvojene mašine za opštu industriju",
  body: "Namenske mašine razvijene i puštene u rad za serijsku industrijsku proizvodnju — sa visokim stepenom automatizacije i konstantnim kvalitetom svakog komada.",
};

type MachineCell = {
  title: string;
  desc: string;
  highlights: string[];
  videoId?: string;
  videoTitle?: string;
  img?: string;
  imgAlt?: string;
};

export const machines: MachineCell[] = [
  {
    title: "Mašina za proizvodnju vijčanih rednih stezaljki",
    desc: "Automatizovana mašina za serijsku proizvodnju vijčanih rednih stezaljki namenjenih elektro industriji. Obezbeđuje visoku preciznost i ponovljivost u izradi stezaljki koje se koriste u razvodnim ormarima, upravljačkim pločama i industrijskim instalacijama. Visok stepen automatizacije omogućava veliku produktivnost uz minimalno angažovanje operatera.",
    videoId: "UXyxcCz_PA8",
    videoTitle: "Mašina za proizvodnju vijčanih rednih stezaljki — Servoteh",
    highlights: [
      "Serijska proizvodnja sa visokim stepenom automatizacije",
      "Visoka preciznost i ponovljivost izrade",
      "Velika produktivnost uz minimalno angažovanje operatera",
      "Primena: razvodni ormari, upravljačke ploče i industrijske instalacije",
    ],
  },
  {
    title: "Mašina za proizvodnju kablovskih papučica",
    desc: "Savremena automatska mašina konstruisana za masovnu proizvodnju kablovskih papučica koje se primenjuju u elektro industriji. Krajnji proizvodi namenjeni su sigurnom i trajnom spajanju provodnika u razvodnim ormarima, upravljačkim tablama i industrijskim postrojenjima. Kontinuirani rad uz visoku preciznost obrade osigurava konstantan kvalitet svakog komada i značajno smanjuje troškove proizvodnje.",
    img: "/assets/opsta-industrija/kablovske-papucice.jpg",
    imgAlt: "Automatska mašina za proizvodnju kablovskih papučica — SERVOTEH",
    highlights: [
      "Masovna, kontinuirana proizvodnja",
      "Visoka preciznost obrade i konstantan kvalitet svakog komada",
      "Značajno smanjenje troškova proizvodnje",
      "Primena: razvodni ormari, upravljačke table i industrijska postrojenja",
    ],
  },
];

export const typesHeader: DeepHeaderContent = {
  label: "Tipovi rešenja",
  title: "Šta razvijamo za opštu industriju",
  body: "Namenske mašine i automatizovani sistemi prilagođeni konkretnom procesu, taktu, prostoru i zahtevima kvaliteta.",
};

export const types: DeepBlock[] = [
  { title: "Automatske linije za punjenje i pakovanje", desc: "Rešenja za povećanje kapaciteta i fleksibilan rad sa različitim proizvodima, sa prilagođavanjem taktu i tipu proizvoda." },
  { title: "Specijalne transportne i konvejerske linije", desc: "Transportna rešenja prilagođena proizvodnom toku, prostoru i načinu manipulacije — kao deo šire linije ili kao samostalan sistem." },
  { title: "Namenske mašine za korekciju, doradu i kontrolu", desc: "Mašine za specifične operacije obrade, korekcije ili provere kvaliteta, sa ciljem stabilnijeg kvaliteta i ponovljivosti procesa." },
  { title: "Automatizacija i kontrola procesa", desc: "Upravljanje, nadzor i kontrola procesa kroz elektro, pneumatske, hidraulične i softverske sisteme prema konkretnom zahtevu." },
];

export const refTeaser: DeepRefTeaser = {
  title: "Pogledajte kako pristupamo referentnim projektima",
  body: "Pregled realizovanih sistema kroz tip rešenja, tehnološki opseg i oblasti primene — za industriju odbrane i druge zahtevne industrijske procese.",
};

export const cta: DeepCtaContent = {
  label: "Sledeći korak",
  title: "Imate proizvodni proces koji standardna oprema ne rešava?",
  body: "Pošaljite opis procesa, radnog komada i zahteva kvaliteta — naš tim može da predloži koncept namenskog rešenja i nivo automatizacije.",
};
