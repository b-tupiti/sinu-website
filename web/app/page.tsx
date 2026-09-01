import { draftMode } from "next/headers";
import { cmsFetch } from "@/lib/cms";
import { HOME_PAGE_QUERY } from "@/components/pages/HomePage/queries";
import { GET_PAGE_BY_TOKEN } from "@/lib/queries";
import HomePage from "@/components/pages/HomePage/HomePage";
import type { HomePage as HomePageType } from "@/components/pages/HomePage/types";

// Rendered per request, like all CMS-backed pages — prerendering would
// bake in whatever the CMS returned at build time, and CI builds
// without a reachable CMS. See app/[...slug]/page.tsx for the same
// note on the catch-all.
export const dynamic = "force-dynamic";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const [{ token }, { isEnabled: isDraft }] = await Promise.all([
    searchParams,
    draftMode(),
  ]);

  // Preview: when Wagtail's live-preview iframe (or the Preview button)
  // lands here with draftMode enabled and a token, fetch the unsaved
  // revision instead of the published page. Same pattern the catch-all
  // uses — without it, the preview panel silently shows the published
  // home page.
  const data =
    isDraft && token
      ? await cmsFetch<{ page: HomePageType | null }>(GET_PAGE_BY_TOKEN, {
          token,
        })
      : await cmsFetch<{ page: HomePageType | null }>(HOME_PAGE_QUERY);

  const page = data.page;
  if (!page) {
    throw new Error("HomePage not found in CMS");
  }
  return <HomePage page={page} />;
}
