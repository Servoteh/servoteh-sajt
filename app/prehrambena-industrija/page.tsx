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
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/sr/site";
import { pageMetadata } from "@/lib/meta";
import * as c from "@/content/sr/prehrambena-industrija";

export const metadata: Metadata = pageMetadata(c.meta, "/prehrambena-industrija/");

export default function PrehrambenaIndustrijaPage() {
  return (
    <>
      <Header site={site} />
      <main>
        <DeepHero id="ph-hero" content={c.hero} />

        <DeepSection id="ph-intro" tone="light-1">
          <IntroSplit label={c.intro.label} title={c.intro.title} body={c.intro.body} items={c.intro.items} />
        </DeepSection>

        <TechSection content={c.oprema} />

        <DeepSection id="ph-video" tone="light-1">
          <DeepHeader content={{ label: "Robotizacija", title: "Robotska ćelija za rukovanje čašama" }} onLight />
          <Reveal className="ph-video">
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video src="/assets/prehrambena/frikom-robot-casice.mp4" controls preload="metadata" playsInline />
          </Reveal>
        </DeepSection>

        <DeepSection id="ph-types" tone="light-3" wide>
          <DeepHeader content={c.typesHeader} onLight />
          <BlockGrid blocks={c.types} />
        </DeepSection>

        <DeepSection id="ph-cta" tone="black" className="deep-cta">
          <DeepCta content={c.cta} />
        </DeepSection>
      </main>
      <Footer site={site} />
    </>
  );
}
