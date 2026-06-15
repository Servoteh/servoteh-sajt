import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  DeepHero,
  DeepSection,
  DeepHeader,
  IntroSplit,
  NumberedCards,
  ProcessSteps,
  Tags,
  Reasons,
  RefTeaser,
  DeepCta,
} from "@/components/deep/DeepSections";
import { TechSection } from "@/components/deep/TechCards";
import { site } from "@/content/sr/site";
import * as c from "@/content/sr/specijalne-masine";

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
};

export default function SpecijalneMasinePage() {
  return (
    <>
      <Header site={site} />
      <main>
        <DeepHero id="sm-hero" content={c.hero} />

        <DeepSection id="sm-intro" tone="light-1">
          <IntroSplit label={c.intro.label} title={c.intro.title} body={c.intro.body} items={c.intro.items} />
        </DeepSection>

        <DeepSection id="sm-groups" tone="dark" wide>
          <DeepHeader content={c.groupsHeader} />
          <NumberedCards cards={c.groups} />
        </DeepSection>

        <DeepSection id="sm-process" tone="light-3">
          <DeepHeader content={c.processHeader} onLight />
          <ProcessSteps steps={c.processSteps} />
        </DeepSection>

        <DeepSection id="sm-apply" tone="section" wide>
          <DeepHeader content={c.applyHeader} />
          <Tags tags={c.applyTags} />
        </DeepSection>

        <TechSection content={c.techExamples} />

        <DeepSection id="sm-why" tone="light-1" wide>
          <DeepHeader content={c.whyHeader} onLight />
          <Reasons cards={c.why} />
        </DeepSection>

        <DeepSection id="sm-ref" tone="light-3">
          <RefTeaser content={c.refTeaser} />
        </DeepSection>

        <DeepSection id="sm-cta" tone="black" className="deep-cta">
          <DeepCta content={c.cta} />
        </DeepSection>
      </main>
      <Footer site={site} />
    </>
  );
}
