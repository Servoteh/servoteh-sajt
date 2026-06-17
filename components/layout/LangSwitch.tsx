import Link from "next/link";

type LangSwitchProps = {
  current: "SR" | "EN";
  otherHref: string;
  className?: string;
  ariaLabel?: string;
};

/**
 * SR | EN prebacivač. Aktivni jezik je <span class="lang-active">,
 * drugi je <Link>. Selektor .lang-active je element-agnostičan.
 */
export function LangSwitch({ current, otherHref, className, ariaLabel = "Izbor jezika" }: LangSwitchProps) {
  const other = current === "SR" ? "EN" : "SR";
  return (
    <div className={className ? `lang-switch ${className}` : "lang-switch"} aria-label={ariaLabel}>
      <span className="lang-active">{current}</span>{" "}
      <span className="lang-sep">|</span>{" "}
      <Link href={otherHref} hrefLang={other.toLowerCase()}>
        {other}
      </Link>
    </div>
  );
}
