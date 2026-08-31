import type { Faculty } from "./types";

// Intended shape once Wagtail is live: a FacultyPage type listed via
// `facultyPages { slug abbr name tagline ... }` and fetched singly by slug.
export const FACULTIES_QUERY = /* GraphQL */ `
  query Faculties {
    facultyPages {
      slug
      abbr
      name
      tagline
      description
      departments
      dean { name title quote }
      heroImage { url alt width height }
    }
  }
`;

export const FACULTY_BY_SLUG_QUERY = /* GraphQL */ `
  query FacultyBySlug($slug: String!) {
    facultyPage(slug: $slug) {
      slug
      abbr
      name
      tagline
      description
      departments
      dean { name title quote }
      heroImage { url alt width height }
    }
  }
`;

const FACULTIES: Faculty[] = [
  {
    slug: "nursing-health",
    abbr: "FNMHS",
    name: "Nursing & Health",
    tagline: "Advancing healthcare through rigorous clinical practice and research.",
    description: [
      "The Faculty of Nursing, Medicine & Health Sciences trains the clinicians, nurses, and public health practitioners the Solomon Islands relies on, with clinical placements at the National Referral Hospital and provincial clinics.",
      "Programs combine hands-on ward practice with community health outreach across Honiara and the provinces.",
    ],
    departments: ["Nursing", "Midwifery", "Public Health", "Nutrition & Dietetics"],
    dean: {
      name: "Dr. Mere Vuki",
      title: "Dean, Faculty of Nursing, Medicine & Health Sciences",
      quote: "Our graduates are trusted in every clinic and ward across the Solomons — that trust is what we train for.",
    },
    heroImage: {
      url: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=1800&q=85&auto=format&fit=crop",
      alt: "nursing students practicing clinical skills",
    },
  },
  {
    slug: "science-technology",
    abbr: "FST",
    name: "Science & Technology",
    tagline: "Driving innovation in environmental science, engineering, and information technology.",
    description: [
      "The Faculty of Science and Technology is dedicated to providing high-quality education and research opportunities in scientific and technical disciplines critical to the region's unique environments and emerging industries.",
      "Through practical, hands-on learning and strong industry partnerships, our students graduate ready to tackle complex challenges in IT, environmental management, biology, and applied mathematics.",
    ],
    departments: ["Computing & Information Technology", "Environmental Studies", "Applied Sciences", "Mathematics & Physics", "Forestry & Agriculture", "Marine Science"],
    dean: {
      name: "Dr. John Doe",
      title: "Dean, Faculty of Science & Technology",
      quote: "Welcome to a faculty where innovation meets nature — we prepare students for the technology of tomorrow while preserving the biodiversity of the Pacific.",
    },
    heroImage: {
      url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1800&q=85&auto=format&fit=crop",
      alt: "students in a computing lab",
    },
  },
  {
    slug: "education",
    abbr: "FEH",
    name: "Education",
    tagline: "Preparing the next generation of educators for Solomon Islands.",
    description: [
      "The Faculty of Education & Humanities prepares teachers for primary and secondary classrooms across the country, with a curriculum grounded in Pacific-centred pedagogy and community consultation.",
      "Every program includes supervised school placements, so graduates step into the classroom with real teaching experience.",
    ],
    departments: ["Primary Education", "Secondary Education", "Early Childhood Education", "Educational Leadership", "TESOL"],
    dean: {
      name: "Dr. Selina Bosawai",
      title: "Dean, Faculty of Education & Humanities",
      quote: "Good teaching starts with understanding the community you're teaching in — that's what we build first.",
    },
    heroImage: {
      url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1800&q=85&auto=format&fit=crop",
      alt: "trainee teacher leading a classroom lesson",
    },
  },
  {
    slug: "business-management",
    abbr: "FBTS",
    name: "Business & Management",
    tagline: "Building the entrepreneurs, accountants, and tourism leaders of the Pacific.",
    description: [
      "The Faculty of Business & Tourism Studies covers everything from small-business management to hotel operations, preparing graduates for both the public and private sectors.",
      "Close ties with Honiara's business community mean regular guest lectures, internships, and industry-set assessment.",
    ],
    departments: ["Business Administration", "Accounting & Commerce", "Tourism & Hospitality Management", "Economics"],
    dean: {
      name: "Dr. Patteson Iromea",
      title: "Dean, Faculty of Business & Tourism Studies",
      quote: "The Solomon Islands' next generation of business leaders is sitting in our lecture halls right now.",
    },
    heroImage: {
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1800&q=85&auto=format&fit=crop",
      alt: "business students in a group discussion",
    },
  },
  {
    slug: "arts-humanities",
    abbr: "FAH",
    name: "Arts & Humanities",
    tagline: "Interdisciplinary study in language, history, and community development.",
    description: [
      "The Faculty of Arts & Humanities offers broad study across the humanities and social sciences, with a strong focus on Pacific history, culture, and community development.",
      "Graduates go on to careers in media, social work, government, and cultural institutions across the Solomon Islands.",
    ],
    departments: ["Social Sciences", "Pacific History", "Social Work", "Media & Journalism", "Applied Linguistics"],
    dean: {
      name: "Dr. Grace Kwaimani",
      title: "Dean, Faculty of Arts & Humanities",
      quote: "Understanding where we come from is how our students learn to shape where the Solomons is going.",
    },
    heroImage: {
      url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1800&q=85&auto=format&fit=crop",
      alt: "students discussing in a humanities seminar",
    },
  },
];

export async function getFaculties(): Promise<Faculty[]> {
  return FACULTIES;
}

export async function getFacultyBySlug(slug: string): Promise<Faculty | undefined> {
  return FACULTIES.find((f) => f.slug === slug);
}
