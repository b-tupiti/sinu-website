"use client";
import { useState } from "react";
import Link from "next/link";

export function HeroAnnouncement() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-label="Announcements"
      className="hero-announcement"
      style={{
        position: "absolute",
        left: "50%",
        bottom: 80,
        transform: "translateX(-50%)",
        zIndex: 7,
        width: "min(var(--container), calc(100vw - 48px))",
        boxSizing: "border-box",
        background: "var(--surface-card)",
        borderRadius: "var(--r-pill)",
        padding: "12px 22px",
        display: "flex",
        alignItems: "center",
        gap: 18,
        flexWrap: "wrap",
        boxShadow: "0 14px 34px rgba(12,28,54,.20)",
      }}
    >
      <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--teal-700)", whiteSpace: "nowrap" }}>
        Announcements
      </span>
      <Link href="/events" style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, fontWeight: 600, color: "var(--text-heading)", textDecoration: "none", whiteSpace: "nowrap" }}>
        SINU 2026 Open Day programme
      </Link>
      <span className="hero-announcement-divider" style={{ color: "var(--text-faint)" }}>·</span>
      <Link href="/admissions" className="hero-announcement-secondary" style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, color: "var(--text-body)", textDecoration: "none", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", minWidth: 0 }}>
        Scholarship application — submission of required documents
      </Link>
      <span style={{ flex: 1 }} />
      <Link href="/events" style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "var(--teal-700)", textDecoration: "none", whiteSpace: "nowrap" }}>
        All announcements →
      </Link>
      <button
        aria-label="Dismiss announcements"
        onClick={() => setOpen(false)}
        style={{ border: "none", background: "transparent", cursor: "pointer", color: "var(--text-faint)", padding: 0, lineHeight: 1, fontSize: 22, flex: "none" }}
      >
        ×
      </button>
    </div>
  );
}
