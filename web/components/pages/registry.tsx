import { notFound } from "next/navigation";
import HomePage from "@/components/pages/HomePage/HomePage";
import type { HomePage as HomePageType } from "@/components/pages/HomePage/types";

/**
 * Union of every CMS page type the frontend can render. Adding a new
 * page type is a three-step change: create its component folder under
 * components/pages/<Type>/, add the type to CmsPage, and add a
 * matching case below. TypeScript narrows the union per case so each
 * component receives fully-typed props.
 *
 * Unknown typenames (e.g. a page type the CMS has but the frontend
 * hasn't been wired for yet) trigger a 404 rather than a silent blank
 * page.
 */
export type CmsPage = HomePageType;

export function renderCmsPage(page: CmsPage) {
  switch (page.__typename) {
    case "HomePage":
      return <HomePage page={page} />;
    default:
      notFound();
  }
}
