"use client";
import { useState, type CSSProperties } from "react";

export interface EventCardProps {
  day: string | number;
  month: string;
  title: string;
  time?: string;
  location?: string;
  tag?: string;
  onClick?: () => void;
  style?: CSSProperties;
}

export function EventCard({ day, month, title, time, location, tag, onClick, style }: EventCardProps) {
  const [h, setH] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "flex",
        gap: 16,
        alignItems: "flex-start",
        background: "var(--surface-card)",
        border: "1px solid " + (h ? "var(--line-strong)" : "var(--line-2)"),
        borderRadius: "var(--r-lg)",
        boxShadow: h ? "var(--sh-2)" : "var(--sh-1)",
        padding: "var(--sp-4) var(--sp-5)",
        cursor: onClick ? "pointer" : "default",
        transition: "box-shadow var(--dur-base) var(--ease-out)",
        ...style,
      }}
    >
      <div style={{ flex: "none", width: 56, textAlign: "center", background: "var(--brand-primary-tint)", borderRadius: "var(--r-md)", padding: "8px 0" }}>
        <div style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 26, lineHeight: 1, color: "var(--brand-primary)" }}>{day}</div>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: 3 }}>
          {month}
        </div>
      </div>
      <div style={{ display: "grid", gap: 5, minWidth: 0 }}>
        {tag && (
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 11.5, fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent-teal-strong)" }}>
            {tag}
          </span>
        )}
        <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 16.5, lineHeight: 1.3, color: h ? "var(--link-hover)" : "var(--text-heading)" }}>{title}</div>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--t-sm)", color: "var(--text-muted)" }}>{[time, location].filter(Boolean).join(" · ")}</div>
      </div>
    </div>
  );
}
