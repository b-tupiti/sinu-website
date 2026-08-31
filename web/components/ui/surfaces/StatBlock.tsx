import type { CSSProperties } from "react";

export interface StatBlockProps {
  value: string;
  label: string;
  onNavy?: boolean;
  style?: CSSProperties;
}

export function StatBlock({ value, label, onNavy, style }: StatBlockProps) {
  return (
    <div style={{ display: "grid", gap: 4, ...style }}>
      <span
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 500,
          fontSize: "var(--t-h1)",
          lineHeight: 1,
          letterSpacing: "-0.015em",
          color: onNavy ? "var(--text-on-navy)" : "var(--text-heading)",
        }}
      >
        {value}
      </span>
      <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--t-sm)", color: onNavy ? "rgba(243,246,251,.72)" : "var(--text-muted)" }}>{label}</span>
    </div>
  );
}
