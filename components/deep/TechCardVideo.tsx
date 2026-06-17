"use client";

import { useState } from "react";
import { ui as uiSr } from "@/content/sr/ui";
import type { UiDict } from "@/lib/types";

/**
 * Medija-deo tech kartice sa diskretnim „klik-da-pusti" YouTube videom.
 * YouTube iframe (youtube-nocookie) učitava se tek na klik — bez kolačića
 * i skripti dok korisnik ne pokrene video (brzo, GDPR-čisto).
 */
export function TechCardVideo({
  img,
  alt,
  video,
  caption,
  ui = uiSr,
}: {
  img: string;
  alt: string;
  video: string;
  caption?: string;
  ui?: UiDict;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className="tech-card-iframe"
        src={`https://www.youtube-nocookie.com/embed/${video}?autoplay=1&rel=0`}
        title={alt}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <button type="button" className="tech-card-play" onClick={() => setPlaying(true)} aria-label={ui.media.playVideo}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt={alt} loading="lazy" />
      {caption && <span className="tech-card-caption">{caption}</span>}
      <span className="tech-card-play-icon" aria-hidden="true">▶</span>
    </button>
  );
}
