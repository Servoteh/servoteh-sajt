import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { industryIcons } from "@/components/icons";
import type { HomeContent, IndustryCard } from "@/lib/types";

function Card({ card, icon }: { card: IndustryCard; icon: React.ReactNode }) {
  const className = card.featured
    ? "industry-card industry-card--featured"
    : "industry-card";
  const inner = (
    <>
      <div className="ind-icon">{icon}</div>
      <div>
        <h4>{card.title}</h4>
        <p>{card.desc}</p>
      </div>
    </>
  );
  if (card.href) {
    return (
      <Link href={card.href} className={className}>
        {inner}
      </Link>
    );
  }
  return <div className={className}>{inner}</div>;
}

export function Industries({ content }: { content: HomeContent["industries"] }) {
  return (
    <section id="industries">
      <Container wide>
        <Reveal className="section-header">
          <div className="section-label">{content.label}</div>
          <h2>{content.title}</h2>
          <p>{content.body}</p>
        </Reveal>

        {/* Grid animiramo kao grupu da kartice ostanu direktna deca grida
            (jednaka visina reda, kako je u originalu). */}
        <Reveal className="industries-grid">
          {content.cards.map((card, i) => (
            <Card key={card.title} card={card} icon={industryIcons[i]} />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
