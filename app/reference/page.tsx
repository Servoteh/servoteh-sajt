import type { Metadata } from "next";
import type { ReactElement } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/sr/site";
import * as c from "@/content/sr/reference";

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
};

const A = "#e8401c";

// Dekorativni vizuali kategorija (po varijanti)
const catVisuals: Record<string, ReactElement> = {
  defence: (
    <svg className="ref-cat-icon" width="72" height="72" viewBox="0 0 72 72" fill="none">
      <path d="M36 6L10 16v22c0 18 11 27 26 32 15-5 26-14 26-32V16L36 6z" stroke="rgba(232,64,28,0.5)" strokeWidth="1.5" fill="rgba(232,64,28,0.06)" strokeLinejoin="round" />
      <path d="M24 36l8 8 16-16" stroke="rgba(232,64,28,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  machines: (
    <svg className="ref-cat-icon" width="72" height="64" viewBox="0 0 72 64" fill="none">
      <rect x="6" y="20" width="18" height="36" rx="2" fill="rgba(232,64,28,0.2)" />
      <rect x="27" y="10" width="18" height="46" rx="2" fill="rgba(232,64,28,0.3)" />
      <rect x="48" y="28" width="18" height="28" rx="2" fill="rgba(232,64,28,0.2)" />
      <line x1="0" y1="58" x2="72" y2="58" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
    </svg>
  ),
  lines: (
    <svg className="ref-cat-icon" width="80" height="52" viewBox="0 0 80 52" fill="none">
      <rect x="2" y="18" width="14" height="22" rx="2" fill="rgba(232,64,28,0.2)" />
      <line x1="16" y1="29" x2="26" y2="29" stroke="rgba(232,64,28,0.45)" strokeWidth="2" />
      <rect x="26" y="12" width="14" height="28" rx="2" fill="rgba(232,64,28,0.3)" />
      <line x1="40" y1="26" x2="50" y2="26" stroke="rgba(232,64,28,0.45)" strokeWidth="2" />
      <rect x="50" y="16" width="14" height="24" rx="2" fill="rgba(232,64,28,0.2)" />
      <line x1="64" y1="28" x2="72" y2="28" stroke="rgba(232,64,28,0.45)" strokeWidth="2" />
      <rect x="72" y="22" width="6" height="18" rx="2" fill="rgba(232,64,28,0.15)" />
      <line x1="0" y1="44" x2="80" y2="44" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
    </svg>
  ),
  auto: (
    <svg className="ref-cat-icon" width="72" height="72" viewBox="0 0 72 72" fill="none">
      <circle cx="36" cy="36" r="24" stroke="rgba(232,64,28,0.25)" strokeWidth="1.5" fill="none" />
      <circle cx="36" cy="36" r="15" stroke="rgba(232,64,28,0.4)" strokeWidth="1.5" fill="none" />
      <circle cx="36" cy="36" r="7" fill="rgba(232,64,28,0.45)" />
      <line x1="36" y1="12" x2="36" y2="21" stroke="rgba(232,64,28,0.6)" strokeWidth="2" />
      <line x1="36" y1="51" x2="36" y2="60" stroke="rgba(232,64,28,0.6)" strokeWidth="2" />
      <line x1="12" y1="36" x2="21" y2="36" stroke="rgba(232,64,28,0.6)" strokeWidth="2" />
      <line x1="51" y1="36" x2="60" y2="36" stroke="rgba(232,64,28,0.6)" strokeWidth="2" />
    </svg>
  ),
};

const stepIcons: ReactElement[] = [
  <svg key="p1" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M3 10h14M10 3v14" stroke={A} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="10" cy="10" r="3" stroke={A} strokeWidth="1.5" />
  </svg>,
  <svg key="p2" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="2" y="3" width="16" height="11" rx="1.5" stroke={A} strokeWidth="1.5" />
    <path d="M7 17h6M10 14v3" stroke={A} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M6 8l2 2 4-4" stroke={A} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="p3" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="2" y="11" width="5" height="7" rx="1" stroke={A} strokeWidth="1.5" />
    <rect x="7.5" y="8" width="5" height="10" rx="1" stroke={A} strokeWidth="1.5" />
    <rect x="13" y="5" width="5" height="13" rx="1" stroke={A} strokeWidth="1.5" />
  </svg>,
  <svg key="p4" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 2L3 5v6c0 4 3 6.5 7 7.5 4-1 7-3.5 7-7.5V5l-7-3z" stroke={A} strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M7 10l2 2 4-4" stroke={A} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

const focusIcons: ReactElement[] = [
  <svg key="f1" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 1L2 3.5v5c0 3.5 2.5 5.5 6 6.5 3.5-1 6-3 6-6.5v-5L8 1z" stroke={A} strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M5 8l2 2 4-4" stroke={A} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="f2" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1" y="7" width="14" height="7" rx="1.5" stroke={A} strokeWidth="1.3" />
    <circle cx="4" cy="13" r="1.5" stroke={A} strokeWidth="1.3" />
    <circle cx="12" cy="13" r="1.5" stroke={A} strokeWidth="1.3" />
    <path d="M5.5 7V6a2.5 2.5 0 015 0v1" stroke={A} strokeWidth="1.3" />
  </svg>,
  <svg key="f3" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 12l4-6 3 2.5 3-5.5 2 4" stroke={A} strokeWidth="1.3" strokeLinejoin="round" />
    <circle cx="8" cy="13.5" r="1.2" fill={A} />
    <path d="M8 12V9" stroke={A} strokeWidth="1.3" strokeLinecap="round" />
  </svg>,
  <svg key="f4" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="3" stroke={A} strokeWidth="1.3" />
    <path d="M8 1v2M8 13v2M1 8h2M13 8h2" stroke={A} strokeWidth="1.3" strokeLinecap="round" />
    <path d="M3.05 3.05l1.42 1.42M11.53 11.53l1.42 1.42M3.05 12.95l1.42-1.42M11.53 4.47l1.42-1.42" stroke={A} strokeWidth="1.3" strokeLinecap="round" />
  </svg>,
];

export default function ReferencePage() {
  return (
    <>
      <Header site={site} />
      <main>
        {/* HERO */}
        <section id="ref-hero" className="deep-hero">
          <div className="ref-hero-bg" />
          <div className="ref-hero-content hero-content">
            <div className="ref-hero-eyebrow deep-hero-eyebrow">{c.hero.eyebrow}</div>
            <h1 className="ref-hero-title">
              {c.hero.titleLead}
              <br />
              <em>{c.hero.titleEm}</em>
            </h1>
            <p className="ref-hero-lead hero-lead">
              {c.hero.leadPre}
              <Link href={c.hero.leadLink.href} className="link-defence">
                {c.hero.leadLink.text}
              </Link>
              {c.hero.leadPost}
            </p>
            <div className="ref-hero-cta hero-btns">
              <Link href={c.hero.primaryCta.href} className="btn btn-primary">
                {c.hero.primaryCta.label} <i className="arrow-icon">↗</i>
              </Link>
              <Link href={c.hero.secondaryCta.href} className="btn btn-secondary">
                {c.hero.secondaryCta.label}
              </Link>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section id="ref-stats">
          <div className="stats-inner container">
            {c.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1} className="stat-item">
                {"text" in s && s.text ? (
                  <div className="stat-number--sm">{s.value}</div>
                ) : (
                  <div className="stat-number">
                    {s.value}
                    {s.suffix && <span>{s.suffix}</span>}
                  </div>
                )}
                <div className="stat-label">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* INTRO */}
        <section id="ref-intro">
          <Container>
            <div className="ref-intro-inner">
              <Reveal>
                <div className="section-label">{c.intro.label}</div>
                <h2>{c.intro.title}</h2>
                <p>{c.intro.body}</p>
              </Reveal>
              <Reveal delay={0.1} className="ref-intro-right">
                {c.intro.points.map((p) => (
                  <div className="ref-intro-point" key={p.title}>
                    <div className="ref-intro-dot" />
                    <div>
                      <div className="ref-intro-point-title">
                        {p.href ? (
                          <Link href={p.href} className="link-defence">
                            {p.title}
                          </Link>
                        ) : (
                          p.title
                        )}
                      </div>
                      <div className="ref-intro-point-desc">{p.desc}</div>
                    </div>
                  </div>
                ))}
              </Reveal>
            </div>
          </Container>
        </section>

        {/* KATEGORIJE */}
        <section id="ref-categories">
          <Container wide>
            <Reveal className="section-header">
              <div className="section-label">{c.categoriesHeader.label}</div>
              <h2>{c.categoriesHeader.title}</h2>
              <p>{c.categoriesHeader.body}</p>
            </Reveal>
            <div className="ref-cat-grid">
              {c.categories.map((cat, i) => (
                <Reveal
                  key={cat.tag}
                  delay={(i % 2) * 0.1}
                  className={`ref-cat-card${cat.variant === "defence" ? " ref-cat-card--defence" : ""}`}
                >
                  <div className={`ref-cat-visual ref-cat-visual--${cat.variant}`}>{catVisuals[cat.variant]}</div>
                  <div className="ref-cat-body">
                    <div className="ref-cat-tag">{cat.tag}</div>
                    <h3>{cat.title}</h3>
                    <p>{cat.desc}</p>
                    <Link href={cat.href} className="ref-cat-link">
                      Pogledajte rešenja →
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* CASES */}
        <section id="ref-cases">
          <Container wide>
            <Reveal className="section-header">
              <div className="section-label">{c.casesHeader.label}</div>
              <h2>{c.casesHeader.title}</h2>
              <p>{c.casesHeader.body}</p>
            </Reveal>
            <div className="ref-cases-grid">
              {c.cases.map((cs, i) => (
                <Reveal
                  key={cs.num}
                  delay={i * 0.1}
                  className={`ref-case-card${cs.featured ? " ref-case-card--featured" : ""}`}
                >
                  <div className="ref-case-num">{cs.num}</div>
                  <h3>{cs.title}</h3>
                  <p>{cs.desc}</p>
                  <div className="ref-case-tags">
                    {cs.tags.map((t) => (
                      <span key={t.label} className={`ref-case-tag${"neutral" in t && t.neutral ? " ref-case-tag--neutral" : ""}`}>
                        {t.label}
                      </span>
                    ))}
                  </div>
                  <div className="ref-case-meta">{cs.meta}</div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* PROCES */}
        <section id="ref-process">
          <Container wide>
            <Reveal className="ref-process-intro">
              <div className="section-label">{c.process.label}</div>
              <h2>{c.process.title}</h2>
              <p>{c.process.body}</p>
            </Reveal>
            <div className="ref-steps">
              {c.process.steps.map((step, i) => (
                <Reveal key={step.num} delay={i * 0.1} className="ref-step">
                  <div className="ref-step-num">{step.num}</div>
                  <div className="ref-step-icon">{stepIcons[i]}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* FOKUS */}
        <section id="ref-focus">
          <Container wide>
            <div className="ref-focus-inner">
              <Reveal>
                <div className="section-label">{c.focus.label}</div>
                <h2>{c.focus.title}</h2>
                <p>{c.focus.body}</p>
                <Link href={c.focus.cta.href} className="btn-ghost-light">
                  {c.focus.cta.label} <i className="arrow-icon">↗</i>
                </Link>
              </Reveal>
              <Reveal delay={0.1} className="ref-focus-right">
                {c.focus.cards.map((card, i) => (
                  <div className="ref-focus-card" key={card.title}>
                    <div className="ref-focus-card-icon">{focusIcons[i]}</div>
                    <h4>{card.title}</h4>
                    <p>{card.desc}</p>
                  </div>
                ))}
              </Reveal>
            </div>
          </Container>
        </section>

        {/* MEĐUNARODNO */}
        <section id="ref-international">
          <Container wide>
            <Reveal className="ref-intl-top">
              <div className="ref-intl-text">
                <div className="section-label">{c.international.label}</div>
                <h2>{c.international.title}</h2>
                <p>{c.international.body}</p>
              </div>
              <div className="ref-intl-serbia">
                <h3>
                  <span className="ref-intl-serbia-dot" />
                  {c.international.serbia.title}
                </h3>
                <p>{c.international.serbia.desc}</p>
              </div>
            </Reveal>
            <Reveal className="ref-intl-regions">
              {c.international.regions.map((region) => (
                <div className="ref-intl-region" key={region.title}>
                  <div className="ref-intl-region-head">
                    <span className="ref-intl-region-dot" />
                    <span className="ref-intl-region-title">{region.title}</span>
                  </div>
                  {region.countries.map((country) => (
                    <div className="ref-intl-country-row" key={country.name}>
                      <span className="ref-intl-cname">{country.name}</span>
                      {"type" in country && country.type && <span className="ref-intl-ctype">{country.type}</span>}
                    </div>
                  ))}
                </div>
              ))}
            </Reveal>
          </Container>
        </section>

        {/* CTA */}
        <section id="ref-cta">
          <Container>
            <Reveal className="ref-cta-inner">
              <div className="section-label section-label--center">Sledeći korak</div>
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
