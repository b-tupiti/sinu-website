"use client";
import { useState } from "react";
import { Tabs } from "@/components/ui/navigation/Tabs";

const TAB_ITEMS = ["Overview", "Structure", "Assessment", "How to apply"];

export function CourseTabs({ overview, duration, level, faculty }: { overview: string; duration: string; level: string; faculty: string }) {
  const [tab, setTab] = useState("Overview");
  const body: Record<string, string> = {
    Overview: overview,
    Structure: `Delivered over ${duration} within the ${faculty} timetable, combining lectures, tutorials, and applied coursework appropriate to ${level.toLowerCase()} study.`,
    Assessment: "Assessment blends coursework, practical assignments, and a final assessment period — exact weighting is confirmed by the course coordinator each semester.",
    "How to apply": "Enrol through the student portal during the registration window, or start with an application if you are not yet admitted to SINU.",
  };
  return (
    <>
      <Tabs items={TAB_ITEMS} active={tab} onChange={setTab} style={{ marginBottom: "var(--sp-5)" }} />
      <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.7, color: "var(--text-body)", maxWidth: 640 }}>{body[tab]}</p>
    </>
  );
}
