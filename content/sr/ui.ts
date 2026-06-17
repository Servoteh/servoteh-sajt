import type { UiDict } from "@/lib/types";

/**
 * SR UI rečnik — default za sve komponente. Stringovi koji su ranije bili
 * hardkodirani (aria-labele, forma, dugmad). EN ekvivalent: content/en/ui.ts.
 */
export const ui: UiDict = {
  header: {
    home: "Servoteh početna",
    mainNav: "Glavna navigacija",
    openMenu: "Otvori meni",
    mobileNav: "Mobilna navigacija",
    lang: "Izbor jezika",
  },
  footer: {
    officialSite: "Servoteh zvanična stranica",
    email: "Email",
    phone: "Telefon",
  },
  form: {
    name: "Ime i prezime",
    company: "Kompanija",
    email: "Email",
    phone: "Telefon",
    message: "Poruka",
    website: "Website",
    submit: "Pošaljite upit",
    submitting: "Slanje…",
    consentPre: "Slanjem upita prihvatate",
    privacyLink: "Politiku privatnosti",
    successTitle: "Hvala na upitu",
    successBody: "Vaša poruka je poslata. Naš tim će vam se javiti u najkraćem roku.",
    newEnquiry: "Pošaljite novi upit",
    errName: "Unesite ime.",
    errEmail: "Unesite ispravnu email adresu.",
    errMessage: "Poruka je prekratka (najmanje 10 karaktera).",
    errFailed: "Slanje nije uspelo. Pokušajte ponovo.",
    errNetwork: "Mreža trenutno nije dostupna. Pokušajte ponovo ili nam pišite na office@servoteh.com.",
  },
  deep: {
    sendEnquiry: "Pošaljite upit",
    callAria: "Pozovite: +381 11 31 41 564",
    referencesLabel: "Reference",
    openReferences: "Otvorite reference",
  },
  slider: {
    gallery: "Galerija kapaciteta",
    prev: "Prethodna slika",
    next: "Sledeća slika",
    slide: "Slajd",
  },
  media: {
    playVideo: "Pusti video",
    watchYoutube: "Pogledajte na YouTube-u",
  },
  solutions: {
    learnMore: "Saznajte više →",
  },
};
