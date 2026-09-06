import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();


export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Runa\'s Playground',
    description: 'a place where I can have fun, explore, and experiment',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.published,
      link: `/posts/${post.id}/`,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
      }),
      ...post.data,
    })),
    customData: `<language>en-us</language>`,
  });
}
