/**
 * Tipovi za sadržaj sajta.
 * Sav vidljivi tekst živi u /content/<locale>/ fajlovima i prolazi kroz ove tipove.
 * Komponente su čisto prezentacione; ikonice (inline SVG) žive u komponentama.
 */

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  heading: string;
  links: NavItem[];
};

export type SiteContent = {
  locale: "sr" | "en";
  brand: string;
  nav: NavItem[];
  ctaPrimary: NavItem;
  langSwitch: { current: "SR" | "EN"; otherHref: string };
  footer: {
    address: string[];
    email: string;
    phone: { label: string; href: string };
    /** brzi pristup lokaciji (mapa / navigacija) — vidljivo u footeru na svakoj strani */
    maps: { label: string; href: string }[];
    socials: SocialLink[];
    iso: string;
    columns: FooterColumn[];
    copyright: string;
    /** pravni red: naziv firme, PIB, sedište */
    legal: string;
    /** link na politiku privatnosti */
    privacy: { label: string; href: string };
    siteUrl: { label: string; href: string };
  };
};

/**
 * Locale UI rečnik — chrome/aria/forma stringovi koji su ranije bili hardkodirani
 * u komponentama. Komponente primaju opcioni `ui` prop sa SR default-om
 * (`content/sr/ui.ts`), pa SR strane ostaju nepromenjene; EN rute prosleđuju EN ui.
 */
export type UiDict = {
  header: { home: string; mainNav: string; openMenu: string; mobileNav: string; lang: string };
  footer: { officialSite: string };
  form: {
    name: string;
    company: string;
    email: string;
    phone: string;
    message: string;
    website: string;
    submit: string;
    submitting: string;
    consentPre: string;
    privacyLink: string;
    successTitle: string;
    successBody: string;
    newEnquiry: string;
    errName: string;
    errEmail: string;
    errMessage: string;
    errFailed: string;
    errNetwork: string;
  };
  deep: { sendEnquiry: string; callAria: string; referencesLabel: string; openReferences: string };
  slider: { gallery: string; prev: string; next: string; slide: string };
  media: { playVideo: string; watchYoutube: string };
};

export type Stat = {
  value: string;
  suffix?: string;
  label: string;
  variant?: "default" | "defence";
};

export type TitleDesc = {
  title: string;
  desc: string;
};

export type SolutionCard = {
  tag: string;
  title: string;
  desc: string;
  href: string;
  img: string;
  alt: string;
};

export type IndustryCard = {
  title: string;
  desc: string;
  href?: string;
  featured?: boolean;
};

export type Slide = {
  src: string;
  alt: string;
  caption: string;
};

export type ContactItem = {
  label: string;
  /** linije vrednosti (npr. adresa u dva reda) */
  lines: string[];
  href?: string;
};

export type HomeContent = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: NavItem;
    secondaryCta: NavItem;
    scrollLabel: string;
  };
  stats: Stat[];
  defenceIntro: {
    label: string;
    titleLead: string;
    titleLink: NavItem;
    titleAfterLink: string;
    titleSecond: string;
    body: string;
    cta: NavItem;
    cards: (TitleDesc & { accent?: boolean })[];
  };
  about: {
    label: string;
    title: string;
    body: string;
    cta: NavItem;
    features: TitleDesc[];
  };
  kapaciteti: {
    label: string;
    title: string;
    body: string;
    body2?: string;
    points: string[];
    slides: Slide[];
  };
  solutions: {
    label: string;
    title: string;
    body: string;
    cards: SolutionCard[];
  };
  aftersales: {
    label: string;
    title: string;
    body: string;
    cta: NavItem;
    items: TitleDesc[];
  };
  industries: {
    label: string;
    title: string;
    body: string;
    cards: IndustryCard[];
  };
  trust: {
    label: string;
    title: string;
    body: string;
    cta: NavItem;
    points: TitleDesc[];
  };
  cta: {
    label: string;
    title: string;
    body: string;
    primaryCta: NavItem;
    phoneCta: NavItem;
    contactHeading: string;
    contacts: ContactItem[];
    mapButtons: NavItem[];
  };
};

/* ============================================================
   DEEP PAGES (rešenja: SM / PL / IA)
   ============================================================ */
import type { DeepIconKey } from "@/components/deep/deepIcons";

export type DeepHeroContent = {
  eyebrow: string;
  titleLead: string;
  titleEm: string;
  lead: string;
  primaryCta: NavItem;
  secondaryCta: NavItem;
};

export type DeepHeaderContent = {
  label: string;
  title: string;
  body?: string;
};

export type DeepTrustItem = { icon: DeepIconKey; text: string };
export type DeepNumberedCard = { num: string; title: string; desc: string };
export type DeepIconCard = { icon: DeepIconKey; title: string; desc: string };
export type DeepBlock = { title: string; desc: string };

export type DeepRefTeaser = { title: string; body: string };
export type DeepCtaContent = { label: string; title: string; body: string };
/** Cross-link kartica ka srodnoj stranici (npr. linije → automobilska industrija). */
export type DeepRelatedCard = {
  label: string;
  title: string;
  body: string;
  cta: { label: string; href: string };
};

export type PageMeta = { title: string; description: string };

/* ============================================================
   PRAVNE STRANICE (politika privatnosti)
   ============================================================ */

export type LegalSection = {
  heading: string;
  /** uvodni/obični pasusi */
  paragraphs?: string[];
  /** stavke liste (npr. koje podatke prikupljamo, prava lica) */
  items?: string[];
};

export type LegalPageContent = {
  meta: PageMeta;
  title: string;
  /** datum poslednje izmene (vidljiv tekst, npr. "16. jun 2026.") */
  updated: string;
  intro: string;
  sections: LegalSection[];
};

/* ============================================================
   TEHNIČKE KARTICE (dopuna sa starog sajta — mašine + specifikacije)
   ============================================================ */

/** Tehnička kartica: slika + naslov + opis + opcione specifikacije/caption. */
export type TechCard = {
  img: string;
  alt: string;
  title: string;
  desc: string;
  /** bullet-liste tehničkih vrednosti (sile, dimenzije, temperature…) */
  specs?: string[];
  /** opcioni potpis ispod slike */
  caption?: string;
  /** opcioni YouTube ID — diskretan „klik-da-pusti" video u medija-delu kartice */
  video?: string;
  /** opcioni self-hostovan video (mp4) — prikazuje se u medija-delu kartice sa posterom (img) */
  videoSrc?: string;
};

/** Sekcija tehničkih kartica unutar dubinske stranice. */
export type TechSectionContent = {
  id: string;
  /** svetla ili tamna pozadina — za naizmeničan ritam sekcija */
  tone: "light" | "dark";
  label: string;
  title: string;
  intro?: string;
  /** opciona uvodna (široka) slika iznad grida */
  leadImg?: { src: string; alt: string };
  cards: TechCard[];
  cta?: NavItem;
};
