/**
 * HomePage-specific fragment. Grapple exposes the `hero` StreamField
 * as a list where each entry carries its block type; we spread the
 * one block type we care about (HeroItemBlock) inline so the
 * response is typed end-to-end. Every nested chooser (page, image,
 * document) gets its own inline fragment for the fields the frontend
 * needs.
 */
export const HOME_PAGE_FRAGMENT = /* GraphQL */ `
  fragment HomePage on HomePage {
    id
    hero {
      id
      blockType
      ... on HeroItemBlock {
        display
        mainText
        subText
        primaryButtonText
        primaryButtonPage {
          url
          urlPath
        }
        secondaryButtonText
        secondaryButtonPage {
          url
          urlPath
        }
        image {
          # Request a hero-sized rendition rather than the raw upload
          # so we don't ship a multi-megabyte original to every visitor
          # (Vercel's image optimiser is off — Wagtail is the single
          # source of image variants).
          rendition(width: 1920) {
            url
            width
            height
          }
          title
        }
        video {
          url
          title
        }
      }
    }
  }
`;
