require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const prisma = require('./db/prisma');

const newsRoutes = require('./routes/news');
const learnRoutes = require('./routes/learn');
const askRoutes = require('./routes/ask');
const archiveRoutes = require('./routes/archive');
const reviewRoutes = require('./routes/review');
const settingsRoutes = require('./routes/settings');
const readingQueueRoutes = require('./routes/reading-queue');
const actionTrackerRoutes = require('./routes/action-tracker');
const dailyReviewRoutes = require('./routes/daily-review');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

app.use('/api/news', newsRoutes);
app.use('/api/learn', learnRoutes);
app.use('/api/ask', askRoutes);
app.use('/api/archive', archiveRoutes);
app.use('/api/review', reviewRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/reading-queue', readingQueueRoutes);
app.use('/api/action-tracker', actionTrackerRoutes);
app.use('/api/daily-review', dailyReviewRoutes);

app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
});

async function start() {
  try {
    const settings = await prisma.settings.findUnique({ where: { id: 'default' } });
    if (settings?.aiApiKey && settings.aiApiKey !== 'sk-your-api-key-here') {
      process.env.AI_API_KEY = settings.aiApiKey;
      process.env.AI_BASE_URL = settings.aiBaseUrl || '';
      process.env.AI_MODEL = settings.aiModel || 'gpt-4o-mini';
      console.log(`AI settings loaded: model=${process.env.AI_MODEL}, baseUrl=${process.env.AI_BASE_URL || '(default)'}`);
    }
  } catch (e) {
    console.log('Could not load settings from DB, using .env file');
  }

  app.listen(PORT, () => {
    console.log(`Knowledge OS server running on http://localhost:${PORT}`);
  });
}

start();
