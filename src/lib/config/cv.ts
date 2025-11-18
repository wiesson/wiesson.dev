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

// German version (default)
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

// English version
export const cvProfileEn: CvProfile = {
  name: "Arne Wiese",
  title: "Senior AI Software Engineer",
  location: "Meerbusch",
  education: "M.Sc. Energy Science and Technology",
  intro:
    "10+ years of full-stack development – specialized in pragmatic solutions, rapid MVPs, and AI integration",
  email: "arne@wiese.me",
  website: "wiesson.dev",
};

/**
 * Get CV profile based on language
 */
export function getCvProfile(lang: string = 'de'): CvProfile {
  return lang === 'en' ? cvProfileEn : cvProfile;
}

export const cvFooter = {
  text: "Arne Wiese, Heinenkamp 2a, 40670 Meerbusch, +491751109743, arne@wiese.me",
};
