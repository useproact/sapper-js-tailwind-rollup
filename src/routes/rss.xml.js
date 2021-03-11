import data from '../site-data';

const feedItem = item => `
    <item>
      <title>${item.title}</title>
      <description><![CDATA[${item.desc}]]></description>
      <link>${data.siteUrl}/post/${item.slug}</link>
      <guid isPermaLink="false">${data.siteUrl}/post/${item.slug}</guid>
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>
    </item>
`;

const renderXmlRssFeed = items => `<?xml version="1.0" encoding="UTF-8" ?>
<rss xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title><![CDATA[Newwwton]]></title>
    <description><![CDATA[Newwwton Bring your ideas to life]]></description>
    <link>${data.siteUrl}</link>
    <atom:link href="${data.siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <generator>Sapper</generator>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items.map(feedItem).join('\n')}
  </channel>
</rss>`;

export function get(_, res) {
    res.writeHead(200, {
        'Cache-Control': `max-age=0, s-max-age=${600}`, // 10 minutes
        'Content-Type': 'application/rss+xml',
    });

    // eslint-disable-next-line no-undef
    const feed = renderXmlRssFeed(__POSTS__);

    res.end(feed);
}
