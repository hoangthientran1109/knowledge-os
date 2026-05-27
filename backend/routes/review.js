const express = require('express');
const router = express.Router();
const prisma = require('../db/prisma');

router.get('/due', async (req, res) => {
  try {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const weekLater = new Date(tomorrow);
    weekLater.setDate(weekLater.getDate() + 7);

    // Lấy tất cả pending items
    const allPending = await prisma.reviewItem.findMany({
      where: { status: 'pending' },
      include: { knowledgeItem: true },
      orderBy: { dueDate: 'asc' }
    });

    // Đếm số lần đã hoàn thành cho mỗi knowledge item
    const knowledgeIds = [...new Set(allPending.map(i => i.knowledgeItemId))];
    const completedCounts = {};
    for (const kid of knowledgeIds) {
      completedCounts[kid] = await prisma.reviewItem.count({
        where: { knowledgeItemId: kid, status: 'completed' }
      });
    }

    const dueItems = allPending.filter(i => i.dueDate < tomorrow);
    const upcoming = allPending.filter(i => i.dueDate >= tomorrow && i.dueDate <= weekLater);

    const addRound = items => items.map(i => ({
      ...i,
      round: (completedCounts[i.knowledgeItemId] || 0) + 1
    }));

    const completed = await prisma.reviewItem.findMany({
      where: { status: 'completed' },
      include: { knowledgeItem: true },
      orderBy: { completedAt: 'desc' },
      take: 20
    });

    res.json({ due: addRound(dueItems), upcoming: addRound(upcoming), completed });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.post('/:id/complete', async (req, res) => {
  try {
    const { difficulty } = req.body;
    const item = await prisma.reviewItem.update({
      where: { id: req.params.id },
      data: {
        status: 'completed',
        difficulty: difficulty || 'medium',
        completedAt: new Date()
      }
    });

    const multipliers = { hard: 3, medium: 7, easy: 14 };
    const days = multipliers[difficulty] || 7;
    const nextDue = new Date();
    nextDue.setDate(nextDue.getDate() + days);
    nextDue.setHours(0, 0, 0, 0);

    await prisma.reviewItem.create({
      data: {
        knowledgeItemId: item.knowledgeItemId,
        dueDate: nextDue,
        status: 'pending'
      }
    });

    res.json({ success: true, nextDue });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
