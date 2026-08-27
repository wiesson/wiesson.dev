import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { getCvProfile } from "../lib/config/cv.js";
import { getAgentBrief } from "../lib/cv/agent-brief.js";

/**
 * /llms.txt — generated from the same content collections and config the site
 * renders from, so it cannot drift out of date. Hand-editing this file is the
 * thing we are avoiding: change a rate in agent-brief.ts or add a project in
 * src/content/work, and this updates on the next build.
 */

const RECENT_MANDATES = 6;
const MAX_TECHNOLOGIES = 28;
const TECH_FROM_LAST_MANDATES = 10;

const SITE = "https://www.arnewiese.de";

type WorkEntry = Awaited<ReturnType<typeof getCollection<"work">>>[number];

function endDate(entry: WorkEntry, now: Date): Date {
  return entry.data.to === "now" ? now : entry.data.to;
}

function period(entry: WorkEntry): string {
  const from = entry.data.from.getFullYear();
  const to = entry.data.to === "now" ? "heute" : entry.data.to.getFullYear();
  return from === to ? `${from}` : `${from}–${to}`;
}

function label(entry: WorkEntry): string {
  const { company, project, position } = entry.data;
  const what = project ? `${company} — ${project}` : company;
  return position ? `${what}, ${position}` : what;
}

/**
 * Technologies of the most recent mandates, most-recent-first and deduped.
 * Recency beats raw frequency here: a stack used in 2015 should not outrank
 * the one in use today just because it appeared in more entries.
 */
function currentStack(entries: WorkEntry[]): string[] {
  const seen = new Set<string>();

  for (const entry of entries.slice(0, TECH_FROM_LAST_MANDATES)) {
    const technologies = entry.data.technologies;
    if (!Array.isArray(technologies)) continue;
    for (const tech of technologies) {
      if (typeof tech === "string" && tech.trim()) seen.add(tech.trim());
    }
  }

  return [...seen].slice(0, MAX_TECHNOLOGIES);
}

export const GET: APIRoute = async () => {
  const profile = getCvProfile("de");
  const brief = getAgentBrief("de");
  const now = new Date();

  const work = await getCollection("work");
  const byRecency = [...work].sort((a, b) => endDate(b, now).getTime() - endDate(a, now).getTime());
  const mandates = byRecency.filter((entry) => entry.data.type === "main");
  const current = mandates.filter((entry) => entry.data.to === "now");

  const lines = [
    `# ${profile.name} — Freelance Senior Software Engineer`,
    "",
    `> ${profile.intro}`,
    "",
    `## ${brief.noticeHeading}`,
    "",
    ...brief.notice,
    "",
    "## Lebenslauf",
    "",
    `- [CV (Markdown, deutsch)](${SITE}/cv/llm/de.md): vollständige Projekthistorie, Konditionen, Nein-Liste`,
    `- [CV (Markdown, English)](${SITE}/cv/llm/en.md): same, in English`,
    "",
    `## ${brief.termsHeading}`,
    "",
    ...brief.terms.map((line) => `- ${line}`),
    "",
    `## ${brief.exclusionsHeading}`,
    "",
    ...brief.exclusions.map((line) => `- ${line}`),
    "",
  ];

  if (current.length > 0) {
    lines.push(
      "## Aktuell",
      "",
      ...current.map((entry) => `- ${label(entry)} (seit ${entry.data.from.getFullYear()})`),
      "",
    );
  }

  lines.push(
    "## Zuletzt",
    "",
    ...mandates.slice(0, RECENT_MANDATES).map((entry) => `- ${period(entry)} — ${label(entry)}`),
    "",
    "## Technologien",
    "",
    `Aus den letzten ${TECH_FROM_LAST_MANDATES} Mandaten, aktuellste zuerst:`,
    "",
    currentStack(mandates).join(", "),
    "",
    "## Firmenleistungen",
    "",
    "Websites im Abo, Betrieb und eigene Produkte laufen nicht über diese Seite,",
    "sondern über die Firma: https://nordwerk.studio",
    "",
  );

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
