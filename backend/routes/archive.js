const express = require('express');
const router = express.Router();
const prisma = require('../db/prisma');

router.get('/', async (req, res) => {
  try {
    const { search, category, sourceType, dateFrom, dateTo, sort, favorite } = req.query;
    const where = {};

    if (search) {
      where.OR = [
        { title: { contains: search } },
        { coreThesis: { contains: search } },
        { tags: { contains: search } }
      ];
    }
    if (category) where.category = category;
    if (sourceType) where.sourceType = sourceType;
    if (favorite === 'true') where.favorite = true;
    if (dateFrom || dateTo) {
      where.createdAt = {};
      if (dateFrom) where.createdAt.gte = new Date(dateFrom);
      if (dateTo) where.createdAt.lte = new Date(dateTo);
    }

    const orderBy = { createdAt: sort === 'oldest' ? 'asc' : 'desc' };

    const items = await prisma.knowledgeItem.findMany({
      where,
      orderBy,
      include: { reviewItems: true }
    });

    const parsed = items.map(i => ({
      ...i,
      keyPoints: parseSafe(i.keyPoints),
      terms: parseSafe(i.terms),
      examples: parseSafe(i.examples),
      selfTestQuestions: parseSafe(i.selfTestQuestions),
      flashcards: parseSafe(i.flashcards),
      tags: parseSafe(i.tags),
      relatedTopics: parseSafe(i.relatedTopics),
      relatedItemIds: parseSafe(i.relatedItemIds),
      fullAiOutput: parseSafe(i.fullAiOutput)
    }));

    res.json(parsed);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const item = await prisma.knowledgeItem.findUnique({
      where: { id: req.params.id },
      include: { reviewItems: true }
    });
    if (!item) return res.status(404).json({ error: 'Không tìm thấy' });

    res.json({
      ...item,
      keyPoints: parseSafe(item.keyPoints),
      terms: parseSafe(item.terms),
      examples: parseSafe(item.examples),
      selfTestQuestions: parseSafe(item.selfTestQuestions),
      flashcards: parseSafe(item.flashcards),
      tags: parseSafe(item.tags),
      relatedTopics: parseSafe(item.relatedTopics),
      relatedItemIds: parseSafe(item.relatedItemIds),
      fullAiOutput: parseSafe(item.fullAiOutput)
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.post('/save', async (req, res) => {
  try {
    const data = req.body;

    const item = await prisma.knowledgeItem.create({
      data: {
        title: data.title,
        category: data.category,
        sourceType: data.sourceType || 'raw_text',
        sourceUrl: data.sourceUrl || '',
        originalText: data.originalText || '',
        coreThesis: data.coreThesis || '',
        oneThingToRemember: data.oneThingToRemember || '',
        keyPoints: JSON.stringify(data.keyPoints || []),
        terms: JSON.stringify(data.terms || []),
        examples: JSON.stringify(data.examples || []),
        application: data.application || '',
        mistakes: data.mistakes || '',
        selfTestQuestions: JSON.stringify(data.selfTestQuestions || []),
        flashcards: JSON.stringify(data.flashcards || []),
        fullAiOutput: JSON.stringify(data.fullAiOutput || {}),
        tags: JSON.stringify(data.tags || [data.category]),
        relatedTopics: JSON.stringify(data.knowledgeMap?.relatedTopics || []),
        relatedItemIds: JSON.stringify(data.knowledgeMap?.relatedItemIds || []),
        favorite: false
      }
    });

    const now = new Date();
    const reviewDates = [1, 3, 7, 30].map(day => {
      const d = new Date(now);
      d.setDate(d.getDate() + day);
      d.setHours(0, 0, 0, 0);
      return d;
    });

    for (const dueDate of reviewDates) {
      await prisma.reviewItem.create({
        data: { knowledgeItemId: item.id, dueDate, status: 'pending' }
      });
    }

    res.json(item);
  } catch (e) {
    console.error('Archive save error:', e);
    res.status(500).json({ error: e.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { title, category, tags, favorite } = req.body;
    const data = {};
    if (title !== undefined) data.title = title;
    if (category !== undefined) data.category = category;
    if (tags !== undefined) data.tags = JSON.stringify(tags);
    if (favorite !== undefined) data.favorite = favorite;

    const item = await prisma.knowledgeItem.update({ where: { id: req.params.id }, data });
    res.json(item);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await prisma.knowledgeItem.delete({ where: { id: req.params.id } });
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

function parseSafe(str) {
  if (!str) return [];
  try { return JSON.parse(str); } catch { return typeof str === 'string' ? str : []; }
}

module.exports = router;
