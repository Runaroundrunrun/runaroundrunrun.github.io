// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection
const blog = defineCollection({
  loader: glob({ base: './src/pages/posts', pattern: '**/*.md' }),
  schema: z.object({
    // TODO: Read https://docs.astro.build/en/guides/content-collections/#defining-the-collection-schema and fix

    // title: z.string(),
    // published: z.string(),
    // modified: z.string().optional(),
    // lang: z.string(),
    // category: z.string().optional(),
  }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { blog };