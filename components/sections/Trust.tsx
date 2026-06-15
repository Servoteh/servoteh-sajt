import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import type { HomeContent } from "@/lib/types";

export function Trust({ content }: { content: HomeContent["trust"] }) {
  return (
    <section id="trust">
      <Container wide>
        <div className="trust-inner">
          <Reveal className="trust-text">
            <div className="section-label">{content.label}</div>
            <h2>{content.title}</h2>
            <p>{content.body}</p>
            <Link href={content.cta.href} className="btn btn-ghost">
              {content.cta.label} <i className="arrow-icon">↗</i>
            </Link>
          </Reveal>

          <Reveal delay={0.2} className="trust-visual">
            <div className="trust-points">
              {content.points.map((p) => (
                <div className="trust-point" key={p.title}>
                  <div className="tp-dot" />
                  <div>
                    <div className="tp-label">{p.title}</div>
                    <div className="tp-desc">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
