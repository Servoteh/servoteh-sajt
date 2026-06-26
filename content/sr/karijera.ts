import type { CareersContent } from "@/lib/types";

export const careers: CareersContent = {
  meta: {
    title: "Karijera — SERVOTEH",
    description:
      "Karijera u Servotehu — otvorene pozicije u razvoju, proizvodnji i montaži specijalnih mašina i proizvodnih linija. Pridružite se inženjerskom timu iz Dobanovaca.",
  },

  hero: {
    eyebrow: "SERVOTEH / Karijera",
    titleLead: "Karijera u",
    titleEm: "Servotehu",
    lead: "Servoteh je porodična inženjerska kompanija iz Dobanovaca koja od 2002. razvija specijalne mašine, proizvodne linije i automatizovane sisteme — za industriju odbrane i druge zahtevne industrijske procese. Tražimo ljude koji žele da rade na ozbiljnim projektima, od ideje do puštanja u rad.",
    primaryCta: { label: "Otvorene pozicije", href: "#openings" },
    secondaryCta: { label: "Pošaljite prijavu", href: "mailto:posao@servoteh.com" },
  },

  why: {
    label: "Zašto Servoteh",
    title: "Zašto raditi kod nas",
    body: "Posvećen tim u kome se rezultat vidi — od konstrukcije i izrade delova do montaže, integracije i puštanja sistema u rad.",
    cards: [
      { title: "Ozbiljni projekti", desc: "Sistemi za industriju odbrane i zahtevne industrijske procese — oprema koja se razvija od nule, a ne kupuje gotova." },
      { title: "Integrisan razvoj", desc: "Mašinski, elektro i softverski tim na jednom mestu — vidiš ceo put proizvoda, od ideje do isporuke." },
      { title: "Sopstveni kapaciteti", desc: "Razvoj, proizvodnja, montaža i integracija u 10.000 m² u Dobanovcima." },
      { title: "Dugoročno i stabilno", desc: "Porodična kompanija od 2002. — kontinuirana obuka, stručno usavršavanje i jasna perspektiva." },
    ],
  },

  openingsHeader: {
    label: "Otvorene pozicije",
    title: "Trenutno tražimo",
    body: "Pridruži se timu u Dobanovcima. Prijavu sa CV-jem pošalji na posao@servoteh.com.",
  },

  openings: [
    {
      id: "elektromonter",
      title: "Elektromonter",
      location: "Dobanovci, Beograd",
      type: "Puno radno vreme",
      area: "Elektro montaža",
      count: "1 izvršilac",
      summary:
        "Šemiranje razvodnih ormara i montaža industrijske elektroopreme prema tehničkoj dokumentaciji — u pogonu i na terenu po potrebi.",
      responsibilities: [
        "Šemiranje razvodnih ormara",
        "Čitanje elektro šema i rad prema tehničkoj dokumentaciji",
        "Postavljanje instalacija i povezivanje industrijske elektroopreme — ormara automatike i energetike",
        "Rad na terenu po potrebi",
      ],
      requirements: [
        "Srednja stručna sprema elektrotehničkog smera",
        "Radno iskustvo na istim ili sličnim poslovima",
        "Samostalnost i odgovornost u radu",
        "Vozačka dozvola B kategorije",
      ],
      offer: [
        "Dugoročan posao u perspektivnoj domaćoj kompaniji",
        "Kontinuirana obuka i mogućnost stručnog usavršavanja",
        "Rad u dinamičnom i profesionalnom okruženju",
        "Savremena tehnička opremljenost i odlični uslovi rada",
      ],
    },
    {
      id: "programer-cnc-masina",
      title: "Programer CNC mašina",
      location: "Dobanovci, Beograd",
      type: "Puno radno vreme · 1. smena",
      area: "CNC programiranje",
      summary:
        "Programiranje i optimizacija rada CNC mašina (glodalice, obradni centri, strugovi) — od tehničke dokumentacije do puštanja programa u rad, radi maksimalne efikasnosti i kvaliteta obrade.",
      responsibilities: [
        "Izrada CNC programa na osnovu tehničke dokumentacije i crteža",
        "Priprema i optimizacija procesa obrade (glodalice, obradni centri, strugovi)",
        "Izbor alata i definisanje režima obrade",
        "Testiranje i puštanje programa u rad u saradnji sa operaterima",
        "Tehnička podrška proizvodnji i otklanjanje zastoja u procesu",
      ],
      requirements: [
        "Srednja ili viša tehnička škola mašinske struke",
        "Minimum 2 godine iskustva u programiranju CNC mašina (glodalice i strugovi)",
        "Dobro poznavanje tehnologije obrade metala (glodanje, struganje)",
        "Čitanje i tumačenje tehničke dokumentacije",
        "Samostalnost, preciznost i odgovornost u radu",
        "Poželjno: iskustvo sa CAD/CAM softverima (SolidWorks, SolidCAM, Unigraphics NX, SolidEdge)",
        "Spremnost na timski rad, organizovanost i želja za stručnim usavršavanjem",
      ],
      offer: [
        "Rad u pouzdanoj i perspektivnoj firmi sa jasnom vizijom razvoja",
        "Stimulativna i redovna primanja",
        "Mogućnost stručnog usavršavanja i napredovanja",
        "Prijatno i podržavajuće radno okruženje",
      ],
    },
    {
      id: "operater-cnc-masina",
      title: "Operater na CNC mašini",
      location: "Dobanovci, Beograd",
      type: "Puno radno vreme · 1. i 2. smena",
      area: "CNC obrada",
      count: "3 izvršioca",
      summary:
        "Rad na savremenim CNC mašinama za obradu metala, na inovativnim projektima — ne u serijskoj proizvodnji, uz tehničku obuku i usavršavanje.",
      responsibilities: [
        "Rad na savremenim CNC mašinama za obradu metala",
        "Obrada delova prema tehničkoj dokumentaciji i zadatim režimima rada",
        "Praćenje procesa obrade i osnovna kontrola kvaliteta komada",
      ],
      requirements: [
        "Završena srednja tehnička škola",
        "Prednost: dve godine iskustva na CNC mašinama",
        "Prednost: poznavanje Heidenhain i Millplus upravljačkih jedinica",
        "Motivisanost za rad i usavršavanje u timu",
      ],
      offer: [
        "Rad na savremenim i inovativnim projektima (ne serijska proizvodnja)",
        "Dodatna tehnička obuka i usavršavanje",
        "Zarada koja prati rezultate i uvek je na vreme",
        "Odlični uslovi rada i dobra atmosfera",
      ],
    },
  ],

  labels: {
    responsibilities: "Opis posla",
    requirements: "Uslovi",
    offer: "Nudimo",
    apply: "Prijavi se",
    applySubjectPrefix: "Prijava — ",
  },

  apply: {
    label: "Prijava",
    title: "Kako se prijaviti",
    body: "Pošalji CV (i kratko propratno pismo, opciono) na posao@servoteh.com, sa nazivom pozicije u naslovu mejla.",
    email: "posao@servoteh.com",
    note: "Biće kontaktirani samo kandidati koji uđu u uži izbor.",
    privacyNote:
      "Slanjem prijave saglasni ste sa obradom vaših podataka u svrhu selekcije kandidata, u skladu sa Politikom privatnosti.",
  },

  empty: {
    title: "Trenutno nema otvorenih pozicija",
    body: "Pošalji nam otvorenu prijavu na posao@servoteh.com — javljamo se kada se ukaže prilika.",
  },
};
