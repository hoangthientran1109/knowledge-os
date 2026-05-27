const express = require('express');
const router = express.Router();
const { answerQuestion } = require('../services/ai');

router.post('/', async (req, res) => {
  try {
    const { question, category } = req.body;
    if (!question || !category) return res.status(400).json({ error: 'Câu hỏi và danh mục là bắt buộc' });

    const result = await answerQuestion(question, category);
    result.category = category;
    result.question = question;

    res.json(result);
  } catch (e) {
    console.error('Ask AI error:', e);
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
