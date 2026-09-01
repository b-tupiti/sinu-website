import { cmsFetch } from "@/lib/cms";
import { HOME_PAGE_QUERY } from "@/components/pages/HomePage/queries";
import HomePage from "@/components/pages/HomePage/HomePage";
import type { HomePage as HomePageType } from "@/components/pages/HomePage/types";

// Rendered per request, like all CMS-backed pages — prerendering would
// bake in whatever the CMS returned at build time, and CI builds
// without a reachable CMS. See app/[...slug]/page.tsx for the same
// note on the catch-all.
export const dynamic = "force-dynamic";

export default async function Page() {
  const data = await cmsFetch<{ page: HomePageType | null }>(HOME_PAGE_QUERY);
  const page = data.page;
  if (!page) {
    throw new Error("HomePage not found in CMS");
  }
  return <HomePage page={page} />;
}
