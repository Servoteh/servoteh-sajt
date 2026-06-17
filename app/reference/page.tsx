import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { HeroVideoBg } from "@/components/sections/HeroVideoBg";
import { site } from "@/content/sr/site";
import { pageMetadata } from "@/lib/meta";
import * as c from "@/content/sr/reference";

export const metadata: Metadata = pageMetadata(c.meta, "/reference/");

// Svaka projektna kartica vodi na odgovarajuću deep stranicu.
function caseHref(groupLabel: string): string {
  if (groupLabel === "Industrija odbrane") return "/defence";
  if (groupLabel === "Opšta industrija") return "/opsta-industrijska-proizvodnja";
  // Specijalne mašine, linije i automatizacija
  return "/specijalne-masine";
}

export default function ReferencePage() {
  return (
    <>
      <Header site={site} />
      <main>
        {/* HERO */}
        <section id="ref-hero" className="deep-hero">
          <HeroVideoBg wrapClassName="ref-hero-video-wrap" opacity={0.5} />
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

        {/* IZDVOJENI PROJEKTI — grupisani po kategoriji */}
        <section id="ref-cases">
          <Container wide>
            <Reveal className="section-header">
              <div className="section-label">{c.casesHeader.label}</div>
              <h2>{c.casesHeader.title}</h2>
              <p>{c.casesHeader.body}</p>
            </Reveal>

            {c.caseGroups.map((group) => (
              <div className="ref-case-group" key={group.label}>
                <Reveal className="ref-case-group-head">
                  <span className="ref-case-group-dot" />
                  <h3>{group.label}</h3>
                </Reveal>
                <div className="ref-cases-grid">
                  {group.cases.map((cs, i) => (
                    <Reveal
                      key={cs.num}
                      delay={(i % 3) * 0.1}
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
                      <Link
                        href={caseHref(group.label)}
                        className="ref-case-overlay-link"
                        aria-label={`${cs.title} — pogledajte`}
                      />
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
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
