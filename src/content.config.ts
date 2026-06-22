import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Work and education use simple flat .md files for CV generation and listings.
const workSchema = z.object({
  company: z.string(),
  project: z.string().or(z.null()),
  position: z.string().or(z.null()),
  location: z.string().or(z.null()),
  from: z.date(),
  to: z.date().or(z.enum(["now"])),
  type: z.enum(["main", "side"]),
  projectType: z.enum(["permanent", "project"]),
  tasks: z.array(z.string()),
  technologies: z.array(z.string()).or(z.any()),
  contentType: z.enum(["work", "education"]),
  intro: z.string().or(z.null()),
});

const educationSchema = z.object({
  title: z.string(),
  location: z.string(),
  from: z.date(),
  to: z.date().or(z.enum(["now"])),
  type: z.enum(["education"]),
  intro: z.string(),
  tasks: z.array(z.string()),
  contentType: z.enum(["work", "education"]),
});

export const collections = {
  work: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
    schema: workSchema,
  }),
  "work-en": defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/work-en" }),
    schema: workSchema,
  }),
  education: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/education" }),
    schema: educationSchema,
  }),
  "education-en": defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/education-en" }),
    schema: educationSchema,
  }),
};
