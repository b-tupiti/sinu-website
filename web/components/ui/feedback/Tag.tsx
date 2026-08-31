"use client";
import { useState, type CSSProperties, type ReactNode } from "react";

export interface TagProps {
  active?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  style?: CSSProperties;
}

export function Tag({ active, onClick, children, style }: TagProps) {
  const [h, setH] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-sans)",
        fontSize: 13.5,
        fontWeight: 500,
        padding: "6px 14px",
        borderRadius: "var(--r-pill)",
        cursor: onClick ? "pointer" : "default",
        border: "1px solid " + (active ? "var(--accent-teal-strong)" : "var(--line-strong)"),
        background: active ? "var(--accent-teal-tint)" : h && onClick ? "var(--surface-sunken)" : "var(--surface-card)",
        color: active ? "var(--teal-700)" : "var(--text-body)",
        transition: "background var(--dur-fast) var(--ease-out)",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
