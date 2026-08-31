"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SearchBar } from "@/components/ui/forms/SearchBar";
import { Select } from "@/components/ui/forms/Select";

const LEVELS = ["All levels", "Undergraduate", "Postgraduate", "TVET"];

export interface HeroCourseFinderProps {
  faculties: string[];
  placeholder: string;
}

export function HeroCourseFinder({ faculties, placeholder }: HeroCourseFinderProps) {
  const [q, setQ] = useState("");
  const [level, setLevel] = useState(LEVELS[0]);
  const [faculty, setFaculty] = useState("All faculties");
  const router = useRouter();

  const submit = (value: string) => {
    const params = new URLSearchParams();
    if (value) params.set("q", value);
    if (level && level !== LEVELS[0]) params.set("level", level);
    if (faculty && faculty !== "All faculties") params.set("faculty", faculty);
    const qs = params.toString();
    router.push(qs ? `/courses?${qs}` : "/courses");
  };

  return (
    <div style={{ display: "grid", gap: 20 }}>
      <div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 500, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--accent-teal)", marginBottom: 8 }}>
          Course finder
        </div>
        <div style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--t-h3)", letterSpacing: "-0.01em", color: "var(--text-heading)" }}>
          Find your programme
        </div>
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "flex-end", flexWrap: "wrap" }}>
        <Select label="Faculty" value={faculty} onChange={(e) => setFaculty(e.target.value)} options={["All faculties", ...faculties]} style={{ minWidth: 200 }} />
        <Select label="Level" value={level} onChange={(e) => setLevel(e.target.value)} options={LEVELS} style={{ minWidth: 170 }} />
        <SearchBar value={q} onChange={setQ} onSubmit={submit} placeholder={placeholder} size="lg" style={{ flex: 1, minWidth: 280 }} />
      </div>
    </div>
  );
}
