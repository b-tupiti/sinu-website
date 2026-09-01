import { cmsFetch } from "@/lib/cms";
import { HOME_PAGE_QUERY } from "@/components/pages/HomePage/queries";
import HomePage from "@/components/pages/HomePage/HomePage";
import type { HomePage as HomePageType } from "@/components/pages/HomePage/types";

export default async function Page() {
  const data = await cmsFetch<{ page: HomePageType | null }>(HOME_PAGE_QUERY);
  const page = data.page;
  if (!page) {
    throw new Error("HomePage not found in CMS");
  }
  return <HomePage page={page} />;
}
