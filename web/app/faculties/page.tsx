import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Breadcrumb } from "@/components/ui/navigation/Breadcrumb";
import { FacultyRow } from "@/components/home/FacultyRow";
import { getFaculties } from "@/lib/cms/faculties";

export default async function FacultiesPage() {
  const faculties = await getFaculties();
  return (
    <div style={{ background: "var(--bg-page)", minHeight: "100vh" }}>
      <SiteHeader page="program" />
      <main style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "var(--sp-10) 24px 0" }}>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Faculties" }]} style={{ marginBottom: "var(--sp-6)" }} />
        <h1 style={{ margin: "0 0 10px", fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--t-h1)", letterSpacing: "-0.015em", color: "var(--text-heading)" }}>Faculties</h1>
        <p style={{ margin: "0 0 var(--sp-8)", fontFamily: "var(--font-sans)", fontSize: "var(--t-lead)", color: "var(--text-body)", maxWidth: 560 }}>
          Five faculties, spanning undergraduate to postgraduate study across Honiara and the provinces.
        </p>
        <div style={{ borderTop: "1px solid var(--line-2)", marginBottom: "var(--sp-16)" }}>
          {faculties.map((f) => (
            <FacultyRow key={f.slug} abbr={f.abbr} name={f.name} note={f.tagline} href={`/faculty/${f.slug}`} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
