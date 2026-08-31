"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SearchBar } from "@/components/ui/forms/SearchBar";
import { Select } from "@/components/ui/forms/Select";
import { Tag } from "@/components/ui/feedback/Tag";
import { Pagination } from "@/components/ui/navigation/Pagination";
import { Breadcrumb } from "@/components/ui/navigation/Breadcrumb";
import { CourseCard } from "@/components/ui/catalog/CourseCard";
import { searchCourses, Course } from "@/data/courses";

const LEVELS = ["All", "Undergraduate", "Postgraduate", "TVET"];
const FACULTIES = [
  "All faculties",
  "Nursing & Health",
  "Science & Technology",
  "Education",
  "Business & Management",
  "Arts & Humanities",
];
const PAGE_SIZE = 9;

function CatalogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [level, setLevel] = useState("All");
  const [faculty, setFaculty] = useState("All faculties");
  const [page, setPage] = useState(1);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loadedKey, setLoadedKey] = useState<string | null>(null);
  const requestKey = `${query}|${level}|${faculty}`;
  const isSearching = loadedKey !== requestKey;

  useEffect(() => {
    let cancelled = false;
    searchCourses(query, level).then((results) => {
      if (cancelled) return;
      const filtered = faculty === "All faculties" ? results : results.filter((c) => c.faculty === faculty);
      setCourses(filtered);
      setLoadedKey(requestKey);
    });
    return () => {
      cancelled = true;
    };
  }, [query, level, faculty, requestKey]);

  const totalPages = Math.max(1, Math.ceil(courses.length / PAGE_SIZE));
  const pageCourses = courses.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div style={{ background: "var(--bg-page)", minHeight: "100vh" }}>
      <SiteHeader page="catalog" />
      <main style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "var(--sp-10) 24px 0" }}>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Programmes & courses" }]} style={{ marginBottom: "var(--sp-6)" }} />
        <h1 style={{ margin: "0 0 10px", fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--t-h1)", letterSpacing: "-0.015em", color: "var(--text-heading)" }}>Programmes & courses</h1>
        <p style={{ margin: "0 0 28px", fontFamily: "var(--font-sans)", fontSize: "var(--t-lead)", color: "var(--text-body)", maxWidth: 560 }}>
          Search every course offered in 2026–27. Filter by level or faculty.
        </p>
        <SearchBar
          value={query}
          onChange={(v) => {
            setQuery(v);
            setPage(1);
          }}
          onSubmit={(v) => router.replace(v ? `/courses?q=${encodeURIComponent(v)}` : "/courses")}
          placeholder="Search by course name or code…"
          style={{ maxWidth: 620, marginBottom: "var(--sp-5)" }}
        />
        <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", marginBottom: "var(--sp-6)" }}>
          {LEVELS.map((l) => (
            <Tag
              key={l}
              active={level === l}
              onClick={() => {
                setLevel(l);
                setPage(1);
              }}
            >
              {l}
            </Tag>
          ))}
          <span style={{ flex: 1 }} />
          <Select
            options={FACULTIES}
            value={faculty}
            onChange={(e) => {
              setFaculty(e.target.value);
              setPage(1);
            }}
            style={{ minWidth: 230 }}
          />
        </div>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--t-sm)", color: "var(--text-muted)", marginBottom: "var(--sp-4)" }}>
          {isSearching ? "Searching…" : `${courses.length} course${courses.length === 1 ? "" : "s"}`}
        </div>
        {!isSearching && courses.length === 0 ? (
          <div style={{ padding: "var(--sp-16) 0", textAlign: "center", fontFamily: "var(--font-sans)", color: "var(--text-muted)" }}>No courses match. Try a broader term?</div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "var(--sp-4)" }}>
            {pageCourses.map((c) => (
              <a key={c.id} href={`/courses/${c.id}`} style={{ textDecoration: "none" }}>
                <CourseCard code={c.id} title={c.title} school={c.faculty} level={c.level} semester={c.duration} />
              </a>
            ))}
          </div>
        )}
        {totalPages > 1 && (
          <div style={{ display: "flex", justifyContent: "center", padding: "var(--sp-10) 0 0" }}>
            <Pagination page={page} pages={totalPages} onChange={setPage} />
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={null}>
      <CatalogContent />
    </Suspense>
  );
}
