const express = require('express');
const router = express.Router();
const prisma = require('../db/prisma');

router.get('/', async (req, res) => {
  try {
    const { status } = req.query;
    const where = {};
    if (status) where.status = status;
    const items = await prisma.actionItem.findMany({
      where,
      orderBy: { createdAt: 'desc' }
    });
    res.json(items);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, relatedKnowledgeItemId, category, deadline } = req.body;
    const item = await prisma.actionItem.create({
      data: {
        title,
        relatedKnowledgeItemId: relatedKnowledgeItemId || '',
        category: category || '',
        deadline: deadline ? new Date(deadline) : null,
        status: 'pending'
      }
    });
    res.json(item);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { status, resultNote, lessonLearned } = req.body;
    const data = {};
    if (status) {
      data.status = status;
      if (['done', 'failed', 'skipped'].includes(status)) data.completedAt = new Date();
    }
    if (resultNote !== undefined) data.resultNote = resultNote;
    if (lessonLearned !== undefined) data.lessonLearned = lessonLearned;

    const item = await prisma.actionItem.update({ where: { id: req.params.id }, data });
    res.json(item);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await prisma.actionItem.delete({ where: { id: req.params.id } });
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
