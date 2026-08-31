import { Fragment, type CSSProperties } from "react";
import Link from "next/link";

export interface BreadcrumbProps {
  items: Array<string | { label: string; href?: string }>;
  style?: CSSProperties;
}

export function Breadcrumb({ items = [], style }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", fontFamily: "var(--font-sans)", fontSize: "var(--t-sm)", ...style }}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        const label = typeof it === "string" ? it : it.label;
        const href = typeof it === "string" ? undefined : it.href;
        return (
          <Fragment key={i}>
            {last ? (
              <span aria-current="page" style={{ color: "var(--text-heading)", fontWeight: 600 }}>
                {label}
              </span>
            ) : (
              <Link href={href || "#"} style={{ color: "var(--text-muted)", textDecoration: "none" }}>
                {label}
              </Link>
            )}
            {!last && (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--text-faint)" strokeWidth="1.75" strokeLinecap="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}
