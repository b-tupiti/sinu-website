import type { Page } from "../Page/types";

export type HeroPage = { url: string | null; urlPath: string } | null;

export type HeroImage = {
  url: string;
  width: number;
  height: number;
  title: string;
} | null;

export type HeroVideo = {
  url: string;
  title: string;
} | null;

export type HeroItem = {
  id: string;
  blockType: "HeroItemBlock";
  // Editor's per-item feature flag. Null or true = visible on live;
  // false = hidden on live but still rendered in preview with a badge.
  display: boolean | null;
  mainText: string;
  subText: string;
  primaryButtonText: string;
  primaryButtonPage: HeroPage;
  secondaryButtonText: string;
  secondaryButtonPage: HeroPage;
  image: HeroImage;
  video: HeroVideo;
};

export type HomePage = Page & {
  __typename: "HomePage";
  hero: HeroItem[];
};
