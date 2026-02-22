import { defineCollection, z } from 'astro:content';
import { rssSchema } from '@astrojs/rss';

import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './blog' }),
    schema: rssSchema.extend({
        draft: z.boolean().default(false),
    }),
});

export const collections = { blog: blogCollection };
