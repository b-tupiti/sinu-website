"use client";
import { useState } from "react";
import { Tabs } from "@/components/ui/navigation/Tabs";
import { EventCard } from "@/components/ui/catalog/EventCard";
import type { EventItem, NewsItem } from "@/lib/cms/types";

export function EventsNewsTabs({ events, news }: { events: EventItem[]; news: NewsItem[] }) {
  const [tab, setTab] = useState("Events");
  return (
    <>
      <Tabs items={["Events", "News"]} active={tab} onChange={setTab} style={{ marginBottom: "var(--sp-8)" }} />
      {tab === "Events" ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "var(--sp-4)", maxWidth: 900 }}>
          {events.map((e) => (
            <EventCard key={e.id} day={e.day} month={e.month} title={e.title} time={e.time} location={e.location} tag={e.tag} />
          ))}
        </div>
      ) : (
        <div style={{ maxWidth: 760 }}>
          {news.map((n) => (
            <div key={n.id} style={{ display: "grid", gap: 6, padding: "22px 0", borderBottom: "1px solid var(--line-2)" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: "var(--text-faint)" }}>{n.date}</span>
              <span style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 22, color: "var(--text-heading)" }}>{n.title}</span>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.6, color: "var(--text-body)" }}>{n.summary}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
