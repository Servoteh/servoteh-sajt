"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PinIcon, NavigateIcon } from "@/components/icons";
import { ui as uiSr } from "@/content/sr/ui";
import type { SiteContent, UiDict } from "@/lib/types";

const mapIcons = [<PinIcon key="pin" />, <NavigateIcon key="nav" />];

function isExternal(href: string) {
  return href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
}

// Uklanja eventualni završni "/" radi pouzdanog poređenja sa rutom.
function normalize(path: string) {
  return path.length > 1 ? path.replace(/\/$/, "") : path;
}

function FooterLink({ href, label, current }: { href: string; label: string; current?: boolean }) {
  if (current) {
    return (
      <span className="is-current" aria-current="page">
        {label}
      </span>
    );
  }
  if (isExternal(href)) {
    const external = href.startsWith("http");
    return (
      <a href={href} {...(external ? { target: "_blank", rel: "noopener" } : {})}>
        {label}
      </a>
    );
  }
  return <Link href={href}>{label}</Link>;
}

export function Footer({ site, ui = uiSr }: { site: SiteContent; ui?: UiDict }) {
  const f = site.footer;
  const pathname = normalize(usePathname() ?? "/");
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo-footer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/logo-servoteh-wordmark.png" alt="SERVOTEH" />
            </div>
            <address>
              {f.address.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < f.address.length - 1 && <br />}
                </span>
              ))}
            </address>
            <a href={`mailto:${f.email}`} aria-label={`Email: ${f.email}`}>{f.email}</a>
            <a href={f.phone.href} aria-label={`Telefon: ${f.phone.label}`}>{f.phone.label}</a>
            <div className="footer-map">
              {f.maps.map((m, i) => (
                <a key={m.href} href={m.href} target="_blank" rel="noopener" className="footer-map-btn">
                  {mapIcons[i]}
                  {m.label}
                </a>
              ))}
            </div>
            <div className="footer-socials">
              {f.socials.map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener" aria-label={s.label}>
                  {s.label}
                </a>
              ))}
            </div>
            <div className="iso-badge">
              <div className="iso-badge-icon">✓</div>
              {f.iso}
            </div>
          </div>

          {f.columns.map((col) => (
            <div className="footer-col" key={col.heading}>
              <h5>{col.heading}</h5>
              <ul>
                {col.links.map((link) => (
                  <li key={`${col.heading}-${link.href}`}>
                    <FooterLink
                      href={link.href}
                      label={link.label}
                      current={!isExternal(link.href) && !link.href.includes("#") && normalize(link.href) === pathname}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>{f.copyright}</span>
            {f.legal && <span className="footer-legal">{f.legal}</span>}
          </div>
          <div className="footer-bottom-right">
            {f.privacy && <Link href={f.privacy.href}>{f.privacy.label}</Link>}
            <a href={f.siteUrl.href} aria-label={ui.footer.officialSite}>
              {f.siteUrl.label}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
