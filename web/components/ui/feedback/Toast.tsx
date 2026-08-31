import type { CSSProperties, ReactNode } from "react";

export interface ToastProps {
  tone?: "success" | "info" | "warning" | "danger";
  children?: ReactNode;
  onDismiss?: () => void;
  style?: CSSProperties;
}

const ICONS: Record<string, string> = {
  success: "M20 6 9 17l-5-5",
  info: "M12 16v-4m0-4h.01",
  warning: "M12 9v4m0 4h.01",
  danger: "M18 6 6 18M6 6l12 12",
};
const COLORS: Record<string, string> = {
  success: "var(--success)",
  info: "var(--info)",
  warning: "var(--warning)",
  danger: "var(--danger)",
};

export function Toast({ tone = "info", children, onDismiss, style }: ToastProps) {
  return (
    <div
      role="status"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        background: "var(--surface-card)",
        border: "1px solid var(--line-2)",
        borderLeft: "3px solid " + COLORS[tone],
        borderRadius: "var(--r-md)",
        boxShadow: "var(--sh-3)",
        padding: "12px 16px",
        fontFamily: "var(--font-sans)",
        fontSize: 14.5,
        color: "var(--text-heading)",
        maxWidth: 420,
        ...style,
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS[tone]} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none" }}>
        <path d={ICONS[tone]} />
        <circle cx="12" cy="12" r="10" opacity={tone === "success" || tone === "danger" ? 0 : 1} />
      </svg>
      <span style={{ flex: 1 }}>{children}</span>
      {onDismiss && (
        <button onClick={onDismiss} aria-label="Dismiss" style={{ border: "none", background: "transparent", cursor: "pointer", color: "var(--text-faint)", padding: 2 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}
