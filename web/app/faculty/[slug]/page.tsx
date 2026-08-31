import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Breadcrumb } from "@/components/ui/navigation/Breadcrumb";
import { Card } from "@/components/ui/surfaces/Card";
import { CourseCard } from "@/components/ui/catalog/CourseCard";
import { getFaculties, getFacultyBySlug } from "@/lib/cms/faculties";
import { mockCourses } from "@/data/courses";

export async function generateStaticParams() {
  const faculties = await getFaculties();
  return faculties.map((f) => ({ slug: f.slug }));
}

export default async function FacultyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const faculty = await getFacultyBySlug(slug);
  if (!faculty) notFound();

  const relatedCourses = mockCourses.filter((c) => c.faculty === faculty.name).slice(0, 4);

  return (
    <div style={{ background: "var(--bg-page)", minHeight: "100vh" }}>
      <SiteHeader page="program" />
      <section style={{ position: "relative", background: "var(--surface-navy)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src={faculty.heroImage.url} alt={faculty.heroImage.alt} fill sizes="100vw" style={{ objectFit: "cover", opacity: 0.28 }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(12,28,54,.35) 0%, var(--surface-navy) 92%)", zIndex: 1 }} />
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "var(--sp-12) 24px", position: "relative", zIndex: 2 }}>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--t-eyebrow)", fontWeight: 600, letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--teal-300)", marginBottom: 12 }}>
            {faculty.abbr} · Faculty
          </div>
          <h1 style={{ margin: "0 0 16px", fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--t-h1)", letterSpacing: "-0.015em", color: "var(--text-on-navy)" }}>Faculty of {faculty.name}</h1>
          <p style={{ margin: 0, maxWidth: 600, fontFamily: "var(--font-sans)", fontSize: "var(--t-lead)", lineHeight: 1.55, color: "rgba(243,246,251,.82)" }}>{faculty.tagline}</p>
        </div>
      </section>
      <main style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "var(--sp-12) 24px 0" }}>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Faculties", href: "/faculties" }, { label: faculty.name }]} style={{ marginBottom: "var(--sp-8)" }} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "var(--sp-10)", alignItems: "start" }}>
          <div>
            <h2 style={{ margin: "0 0 var(--sp-5)", fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--t-h2)", color: "var(--text-heading)" }}>About the faculty</h2>
            <div style={{ display: "grid", gap: 16, marginBottom: "var(--sp-8)" }}>
              {faculty.description.map((p, i) => (
                <p key={i} style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.7, color: "var(--text-body)" }}>
                  {p}
                </p>
              ))}
            </div>
            <h3 style={{ margin: "0 0 var(--sp-5)", fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--t-h3)", color: "var(--text-heading)" }}>Departments</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "var(--sp-4)", marginBottom: "var(--sp-8)" }}>
              {faculty.departments.map((d) => (
                <Card key={d}>
                  <span style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 15.5, color: "var(--text-heading)" }}>{d}</span>
                </Card>
              ))}
            </div>
            {relatedCourses.length > 0 && (
              <>
                <h3 style={{ margin: "0 0 var(--sp-5)", fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--t-h3)", color: "var(--text-heading)" }}>Courses in this faculty</h3>
                <div style={{ display: "grid", gap: 12, marginBottom: "var(--sp-8)" }}>
                  {relatedCourses.map((c) => (
                    <Link key={c.id} href={`/courses/${c.id}`} style={{ textDecoration: "none" }}>
                      <CourseCard code={c.id} title={c.title} school={c.duration} level={c.level} />
                    </Link>
                  ))}
                </div>
                <Link href="/courses" style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, fontWeight: 600, color: "var(--link)", textDecoration: "none" }}>
                  See all programmes & courses →
                </Link>
              </>
            )}
          </div>
          <div style={{ display: "grid", gap: "var(--sp-4)" }}>
            <Card>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "var(--brand-primary)",
                  color: "var(--text-on-navy)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: 18,
                  marginBottom: 16,
                }}
              >
                {faculty.dean.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
              </div>
              <h3 style={{ margin: "0 0 10px", fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "var(--t-h4)", color: "var(--text-heading)" }}>Dean&apos;s message</h3>
              <p style={{ margin: "0 0 16px", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 15, lineHeight: 1.6, color: "var(--text-body)" }}>&ldquo;{faculty.dean.quote}&rdquo;</p>
              <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14.5, color: "var(--text-heading)" }}>{faculty.dean.name}</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: "var(--text-muted)" }}>{faculty.dean.title}</div>
            </Card>
            <Card>
              <h3 style={{ margin: "0 0 12px", fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "var(--t-h4)", color: "var(--text-heading)" }}>Quick links</h3>
              <div style={{ display: "grid", gap: 10 }}>
                {[
                  ["Browse programmes & courses", "/courses"],
                  ["Staff directory", "/directory"],
                  ["Admissions", "/admissions"],
                ].map(([label, href]) => (
                  <Link key={label} href={href} style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, fontWeight: 600, color: "var(--link)", textDecoration: "none" }}>
                    {label} →
                  </Link>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
      <div style={{ marginTop: "var(--sp-16)" }}>
        <SiteFooter />
      </div>
    </div>
  );
}
