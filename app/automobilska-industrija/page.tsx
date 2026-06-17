import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  DeepHero,
  DeepSection,
  DeepHeader,
  IntroSplit,
  ProofStrip,
  NumberedCards,
  Reasons,
  DeepCta,
} from "@/components/deep/DeepSections";
import { TechSection } from "@/components/deep/TechCards";
import { site } from "@/content/sr/site";
import { pageMetadata } from "@/lib/meta";
import * as c from "@/content/sr/automobilska-industrija";

export const metadata: Metadata = pageMetadata(c.meta, "/automobilska-industrija/");

export default function AutomobilskaIndustrijaPage() {
  return (
    <>
      <Header site={site} />
      <main>
        <DeepHero id="auto-hero" content={c.hero} />

        <DeepSection id="auto-intro" tone="light-1">
          <IntroSplit label={c.intro.label} title={c.intro.title} body={c.intro.body} items={c.intro.items} />
          <ProofStrip note={c.proof.note} brands={c.proof.brands} />
        </DeepSection>

        <TechSection content={c.lines} />

        <TechSection content={c.machines} />

        <DeepSection id="auto-approach" tone="dark" wide>
          <DeepHeader content={c.approachHeader} />
          <NumberedCards cards={c.approach} />
        </DeepSection>

        <DeepSection id="auto-references" tone="light-1" wide>
          <DeepHeader content={c.referencesHeader} onLight />
          <Reasons cards={c.references} />
        </DeepSection>

        <DeepSection id="auto-cta" tone="black" className="deep-cta">
          <DeepCta content={c.cta} />
        </DeepSection>
      </main>
      <Footer site={site} />
    </>
  );
}
