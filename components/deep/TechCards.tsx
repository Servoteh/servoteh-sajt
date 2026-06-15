import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import type { TechSectionContent } from "@/lib/types";

/**
 * Sekcija tehničkih kartica (slika + naslov + opis + opcione specifikacije).
 * Čisto prezentaciona; sadržaj dolazi iz content/<locale>/*.ts.
 * Koristi se kao dopuna dubinskih stranica (defence, solution strane).
 */
export function TechSection({ content }: { content: TechSectionContent }) {
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.img} alt={card.alt} loading="lazy" />
                {card.caption && <span className="tech-card-caption">{card.caption}</span>}
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
