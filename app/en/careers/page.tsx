import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Careers } from "@/components/sections/Careers";
import { site } from "@/content/en/site";
import { ui } from "@/content/en/ui";
import { pageMetadata } from "@/lib/meta";
import { careers } from "@/content/en/karijera";

export const metadata: Metadata = pageMetadata(careers.meta, "/en/careers/", "en");

export default function CareersPage() {
  return (
    <>
      <Header site={site} ui={ui} />
      <main>
        <Careers content={careers} />
      </main>
      <Footer site={site} ui={ui} />
    </>
  );
}
