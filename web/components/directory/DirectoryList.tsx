"use client";
import { useMemo, useState } from "react";
import { SearchBar } from "@/components/ui/forms/SearchBar";
import { Select } from "@/components/ui/forms/Select";
import { PersonCard } from "@/components/ui/catalog/PersonCard";
import type { StaffMember } from "@/lib/cms/types";

export function DirectoryList({ staff }: { staff: StaffMember[] }) {
  const [q, setQ] = useState("");
  const [faculty, setFaculty] = useState("All faculties");

  const faculties = useMemo(() => ["All faculties", ...Array.from(new Set(staff.map((s) => s.faculty)))], [staff]);

  const list = staff.filter((s) => (faculty === "All faculties" || s.faculty === faculty) && (q === "" || s.name.toLowerCase().includes(q.toLowerCase())));

  return (
    <>
      <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", marginBottom: "var(--sp-6)" }}>
        <SearchBar value={q} onChange={setQ} placeholder="Search by name…" style={{ flex: 1, maxWidth: 480 }} />
        <Select options={faculties} value={faculty} onChange={(e) => setFaculty(e.target.value)} style={{ minWidth: 230 }} />
      </div>
      {list.length === 0 ? (
        <div style={{ padding: "var(--sp-16) 0", textAlign: "center", fontFamily: "var(--font-sans)", color: "var(--text-muted)" }}>No one matches. Check the spelling?</div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "var(--sp-4)" }}>
          {list.map((p) => (
            <PersonCard key={p.id} name={p.name} role={p.role} school={p.faculty} email={p.email} />
          ))}
        </div>
      )}
    </>
  );
}
