const express = require('express');
const router = express.Router();
const prisma = require('../db/prisma');
const { learnFromContent, generateFlashcards, generateKnowledgeMap } = require('../services/ai');
const { fetchArticleContent, fetchYouTubeTranscript, extractYouTubeId } = require('../services/extractor');

router.post('/from-link', async (req, res) => {
  try {
    const { url, category } = req.body;
    if (!url || !category) return res.status(400).json({ error: 'URL và danh mục là bắt buộc' });

    let content, sourceType;

    const ytId = extractYouTubeId(url);
    if (ytId) {
      sourceType = 'youtube';
      const transcript = await fetchYouTubeTranscript(ytId);
      if (!transcript) {
        return res.json({
          needsManualInput: true,
          message: 'Không lấy được transcript, hãy paste transcript thủ công.',
          videoId: ytId,
          url
        });
      }
      content = `[Transcript từ YouTube video ${url}]\n\n${transcript}`;
    } else {
      sourceType = 'article';
      content = await fetchArticleContent(url);
      if (!content) {
        return res.json({
          needsManualInput: true,
          message: 'Không thể trích xuất nội dung từ link này. Vui lòng paste nội dung thủ công.',
          url
        });
      }
    }

    const result = await learnFromContent(content, category, sourceType);
    result.sourceType = sourceType;
    result.sourceUrl = url;
    result.category = category;
    result.originalText = content;

    const keyPoints = Array.isArray(result.keyPoints) ? result.keyPoints : result.keyPoints?.split(';').map(s => s.trim()).filter(Boolean) || [];
    const terms = Array.isArray(result.terms) ? result.terms : [];
    const examples = Array.isArray(result.examples) ? result.examples : [];
    const flashcards = Array.isArray(result.flashcards) ? result.flashcards : [];
    const selfTestQuestions = Array.isArray(result.selfTestQuestions) ? result.selfTestQuestions : [];

    const allTitles = (await prisma.knowledgeItem.findMany({
      select: { id: true, title: true },
      orderBy: { createdAt: 'desc' },
      take: 50
    })).map(i => `${i.id}: ${i.title}`).join('\n');

    let knowledgeMap;
    try {
      knowledgeMap = await generateKnowledgeMap(
        `${result.coreThesis}\n${result.oneThingToRemember}\n${result.application}`,
        result.title,
        category,
        allTitles
      );
    } catch (e) {
      knowledgeMap = { relatedTopics: [], relatedItemIds: [], nextTopic: '' };
    }

    res.json({
      title: result.title,
      coreThesis: result.coreThesis,
      oneThingToRemember: result.oneThingToRemember,
      keyPoints,
      terms,
      examples,
      application: result.application,
      mistakes: result.mistakes,
      selfTestQuestions,
      flashcards,
      sourceType,
      sourceUrl: url,
      category,
      originalText: content,
      knowledgeMap,
      fullAiOutput: result
    });
  } catch (e) {
    console.error('Learn from link error:', e);
    res.status(500).json({ error: e.message });
  }
});

router.post('/from-text', async (req, res) => {
  try {
    const { text, category, sourceType, sourceUrl } = req.body;
    if (!text || !category) return res.status(400).json({ error: 'Nội dung và danh mục là bắt buộc' });

    const result = await learnFromContent(text, category, sourceType || 'raw_text');

    const keyPoints = Array.isArray(result.keyPoints) ? result.keyPoints : [];
    const terms = Array.isArray(result.terms) ? result.terms : [];
    const examples = Array.isArray(result.examples) ? result.examples : [];
    const flashcards = Array.isArray(result.flashcards) ? result.flashcards : [];
    const selfTestQuestions = Array.isArray(result.selfTestQuestions) ? result.selfTestQuestions : [];

    const allTitles = (await prisma.knowledgeItem.findMany({
      select: { id: true, title: true },
      orderBy: { createdAt: 'desc' },
      take: 50
    })).map(i => `${i.id}: ${i.title}`).join('\n');

    let knowledgeMap;
    try {
      knowledgeMap = await generateKnowledgeMap(
        `${result.coreThesis}\n${result.oneThingToRemember}\n${result.application}`,
        result.title,
        category,
        allTitles
      );
    } catch (e) {
      knowledgeMap = { relatedTopics: [], relatedItemIds: [], nextTopic: '' };
    }

    res.json({
      title: result.title,
      coreThesis: result.coreThesis,
      oneThingToRemember: result.oneThingToRemember,
      keyPoints,
      terms,
      examples,
      application: result.application,
      mistakes: result.mistakes,
      selfTestQuestions,
      flashcards,
      sourceType: sourceType || 'raw_text',
      sourceUrl: sourceUrl || '',
      category,
      originalText: text,
      knowledgeMap,
      fullAiOutput: result
    });
  } catch (e) {
    console.error('Learn from text error:', e);
    res.status(500).json({ error: e.message });
  }
});

router.post('/flashcards', async (req, res) => {
  try {
    const { content, title } = req.body;
    if (!content) return res.status(400).json({ error: 'Nội dung là bắt buộc' });
    const flashcards = await generateFlashcards(content, title || '');
    res.json({ flashcards });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
