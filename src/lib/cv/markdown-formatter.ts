/**
 * Format CV data as markdown optimized for LLM consumption
 */

import type {
  TypstCvData,
  TypstWorkEntry,
  TypstEducationEntry,
  TypstProfile,
} from "../../typst/cv-types.js";

export interface MarkdownOptions {
  detail: "full" | "compact";
}

/**
 * Format CV data as clean markdown for LLM consumption
 */
export function formatCvAsMarkdown(
  cvData: TypstCvData,
  options: MarkdownOptions = { detail: "full" }
): string {
  const { profile, mainWork, sideWork, education } = cvData;
  const { detail } = options;
  const lines: string[] = [];

  // Header
  lines.push(`# CV: ${profile.name}`);
  lines.push("");

  // Profile section
  lines.push(...formatProfile(profile));

  // Main work experience
  if (mainWork.length > 0) {
    lines.push("## Professional Experience");
    lines.push("");
    mainWork.forEach((entry) => {
      lines.push(...formatWorkEntry(entry, detail));
    });
  }

  // Side projects
  if (sideWork.length > 0) {
    lines.push("## Side Projects");
    lines.push("");
    sideWork.forEach((entry) => {
      lines.push(...formatWorkEntry(entry, detail));
    });
  }

  // Education
  if (education.length > 0) {
    lines.push("## Education");
    lines.push("");
    education.forEach((entry) => {
      lines.push(...formatEducationEntry(entry, detail));
    });
  }

  // Footer
  lines.push("---");
  lines.push("");
  lines.push("*Generated from wiesson.dev*");

  return lines.join("\n");
}

function formatProfile(profile: TypstProfile): string[] {
  const lines: string[] = [];

  lines.push("## Profile");
  lines.push("");
  lines.push(`**Title:** ${profile.title}`);
  if (profile.location) lines.push(`**Location:** ${profile.location}`);
  if (profile.education) lines.push(`**Education:** ${profile.education}`);
  if (profile.email) lines.push(`**Email:** ${profile.email}`);
  if (profile.website) lines.push(`**Website:** ${profile.website}`);
  lines.push("");

  if (profile.intro) {
    lines.push(`> ${profile.intro}`);
    lines.push("");
  }

  lines.push("---");
  lines.push("");

  return lines;
}

function formatWorkEntry(
  entry: TypstWorkEntry,
  detail: "full" | "compact"
): string[] {
  const lines: string[] = [];

  // Header with company and project
  const title = entry.project
    ? `### ${entry.company} | ${entry.project}`
    : `### ${entry.company}`;
  lines.push(title);

  // Metadata
  if (entry.position) lines.push(`**Position:** ${entry.position}`);
  lines.push(`**Period:** ${entry.dates}`);
  if (entry.location) lines.push(`**Location:** ${entry.location}`);
  lines.push(
    `**Type:** ${entry.projectType === "permanent" ? "Permanent" : "Project-based"}`
  );
  lines.push("");

  // Intro
  if (entry.intro) {
    lines.push(entry.intro);
    lines.push("");
  }

  // Tasks (only in full mode)
  if (detail === "full" && entry.tasks && entry.tasks.length > 0) {
    lines.push("**Key Responsibilities:**");
    entry.tasks.forEach((task) => {
      lines.push(`- ${task}`);
    });
    lines.push("");
  }

  // Technologies
  if (entry.technologies && entry.technologies.length > 0) {
    lines.push(`**Technologies:** ${entry.technologies.join(", ")}`);
    lines.push("");
  }

  lines.push("---");
  lines.push("");

  return lines;
}

function formatEducationEntry(
  entry: TypstEducationEntry,
  detail: "full" | "compact"
): string[] {
  const lines: string[] = [];

  lines.push(`### ${entry.title}`);
  lines.push(`**Institution:** ${entry.location}`);
  lines.push(`**Period:** ${entry.dates}`);
  lines.push("");

  if (entry.intro) {
    lines.push(entry.intro);
    lines.push("");
  }

  if (detail === "full" && entry.tasks && entry.tasks.length > 0) {
    entry.tasks.forEach((task) => {
      lines.push(`- ${task}`);
    });
    lines.push("");
  }

  lines.push("---");
  lines.push("");

  return lines;
}
