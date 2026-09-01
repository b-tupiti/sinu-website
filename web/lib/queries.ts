import { PAGE_FRAGMENT } from "@/components/pages/Page/fragment";
import { HOME_PAGE_FRAGMENT } from "@/components/pages/HomePage/fragment";

/**
 * page(urlPath: ...) resolves any Wagtail page by its site-relative URL
 * path. The result carries __typename so the client can dispatch on it.
 * Each per-page fragment is concatenated in — add a new one here (and a
 * matching `... on <TypeName>` spread) whenever a new page type is wired
 * to the frontend.
 */
export const GET_PAGE = /* GraphQL */ `
  ${PAGE_FRAGMENT}
  ${HOME_PAGE_FRAGMENT}
  query GetPage($urlPath: String!) {
    page(urlPath: $urlPath) {
      ...PageBase
      ... on HomePage {
        ...HomePage
      }
    }
  }
`;

/**
 * Same shape as GET_PAGE, but keyed by preview token — used inside
 * draftMode to render the unsaved revision the editor is previewing.
 */
export const GET_PAGE_BY_TOKEN = /* GraphQL */ `
  ${PAGE_FRAGMENT}
  ${HOME_PAGE_FRAGMENT}
  query GetPageByToken($token: String!) {
    page(token: $token) {
      ...PageBase
      ... on HomePage {
        ...HomePage
      }
    }
  }
`;

/**
 * Minimal lookup used by /api/preview to resolve which real URL to
 * redirect the editor to after enabling draftMode.
 */
export const GET_PAGE_META_BY_TOKEN = /* GraphQL */ `
  query GetPageMetaByToken($token: String!) {
    page(token: $token) {
      __typename
      url
      contentType
    }
  }
`;
