import { getCollection } from 'astro:content';

const getBlogs = (isDraft: boolean) => async () =>
    await getCollection('blog', ({ data }) => data.draft === isDraft);

export const getPublishedBlogEntries = getBlogs(false);

export const getDraftedBlogEntries = getBlogs(true);
