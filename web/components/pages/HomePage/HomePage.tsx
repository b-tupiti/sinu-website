import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteHeaderMobile } from "@/components/layout/SiteHeaderMobile";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HeroCourseFinder } from "@/components/home/HeroCourseFinder";
import { HeroAnnouncement } from "@/components/home/HeroAnnouncement";
import { FacultyCarousel } from "@/components/home/FacultyCarousel";
import { CentreCarousel } from "@/components/home/CentreCarousel";
import { EventsPreview } from "@/components/home/EventsPreview";
import { NewsPreview } from "@/components/home/NewsPreview";
import { getHomepage } from "@/lib/cms/homepage";
import { getFaculties } from "@/lib/cms/faculties";
import { getEvents, getNews, getResearchNews } from "@/lib/cms/events";
import Hero from "./Hero";
import type { HomePage as HomePageType } from "./types";

const wrap = { maxWidth: "var(--container)", margin: "0 auto", padding: "0 24px" };
const h2 = { margin: 0, fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--t-h2)", letterSpacing: "-0.01em", color: "var(--text-heading)" };

export default async function HomePage({ page }: { page: HomePageType }) {
  const [homepage, faculties, events, news, researchNews] = await Promise.all([getHomepage(), getFaculties(), getEvents(), getNews(), getResearchNews()]);

  return (
    <div style={{ background: "var(--bg-page)", minHeight: "100vh" }}>
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--navy-800)", color: "#fff" }}>
        <div style={{ position: "relative", zIndex: 10, borderBottom: "1px solid rgba(255,255,255,.12)" }}>
          <div className="desktop-only">
            <SiteHeader page="home" dark />
          </div>
          <div className="mobile-only">
            <SiteHeaderMobile page="home" dark />
          </div>
        </div>
        <Hero items={page.hero} />
        <div
          className="course-finder-card"
          style={{
            position: "absolute",
            left: "50%",
            bottom: -64,
            transform: "translateX(-50%)",
            boxSizing: "border-box",
            width: "min(var(--container), calc(100vw - 48px))",
            background: "var(--surface-card)",
            borderRadius: "var(--r-xl)",
            padding: "28px 32px",
            zIndex: 6,
          }}
        >
          <HeroCourseFinder faculties={faculties.map((f) => f.name)} placeholder={homepage.searchPlaceholder} />
        </div>
        <HeroAnnouncement />
      </section>

      <section className="faculties-section" style={{ ...wrap, marginTop: 150 }}>
        <div className="section-header" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "var(--sp-6)" }}>
          <div>
            <h2 style={h2}>Faculties</h2>
            <p style={{ margin: "6px 0 0", fontFamily: "var(--font-sans)", fontSize: 15.5, color: "var(--text-muted)" }}>Five faculties across Honiara and the provinces.</p>
          </div>
          <Link href="/faculties" style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, fontWeight: 600, color: "var(--link)", textDecoration: "none" }}>
            All faculties →
          </Link>
        </div>
        <FacultyCarousel faculties={faculties} />
        <div style={{ marginTop: "var(--sp-10)" }}>
          <h3 style={{ margin: "0 0 var(--sp-5)", fontFamily: "var(--font-sans)", fontSize: "var(--t-eyebrow)", fontWeight: 600, letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)" }}>
            Colleges, centres and institutes
          </h3>
          <CentreCarousel centres={homepage.centres} />
        </div>
      </section>

      <section className="cta-section" style={{ position: "relative", marginTop: "var(--sp-20)", minHeight: 340, display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "var(--navy-900)", zIndex: 0 }} />
        <div className="cta-image" style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: "46%", zIndex: 1 }}>
          <Image src={homepage.ctaImage.url} alt={homepage.ctaImage.alt} fill sizes="54vw" style={{ objectFit: "cover" }} />
        </div>
        <div className="cta-image-fade" style={{ position: "absolute", top: 0, bottom: 0, left: "40%", width: 180, background: "linear-gradient(90deg, var(--navy-900) 0%, rgba(12,28,54,0) 100%)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ ...wrap, position: "relative", zIndex: 3, boxSizing: "border-box", width: "100%", padding: "var(--sp-16) 24px", display: "flex", justifyContent: "flex-start" }}>
          <div className="cta-content" style={{ maxWidth: 440 }}>
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

      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", background: "var(--bg-page)" }}>
        <div style={{ ...wrap, paddingTop: "var(--sp-16)", paddingBottom: "var(--sp-16)" }}>
          <div className="events-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "var(--sp-16)", alignItems: "start" }}>
            <div className="events-intro" style={{ display: "grid", gap: "var(--sp-5)", alignContent: "start", position: "sticky", top: "var(--sp-10)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 28, height: 1, background: "var(--accent-teal)" }} />
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--t-eyebrow)", fontWeight: 600, letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--accent-teal-strong)" }}>
                  What&apos;s on
                </span>
              </div>
              <h2 style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--t-h1)", lineHeight: 1.08, letterSpacing: "-0.015em", color: "var(--text-heading)" }}>
                Upcoming events
              </h2>
              <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: "var(--t-lead)", lineHeight: 1.6, color: "var(--text-body)" }}>
                Public lectures, ceremonies, open days, and information sessions — across Kukum, Panatina, and the provinces.
              </p>
              <Link
                href="/events"
                style={{
                  marginTop: "var(--sp-2)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  width: "fit-content",
                  background: "var(--brand-primary)",
                  color: "#fff",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: 14.5,
                  padding: "12px 22px",
                  borderRadius: "var(--r-pill)",
                  textDecoration: "none",
                }}
              >
                See all events
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </div>
            <EventsPreview events={events} />
          </div>
        </div>
      </section>

      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", background: "var(--surface-sunken)", borderTop: "1px solid var(--line-1)", borderBottom: "1px solid var(--line-1)" }}>
        <div style={{ ...wrap, paddingTop: "var(--sp-16)", paddingBottom: "var(--sp-16)" }}>
          <div className="section-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "var(--sp-8)", gap: 20 }}>
            <div style={{ display: "grid", gap: 10, maxWidth: 640 }}>
              <h2 className="news-heading" style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--t-h1)", lineHeight: 1.08, letterSpacing: "-0.015em", color: "var(--text-heading)" }}>News</h2>
              <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: "var(--t-lead)", lineHeight: 1.55, color: "var(--text-body)" }}>
                Announcements, research updates, and stories from across the university and its communities.
              </p>
            </div>
            <Link href="/events" style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, fontWeight: 600, color: "var(--link)", textDecoration: "none", whiteSpace: "nowrap" }}>
              All news →
            </Link>
          </div>
          <NewsPreview news={news} />
        </div>
      </section>

      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", background: "var(--bg-page)" }}>
        <div style={{ ...wrap, paddingTop: "var(--sp-16)", paddingBottom: "var(--sp-16)" }}>
          <div className="section-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "var(--sp-8)", gap: 20 }}>
            <div style={{ display: "grid", gap: 10, maxWidth: 640 }}>
              <h2 className="news-heading" style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--t-h1)", lineHeight: 1.08, letterSpacing: "-0.015em", color: "var(--text-heading)" }}>Research news</h2>
              <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: "var(--t-lead)", lineHeight: 1.55, color: "var(--text-body)" }}>
                Grants, publications, and fieldwork from our researchers across the Pacific.
              </p>
            </div>
            <Link href="/events" style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, fontWeight: 600, color: "var(--link)", textDecoration: "none", whiteSpace: "nowrap" }}>
              All research news →
            </Link>
          </div>
          <NewsPreview news={researchNews} />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
