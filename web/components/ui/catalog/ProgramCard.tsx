"use client";
import { useState, type CSSProperties } from "react";

export interface ProgramCardProps {
  title: string;
  school?: string;
  level?: string;
  duration?: string;
  intake?: string;
  featured?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}

export function ProgramCard({ title, school, level, duration, intake, featured, onClick, style }: ProgramCardProps) {
  const [h, setH] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: "var(--surface-card)",
        border: "1px solid " + (h ? "var(--line-strong)" : "var(--line-2)"),
        borderRadius: "var(--r-lg)",
        boxShadow: h ? "var(--sh-2)" : "var(--sh-1)",
        padding: "var(--sp-6)",
        cursor: onClick ? "pointer" : "default",
        transition: "box-shadow var(--dur-base) var(--ease-out)",
        display: "grid",
        gap: 12,
        alignContent: "start",
        ...style,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" }}>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--t-eyebrow)",
            fontWeight: 600,
            letterSpacing: "var(--ls-eyebrow)",
            textTransform: "uppercase",
            color: "var(--accent-teal-strong)",
          }}
        >
          {school}
        </span>
        {featured && (
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              fontWeight: 600,
              color: "var(--gold-600)",
              background: "var(--accent-gold-tint)",
              padding: "3px 10px",
              borderRadius: "var(--r-pill)",
            }}
          >
            Featured
          </span>
        )}
      </div>
      <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 20, lineHeight: 1.25, color: h ? "var(--link-hover)" : "var(--text-heading)", transition: "color var(--dur-fast) var(--ease-out)" }}>
        {title}
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {[level, duration, intake].filter(Boolean).map((x) => (
          <span key={x} style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-body)", background: "var(--surface-sunken)", padding: "4px 10px", borderRadius: "var(--r-pill)" }}>
            {x}
          </span>
        ))}
      </div>
    </div>
  );
}
