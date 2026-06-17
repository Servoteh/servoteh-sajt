import type { PageMeta } from "@/lib/types";
import { ctaInviteBody } from "@/content/sr/common";

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

export const casesHeader = {
  label: "Primeri realizacije",
  title: "Izdvojeni projekti",
  body: "Primeri projekata koji ilustruju inženjerski pristup i opseg realizacije — od sistema za industriju odbrane do rešenja za opštu industriju. Zbog poverljivosti pojedinih projekata, prikazujemo ih kroz tip rešenja i tehnološki opseg, a ne kroz nazive naručilaca.",
};

export const caseGroups = [
  {
    label: "Industrija odbrane",
    cases: [
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
        num: "02", title: "Sistem za tela artiljerijskih projektila",
        desc: "Kompletan proizvodni tok za tela projektila do 155 mm — od indukcionog zagrevanja, kovanja i izvlačenja, preko završnog sužavanja, do termičke obrade, hidrostatičkog ispitivanja i kontrole tvrdoće, sa robotizovanom manipulacijom između operacija.",
        tags: [
          { label: "Industrija odbrane" }, { label: "Proizvodni sistem" },
          { label: "Termička obrada", neutral: true }, { label: "Kontrola kvaliteta", neutral: true },
        ],
        meta: "Obim: kompletan tehnološki tok — od pripreme materijala do završne kontrole",
      },
      {
        num: "03", title: "Pogon za balističku zaštitu",
        desc: "Kompletan pogon za proizvodnju balističkih ploča sa hidrauličnim presama, termo-tehničkom instalacijom, regulacijom temperature i SCADA nadzorom procesa.",
        tags: [
          { label: "Industrija odbrane" }, { label: "Hidraulične prese" },
          { label: "SCADA nadzor", neutral: true }, { label: "Termo-tehnika", neutral: true },
        ],
        meta: "Obim: prese, termo-tehnička instalacija i upravljanje sa SCADA nadzorom",
      },
      {
        num: "04", title: "Automatski punjači i podsistemi",
        desc: "Automatski punjači i kasetni podsistemi za savremene samohodne artiljerijske platforme — projektovani za brže punjenje, veću pouzdanost i smanjenje opterećenja posade, uz prilagođavanje arhitekturi konkretne platforme.",
        tags: [
          { label: "Industrija odbrane" }, { label: "155 mm platforme" },
          { label: "Mehanika + hidraulika", neutral: true }, { label: "Bezbednosna logika", neutral: true },
        ],
        meta: "Tip: podsistemi za rukovanje municijom i automatsko punjenje",
      },
    ],
  },
  {
    label: "Specijalne mašine, linije i automatizacija",
    cases: [
      {
        num: "05", title: "Proizvodna linija po meri kupca",
        desc: "Kompletna proizvodna linija prilagođena konkretnom procesu, uz integraciju mehanike, automatike i upravljanja. Od koncepta do puštanja u rad.",
        tags: [
          { label: "Proizvodna linija" }, { label: "Po meri kupca" },
          { label: "Puštanje u rad", neutral: true }, { label: "Obuka osoblja", neutral: true },
        ],
        meta: "Tip: kompletna linija — od koncepta do isporuke",
      },
      {
        num: "06", title: "Automatizovano industrijsko rešenje",
        desc: "Rešenje razvijeno za optimizaciju postojećeg proizvodnog procesa kroz integraciju elektro, softverskih i upravljačkih sistema. PLC programiranje, SCADA implementacija i HMI integracija.",
        tags: [
          { label: "Automatizacija" }, { label: "PLC / SCADA" },
          { label: "Ključ u ruke", neutral: true }, { label: "Postprodajna podrška", neutral: true },
        ],
        meta: "Podrška: servisni ugovor, rezervni delovi i softverska ažuriranja",
      },
      {
        num: "07", title: "Mašine za flow forming",
        desc: "Vertikalne i horizontalne mašine za flow forming šupljih rotacionih delova — tehnologija koja daje bešavnu konstrukciju visoke čvrstoće, precizne profile i nižu masu gotovog dela.",
        tags: [
          { label: "Specijalne mašine" }, { label: "Flow forming" },
          { label: "Oblikovanje metala", neutral: true },
        ],
        meta: "Tip: napredno oblikovanje šupljih rotacionih delova",
      },
    ],
  },
  {
    label: "Opšta industrija",
    cases: [
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
      {
        num: "11", title: "Mašine za elektro industriju",
        desc: "Automatske mašine za serijsku i masovnu proizvodnju komponenti za elektro industriju — vijčanih rednih stezaljki i kablovskih papučica — uz visoku preciznost obrade, ponovljivost i konstantan kvalitet svakog komada.",
        tags: [
          { label: "Opšta industrija" }, { label: "Elektro industrija" },
          { label: "Automatizacija", neutral: true }, { label: "Masovna proizvodnja", neutral: true },
        ],
        meta: "Primena: razvodni ormari, upravljačke ploče i industrijske instalacije",
      },
    ],
  },
];

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
  body: ctaInviteBody,
};
