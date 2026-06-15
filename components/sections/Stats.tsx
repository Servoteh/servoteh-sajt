import { Reveal } from "@/components/Reveal";
import type { HomeContent } from "@/lib/types";

export function Stats({ stats }: { stats: HomeContent["stats"] }) {
  return (
    <section id="stats">
      <div className="stats-inner container">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1} className="stat-item">
            <div
              className={
                stat.variant === "defence" ? "stat-number stat-number--defence" : "stat-number"
              }
            >
              {stat.value}
              {stat.suffix && <span>{stat.suffix}</span>}
            </div>
            <div className="stat-label">{stat.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
