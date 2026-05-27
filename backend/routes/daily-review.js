const express = require('express');
const router = express.Router();
const prisma = require('../db/prisma');

router.get('/', async (req, res) => {
  try {
    const { date } = req.query;
    const where = {};
    if (date) {
      const d = new Date(date);
      const start = new Date(d.getFullYear(), d.getMonth(), d.getDate());
      const end = new Date(start);
      end.setDate(end.getDate() + 1);
      where.date = { gte: start, lt: end };
    }
    const items = await prisma.dailyReview.findMany({
      where,
      orderBy: { date: 'desc' },
      take: 30
    });
    res.json(items);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { date, learnedToday, mostImportantIdea, actionsApplied, unclearThings, nextLearningSuggestion } = req.body;
    const reviewDate = date ? new Date(date) : new Date();
    const start = new Date(reviewDate.getFullYear(), reviewDate.getMonth(), reviewDate.getDate());

    const existing = await prisma.dailyReview.findFirst({
      where: {
        date: {
          gte: start,
          lt: new Date(start.getTime() + 86400000)
        }
      }
    });

    if (existing) {
      const updated = await prisma.dailyReview.update({
        where: { id: existing.id },
        data: {
          learnedToday: learnedToday || existing.learnedToday,
          mostImportantIdea: mostImportantIdea || existing.mostImportantIdea,
          actionsApplied: actionsApplied || existing.actionsApplied,
          unclearThings: unclearThings || existing.unclearThings,
          nextLearningSuggestion: nextLearningSuggestion || existing.nextLearningSuggestion
        }
      });
      return res.json(updated);
    }

    const item = await prisma.dailyReview.create({
      data: {
        date: start,
        learnedToday: learnedToday || '',
        mostImportantIdea: mostImportantIdea || '',
        actionsApplied: actionsApplied || '',
        unclearThings: unclearThings || '',
        nextLearningSuggestion: nextLearningSuggestion || ''
      }
    });
    res.json(item);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await prisma.dailyReview.delete({ where: { id: req.params.id } });
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
