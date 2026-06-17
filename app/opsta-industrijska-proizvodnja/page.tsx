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

        {/* IZDVOJENE MAŠINE — mikro-celine (medij + tekst, naizmenično) */}
        <DeepSection id="oi-machines" tone="dark" wide>
          <DeepHeader content={c.machinesHeader} />
          <div className="oi-machines">
            {c.machines.map((m) => (
              <Reveal className="oi-cell" key={m.title}>
                <div className="oi-cell-media">
                  {m.video ? (
                    <video src={m.video} poster={m.poster} controls preload="none" />
                  ) : m.videoId ? (
                    <YouTubeEmbed id={m.videoId} title={m.videoTitle ?? m.title} />
                  ) : m.img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={m.img} alt={m.imgAlt ?? m.title} loading="lazy" />
                  ) : null}
                </div>
                <div className="oi-cell-text">
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                  <ul className="oi-feature-highlights">
                    {m.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </DeepSection>

        <DeepSection id="oi-types" tone="light-3" wide>
          <DeepHeader content={c.typesHeader} onLight />
          <BlockGrid blocks={c.types} />
        </DeepSection>

        <DeepSection id="oi-cta" tone="black" className="deep-cta">
          <DeepCta content={c.cta} />
        </DeepSection>
      </main>
      <Footer site={site} />
    </>
  );
}
