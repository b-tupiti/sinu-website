"use client";
import { useState, type CSSProperties } from "react";

export interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  size?: "md" | "lg";
  style?: CSSProperties;
}

export function SearchBar({ value, onChange, onSubmit, placeholder = "Search courses, programs, people…", size = "md", style }: SearchBarProps) {
  const [foc, setFoc] = useState(false);
  const big = size === "lg";
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.(value ?? "");
      }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: big ? "6px 6px 6px 18px" : "4px 4px 4px 14px",
        background: "var(--surface-card)",
        border: "1px solid " + (foc ? "var(--accent-teal)" : "var(--line-strong)"),
        borderRadius: "var(--r-pill)",
        boxShadow: foc ? "var(--ring)" : "var(--sh-1)",
        transition: "box-shadow var(--dur-fast) var(--ease-out)",
        ...style,
      }}
    >
      <svg width={big ? 20 : 17} height={big ? 20 : 17} viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.75" strokeLinecap="round">
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <input
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onFocus={() => setFoc(true)}
        onBlur={() => setFoc(false)}
        placeholder={placeholder}
        style={{ flex: 1, border: "none", outline: "none", background: "transparent", fontFamily: "var(--font-sans)", fontSize: big ? 16 : 14.5, color: "var(--text-heading)", padding: "8px 0" }}
      />
      <button
        type="submit"
        style={{
          border: "none",
          cursor: "pointer",
          fontFamily: "var(--font-sans)",
          fontWeight: 600,
          fontSize: big ? 15 : 13.5,
          color: "var(--text-on-navy)",
          background: "var(--brand-primary)",
          padding: big ? "10px 22px" : "8px 16px",
          borderRadius: "var(--r-pill)",
        }}
      >
        Search
      </button>
    </form>
  );
}
