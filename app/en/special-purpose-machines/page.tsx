import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  DeepHero,
  DeepSection,
  DeepHeader,
  IntroSplit,
  NumberedCards,
  Tags,
  DeepCta,
} from "@/components/deep/DeepSections";
import { site } from "@/content/en/site";
import { ui } from "@/content/en/ui";
import { pageMetadata } from "@/lib/meta";
import * as c from "@/content/en/specijalne-masine";

export const metadata: Metadata = pageMetadata(c.meta, "/en/special-purpose-machines/", "en");

export default function SpecialPurposeMachinesPage() {
  return (
    <>
      <Header site={site} ui={ui} />
      <main>
        <DeepHero id="sm-hero" content={c.hero} />

        <DeepSection id="sm-intro" tone="light-1">
          <IntroSplit label={c.intro.label} title={c.intro.title} body={c.intro.body} items={c.intro.items} />
        </DeepSection>

        <DeepSection id="sm-groups" tone="dark" wide>
          <DeepHeader content={c.groupsHeader} />
          <NumberedCards cards={c.groups} />
        </DeepSection>

        <DeepSection id="sm-apply" tone="section" wide>
          <DeepHeader content={c.applyHeader} />
          <Tags tags={c.applyTags} />
        </DeepSection>

        <DeepSection id="sm-cta" tone="black" className="deep-cta">
          <DeepCta content={c.cta} ui={ui} />
        </DeepSection>
      </main>
      <Footer site={site} ui={ui} />
    </>
  );
}
