import type {
  PageMeta, DeepHeroContent, DeepHeaderContent, DeepTrustItem,
  DeepBlock, DeepRefTeaser, DeepCtaContent, TechSectionContent,
} from "@/lib/types";

export const meta: PageMeta = {
  title: "Prehrambena industrija — SERVOTEH",
  description:
    "Servoteh projektuje i izrađuje mašine, uređaje i specijalne alate za prehrambenu industriju — doziranje, punjenje, pakovanje, ulaganje ambalaže, robotske ćelije i transportni sistemi.",
};

export const hero: DeepHeroContent = {
  eyebrow: "SERVOTEH / Prehrambena industrija",
  titleLead: "Mašine i oprema za",
  titleEm: "prehrambenu industriju",
  lead: "Servoteh već duži niz godina projektuje i izrađuje mašine, uređaje i specijalne alate za kupce iz prehrambene industrije — od doziranja i punjenja, preko ulaganja ambalaže, do pakovanja i transporta proizvoda.",
  primaryCta: { label: "Pošaljite upit", href: "mailto:office@servoteh.com" },
  secondaryCta: { label: "Pogledajte reference", href: "/reference" },
};

export const intro = {
  label: "Pristup",
  title: "Rešenja prilagođena prehrambenom procesu",
  body: "Naša rešenja obuhvataju mašine za punjenje i pakovanje, alate za ekstruziju proizvoda, automatske module za ulaganje ambalaže, robotske ćelije i specijalne transportne sisteme prilagođene konkretnim proizvodnim zahtevima. Svaki projekat razvijamo prema potrebama kupca, sa fokusom na pouzdan rad, visoku produktivnost i jednostavnu integraciju u postojeće proizvodne linije.",
  items: [
    { icon: "gear", text: "Mašine za doziranje, punjenje i pakovanje" },
    { icon: "layers", text: "Automatski moduli za ulaganje ambalaže" },
    { icon: "activity", text: "Robotske ćelije i transportni sistemi" },
    { icon: "check", text: "Integracija u postojeće linije i podrška" },
  ] as DeepTrustItem[],
};

export const oprema: TechSectionContent = {
  id: "ph-oprema",
  tone: "dark",
  label: "Realizovani sistemi",
  title: "Oprema za prehrambenu industriju",
  intro:
    "Namenske mašine i moduli razvijeni za prehrambenu proizvodnju — projektovani za higijenske zahteve procesa, stabilan kapacitet i pouzdan rad u kontinuiranoj proizvodnji.",
  cards: [
    {
      img: "/assets/prehrambena/dozator-1.jpg",
      alt: "Sistem za doziranje proizvoda u prehrambenoj industriji — SERVOTEH",
      title: "Sistemi za doziranje i punjenje",
      desc: "Namenski dozatori za precizno doziranje i punjenje proizvoda u ambalažu, projektovani za stabilan kapacitet i ponovljiv kvalitet u kontinuiranoj proizvodnji.",
    },
    {
      img: "/assets/prehrambena/ulagac.jpg",
      alt: "Automatski ulagač ambalaže (čaša) u procesu pakovanja — SERVOTEH",
      title: "Automatski ulagač ambalaže",
      desc: "Automatski modul za ulaganje ambalaže (čaša) u proces pakovanja, sa kontrolisanim taktom i pouzdanim rukovanjem — za smanjenje ručnog rada i veću produktivnost linije.",
    },
  ],
  cta: { label: "Pošaljite upit", href: "mailto:office@servoteh.com" },
};

export const typesHeader: DeepHeaderContent = {
  label: "Tipovi rešenja",
  title: "Šta razvijamo za prehrambenu industriju",
  body: "Namenske mašine i automatizovani sistemi prilagođeni proizvodu, taktu, higijenskim zahtevima i prostoru.",
};

export const types: DeepBlock[] = [
  { title: "Mašine za doziranje, punjenje i pakovanje", desc: "Rešenja za precizno doziranje, punjenje i pakovanje proizvoda, sa prilagođavanjem tipu proizvoda i kapacitetu linije." },
  { title: "Automatski moduli za ulaganje ambalaže", desc: "Moduli za automatsko ulaganje čaša i druge ambalaže u proces pakovanja, sa kontrolisanim taktom i pouzdanim rukovanjem." },
  { title: "Alati za ekstruziju proizvoda", desc: "Specijalni alati za ekstruziju i oblikovanje prehrambenih proizvoda, razvijeni prema konkretnom proizvodu i procesu." },
  { title: "Robotske ćelije i transportni sistemi", desc: "Robotizovano rukovanje i specijalni transportni sistemi za povezivanje operacija u usklađen i pouzdan proizvodni tok." },
];

export const refTeaser: DeepRefTeaser = {
  title: "Pogledajte kako pristupamo referentnim projektima",
  body: "Pregled realizovanih sistema kroz tip rešenja, tehnološki opseg i oblasti primene — za prehrambenu industriju i druge zahtevne procese.",
};

export const cta: DeepCtaContent = {
  label: "Sledeći korak",
  title: "Imate proces u prehrambenoj proizvodnji koji treba automatizovati?",
  body: "Pošaljite opis proizvoda, ambalaže i zahteva procesa — naš tim može da predloži koncept namenske mašine ili linije i nivo automatizacije.",
};
