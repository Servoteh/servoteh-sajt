"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { HomeContent } from "@/lib/types";

export function Hero({ content }: { content: HomeContent["hero"] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showFallback, setShowFallback] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onCanPlay = () => {
      video.style.opacity = "0.55";
      setShowFallback(false);
    };
    const onError = () => {
      video.style.display = "none";
      setShowFallback(true);
    };

    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("error", onError);

    // Ako video ne krene u 4s, ostavi fallback teksturu.
    const timeout = window.setTimeout(() => {
      if (video.readyState < 3) {
        video.style.display = "none";
        setShowFallback(true);
      }
    }, 4000);

    return () => {
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("error", onError);
      window.clearTimeout(timeout);
    };
  }, []);

  const anim = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section id="hero">
      <div className="hero-video-wrap">
        <video ref={videoRef} autoPlay muted loop playsInline poster="/assets/hero-poster.jpg">
          <source src="/assets/hero1.mp4" type="video/mp4" />
        </video>
        <div className="hero-fallback" style={{ display: showFallback ? "block" : "none" }} />
      </div>

      <div className="hero-content">
        <motion.div className="hero-eyebrow" {...anim(0.2)}>
          {content.eyebrow}
        </motion.div>
        <motion.h1 className="hero-title" {...anim(0.35)}>
          {content.title}
        </motion.h1>
        <motion.p className="hero-subtitle" {...anim(0.5)}>
          {content.subtitle}
        </motion.p>
        <motion.div className="hero-cta" {...anim(0.65)}>
          <Link href={content.primaryCta.href} className="btn btn-primary">
            {content.primaryCta.label} <i className="arrow-icon">↗</i>
          </Link>
          <Link href={content.secondaryCta.href} className="btn btn-secondary">
            {content.secondaryCta.label}
          </Link>
        </motion.div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        <span>{content.scrollLabel}</span>
      </div>
    </section>
  );
}
