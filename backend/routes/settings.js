const express = require('express');
const router = express.Router();
const prisma = require('../db/prisma');

router.get('/', async (req, res) => {
  try {
    let s = await prisma.settings.findUnique({ where: { id: 'default' } });
    if (!s) {
      s = await prisma.settings.create({ data: { id: 'default' } });
    }
    res.json({
      ...s,
      preferredTopics: parseSafe(s.preferredTopics),
      preferredCategories: parseSafe(s.preferredCategories)
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.put('/', async (req, res) => {
  try {
    const data = { ...req.body };
    if (data.aiApiKey && data.aiApiKey !== 'sk-****') {
      process.env.AI_API_KEY = data.aiApiKey;
    }
    if (data.aiBaseUrl !== undefined) {
      process.env.AI_BASE_URL = data.aiBaseUrl || '';
    }
    if (data.aiModel !== undefined) {
      process.env.AI_MODEL = data.aiModel || 'gpt-4o-mini';
    }
    delete data.id;

    if (data.preferredTopics) data.preferredTopics = JSON.stringify(data.preferredTopics);
    if (data.preferredCategories) data.preferredCategories = JSON.stringify(data.preferredCategories);

    const s = await prisma.settings.upsert({
      where: { id: 'default' },
      create: { id: 'default', ...data },
      update: data
    });
    res.json(s);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

function parseSafe(str) {
  if (!str) return [];
  try { return JSON.parse(str); } catch { return str; }
}

module.exports = router;
