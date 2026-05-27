const { PrismaClient } = require('../prisma/generated');
const prisma = new PrismaClient();

async function main() {
  const existing = await prisma.settings.findUnique({ where: { id: 'default' } });
  if (existing) {
    console.log('Settings already exist, skipping seed.');
    return;
  }

  await prisma.settings.create({
    data: {
      id: 'default',
      preferredTopics: JSON.stringify(['Công nghệ', 'AI', 'Kinh tế', 'Sức khỏe', 'Chính trị']),
      preferredCategories: JSON.stringify(['Economics', 'Invest - Trading', 'Marketing', 'Health', 'Mindset']),
      dailyNewsCount: 10,
      includePolitics: true,
      includeHealth: true,
      autoFlashcards: false,
      defaultLanguage: 'vi'
    }
  });

  console.log('Seed completed: default settings created.');
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
