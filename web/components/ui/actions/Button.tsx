"use client";
import { useState, type CSSProperties, type ReactNode } from "react";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  disabled?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
  type?: "button" | "submit" | "reset";
}

const VARIANTS = {
  primary: { bg: "var(--brand-primary)", hv: "var(--brand-primary-strong)", fg: "var(--text-on-navy)", bd: "transparent" },
  secondary: { bg: "transparent", hv: "var(--brand-primary-tint)", fg: "var(--brand-primary)", bd: "var(--line-strong)" },
  ghost: { bg: "transparent", hv: "var(--brand-primary-tint)", fg: "var(--brand-primary)", bd: "transparent" },
  danger: { bg: "var(--danger)", hv: "#8f2b24", fg: "#fff", bd: "transparent" },
} as const;

const SIZES = {
  sm: { p: "8px 18px", f: 13.5 },
  md: { p: "11px 24px", f: 15 },
  lg: { p: "14px 30px", f: 16 },
} as const;

export function Button({ variant = "primary", size = "md", icon, disabled, children, style, ...rest }: ButtonProps) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setActive(false);
      }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        padding: s.p,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: s.f,
        lineHeight: 1.2,
        color: disabled ? "var(--text-faint)" : v.fg,
        background: disabled ? "var(--surface-sunken)" : hover && !disabled ? v.hv : v.bg,
        border: "1px solid " + (disabled ? "transparent" : v.bd),
        borderRadius: "var(--r-pill)",
        cursor: disabled ? "default" : "pointer",
        transform: active && !disabled ? "scale(.98)" : "none",
        transition: "background var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-out)",
        ...style,
      }}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
}
