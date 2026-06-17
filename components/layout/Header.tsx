"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LangSwitch } from "@/components/layout/LangSwitch";
import { pairBySr, pairByEn } from "@/lib/routes";
import { ui as uiSr } from "@/content/sr/ui";
import type { SiteContent, UiDict } from "@/lib/types";

export function Header({ site, ui = uiSr }: { site: SiteContent; ui?: UiDict }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Po-strani tačan jezički prebacivač: par (sr↔en) iz trenutne putanje.
  // Fallback na site.langSwitch ako par nije nađen (npr. pathname još null).
  const rawPath = usePathname() ?? "/";
  const path = rawPath.length > 1 && !rawPath.endsWith("/") ? `${rawPath}/` : rawPath;
  const isEn = path === "/en/" || path.startsWith("/en/");
  const pair = isEn ? pairByEn(path) : pairBySr(path);
  const current: "SR" | "EN" = isEn ? "EN" : "SR";
  const otherHref = pair ? (isEn ? pair.sr : pair.en) : site.langSwitch.otherHref;
  const homeHref = isEn ? "/en/" : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header id="header" className={scrolled ? "scrolled" : undefined}>
        <div className="container">
          <div className="header-inner">
            <Link href={homeHref} className="logo" aria-label={ui.header.home}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/logo-servoteh-wordmark.png" alt="SERVOTEH" />
            </Link>

            <nav className="main-nav" aria-label={ui.header.mainNav}>
              {site.nav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>

            <LangSwitch
              current={current}
              otherHref={otherHref}
              ariaLabel={ui.header.lang}
            />

            <Link href={site.ctaPrimary.href} className="btn btn-primary header-cta">
              {site.ctaPrimary.label} <i className="arrow-icon">↗</i>
            </Link>

            <button
              className={menuOpen ? "hamburger open" : "hamburger"}
              aria-label={ui.header.openMenu}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <nav className={menuOpen ? "mobile-nav open" : "mobile-nav"} aria-label={ui.header.mobileNav}>
        {site.nav
          .filter((item) => !item.href.includes("#cta"))
          .map((item) => (
            <Link key={item.href} href={item.href} onClick={close}>
              {item.label}
            </Link>
          ))}
        <LangSwitch
          current={site.langSwitch.current}
          otherHref={site.langSwitch.otherHref}
          ariaLabel={ui.header.lang}
          className="mobile-lang-mt"
        />
        <Link href={site.ctaPrimary.href} onClick={close} className="btn btn-primary">
          {site.ctaPrimary.label} ↗
        </Link>
      </nav>
    </>
  );
}
