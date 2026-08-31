import Image from "next/image";
import type { HomepageData } from "@/lib/cms/types";

export function CentreCarousel({ centres }: { centres: HomepageData["centres"] }) {
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
      {centres.map((c) => (
        <div
          key={c.title}
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
            boxShadow: "var(--sh-1)",
          }}
        >
          <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3" }}>
            <Image src={c.image.url} alt={c.image.alt} fill sizes="340px" style={{ objectFit: "cover" }} />
          </div>
          <div style={{ padding: "var(--sp-5)", display: "grid", gap: 10, alignContent: "start" }}>
            <h3 style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 20, lineHeight: 1.25, color: "var(--text-heading)" }}>
              {c.title}
            </h3>
            <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.55, color: "var(--text-muted)" }}>
              {c.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
