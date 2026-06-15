"use client";

import { useState } from "react";

export type Hotspot = {
  left: string;
  top: string;
  edge?: "left" | "right";
  label: string;
};

/**
 * Slika sa interaktivnim hotspot tačkama.
 * Desktop: hover prikazuje tooltip (CSS). Mobilni: tap toggluje .hs-active (JS).
 */
export function HotspotImage({
  src,
  alt,
  hotspots,
}: {
  src: string;
  alt: string;
  hotspots: Hotspot[];
}) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="hs-wrap">
      <div className="ds-media-placeholder ds-media-placeholder--dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="ds-media-img" loading="lazy" />
      </div>
      {hotspots.map((h, i) => {
        const classes = ["hs-dot"];
        if (h.edge === "left") classes.push("hs-edge-left");
        if (h.edge === "right") classes.push("hs-edge-right");
        if (active === i) classes.push("hs-active");
        return (
          <button
            key={h.label}
            type="button"
            className={classes.join(" ")}
            style={{ left: h.left, top: h.top }}
            aria-label={h.label}
            aria-expanded={active === i}
            onClick={() => setActive((prev) => (prev === i ? null : i))}
          >
            <div className="hs-tooltip">{h.label}</div>
          </button>
        );
      })}
    </div>
  );
}
