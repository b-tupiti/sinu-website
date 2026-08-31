"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export type SiteHeaderPage = "home" | "program" | "catalog" | "admissions" | "events" | "directory";

export interface SiteHeaderProps {
  page: SiteHeaderPage;
  dark?: boolean;
}

interface NavItem {
  label: string;
  href: string;
  id: SiteHeaderPage;
  mega?: boolean;
}

// Keeps the primary nav to 4 items — everything else (About, Library, the
// old Students submenu) either lives on the homepage already or has no
// dedicated page yet, so it isn't worth a top-level slot.
const NAV: NavItem[] = [
  { label: "Academics", href: "/faculties", id: "program", mega: true },
  { label: "Admissions", href: "/admissions", id: "admissions" },
  { label: "News & events", href: "/events", id: "events" },
  { label: "Directory", href: "/directory", id: "directory" },
];

const QUICK: [string, string][] = [
  ["Alumni", "/"],
  ["Faculty", "/directory"],
  ["Programs", "/courses"],
  ["Moodle", "/admissions"],
  ["Student mail", "/admissions"],
];

// Static mirror of lib/cms/faculties.ts's slugs/abbrs — the mega menu is
// site chrome (would come from a nav/settings snippet in Wagtail), so it
// doesn't need to fetch the full faculty content query just to link out.
const FACULTY_LINKS = [
  { abbr: "FNMHS", name: "Nursing & Health", slug: "nursing-health" },
  { abbr: "FST", name: "Science & Technology", slug: "science-technology" },
  { abbr: "FEH", name: "Education", slug: "education" },
  { abbr: "FBTS", name: "Business & Management", slug: "business-management" },
  { abbr: "FAH", name: "Arts & Humanities", slug: "arts-humanities" },
];

export function SiteHeader({ page, dark }: SiteHeaderProps) {
  const [open, setOpen] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const linkColor = (on: boolean) => (dark ? (on ? "#fff" : "rgba(255,255,255,.78)") : on ? "var(--text-heading)" : "var(--text-body)");
  const barBg = dark ? "rgba(255,255,255,.06)" : "var(--navy-800)";
  const isActive = (it: NavItem) => page === it.id || (it.id === "program" && page === "catalog");

  return (
    <header ref={wrapperRef} style={dark ? { position: "relative", zIndex: 50 } : { position: "sticky", top: 0, zIndex: 50 }} onMouseLeave={() => setOpen(null)}>
      <div style={{ background: barBg, borderBottom: dark ? "1px solid rgba(255,255,255,.1)" : "none" }}>
        <div
          style={{
            maxWidth: "var(--container)",
            margin: "0 auto",
            padding: "7px 24px",
            display: "flex",
            alignItems: "center",
            gap: 18,
            flexWrap: "wrap",
            fontFamily: "var(--font-sans)",
            fontSize: 12.5,
            color: "rgba(243,246,251,.82)",
          }}
        >
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.7 2.1z" />
            </svg>
            (+677) 42600
          </span>
          <span style={{ flex: 1 }} />
          <nav style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {QUICK.map(([label, href]) => (
              <Link key={label} href={href} style={{ color: "inherit", textDecoration: "none" }}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div style={{ background: dark ? "rgba(255,255,255,.04)" : "var(--accent-teal-tint)", borderBottom: dark ? "1px solid rgba(255,255,255,.1)" : "1px solid var(--line-1)" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "9px 24px", display: "flex", alignItems: "center", gap: 12, fontFamily: "var(--font-sans)", fontSize: 13.5 }}>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".14em", textTransform: "uppercase", color: dark ? "var(--teal-300)" : "var(--teal-700)", whiteSpace: "nowrap" }}>
            Announcements
          </span>
          <Link href="/events" style={{ color: dark ? "#fff" : "var(--text-heading)", textDecoration: "none", fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            SINU 2026 Open Day programme
          </Link>
          <span style={{ color: dark ? "rgba(255,255,255,.35)" : "var(--text-faint)" }}>·</span>
          <Link
            href="/admissions"
            style={{ color: dark ? "rgba(255,255,255,.78)" : "var(--text-body)", textDecoration: "none", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
          >
            Scholarship application — submission of required documents
          </Link>
          <span style={{ flex: 1 }} />
          <Link href="/events" style={{ color: dark ? "var(--teal-300)" : "var(--teal-700)", textDecoration: "none", fontWeight: 600, whiteSpace: "nowrap" }}>
            All announcements →
          </Link>
        </div>
      </div>
      <div style={{ background: dark ? "transparent" : "var(--surface-card)", borderBottom: dark ? "1px solid rgba(255,255,255,.12)" : "1px solid var(--line-2)" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "14px 24px", display: "flex", alignItems: "center", gap: 22 }}>
          <Link href="/" style={{ display: "inline-flex", flex: "none" }}>
            <Image
              src="/assets/sinu-logo.jpg"
              alt="Solomon Islands National University"
              width={137}
              height={46}
              style={{ display: "block", background: "#fff", padding: "4px 8px", borderRadius: "var(--r-sm)" }}
              priority
            />
          </Link>
          <nav style={{ display: "flex", gap: 2, flex: 1, flexWrap: "wrap" }}>
            {NAV.map((it) => {
              const on = isActive(it);
              return (
                <span key={it.label} style={{ position: "relative" }} onMouseEnter={() => setOpen(it.mega ? it.label : null)}>
                  <Link
                    href={it.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      fontFamily: "var(--font-sans)",
                      fontSize: 14.5,
                      fontWeight: on ? 600 : 500,
                      color: linkColor(on),
                      textDecoration: "none",
                      padding: "9px 11px",
                      borderRadius: "var(--r-pill)",
                      background: !dark && on ? "var(--surface-sunken)" : "transparent",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {it.label}
                    {it.mega && (
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.55 }}>
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    )}
                  </Link>
                  {it.mega && open === it.label && (
                    <div
                      role="menu"
                      style={{
                        position: "absolute",
                        top: "calc(100% + 10px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "min(760px, 84vw)",
                        background: "var(--surface-card)",
                        border: "1px solid var(--line-2)",
                        borderRadius: "var(--r-xl)",
                        boxShadow: "var(--sh-3)",
                        padding: "28px",
                        zIndex: 60,
                        display: "grid",
                        gridTemplateColumns: "1.3fr 1fr 1fr",
                        gap: 28,
                      }}
                    >
                      <div>
                        <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--t-eyebrow)", fontWeight: 600, letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 14 }}>
                          Faculties
                        </div>
                        <div style={{ display: "grid", gap: 4 }}>
                          {FACULTY_LINKS.map((f) => (
                            <Link
                              key={f.slug}
                              href={`/faculty/${f.slug}`}
                              onClick={() => setOpen(null)}
                              style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: "var(--r-sm)", textDecoration: "none" }}
                            >
                              <span
                                style={{
                                  fontFamily: "var(--font-mono)",
                                  fontSize: 11.5,
                                  fontWeight: 500,
                                  color: "var(--teal-700)",
                                  background: "var(--accent-teal-tint)",
                                  padding: "2px 7px",
                                  borderRadius: "var(--r-sm)",
                                  flex: "none",
                                }}
                              >
                                {f.abbr}
                              </span>
                              <span style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, fontWeight: 500, color: "var(--text-body)" }}>{f.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--t-eyebrow)", fontWeight: 600, letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 14 }}>
                          Explore
                        </div>
                        <div style={{ display: "grid", gap: 4 }}>
                          {[
                            ["All faculties", "/faculties"],
                            ["Programmes & courses", "/courses"],
                            ["Staff directory", "/directory"],
                          ].map(([label, href]) => (
                            <Link
                              key={label}
                              href={href}
                              onClick={() => setOpen(null)}
                              style={{ padding: "8px 10px", borderRadius: "var(--r-sm)", fontFamily: "var(--font-sans)", fontSize: 14.5, color: "var(--text-body)", textDecoration: "none" }}
                            >
                              {label}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div style={{ background: "var(--brand-primary)", borderRadius: "var(--r-lg)", padding: "20px", display: "grid", gap: 10, alignContent: "start" }}>
                        <div style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 19, lineHeight: 1.25, color: "var(--text-on-navy)" }}>Applications close 28 Nov 2026</div>
                        <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.55, color: "rgba(243,246,251,.78)" }}>Semester 1, 2027 intake — start your application today.</p>
                        <Link
                          href="/admissions"
                          onClick={() => setOpen(null)}
                          style={{ marginTop: 6, display: "inline-flex", width: "fit-content", background: "#fff", color: "var(--navy-800)", fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13.5, padding: "9px 16px", borderRadius: "var(--r-pill)", textDecoration: "none" }}
                        >
                          Apply now
                        </Link>
                      </div>
                    </div>
                  )}
                </span>
              );
            })}
          </nav>
          <Link
            href="/admissions"
            style={{
              border: "none",
              cursor: "pointer",
              background: dark ? "#fff" : "var(--brand-primary)",
              color: dark ? "var(--navy-800)" : "#fff",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 14.5,
              padding: "11px 24px",
              borderRadius: "var(--r-pill)",
              whiteSpace: "nowrap",
              flex: "none",
              textDecoration: "none",
              display: "inline-flex",
            }}
          >
            Apply now
          </Link>
        </div>
      </div>
    </header>
  );
}
