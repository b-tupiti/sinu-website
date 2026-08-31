"use client";
import { useState, type InputHTMLAttributes, type CSSProperties } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  style?: CSSProperties;
  inputStyle?: CSSProperties;
}

export function Input({ label, hint, error, style, inputStyle, ...rest }: InputProps) {
  const [foc, setFoc] = useState(false);
  return (
    <label style={{ display: "grid", gap: 6, fontFamily: "var(--font-sans)", ...style }}>
      {label && <span style={{ fontSize: "var(--t-sm)", fontWeight: 600, color: "var(--text-heading)" }}>{label}</span>}
      <input
        onFocus={() => setFoc(true)}
        onBlur={() => setFoc(false)}
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 15,
          padding: "10px 14px",
          color: "var(--text-heading)",
          background: "var(--surface-card)",
          border: "1px solid " + (error ? "var(--danger)" : foc ? "var(--accent-teal)" : "var(--line-strong)"),
          borderRadius: "var(--r-md)",
          outline: "none",
          boxShadow: foc ? "var(--ring)" : "none",
          transition: "box-shadow var(--dur-fast) var(--ease-out)",
          ...inputStyle,
        }}
        {...rest}
      />
      {(error || hint) && <span style={{ fontSize: "var(--t-xs)", color: error ? "var(--danger)" : "var(--text-muted)" }}>{error || hint}</span>}
    </label>
  );
}
