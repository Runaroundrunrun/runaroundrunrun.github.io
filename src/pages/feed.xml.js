import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Runa\'s Playground',
    description: 'a place where I can have fun, explore, and experiment',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./posts/**/*.md')),
    customData: `<language>en-us</language>`,
  });
}
