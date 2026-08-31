"use client";
import type { CSSProperties } from "react";

export interface RadioProps {
  label?: string;
  checked?: boolean;
  onSelect?: () => void;
  name?: string;
  disabled?: boolean;
  style?: CSSProperties;
}

export function Radio({ label, checked, onSelect, name, disabled, style }: RadioProps) {
  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        cursor: disabled ? "default" : "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        color: disabled ? "var(--text-faint)" : "var(--text-body)",
        ...style,
      }}
    >
      <span
        role="radio"
        aria-checked={!!checked}
        data-name={name}
        onClick={() => !disabled && onSelect?.()}
        style={{
          width: 20,
          height: 20,
          flex: "none",
          borderRadius: "50%",
          border: checked ? "6px solid var(--brand-primary)" : "1.5px solid var(--line-strong)",
          background: "var(--surface-card)",
          boxSizing: "border-box",
          transition: "border var(--dur-fast) var(--ease-out)",
        }}
      />
      {label}
    </label>
  );
}
