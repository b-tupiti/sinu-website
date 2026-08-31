import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteHeaderMobile } from "@/components/layout/SiteHeaderMobile";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Breadcrumb } from "@/components/ui/navigation/Breadcrumb";

export default function AboutPage() {
  return (
    <div style={{ background: "var(--bg-page)", minHeight: "100vh" }}>
      <div className="desktop-only">
        <SiteHeader page="about" />
      </div>
      <div className="mobile-only">
        <SiteHeaderMobile page="about" />
      </div>
      <main style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "var(--sp-10) 24px 0" }}>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} style={{ marginBottom: "var(--sp-6)" }} />
        <div style={{ maxWidth: 720, marginBottom: "var(--sp-12)" }}>
          <h1 style={{ margin: "0 0 12px", fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--t-h1)", letterSpacing: "-0.015em", color: "var(--text-heading)" }}>
            About SINU
          </h1>
          <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: "var(--t-lead)", lineHeight: 1.55, color: "var(--text-body)" }}>
            Solomon Islands National University is the country&apos;s national university, delivering teaching, research, and community engagement across five faculties.
          </p>
        </div>
      </main>
      <div style={{ marginTop: "var(--sp-16)" }}>
        <SiteFooter />
      </div>
    </div>
  );
}
