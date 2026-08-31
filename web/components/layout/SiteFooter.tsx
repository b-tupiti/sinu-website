import Image from "next/image";
import Link from "next/link";

const COLS: [string, string[]][] = [
  ["About SINU", ["The university", "Vision, mission & values", "Executive governance", "Faculty", "Support services", "Careers"]],
  ["Academic", ["Faculties", "Schools & departments", "Programs & courses", "University Preparatory College", "Distance & Flexible Learning", "Research & postgraduate studies"]],
  ["For students", ["Prospective students", "Current students", "Student webmail", "SINU E-Learn (Moodle)", "Library", "Documentations"]],
  ["For staff", ["Staff webmail", "SINU E-Learn", "Human resources", "Job opportunities", "Tenders & EOI"]],
];

const SOCIAL: [string, string][] = [
  ["Facebook", "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"],
  ["LinkedIn", "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-11h4v1.5A6 6 0 0 1 16 8zM6 9H2v12h4z"],
  ["Instagram", "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM17.5 6.5h.01M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z"],
];

const container = { maxWidth: "var(--container)", margin: "0 auto", padding: "0 24px", width: "100%" as const };

export function SiteFooter() {
  const h = { fontFamily: "var(--font-sans)", fontSize: "var(--t-eyebrow)", fontWeight: 600, letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase" as const, color: "var(--teal-300)", marginBottom: 20 };
  const a = { fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.5, color: "rgba(243,246,251,.76)", textDecoration: "none" };
  return (
    <footer className="footer-root" style={{ background: "var(--navy-900)", marginTop: 0, minHeight: "80vh", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "var(--sp-16) 0 0" }}>
        <div className="footer-top-row" style={{ ...container, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 320 }}>
            <Image src="/sinu-logo-r.png" alt="SINU" width={122} height={36} style={{ width: "fit-content" }} />
            <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: 13.5, lineHeight: 1.65, color: "rgba(243,246,251,.6)" }}>
              Kukum Campus, Honiara, Solomon Islands
              <br />
              (+677) 42600
            </p>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            {SOCIAL.map(([label, d]) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                title={label}
                style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid rgba(243,246,251,.24)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "rgba(243,246,251,.8)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d={d} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "var(--sp-16) 0" }}>
        <div className="footer-cols" style={{ ...container, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "var(--sp-10)" }}>
          {COLS.map(([title, items]) => (
            <div key={title} style={{ display: "grid", gap: 14, alignContent: "start" }}>
              <div style={h}>{title}</div>
              {items.map((i) => (
                <Link key={i} style={a} href="#">
                  {i}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(243,246,251,.14)" }}>
        <div className="footer-bottom-row" style={{ ...container, padding: "22px 24px", display: "flex", gap: 20, flexWrap: "wrap", fontFamily: "var(--font-sans)", fontSize: 12.5, color: "rgba(243,246,251,.5)" }}>
          <span>© {new Date().getFullYear()} Solomon Islands National University. All rights reserved.</span>
          <span style={{ flex: 1 }} />
          <Link href="#" style={{ color: "inherit", textDecoration: "none" }}>
            Contact us
          </Link>
          <Link href="#" style={{ color: "inherit", textDecoration: "none" }}>
            Newsletter
          </Link>
          <Link href="#" style={{ color: "inherit", textDecoration: "none" }}>
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
