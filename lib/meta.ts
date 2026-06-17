import type { Metadata } from "next";
import type { PageMeta } from "@/lib/types";
import { pairBySr, pairByEn } from "@/lib/routes";

/** Apsolutna baza sajta — koristi se za canonical i Open Graph URL. */
export const SITE_URL = "https://servoteh.com";

/**
 * Podrazumevana Open Graph slika za deljenje (LinkedIn / mejl preview).
 * Privremeno koristimo postojeći hero poster; zameniti namenskom 1200×630
 * slikom kad bude spremna (videti `lib/meta.ts`).
 */
const OG_IMAGE = "/assets/hero-poster.webp";

/**
 * Gradi `Metadata` za jednu stranicu: title/description + kanonski URL + hreflang
 * alternative (sr/en/x-default) + Open Graph i Twitter karticu. `path` je apsolutna
 * putanja rute sa završnim „/" (npr. "/defence/" ili "/en/defence/"); za naslovnu
 * „/" odn. „/en/". `locale` određuje OG locale i smer hreflang para.
 */
export function pageMetadata(meta: PageMeta, path: string, locale: "sr" | "en" = "sr"): Metadata {
  const pair = locale === "en" ? pairByEn(path) : pairBySr(path);
  const languages = pair
    ? { "sr-RS": pair.sr, "en-GB": pair.en, "x-default": pair.sr }
    : undefined;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: path, languages },
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_GB" : "sr_RS",
      siteName: "Servoteh",
      url: path,
      title: meta.title,
      description: meta.description,
      images: [{ url: OG_IMAGE, alt: meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE],
    },
  };
}
