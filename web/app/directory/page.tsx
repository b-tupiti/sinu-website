import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Breadcrumb } from "@/components/ui/navigation/Breadcrumb";
import { DirectoryList } from "@/components/directory/DirectoryList";
import { getStaffDirectory } from "@/lib/cms/directory";

export default async function DirectoryPage() {
  const staff = await getStaffDirectory();
  return (
    <div style={{ background: "var(--bg-page)", minHeight: "100vh" }}>
      <SiteHeader page="directory" />
      <main style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "var(--sp-10) 24px 0" }}>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Staff directory" }]} style={{ marginBottom: "var(--sp-6)" }} />
        <h1 style={{ margin: "0 0 var(--sp-6)", fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--t-h1)", letterSpacing: "-0.015em", color: "var(--text-heading)" }}>Staff directory</h1>
        <DirectoryList staff={staff} />
      </main>
      <div style={{ marginTop: "var(--sp-16)" }}>
        <SiteFooter />
      </div>
    </div>
  );
}
