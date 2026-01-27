import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Helper to strip date prefix and file extensions for clean IDs
const generateBlogId = ({ entry }: { entry: string }) =>
  entry
    .replace(/^\d{4}-\d{2}-\d{2}-/, "") // Remove date prefix
    .replace(/\/index\.md$/, "") // Remove /index.md
    .replace(/\.md$/, ""); // Remove .md

const blogCollection = defineCollection({
  loader: glob({
    pattern: "**/index.md",
    base: "./src/content/blog",
    generateId: generateBlogId,
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      tags: z.array(z.string()),
      image: image().optional(),
      publishedAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      draft: z.boolean().optional(),
    }),
});

// Work, education, projects - simple flat .md files
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

const projectsSchema = z.object({
  title: z.string(),
  intro: z.string(),
  problem: z.string().optional(),
  solution: z.string().optional(),
  results: z
    .array(z.object({ metric: z.string(), value: z.string() }))
    .optional(),
  architecture: z.string().optional(),
  challenges: z.array(z.string()).optional(),
  learnings: z.array(z.string()).optional(),
  technologies: z.array(z.string()).optional(),
  role: z.string().optional(),
  timeline: z.string().optional(),
  url: z.string().optional(),
  status: z.enum(["live", "beta", "mvp", "in-development", "archived", "coming-soon"]).optional(),
  featured: z.boolean().optional(),
  cover: z.string().optional(),
  screenshots: z.array(z.string()).optional(),
});

export const collections = {
  blog: blogCollection,
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
  projects: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: projectsSchema,
  }),
  "projects-en": defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects-en" }),
    schema: projectsSchema,
  }),
};
