const express = require('express');
const router = express.Router();
const prisma = require('../db/prisma');
const { summarizeNews } = require('../services/ai');
const { getAllRSSSources, fetchRSSFeed, fetchArticleContent } = require('../services/extractor');

async function getSettings() {
  let s = await prisma.settings.findUnique({ where: { id: 'default' } });
  if (!s) {
    s = await prisma.settings.create({
      data: { id: 'default' }
    });
  }
  return s;
}

router.get('/', async (req, res) => {
  try {
    const items = await prisma.newsItem.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50
    });
    res.json(items);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.post('/generate', async (req, res) => {
  try {
    const settings = await getSettings();
    const count = settings.dailyNewsCount || 10;

    const categories = ['Công nghệ', 'AI', 'Kinh tế'];
    if (settings.includePolitics !== false) categories.push('Chính trị');
    const perCategory = Math.max(Math.ceil(count / categories.length), 2);
    const categoryMap = {};
    categories.forEach(c => { categoryMap[c] = c; });

    const allRSS = getAllRSSSources();
    const results = [];

    for (const cat of categories) {
      const catSources = allRSS.filter(s => {
        const c = categoryMap[s.category];
        return c === cat || (c === 'Công nghệ' && s.category === 'AI') || (c === 'AI' && s.category === 'Công nghệ');
      });

      const shuffled = catSources.sort(() => Math.random() - 0.5);
      let catArticles = [];

      for (const source of shuffled) {
        if (catArticles.length >= perCategory * 2) break;
        const items = await fetchRSSFeed(source.url);
        for (const item of items) {
          if (catArticles.length >= perCategory * 2) break;
          catArticles.push({ ...item, sourceName: source.name, sourceCategory: cat });
        }
      }

      let catCount = 0;
      for (const article of catArticles) {
        if (catCount >= perCategory) break;
        try {
          const content = await fetchArticleContent(article.link);
          if (!content || content.length < 200) continue;

          const summary = await summarizeNews(content, article.title, cat, article.sourceName);

          if (summary.skip) {
            console.log(`Skipped (low importance): ${article.title}`);
            continue;
          }

          const newsItem = await prisma.newsItem.create({
            data: {
              title: summary.title || article.title,
              category: summary.category || cat,
              sourceName: article.sourceName,
              sourceUrl: article.link,
              publishedAt: article.pubDate || new Date().toISOString(),
              summary: JSON.stringify(summary.summary || []),
              whyItMatters: summary.whyItMatters || '',
              reliabilityNote: summary.reliabilityNote || '',
              fullAiOutput: JSON.stringify(summary),
              saved: false
            }
          });
          results.push(newsItem);
          catCount++;
        } catch (e) {
          console.error(`[${cat}] ${article.title} - ${e.message}`);
        }
      }
    }

    res.json({ count: results.length, items: results });
  } catch (e) {
    console.error('News generation error:', e);
    res.status(500).json({ error: e.message });
  }
});

router.post('/save/:id', async (req, res) => {
  try {
    const item = await prisma.newsItem.update({
      where: { id: req.params.id },
      data: { saved: true }
    });
    res.json(item);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await prisma.newsItem.delete({ where: { id: req.params.id } });
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
