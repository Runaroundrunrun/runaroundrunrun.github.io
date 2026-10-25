import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();


export async function GET(context) {
  const blog = await getCollection('blogJa');
  return rss({
    title: 'Runa\'s Playground（ルナの遊び場）',
    description: 'いろいろ試して遊ぶための場所。',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.published,
      link: `/posts/${post.id}/`,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
      }),
      ...post.data,
    })).sort((a, b) => a.pubDate > b.pubDate ? -1 : 1),
    customData: `<language>ja</language>`,
  });
}
