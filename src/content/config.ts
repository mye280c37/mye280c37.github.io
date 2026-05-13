// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string().optional(),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('mye280c37'),
    category: z.string(),
    tags: z.array(z.string()),
    math: z.boolean().default(false),
  }),
});

const publications = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      title: z.string(),
      authors: z.array(z.string()),
      date: z.coerce.date(), // 'yyyy-mm' format
      venue: z.string(),
      doi: z.string().url().optional(),
      pdfUrl: z.string().url().optional(),
      tags: z.array(z.string()).optional(),
    })
  ),
});

const projects = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      title: z.string(),
      summary: z.string(),
      description: z.string().optional(),
      links: z.object({
        github: z.string().url().optional(),
        website: z.string().url().optional(),
        wiki: z.string().url().optional(),
      }).optional(),
      tags: z.array(z.string()).default([]),
      status: z.string().optional().default("Ongoing"),
    })
  ),
});

const interests = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      title: z.string(),
      items: z.array(z.string()),
    })
  ),
});


const news = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      date: z.coerce.date(), // 'yyyy-mm-dd' format
      emoji: z.string(),
      title: z.string(),
      description: z.string().optional(),
      link: z.string().url().optional(),
    })
  ),
});


// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
  'publications': publications,
  'projects': projects,
  'interests': interests,
  'news': news,
};