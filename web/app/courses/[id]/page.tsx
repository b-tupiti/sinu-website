import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteHeaderMobile } from "@/components/layout/SiteHeaderMobile";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Badge } from "@/components/ui/feedback/Badge";
import { Breadcrumb } from "@/components/ui/navigation/Breadcrumb";
import { Card } from "@/components/ui/surfaces/Card";
import { PersonCard } from "@/components/ui/catalog/PersonCard";
import { CourseTabs } from "@/components/course/CourseTabs";
import { getCourseById } from "@/data/courses";
import { getStaffDirectory } from "@/lib/cms/directory";

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = await getCourseById(id);
  if (!course) notFound();

  const staff = await getStaffDirectory();
  const coordinator = staff.find((s) => s.faculty === course.faculty) ?? staff[0];

  return (
    <div style={{ background: "var(--bg-page)", minHeight: "100vh" }}>
      <div className="desktop-only">
        <SiteHeader page="catalog" />
      </div>
      <div className="mobile-only">
        <SiteHeaderMobile page="catalog" />
      </div>
      <main style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "var(--sp-10) 24px 0" }}>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Programmes & courses", href: "/courses" }, { label: course.id }]} style={{ marginBottom: "var(--sp-6)" }} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "var(--sp-10)", alignItems: "start" }}>
          <div>
            <span style={{ fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: 15, color: "var(--teal-700)", background: "var(--accent-teal-tint)", padding: "4px 12px", borderRadius: "var(--r-pill)" }}>
              {course.id}
            </span>
            <h1 style={{ margin: "14px 0 14px", fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--t-h1)", lineHeight: 1.1, letterSpacing: "-0.015em", color: "var(--text-heading)" }}>
              {course.title}
            </h1>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "var(--sp-6)" }}>
              <Badge tone="success">Open for enrolment</Badge>
              <Badge>{course.duration}</Badge>
              <Badge tone="info">{course.level}</Badge>
            </div>
            <CourseTabs overview={course.description} duration={course.duration} level={course.level} faculty={course.faculty} />
          </div>
          <div style={{ display: "grid", gap: "var(--sp-4)" }}>
            <Card>
              <div style={{ display: "grid", gap: 14 }}>
                {[
                  ["Faculty", course.faculty],
                  ["Duration", course.duration],
                  ["Level", course.level],
                  ["Tags", course.tags.join(" · ")],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: "grid", gap: 2 }}>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--text-faint)" }}>{k}</span>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, color: "var(--text-heading)" }}>{v}</span>
                  </div>
                ))}
                <Link
                  href="/admissions"
                  style={{
                    marginTop: 6,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--brand-primary)",
                    color: "var(--text-on-navy)",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    fontSize: 15,
                    padding: "11px 24px",
                    borderRadius: "var(--r-pill)",
                    textDecoration: "none",
                  }}
                >
                  Enrol in this course
                </Link>
              </div>
            </Card>
            {coordinator && <PersonCard name={coordinator.name} role="Course coordinator" school={coordinator.faculty} email={coordinator.email} />}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
