import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { deepIcons } from "@/components/deep/deepIcons";
import type {
  DeepHeroContent,
  DeepHeaderContent,
  DeepTrustItem,
  DeepNumberedCard,
  DeepIconCard,
  DeepBlock,
  DeepRefTeaser,
  DeepCtaContent,
} from "@/lib/types";

type Tone = "black" | "dark" | "section" | "light-1" | "light-3";

/** Sekcijski wrapper sa tone-pozadinom i deep paddingom. */
export function DeepSection({
  id,
  tone,
  wide = false,
  className,
  children,
}: {
  id?: string;
  tone: Tone;
  wide?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`deep-section tone-${tone}${className ? ` ${className}` : ""}`}>
      <Container wide={wide}>{children}</Container>
    </section>
  );
}

/** Statični dark hero (sve dubinske stranice). */
export function DeepHero({ id, content }: { id?: string; content: DeepHeroContent }) {
  return (
    <section id={id} className="deep-hero">
      <div className="deep-hero-bg" />
      <div className="hero-content">
        <div className="deep-hero-eyebrow">{content.eyebrow}</div>
        <h1>
          {content.titleLead}
          <br />
          <em>{content.titleEm}</em>
        </h1>
        <p className="hero-lead">{content.lead}</p>
        <div className="hero-btns">
          <a href={content.primaryCta.href} className="btn btn-primary">
            {content.primaryCta.label} <i className="arrow-icon">↗</i>
          </a>
          <Link href={content.secondaryCta.href} className="btn btn-secondary">
            {content.secondaryCta.label} <i className="arrow-icon">↗</i>
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Centrirani header sekcije. `onLight` za svetle pozadine. */
export function DeepHeader({ content, onLight }: { content: DeepHeaderContent; onLight?: boolean }) {
  return (
    <Reveal className={`deep-header${onLight ? " on-light" : ""}`}>
      <div className="section-label section-label--center">{content.label}</div>
      <h2>{content.title}</h2>
      {content.body && <p>{content.body}</p>}
    </Reveal>
  );
}

/** Intro split: levi tekst + desna trust-lista (na svetloj pozadini). */
export function IntroSplit({
  label,
  title,
  body,
  items,
}: {
  label: string;
  title: string;
  body: string;
  items: DeepTrustItem[];
}) {
  return (
    <div className="intro-grid">
      <Reveal className="intro-text">
        <div className="section-label">{label}</div>
        <h2>{title}</h2>
        <p>{body}</p>
      </Reveal>
      <Reveal delay={0.1} className="trust-list">
        {items.map((item) => (
          <div className="trust-item" key={item.text}>
            <div className="trust-icon">{deepIcons[item.icon]}</div>
            <span>{item.text}</span>
          </div>
        ))}
      </Reveal>
    </div>
  );
}

/** Numerisane kartice (dark). */
export function NumberedCards({ cards }: { cards: DeepNumberedCard[] }) {
  return (
    <div className="cards-grid">
      {cards.map((card, i) => (
        <Reveal key={card.num} delay={(i % 3) * 0.1} className="sm-card">
          <div className="sm-card-num">{card.num}</div>
          <h3>{card.title}</h3>
          <p>{card.desc}</p>
        </Reveal>
      ))}
    </div>
  );
}

/** Proces — numerisani koraci. */
export function ProcessSteps({ steps }: { steps: string[] }) {
  return (
    <Reveal className="process-steps">
      {steps.map((title, i) => (
        <div className="step" key={title}>
          <div className="step-num">{i + 1}</div>
          <div className="step-title">{title}</div>
        </div>
      ))}
    </Reveal>
  );
}

/** Tagovi (oblasti primene). */
export function Tags({ tags }: { tags: string[] }) {
  return (
    <Reveal className="tags-wrap">
      {tags.map((t) => (
        <div className="tag" key={t}>
          <span className="tag-dot" />
          {t}
        </div>
      ))}
    </Reveal>
  );
}

/** „Zašto Servoteh" — kartice sa ikonicom (light). */
export function Reasons({ cards }: { cards: DeepIconCard[] }) {
  return (
    <div className="reasons-grid">
      {cards.map((card, i) => (
        <Reveal key={card.title} delay={(i % 3) * 0.1} className="reason-card">
          <div className="reason-icon">{deepIcons[card.icon]}</div>
          <h3>{card.title}</h3>
          <p>{card.desc}</p>
        </Reveal>
      ))}
    </div>
  );
}

/** Ključni zahtevi — dark kartice sa ikonicom. */
export function Requirements({ cards }: { cards: DeepIconCard[] }) {
  return (
    <div className="reqs-grid">
      {cards.map((card, i) => (
        <Reveal key={card.title} delay={(i % 3) * 0.1} className="req-card">
          <div className="req-icon">{deepIcons[card.icon]}</div>
          <h3>{card.title}</h3>
          <p>{card.desc}</p>
        </Reveal>
      ))}
    </div>
  );
}

/** Blok-grid (tipovi / zadaci) — light kartice sa levim akcentom. */
export function BlockGrid({ blocks }: { blocks: DeepBlock[] }) {
  return (
    <div className="deep-block-grid">
      {blocks.map((b, i) => (
        <Reveal key={b.title} delay={(i % 2) * 0.1} className="deep-block">
          <h3>{b.title}</h3>
          <p>{b.desc}</p>
        </Reveal>
      ))}
    </div>
  );
}

/** Reference teaser kartica. */
export function RefTeaser({ content }: { content: DeepRefTeaser }) {
  return (
    <Reveal className="ref-card">
      <div className="ref-card-text">
        <div className="section-label">Reference</div>
        <h2>{content.title}</h2>
        <p>{content.body}</p>
      </div>
      <div className="ref-btn-wrap">
        <Link href="/reference" className="btn btn-primary">
          Otvorite reference <i className="arrow-icon">↗</i>
        </Link>
      </div>
    </Reveal>
  );
}

/** Centrirani CTA na dnu dubinske stranice. */
export function DeepCta({ content }: { content: DeepCtaContent }) {
  return (
    <Reveal>
      <div className="section-label section-label--center">{content.label}</div>
      <h2>{content.title}</h2>
      <p>{content.body}</p>
      <div className="cta-btns">
        <a href="mailto:office@servoteh.com" className="btn btn-primary">
          Pošaljite upit <i className="arrow-icon">↗</i>
        </a>
        <a href="tel:+381113141564" className="btn btn-secondary">
          +381 (11) 31-41-564
        </a>
      </div>
    </Reveal>
  );
}
