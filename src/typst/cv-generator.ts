/**
 * Generate complete Typst source code for CV from data
 * This generates the entire Typst document as a string, avoiding dictionary access issues
 */

import type { TypstCvData } from "./cv-types.js";
import { cvFooter } from "../lib/config/cv.js";

/**
 * Escape string for Typst
 */
function escapeTypstString(str: string): string {
  return str
    .replace(/\\/g, "\\\\") // Escape backslashes first
    .replace(/"/g, '\\"') // Escape quotes
    .replace(/#/g, "\\#") // Escape hash (Typst syntax)
    .replace(/\$/g, "\\$") // Escape dollar (Typst syntax)
    .replace(/</g, "\\<") // Escape less-than (Typst label syntax)
    .replace(/>/g, "\\>") // Escape greater-than (Typst label syntax)
    .replace(/@/g, "\\@"); // Escape @ (Typst label syntax)
}

/**
 * Generate Typst source for a work entry
 */
function generateWorkEntryTypst(
  entry: TypstCvData["mainWork"][0] | TypstCvData["sideWork"][0],
  showDetails: boolean = false
): string {
  let result = `#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[${escapeTypstString(entry.dates)}]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[`;

  // Project and company
  if (entry.project) {
    result += `${escapeTypstString(entry.project)}`;
    result += ` / `;
  }
  result += `${escapeTypstString(entry.company)}`;
  result += `]
        `;

  // Position
  if (entry.position) {
    result += `#linebreak()
        #text(size: 9pt)[${escapeTypstString(entry.position)}]
        `;
  }

  // Location
  if (entry.location) {
    result += `#linebreak()
        #text(size: 9pt)[${escapeTypstString(entry.location)}]
        `;
  }

  // Intro
  if (entry.intro) {
    result += `#v(0.3em)
        #text(size: 9pt)[${escapeTypstString(entry.intro)}]
        `;
  }

  // Tasks - only show if showDetails is true
  if (showDetails && entry.tasks && entry.tasks.length > 0) {
    result += `#v(0.3em)
        #list(
`;
    for (const task of entry.tasks) {
      result += `          [#text(size: 9pt)[${escapeTypstString(task)}]],
`;
    }
    result += `        )
        `;
  }

  // Technologies
  if (entry.technologies && entry.technologies.length > 0) {
    result += `#v(0.3em)
        #text(size: 8pt)[${entry.technologies.map((t) => escapeTypstString(t)).join(", ")}]
        `;
  }

  result += `      ]
    )
  ]
    
`;

  return result;
}

/**
 * Generate Typst source for an education entry
 */
function generateEducationEntryTypst(
  entry: TypstCvData["education"][0],
  showDetails: boolean = false
): string {
  let result = `#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[${escapeTypstString(entry.dates)}]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[${escapeTypstString(entry.title)}]
        #linebreak()
        #text(size: 9pt)[${escapeTypstString(entry.location)}]
        `;

  // Tasks - only show if showDetails is true
  if (showDetails && entry.tasks && entry.tasks.length > 0) {
    result += `#v(0.3em)
        #list(
`;
    for (const task of entry.tasks) {
      result += `          [#text(size: 9pt)[${escapeTypstString(task)}]],
`;
    }
    result += `        )
        `;
  }

  result += `      ]
    )
  ]
    
`;

  return result;
}

/**
 * Generate complete Typst source code for CV
 */
export function generateCvTypstSource(
  data: TypstCvData,
  showDetails: boolean = false
): string {
  const profile = data.profile;

  let typstSource = `#set page(
  paper: "a4",
  margin: (
    left: 20mm,
    right: 20mm,
    top: 20mm,
    bottom: 20mm,
  ),
  footer: [
    #align(center)[
      #text(size: 8pt)[${escapeTypstString(cvFooter.text)}]
    ]
  ]
)

// Text defaults
#set text(
  font: ("Inter", "Helvetica", "Arial", "PT Sans"),
  fallback: true,
  size: 10pt,
  hyphenate: false
)

#set par(leading: 0.65em)

// Profile Section
#align(center)[
  #text(size: 18pt, weight: "bold")[${escapeTypstString(profile.name)}]
  
  #v(0.3em)
  
  #text(size: 11pt)[
    ${escapeTypstString(profile.title)}`;

  if (profile.location) {
    typstSource += `
    · ${escapeTypstString(profile.location)}`;
  }

  typstSource += `
  ]
  `;

  if (profile.education) {
    typstSource += `
  #v(0.2em)
  #text(size: 9pt)[${escapeTypstString(profile.education)}]
  `;
  }

  if (profile.intro) {
    typstSource += `
  #v(0.5em)
  #text(size: 10pt)[${escapeTypstString(profile.intro)}]
  `;
  }

  // Use raw() for email to avoid Typst interpreting @ as label syntax
  typstSource += `
  #v(0.3em)
  
  #text(size: 9pt)[#raw("${profile.email.replace(/"/g, '\\"')}")`;

  if (profile.website) {
    typstSource += ` · #raw("${profile.website.replace(/"/g, '\\"')}")`;
  }

  typstSource += `]
]

#v(1cm)

`;

  // Main Work Section
  if (data.mainWork && data.mainWork.length > 0) {
    typstSource += `// Main Work Section
#text(size: 12pt, weight: "semibold")[Projekte & Festanstellungen]
#v(0.5em)

`;

    for (const entry of data.mainWork) {
      typstSource += generateWorkEntryTypst(entry, showDetails);
      typstSource += `#v(0.8em)

`;
    }
  }

  typstSource += `#v(0.5cm)

`;

  // Side Work Section
  if (data.sideWork && data.sideWork.length > 0) {
    typstSource += `// Side Work Section
#text(size: 12pt, weight: "semibold")[Nebenprojekte]
#v(0.5em)

`;

    for (const entry of data.sideWork) {
      typstSource += generateWorkEntryTypst(entry, showDetails);
      typstSource += `#v(0.8em)

`;
    }
  }

  typstSource += `#v(0.5cm)

`;

  // Education Section
  if (data.education && data.education.length > 0) {
    typstSource += `// Education Section
#text(size: 12pt, weight: "semibold")[Ausbildung]
#v(0.5em)

`;

    for (const entry of data.education) {
      typstSource += generateEducationEntryTypst(entry, showDetails);
      typstSource += `#v(0.8em)

`;
    }
  }

  return typstSource;
}
