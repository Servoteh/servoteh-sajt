import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  DeepHero,
  DeepSection,
  DeepHeader,
  IntroSplit,
  NumberedCards,
  Requirements,
  BlockGrid,
  RelatedCard,
  DeepCta,
} from "@/components/deep/DeepSections";
import { site } from "@/content/en/site";
import { ui } from "@/content/en/ui";
import { pageMetadata } from "@/lib/meta";
import * as c from "@/content/en/proizvodne-linije";

export const metadata: Metadata = pageMetadata(c.meta, "/en/production-lines/", "en");

export default function ProductionLinesPage() {
  return (
    <>
      <Header site={site} ui={ui} />
      <main>
        <DeepHero id="pl-hero" content={c.hero} />

        <DeepSection id="pl-intro" tone="light-1">
          <IntroSplit label={c.intro.label} title={c.intro.title} body={c.intro.body} items={c.intro.items} />
        </DeepSection>

        <DeepSection id="pl-scope" tone="dark" wide>
          <DeepHeader content={c.scopeHeader} />
          <NumberedCards cards={c.scope} />
        </DeepSection>

        <DeepSection id="pl-types" tone="light-3" wide>
          <DeepHeader content={c.typesHeader} onLight />
          <BlockGrid blocks={c.types} />
        </DeepSection>

        <DeepSection id="pl-reqs" tone="section" wide>
          <DeepHeader content={c.reqsHeader} />
          <Requirements cards={c.reqs} />
        </DeepSection>

        <DeepSection id="pl-related" tone="light-1">
          <RelatedCard content={c.related} />
        </DeepSection>

        <DeepSection id="pl-cta" tone="black" className="deep-cta">
          <DeepCta content={c.cta} ui={ui} />
        </DeepSection>
      </main>
      <Footer site={site} ui={ui} />
    </>
  );
}
