"use client";

import { useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { ui as uiSr } from "@/content/sr/ui";
import type { HomeContent, UiDict } from "@/lib/types";

export function Kapaciteti({ content, ui = uiSr }: { content: HomeContent["kapaciteti"]; ui?: UiDict }) {
  const slides = content.slides;
  const [current, setCurrent] = useState(0);
  const startX = useRef(0);
  const dragging = useRef(false);
  const dragDelta = useRef(0);

  const goTo = (idx: number) => setCurrent(((idx % slides.length) + slides.length) % slides.length);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(current - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(current + 1);
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    dragging.current = true;
    dragDelta.current = 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!dragging.current) return;
    dragDelta.current = e.touches[0].clientX - startX.current;
  };
  const onTouchEnd = () => {
    if (!dragging.current) return;
    dragging.current = false;
    if (Math.abs(dragDelta.current) > 48) goTo(dragDelta.current < 0 ? current + 1 : current - 1);
  };

  return (
    <section id="kapaciteti">
      <Container wide>
        <div className="kap-layout">
          <div className="kap-text">
            <Reveal>
              <div className="section-label">{content.label}</div>
            </Reveal>
            <Reveal>
              <h2>{content.title}</h2>
            </Reveal>
            <Reveal>
              <p>{content.body}</p>
            </Reveal>
            {content.body2 && (
              <Reveal>
                <p>{content.body2}</p>
              </Reveal>
            )}
            <Reveal delay={0.1}>
              <ul className="kap-points">
                {content.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div
              className="kap-slider-wrap"
              tabIndex={0}
              onKeyDown={onKeyDown}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              role="group"
              aria-roledescription="slajder"
              aria-label={ui.slider.gallery}
            >
              <div className="kap-slides" style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides.map((s, i) => (
                  <div className="kap-slide" key={s.src}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.src} alt={s.alt} loading={i === 0 ? "eager" : "lazy"} />
                    <div className="kap-caption">{s.caption}</div>
                  </div>
                ))}
              </div>
              <button
                className="kap-arrow kap-arrow--prev"
                onClick={() => goTo(current - 1)}
                aria-label={ui.slider.prev}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M11 14L6 9l5-5" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                className="kap-arrow kap-arrow--next"
                onClick={() => goTo(current + 1)}
                aria-label={ui.slider.next}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M7 4l5 5-5 5" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="kap-dots">
              {slides.map((s, i) => (
                <button
                  key={s.src}
                  className={i === current ? "kap-dot active" : "kap-dot"}
                  onClick={() => goTo(i)}
                  aria-label={`${ui.slider.slide} ${i + 1}`}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
