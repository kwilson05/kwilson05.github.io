import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
    /* loader: async () => {
        const blogPosts = Object.values(
            import.meta.glob('/blog/*.md', { eager: true })
        );

        return blogPosts.map((blogPost: any) => {
            return {
                readingTimeMinutes: readingTime(blogPost.rawContent()).minutes,
                ...blogPost.frontmatter,
                publishedDate: new Date(blogPost.frontmatter.publishedDate),
                ...blogPost,
            };
        });
    },*/
    loader: glob({ pattern: '**/*.md', base: './blog' }),
    schema: z.object({
        title: z.string(),
        publishedDate: z.date(),
        draft: z.boolean().default(false),
        headline: z.string(),
    }),
});

export const collections = { blog: blogCollection };
