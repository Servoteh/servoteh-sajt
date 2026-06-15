import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { aboutIcons } from "@/components/icons";
import type { HomeContent } from "@/lib/types";

export function About({ content }: { content: HomeContent["about"] }) {
  return (
    <section id="about">
      <Container>
        <div className="about-inner">
          <Reveal className="about-left">
            <div className="section-label">{content.label}</div>
            <h2>{content.title}</h2>
            <p>{content.body}</p>
            <Link href={content.cta.href} className="btn-ghost-light">
              {content.cta.label} <i className="arrow-icon">↗</i>
            </Link>
          </Reveal>

          <div className="about-right">
            {content.features.map((f, i) => (
              <Reveal key={f.title} delay={0.1 * ((i % 2) + 1)} className="about-feature">
                <div className="feature-icon">{aboutIcons[i]}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
