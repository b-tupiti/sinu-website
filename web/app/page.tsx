import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HeroSearch } from "@/components/home/HeroSearch";
import { FacultyRow } from "@/components/home/FacultyRow";
import { FeaturedCourseCard } from "@/components/home/FeaturedCourseCard";
import { EventsPreview } from "@/components/home/EventsPreview";
import { getHomepage } from "@/lib/cms/homepage";
import { getFaculties } from "@/lib/cms/faculties";
import { getEvents, getNews } from "@/lib/cms/events";
import { mockCourses } from "@/data/courses";

const wrap = { maxWidth: "var(--container)", margin: "0 auto", padding: "0 24px" };
const h2 = { margin: 0, fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--t-h2)", letterSpacing: "-0.01em", color: "var(--text-heading)" };

const FEATURED_IDS = ["IT101", "EDU102", "BUS101"];

export default async function Home() {
  const [homepage, faculties, events, news] = await Promise.all([getHomepage(), getFaculties(), getEvents(), getNews()]);
  const featuredCourses = FEATURED_IDS.map((id) => mockCourses.find((c) => c.id === id)).filter((c): c is (typeof mockCourses)[number] => !!c);

  return (
    <div style={{ background: "var(--bg-page)", minHeight: "100vh" }}>
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--navy-800)", color: "#fff" }}>
        <div style={{ position: "relative", zIndex: 4, borderBottom: "1px solid rgba(255,255,255,.12)" }}>
          <SiteHeader page="home" dark />
        </div>
        <div style={{ position: "relative", flex: 1, display: "flex", alignItems: "stretch" }}>
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <Image src={homepage.heroImage.url} alt={homepage.heroImage.alt} fill priority sizes="100vw" style={{ objectFit: "cover" }} />
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background: "linear-gradient(100deg, rgba(18,42,79,.96) 0%, rgba(18,42,79,.88) 34%, rgba(18,42,79,.45) 58%, rgba(18,42,79,.15) 78%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 2,
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "var(--sp-16) var(--sp-12) 150px 24px",
              width: "52%",
              minWidth: 420,
              maxWidth: 600,
              marginLeft: "max(24px, calc((100vw - var(--container)) / 2))",
            }}
          >
            
            <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(42px, 4.6vw, 64px)", lineHeight: 1.06, letterSpacing: "-0.02em", margin: "0 0 24px" }}>{homepage.title}</h1>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, fontSize: 20, lineHeight: 1.5, color: "rgba(255,255,255,.8)", margin: "0 0 26px" }}>{homepage.lead}</p>
            {/* <div style={{ height: 1, background: "rgba(255,255,255,.14)", marginBottom: 26 }} />
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,.7)", margin: "0 0 30px" }}>{homepage.intro}</p> */}
            <HeroSearch placeholder={homepage.searchPlaceholder} />
            <div style={{ display: "flex", gap: 26, alignItems: "center", flexWrap: "wrap" }}>
              <Link
                href="/admissions"
                style={{ border: "none", cursor: "pointer", background: "#fff", color: "var(--navy-800)", fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 16, padding: "15px 32px", borderRadius: "var(--r-pill)", whiteSpace: "nowrap", textDecoration: "none" }}
              >
                Apply for 2027
              </Link>
              <Link href="/courses" style={{ fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 600, color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,.4)", paddingBottom: 3, whiteSpace: "nowrap" }}>
                Explore programs
              </Link>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: -64,
            transform: "translateX(-50%)",
            boxSizing: "border-box",
            width: "min(1060px,92vw)",
            background: "var(--surface-card)",
            border: "1px solid var(--line-2)",
            borderRadius: "var(--r-xl)",
            boxShadow: "0 30px 80px rgba(12,28,54,.22)",
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            padding: "34px 18px",
            zIndex: 6,
          }}
        >
          {homepage.metrics.map(({ value, label }, i) => (
            <div key={label} style={{ textAlign: "center", padding: "0 18px", borderRight: i < homepage.metrics.length - 1 ? "1px solid var(--line-2)" : "none" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: 46, lineHeight: 1, color: "var(--brand-primary)", marginBottom: 10, letterSpacing: "-0.01em" }}>{value}</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-muted)" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 150, background: "var(--surface-sunken)", borderTop: "1px solid var(--line-1)", borderBottom: "1px solid var(--line-1)" }}>
        <div style={{ ...wrap, padding: "var(--sp-16) 24px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--sp-10)" }}>
          {homepage.pillars.map(({ title, body }) => (
            <div key={title}>
              <div style={{ width: 34, height: 1, background: "var(--accent-teal)", marginBottom: 18 }} />
              <h2 style={{ margin: "0 0 12px", fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--t-h3)", color: "var(--text-heading)" }}>Our {title.toLowerCase()}</h2>
              <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: 15.5, lineHeight: 1.7, color: "var(--text-body)" }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ ...wrap, paddingTop: "var(--sp-16)" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "var(--sp-6)" }}>
          <div>
            <h2 style={h2}>Faculties</h2>
            <p style={{ margin: "6px 0 0", fontFamily: "var(--font-sans)", fontSize: 15.5, color: "var(--text-muted)" }}>Five faculties across Honiara and the provinces.</p>
          </div>
          <Link href="/faculties" style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, fontWeight: 600, color: "var(--link)", textDecoration: "none" }}>
            All faculties →
          </Link>
        </div>
        <div style={{ borderTop: "1px solid var(--line-2)" }}>
          {faculties.map((f) => (
            <FacultyRow key={f.slug} abbr={f.abbr} name={f.name} note={f.departments.slice(0, 3).join(" · ")} href={`/faculty/${f.slug}`} />
          ))}
        </div>
        <div style={{ marginTop: "var(--sp-10)" }}>
          <h3 style={{ margin: "0 0 var(--sp-5)", fontFamily: "var(--font-sans)", fontSize: "var(--t-eyebrow)", fontWeight: 600, letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)" }}>
            Colleges, centres and institutes
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "var(--sp-4)" }}>
            {homepage.centres.map(({ title, body }) => (
              <div key={title} style={{ display: "grid", gap: 6, padding: "var(--sp-5)", background: "var(--surface-card)", border: "1px solid var(--line-2)", borderRadius: "var(--r-lg)" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 19, color: "var(--text-heading)" }}>{title}</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.6, color: "var(--text-muted)" }}>{body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...wrap, paddingTop: "var(--sp-12)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "var(--sp-6)" }}>
          <div>
            <h2 style={h2}>Programmes & courses</h2>
            <p style={{ margin: "6px 0 0", fontFamily: "var(--font-sans)", fontSize: 15.5, color: "var(--text-muted)" }}>A sample of programmes and courses open for enrolment.</p>
          </div>
          <Link href="/courses" style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, fontWeight: 600, color: "var(--link)", textDecoration: "none" }}>
            Browse all programmes →
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--sp-5)", alignItems: "stretch" }}>
          {featuredCourses.map((c) => (
            <FeaturedCourseCard key={c.id} code={c.id} school={c.faculty} title={c.title} blurb={c.description} duration={c.duration} level={c.level} href={`/courses/${c.id}`} />
          ))}
        </div>
      </section>

      <section style={{ position: "relative", marginTop: "var(--sp-20)", minHeight: 340, display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "var(--navy-900)", zIndex: 0 }} />
        <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: "46%", zIndex: 1 }}>
          <Image src={homepage.ctaImage.url} alt={homepage.ctaImage.alt} fill sizes="54vw" style={{ objectFit: "cover" }} />
        </div>
        <div style={{ position: "absolute", top: 0, bottom: 0, left: "40%", width: 180, background: "linear-gradient(90deg, var(--navy-900) 0%, rgba(12,28,54,0) 100%)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ ...wrap, position: "relative", zIndex: 3, boxSizing: "border-box", width: "100%", padding: "var(--sp-16) 24px", display: "flex", justifyContent: "flex-start" }}>
          <div style={{ maxWidth: 440 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--teal-300)", marginBottom: 14 }}>{homepage.ctaEyebrow}</div>
            <h2 style={{ margin: "0 0 12px", fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--t-h1)", lineHeight: 1.08, letterSpacing: "-0.015em", color: "#fff" }}>{homepage.ctaTitle}</h2>
            <p style={{ margin: "0 0 26px", fontFamily: "var(--font-sans)", fontSize: 16.5, lineHeight: 1.6, color: "rgba(255,255,255,.78)" }}>{homepage.ctaBody}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link
                href="/admissions"
                style={{ border: "none", cursor: "pointer", background: "#fff", color: "var(--navy-700)", fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 16, padding: "14px 30px", borderRadius: "var(--r-pill)", whiteSpace: "nowrap", textDecoration: "none" }}
              >
                How to apply
              </Link>
              <Link
                href="/courses"
                style={{ cursor: "pointer", background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,.4)", fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 16, padding: "14px 30px", borderRadius: "var(--r-pill)", whiteSpace: "nowrap", textDecoration: "none" }}
              >
                Browse courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ ...wrap, paddingTop: "var(--sp-16)", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "var(--sp-10)" }}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "var(--sp-5)" }}>
            <h2 style={h2}>Upcoming events</h2>
            <Link href="/events" style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, fontWeight: 600, color: "var(--link)", textDecoration: "none" }}>
              All events →
            </Link>
          </div>
          <EventsPreview events={events} />
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "var(--sp-5)" }}>
            <h2 style={h2}>News & announcements</h2>
            <Link href="/events" style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, fontWeight: 600, color: "var(--link)", textDecoration: "none" }}>
              All news →
            </Link>
          </div>
          <div style={{ display: "grid" }}>
            {news.map((n) => (
              <Link key={n.id} href="/events" style={{ display: "grid", gap: 3, padding: "14px 0", borderBottom: "1px solid var(--line-2)", textDecoration: "none" }}>
                <span style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 16, color: "var(--text-heading)" }}>{n.title}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: "var(--text-faint)" }}>{n.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
