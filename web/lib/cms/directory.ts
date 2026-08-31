import type { StaffMember } from "./types";

// Intended shape once Wagtail is live: a StaffMember snippet type queried
// with search/filter args pushed down to the CMS instead of filtered here.
export const STAFF_DIRECTORY_QUERY = /* GraphQL */ `
  query StaffDirectory($query: String, $faculty: String) {
    staffMembers(query: $query, faculty: $faculty) {
      id
      name
      role
      faculty
      email
    }
  }
`;

const STAFF: StaffMember[] = [
  { id: "m-vuki", name: "Dr. Mere Vuki", role: "Senior lecturer", faculty: "Nursing & Health", email: "m.vuki@sinu.edu.sb" },
  { id: "s-bosawai", name: "Dr. Selina Bosawai", role: "Course coordinator", faculty: "Education", email: "s.bosawai@sinu.edu.sb" },
  { id: "j-wale", name: "Prof. John Wale", role: "Head of school", faculty: "Science & Technology", email: "j.wale@sinu.edu.sb" },
  { id: "r-maelagi", name: "Ms. Ruth Maelagi", role: "Admissions officer", faculty: "Student services", email: "r.maelagi@sinu.edu.sb" },
  { id: "p-iromea", name: "Dr. Patteson Iromea", role: "Lecturer", faculty: "Business & Management", email: "p.iromea@sinu.edu.sb" },
  { id: "d-aihari", name: "Mr. Derek Aihari", role: "Lecturer", faculty: "Science & Technology", email: "d.aihari@sinu.edu.sb" },
  { id: "g-kwaimani", name: "Dr. Grace Kwaimani", role: "Research fellow", faculty: "Arts & Humanities", email: "g.kwaimani@sinu.edu.sb" },
  { id: "l-ramo", name: "Ms. Lily Ramo", role: "Registrar", faculty: "Administration", email: "l.ramo@sinu.edu.sb" },
];

export async function getStaffDirectory(): Promise<StaffMember[]> {
  return STAFF;
}
