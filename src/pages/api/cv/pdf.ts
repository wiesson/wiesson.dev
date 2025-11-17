/**
 * CV PDF Generation API Endpoint
 * Generates PDF from CV data using Node.js Typst compiler
 */

import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { transformCvToTypst } from "../../../typst/cv-transform.js";
import {
  generatePdfFromCvData,
  generateCvTypstSource,
} from "../../../typst/template.js";

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  try {
    // Load CV data from Astro content collections
    const [workEntries, educationEntries] = await Promise.all([
      getCollection("work"),
      getCollection("education"),
    ]);

    // Transform to Typst format
    const cvData = transformCvToTypst(workEntries, educationEntries);

    // Check format query parameter
    const format = url.searchParams.get("format");

    // Check details query parameter (default: false/off)
    const detailsParam = url.searchParams.get("details");
    const showDetails =
      detailsParam === "true" || detailsParam === "1" || detailsParam === "on";

    // If format=typst, return Typst source code
    if (format === "typst") {
      const typstSource = await generateCvTypstSource(cvData, showDetails);
      return new Response(typstSource, {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Content-Disposition": 'inline; filename="cv-source.typ"',
        },
      });
    }

    // Otherwise, generate and return PDF
    let pdfBuffer: Buffer;
    try {
      pdfBuffer = await generatePdfFromCvData(cvData, showDetails);
    } catch (err: any) {
      // In development, log the CV data structure for debugging
      if (process.env.NODE_ENV === "development") {
        console.error("CV Data structure:", JSON.stringify(cvData, null, 2));
      }
      throw err;
    }

    // Return PDF with download disposition
    const cacheControl =
      process.env.NODE_ENV === "development"
        ? "no-cache, no-store, must-revalidate"
        : "private, max-age=3600";

    return new Response(pdfBuffer as any, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="cv-arne-wiese.pdf"',
        "Cache-Control": cacheControl,
        Pragma: "no-cache",
        Expires: "0",
      },
    });
  } catch (err: any) {
    console.error("CV generation error:", err);

    return new Response(
      JSON.stringify({
        error: "Failed to generate CV",
        message: err.message || "Unknown error",
        details: process.env.NODE_ENV === "development" ? err.stack : undefined,
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
