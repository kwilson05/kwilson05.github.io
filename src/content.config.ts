import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './blog' }),
    schema: z.object({
        title: z.string(),
        publishedDate: z.date(),
        draft: z.boolean().default(false),
        headline: z.string(),
    }),
});

export const collections = { blog: blogCollection };
