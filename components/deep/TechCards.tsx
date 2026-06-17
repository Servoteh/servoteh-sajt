import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { TechCardVideo } from "@/components/deep/TechCardVideo";
import { ui as uiSr } from "@/content/sr/ui";
import type { TechSectionContent, UiDict } from "@/lib/types";

/**
 * Sekcija tehničkih kartica (slika + naslov + opis + opcione specifikacije).
 * Čisto prezentaciona; sadržaj dolazi iz content/<locale>/*.ts.
 * Koristi se kao dopuna dubinskih stranica (defence, solution strane).
 */
export function TechSection({ content, ui = uiSr }: { content: TechSectionContent; ui?: UiDict }) {
  return (
    <section id={content.id} className={`tech-section tech-section--${content.tone}`}>
      <Container wide>
        <Reveal className="tech-header">
          <div className="section-label">{content.label}</div>
          <h2>{content.title}</h2>
          {content.intro && <p>{content.intro}</p>}
        </Reveal>

        {content.leadImg && (
          <Reveal className="tech-lead-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={content.leadImg.src} alt={content.leadImg.alt} loading="lazy" />
          </Reveal>
        )}

        <div className="tech-grid">
          {content.cards.map((card, i) => (
            <Reveal key={card.title} delay={(i % 3) * 0.08} className="tech-card">
              <div className="tech-card-media">
                {card.videoSrc ? (
                  // eslint-disable-next-line jsx-a11y/media-has-caption
                  <video src={card.videoSrc} poster={card.img} controls muted playsInline preload="metadata" />
                ) : card.video ? (
                  <TechCardVideo img={card.img} alt={card.alt} video={card.video} caption={card.caption} ui={ui} />
                ) : (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={card.img} alt={card.alt} loading="lazy" />
                    {card.caption && <span className="tech-card-caption">{card.caption}</span>}
                  </>
                )}
              </div>
              <div className="tech-card-body">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                {card.specs && (
                  <ul className="tech-card-specs">
                    {card.specs.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                )}
                {card.video && (
                  <a
                    className="tech-card-video-link"
                    href={`https://www.youtube.com/watch?v=${card.video}`}
                    target="_blank"
                    rel="noopener"
                  >
                    {ui.media.watchYoutube} <i className="arrow-icon">↗</i>
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {content.cta && (
          <Reveal className="tech-cta">
            <a href={content.cta.href} className="btn btn-primary">
              {content.cta.label} <i className="arrow-icon">↗</i>
            </a>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
