"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
// LangSwitch je privremeno uklonjen iz prikaza (EN faza) — import će se vratiti sa njim.
import type { SiteContent } from "@/lib/types";

export function Header({ site }: { site: SiteContent }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
            <Link href="/" className="logo" aria-label="Servoteh početna">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/logo-servoteh-wordmark.png" alt="SERVOTEH" />
            </Link>

            <nav className="main-nav" aria-label="Glavna navigacija">
              {site.nav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* EN prebacivač sakriven do Faze 4 (EN rute još ne postoje → /en baca 404).
                Vraća se uklanjanjem ovog komentara kad EN verzija bude gotova. */}
            {/* <LangSwitch current={site.langSwitch.current} otherHref={site.langSwitch.otherHref} /> */}

            <Link href={site.ctaPrimary.href} className="btn btn-primary header-cta">
              {site.ctaPrimary.label} <i className="arrow-icon">↗</i>
            </Link>

            <button
              className={menuOpen ? "hamburger open" : "hamburger"}
              aria-label="Otvori meni"
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

      <nav className={menuOpen ? "mobile-nav open" : "mobile-nav"} aria-label="Mobilna navigacija">
        {site.nav
          .filter((item) => item.label !== "Kontakt")
          .map((item) => (
            <Link key={item.href} href={item.href} onClick={close}>
              {item.label}
            </Link>
          ))}
        {/* EN prebacivač sakriven do Faze 4 (vidi napomenu iznad). */}
        {/* <LangSwitch
          current={site.langSwitch.current}
          otherHref={site.langSwitch.otherHref}
          className="mobile-lang-mt"
        /> */}
        <Link href={site.ctaPrimary.href} onClick={close} className="btn btn-primary">
          {site.ctaPrimary.label} ↗
        </Link>
      </nav>
    </>
  );
}
