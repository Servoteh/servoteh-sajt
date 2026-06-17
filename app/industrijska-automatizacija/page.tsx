import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  DeepHero,
  DeepSection,
  DeepHeader,
  IntroSplit,
  NumberedCards,
  BlockGrid,
  DeepCta,
} from "@/components/deep/DeepSections";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/sr/site";
import * as c from "@/content/sr/industrijska-automatizacija";

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
};

export default function IndustrijskaAutomatizacijaPage() {
  return (
    <>
      <Header site={site} />
      <main>
        <DeepHero id="ia-hero" content={c.hero} />

        <DeepSection id="ia-intro" tone="light-1">
          <IntroSplit label={c.intro.label} title={c.intro.title} body={c.intro.body} items={c.intro.items} />
        </DeepSection>

        <DeepSection id="ia-scope" tone="dark" wide>
          <DeepHeader content={c.scopeHeader} />
          <NumberedCards cards={c.scope} />
        </DeepSection>

        <DeepSection id="ia-tasks" tone="light-3" wide>
          <DeepHeader content={c.tasksHeader} onLight />
          <BlockGrid blocks={c.tasks} />
        </DeepSection>

        <DeepSection id="ia-retrofit" tone="light-3">
          <Reveal className="retrofit-inner">
            <div className="section-label section-label--center">{c.retrofit.label}</div>
            <h2>{c.retrofit.title}</h2>
            <p>{c.retrofit.body}</p>
          </Reveal>
        </DeepSection>

        <DeepSection id="ia-cta" tone="black" className="deep-cta">
          <DeepCta content={c.cta} />
        </DeepSection>
      </main>
      <Footer site={site} />
    </>
  );
}
