import type { EventItem, NewsItem } from "./types";

// Intended shape once Wagtail is live: EventPage and NewsPage listing types.
export const EVENTS_QUERY = /* GraphQL */ `
  query Events {
    eventPages(order: "date") {
      id
      day
      month
      weekday
      title
      blurb
      time
      location
      tag
    }
  }
`;

export const NEWS_QUERY = /* GraphQL */ `
  query News {
    newsPages(order: "-date") {
      id
      title
      summary
      date
      category
      image { url alt width height }
    }
  }
`;

const EVENTS: EventItem[] = [
  { id: "open-day", day: "14", month: "Oct", weekday: "Tue", title: "Open day — Kukum campus", blurb: "Tour the campus, meet lecturers from all five faculties, and get help with your application on the spot.", time: "9:00–15:00", location: "Kukum campus, Honiara", tag: "Admissions" },
  { id: "scholarship-info", day: "28", month: "Oct", weekday: "Tue", title: "Scholarship information session", time: "13:00", location: "Online", tag: "Scholarships" },
  { id: "graduation-2026", day: "07", month: "Nov", weekday: "Fri", title: "Graduation ceremony 2026", time: "10:00", location: "Panatina campus", tag: "Ceremony" },
  { id: "ocean-futures", day: "18", month: "Nov", weekday: "Tue", title: "Public lecture: ocean futures", time: "17:30", location: "Kukum lecture hall", tag: "Research" },
  { id: "application-help-desk", day: "25", month: "Nov", weekday: "Tue", title: "Application help desk", time: "8:30–16:00", location: "All campuses", tag: "Admissions" },
  { id: "research-symposium", day: "03", month: "Dec", weekday: "Thu", title: "Staff research symposium", time: "9:00", location: "Panatina campus", tag: "Research" },
];

const NEWS: NewsItem[] = [
  {
    id: "marine-lab",
    title: "New marine science lab opens at Panatina",
    summary: "The purpose-built facility supports coastal fisheries research and undergraduate teaching, with wet labs and a small research vessel bay.",
    date: "2 Oct 2026",
    category: "Research",
    image: { url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1600&q=85&auto=format&fit=crop", alt: "research lab interior" },
  },
  {
    id: "usp-partnership",
    title: "SINU signs research partnership with USP",
    summary: "A five-year agreement covering climate adaptation and Pacific education research.",
    date: "24 Sep 2026",
    category: "Partnerships",
    image: { url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=85&auto=format&fit=crop", alt: "partnership meeting" },
  },
  {
    id: "applications-open",
    title: "Semester 1 2027 applications now open",
    summary: "Apply online before 28 November. Scholarship rounds close earlier.",
    date: "15 Sep 2026",
    category: "Admissions",
    image: { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=85&auto=format&fit=crop", alt: "students on campus" },
  },
  {
    id: "nursing-graduates",
    title: "Nursing graduates posted to provincial clinics",
    summary: "Forty-two new graduates begin placements across nine provinces this month.",
    date: "2 Sep 2026",
    category: "Community",
    image: { url: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200&q=85&auto=format&fit=crop", alt: "nursing graduates" },
  },
];

const RESEARCH_NEWS: NewsItem[] = [
  {
    id: "coral-monitoring-grant",
    title: "SINU wins Pacific coral reef monitoring grant",
    summary: "A NZ$2.4M award funds a three-year study of reef recovery across the Western Province, led by the Marine Science group.",
    date: "1 Oct 2026",
    category: "Grants",
    image: { url: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1200&q=85&auto=format&fit=crop", alt: "coral reef underwater" },
  },
  {
    id: "climate-adaptation-paper",
    title: "Climate adaptation paper published in Nature Sustainability",
    summary: "Faculty from FST and FAH co-author a study on community-led coastal adaptation strategies across four Solomon Islands villages.",
    date: "22 Sep 2026",
    category: "Publications",
    image: { url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=85&auto=format&fit=crop", alt: "open academic journal" },
  },
  {
    id: "food-security-fieldwork",
    title: "Field study documents traditional root-crop resilience",
    summary: "A twelve-month study across Malaita records varietal diversity of taro and yam under changing rainfall patterns.",
    date: "10 Sep 2026",
    category: "Fieldwork",
    image: { url: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1200&q=85&auto=format&fit=crop", alt: "root crops on a field" },
  },
  {
    id: "postgrad-symposium-call",
    title: "Call for papers: postgraduate research symposium",
    summary: "Abstracts open for the 2027 symposium — themes include Pacific health, marine ecosystems, and applied computing.",
    date: "28 Aug 2026",
    category: "Symposium",
    image: { url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=85&auto=format&fit=crop", alt: "students at a symposium" },
  },
];

export async function getEvents(): Promise<EventItem[]> {
  return EVENTS;
}

export async function getNews(): Promise<NewsItem[]> {
  return NEWS;
}

export async function getResearchNews(): Promise<NewsItem[]> {
  return RESEARCH_NEWS;
}
