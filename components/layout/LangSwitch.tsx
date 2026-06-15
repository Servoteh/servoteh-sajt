import Link from "next/link";

type LangSwitchProps = {
  current: "SR" | "EN";
  otherHref: string;
  className?: string;
};

/**
 * SR | EN prebacivač. Aktivni jezik je <span class="lang-active">,
 * drugi je <Link>. Selektor .lang-active je element-agnostičan.
 */
export function LangSwitch({ current, otherHref, className }: LangSwitchProps) {
  const other = current === "SR" ? "EN" : "SR";
  return (
    <div className={className ? `lang-switch ${className}` : "lang-switch"} aria-label="Izbor jezika">
      <span className="lang-active">{current}</span>
      <span className="lang-sep">|</span>
      <Link href={otherHref} hrefLang={other.toLowerCase()}>
        {other}
      </Link>
    </div>
  );
}
