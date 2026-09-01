import { PAGE_FRAGMENT } from "../Page/fragment";
import { HOME_PAGE_FRAGMENT } from "./fragment";

/**
 * Direct singleton lookup for the home page. Equivalent to
 * `page(urlPath: "/")`, but named so the intent is obvious and any
 * home-only fields can be added without touching the shared GET_PAGE.
 */
export const HOME_PAGE_QUERY = /* GraphQL */ `
  ${PAGE_FRAGMENT}
  ${HOME_PAGE_FRAGMENT}
  query HomePage {
    page(urlPath: "/") {
      ...PageBase
      ... on HomePage {
        ...HomePage
      }
    }
  }
`;
