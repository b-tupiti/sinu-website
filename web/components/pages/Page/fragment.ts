/**
 * Shared fields every CMS-driven page carries. Concrete page types
 * spread this fragment and add their own on top.
 *
 * The fragment is defined on grapple's shared PageInterface (every
 * page type implements it), not on the base Page — a fragment on Page
 * would silently drop when applied to a concrete subtype like
 * HomePage.
 */
export const PAGE_FRAGMENT = /* GraphQL */ `
  fragment PageBase on PageInterface {
    __typename
    id
    urlPath
    url
    title
    slug
    seoTitle
    pageType
    contentType
    searchDescription
  }
`;
