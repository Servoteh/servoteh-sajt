import type { MetadataRoute } from "next";
import { ROUTE_PAIRS } from "@/lib/routes";

const BASE = "https://servoteh.com";

export const dynamic = "force-static";

// SR + EN rute (trailingSlash export → putanje sa završnim "/"), svaka sa
// hreflang alternativama (sr-RS / en-GB) — par dolazi iz lib/routes.ts.
export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTE_PAIRS.flatMap((pair) => {
    const isHome = pair.sr === "/";
    const entry = {
      changeFrequency: (isHome ? "monthly" : "yearly") as "monthly" | "yearly",
      priority: isHome ? 1 : 0.7,
      alternates: {
        languages: { "sr-RS": `${BASE}${pair.sr}`, "en-GB": `${BASE}${pair.en}` },
      },
    };
    return [
      { url: `${BASE}${pair.sr}`, ...entry },
      { url: `${BASE}${pair.en}`, ...entry },
    ];
  });
}
