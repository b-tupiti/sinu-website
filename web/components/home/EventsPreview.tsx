"use client";
import { useState } from "react";
import Link from "next/link";
import type { EventItem } from "@/lib/cms/types";

function DateBlock({ e, big }: { e: EventItem; big?: boolean }) {
  return (
    <div style={{ flex: "none", width: big ? 76 : 60, textAlign: "center", background: big ? "var(--brand-primary)" : "var(--surface-sunken)", color: big ? "#fff" : "var(--text-heading)", borderRadius: "var(--r-md)", padding: big ? "12px 0" : "9px 0" }}>
      <div style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: big ? 34 : 24, lineHeight: 1 }}>{e.day}</div>
      <div style={{ fontFamily: "var(--font-sans)", fontSize: big ? 11.5 : 10.5, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: big ? "rgba(255,255,255,.7)" : "var(--text-muted)", marginTop: 4 }}>
        {e.month}
      </div>
    </div>
  );
}

function LeadEvent({ e }: { e: EventItem }) {
  const [h, setH] = useState(false);
  return (
    <Link
      href="/events"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "flex",
        gap: 20,
        padding: 24,
        background: "var(--surface-card)",
        border: "1px solid " + (h ? "var(--line-strong)" : "var(--line-2)"),
        borderRadius: "var(--r-xl)",
        boxShadow: h ? "0 16px 40px rgba(12,28,54,.10)" : "var(--sh-1)",
        cursor: "pointer",
        transition: "all var(--dur-base) var(--ease-out)",
        textDecoration: "none",
      }}
    >
      <DateBlock e={e} big />
      <div style={{ display: "grid", gap: 8, minWidth: 0, alignContent: "start" }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 11.5, fontWeight: 600, letterSpacing: ".09em", textTransform: "uppercase", color: "var(--accent-teal-strong)" }}>{e.tag}</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-faint)" }}>
            {e.weekday} · {e.time}
          </span>
        </div>
        <h3 style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 22, lineHeight: 1.2, color: h ? "var(--link-hover)" : "var(--text-heading)", transition: "color var(--dur-fast) var(--ease-out)" }}>
          {e.title}
        </h3>
        {e.blurb && <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: 14.5, lineHeight: 1.6, color: "var(--text-muted)" }}>{e.blurb}</p>}
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, color: "var(--text-body)", display: "inline-flex", alignItems: "center", gap: 6, marginTop: 2 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-faint)" strokeWidth="1.8" strokeLinecap="round">
            <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" />
            <circle cx="12" cy="10" r="2.6" />
          </svg>
          {e.location}
        </span>
      </div>
    </Link>
  );
}

function EventRow({ e }: { e: EventItem }) {
  const [h, setH] = useState(false);
  return (
    <Link
      href="/events"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "flex",
        gap: 16,
        alignItems: "center",
        padding: "14px 16px",
        borderRadius: "var(--r-lg)",
        background: h ? "var(--surface-card)" : "transparent",
        boxShadow: h ? "var(--sh-1)" : "none",
        cursor: "pointer",
        transition: "all var(--dur-fast) var(--ease-out)",
        textDecoration: "none",
      }}
    >
      <DateBlock e={e} />
      <div style={{ display: "grid", gap: 3, minWidth: 0, flex: 1 }}>
        <span style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 15.5, color: h ? "var(--link-hover)" : "var(--text-heading)", transition: "color var(--dur-fast) var(--ease-out)" }}>{e.title}</span>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-muted)" }}>
          {e.tag} · {e.time} · {e.location}
        </span>
      </div>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={h ? "var(--brand-primary)" : "var(--text-faint)"} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none" }}>
        <path d="m9 18 6-6-6-6" />
      </svg>
    </Link>
  );
}

export function EventsPreview({ events }: { events: EventItem[] }) {
  if (events.length === 0) return null;
  const [lead, ...rest] = events;
  return (
    <div style={{ display: "grid", gap: 6 }}>
      <LeadEvent e={lead} />
      <div style={{ display: "grid", gap: 2, marginTop: 6 }}>
        {rest.map((e) => (
          <EventRow key={e.id} e={e} />
        ))}
      </div>
    </div>
  );
}
