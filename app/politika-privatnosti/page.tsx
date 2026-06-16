import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/sr/site";
import { privacy as c } from "@/content/sr/privacy";

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
};

export default function PrivacyPage() {
  return (
    <>
      <Header site={site} />
      <main>
        <section id="legal" className="legal-page">
          <Container>
            <Reveal className="legal-head">
              <h1>{c.title}</h1>
              <p className="legal-updated">Poslednja izmena: {c.updated}</p>
              <p className="legal-intro">{c.intro}</p>
            </Reveal>

            {c.sections.map((s) => (
              <Reveal className="legal-section" key={s.heading}>
                <h2>{s.heading}</h2>
                {s.paragraphs?.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {s.items && (
                  <ul>
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </Container>
        </section>
      </main>
      <Footer site={site} />
    </>
  );
}
