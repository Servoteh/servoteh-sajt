import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Statički export — generiše čist HTML/CSS/JS u /out, bez Node servera.
  // Idealno za Cloudflare Pages (i bilo koji statički host / CDN).
  output: "export",

  // Svaka ruta dobija svoj folder sa index.html (npr. /reference/index.html),
  // što statički hostovi serviraju kao /reference/ — čiste URL-ove bez .html.
  trailingSlash: true,

  // next/image optimizacija ne radi u export modu; slike serviramo iz /public.
  images: { unoptimized: true },
};

export default nextConfig;
