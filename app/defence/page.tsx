import type { Metadata } from "next";
import { Fragment, type ReactElement } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { HotspotImage } from "@/components/deep/HotspotImage";
import { TechSection } from "@/components/deep/TechCards";
import { site } from "@/content/sr/site";
import * as c from "@/content/sr/defence";

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
};

const A = "#e8401c";

// Dekorativni vizuali programskih kartica
const progVisuals: ReactElement[] = [
  <svg key="p1" width="80" height="80" viewBox="0 0 80 80" fill="none" opacity="0.45">
    <rect x="10" y="30" width="18" height="38" rx="2" fill="rgba(232,64,28,0.35)" />
    <rect x="31" y="18" width="18" height="50" rx="2" fill="rgba(232,64,28,0.5)" />
    <rect x="52" y="36" width="18" height="32" rx="2" fill="rgba(232,64,28,0.3)" />
    <line x1="4" y1="70" x2="76" y2="70" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
  </svg>,
  <svg key="p2" width="88" height="64" viewBox="0 0 88 64" fill="none" opacity="0.45">
    <rect x="2" y="20" width="14" height="28" rx="2" fill="rgba(232,64,28,0.25)" />
    <line x1="16" y1="34" x2="26" y2="34" stroke="rgba(232,64,28,0.5)" strokeWidth="2" />
    <rect x="26" y="14" width="14" height="34" rx="2" fill="rgba(232,64,28,0.4)" />
    <line x1="40" y1="31" x2="50" y2="31" stroke="rgba(232,64,28,0.5)" strokeWidth="2" />
    <rect x="50" y="18" width="14" height="30" rx="2" fill="rgba(232,64,28,0.3)" />
    <line x1="64" y1="33" x2="72" y2="33" stroke="rgba(232,64,28,0.5)" strokeWidth="2" />
    <rect x="72" y="24" width="14" height="24" rx="2" fill="rgba(232,64,28,0.2)" />
    <line x1="0" y1="56" x2="88" y2="56" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
  </svg>,
  <svg key="p3" width="80" height="80" viewBox="0 0 80 80" fill="none" opacity="0.45">
    <path d="M40 8L14 20v22c0 18 11 26 26 30 15-4 26-12 26-30V20L40 8z" stroke="rgba(232,64,28,0.45)" strokeWidth="1.5" fill="rgba(232,64,28,0.07)" strokeLinejoin="round" />
    <path d="M27 40l8 8 18-18" stroke="rgba(232,64,28,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

const reqIcons: ReactElement[] = [
  <svg key="r1" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="3" stroke={A} strokeWidth="1.5" />
    <path d="M10 2v2M10 16v2M2 10h2M16 10h2" stroke={A} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" stroke={A} strokeWidth="1.4" strokeLinecap="round" />
  </svg>,
  <svg key="r2" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 2L3 5v6c0 4 3 6.5 7 7.5 4-1 7-3.5 7-7.5V5l-7-3z" stroke={A} strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M7 10l2 2 4-4" stroke={A} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="r3" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="2" y="3" width="16" height="11" rx="1.5" stroke={A} strokeWidth="1.5" />
    <path d="M7 17h6M10 14v3" stroke={A} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M6 8l2 2 4-4" stroke={A} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="r4" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 2l-7 3.5v5c0 3.5 3 6 7 7 4-1 7-3.5 7-7v-5L10 2z" stroke={A} strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M7 10l2 2 4-4" stroke={A} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="r5" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="7" stroke={A} strokeWidth="1.5" />
    <path d="M10 6v4l3 2" stroke={A} strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
];

const stepIcons: ReactElement[] = [
  <svg key="s1" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="3.5" stroke={A} strokeWidth="1.4" />
    <path d="M9 1v2M9 15v2M1 9h2M15 9h2M3.05 3.05l1.42 1.42M13.53 13.53l1.42 1.42M3.05 14.95l1.42-1.42M13.53 4.47l1.42-1.42" stroke={A} strokeWidth="1.4" strokeLinecap="round" />
  </svg>,
  <svg key="s2" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9 2L2 6v6l7 4 7-4V6L9 2z" stroke={A} strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M2 6l7 4 7-4M9 10v6" stroke={A} strokeWidth="1.4" strokeLinecap="round" />
  </svg>,
  <svg key="s3" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="2" y="9" width="4" height="7" rx="1" stroke={A} strokeWidth="1.4" />
    <rect x="7" y="6" width="4" height="10" rx="1" stroke={A} strokeWidth="1.4" />
    <rect x="12" y="3" width="4" height="13" rx="1" stroke={A} strokeWidth="1.4" />
  </svg>,
  <svg key="s4" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9 2L2 5v4c0 4.5 3 7 7 8 4-1 7-3.5 7-8V5L9 2z" stroke={A} strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M6 9l2 2 4-4" stroke={A} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

const whyIcons: ReactElement[] = [
  <svg key="w1" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 2L3 6v8l7 4 7-4V6L10 2z" stroke={A} strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M3 6l7 4 7-4M10 10v8" stroke={A} strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  <svg key="w2" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="2" y="11" width="4" height="7" rx="1" stroke={A} strokeWidth="1.5" />
    <rect x="8" y="8" width="4" height="10" rx="1" stroke={A} strokeWidth="1.5" />
    <rect x="14" y="5" width="4" height="13" rx="1" stroke={A} strokeWidth="1.5" />
  </svg>,
  <svg key="w3" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 2L3 5v6c0 4 3 6.5 7 7.5 4-1 7-3.5 7-7.5V5l-7-3z" stroke={A} strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M7 10l2 2 4-4" stroke={A} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export default function DefencePage() {
  return (
    <>
      <Header site={site} />
      <main>
        {/* HERO */}
        <section id="ds-hero" className="deep-hero">
          <div className="ds-hero-bg" />
          <div className="ds-hero-content hero-content">
            <div className="ds-hero-eyebrow deep-hero-eyebrow">{c.hero.eyebrow}</div>
            <h1 className="ds-hero-title">
              {c.hero.titleLead}
              <br />
              <em>{c.hero.titleEm}</em>
            </h1>
            <p className="ds-hero-lead hero-lead">{c.hero.lead}</p>
            <div className="ds-hero-cta hero-btns">
              <a href="mailto:office@servoteh.com" className="btn btn-primary">
                Pošaljite upit <i className="arrow-icon">↗</i>
              </a>
              <Link href="/reference" className="btn btn-secondary">
                Pogledajte reference
              </Link>
              <a href={c.hero.brochureHref} className="btn btn-ghost" target="_blank" rel="noopener" download>
                {c.hero.brochureLabel}
              </a>
            </div>
          </div>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            {c.hero.breadcrumb.map((b, i) => (
              <span key={b.label} style={{ display: "contents" }}>
                {b.href ? <Link href={b.href}>{b.label}</Link> : <span className="breadcrumb-current">{b.label}</span>}
                {i < c.hero.breadcrumb.length - 1 && <span className="breadcrumb-sep">/</span>}
              </span>
            ))}
          </nav>
        </section>

        {/* INTRO */}
        <section id="ds-intro">
          <Container>
            <div className="ds-intro-inner">
              <Reveal>
                <div className="section-label">{c.intro.label}</div>
                <h2>{c.intro.title}</h2>
                <p>{c.intro.body}</p>
              </Reveal>
              <Reveal delay={0.1} className="ds-trust-points">
                {c.intro.points.map((p) => (
                  <div className="ds-trust-point" key={p}>
                    <div className="ds-trust-dot" />
                    <span className="ds-trust-text">{p}</span>
                  </div>
                ))}
              </Reveal>
            </div>
          </Container>
        </section>

        {/* PROGRAMI */}
        <section id="ds-programs">
          <Container wide>
            <Reveal className="ds-programs-header">
              <div className="section-label">{c.programsHeader.label}</div>
              <h2>{c.programsHeader.title}</h2>
              <p>{c.programsHeader.body}</p>
            </Reveal>
            <div className="ds-prog-grid">
              {c.programs.map((prog, i) => (
                <Reveal
                  key={prog.num}
                  delay={i * 0.1}
                  className={`ds-prog-card${prog.accent ? " ds-prog-card--p1" : ""}`}
                >
                  <div className={`ds-prog-visual ds-prog-visual--p${i + 1}`}>
                    {progVisuals[i]}
                    <span className="ds-prog-visual-label">{prog.label}</span>
                  </div>
                  <div className="ds-prog-body">
                    <div className="ds-prog-num">{prog.num}</div>
                    <h3>{prog.title}</h3>
                    <p>{prog.desc}</p>
                    <ul className="ds-prog-items">
                      {prog.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* DETALJNI BLOKOVI + tehničke sekcije (umetnute po programu) */}
        {c.detailBlocks.map((d, i) => {
          const tech = [c.tech01, c.tech02, c.tech03][i];
          return (
            <Fragment key={d.label}>
              <div className={`ds-detail-block ds-detail-block--${d.tone}`}>
                <Container wide>
                  <div className={`ds-detail-inner${d.reverse ? " ds-detail-inner--reverse" : ""}`}>
                    <Reveal>
                      {d.hotspots ? (
                        <HotspotImage src={d.img} alt={d.alt} hotspots={c.program1Hotspots} />
                      ) : (
                        <div className={`ds-media-placeholder ds-media-placeholder--${d.tone}`}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={d.img} alt={d.alt} className="ds-media-img" loading="lazy" />
                        </div>
                      )}
                    </Reveal>
                    <Reveal delay={0.1} className={`ds-detail-text ds-detail-text--${d.tone === "dark" ? "dark" : "light"}`}>
                      <div className="section-label">{d.label}</div>
                      <h2>{d.title}</h2>
                      <p>{d.body}</p>
                      <ul className="ds-detail-bullets">
                        {d.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                      <a
                        href="mailto:office@servoteh.com"
                        className={`${d.ctaGhostLight ? "btn-ghost-light" : "btn btn-ghost"} btn-sm`}
                      >
                        Pošaljite upit <i className="arrow-icon">↗</i>
                      </a>
                    </Reveal>
                  </div>
                </Container>
              </div>
              {tech && <TechSection content={tech} />}
            </Fragment>
          );
        })}

        {/* ZAHTEVI */}
        <section id="ds-requirements">
          <Container wide>
            <Reveal className="section-intro-narrow">
              <div className="section-label">{c.requirements.label}</div>
              <h2 className="section-intro-h2">{c.requirements.title}</h2>
              <p className="section-intro-p">{c.requirements.body}</p>
            </Reveal>
            <div className="ds-req-grid">
              {c.requirements.cards.map((card, i) => (
                <Reveal key={card.title} delay={(i % 5) * 0.08} className="ds-req-card">
                  <div className="ds-req-icon">{reqIcons[i]}</div>
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* PROCES */}
        <section id="ds-process">
          <Container wide>
            <Reveal className="section-header-intro">
              <div className="section-label">{c.process.label}</div>
              <h2>{c.process.title}</h2>
              <p>{c.process.body}</p>
            </Reveal>
            <div className="ds-steps-grid">
              {c.process.steps.map((step, i) => (
                <Reveal key={step.num} delay={i * 0.1} className="ds-step">
                  <div className="ds-step-num">{step.num}</div>
                  <div className="ds-step-icon">{stepIcons[i]}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ZAŠTO */}
        <section id="ds-why">
          <Container wide>
            <Reveal className="section-intro-tight">
              <div className="section-label">{c.why.label}</div>
              <h2 className="section-intro-h2 section-intro-h2--notight">{c.why.title}</h2>
            </Reveal>
            <div className="ds-why-grid">
              {c.why.cards.map((card, i) => (
                <Reveal key={card.num} delay={i * 0.1} className="ds-why-card">
                  <div className="ds-why-num">{card.num}</div>
                  <div className="ds-why-icon">{whyIcons[i]}</div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* REFERENCE LINK */}
        <section id="ds-ref-link">
          <Container>
            <Reveal className="ds-ref-link-inner">
              <div className="ds-ref-link-text">
                <div className="section-label">Reference</div>
                <h2>{c.refLink.title}</h2>
                <p>{c.refLink.body}</p>
              </div>
              <div className="ref-link-cta">
                <Link href="/reference" className="btn-ghost-light">
                  Otvorite reference <i className="arrow-icon">↗</i>
                </Link>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* CTA */}
        <section id="ds-cta">
          <Container>
            <Reveal className="ds-cta-inner">
              <div className="section-label section-label--center">Kontakt</div>
              <h2>{c.cta.title}</h2>
              <p>{c.cta.body}</p>
              <div className="cta-btns">
                <a href="mailto:office@servoteh.com" className="btn btn-primary">
                  Pošaljite upit <i className="arrow-icon">↗</i>
                </a>
                <a href="tel:+381113141564" className="btn btn-secondary">
                  +381 (11) 31-41-564
                </a>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer site={site} />
    </>
  );
}
