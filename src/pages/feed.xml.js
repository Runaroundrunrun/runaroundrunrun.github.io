import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Runa\'s Playground',
    description: 'a place where I can have fun, explore, and experiment',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      published: post.data.published,
      link: `/posts/${post.id}/`
    })),
    customData: `<language>en-us</language>`,
  });
}
