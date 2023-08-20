import { z, defineCollection } from 'astro:content';

export const collections = {
  'blog': defineCollection({
    type: 'content',
    schema: z.object({
      layout: z.optional(z.literal("@layouts/BlogPost.astro")),
      title: z.string(),
      description: z.string(),
      publication: z.date(),
      thumbnail: z.optional(z.string()),
    }),
  }),
  'author': defineCollection({
    type: 'data',
    schema: z.object({
      fname : z.string(),
      lname : z.string(),
    })
  })
};