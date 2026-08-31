"use client";
import { useState } from "react";
import Link from "next/link";

export interface FeaturedCourseCardProps {
  code: string;
  school: string;
  title: string;
  blurb: string;
  duration?: string;
  level: string;
  href: string;
}

export function FeaturedCourseCard({ code, school, title, blurb, duration, level, href }: FeaturedCourseCardProps) {
  const [h, setH] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        background: "var(--surface-card)",
        border: "1px solid " + (h ? "var(--line-strong)" : "var(--line-2)"),
        borderRadius: "var(--r-xl)",
        boxShadow: h ? "0 16px 40px rgba(12,28,54,.10)" : "var(--sh-1)",
        transform: h ? "translateY(-3px)" : "none",
        transition: "all var(--dur-base) var(--ease-out)",
        cursor: "pointer",
        overflow: "hidden",
        textDecoration: "none",
      }}
    >
      <span style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "var(--accent-teal)", transform: h ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform var(--dur-base) var(--ease-out)" }} />
      <div style={{ padding: "26px 26px 0", flex: 1 }}>
        <div style={{ marginBottom: 14, minHeight: 18 }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--t-eyebrow)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent-teal-strong)", whiteSpace: "nowrap" }}>
            {school}
          </span>
        </div>
        <h3 style={{ margin: "0 0 10px", fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 23, lineHeight: 1.2, letterSpacing: "-0.01em", color: h ? "var(--link-hover)" : "var(--text-heading)", transition: "color var(--dur-fast) var(--ease-out)" }}>
          {title}
        </h3>
        <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: 14.5, lineHeight: 1.6, color: "var(--text-muted)" }}>{blurb}</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, margin: "22px 26px 0", padding: "14px 0 22px", borderTop: "1px solid var(--line-1)" }}>
        <div style={{ display: "flex", flexWrap: "nowrap", gap: 8, fontFamily: "var(--font-mono)", fontSize: 12.5, fontWeight: 500, color: "var(--text-body)", whiteSpace: "nowrap", minWidth: 0 }}>
          <span>{code}</span>
          <span style={{ color: "var(--text-faint)" }}>·</span>
          <span>{level}</span>
          {duration && (
            <>
              <span style={{ color: "var(--text-faint)" }}>·</span>
              <span>{duration}</span>
            </>
          )}
        </div>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 30,
            height: 30,
            borderRadius: "50%",
            background: h ? "var(--brand-primary)" : "var(--surface-sunken)",
            color: h ? "#fff" : "var(--text-muted)",
            transition: "all var(--dur-base) var(--ease-out)",
            flex: "none",
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
