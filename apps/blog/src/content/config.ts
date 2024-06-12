// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
// 2. Define your collection(s)
const postCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    image: z.object({
      url: image().refine((img) => img.width >= 1080, {
        message: "Cover image must be at least 1080 pixels wide!",
      }),
      alt: z.string(),
    }),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  posts: postCollection,
};
