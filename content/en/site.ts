import type { SiteContent } from "@/lib/types";

export const site: SiteContent = {
  locale: "en",
  brand: "SERVOTEH",
  nav: [
    { label: "Home", href: "/en/" },
    { label: "About", href: "/en/#about" },
    { label: "Solutions", href: "/en/#solutions" },
    { label: "Industries", href: "/en/#industries" },
    { label: "References", href: "/en/references/" },
    { label: "Careers", href: "/en/careers/" },
    { label: "Contact", href: "/en/#cta" },
  ],
  ctaPrimary: { label: "Send an enquiry", href: "/en/#cta" },
  langSwitch: { current: "EN", otherHref: "/" },
  footer: {
    address: ["Ugrinovačka 163", "11272 Dobanovci", "Belgrade, Serbia"],
    email: "office@servoteh.com",
    phone: { label: "+381 (11) 31-41-564", href: "tel:+381113141564" },
    maps: [
      { label: "Open map", href: "https://maps.app.goo.gl/QpYHMx895XfQDwGc6" },
      { label: "Get directions", href: "https://www.google.com/maps/dir/?api=1&destination=44.8387507,20.21448" },
    ],
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/servoteh-d.o.o./about/" },
      { label: "Instagram", href: "https://www.instagram.com/servoteh" },
      { label: "YouTube", href: "https://www.youtube.com/user/lediloo" },
    ],
    iso: "ISO 9001:2015",
    columns: [
      {
        heading: "Pages",
        links: [
          { label: "Home", href: "/en/" },
          { label: "About", href: "/en/#about" },
          { label: "Solutions", href: "/en/#solutions" },
          { label: "Industries", href: "/en/#industries" },
          { label: "References", href: "/en/references/" },
          { label: "Careers", href: "/en/careers/" },
          { label: "After-sales support", href: "/en/#aftersales" },
          { label: "Contact", href: "/en/#cta" },
        ],
      },
      {
        heading: "Solutions",
        links: [
          { label: "Defence industry systems", href: "/en/defence/" },
          { label: "Special-purpose machines", href: "/en/special-purpose-machines/" },
          { label: "Production lines", href: "/en/production-lines/" },
          { label: "Industrial automation", href: "/en/industrial-automation/" },
          { label: "Automotive industry", href: "/en/automotive-industry/" },
          { label: "Food industry", href: "/en/food-industry/" },
          { label: "General industrial production", href: "/en/general-industrial-production/" },
        ],
      },
      {
        heading: "Social",
        links: [
          { label: "LinkedIn", href: "https://www.linkedin.com/company/servoteh-d.o.o./about/" },
          { label: "Instagram", href: "https://www.instagram.com/servoteh" },
          { label: "YouTube", href: "https://www.youtube.com/user/lediloo" },
        ],
      },
    ],
    copyright: "© 2026 SERVOTEH d.o.o. All rights reserved.",
    legal: "Servoteh d.o.o. · VAT no. (PIB) 101017443 · Company reg. no. (MB) 17400169 · Ugrinovačka 163, 11272 Dobanovci, Belgrade, Serbia",
    privacy: { label: "Privacy Policy", href: "/en/privacy-policy/" },
    siteUrl: { label: "servoteh.com", href: "https://servoteh.com" },
  },
};
