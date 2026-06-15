import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import type { HomeContent } from "@/lib/types";

export function Solutions({ content }: { content: HomeContent["solutions"] }) {
  return (
    <section id="solutions">
      <Container wide>
        <Reveal className="section-header">
          <div className="section-label">{content.label}</div>
          <h2>{content.title}</h2>
          <p>{content.body}</p>
        </Reveal>

        <div className="solutions-grid">
          {content.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.1} className="solution-card">
              <div className="card-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.img} alt={card.alt} loading="lazy" />
              </div>
              <div className="card-body">
                <div className="card-tag">{card.tag}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <Link href={card.href} className="card-link">
                  Saznajte više →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
