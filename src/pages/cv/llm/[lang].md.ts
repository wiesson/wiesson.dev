import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { transformCvToTypst } from "../../../typst/cv-transform.js";
import { formatCvAsMarkdown } from "../../../lib/cv/markdown-formatter.js";

export const getStaticPaths: GetStaticPaths = () => {
  return [{ params: { lang: "de" } }, { params: { lang: "en" } }];
};

export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang as string;
  const isEnglish = lang === "en";

  const [workEntries, educationEntries] = await Promise.all([
    getCollection(isEnglish ? "work-en" : "work"),
    getCollection(isEnglish ? "education-en" : "education"),
  ]);

  const cvData = transformCvToTypst(workEntries, educationEntries, lang);
  const markdown = formatCvAsMarkdown(cvData, { detail: "full" });

  return new Response(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
};
