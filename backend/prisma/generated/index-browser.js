
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.NewsItemScalarFieldEnum = {
  id: 'id',
  title: 'title',
  category: 'category',
  sourceName: 'sourceName',
  sourceUrl: 'sourceUrl',
  publishedAt: 'publishedAt',
  summary: 'summary',
  whyItMatters: 'whyItMatters',
  reliabilityNote: 'reliabilityNote',
  fullAiOutput: 'fullAiOutput',
  saved: 'saved',
  createdAt: 'createdAt'
};

exports.Prisma.KnowledgeItemScalarFieldEnum = {
  id: 'id',
  title: 'title',
  category: 'category',
  sourceType: 'sourceType',
  sourceUrl: 'sourceUrl',
  originalText: 'originalText',
  coreThesis: 'coreThesis',
  oneThingToRemember: 'oneThingToRemember',
  keyPoints: 'keyPoints',
  terms: 'terms',
  examples: 'examples',
  application: 'application',
  mistakes: 'mistakes',
  selfTestQuestions: 'selfTestQuestions',
  flashcards: 'flashcards',
  fullAiOutput: 'fullAiOutput',
  tags: 'tags',
  favorite: 'favorite',
  reviewStatus: 'reviewStatus',
  relatedTopics: 'relatedTopics',
  relatedItemIds: 'relatedItemIds',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ReviewItemScalarFieldEnum = {
  id: 'id',
  knowledgeItemId: 'knowledgeItemId',
  dueDate: 'dueDate',
  status: 'status',
  difficulty: 'difficulty',
  completedAt: 'completedAt'
};

exports.Prisma.SettingsScalarFieldEnum = {
  id: 'id',
  aiApiKey: 'aiApiKey',
  aiBaseUrl: 'aiBaseUrl',
  aiModel: 'aiModel',
  newsApiKey: 'newsApiKey',
  preferredTopics: 'preferredTopics',
  preferredCategories: 'preferredCategories',
  dailyNewsCount: 'dailyNewsCount',
  includePolitics: 'includePolitics',
  autoFlashcards: 'autoFlashcards',
  defaultLanguage: 'defaultLanguage'
};

exports.Prisma.ReadingItemScalarFieldEnum = {
  id: 'id',
  title: 'title',
  url: 'url',
  category: 'category',
  sourceType: 'sourceType',
  status: 'status',
  note: 'note',
  addedAt: 'addedAt',
  startedAt: 'startedAt',
  completedAt: 'completedAt'
};

exports.Prisma.ActionItemScalarFieldEnum = {
  id: 'id',
  title: 'title',
  relatedKnowledgeItemId: 'relatedKnowledgeItemId',
  category: 'category',
  deadline: 'deadline',
  status: 'status',
  resultNote: 'resultNote',
  lessonLearned: 'lessonLearned',
  createdAt: 'createdAt',
  completedAt: 'completedAt'
};

exports.Prisma.DailyReviewScalarFieldEnum = {
  id: 'id',
  date: 'date',
  learnedToday: 'learnedToday',
  mostImportantIdea: 'mostImportantIdea',
  actionsApplied: 'actionsApplied',
  unclearThings: 'unclearThings',
  nextLearningSuggestion: 'nextLearningSuggestion',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  NewsItem: 'NewsItem',
  KnowledgeItem: 'KnowledgeItem',
  ReviewItem: 'ReviewItem',
  Settings: 'Settings',
  ReadingItem: 'ReadingItem',
  ActionItem: 'ActionItem',
  DailyReview: 'DailyReview'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
