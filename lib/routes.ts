/**
 * Parovi ruta SR ↔ EN. Jedan izvor istine za LangSwitch (otherHref po strani) i
 * za hreflang alternative u metapodacima. Sve putanje sa završnim „/"
 * (usklađeno sa `trailingSlash: true`).
 */
export type RoutePair = { sr: string; en: string };

export const ROUTE_PAIRS: RoutePair[] = [
  { sr: "/", en: "/en/" },
  { sr: "/defence/", en: "/en/defence/" },
  { sr: "/specijalne-masine/", en: "/en/special-purpose-machines/" },
  { sr: "/proizvodne-linije/", en: "/en/production-lines/" },
  { sr: "/industrijska-automatizacija/", en: "/en/industrial-automation/" },
  { sr: "/automobilska-industrija/", en: "/en/automotive-industry/" },
  { sr: "/prehrambena-industrija/", en: "/en/food-industry/" },
  { sr: "/opsta-industrijska-proizvodnja/", en: "/en/general-industrial-production/" },
  { sr: "/reference/", en: "/en/references/" },
  { sr: "/karijera/", en: "/en/careers/" },
  { sr: "/politika-privatnosti/", en: "/en/privacy-policy/" },
];

/** Vrati par (sr+en) za datu SR putanju. */
export function pairBySr(srPath: string): RoutePair | undefined {
  return ROUTE_PAIRS.find((p) => p.sr === srPath);
}

/** Vrati par (sr+en) za datu EN putanju. */
export function pairByEn(enPath: string): RoutePair | undefined {
  return ROUTE_PAIRS.find((p) => p.en === enPath);
}
