export interface Course {
  id: string;
  title: string;
  faculty: string;
  level: string;
  duration: string;
  description: string;
  tags: string[];
}

export const mockCourses: Course[] = [
  // Nursing & Health
  { id: "NUR101", title: "Bachelor of Nursing", faculty: "Nursing & Health", level: "Undergraduate", duration: "3 Years", description: "Comprehensive nursing program preparing students for registered nursing practice.", tags: ["Nursing", "Health", "Clinical"] },
  { id: "MID201", title: "Diploma in Midwifery", faculty: "Nursing & Health", level: "Undergraduate", duration: "2 Years", description: "Specialized training for maternal and infant care.", tags: ["Midwifery", "Maternal", "Health"] },
  { id: "PUB301", title: "Bachelor of Public Health", faculty: "Nursing & Health", level: "Undergraduate", duration: "3 Years", description: "Focuses on community health, epidemiology, and health promotion.", tags: ["Public Health", "Community", "Epidemiology"] },
  { id: "PHM401", title: "Master of Public Health", faculty: "Nursing & Health", level: "Postgraduate", duration: "2 Years", description: "Advanced studies in health policy, management, and research.", tags: ["Public Health", "Postgraduate", "Policy"] },
  { id: "NUT150", title: "Certificate in Nutrition", faculty: "Nursing & Health", level: "TVET", duration: "6 Months", description: "Basic principles of human nutrition and dietetics.", tags: ["Nutrition", "Diet", "Health"] },
  
  // Science & Technology
  { id: "IT101", title: "Bachelor of Information Technology", faculty: "Science & Technology", level: "Undergraduate", duration: "3 Years", description: "Core computing skills including programming, networking, and databases.", tags: ["IT", "Computing", "Technology"] },
  { id: "CS201", title: "Bachelor of Computer Science", faculty: "Science & Technology", level: "Undergraduate", duration: "3 Years", description: "Theoretical and practical foundations of computer science and software engineering.", tags: ["Computer Science", "Software", "Programming"] },
  { id: "ENV301", title: "Bachelor of Environmental Science", faculty: "Science & Technology", level: "Undergraduate", duration: "3 Years", description: "Study of environmental systems, conservation, and sustainability.", tags: ["Environment", "Science", "Conservation"] },
  { id: "AGR101", title: "Diploma in Tropical Agriculture", faculty: "Science & Technology", level: "Undergraduate", duration: "2 Years", description: "Agricultural practices suitable for tropical climates and sustainable farming.", tags: ["Agriculture", "Tropical", "Farming"] },
  { id: "ITM401", title: "Master of IT Management", faculty: "Science & Technology", level: "Postgraduate", duration: "2 Years", description: "Developing leadership skills for IT professionals.", tags: ["IT", "Management", "Leadership"] },
  { id: "FOR101", title: "Certificate in Forestry Science", faculty: "Science & Technology", level: "TVET", duration: "1 Year", description: "Introduction to forest management and conservation techniques.", tags: ["Forestry", "Conservation", "Science"] },
  { id: "MAR201", title: "Bachelor of Marine Biology", faculty: "Science & Technology", level: "Undergraduate", duration: "3 Years", description: "Exploration of marine ecosystems and oceanography.", tags: ["Marine", "Biology", "Ocean"] },

  // Education
  { id: "EDU101", title: "Bachelor of Education (Primary)", faculty: "Education", level: "Undergraduate", duration: "3 Years", description: "Prepares educators for primary school teaching.", tags: ["Education", "Primary", "Teaching"] },
  { id: "EDU102", title: "Bachelor of Education (Secondary)", faculty: "Education", level: "Undergraduate", duration: "3 Years", description: "Specialized training for high school educators in various subjects.", tags: ["Education", "Secondary", "Teaching"] },
  { id: "ECE101", title: "Diploma in Early Childhood Education", faculty: "Education", level: "Undergraduate", duration: "2 Years", description: "Focuses on the development and education of young children.", tags: ["Education", "Early Childhood", "Teaching"] },
  { id: "LDR401", title: "Master of Educational Leadership", faculty: "Education", level: "Postgraduate", duration: "2 Years", description: "Advanced program for aspiring school principals and educational administrators.", tags: ["Education", "Leadership", "Admin"] },
  { id: "TESOL101", title: "Certificate in TESOL", faculty: "Education", level: "TVET", duration: "6 Months", description: "Teaching English to Speakers of Other Languages.", tags: ["English", "Teaching", "Languages"] },

  // Business & Tourism
  { id: "BUS101", title: "Bachelor of Business Administration", faculty: "Business & Management", level: "Undergraduate", duration: "3 Years", description: "Broad-based business education covering finance, marketing, and management.", tags: ["Business", "Management", "Admin"] },
  { id: "ACC201", title: "Bachelor of Commerce (Accounting)", faculty: "Business & Management", level: "Undergraduate", duration: "3 Years", description: "Professional accounting principles and financial management.", tags: ["Accounting", "Commerce", "Finance"] },
  { id: "TOU101", title: "Diploma in Tourism Studies", faculty: "Business & Management", level: "Undergraduate", duration: "2 Years", description: "Introduction to the tourism industry and hospitality management.", tags: ["Tourism", "Hospitality", "Management"] },
  { id: "HOS101", title: "Certificate in Hospitality Operations", faculty: "Business & Management", level: "TVET", duration: "1 Year", description: "Practical skills for hotel and restaurant management.", tags: ["Hospitality", "Hotel", "Operations"] },
  { id: "MBA501", title: "Master of Business Administration (MBA)", faculty: "Business & Management", level: "Postgraduate", duration: "2 Years", description: "Executive leadership and advanced business strategies.", tags: ["MBA", "Business", "Leadership"] },
  { id: "ECO301", title: "Bachelor of Economics", faculty: "Business & Management", level: "Undergraduate", duration: "3 Years", description: "Macro and microeconomic analysis and policy formulation.", tags: ["Economics", "Policy", "Finance"] },

  // Arts & Humanities
  { id: "ART101", title: "Bachelor of Arts", faculty: "Arts & Humanities", level: "Undergraduate", duration: "3 Years", description: "Interdisciplinary study in humanities, languages, and social sciences.", tags: ["Arts", "Humanities", "Social Sciences"] },
  { id: "HIS201", title: "Bachelor of Pacific History", faculty: "Arts & Humanities", level: "Undergraduate", duration: "3 Years", description: "In-depth study of the historical developments of the Pacific Rim.", tags: ["History", "Pacific", "Culture"] },
  { id: "SOC301", title: "Diploma in Social Work", faculty: "Arts & Humanities", level: "Undergraduate", duration: "2 Years", description: "Prepares students for active roles in community development and social services.", tags: ["Social Work", "Community", "Humanities"] },
  { id: "MED101", title: "Certificate in Media & Journalism", faculty: "Arts & Humanities", level: "TVET", duration: "1 Year", description: "Fundamentals of reporting, media ethics, and digital broadcasting.", tags: ["Media", "Journalism", "Broadcasting"] },
  { id: "LAN401", title: "Master of Applied Linguistics", faculty: "Arts & Humanities", level: "Postgraduate", duration: "2 Years", description: "Advanced studies in language structure, acquisition, and societal use.", tags: ["Linguistics", "Languages", "Postgraduate"] }
];

export async function searchCourses(query: string, levelFilter: string = "All"): Promise<Course[]> {
  // Simulate network delay to mimic a real backend
  await new Promise(resolve => setTimeout(resolve, 600 + Math.random() * 400));

  const lowerQuery = query.toLowerCase().trim();
  
  return mockCourses.filter(course => {
    // Check level filter
    if (levelFilter !== "All" && course.level !== levelFilter) {
      return false;
    }
    
    if (!lowerQuery) return true;

    // Search in title, description, and tags
    const inTitle = course.title.toLowerCase().includes(lowerQuery);
    const inDesc = course.description.toLowerCase().includes(lowerQuery);
    const inTags = course.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
    const inFaculty = course.faculty.toLowerCase().includes(lowerQuery);

    return inTitle || inDesc || inTags || inFaculty;
  });
}
