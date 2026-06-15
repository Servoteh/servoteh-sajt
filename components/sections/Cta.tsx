import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { PinIcon, MailIcon, PhoneIcon, NavigateIcon } from "@/components/icons";
import type { HomeContent } from "@/lib/types";

const contactIcons = [<PinIcon key="pin" />, <MailIcon key="mail" />, <PhoneIcon key="phone" />];
const mapIcons = [<PinIcon key="m-pin" />, <NavigateIcon key="m-nav" />];

export function Cta({ content }: { content: HomeContent["cta"] }) {
  return (
    <section id="cta">
      <Container>
        <Reveal className="cta-grid">
          <div className="cta-text">
            <div className="section-label">{content.label}</div>
            <h2>{content.title}</h2>
            <p>{content.body}</p>
            <ContactForm />
          </div>

          <div className="cta-contact-card">
            <h4>{content.contactHeading}</h4>
            {content.contacts.map((c, i) => (
              <div className="cta-contact-item" key={c.label}>
                <div className="cta-contact-icon">{contactIcons[i]}</div>
                <div>
                  <div className="cta-contact-label">{c.label}</div>
                  <div className="cta-contact-value">
                    {c.href ? (
                      <a href={c.href}>{c.lines.join(" ")}</a>
                    ) : (
                      c.lines.map((line, j) => (
                        <span key={j}>
                          {line}
                          {j < c.lines.length - 1 && <br />}
                        </span>
                      ))
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="cta-map-btns">
              {content.mapButtons.map((b, i) => (
                <a key={b.label} href={b.href} target="_blank" rel="noopener" className="cta-map-btn">
                  {mapIcons[i]}
                  {b.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
