/**
 * HomePage-specific fragment. Currently no fields beyond the base Page
 * are exposed — grapple auto-serves title/slug/url via PageBase, which
 * is enough for the current wiring. Add fields here (with matching
 * graphql_fields on cms/home/models.py:HomePage) as CMS-driven sections
 * come online.
 */
export const HOME_PAGE_FRAGMENT = /* GraphQL */ `
  fragment HomePage on HomePage {
    id
  }
`;
