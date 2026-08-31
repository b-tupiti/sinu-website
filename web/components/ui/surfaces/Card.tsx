"use client";
import { useState, type CSSProperties, type ReactNode } from "react";

export interface CardProps {
  hover?: boolean;
  padded?: boolean;
  children?: ReactNode;
  style?: CSSProperties;
  onClick?: () => void;
}

export function Card({ hover, padded = true, children, style, ...rest }: CardProps) {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: "var(--surface-card)",
        border: "1px solid " + (h && hover ? "var(--line-strong)" : "var(--line-2)"),
        borderRadius: "var(--r-lg)",
        boxShadow: h && hover ? "var(--sh-2)" : "var(--sh-1)",
        padding: padded ? "var(--sp-6)" : 0,
        transform: h && hover ? "translateY(-2px)" : "none",
        transition: "box-shadow var(--dur-base) var(--ease-out),border var(--dur-base) var(--ease-out),transform var(--dur-base) var(--ease-out)",
        cursor: hover ? "pointer" : "default",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
