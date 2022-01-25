export interface Listing {
  company: string;
  project?: string;
  title?: string;
  position: string;
  location: string;
  type: "project" | "permanent" | "side" | "education";
  from: string;
  to: string;
  tasks?: string[];
  technologies?: string[];
}
