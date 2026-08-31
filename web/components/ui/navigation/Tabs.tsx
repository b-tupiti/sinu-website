"use client";
import type { CSSProperties } from "react";

export interface TabsProps {
  items: string[];
  active?: string;
  onChange?: (item: string) => void;
  style?: CSSProperties;
}

export function Tabs({ items = [], active, onChange, style }: TabsProps) {
  return (
    <div role="tablist" style={{ display: "flex", gap: 4, borderBottom: "1px solid var(--line-2)", fontFamily: "var(--font-sans)", ...style }}>
      {items.map((it) => {
        const on = it === active;
        return (
          <button
            key={it}
            role="tab"
            aria-selected={on}
            onClick={() => onChange?.(it)}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              padding: "10px 16px 12px",
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              fontWeight: on ? 600 : 500,
              color: on ? "var(--text-heading)" : "var(--text-muted)",
              boxShadow: on ? "inset 0 -2.5px 0 var(--accent-teal-strong)" : "none",
              transition: "color var(--dur-fast) var(--ease-out)",
            }}
          >
            {it}
          </button>
        );
      })}
    </div>
  );
}
