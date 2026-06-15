import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { defenceIcons } from "@/components/icons";
import type { HomeContent } from "@/lib/types";

export function DefenceIntro({ content }: { content: HomeContent["defenceIntro"] }) {
  return (
    <section id="defence-intro">
      <Container>
        <div className="defence-grid">
          <Reveal>
            <div className="section-label">{content.label}</div>
            <h2 className="section-h2">
              {content.titleLead}
              <Link href={content.titleLink.href} className="link-defence">
                {content.titleLink.label}
              </Link>
              {content.titleAfterLink}
              <br />
              {content.titleSecond}
            </h2>
            <p className="section-body section-body--dark">{content.body}</p>
            <Link href={content.cta.href} className="btn btn-primary">
              {content.cta.label} <i className="arrow-icon">↗</i>
            </Link>
          </Reveal>

          <Reveal delay={0.2} className="defence-cards-inner">
            {content.cards.map((card, i) => (
              <div
                key={card.title}
                className={card.accent ? "defence-card defence-card--accent" : "defence-card"}
              >
                <div
                  className={card.accent ? "defence-card-icon" : "defence-card-icon defence-card-icon--subtle"}
                >
                  {defenceIcons[i]}
                </div>
                <div className="defence-card-title">{card.title}</div>
                <div className="defence-card-desc">{card.desc}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
