import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Careers } from "@/components/sections/Careers";
import { site } from "@/content/sr/site";
import { pageMetadata } from "@/lib/meta";
import { careers } from "@/content/sr/karijera";

export const metadata: Metadata = pageMetadata(careers.meta, "/karijera/");

export default function KarijeraPage() {
  return (
    <>
      <Header site={site} />
      <main>
        <Careers content={careers} />
      </main>
      <Footer site={site} />
    </>
  );
}
