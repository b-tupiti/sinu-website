"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { SiteHeaderPage } from "./SiteHeader";

const NAV: [string, string, SiteHeaderPage][] = [
  ["Academics", "/faculties", "program"],
  ["Admissions", "/admissions", "admissions"],
  ["News & events", "/events", "events"],
  ["Directory", "/directory", "directory"],
  ["About", "/about", "about"],
];

const QUICK: [string, string][] = [
  ["Alumni", "/"],
  ["Faculty", "/directory"],
  ["Programs", "/courses"],
  ["Moodle", "/admissions"],
  ["Student mail", "/admissions"],
];

export interface SiteHeaderMobileProps {
  page: SiteHeaderPage;
  dark?: boolean;
}

export function SiteHeaderMobile({ page, dark }: SiteHeaderMobileProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const barBg = dark ? "transparent" : "var(--surface-card)";
  const iconColor = dark ? "#fff" : "var(--text-heading)";
  const isActive = (id: SiteHeaderPage) => page === id || (id === "program" && page === "catalog");

  return (
    <header style={dark ? { position: "relative", zIndex: 50 } : { position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ background: barBg, borderBottom: dark ? "1px solid rgba(255,255,255,.12)" : "1px solid var(--line-2)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px" }}>
          <Link href="/" style={{ display: "inline-flex", flex: "none" }}>
            <Image
              src={dark ? "/sinu-logo-white.png" : "/sinu-logo-blue.png"}
              alt="Solomon Islands National University"
              width={48}
              height={48}
              priority
              style={{ display: "block" }}
            />
          </Link>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            style={{ border: "none", background: "transparent", cursor: "pointer", padding: 8, display: "inline-flex", alignItems: "center", justifyContent: "center", color: iconColor }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "var(--navy-800)",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            padding: "16px 20px 24px",
            overflowY: "auto",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--sp-8)" }}>
            <Image src="/sinu-logo-white.png" alt="SINU" width={44} height={44} style={{ display: "block" }} />
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              style={{ border: "none", background: "transparent", cursor: "pointer", padding: 8, color: "#fff", display: "inline-flex" }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <nav style={{ display: "grid", gap: 2, marginBottom: "var(--sp-8)" }}>
            {NAV.map(([label, href, id]) => {
              const on = isActive(id);
              return (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  style={{
                    padding: "16px 4px",
                    fontFamily: "var(--font-serif)",
                    fontWeight: 500,
                    fontSize: 26,
                    lineHeight: 1.1,
                    color: on ? "#fff" : "rgba(255,255,255,.88)",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(255,255,255,.1)",
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          <div style={{ marginBottom: "var(--sp-8)" }}>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--teal-300)", marginBottom: 12 }}>
              Quick links
            </div>
            <div style={{ display: "grid", gap: 4 }}>
              {QUICK.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  style={{ padding: "10px 4px", fontFamily: "var(--font-sans)", fontSize: 15, color: "rgba(255,255,255,.85)", textDecoration: "none" }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div style={{ marginTop: "auto", display: "grid", gap: 14 }}>
            <Link
              href="/admissions"
              onClick={() => setOpen(false)}
              style={{
                display: "inline-flex",
                justifyContent: "center",
                background: "#fff",
                color: "var(--navy-800)",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: 15,
                padding: "14px 24px",
                borderRadius: "var(--r-pill)",
                textDecoration: "none",
              }}
            >
              Apply now
            </Link>
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,.7)" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.7 2.1z" />
              </svg>
              (+677) 42600
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
