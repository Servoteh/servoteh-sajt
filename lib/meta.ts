import type { Metadata } from "next";
import type { PageMeta } from "@/lib/types";

/** Apsolutna baza sajta — koristi se za canonical i Open Graph URL. */
export const SITE_URL = "https://servoteh.com";

/**
 * Podrazumevana Open Graph slika za deljenje (LinkedIn / mejl preview).
 * Privremeno koristimo postojeći hero poster; zameniti namenskom 1200×630
 * slikom kad bude spremna (videti `lib/meta.ts`).
 */
const OG_IMAGE = "/assets/hero-poster.webp";

/**
 * Gradi `Metadata` za jednu stranicu: title/description + kanonski URL + Open
 * Graph i Twitter karticu. `path` je apsolutna putanja rute sa završnim „/"
 * (npr. "/defence/"); za naslovnu „/". EN verzija će kasnije dodati
 * `alternates.languages` (hreflang) preko ovog istog mesta.
 */
export function pageMetadata(meta: PageMeta, path: string): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "sr_RS",
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
