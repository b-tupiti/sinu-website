import type { HomepageData } from "./types";

// Intended shape once Wagtail (wagtail-grapple) is live: a singleton
// HomePage type exposing these fields directly.
export const HOMEPAGE_QUERY = /* GraphQL */ `
  query Homepage {
    homePage {
      eyebrow
      title
      lead
      intro
      searchPlaceholder
      heroImage { url alt width height }
      metrics { value label }
      pillars { title body }
      centres { title body image { url alt width height } }
      ctaEyebrow
      ctaTitle
      ctaBody
      ctaImage { url alt width height }
    }
  }
`;

export async function getHomepage(): Promise<HomepageData> {
  return {
    eyebrow: "Honiara · Solomon Islands",
    title: "The national university of Solomon Islands",
    lead: "Raising standards of education and applied research in the Pacific region.",
    intro:
      "Five faculties and study from certificate to postgraduate level — in Honiara and through distance and flexible learning.",
    searchPlaceholder: "Search courses and programs…",
    heroImage: {
      url: "/hero-home.jpg",
      alt: "Solomon Islands National University campus",
    },
    metrics: [
      { value: "5", label: "Faculties" },
      { value: "24", label: "Programs" },
      { value: "6,000+", label: "Students" },
      { value: "9", label: "Provinces served" },
    ],
    pillars: [
      { title: "Vision", body: "A quality national university, raising standards of education and applied research in the Pacific region." },
      {
        title: "Mission",
        body: "Championing the pursuit of knowledge, skills, academic inquiry and applied research to transform lives through higher education and training, inclusive of diverse communities, while providing relevant solutions for the Solomon Islands.",
      },
      { title: "Values", body: "Excellence and quality in teaching, learning, skills training and research; innovativeness in meeting new challenges; and relevance to the needs of Solomon Islands." },
    ],
    centres: [
      {
        title: "University Preparatory College",
        body: "Foundation and bridging study for school leavers and mature entrants.",
        image: {
          url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1800&q=85&auto=format&fit=crop",
          alt: "students in a preparatory college classroom",
        },
      },
      {
        title: "Distance & Flexible Learning Centre",
        body: "Study from the provinces through flexible and distance delivery.",
        image: {
          url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1800&q=85&auto=format&fit=crop",
          alt: "student studying remotely with a laptop",
        },
      },
      {
        title: "Office of Research & Postgraduate Studies",
        body: "Masters, doctoral supervision, and applied research programs.",
        image: {
          url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1800&q=85&auto=format&fit=crop",
          alt: "postgraduate researcher at work",
        },
      },
      {
        title: "Institute of Governance, Diplomacy and Development",
        body: "Policy research, short courses, and public-sector training.",
        image: {
          url: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1800&q=85&auto=format&fit=crop",
          alt: "government building with columns",
        },
      },
    ],
    ctaEyebrow: "Semester 1 · 2027 intake",
    ctaTitle: "Applications close 28 November 2026",
    ctaBody: "School leavers with Form 6 or 7, and mature applicants over 25. The online form takes about 20 minutes — save and come back anytime.",
    ctaImage: {
      url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=85&auto=format&fit=crop",
      alt: "students walking across campus",
    },
  };
}
