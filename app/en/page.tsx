import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { DefenceIntro } from "@/components/sections/DefenceIntro";
import { About } from "@/components/sections/About";
import { Kapaciteti } from "@/components/sections/Kapaciteti";
import { Solutions } from "@/components/sections/Solutions";
import { Aftersales } from "@/components/sections/Aftersales";
import { Industries } from "@/components/sections/Industries";
import { Trust } from "@/components/sections/Trust";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/meta";
import { site } from "@/content/en/site";
import { home } from "@/content/en/home";
import { ui } from "@/content/en/ui";

export const metadata: Metadata = pageMetadata(home.meta, "/en/", "en");

export default function HomePageEn() {
  return (
    <>
      <Header site={site} ui={ui} />
      <main>
        <Hero content={home.hero} />
        <Stats stats={home.stats} />
        <DefenceIntro content={home.defenceIntro} />
        <About content={home.about} />
        <Kapaciteti content={home.kapaciteti} ui={ui} />
        <Solutions content={home.solutions} />
        <Aftersales content={home.aftersales} />
        <Industries content={home.industries} />
        <Trust content={home.trust} />
        <Cta content={home.cta} ui={ui} privacyHref="/en/privacy-policy/" />
      </main>
      <Footer site={site} ui={ui} />
    </>
  );
}
