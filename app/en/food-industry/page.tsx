import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  DeepHero,
  DeepSection,
  DeepHeader,
  IntroSplit,
  BlockGrid,
  DeepCta,
} from "@/components/deep/DeepSections";
import { TechSection } from "@/components/deep/TechCards";
import { site } from "@/content/en/site";
import { ui } from "@/content/en/ui";
import { pageMetadata } from "@/lib/meta";
import * as c from "@/content/en/prehrambena-industrija";

export const metadata: Metadata = pageMetadata(c.meta, "/en/food-industry/", "en");

export default function FoodIndustryPage() {
  return (
    <>
      <Header site={site} ui={ui} />
      <main>
        <DeepHero id="ph-hero" content={c.hero} />

        <DeepSection id="ph-intro" tone="light-1">
          <IntroSplit label={c.intro.label} title={c.intro.title} body={c.intro.body} items={c.intro.items} />
        </DeepSection>

        <TechSection content={c.oprema} ui={ui} />

        <DeepSection id="ph-types" tone="light-3" wide>
          <DeepHeader content={c.typesHeader} onLight />
          <BlockGrid blocks={c.types} />
        </DeepSection>

        <DeepSection id="ph-cta" tone="black" className="deep-cta">
          <DeepCta content={c.cta} ui={ui} />
        </DeepSection>
      </main>
      <Footer site={site} ui={ui} />
    </>
  );
}
