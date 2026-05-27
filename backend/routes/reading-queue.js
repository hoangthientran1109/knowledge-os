const express = require('express');
const router = express.Router();
const prisma = require('../db/prisma');

router.get('/', async (req, res) => {
  try {
    const { status, category } = req.query;
    const where = {};
    if (status) where.status = status;
    if (category) where.category = category;
    const items = await prisma.readingItem.findMany({
      where,
      orderBy: { addedAt: 'desc' }
    });
    res.json(items);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, url, category, sourceType, note } = req.body;
    const item = await prisma.readingItem.create({
      data: {
        title: title || url,
        url,
        category: category || 'General',
        sourceType: sourceType || 'article',
        note: note || '',
        status: 'unread'
      }
    });
    res.json(item);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { status, title, category, note } = req.body;
    const data = {};
    if (status) {
      data.status = status;
      if (status === 'in_progress') data.startedAt = new Date();
      if (status === 'completed') data.completedAt = new Date();
    }
    if (title !== undefined) data.title = title;
    if (category !== undefined) data.category = category;
    if (note !== undefined) data.note = note;

    const item = await prisma.readingItem.update({ where: { id: req.params.id }, data });
    res.json(item);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await prisma.readingItem.delete({ where: { id: req.params.id } });
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
