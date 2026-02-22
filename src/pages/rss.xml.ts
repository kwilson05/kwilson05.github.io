import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export const GET = async (context: APIContext) => {
    const blog = await getCollection('blog');
    return rss({
        title: "Kasozi Wilson's Blog",
        description: 'My everday thoughts....',
        site: context.site!,
        items: blog.map((post) => {
            return {
                title: post.data.title,
                pubDate: post.data.pubDate,
                description: post.data.description,
                link: `/blog/${post.id}/`,
            };
        }),
        customData: `<language>en-us</language>`,
    });
};
