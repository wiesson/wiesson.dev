import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    publishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean().optional(),
  }),
});

const cvWorkCollection = defineCollection({
  schema: z.object({
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
  }),
});

const cvEducationCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    location: z.string(),
    from: z.date(),
    to: z.date().or(z.enum(["now"])),
    type: z.enum(["education"]),
    intro: z.string(),
    tasks: z.array(z.string()),
    contentType: z.enum(["work", "education"]),
  }),
});

const projectsCollection = defineCollection({
  schema: z.object({
    // Required
    title: z.string(),
    intro: z.string(),

    // Optional - Business Value (for clients)
    problem: z.string().optional(),
    solution: z.string().optional(),
    results: z
      .array(
        z.object({
          metric: z.string(),
          value: z.string(),
        })
      )
      .optional(),

    // Optional - Technical Depth (for builders)
    architecture: z.string().optional(),
    challenges: z.array(z.string()).optional(),
    learnings: z.array(z.string()).optional(),

    // Metadata
    technologies: z.array(z.string()).optional(),
    role: z.string().optional(),
    timeline: z.string().optional(),
    url: z.string().optional(),
    status: z.enum(["live", "beta", "archived", "coming-soon"]).optional(),
    featured: z.boolean().optional(),

    // Media
    cover: z.string().optional(),
    screenshots: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  work: cvWorkCollection,
  education: cvEducationCollection,
  "work-en": cvWorkCollection,
  "education-en": cvEducationCollection,
  projects: projectsCollection,
  "projects-en": projectsCollection,
};
