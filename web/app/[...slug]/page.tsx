import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { cmsFetch } from "@/lib/cms";
import { GET_PAGE, GET_PAGE_BY_TOKEN } from "@/lib/queries";
import { renderCmsPage, type CmsPage } from "@/components/pages/registry";

/**
 * Catch-all for any URL not served by a more specific app/ route.
 * Resolves the path against the Wagtail page tree; when a page exists,
 * dispatches to its typed component via the registry. When draftMode
 * is on and a preview token is present, fetches the unsaved revision
 * instead.
 */
export default async function CatchAllPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ token?: string }>;
}) {
  const [{ slug }, { token }, { isEnabled: isDraft }] = await Promise.all([
    params,
    searchParams,
    draftMode(),
  ]);

  const urlPath = `/${slug.join("/")}/`;

  const data =
    isDraft && token
      ? await cmsFetch<{ page: CmsPage | null }>(GET_PAGE_BY_TOKEN, { token })
      : await cmsFetch<{ page: CmsPage | null }>(GET_PAGE, { urlPath });

  if (!data.page) {
    notFound();
  }

  return renderCmsPage(data.page);
}
