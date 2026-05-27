const axios = require('axios');
const cheerio = require('cheerio');
const { YoutubeTranscript } = require('youtube-transcript');

const ALL_RSS_SOURCES = [
  { name: 'BBC Tech', url: 'https://feeds.bbci.co.uk/news/technology/rss.xml', category: 'Công nghệ' },
  { name: 'BBC Health', url: 'https://feeds.bbci.co.uk/news/health/rss.xml', category: 'Sức khỏe' },
  { name: 'BBC Business', url: 'https://feeds.bbci.co.uk/news/business/rss.xml', category: 'Kinh tế' },
  { name: 'Ars Technica', url: 'https://feeds.arstechnica.com/arstechnica/index', category: 'Công nghệ' },
  { name: 'TechCrunch', url: 'https://techcrunch.com/feed/', category: 'Công nghệ' },
  { name: 'The Verge', url: 'https://www.theverge.com/rss/index.xml', category: 'Công nghệ' },
  { name: 'Wired', url: 'https://www.wired.com/feed/rss', category: 'Công nghệ' },
  { name: 'MIT Tech Review', url: 'https://www.technologyreview.com/feed/', category: 'AI' },
  { name: 'Science Daily AI', url: 'https://www.sciencedaily.com/rss/computers_math/artificial_intelligence.xml', category: 'AI' },
  { name: 'Hacker News', url: 'https://hnrss.org/frontpage', category: 'Công nghệ' },
  { name: 'Medical News Today', url: 'https://www.medicalnewstoday.com/newsfeeds/rss/medicalnewstoday.xml', category: 'Sức khỏe' },
  { name: 'WHO News', url: 'https://www.who.int/rss-feeds/news-english.xml', category: 'Sức khỏe' },
  { name: 'NIH News', url: 'https://www.nih.gov/news-events/news-releases/feed', category: 'Sức khỏe' },
  { name: 'Reuters Business', url: 'https://www.reutersagency.com/feed/?best-topics=business-finance&post_type=best', category: 'Kinh tế' },
  { name: 'IMF News', url: 'https://www.imf.org/en/News/RSS', category: 'Kinh tế' },
  { name: 'MarketWatch', url: 'https://feeds.marketwatch.com/marketwatch/topstories', category: 'Kinh tế' },
  { name: 'The Guardian Tech', url: 'https://www.theguardian.com/uk/technology/rss', category: 'Công nghệ' },
  { name: 'The Guardian Business', url: 'https://www.theguardian.com/uk/business/rss', category: 'Kinh tế' },
  { name: 'CNBC Tech', url: 'https://www.cnbc.com/id/19854910/device/rss/rss.html', category: 'Công nghệ' },
  { name: 'BBC Politics', url: 'https://feeds.bbci.co.uk/news/politics/rss.xml', category: 'Chính trị' },
  { name: 'Reuters World', url: 'https://www.reutersagency.com/feed/?best-topics=world&post_type=best', category: 'Chính trị' },
];

function getAllRSSSources() {
  return ALL_RSS_SOURCES;
}

async function fetchRSSFeed(url) {
  try {
    const response = await axios.get(url, { timeout: 10000, headers: { 'User-Agent': 'KnowledgeOS/1.0' } });
    const $ = cheerio.load(response.data, { xmlMode: true });

    const items = [];
    $('item').each((i, el) => {
      if (i >= 5) return false;
      const title = $(el).find('title').text().trim();
      const link = $(el).find('link').text().trim() || $(el).find('link').attr('href') || '';
      const description = $(el).find('description').text().trim();
      const pubDate = $(el).find('pubDate').text().trim() || $(el).find('dc\\:date').text().trim();

      let cleanDesc = description.replace(/<[^>]*>/g, '').trim();
      if (cleanDesc.length > 1000) cleanDesc = cleanDesc.slice(0, 1000) + '...';

      if (title && link) {
        items.push({ title, link, description: cleanDesc, pubDate });
      }
    });

    if (items.length === 0) {
      $('entry').each((i, el) => {
        if (i >= 5) return false;
        const title = $(el).find('title').text().trim();
        const link = $(el).find('link').attr('href') || '';
        const description = $(el).find('summary').text().trim() || $(el).find('content').text().trim();
        const pubDate = $(el).find('published').text().trim() || $(el).find('updated').text().trim();
        let cleanDesc = description.replace(/<[^>]*>/g, '').trim().slice(0, 1000);
        if (title && link) items.push({ title, link, description: cleanDesc, pubDate });
      });
    }

    return items;
  } catch (e) {
    console.error(`RSS fetch failed for ${url}:`, e.message);
    return [];
  }
}

async function fetchArticleContent(url) {
  try {
    const response = await axios.get(url, {
      timeout: 15000,
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    });
    const $ = cheerio.load(response.data);

    $('script, style, nav, footer, header, aside, .sidebar, .ad, .advertisement, .cookie, .nav, .menu, .footer, .header, .comments, .related, .social').remove();

    const article = $('article').first();
    let text = '';
    if (article.length) {
      text = article.text().trim();
    } else {
      const main = $('main, [role="main"], .content, .post-content, .article-content, .entry-content, #content, .story-body').first();
      text = main.length ? main.text().trim() : $('body').text().trim();
    }

    text = text.replace(/\s+/g, ' ').trim();
    if (text.length > 12000) text = text.slice(0, 12000) + '...';
    return text || null;
  } catch (e) {
    console.error(`Article fetch failed for ${url}:`, e.message);
    return null;
  }
}

async function fetchYouTubeTranscript(videoId) {
  try {
    const result = await YoutubeTranscript.fetchTranscript(videoId, { timeout: 10000 });
    if (!result || result.length === 0) return null;
    const text = result.map(line => line.text).join(' ').replace(/\s+/g, ' ').trim();
    return text.length > 100 ? text : null;
  } catch (e) {
    console.error(`YT transcript failed for ${videoId}:`, e.message);
    return null;
  }
}

function extractYouTubeId(url) {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/
  ];
  for (const p of patterns) {
    const match = url.match(p);
    if (match) return match[1];
  }
  return null;
}

module.exports = { getAllRSSSources, fetchRSSFeed, fetchArticleContent, fetchYouTubeTranscript, extractYouTubeId };
