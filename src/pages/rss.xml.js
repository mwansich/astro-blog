import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    stylesheet: '/rss/pretty-feed-v3.xsl',
    title: 'My CS50 Final Project Blog',
    description: 'Latest posts from my CS50 Final Project blog',
    site: context.site,
    // Add Atom namespace to the <rss> tag
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
    },
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
      content: sanitizeHtml(parser.render(post.body).replace(/href="\//g, `href="${context.site}`), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat([])
      }),
    })),
    // Add atom:link inside the <channel> element
    customData: `<language>en-us</language>
      <atom:link href="${context.site}rss.xml" rel="self" type="application/rss+xml" />`,
  });
}