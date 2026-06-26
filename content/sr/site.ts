import type { SiteContent } from "@/lib/types";

export const site: SiteContent = {
  locale: "sr",
  brand: "SERVOTEH",
  nav: [
    { label: "Početna", href: "/" },
    { label: "O nama", href: "/#about" },
    { label: "Rešenja", href: "/#solutions" },
    { label: "Industrije", href: "/#industries" },
    { label: "Reference", href: "/reference" },
    { label: "Karijera", href: "/karijera" },
    { label: "Kontakt", href: "/#cta" },
  ],
  ctaPrimary: { label: "Pošaljite upit", href: "/#cta" },
  langSwitch: { current: "SR", otherHref: "/en" },
  footer: {
    address: ["Ugrinovačka 163", "11272 Dobanovci", "Beograd, Srbija"],
    email: "office@servoteh.com",
    phone: { label: "+381 (11) 31-41-564", href: "tel:+381113141564" },
    maps: [
      { label: "Otvorite mapu", href: "https://maps.app.goo.gl/QpYHMx895XfQDwGc6" },
      { label: "Kako do nas", href: "https://www.google.com/maps/dir/?api=1&destination=44.8387507,20.21448" },
    ],
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/servoteh-d.o.o./about/" },
      { label: "Instagram", href: "https://www.instagram.com/servoteh" },
      { label: "YouTube", href: "https://www.youtube.com/user/lediloo" },
    ],
    iso: "ISO 9001:2015",
    columns: [
      {
        heading: "Stranice",
        links: [
          { label: "Početna", href: "/" },
          { label: "O nama", href: "/#about" },
          { label: "Rešenja", href: "/#solutions" },
          { label: "Industrije", href: "/#industries" },
          { label: "Reference", href: "/reference" },
          { label: "Karijera", href: "/karijera" },
          { label: "Podrška nakon puštanja u rad", href: "/#aftersales" },
          { label: "Kontakt", href: "/#cta" },
        ],
      },
      {
        heading: "Rešenja",
        links: [
          { label: "Sistemi za industriju odbrane", href: "/defence" },
          { label: "Specijalne mašine", href: "/specijalne-masine" },
          { label: "Proizvodne linije", href: "/proizvodne-linije" },
          { label: "Industrijska automatizacija", href: "/industrijska-automatizacija" },
          { label: "Automobilska industrija", href: "/automobilska-industrija" },
          { label: "Prehrambena industrija", href: "/prehrambena-industrija" },
          { label: "Opšta industrijska proizvodnja", href: "/opsta-industrijska-proizvodnja" },
        ],
      },
      {
        heading: "Društvene mreže",
        links: [
          { label: "LinkedIn", href: "https://www.linkedin.com/company/servoteh-d.o.o./about/" },
          { label: "Instagram", href: "https://www.instagram.com/servoteh" },
          { label: "YouTube", href: "https://www.youtube.com/user/lediloo" },
        ],
      },
    ],
    copyright: "© 2026 SERVOTEH d.o.o. Sva prava zadržana.",
    legal: "Servoteh d.o.o. · PIB 101017443 · MB 17400169 · Ugrinovačka 163, 11272 Dobanovci, Beograd, Srbija",
    privacy: { label: "Politika privatnosti", href: "/politika-privatnosti" },
    siteUrl: { label: "servoteh.com", href: "https://servoteh.com" },
  },
};
