import type { MetadataRoute } from "next";

const BASE = "https://servoteh.com";

// Sve javne SR rute (trailingSlash export → putanje sa završnim "/").
const ROUTES = [
  "/",
  "/defence/",
  "/reference/",
  "/specijalne-masine/",
  "/proizvodne-linije/",
  "/industrijska-automatizacija/",
  "/automobilska-industrija/",
  "/prehrambena-industrija/",
  "/opsta-industrijska-proizvodnja/",
  "/politika-privatnosti/",
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
