/**
 * CV LLM-Optimized API Endpoint
 * Returns CV data in markdown format optimized for LLM consumption
 *
 * Query Parameters:
 * - lang: 'de' | 'en' (default: 'de')
 * - detail: 'full' | 'compact' (default: 'full')
 */

import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { transformCvToTypst } from "../../../typst/cv-transform.js";
import { formatCvAsMarkdown } from "../../../lib/cv/markdown-formatter.js";

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  try {
    // Parse query parameters
    const lang = url.searchParams.get("lang") || "de";
    const isEnglish = lang === "en";

    const detailParam = url.searchParams.get("detail");
    const detail: "full" | "compact" =
      detailParam === "compact" ? "compact" : "full";

    // Load CV data from content collections
    const [workEntries, educationEntries] = await Promise.all([
      getCollection(isEnglish ? "work-en" : "work"),
      getCollection(isEnglish ? "education-en" : "education"),
    ]);

    // Transform to intermediate format (reuse existing transform)
    const cvData = transformCvToTypst(workEntries, educationEntries, lang);

    // Transform to markdown
    const markdown = formatCvAsMarkdown(cvData, { detail });

    // Return as plain text markdown
    return new Response(markdown, {
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (err: unknown) {
    console.error("CV LLM generation error:", err);

    const message = err instanceof Error ? err.message : "Unknown error";

    return new Response(
      JSON.stringify({
        error: "Failed to generate CV",
        message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
