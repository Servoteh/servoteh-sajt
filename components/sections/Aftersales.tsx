import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { aftersalesIcons } from "@/components/icons";
import type { HomeContent } from "@/lib/types";

export function Aftersales({ content }: { content: HomeContent["aftersales"] }) {
  return (
    <section id="aftersales">
      <Container>
        <div className="aftersales-grid">
          <Reveal>
            <div className="section-label">{content.label}</div>
            <h2 className="section-h2 section-h2--light">{content.title}</h2>
            <p className="section-body section-body--light">{content.body}</p>
            <Link href={content.cta.href} className="btn-ghost-light">
              {content.cta.label} <i className="arrow-icon">↗</i>
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="aftersales-list">
            {content.items.map((item, i) => (
              <div className="aftersales-item" key={item.title}>
                <div className="aftersales-icon">{aftersalesIcons[i]}</div>
                <div>
                  <div className="aftersales-item-title">{item.title}</div>
                  <div className="aftersales-item-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="why-compact">
            {content.why.map((w) => (
              <div className="why-compact-item" key={w.title}>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
