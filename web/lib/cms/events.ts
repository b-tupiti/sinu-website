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
  { id: "marine-lab", title: "New marine science lab opens at Panatina", summary: "The purpose-built facility supports coastal fisheries research and undergraduate teaching.", date: "2 Oct 2026" },
  { id: "usp-partnership", title: "SINU signs research partnership with USP", summary: "A five-year agreement covering climate adaptation and Pacific education research.", date: "24 Sep 2026" },
  { id: "applications-open", title: "Semester 1 2027 applications now open", summary: "Apply online before 28 November. Scholarship rounds close earlier.", date: "15 Sep 2026" },
  { id: "nursing-graduates", title: "Nursing graduates posted to provincial clinics", summary: "Forty-two new graduates begin placements across nine provinces this month.", date: "2 Sep 2026" },
];

export async function getEvents(): Promise<EventItem[]> {
  return EVENTS;
}

export async function getNews(): Promise<NewsItem[]> {
  return NEWS;
}
