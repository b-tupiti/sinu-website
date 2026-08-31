"use client";
import { useState, type SelectHTMLAttributes, type CSSProperties } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options?: Array<string | { value: string; label: string }>;
  hint?: string;
  error?: string;
  style?: CSSProperties;
}

export function Select({ label, options = [], hint, error, style, ...rest }: SelectProps) {
  const [foc, setFoc] = useState(false);
  return (
    <label style={{ display: "grid", gap: 6, fontFamily: "var(--font-sans)", ...style }}>
      {label && <span style={{ fontSize: "var(--t-sm)", fontWeight: 600, color: "var(--text-heading)" }}>{label}</span>}
      <select
        onFocus={() => setFoc(true)}
        onBlur={() => setFoc(false)}
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 15,
          padding: "10px 12px",
          color: "var(--text-heading)",
          background: "var(--surface-card)",
          border: "1px solid " + (error ? "var(--danger)" : foc ? "var(--accent-teal)" : "var(--line-strong)"),
          borderRadius: "var(--r-md)",
          outline: "none",
          boxShadow: foc ? "var(--ring)" : "none",
        }}
        {...rest}
      >
        {options.map((o) => (typeof o === "string" ? <option key={o} value={o}>{o}</option> : <option key={o.value} value={o.value}>{o.label}</option>))}
      </select>
      {(error || hint) && <span style={{ fontSize: "var(--t-xs)", color: error ? "var(--danger)" : "var(--text-muted)" }}>{error || hint}</span>}
    </label>
  );
}
