"use client";
import { useState, type CSSProperties } from "react";

export interface PersonCardProps {
  name: string;
  role?: string;
  school?: string;
  email?: string;
  initials?: string;
  onClick?: () => void;
  style?: CSSProperties;
}

export function PersonCard({ name, role, school, email, initials, onClick, style }: PersonCardProps) {
  const [h, setH] = useState(false);
  const init = initials || name.split(" ").map((w) => w[0]).slice(0, 2).join("");
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "flex",
        gap: 14,
        alignItems: "center",
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
      <div
        style={{
          flex: "none",
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "var(--brand-primary)",
          color: "var(--text-on-navy)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-sans)",
          fontWeight: 600,
          fontSize: 16,
        }}
      >
        {init}
      </div>
      <div style={{ display: "grid", gap: 2, minWidth: 0 }}>
        <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 15.5, color: "var(--text-heading)" }}>{name}</div>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--t-sm)", color: "var(--text-body)" }}>
          {role}
          {school ? " · " + school : ""}
        </div>
        {email && (
          <a href={"mailto:" + email} style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: "var(--link)", textDecoration: "none" }}>
            {email}
          </a>
        )}
      </div>
    </div>
  );
}
