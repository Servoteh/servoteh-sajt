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
    socials: SocialLink[];
    iso: string;
    columns: FooterColumn[];
    copyright: string;
    siteUrl: { label: string; href: string };
  };
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
    why: TitleDesc[];
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

export type PageMeta = { title: string; description: string };
