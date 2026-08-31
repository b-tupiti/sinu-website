import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteHeaderMobile } from "@/components/layout/SiteHeaderMobile";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Breadcrumb } from "@/components/ui/navigation/Breadcrumb";
import { Card } from "@/components/ui/surfaces/Card";
import { Badge } from "@/components/ui/feedback/Badge";
import { AdmissionsCTA } from "@/components/admissions/AdmissionsCTA";
import { getAdmissions } from "@/lib/cms/admissions";

export default async function AdmissionsPage() {
  const admissions = await getAdmissions();

  return (
    <div style={{ background: "var(--bg-page)", minHeight: "100vh" }}>
      <div className="desktop-only">
        <SiteHeader page="admissions" />
      </div>
      <div className="mobile-only">
        <SiteHeaderMobile page="admissions" />
      </div>
      <main style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "var(--sp-10) 24px 0" }}>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Admissions" }]} style={{ marginBottom: "var(--sp-6)" }} />
        <div style={{ maxWidth: 640, marginBottom: "var(--sp-10)" }}>
          <h1 style={{ margin: "0 0 12px", fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--t-h1)", letterSpacing: "-0.015em", color: "var(--text-heading)" }}>How to apply</h1>
          <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: "var(--t-lead)", lineHeight: 1.55, color: "var(--text-body)" }}>
            {admissions.intro} Applications for Semester 1, 2027 close <strong style={{ color: "var(--text-heading)" }}>{admissions.deadline}</strong>.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "var(--sp-4)", marginBottom: "var(--sp-12)" }}>
          {admissions.steps.map((step, i) => (
            <Card key={step.title}>
              <div style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 32, lineHeight: 1, color: "var(--accent-teal-strong)", marginBottom: 12 }}>{i + 1}</div>
              <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 16, color: "var(--text-heading)", marginBottom: 6 }}>{step.title}</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, lineHeight: 1.6, color: "var(--text-muted)" }}>{step.body}</div>
            </Card>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--sp-10)", alignItems: "start" }}>
          <div>
            <h2 style={{ margin: "0 0 var(--sp-5)", fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--t-h2)", color: "var(--text-heading)" }}>Key dates</h2>
            <div style={{ display: "grid" }}>
              {admissions.keyDates.map(({ date, title, badge }) => (
                <div key={title} style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 0", borderBottom: "1px solid var(--line-2)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 13.5, fontWeight: 500, color: "var(--text-heading)", minWidth: 130 }}>{date}</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-body)", flex: 1 }}>{title}</span>
                  {badge && <Badge tone="success">{badge}</Badge>}
                </div>
              ))}
            </div>
          </div>
          <AdmissionsCTA ctaBody={admissions.ctaBody} contactEmail={admissions.contactEmail} contactPhone={admissions.contactPhone} />
        </div>
      </main>
      <div style={{ marginTop: "var(--sp-16)" }}>
        <SiteFooter />
      </div>
    </div>
  );
}
