import Image from "next/image";
import Link from "next/link";
import type { NewsItem } from "@/lib/cms/types";

function NewsCard({ n }: { n: NewsItem }) {
  return (
    <Link
      href="/events"
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr",
        background: "var(--surface-card)",
        borderRadius: "var(--r-lg)",
        overflow: "hidden",
        border: "1px solid var(--line-2)",
        textDecoration: "none",
      }}
    >
      <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3" }}>
        <Image src={n.image.url} alt={n.image.alt} fill sizes="(min-width: 768px) 25vw, 100vw" style={{ objectFit: "cover" }} />
      </div>
      <div style={{ padding: "var(--sp-5)", display: "grid", gap: 10, alignContent: "start" }}>
        <h3 style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 18, lineHeight: 1.28, color: "var(--text-heading)" }}>
          {n.title}
        </h3>
        <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: 13.5, lineHeight: 1.55, color: "var(--text-muted)" }}>
          {n.summary}
        </p>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-faint)" }}>{n.date}</span>
      </div>
    </Link>
  );
}

export function NewsPreview({ news }: { news: NewsItem[] }) {
  if (news.length === 0) return null;
  return (
    <div className="news-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--sp-5)", alignItems: "stretch" }}>
      {news.slice(0, 4).map((n) => (
        <NewsCard key={n.id} n={n} />
      ))}
    </div>
  );
}
