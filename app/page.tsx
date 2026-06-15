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
import { site } from "@/content/sr/site";
import { home } from "@/content/sr/home";

export default function HomePage() {
  return (
    <>
      <Header site={site} />
      <main>
        <Hero content={home.hero} />
        <Stats stats={home.stats} />
        <DefenceIntro content={home.defenceIntro} />
        <About content={home.about} />
        <Kapaciteti content={home.kapaciteti} />
        <Solutions content={home.solutions} />
        <Aftersales content={home.aftersales} />
        <Industries content={home.industries} />
        <Trust content={home.trust} />
        <Cta content={home.cta} />
      </main>
      <Footer site={site} />
    </>
  );
}
