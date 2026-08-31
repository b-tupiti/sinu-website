import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteHeaderMobile } from "@/components/layout/SiteHeaderMobile";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Breadcrumb } from "@/components/ui/navigation/Breadcrumb";
import { EventsNewsTabs } from "@/components/events/EventsNewsTabs";
import { getEvents, getNews } from "@/lib/cms/events";

export default async function EventsNewsPage() {
  const [events, news] = await Promise.all([getEvents(), getNews()]);
  return (
    <div style={{ background: "var(--bg-page)", minHeight: "100vh" }}>
      <div className="desktop-only">
        <SiteHeader page="events" />
      </div>
      <div className="mobile-only">
        <SiteHeaderMobile page="events" />
      </div>
      <main style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "var(--sp-10) 24px 0" }}>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Events & news" }]} style={{ marginBottom: "var(--sp-6)" }} />
        <h1 style={{ margin: "0 0 var(--sp-6)", fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--t-h1)", letterSpacing: "-0.015em", color: "var(--text-heading)" }}>Events & news</h1>
        <EventsNewsTabs events={events} news={news} />
      </main>
      <div style={{ marginTop: "var(--sp-16)" }}>
        <SiteFooter />
      </div>
    </div>
  );
}
