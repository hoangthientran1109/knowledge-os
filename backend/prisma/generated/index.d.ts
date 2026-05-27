
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model NewsItem
 * 
 */
export type NewsItem = $Result.DefaultSelection<Prisma.$NewsItemPayload>
/**
 * Model KnowledgeItem
 * 
 */
export type KnowledgeItem = $Result.DefaultSelection<Prisma.$KnowledgeItemPayload>
/**
 * Model ReviewItem
 * 
 */
export type ReviewItem = $Result.DefaultSelection<Prisma.$ReviewItemPayload>
/**
 * Model Settings
 * 
 */
export type Settings = $Result.DefaultSelection<Prisma.$SettingsPayload>
/**
 * Model ReadingItem
 * 
 */
export type ReadingItem = $Result.DefaultSelection<Prisma.$ReadingItemPayload>
/**
 * Model ActionItem
 * 
 */
export type ActionItem = $Result.DefaultSelection<Prisma.$ActionItemPayload>
/**
 * Model DailyReview
 * 
 */
export type DailyReview = $Result.DefaultSelection<Prisma.$DailyReviewPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more NewsItems
 * const newsItems = await prisma.newsItem.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more NewsItems
   * const newsItems = await prisma.newsItem.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.newsItem`: Exposes CRUD operations for the **NewsItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsItems
    * const newsItems = await prisma.newsItem.findMany()
    * ```
    */
  get newsItem(): Prisma.NewsItemDelegate<ExtArgs>;

  /**
   * `prisma.knowledgeItem`: Exposes CRUD operations for the **KnowledgeItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KnowledgeItems
    * const knowledgeItems = await prisma.knowledgeItem.findMany()
    * ```
    */
  get knowledgeItem(): Prisma.KnowledgeItemDelegate<ExtArgs>;

  /**
   * `prisma.reviewItem`: Exposes CRUD operations for the **ReviewItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewItems
    * const reviewItems = await prisma.reviewItem.findMany()
    * ```
    */
  get reviewItem(): Prisma.ReviewItemDelegate<ExtArgs>;

  /**
   * `prisma.settings`: Exposes CRUD operations for the **Settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.SettingsDelegate<ExtArgs>;

  /**
   * `prisma.readingItem`: Exposes CRUD operations for the **ReadingItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReadingItems
    * const readingItems = await prisma.readingItem.findMany()
    * ```
    */
  get readingItem(): Prisma.ReadingItemDelegate<ExtArgs>;

  /**
   * `prisma.actionItem`: Exposes CRUD operations for the **ActionItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActionItems
    * const actionItems = await prisma.actionItem.findMany()
    * ```
    */
  get actionItem(): Prisma.ActionItemDelegate<ExtArgs>;

  /**
   * `prisma.dailyReview`: Exposes CRUD operations for the **DailyReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyReviews
    * const dailyReviews = await prisma.dailyReview.findMany()
    * ```
    */
  get dailyReview(): Prisma.DailyReviewDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    NewsItem: 'NewsItem',
    KnowledgeItem: 'KnowledgeItem',
    ReviewItem: 'ReviewItem',
    Settings: 'Settings',
    ReadingItem: 'ReadingItem',
    ActionItem: 'ActionItem',
    DailyReview: 'DailyReview'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "newsItem" | "knowledgeItem" | "reviewItem" | "settings" | "readingItem" | "actionItem" | "dailyReview"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      NewsItem: {
        payload: Prisma.$NewsItemPayload<ExtArgs>
        fields: Prisma.NewsItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload>
          }
          findFirst: {
            args: Prisma.NewsItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload>
          }
          findMany: {
            args: Prisma.NewsItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload>[]
          }
          create: {
            args: Prisma.NewsItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload>
          }
          createMany: {
            args: Prisma.NewsItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload>[]
          }
          delete: {
            args: Prisma.NewsItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload>
          }
          update: {
            args: Prisma.NewsItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload>
          }
          deleteMany: {
            args: Prisma.NewsItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NewsItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsItemPayload>
          }
          aggregate: {
            args: Prisma.NewsItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsItem>
          }
          groupBy: {
            args: Prisma.NewsItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsItemCountArgs<ExtArgs>
            result: $Utils.Optional<NewsItemCountAggregateOutputType> | number
          }
        }
      }
      KnowledgeItem: {
        payload: Prisma.$KnowledgeItemPayload<ExtArgs>
        fields: Prisma.KnowledgeItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KnowledgeItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KnowledgeItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeItemPayload>
          }
          findFirst: {
            args: Prisma.KnowledgeItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KnowledgeItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeItemPayload>
          }
          findMany: {
            args: Prisma.KnowledgeItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeItemPayload>[]
          }
          create: {
            args: Prisma.KnowledgeItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeItemPayload>
          }
          createMany: {
            args: Prisma.KnowledgeItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KnowledgeItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeItemPayload>[]
          }
          delete: {
            args: Prisma.KnowledgeItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeItemPayload>
          }
          update: {
            args: Prisma.KnowledgeItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeItemPayload>
          }
          deleteMany: {
            args: Prisma.KnowledgeItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KnowledgeItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KnowledgeItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeItemPayload>
          }
          aggregate: {
            args: Prisma.KnowledgeItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKnowledgeItem>
          }
          groupBy: {
            args: Prisma.KnowledgeItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<KnowledgeItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.KnowledgeItemCountArgs<ExtArgs>
            result: $Utils.Optional<KnowledgeItemCountAggregateOutputType> | number
          }
        }
      }
      ReviewItem: {
        payload: Prisma.$ReviewItemPayload<ExtArgs>
        fields: Prisma.ReviewItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewItemPayload>
          }
          findFirst: {
            args: Prisma.ReviewItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewItemPayload>
          }
          findMany: {
            args: Prisma.ReviewItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewItemPayload>[]
          }
          create: {
            args: Prisma.ReviewItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewItemPayload>
          }
          createMany: {
            args: Prisma.ReviewItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewItemPayload>[]
          }
          delete: {
            args: Prisma.ReviewItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewItemPayload>
          }
          update: {
            args: Prisma.ReviewItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewItemPayload>
          }
          deleteMany: {
            args: Prisma.ReviewItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewItemPayload>
          }
          aggregate: {
            args: Prisma.ReviewItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewItem>
          }
          groupBy: {
            args: Prisma.ReviewItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewItemCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewItemCountAggregateOutputType> | number
          }
        }
      }
      Settings: {
        payload: Prisma.$SettingsPayload<ExtArgs>
        fields: Prisma.SettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findFirst: {
            args: Prisma.SettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findMany: {
            args: Prisma.SettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          create: {
            args: Prisma.SettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          createMany: {
            args: Prisma.SettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          delete: {
            args: Prisma.SettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          update: {
            args: Prisma.SettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          deleteMany: {
            args: Prisma.SettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.SettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
          }
        }
      }
      ReadingItem: {
        payload: Prisma.$ReadingItemPayload<ExtArgs>
        fields: Prisma.ReadingItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReadingItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReadingItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingItemPayload>
          }
          findFirst: {
            args: Prisma.ReadingItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReadingItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingItemPayload>
          }
          findMany: {
            args: Prisma.ReadingItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingItemPayload>[]
          }
          create: {
            args: Prisma.ReadingItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingItemPayload>
          }
          createMany: {
            args: Prisma.ReadingItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReadingItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingItemPayload>[]
          }
          delete: {
            args: Prisma.ReadingItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingItemPayload>
          }
          update: {
            args: Prisma.ReadingItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingItemPayload>
          }
          deleteMany: {
            args: Prisma.ReadingItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReadingItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReadingItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingItemPayload>
          }
          aggregate: {
            args: Prisma.ReadingItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReadingItem>
          }
          groupBy: {
            args: Prisma.ReadingItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReadingItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReadingItemCountArgs<ExtArgs>
            result: $Utils.Optional<ReadingItemCountAggregateOutputType> | number
          }
        }
      }
      ActionItem: {
        payload: Prisma.$ActionItemPayload<ExtArgs>
        fields: Prisma.ActionItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionItemPayload>
          }
          findFirst: {
            args: Prisma.ActionItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionItemPayload>
          }
          findMany: {
            args: Prisma.ActionItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionItemPayload>[]
          }
          create: {
            args: Prisma.ActionItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionItemPayload>
          }
          createMany: {
            args: Prisma.ActionItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActionItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionItemPayload>[]
          }
          delete: {
            args: Prisma.ActionItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionItemPayload>
          }
          update: {
            args: Prisma.ActionItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionItemPayload>
          }
          deleteMany: {
            args: Prisma.ActionItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActionItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionItemPayload>
          }
          aggregate: {
            args: Prisma.ActionItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActionItem>
          }
          groupBy: {
            args: Prisma.ActionItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionItemCountArgs<ExtArgs>
            result: $Utils.Optional<ActionItemCountAggregateOutputType> | number
          }
        }
      }
      DailyReview: {
        payload: Prisma.$DailyReviewPayload<ExtArgs>
        fields: Prisma.DailyReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReviewPayload>
          }
          findFirst: {
            args: Prisma.DailyReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReviewPayload>
          }
          findMany: {
            args: Prisma.DailyReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReviewPayload>[]
          }
          create: {
            args: Prisma.DailyReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReviewPayload>
          }
          createMany: {
            args: Prisma.DailyReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReviewPayload>[]
          }
          delete: {
            args: Prisma.DailyReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReviewPayload>
          }
          update: {
            args: Prisma.DailyReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReviewPayload>
          }
          deleteMany: {
            args: Prisma.DailyReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DailyReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReviewPayload>
          }
          aggregate: {
            args: Prisma.DailyReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyReview>
          }
          groupBy: {
            args: Prisma.DailyReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyReviewCountArgs<ExtArgs>
            result: $Utils.Optional<DailyReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type KnowledgeItemCountOutputType
   */

  export type KnowledgeItemCountOutputType = {
    reviewItems: number
  }

  export type KnowledgeItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewItems?: boolean | KnowledgeItemCountOutputTypeCountReviewItemsArgs
  }

  // Custom InputTypes
  /**
   * KnowledgeItemCountOutputType without action
   */
  export type KnowledgeItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeItemCountOutputType
     */
    select?: KnowledgeItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KnowledgeItemCountOutputType without action
   */
  export type KnowledgeItemCountOutputTypeCountReviewItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model NewsItem
   */

  export type AggregateNewsItem = {
    _count: NewsItemCountAggregateOutputType | null
    _min: NewsItemMinAggregateOutputType | null
    _max: NewsItemMaxAggregateOutputType | null
  }

  export type NewsItemMinAggregateOutputType = {
    id: string | null
    title: string | null
    category: string | null
    sourceName: string | null
    sourceUrl: string | null
    publishedAt: string | null
    summary: string | null
    whyItMatters: string | null
    reliabilityNote: string | null
    fullAiOutput: string | null
    saved: boolean | null
    createdAt: Date | null
  }

  export type NewsItemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    category: string | null
    sourceName: string | null
    sourceUrl: string | null
    publishedAt: string | null
    summary: string | null
    whyItMatters: string | null
    reliabilityNote: string | null
    fullAiOutput: string | null
    saved: boolean | null
    createdAt: Date | null
  }

  export type NewsItemCountAggregateOutputType = {
    id: number
    title: number
    category: number
    sourceName: number
    sourceUrl: number
    publishedAt: number
    summary: number
    whyItMatters: number
    reliabilityNote: number
    fullAiOutput: number
    saved: number
    createdAt: number
    _all: number
  }


  export type NewsItemMinAggregateInputType = {
    id?: true
    title?: true
    category?: true
    sourceName?: true
    sourceUrl?: true
    publishedAt?: true
    summary?: true
    whyItMatters?: true
    reliabilityNote?: true
    fullAiOutput?: true
    saved?: true
    createdAt?: true
  }

  export type NewsItemMaxAggregateInputType = {
    id?: true
    title?: true
    category?: true
    sourceName?: true
    sourceUrl?: true
    publishedAt?: true
    summary?: true
    whyItMatters?: true
    reliabilityNote?: true
    fullAiOutput?: true
    saved?: true
    createdAt?: true
  }

  export type NewsItemCountAggregateInputType = {
    id?: true
    title?: true
    category?: true
    sourceName?: true
    sourceUrl?: true
    publishedAt?: true
    summary?: true
    whyItMatters?: true
    reliabilityNote?: true
    fullAiOutput?: true
    saved?: true
    createdAt?: true
    _all?: true
  }

  export type NewsItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsItem to aggregate.
     */
    where?: NewsItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsItems to fetch.
     */
    orderBy?: NewsItemOrderByWithRelationInput | NewsItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsItems
    **/
    _count?: true | NewsItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsItemMaxAggregateInputType
  }

  export type GetNewsItemAggregateType<T extends NewsItemAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsItem[P]>
      : GetScalarType<T[P], AggregateNewsItem[P]>
  }




  export type NewsItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsItemWhereInput
    orderBy?: NewsItemOrderByWithAggregationInput | NewsItemOrderByWithAggregationInput[]
    by: NewsItemScalarFieldEnum[] | NewsItemScalarFieldEnum
    having?: NewsItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsItemCountAggregateInputType | true
    _min?: NewsItemMinAggregateInputType
    _max?: NewsItemMaxAggregateInputType
  }

  export type NewsItemGroupByOutputType = {
    id: string
    title: string
    category: string
    sourceName: string
    sourceUrl: string
    publishedAt: string
    summary: string
    whyItMatters: string
    reliabilityNote: string
    fullAiOutput: string
    saved: boolean
    createdAt: Date
    _count: NewsItemCountAggregateOutputType | null
    _min: NewsItemMinAggregateOutputType | null
    _max: NewsItemMaxAggregateOutputType | null
  }

  type GetNewsItemGroupByPayload<T extends NewsItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsItemGroupByOutputType[P]>
            : GetScalarType<T[P], NewsItemGroupByOutputType[P]>
        }
      >
    >


  export type NewsItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    sourceName?: boolean
    sourceUrl?: boolean
    publishedAt?: boolean
    summary?: boolean
    whyItMatters?: boolean
    reliabilityNote?: boolean
    fullAiOutput?: boolean
    saved?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["newsItem"]>

  export type NewsItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    sourceName?: boolean
    sourceUrl?: boolean
    publishedAt?: boolean
    summary?: boolean
    whyItMatters?: boolean
    reliabilityNote?: boolean
    fullAiOutput?: boolean
    saved?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["newsItem"]>

  export type NewsItemSelectScalar = {
    id?: boolean
    title?: boolean
    category?: boolean
    sourceName?: boolean
    sourceUrl?: boolean
    publishedAt?: boolean
    summary?: boolean
    whyItMatters?: boolean
    reliabilityNote?: boolean
    fullAiOutput?: boolean
    saved?: boolean
    createdAt?: boolean
  }


  export type $NewsItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      category: string
      sourceName: string
      sourceUrl: string
      publishedAt: string
      summary: string
      whyItMatters: string
      reliabilityNote: string
      fullAiOutput: string
      saved: boolean
      createdAt: Date
    }, ExtArgs["result"]["newsItem"]>
    composites: {}
  }

  type NewsItemGetPayload<S extends boolean | null | undefined | NewsItemDefaultArgs> = $Result.GetResult<Prisma.$NewsItemPayload, S>

  type NewsItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NewsItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NewsItemCountAggregateInputType | true
    }

  export interface NewsItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsItem'], meta: { name: 'NewsItem' } }
    /**
     * Find zero or one NewsItem that matches the filter.
     * @param {NewsItemFindUniqueArgs} args - Arguments to find a NewsItem
     * @example
     * // Get one NewsItem
     * const newsItem = await prisma.newsItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsItemFindUniqueArgs>(args: SelectSubset<T, NewsItemFindUniqueArgs<ExtArgs>>): Prisma__NewsItemClient<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NewsItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NewsItemFindUniqueOrThrowArgs} args - Arguments to find a NewsItem
     * @example
     * // Get one NewsItem
     * const newsItem = await prisma.newsItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsItemFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsItemClient<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NewsItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsItemFindFirstArgs} args - Arguments to find a NewsItem
     * @example
     * // Get one NewsItem
     * const newsItem = await prisma.newsItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsItemFindFirstArgs>(args?: SelectSubset<T, NewsItemFindFirstArgs<ExtArgs>>): Prisma__NewsItemClient<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NewsItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsItemFindFirstOrThrowArgs} args - Arguments to find a NewsItem
     * @example
     * // Get one NewsItem
     * const newsItem = await prisma.newsItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsItemFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsItemClient<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NewsItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsItems
     * const newsItems = await prisma.newsItem.findMany()
     * 
     * // Get first 10 NewsItems
     * const newsItems = await prisma.newsItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsItemWithIdOnly = await prisma.newsItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsItemFindManyArgs>(args?: SelectSubset<T, NewsItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NewsItem.
     * @param {NewsItemCreateArgs} args - Arguments to create a NewsItem.
     * @example
     * // Create one NewsItem
     * const NewsItem = await prisma.newsItem.create({
     *   data: {
     *     // ... data to create a NewsItem
     *   }
     * })
     * 
     */
    create<T extends NewsItemCreateArgs>(args: SelectSubset<T, NewsItemCreateArgs<ExtArgs>>): Prisma__NewsItemClient<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NewsItems.
     * @param {NewsItemCreateManyArgs} args - Arguments to create many NewsItems.
     * @example
     * // Create many NewsItems
     * const newsItem = await prisma.newsItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsItemCreateManyArgs>(args?: SelectSubset<T, NewsItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsItems and returns the data saved in the database.
     * @param {NewsItemCreateManyAndReturnArgs} args - Arguments to create many NewsItems.
     * @example
     * // Create many NewsItems
     * const newsItem = await prisma.newsItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsItems and only return the `id`
     * const newsItemWithIdOnly = await prisma.newsItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsItemCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NewsItem.
     * @param {NewsItemDeleteArgs} args - Arguments to delete one NewsItem.
     * @example
     * // Delete one NewsItem
     * const NewsItem = await prisma.newsItem.delete({
     *   where: {
     *     // ... filter to delete one NewsItem
     *   }
     * })
     * 
     */
    delete<T extends NewsItemDeleteArgs>(args: SelectSubset<T, NewsItemDeleteArgs<ExtArgs>>): Prisma__NewsItemClient<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NewsItem.
     * @param {NewsItemUpdateArgs} args - Arguments to update one NewsItem.
     * @example
     * // Update one NewsItem
     * const newsItem = await prisma.newsItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsItemUpdateArgs>(args: SelectSubset<T, NewsItemUpdateArgs<ExtArgs>>): Prisma__NewsItemClient<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NewsItems.
     * @param {NewsItemDeleteManyArgs} args - Arguments to filter NewsItems to delete.
     * @example
     * // Delete a few NewsItems
     * const { count } = await prisma.newsItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsItemDeleteManyArgs>(args?: SelectSubset<T, NewsItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsItems
     * const newsItem = await prisma.newsItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsItemUpdateManyArgs>(args: SelectSubset<T, NewsItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NewsItem.
     * @param {NewsItemUpsertArgs} args - Arguments to update or create a NewsItem.
     * @example
     * // Update or create a NewsItem
     * const newsItem = await prisma.newsItem.upsert({
     *   create: {
     *     // ... data to create a NewsItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsItem we want to update
     *   }
     * })
     */
    upsert<T extends NewsItemUpsertArgs>(args: SelectSubset<T, NewsItemUpsertArgs<ExtArgs>>): Prisma__NewsItemClient<$Result.GetResult<Prisma.$NewsItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NewsItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsItemCountArgs} args - Arguments to filter NewsItems to count.
     * @example
     * // Count the number of NewsItems
     * const count = await prisma.newsItem.count({
     *   where: {
     *     // ... the filter for the NewsItems we want to count
     *   }
     * })
    **/
    count<T extends NewsItemCountArgs>(
      args?: Subset<T, NewsItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsItemAggregateArgs>(args: Subset<T, NewsItemAggregateArgs>): Prisma.PrismaPromise<GetNewsItemAggregateType<T>>

    /**
     * Group by NewsItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsItemGroupByArgs['orderBy'] }
        : { orderBy?: NewsItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsItem model
   */
  readonly fields: NewsItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsItem model
   */ 
  interface NewsItemFieldRefs {
    readonly id: FieldRef<"NewsItem", 'String'>
    readonly title: FieldRef<"NewsItem", 'String'>
    readonly category: FieldRef<"NewsItem", 'String'>
    readonly sourceName: FieldRef<"NewsItem", 'String'>
    readonly sourceUrl: FieldRef<"NewsItem", 'String'>
    readonly publishedAt: FieldRef<"NewsItem", 'String'>
    readonly summary: FieldRef<"NewsItem", 'String'>
    readonly whyItMatters: FieldRef<"NewsItem", 'String'>
    readonly reliabilityNote: FieldRef<"NewsItem", 'String'>
    readonly fullAiOutput: FieldRef<"NewsItem", 'String'>
    readonly saved: FieldRef<"NewsItem", 'Boolean'>
    readonly createdAt: FieldRef<"NewsItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsItem findUnique
   */
  export type NewsItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
    /**
     * Filter, which NewsItem to fetch.
     */
    where: NewsItemWhereUniqueInput
  }

  /**
   * NewsItem findUniqueOrThrow
   */
  export type NewsItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
    /**
     * Filter, which NewsItem to fetch.
     */
    where: NewsItemWhereUniqueInput
  }

  /**
   * NewsItem findFirst
   */
  export type NewsItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
    /**
     * Filter, which NewsItem to fetch.
     */
    where?: NewsItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsItems to fetch.
     */
    orderBy?: NewsItemOrderByWithRelationInput | NewsItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsItems.
     */
    cursor?: NewsItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsItems.
     */
    distinct?: NewsItemScalarFieldEnum | NewsItemScalarFieldEnum[]
  }

  /**
   * NewsItem findFirstOrThrow
   */
  export type NewsItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
    /**
     * Filter, which NewsItem to fetch.
     */
    where?: NewsItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsItems to fetch.
     */
    orderBy?: NewsItemOrderByWithRelationInput | NewsItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsItems.
     */
    cursor?: NewsItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsItems.
     */
    distinct?: NewsItemScalarFieldEnum | NewsItemScalarFieldEnum[]
  }

  /**
   * NewsItem findMany
   */
  export type NewsItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
    /**
     * Filter, which NewsItems to fetch.
     */
    where?: NewsItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsItems to fetch.
     */
    orderBy?: NewsItemOrderByWithRelationInput | NewsItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsItems.
     */
    cursor?: NewsItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsItems.
     */
    skip?: number
    distinct?: NewsItemScalarFieldEnum | NewsItemScalarFieldEnum[]
  }

  /**
   * NewsItem create
   */
  export type NewsItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
    /**
     * The data needed to create a NewsItem.
     */
    data: XOR<NewsItemCreateInput, NewsItemUncheckedCreateInput>
  }

  /**
   * NewsItem createMany
   */
  export type NewsItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsItems.
     */
    data: NewsItemCreateManyInput | NewsItemCreateManyInput[]
  }

  /**
   * NewsItem createManyAndReturn
   */
  export type NewsItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many NewsItems.
     */
    data: NewsItemCreateManyInput | NewsItemCreateManyInput[]
  }

  /**
   * NewsItem update
   */
  export type NewsItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
    /**
     * The data needed to update a NewsItem.
     */
    data: XOR<NewsItemUpdateInput, NewsItemUncheckedUpdateInput>
    /**
     * Choose, which NewsItem to update.
     */
    where: NewsItemWhereUniqueInput
  }

  /**
   * NewsItem updateMany
   */
  export type NewsItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsItems.
     */
    data: XOR<NewsItemUpdateManyMutationInput, NewsItemUncheckedUpdateManyInput>
    /**
     * Filter which NewsItems to update
     */
    where?: NewsItemWhereInput
  }

  /**
   * NewsItem upsert
   */
  export type NewsItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
    /**
     * The filter to search for the NewsItem to update in case it exists.
     */
    where: NewsItemWhereUniqueInput
    /**
     * In case the NewsItem found by the `where` argument doesn't exist, create a new NewsItem with this data.
     */
    create: XOR<NewsItemCreateInput, NewsItemUncheckedCreateInput>
    /**
     * In case the NewsItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsItemUpdateInput, NewsItemUncheckedUpdateInput>
  }

  /**
   * NewsItem delete
   */
  export type NewsItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
    /**
     * Filter which NewsItem to delete.
     */
    where: NewsItemWhereUniqueInput
  }

  /**
   * NewsItem deleteMany
   */
  export type NewsItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsItems to delete
     */
    where?: NewsItemWhereInput
  }

  /**
   * NewsItem without action
   */
  export type NewsItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsItem
     */
    select?: NewsItemSelect<ExtArgs> | null
  }


  /**
   * Model KnowledgeItem
   */

  export type AggregateKnowledgeItem = {
    _count: KnowledgeItemCountAggregateOutputType | null
    _min: KnowledgeItemMinAggregateOutputType | null
    _max: KnowledgeItemMaxAggregateOutputType | null
  }

  export type KnowledgeItemMinAggregateOutputType = {
    id: string | null
    title: string | null
    category: string | null
    sourceType: string | null
    sourceUrl: string | null
    originalText: string | null
    coreThesis: string | null
    oneThingToRemember: string | null
    keyPoints: string | null
    terms: string | null
    examples: string | null
    application: string | null
    mistakes: string | null
    selfTestQuestions: string | null
    flashcards: string | null
    fullAiOutput: string | null
    tags: string | null
    favorite: boolean | null
    reviewStatus: string | null
    relatedTopics: string | null
    relatedItemIds: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KnowledgeItemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    category: string | null
    sourceType: string | null
    sourceUrl: string | null
    originalText: string | null
    coreThesis: string | null
    oneThingToRemember: string | null
    keyPoints: string | null
    terms: string | null
    examples: string | null
    application: string | null
    mistakes: string | null
    selfTestQuestions: string | null
    flashcards: string | null
    fullAiOutput: string | null
    tags: string | null
    favorite: boolean | null
    reviewStatus: string | null
    relatedTopics: string | null
    relatedItemIds: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KnowledgeItemCountAggregateOutputType = {
    id: number
    title: number
    category: number
    sourceType: number
    sourceUrl: number
    originalText: number
    coreThesis: number
    oneThingToRemember: number
    keyPoints: number
    terms: number
    examples: number
    application: number
    mistakes: number
    selfTestQuestions: number
    flashcards: number
    fullAiOutput: number
    tags: number
    favorite: number
    reviewStatus: number
    relatedTopics: number
    relatedItemIds: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KnowledgeItemMinAggregateInputType = {
    id?: true
    title?: true
    category?: true
    sourceType?: true
    sourceUrl?: true
    originalText?: true
    coreThesis?: true
    oneThingToRemember?: true
    keyPoints?: true
    terms?: true
    examples?: true
    application?: true
    mistakes?: true
    selfTestQuestions?: true
    flashcards?: true
    fullAiOutput?: true
    tags?: true
    favorite?: true
    reviewStatus?: true
    relatedTopics?: true
    relatedItemIds?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KnowledgeItemMaxAggregateInputType = {
    id?: true
    title?: true
    category?: true
    sourceType?: true
    sourceUrl?: true
    originalText?: true
    coreThesis?: true
    oneThingToRemember?: true
    keyPoints?: true
    terms?: true
    examples?: true
    application?: true
    mistakes?: true
    selfTestQuestions?: true
    flashcards?: true
    fullAiOutput?: true
    tags?: true
    favorite?: true
    reviewStatus?: true
    relatedTopics?: true
    relatedItemIds?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KnowledgeItemCountAggregateInputType = {
    id?: true
    title?: true
    category?: true
    sourceType?: true
    sourceUrl?: true
    originalText?: true
    coreThesis?: true
    oneThingToRemember?: true
    keyPoints?: true
    terms?: true
    examples?: true
    application?: true
    mistakes?: true
    selfTestQuestions?: true
    flashcards?: true
    fullAiOutput?: true
    tags?: true
    favorite?: true
    reviewStatus?: true
    relatedTopics?: true
    relatedItemIds?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KnowledgeItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KnowledgeItem to aggregate.
     */
    where?: KnowledgeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeItems to fetch.
     */
    orderBy?: KnowledgeItemOrderByWithRelationInput | KnowledgeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KnowledgeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KnowledgeItems
    **/
    _count?: true | KnowledgeItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KnowledgeItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KnowledgeItemMaxAggregateInputType
  }

  export type GetKnowledgeItemAggregateType<T extends KnowledgeItemAggregateArgs> = {
        [P in keyof T & keyof AggregateKnowledgeItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKnowledgeItem[P]>
      : GetScalarType<T[P], AggregateKnowledgeItem[P]>
  }




  export type KnowledgeItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KnowledgeItemWhereInput
    orderBy?: KnowledgeItemOrderByWithAggregationInput | KnowledgeItemOrderByWithAggregationInput[]
    by: KnowledgeItemScalarFieldEnum[] | KnowledgeItemScalarFieldEnum
    having?: KnowledgeItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KnowledgeItemCountAggregateInputType | true
    _min?: KnowledgeItemMinAggregateInputType
    _max?: KnowledgeItemMaxAggregateInputType
  }

  export type KnowledgeItemGroupByOutputType = {
    id: string
    title: string
    category: string
    sourceType: string
    sourceUrl: string
    originalText: string
    coreThesis: string
    oneThingToRemember: string
    keyPoints: string
    terms: string
    examples: string
    application: string
    mistakes: string
    selfTestQuestions: string
    flashcards: string
    fullAiOutput: string
    tags: string
    favorite: boolean
    reviewStatus: string
    relatedTopics: string
    relatedItemIds: string
    createdAt: Date
    updatedAt: Date
    _count: KnowledgeItemCountAggregateOutputType | null
    _min: KnowledgeItemMinAggregateOutputType | null
    _max: KnowledgeItemMaxAggregateOutputType | null
  }

  type GetKnowledgeItemGroupByPayload<T extends KnowledgeItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KnowledgeItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KnowledgeItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KnowledgeItemGroupByOutputType[P]>
            : GetScalarType<T[P], KnowledgeItemGroupByOutputType[P]>
        }
      >
    >


  export type KnowledgeItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    sourceType?: boolean
    sourceUrl?: boolean
    originalText?: boolean
    coreThesis?: boolean
    oneThingToRemember?: boolean
    keyPoints?: boolean
    terms?: boolean
    examples?: boolean
    application?: boolean
    mistakes?: boolean
    selfTestQuestions?: boolean
    flashcards?: boolean
    fullAiOutput?: boolean
    tags?: boolean
    favorite?: boolean
    reviewStatus?: boolean
    relatedTopics?: boolean
    relatedItemIds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewItems?: boolean | KnowledgeItem$reviewItemsArgs<ExtArgs>
    _count?: boolean | KnowledgeItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["knowledgeItem"]>

  export type KnowledgeItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    sourceType?: boolean
    sourceUrl?: boolean
    originalText?: boolean
    coreThesis?: boolean
    oneThingToRemember?: boolean
    keyPoints?: boolean
    terms?: boolean
    examples?: boolean
    application?: boolean
    mistakes?: boolean
    selfTestQuestions?: boolean
    flashcards?: boolean
    fullAiOutput?: boolean
    tags?: boolean
    favorite?: boolean
    reviewStatus?: boolean
    relatedTopics?: boolean
    relatedItemIds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["knowledgeItem"]>

  export type KnowledgeItemSelectScalar = {
    id?: boolean
    title?: boolean
    category?: boolean
    sourceType?: boolean
    sourceUrl?: boolean
    originalText?: boolean
    coreThesis?: boolean
    oneThingToRemember?: boolean
    keyPoints?: boolean
    terms?: boolean
    examples?: boolean
    application?: boolean
    mistakes?: boolean
    selfTestQuestions?: boolean
    flashcards?: boolean
    fullAiOutput?: boolean
    tags?: boolean
    favorite?: boolean
    reviewStatus?: boolean
    relatedTopics?: boolean
    relatedItemIds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KnowledgeItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewItems?: boolean | KnowledgeItem$reviewItemsArgs<ExtArgs>
    _count?: boolean | KnowledgeItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KnowledgeItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $KnowledgeItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KnowledgeItem"
    objects: {
      reviewItems: Prisma.$ReviewItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      category: string
      sourceType: string
      sourceUrl: string
      originalText: string
      coreThesis: string
      oneThingToRemember: string
      keyPoints: string
      terms: string
      examples: string
      application: string
      mistakes: string
      selfTestQuestions: string
      flashcards: string
      fullAiOutput: string
      tags: string
      favorite: boolean
      reviewStatus: string
      relatedTopics: string
      relatedItemIds: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["knowledgeItem"]>
    composites: {}
  }

  type KnowledgeItemGetPayload<S extends boolean | null | undefined | KnowledgeItemDefaultArgs> = $Result.GetResult<Prisma.$KnowledgeItemPayload, S>

  type KnowledgeItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<KnowledgeItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: KnowledgeItemCountAggregateInputType | true
    }

  export interface KnowledgeItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KnowledgeItem'], meta: { name: 'KnowledgeItem' } }
    /**
     * Find zero or one KnowledgeItem that matches the filter.
     * @param {KnowledgeItemFindUniqueArgs} args - Arguments to find a KnowledgeItem
     * @example
     * // Get one KnowledgeItem
     * const knowledgeItem = await prisma.knowledgeItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KnowledgeItemFindUniqueArgs>(args: SelectSubset<T, KnowledgeItemFindUniqueArgs<ExtArgs>>): Prisma__KnowledgeItemClient<$Result.GetResult<Prisma.$KnowledgeItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one KnowledgeItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {KnowledgeItemFindUniqueOrThrowArgs} args - Arguments to find a KnowledgeItem
     * @example
     * // Get one KnowledgeItem
     * const knowledgeItem = await prisma.knowledgeItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KnowledgeItemFindUniqueOrThrowArgs>(args: SelectSubset<T, KnowledgeItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KnowledgeItemClient<$Result.GetResult<Prisma.$KnowledgeItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first KnowledgeItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeItemFindFirstArgs} args - Arguments to find a KnowledgeItem
     * @example
     * // Get one KnowledgeItem
     * const knowledgeItem = await prisma.knowledgeItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KnowledgeItemFindFirstArgs>(args?: SelectSubset<T, KnowledgeItemFindFirstArgs<ExtArgs>>): Prisma__KnowledgeItemClient<$Result.GetResult<Prisma.$KnowledgeItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first KnowledgeItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeItemFindFirstOrThrowArgs} args - Arguments to find a KnowledgeItem
     * @example
     * // Get one KnowledgeItem
     * const knowledgeItem = await prisma.knowledgeItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KnowledgeItemFindFirstOrThrowArgs>(args?: SelectSubset<T, KnowledgeItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__KnowledgeItemClient<$Result.GetResult<Prisma.$KnowledgeItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more KnowledgeItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KnowledgeItems
     * const knowledgeItems = await prisma.knowledgeItem.findMany()
     * 
     * // Get first 10 KnowledgeItems
     * const knowledgeItems = await prisma.knowledgeItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const knowledgeItemWithIdOnly = await prisma.knowledgeItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KnowledgeItemFindManyArgs>(args?: SelectSubset<T, KnowledgeItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a KnowledgeItem.
     * @param {KnowledgeItemCreateArgs} args - Arguments to create a KnowledgeItem.
     * @example
     * // Create one KnowledgeItem
     * const KnowledgeItem = await prisma.knowledgeItem.create({
     *   data: {
     *     // ... data to create a KnowledgeItem
     *   }
     * })
     * 
     */
    create<T extends KnowledgeItemCreateArgs>(args: SelectSubset<T, KnowledgeItemCreateArgs<ExtArgs>>): Prisma__KnowledgeItemClient<$Result.GetResult<Prisma.$KnowledgeItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many KnowledgeItems.
     * @param {KnowledgeItemCreateManyArgs} args - Arguments to create many KnowledgeItems.
     * @example
     * // Create many KnowledgeItems
     * const knowledgeItem = await prisma.knowledgeItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KnowledgeItemCreateManyArgs>(args?: SelectSubset<T, KnowledgeItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KnowledgeItems and returns the data saved in the database.
     * @param {KnowledgeItemCreateManyAndReturnArgs} args - Arguments to create many KnowledgeItems.
     * @example
     * // Create many KnowledgeItems
     * const knowledgeItem = await prisma.knowledgeItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KnowledgeItems and only return the `id`
     * const knowledgeItemWithIdOnly = await prisma.knowledgeItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KnowledgeItemCreateManyAndReturnArgs>(args?: SelectSubset<T, KnowledgeItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a KnowledgeItem.
     * @param {KnowledgeItemDeleteArgs} args - Arguments to delete one KnowledgeItem.
     * @example
     * // Delete one KnowledgeItem
     * const KnowledgeItem = await prisma.knowledgeItem.delete({
     *   where: {
     *     // ... filter to delete one KnowledgeItem
     *   }
     * })
     * 
     */
    delete<T extends KnowledgeItemDeleteArgs>(args: SelectSubset<T, KnowledgeItemDeleteArgs<ExtArgs>>): Prisma__KnowledgeItemClient<$Result.GetResult<Prisma.$KnowledgeItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one KnowledgeItem.
     * @param {KnowledgeItemUpdateArgs} args - Arguments to update one KnowledgeItem.
     * @example
     * // Update one KnowledgeItem
     * const knowledgeItem = await prisma.knowledgeItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KnowledgeItemUpdateArgs>(args: SelectSubset<T, KnowledgeItemUpdateArgs<ExtArgs>>): Prisma__KnowledgeItemClient<$Result.GetResult<Prisma.$KnowledgeItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more KnowledgeItems.
     * @param {KnowledgeItemDeleteManyArgs} args - Arguments to filter KnowledgeItems to delete.
     * @example
     * // Delete a few KnowledgeItems
     * const { count } = await prisma.knowledgeItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KnowledgeItemDeleteManyArgs>(args?: SelectSubset<T, KnowledgeItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KnowledgeItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KnowledgeItems
     * const knowledgeItem = await prisma.knowledgeItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KnowledgeItemUpdateManyArgs>(args: SelectSubset<T, KnowledgeItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one KnowledgeItem.
     * @param {KnowledgeItemUpsertArgs} args - Arguments to update or create a KnowledgeItem.
     * @example
     * // Update or create a KnowledgeItem
     * const knowledgeItem = await prisma.knowledgeItem.upsert({
     *   create: {
     *     // ... data to create a KnowledgeItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KnowledgeItem we want to update
     *   }
     * })
     */
    upsert<T extends KnowledgeItemUpsertArgs>(args: SelectSubset<T, KnowledgeItemUpsertArgs<ExtArgs>>): Prisma__KnowledgeItemClient<$Result.GetResult<Prisma.$KnowledgeItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of KnowledgeItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeItemCountArgs} args - Arguments to filter KnowledgeItems to count.
     * @example
     * // Count the number of KnowledgeItems
     * const count = await prisma.knowledgeItem.count({
     *   where: {
     *     // ... the filter for the KnowledgeItems we want to count
     *   }
     * })
    **/
    count<T extends KnowledgeItemCountArgs>(
      args?: Subset<T, KnowledgeItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KnowledgeItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KnowledgeItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KnowledgeItemAggregateArgs>(args: Subset<T, KnowledgeItemAggregateArgs>): Prisma.PrismaPromise<GetKnowledgeItemAggregateType<T>>

    /**
     * Group by KnowledgeItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KnowledgeItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KnowledgeItemGroupByArgs['orderBy'] }
        : { orderBy?: KnowledgeItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KnowledgeItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKnowledgeItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KnowledgeItem model
   */
  readonly fields: KnowledgeItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KnowledgeItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KnowledgeItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviewItems<T extends KnowledgeItem$reviewItemsArgs<ExtArgs> = {}>(args?: Subset<T, KnowledgeItem$reviewItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KnowledgeItem model
   */ 
  interface KnowledgeItemFieldRefs {
    readonly id: FieldRef<"KnowledgeItem", 'String'>
    readonly title: FieldRef<"KnowledgeItem", 'String'>
    readonly category: FieldRef<"KnowledgeItem", 'String'>
    readonly sourceType: FieldRef<"KnowledgeItem", 'String'>
    readonly sourceUrl: FieldRef<"KnowledgeItem", 'String'>
    readonly originalText: FieldRef<"KnowledgeItem", 'String'>
    readonly coreThesis: FieldRef<"KnowledgeItem", 'String'>
    readonly oneThingToRemember: FieldRef<"KnowledgeItem", 'String'>
    readonly keyPoints: FieldRef<"KnowledgeItem", 'String'>
    readonly terms: FieldRef<"KnowledgeItem", 'String'>
    readonly examples: FieldRef<"KnowledgeItem", 'String'>
    readonly application: FieldRef<"KnowledgeItem", 'String'>
    readonly mistakes: FieldRef<"KnowledgeItem", 'String'>
    readonly selfTestQuestions: FieldRef<"KnowledgeItem", 'String'>
    readonly flashcards: FieldRef<"KnowledgeItem", 'String'>
    readonly fullAiOutput: FieldRef<"KnowledgeItem", 'String'>
    readonly tags: FieldRef<"KnowledgeItem", 'String'>
    readonly favorite: FieldRef<"KnowledgeItem", 'Boolean'>
    readonly reviewStatus: FieldRef<"KnowledgeItem", 'String'>
    readonly relatedTopics: FieldRef<"KnowledgeItem", 'String'>
    readonly relatedItemIds: FieldRef<"KnowledgeItem", 'String'>
    readonly createdAt: FieldRef<"KnowledgeItem", 'DateTime'>
    readonly updatedAt: FieldRef<"KnowledgeItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KnowledgeItem findUnique
   */
  export type KnowledgeItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeItem
     */
    select?: KnowledgeItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeItemInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeItem to fetch.
     */
    where: KnowledgeItemWhereUniqueInput
  }

  /**
   * KnowledgeItem findUniqueOrThrow
   */
  export type KnowledgeItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeItem
     */
    select?: KnowledgeItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeItemInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeItem to fetch.
     */
    where: KnowledgeItemWhereUniqueInput
  }

  /**
   * KnowledgeItem findFirst
   */
  export type KnowledgeItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeItem
     */
    select?: KnowledgeItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeItemInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeItem to fetch.
     */
    where?: KnowledgeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeItems to fetch.
     */
    orderBy?: KnowledgeItemOrderByWithRelationInput | KnowledgeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KnowledgeItems.
     */
    cursor?: KnowledgeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KnowledgeItems.
     */
    distinct?: KnowledgeItemScalarFieldEnum | KnowledgeItemScalarFieldEnum[]
  }

  /**
   * KnowledgeItem findFirstOrThrow
   */
  export type KnowledgeItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeItem
     */
    select?: KnowledgeItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeItemInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeItem to fetch.
     */
    where?: KnowledgeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeItems to fetch.
     */
    orderBy?: KnowledgeItemOrderByWithRelationInput | KnowledgeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KnowledgeItems.
     */
    cursor?: KnowledgeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KnowledgeItems.
     */
    distinct?: KnowledgeItemScalarFieldEnum | KnowledgeItemScalarFieldEnum[]
  }

  /**
   * KnowledgeItem findMany
   */
  export type KnowledgeItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeItem
     */
    select?: KnowledgeItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeItemInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeItems to fetch.
     */
    where?: KnowledgeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeItems to fetch.
     */
    orderBy?: KnowledgeItemOrderByWithRelationInput | KnowledgeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KnowledgeItems.
     */
    cursor?: KnowledgeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeItems.
     */
    skip?: number
    distinct?: KnowledgeItemScalarFieldEnum | KnowledgeItemScalarFieldEnum[]
  }

  /**
   * KnowledgeItem create
   */
  export type KnowledgeItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeItem
     */
    select?: KnowledgeItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeItemInclude<ExtArgs> | null
    /**
     * The data needed to create a KnowledgeItem.
     */
    data: XOR<KnowledgeItemCreateInput, KnowledgeItemUncheckedCreateInput>
  }

  /**
   * KnowledgeItem createMany
   */
  export type KnowledgeItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KnowledgeItems.
     */
    data: KnowledgeItemCreateManyInput | KnowledgeItemCreateManyInput[]
  }

  /**
   * KnowledgeItem createManyAndReturn
   */
  export type KnowledgeItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeItem
     */
    select?: KnowledgeItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many KnowledgeItems.
     */
    data: KnowledgeItemCreateManyInput | KnowledgeItemCreateManyInput[]
  }

  /**
   * KnowledgeItem update
   */
  export type KnowledgeItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeItem
     */
    select?: KnowledgeItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeItemInclude<ExtArgs> | null
    /**
     * The data needed to update a KnowledgeItem.
     */
    data: XOR<KnowledgeItemUpdateInput, KnowledgeItemUncheckedUpdateInput>
    /**
     * Choose, which KnowledgeItem to update.
     */
    where: KnowledgeItemWhereUniqueInput
  }

  /**
   * KnowledgeItem updateMany
   */
  export type KnowledgeItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KnowledgeItems.
     */
    data: XOR<KnowledgeItemUpdateManyMutationInput, KnowledgeItemUncheckedUpdateManyInput>
    /**
     * Filter which KnowledgeItems to update
     */
    where?: KnowledgeItemWhereInput
  }

  /**
   * KnowledgeItem upsert
   */
  export type KnowledgeItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeItem
     */
    select?: KnowledgeItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeItemInclude<ExtArgs> | null
    /**
     * The filter to search for the KnowledgeItem to update in case it exists.
     */
    where: KnowledgeItemWhereUniqueInput
    /**
     * In case the KnowledgeItem found by the `where` argument doesn't exist, create a new KnowledgeItem with this data.
     */
    create: XOR<KnowledgeItemCreateInput, KnowledgeItemUncheckedCreateInput>
    /**
     * In case the KnowledgeItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KnowledgeItemUpdateInput, KnowledgeItemUncheckedUpdateInput>
  }

  /**
   * KnowledgeItem delete
   */
  export type KnowledgeItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeItem
     */
    select?: KnowledgeItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeItemInclude<ExtArgs> | null
    /**
     * Filter which KnowledgeItem to delete.
     */
    where: KnowledgeItemWhereUniqueInput
  }

  /**
   * KnowledgeItem deleteMany
   */
  export type KnowledgeItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KnowledgeItems to delete
     */
    where?: KnowledgeItemWhereInput
  }

  /**
   * KnowledgeItem.reviewItems
   */
  export type KnowledgeItem$reviewItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewItem
     */
    select?: ReviewItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewItemInclude<ExtArgs> | null
    where?: ReviewItemWhereInput
    orderBy?: ReviewItemOrderByWithRelationInput | ReviewItemOrderByWithRelationInput[]
    cursor?: ReviewItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewItemScalarFieldEnum | ReviewItemScalarFieldEnum[]
  }

  /**
   * KnowledgeItem without action
   */
  export type KnowledgeItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeItem
     */
    select?: KnowledgeItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeItemInclude<ExtArgs> | null
  }


  /**
   * Model ReviewItem
   */

  export type AggregateReviewItem = {
    _count: ReviewItemCountAggregateOutputType | null
    _min: ReviewItemMinAggregateOutputType | null
    _max: ReviewItemMaxAggregateOutputType | null
  }

  export type ReviewItemMinAggregateOutputType = {
    id: string | null
    knowledgeItemId: string | null
    dueDate: Date | null
    status: string | null
    difficulty: string | null
    completedAt: Date | null
  }

  export type ReviewItemMaxAggregateOutputType = {
    id: string | null
    knowledgeItemId: string | null
    dueDate: Date | null
    status: string | null
    difficulty: string | null
    completedAt: Date | null
  }

  export type ReviewItemCountAggregateOutputType = {
    id: number
    knowledgeItemId: number
    dueDate: number
    status: number
    difficulty: number
    completedAt: number
    _all: number
  }


  export type ReviewItemMinAggregateInputType = {
    id?: true
    knowledgeItemId?: true
    dueDate?: true
    status?: true
    difficulty?: true
    completedAt?: true
  }

  export type ReviewItemMaxAggregateInputType = {
    id?: true
    knowledgeItemId?: true
    dueDate?: true
    status?: true
    difficulty?: true
    completedAt?: true
  }

  export type ReviewItemCountAggregateInputType = {
    id?: true
    knowledgeItemId?: true
    dueDate?: true
    status?: true
    difficulty?: true
    completedAt?: true
    _all?: true
  }

  export type ReviewItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewItem to aggregate.
     */
    where?: ReviewItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewItems to fetch.
     */
    orderBy?: ReviewItemOrderByWithRelationInput | ReviewItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewItems
    **/
    _count?: true | ReviewItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewItemMaxAggregateInputType
  }

  export type GetReviewItemAggregateType<T extends ReviewItemAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewItem[P]>
      : GetScalarType<T[P], AggregateReviewItem[P]>
  }




  export type ReviewItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewItemWhereInput
    orderBy?: ReviewItemOrderByWithAggregationInput | ReviewItemOrderByWithAggregationInput[]
    by: ReviewItemScalarFieldEnum[] | ReviewItemScalarFieldEnum
    having?: ReviewItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewItemCountAggregateInputType | true
    _min?: ReviewItemMinAggregateInputType
    _max?: ReviewItemMaxAggregateInputType
  }

  export type ReviewItemGroupByOutputType = {
    id: string
    knowledgeItemId: string
    dueDate: Date
    status: string
    difficulty: string
    completedAt: Date | null
    _count: ReviewItemCountAggregateOutputType | null
    _min: ReviewItemMinAggregateOutputType | null
    _max: ReviewItemMaxAggregateOutputType | null
  }

  type GetReviewItemGroupByPayload<T extends ReviewItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewItemGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewItemGroupByOutputType[P]>
        }
      >
    >


  export type ReviewItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    knowledgeItemId?: boolean
    dueDate?: boolean
    status?: boolean
    difficulty?: boolean
    completedAt?: boolean
    knowledgeItem?: boolean | KnowledgeItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewItem"]>

  export type ReviewItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    knowledgeItemId?: boolean
    dueDate?: boolean
    status?: boolean
    difficulty?: boolean
    completedAt?: boolean
    knowledgeItem?: boolean | KnowledgeItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewItem"]>

  export type ReviewItemSelectScalar = {
    id?: boolean
    knowledgeItemId?: boolean
    dueDate?: boolean
    status?: boolean
    difficulty?: boolean
    completedAt?: boolean
  }

  export type ReviewItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    knowledgeItem?: boolean | KnowledgeItemDefaultArgs<ExtArgs>
  }
  export type ReviewItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    knowledgeItem?: boolean | KnowledgeItemDefaultArgs<ExtArgs>
  }

  export type $ReviewItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewItem"
    objects: {
      knowledgeItem: Prisma.$KnowledgeItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      knowledgeItemId: string
      dueDate: Date
      status: string
      difficulty: string
      completedAt: Date | null
    }, ExtArgs["result"]["reviewItem"]>
    composites: {}
  }

  type ReviewItemGetPayload<S extends boolean | null | undefined | ReviewItemDefaultArgs> = $Result.GetResult<Prisma.$ReviewItemPayload, S>

  type ReviewItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewItemCountAggregateInputType | true
    }

  export interface ReviewItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewItem'], meta: { name: 'ReviewItem' } }
    /**
     * Find zero or one ReviewItem that matches the filter.
     * @param {ReviewItemFindUniqueArgs} args - Arguments to find a ReviewItem
     * @example
     * // Get one ReviewItem
     * const reviewItem = await prisma.reviewItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewItemFindUniqueArgs>(args: SelectSubset<T, ReviewItemFindUniqueArgs<ExtArgs>>): Prisma__ReviewItemClient<$Result.GetResult<Prisma.$ReviewItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ReviewItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReviewItemFindUniqueOrThrowArgs} args - Arguments to find a ReviewItem
     * @example
     * // Get one ReviewItem
     * const reviewItem = await prisma.reviewItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewItemClient<$Result.GetResult<Prisma.$ReviewItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ReviewItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewItemFindFirstArgs} args - Arguments to find a ReviewItem
     * @example
     * // Get one ReviewItem
     * const reviewItem = await prisma.reviewItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewItemFindFirstArgs>(args?: SelectSubset<T, ReviewItemFindFirstArgs<ExtArgs>>): Prisma__ReviewItemClient<$Result.GetResult<Prisma.$ReviewItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ReviewItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewItemFindFirstOrThrowArgs} args - Arguments to find a ReviewItem
     * @example
     * // Get one ReviewItem
     * const reviewItem = await prisma.reviewItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewItemClient<$Result.GetResult<Prisma.$ReviewItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ReviewItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewItems
     * const reviewItems = await prisma.reviewItem.findMany()
     * 
     * // Get first 10 ReviewItems
     * const reviewItems = await prisma.reviewItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewItemWithIdOnly = await prisma.reviewItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewItemFindManyArgs>(args?: SelectSubset<T, ReviewItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ReviewItem.
     * @param {ReviewItemCreateArgs} args - Arguments to create a ReviewItem.
     * @example
     * // Create one ReviewItem
     * const ReviewItem = await prisma.reviewItem.create({
     *   data: {
     *     // ... data to create a ReviewItem
     *   }
     * })
     * 
     */
    create<T extends ReviewItemCreateArgs>(args: SelectSubset<T, ReviewItemCreateArgs<ExtArgs>>): Prisma__ReviewItemClient<$Result.GetResult<Prisma.$ReviewItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ReviewItems.
     * @param {ReviewItemCreateManyArgs} args - Arguments to create many ReviewItems.
     * @example
     * // Create many ReviewItems
     * const reviewItem = await prisma.reviewItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewItemCreateManyArgs>(args?: SelectSubset<T, ReviewItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReviewItems and returns the data saved in the database.
     * @param {ReviewItemCreateManyAndReturnArgs} args - Arguments to create many ReviewItems.
     * @example
     * // Create many ReviewItems
     * const reviewItem = await prisma.reviewItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReviewItems and only return the `id`
     * const reviewItemWithIdOnly = await prisma.reviewItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ReviewItem.
     * @param {ReviewItemDeleteArgs} args - Arguments to delete one ReviewItem.
     * @example
     * // Delete one ReviewItem
     * const ReviewItem = await prisma.reviewItem.delete({
     *   where: {
     *     // ... filter to delete one ReviewItem
     *   }
     * })
     * 
     */
    delete<T extends ReviewItemDeleteArgs>(args: SelectSubset<T, ReviewItemDeleteArgs<ExtArgs>>): Prisma__ReviewItemClient<$Result.GetResult<Prisma.$ReviewItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ReviewItem.
     * @param {ReviewItemUpdateArgs} args - Arguments to update one ReviewItem.
     * @example
     * // Update one ReviewItem
     * const reviewItem = await prisma.reviewItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewItemUpdateArgs>(args: SelectSubset<T, ReviewItemUpdateArgs<ExtArgs>>): Prisma__ReviewItemClient<$Result.GetResult<Prisma.$ReviewItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ReviewItems.
     * @param {ReviewItemDeleteManyArgs} args - Arguments to filter ReviewItems to delete.
     * @example
     * // Delete a few ReviewItems
     * const { count } = await prisma.reviewItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewItemDeleteManyArgs>(args?: SelectSubset<T, ReviewItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewItems
     * const reviewItem = await prisma.reviewItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewItemUpdateManyArgs>(args: SelectSubset<T, ReviewItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReviewItem.
     * @param {ReviewItemUpsertArgs} args - Arguments to update or create a ReviewItem.
     * @example
     * // Update or create a ReviewItem
     * const reviewItem = await prisma.reviewItem.upsert({
     *   create: {
     *     // ... data to create a ReviewItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewItem we want to update
     *   }
     * })
     */
    upsert<T extends ReviewItemUpsertArgs>(args: SelectSubset<T, ReviewItemUpsertArgs<ExtArgs>>): Prisma__ReviewItemClient<$Result.GetResult<Prisma.$ReviewItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ReviewItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewItemCountArgs} args - Arguments to filter ReviewItems to count.
     * @example
     * // Count the number of ReviewItems
     * const count = await prisma.reviewItem.count({
     *   where: {
     *     // ... the filter for the ReviewItems we want to count
     *   }
     * })
    **/
    count<T extends ReviewItemCountArgs>(
      args?: Subset<T, ReviewItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewItemAggregateArgs>(args: Subset<T, ReviewItemAggregateArgs>): Prisma.PrismaPromise<GetReviewItemAggregateType<T>>

    /**
     * Group by ReviewItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewItemGroupByArgs['orderBy'] }
        : { orderBy?: ReviewItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewItem model
   */
  readonly fields: ReviewItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    knowledgeItem<T extends KnowledgeItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KnowledgeItemDefaultArgs<ExtArgs>>): Prisma__KnowledgeItemClient<$Result.GetResult<Prisma.$KnowledgeItemPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReviewItem model
   */ 
  interface ReviewItemFieldRefs {
    readonly id: FieldRef<"ReviewItem", 'String'>
    readonly knowledgeItemId: FieldRef<"ReviewItem", 'String'>
    readonly dueDate: FieldRef<"ReviewItem", 'DateTime'>
    readonly status: FieldRef<"ReviewItem", 'String'>
    readonly difficulty: FieldRef<"ReviewItem", 'String'>
    readonly completedAt: FieldRef<"ReviewItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReviewItem findUnique
   */
  export type ReviewItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewItem
     */
    select?: ReviewItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewItemInclude<ExtArgs> | null
    /**
     * Filter, which ReviewItem to fetch.
     */
    where: ReviewItemWhereUniqueInput
  }

  /**
   * ReviewItem findUniqueOrThrow
   */
  export type ReviewItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewItem
     */
    select?: ReviewItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewItemInclude<ExtArgs> | null
    /**
     * Filter, which ReviewItem to fetch.
     */
    where: ReviewItemWhereUniqueInput
  }

  /**
   * ReviewItem findFirst
   */
  export type ReviewItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewItem
     */
    select?: ReviewItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewItemInclude<ExtArgs> | null
    /**
     * Filter, which ReviewItem to fetch.
     */
    where?: ReviewItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewItems to fetch.
     */
    orderBy?: ReviewItemOrderByWithRelationInput | ReviewItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewItems.
     */
    cursor?: ReviewItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewItems.
     */
    distinct?: ReviewItemScalarFieldEnum | ReviewItemScalarFieldEnum[]
  }

  /**
   * ReviewItem findFirstOrThrow
   */
  export type ReviewItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewItem
     */
    select?: ReviewItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewItemInclude<ExtArgs> | null
    /**
     * Filter, which ReviewItem to fetch.
     */
    where?: ReviewItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewItems to fetch.
     */
    orderBy?: ReviewItemOrderByWithRelationInput | ReviewItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewItems.
     */
    cursor?: ReviewItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewItems.
     */
    distinct?: ReviewItemScalarFieldEnum | ReviewItemScalarFieldEnum[]
  }

  /**
   * ReviewItem findMany
   */
  export type ReviewItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewItem
     */
    select?: ReviewItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewItemInclude<ExtArgs> | null
    /**
     * Filter, which ReviewItems to fetch.
     */
    where?: ReviewItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewItems to fetch.
     */
    orderBy?: ReviewItemOrderByWithRelationInput | ReviewItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewItems.
     */
    cursor?: ReviewItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewItems.
     */
    skip?: number
    distinct?: ReviewItemScalarFieldEnum | ReviewItemScalarFieldEnum[]
  }

  /**
   * ReviewItem create
   */
  export type ReviewItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewItem
     */
    select?: ReviewItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewItem.
     */
    data: XOR<ReviewItemCreateInput, ReviewItemUncheckedCreateInput>
  }

  /**
   * ReviewItem createMany
   */
  export type ReviewItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewItems.
     */
    data: ReviewItemCreateManyInput | ReviewItemCreateManyInput[]
  }

  /**
   * ReviewItem createManyAndReturn
   */
  export type ReviewItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewItem
     */
    select?: ReviewItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ReviewItems.
     */
    data: ReviewItemCreateManyInput | ReviewItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewItem update
   */
  export type ReviewItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewItem
     */
    select?: ReviewItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewItem.
     */
    data: XOR<ReviewItemUpdateInput, ReviewItemUncheckedUpdateInput>
    /**
     * Choose, which ReviewItem to update.
     */
    where: ReviewItemWhereUniqueInput
  }

  /**
   * ReviewItem updateMany
   */
  export type ReviewItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewItems.
     */
    data: XOR<ReviewItemUpdateManyMutationInput, ReviewItemUncheckedUpdateManyInput>
    /**
     * Filter which ReviewItems to update
     */
    where?: ReviewItemWhereInput
  }

  /**
   * ReviewItem upsert
   */
  export type ReviewItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewItem
     */
    select?: ReviewItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewItem to update in case it exists.
     */
    where: ReviewItemWhereUniqueInput
    /**
     * In case the ReviewItem found by the `where` argument doesn't exist, create a new ReviewItem with this data.
     */
    create: XOR<ReviewItemCreateInput, ReviewItemUncheckedCreateInput>
    /**
     * In case the ReviewItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewItemUpdateInput, ReviewItemUncheckedUpdateInput>
  }

  /**
   * ReviewItem delete
   */
  export type ReviewItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewItem
     */
    select?: ReviewItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewItemInclude<ExtArgs> | null
    /**
     * Filter which ReviewItem to delete.
     */
    where: ReviewItemWhereUniqueInput
  }

  /**
   * ReviewItem deleteMany
   */
  export type ReviewItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewItems to delete
     */
    where?: ReviewItemWhereInput
  }

  /**
   * ReviewItem without action
   */
  export type ReviewItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewItem
     */
    select?: ReviewItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewItemInclude<ExtArgs> | null
  }


  /**
   * Model Settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsAvgAggregateOutputType = {
    dailyNewsCount: number | null
  }

  export type SettingsSumAggregateOutputType = {
    dailyNewsCount: number | null
  }

  export type SettingsMinAggregateOutputType = {
    id: string | null
    aiApiKey: string | null
    aiBaseUrl: string | null
    aiModel: string | null
    newsApiKey: string | null
    preferredTopics: string | null
    preferredCategories: string | null
    dailyNewsCount: number | null
    includePolitics: boolean | null
    autoFlashcards: boolean | null
    defaultLanguage: string | null
  }

  export type SettingsMaxAggregateOutputType = {
    id: string | null
    aiApiKey: string | null
    aiBaseUrl: string | null
    aiModel: string | null
    newsApiKey: string | null
    preferredTopics: string | null
    preferredCategories: string | null
    dailyNewsCount: number | null
    includePolitics: boolean | null
    autoFlashcards: boolean | null
    defaultLanguage: string | null
  }

  export type SettingsCountAggregateOutputType = {
    id: number
    aiApiKey: number
    aiBaseUrl: number
    aiModel: number
    newsApiKey: number
    preferredTopics: number
    preferredCategories: number
    dailyNewsCount: number
    includePolitics: number
    autoFlashcards: number
    defaultLanguage: number
    _all: number
  }


  export type SettingsAvgAggregateInputType = {
    dailyNewsCount?: true
  }

  export type SettingsSumAggregateInputType = {
    dailyNewsCount?: true
  }

  export type SettingsMinAggregateInputType = {
    id?: true
    aiApiKey?: true
    aiBaseUrl?: true
    aiModel?: true
    newsApiKey?: true
    preferredTopics?: true
    preferredCategories?: true
    dailyNewsCount?: true
    includePolitics?: true
    autoFlashcards?: true
    defaultLanguage?: true
  }

  export type SettingsMaxAggregateInputType = {
    id?: true
    aiApiKey?: true
    aiBaseUrl?: true
    aiModel?: true
    newsApiKey?: true
    preferredTopics?: true
    preferredCategories?: true
    dailyNewsCount?: true
    includePolitics?: true
    autoFlashcards?: true
    defaultLanguage?: true
  }

  export type SettingsCountAggregateInputType = {
    id?: true
    aiApiKey?: true
    aiBaseUrl?: true
    aiModel?: true
    newsApiKey?: true
    preferredTopics?: true
    preferredCategories?: true
    dailyNewsCount?: true
    includePolitics?: true
    autoFlashcards?: true
    defaultLanguage?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to aggregate.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type SettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingsWhereInput
    orderBy?: SettingsOrderByWithAggregationInput | SettingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: SettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _avg?: SettingsAvgAggregateInputType
    _sum?: SettingsSumAggregateInputType
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    id: string
    aiApiKey: string
    aiBaseUrl: string
    aiModel: string
    newsApiKey: string
    preferredTopics: string
    preferredCategories: string
    dailyNewsCount: number
    includePolitics: boolean
    autoFlashcards: boolean
    defaultLanguage: string
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends SettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type SettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aiApiKey?: boolean
    aiBaseUrl?: boolean
    aiModel?: boolean
    newsApiKey?: boolean
    preferredTopics?: boolean
    preferredCategories?: boolean
    dailyNewsCount?: boolean
    includePolitics?: boolean
    autoFlashcards?: boolean
    defaultLanguage?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aiApiKey?: boolean
    aiBaseUrl?: boolean
    aiModel?: boolean
    newsApiKey?: boolean
    preferredTopics?: boolean
    preferredCategories?: boolean
    dailyNewsCount?: boolean
    includePolitics?: boolean
    autoFlashcards?: boolean
    defaultLanguage?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectScalar = {
    id?: boolean
    aiApiKey?: boolean
    aiBaseUrl?: boolean
    aiModel?: boolean
    newsApiKey?: boolean
    preferredTopics?: boolean
    preferredCategories?: boolean
    dailyNewsCount?: boolean
    includePolitics?: boolean
    autoFlashcards?: boolean
    defaultLanguage?: boolean
  }


  export type $SettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      aiApiKey: string
      aiBaseUrl: string
      aiModel: string
      newsApiKey: string
      preferredTopics: string
      preferredCategories: string
      dailyNewsCount: number
      includePolitics: boolean
      autoFlashcards: boolean
      defaultLanguage: string
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type SettingsGetPayload<S extends boolean | null | undefined | SettingsDefaultArgs> = $Result.GetResult<Prisma.$SettingsPayload, S>

  type SettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SettingsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface SettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Settings'], meta: { name: 'Settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {SettingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingsFindUniqueArgs>(args: SelectSubset<T, SettingsFindUniqueArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SettingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingsFindFirstArgs>(args?: SelectSubset<T, SettingsFindFirstArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingsWithIdOnly = await prisma.settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingsFindManyArgs>(args?: SelectSubset<T, SettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Settings.
     * @param {SettingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends SettingsCreateArgs>(args: SelectSubset<T, SettingsCreateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Settings.
     * @param {SettingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingsCreateManyArgs>(args?: SelectSubset<T, SettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingsCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Settings.
     * @param {SettingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends SettingsDeleteArgs>(args: SelectSubset<T, SettingsDeleteArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Settings.
     * @param {SettingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingsUpdateArgs>(args: SelectSubset<T, SettingsUpdateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Settings.
     * @param {SettingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingsDeleteManyArgs>(args?: SelectSubset<T, SettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingsUpdateManyArgs>(args: SelectSubset<T, SettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Settings.
     * @param {SettingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends SettingsUpsertArgs>(args: SelectSubset<T, SettingsUpsertArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingsCountArgs>(
      args?: Subset<T, SettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingsGroupByArgs['orderBy'] }
        : { orderBy?: SettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Settings model
   */
  readonly fields: SettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Settings model
   */ 
  interface SettingsFieldRefs {
    readonly id: FieldRef<"Settings", 'String'>
    readonly aiApiKey: FieldRef<"Settings", 'String'>
    readonly aiBaseUrl: FieldRef<"Settings", 'String'>
    readonly aiModel: FieldRef<"Settings", 'String'>
    readonly newsApiKey: FieldRef<"Settings", 'String'>
    readonly preferredTopics: FieldRef<"Settings", 'String'>
    readonly preferredCategories: FieldRef<"Settings", 'String'>
    readonly dailyNewsCount: FieldRef<"Settings", 'Int'>
    readonly includePolitics: FieldRef<"Settings", 'Boolean'>
    readonly autoFlashcards: FieldRef<"Settings", 'Boolean'>
    readonly defaultLanguage: FieldRef<"Settings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Settings findUnique
   */
  export type SettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findUniqueOrThrow
   */
  export type SettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findFirst
   */
  export type SettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findFirstOrThrow
   */
  export type SettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findMany
   */
  export type SettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings create
   */
  export type SettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * The data needed to create a Settings.
     */
    data?: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
  }

  /**
   * Settings createMany
   */
  export type SettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
  }

  /**
   * Settings createManyAndReturn
   */
  export type SettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
  }

  /**
   * Settings update
   */
  export type SettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * The data needed to update a Settings.
     */
    data: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
    /**
     * Choose, which Settings to update.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings updateMany
   */
  export type SettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
  }

  /**
   * Settings upsert
   */
  export type SettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * The filter to search for the Settings to update in case it exists.
     */
    where: SettingsWhereUniqueInput
    /**
     * In case the Settings found by the `where` argument doesn't exist, create a new Settings with this data.
     */
    create: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
    /**
     * In case the Settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
  }

  /**
   * Settings delete
   */
  export type SettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Filter which Settings to delete.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings deleteMany
   */
  export type SettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingsWhereInput
  }

  /**
   * Settings without action
   */
  export type SettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
  }


  /**
   * Model ReadingItem
   */

  export type AggregateReadingItem = {
    _count: ReadingItemCountAggregateOutputType | null
    _min: ReadingItemMinAggregateOutputType | null
    _max: ReadingItemMaxAggregateOutputType | null
  }

  export type ReadingItemMinAggregateOutputType = {
    id: string | null
    title: string | null
    url: string | null
    category: string | null
    sourceType: string | null
    status: string | null
    note: string | null
    addedAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type ReadingItemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    url: string | null
    category: string | null
    sourceType: string | null
    status: string | null
    note: string | null
    addedAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type ReadingItemCountAggregateOutputType = {
    id: number
    title: number
    url: number
    category: number
    sourceType: number
    status: number
    note: number
    addedAt: number
    startedAt: number
    completedAt: number
    _all: number
  }


  export type ReadingItemMinAggregateInputType = {
    id?: true
    title?: true
    url?: true
    category?: true
    sourceType?: true
    status?: true
    note?: true
    addedAt?: true
    startedAt?: true
    completedAt?: true
  }

  export type ReadingItemMaxAggregateInputType = {
    id?: true
    title?: true
    url?: true
    category?: true
    sourceType?: true
    status?: true
    note?: true
    addedAt?: true
    startedAt?: true
    completedAt?: true
  }

  export type ReadingItemCountAggregateInputType = {
    id?: true
    title?: true
    url?: true
    category?: true
    sourceType?: true
    status?: true
    note?: true
    addedAt?: true
    startedAt?: true
    completedAt?: true
    _all?: true
  }

  export type ReadingItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReadingItem to aggregate.
     */
    where?: ReadingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReadingItems to fetch.
     */
    orderBy?: ReadingItemOrderByWithRelationInput | ReadingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReadingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReadingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReadingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReadingItems
    **/
    _count?: true | ReadingItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReadingItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReadingItemMaxAggregateInputType
  }

  export type GetReadingItemAggregateType<T extends ReadingItemAggregateArgs> = {
        [P in keyof T & keyof AggregateReadingItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReadingItem[P]>
      : GetScalarType<T[P], AggregateReadingItem[P]>
  }




  export type ReadingItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReadingItemWhereInput
    orderBy?: ReadingItemOrderByWithAggregationInput | ReadingItemOrderByWithAggregationInput[]
    by: ReadingItemScalarFieldEnum[] | ReadingItemScalarFieldEnum
    having?: ReadingItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReadingItemCountAggregateInputType | true
    _min?: ReadingItemMinAggregateInputType
    _max?: ReadingItemMaxAggregateInputType
  }

  export type ReadingItemGroupByOutputType = {
    id: string
    title: string
    url: string
    category: string
    sourceType: string
    status: string
    note: string
    addedAt: Date
    startedAt: Date | null
    completedAt: Date | null
    _count: ReadingItemCountAggregateOutputType | null
    _min: ReadingItemMinAggregateOutputType | null
    _max: ReadingItemMaxAggregateOutputType | null
  }

  type GetReadingItemGroupByPayload<T extends ReadingItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReadingItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReadingItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReadingItemGroupByOutputType[P]>
            : GetScalarType<T[P], ReadingItemGroupByOutputType[P]>
        }
      >
    >


  export type ReadingItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    category?: boolean
    sourceType?: boolean
    status?: boolean
    note?: boolean
    addedAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
  }, ExtArgs["result"]["readingItem"]>

  export type ReadingItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    category?: boolean
    sourceType?: boolean
    status?: boolean
    note?: boolean
    addedAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
  }, ExtArgs["result"]["readingItem"]>

  export type ReadingItemSelectScalar = {
    id?: boolean
    title?: boolean
    url?: boolean
    category?: boolean
    sourceType?: boolean
    status?: boolean
    note?: boolean
    addedAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
  }


  export type $ReadingItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReadingItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      url: string
      category: string
      sourceType: string
      status: string
      note: string
      addedAt: Date
      startedAt: Date | null
      completedAt: Date | null
    }, ExtArgs["result"]["readingItem"]>
    composites: {}
  }

  type ReadingItemGetPayload<S extends boolean | null | undefined | ReadingItemDefaultArgs> = $Result.GetResult<Prisma.$ReadingItemPayload, S>

  type ReadingItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReadingItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReadingItemCountAggregateInputType | true
    }

  export interface ReadingItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReadingItem'], meta: { name: 'ReadingItem' } }
    /**
     * Find zero or one ReadingItem that matches the filter.
     * @param {ReadingItemFindUniqueArgs} args - Arguments to find a ReadingItem
     * @example
     * // Get one ReadingItem
     * const readingItem = await prisma.readingItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReadingItemFindUniqueArgs>(args: SelectSubset<T, ReadingItemFindUniqueArgs<ExtArgs>>): Prisma__ReadingItemClient<$Result.GetResult<Prisma.$ReadingItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ReadingItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReadingItemFindUniqueOrThrowArgs} args - Arguments to find a ReadingItem
     * @example
     * // Get one ReadingItem
     * const readingItem = await prisma.readingItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReadingItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ReadingItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReadingItemClient<$Result.GetResult<Prisma.$ReadingItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ReadingItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingItemFindFirstArgs} args - Arguments to find a ReadingItem
     * @example
     * // Get one ReadingItem
     * const readingItem = await prisma.readingItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReadingItemFindFirstArgs>(args?: SelectSubset<T, ReadingItemFindFirstArgs<ExtArgs>>): Prisma__ReadingItemClient<$Result.GetResult<Prisma.$ReadingItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ReadingItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingItemFindFirstOrThrowArgs} args - Arguments to find a ReadingItem
     * @example
     * // Get one ReadingItem
     * const readingItem = await prisma.readingItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReadingItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ReadingItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReadingItemClient<$Result.GetResult<Prisma.$ReadingItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ReadingItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReadingItems
     * const readingItems = await prisma.readingItem.findMany()
     * 
     * // Get first 10 ReadingItems
     * const readingItems = await prisma.readingItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const readingItemWithIdOnly = await prisma.readingItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReadingItemFindManyArgs>(args?: SelectSubset<T, ReadingItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ReadingItem.
     * @param {ReadingItemCreateArgs} args - Arguments to create a ReadingItem.
     * @example
     * // Create one ReadingItem
     * const ReadingItem = await prisma.readingItem.create({
     *   data: {
     *     // ... data to create a ReadingItem
     *   }
     * })
     * 
     */
    create<T extends ReadingItemCreateArgs>(args: SelectSubset<T, ReadingItemCreateArgs<ExtArgs>>): Prisma__ReadingItemClient<$Result.GetResult<Prisma.$ReadingItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ReadingItems.
     * @param {ReadingItemCreateManyArgs} args - Arguments to create many ReadingItems.
     * @example
     * // Create many ReadingItems
     * const readingItem = await prisma.readingItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReadingItemCreateManyArgs>(args?: SelectSubset<T, ReadingItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReadingItems and returns the data saved in the database.
     * @param {ReadingItemCreateManyAndReturnArgs} args - Arguments to create many ReadingItems.
     * @example
     * // Create many ReadingItems
     * const readingItem = await prisma.readingItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReadingItems and only return the `id`
     * const readingItemWithIdOnly = await prisma.readingItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReadingItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ReadingItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ReadingItem.
     * @param {ReadingItemDeleteArgs} args - Arguments to delete one ReadingItem.
     * @example
     * // Delete one ReadingItem
     * const ReadingItem = await prisma.readingItem.delete({
     *   where: {
     *     // ... filter to delete one ReadingItem
     *   }
     * })
     * 
     */
    delete<T extends ReadingItemDeleteArgs>(args: SelectSubset<T, ReadingItemDeleteArgs<ExtArgs>>): Prisma__ReadingItemClient<$Result.GetResult<Prisma.$ReadingItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ReadingItem.
     * @param {ReadingItemUpdateArgs} args - Arguments to update one ReadingItem.
     * @example
     * // Update one ReadingItem
     * const readingItem = await prisma.readingItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReadingItemUpdateArgs>(args: SelectSubset<T, ReadingItemUpdateArgs<ExtArgs>>): Prisma__ReadingItemClient<$Result.GetResult<Prisma.$ReadingItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ReadingItems.
     * @param {ReadingItemDeleteManyArgs} args - Arguments to filter ReadingItems to delete.
     * @example
     * // Delete a few ReadingItems
     * const { count } = await prisma.readingItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReadingItemDeleteManyArgs>(args?: SelectSubset<T, ReadingItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReadingItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReadingItems
     * const readingItem = await prisma.readingItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReadingItemUpdateManyArgs>(args: SelectSubset<T, ReadingItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReadingItem.
     * @param {ReadingItemUpsertArgs} args - Arguments to update or create a ReadingItem.
     * @example
     * // Update or create a ReadingItem
     * const readingItem = await prisma.readingItem.upsert({
     *   create: {
     *     // ... data to create a ReadingItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReadingItem we want to update
     *   }
     * })
     */
    upsert<T extends ReadingItemUpsertArgs>(args: SelectSubset<T, ReadingItemUpsertArgs<ExtArgs>>): Prisma__ReadingItemClient<$Result.GetResult<Prisma.$ReadingItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ReadingItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingItemCountArgs} args - Arguments to filter ReadingItems to count.
     * @example
     * // Count the number of ReadingItems
     * const count = await prisma.readingItem.count({
     *   where: {
     *     // ... the filter for the ReadingItems we want to count
     *   }
     * })
    **/
    count<T extends ReadingItemCountArgs>(
      args?: Subset<T, ReadingItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReadingItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReadingItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReadingItemAggregateArgs>(args: Subset<T, ReadingItemAggregateArgs>): Prisma.PrismaPromise<GetReadingItemAggregateType<T>>

    /**
     * Group by ReadingItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReadingItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReadingItemGroupByArgs['orderBy'] }
        : { orderBy?: ReadingItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReadingItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReadingItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReadingItem model
   */
  readonly fields: ReadingItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReadingItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReadingItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReadingItem model
   */ 
  interface ReadingItemFieldRefs {
    readonly id: FieldRef<"ReadingItem", 'String'>
    readonly title: FieldRef<"ReadingItem", 'String'>
    readonly url: FieldRef<"ReadingItem", 'String'>
    readonly category: FieldRef<"ReadingItem", 'String'>
    readonly sourceType: FieldRef<"ReadingItem", 'String'>
    readonly status: FieldRef<"ReadingItem", 'String'>
    readonly note: FieldRef<"ReadingItem", 'String'>
    readonly addedAt: FieldRef<"ReadingItem", 'DateTime'>
    readonly startedAt: FieldRef<"ReadingItem", 'DateTime'>
    readonly completedAt: FieldRef<"ReadingItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReadingItem findUnique
   */
  export type ReadingItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingItem
     */
    select?: ReadingItemSelect<ExtArgs> | null
    /**
     * Filter, which ReadingItem to fetch.
     */
    where: ReadingItemWhereUniqueInput
  }

  /**
   * ReadingItem findUniqueOrThrow
   */
  export type ReadingItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingItem
     */
    select?: ReadingItemSelect<ExtArgs> | null
    /**
     * Filter, which ReadingItem to fetch.
     */
    where: ReadingItemWhereUniqueInput
  }

  /**
   * ReadingItem findFirst
   */
  export type ReadingItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingItem
     */
    select?: ReadingItemSelect<ExtArgs> | null
    /**
     * Filter, which ReadingItem to fetch.
     */
    where?: ReadingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReadingItems to fetch.
     */
    orderBy?: ReadingItemOrderByWithRelationInput | ReadingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReadingItems.
     */
    cursor?: ReadingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReadingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReadingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReadingItems.
     */
    distinct?: ReadingItemScalarFieldEnum | ReadingItemScalarFieldEnum[]
  }

  /**
   * ReadingItem findFirstOrThrow
   */
  export type ReadingItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingItem
     */
    select?: ReadingItemSelect<ExtArgs> | null
    /**
     * Filter, which ReadingItem to fetch.
     */
    where?: ReadingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReadingItems to fetch.
     */
    orderBy?: ReadingItemOrderByWithRelationInput | ReadingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReadingItems.
     */
    cursor?: ReadingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReadingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReadingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReadingItems.
     */
    distinct?: ReadingItemScalarFieldEnum | ReadingItemScalarFieldEnum[]
  }

  /**
   * ReadingItem findMany
   */
  export type ReadingItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingItem
     */
    select?: ReadingItemSelect<ExtArgs> | null
    /**
     * Filter, which ReadingItems to fetch.
     */
    where?: ReadingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReadingItems to fetch.
     */
    orderBy?: ReadingItemOrderByWithRelationInput | ReadingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReadingItems.
     */
    cursor?: ReadingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReadingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReadingItems.
     */
    skip?: number
    distinct?: ReadingItemScalarFieldEnum | ReadingItemScalarFieldEnum[]
  }

  /**
   * ReadingItem create
   */
  export type ReadingItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingItem
     */
    select?: ReadingItemSelect<ExtArgs> | null
    /**
     * The data needed to create a ReadingItem.
     */
    data: XOR<ReadingItemCreateInput, ReadingItemUncheckedCreateInput>
  }

  /**
   * ReadingItem createMany
   */
  export type ReadingItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReadingItems.
     */
    data: ReadingItemCreateManyInput | ReadingItemCreateManyInput[]
  }

  /**
   * ReadingItem createManyAndReturn
   */
  export type ReadingItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingItem
     */
    select?: ReadingItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ReadingItems.
     */
    data: ReadingItemCreateManyInput | ReadingItemCreateManyInput[]
  }

  /**
   * ReadingItem update
   */
  export type ReadingItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingItem
     */
    select?: ReadingItemSelect<ExtArgs> | null
    /**
     * The data needed to update a ReadingItem.
     */
    data: XOR<ReadingItemUpdateInput, ReadingItemUncheckedUpdateInput>
    /**
     * Choose, which ReadingItem to update.
     */
    where: ReadingItemWhereUniqueInput
  }

  /**
   * ReadingItem updateMany
   */
  export type ReadingItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReadingItems.
     */
    data: XOR<ReadingItemUpdateManyMutationInput, ReadingItemUncheckedUpdateManyInput>
    /**
     * Filter which ReadingItems to update
     */
    where?: ReadingItemWhereInput
  }

  /**
   * ReadingItem upsert
   */
  export type ReadingItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingItem
     */
    select?: ReadingItemSelect<ExtArgs> | null
    /**
     * The filter to search for the ReadingItem to update in case it exists.
     */
    where: ReadingItemWhereUniqueInput
    /**
     * In case the ReadingItem found by the `where` argument doesn't exist, create a new ReadingItem with this data.
     */
    create: XOR<ReadingItemCreateInput, ReadingItemUncheckedCreateInput>
    /**
     * In case the ReadingItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReadingItemUpdateInput, ReadingItemUncheckedUpdateInput>
  }

  /**
   * ReadingItem delete
   */
  export type ReadingItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingItem
     */
    select?: ReadingItemSelect<ExtArgs> | null
    /**
     * Filter which ReadingItem to delete.
     */
    where: ReadingItemWhereUniqueInput
  }

  /**
   * ReadingItem deleteMany
   */
  export type ReadingItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReadingItems to delete
     */
    where?: ReadingItemWhereInput
  }

  /**
   * ReadingItem without action
   */
  export type ReadingItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingItem
     */
    select?: ReadingItemSelect<ExtArgs> | null
  }


  /**
   * Model ActionItem
   */

  export type AggregateActionItem = {
    _count: ActionItemCountAggregateOutputType | null
    _min: ActionItemMinAggregateOutputType | null
    _max: ActionItemMaxAggregateOutputType | null
  }

  export type ActionItemMinAggregateOutputType = {
    id: string | null
    title: string | null
    relatedKnowledgeItemId: string | null
    category: string | null
    deadline: Date | null
    status: string | null
    resultNote: string | null
    lessonLearned: string | null
    createdAt: Date | null
    completedAt: Date | null
  }

  export type ActionItemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    relatedKnowledgeItemId: string | null
    category: string | null
    deadline: Date | null
    status: string | null
    resultNote: string | null
    lessonLearned: string | null
    createdAt: Date | null
    completedAt: Date | null
  }

  export type ActionItemCountAggregateOutputType = {
    id: number
    title: number
    relatedKnowledgeItemId: number
    category: number
    deadline: number
    status: number
    resultNote: number
    lessonLearned: number
    createdAt: number
    completedAt: number
    _all: number
  }


  export type ActionItemMinAggregateInputType = {
    id?: true
    title?: true
    relatedKnowledgeItemId?: true
    category?: true
    deadline?: true
    status?: true
    resultNote?: true
    lessonLearned?: true
    createdAt?: true
    completedAt?: true
  }

  export type ActionItemMaxAggregateInputType = {
    id?: true
    title?: true
    relatedKnowledgeItemId?: true
    category?: true
    deadline?: true
    status?: true
    resultNote?: true
    lessonLearned?: true
    createdAt?: true
    completedAt?: true
  }

  export type ActionItemCountAggregateInputType = {
    id?: true
    title?: true
    relatedKnowledgeItemId?: true
    category?: true
    deadline?: true
    status?: true
    resultNote?: true
    lessonLearned?: true
    createdAt?: true
    completedAt?: true
    _all?: true
  }

  export type ActionItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActionItem to aggregate.
     */
    where?: ActionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionItems to fetch.
     */
    orderBy?: ActionItemOrderByWithRelationInput | ActionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActionItems
    **/
    _count?: true | ActionItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionItemMaxAggregateInputType
  }

  export type GetActionItemAggregateType<T extends ActionItemAggregateArgs> = {
        [P in keyof T & keyof AggregateActionItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActionItem[P]>
      : GetScalarType<T[P], AggregateActionItem[P]>
  }




  export type ActionItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionItemWhereInput
    orderBy?: ActionItemOrderByWithAggregationInput | ActionItemOrderByWithAggregationInput[]
    by: ActionItemScalarFieldEnum[] | ActionItemScalarFieldEnum
    having?: ActionItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionItemCountAggregateInputType | true
    _min?: ActionItemMinAggregateInputType
    _max?: ActionItemMaxAggregateInputType
  }

  export type ActionItemGroupByOutputType = {
    id: string
    title: string
    relatedKnowledgeItemId: string
    category: string
    deadline: Date | null
    status: string
    resultNote: string
    lessonLearned: string
    createdAt: Date
    completedAt: Date | null
    _count: ActionItemCountAggregateOutputType | null
    _min: ActionItemMinAggregateOutputType | null
    _max: ActionItemMaxAggregateOutputType | null
  }

  type GetActionItemGroupByPayload<T extends ActionItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionItemGroupByOutputType[P]>
            : GetScalarType<T[P], ActionItemGroupByOutputType[P]>
        }
      >
    >


  export type ActionItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    relatedKnowledgeItemId?: boolean
    category?: boolean
    deadline?: boolean
    status?: boolean
    resultNote?: boolean
    lessonLearned?: boolean
    createdAt?: boolean
    completedAt?: boolean
  }, ExtArgs["result"]["actionItem"]>

  export type ActionItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    relatedKnowledgeItemId?: boolean
    category?: boolean
    deadline?: boolean
    status?: boolean
    resultNote?: boolean
    lessonLearned?: boolean
    createdAt?: boolean
    completedAt?: boolean
  }, ExtArgs["result"]["actionItem"]>

  export type ActionItemSelectScalar = {
    id?: boolean
    title?: boolean
    relatedKnowledgeItemId?: boolean
    category?: boolean
    deadline?: boolean
    status?: boolean
    resultNote?: boolean
    lessonLearned?: boolean
    createdAt?: boolean
    completedAt?: boolean
  }


  export type $ActionItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActionItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      relatedKnowledgeItemId: string
      category: string
      deadline: Date | null
      status: string
      resultNote: string
      lessonLearned: string
      createdAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["actionItem"]>
    composites: {}
  }

  type ActionItemGetPayload<S extends boolean | null | undefined | ActionItemDefaultArgs> = $Result.GetResult<Prisma.$ActionItemPayload, S>

  type ActionItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActionItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ActionItemCountAggregateInputType | true
    }

  export interface ActionItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActionItem'], meta: { name: 'ActionItem' } }
    /**
     * Find zero or one ActionItem that matches the filter.
     * @param {ActionItemFindUniqueArgs} args - Arguments to find a ActionItem
     * @example
     * // Get one ActionItem
     * const actionItem = await prisma.actionItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionItemFindUniqueArgs>(args: SelectSubset<T, ActionItemFindUniqueArgs<ExtArgs>>): Prisma__ActionItemClient<$Result.GetResult<Prisma.$ActionItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ActionItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ActionItemFindUniqueOrThrowArgs} args - Arguments to find a ActionItem
     * @example
     * // Get one ActionItem
     * const actionItem = await prisma.actionItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionItemClient<$Result.GetResult<Prisma.$ActionItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ActionItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionItemFindFirstArgs} args - Arguments to find a ActionItem
     * @example
     * // Get one ActionItem
     * const actionItem = await prisma.actionItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionItemFindFirstArgs>(args?: SelectSubset<T, ActionItemFindFirstArgs<ExtArgs>>): Prisma__ActionItemClient<$Result.GetResult<Prisma.$ActionItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ActionItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionItemFindFirstOrThrowArgs} args - Arguments to find a ActionItem
     * @example
     * // Get one ActionItem
     * const actionItem = await prisma.actionItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionItemClient<$Result.GetResult<Prisma.$ActionItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ActionItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActionItems
     * const actionItems = await prisma.actionItem.findMany()
     * 
     * // Get first 10 ActionItems
     * const actionItems = await prisma.actionItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actionItemWithIdOnly = await prisma.actionItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActionItemFindManyArgs>(args?: SelectSubset<T, ActionItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ActionItem.
     * @param {ActionItemCreateArgs} args - Arguments to create a ActionItem.
     * @example
     * // Create one ActionItem
     * const ActionItem = await prisma.actionItem.create({
     *   data: {
     *     // ... data to create a ActionItem
     *   }
     * })
     * 
     */
    create<T extends ActionItemCreateArgs>(args: SelectSubset<T, ActionItemCreateArgs<ExtArgs>>): Prisma__ActionItemClient<$Result.GetResult<Prisma.$ActionItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ActionItems.
     * @param {ActionItemCreateManyArgs} args - Arguments to create many ActionItems.
     * @example
     * // Create many ActionItems
     * const actionItem = await prisma.actionItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActionItemCreateManyArgs>(args?: SelectSubset<T, ActionItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActionItems and returns the data saved in the database.
     * @param {ActionItemCreateManyAndReturnArgs} args - Arguments to create many ActionItems.
     * @example
     * // Create many ActionItems
     * const actionItem = await prisma.actionItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActionItems and only return the `id`
     * const actionItemWithIdOnly = await prisma.actionItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActionItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ActionItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ActionItem.
     * @param {ActionItemDeleteArgs} args - Arguments to delete one ActionItem.
     * @example
     * // Delete one ActionItem
     * const ActionItem = await prisma.actionItem.delete({
     *   where: {
     *     // ... filter to delete one ActionItem
     *   }
     * })
     * 
     */
    delete<T extends ActionItemDeleteArgs>(args: SelectSubset<T, ActionItemDeleteArgs<ExtArgs>>): Prisma__ActionItemClient<$Result.GetResult<Prisma.$ActionItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ActionItem.
     * @param {ActionItemUpdateArgs} args - Arguments to update one ActionItem.
     * @example
     * // Update one ActionItem
     * const actionItem = await prisma.actionItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActionItemUpdateArgs>(args: SelectSubset<T, ActionItemUpdateArgs<ExtArgs>>): Prisma__ActionItemClient<$Result.GetResult<Prisma.$ActionItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ActionItems.
     * @param {ActionItemDeleteManyArgs} args - Arguments to filter ActionItems to delete.
     * @example
     * // Delete a few ActionItems
     * const { count } = await prisma.actionItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActionItemDeleteManyArgs>(args?: SelectSubset<T, ActionItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActionItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActionItems
     * const actionItem = await prisma.actionItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActionItemUpdateManyArgs>(args: SelectSubset<T, ActionItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ActionItem.
     * @param {ActionItemUpsertArgs} args - Arguments to update or create a ActionItem.
     * @example
     * // Update or create a ActionItem
     * const actionItem = await prisma.actionItem.upsert({
     *   create: {
     *     // ... data to create a ActionItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActionItem we want to update
     *   }
     * })
     */
    upsert<T extends ActionItemUpsertArgs>(args: SelectSubset<T, ActionItemUpsertArgs<ExtArgs>>): Prisma__ActionItemClient<$Result.GetResult<Prisma.$ActionItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ActionItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionItemCountArgs} args - Arguments to filter ActionItems to count.
     * @example
     * // Count the number of ActionItems
     * const count = await prisma.actionItem.count({
     *   where: {
     *     // ... the filter for the ActionItems we want to count
     *   }
     * })
    **/
    count<T extends ActionItemCountArgs>(
      args?: Subset<T, ActionItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActionItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActionItemAggregateArgs>(args: Subset<T, ActionItemAggregateArgs>): Prisma.PrismaPromise<GetActionItemAggregateType<T>>

    /**
     * Group by ActionItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActionItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionItemGroupByArgs['orderBy'] }
        : { orderBy?: ActionItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActionItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActionItem model
   */
  readonly fields: ActionItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActionItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActionItem model
   */ 
  interface ActionItemFieldRefs {
    readonly id: FieldRef<"ActionItem", 'String'>
    readonly title: FieldRef<"ActionItem", 'String'>
    readonly relatedKnowledgeItemId: FieldRef<"ActionItem", 'String'>
    readonly category: FieldRef<"ActionItem", 'String'>
    readonly deadline: FieldRef<"ActionItem", 'DateTime'>
    readonly status: FieldRef<"ActionItem", 'String'>
    readonly resultNote: FieldRef<"ActionItem", 'String'>
    readonly lessonLearned: FieldRef<"ActionItem", 'String'>
    readonly createdAt: FieldRef<"ActionItem", 'DateTime'>
    readonly completedAt: FieldRef<"ActionItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActionItem findUnique
   */
  export type ActionItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionItem
     */
    select?: ActionItemSelect<ExtArgs> | null
    /**
     * Filter, which ActionItem to fetch.
     */
    where: ActionItemWhereUniqueInput
  }

  /**
   * ActionItem findUniqueOrThrow
   */
  export type ActionItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionItem
     */
    select?: ActionItemSelect<ExtArgs> | null
    /**
     * Filter, which ActionItem to fetch.
     */
    where: ActionItemWhereUniqueInput
  }

  /**
   * ActionItem findFirst
   */
  export type ActionItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionItem
     */
    select?: ActionItemSelect<ExtArgs> | null
    /**
     * Filter, which ActionItem to fetch.
     */
    where?: ActionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionItems to fetch.
     */
    orderBy?: ActionItemOrderByWithRelationInput | ActionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionItems.
     */
    cursor?: ActionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionItems.
     */
    distinct?: ActionItemScalarFieldEnum | ActionItemScalarFieldEnum[]
  }

  /**
   * ActionItem findFirstOrThrow
   */
  export type ActionItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionItem
     */
    select?: ActionItemSelect<ExtArgs> | null
    /**
     * Filter, which ActionItem to fetch.
     */
    where?: ActionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionItems to fetch.
     */
    orderBy?: ActionItemOrderByWithRelationInput | ActionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionItems.
     */
    cursor?: ActionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionItems.
     */
    distinct?: ActionItemScalarFieldEnum | ActionItemScalarFieldEnum[]
  }

  /**
   * ActionItem findMany
   */
  export type ActionItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionItem
     */
    select?: ActionItemSelect<ExtArgs> | null
    /**
     * Filter, which ActionItems to fetch.
     */
    where?: ActionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionItems to fetch.
     */
    orderBy?: ActionItemOrderByWithRelationInput | ActionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActionItems.
     */
    cursor?: ActionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionItems.
     */
    skip?: number
    distinct?: ActionItemScalarFieldEnum | ActionItemScalarFieldEnum[]
  }

  /**
   * ActionItem create
   */
  export type ActionItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionItem
     */
    select?: ActionItemSelect<ExtArgs> | null
    /**
     * The data needed to create a ActionItem.
     */
    data: XOR<ActionItemCreateInput, ActionItemUncheckedCreateInput>
  }

  /**
   * ActionItem createMany
   */
  export type ActionItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActionItems.
     */
    data: ActionItemCreateManyInput | ActionItemCreateManyInput[]
  }

  /**
   * ActionItem createManyAndReturn
   */
  export type ActionItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionItem
     */
    select?: ActionItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ActionItems.
     */
    data: ActionItemCreateManyInput | ActionItemCreateManyInput[]
  }

  /**
   * ActionItem update
   */
  export type ActionItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionItem
     */
    select?: ActionItemSelect<ExtArgs> | null
    /**
     * The data needed to update a ActionItem.
     */
    data: XOR<ActionItemUpdateInput, ActionItemUncheckedUpdateInput>
    /**
     * Choose, which ActionItem to update.
     */
    where: ActionItemWhereUniqueInput
  }

  /**
   * ActionItem updateMany
   */
  export type ActionItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActionItems.
     */
    data: XOR<ActionItemUpdateManyMutationInput, ActionItemUncheckedUpdateManyInput>
    /**
     * Filter which ActionItems to update
     */
    where?: ActionItemWhereInput
  }

  /**
   * ActionItem upsert
   */
  export type ActionItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionItem
     */
    select?: ActionItemSelect<ExtArgs> | null
    /**
     * The filter to search for the ActionItem to update in case it exists.
     */
    where: ActionItemWhereUniqueInput
    /**
     * In case the ActionItem found by the `where` argument doesn't exist, create a new ActionItem with this data.
     */
    create: XOR<ActionItemCreateInput, ActionItemUncheckedCreateInput>
    /**
     * In case the ActionItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionItemUpdateInput, ActionItemUncheckedUpdateInput>
  }

  /**
   * ActionItem delete
   */
  export type ActionItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionItem
     */
    select?: ActionItemSelect<ExtArgs> | null
    /**
     * Filter which ActionItem to delete.
     */
    where: ActionItemWhereUniqueInput
  }

  /**
   * ActionItem deleteMany
   */
  export type ActionItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActionItems to delete
     */
    where?: ActionItemWhereInput
  }

  /**
   * ActionItem without action
   */
  export type ActionItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionItem
     */
    select?: ActionItemSelect<ExtArgs> | null
  }


  /**
   * Model DailyReview
   */

  export type AggregateDailyReview = {
    _count: DailyReviewCountAggregateOutputType | null
    _min: DailyReviewMinAggregateOutputType | null
    _max: DailyReviewMaxAggregateOutputType | null
  }

  export type DailyReviewMinAggregateOutputType = {
    id: string | null
    date: Date | null
    learnedToday: string | null
    mostImportantIdea: string | null
    actionsApplied: string | null
    unclearThings: string | null
    nextLearningSuggestion: string | null
    createdAt: Date | null
  }

  export type DailyReviewMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    learnedToday: string | null
    mostImportantIdea: string | null
    actionsApplied: string | null
    unclearThings: string | null
    nextLearningSuggestion: string | null
    createdAt: Date | null
  }

  export type DailyReviewCountAggregateOutputType = {
    id: number
    date: number
    learnedToday: number
    mostImportantIdea: number
    actionsApplied: number
    unclearThings: number
    nextLearningSuggestion: number
    createdAt: number
    _all: number
  }


  export type DailyReviewMinAggregateInputType = {
    id?: true
    date?: true
    learnedToday?: true
    mostImportantIdea?: true
    actionsApplied?: true
    unclearThings?: true
    nextLearningSuggestion?: true
    createdAt?: true
  }

  export type DailyReviewMaxAggregateInputType = {
    id?: true
    date?: true
    learnedToday?: true
    mostImportantIdea?: true
    actionsApplied?: true
    unclearThings?: true
    nextLearningSuggestion?: true
    createdAt?: true
  }

  export type DailyReviewCountAggregateInputType = {
    id?: true
    date?: true
    learnedToday?: true
    mostImportantIdea?: true
    actionsApplied?: true
    unclearThings?: true
    nextLearningSuggestion?: true
    createdAt?: true
    _all?: true
  }

  export type DailyReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyReview to aggregate.
     */
    where?: DailyReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReviews to fetch.
     */
    orderBy?: DailyReviewOrderByWithRelationInput | DailyReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyReviews
    **/
    _count?: true | DailyReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyReviewMaxAggregateInputType
  }

  export type GetDailyReviewAggregateType<T extends DailyReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyReview[P]>
      : GetScalarType<T[P], AggregateDailyReview[P]>
  }




  export type DailyReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyReviewWhereInput
    orderBy?: DailyReviewOrderByWithAggregationInput | DailyReviewOrderByWithAggregationInput[]
    by: DailyReviewScalarFieldEnum[] | DailyReviewScalarFieldEnum
    having?: DailyReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyReviewCountAggregateInputType | true
    _min?: DailyReviewMinAggregateInputType
    _max?: DailyReviewMaxAggregateInputType
  }

  export type DailyReviewGroupByOutputType = {
    id: string
    date: Date
    learnedToday: string
    mostImportantIdea: string
    actionsApplied: string
    unclearThings: string
    nextLearningSuggestion: string
    createdAt: Date
    _count: DailyReviewCountAggregateOutputType | null
    _min: DailyReviewMinAggregateOutputType | null
    _max: DailyReviewMaxAggregateOutputType | null
  }

  type GetDailyReviewGroupByPayload<T extends DailyReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyReviewGroupByOutputType[P]>
            : GetScalarType<T[P], DailyReviewGroupByOutputType[P]>
        }
      >
    >


  export type DailyReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    learnedToday?: boolean
    mostImportantIdea?: boolean
    actionsApplied?: boolean
    unclearThings?: boolean
    nextLearningSuggestion?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dailyReview"]>

  export type DailyReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    learnedToday?: boolean
    mostImportantIdea?: boolean
    actionsApplied?: boolean
    unclearThings?: boolean
    nextLearningSuggestion?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dailyReview"]>

  export type DailyReviewSelectScalar = {
    id?: boolean
    date?: boolean
    learnedToday?: boolean
    mostImportantIdea?: boolean
    actionsApplied?: boolean
    unclearThings?: boolean
    nextLearningSuggestion?: boolean
    createdAt?: boolean
  }


  export type $DailyReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyReview"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      learnedToday: string
      mostImportantIdea: string
      actionsApplied: string
      unclearThings: string
      nextLearningSuggestion: string
      createdAt: Date
    }, ExtArgs["result"]["dailyReview"]>
    composites: {}
  }

  type DailyReviewGetPayload<S extends boolean | null | undefined | DailyReviewDefaultArgs> = $Result.GetResult<Prisma.$DailyReviewPayload, S>

  type DailyReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DailyReviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DailyReviewCountAggregateInputType | true
    }

  export interface DailyReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyReview'], meta: { name: 'DailyReview' } }
    /**
     * Find zero or one DailyReview that matches the filter.
     * @param {DailyReviewFindUniqueArgs} args - Arguments to find a DailyReview
     * @example
     * // Get one DailyReview
     * const dailyReview = await prisma.dailyReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyReviewFindUniqueArgs>(args: SelectSubset<T, DailyReviewFindUniqueArgs<ExtArgs>>): Prisma__DailyReviewClient<$Result.GetResult<Prisma.$DailyReviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DailyReview that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DailyReviewFindUniqueOrThrowArgs} args - Arguments to find a DailyReview
     * @example
     * // Get one DailyReview
     * const dailyReview = await prisma.dailyReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyReviewClient<$Result.GetResult<Prisma.$DailyReviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DailyReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReviewFindFirstArgs} args - Arguments to find a DailyReview
     * @example
     * // Get one DailyReview
     * const dailyReview = await prisma.dailyReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyReviewFindFirstArgs>(args?: SelectSubset<T, DailyReviewFindFirstArgs<ExtArgs>>): Prisma__DailyReviewClient<$Result.GetResult<Prisma.$DailyReviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DailyReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReviewFindFirstOrThrowArgs} args - Arguments to find a DailyReview
     * @example
     * // Get one DailyReview
     * const dailyReview = await prisma.dailyReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyReviewClient<$Result.GetResult<Prisma.$DailyReviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DailyReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyReviews
     * const dailyReviews = await prisma.dailyReview.findMany()
     * 
     * // Get first 10 DailyReviews
     * const dailyReviews = await prisma.dailyReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyReviewWithIdOnly = await prisma.dailyReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyReviewFindManyArgs>(args?: SelectSubset<T, DailyReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DailyReview.
     * @param {DailyReviewCreateArgs} args - Arguments to create a DailyReview.
     * @example
     * // Create one DailyReview
     * const DailyReview = await prisma.dailyReview.create({
     *   data: {
     *     // ... data to create a DailyReview
     *   }
     * })
     * 
     */
    create<T extends DailyReviewCreateArgs>(args: SelectSubset<T, DailyReviewCreateArgs<ExtArgs>>): Prisma__DailyReviewClient<$Result.GetResult<Prisma.$DailyReviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DailyReviews.
     * @param {DailyReviewCreateManyArgs} args - Arguments to create many DailyReviews.
     * @example
     * // Create many DailyReviews
     * const dailyReview = await prisma.dailyReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyReviewCreateManyArgs>(args?: SelectSubset<T, DailyReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyReviews and returns the data saved in the database.
     * @param {DailyReviewCreateManyAndReturnArgs} args - Arguments to create many DailyReviews.
     * @example
     * // Create many DailyReviews
     * const dailyReview = await prisma.dailyReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyReviews and only return the `id`
     * const dailyReviewWithIdOnly = await prisma.dailyReview.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReviewPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DailyReview.
     * @param {DailyReviewDeleteArgs} args - Arguments to delete one DailyReview.
     * @example
     * // Delete one DailyReview
     * const DailyReview = await prisma.dailyReview.delete({
     *   where: {
     *     // ... filter to delete one DailyReview
     *   }
     * })
     * 
     */
    delete<T extends DailyReviewDeleteArgs>(args: SelectSubset<T, DailyReviewDeleteArgs<ExtArgs>>): Prisma__DailyReviewClient<$Result.GetResult<Prisma.$DailyReviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DailyReview.
     * @param {DailyReviewUpdateArgs} args - Arguments to update one DailyReview.
     * @example
     * // Update one DailyReview
     * const dailyReview = await prisma.dailyReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyReviewUpdateArgs>(args: SelectSubset<T, DailyReviewUpdateArgs<ExtArgs>>): Prisma__DailyReviewClient<$Result.GetResult<Prisma.$DailyReviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DailyReviews.
     * @param {DailyReviewDeleteManyArgs} args - Arguments to filter DailyReviews to delete.
     * @example
     * // Delete a few DailyReviews
     * const { count } = await prisma.dailyReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyReviewDeleteManyArgs>(args?: SelectSubset<T, DailyReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyReviews
     * const dailyReview = await prisma.dailyReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyReviewUpdateManyArgs>(args: SelectSubset<T, DailyReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailyReview.
     * @param {DailyReviewUpsertArgs} args - Arguments to update or create a DailyReview.
     * @example
     * // Update or create a DailyReview
     * const dailyReview = await prisma.dailyReview.upsert({
     *   create: {
     *     // ... data to create a DailyReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyReview we want to update
     *   }
     * })
     */
    upsert<T extends DailyReviewUpsertArgs>(args: SelectSubset<T, DailyReviewUpsertArgs<ExtArgs>>): Prisma__DailyReviewClient<$Result.GetResult<Prisma.$DailyReviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DailyReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReviewCountArgs} args - Arguments to filter DailyReviews to count.
     * @example
     * // Count the number of DailyReviews
     * const count = await prisma.dailyReview.count({
     *   where: {
     *     // ... the filter for the DailyReviews we want to count
     *   }
     * })
    **/
    count<T extends DailyReviewCountArgs>(
      args?: Subset<T, DailyReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyReviewAggregateArgs>(args: Subset<T, DailyReviewAggregateArgs>): Prisma.PrismaPromise<GetDailyReviewAggregateType<T>>

    /**
     * Group by DailyReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyReviewGroupByArgs['orderBy'] }
        : { orderBy?: DailyReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyReview model
   */
  readonly fields: DailyReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyReview model
   */ 
  interface DailyReviewFieldRefs {
    readonly id: FieldRef<"DailyReview", 'String'>
    readonly date: FieldRef<"DailyReview", 'DateTime'>
    readonly learnedToday: FieldRef<"DailyReview", 'String'>
    readonly mostImportantIdea: FieldRef<"DailyReview", 'String'>
    readonly actionsApplied: FieldRef<"DailyReview", 'String'>
    readonly unclearThings: FieldRef<"DailyReview", 'String'>
    readonly nextLearningSuggestion: FieldRef<"DailyReview", 'String'>
    readonly createdAt: FieldRef<"DailyReview", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyReview findUnique
   */
  export type DailyReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReview
     */
    select?: DailyReviewSelect<ExtArgs> | null
    /**
     * Filter, which DailyReview to fetch.
     */
    where: DailyReviewWhereUniqueInput
  }

  /**
   * DailyReview findUniqueOrThrow
   */
  export type DailyReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReview
     */
    select?: DailyReviewSelect<ExtArgs> | null
    /**
     * Filter, which DailyReview to fetch.
     */
    where: DailyReviewWhereUniqueInput
  }

  /**
   * DailyReview findFirst
   */
  export type DailyReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReview
     */
    select?: DailyReviewSelect<ExtArgs> | null
    /**
     * Filter, which DailyReview to fetch.
     */
    where?: DailyReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReviews to fetch.
     */
    orderBy?: DailyReviewOrderByWithRelationInput | DailyReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyReviews.
     */
    cursor?: DailyReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyReviews.
     */
    distinct?: DailyReviewScalarFieldEnum | DailyReviewScalarFieldEnum[]
  }

  /**
   * DailyReview findFirstOrThrow
   */
  export type DailyReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReview
     */
    select?: DailyReviewSelect<ExtArgs> | null
    /**
     * Filter, which DailyReview to fetch.
     */
    where?: DailyReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReviews to fetch.
     */
    orderBy?: DailyReviewOrderByWithRelationInput | DailyReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyReviews.
     */
    cursor?: DailyReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyReviews.
     */
    distinct?: DailyReviewScalarFieldEnum | DailyReviewScalarFieldEnum[]
  }

  /**
   * DailyReview findMany
   */
  export type DailyReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReview
     */
    select?: DailyReviewSelect<ExtArgs> | null
    /**
     * Filter, which DailyReviews to fetch.
     */
    where?: DailyReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReviews to fetch.
     */
    orderBy?: DailyReviewOrderByWithRelationInput | DailyReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyReviews.
     */
    cursor?: DailyReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReviews.
     */
    skip?: number
    distinct?: DailyReviewScalarFieldEnum | DailyReviewScalarFieldEnum[]
  }

  /**
   * DailyReview create
   */
  export type DailyReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReview
     */
    select?: DailyReviewSelect<ExtArgs> | null
    /**
     * The data needed to create a DailyReview.
     */
    data: XOR<DailyReviewCreateInput, DailyReviewUncheckedCreateInput>
  }

  /**
   * DailyReview createMany
   */
  export type DailyReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyReviews.
     */
    data: DailyReviewCreateManyInput | DailyReviewCreateManyInput[]
  }

  /**
   * DailyReview createManyAndReturn
   */
  export type DailyReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReview
     */
    select?: DailyReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DailyReviews.
     */
    data: DailyReviewCreateManyInput | DailyReviewCreateManyInput[]
  }

  /**
   * DailyReview update
   */
  export type DailyReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReview
     */
    select?: DailyReviewSelect<ExtArgs> | null
    /**
     * The data needed to update a DailyReview.
     */
    data: XOR<DailyReviewUpdateInput, DailyReviewUncheckedUpdateInput>
    /**
     * Choose, which DailyReview to update.
     */
    where: DailyReviewWhereUniqueInput
  }

  /**
   * DailyReview updateMany
   */
  export type DailyReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyReviews.
     */
    data: XOR<DailyReviewUpdateManyMutationInput, DailyReviewUncheckedUpdateManyInput>
    /**
     * Filter which DailyReviews to update
     */
    where?: DailyReviewWhereInput
  }

  /**
   * DailyReview upsert
   */
  export type DailyReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReview
     */
    select?: DailyReviewSelect<ExtArgs> | null
    /**
     * The filter to search for the DailyReview to update in case it exists.
     */
    where: DailyReviewWhereUniqueInput
    /**
     * In case the DailyReview found by the `where` argument doesn't exist, create a new DailyReview with this data.
     */
    create: XOR<DailyReviewCreateInput, DailyReviewUncheckedCreateInput>
    /**
     * In case the DailyReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyReviewUpdateInput, DailyReviewUncheckedUpdateInput>
  }

  /**
   * DailyReview delete
   */
  export type DailyReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReview
     */
    select?: DailyReviewSelect<ExtArgs> | null
    /**
     * Filter which DailyReview to delete.
     */
    where: DailyReviewWhereUniqueInput
  }

  /**
   * DailyReview deleteMany
   */
  export type DailyReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyReviews to delete
     */
    where?: DailyReviewWhereInput
  }

  /**
   * DailyReview without action
   */
  export type DailyReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReview
     */
    select?: DailyReviewSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const NewsItemScalarFieldEnum: {
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

  export type NewsItemScalarFieldEnum = (typeof NewsItemScalarFieldEnum)[keyof typeof NewsItemScalarFieldEnum]


  export const KnowledgeItemScalarFieldEnum: {
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

  export type KnowledgeItemScalarFieldEnum = (typeof KnowledgeItemScalarFieldEnum)[keyof typeof KnowledgeItemScalarFieldEnum]


  export const ReviewItemScalarFieldEnum: {
    id: 'id',
    knowledgeItemId: 'knowledgeItemId',
    dueDate: 'dueDate',
    status: 'status',
    difficulty: 'difficulty',
    completedAt: 'completedAt'
  };

  export type ReviewItemScalarFieldEnum = (typeof ReviewItemScalarFieldEnum)[keyof typeof ReviewItemScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
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

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const ReadingItemScalarFieldEnum: {
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

  export type ReadingItemScalarFieldEnum = (typeof ReadingItemScalarFieldEnum)[keyof typeof ReadingItemScalarFieldEnum]


  export const ActionItemScalarFieldEnum: {
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

  export type ActionItemScalarFieldEnum = (typeof ActionItemScalarFieldEnum)[keyof typeof ActionItemScalarFieldEnum]


  export const DailyReviewScalarFieldEnum: {
    id: 'id',
    date: 'date',
    learnedToday: 'learnedToday',
    mostImportantIdea: 'mostImportantIdea',
    actionsApplied: 'actionsApplied',
    unclearThings: 'unclearThings',
    nextLearningSuggestion: 'nextLearningSuggestion',
    createdAt: 'createdAt'
  };

  export type DailyReviewScalarFieldEnum = (typeof DailyReviewScalarFieldEnum)[keyof typeof DailyReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type NewsItemWhereInput = {
    AND?: NewsItemWhereInput | NewsItemWhereInput[]
    OR?: NewsItemWhereInput[]
    NOT?: NewsItemWhereInput | NewsItemWhereInput[]
    id?: StringFilter<"NewsItem"> | string
    title?: StringFilter<"NewsItem"> | string
    category?: StringFilter<"NewsItem"> | string
    sourceName?: StringFilter<"NewsItem"> | string
    sourceUrl?: StringFilter<"NewsItem"> | string
    publishedAt?: StringFilter<"NewsItem"> | string
    summary?: StringFilter<"NewsItem"> | string
    whyItMatters?: StringFilter<"NewsItem"> | string
    reliabilityNote?: StringFilter<"NewsItem"> | string
    fullAiOutput?: StringFilter<"NewsItem"> | string
    saved?: BoolFilter<"NewsItem"> | boolean
    createdAt?: DateTimeFilter<"NewsItem"> | Date | string
  }

  export type NewsItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrder
    publishedAt?: SortOrder
    summary?: SortOrder
    whyItMatters?: SortOrder
    reliabilityNote?: SortOrder
    fullAiOutput?: SortOrder
    saved?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NewsItemWhereInput | NewsItemWhereInput[]
    OR?: NewsItemWhereInput[]
    NOT?: NewsItemWhereInput | NewsItemWhereInput[]
    title?: StringFilter<"NewsItem"> | string
    category?: StringFilter<"NewsItem"> | string
    sourceName?: StringFilter<"NewsItem"> | string
    sourceUrl?: StringFilter<"NewsItem"> | string
    publishedAt?: StringFilter<"NewsItem"> | string
    summary?: StringFilter<"NewsItem"> | string
    whyItMatters?: StringFilter<"NewsItem"> | string
    reliabilityNote?: StringFilter<"NewsItem"> | string
    fullAiOutput?: StringFilter<"NewsItem"> | string
    saved?: BoolFilter<"NewsItem"> | boolean
    createdAt?: DateTimeFilter<"NewsItem"> | Date | string
  }, "id">

  export type NewsItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrder
    publishedAt?: SortOrder
    summary?: SortOrder
    whyItMatters?: SortOrder
    reliabilityNote?: SortOrder
    fullAiOutput?: SortOrder
    saved?: SortOrder
    createdAt?: SortOrder
    _count?: NewsItemCountOrderByAggregateInput
    _max?: NewsItemMaxOrderByAggregateInput
    _min?: NewsItemMinOrderByAggregateInput
  }

  export type NewsItemScalarWhereWithAggregatesInput = {
    AND?: NewsItemScalarWhereWithAggregatesInput | NewsItemScalarWhereWithAggregatesInput[]
    OR?: NewsItemScalarWhereWithAggregatesInput[]
    NOT?: NewsItemScalarWhereWithAggregatesInput | NewsItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsItem"> | string
    title?: StringWithAggregatesFilter<"NewsItem"> | string
    category?: StringWithAggregatesFilter<"NewsItem"> | string
    sourceName?: StringWithAggregatesFilter<"NewsItem"> | string
    sourceUrl?: StringWithAggregatesFilter<"NewsItem"> | string
    publishedAt?: StringWithAggregatesFilter<"NewsItem"> | string
    summary?: StringWithAggregatesFilter<"NewsItem"> | string
    whyItMatters?: StringWithAggregatesFilter<"NewsItem"> | string
    reliabilityNote?: StringWithAggregatesFilter<"NewsItem"> | string
    fullAiOutput?: StringWithAggregatesFilter<"NewsItem"> | string
    saved?: BoolWithAggregatesFilter<"NewsItem"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"NewsItem"> | Date | string
  }

  export type KnowledgeItemWhereInput = {
    AND?: KnowledgeItemWhereInput | KnowledgeItemWhereInput[]
    OR?: KnowledgeItemWhereInput[]
    NOT?: KnowledgeItemWhereInput | KnowledgeItemWhereInput[]
    id?: StringFilter<"KnowledgeItem"> | string
    title?: StringFilter<"KnowledgeItem"> | string
    category?: StringFilter<"KnowledgeItem"> | string
    sourceType?: StringFilter<"KnowledgeItem"> | string
    sourceUrl?: StringFilter<"KnowledgeItem"> | string
    originalText?: StringFilter<"KnowledgeItem"> | string
    coreThesis?: StringFilter<"KnowledgeItem"> | string
    oneThingToRemember?: StringFilter<"KnowledgeItem"> | string
    keyPoints?: StringFilter<"KnowledgeItem"> | string
    terms?: StringFilter<"KnowledgeItem"> | string
    examples?: StringFilter<"KnowledgeItem"> | string
    application?: StringFilter<"KnowledgeItem"> | string
    mistakes?: StringFilter<"KnowledgeItem"> | string
    selfTestQuestions?: StringFilter<"KnowledgeItem"> | string
    flashcards?: StringFilter<"KnowledgeItem"> | string
    fullAiOutput?: StringFilter<"KnowledgeItem"> | string
    tags?: StringFilter<"KnowledgeItem"> | string
    favorite?: BoolFilter<"KnowledgeItem"> | boolean
    reviewStatus?: StringFilter<"KnowledgeItem"> | string
    relatedTopics?: StringFilter<"KnowledgeItem"> | string
    relatedItemIds?: StringFilter<"KnowledgeItem"> | string
    createdAt?: DateTimeFilter<"KnowledgeItem"> | Date | string
    updatedAt?: DateTimeFilter<"KnowledgeItem"> | Date | string
    reviewItems?: ReviewItemListRelationFilter
  }

  export type KnowledgeItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    sourceType?: SortOrder
    sourceUrl?: SortOrder
    originalText?: SortOrder
    coreThesis?: SortOrder
    oneThingToRemember?: SortOrder
    keyPoints?: SortOrder
    terms?: SortOrder
    examples?: SortOrder
    application?: SortOrder
    mistakes?: SortOrder
    selfTestQuestions?: SortOrder
    flashcards?: SortOrder
    fullAiOutput?: SortOrder
    tags?: SortOrder
    favorite?: SortOrder
    reviewStatus?: SortOrder
    relatedTopics?: SortOrder
    relatedItemIds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewItems?: ReviewItemOrderByRelationAggregateInput
  }

  export type KnowledgeItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KnowledgeItemWhereInput | KnowledgeItemWhereInput[]
    OR?: KnowledgeItemWhereInput[]
    NOT?: KnowledgeItemWhereInput | KnowledgeItemWhereInput[]
    title?: StringFilter<"KnowledgeItem"> | string
    category?: StringFilter<"KnowledgeItem"> | string
    sourceType?: StringFilter<"KnowledgeItem"> | string
    sourceUrl?: StringFilter<"KnowledgeItem"> | string
    originalText?: StringFilter<"KnowledgeItem"> | string
    coreThesis?: StringFilter<"KnowledgeItem"> | string
    oneThingToRemember?: StringFilter<"KnowledgeItem"> | string
    keyPoints?: StringFilter<"KnowledgeItem"> | string
    terms?: StringFilter<"KnowledgeItem"> | string
    examples?: StringFilter<"KnowledgeItem"> | string
    application?: StringFilter<"KnowledgeItem"> | string
    mistakes?: StringFilter<"KnowledgeItem"> | string
    selfTestQuestions?: StringFilter<"KnowledgeItem"> | string
    flashcards?: StringFilter<"KnowledgeItem"> | string
    fullAiOutput?: StringFilter<"KnowledgeItem"> | string
    tags?: StringFilter<"KnowledgeItem"> | string
    favorite?: BoolFilter<"KnowledgeItem"> | boolean
    reviewStatus?: StringFilter<"KnowledgeItem"> | string
    relatedTopics?: StringFilter<"KnowledgeItem"> | string
    relatedItemIds?: StringFilter<"KnowledgeItem"> | string
    createdAt?: DateTimeFilter<"KnowledgeItem"> | Date | string
    updatedAt?: DateTimeFilter<"KnowledgeItem"> | Date | string
    reviewItems?: ReviewItemListRelationFilter
  }, "id">

  export type KnowledgeItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    sourceType?: SortOrder
    sourceUrl?: SortOrder
    originalText?: SortOrder
    coreThesis?: SortOrder
    oneThingToRemember?: SortOrder
    keyPoints?: SortOrder
    terms?: SortOrder
    examples?: SortOrder
    application?: SortOrder
    mistakes?: SortOrder
    selfTestQuestions?: SortOrder
    flashcards?: SortOrder
    fullAiOutput?: SortOrder
    tags?: SortOrder
    favorite?: SortOrder
    reviewStatus?: SortOrder
    relatedTopics?: SortOrder
    relatedItemIds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KnowledgeItemCountOrderByAggregateInput
    _max?: KnowledgeItemMaxOrderByAggregateInput
    _min?: KnowledgeItemMinOrderByAggregateInput
  }

  export type KnowledgeItemScalarWhereWithAggregatesInput = {
    AND?: KnowledgeItemScalarWhereWithAggregatesInput | KnowledgeItemScalarWhereWithAggregatesInput[]
    OR?: KnowledgeItemScalarWhereWithAggregatesInput[]
    NOT?: KnowledgeItemScalarWhereWithAggregatesInput | KnowledgeItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KnowledgeItem"> | string
    title?: StringWithAggregatesFilter<"KnowledgeItem"> | string
    category?: StringWithAggregatesFilter<"KnowledgeItem"> | string
    sourceType?: StringWithAggregatesFilter<"KnowledgeItem"> | string
    sourceUrl?: StringWithAggregatesFilter<"KnowledgeItem"> | string
    originalText?: StringWithAggregatesFilter<"KnowledgeItem"> | string
    coreThesis?: StringWithAggregatesFilter<"KnowledgeItem"> | string
    oneThingToRemember?: StringWithAggregatesFilter<"KnowledgeItem"> | string
    keyPoints?: StringWithAggregatesFilter<"KnowledgeItem"> | string
    terms?: StringWithAggregatesFilter<"KnowledgeItem"> | string
    examples?: StringWithAggregatesFilter<"KnowledgeItem"> | string
    application?: StringWithAggregatesFilter<"KnowledgeItem"> | string
    mistakes?: StringWithAggregatesFilter<"KnowledgeItem"> | string
    selfTestQuestions?: StringWithAggregatesFilter<"KnowledgeItem"> | string
    flashcards?: StringWithAggregatesFilter<"KnowledgeItem"> | string
    fullAiOutput?: StringWithAggregatesFilter<"KnowledgeItem"> | string
    tags?: StringWithAggregatesFilter<"KnowledgeItem"> | string
    favorite?: BoolWithAggregatesFilter<"KnowledgeItem"> | boolean
    reviewStatus?: StringWithAggregatesFilter<"KnowledgeItem"> | string
    relatedTopics?: StringWithAggregatesFilter<"KnowledgeItem"> | string
    relatedItemIds?: StringWithAggregatesFilter<"KnowledgeItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"KnowledgeItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"KnowledgeItem"> | Date | string
  }

  export type ReviewItemWhereInput = {
    AND?: ReviewItemWhereInput | ReviewItemWhereInput[]
    OR?: ReviewItemWhereInput[]
    NOT?: ReviewItemWhereInput | ReviewItemWhereInput[]
    id?: StringFilter<"ReviewItem"> | string
    knowledgeItemId?: StringFilter<"ReviewItem"> | string
    dueDate?: DateTimeFilter<"ReviewItem"> | Date | string
    status?: StringFilter<"ReviewItem"> | string
    difficulty?: StringFilter<"ReviewItem"> | string
    completedAt?: DateTimeNullableFilter<"ReviewItem"> | Date | string | null
    knowledgeItem?: XOR<KnowledgeItemRelationFilter, KnowledgeItemWhereInput>
  }

  export type ReviewItemOrderByWithRelationInput = {
    id?: SortOrder
    knowledgeItemId?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    difficulty?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    knowledgeItem?: KnowledgeItemOrderByWithRelationInput
  }

  export type ReviewItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewItemWhereInput | ReviewItemWhereInput[]
    OR?: ReviewItemWhereInput[]
    NOT?: ReviewItemWhereInput | ReviewItemWhereInput[]
    knowledgeItemId?: StringFilter<"ReviewItem"> | string
    dueDate?: DateTimeFilter<"ReviewItem"> | Date | string
    status?: StringFilter<"ReviewItem"> | string
    difficulty?: StringFilter<"ReviewItem"> | string
    completedAt?: DateTimeNullableFilter<"ReviewItem"> | Date | string | null
    knowledgeItem?: XOR<KnowledgeItemRelationFilter, KnowledgeItemWhereInput>
  }, "id">

  export type ReviewItemOrderByWithAggregationInput = {
    id?: SortOrder
    knowledgeItemId?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    difficulty?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: ReviewItemCountOrderByAggregateInput
    _max?: ReviewItemMaxOrderByAggregateInput
    _min?: ReviewItemMinOrderByAggregateInput
  }

  export type ReviewItemScalarWhereWithAggregatesInput = {
    AND?: ReviewItemScalarWhereWithAggregatesInput | ReviewItemScalarWhereWithAggregatesInput[]
    OR?: ReviewItemScalarWhereWithAggregatesInput[]
    NOT?: ReviewItemScalarWhereWithAggregatesInput | ReviewItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReviewItem"> | string
    knowledgeItemId?: StringWithAggregatesFilter<"ReviewItem"> | string
    dueDate?: DateTimeWithAggregatesFilter<"ReviewItem"> | Date | string
    status?: StringWithAggregatesFilter<"ReviewItem"> | string
    difficulty?: StringWithAggregatesFilter<"ReviewItem"> | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"ReviewItem"> | Date | string | null
  }

  export type SettingsWhereInput = {
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    id?: StringFilter<"Settings"> | string
    aiApiKey?: StringFilter<"Settings"> | string
    aiBaseUrl?: StringFilter<"Settings"> | string
    aiModel?: StringFilter<"Settings"> | string
    newsApiKey?: StringFilter<"Settings"> | string
    preferredTopics?: StringFilter<"Settings"> | string
    preferredCategories?: StringFilter<"Settings"> | string
    dailyNewsCount?: IntFilter<"Settings"> | number
    includePolitics?: BoolFilter<"Settings"> | boolean
    autoFlashcards?: BoolFilter<"Settings"> | boolean
    defaultLanguage?: StringFilter<"Settings"> | string
  }

  export type SettingsOrderByWithRelationInput = {
    id?: SortOrder
    aiApiKey?: SortOrder
    aiBaseUrl?: SortOrder
    aiModel?: SortOrder
    newsApiKey?: SortOrder
    preferredTopics?: SortOrder
    preferredCategories?: SortOrder
    dailyNewsCount?: SortOrder
    includePolitics?: SortOrder
    autoFlashcards?: SortOrder
    defaultLanguage?: SortOrder
  }

  export type SettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    aiApiKey?: StringFilter<"Settings"> | string
    aiBaseUrl?: StringFilter<"Settings"> | string
    aiModel?: StringFilter<"Settings"> | string
    newsApiKey?: StringFilter<"Settings"> | string
    preferredTopics?: StringFilter<"Settings"> | string
    preferredCategories?: StringFilter<"Settings"> | string
    dailyNewsCount?: IntFilter<"Settings"> | number
    includePolitics?: BoolFilter<"Settings"> | boolean
    autoFlashcards?: BoolFilter<"Settings"> | boolean
    defaultLanguage?: StringFilter<"Settings"> | string
  }, "id">

  export type SettingsOrderByWithAggregationInput = {
    id?: SortOrder
    aiApiKey?: SortOrder
    aiBaseUrl?: SortOrder
    aiModel?: SortOrder
    newsApiKey?: SortOrder
    preferredTopics?: SortOrder
    preferredCategories?: SortOrder
    dailyNewsCount?: SortOrder
    includePolitics?: SortOrder
    autoFlashcards?: SortOrder
    defaultLanguage?: SortOrder
    _count?: SettingsCountOrderByAggregateInput
    _avg?: SettingsAvgOrderByAggregateInput
    _max?: SettingsMaxOrderByAggregateInput
    _min?: SettingsMinOrderByAggregateInput
    _sum?: SettingsSumOrderByAggregateInput
  }

  export type SettingsScalarWhereWithAggregatesInput = {
    AND?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    OR?: SettingsScalarWhereWithAggregatesInput[]
    NOT?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Settings"> | string
    aiApiKey?: StringWithAggregatesFilter<"Settings"> | string
    aiBaseUrl?: StringWithAggregatesFilter<"Settings"> | string
    aiModel?: StringWithAggregatesFilter<"Settings"> | string
    newsApiKey?: StringWithAggregatesFilter<"Settings"> | string
    preferredTopics?: StringWithAggregatesFilter<"Settings"> | string
    preferredCategories?: StringWithAggregatesFilter<"Settings"> | string
    dailyNewsCount?: IntWithAggregatesFilter<"Settings"> | number
    includePolitics?: BoolWithAggregatesFilter<"Settings"> | boolean
    autoFlashcards?: BoolWithAggregatesFilter<"Settings"> | boolean
    defaultLanguage?: StringWithAggregatesFilter<"Settings"> | string
  }

  export type ReadingItemWhereInput = {
    AND?: ReadingItemWhereInput | ReadingItemWhereInput[]
    OR?: ReadingItemWhereInput[]
    NOT?: ReadingItemWhereInput | ReadingItemWhereInput[]
    id?: StringFilter<"ReadingItem"> | string
    title?: StringFilter<"ReadingItem"> | string
    url?: StringFilter<"ReadingItem"> | string
    category?: StringFilter<"ReadingItem"> | string
    sourceType?: StringFilter<"ReadingItem"> | string
    status?: StringFilter<"ReadingItem"> | string
    note?: StringFilter<"ReadingItem"> | string
    addedAt?: DateTimeFilter<"ReadingItem"> | Date | string
    startedAt?: DateTimeNullableFilter<"ReadingItem"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ReadingItem"> | Date | string | null
  }

  export type ReadingItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    category?: SortOrder
    sourceType?: SortOrder
    status?: SortOrder
    note?: SortOrder
    addedAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
  }

  export type ReadingItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReadingItemWhereInput | ReadingItemWhereInput[]
    OR?: ReadingItemWhereInput[]
    NOT?: ReadingItemWhereInput | ReadingItemWhereInput[]
    title?: StringFilter<"ReadingItem"> | string
    url?: StringFilter<"ReadingItem"> | string
    category?: StringFilter<"ReadingItem"> | string
    sourceType?: StringFilter<"ReadingItem"> | string
    status?: StringFilter<"ReadingItem"> | string
    note?: StringFilter<"ReadingItem"> | string
    addedAt?: DateTimeFilter<"ReadingItem"> | Date | string
    startedAt?: DateTimeNullableFilter<"ReadingItem"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ReadingItem"> | Date | string | null
  }, "id">

  export type ReadingItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    category?: SortOrder
    sourceType?: SortOrder
    status?: SortOrder
    note?: SortOrder
    addedAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: ReadingItemCountOrderByAggregateInput
    _max?: ReadingItemMaxOrderByAggregateInput
    _min?: ReadingItemMinOrderByAggregateInput
  }

  export type ReadingItemScalarWhereWithAggregatesInput = {
    AND?: ReadingItemScalarWhereWithAggregatesInput | ReadingItemScalarWhereWithAggregatesInput[]
    OR?: ReadingItemScalarWhereWithAggregatesInput[]
    NOT?: ReadingItemScalarWhereWithAggregatesInput | ReadingItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReadingItem"> | string
    title?: StringWithAggregatesFilter<"ReadingItem"> | string
    url?: StringWithAggregatesFilter<"ReadingItem"> | string
    category?: StringWithAggregatesFilter<"ReadingItem"> | string
    sourceType?: StringWithAggregatesFilter<"ReadingItem"> | string
    status?: StringWithAggregatesFilter<"ReadingItem"> | string
    note?: StringWithAggregatesFilter<"ReadingItem"> | string
    addedAt?: DateTimeWithAggregatesFilter<"ReadingItem"> | Date | string
    startedAt?: DateTimeNullableWithAggregatesFilter<"ReadingItem"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"ReadingItem"> | Date | string | null
  }

  export type ActionItemWhereInput = {
    AND?: ActionItemWhereInput | ActionItemWhereInput[]
    OR?: ActionItemWhereInput[]
    NOT?: ActionItemWhereInput | ActionItemWhereInput[]
    id?: StringFilter<"ActionItem"> | string
    title?: StringFilter<"ActionItem"> | string
    relatedKnowledgeItemId?: StringFilter<"ActionItem"> | string
    category?: StringFilter<"ActionItem"> | string
    deadline?: DateTimeNullableFilter<"ActionItem"> | Date | string | null
    status?: StringFilter<"ActionItem"> | string
    resultNote?: StringFilter<"ActionItem"> | string
    lessonLearned?: StringFilter<"ActionItem"> | string
    createdAt?: DateTimeFilter<"ActionItem"> | Date | string
    completedAt?: DateTimeNullableFilter<"ActionItem"> | Date | string | null
  }

  export type ActionItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    relatedKnowledgeItemId?: SortOrder
    category?: SortOrder
    deadline?: SortOrderInput | SortOrder
    status?: SortOrder
    resultNote?: SortOrder
    lessonLearned?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
  }

  export type ActionItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActionItemWhereInput | ActionItemWhereInput[]
    OR?: ActionItemWhereInput[]
    NOT?: ActionItemWhereInput | ActionItemWhereInput[]
    title?: StringFilter<"ActionItem"> | string
    relatedKnowledgeItemId?: StringFilter<"ActionItem"> | string
    category?: StringFilter<"ActionItem"> | string
    deadline?: DateTimeNullableFilter<"ActionItem"> | Date | string | null
    status?: StringFilter<"ActionItem"> | string
    resultNote?: StringFilter<"ActionItem"> | string
    lessonLearned?: StringFilter<"ActionItem"> | string
    createdAt?: DateTimeFilter<"ActionItem"> | Date | string
    completedAt?: DateTimeNullableFilter<"ActionItem"> | Date | string | null
  }, "id">

  export type ActionItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    relatedKnowledgeItemId?: SortOrder
    category?: SortOrder
    deadline?: SortOrderInput | SortOrder
    status?: SortOrder
    resultNote?: SortOrder
    lessonLearned?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: ActionItemCountOrderByAggregateInput
    _max?: ActionItemMaxOrderByAggregateInput
    _min?: ActionItemMinOrderByAggregateInput
  }

  export type ActionItemScalarWhereWithAggregatesInput = {
    AND?: ActionItemScalarWhereWithAggregatesInput | ActionItemScalarWhereWithAggregatesInput[]
    OR?: ActionItemScalarWhereWithAggregatesInput[]
    NOT?: ActionItemScalarWhereWithAggregatesInput | ActionItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActionItem"> | string
    title?: StringWithAggregatesFilter<"ActionItem"> | string
    relatedKnowledgeItemId?: StringWithAggregatesFilter<"ActionItem"> | string
    category?: StringWithAggregatesFilter<"ActionItem"> | string
    deadline?: DateTimeNullableWithAggregatesFilter<"ActionItem"> | Date | string | null
    status?: StringWithAggregatesFilter<"ActionItem"> | string
    resultNote?: StringWithAggregatesFilter<"ActionItem"> | string
    lessonLearned?: StringWithAggregatesFilter<"ActionItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ActionItem"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"ActionItem"> | Date | string | null
  }

  export type DailyReviewWhereInput = {
    AND?: DailyReviewWhereInput | DailyReviewWhereInput[]
    OR?: DailyReviewWhereInput[]
    NOT?: DailyReviewWhereInput | DailyReviewWhereInput[]
    id?: StringFilter<"DailyReview"> | string
    date?: DateTimeFilter<"DailyReview"> | Date | string
    learnedToday?: StringFilter<"DailyReview"> | string
    mostImportantIdea?: StringFilter<"DailyReview"> | string
    actionsApplied?: StringFilter<"DailyReview"> | string
    unclearThings?: StringFilter<"DailyReview"> | string
    nextLearningSuggestion?: StringFilter<"DailyReview"> | string
    createdAt?: DateTimeFilter<"DailyReview"> | Date | string
  }

  export type DailyReviewOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    learnedToday?: SortOrder
    mostImportantIdea?: SortOrder
    actionsApplied?: SortOrder
    unclearThings?: SortOrder
    nextLearningSuggestion?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DailyReviewWhereInput | DailyReviewWhereInput[]
    OR?: DailyReviewWhereInput[]
    NOT?: DailyReviewWhereInput | DailyReviewWhereInput[]
    date?: DateTimeFilter<"DailyReview"> | Date | string
    learnedToday?: StringFilter<"DailyReview"> | string
    mostImportantIdea?: StringFilter<"DailyReview"> | string
    actionsApplied?: StringFilter<"DailyReview"> | string
    unclearThings?: StringFilter<"DailyReview"> | string
    nextLearningSuggestion?: StringFilter<"DailyReview"> | string
    createdAt?: DateTimeFilter<"DailyReview"> | Date | string
  }, "id">

  export type DailyReviewOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    learnedToday?: SortOrder
    mostImportantIdea?: SortOrder
    actionsApplied?: SortOrder
    unclearThings?: SortOrder
    nextLearningSuggestion?: SortOrder
    createdAt?: SortOrder
    _count?: DailyReviewCountOrderByAggregateInput
    _max?: DailyReviewMaxOrderByAggregateInput
    _min?: DailyReviewMinOrderByAggregateInput
  }

  export type DailyReviewScalarWhereWithAggregatesInput = {
    AND?: DailyReviewScalarWhereWithAggregatesInput | DailyReviewScalarWhereWithAggregatesInput[]
    OR?: DailyReviewScalarWhereWithAggregatesInput[]
    NOT?: DailyReviewScalarWhereWithAggregatesInput | DailyReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyReview"> | string
    date?: DateTimeWithAggregatesFilter<"DailyReview"> | Date | string
    learnedToday?: StringWithAggregatesFilter<"DailyReview"> | string
    mostImportantIdea?: StringWithAggregatesFilter<"DailyReview"> | string
    actionsApplied?: StringWithAggregatesFilter<"DailyReview"> | string
    unclearThings?: StringWithAggregatesFilter<"DailyReview"> | string
    nextLearningSuggestion?: StringWithAggregatesFilter<"DailyReview"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DailyReview"> | Date | string
  }

  export type NewsItemCreateInput = {
    id?: string
    title: string
    category: string
    sourceName: string
    sourceUrl: string
    publishedAt: string
    summary: string
    whyItMatters: string
    reliabilityNote: string
    fullAiOutput: string
    saved?: boolean
    createdAt?: Date | string
  }

  export type NewsItemUncheckedCreateInput = {
    id?: string
    title: string
    category: string
    sourceName: string
    sourceUrl: string
    publishedAt: string
    summary: string
    whyItMatters: string
    reliabilityNote: string
    fullAiOutput: string
    saved?: boolean
    createdAt?: Date | string
  }

  export type NewsItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    publishedAt?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    whyItMatters?: StringFieldUpdateOperationsInput | string
    reliabilityNote?: StringFieldUpdateOperationsInput | string
    fullAiOutput?: StringFieldUpdateOperationsInput | string
    saved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    publishedAt?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    whyItMatters?: StringFieldUpdateOperationsInput | string
    reliabilityNote?: StringFieldUpdateOperationsInput | string
    fullAiOutput?: StringFieldUpdateOperationsInput | string
    saved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsItemCreateManyInput = {
    id?: string
    title: string
    category: string
    sourceName: string
    sourceUrl: string
    publishedAt: string
    summary: string
    whyItMatters: string
    reliabilityNote: string
    fullAiOutput: string
    saved?: boolean
    createdAt?: Date | string
  }

  export type NewsItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    publishedAt?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    whyItMatters?: StringFieldUpdateOperationsInput | string
    reliabilityNote?: StringFieldUpdateOperationsInput | string
    fullAiOutput?: StringFieldUpdateOperationsInput | string
    saved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    publishedAt?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    whyItMatters?: StringFieldUpdateOperationsInput | string
    reliabilityNote?: StringFieldUpdateOperationsInput | string
    fullAiOutput?: StringFieldUpdateOperationsInput | string
    saved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeItemCreateInput = {
    id?: string
    title: string
    category: string
    sourceType: string
    sourceUrl?: string
    originalText?: string
    coreThesis?: string
    oneThingToRemember?: string
    keyPoints?: string
    terms?: string
    examples?: string
    application?: string
    mistakes?: string
    selfTestQuestions?: string
    flashcards?: string
    fullAiOutput?: string
    tags?: string
    favorite?: boolean
    reviewStatus?: string
    relatedTopics?: string
    relatedItemIds?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewItems?: ReviewItemCreateNestedManyWithoutKnowledgeItemInput
  }

  export type KnowledgeItemUncheckedCreateInput = {
    id?: string
    title: string
    category: string
    sourceType: string
    sourceUrl?: string
    originalText?: string
    coreThesis?: string
    oneThingToRemember?: string
    keyPoints?: string
    terms?: string
    examples?: string
    application?: string
    mistakes?: string
    selfTestQuestions?: string
    flashcards?: string
    fullAiOutput?: string
    tags?: string
    favorite?: boolean
    reviewStatus?: string
    relatedTopics?: string
    relatedItemIds?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewItems?: ReviewItemUncheckedCreateNestedManyWithoutKnowledgeItemInput
  }

  export type KnowledgeItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    originalText?: StringFieldUpdateOperationsInput | string
    coreThesis?: StringFieldUpdateOperationsInput | string
    oneThingToRemember?: StringFieldUpdateOperationsInput | string
    keyPoints?: StringFieldUpdateOperationsInput | string
    terms?: StringFieldUpdateOperationsInput | string
    examples?: StringFieldUpdateOperationsInput | string
    application?: StringFieldUpdateOperationsInput | string
    mistakes?: StringFieldUpdateOperationsInput | string
    selfTestQuestions?: StringFieldUpdateOperationsInput | string
    flashcards?: StringFieldUpdateOperationsInput | string
    fullAiOutput?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    reviewStatus?: StringFieldUpdateOperationsInput | string
    relatedTopics?: StringFieldUpdateOperationsInput | string
    relatedItemIds?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewItems?: ReviewItemUpdateManyWithoutKnowledgeItemNestedInput
  }

  export type KnowledgeItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    originalText?: StringFieldUpdateOperationsInput | string
    coreThesis?: StringFieldUpdateOperationsInput | string
    oneThingToRemember?: StringFieldUpdateOperationsInput | string
    keyPoints?: StringFieldUpdateOperationsInput | string
    terms?: StringFieldUpdateOperationsInput | string
    examples?: StringFieldUpdateOperationsInput | string
    application?: StringFieldUpdateOperationsInput | string
    mistakes?: StringFieldUpdateOperationsInput | string
    selfTestQuestions?: StringFieldUpdateOperationsInput | string
    flashcards?: StringFieldUpdateOperationsInput | string
    fullAiOutput?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    reviewStatus?: StringFieldUpdateOperationsInput | string
    relatedTopics?: StringFieldUpdateOperationsInput | string
    relatedItemIds?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewItems?: ReviewItemUncheckedUpdateManyWithoutKnowledgeItemNestedInput
  }

  export type KnowledgeItemCreateManyInput = {
    id?: string
    title: string
    category: string
    sourceType: string
    sourceUrl?: string
    originalText?: string
    coreThesis?: string
    oneThingToRemember?: string
    keyPoints?: string
    terms?: string
    examples?: string
    application?: string
    mistakes?: string
    selfTestQuestions?: string
    flashcards?: string
    fullAiOutput?: string
    tags?: string
    favorite?: boolean
    reviewStatus?: string
    relatedTopics?: string
    relatedItemIds?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KnowledgeItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    originalText?: StringFieldUpdateOperationsInput | string
    coreThesis?: StringFieldUpdateOperationsInput | string
    oneThingToRemember?: StringFieldUpdateOperationsInput | string
    keyPoints?: StringFieldUpdateOperationsInput | string
    terms?: StringFieldUpdateOperationsInput | string
    examples?: StringFieldUpdateOperationsInput | string
    application?: StringFieldUpdateOperationsInput | string
    mistakes?: StringFieldUpdateOperationsInput | string
    selfTestQuestions?: StringFieldUpdateOperationsInput | string
    flashcards?: StringFieldUpdateOperationsInput | string
    fullAiOutput?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    reviewStatus?: StringFieldUpdateOperationsInput | string
    relatedTopics?: StringFieldUpdateOperationsInput | string
    relatedItemIds?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    originalText?: StringFieldUpdateOperationsInput | string
    coreThesis?: StringFieldUpdateOperationsInput | string
    oneThingToRemember?: StringFieldUpdateOperationsInput | string
    keyPoints?: StringFieldUpdateOperationsInput | string
    terms?: StringFieldUpdateOperationsInput | string
    examples?: StringFieldUpdateOperationsInput | string
    application?: StringFieldUpdateOperationsInput | string
    mistakes?: StringFieldUpdateOperationsInput | string
    selfTestQuestions?: StringFieldUpdateOperationsInput | string
    flashcards?: StringFieldUpdateOperationsInput | string
    fullAiOutput?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    reviewStatus?: StringFieldUpdateOperationsInput | string
    relatedTopics?: StringFieldUpdateOperationsInput | string
    relatedItemIds?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewItemCreateInput = {
    id?: string
    dueDate: Date | string
    status?: string
    difficulty?: string
    completedAt?: Date | string | null
    knowledgeItem: KnowledgeItemCreateNestedOneWithoutReviewItemsInput
  }

  export type ReviewItemUncheckedCreateInput = {
    id?: string
    knowledgeItemId: string
    dueDate: Date | string
    status?: string
    difficulty?: string
    completedAt?: Date | string | null
  }

  export type ReviewItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    knowledgeItem?: KnowledgeItemUpdateOneRequiredWithoutReviewItemsNestedInput
  }

  export type ReviewItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    knowledgeItemId?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewItemCreateManyInput = {
    id?: string
    knowledgeItemId: string
    dueDate: Date | string
    status?: string
    difficulty?: string
    completedAt?: Date | string | null
  }

  export type ReviewItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    knowledgeItemId?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SettingsCreateInput = {
    id?: string
    aiApiKey?: string
    aiBaseUrl?: string
    aiModel?: string
    newsApiKey?: string
    preferredTopics?: string
    preferredCategories?: string
    dailyNewsCount?: number
    includePolitics?: boolean
    autoFlashcards?: boolean
    defaultLanguage?: string
  }

  export type SettingsUncheckedCreateInput = {
    id?: string
    aiApiKey?: string
    aiBaseUrl?: string
    aiModel?: string
    newsApiKey?: string
    preferredTopics?: string
    preferredCategories?: string
    dailyNewsCount?: number
    includePolitics?: boolean
    autoFlashcards?: boolean
    defaultLanguage?: string
  }

  export type SettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiApiKey?: StringFieldUpdateOperationsInput | string
    aiBaseUrl?: StringFieldUpdateOperationsInput | string
    aiModel?: StringFieldUpdateOperationsInput | string
    newsApiKey?: StringFieldUpdateOperationsInput | string
    preferredTopics?: StringFieldUpdateOperationsInput | string
    preferredCategories?: StringFieldUpdateOperationsInput | string
    dailyNewsCount?: IntFieldUpdateOperationsInput | number
    includePolitics?: BoolFieldUpdateOperationsInput | boolean
    autoFlashcards?: BoolFieldUpdateOperationsInput | boolean
    defaultLanguage?: StringFieldUpdateOperationsInput | string
  }

  export type SettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiApiKey?: StringFieldUpdateOperationsInput | string
    aiBaseUrl?: StringFieldUpdateOperationsInput | string
    aiModel?: StringFieldUpdateOperationsInput | string
    newsApiKey?: StringFieldUpdateOperationsInput | string
    preferredTopics?: StringFieldUpdateOperationsInput | string
    preferredCategories?: StringFieldUpdateOperationsInput | string
    dailyNewsCount?: IntFieldUpdateOperationsInput | number
    includePolitics?: BoolFieldUpdateOperationsInput | boolean
    autoFlashcards?: BoolFieldUpdateOperationsInput | boolean
    defaultLanguage?: StringFieldUpdateOperationsInput | string
  }

  export type SettingsCreateManyInput = {
    id?: string
    aiApiKey?: string
    aiBaseUrl?: string
    aiModel?: string
    newsApiKey?: string
    preferredTopics?: string
    preferredCategories?: string
    dailyNewsCount?: number
    includePolitics?: boolean
    autoFlashcards?: boolean
    defaultLanguage?: string
  }

  export type SettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiApiKey?: StringFieldUpdateOperationsInput | string
    aiBaseUrl?: StringFieldUpdateOperationsInput | string
    aiModel?: StringFieldUpdateOperationsInput | string
    newsApiKey?: StringFieldUpdateOperationsInput | string
    preferredTopics?: StringFieldUpdateOperationsInput | string
    preferredCategories?: StringFieldUpdateOperationsInput | string
    dailyNewsCount?: IntFieldUpdateOperationsInput | number
    includePolitics?: BoolFieldUpdateOperationsInput | boolean
    autoFlashcards?: BoolFieldUpdateOperationsInput | boolean
    defaultLanguage?: StringFieldUpdateOperationsInput | string
  }

  export type SettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiApiKey?: StringFieldUpdateOperationsInput | string
    aiBaseUrl?: StringFieldUpdateOperationsInput | string
    aiModel?: StringFieldUpdateOperationsInput | string
    newsApiKey?: StringFieldUpdateOperationsInput | string
    preferredTopics?: StringFieldUpdateOperationsInput | string
    preferredCategories?: StringFieldUpdateOperationsInput | string
    dailyNewsCount?: IntFieldUpdateOperationsInput | number
    includePolitics?: BoolFieldUpdateOperationsInput | boolean
    autoFlashcards?: BoolFieldUpdateOperationsInput | boolean
    defaultLanguage?: StringFieldUpdateOperationsInput | string
  }

  export type ReadingItemCreateInput = {
    id?: string
    title: string
    url: string
    category: string
    sourceType?: string
    status?: string
    note?: string
    addedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type ReadingItemUncheckedCreateInput = {
    id?: string
    title: string
    url: string
    category: string
    sourceType?: string
    status?: string
    note?: string
    addedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type ReadingItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReadingItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReadingItemCreateManyInput = {
    id?: string
    title: string
    url: string
    category: string
    sourceType?: string
    status?: string
    note?: string
    addedAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type ReadingItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReadingItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ActionItemCreateInput = {
    id?: string
    title: string
    relatedKnowledgeItemId?: string
    category?: string
    deadline?: Date | string | null
    status?: string
    resultNote?: string
    lessonLearned?: string
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ActionItemUncheckedCreateInput = {
    id?: string
    title: string
    relatedKnowledgeItemId?: string
    category?: string
    deadline?: Date | string | null
    status?: string
    resultNote?: string
    lessonLearned?: string
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ActionItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    relatedKnowledgeItemId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    resultNote?: StringFieldUpdateOperationsInput | string
    lessonLearned?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ActionItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    relatedKnowledgeItemId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    resultNote?: StringFieldUpdateOperationsInput | string
    lessonLearned?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ActionItemCreateManyInput = {
    id?: string
    title: string
    relatedKnowledgeItemId?: string
    category?: string
    deadline?: Date | string | null
    status?: string
    resultNote?: string
    lessonLearned?: string
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ActionItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    relatedKnowledgeItemId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    resultNote?: StringFieldUpdateOperationsInput | string
    lessonLearned?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ActionItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    relatedKnowledgeItemId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    resultNote?: StringFieldUpdateOperationsInput | string
    lessonLearned?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DailyReviewCreateInput = {
    id?: string
    date: Date | string
    learnedToday?: string
    mostImportantIdea?: string
    actionsApplied?: string
    unclearThings?: string
    nextLearningSuggestion?: string
    createdAt?: Date | string
  }

  export type DailyReviewUncheckedCreateInput = {
    id?: string
    date: Date | string
    learnedToday?: string
    mostImportantIdea?: string
    actionsApplied?: string
    unclearThings?: string
    nextLearningSuggestion?: string
    createdAt?: Date | string
  }

  export type DailyReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    learnedToday?: StringFieldUpdateOperationsInput | string
    mostImportantIdea?: StringFieldUpdateOperationsInput | string
    actionsApplied?: StringFieldUpdateOperationsInput | string
    unclearThings?: StringFieldUpdateOperationsInput | string
    nextLearningSuggestion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    learnedToday?: StringFieldUpdateOperationsInput | string
    mostImportantIdea?: StringFieldUpdateOperationsInput | string
    actionsApplied?: StringFieldUpdateOperationsInput | string
    unclearThings?: StringFieldUpdateOperationsInput | string
    nextLearningSuggestion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReviewCreateManyInput = {
    id?: string
    date: Date | string
    learnedToday?: string
    mostImportantIdea?: string
    actionsApplied?: string
    unclearThings?: string
    nextLearningSuggestion?: string
    createdAt?: Date | string
  }

  export type DailyReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    learnedToday?: StringFieldUpdateOperationsInput | string
    mostImportantIdea?: StringFieldUpdateOperationsInput | string
    actionsApplied?: StringFieldUpdateOperationsInput | string
    unclearThings?: StringFieldUpdateOperationsInput | string
    nextLearningSuggestion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    learnedToday?: StringFieldUpdateOperationsInput | string
    mostImportantIdea?: StringFieldUpdateOperationsInput | string
    actionsApplied?: StringFieldUpdateOperationsInput | string
    unclearThings?: StringFieldUpdateOperationsInput | string
    nextLearningSuggestion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NewsItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrder
    publishedAt?: SortOrder
    summary?: SortOrder
    whyItMatters?: SortOrder
    reliabilityNote?: SortOrder
    fullAiOutput?: SortOrder
    saved?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrder
    publishedAt?: SortOrder
    summary?: SortOrder
    whyItMatters?: SortOrder
    reliabilityNote?: SortOrder
    fullAiOutput?: SortOrder
    saved?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrder
    publishedAt?: SortOrder
    summary?: SortOrder
    whyItMatters?: SortOrder
    reliabilityNote?: SortOrder
    fullAiOutput?: SortOrder
    saved?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ReviewItemListRelationFilter = {
    every?: ReviewItemWhereInput
    some?: ReviewItemWhereInput
    none?: ReviewItemWhereInput
  }

  export type ReviewItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KnowledgeItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    sourceType?: SortOrder
    sourceUrl?: SortOrder
    originalText?: SortOrder
    coreThesis?: SortOrder
    oneThingToRemember?: SortOrder
    keyPoints?: SortOrder
    terms?: SortOrder
    examples?: SortOrder
    application?: SortOrder
    mistakes?: SortOrder
    selfTestQuestions?: SortOrder
    flashcards?: SortOrder
    fullAiOutput?: SortOrder
    tags?: SortOrder
    favorite?: SortOrder
    reviewStatus?: SortOrder
    relatedTopics?: SortOrder
    relatedItemIds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KnowledgeItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    sourceType?: SortOrder
    sourceUrl?: SortOrder
    originalText?: SortOrder
    coreThesis?: SortOrder
    oneThingToRemember?: SortOrder
    keyPoints?: SortOrder
    terms?: SortOrder
    examples?: SortOrder
    application?: SortOrder
    mistakes?: SortOrder
    selfTestQuestions?: SortOrder
    flashcards?: SortOrder
    fullAiOutput?: SortOrder
    tags?: SortOrder
    favorite?: SortOrder
    reviewStatus?: SortOrder
    relatedTopics?: SortOrder
    relatedItemIds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KnowledgeItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    sourceType?: SortOrder
    sourceUrl?: SortOrder
    originalText?: SortOrder
    coreThesis?: SortOrder
    oneThingToRemember?: SortOrder
    keyPoints?: SortOrder
    terms?: SortOrder
    examples?: SortOrder
    application?: SortOrder
    mistakes?: SortOrder
    selfTestQuestions?: SortOrder
    flashcards?: SortOrder
    fullAiOutput?: SortOrder
    tags?: SortOrder
    favorite?: SortOrder
    reviewStatus?: SortOrder
    relatedTopics?: SortOrder
    relatedItemIds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type KnowledgeItemRelationFilter = {
    is?: KnowledgeItemWhereInput
    isNot?: KnowledgeItemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReviewItemCountOrderByAggregateInput = {
    id?: SortOrder
    knowledgeItemId?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    difficulty?: SortOrder
    completedAt?: SortOrder
  }

  export type ReviewItemMaxOrderByAggregateInput = {
    id?: SortOrder
    knowledgeItemId?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    difficulty?: SortOrder
    completedAt?: SortOrder
  }

  export type ReviewItemMinOrderByAggregateInput = {
    id?: SortOrder
    knowledgeItemId?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    difficulty?: SortOrder
    completedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SettingsCountOrderByAggregateInput = {
    id?: SortOrder
    aiApiKey?: SortOrder
    aiBaseUrl?: SortOrder
    aiModel?: SortOrder
    newsApiKey?: SortOrder
    preferredTopics?: SortOrder
    preferredCategories?: SortOrder
    dailyNewsCount?: SortOrder
    includePolitics?: SortOrder
    autoFlashcards?: SortOrder
    defaultLanguage?: SortOrder
  }

  export type SettingsAvgOrderByAggregateInput = {
    dailyNewsCount?: SortOrder
  }

  export type SettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    aiApiKey?: SortOrder
    aiBaseUrl?: SortOrder
    aiModel?: SortOrder
    newsApiKey?: SortOrder
    preferredTopics?: SortOrder
    preferredCategories?: SortOrder
    dailyNewsCount?: SortOrder
    includePolitics?: SortOrder
    autoFlashcards?: SortOrder
    defaultLanguage?: SortOrder
  }

  export type SettingsMinOrderByAggregateInput = {
    id?: SortOrder
    aiApiKey?: SortOrder
    aiBaseUrl?: SortOrder
    aiModel?: SortOrder
    newsApiKey?: SortOrder
    preferredTopics?: SortOrder
    preferredCategories?: SortOrder
    dailyNewsCount?: SortOrder
    includePolitics?: SortOrder
    autoFlashcards?: SortOrder
    defaultLanguage?: SortOrder
  }

  export type SettingsSumOrderByAggregateInput = {
    dailyNewsCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ReadingItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    category?: SortOrder
    sourceType?: SortOrder
    status?: SortOrder
    note?: SortOrder
    addedAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ReadingItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    category?: SortOrder
    sourceType?: SortOrder
    status?: SortOrder
    note?: SortOrder
    addedAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ReadingItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    category?: SortOrder
    sourceType?: SortOrder
    status?: SortOrder
    note?: SortOrder
    addedAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ActionItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    relatedKnowledgeItemId?: SortOrder
    category?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    resultNote?: SortOrder
    lessonLearned?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ActionItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    relatedKnowledgeItemId?: SortOrder
    category?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    resultNote?: SortOrder
    lessonLearned?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ActionItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    relatedKnowledgeItemId?: SortOrder
    category?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    resultNote?: SortOrder
    lessonLearned?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type DailyReviewCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    learnedToday?: SortOrder
    mostImportantIdea?: SortOrder
    actionsApplied?: SortOrder
    unclearThings?: SortOrder
    nextLearningSuggestion?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    learnedToday?: SortOrder
    mostImportantIdea?: SortOrder
    actionsApplied?: SortOrder
    unclearThings?: SortOrder
    nextLearningSuggestion?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyReviewMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    learnedToday?: SortOrder
    mostImportantIdea?: SortOrder
    actionsApplied?: SortOrder
    unclearThings?: SortOrder
    nextLearningSuggestion?: SortOrder
    createdAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReviewItemCreateNestedManyWithoutKnowledgeItemInput = {
    create?: XOR<ReviewItemCreateWithoutKnowledgeItemInput, ReviewItemUncheckedCreateWithoutKnowledgeItemInput> | ReviewItemCreateWithoutKnowledgeItemInput[] | ReviewItemUncheckedCreateWithoutKnowledgeItemInput[]
    connectOrCreate?: ReviewItemCreateOrConnectWithoutKnowledgeItemInput | ReviewItemCreateOrConnectWithoutKnowledgeItemInput[]
    createMany?: ReviewItemCreateManyKnowledgeItemInputEnvelope
    connect?: ReviewItemWhereUniqueInput | ReviewItemWhereUniqueInput[]
  }

  export type ReviewItemUncheckedCreateNestedManyWithoutKnowledgeItemInput = {
    create?: XOR<ReviewItemCreateWithoutKnowledgeItemInput, ReviewItemUncheckedCreateWithoutKnowledgeItemInput> | ReviewItemCreateWithoutKnowledgeItemInput[] | ReviewItemUncheckedCreateWithoutKnowledgeItemInput[]
    connectOrCreate?: ReviewItemCreateOrConnectWithoutKnowledgeItemInput | ReviewItemCreateOrConnectWithoutKnowledgeItemInput[]
    createMany?: ReviewItemCreateManyKnowledgeItemInputEnvelope
    connect?: ReviewItemWhereUniqueInput | ReviewItemWhereUniqueInput[]
  }

  export type ReviewItemUpdateManyWithoutKnowledgeItemNestedInput = {
    create?: XOR<ReviewItemCreateWithoutKnowledgeItemInput, ReviewItemUncheckedCreateWithoutKnowledgeItemInput> | ReviewItemCreateWithoutKnowledgeItemInput[] | ReviewItemUncheckedCreateWithoutKnowledgeItemInput[]
    connectOrCreate?: ReviewItemCreateOrConnectWithoutKnowledgeItemInput | ReviewItemCreateOrConnectWithoutKnowledgeItemInput[]
    upsert?: ReviewItemUpsertWithWhereUniqueWithoutKnowledgeItemInput | ReviewItemUpsertWithWhereUniqueWithoutKnowledgeItemInput[]
    createMany?: ReviewItemCreateManyKnowledgeItemInputEnvelope
    set?: ReviewItemWhereUniqueInput | ReviewItemWhereUniqueInput[]
    disconnect?: ReviewItemWhereUniqueInput | ReviewItemWhereUniqueInput[]
    delete?: ReviewItemWhereUniqueInput | ReviewItemWhereUniqueInput[]
    connect?: ReviewItemWhereUniqueInput | ReviewItemWhereUniqueInput[]
    update?: ReviewItemUpdateWithWhereUniqueWithoutKnowledgeItemInput | ReviewItemUpdateWithWhereUniqueWithoutKnowledgeItemInput[]
    updateMany?: ReviewItemUpdateManyWithWhereWithoutKnowledgeItemInput | ReviewItemUpdateManyWithWhereWithoutKnowledgeItemInput[]
    deleteMany?: ReviewItemScalarWhereInput | ReviewItemScalarWhereInput[]
  }

  export type ReviewItemUncheckedUpdateManyWithoutKnowledgeItemNestedInput = {
    create?: XOR<ReviewItemCreateWithoutKnowledgeItemInput, ReviewItemUncheckedCreateWithoutKnowledgeItemInput> | ReviewItemCreateWithoutKnowledgeItemInput[] | ReviewItemUncheckedCreateWithoutKnowledgeItemInput[]
    connectOrCreate?: ReviewItemCreateOrConnectWithoutKnowledgeItemInput | ReviewItemCreateOrConnectWithoutKnowledgeItemInput[]
    upsert?: ReviewItemUpsertWithWhereUniqueWithoutKnowledgeItemInput | ReviewItemUpsertWithWhereUniqueWithoutKnowledgeItemInput[]
    createMany?: ReviewItemCreateManyKnowledgeItemInputEnvelope
    set?: ReviewItemWhereUniqueInput | ReviewItemWhereUniqueInput[]
    disconnect?: ReviewItemWhereUniqueInput | ReviewItemWhereUniqueInput[]
    delete?: ReviewItemWhereUniqueInput | ReviewItemWhereUniqueInput[]
    connect?: ReviewItemWhereUniqueInput | ReviewItemWhereUniqueInput[]
    update?: ReviewItemUpdateWithWhereUniqueWithoutKnowledgeItemInput | ReviewItemUpdateWithWhereUniqueWithoutKnowledgeItemInput[]
    updateMany?: ReviewItemUpdateManyWithWhereWithoutKnowledgeItemInput | ReviewItemUpdateManyWithWhereWithoutKnowledgeItemInput[]
    deleteMany?: ReviewItemScalarWhereInput | ReviewItemScalarWhereInput[]
  }

  export type KnowledgeItemCreateNestedOneWithoutReviewItemsInput = {
    create?: XOR<KnowledgeItemCreateWithoutReviewItemsInput, KnowledgeItemUncheckedCreateWithoutReviewItemsInput>
    connectOrCreate?: KnowledgeItemCreateOrConnectWithoutReviewItemsInput
    connect?: KnowledgeItemWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type KnowledgeItemUpdateOneRequiredWithoutReviewItemsNestedInput = {
    create?: XOR<KnowledgeItemCreateWithoutReviewItemsInput, KnowledgeItemUncheckedCreateWithoutReviewItemsInput>
    connectOrCreate?: KnowledgeItemCreateOrConnectWithoutReviewItemsInput
    upsert?: KnowledgeItemUpsertWithoutReviewItemsInput
    connect?: KnowledgeItemWhereUniqueInput
    update?: XOR<XOR<KnowledgeItemUpdateToOneWithWhereWithoutReviewItemsInput, KnowledgeItemUpdateWithoutReviewItemsInput>, KnowledgeItemUncheckedUpdateWithoutReviewItemsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ReviewItemCreateWithoutKnowledgeItemInput = {
    id?: string
    dueDate: Date | string
    status?: string
    difficulty?: string
    completedAt?: Date | string | null
  }

  export type ReviewItemUncheckedCreateWithoutKnowledgeItemInput = {
    id?: string
    dueDate: Date | string
    status?: string
    difficulty?: string
    completedAt?: Date | string | null
  }

  export type ReviewItemCreateOrConnectWithoutKnowledgeItemInput = {
    where: ReviewItemWhereUniqueInput
    create: XOR<ReviewItemCreateWithoutKnowledgeItemInput, ReviewItemUncheckedCreateWithoutKnowledgeItemInput>
  }

  export type ReviewItemCreateManyKnowledgeItemInputEnvelope = {
    data: ReviewItemCreateManyKnowledgeItemInput | ReviewItemCreateManyKnowledgeItemInput[]
  }

  export type ReviewItemUpsertWithWhereUniqueWithoutKnowledgeItemInput = {
    where: ReviewItemWhereUniqueInput
    update: XOR<ReviewItemUpdateWithoutKnowledgeItemInput, ReviewItemUncheckedUpdateWithoutKnowledgeItemInput>
    create: XOR<ReviewItemCreateWithoutKnowledgeItemInput, ReviewItemUncheckedCreateWithoutKnowledgeItemInput>
  }

  export type ReviewItemUpdateWithWhereUniqueWithoutKnowledgeItemInput = {
    where: ReviewItemWhereUniqueInput
    data: XOR<ReviewItemUpdateWithoutKnowledgeItemInput, ReviewItemUncheckedUpdateWithoutKnowledgeItemInput>
  }

  export type ReviewItemUpdateManyWithWhereWithoutKnowledgeItemInput = {
    where: ReviewItemScalarWhereInput
    data: XOR<ReviewItemUpdateManyMutationInput, ReviewItemUncheckedUpdateManyWithoutKnowledgeItemInput>
  }

  export type ReviewItemScalarWhereInput = {
    AND?: ReviewItemScalarWhereInput | ReviewItemScalarWhereInput[]
    OR?: ReviewItemScalarWhereInput[]
    NOT?: ReviewItemScalarWhereInput | ReviewItemScalarWhereInput[]
    id?: StringFilter<"ReviewItem"> | string
    knowledgeItemId?: StringFilter<"ReviewItem"> | string
    dueDate?: DateTimeFilter<"ReviewItem"> | Date | string
    status?: StringFilter<"ReviewItem"> | string
    difficulty?: StringFilter<"ReviewItem"> | string
    completedAt?: DateTimeNullableFilter<"ReviewItem"> | Date | string | null
  }

  export type KnowledgeItemCreateWithoutReviewItemsInput = {
    id?: string
    title: string
    category: string
    sourceType: string
    sourceUrl?: string
    originalText?: string
    coreThesis?: string
    oneThingToRemember?: string
    keyPoints?: string
    terms?: string
    examples?: string
    application?: string
    mistakes?: string
    selfTestQuestions?: string
    flashcards?: string
    fullAiOutput?: string
    tags?: string
    favorite?: boolean
    reviewStatus?: string
    relatedTopics?: string
    relatedItemIds?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KnowledgeItemUncheckedCreateWithoutReviewItemsInput = {
    id?: string
    title: string
    category: string
    sourceType: string
    sourceUrl?: string
    originalText?: string
    coreThesis?: string
    oneThingToRemember?: string
    keyPoints?: string
    terms?: string
    examples?: string
    application?: string
    mistakes?: string
    selfTestQuestions?: string
    flashcards?: string
    fullAiOutput?: string
    tags?: string
    favorite?: boolean
    reviewStatus?: string
    relatedTopics?: string
    relatedItemIds?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KnowledgeItemCreateOrConnectWithoutReviewItemsInput = {
    where: KnowledgeItemWhereUniqueInput
    create: XOR<KnowledgeItemCreateWithoutReviewItemsInput, KnowledgeItemUncheckedCreateWithoutReviewItemsInput>
  }

  export type KnowledgeItemUpsertWithoutReviewItemsInput = {
    update: XOR<KnowledgeItemUpdateWithoutReviewItemsInput, KnowledgeItemUncheckedUpdateWithoutReviewItemsInput>
    create: XOR<KnowledgeItemCreateWithoutReviewItemsInput, KnowledgeItemUncheckedCreateWithoutReviewItemsInput>
    where?: KnowledgeItemWhereInput
  }

  export type KnowledgeItemUpdateToOneWithWhereWithoutReviewItemsInput = {
    where?: KnowledgeItemWhereInput
    data: XOR<KnowledgeItemUpdateWithoutReviewItemsInput, KnowledgeItemUncheckedUpdateWithoutReviewItemsInput>
  }

  export type KnowledgeItemUpdateWithoutReviewItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    originalText?: StringFieldUpdateOperationsInput | string
    coreThesis?: StringFieldUpdateOperationsInput | string
    oneThingToRemember?: StringFieldUpdateOperationsInput | string
    keyPoints?: StringFieldUpdateOperationsInput | string
    terms?: StringFieldUpdateOperationsInput | string
    examples?: StringFieldUpdateOperationsInput | string
    application?: StringFieldUpdateOperationsInput | string
    mistakes?: StringFieldUpdateOperationsInput | string
    selfTestQuestions?: StringFieldUpdateOperationsInput | string
    flashcards?: StringFieldUpdateOperationsInput | string
    fullAiOutput?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    reviewStatus?: StringFieldUpdateOperationsInput | string
    relatedTopics?: StringFieldUpdateOperationsInput | string
    relatedItemIds?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeItemUncheckedUpdateWithoutReviewItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    originalText?: StringFieldUpdateOperationsInput | string
    coreThesis?: StringFieldUpdateOperationsInput | string
    oneThingToRemember?: StringFieldUpdateOperationsInput | string
    keyPoints?: StringFieldUpdateOperationsInput | string
    terms?: StringFieldUpdateOperationsInput | string
    examples?: StringFieldUpdateOperationsInput | string
    application?: StringFieldUpdateOperationsInput | string
    mistakes?: StringFieldUpdateOperationsInput | string
    selfTestQuestions?: StringFieldUpdateOperationsInput | string
    flashcards?: StringFieldUpdateOperationsInput | string
    fullAiOutput?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    reviewStatus?: StringFieldUpdateOperationsInput | string
    relatedTopics?: StringFieldUpdateOperationsInput | string
    relatedItemIds?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewItemCreateManyKnowledgeItemInput = {
    id?: string
    dueDate: Date | string
    status?: string
    difficulty?: string
    completedAt?: Date | string | null
  }

  export type ReviewItemUpdateWithoutKnowledgeItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewItemUncheckedUpdateWithoutKnowledgeItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewItemUncheckedUpdateManyWithoutKnowledgeItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use KnowledgeItemCountOutputTypeDefaultArgs instead
     */
    export type KnowledgeItemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KnowledgeItemCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NewsItemDefaultArgs instead
     */
    export type NewsItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NewsItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KnowledgeItemDefaultArgs instead
     */
    export type KnowledgeItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KnowledgeItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReviewItemDefaultArgs instead
     */
    export type ReviewItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReviewItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SettingsDefaultArgs instead
     */
    export type SettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SettingsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReadingItemDefaultArgs instead
     */
    export type ReadingItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReadingItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActionItemDefaultArgs instead
     */
    export type ActionItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActionItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DailyReviewDefaultArgs instead
     */
    export type DailyReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DailyReviewDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}