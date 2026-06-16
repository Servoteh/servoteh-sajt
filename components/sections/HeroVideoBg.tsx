"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Pozadinski video za hero sekcije (isti obrazac kao homepage Hero).
 * Ako video ne učita u 4s ili pukne, pada na statičnu fallback teksturu.
 * Vizuelni izgled (opacity, overlay) definiše se u globals.css preko `wrapClassName`.
 */
export function HeroVideoBg({
  src = "/assets/hero1.mp4",
  poster = "/assets/hero-poster.jpg",
  wrapClassName = "hero-video-wrap",
  opacity = 0.55,
}: {
  src?: string;
  poster?: string;
  wrapClassName?: string;
  opacity?: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showFallback, setShowFallback] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onCanPlay = () => {
      video.style.opacity = String(opacity);
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
  }, [opacity]);

  return (
    <div className={wrapClassName}>
      <video ref={videoRef} autoPlay muted loop playsInline poster={poster}>
        <source src={src} type="video/mp4" />
      </video>
      <div className="hero-fallback" style={{ display: showFallback ? "block" : "none" }} />
    </div>
  );
}
