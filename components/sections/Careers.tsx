import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import type { CareersContent } from "@/lib/types";

/**
 * Prezentaciona komponenta strane „Karijera".
 * Sav tekst dolazi iz `content/{sr,en}/karijera.ts` (CareersContent), pa je
 * komponenta jezički neutralna. Prijava ide preko `mailto:` sa unapred
 * popunjenim naslovom mejla (CV se šalje iz kandidatovog mejla).
 */
export function Careers({ content }: { content: CareersContent }) {
  const { hero, why, openingsHeader, openings, labels, apply, empty } = content;

  const applyHref = (title: string) =>
    `mailto:${apply.email}?subject=${encodeURIComponent(labels.applySubjectPrefix + title)}`;

  return (
    <>
      {/* HERO */}
      <section className="deep-hero car-hero">
        <div className="deep-hero-bg" />
        <div className="hero-content">
          <div className="deep-hero-eyebrow">{hero.eyebrow}</div>
          <h1>
            {hero.titleLead} <em>{hero.titleEm}</em>
          </h1>
          <p className="hero-lead">{hero.lead}</p>
          <div className="car-hero-cta">
            <a href={hero.primaryCta.href} className="btn btn-primary">
              {hero.primaryCta.label} <i className="arrow-icon">↗</i>
            </a>
            <a href={hero.secondaryCta.href} className="btn btn-secondary">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </section>

      {/* ZAŠTO SERVOTEH */}
      <section className="car-sec">
        <Container>
          <Reveal className="section-header">
            <div className="section-label">{why.label}</div>
            <h2>{why.title}</h2>
            <p>{why.body}</p>
          </Reveal>
          <div className="car-why-grid">
            {why.cards.map((card, i) => (
              <Reveal key={card.title} delay={(i % 4) * 0.08} className="car-why-card">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* OTVORENE POZICIJE */}
      <section id="openings" className="car-sec car-sec--alt">
        <Container>
          <Reveal className="section-header">
            <div className="section-label">{openingsHeader.label}</div>
            <h2>{openingsHeader.title}</h2>
            <p>{openingsHeader.body}</p>
          </Reveal>

          {openings.length === 0 ? (
            <Reveal className="car-job">
              <h3>{empty.title}</h3>
              <p className="car-job-summary">{empty.body}</p>
            </Reveal>
          ) : (
            <div className="car-jobs">
              {openings.map((job) => (
                <Reveal key={job.id} className="car-job">
                  <div className="car-job-head">
                    <h3>{job.title}</h3>
                    <div className="car-job-meta">
                      <span className="car-job-badge">{job.location}</span>
                      <span className="car-job-badge">{job.type}</span>
                      {job.area && (
                        <span className="car-job-badge car-job-badge--neutral">{job.area}</span>
                      )}
                      {job.count && (
                        <span className="car-job-badge car-job-badge--neutral">{job.count}</span>
                      )}
                    </div>
                  </div>
                  <p className="car-job-summary">{job.summary}</p>
                  <div className="car-job-cols">
                    <div className="car-job-col">
                      <h4>{labels.responsibilities}</h4>
                      <ul>
                        {job.responsibilities.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="car-job-col">
                      <h4>{labels.requirements}</h4>
                      <ul>
                        {job.requirements.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                    </div>
                    {job.offer && job.offer.length > 0 && (
                      <div className="car-job-col">
                        <h4>{labels.offer}</h4>
                        <ul>
                          {job.offer.map((r) => (
                            <li key={r}>{r}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="car-job-apply">
                    <a href={applyHref(job.title)} className="btn btn-primary">
                      {labels.apply} <i className="arrow-icon">↗</i>
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* KAKO SE PRIJAVITI */}
      <section className="car-sec">
        <Container>
          <Reveal className="car-apply-inner">
            <div className="section-label section-label--center">{apply.label}</div>
            <h2>{apply.title}</h2>
            <p>{apply.body}</p>
            <div className="cta-btns">
              <a href={`mailto:${apply.email}`} className="btn btn-primary">
                {apply.email} <i className="arrow-icon">↗</i>
              </a>
            </div>
            <p className="car-apply-note">{apply.note}</p>
            {apply.privacyNote && (
              <p className="car-apply-note car-apply-note--fine">{apply.privacyNote}</p>
            )}
          </Reveal>
        </Container>
      </section>
    </>
  );
}
