/**
 * CV Personal Information Configuration
 * Extracted from cv-header component
 */

export interface CvProfile {
  name: string;
  title: string;
  location?: string;
  education: string;
  intro: string;
  email: string;
  website: string;
}

export const cvProfile: CvProfile = {
  name: "Arne Wiese",
  title: "Senior AI Software Engineer",
  location: "Meerbusch",
  education: "M.Sc. Energy Science and Technology",
  intro:
    "10+ Jahre Full-Stack-Entwicklung – spezialisiert auf pragmatische Lösungen, schnelle MVPs und KI-Integration",
  email: "arne@wiese.me",
  website: "wiesson.dev",
};

export const cvFooter = {
  text: "Arne Wiese, Heinenkamp 2a, 40670 Meerbusch, +491751109743, arne@wiese.me",
};
