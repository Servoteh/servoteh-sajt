/**
 * Zajednički (deljeni) stringovi — jedan izvor istine za tekstove koji se
 * ponavljaju na više stranica. Cilj: nema dupliranja u SR, a pri prevodu (EN)
 * se prevode jednom.
 */

/**
 * Pozivni tekst u CTA sekciji — koristi se na generičkim stranicama
 * (home, defence, reference). Stranice sa specifičnim pozivom (specijalne
 * mašine, proizvodne linije, automatizacija, automobilska, prehrambena,
 * opšta) namerno imaju sopstveni, prilagođen tekst.
 */
export const ctaInviteBody =
  "Pošaljite nam osnovne informacije o procesu, proizvodnoj potrebi ili tehničkom zahtevu, a naš tim će vam predložiti sledeće korake.";

/**
 * Naslov „reference teaser" sekcije — isti na svim dubinskim stranicama.
 * Telo ispod naslova ostaje specifično po stranici.
 */
export const refTeaserTitle = "Pogledajte kako pristupamo referentnim projektima";
