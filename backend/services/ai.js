const { OpenAI } = require('openai');
const prompts = require('../prompts/templates');

let openai = null;

function getClient() {
  if (!openai) {
    const apiKey = process.env.AI_API_KEY;
    const baseURL = process.env.AI_BASE_URL;
    if (!apiKey || apiKey === 'sk-your-api-key-here') {
      return null;
    }
    const opts = { apiKey };
    if (baseURL) opts.baseURL = baseURL;
    openai = new OpenAI(opts);
  }
  return openai;
}

async function callAI(messages, model = null) {
  const client = getClient();
  if (!client) throw new Error('AI_API_KEY chưa được cấu hình. Vui lòng vào Cài đặt để nhập API key.');
  const effectiveModel = model || process.env.AI_MODEL || 'gpt-4o-mini';
  const response = await client.chat.completions.create({ model: effectiveModel, messages, temperature: 0.7 });
  return response.choices[0].message.content;
}

function extractJSON(text) {
  const cleaned = text.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
  const match = cleaned.match(/\{[\s\S]*\}|\[[\s\S]*\]/);
  if (!match) throw new Error('Không thể parse JSON từ AI response');
  return JSON.parse(match[0]);
}

async function summarizeNews(content, title, category, source) {
  const response = await callAI([
    { role: 'system', content: 'Bạn là trợ lý tóm tắt tin tức chuyên nghiệp. Luôn trả lời bằng JSON thuần, không markdown, dùng tiếng Việt.' },
    { role: 'user', content: `${prompts.newsSummaryPrompt(title, category, source)}\n\nNội dung bài viết:\n${content.slice(0, 8000)}` }
  ]);
  return extractJSON(response);
}

async function learnFromContent(content, category, sourceType) {
  const response = await callAI([
    { role: 'system', content: 'Bạn là trợ lý học tập chuyên sâu. Luôn trả lời bằng JSON thuần, không markdown, dùng tiếng Việt.' },
    { role: 'user', content: prompts.learnFromContentPrompt(content, category, sourceType) }
  ]);
  return extractJSON(response);
}

async function answerQuestion(question, category) {
  const response = await callAI([
    { role: 'system', content: 'Bạn là gia sư AI chuyên sâu. Luôn trả lời bằng JSON thuần, không markdown, dùng tiếng Việt.' },
    { role: 'user', content: prompts.askAiPrompt(question, category) }
  ]);
  return extractJSON(response);
}

async function generateFlashcards(content, title) {
  const response = await callAI([
    { role: 'system', content: 'Bạn là chuyên gia tạo flashcard. Luôn trả lời bằng JSON array thuần, không markdown, dùng tiếng Việt.' },
    { role: 'user', content: prompts.flashcardGenerationPrompt(content, title) }
  ]);
  return extractJSON(response);
}

async function generateKnowledgeMap(content, title, category, allTitles) {
  const response = await callAI([
    { role: 'system', content: 'Bạn là chuyên gia kết nối kiến thức. Luôn trả lời bằng JSON thuần, không markdown, dùng tiếng Việt.' },
    { role: 'user', content: prompts.knowledgeMapPrompt(content, title, category, allTitles) }
  ]);
  return extractJSON(response);
}

async function generateReviewQuestions(content, title) {
  const response = await callAI([
    { role: 'system', content: 'Bạn là chuyên gia ôn tập. Luôn trả lời bằng JSON array thuần, không markdown, dùng tiếng Việt.' },
    { role: 'user', content: prompts.reviewQuestionPrompt(content, title) }
  ]);
  return extractJSON(response);
}

module.exports = { callAI, summarizeNews, learnFromContent, answerQuestion, generateFlashcards, generateKnowledgeMap, generateReviewQuestions };
