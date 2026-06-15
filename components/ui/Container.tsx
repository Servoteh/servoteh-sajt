import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  wide?: boolean;
  className?: string;
};

/** .container (max 1440px) ili .container-wide (min(94vw, 1680px)). */
export function Container({ children, wide = false, className }: ContainerProps) {
  const base = wide ? "container-wide" : "container";
  return <div className={className ? `${base} ${className}` : base}>{children}</div>;
}
