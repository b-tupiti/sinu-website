export interface CMSImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface HomepageData {
  eyebrow: string;
  title: string;
  lead: string;
  intro: string;
  searchPlaceholder: string;
  heroImage: CMSImage;
  metrics: { value: string; label: string }[];
  pillars: { title: string; body: string }[];
  centres: { title: string; body: string }[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaBody: string;
  ctaImage: CMSImage;
}

export interface Faculty {
  slug: string;
  abbr: string;
  name: string;
  tagline: string;
  description: string[];
  departments: string[];
  dean: { name: string; title: string; quote: string };
  heroImage: CMSImage;
}

export interface EventItem {
  id: string;
  day: string;
  month: string;
  weekday: string;
  title: string;
  blurb?: string;
  time: string;
  location: string;
  tag: string;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  faculty: string;
  email: string;
}

export interface AdmissionsData {
  deadline: string;
  intro: string;
  steps: { title: string; body: string }[];
  keyDates: { date: string; title: string; badge?: string }[];
  ctaBody: string;
  contactEmail: string;
  contactPhone: string;
}
