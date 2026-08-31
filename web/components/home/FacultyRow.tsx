"use client";
import { useState } from "react";
import Link from "next/link";

export function FacultyRow({ abbr, name, note, href }: { abbr: string; name: string; note: string; href: string }) {
  const [h, setH] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "76px 1fr 30px",
        gap: 22,
        alignItems: "center",
        padding: "20px 12px",
        borderBottom: "1px solid var(--line-2)",
        cursor: "pointer",
        background: h ? "var(--surface-sunken)" : "transparent",
        transition: "background var(--dur-fast) var(--ease-out)",
        textDecoration: "none",
      }}
    >
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, fontWeight: 500, color: "var(--teal-700)", background: "var(--accent-teal-tint)", padding: "5px 0", borderRadius: "var(--r-sm)", textAlign: "center" }}>
        {abbr}
      </span>
      <span style={{ display: "grid", gap: 4, minWidth: 0 }}>
        <span style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 21, lineHeight: 1.2, color: h ? "var(--link-hover)" : "var(--text-heading)", transition: "color var(--dur-fast) var(--ease-out)" }}>
          Faculty of {name}
        </span>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)" }}>{note}</span>
      </span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={h ? "var(--brand-primary)" : "var(--text-faint)"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6" />
      </svg>
    </Link>
  );
}
