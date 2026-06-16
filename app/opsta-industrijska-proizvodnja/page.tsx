import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  DeepHero,
  DeepSection,
  DeepHeader,
  IntroSplit,
  BlockGrid,
  RefTeaser,
  DeepCta,
} from "@/components/deep/DeepSections";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/sr/site";
import * as c from "@/content/sr/opsta-industrijska-proizvodnja";

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
};

export default function OpstaIndustrijskaProizvodnjaPage() {
  return (
    <>
      <Header site={site} />
      <main>
        <DeepHero id="oi-hero" content={c.hero} />

        <DeepSection id="oi-intro" tone="light-1">
          <IntroSplit label={c.intro.label} title={c.intro.title} body={c.intro.body} items={c.intro.items} />
        </DeepSection>

        {/* IZDVOJENI SISTEM — mašina sa video prikazom */}
        <DeepSection id="oi-featured" tone="dark" wide>
          <DeepHeader content={{ label: c.featured.label, title: c.featured.title }} />
          <Reveal className="oi-feature-render">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/opsta-industrija/hero.jpg" alt={c.featured.title + " — SERVOTEH"} loading="lazy" />
          </Reveal>
          <div className="oi-feature-grid">
            <Reveal className="oi-feature-video">
              <YouTubeEmbed id={c.featured.videoId} title={c.featured.videoTitle} />
            </Reveal>
            <Reveal delay={0.1} className="oi-feature-text">
              <p>{c.featured.desc}</p>
              <ul className="oi-feature-highlights">
                {c.featured.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </DeepSection>

        <DeepSection id="oi-types" tone="light-3" wide>
          <DeepHeader content={c.typesHeader} onLight />
          <BlockGrid blocks={c.types} />
        </DeepSection>

        <DeepSection id="oi-ref" tone="light-1">
          <RefTeaser content={c.refTeaser} />
        </DeepSection>

        <DeepSection id="oi-cta" tone="black" className="deep-cta">
          <DeepCta content={c.cta} />
        </DeepSection>
      </main>
      <Footer site={site} />
    </>
  );
}
