import type { AdmissionsData } from "./types";

// Intended shape once Wagtail is live: a singleton AdmissionsPage type.
export const ADMISSIONS_QUERY = /* GraphQL */ `
  query Admissions {
    admissionsPage {
      deadline
      intro
      steps { title body }
      keyDates { date title badge }
      ctaBody
      contactEmail
      contactPhone
    }
  }
`;

export async function getAdmissions(): Promise<AdmissionsData> {
  return {
    deadline: "28 Nov 2026",
    intro: "Four steps from choosing a program to accepting your offer.",
    steps: [
      { title: "Choose your program", body: "Browse the catalog and check entry requirements for your chosen program." },
      { title: "Gather documents", body: "School certificates, national ID or passport, and two referee contacts." },
      { title: "Submit your application", body: "Apply online through the student portal, or in person at any campus office." },
      { title: "Receive your offer", body: "Offers are emailed within 4 weeks. Accept online to secure your place." },
    ],
    keyDates: [
      { date: "15 Sep 2026", title: "Applications open", badge: "Open now" },
      { date: "28 Nov 2026", title: "Applications close" },
      { date: "20 Dec 2026", title: "Offers sent" },
      { date: "4–22 Jan 2027", title: "Course registration" },
      { date: "9 Feb 2027", title: "Semester 1 begins" },
    ],
    ctaBody: "The online application takes about 20 minutes. You can save and come back anytime.",
    contactEmail: "admissions@sinu.edu.sb",
    contactPhone: "+677 30111",
  };
}
