import Image from "next/image";
import Link from "next/link";
import type { Faculty } from "@/lib/cms/types";

export function FacultyCarousel({ faculties }: { faculties: Faculty[] }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "var(--sp-5)",
        overflowX: "auto",
        scrollSnapType: "x mandatory",
        padding: "8px 4px 24px",
        scrollbarWidth: "none",
      }}
    >
      {faculties.map((f) => (
        <Link
          key={f.slug}
          href={`/faculty/${f.slug}`}
          className="carousel-card"
          style={{
            flex: "0 0 340px",
            scrollSnapAlign: "start",
            display: "grid",
            gridTemplateRows: "auto 1fr",
            background: "var(--surface-card)",
            border: "1px solid var(--line-2)",
            borderRadius: "var(--r-lg)",
            overflow: "hidden",
            textDecoration: "none",
            boxShadow: "var(--sh-1)",
          }}
        >
          <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3" }}>
            <Image src={f.heroImage.url} alt={f.heroImage.alt} fill sizes="340px" style={{ objectFit: "cover" }} />
          </div>
          <div style={{ padding: "var(--sp-5)", display: "grid", gap: 10, alignContent: "start" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11.5,
                fontWeight: 500,
                color: "var(--teal-700)",
                background: "var(--accent-teal-tint)",
                padding: "2px 8px",
                borderRadius: "var(--r-sm)",
                width: "fit-content",
              }}
            >
              {f.abbr}
            </span>
            <h3 style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 20, lineHeight: 1.25, color: "var(--text-heading)" }}>
              {f.name}
            </h3>
            <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.55, color: "var(--text-muted)" }}>
              {f.departments.slice(0, 3).join(" · ")}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
