import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
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
    tasks: z.array(z.string()),
    contentType: z.enum(["work", "education"]),
  }),
});

export const collections = {
  blog: blogCollection,
  work: cvWorkCollection,
  education: cvEducationCollection,
};
