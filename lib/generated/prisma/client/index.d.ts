
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Lab
 * 
 */
export type Lab = $Result.DefaultSelection<Prisma.$LabPayload>
/**
 * Model LabInstance
 * 
 */
export type LabInstance = $Result.DefaultSelection<Prisma.$LabInstancePayload>
/**
 * Model FlagSubmission
 * 
 */
export type FlagSubmission = $Result.DefaultSelection<Prisma.$FlagSubmissionPayload>
/**
 * Model Scenario
 * 
 */
export type Scenario = $Result.DefaultSelection<Prisma.$ScenarioPayload>
/**
 * Model Simulation
 * 
 */
export type Simulation = $Result.DefaultSelection<Prisma.$SimulationPayload>
/**
 * Model SimulationStep
 * 
 */
export type SimulationStep = $Result.DefaultSelection<Prisma.$SimulationStepPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model LearningTopic
 * 
 */
export type LearningTopic = $Result.DefaultSelection<Prisma.$LearningTopicPayload>
/**
 * Model UserProgress
 * 
 */
export type UserProgress = $Result.DefaultSelection<Prisma.$UserProgressPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  STUDENT: 'STUDENT',
  INSTRUCTOR: 'INSTRUCTOR',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const LabCategory: {
  WEB_ATTACKS: 'WEB_ATTACKS',
  NETWORK_ATTACKS: 'NETWORK_ATTACKS',
  APPLICATION_ATTACKS: 'APPLICATION_ATTACKS',
  PRIVILEGE_ESCALATION: 'PRIVILEGE_ESCALATION',
  GHANA_FOCUS: 'GHANA_FOCUS',
  OTHER: 'OTHER'
};

export type LabCategory = (typeof LabCategory)[keyof typeof LabCategory]


export const LabAccessType: {
  WEB_TERMINAL: 'WEB_TERMINAL',
  SSH: 'SSH',
  HTTP: 'HTTP',
  GUI: 'GUI'
};

export type LabAccessType = (typeof LabAccessType)[keyof typeof LabAccessType]


export const LabInstanceStatus: {
  PENDING: 'PENDING',
  PROVISIONING: 'PROVISIONING',
  READY: 'READY',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  EXPIRED: 'EXPIRED',
  STOPPED: 'STOPPED'
};

export type LabInstanceStatus = (typeof LabInstanceStatus)[keyof typeof LabInstanceStatus]


export const ScenarioDifficulty: {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

export type ScenarioDifficulty = (typeof ScenarioDifficulty)[keyof typeof ScenarioDifficulty]


export const ScenarioCategory: {
  SOCIAL_ENGINEERING: 'SOCIAL_ENGINEERING',
  MALWARE: 'MALWARE',
  WEB_ATTACKS: 'WEB_ATTACKS',
  NETWORK_ATTACKS: 'NETWORK_ATTACKS',
  APPLICATION_ATTACKS: 'APPLICATION_ATTACKS',
  WIRELESS_ATTACKS: 'WIRELESS_ATTACKS',
  OTHER: 'OTHER'
};

export type ScenarioCategory = (typeof ScenarioCategory)[keyof typeof ScenarioCategory]


export const SimulationStatus: {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  ABANDONED: 'ABANDONED'
};

export type SimulationStatus = (typeof SimulationStatus)[keyof typeof SimulationStatus]


export const LearningLevel: {
  CORE: 'CORE',
  TECHNICAL: 'TECHNICAL',
  ADVANCED: 'ADVANCED',
  GHANA_FOCUS: 'GHANA_FOCUS'
};

export type LearningLevel = (typeof LearningLevel)[keyof typeof LearningLevel]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type LabCategory = $Enums.LabCategory

export const LabCategory: typeof $Enums.LabCategory

export type LabAccessType = $Enums.LabAccessType

export const LabAccessType: typeof $Enums.LabAccessType

export type LabInstanceStatus = $Enums.LabInstanceStatus

export const LabInstanceStatus: typeof $Enums.LabInstanceStatus

export type ScenarioDifficulty = $Enums.ScenarioDifficulty

export const ScenarioDifficulty: typeof $Enums.ScenarioDifficulty

export type ScenarioCategory = $Enums.ScenarioCategory

export const ScenarioCategory: typeof $Enums.ScenarioCategory

export type SimulationStatus = $Enums.SimulationStatus

export const SimulationStatus: typeof $Enums.SimulationStatus

export type LearningLevel = $Enums.LearningLevel

export const LearningLevel: typeof $Enums.LearningLevel

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lab`: Exposes CRUD operations for the **Lab** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Labs
    * const labs = await prisma.lab.findMany()
    * ```
    */
  get lab(): Prisma.LabDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.labInstance`: Exposes CRUD operations for the **LabInstance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LabInstances
    * const labInstances = await prisma.labInstance.findMany()
    * ```
    */
  get labInstance(): Prisma.LabInstanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flagSubmission`: Exposes CRUD operations for the **FlagSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlagSubmissions
    * const flagSubmissions = await prisma.flagSubmission.findMany()
    * ```
    */
  get flagSubmission(): Prisma.FlagSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scenario`: Exposes CRUD operations for the **Scenario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scenarios
    * const scenarios = await prisma.scenario.findMany()
    * ```
    */
  get scenario(): Prisma.ScenarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.simulation`: Exposes CRUD operations for the **Simulation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Simulations
    * const simulations = await prisma.simulation.findMany()
    * ```
    */
  get simulation(): Prisma.SimulationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.simulationStep`: Exposes CRUD operations for the **SimulationStep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SimulationSteps
    * const simulationSteps = await prisma.simulationStep.findMany()
    * ```
    */
  get simulationStep(): Prisma.SimulationStepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.learningTopic`: Exposes CRUD operations for the **LearningTopic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LearningTopics
    * const learningTopics = await prisma.learningTopic.findMany()
    * ```
    */
  get learningTopic(): Prisma.LearningTopicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProgress`: Exposes CRUD operations for the **UserProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProgresses
    * const userProgresses = await prisma.userProgress.findMany()
    * ```
    */
  get userProgress(): Prisma.UserProgressDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Lab: 'Lab',
    LabInstance: 'LabInstance',
    FlagSubmission: 'FlagSubmission',
    Scenario: 'Scenario',
    Simulation: 'Simulation',
    SimulationStep: 'SimulationStep',
    Report: 'Report',
    LearningTopic: 'LearningTopic',
    UserProgress: 'UserProgress'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "lab" | "labInstance" | "flagSubmission" | "scenario" | "simulation" | "simulationStep" | "report" | "learningTopic" | "userProgress"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Lab: {
        payload: Prisma.$LabPayload<ExtArgs>
        fields: Prisma.LabFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LabFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LabFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload>
          }
          findFirst: {
            args: Prisma.LabFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LabFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload>
          }
          findMany: {
            args: Prisma.LabFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload>[]
          }
          create: {
            args: Prisma.LabCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload>
          }
          createMany: {
            args: Prisma.LabCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LabCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload>[]
          }
          delete: {
            args: Prisma.LabDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload>
          }
          update: {
            args: Prisma.LabUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload>
          }
          deleteMany: {
            args: Prisma.LabDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LabUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LabUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload>[]
          }
          upsert: {
            args: Prisma.LabUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload>
          }
          aggregate: {
            args: Prisma.LabAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLab>
          }
          groupBy: {
            args: Prisma.LabGroupByArgs<ExtArgs>
            result: $Utils.Optional<LabGroupByOutputType>[]
          }
          count: {
            args: Prisma.LabCountArgs<ExtArgs>
            result: $Utils.Optional<LabCountAggregateOutputType> | number
          }
        }
      }
      LabInstance: {
        payload: Prisma.$LabInstancePayload<ExtArgs>
        fields: Prisma.LabInstanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LabInstanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabInstancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LabInstanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabInstancePayload>
          }
          findFirst: {
            args: Prisma.LabInstanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabInstancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LabInstanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabInstancePayload>
          }
          findMany: {
            args: Prisma.LabInstanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabInstancePayload>[]
          }
          create: {
            args: Prisma.LabInstanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabInstancePayload>
          }
          createMany: {
            args: Prisma.LabInstanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LabInstanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabInstancePayload>[]
          }
          delete: {
            args: Prisma.LabInstanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabInstancePayload>
          }
          update: {
            args: Prisma.LabInstanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabInstancePayload>
          }
          deleteMany: {
            args: Prisma.LabInstanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LabInstanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LabInstanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabInstancePayload>[]
          }
          upsert: {
            args: Prisma.LabInstanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabInstancePayload>
          }
          aggregate: {
            args: Prisma.LabInstanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLabInstance>
          }
          groupBy: {
            args: Prisma.LabInstanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<LabInstanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.LabInstanceCountArgs<ExtArgs>
            result: $Utils.Optional<LabInstanceCountAggregateOutputType> | number
          }
        }
      }
      FlagSubmission: {
        payload: Prisma.$FlagSubmissionPayload<ExtArgs>
        fields: Prisma.FlagSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlagSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlagSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagSubmissionPayload>
          }
          findFirst: {
            args: Prisma.FlagSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlagSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagSubmissionPayload>
          }
          findMany: {
            args: Prisma.FlagSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagSubmissionPayload>[]
          }
          create: {
            args: Prisma.FlagSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagSubmissionPayload>
          }
          createMany: {
            args: Prisma.FlagSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlagSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagSubmissionPayload>[]
          }
          delete: {
            args: Prisma.FlagSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagSubmissionPayload>
          }
          update: {
            args: Prisma.FlagSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.FlagSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlagSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlagSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.FlagSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagSubmissionPayload>
          }
          aggregate: {
            args: Prisma.FlagSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlagSubmission>
          }
          groupBy: {
            args: Prisma.FlagSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlagSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlagSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<FlagSubmissionCountAggregateOutputType> | number
          }
        }
      }
      Scenario: {
        payload: Prisma.$ScenarioPayload<ExtArgs>
        fields: Prisma.ScenarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScenarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScenarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          findFirst: {
            args: Prisma.ScenarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScenarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          findMany: {
            args: Prisma.ScenarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>[]
          }
          create: {
            args: Prisma.ScenarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          createMany: {
            args: Prisma.ScenarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScenarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>[]
          }
          delete: {
            args: Prisma.ScenarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          update: {
            args: Prisma.ScenarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          deleteMany: {
            args: Prisma.ScenarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScenarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScenarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>[]
          }
          upsert: {
            args: Prisma.ScenarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          aggregate: {
            args: Prisma.ScenarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScenario>
          }
          groupBy: {
            args: Prisma.ScenarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScenarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScenarioCountArgs<ExtArgs>
            result: $Utils.Optional<ScenarioCountAggregateOutputType> | number
          }
        }
      }
      Simulation: {
        payload: Prisma.$SimulationPayload<ExtArgs>
        fields: Prisma.SimulationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SimulationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SimulationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>
          }
          findFirst: {
            args: Prisma.SimulationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SimulationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>
          }
          findMany: {
            args: Prisma.SimulationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>[]
          }
          create: {
            args: Prisma.SimulationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>
          }
          createMany: {
            args: Prisma.SimulationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SimulationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>[]
          }
          delete: {
            args: Prisma.SimulationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>
          }
          update: {
            args: Prisma.SimulationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>
          }
          deleteMany: {
            args: Prisma.SimulationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SimulationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SimulationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>[]
          }
          upsert: {
            args: Prisma.SimulationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationPayload>
          }
          aggregate: {
            args: Prisma.SimulationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSimulation>
          }
          groupBy: {
            args: Prisma.SimulationGroupByArgs<ExtArgs>
            result: $Utils.Optional<SimulationGroupByOutputType>[]
          }
          count: {
            args: Prisma.SimulationCountArgs<ExtArgs>
            result: $Utils.Optional<SimulationCountAggregateOutputType> | number
          }
        }
      }
      SimulationStep: {
        payload: Prisma.$SimulationStepPayload<ExtArgs>
        fields: Prisma.SimulationStepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SimulationStepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationStepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SimulationStepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationStepPayload>
          }
          findFirst: {
            args: Prisma.SimulationStepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationStepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SimulationStepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationStepPayload>
          }
          findMany: {
            args: Prisma.SimulationStepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationStepPayload>[]
          }
          create: {
            args: Prisma.SimulationStepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationStepPayload>
          }
          createMany: {
            args: Prisma.SimulationStepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SimulationStepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationStepPayload>[]
          }
          delete: {
            args: Prisma.SimulationStepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationStepPayload>
          }
          update: {
            args: Prisma.SimulationStepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationStepPayload>
          }
          deleteMany: {
            args: Prisma.SimulationStepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SimulationStepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SimulationStepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationStepPayload>[]
          }
          upsert: {
            args: Prisma.SimulationStepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimulationStepPayload>
          }
          aggregate: {
            args: Prisma.SimulationStepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSimulationStep>
          }
          groupBy: {
            args: Prisma.SimulationStepGroupByArgs<ExtArgs>
            result: $Utils.Optional<SimulationStepGroupByOutputType>[]
          }
          count: {
            args: Prisma.SimulationStepCountArgs<ExtArgs>
            result: $Utils.Optional<SimulationStepCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      LearningTopic: {
        payload: Prisma.$LearningTopicPayload<ExtArgs>
        fields: Prisma.LearningTopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LearningTopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningTopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LearningTopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningTopicPayload>
          }
          findFirst: {
            args: Prisma.LearningTopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningTopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LearningTopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningTopicPayload>
          }
          findMany: {
            args: Prisma.LearningTopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningTopicPayload>[]
          }
          create: {
            args: Prisma.LearningTopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningTopicPayload>
          }
          createMany: {
            args: Prisma.LearningTopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LearningTopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningTopicPayload>[]
          }
          delete: {
            args: Prisma.LearningTopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningTopicPayload>
          }
          update: {
            args: Prisma.LearningTopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningTopicPayload>
          }
          deleteMany: {
            args: Prisma.LearningTopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LearningTopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LearningTopicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningTopicPayload>[]
          }
          upsert: {
            args: Prisma.LearningTopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningTopicPayload>
          }
          aggregate: {
            args: Prisma.LearningTopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLearningTopic>
          }
          groupBy: {
            args: Prisma.LearningTopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<LearningTopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.LearningTopicCountArgs<ExtArgs>
            result: $Utils.Optional<LearningTopicCountAggregateOutputType> | number
          }
        }
      }
      UserProgress: {
        payload: Prisma.$UserProgressPayload<ExtArgs>
        fields: Prisma.UserProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload>
          }
          findFirst: {
            args: Prisma.UserProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload>
          }
          findMany: {
            args: Prisma.UserProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload>[]
          }
          create: {
            args: Prisma.UserProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload>
          }
          createMany: {
            args: Prisma.UserProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload>[]
          }
          delete: {
            args: Prisma.UserProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload>
          }
          update: {
            args: Prisma.UserProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload>
          }
          deleteMany: {
            args: Prisma.UserProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload>[]
          }
          upsert: {
            args: Prisma.UserProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProgressPayload>
          }
          aggregate: {
            args: Prisma.UserProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProgress>
          }
          groupBy: {
            args: Prisma.UserProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProgressCountArgs<ExtArgs>
            result: $Utils.Optional<UserProgressCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    lab?: LabOmit
    labInstance?: LabInstanceOmit
    flagSubmission?: FlagSubmissionOmit
    scenario?: ScenarioOmit
    simulation?: SimulationOmit
    simulationStep?: SimulationStepOmit
    report?: ReportOmit
    learningTopic?: LearningTopicOmit
    userProgress?: UserProgressOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    reports: number
    simulations: number
    labInstances: number
    progress: number
    flagSubmissions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reports?: boolean | UserCountOutputTypeCountReportsArgs
    simulations?: boolean | UserCountOutputTypeCountSimulationsArgs
    labInstances?: boolean | UserCountOutputTypeCountLabInstancesArgs
    progress?: boolean | UserCountOutputTypeCountProgressArgs
    flagSubmissions?: boolean | UserCountOutputTypeCountFlagSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSimulationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SimulationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLabInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabInstanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFlagSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlagSubmissionWhereInput
  }


  /**
   * Count Type LabCountOutputType
   */

  export type LabCountOutputType = {
    instances: number
  }

  export type LabCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instances?: boolean | LabCountOutputTypeCountInstancesArgs
  }

  // Custom InputTypes
  /**
   * LabCountOutputType without action
   */
  export type LabCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabCountOutputType
     */
    select?: LabCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LabCountOutputType without action
   */
  export type LabCountOutputTypeCountInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabInstanceWhereInput
  }


  /**
   * Count Type LabInstanceCountOutputType
   */

  export type LabInstanceCountOutputType = {
    submissions: number
  }

  export type LabInstanceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | LabInstanceCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * LabInstanceCountOutputType without action
   */
  export type LabInstanceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabInstanceCountOutputType
     */
    select?: LabInstanceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LabInstanceCountOutputType without action
   */
  export type LabInstanceCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlagSubmissionWhereInput
  }


  /**
   * Count Type ScenarioCountOutputType
   */

  export type ScenarioCountOutputType = {
    simulations: number
  }

  export type ScenarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simulations?: boolean | ScenarioCountOutputTypeCountSimulationsArgs
  }

  // Custom InputTypes
  /**
   * ScenarioCountOutputType without action
   */
  export type ScenarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioCountOutputType
     */
    select?: ScenarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScenarioCountOutputType without action
   */
  export type ScenarioCountOutputTypeCountSimulationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SimulationWhereInput
  }


  /**
   * Count Type SimulationCountOutputType
   */

  export type SimulationCountOutputType = {
    steps: number
  }

  export type SimulationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    steps?: boolean | SimulationCountOutputTypeCountStepsArgs
  }

  // Custom InputTypes
  /**
   * SimulationCountOutputType without action
   */
  export type SimulationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimulationCountOutputType
     */
    select?: SimulationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SimulationCountOutputType without action
   */
  export type SimulationCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SimulationStepWhereInput
  }


  /**
   * Count Type LearningTopicCountOutputType
   */

  export type LearningTopicCountOutputType = {
    progress: number
  }

  export type LearningTopicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progress?: boolean | LearningTopicCountOutputTypeCountProgressArgs
  }

  // Custom InputTypes
  /**
   * LearningTopicCountOutputType without action
   */
  export type LearningTopicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningTopicCountOutputType
     */
    select?: LearningTopicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LearningTopicCountOutputType without action
   */
  export type LearningTopicCountOutputTypeCountProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProgressWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    totalScore: number | null
    rank: number | null
    accuracy: number | null
  }

  export type UserSumAggregateOutputType = {
    totalScore: number | null
    rank: number | null
    accuracy: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: $Enums.UserRole | null
    skillLevel: string | null
    totalScore: number | null
    rank: number | null
    accuracy: number | null
    trend: string | null
    createdAt: Date | null
    updatedAt: Date | null
    notificationsEnabled: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: $Enums.UserRole | null
    skillLevel: string | null
    totalScore: number | null
    rank: number | null
    accuracy: number | null
    trend: string | null
    createdAt: Date | null
    updatedAt: Date | null
    notificationsEnabled: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    skillLevel: number
    totalScore: number
    rank: number
    accuracy: number
    trend: number
    createdAt: number
    updatedAt: number
    notificationsEnabled: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    totalScore?: true
    rank?: true
    accuracy?: true
  }

  export type UserSumAggregateInputType = {
    totalScore?: true
    rank?: true
    accuracy?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    skillLevel?: true
    totalScore?: true
    rank?: true
    accuracy?: true
    trend?: true
    createdAt?: true
    updatedAt?: true
    notificationsEnabled?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    skillLevel?: true
    totalScore?: true
    rank?: true
    accuracy?: true
    trend?: true
    createdAt?: true
    updatedAt?: true
    notificationsEnabled?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    skillLevel?: true
    totalScore?: true
    rank?: true
    accuracy?: true
    trend?: true
    createdAt?: true
    updatedAt?: true
    notificationsEnabled?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    role: $Enums.UserRole
    skillLevel: string
    totalScore: number
    rank: number | null
    accuracy: number
    trend: string | null
    createdAt: Date
    updatedAt: Date
    notificationsEnabled: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    skillLevel?: boolean
    totalScore?: boolean
    rank?: boolean
    accuracy?: boolean
    trend?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notificationsEnabled?: boolean
    reports?: boolean | User$reportsArgs<ExtArgs>
    simulations?: boolean | User$simulationsArgs<ExtArgs>
    labInstances?: boolean | User$labInstancesArgs<ExtArgs>
    progress?: boolean | User$progressArgs<ExtArgs>
    flagSubmissions?: boolean | User$flagSubmissionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    skillLevel?: boolean
    totalScore?: boolean
    rank?: boolean
    accuracy?: boolean
    trend?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notificationsEnabled?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    skillLevel?: boolean
    totalScore?: boolean
    rank?: boolean
    accuracy?: boolean
    trend?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notificationsEnabled?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    skillLevel?: boolean
    totalScore?: boolean
    rank?: boolean
    accuracy?: boolean
    trend?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notificationsEnabled?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "role" | "skillLevel" | "totalScore" | "rank" | "accuracy" | "trend" | "createdAt" | "updatedAt" | "notificationsEnabled", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reports?: boolean | User$reportsArgs<ExtArgs>
    simulations?: boolean | User$simulationsArgs<ExtArgs>
    labInstances?: boolean | User$labInstancesArgs<ExtArgs>
    progress?: boolean | User$progressArgs<ExtArgs>
    flagSubmissions?: boolean | User$flagSubmissionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      reports: Prisma.$ReportPayload<ExtArgs>[]
      simulations: Prisma.$SimulationPayload<ExtArgs>[]
      labInstances: Prisma.$LabInstancePayload<ExtArgs>[]
      progress: Prisma.$UserProgressPayload<ExtArgs>[]
      flagSubmissions: Prisma.$FlagSubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      role: $Enums.UserRole
      skillLevel: string
      totalScore: number
      rank: number | null
      accuracy: number
      trend: string | null
      createdAt: Date
      updatedAt: Date
      notificationsEnabled: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reports<T extends User$reportsArgs<ExtArgs> = {}>(args?: Subset<T, User$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    simulations<T extends User$simulationsArgs<ExtArgs> = {}>(args?: Subset<T, User$simulationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    labInstances<T extends User$labInstancesArgs<ExtArgs> = {}>(args?: Subset<T, User$labInstancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabInstancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progress<T extends User$progressArgs<ExtArgs> = {}>(args?: Subset<T, User$progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flagSubmissions<T extends User$flagSubmissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$flagSubmissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlagSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly skillLevel: FieldRef<"User", 'String'>
    readonly totalScore: FieldRef<"User", 'Int'>
    readonly rank: FieldRef<"User", 'Int'>
    readonly accuracy: FieldRef<"User", 'Float'>
    readonly trend: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly notificationsEnabled: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.reports
   */
  export type User$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * User.simulations
   */
  export type User$simulationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null
    where?: SimulationWhereInput
    orderBy?: SimulationOrderByWithRelationInput | SimulationOrderByWithRelationInput[]
    cursor?: SimulationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SimulationScalarFieldEnum | SimulationScalarFieldEnum[]
  }

  /**
   * User.labInstances
   */
  export type User$labInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabInstance
     */
    select?: LabInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabInstance
     */
    omit?: LabInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInstanceInclude<ExtArgs> | null
    where?: LabInstanceWhereInput
    orderBy?: LabInstanceOrderByWithRelationInput | LabInstanceOrderByWithRelationInput[]
    cursor?: LabInstanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabInstanceScalarFieldEnum | LabInstanceScalarFieldEnum[]
  }

  /**
   * User.progress
   */
  export type User$progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgress
     */
    omit?: UserProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null
    where?: UserProgressWhereInput
    orderBy?: UserProgressOrderByWithRelationInput | UserProgressOrderByWithRelationInput[]
    cursor?: UserProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserProgressScalarFieldEnum | UserProgressScalarFieldEnum[]
  }

  /**
   * User.flagSubmissions
   */
  export type User$flagSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlagSubmission
     */
    select?: FlagSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlagSubmission
     */
    omit?: FlagSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagSubmissionInclude<ExtArgs> | null
    where?: FlagSubmissionWhereInput
    orderBy?: FlagSubmissionOrderByWithRelationInput | FlagSubmissionOrderByWithRelationInput[]
    cursor?: FlagSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlagSubmissionScalarFieldEnum | FlagSubmissionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Lab
   */

  export type AggregateLab = {
    _count: LabCountAggregateOutputType | null
    _avg: LabAvgAggregateOutputType | null
    _sum: LabSumAggregateOutputType | null
    _min: LabMinAggregateOutputType | null
    _max: LabMaxAggregateOutputType | null
  }

  export type LabAvgAggregateOutputType = {
    timeEstimate: number | null
    points: number | null
    maxDurationMin: number | null
  }

  export type LabSumAggregateOutputType = {
    timeEstimate: number | null
    points: number | null
    maxDurationMin: number | null
  }

  export type LabMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    description: string | null
    category: string | null
    difficulty: $Enums.ScenarioDifficulty | null
    timeEstimate: number | null
    risk: string | null
    dockerImage: string | null
    flagHash: string | null
    points: number | null
    accessType: $Enums.LabAccessType | null
    maxDurationMin: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LabMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    description: string | null
    category: string | null
    difficulty: $Enums.ScenarioDifficulty | null
    timeEstimate: number | null
    risk: string | null
    dockerImage: string | null
    flagHash: string | null
    points: number | null
    accessType: $Enums.LabAccessType | null
    maxDurationMin: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LabCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    description: number
    category: number
    difficulty: number
    timeEstimate: number
    skills: number
    risk: number
    dockerImage: number
    flagHash: number
    points: number
    accessType: number
    maxDurationMin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LabAvgAggregateInputType = {
    timeEstimate?: true
    points?: true
    maxDurationMin?: true
  }

  export type LabSumAggregateInputType = {
    timeEstimate?: true
    points?: true
    maxDurationMin?: true
  }

  export type LabMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    category?: true
    difficulty?: true
    timeEstimate?: true
    risk?: true
    dockerImage?: true
    flagHash?: true
    points?: true
    accessType?: true
    maxDurationMin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LabMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    category?: true
    difficulty?: true
    timeEstimate?: true
    risk?: true
    dockerImage?: true
    flagHash?: true
    points?: true
    accessType?: true
    maxDurationMin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LabCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    category?: true
    difficulty?: true
    timeEstimate?: true
    skills?: true
    risk?: true
    dockerImage?: true
    flagHash?: true
    points?: true
    accessType?: true
    maxDurationMin?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LabAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lab to aggregate.
     */
    where?: LabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labs to fetch.
     */
    orderBy?: LabOrderByWithRelationInput | LabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Labs
    **/
    _count?: true | LabCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LabAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LabSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LabMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LabMaxAggregateInputType
  }

  export type GetLabAggregateType<T extends LabAggregateArgs> = {
        [P in keyof T & keyof AggregateLab]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLab[P]>
      : GetScalarType<T[P], AggregateLab[P]>
  }




  export type LabGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabWhereInput
    orderBy?: LabOrderByWithAggregationInput | LabOrderByWithAggregationInput[]
    by: LabScalarFieldEnum[] | LabScalarFieldEnum
    having?: LabScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LabCountAggregateInputType | true
    _avg?: LabAvgAggregateInputType
    _sum?: LabSumAggregateInputType
    _min?: LabMinAggregateInputType
    _max?: LabMaxAggregateInputType
  }

  export type LabGroupByOutputType = {
    id: string
    slug: string
    title: string
    description: string
    category: string
    difficulty: $Enums.ScenarioDifficulty
    timeEstimate: number
    skills: string[]
    risk: string
    dockerImage: string
    flagHash: string
    points: number
    accessType: $Enums.LabAccessType
    maxDurationMin: number
    createdAt: Date
    updatedAt: Date
    _count: LabCountAggregateOutputType | null
    _avg: LabAvgAggregateOutputType | null
    _sum: LabSumAggregateOutputType | null
    _min: LabMinAggregateOutputType | null
    _max: LabMaxAggregateOutputType | null
  }

  type GetLabGroupByPayload<T extends LabGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LabGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LabGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LabGroupByOutputType[P]>
            : GetScalarType<T[P], LabGroupByOutputType[P]>
        }
      >
    >


  export type LabSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    difficulty?: boolean
    timeEstimate?: boolean
    skills?: boolean
    risk?: boolean
    dockerImage?: boolean
    flagHash?: boolean
    points?: boolean
    accessType?: boolean
    maxDurationMin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instances?: boolean | Lab$instancesArgs<ExtArgs>
    _count?: boolean | LabCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lab"]>

  export type LabSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    difficulty?: boolean
    timeEstimate?: boolean
    skills?: boolean
    risk?: boolean
    dockerImage?: boolean
    flagHash?: boolean
    points?: boolean
    accessType?: boolean
    maxDurationMin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["lab"]>

  export type LabSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    difficulty?: boolean
    timeEstimate?: boolean
    skills?: boolean
    risk?: boolean
    dockerImage?: boolean
    flagHash?: boolean
    points?: boolean
    accessType?: boolean
    maxDurationMin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["lab"]>

  export type LabSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    difficulty?: boolean
    timeEstimate?: boolean
    skills?: boolean
    risk?: boolean
    dockerImage?: boolean
    flagHash?: boolean
    points?: boolean
    accessType?: boolean
    maxDurationMin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LabOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "description" | "category" | "difficulty" | "timeEstimate" | "skills" | "risk" | "dockerImage" | "flagHash" | "points" | "accessType" | "maxDurationMin" | "createdAt" | "updatedAt", ExtArgs["result"]["lab"]>
  export type LabInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instances?: boolean | Lab$instancesArgs<ExtArgs>
    _count?: boolean | LabCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LabIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LabIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LabPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lab"
    objects: {
      instances: Prisma.$LabInstancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      description: string
      category: string
      difficulty: $Enums.ScenarioDifficulty
      timeEstimate: number
      skills: string[]
      risk: string
      dockerImage: string
      flagHash: string
      points: number
      accessType: $Enums.LabAccessType
      maxDurationMin: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lab"]>
    composites: {}
  }

  type LabGetPayload<S extends boolean | null | undefined | LabDefaultArgs> = $Result.GetResult<Prisma.$LabPayload, S>

  type LabCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LabFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LabCountAggregateInputType | true
    }

  export interface LabDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lab'], meta: { name: 'Lab' } }
    /**
     * Find zero or one Lab that matches the filter.
     * @param {LabFindUniqueArgs} args - Arguments to find a Lab
     * @example
     * // Get one Lab
     * const lab = await prisma.lab.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LabFindUniqueArgs>(args: SelectSubset<T, LabFindUniqueArgs<ExtArgs>>): Prisma__LabClient<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lab that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LabFindUniqueOrThrowArgs} args - Arguments to find a Lab
     * @example
     * // Get one Lab
     * const lab = await prisma.lab.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LabFindUniqueOrThrowArgs>(args: SelectSubset<T, LabFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LabClient<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lab that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabFindFirstArgs} args - Arguments to find a Lab
     * @example
     * // Get one Lab
     * const lab = await prisma.lab.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LabFindFirstArgs>(args?: SelectSubset<T, LabFindFirstArgs<ExtArgs>>): Prisma__LabClient<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lab that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabFindFirstOrThrowArgs} args - Arguments to find a Lab
     * @example
     * // Get one Lab
     * const lab = await prisma.lab.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LabFindFirstOrThrowArgs>(args?: SelectSubset<T, LabFindFirstOrThrowArgs<ExtArgs>>): Prisma__LabClient<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Labs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Labs
     * const labs = await prisma.lab.findMany()
     * 
     * // Get first 10 Labs
     * const labs = await prisma.lab.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const labWithIdOnly = await prisma.lab.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LabFindManyArgs>(args?: SelectSubset<T, LabFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lab.
     * @param {LabCreateArgs} args - Arguments to create a Lab.
     * @example
     * // Create one Lab
     * const Lab = await prisma.lab.create({
     *   data: {
     *     // ... data to create a Lab
     *   }
     * })
     * 
     */
    create<T extends LabCreateArgs>(args: SelectSubset<T, LabCreateArgs<ExtArgs>>): Prisma__LabClient<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Labs.
     * @param {LabCreateManyArgs} args - Arguments to create many Labs.
     * @example
     * // Create many Labs
     * const lab = await prisma.lab.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LabCreateManyArgs>(args?: SelectSubset<T, LabCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Labs and returns the data saved in the database.
     * @param {LabCreateManyAndReturnArgs} args - Arguments to create many Labs.
     * @example
     * // Create many Labs
     * const lab = await prisma.lab.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Labs and only return the `id`
     * const labWithIdOnly = await prisma.lab.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LabCreateManyAndReturnArgs>(args?: SelectSubset<T, LabCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lab.
     * @param {LabDeleteArgs} args - Arguments to delete one Lab.
     * @example
     * // Delete one Lab
     * const Lab = await prisma.lab.delete({
     *   where: {
     *     // ... filter to delete one Lab
     *   }
     * })
     * 
     */
    delete<T extends LabDeleteArgs>(args: SelectSubset<T, LabDeleteArgs<ExtArgs>>): Prisma__LabClient<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lab.
     * @param {LabUpdateArgs} args - Arguments to update one Lab.
     * @example
     * // Update one Lab
     * const lab = await prisma.lab.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LabUpdateArgs>(args: SelectSubset<T, LabUpdateArgs<ExtArgs>>): Prisma__LabClient<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Labs.
     * @param {LabDeleteManyArgs} args - Arguments to filter Labs to delete.
     * @example
     * // Delete a few Labs
     * const { count } = await prisma.lab.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LabDeleteManyArgs>(args?: SelectSubset<T, LabDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Labs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Labs
     * const lab = await prisma.lab.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LabUpdateManyArgs>(args: SelectSubset<T, LabUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Labs and returns the data updated in the database.
     * @param {LabUpdateManyAndReturnArgs} args - Arguments to update many Labs.
     * @example
     * // Update many Labs
     * const lab = await prisma.lab.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Labs and only return the `id`
     * const labWithIdOnly = await prisma.lab.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LabUpdateManyAndReturnArgs>(args: SelectSubset<T, LabUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lab.
     * @param {LabUpsertArgs} args - Arguments to update or create a Lab.
     * @example
     * // Update or create a Lab
     * const lab = await prisma.lab.upsert({
     *   create: {
     *     // ... data to create a Lab
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lab we want to update
     *   }
     * })
     */
    upsert<T extends LabUpsertArgs>(args: SelectSubset<T, LabUpsertArgs<ExtArgs>>): Prisma__LabClient<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Labs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabCountArgs} args - Arguments to filter Labs to count.
     * @example
     * // Count the number of Labs
     * const count = await prisma.lab.count({
     *   where: {
     *     // ... the filter for the Labs we want to count
     *   }
     * })
    **/
    count<T extends LabCountArgs>(
      args?: Subset<T, LabCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LabCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LabAggregateArgs>(args: Subset<T, LabAggregateArgs>): Prisma.PrismaPromise<GetLabAggregateType<T>>

    /**
     * Group by Lab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabGroupByArgs} args - Group by arguments.
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
      T extends LabGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LabGroupByArgs['orderBy'] }
        : { orderBy?: LabGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LabGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lab model
   */
  readonly fields: LabFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lab.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LabClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instances<T extends Lab$instancesArgs<ExtArgs> = {}>(args?: Subset<T, Lab$instancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabInstancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lab model
   */
  interface LabFieldRefs {
    readonly id: FieldRef<"Lab", 'String'>
    readonly slug: FieldRef<"Lab", 'String'>
    readonly title: FieldRef<"Lab", 'String'>
    readonly description: FieldRef<"Lab", 'String'>
    readonly category: FieldRef<"Lab", 'String'>
    readonly difficulty: FieldRef<"Lab", 'ScenarioDifficulty'>
    readonly timeEstimate: FieldRef<"Lab", 'Int'>
    readonly skills: FieldRef<"Lab", 'String[]'>
    readonly risk: FieldRef<"Lab", 'String'>
    readonly dockerImage: FieldRef<"Lab", 'String'>
    readonly flagHash: FieldRef<"Lab", 'String'>
    readonly points: FieldRef<"Lab", 'Int'>
    readonly accessType: FieldRef<"Lab", 'LabAccessType'>
    readonly maxDurationMin: FieldRef<"Lab", 'Int'>
    readonly createdAt: FieldRef<"Lab", 'DateTime'>
    readonly updatedAt: FieldRef<"Lab", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lab findUnique
   */
  export type LabFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    /**
     * Filter, which Lab to fetch.
     */
    where: LabWhereUniqueInput
  }

  /**
   * Lab findUniqueOrThrow
   */
  export type LabFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    /**
     * Filter, which Lab to fetch.
     */
    where: LabWhereUniqueInput
  }

  /**
   * Lab findFirst
   */
  export type LabFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    /**
     * Filter, which Lab to fetch.
     */
    where?: LabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labs to fetch.
     */
    orderBy?: LabOrderByWithRelationInput | LabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Labs.
     */
    cursor?: LabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Labs.
     */
    distinct?: LabScalarFieldEnum | LabScalarFieldEnum[]
  }

  /**
   * Lab findFirstOrThrow
   */
  export type LabFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    /**
     * Filter, which Lab to fetch.
     */
    where?: LabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labs to fetch.
     */
    orderBy?: LabOrderByWithRelationInput | LabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Labs.
     */
    cursor?: LabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Labs.
     */
    distinct?: LabScalarFieldEnum | LabScalarFieldEnum[]
  }

  /**
   * Lab findMany
   */
  export type LabFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    /**
     * Filter, which Labs to fetch.
     */
    where?: LabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labs to fetch.
     */
    orderBy?: LabOrderByWithRelationInput | LabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Labs.
     */
    cursor?: LabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Labs.
     */
    distinct?: LabScalarFieldEnum | LabScalarFieldEnum[]
  }

  /**
   * Lab create
   */
  export type LabCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    /**
     * The data needed to create a Lab.
     */
    data: XOR<LabCreateInput, LabUncheckedCreateInput>
  }

  /**
   * Lab createMany
   */
  export type LabCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Labs.
     */
    data: LabCreateManyInput | LabCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lab createManyAndReturn
   */
  export type LabCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * The data used to create many Labs.
     */
    data: LabCreateManyInput | LabCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lab update
   */
  export type LabUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    /**
     * The data needed to update a Lab.
     */
    data: XOR<LabUpdateInput, LabUncheckedUpdateInput>
    /**
     * Choose, which Lab to update.
     */
    where: LabWhereUniqueInput
  }

  /**
   * Lab updateMany
   */
  export type LabUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Labs.
     */
    data: XOR<LabUpdateManyMutationInput, LabUncheckedUpdateManyInput>
    /**
     * Filter which Labs to update
     */
    where?: LabWhereInput
    /**
     * Limit how many Labs to update.
     */
    limit?: number
  }

  /**
   * Lab updateManyAndReturn
   */
  export type LabUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * The data used to update Labs.
     */
    data: XOR<LabUpdateManyMutationInput, LabUncheckedUpdateManyInput>
    /**
     * Filter which Labs to update
     */
    where?: LabWhereInput
    /**
     * Limit how many Labs to update.
     */
    limit?: number
  }

  /**
   * Lab upsert
   */
  export type LabUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    /**
     * The filter to search for the Lab to update in case it exists.
     */
    where: LabWhereUniqueInput
    /**
     * In case the Lab found by the `where` argument doesn't exist, create a new Lab with this data.
     */
    create: XOR<LabCreateInput, LabUncheckedCreateInput>
    /**
     * In case the Lab was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LabUpdateInput, LabUncheckedUpdateInput>
  }

  /**
   * Lab delete
   */
  export type LabDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    /**
     * Filter which Lab to delete.
     */
    where: LabWhereUniqueInput
  }

  /**
   * Lab deleteMany
   */
  export type LabDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Labs to delete
     */
    where?: LabWhereInput
    /**
     * Limit how many Labs to delete.
     */
    limit?: number
  }

  /**
   * Lab.instances
   */
  export type Lab$instancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabInstance
     */
    select?: LabInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabInstance
     */
    omit?: LabInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInstanceInclude<ExtArgs> | null
    where?: LabInstanceWhereInput
    orderBy?: LabInstanceOrderByWithRelationInput | LabInstanceOrderByWithRelationInput[]
    cursor?: LabInstanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabInstanceScalarFieldEnum | LabInstanceScalarFieldEnum[]
  }

  /**
   * Lab without action
   */
  export type LabDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
  }


  /**
   * Model LabInstance
   */

  export type AggregateLabInstance = {
    _count: LabInstanceCountAggregateOutputType | null
    _avg: LabInstanceAvgAggregateOutputType | null
    _sum: LabInstanceSumAggregateOutputType | null
    _min: LabInstanceMinAggregateOutputType | null
    _max: LabInstanceMaxAggregateOutputType | null
  }

  export type LabInstanceAvgAggregateOutputType = {
    score: number | null
  }

  export type LabInstanceSumAggregateOutputType = {
    score: number | null
  }

  export type LabInstanceMinAggregateOutputType = {
    id: string | null
    labId: string | null
    userId: string | null
    status: $Enums.LabInstanceStatus | null
    externalId: string | null
    accessUrl: string | null
    startedAt: Date | null
    expiresAt: Date | null
    destroyedAt: Date | null
    score: number | null
    lastActivityAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LabInstanceMaxAggregateOutputType = {
    id: string | null
    labId: string | null
    userId: string | null
    status: $Enums.LabInstanceStatus | null
    externalId: string | null
    accessUrl: string | null
    startedAt: Date | null
    expiresAt: Date | null
    destroyedAt: Date | null
    score: number | null
    lastActivityAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LabInstanceCountAggregateOutputType = {
    id: number
    labId: number
    userId: number
    status: number
    externalId: number
    accessUrl: number
    startedAt: number
    expiresAt: number
    destroyedAt: number
    score: number
    lastActivityAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LabInstanceAvgAggregateInputType = {
    score?: true
  }

  export type LabInstanceSumAggregateInputType = {
    score?: true
  }

  export type LabInstanceMinAggregateInputType = {
    id?: true
    labId?: true
    userId?: true
    status?: true
    externalId?: true
    accessUrl?: true
    startedAt?: true
    expiresAt?: true
    destroyedAt?: true
    score?: true
    lastActivityAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LabInstanceMaxAggregateInputType = {
    id?: true
    labId?: true
    userId?: true
    status?: true
    externalId?: true
    accessUrl?: true
    startedAt?: true
    expiresAt?: true
    destroyedAt?: true
    score?: true
    lastActivityAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LabInstanceCountAggregateInputType = {
    id?: true
    labId?: true
    userId?: true
    status?: true
    externalId?: true
    accessUrl?: true
    startedAt?: true
    expiresAt?: true
    destroyedAt?: true
    score?: true
    lastActivityAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LabInstanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabInstance to aggregate.
     */
    where?: LabInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabInstances to fetch.
     */
    orderBy?: LabInstanceOrderByWithRelationInput | LabInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LabInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LabInstances
    **/
    _count?: true | LabInstanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LabInstanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LabInstanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LabInstanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LabInstanceMaxAggregateInputType
  }

  export type GetLabInstanceAggregateType<T extends LabInstanceAggregateArgs> = {
        [P in keyof T & keyof AggregateLabInstance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLabInstance[P]>
      : GetScalarType<T[P], AggregateLabInstance[P]>
  }




  export type LabInstanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabInstanceWhereInput
    orderBy?: LabInstanceOrderByWithAggregationInput | LabInstanceOrderByWithAggregationInput[]
    by: LabInstanceScalarFieldEnum[] | LabInstanceScalarFieldEnum
    having?: LabInstanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LabInstanceCountAggregateInputType | true
    _avg?: LabInstanceAvgAggregateInputType
    _sum?: LabInstanceSumAggregateInputType
    _min?: LabInstanceMinAggregateInputType
    _max?: LabInstanceMaxAggregateInputType
  }

  export type LabInstanceGroupByOutputType = {
    id: string
    labId: string
    userId: string
    status: $Enums.LabInstanceStatus
    externalId: string | null
    accessUrl: string | null
    startedAt: Date
    expiresAt: Date
    destroyedAt: Date | null
    score: number
    lastActivityAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: LabInstanceCountAggregateOutputType | null
    _avg: LabInstanceAvgAggregateOutputType | null
    _sum: LabInstanceSumAggregateOutputType | null
    _min: LabInstanceMinAggregateOutputType | null
    _max: LabInstanceMaxAggregateOutputType | null
  }

  type GetLabInstanceGroupByPayload<T extends LabInstanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LabInstanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LabInstanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LabInstanceGroupByOutputType[P]>
            : GetScalarType<T[P], LabInstanceGroupByOutputType[P]>
        }
      >
    >


  export type LabInstanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    labId?: boolean
    userId?: boolean
    status?: boolean
    externalId?: boolean
    accessUrl?: boolean
    startedAt?: boolean
    expiresAt?: boolean
    destroyedAt?: boolean
    score?: boolean
    lastActivityAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lab?: boolean | LabDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    submissions?: boolean | LabInstance$submissionsArgs<ExtArgs>
    _count?: boolean | LabInstanceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labInstance"]>

  export type LabInstanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    labId?: boolean
    userId?: boolean
    status?: boolean
    externalId?: boolean
    accessUrl?: boolean
    startedAt?: boolean
    expiresAt?: boolean
    destroyedAt?: boolean
    score?: boolean
    lastActivityAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lab?: boolean | LabDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labInstance"]>

  export type LabInstanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    labId?: boolean
    userId?: boolean
    status?: boolean
    externalId?: boolean
    accessUrl?: boolean
    startedAt?: boolean
    expiresAt?: boolean
    destroyedAt?: boolean
    score?: boolean
    lastActivityAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lab?: boolean | LabDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labInstance"]>

  export type LabInstanceSelectScalar = {
    id?: boolean
    labId?: boolean
    userId?: boolean
    status?: boolean
    externalId?: boolean
    accessUrl?: boolean
    startedAt?: boolean
    expiresAt?: boolean
    destroyedAt?: boolean
    score?: boolean
    lastActivityAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LabInstanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "labId" | "userId" | "status" | "externalId" | "accessUrl" | "startedAt" | "expiresAt" | "destroyedAt" | "score" | "lastActivityAt" | "createdAt" | "updatedAt", ExtArgs["result"]["labInstance"]>
  export type LabInstanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lab?: boolean | LabDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    submissions?: boolean | LabInstance$submissionsArgs<ExtArgs>
    _count?: boolean | LabInstanceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LabInstanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lab?: boolean | LabDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LabInstanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lab?: boolean | LabDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LabInstancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LabInstance"
    objects: {
      lab: Prisma.$LabPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      submissions: Prisma.$FlagSubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      labId: string
      userId: string
      status: $Enums.LabInstanceStatus
      externalId: string | null
      accessUrl: string | null
      startedAt: Date
      expiresAt: Date
      destroyedAt: Date | null
      score: number
      lastActivityAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["labInstance"]>
    composites: {}
  }

  type LabInstanceGetPayload<S extends boolean | null | undefined | LabInstanceDefaultArgs> = $Result.GetResult<Prisma.$LabInstancePayload, S>

  type LabInstanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LabInstanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LabInstanceCountAggregateInputType | true
    }

  export interface LabInstanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LabInstance'], meta: { name: 'LabInstance' } }
    /**
     * Find zero or one LabInstance that matches the filter.
     * @param {LabInstanceFindUniqueArgs} args - Arguments to find a LabInstance
     * @example
     * // Get one LabInstance
     * const labInstance = await prisma.labInstance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LabInstanceFindUniqueArgs>(args: SelectSubset<T, LabInstanceFindUniqueArgs<ExtArgs>>): Prisma__LabInstanceClient<$Result.GetResult<Prisma.$LabInstancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LabInstance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LabInstanceFindUniqueOrThrowArgs} args - Arguments to find a LabInstance
     * @example
     * // Get one LabInstance
     * const labInstance = await prisma.labInstance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LabInstanceFindUniqueOrThrowArgs>(args: SelectSubset<T, LabInstanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LabInstanceClient<$Result.GetResult<Prisma.$LabInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabInstance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabInstanceFindFirstArgs} args - Arguments to find a LabInstance
     * @example
     * // Get one LabInstance
     * const labInstance = await prisma.labInstance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LabInstanceFindFirstArgs>(args?: SelectSubset<T, LabInstanceFindFirstArgs<ExtArgs>>): Prisma__LabInstanceClient<$Result.GetResult<Prisma.$LabInstancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabInstance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabInstanceFindFirstOrThrowArgs} args - Arguments to find a LabInstance
     * @example
     * // Get one LabInstance
     * const labInstance = await prisma.labInstance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LabInstanceFindFirstOrThrowArgs>(args?: SelectSubset<T, LabInstanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__LabInstanceClient<$Result.GetResult<Prisma.$LabInstancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LabInstances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabInstanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LabInstances
     * const labInstances = await prisma.labInstance.findMany()
     * 
     * // Get first 10 LabInstances
     * const labInstances = await prisma.labInstance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const labInstanceWithIdOnly = await prisma.labInstance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LabInstanceFindManyArgs>(args?: SelectSubset<T, LabInstanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabInstancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LabInstance.
     * @param {LabInstanceCreateArgs} args - Arguments to create a LabInstance.
     * @example
     * // Create one LabInstance
     * const LabInstance = await prisma.labInstance.create({
     *   data: {
     *     // ... data to create a LabInstance
     *   }
     * })
     * 
     */
    create<T extends LabInstanceCreateArgs>(args: SelectSubset<T, LabInstanceCreateArgs<ExtArgs>>): Prisma__LabInstanceClient<$Result.GetResult<Prisma.$LabInstancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LabInstances.
     * @param {LabInstanceCreateManyArgs} args - Arguments to create many LabInstances.
     * @example
     * // Create many LabInstances
     * const labInstance = await prisma.labInstance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LabInstanceCreateManyArgs>(args?: SelectSubset<T, LabInstanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LabInstances and returns the data saved in the database.
     * @param {LabInstanceCreateManyAndReturnArgs} args - Arguments to create many LabInstances.
     * @example
     * // Create many LabInstances
     * const labInstance = await prisma.labInstance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LabInstances and only return the `id`
     * const labInstanceWithIdOnly = await prisma.labInstance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LabInstanceCreateManyAndReturnArgs>(args?: SelectSubset<T, LabInstanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabInstancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LabInstance.
     * @param {LabInstanceDeleteArgs} args - Arguments to delete one LabInstance.
     * @example
     * // Delete one LabInstance
     * const LabInstance = await prisma.labInstance.delete({
     *   where: {
     *     // ... filter to delete one LabInstance
     *   }
     * })
     * 
     */
    delete<T extends LabInstanceDeleteArgs>(args: SelectSubset<T, LabInstanceDeleteArgs<ExtArgs>>): Prisma__LabInstanceClient<$Result.GetResult<Prisma.$LabInstancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LabInstance.
     * @param {LabInstanceUpdateArgs} args - Arguments to update one LabInstance.
     * @example
     * // Update one LabInstance
     * const labInstance = await prisma.labInstance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LabInstanceUpdateArgs>(args: SelectSubset<T, LabInstanceUpdateArgs<ExtArgs>>): Prisma__LabInstanceClient<$Result.GetResult<Prisma.$LabInstancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LabInstances.
     * @param {LabInstanceDeleteManyArgs} args - Arguments to filter LabInstances to delete.
     * @example
     * // Delete a few LabInstances
     * const { count } = await prisma.labInstance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LabInstanceDeleteManyArgs>(args?: SelectSubset<T, LabInstanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabInstanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LabInstances
     * const labInstance = await prisma.labInstance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LabInstanceUpdateManyArgs>(args: SelectSubset<T, LabInstanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabInstances and returns the data updated in the database.
     * @param {LabInstanceUpdateManyAndReturnArgs} args - Arguments to update many LabInstances.
     * @example
     * // Update many LabInstances
     * const labInstance = await prisma.labInstance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LabInstances and only return the `id`
     * const labInstanceWithIdOnly = await prisma.labInstance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LabInstanceUpdateManyAndReturnArgs>(args: SelectSubset<T, LabInstanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabInstancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LabInstance.
     * @param {LabInstanceUpsertArgs} args - Arguments to update or create a LabInstance.
     * @example
     * // Update or create a LabInstance
     * const labInstance = await prisma.labInstance.upsert({
     *   create: {
     *     // ... data to create a LabInstance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LabInstance we want to update
     *   }
     * })
     */
    upsert<T extends LabInstanceUpsertArgs>(args: SelectSubset<T, LabInstanceUpsertArgs<ExtArgs>>): Prisma__LabInstanceClient<$Result.GetResult<Prisma.$LabInstancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LabInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabInstanceCountArgs} args - Arguments to filter LabInstances to count.
     * @example
     * // Count the number of LabInstances
     * const count = await prisma.labInstance.count({
     *   where: {
     *     // ... the filter for the LabInstances we want to count
     *   }
     * })
    **/
    count<T extends LabInstanceCountArgs>(
      args?: Subset<T, LabInstanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LabInstanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LabInstance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabInstanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LabInstanceAggregateArgs>(args: Subset<T, LabInstanceAggregateArgs>): Prisma.PrismaPromise<GetLabInstanceAggregateType<T>>

    /**
     * Group by LabInstance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabInstanceGroupByArgs} args - Group by arguments.
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
      T extends LabInstanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LabInstanceGroupByArgs['orderBy'] }
        : { orderBy?: LabInstanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LabInstanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabInstanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LabInstance model
   */
  readonly fields: LabInstanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LabInstance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LabInstanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lab<T extends LabDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LabDefaultArgs<ExtArgs>>): Prisma__LabClient<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submissions<T extends LabInstance$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, LabInstance$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlagSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LabInstance model
   */
  interface LabInstanceFieldRefs {
    readonly id: FieldRef<"LabInstance", 'String'>
    readonly labId: FieldRef<"LabInstance", 'String'>
    readonly userId: FieldRef<"LabInstance", 'String'>
    readonly status: FieldRef<"LabInstance", 'LabInstanceStatus'>
    readonly externalId: FieldRef<"LabInstance", 'String'>
    readonly accessUrl: FieldRef<"LabInstance", 'String'>
    readonly startedAt: FieldRef<"LabInstance", 'DateTime'>
    readonly expiresAt: FieldRef<"LabInstance", 'DateTime'>
    readonly destroyedAt: FieldRef<"LabInstance", 'DateTime'>
    readonly score: FieldRef<"LabInstance", 'Int'>
    readonly lastActivityAt: FieldRef<"LabInstance", 'DateTime'>
    readonly createdAt: FieldRef<"LabInstance", 'DateTime'>
    readonly updatedAt: FieldRef<"LabInstance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LabInstance findUnique
   */
  export type LabInstanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabInstance
     */
    select?: LabInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabInstance
     */
    omit?: LabInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInstanceInclude<ExtArgs> | null
    /**
     * Filter, which LabInstance to fetch.
     */
    where: LabInstanceWhereUniqueInput
  }

  /**
   * LabInstance findUniqueOrThrow
   */
  export type LabInstanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabInstance
     */
    select?: LabInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabInstance
     */
    omit?: LabInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInstanceInclude<ExtArgs> | null
    /**
     * Filter, which LabInstance to fetch.
     */
    where: LabInstanceWhereUniqueInput
  }

  /**
   * LabInstance findFirst
   */
  export type LabInstanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabInstance
     */
    select?: LabInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabInstance
     */
    omit?: LabInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInstanceInclude<ExtArgs> | null
    /**
     * Filter, which LabInstance to fetch.
     */
    where?: LabInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabInstances to fetch.
     */
    orderBy?: LabInstanceOrderByWithRelationInput | LabInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabInstances.
     */
    cursor?: LabInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabInstances.
     */
    distinct?: LabInstanceScalarFieldEnum | LabInstanceScalarFieldEnum[]
  }

  /**
   * LabInstance findFirstOrThrow
   */
  export type LabInstanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabInstance
     */
    select?: LabInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabInstance
     */
    omit?: LabInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInstanceInclude<ExtArgs> | null
    /**
     * Filter, which LabInstance to fetch.
     */
    where?: LabInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabInstances to fetch.
     */
    orderBy?: LabInstanceOrderByWithRelationInput | LabInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabInstances.
     */
    cursor?: LabInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabInstances.
     */
    distinct?: LabInstanceScalarFieldEnum | LabInstanceScalarFieldEnum[]
  }

  /**
   * LabInstance findMany
   */
  export type LabInstanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabInstance
     */
    select?: LabInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabInstance
     */
    omit?: LabInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInstanceInclude<ExtArgs> | null
    /**
     * Filter, which LabInstances to fetch.
     */
    where?: LabInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabInstances to fetch.
     */
    orderBy?: LabInstanceOrderByWithRelationInput | LabInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LabInstances.
     */
    cursor?: LabInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabInstances.
     */
    distinct?: LabInstanceScalarFieldEnum | LabInstanceScalarFieldEnum[]
  }

  /**
   * LabInstance create
   */
  export type LabInstanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabInstance
     */
    select?: LabInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabInstance
     */
    omit?: LabInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInstanceInclude<ExtArgs> | null
    /**
     * The data needed to create a LabInstance.
     */
    data: XOR<LabInstanceCreateInput, LabInstanceUncheckedCreateInput>
  }

  /**
   * LabInstance createMany
   */
  export type LabInstanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LabInstances.
     */
    data: LabInstanceCreateManyInput | LabInstanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LabInstance createManyAndReturn
   */
  export type LabInstanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabInstance
     */
    select?: LabInstanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabInstance
     */
    omit?: LabInstanceOmit<ExtArgs> | null
    /**
     * The data used to create many LabInstances.
     */
    data: LabInstanceCreateManyInput | LabInstanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInstanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LabInstance update
   */
  export type LabInstanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabInstance
     */
    select?: LabInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabInstance
     */
    omit?: LabInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInstanceInclude<ExtArgs> | null
    /**
     * The data needed to update a LabInstance.
     */
    data: XOR<LabInstanceUpdateInput, LabInstanceUncheckedUpdateInput>
    /**
     * Choose, which LabInstance to update.
     */
    where: LabInstanceWhereUniqueInput
  }

  /**
   * LabInstance updateMany
   */
  export type LabInstanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LabInstances.
     */
    data: XOR<LabInstanceUpdateManyMutationInput, LabInstanceUncheckedUpdateManyInput>
    /**
     * Filter which LabInstances to update
     */
    where?: LabInstanceWhereInput
    /**
     * Limit how many LabInstances to update.
     */
    limit?: number
  }

  /**
   * LabInstance updateManyAndReturn
   */
  export type LabInstanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabInstance
     */
    select?: LabInstanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabInstance
     */
    omit?: LabInstanceOmit<ExtArgs> | null
    /**
     * The data used to update LabInstances.
     */
    data: XOR<LabInstanceUpdateManyMutationInput, LabInstanceUncheckedUpdateManyInput>
    /**
     * Filter which LabInstances to update
     */
    where?: LabInstanceWhereInput
    /**
     * Limit how many LabInstances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInstanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LabInstance upsert
   */
  export type LabInstanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabInstance
     */
    select?: LabInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabInstance
     */
    omit?: LabInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInstanceInclude<ExtArgs> | null
    /**
     * The filter to search for the LabInstance to update in case it exists.
     */
    where: LabInstanceWhereUniqueInput
    /**
     * In case the LabInstance found by the `where` argument doesn't exist, create a new LabInstance with this data.
     */
    create: XOR<LabInstanceCreateInput, LabInstanceUncheckedCreateInput>
    /**
     * In case the LabInstance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LabInstanceUpdateInput, LabInstanceUncheckedUpdateInput>
  }

  /**
   * LabInstance delete
   */
  export type LabInstanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabInstance
     */
    select?: LabInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabInstance
     */
    omit?: LabInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInstanceInclude<ExtArgs> | null
    /**
     * Filter which LabInstance to delete.
     */
    where: LabInstanceWhereUniqueInput
  }

  /**
   * LabInstance deleteMany
   */
  export type LabInstanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabInstances to delete
     */
    where?: LabInstanceWhereInput
    /**
     * Limit how many LabInstances to delete.
     */
    limit?: number
  }

  /**
   * LabInstance.submissions
   */
  export type LabInstance$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlagSubmission
     */
    select?: FlagSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlagSubmission
     */
    omit?: FlagSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagSubmissionInclude<ExtArgs> | null
    where?: FlagSubmissionWhereInput
    orderBy?: FlagSubmissionOrderByWithRelationInput | FlagSubmissionOrderByWithRelationInput[]
    cursor?: FlagSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlagSubmissionScalarFieldEnum | FlagSubmissionScalarFieldEnum[]
  }

  /**
   * LabInstance without action
   */
  export type LabInstanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabInstance
     */
    select?: LabInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabInstance
     */
    omit?: LabInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInstanceInclude<ExtArgs> | null
  }


  /**
   * Model FlagSubmission
   */

  export type AggregateFlagSubmission = {
    _count: FlagSubmissionCountAggregateOutputType | null
    _avg: FlagSubmissionAvgAggregateOutputType | null
    _sum: FlagSubmissionSumAggregateOutputType | null
    _min: FlagSubmissionMinAggregateOutputType | null
    _max: FlagSubmissionMaxAggregateOutputType | null
  }

  export type FlagSubmissionAvgAggregateOutputType = {
    scoreAwarded: number | null
  }

  export type FlagSubmissionSumAggregateOutputType = {
    scoreAwarded: number | null
  }

  export type FlagSubmissionMinAggregateOutputType = {
    id: string | null
    labInstanceId: string | null
    userId: string | null
    submittedFlag: string | null
    isCorrect: boolean | null
    scoreAwarded: number | null
    submittedAt: Date | null
  }

  export type FlagSubmissionMaxAggregateOutputType = {
    id: string | null
    labInstanceId: string | null
    userId: string | null
    submittedFlag: string | null
    isCorrect: boolean | null
    scoreAwarded: number | null
    submittedAt: Date | null
  }

  export type FlagSubmissionCountAggregateOutputType = {
    id: number
    labInstanceId: number
    userId: number
    submittedFlag: number
    isCorrect: number
    scoreAwarded: number
    submittedAt: number
    _all: number
  }


  export type FlagSubmissionAvgAggregateInputType = {
    scoreAwarded?: true
  }

  export type FlagSubmissionSumAggregateInputType = {
    scoreAwarded?: true
  }

  export type FlagSubmissionMinAggregateInputType = {
    id?: true
    labInstanceId?: true
    userId?: true
    submittedFlag?: true
    isCorrect?: true
    scoreAwarded?: true
    submittedAt?: true
  }

  export type FlagSubmissionMaxAggregateInputType = {
    id?: true
    labInstanceId?: true
    userId?: true
    submittedFlag?: true
    isCorrect?: true
    scoreAwarded?: true
    submittedAt?: true
  }

  export type FlagSubmissionCountAggregateInputType = {
    id?: true
    labInstanceId?: true
    userId?: true
    submittedFlag?: true
    isCorrect?: true
    scoreAwarded?: true
    submittedAt?: true
    _all?: true
  }

  export type FlagSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlagSubmission to aggregate.
     */
    where?: FlagSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlagSubmissions to fetch.
     */
    orderBy?: FlagSubmissionOrderByWithRelationInput | FlagSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlagSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlagSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlagSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlagSubmissions
    **/
    _count?: true | FlagSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlagSubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlagSubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlagSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlagSubmissionMaxAggregateInputType
  }

  export type GetFlagSubmissionAggregateType<T extends FlagSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateFlagSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlagSubmission[P]>
      : GetScalarType<T[P], AggregateFlagSubmission[P]>
  }




  export type FlagSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlagSubmissionWhereInput
    orderBy?: FlagSubmissionOrderByWithAggregationInput | FlagSubmissionOrderByWithAggregationInput[]
    by: FlagSubmissionScalarFieldEnum[] | FlagSubmissionScalarFieldEnum
    having?: FlagSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlagSubmissionCountAggregateInputType | true
    _avg?: FlagSubmissionAvgAggregateInputType
    _sum?: FlagSubmissionSumAggregateInputType
    _min?: FlagSubmissionMinAggregateInputType
    _max?: FlagSubmissionMaxAggregateInputType
  }

  export type FlagSubmissionGroupByOutputType = {
    id: string
    labInstanceId: string
    userId: string
    submittedFlag: string
    isCorrect: boolean
    scoreAwarded: number
    submittedAt: Date
    _count: FlagSubmissionCountAggregateOutputType | null
    _avg: FlagSubmissionAvgAggregateOutputType | null
    _sum: FlagSubmissionSumAggregateOutputType | null
    _min: FlagSubmissionMinAggregateOutputType | null
    _max: FlagSubmissionMaxAggregateOutputType | null
  }

  type GetFlagSubmissionGroupByPayload<T extends FlagSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlagSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlagSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlagSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], FlagSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type FlagSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    labInstanceId?: boolean
    userId?: boolean
    submittedFlag?: boolean
    isCorrect?: boolean
    scoreAwarded?: boolean
    submittedAt?: boolean
    labInstance?: boolean | LabInstanceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flagSubmission"]>

  export type FlagSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    labInstanceId?: boolean
    userId?: boolean
    submittedFlag?: boolean
    isCorrect?: boolean
    scoreAwarded?: boolean
    submittedAt?: boolean
    labInstance?: boolean | LabInstanceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flagSubmission"]>

  export type FlagSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    labInstanceId?: boolean
    userId?: boolean
    submittedFlag?: boolean
    isCorrect?: boolean
    scoreAwarded?: boolean
    submittedAt?: boolean
    labInstance?: boolean | LabInstanceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flagSubmission"]>

  export type FlagSubmissionSelectScalar = {
    id?: boolean
    labInstanceId?: boolean
    userId?: boolean
    submittedFlag?: boolean
    isCorrect?: boolean
    scoreAwarded?: boolean
    submittedAt?: boolean
  }

  export type FlagSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "labInstanceId" | "userId" | "submittedFlag" | "isCorrect" | "scoreAwarded" | "submittedAt", ExtArgs["result"]["flagSubmission"]>
  export type FlagSubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    labInstance?: boolean | LabInstanceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FlagSubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    labInstance?: boolean | LabInstanceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FlagSubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    labInstance?: boolean | LabInstanceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FlagSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlagSubmission"
    objects: {
      labInstance: Prisma.$LabInstancePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      labInstanceId: string
      userId: string
      submittedFlag: string
      isCorrect: boolean
      scoreAwarded: number
      submittedAt: Date
    }, ExtArgs["result"]["flagSubmission"]>
    composites: {}
  }

  type FlagSubmissionGetPayload<S extends boolean | null | undefined | FlagSubmissionDefaultArgs> = $Result.GetResult<Prisma.$FlagSubmissionPayload, S>

  type FlagSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlagSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlagSubmissionCountAggregateInputType | true
    }

  export interface FlagSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlagSubmission'], meta: { name: 'FlagSubmission' } }
    /**
     * Find zero or one FlagSubmission that matches the filter.
     * @param {FlagSubmissionFindUniqueArgs} args - Arguments to find a FlagSubmission
     * @example
     * // Get one FlagSubmission
     * const flagSubmission = await prisma.flagSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlagSubmissionFindUniqueArgs>(args: SelectSubset<T, FlagSubmissionFindUniqueArgs<ExtArgs>>): Prisma__FlagSubmissionClient<$Result.GetResult<Prisma.$FlagSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlagSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlagSubmissionFindUniqueOrThrowArgs} args - Arguments to find a FlagSubmission
     * @example
     * // Get one FlagSubmission
     * const flagSubmission = await prisma.flagSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlagSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, FlagSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlagSubmissionClient<$Result.GetResult<Prisma.$FlagSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlagSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagSubmissionFindFirstArgs} args - Arguments to find a FlagSubmission
     * @example
     * // Get one FlagSubmission
     * const flagSubmission = await prisma.flagSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlagSubmissionFindFirstArgs>(args?: SelectSubset<T, FlagSubmissionFindFirstArgs<ExtArgs>>): Prisma__FlagSubmissionClient<$Result.GetResult<Prisma.$FlagSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlagSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagSubmissionFindFirstOrThrowArgs} args - Arguments to find a FlagSubmission
     * @example
     * // Get one FlagSubmission
     * const flagSubmission = await prisma.flagSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlagSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, FlagSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlagSubmissionClient<$Result.GetResult<Prisma.$FlagSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlagSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlagSubmissions
     * const flagSubmissions = await prisma.flagSubmission.findMany()
     * 
     * // Get first 10 FlagSubmissions
     * const flagSubmissions = await prisma.flagSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flagSubmissionWithIdOnly = await prisma.flagSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlagSubmissionFindManyArgs>(args?: SelectSubset<T, FlagSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlagSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlagSubmission.
     * @param {FlagSubmissionCreateArgs} args - Arguments to create a FlagSubmission.
     * @example
     * // Create one FlagSubmission
     * const FlagSubmission = await prisma.flagSubmission.create({
     *   data: {
     *     // ... data to create a FlagSubmission
     *   }
     * })
     * 
     */
    create<T extends FlagSubmissionCreateArgs>(args: SelectSubset<T, FlagSubmissionCreateArgs<ExtArgs>>): Prisma__FlagSubmissionClient<$Result.GetResult<Prisma.$FlagSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlagSubmissions.
     * @param {FlagSubmissionCreateManyArgs} args - Arguments to create many FlagSubmissions.
     * @example
     * // Create many FlagSubmissions
     * const flagSubmission = await prisma.flagSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlagSubmissionCreateManyArgs>(args?: SelectSubset<T, FlagSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FlagSubmissions and returns the data saved in the database.
     * @param {FlagSubmissionCreateManyAndReturnArgs} args - Arguments to create many FlagSubmissions.
     * @example
     * // Create many FlagSubmissions
     * const flagSubmission = await prisma.flagSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FlagSubmissions and only return the `id`
     * const flagSubmissionWithIdOnly = await prisma.flagSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlagSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, FlagSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlagSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FlagSubmission.
     * @param {FlagSubmissionDeleteArgs} args - Arguments to delete one FlagSubmission.
     * @example
     * // Delete one FlagSubmission
     * const FlagSubmission = await prisma.flagSubmission.delete({
     *   where: {
     *     // ... filter to delete one FlagSubmission
     *   }
     * })
     * 
     */
    delete<T extends FlagSubmissionDeleteArgs>(args: SelectSubset<T, FlagSubmissionDeleteArgs<ExtArgs>>): Prisma__FlagSubmissionClient<$Result.GetResult<Prisma.$FlagSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlagSubmission.
     * @param {FlagSubmissionUpdateArgs} args - Arguments to update one FlagSubmission.
     * @example
     * // Update one FlagSubmission
     * const flagSubmission = await prisma.flagSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlagSubmissionUpdateArgs>(args: SelectSubset<T, FlagSubmissionUpdateArgs<ExtArgs>>): Prisma__FlagSubmissionClient<$Result.GetResult<Prisma.$FlagSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlagSubmissions.
     * @param {FlagSubmissionDeleteManyArgs} args - Arguments to filter FlagSubmissions to delete.
     * @example
     * // Delete a few FlagSubmissions
     * const { count } = await prisma.flagSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlagSubmissionDeleteManyArgs>(args?: SelectSubset<T, FlagSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlagSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlagSubmissions
     * const flagSubmission = await prisma.flagSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlagSubmissionUpdateManyArgs>(args: SelectSubset<T, FlagSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlagSubmissions and returns the data updated in the database.
     * @param {FlagSubmissionUpdateManyAndReturnArgs} args - Arguments to update many FlagSubmissions.
     * @example
     * // Update many FlagSubmissions
     * const flagSubmission = await prisma.flagSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FlagSubmissions and only return the `id`
     * const flagSubmissionWithIdOnly = await prisma.flagSubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FlagSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, FlagSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlagSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FlagSubmission.
     * @param {FlagSubmissionUpsertArgs} args - Arguments to update or create a FlagSubmission.
     * @example
     * // Update or create a FlagSubmission
     * const flagSubmission = await prisma.flagSubmission.upsert({
     *   create: {
     *     // ... data to create a FlagSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlagSubmission we want to update
     *   }
     * })
     */
    upsert<T extends FlagSubmissionUpsertArgs>(args: SelectSubset<T, FlagSubmissionUpsertArgs<ExtArgs>>): Prisma__FlagSubmissionClient<$Result.GetResult<Prisma.$FlagSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlagSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagSubmissionCountArgs} args - Arguments to filter FlagSubmissions to count.
     * @example
     * // Count the number of FlagSubmissions
     * const count = await prisma.flagSubmission.count({
     *   where: {
     *     // ... the filter for the FlagSubmissions we want to count
     *   }
     * })
    **/
    count<T extends FlagSubmissionCountArgs>(
      args?: Subset<T, FlagSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlagSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlagSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlagSubmissionAggregateArgs>(args: Subset<T, FlagSubmissionAggregateArgs>): Prisma.PrismaPromise<GetFlagSubmissionAggregateType<T>>

    /**
     * Group by FlagSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagSubmissionGroupByArgs} args - Group by arguments.
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
      T extends FlagSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlagSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: FlagSubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlagSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlagSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlagSubmission model
   */
  readonly fields: FlagSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlagSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlagSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    labInstance<T extends LabInstanceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LabInstanceDefaultArgs<ExtArgs>>): Prisma__LabInstanceClient<$Result.GetResult<Prisma.$LabInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FlagSubmission model
   */
  interface FlagSubmissionFieldRefs {
    readonly id: FieldRef<"FlagSubmission", 'String'>
    readonly labInstanceId: FieldRef<"FlagSubmission", 'String'>
    readonly userId: FieldRef<"FlagSubmission", 'String'>
    readonly submittedFlag: FieldRef<"FlagSubmission", 'String'>
    readonly isCorrect: FieldRef<"FlagSubmission", 'Boolean'>
    readonly scoreAwarded: FieldRef<"FlagSubmission", 'Int'>
    readonly submittedAt: FieldRef<"FlagSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FlagSubmission findUnique
   */
  export type FlagSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlagSubmission
     */
    select?: FlagSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlagSubmission
     */
    omit?: FlagSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which FlagSubmission to fetch.
     */
    where: FlagSubmissionWhereUniqueInput
  }

  /**
   * FlagSubmission findUniqueOrThrow
   */
  export type FlagSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlagSubmission
     */
    select?: FlagSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlagSubmission
     */
    omit?: FlagSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which FlagSubmission to fetch.
     */
    where: FlagSubmissionWhereUniqueInput
  }

  /**
   * FlagSubmission findFirst
   */
  export type FlagSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlagSubmission
     */
    select?: FlagSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlagSubmission
     */
    omit?: FlagSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which FlagSubmission to fetch.
     */
    where?: FlagSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlagSubmissions to fetch.
     */
    orderBy?: FlagSubmissionOrderByWithRelationInput | FlagSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlagSubmissions.
     */
    cursor?: FlagSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlagSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlagSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlagSubmissions.
     */
    distinct?: FlagSubmissionScalarFieldEnum | FlagSubmissionScalarFieldEnum[]
  }

  /**
   * FlagSubmission findFirstOrThrow
   */
  export type FlagSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlagSubmission
     */
    select?: FlagSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlagSubmission
     */
    omit?: FlagSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which FlagSubmission to fetch.
     */
    where?: FlagSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlagSubmissions to fetch.
     */
    orderBy?: FlagSubmissionOrderByWithRelationInput | FlagSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlagSubmissions.
     */
    cursor?: FlagSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlagSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlagSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlagSubmissions.
     */
    distinct?: FlagSubmissionScalarFieldEnum | FlagSubmissionScalarFieldEnum[]
  }

  /**
   * FlagSubmission findMany
   */
  export type FlagSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlagSubmission
     */
    select?: FlagSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlagSubmission
     */
    omit?: FlagSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which FlagSubmissions to fetch.
     */
    where?: FlagSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlagSubmissions to fetch.
     */
    orderBy?: FlagSubmissionOrderByWithRelationInput | FlagSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlagSubmissions.
     */
    cursor?: FlagSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlagSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlagSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlagSubmissions.
     */
    distinct?: FlagSubmissionScalarFieldEnum | FlagSubmissionScalarFieldEnum[]
  }

  /**
   * FlagSubmission create
   */
  export type FlagSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlagSubmission
     */
    select?: FlagSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlagSubmission
     */
    omit?: FlagSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a FlagSubmission.
     */
    data: XOR<FlagSubmissionCreateInput, FlagSubmissionUncheckedCreateInput>
  }

  /**
   * FlagSubmission createMany
   */
  export type FlagSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlagSubmissions.
     */
    data: FlagSubmissionCreateManyInput | FlagSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlagSubmission createManyAndReturn
   */
  export type FlagSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlagSubmission
     */
    select?: FlagSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlagSubmission
     */
    omit?: FlagSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many FlagSubmissions.
     */
    data: FlagSubmissionCreateManyInput | FlagSubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagSubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlagSubmission update
   */
  export type FlagSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlagSubmission
     */
    select?: FlagSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlagSubmission
     */
    omit?: FlagSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a FlagSubmission.
     */
    data: XOR<FlagSubmissionUpdateInput, FlagSubmissionUncheckedUpdateInput>
    /**
     * Choose, which FlagSubmission to update.
     */
    where: FlagSubmissionWhereUniqueInput
  }

  /**
   * FlagSubmission updateMany
   */
  export type FlagSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlagSubmissions.
     */
    data: XOR<FlagSubmissionUpdateManyMutationInput, FlagSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which FlagSubmissions to update
     */
    where?: FlagSubmissionWhereInput
    /**
     * Limit how many FlagSubmissions to update.
     */
    limit?: number
  }

  /**
   * FlagSubmission updateManyAndReturn
   */
  export type FlagSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlagSubmission
     */
    select?: FlagSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlagSubmission
     */
    omit?: FlagSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update FlagSubmissions.
     */
    data: XOR<FlagSubmissionUpdateManyMutationInput, FlagSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which FlagSubmissions to update
     */
    where?: FlagSubmissionWhereInput
    /**
     * Limit how many FlagSubmissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagSubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlagSubmission upsert
   */
  export type FlagSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlagSubmission
     */
    select?: FlagSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlagSubmission
     */
    omit?: FlagSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagSubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the FlagSubmission to update in case it exists.
     */
    where: FlagSubmissionWhereUniqueInput
    /**
     * In case the FlagSubmission found by the `where` argument doesn't exist, create a new FlagSubmission with this data.
     */
    create: XOR<FlagSubmissionCreateInput, FlagSubmissionUncheckedCreateInput>
    /**
     * In case the FlagSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlagSubmissionUpdateInput, FlagSubmissionUncheckedUpdateInput>
  }

  /**
   * FlagSubmission delete
   */
  export type FlagSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlagSubmission
     */
    select?: FlagSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlagSubmission
     */
    omit?: FlagSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagSubmissionInclude<ExtArgs> | null
    /**
     * Filter which FlagSubmission to delete.
     */
    where: FlagSubmissionWhereUniqueInput
  }

  /**
   * FlagSubmission deleteMany
   */
  export type FlagSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlagSubmissions to delete
     */
    where?: FlagSubmissionWhereInput
    /**
     * Limit how many FlagSubmissions to delete.
     */
    limit?: number
  }

  /**
   * FlagSubmission without action
   */
  export type FlagSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlagSubmission
     */
    select?: FlagSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlagSubmission
     */
    omit?: FlagSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagSubmissionInclude<ExtArgs> | null
  }


  /**
   * Model Scenario
   */

  export type AggregateScenario = {
    _count: ScenarioCountAggregateOutputType | null
    _avg: ScenarioAvgAggregateOutputType | null
    _sum: ScenarioSumAggregateOutputType | null
    _min: ScenarioMinAggregateOutputType | null
    _max: ScenarioMaxAggregateOutputType | null
  }

  export type ScenarioAvgAggregateOutputType = {
    timeEstimate: number | null
  }

  export type ScenarioSumAggregateOutputType = {
    timeEstimate: number | null
  }

  export type ScenarioMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: $Enums.ScenarioCategory | null
    difficulty: $Enums.ScenarioDifficulty | null
    timeEstimate: number | null
    risk: string | null
    targetSector: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScenarioMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: $Enums.ScenarioCategory | null
    difficulty: $Enums.ScenarioDifficulty | null
    timeEstimate: number | null
    risk: string | null
    targetSector: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScenarioCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    difficulty: number
    timeEstimate: number
    skills: number
    risk: number
    targetSector: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScenarioAvgAggregateInputType = {
    timeEstimate?: true
  }

  export type ScenarioSumAggregateInputType = {
    timeEstimate?: true
  }

  export type ScenarioMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    difficulty?: true
    timeEstimate?: true
    risk?: true
    targetSector?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScenarioMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    difficulty?: true
    timeEstimate?: true
    risk?: true
    targetSector?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScenarioCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    difficulty?: true
    timeEstimate?: true
    skills?: true
    risk?: true
    targetSector?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScenarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scenario to aggregate.
     */
    where?: ScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenarios to fetch.
     */
    orderBy?: ScenarioOrderByWithRelationInput | ScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scenarios
    **/
    _count?: true | ScenarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScenarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScenarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScenarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScenarioMaxAggregateInputType
  }

  export type GetScenarioAggregateType<T extends ScenarioAggregateArgs> = {
        [P in keyof T & keyof AggregateScenario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScenario[P]>
      : GetScalarType<T[P], AggregateScenario[P]>
  }




  export type ScenarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScenarioWhereInput
    orderBy?: ScenarioOrderByWithAggregationInput | ScenarioOrderByWithAggregationInput[]
    by: ScenarioScalarFieldEnum[] | ScenarioScalarFieldEnum
    having?: ScenarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScenarioCountAggregateInputType | true
    _avg?: ScenarioAvgAggregateInputType
    _sum?: ScenarioSumAggregateInputType
    _min?: ScenarioMinAggregateInputType
    _max?: ScenarioMaxAggregateInputType
  }

  export type ScenarioGroupByOutputType = {
    id: string
    title: string
    description: string
    category: $Enums.ScenarioCategory
    difficulty: $Enums.ScenarioDifficulty
    timeEstimate: number
    skills: string[]
    risk: string
    targetSector: string | null
    createdAt: Date
    updatedAt: Date
    _count: ScenarioCountAggregateOutputType | null
    _avg: ScenarioAvgAggregateOutputType | null
    _sum: ScenarioSumAggregateOutputType | null
    _min: ScenarioMinAggregateOutputType | null
    _max: ScenarioMaxAggregateOutputType | null
  }

  type GetScenarioGroupByPayload<T extends ScenarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScenarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScenarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScenarioGroupByOutputType[P]>
            : GetScalarType<T[P], ScenarioGroupByOutputType[P]>
        }
      >
    >


  export type ScenarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    difficulty?: boolean
    timeEstimate?: boolean
    skills?: boolean
    risk?: boolean
    targetSector?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    simulations?: boolean | Scenario$simulationsArgs<ExtArgs>
    _count?: boolean | ScenarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scenario"]>

  export type ScenarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    difficulty?: boolean
    timeEstimate?: boolean
    skills?: boolean
    risk?: boolean
    targetSector?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["scenario"]>

  export type ScenarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    difficulty?: boolean
    timeEstimate?: boolean
    skills?: boolean
    risk?: boolean
    targetSector?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["scenario"]>

  export type ScenarioSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    difficulty?: boolean
    timeEstimate?: boolean
    skills?: boolean
    risk?: boolean
    targetSector?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScenarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "category" | "difficulty" | "timeEstimate" | "skills" | "risk" | "targetSector" | "createdAt" | "updatedAt", ExtArgs["result"]["scenario"]>
  export type ScenarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simulations?: boolean | Scenario$simulationsArgs<ExtArgs>
    _count?: boolean | ScenarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScenarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ScenarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ScenarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scenario"
    objects: {
      simulations: Prisma.$SimulationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      category: $Enums.ScenarioCategory
      difficulty: $Enums.ScenarioDifficulty
      timeEstimate: number
      skills: string[]
      risk: string
      targetSector: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["scenario"]>
    composites: {}
  }

  type ScenarioGetPayload<S extends boolean | null | undefined | ScenarioDefaultArgs> = $Result.GetResult<Prisma.$ScenarioPayload, S>

  type ScenarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScenarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScenarioCountAggregateInputType | true
    }

  export interface ScenarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scenario'], meta: { name: 'Scenario' } }
    /**
     * Find zero or one Scenario that matches the filter.
     * @param {ScenarioFindUniqueArgs} args - Arguments to find a Scenario
     * @example
     * // Get one Scenario
     * const scenario = await prisma.scenario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScenarioFindUniqueArgs>(args: SelectSubset<T, ScenarioFindUniqueArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scenario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScenarioFindUniqueOrThrowArgs} args - Arguments to find a Scenario
     * @example
     * // Get one Scenario
     * const scenario = await prisma.scenario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScenarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ScenarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scenario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioFindFirstArgs} args - Arguments to find a Scenario
     * @example
     * // Get one Scenario
     * const scenario = await prisma.scenario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScenarioFindFirstArgs>(args?: SelectSubset<T, ScenarioFindFirstArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scenario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioFindFirstOrThrowArgs} args - Arguments to find a Scenario
     * @example
     * // Get one Scenario
     * const scenario = await prisma.scenario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScenarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ScenarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scenarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scenarios
     * const scenarios = await prisma.scenario.findMany()
     * 
     * // Get first 10 Scenarios
     * const scenarios = await prisma.scenario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scenarioWithIdOnly = await prisma.scenario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScenarioFindManyArgs>(args?: SelectSubset<T, ScenarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scenario.
     * @param {ScenarioCreateArgs} args - Arguments to create a Scenario.
     * @example
     * // Create one Scenario
     * const Scenario = await prisma.scenario.create({
     *   data: {
     *     // ... data to create a Scenario
     *   }
     * })
     * 
     */
    create<T extends ScenarioCreateArgs>(args: SelectSubset<T, ScenarioCreateArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scenarios.
     * @param {ScenarioCreateManyArgs} args - Arguments to create many Scenarios.
     * @example
     * // Create many Scenarios
     * const scenario = await prisma.scenario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScenarioCreateManyArgs>(args?: SelectSubset<T, ScenarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scenarios and returns the data saved in the database.
     * @param {ScenarioCreateManyAndReturnArgs} args - Arguments to create many Scenarios.
     * @example
     * // Create many Scenarios
     * const scenario = await prisma.scenario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scenarios and only return the `id`
     * const scenarioWithIdOnly = await prisma.scenario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScenarioCreateManyAndReturnArgs>(args?: SelectSubset<T, ScenarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Scenario.
     * @param {ScenarioDeleteArgs} args - Arguments to delete one Scenario.
     * @example
     * // Delete one Scenario
     * const Scenario = await prisma.scenario.delete({
     *   where: {
     *     // ... filter to delete one Scenario
     *   }
     * })
     * 
     */
    delete<T extends ScenarioDeleteArgs>(args: SelectSubset<T, ScenarioDeleteArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scenario.
     * @param {ScenarioUpdateArgs} args - Arguments to update one Scenario.
     * @example
     * // Update one Scenario
     * const scenario = await prisma.scenario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScenarioUpdateArgs>(args: SelectSubset<T, ScenarioUpdateArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scenarios.
     * @param {ScenarioDeleteManyArgs} args - Arguments to filter Scenarios to delete.
     * @example
     * // Delete a few Scenarios
     * const { count } = await prisma.scenario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScenarioDeleteManyArgs>(args?: SelectSubset<T, ScenarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scenarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scenarios
     * const scenario = await prisma.scenario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScenarioUpdateManyArgs>(args: SelectSubset<T, ScenarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scenarios and returns the data updated in the database.
     * @param {ScenarioUpdateManyAndReturnArgs} args - Arguments to update many Scenarios.
     * @example
     * // Update many Scenarios
     * const scenario = await prisma.scenario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Scenarios and only return the `id`
     * const scenarioWithIdOnly = await prisma.scenario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScenarioUpdateManyAndReturnArgs>(args: SelectSubset<T, ScenarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Scenario.
     * @param {ScenarioUpsertArgs} args - Arguments to update or create a Scenario.
     * @example
     * // Update or create a Scenario
     * const scenario = await prisma.scenario.upsert({
     *   create: {
     *     // ... data to create a Scenario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scenario we want to update
     *   }
     * })
     */
    upsert<T extends ScenarioUpsertArgs>(args: SelectSubset<T, ScenarioUpsertArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scenarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioCountArgs} args - Arguments to filter Scenarios to count.
     * @example
     * // Count the number of Scenarios
     * const count = await prisma.scenario.count({
     *   where: {
     *     // ... the filter for the Scenarios we want to count
     *   }
     * })
    **/
    count<T extends ScenarioCountArgs>(
      args?: Subset<T, ScenarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScenarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scenario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScenarioAggregateArgs>(args: Subset<T, ScenarioAggregateArgs>): Prisma.PrismaPromise<GetScenarioAggregateType<T>>

    /**
     * Group by Scenario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioGroupByArgs} args - Group by arguments.
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
      T extends ScenarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScenarioGroupByArgs['orderBy'] }
        : { orderBy?: ScenarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScenarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScenarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scenario model
   */
  readonly fields: ScenarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scenario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScenarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    simulations<T extends Scenario$simulationsArgs<ExtArgs> = {}>(args?: Subset<T, Scenario$simulationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Scenario model
   */
  interface ScenarioFieldRefs {
    readonly id: FieldRef<"Scenario", 'String'>
    readonly title: FieldRef<"Scenario", 'String'>
    readonly description: FieldRef<"Scenario", 'String'>
    readonly category: FieldRef<"Scenario", 'ScenarioCategory'>
    readonly difficulty: FieldRef<"Scenario", 'ScenarioDifficulty'>
    readonly timeEstimate: FieldRef<"Scenario", 'Int'>
    readonly skills: FieldRef<"Scenario", 'String[]'>
    readonly risk: FieldRef<"Scenario", 'String'>
    readonly targetSector: FieldRef<"Scenario", 'String'>
    readonly createdAt: FieldRef<"Scenario", 'DateTime'>
    readonly updatedAt: FieldRef<"Scenario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Scenario findUnique
   */
  export type ScenarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenario to fetch.
     */
    where: ScenarioWhereUniqueInput
  }

  /**
   * Scenario findUniqueOrThrow
   */
  export type ScenarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenario to fetch.
     */
    where: ScenarioWhereUniqueInput
  }

  /**
   * Scenario findFirst
   */
  export type ScenarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenario to fetch.
     */
    where?: ScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenarios to fetch.
     */
    orderBy?: ScenarioOrderByWithRelationInput | ScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scenarios.
     */
    cursor?: ScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scenarios.
     */
    distinct?: ScenarioScalarFieldEnum | ScenarioScalarFieldEnum[]
  }

  /**
   * Scenario findFirstOrThrow
   */
  export type ScenarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenario to fetch.
     */
    where?: ScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenarios to fetch.
     */
    orderBy?: ScenarioOrderByWithRelationInput | ScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scenarios.
     */
    cursor?: ScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scenarios.
     */
    distinct?: ScenarioScalarFieldEnum | ScenarioScalarFieldEnum[]
  }

  /**
   * Scenario findMany
   */
  export type ScenarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenarios to fetch.
     */
    where?: ScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenarios to fetch.
     */
    orderBy?: ScenarioOrderByWithRelationInput | ScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scenarios.
     */
    cursor?: ScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scenarios.
     */
    distinct?: ScenarioScalarFieldEnum | ScenarioScalarFieldEnum[]
  }

  /**
   * Scenario create
   */
  export type ScenarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Scenario.
     */
    data: XOR<ScenarioCreateInput, ScenarioUncheckedCreateInput>
  }

  /**
   * Scenario createMany
   */
  export type ScenarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scenarios.
     */
    data: ScenarioCreateManyInput | ScenarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scenario createManyAndReturn
   */
  export type ScenarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * The data used to create many Scenarios.
     */
    data: ScenarioCreateManyInput | ScenarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scenario update
   */
  export type ScenarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Scenario.
     */
    data: XOR<ScenarioUpdateInput, ScenarioUncheckedUpdateInput>
    /**
     * Choose, which Scenario to update.
     */
    where: ScenarioWhereUniqueInput
  }

  /**
   * Scenario updateMany
   */
  export type ScenarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scenarios.
     */
    data: XOR<ScenarioUpdateManyMutationInput, ScenarioUncheckedUpdateManyInput>
    /**
     * Filter which Scenarios to update
     */
    where?: ScenarioWhereInput
    /**
     * Limit how many Scenarios to update.
     */
    limit?: number
  }

  /**
   * Scenario updateManyAndReturn
   */
  export type ScenarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * The data used to update Scenarios.
     */
    data: XOR<ScenarioUpdateManyMutationInput, ScenarioUncheckedUpdateManyInput>
    /**
     * Filter which Scenarios to update
     */
    where?: ScenarioWhereInput
    /**
     * Limit how many Scenarios to update.
     */
    limit?: number
  }

  /**
   * Scenario upsert
   */
  export type ScenarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Scenario to update in case it exists.
     */
    where: ScenarioWhereUniqueInput
    /**
     * In case the Scenario found by the `where` argument doesn't exist, create a new Scenario with this data.
     */
    create: XOR<ScenarioCreateInput, ScenarioUncheckedCreateInput>
    /**
     * In case the Scenario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScenarioUpdateInput, ScenarioUncheckedUpdateInput>
  }

  /**
   * Scenario delete
   */
  export type ScenarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter which Scenario to delete.
     */
    where: ScenarioWhereUniqueInput
  }

  /**
   * Scenario deleteMany
   */
  export type ScenarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scenarios to delete
     */
    where?: ScenarioWhereInput
    /**
     * Limit how many Scenarios to delete.
     */
    limit?: number
  }

  /**
   * Scenario.simulations
   */
  export type Scenario$simulationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null
    where?: SimulationWhereInput
    orderBy?: SimulationOrderByWithRelationInput | SimulationOrderByWithRelationInput[]
    cursor?: SimulationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SimulationScalarFieldEnum | SimulationScalarFieldEnum[]
  }

  /**
   * Scenario without action
   */
  export type ScenarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
  }


  /**
   * Model Simulation
   */

  export type AggregateSimulation = {
    _count: SimulationCountAggregateOutputType | null
    _avg: SimulationAvgAggregateOutputType | null
    _sum: SimulationSumAggregateOutputType | null
    _min: SimulationMinAggregateOutputType | null
    _max: SimulationMaxAggregateOutputType | null
  }

  export type SimulationAvgAggregateOutputType = {
    currentStep: number | null
    score: number | null
    timeTakenSec: number | null
    riskReduced: number | null
  }

  export type SimulationSumAggregateOutputType = {
    currentStep: number | null
    score: number | null
    timeTakenSec: number | null
    riskReduced: number | null
  }

  export type SimulationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    scenarioId: string | null
    status: $Enums.SimulationStatus | null
    currentStep: number | null
    score: number | null
    timeTakenSec: number | null
    riskReduced: number | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SimulationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    scenarioId: string | null
    status: $Enums.SimulationStatus | null
    currentStep: number | null
    score: number | null
    timeTakenSec: number | null
    riskReduced: number | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SimulationCountAggregateOutputType = {
    id: number
    userId: number
    scenarioId: number
    status: number
    currentStep: number
    score: number
    timeTakenSec: number
    riskReduced: number
    startedAt: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SimulationAvgAggregateInputType = {
    currentStep?: true
    score?: true
    timeTakenSec?: true
    riskReduced?: true
  }

  export type SimulationSumAggregateInputType = {
    currentStep?: true
    score?: true
    timeTakenSec?: true
    riskReduced?: true
  }

  export type SimulationMinAggregateInputType = {
    id?: true
    userId?: true
    scenarioId?: true
    status?: true
    currentStep?: true
    score?: true
    timeTakenSec?: true
    riskReduced?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SimulationMaxAggregateInputType = {
    id?: true
    userId?: true
    scenarioId?: true
    status?: true
    currentStep?: true
    score?: true
    timeTakenSec?: true
    riskReduced?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SimulationCountAggregateInputType = {
    id?: true
    userId?: true
    scenarioId?: true
    status?: true
    currentStep?: true
    score?: true
    timeTakenSec?: true
    riskReduced?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SimulationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Simulation to aggregate.
     */
    where?: SimulationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Simulations to fetch.
     */
    orderBy?: SimulationOrderByWithRelationInput | SimulationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SimulationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Simulations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Simulations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Simulations
    **/
    _count?: true | SimulationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SimulationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SimulationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SimulationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SimulationMaxAggregateInputType
  }

  export type GetSimulationAggregateType<T extends SimulationAggregateArgs> = {
        [P in keyof T & keyof AggregateSimulation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSimulation[P]>
      : GetScalarType<T[P], AggregateSimulation[P]>
  }




  export type SimulationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SimulationWhereInput
    orderBy?: SimulationOrderByWithAggregationInput | SimulationOrderByWithAggregationInput[]
    by: SimulationScalarFieldEnum[] | SimulationScalarFieldEnum
    having?: SimulationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SimulationCountAggregateInputType | true
    _avg?: SimulationAvgAggregateInputType
    _sum?: SimulationSumAggregateInputType
    _min?: SimulationMinAggregateInputType
    _max?: SimulationMaxAggregateInputType
  }

  export type SimulationGroupByOutputType = {
    id: string
    userId: string
    scenarioId: string
    status: $Enums.SimulationStatus
    currentStep: number
    score: number | null
    timeTakenSec: number
    riskReduced: number
    startedAt: Date
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SimulationCountAggregateOutputType | null
    _avg: SimulationAvgAggregateOutputType | null
    _sum: SimulationSumAggregateOutputType | null
    _min: SimulationMinAggregateOutputType | null
    _max: SimulationMaxAggregateOutputType | null
  }

  type GetSimulationGroupByPayload<T extends SimulationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SimulationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SimulationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SimulationGroupByOutputType[P]>
            : GetScalarType<T[P], SimulationGroupByOutputType[P]>
        }
      >
    >


  export type SimulationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    scenarioId?: boolean
    status?: boolean
    currentStep?: boolean
    score?: boolean
    timeTakenSec?: boolean
    riskReduced?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    report?: boolean | Simulation$reportArgs<ExtArgs>
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    steps?: boolean | Simulation$stepsArgs<ExtArgs>
    _count?: boolean | SimulationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["simulation"]>

  export type SimulationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    scenarioId?: boolean
    status?: boolean
    currentStep?: boolean
    score?: boolean
    timeTakenSec?: boolean
    riskReduced?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["simulation"]>

  export type SimulationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    scenarioId?: boolean
    status?: boolean
    currentStep?: boolean
    score?: boolean
    timeTakenSec?: boolean
    riskReduced?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["simulation"]>

  export type SimulationSelectScalar = {
    id?: boolean
    userId?: boolean
    scenarioId?: boolean
    status?: boolean
    currentStep?: boolean
    score?: boolean
    timeTakenSec?: boolean
    riskReduced?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SimulationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "scenarioId" | "status" | "currentStep" | "score" | "timeTakenSec" | "riskReduced" | "startedAt" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["simulation"]>
  export type SimulationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | Simulation$reportArgs<ExtArgs>
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    steps?: boolean | Simulation$stepsArgs<ExtArgs>
    _count?: boolean | SimulationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SimulationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SimulationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SimulationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Simulation"
    objects: {
      report: Prisma.$ReportPayload<ExtArgs> | null
      scenario: Prisma.$ScenarioPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      steps: Prisma.$SimulationStepPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      scenarioId: string
      status: $Enums.SimulationStatus
      currentStep: number
      score: number | null
      timeTakenSec: number
      riskReduced: number
      startedAt: Date
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["simulation"]>
    composites: {}
  }

  type SimulationGetPayload<S extends boolean | null | undefined | SimulationDefaultArgs> = $Result.GetResult<Prisma.$SimulationPayload, S>

  type SimulationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SimulationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SimulationCountAggregateInputType | true
    }

  export interface SimulationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Simulation'], meta: { name: 'Simulation' } }
    /**
     * Find zero or one Simulation that matches the filter.
     * @param {SimulationFindUniqueArgs} args - Arguments to find a Simulation
     * @example
     * // Get one Simulation
     * const simulation = await prisma.simulation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SimulationFindUniqueArgs>(args: SelectSubset<T, SimulationFindUniqueArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Simulation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SimulationFindUniqueOrThrowArgs} args - Arguments to find a Simulation
     * @example
     * // Get one Simulation
     * const simulation = await prisma.simulation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SimulationFindUniqueOrThrowArgs>(args: SelectSubset<T, SimulationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Simulation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationFindFirstArgs} args - Arguments to find a Simulation
     * @example
     * // Get one Simulation
     * const simulation = await prisma.simulation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SimulationFindFirstArgs>(args?: SelectSubset<T, SimulationFindFirstArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Simulation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationFindFirstOrThrowArgs} args - Arguments to find a Simulation
     * @example
     * // Get one Simulation
     * const simulation = await prisma.simulation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SimulationFindFirstOrThrowArgs>(args?: SelectSubset<T, SimulationFindFirstOrThrowArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Simulations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Simulations
     * const simulations = await prisma.simulation.findMany()
     * 
     * // Get first 10 Simulations
     * const simulations = await prisma.simulation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const simulationWithIdOnly = await prisma.simulation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SimulationFindManyArgs>(args?: SelectSubset<T, SimulationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Simulation.
     * @param {SimulationCreateArgs} args - Arguments to create a Simulation.
     * @example
     * // Create one Simulation
     * const Simulation = await prisma.simulation.create({
     *   data: {
     *     // ... data to create a Simulation
     *   }
     * })
     * 
     */
    create<T extends SimulationCreateArgs>(args: SelectSubset<T, SimulationCreateArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Simulations.
     * @param {SimulationCreateManyArgs} args - Arguments to create many Simulations.
     * @example
     * // Create many Simulations
     * const simulation = await prisma.simulation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SimulationCreateManyArgs>(args?: SelectSubset<T, SimulationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Simulations and returns the data saved in the database.
     * @param {SimulationCreateManyAndReturnArgs} args - Arguments to create many Simulations.
     * @example
     * // Create many Simulations
     * const simulation = await prisma.simulation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Simulations and only return the `id`
     * const simulationWithIdOnly = await prisma.simulation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SimulationCreateManyAndReturnArgs>(args?: SelectSubset<T, SimulationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Simulation.
     * @param {SimulationDeleteArgs} args - Arguments to delete one Simulation.
     * @example
     * // Delete one Simulation
     * const Simulation = await prisma.simulation.delete({
     *   where: {
     *     // ... filter to delete one Simulation
     *   }
     * })
     * 
     */
    delete<T extends SimulationDeleteArgs>(args: SelectSubset<T, SimulationDeleteArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Simulation.
     * @param {SimulationUpdateArgs} args - Arguments to update one Simulation.
     * @example
     * // Update one Simulation
     * const simulation = await prisma.simulation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SimulationUpdateArgs>(args: SelectSubset<T, SimulationUpdateArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Simulations.
     * @param {SimulationDeleteManyArgs} args - Arguments to filter Simulations to delete.
     * @example
     * // Delete a few Simulations
     * const { count } = await prisma.simulation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SimulationDeleteManyArgs>(args?: SelectSubset<T, SimulationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Simulations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Simulations
     * const simulation = await prisma.simulation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SimulationUpdateManyArgs>(args: SelectSubset<T, SimulationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Simulations and returns the data updated in the database.
     * @param {SimulationUpdateManyAndReturnArgs} args - Arguments to update many Simulations.
     * @example
     * // Update many Simulations
     * const simulation = await prisma.simulation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Simulations and only return the `id`
     * const simulationWithIdOnly = await prisma.simulation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SimulationUpdateManyAndReturnArgs>(args: SelectSubset<T, SimulationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Simulation.
     * @param {SimulationUpsertArgs} args - Arguments to update or create a Simulation.
     * @example
     * // Update or create a Simulation
     * const simulation = await prisma.simulation.upsert({
     *   create: {
     *     // ... data to create a Simulation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Simulation we want to update
     *   }
     * })
     */
    upsert<T extends SimulationUpsertArgs>(args: SelectSubset<T, SimulationUpsertArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Simulations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationCountArgs} args - Arguments to filter Simulations to count.
     * @example
     * // Count the number of Simulations
     * const count = await prisma.simulation.count({
     *   where: {
     *     // ... the filter for the Simulations we want to count
     *   }
     * })
    **/
    count<T extends SimulationCountArgs>(
      args?: Subset<T, SimulationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SimulationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Simulation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SimulationAggregateArgs>(args: Subset<T, SimulationAggregateArgs>): Prisma.PrismaPromise<GetSimulationAggregateType<T>>

    /**
     * Group by Simulation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationGroupByArgs} args - Group by arguments.
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
      T extends SimulationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SimulationGroupByArgs['orderBy'] }
        : { orderBy?: SimulationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SimulationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSimulationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Simulation model
   */
  readonly fields: SimulationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Simulation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SimulationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends Simulation$reportArgs<ExtArgs> = {}>(args?: Subset<T, Simulation$reportArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    scenario<T extends ScenarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScenarioDefaultArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    steps<T extends Simulation$stepsArgs<ExtArgs> = {}>(args?: Subset<T, Simulation$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimulationStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Simulation model
   */
  interface SimulationFieldRefs {
    readonly id: FieldRef<"Simulation", 'String'>
    readonly userId: FieldRef<"Simulation", 'String'>
    readonly scenarioId: FieldRef<"Simulation", 'String'>
    readonly status: FieldRef<"Simulation", 'SimulationStatus'>
    readonly currentStep: FieldRef<"Simulation", 'Int'>
    readonly score: FieldRef<"Simulation", 'Int'>
    readonly timeTakenSec: FieldRef<"Simulation", 'Int'>
    readonly riskReduced: FieldRef<"Simulation", 'Int'>
    readonly startedAt: FieldRef<"Simulation", 'DateTime'>
    readonly completedAt: FieldRef<"Simulation", 'DateTime'>
    readonly createdAt: FieldRef<"Simulation", 'DateTime'>
    readonly updatedAt: FieldRef<"Simulation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Simulation findUnique
   */
  export type SimulationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null
    /**
     * Filter, which Simulation to fetch.
     */
    where: SimulationWhereUniqueInput
  }

  /**
   * Simulation findUniqueOrThrow
   */
  export type SimulationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null
    /**
     * Filter, which Simulation to fetch.
     */
    where: SimulationWhereUniqueInput
  }

  /**
   * Simulation findFirst
   */
  export type SimulationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null
    /**
     * Filter, which Simulation to fetch.
     */
    where?: SimulationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Simulations to fetch.
     */
    orderBy?: SimulationOrderByWithRelationInput | SimulationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Simulations.
     */
    cursor?: SimulationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Simulations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Simulations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Simulations.
     */
    distinct?: SimulationScalarFieldEnum | SimulationScalarFieldEnum[]
  }

  /**
   * Simulation findFirstOrThrow
   */
  export type SimulationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null
    /**
     * Filter, which Simulation to fetch.
     */
    where?: SimulationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Simulations to fetch.
     */
    orderBy?: SimulationOrderByWithRelationInput | SimulationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Simulations.
     */
    cursor?: SimulationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Simulations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Simulations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Simulations.
     */
    distinct?: SimulationScalarFieldEnum | SimulationScalarFieldEnum[]
  }

  /**
   * Simulation findMany
   */
  export type SimulationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null
    /**
     * Filter, which Simulations to fetch.
     */
    where?: SimulationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Simulations to fetch.
     */
    orderBy?: SimulationOrderByWithRelationInput | SimulationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Simulations.
     */
    cursor?: SimulationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Simulations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Simulations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Simulations.
     */
    distinct?: SimulationScalarFieldEnum | SimulationScalarFieldEnum[]
  }

  /**
   * Simulation create
   */
  export type SimulationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null
    /**
     * The data needed to create a Simulation.
     */
    data: XOR<SimulationCreateInput, SimulationUncheckedCreateInput>
  }

  /**
   * Simulation createMany
   */
  export type SimulationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Simulations.
     */
    data: SimulationCreateManyInput | SimulationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Simulation createManyAndReturn
   */
  export type SimulationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * The data used to create many Simulations.
     */
    data: SimulationCreateManyInput | SimulationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Simulation update
   */
  export type SimulationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null
    /**
     * The data needed to update a Simulation.
     */
    data: XOR<SimulationUpdateInput, SimulationUncheckedUpdateInput>
    /**
     * Choose, which Simulation to update.
     */
    where: SimulationWhereUniqueInput
  }

  /**
   * Simulation updateMany
   */
  export type SimulationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Simulations.
     */
    data: XOR<SimulationUpdateManyMutationInput, SimulationUncheckedUpdateManyInput>
    /**
     * Filter which Simulations to update
     */
    where?: SimulationWhereInput
    /**
     * Limit how many Simulations to update.
     */
    limit?: number
  }

  /**
   * Simulation updateManyAndReturn
   */
  export type SimulationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * The data used to update Simulations.
     */
    data: XOR<SimulationUpdateManyMutationInput, SimulationUncheckedUpdateManyInput>
    /**
     * Filter which Simulations to update
     */
    where?: SimulationWhereInput
    /**
     * Limit how many Simulations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Simulation upsert
   */
  export type SimulationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null
    /**
     * The filter to search for the Simulation to update in case it exists.
     */
    where: SimulationWhereUniqueInput
    /**
     * In case the Simulation found by the `where` argument doesn't exist, create a new Simulation with this data.
     */
    create: XOR<SimulationCreateInput, SimulationUncheckedCreateInput>
    /**
     * In case the Simulation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SimulationUpdateInput, SimulationUncheckedUpdateInput>
  }

  /**
   * Simulation delete
   */
  export type SimulationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null
    /**
     * Filter which Simulation to delete.
     */
    where: SimulationWhereUniqueInput
  }

  /**
   * Simulation deleteMany
   */
  export type SimulationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Simulations to delete
     */
    where?: SimulationWhereInput
    /**
     * Limit how many Simulations to delete.
     */
    limit?: number
  }

  /**
   * Simulation.report
   */
  export type Simulation$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
  }

  /**
   * Simulation.steps
   */
  export type Simulation$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimulationStep
     */
    select?: SimulationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimulationStep
     */
    omit?: SimulationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationStepInclude<ExtArgs> | null
    where?: SimulationStepWhereInput
    orderBy?: SimulationStepOrderByWithRelationInput | SimulationStepOrderByWithRelationInput[]
    cursor?: SimulationStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SimulationStepScalarFieldEnum | SimulationStepScalarFieldEnum[]
  }

  /**
   * Simulation without action
   */
  export type SimulationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulation
     */
    select?: SimulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Simulation
     */
    omit?: SimulationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationInclude<ExtArgs> | null
  }


  /**
   * Model SimulationStep
   */

  export type AggregateSimulationStep = {
    _count: SimulationStepCountAggregateOutputType | null
    _avg: SimulationStepAvgAggregateOutputType | null
    _sum: SimulationStepSumAggregateOutputType | null
    _min: SimulationStepMinAggregateOutputType | null
    _max: SimulationStepMaxAggregateOutputType | null
  }

  export type SimulationStepAvgAggregateOutputType = {
    stepNumber: number | null
    correctOption: number | null
    selectedOption: number | null
    timeTakenSec: number | null
  }

  export type SimulationStepSumAggregateOutputType = {
    stepNumber: number | null
    correctOption: number | null
    selectedOption: number | null
    timeTakenSec: number | null
  }

  export type SimulationStepMinAggregateOutputType = {
    id: string | null
    simulationId: string | null
    stepNumber: number | null
    title: string | null
    narrative: string | null
    attackerGoal: string | null
    correctOption: number | null
    selectedOption: number | null
    isCorrect: boolean | null
    timeTakenSec: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SimulationStepMaxAggregateOutputType = {
    id: string | null
    simulationId: string | null
    stepNumber: number | null
    title: string | null
    narrative: string | null
    attackerGoal: string | null
    correctOption: number | null
    selectedOption: number | null
    isCorrect: boolean | null
    timeTakenSec: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SimulationStepCountAggregateOutputType = {
    id: number
    simulationId: number
    stepNumber: number
    title: number
    narrative: number
    attackerGoal: number
    options: number
    correctOption: number
    selectedOption: number
    isCorrect: number
    timeTakenSec: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SimulationStepAvgAggregateInputType = {
    stepNumber?: true
    correctOption?: true
    selectedOption?: true
    timeTakenSec?: true
  }

  export type SimulationStepSumAggregateInputType = {
    stepNumber?: true
    correctOption?: true
    selectedOption?: true
    timeTakenSec?: true
  }

  export type SimulationStepMinAggregateInputType = {
    id?: true
    simulationId?: true
    stepNumber?: true
    title?: true
    narrative?: true
    attackerGoal?: true
    correctOption?: true
    selectedOption?: true
    isCorrect?: true
    timeTakenSec?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SimulationStepMaxAggregateInputType = {
    id?: true
    simulationId?: true
    stepNumber?: true
    title?: true
    narrative?: true
    attackerGoal?: true
    correctOption?: true
    selectedOption?: true
    isCorrect?: true
    timeTakenSec?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SimulationStepCountAggregateInputType = {
    id?: true
    simulationId?: true
    stepNumber?: true
    title?: true
    narrative?: true
    attackerGoal?: true
    options?: true
    correctOption?: true
    selectedOption?: true
    isCorrect?: true
    timeTakenSec?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SimulationStepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SimulationStep to aggregate.
     */
    where?: SimulationStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SimulationSteps to fetch.
     */
    orderBy?: SimulationStepOrderByWithRelationInput | SimulationStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SimulationStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SimulationSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SimulationSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SimulationSteps
    **/
    _count?: true | SimulationStepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SimulationStepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SimulationStepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SimulationStepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SimulationStepMaxAggregateInputType
  }

  export type GetSimulationStepAggregateType<T extends SimulationStepAggregateArgs> = {
        [P in keyof T & keyof AggregateSimulationStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSimulationStep[P]>
      : GetScalarType<T[P], AggregateSimulationStep[P]>
  }




  export type SimulationStepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SimulationStepWhereInput
    orderBy?: SimulationStepOrderByWithAggregationInput | SimulationStepOrderByWithAggregationInput[]
    by: SimulationStepScalarFieldEnum[] | SimulationStepScalarFieldEnum
    having?: SimulationStepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SimulationStepCountAggregateInputType | true
    _avg?: SimulationStepAvgAggregateInputType
    _sum?: SimulationStepSumAggregateInputType
    _min?: SimulationStepMinAggregateInputType
    _max?: SimulationStepMaxAggregateInputType
  }

  export type SimulationStepGroupByOutputType = {
    id: string
    simulationId: string
    stepNumber: number
    title: string
    narrative: string
    attackerGoal: string
    options: string[]
    correctOption: number
    selectedOption: number | null
    isCorrect: boolean | null
    timeTakenSec: number | null
    createdAt: Date
    updatedAt: Date
    _count: SimulationStepCountAggregateOutputType | null
    _avg: SimulationStepAvgAggregateOutputType | null
    _sum: SimulationStepSumAggregateOutputType | null
    _min: SimulationStepMinAggregateOutputType | null
    _max: SimulationStepMaxAggregateOutputType | null
  }

  type GetSimulationStepGroupByPayload<T extends SimulationStepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SimulationStepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SimulationStepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SimulationStepGroupByOutputType[P]>
            : GetScalarType<T[P], SimulationStepGroupByOutputType[P]>
        }
      >
    >


  export type SimulationStepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simulationId?: boolean
    stepNumber?: boolean
    title?: boolean
    narrative?: boolean
    attackerGoal?: boolean
    options?: boolean
    correctOption?: boolean
    selectedOption?: boolean
    isCorrect?: boolean
    timeTakenSec?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["simulationStep"]>

  export type SimulationStepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simulationId?: boolean
    stepNumber?: boolean
    title?: boolean
    narrative?: boolean
    attackerGoal?: boolean
    options?: boolean
    correctOption?: boolean
    selectedOption?: boolean
    isCorrect?: boolean
    timeTakenSec?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["simulationStep"]>

  export type SimulationStepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simulationId?: boolean
    stepNumber?: boolean
    title?: boolean
    narrative?: boolean
    attackerGoal?: boolean
    options?: boolean
    correctOption?: boolean
    selectedOption?: boolean
    isCorrect?: boolean
    timeTakenSec?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["simulationStep"]>

  export type SimulationStepSelectScalar = {
    id?: boolean
    simulationId?: boolean
    stepNumber?: boolean
    title?: boolean
    narrative?: boolean
    attackerGoal?: boolean
    options?: boolean
    correctOption?: boolean
    selectedOption?: boolean
    isCorrect?: boolean
    timeTakenSec?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SimulationStepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "simulationId" | "stepNumber" | "title" | "narrative" | "attackerGoal" | "options" | "correctOption" | "selectedOption" | "isCorrect" | "timeTakenSec" | "createdAt" | "updatedAt", ExtArgs["result"]["simulationStep"]>
  export type SimulationStepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }
  export type SimulationStepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }
  export type SimulationStepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
  }

  export type $SimulationStepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SimulationStep"
    objects: {
      simulation: Prisma.$SimulationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      simulationId: string
      stepNumber: number
      title: string
      narrative: string
      attackerGoal: string
      options: string[]
      correctOption: number
      selectedOption: number | null
      isCorrect: boolean | null
      timeTakenSec: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["simulationStep"]>
    composites: {}
  }

  type SimulationStepGetPayload<S extends boolean | null | undefined | SimulationStepDefaultArgs> = $Result.GetResult<Prisma.$SimulationStepPayload, S>

  type SimulationStepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SimulationStepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SimulationStepCountAggregateInputType | true
    }

  export interface SimulationStepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SimulationStep'], meta: { name: 'SimulationStep' } }
    /**
     * Find zero or one SimulationStep that matches the filter.
     * @param {SimulationStepFindUniqueArgs} args - Arguments to find a SimulationStep
     * @example
     * // Get one SimulationStep
     * const simulationStep = await prisma.simulationStep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SimulationStepFindUniqueArgs>(args: SelectSubset<T, SimulationStepFindUniqueArgs<ExtArgs>>): Prisma__SimulationStepClient<$Result.GetResult<Prisma.$SimulationStepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SimulationStep that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SimulationStepFindUniqueOrThrowArgs} args - Arguments to find a SimulationStep
     * @example
     * // Get one SimulationStep
     * const simulationStep = await prisma.simulationStep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SimulationStepFindUniqueOrThrowArgs>(args: SelectSubset<T, SimulationStepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SimulationStepClient<$Result.GetResult<Prisma.$SimulationStepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SimulationStep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationStepFindFirstArgs} args - Arguments to find a SimulationStep
     * @example
     * // Get one SimulationStep
     * const simulationStep = await prisma.simulationStep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SimulationStepFindFirstArgs>(args?: SelectSubset<T, SimulationStepFindFirstArgs<ExtArgs>>): Prisma__SimulationStepClient<$Result.GetResult<Prisma.$SimulationStepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SimulationStep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationStepFindFirstOrThrowArgs} args - Arguments to find a SimulationStep
     * @example
     * // Get one SimulationStep
     * const simulationStep = await prisma.simulationStep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SimulationStepFindFirstOrThrowArgs>(args?: SelectSubset<T, SimulationStepFindFirstOrThrowArgs<ExtArgs>>): Prisma__SimulationStepClient<$Result.GetResult<Prisma.$SimulationStepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SimulationSteps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationStepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SimulationSteps
     * const simulationSteps = await prisma.simulationStep.findMany()
     * 
     * // Get first 10 SimulationSteps
     * const simulationSteps = await prisma.simulationStep.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const simulationStepWithIdOnly = await prisma.simulationStep.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SimulationStepFindManyArgs>(args?: SelectSubset<T, SimulationStepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimulationStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SimulationStep.
     * @param {SimulationStepCreateArgs} args - Arguments to create a SimulationStep.
     * @example
     * // Create one SimulationStep
     * const SimulationStep = await prisma.simulationStep.create({
     *   data: {
     *     // ... data to create a SimulationStep
     *   }
     * })
     * 
     */
    create<T extends SimulationStepCreateArgs>(args: SelectSubset<T, SimulationStepCreateArgs<ExtArgs>>): Prisma__SimulationStepClient<$Result.GetResult<Prisma.$SimulationStepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SimulationSteps.
     * @param {SimulationStepCreateManyArgs} args - Arguments to create many SimulationSteps.
     * @example
     * // Create many SimulationSteps
     * const simulationStep = await prisma.simulationStep.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SimulationStepCreateManyArgs>(args?: SelectSubset<T, SimulationStepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SimulationSteps and returns the data saved in the database.
     * @param {SimulationStepCreateManyAndReturnArgs} args - Arguments to create many SimulationSteps.
     * @example
     * // Create many SimulationSteps
     * const simulationStep = await prisma.simulationStep.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SimulationSteps and only return the `id`
     * const simulationStepWithIdOnly = await prisma.simulationStep.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SimulationStepCreateManyAndReturnArgs>(args?: SelectSubset<T, SimulationStepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimulationStepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SimulationStep.
     * @param {SimulationStepDeleteArgs} args - Arguments to delete one SimulationStep.
     * @example
     * // Delete one SimulationStep
     * const SimulationStep = await prisma.simulationStep.delete({
     *   where: {
     *     // ... filter to delete one SimulationStep
     *   }
     * })
     * 
     */
    delete<T extends SimulationStepDeleteArgs>(args: SelectSubset<T, SimulationStepDeleteArgs<ExtArgs>>): Prisma__SimulationStepClient<$Result.GetResult<Prisma.$SimulationStepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SimulationStep.
     * @param {SimulationStepUpdateArgs} args - Arguments to update one SimulationStep.
     * @example
     * // Update one SimulationStep
     * const simulationStep = await prisma.simulationStep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SimulationStepUpdateArgs>(args: SelectSubset<T, SimulationStepUpdateArgs<ExtArgs>>): Prisma__SimulationStepClient<$Result.GetResult<Prisma.$SimulationStepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SimulationSteps.
     * @param {SimulationStepDeleteManyArgs} args - Arguments to filter SimulationSteps to delete.
     * @example
     * // Delete a few SimulationSteps
     * const { count } = await prisma.simulationStep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SimulationStepDeleteManyArgs>(args?: SelectSubset<T, SimulationStepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SimulationSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationStepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SimulationSteps
     * const simulationStep = await prisma.simulationStep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SimulationStepUpdateManyArgs>(args: SelectSubset<T, SimulationStepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SimulationSteps and returns the data updated in the database.
     * @param {SimulationStepUpdateManyAndReturnArgs} args - Arguments to update many SimulationSteps.
     * @example
     * // Update many SimulationSteps
     * const simulationStep = await prisma.simulationStep.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SimulationSteps and only return the `id`
     * const simulationStepWithIdOnly = await prisma.simulationStep.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SimulationStepUpdateManyAndReturnArgs>(args: SelectSubset<T, SimulationStepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimulationStepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SimulationStep.
     * @param {SimulationStepUpsertArgs} args - Arguments to update or create a SimulationStep.
     * @example
     * // Update or create a SimulationStep
     * const simulationStep = await prisma.simulationStep.upsert({
     *   create: {
     *     // ... data to create a SimulationStep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SimulationStep we want to update
     *   }
     * })
     */
    upsert<T extends SimulationStepUpsertArgs>(args: SelectSubset<T, SimulationStepUpsertArgs<ExtArgs>>): Prisma__SimulationStepClient<$Result.GetResult<Prisma.$SimulationStepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SimulationSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationStepCountArgs} args - Arguments to filter SimulationSteps to count.
     * @example
     * // Count the number of SimulationSteps
     * const count = await prisma.simulationStep.count({
     *   where: {
     *     // ... the filter for the SimulationSteps we want to count
     *   }
     * })
    **/
    count<T extends SimulationStepCountArgs>(
      args?: Subset<T, SimulationStepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SimulationStepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SimulationStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationStepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SimulationStepAggregateArgs>(args: Subset<T, SimulationStepAggregateArgs>): Prisma.PrismaPromise<GetSimulationStepAggregateType<T>>

    /**
     * Group by SimulationStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimulationStepGroupByArgs} args - Group by arguments.
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
      T extends SimulationStepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SimulationStepGroupByArgs['orderBy'] }
        : { orderBy?: SimulationStepGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SimulationStepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSimulationStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SimulationStep model
   */
  readonly fields: SimulationStepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SimulationStep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SimulationStepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    simulation<T extends SimulationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SimulationDefaultArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SimulationStep model
   */
  interface SimulationStepFieldRefs {
    readonly id: FieldRef<"SimulationStep", 'String'>
    readonly simulationId: FieldRef<"SimulationStep", 'String'>
    readonly stepNumber: FieldRef<"SimulationStep", 'Int'>
    readonly title: FieldRef<"SimulationStep", 'String'>
    readonly narrative: FieldRef<"SimulationStep", 'String'>
    readonly attackerGoal: FieldRef<"SimulationStep", 'String'>
    readonly options: FieldRef<"SimulationStep", 'String[]'>
    readonly correctOption: FieldRef<"SimulationStep", 'Int'>
    readonly selectedOption: FieldRef<"SimulationStep", 'Int'>
    readonly isCorrect: FieldRef<"SimulationStep", 'Boolean'>
    readonly timeTakenSec: FieldRef<"SimulationStep", 'Int'>
    readonly createdAt: FieldRef<"SimulationStep", 'DateTime'>
    readonly updatedAt: FieldRef<"SimulationStep", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SimulationStep findUnique
   */
  export type SimulationStepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimulationStep
     */
    select?: SimulationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimulationStep
     */
    omit?: SimulationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationStepInclude<ExtArgs> | null
    /**
     * Filter, which SimulationStep to fetch.
     */
    where: SimulationStepWhereUniqueInput
  }

  /**
   * SimulationStep findUniqueOrThrow
   */
  export type SimulationStepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimulationStep
     */
    select?: SimulationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimulationStep
     */
    omit?: SimulationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationStepInclude<ExtArgs> | null
    /**
     * Filter, which SimulationStep to fetch.
     */
    where: SimulationStepWhereUniqueInput
  }

  /**
   * SimulationStep findFirst
   */
  export type SimulationStepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimulationStep
     */
    select?: SimulationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimulationStep
     */
    omit?: SimulationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationStepInclude<ExtArgs> | null
    /**
     * Filter, which SimulationStep to fetch.
     */
    where?: SimulationStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SimulationSteps to fetch.
     */
    orderBy?: SimulationStepOrderByWithRelationInput | SimulationStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SimulationSteps.
     */
    cursor?: SimulationStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SimulationSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SimulationSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SimulationSteps.
     */
    distinct?: SimulationStepScalarFieldEnum | SimulationStepScalarFieldEnum[]
  }

  /**
   * SimulationStep findFirstOrThrow
   */
  export type SimulationStepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimulationStep
     */
    select?: SimulationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimulationStep
     */
    omit?: SimulationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationStepInclude<ExtArgs> | null
    /**
     * Filter, which SimulationStep to fetch.
     */
    where?: SimulationStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SimulationSteps to fetch.
     */
    orderBy?: SimulationStepOrderByWithRelationInput | SimulationStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SimulationSteps.
     */
    cursor?: SimulationStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SimulationSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SimulationSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SimulationSteps.
     */
    distinct?: SimulationStepScalarFieldEnum | SimulationStepScalarFieldEnum[]
  }

  /**
   * SimulationStep findMany
   */
  export type SimulationStepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimulationStep
     */
    select?: SimulationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimulationStep
     */
    omit?: SimulationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationStepInclude<ExtArgs> | null
    /**
     * Filter, which SimulationSteps to fetch.
     */
    where?: SimulationStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SimulationSteps to fetch.
     */
    orderBy?: SimulationStepOrderByWithRelationInput | SimulationStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SimulationSteps.
     */
    cursor?: SimulationStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SimulationSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SimulationSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SimulationSteps.
     */
    distinct?: SimulationStepScalarFieldEnum | SimulationStepScalarFieldEnum[]
  }

  /**
   * SimulationStep create
   */
  export type SimulationStepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimulationStep
     */
    select?: SimulationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimulationStep
     */
    omit?: SimulationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationStepInclude<ExtArgs> | null
    /**
     * The data needed to create a SimulationStep.
     */
    data: XOR<SimulationStepCreateInput, SimulationStepUncheckedCreateInput>
  }

  /**
   * SimulationStep createMany
   */
  export type SimulationStepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SimulationSteps.
     */
    data: SimulationStepCreateManyInput | SimulationStepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SimulationStep createManyAndReturn
   */
  export type SimulationStepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimulationStep
     */
    select?: SimulationStepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SimulationStep
     */
    omit?: SimulationStepOmit<ExtArgs> | null
    /**
     * The data used to create many SimulationSteps.
     */
    data: SimulationStepCreateManyInput | SimulationStepCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationStepIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SimulationStep update
   */
  export type SimulationStepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimulationStep
     */
    select?: SimulationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimulationStep
     */
    omit?: SimulationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationStepInclude<ExtArgs> | null
    /**
     * The data needed to update a SimulationStep.
     */
    data: XOR<SimulationStepUpdateInput, SimulationStepUncheckedUpdateInput>
    /**
     * Choose, which SimulationStep to update.
     */
    where: SimulationStepWhereUniqueInput
  }

  /**
   * SimulationStep updateMany
   */
  export type SimulationStepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SimulationSteps.
     */
    data: XOR<SimulationStepUpdateManyMutationInput, SimulationStepUncheckedUpdateManyInput>
    /**
     * Filter which SimulationSteps to update
     */
    where?: SimulationStepWhereInput
    /**
     * Limit how many SimulationSteps to update.
     */
    limit?: number
  }

  /**
   * SimulationStep updateManyAndReturn
   */
  export type SimulationStepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimulationStep
     */
    select?: SimulationStepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SimulationStep
     */
    omit?: SimulationStepOmit<ExtArgs> | null
    /**
     * The data used to update SimulationSteps.
     */
    data: XOR<SimulationStepUpdateManyMutationInput, SimulationStepUncheckedUpdateManyInput>
    /**
     * Filter which SimulationSteps to update
     */
    where?: SimulationStepWhereInput
    /**
     * Limit how many SimulationSteps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationStepIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SimulationStep upsert
   */
  export type SimulationStepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimulationStep
     */
    select?: SimulationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimulationStep
     */
    omit?: SimulationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationStepInclude<ExtArgs> | null
    /**
     * The filter to search for the SimulationStep to update in case it exists.
     */
    where: SimulationStepWhereUniqueInput
    /**
     * In case the SimulationStep found by the `where` argument doesn't exist, create a new SimulationStep with this data.
     */
    create: XOR<SimulationStepCreateInput, SimulationStepUncheckedCreateInput>
    /**
     * In case the SimulationStep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SimulationStepUpdateInput, SimulationStepUncheckedUpdateInput>
  }

  /**
   * SimulationStep delete
   */
  export type SimulationStepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimulationStep
     */
    select?: SimulationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimulationStep
     */
    omit?: SimulationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationStepInclude<ExtArgs> | null
    /**
     * Filter which SimulationStep to delete.
     */
    where: SimulationStepWhereUniqueInput
  }

  /**
   * SimulationStep deleteMany
   */
  export type SimulationStepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SimulationSteps to delete
     */
    where?: SimulationStepWhereInput
    /**
     * Limit how many SimulationSteps to delete.
     */
    limit?: number
  }

  /**
   * SimulationStep without action
   */
  export type SimulationStepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimulationStep
     */
    select?: SimulationStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimulationStep
     */
    omit?: SimulationStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimulationStepInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportAvgAggregateOutputType = {
    score: number | null
    timeTakenSec: number | null
    correctActions: number | null
    totalActions: number | null
    riskReduced: number | null
  }

  export type ReportSumAggregateOutputType = {
    score: number | null
    timeTakenSec: number | null
    correctActions: number | null
    totalActions: number | null
    riskReduced: number | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    simulationId: string | null
    userId: string | null
    score: number | null
    timeTakenSec: number | null
    correctActions: number | null
    totalActions: number | null
    riskReduced: number | null
    summary: string | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    simulationId: string | null
    userId: string | null
    score: number | null
    timeTakenSec: number | null
    correctActions: number | null
    totalActions: number | null
    riskReduced: number | null
    summary: string | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    simulationId: number
    userId: number
    score: number
    timeTakenSec: number
    correctActions: number
    totalActions: number
    riskReduced: number
    summary: number
    strengths: number
    areasToImprove: number
    recommendations: number
    completedAt: number
    createdAt: number
    _all: number
  }


  export type ReportAvgAggregateInputType = {
    score?: true
    timeTakenSec?: true
    correctActions?: true
    totalActions?: true
    riskReduced?: true
  }

  export type ReportSumAggregateInputType = {
    score?: true
    timeTakenSec?: true
    correctActions?: true
    totalActions?: true
    riskReduced?: true
  }

  export type ReportMinAggregateInputType = {
    id?: true
    simulationId?: true
    userId?: true
    score?: true
    timeTakenSec?: true
    correctActions?: true
    totalActions?: true
    riskReduced?: true
    summary?: true
    completedAt?: true
    createdAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    simulationId?: true
    userId?: true
    score?: true
    timeTakenSec?: true
    correctActions?: true
    totalActions?: true
    riskReduced?: true
    summary?: true
    completedAt?: true
    createdAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    simulationId?: true
    userId?: true
    score?: true
    timeTakenSec?: true
    correctActions?: true
    totalActions?: true
    riskReduced?: true
    summary?: true
    strengths?: true
    areasToImprove?: true
    recommendations?: true
    completedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _avg?: ReportAvgAggregateInputType
    _sum?: ReportSumAggregateInputType
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    simulationId: string
    userId: string
    score: number
    timeTakenSec: number
    correctActions: number
    totalActions: number
    riskReduced: number
    summary: string
    strengths: string[]
    areasToImprove: string[]
    recommendations: string[]
    completedAt: Date
    createdAt: Date
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simulationId?: boolean
    userId?: boolean
    score?: boolean
    timeTakenSec?: boolean
    correctActions?: boolean
    totalActions?: boolean
    riskReduced?: boolean
    summary?: boolean
    strengths?: boolean
    areasToImprove?: boolean
    recommendations?: boolean
    completedAt?: boolean
    createdAt?: boolean
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simulationId?: boolean
    userId?: boolean
    score?: boolean
    timeTakenSec?: boolean
    correctActions?: boolean
    totalActions?: boolean
    riskReduced?: boolean
    summary?: boolean
    strengths?: boolean
    areasToImprove?: boolean
    recommendations?: boolean
    completedAt?: boolean
    createdAt?: boolean
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    simulationId?: boolean
    userId?: boolean
    score?: boolean
    timeTakenSec?: boolean
    correctActions?: boolean
    totalActions?: boolean
    riskReduced?: boolean
    summary?: boolean
    strengths?: boolean
    areasToImprove?: boolean
    recommendations?: boolean
    completedAt?: boolean
    createdAt?: boolean
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    simulationId?: boolean
    userId?: boolean
    score?: boolean
    timeTakenSec?: boolean
    correctActions?: boolean
    totalActions?: boolean
    riskReduced?: boolean
    summary?: boolean
    strengths?: boolean
    areasToImprove?: boolean
    recommendations?: boolean
    completedAt?: boolean
    createdAt?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "simulationId" | "userId" | "score" | "timeTakenSec" | "correctActions" | "totalActions" | "riskReduced" | "summary" | "strengths" | "areasToImprove" | "recommendations" | "completedAt" | "createdAt", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simulation?: boolean | SimulationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      simulation: Prisma.$SimulationPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      simulationId: string
      userId: string
      score: number
      timeTakenSec: number
      correctActions: number
      totalActions: number
      riskReduced: number
      summary: string
      strengths: string[]
      areasToImprove: string[]
      recommendations: string[]
      completedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {ReportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
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
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    simulation<T extends SimulationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SimulationDefaultArgs<ExtArgs>>): Prisma__SimulationClient<$Result.GetResult<Prisma.$SimulationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'String'>
    readonly simulationId: FieldRef<"Report", 'String'>
    readonly userId: FieldRef<"Report", 'String'>
    readonly score: FieldRef<"Report", 'Int'>
    readonly timeTakenSec: FieldRef<"Report", 'Int'>
    readonly correctActions: FieldRef<"Report", 'Int'>
    readonly totalActions: FieldRef<"Report", 'Int'>
    readonly riskReduced: FieldRef<"Report", 'Int'>
    readonly summary: FieldRef<"Report", 'String'>
    readonly strengths: FieldRef<"Report", 'String[]'>
    readonly areasToImprove: FieldRef<"Report", 'String[]'>
    readonly recommendations: FieldRef<"Report", 'String[]'>
    readonly completedAt: FieldRef<"Report", 'DateTime'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report updateManyAndReturn
   */
  export type ReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Model LearningTopic
   */

  export type AggregateLearningTopic = {
    _count: LearningTopicCountAggregateOutputType | null
    _avg: LearningTopicAvgAggregateOutputType | null
    _sum: LearningTopicSumAggregateOutputType | null
    _min: LearningTopicMinAggregateOutputType | null
    _max: LearningTopicMaxAggregateOutputType | null
  }

  export type LearningTopicAvgAggregateOutputType = {
    lessons: number | null
  }

  export type LearningTopicSumAggregateOutputType = {
    lessons: number | null
  }

  export type LearningTopicMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    level: $Enums.LearningLevel | null
    lessons: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LearningTopicMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    level: $Enums.LearningLevel | null
    lessons: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LearningTopicCountAggregateOutputType = {
    id: number
    title: number
    description: number
    level: number
    lessons: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LearningTopicAvgAggregateInputType = {
    lessons?: true
  }

  export type LearningTopicSumAggregateInputType = {
    lessons?: true
  }

  export type LearningTopicMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    level?: true
    lessons?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LearningTopicMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    level?: true
    lessons?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LearningTopicCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    level?: true
    lessons?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LearningTopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningTopic to aggregate.
     */
    where?: LearningTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningTopics to fetch.
     */
    orderBy?: LearningTopicOrderByWithRelationInput | LearningTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LearningTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LearningTopics
    **/
    _count?: true | LearningTopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LearningTopicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LearningTopicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LearningTopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LearningTopicMaxAggregateInputType
  }

  export type GetLearningTopicAggregateType<T extends LearningTopicAggregateArgs> = {
        [P in keyof T & keyof AggregateLearningTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLearningTopic[P]>
      : GetScalarType<T[P], AggregateLearningTopic[P]>
  }




  export type LearningTopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningTopicWhereInput
    orderBy?: LearningTopicOrderByWithAggregationInput | LearningTopicOrderByWithAggregationInput[]
    by: LearningTopicScalarFieldEnum[] | LearningTopicScalarFieldEnum
    having?: LearningTopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LearningTopicCountAggregateInputType | true
    _avg?: LearningTopicAvgAggregateInputType
    _sum?: LearningTopicSumAggregateInputType
    _min?: LearningTopicMinAggregateInputType
    _max?: LearningTopicMaxAggregateInputType
  }

  export type LearningTopicGroupByOutputType = {
    id: string
    title: string
    description: string
    level: $Enums.LearningLevel
    lessons: number
    createdAt: Date
    updatedAt: Date
    _count: LearningTopicCountAggregateOutputType | null
    _avg: LearningTopicAvgAggregateOutputType | null
    _sum: LearningTopicSumAggregateOutputType | null
    _min: LearningTopicMinAggregateOutputType | null
    _max: LearningTopicMaxAggregateOutputType | null
  }

  type GetLearningTopicGroupByPayload<T extends LearningTopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LearningTopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LearningTopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LearningTopicGroupByOutputType[P]>
            : GetScalarType<T[P], LearningTopicGroupByOutputType[P]>
        }
      >
    >


  export type LearningTopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    level?: boolean
    lessons?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    progress?: boolean | LearningTopic$progressArgs<ExtArgs>
    _count?: boolean | LearningTopicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningTopic"]>

  export type LearningTopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    level?: boolean
    lessons?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["learningTopic"]>

  export type LearningTopicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    level?: boolean
    lessons?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["learningTopic"]>

  export type LearningTopicSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    level?: boolean
    lessons?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LearningTopicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "level" | "lessons" | "createdAt" | "updatedAt", ExtArgs["result"]["learningTopic"]>
  export type LearningTopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progress?: boolean | LearningTopic$progressArgs<ExtArgs>
    _count?: boolean | LearningTopicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LearningTopicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LearningTopicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LearningTopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LearningTopic"
    objects: {
      progress: Prisma.$UserProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      level: $Enums.LearningLevel
      lessons: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["learningTopic"]>
    composites: {}
  }

  type LearningTopicGetPayload<S extends boolean | null | undefined | LearningTopicDefaultArgs> = $Result.GetResult<Prisma.$LearningTopicPayload, S>

  type LearningTopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LearningTopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LearningTopicCountAggregateInputType | true
    }

  export interface LearningTopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LearningTopic'], meta: { name: 'LearningTopic' } }
    /**
     * Find zero or one LearningTopic that matches the filter.
     * @param {LearningTopicFindUniqueArgs} args - Arguments to find a LearningTopic
     * @example
     * // Get one LearningTopic
     * const learningTopic = await prisma.learningTopic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LearningTopicFindUniqueArgs>(args: SelectSubset<T, LearningTopicFindUniqueArgs<ExtArgs>>): Prisma__LearningTopicClient<$Result.GetResult<Prisma.$LearningTopicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LearningTopic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LearningTopicFindUniqueOrThrowArgs} args - Arguments to find a LearningTopic
     * @example
     * // Get one LearningTopic
     * const learningTopic = await prisma.learningTopic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LearningTopicFindUniqueOrThrowArgs>(args: SelectSubset<T, LearningTopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LearningTopicClient<$Result.GetResult<Prisma.$LearningTopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningTopic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningTopicFindFirstArgs} args - Arguments to find a LearningTopic
     * @example
     * // Get one LearningTopic
     * const learningTopic = await prisma.learningTopic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LearningTopicFindFirstArgs>(args?: SelectSubset<T, LearningTopicFindFirstArgs<ExtArgs>>): Prisma__LearningTopicClient<$Result.GetResult<Prisma.$LearningTopicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningTopic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningTopicFindFirstOrThrowArgs} args - Arguments to find a LearningTopic
     * @example
     * // Get one LearningTopic
     * const learningTopic = await prisma.learningTopic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LearningTopicFindFirstOrThrowArgs>(args?: SelectSubset<T, LearningTopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__LearningTopicClient<$Result.GetResult<Prisma.$LearningTopicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LearningTopics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningTopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LearningTopics
     * const learningTopics = await prisma.learningTopic.findMany()
     * 
     * // Get first 10 LearningTopics
     * const learningTopics = await prisma.learningTopic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const learningTopicWithIdOnly = await prisma.learningTopic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LearningTopicFindManyArgs>(args?: SelectSubset<T, LearningTopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningTopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LearningTopic.
     * @param {LearningTopicCreateArgs} args - Arguments to create a LearningTopic.
     * @example
     * // Create one LearningTopic
     * const LearningTopic = await prisma.learningTopic.create({
     *   data: {
     *     // ... data to create a LearningTopic
     *   }
     * })
     * 
     */
    create<T extends LearningTopicCreateArgs>(args: SelectSubset<T, LearningTopicCreateArgs<ExtArgs>>): Prisma__LearningTopicClient<$Result.GetResult<Prisma.$LearningTopicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LearningTopics.
     * @param {LearningTopicCreateManyArgs} args - Arguments to create many LearningTopics.
     * @example
     * // Create many LearningTopics
     * const learningTopic = await prisma.learningTopic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LearningTopicCreateManyArgs>(args?: SelectSubset<T, LearningTopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LearningTopics and returns the data saved in the database.
     * @param {LearningTopicCreateManyAndReturnArgs} args - Arguments to create many LearningTopics.
     * @example
     * // Create many LearningTopics
     * const learningTopic = await prisma.learningTopic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LearningTopics and only return the `id`
     * const learningTopicWithIdOnly = await prisma.learningTopic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LearningTopicCreateManyAndReturnArgs>(args?: SelectSubset<T, LearningTopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningTopicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LearningTopic.
     * @param {LearningTopicDeleteArgs} args - Arguments to delete one LearningTopic.
     * @example
     * // Delete one LearningTopic
     * const LearningTopic = await prisma.learningTopic.delete({
     *   where: {
     *     // ... filter to delete one LearningTopic
     *   }
     * })
     * 
     */
    delete<T extends LearningTopicDeleteArgs>(args: SelectSubset<T, LearningTopicDeleteArgs<ExtArgs>>): Prisma__LearningTopicClient<$Result.GetResult<Prisma.$LearningTopicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LearningTopic.
     * @param {LearningTopicUpdateArgs} args - Arguments to update one LearningTopic.
     * @example
     * // Update one LearningTopic
     * const learningTopic = await prisma.learningTopic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LearningTopicUpdateArgs>(args: SelectSubset<T, LearningTopicUpdateArgs<ExtArgs>>): Prisma__LearningTopicClient<$Result.GetResult<Prisma.$LearningTopicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LearningTopics.
     * @param {LearningTopicDeleteManyArgs} args - Arguments to filter LearningTopics to delete.
     * @example
     * // Delete a few LearningTopics
     * const { count } = await prisma.learningTopic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LearningTopicDeleteManyArgs>(args?: SelectSubset<T, LearningTopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningTopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LearningTopics
     * const learningTopic = await prisma.learningTopic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LearningTopicUpdateManyArgs>(args: SelectSubset<T, LearningTopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningTopics and returns the data updated in the database.
     * @param {LearningTopicUpdateManyAndReturnArgs} args - Arguments to update many LearningTopics.
     * @example
     * // Update many LearningTopics
     * const learningTopic = await prisma.learningTopic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LearningTopics and only return the `id`
     * const learningTopicWithIdOnly = await prisma.learningTopic.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LearningTopicUpdateManyAndReturnArgs>(args: SelectSubset<T, LearningTopicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningTopicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LearningTopic.
     * @param {LearningTopicUpsertArgs} args - Arguments to update or create a LearningTopic.
     * @example
     * // Update or create a LearningTopic
     * const learningTopic = await prisma.learningTopic.upsert({
     *   create: {
     *     // ... data to create a LearningTopic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LearningTopic we want to update
     *   }
     * })
     */
    upsert<T extends LearningTopicUpsertArgs>(args: SelectSubset<T, LearningTopicUpsertArgs<ExtArgs>>): Prisma__LearningTopicClient<$Result.GetResult<Prisma.$LearningTopicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LearningTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningTopicCountArgs} args - Arguments to filter LearningTopics to count.
     * @example
     * // Count the number of LearningTopics
     * const count = await prisma.learningTopic.count({
     *   where: {
     *     // ... the filter for the LearningTopics we want to count
     *   }
     * })
    **/
    count<T extends LearningTopicCountArgs>(
      args?: Subset<T, LearningTopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LearningTopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LearningTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningTopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LearningTopicAggregateArgs>(args: Subset<T, LearningTopicAggregateArgs>): Prisma.PrismaPromise<GetLearningTopicAggregateType<T>>

    /**
     * Group by LearningTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningTopicGroupByArgs} args - Group by arguments.
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
      T extends LearningTopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LearningTopicGroupByArgs['orderBy'] }
        : { orderBy?: LearningTopicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LearningTopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLearningTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LearningTopic model
   */
  readonly fields: LearningTopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LearningTopic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LearningTopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    progress<T extends LearningTopic$progressArgs<ExtArgs> = {}>(args?: Subset<T, LearningTopic$progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LearningTopic model
   */
  interface LearningTopicFieldRefs {
    readonly id: FieldRef<"LearningTopic", 'String'>
    readonly title: FieldRef<"LearningTopic", 'String'>
    readonly description: FieldRef<"LearningTopic", 'String'>
    readonly level: FieldRef<"LearningTopic", 'LearningLevel'>
    readonly lessons: FieldRef<"LearningTopic", 'Int'>
    readonly createdAt: FieldRef<"LearningTopic", 'DateTime'>
    readonly updatedAt: FieldRef<"LearningTopic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LearningTopic findUnique
   */
  export type LearningTopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningTopic
     */
    select?: LearningTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningTopic
     */
    omit?: LearningTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningTopicInclude<ExtArgs> | null
    /**
     * Filter, which LearningTopic to fetch.
     */
    where: LearningTopicWhereUniqueInput
  }

  /**
   * LearningTopic findUniqueOrThrow
   */
  export type LearningTopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningTopic
     */
    select?: LearningTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningTopic
     */
    omit?: LearningTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningTopicInclude<ExtArgs> | null
    /**
     * Filter, which LearningTopic to fetch.
     */
    where: LearningTopicWhereUniqueInput
  }

  /**
   * LearningTopic findFirst
   */
  export type LearningTopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningTopic
     */
    select?: LearningTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningTopic
     */
    omit?: LearningTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningTopicInclude<ExtArgs> | null
    /**
     * Filter, which LearningTopic to fetch.
     */
    where?: LearningTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningTopics to fetch.
     */
    orderBy?: LearningTopicOrderByWithRelationInput | LearningTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningTopics.
     */
    cursor?: LearningTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningTopics.
     */
    distinct?: LearningTopicScalarFieldEnum | LearningTopicScalarFieldEnum[]
  }

  /**
   * LearningTopic findFirstOrThrow
   */
  export type LearningTopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningTopic
     */
    select?: LearningTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningTopic
     */
    omit?: LearningTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningTopicInclude<ExtArgs> | null
    /**
     * Filter, which LearningTopic to fetch.
     */
    where?: LearningTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningTopics to fetch.
     */
    orderBy?: LearningTopicOrderByWithRelationInput | LearningTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningTopics.
     */
    cursor?: LearningTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningTopics.
     */
    distinct?: LearningTopicScalarFieldEnum | LearningTopicScalarFieldEnum[]
  }

  /**
   * LearningTopic findMany
   */
  export type LearningTopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningTopic
     */
    select?: LearningTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningTopic
     */
    omit?: LearningTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningTopicInclude<ExtArgs> | null
    /**
     * Filter, which LearningTopics to fetch.
     */
    where?: LearningTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningTopics to fetch.
     */
    orderBy?: LearningTopicOrderByWithRelationInput | LearningTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LearningTopics.
     */
    cursor?: LearningTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningTopics.
     */
    distinct?: LearningTopicScalarFieldEnum | LearningTopicScalarFieldEnum[]
  }

  /**
   * LearningTopic create
   */
  export type LearningTopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningTopic
     */
    select?: LearningTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningTopic
     */
    omit?: LearningTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningTopicInclude<ExtArgs> | null
    /**
     * The data needed to create a LearningTopic.
     */
    data: XOR<LearningTopicCreateInput, LearningTopicUncheckedCreateInput>
  }

  /**
   * LearningTopic createMany
   */
  export type LearningTopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LearningTopics.
     */
    data: LearningTopicCreateManyInput | LearningTopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LearningTopic createManyAndReturn
   */
  export type LearningTopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningTopic
     */
    select?: LearningTopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningTopic
     */
    omit?: LearningTopicOmit<ExtArgs> | null
    /**
     * The data used to create many LearningTopics.
     */
    data: LearningTopicCreateManyInput | LearningTopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LearningTopic update
   */
  export type LearningTopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningTopic
     */
    select?: LearningTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningTopic
     */
    omit?: LearningTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningTopicInclude<ExtArgs> | null
    /**
     * The data needed to update a LearningTopic.
     */
    data: XOR<LearningTopicUpdateInput, LearningTopicUncheckedUpdateInput>
    /**
     * Choose, which LearningTopic to update.
     */
    where: LearningTopicWhereUniqueInput
  }

  /**
   * LearningTopic updateMany
   */
  export type LearningTopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LearningTopics.
     */
    data: XOR<LearningTopicUpdateManyMutationInput, LearningTopicUncheckedUpdateManyInput>
    /**
     * Filter which LearningTopics to update
     */
    where?: LearningTopicWhereInput
    /**
     * Limit how many LearningTopics to update.
     */
    limit?: number
  }

  /**
   * LearningTopic updateManyAndReturn
   */
  export type LearningTopicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningTopic
     */
    select?: LearningTopicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningTopic
     */
    omit?: LearningTopicOmit<ExtArgs> | null
    /**
     * The data used to update LearningTopics.
     */
    data: XOR<LearningTopicUpdateManyMutationInput, LearningTopicUncheckedUpdateManyInput>
    /**
     * Filter which LearningTopics to update
     */
    where?: LearningTopicWhereInput
    /**
     * Limit how many LearningTopics to update.
     */
    limit?: number
  }

  /**
   * LearningTopic upsert
   */
  export type LearningTopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningTopic
     */
    select?: LearningTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningTopic
     */
    omit?: LearningTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningTopicInclude<ExtArgs> | null
    /**
     * The filter to search for the LearningTopic to update in case it exists.
     */
    where: LearningTopicWhereUniqueInput
    /**
     * In case the LearningTopic found by the `where` argument doesn't exist, create a new LearningTopic with this data.
     */
    create: XOR<LearningTopicCreateInput, LearningTopicUncheckedCreateInput>
    /**
     * In case the LearningTopic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LearningTopicUpdateInput, LearningTopicUncheckedUpdateInput>
  }

  /**
   * LearningTopic delete
   */
  export type LearningTopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningTopic
     */
    select?: LearningTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningTopic
     */
    omit?: LearningTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningTopicInclude<ExtArgs> | null
    /**
     * Filter which LearningTopic to delete.
     */
    where: LearningTopicWhereUniqueInput
  }

  /**
   * LearningTopic deleteMany
   */
  export type LearningTopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningTopics to delete
     */
    where?: LearningTopicWhereInput
    /**
     * Limit how many LearningTopics to delete.
     */
    limit?: number
  }

  /**
   * LearningTopic.progress
   */
  export type LearningTopic$progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgress
     */
    omit?: UserProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null
    where?: UserProgressWhereInput
    orderBy?: UserProgressOrderByWithRelationInput | UserProgressOrderByWithRelationInput[]
    cursor?: UserProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserProgressScalarFieldEnum | UserProgressScalarFieldEnum[]
  }

  /**
   * LearningTopic without action
   */
  export type LearningTopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningTopic
     */
    select?: LearningTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningTopic
     */
    omit?: LearningTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningTopicInclude<ExtArgs> | null
  }


  /**
   * Model UserProgress
   */

  export type AggregateUserProgress = {
    _count: UserProgressCountAggregateOutputType | null
    _avg: UserProgressAvgAggregateOutputType | null
    _sum: UserProgressSumAggregateOutputType | null
    _min: UserProgressMinAggregateOutputType | null
    _max: UserProgressMaxAggregateOutputType | null
  }

  export type UserProgressAvgAggregateOutputType = {
    progress: number | null
  }

  export type UserProgressSumAggregateOutputType = {
    progress: number | null
  }

  export type UserProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    topicId: string | null
    progress: number | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    topicId: string | null
    progress: number | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProgressCountAggregateOutputType = {
    id: number
    userId: number
    topicId: number
    progress: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserProgressAvgAggregateInputType = {
    progress?: true
  }

  export type UserProgressSumAggregateInputType = {
    progress?: true
  }

  export type UserProgressMinAggregateInputType = {
    id?: true
    userId?: true
    topicId?: true
    progress?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    topicId?: true
    progress?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProgressCountAggregateInputType = {
    id?: true
    userId?: true
    topicId?: true
    progress?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProgress to aggregate.
     */
    where?: UserProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProgresses to fetch.
     */
    orderBy?: UserProgressOrderByWithRelationInput | UserProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProgresses
    **/
    _count?: true | UserProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProgressMaxAggregateInputType
  }

  export type GetUserProgressAggregateType<T extends UserProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProgress[P]>
      : GetScalarType<T[P], AggregateUserProgress[P]>
  }




  export type UserProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProgressWhereInput
    orderBy?: UserProgressOrderByWithAggregationInput | UserProgressOrderByWithAggregationInput[]
    by: UserProgressScalarFieldEnum[] | UserProgressScalarFieldEnum
    having?: UserProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProgressCountAggregateInputType | true
    _avg?: UserProgressAvgAggregateInputType
    _sum?: UserProgressSumAggregateInputType
    _min?: UserProgressMinAggregateInputType
    _max?: UserProgressMaxAggregateInputType
  }

  export type UserProgressGroupByOutputType = {
    id: string
    userId: string
    topicId: string
    progress: number
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserProgressCountAggregateOutputType | null
    _avg: UserProgressAvgAggregateOutputType | null
    _sum: UserProgressSumAggregateOutputType | null
    _min: UserProgressMinAggregateOutputType | null
    _max: UserProgressMaxAggregateOutputType | null
  }

  type GetUserProgressGroupByPayload<T extends UserProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserProgressGroupByOutputType[P]>
        }
      >
    >


  export type UserProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    topicId?: boolean
    progress?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    topic?: boolean | LearningTopicDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProgress"]>

  export type UserProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    topicId?: boolean
    progress?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    topic?: boolean | LearningTopicDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProgress"]>

  export type UserProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    topicId?: boolean
    progress?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    topic?: boolean | LearningTopicDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProgress"]>

  export type UserProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    topicId?: boolean
    progress?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "topicId" | "progress" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["userProgress"]>
  export type UserProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | LearningTopicDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | LearningTopicDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | LearningTopicDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProgress"
    objects: {
      topic: Prisma.$LearningTopicPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      topicId: string
      progress: number
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userProgress"]>
    composites: {}
  }

  type UserProgressGetPayload<S extends boolean | null | undefined | UserProgressDefaultArgs> = $Result.GetResult<Prisma.$UserProgressPayload, S>

  type UserProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProgressCountAggregateInputType | true
    }

  export interface UserProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProgress'], meta: { name: 'UserProgress' } }
    /**
     * Find zero or one UserProgress that matches the filter.
     * @param {UserProgressFindUniqueArgs} args - Arguments to find a UserProgress
     * @example
     * // Get one UserProgress
     * const userProgress = await prisma.userProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProgressFindUniqueArgs>(args: SelectSubset<T, UserProgressFindUniqueArgs<ExtArgs>>): Prisma__UserProgressClient<$Result.GetResult<Prisma.$UserProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProgressFindUniqueOrThrowArgs} args - Arguments to find a UserProgress
     * @example
     * // Get one UserProgress
     * const userProgress = await prisma.userProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProgressClient<$Result.GetResult<Prisma.$UserProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgressFindFirstArgs} args - Arguments to find a UserProgress
     * @example
     * // Get one UserProgress
     * const userProgress = await prisma.userProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProgressFindFirstArgs>(args?: SelectSubset<T, UserProgressFindFirstArgs<ExtArgs>>): Prisma__UserProgressClient<$Result.GetResult<Prisma.$UserProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgressFindFirstOrThrowArgs} args - Arguments to find a UserProgress
     * @example
     * // Get one UserProgress
     * const userProgress = await prisma.userProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProgressClient<$Result.GetResult<Prisma.$UserProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProgresses
     * const userProgresses = await prisma.userProgress.findMany()
     * 
     * // Get first 10 UserProgresses
     * const userProgresses = await prisma.userProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProgressWithIdOnly = await prisma.userProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProgressFindManyArgs>(args?: SelectSubset<T, UserProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProgress.
     * @param {UserProgressCreateArgs} args - Arguments to create a UserProgress.
     * @example
     * // Create one UserProgress
     * const UserProgress = await prisma.userProgress.create({
     *   data: {
     *     // ... data to create a UserProgress
     *   }
     * })
     * 
     */
    create<T extends UserProgressCreateArgs>(args: SelectSubset<T, UserProgressCreateArgs<ExtArgs>>): Prisma__UserProgressClient<$Result.GetResult<Prisma.$UserProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProgresses.
     * @param {UserProgressCreateManyArgs} args - Arguments to create many UserProgresses.
     * @example
     * // Create many UserProgresses
     * const userProgress = await prisma.userProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProgressCreateManyArgs>(args?: SelectSubset<T, UserProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProgresses and returns the data saved in the database.
     * @param {UserProgressCreateManyAndReturnArgs} args - Arguments to create many UserProgresses.
     * @example
     * // Create many UserProgresses
     * const userProgress = await prisma.userProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProgresses and only return the `id`
     * const userProgressWithIdOnly = await prisma.userProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProgress.
     * @param {UserProgressDeleteArgs} args - Arguments to delete one UserProgress.
     * @example
     * // Delete one UserProgress
     * const UserProgress = await prisma.userProgress.delete({
     *   where: {
     *     // ... filter to delete one UserProgress
     *   }
     * })
     * 
     */
    delete<T extends UserProgressDeleteArgs>(args: SelectSubset<T, UserProgressDeleteArgs<ExtArgs>>): Prisma__UserProgressClient<$Result.GetResult<Prisma.$UserProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProgress.
     * @param {UserProgressUpdateArgs} args - Arguments to update one UserProgress.
     * @example
     * // Update one UserProgress
     * const userProgress = await prisma.userProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProgressUpdateArgs>(args: SelectSubset<T, UserProgressUpdateArgs<ExtArgs>>): Prisma__UserProgressClient<$Result.GetResult<Prisma.$UserProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProgresses.
     * @param {UserProgressDeleteManyArgs} args - Arguments to filter UserProgresses to delete.
     * @example
     * // Delete a few UserProgresses
     * const { count } = await prisma.userProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProgressDeleteManyArgs>(args?: SelectSubset<T, UserProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProgresses
     * const userProgress = await prisma.userProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProgressUpdateManyArgs>(args: SelectSubset<T, UserProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProgresses and returns the data updated in the database.
     * @param {UserProgressUpdateManyAndReturnArgs} args - Arguments to update many UserProgresses.
     * @example
     * // Update many UserProgresses
     * const userProgress = await prisma.userProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProgresses and only return the `id`
     * const userProgressWithIdOnly = await prisma.userProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProgress.
     * @param {UserProgressUpsertArgs} args - Arguments to update or create a UserProgress.
     * @example
     * // Update or create a UserProgress
     * const userProgress = await prisma.userProgress.upsert({
     *   create: {
     *     // ... data to create a UserProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserProgressUpsertArgs>(args: SelectSubset<T, UserProgressUpsertArgs<ExtArgs>>): Prisma__UserProgressClient<$Result.GetResult<Prisma.$UserProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgressCountArgs} args - Arguments to filter UserProgresses to count.
     * @example
     * // Count the number of UserProgresses
     * const count = await prisma.userProgress.count({
     *   where: {
     *     // ... the filter for the UserProgresses we want to count
     *   }
     * })
    **/
    count<T extends UserProgressCountArgs>(
      args?: Subset<T, UserProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProgressAggregateArgs>(args: Subset<T, UserProgressAggregateArgs>): Prisma.PrismaPromise<GetUserProgressAggregateType<T>>

    /**
     * Group by UserProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProgressGroupByArgs} args - Group by arguments.
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
      T extends UserProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProgress model
   */
  readonly fields: UserProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    topic<T extends LearningTopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LearningTopicDefaultArgs<ExtArgs>>): Prisma__LearningTopicClient<$Result.GetResult<Prisma.$LearningTopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserProgress model
   */
  interface UserProgressFieldRefs {
    readonly id: FieldRef<"UserProgress", 'String'>
    readonly userId: FieldRef<"UserProgress", 'String'>
    readonly topicId: FieldRef<"UserProgress", 'String'>
    readonly progress: FieldRef<"UserProgress", 'Int'>
    readonly completedAt: FieldRef<"UserProgress", 'DateTime'>
    readonly createdAt: FieldRef<"UserProgress", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProgress findUnique
   */
  export type UserProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgress
     */
    omit?: UserProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserProgress to fetch.
     */
    where: UserProgressWhereUniqueInput
  }

  /**
   * UserProgress findUniqueOrThrow
   */
  export type UserProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgress
     */
    omit?: UserProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserProgress to fetch.
     */
    where: UserProgressWhereUniqueInput
  }

  /**
   * UserProgress findFirst
   */
  export type UserProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgress
     */
    omit?: UserProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserProgress to fetch.
     */
    where?: UserProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProgresses to fetch.
     */
    orderBy?: UserProgressOrderByWithRelationInput | UserProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProgresses.
     */
    cursor?: UserProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProgresses.
     */
    distinct?: UserProgressScalarFieldEnum | UserProgressScalarFieldEnum[]
  }

  /**
   * UserProgress findFirstOrThrow
   */
  export type UserProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgress
     */
    omit?: UserProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserProgress to fetch.
     */
    where?: UserProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProgresses to fetch.
     */
    orderBy?: UserProgressOrderByWithRelationInput | UserProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProgresses.
     */
    cursor?: UserProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProgresses.
     */
    distinct?: UserProgressScalarFieldEnum | UserProgressScalarFieldEnum[]
  }

  /**
   * UserProgress findMany
   */
  export type UserProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgress
     */
    omit?: UserProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserProgresses to fetch.
     */
    where?: UserProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProgresses to fetch.
     */
    orderBy?: UserProgressOrderByWithRelationInput | UserProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProgresses.
     */
    cursor?: UserProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProgresses.
     */
    distinct?: UserProgressScalarFieldEnum | UserProgressScalarFieldEnum[]
  }

  /**
   * UserProgress create
   */
  export type UserProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgress
     */
    omit?: UserProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProgress.
     */
    data: XOR<UserProgressCreateInput, UserProgressUncheckedCreateInput>
  }

  /**
   * UserProgress createMany
   */
  export type UserProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProgresses.
     */
    data: UserProgressCreateManyInput | UserProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProgress createManyAndReturn
   */
  export type UserProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgress
     */
    omit?: UserProgressOmit<ExtArgs> | null
    /**
     * The data used to create many UserProgresses.
     */
    data: UserProgressCreateManyInput | UserProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProgress update
   */
  export type UserProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgress
     */
    omit?: UserProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProgress.
     */
    data: XOR<UserProgressUpdateInput, UserProgressUncheckedUpdateInput>
    /**
     * Choose, which UserProgress to update.
     */
    where: UserProgressWhereUniqueInput
  }

  /**
   * UserProgress updateMany
   */
  export type UserProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProgresses.
     */
    data: XOR<UserProgressUpdateManyMutationInput, UserProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserProgresses to update
     */
    where?: UserProgressWhereInput
    /**
     * Limit how many UserProgresses to update.
     */
    limit?: number
  }

  /**
   * UserProgress updateManyAndReturn
   */
  export type UserProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgress
     */
    omit?: UserProgressOmit<ExtArgs> | null
    /**
     * The data used to update UserProgresses.
     */
    data: XOR<UserProgressUpdateManyMutationInput, UserProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserProgresses to update
     */
    where?: UserProgressWhereInput
    /**
     * Limit how many UserProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProgress upsert
   */
  export type UserProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgress
     */
    omit?: UserProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProgress to update in case it exists.
     */
    where: UserProgressWhereUniqueInput
    /**
     * In case the UserProgress found by the `where` argument doesn't exist, create a new UserProgress with this data.
     */
    create: XOR<UserProgressCreateInput, UserProgressUncheckedCreateInput>
    /**
     * In case the UserProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProgressUpdateInput, UserProgressUncheckedUpdateInput>
  }

  /**
   * UserProgress delete
   */
  export type UserProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgress
     */
    omit?: UserProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null
    /**
     * Filter which UserProgress to delete.
     */
    where: UserProgressWhereUniqueInput
  }

  /**
   * UserProgress deleteMany
   */
  export type UserProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProgresses to delete
     */
    where?: UserProgressWhereInput
    /**
     * Limit how many UserProgresses to delete.
     */
    limit?: number
  }

  /**
   * UserProgress without action
   */
  export type UserProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProgress
     */
    select?: UserProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProgress
     */
    omit?: UserProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProgressInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    skillLevel: 'skillLevel',
    totalScore: 'totalScore',
    rank: 'rank',
    accuracy: 'accuracy',
    trend: 'trend',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    notificationsEnabled: 'notificationsEnabled'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LabScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    description: 'description',
    category: 'category',
    difficulty: 'difficulty',
    timeEstimate: 'timeEstimate',
    skills: 'skills',
    risk: 'risk',
    dockerImage: 'dockerImage',
    flagHash: 'flagHash',
    points: 'points',
    accessType: 'accessType',
    maxDurationMin: 'maxDurationMin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LabScalarFieldEnum = (typeof LabScalarFieldEnum)[keyof typeof LabScalarFieldEnum]


  export const LabInstanceScalarFieldEnum: {
    id: 'id',
    labId: 'labId',
    userId: 'userId',
    status: 'status',
    externalId: 'externalId',
    accessUrl: 'accessUrl',
    startedAt: 'startedAt',
    expiresAt: 'expiresAt',
    destroyedAt: 'destroyedAt',
    score: 'score',
    lastActivityAt: 'lastActivityAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LabInstanceScalarFieldEnum = (typeof LabInstanceScalarFieldEnum)[keyof typeof LabInstanceScalarFieldEnum]


  export const FlagSubmissionScalarFieldEnum: {
    id: 'id',
    labInstanceId: 'labInstanceId',
    userId: 'userId',
    submittedFlag: 'submittedFlag',
    isCorrect: 'isCorrect',
    scoreAwarded: 'scoreAwarded',
    submittedAt: 'submittedAt'
  };

  export type FlagSubmissionScalarFieldEnum = (typeof FlagSubmissionScalarFieldEnum)[keyof typeof FlagSubmissionScalarFieldEnum]


  export const ScenarioScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    difficulty: 'difficulty',
    timeEstimate: 'timeEstimate',
    skills: 'skills',
    risk: 'risk',
    targetSector: 'targetSector',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScenarioScalarFieldEnum = (typeof ScenarioScalarFieldEnum)[keyof typeof ScenarioScalarFieldEnum]


  export const SimulationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    scenarioId: 'scenarioId',
    status: 'status',
    currentStep: 'currentStep',
    score: 'score',
    timeTakenSec: 'timeTakenSec',
    riskReduced: 'riskReduced',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SimulationScalarFieldEnum = (typeof SimulationScalarFieldEnum)[keyof typeof SimulationScalarFieldEnum]


  export const SimulationStepScalarFieldEnum: {
    id: 'id',
    simulationId: 'simulationId',
    stepNumber: 'stepNumber',
    title: 'title',
    narrative: 'narrative',
    attackerGoal: 'attackerGoal',
    options: 'options',
    correctOption: 'correctOption',
    selectedOption: 'selectedOption',
    isCorrect: 'isCorrect',
    timeTakenSec: 'timeTakenSec',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SimulationStepScalarFieldEnum = (typeof SimulationStepScalarFieldEnum)[keyof typeof SimulationStepScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    simulationId: 'simulationId',
    userId: 'userId',
    score: 'score',
    timeTakenSec: 'timeTakenSec',
    correctActions: 'correctActions',
    totalActions: 'totalActions',
    riskReduced: 'riskReduced',
    summary: 'summary',
    strengths: 'strengths',
    areasToImprove: 'areasToImprove',
    recommendations: 'recommendations',
    completedAt: 'completedAt',
    createdAt: 'createdAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const LearningTopicScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    level: 'level',
    lessons: 'lessons',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LearningTopicScalarFieldEnum = (typeof LearningTopicScalarFieldEnum)[keyof typeof LearningTopicScalarFieldEnum]


  export const UserProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    topicId: 'topicId',
    progress: 'progress',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserProgressScalarFieldEnum = (typeof UserProgressScalarFieldEnum)[keyof typeof UserProgressScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ScenarioDifficulty'
   */
  export type EnumScenarioDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScenarioDifficulty'>
    


  /**
   * Reference to a field of type 'ScenarioDifficulty[]'
   */
  export type ListEnumScenarioDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScenarioDifficulty[]'>
    


  /**
   * Reference to a field of type 'LabAccessType'
   */
  export type EnumLabAccessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LabAccessType'>
    


  /**
   * Reference to a field of type 'LabAccessType[]'
   */
  export type ListEnumLabAccessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LabAccessType[]'>
    


  /**
   * Reference to a field of type 'LabInstanceStatus'
   */
  export type EnumLabInstanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LabInstanceStatus'>
    


  /**
   * Reference to a field of type 'LabInstanceStatus[]'
   */
  export type ListEnumLabInstanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LabInstanceStatus[]'>
    


  /**
   * Reference to a field of type 'ScenarioCategory'
   */
  export type EnumScenarioCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScenarioCategory'>
    


  /**
   * Reference to a field of type 'ScenarioCategory[]'
   */
  export type ListEnumScenarioCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScenarioCategory[]'>
    


  /**
   * Reference to a field of type 'SimulationStatus'
   */
  export type EnumSimulationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SimulationStatus'>
    


  /**
   * Reference to a field of type 'SimulationStatus[]'
   */
  export type ListEnumSimulationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SimulationStatus[]'>
    


  /**
   * Reference to a field of type 'LearningLevel'
   */
  export type EnumLearningLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LearningLevel'>
    


  /**
   * Reference to a field of type 'LearningLevel[]'
   */
  export type ListEnumLearningLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LearningLevel[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    skillLevel?: StringFilter<"User"> | string
    totalScore?: IntFilter<"User"> | number
    rank?: IntNullableFilter<"User"> | number | null
    accuracy?: FloatFilter<"User"> | number
    trend?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    notificationsEnabled?: BoolFilter<"User"> | boolean
    reports?: ReportListRelationFilter
    simulations?: SimulationListRelationFilter
    labInstances?: LabInstanceListRelationFilter
    progress?: UserProgressListRelationFilter
    flagSubmissions?: FlagSubmissionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    skillLevel?: SortOrder
    totalScore?: SortOrder
    rank?: SortOrderInput | SortOrder
    accuracy?: SortOrder
    trend?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notificationsEnabled?: SortOrder
    reports?: ReportOrderByRelationAggregateInput
    simulations?: SimulationOrderByRelationAggregateInput
    labInstances?: LabInstanceOrderByRelationAggregateInput
    progress?: UserProgressOrderByRelationAggregateInput
    flagSubmissions?: FlagSubmissionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    skillLevel?: StringFilter<"User"> | string
    totalScore?: IntFilter<"User"> | number
    rank?: IntNullableFilter<"User"> | number | null
    accuracy?: FloatFilter<"User"> | number
    trend?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    notificationsEnabled?: BoolFilter<"User"> | boolean
    reports?: ReportListRelationFilter
    simulations?: SimulationListRelationFilter
    labInstances?: LabInstanceListRelationFilter
    progress?: UserProgressListRelationFilter
    flagSubmissions?: FlagSubmissionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    skillLevel?: SortOrder
    totalScore?: SortOrder
    rank?: SortOrderInput | SortOrder
    accuracy?: SortOrder
    trend?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notificationsEnabled?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    skillLevel?: StringWithAggregatesFilter<"User"> | string
    totalScore?: IntWithAggregatesFilter<"User"> | number
    rank?: IntNullableWithAggregatesFilter<"User"> | number | null
    accuracy?: FloatWithAggregatesFilter<"User"> | number
    trend?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    notificationsEnabled?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type LabWhereInput = {
    AND?: LabWhereInput | LabWhereInput[]
    OR?: LabWhereInput[]
    NOT?: LabWhereInput | LabWhereInput[]
    id?: StringFilter<"Lab"> | string
    slug?: StringFilter<"Lab"> | string
    title?: StringFilter<"Lab"> | string
    description?: StringFilter<"Lab"> | string
    category?: StringFilter<"Lab"> | string
    difficulty?: EnumScenarioDifficultyFilter<"Lab"> | $Enums.ScenarioDifficulty
    timeEstimate?: IntFilter<"Lab"> | number
    skills?: StringNullableListFilter<"Lab">
    risk?: StringFilter<"Lab"> | string
    dockerImage?: StringFilter<"Lab"> | string
    flagHash?: StringFilter<"Lab"> | string
    points?: IntFilter<"Lab"> | number
    accessType?: EnumLabAccessTypeFilter<"Lab"> | $Enums.LabAccessType
    maxDurationMin?: IntFilter<"Lab"> | number
    createdAt?: DateTimeFilter<"Lab"> | Date | string
    updatedAt?: DateTimeFilter<"Lab"> | Date | string
    instances?: LabInstanceListRelationFilter
  }

  export type LabOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    timeEstimate?: SortOrder
    skills?: SortOrder
    risk?: SortOrder
    dockerImage?: SortOrder
    flagHash?: SortOrder
    points?: SortOrder
    accessType?: SortOrder
    maxDurationMin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instances?: LabInstanceOrderByRelationAggregateInput
  }

  export type LabWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: LabWhereInput | LabWhereInput[]
    OR?: LabWhereInput[]
    NOT?: LabWhereInput | LabWhereInput[]
    title?: StringFilter<"Lab"> | string
    description?: StringFilter<"Lab"> | string
    category?: StringFilter<"Lab"> | string
    difficulty?: EnumScenarioDifficultyFilter<"Lab"> | $Enums.ScenarioDifficulty
    timeEstimate?: IntFilter<"Lab"> | number
    skills?: StringNullableListFilter<"Lab">
    risk?: StringFilter<"Lab"> | string
    dockerImage?: StringFilter<"Lab"> | string
    flagHash?: StringFilter<"Lab"> | string
    points?: IntFilter<"Lab"> | number
    accessType?: EnumLabAccessTypeFilter<"Lab"> | $Enums.LabAccessType
    maxDurationMin?: IntFilter<"Lab"> | number
    createdAt?: DateTimeFilter<"Lab"> | Date | string
    updatedAt?: DateTimeFilter<"Lab"> | Date | string
    instances?: LabInstanceListRelationFilter
  }, "id" | "slug">

  export type LabOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    timeEstimate?: SortOrder
    skills?: SortOrder
    risk?: SortOrder
    dockerImage?: SortOrder
    flagHash?: SortOrder
    points?: SortOrder
    accessType?: SortOrder
    maxDurationMin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LabCountOrderByAggregateInput
    _avg?: LabAvgOrderByAggregateInput
    _max?: LabMaxOrderByAggregateInput
    _min?: LabMinOrderByAggregateInput
    _sum?: LabSumOrderByAggregateInput
  }

  export type LabScalarWhereWithAggregatesInput = {
    AND?: LabScalarWhereWithAggregatesInput | LabScalarWhereWithAggregatesInput[]
    OR?: LabScalarWhereWithAggregatesInput[]
    NOT?: LabScalarWhereWithAggregatesInput | LabScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lab"> | string
    slug?: StringWithAggregatesFilter<"Lab"> | string
    title?: StringWithAggregatesFilter<"Lab"> | string
    description?: StringWithAggregatesFilter<"Lab"> | string
    category?: StringWithAggregatesFilter<"Lab"> | string
    difficulty?: EnumScenarioDifficultyWithAggregatesFilter<"Lab"> | $Enums.ScenarioDifficulty
    timeEstimate?: IntWithAggregatesFilter<"Lab"> | number
    skills?: StringNullableListFilter<"Lab">
    risk?: StringWithAggregatesFilter<"Lab"> | string
    dockerImage?: StringWithAggregatesFilter<"Lab"> | string
    flagHash?: StringWithAggregatesFilter<"Lab"> | string
    points?: IntWithAggregatesFilter<"Lab"> | number
    accessType?: EnumLabAccessTypeWithAggregatesFilter<"Lab"> | $Enums.LabAccessType
    maxDurationMin?: IntWithAggregatesFilter<"Lab"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Lab"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lab"> | Date | string
  }

  export type LabInstanceWhereInput = {
    AND?: LabInstanceWhereInput | LabInstanceWhereInput[]
    OR?: LabInstanceWhereInput[]
    NOT?: LabInstanceWhereInput | LabInstanceWhereInput[]
    id?: StringFilter<"LabInstance"> | string
    labId?: StringFilter<"LabInstance"> | string
    userId?: StringFilter<"LabInstance"> | string
    status?: EnumLabInstanceStatusFilter<"LabInstance"> | $Enums.LabInstanceStatus
    externalId?: StringNullableFilter<"LabInstance"> | string | null
    accessUrl?: StringNullableFilter<"LabInstance"> | string | null
    startedAt?: DateTimeFilter<"LabInstance"> | Date | string
    expiresAt?: DateTimeFilter<"LabInstance"> | Date | string
    destroyedAt?: DateTimeNullableFilter<"LabInstance"> | Date | string | null
    score?: IntFilter<"LabInstance"> | number
    lastActivityAt?: DateTimeNullableFilter<"LabInstance"> | Date | string | null
    createdAt?: DateTimeFilter<"LabInstance"> | Date | string
    updatedAt?: DateTimeFilter<"LabInstance"> | Date | string
    lab?: XOR<LabScalarRelationFilter, LabWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    submissions?: FlagSubmissionListRelationFilter
  }

  export type LabInstanceOrderByWithRelationInput = {
    id?: SortOrder
    labId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    externalId?: SortOrderInput | SortOrder
    accessUrl?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    expiresAt?: SortOrder
    destroyedAt?: SortOrderInput | SortOrder
    score?: SortOrder
    lastActivityAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lab?: LabOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    submissions?: FlagSubmissionOrderByRelationAggregateInput
  }

  export type LabInstanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LabInstanceWhereInput | LabInstanceWhereInput[]
    OR?: LabInstanceWhereInput[]
    NOT?: LabInstanceWhereInput | LabInstanceWhereInput[]
    labId?: StringFilter<"LabInstance"> | string
    userId?: StringFilter<"LabInstance"> | string
    status?: EnumLabInstanceStatusFilter<"LabInstance"> | $Enums.LabInstanceStatus
    externalId?: StringNullableFilter<"LabInstance"> | string | null
    accessUrl?: StringNullableFilter<"LabInstance"> | string | null
    startedAt?: DateTimeFilter<"LabInstance"> | Date | string
    expiresAt?: DateTimeFilter<"LabInstance"> | Date | string
    destroyedAt?: DateTimeNullableFilter<"LabInstance"> | Date | string | null
    score?: IntFilter<"LabInstance"> | number
    lastActivityAt?: DateTimeNullableFilter<"LabInstance"> | Date | string | null
    createdAt?: DateTimeFilter<"LabInstance"> | Date | string
    updatedAt?: DateTimeFilter<"LabInstance"> | Date | string
    lab?: XOR<LabScalarRelationFilter, LabWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    submissions?: FlagSubmissionListRelationFilter
  }, "id">

  export type LabInstanceOrderByWithAggregationInput = {
    id?: SortOrder
    labId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    externalId?: SortOrderInput | SortOrder
    accessUrl?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    expiresAt?: SortOrder
    destroyedAt?: SortOrderInput | SortOrder
    score?: SortOrder
    lastActivityAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LabInstanceCountOrderByAggregateInput
    _avg?: LabInstanceAvgOrderByAggregateInput
    _max?: LabInstanceMaxOrderByAggregateInput
    _min?: LabInstanceMinOrderByAggregateInput
    _sum?: LabInstanceSumOrderByAggregateInput
  }

  export type LabInstanceScalarWhereWithAggregatesInput = {
    AND?: LabInstanceScalarWhereWithAggregatesInput | LabInstanceScalarWhereWithAggregatesInput[]
    OR?: LabInstanceScalarWhereWithAggregatesInput[]
    NOT?: LabInstanceScalarWhereWithAggregatesInput | LabInstanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LabInstance"> | string
    labId?: StringWithAggregatesFilter<"LabInstance"> | string
    userId?: StringWithAggregatesFilter<"LabInstance"> | string
    status?: EnumLabInstanceStatusWithAggregatesFilter<"LabInstance"> | $Enums.LabInstanceStatus
    externalId?: StringNullableWithAggregatesFilter<"LabInstance"> | string | null
    accessUrl?: StringNullableWithAggregatesFilter<"LabInstance"> | string | null
    startedAt?: DateTimeWithAggregatesFilter<"LabInstance"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"LabInstance"> | Date | string
    destroyedAt?: DateTimeNullableWithAggregatesFilter<"LabInstance"> | Date | string | null
    score?: IntWithAggregatesFilter<"LabInstance"> | number
    lastActivityAt?: DateTimeNullableWithAggregatesFilter<"LabInstance"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LabInstance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LabInstance"> | Date | string
  }

  export type FlagSubmissionWhereInput = {
    AND?: FlagSubmissionWhereInput | FlagSubmissionWhereInput[]
    OR?: FlagSubmissionWhereInput[]
    NOT?: FlagSubmissionWhereInput | FlagSubmissionWhereInput[]
    id?: StringFilter<"FlagSubmission"> | string
    labInstanceId?: StringFilter<"FlagSubmission"> | string
    userId?: StringFilter<"FlagSubmission"> | string
    submittedFlag?: StringFilter<"FlagSubmission"> | string
    isCorrect?: BoolFilter<"FlagSubmission"> | boolean
    scoreAwarded?: IntFilter<"FlagSubmission"> | number
    submittedAt?: DateTimeFilter<"FlagSubmission"> | Date | string
    labInstance?: XOR<LabInstanceScalarRelationFilter, LabInstanceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FlagSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    labInstanceId?: SortOrder
    userId?: SortOrder
    submittedFlag?: SortOrder
    isCorrect?: SortOrder
    scoreAwarded?: SortOrder
    submittedAt?: SortOrder
    labInstance?: LabInstanceOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type FlagSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FlagSubmissionWhereInput | FlagSubmissionWhereInput[]
    OR?: FlagSubmissionWhereInput[]
    NOT?: FlagSubmissionWhereInput | FlagSubmissionWhereInput[]
    labInstanceId?: StringFilter<"FlagSubmission"> | string
    userId?: StringFilter<"FlagSubmission"> | string
    submittedFlag?: StringFilter<"FlagSubmission"> | string
    isCorrect?: BoolFilter<"FlagSubmission"> | boolean
    scoreAwarded?: IntFilter<"FlagSubmission"> | number
    submittedAt?: DateTimeFilter<"FlagSubmission"> | Date | string
    labInstance?: XOR<LabInstanceScalarRelationFilter, LabInstanceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FlagSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    labInstanceId?: SortOrder
    userId?: SortOrder
    submittedFlag?: SortOrder
    isCorrect?: SortOrder
    scoreAwarded?: SortOrder
    submittedAt?: SortOrder
    _count?: FlagSubmissionCountOrderByAggregateInput
    _avg?: FlagSubmissionAvgOrderByAggregateInput
    _max?: FlagSubmissionMaxOrderByAggregateInput
    _min?: FlagSubmissionMinOrderByAggregateInput
    _sum?: FlagSubmissionSumOrderByAggregateInput
  }

  export type FlagSubmissionScalarWhereWithAggregatesInput = {
    AND?: FlagSubmissionScalarWhereWithAggregatesInput | FlagSubmissionScalarWhereWithAggregatesInput[]
    OR?: FlagSubmissionScalarWhereWithAggregatesInput[]
    NOT?: FlagSubmissionScalarWhereWithAggregatesInput | FlagSubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FlagSubmission"> | string
    labInstanceId?: StringWithAggregatesFilter<"FlagSubmission"> | string
    userId?: StringWithAggregatesFilter<"FlagSubmission"> | string
    submittedFlag?: StringWithAggregatesFilter<"FlagSubmission"> | string
    isCorrect?: BoolWithAggregatesFilter<"FlagSubmission"> | boolean
    scoreAwarded?: IntWithAggregatesFilter<"FlagSubmission"> | number
    submittedAt?: DateTimeWithAggregatesFilter<"FlagSubmission"> | Date | string
  }

  export type ScenarioWhereInput = {
    AND?: ScenarioWhereInput | ScenarioWhereInput[]
    OR?: ScenarioWhereInput[]
    NOT?: ScenarioWhereInput | ScenarioWhereInput[]
    id?: StringFilter<"Scenario"> | string
    title?: StringFilter<"Scenario"> | string
    description?: StringFilter<"Scenario"> | string
    category?: EnumScenarioCategoryFilter<"Scenario"> | $Enums.ScenarioCategory
    difficulty?: EnumScenarioDifficultyFilter<"Scenario"> | $Enums.ScenarioDifficulty
    timeEstimate?: IntFilter<"Scenario"> | number
    skills?: StringNullableListFilter<"Scenario">
    risk?: StringFilter<"Scenario"> | string
    targetSector?: StringNullableFilter<"Scenario"> | string | null
    createdAt?: DateTimeFilter<"Scenario"> | Date | string
    updatedAt?: DateTimeFilter<"Scenario"> | Date | string
    simulations?: SimulationListRelationFilter
  }

  export type ScenarioOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    timeEstimate?: SortOrder
    skills?: SortOrder
    risk?: SortOrder
    targetSector?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    simulations?: SimulationOrderByRelationAggregateInput
  }

  export type ScenarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScenarioWhereInput | ScenarioWhereInput[]
    OR?: ScenarioWhereInput[]
    NOT?: ScenarioWhereInput | ScenarioWhereInput[]
    title?: StringFilter<"Scenario"> | string
    description?: StringFilter<"Scenario"> | string
    category?: EnumScenarioCategoryFilter<"Scenario"> | $Enums.ScenarioCategory
    difficulty?: EnumScenarioDifficultyFilter<"Scenario"> | $Enums.ScenarioDifficulty
    timeEstimate?: IntFilter<"Scenario"> | number
    skills?: StringNullableListFilter<"Scenario">
    risk?: StringFilter<"Scenario"> | string
    targetSector?: StringNullableFilter<"Scenario"> | string | null
    createdAt?: DateTimeFilter<"Scenario"> | Date | string
    updatedAt?: DateTimeFilter<"Scenario"> | Date | string
    simulations?: SimulationListRelationFilter
  }, "id">

  export type ScenarioOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    timeEstimate?: SortOrder
    skills?: SortOrder
    risk?: SortOrder
    targetSector?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScenarioCountOrderByAggregateInput
    _avg?: ScenarioAvgOrderByAggregateInput
    _max?: ScenarioMaxOrderByAggregateInput
    _min?: ScenarioMinOrderByAggregateInput
    _sum?: ScenarioSumOrderByAggregateInput
  }

  export type ScenarioScalarWhereWithAggregatesInput = {
    AND?: ScenarioScalarWhereWithAggregatesInput | ScenarioScalarWhereWithAggregatesInput[]
    OR?: ScenarioScalarWhereWithAggregatesInput[]
    NOT?: ScenarioScalarWhereWithAggregatesInput | ScenarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Scenario"> | string
    title?: StringWithAggregatesFilter<"Scenario"> | string
    description?: StringWithAggregatesFilter<"Scenario"> | string
    category?: EnumScenarioCategoryWithAggregatesFilter<"Scenario"> | $Enums.ScenarioCategory
    difficulty?: EnumScenarioDifficultyWithAggregatesFilter<"Scenario"> | $Enums.ScenarioDifficulty
    timeEstimate?: IntWithAggregatesFilter<"Scenario"> | number
    skills?: StringNullableListFilter<"Scenario">
    risk?: StringWithAggregatesFilter<"Scenario"> | string
    targetSector?: StringNullableWithAggregatesFilter<"Scenario"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Scenario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Scenario"> | Date | string
  }

  export type SimulationWhereInput = {
    AND?: SimulationWhereInput | SimulationWhereInput[]
    OR?: SimulationWhereInput[]
    NOT?: SimulationWhereInput | SimulationWhereInput[]
    id?: StringFilter<"Simulation"> | string
    userId?: StringFilter<"Simulation"> | string
    scenarioId?: StringFilter<"Simulation"> | string
    status?: EnumSimulationStatusFilter<"Simulation"> | $Enums.SimulationStatus
    currentStep?: IntFilter<"Simulation"> | number
    score?: IntNullableFilter<"Simulation"> | number | null
    timeTakenSec?: IntFilter<"Simulation"> | number
    riskReduced?: IntFilter<"Simulation"> | number
    startedAt?: DateTimeFilter<"Simulation"> | Date | string
    completedAt?: DateTimeNullableFilter<"Simulation"> | Date | string | null
    createdAt?: DateTimeFilter<"Simulation"> | Date | string
    updatedAt?: DateTimeFilter<"Simulation"> | Date | string
    report?: XOR<ReportNullableScalarRelationFilter, ReportWhereInput> | null
    scenario?: XOR<ScenarioScalarRelationFilter, ScenarioWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    steps?: SimulationStepListRelationFilter
  }

  export type SimulationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    scenarioId?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    score?: SortOrderInput | SortOrder
    timeTakenSec?: SortOrder
    riskReduced?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    report?: ReportOrderByWithRelationInput
    scenario?: ScenarioOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    steps?: SimulationStepOrderByRelationAggregateInput
  }

  export type SimulationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SimulationWhereInput | SimulationWhereInput[]
    OR?: SimulationWhereInput[]
    NOT?: SimulationWhereInput | SimulationWhereInput[]
    userId?: StringFilter<"Simulation"> | string
    scenarioId?: StringFilter<"Simulation"> | string
    status?: EnumSimulationStatusFilter<"Simulation"> | $Enums.SimulationStatus
    currentStep?: IntFilter<"Simulation"> | number
    score?: IntNullableFilter<"Simulation"> | number | null
    timeTakenSec?: IntFilter<"Simulation"> | number
    riskReduced?: IntFilter<"Simulation"> | number
    startedAt?: DateTimeFilter<"Simulation"> | Date | string
    completedAt?: DateTimeNullableFilter<"Simulation"> | Date | string | null
    createdAt?: DateTimeFilter<"Simulation"> | Date | string
    updatedAt?: DateTimeFilter<"Simulation"> | Date | string
    report?: XOR<ReportNullableScalarRelationFilter, ReportWhereInput> | null
    scenario?: XOR<ScenarioScalarRelationFilter, ScenarioWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    steps?: SimulationStepListRelationFilter
  }, "id">

  export type SimulationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    scenarioId?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    score?: SortOrderInput | SortOrder
    timeTakenSec?: SortOrder
    riskReduced?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SimulationCountOrderByAggregateInput
    _avg?: SimulationAvgOrderByAggregateInput
    _max?: SimulationMaxOrderByAggregateInput
    _min?: SimulationMinOrderByAggregateInput
    _sum?: SimulationSumOrderByAggregateInput
  }

  export type SimulationScalarWhereWithAggregatesInput = {
    AND?: SimulationScalarWhereWithAggregatesInput | SimulationScalarWhereWithAggregatesInput[]
    OR?: SimulationScalarWhereWithAggregatesInput[]
    NOT?: SimulationScalarWhereWithAggregatesInput | SimulationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Simulation"> | string
    userId?: StringWithAggregatesFilter<"Simulation"> | string
    scenarioId?: StringWithAggregatesFilter<"Simulation"> | string
    status?: EnumSimulationStatusWithAggregatesFilter<"Simulation"> | $Enums.SimulationStatus
    currentStep?: IntWithAggregatesFilter<"Simulation"> | number
    score?: IntNullableWithAggregatesFilter<"Simulation"> | number | null
    timeTakenSec?: IntWithAggregatesFilter<"Simulation"> | number
    riskReduced?: IntWithAggregatesFilter<"Simulation"> | number
    startedAt?: DateTimeWithAggregatesFilter<"Simulation"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"Simulation"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Simulation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Simulation"> | Date | string
  }

  export type SimulationStepWhereInput = {
    AND?: SimulationStepWhereInput | SimulationStepWhereInput[]
    OR?: SimulationStepWhereInput[]
    NOT?: SimulationStepWhereInput | SimulationStepWhereInput[]
    id?: StringFilter<"SimulationStep"> | string
    simulationId?: StringFilter<"SimulationStep"> | string
    stepNumber?: IntFilter<"SimulationStep"> | number
    title?: StringFilter<"SimulationStep"> | string
    narrative?: StringFilter<"SimulationStep"> | string
    attackerGoal?: StringFilter<"SimulationStep"> | string
    options?: StringNullableListFilter<"SimulationStep">
    correctOption?: IntFilter<"SimulationStep"> | number
    selectedOption?: IntNullableFilter<"SimulationStep"> | number | null
    isCorrect?: BoolNullableFilter<"SimulationStep"> | boolean | null
    timeTakenSec?: IntNullableFilter<"SimulationStep"> | number | null
    createdAt?: DateTimeFilter<"SimulationStep"> | Date | string
    updatedAt?: DateTimeFilter<"SimulationStep"> | Date | string
    simulation?: XOR<SimulationScalarRelationFilter, SimulationWhereInput>
  }

  export type SimulationStepOrderByWithRelationInput = {
    id?: SortOrder
    simulationId?: SortOrder
    stepNumber?: SortOrder
    title?: SortOrder
    narrative?: SortOrder
    attackerGoal?: SortOrder
    options?: SortOrder
    correctOption?: SortOrder
    selectedOption?: SortOrderInput | SortOrder
    isCorrect?: SortOrderInput | SortOrder
    timeTakenSec?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    simulation?: SimulationOrderByWithRelationInput
  }

  export type SimulationStepWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    simulationId_stepNumber?: SimulationStepSimulationIdStepNumberCompoundUniqueInput
    AND?: SimulationStepWhereInput | SimulationStepWhereInput[]
    OR?: SimulationStepWhereInput[]
    NOT?: SimulationStepWhereInput | SimulationStepWhereInput[]
    simulationId?: StringFilter<"SimulationStep"> | string
    stepNumber?: IntFilter<"SimulationStep"> | number
    title?: StringFilter<"SimulationStep"> | string
    narrative?: StringFilter<"SimulationStep"> | string
    attackerGoal?: StringFilter<"SimulationStep"> | string
    options?: StringNullableListFilter<"SimulationStep">
    correctOption?: IntFilter<"SimulationStep"> | number
    selectedOption?: IntNullableFilter<"SimulationStep"> | number | null
    isCorrect?: BoolNullableFilter<"SimulationStep"> | boolean | null
    timeTakenSec?: IntNullableFilter<"SimulationStep"> | number | null
    createdAt?: DateTimeFilter<"SimulationStep"> | Date | string
    updatedAt?: DateTimeFilter<"SimulationStep"> | Date | string
    simulation?: XOR<SimulationScalarRelationFilter, SimulationWhereInput>
  }, "id" | "simulationId_stepNumber">

  export type SimulationStepOrderByWithAggregationInput = {
    id?: SortOrder
    simulationId?: SortOrder
    stepNumber?: SortOrder
    title?: SortOrder
    narrative?: SortOrder
    attackerGoal?: SortOrder
    options?: SortOrder
    correctOption?: SortOrder
    selectedOption?: SortOrderInput | SortOrder
    isCorrect?: SortOrderInput | SortOrder
    timeTakenSec?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SimulationStepCountOrderByAggregateInput
    _avg?: SimulationStepAvgOrderByAggregateInput
    _max?: SimulationStepMaxOrderByAggregateInput
    _min?: SimulationStepMinOrderByAggregateInput
    _sum?: SimulationStepSumOrderByAggregateInput
  }

  export type SimulationStepScalarWhereWithAggregatesInput = {
    AND?: SimulationStepScalarWhereWithAggregatesInput | SimulationStepScalarWhereWithAggregatesInput[]
    OR?: SimulationStepScalarWhereWithAggregatesInput[]
    NOT?: SimulationStepScalarWhereWithAggregatesInput | SimulationStepScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SimulationStep"> | string
    simulationId?: StringWithAggregatesFilter<"SimulationStep"> | string
    stepNumber?: IntWithAggregatesFilter<"SimulationStep"> | number
    title?: StringWithAggregatesFilter<"SimulationStep"> | string
    narrative?: StringWithAggregatesFilter<"SimulationStep"> | string
    attackerGoal?: StringWithAggregatesFilter<"SimulationStep"> | string
    options?: StringNullableListFilter<"SimulationStep">
    correctOption?: IntWithAggregatesFilter<"SimulationStep"> | number
    selectedOption?: IntNullableWithAggregatesFilter<"SimulationStep"> | number | null
    isCorrect?: BoolNullableWithAggregatesFilter<"SimulationStep"> | boolean | null
    timeTakenSec?: IntNullableWithAggregatesFilter<"SimulationStep"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"SimulationStep"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SimulationStep"> | Date | string
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: StringFilter<"Report"> | string
    simulationId?: StringFilter<"Report"> | string
    userId?: StringFilter<"Report"> | string
    score?: IntFilter<"Report"> | number
    timeTakenSec?: IntFilter<"Report"> | number
    correctActions?: IntFilter<"Report"> | number
    totalActions?: IntFilter<"Report"> | number
    riskReduced?: IntFilter<"Report"> | number
    summary?: StringFilter<"Report"> | string
    strengths?: StringNullableListFilter<"Report">
    areasToImprove?: StringNullableListFilter<"Report">
    recommendations?: StringNullableListFilter<"Report">
    completedAt?: DateTimeFilter<"Report"> | Date | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    simulation?: XOR<SimulationScalarRelationFilter, SimulationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    simulationId?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    timeTakenSec?: SortOrder
    correctActions?: SortOrder
    totalActions?: SortOrder
    riskReduced?: SortOrder
    summary?: SortOrder
    strengths?: SortOrder
    areasToImprove?: SortOrder
    recommendations?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    simulation?: SimulationOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    simulationId?: string
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    userId?: StringFilter<"Report"> | string
    score?: IntFilter<"Report"> | number
    timeTakenSec?: IntFilter<"Report"> | number
    correctActions?: IntFilter<"Report"> | number
    totalActions?: IntFilter<"Report"> | number
    riskReduced?: IntFilter<"Report"> | number
    summary?: StringFilter<"Report"> | string
    strengths?: StringNullableListFilter<"Report">
    areasToImprove?: StringNullableListFilter<"Report">
    recommendations?: StringNullableListFilter<"Report">
    completedAt?: DateTimeFilter<"Report"> | Date | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    simulation?: XOR<SimulationScalarRelationFilter, SimulationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "simulationId">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    simulationId?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    timeTakenSec?: SortOrder
    correctActions?: SortOrder
    totalActions?: SortOrder
    riskReduced?: SortOrder
    summary?: SortOrder
    strengths?: SortOrder
    areasToImprove?: SortOrder
    recommendations?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _avg?: ReportAvgOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
    _sum?: ReportSumOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Report"> | string
    simulationId?: StringWithAggregatesFilter<"Report"> | string
    userId?: StringWithAggregatesFilter<"Report"> | string
    score?: IntWithAggregatesFilter<"Report"> | number
    timeTakenSec?: IntWithAggregatesFilter<"Report"> | number
    correctActions?: IntWithAggregatesFilter<"Report"> | number
    totalActions?: IntWithAggregatesFilter<"Report"> | number
    riskReduced?: IntWithAggregatesFilter<"Report"> | number
    summary?: StringWithAggregatesFilter<"Report"> | string
    strengths?: StringNullableListFilter<"Report">
    areasToImprove?: StringNullableListFilter<"Report">
    recommendations?: StringNullableListFilter<"Report">
    completedAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type LearningTopicWhereInput = {
    AND?: LearningTopicWhereInput | LearningTopicWhereInput[]
    OR?: LearningTopicWhereInput[]
    NOT?: LearningTopicWhereInput | LearningTopicWhereInput[]
    id?: StringFilter<"LearningTopic"> | string
    title?: StringFilter<"LearningTopic"> | string
    description?: StringFilter<"LearningTopic"> | string
    level?: EnumLearningLevelFilter<"LearningTopic"> | $Enums.LearningLevel
    lessons?: IntFilter<"LearningTopic"> | number
    createdAt?: DateTimeFilter<"LearningTopic"> | Date | string
    updatedAt?: DateTimeFilter<"LearningTopic"> | Date | string
    progress?: UserProgressListRelationFilter
  }

  export type LearningTopicOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    level?: SortOrder
    lessons?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    progress?: UserProgressOrderByRelationAggregateInput
  }

  export type LearningTopicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LearningTopicWhereInput | LearningTopicWhereInput[]
    OR?: LearningTopicWhereInput[]
    NOT?: LearningTopicWhereInput | LearningTopicWhereInput[]
    title?: StringFilter<"LearningTopic"> | string
    description?: StringFilter<"LearningTopic"> | string
    level?: EnumLearningLevelFilter<"LearningTopic"> | $Enums.LearningLevel
    lessons?: IntFilter<"LearningTopic"> | number
    createdAt?: DateTimeFilter<"LearningTopic"> | Date | string
    updatedAt?: DateTimeFilter<"LearningTopic"> | Date | string
    progress?: UserProgressListRelationFilter
  }, "id">

  export type LearningTopicOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    level?: SortOrder
    lessons?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LearningTopicCountOrderByAggregateInput
    _avg?: LearningTopicAvgOrderByAggregateInput
    _max?: LearningTopicMaxOrderByAggregateInput
    _min?: LearningTopicMinOrderByAggregateInput
    _sum?: LearningTopicSumOrderByAggregateInput
  }

  export type LearningTopicScalarWhereWithAggregatesInput = {
    AND?: LearningTopicScalarWhereWithAggregatesInput | LearningTopicScalarWhereWithAggregatesInput[]
    OR?: LearningTopicScalarWhereWithAggregatesInput[]
    NOT?: LearningTopicScalarWhereWithAggregatesInput | LearningTopicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LearningTopic"> | string
    title?: StringWithAggregatesFilter<"LearningTopic"> | string
    description?: StringWithAggregatesFilter<"LearningTopic"> | string
    level?: EnumLearningLevelWithAggregatesFilter<"LearningTopic"> | $Enums.LearningLevel
    lessons?: IntWithAggregatesFilter<"LearningTopic"> | number
    createdAt?: DateTimeWithAggregatesFilter<"LearningTopic"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LearningTopic"> | Date | string
  }

  export type UserProgressWhereInput = {
    AND?: UserProgressWhereInput | UserProgressWhereInput[]
    OR?: UserProgressWhereInput[]
    NOT?: UserProgressWhereInput | UserProgressWhereInput[]
    id?: StringFilter<"UserProgress"> | string
    userId?: StringFilter<"UserProgress"> | string
    topicId?: StringFilter<"UserProgress"> | string
    progress?: IntFilter<"UserProgress"> | number
    completedAt?: DateTimeNullableFilter<"UserProgress"> | Date | string | null
    createdAt?: DateTimeFilter<"UserProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserProgress"> | Date | string
    topic?: XOR<LearningTopicScalarRelationFilter, LearningTopicWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    progress?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    topic?: LearningTopicOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UserProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_topicId?: UserProgressUserIdTopicIdCompoundUniqueInput
    AND?: UserProgressWhereInput | UserProgressWhereInput[]
    OR?: UserProgressWhereInput[]
    NOT?: UserProgressWhereInput | UserProgressWhereInput[]
    userId?: StringFilter<"UserProgress"> | string
    topicId?: StringFilter<"UserProgress"> | string
    progress?: IntFilter<"UserProgress"> | number
    completedAt?: DateTimeNullableFilter<"UserProgress"> | Date | string | null
    createdAt?: DateTimeFilter<"UserProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserProgress"> | Date | string
    topic?: XOR<LearningTopicScalarRelationFilter, LearningTopicWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_topicId">

  export type UserProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    progress?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProgressCountOrderByAggregateInput
    _avg?: UserProgressAvgOrderByAggregateInput
    _max?: UserProgressMaxOrderByAggregateInput
    _min?: UserProgressMinOrderByAggregateInput
    _sum?: UserProgressSumOrderByAggregateInput
  }

  export type UserProgressScalarWhereWithAggregatesInput = {
    AND?: UserProgressScalarWhereWithAggregatesInput | UserProgressScalarWhereWithAggregatesInput[]
    OR?: UserProgressScalarWhereWithAggregatesInput[]
    NOT?: UserProgressScalarWhereWithAggregatesInput | UserProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProgress"> | string
    userId?: StringWithAggregatesFilter<"UserProgress"> | string
    topicId?: StringWithAggregatesFilter<"UserProgress"> | string
    progress?: IntWithAggregatesFilter<"UserProgress"> | number
    completedAt?: DateTimeNullableWithAggregatesFilter<"UserProgress"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserProgress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProgress"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    skillLevel?: string
    totalScore?: number
    rank?: number | null
    accuracy?: number
    trend?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationsEnabled?: boolean
    reports?: ReportCreateNestedManyWithoutUserInput
    simulations?: SimulationCreateNestedManyWithoutUserInput
    labInstances?: LabInstanceCreateNestedManyWithoutUserInput
    progress?: UserProgressCreateNestedManyWithoutUserInput
    flagSubmissions?: FlagSubmissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    skillLevel?: string
    totalScore?: number
    rank?: number | null
    accuracy?: number
    trend?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationsEnabled?: boolean
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    simulations?: SimulationUncheckedCreateNestedManyWithoutUserInput
    labInstances?: LabInstanceUncheckedCreateNestedManyWithoutUserInput
    progress?: UserProgressUncheckedCreateNestedManyWithoutUserInput
    flagSubmissions?: FlagSubmissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    skillLevel?: StringFieldUpdateOperationsInput | string
    totalScore?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    accuracy?: FloatFieldUpdateOperationsInput | number
    trend?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    reports?: ReportUpdateManyWithoutUserNestedInput
    simulations?: SimulationUpdateManyWithoutUserNestedInput
    labInstances?: LabInstanceUpdateManyWithoutUserNestedInput
    progress?: UserProgressUpdateManyWithoutUserNestedInput
    flagSubmissions?: FlagSubmissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    skillLevel?: StringFieldUpdateOperationsInput | string
    totalScore?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    accuracy?: FloatFieldUpdateOperationsInput | number
    trend?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
    simulations?: SimulationUncheckedUpdateManyWithoutUserNestedInput
    labInstances?: LabInstanceUncheckedUpdateManyWithoutUserNestedInput
    progress?: UserProgressUncheckedUpdateManyWithoutUserNestedInput
    flagSubmissions?: FlagSubmissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    skillLevel?: string
    totalScore?: number
    rank?: number | null
    accuracy?: number
    trend?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationsEnabled?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    skillLevel?: StringFieldUpdateOperationsInput | string
    totalScore?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    accuracy?: FloatFieldUpdateOperationsInput | number
    trend?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    skillLevel?: StringFieldUpdateOperationsInput | string
    totalScore?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    accuracy?: FloatFieldUpdateOperationsInput | number
    trend?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LabCreateInput = {
    id?: string
    slug: string
    title: string
    description: string
    category: string
    difficulty: $Enums.ScenarioDifficulty
    timeEstimate: number
    skills?: LabCreateskillsInput | string[]
    risk: string
    dockerImage: string
    flagHash: string
    points?: number
    accessType: $Enums.LabAccessType
    maxDurationMin?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    instances?: LabInstanceCreateNestedManyWithoutLabInput
  }

  export type LabUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    description: string
    category: string
    difficulty: $Enums.ScenarioDifficulty
    timeEstimate: number
    skills?: LabCreateskillsInput | string[]
    risk: string
    dockerImage: string
    flagHash: string
    points?: number
    accessType: $Enums.LabAccessType
    maxDurationMin?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    instances?: LabInstanceUncheckedCreateNestedManyWithoutLabInput
  }

  export type LabUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumScenarioDifficultyFieldUpdateOperationsInput | $Enums.ScenarioDifficulty
    timeEstimate?: IntFieldUpdateOperationsInput | number
    skills?: LabUpdateskillsInput | string[]
    risk?: StringFieldUpdateOperationsInput | string
    dockerImage?: StringFieldUpdateOperationsInput | string
    flagHash?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    accessType?: EnumLabAccessTypeFieldUpdateOperationsInput | $Enums.LabAccessType
    maxDurationMin?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instances?: LabInstanceUpdateManyWithoutLabNestedInput
  }

  export type LabUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumScenarioDifficultyFieldUpdateOperationsInput | $Enums.ScenarioDifficulty
    timeEstimate?: IntFieldUpdateOperationsInput | number
    skills?: LabUpdateskillsInput | string[]
    risk?: StringFieldUpdateOperationsInput | string
    dockerImage?: StringFieldUpdateOperationsInput | string
    flagHash?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    accessType?: EnumLabAccessTypeFieldUpdateOperationsInput | $Enums.LabAccessType
    maxDurationMin?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instances?: LabInstanceUncheckedUpdateManyWithoutLabNestedInput
  }

  export type LabCreateManyInput = {
    id?: string
    slug: string
    title: string
    description: string
    category: string
    difficulty: $Enums.ScenarioDifficulty
    timeEstimate: number
    skills?: LabCreateskillsInput | string[]
    risk: string
    dockerImage: string
    flagHash: string
    points?: number
    accessType: $Enums.LabAccessType
    maxDurationMin?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LabUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumScenarioDifficultyFieldUpdateOperationsInput | $Enums.ScenarioDifficulty
    timeEstimate?: IntFieldUpdateOperationsInput | number
    skills?: LabUpdateskillsInput | string[]
    risk?: StringFieldUpdateOperationsInput | string
    dockerImage?: StringFieldUpdateOperationsInput | string
    flagHash?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    accessType?: EnumLabAccessTypeFieldUpdateOperationsInput | $Enums.LabAccessType
    maxDurationMin?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumScenarioDifficultyFieldUpdateOperationsInput | $Enums.ScenarioDifficulty
    timeEstimate?: IntFieldUpdateOperationsInput | number
    skills?: LabUpdateskillsInput | string[]
    risk?: StringFieldUpdateOperationsInput | string
    dockerImage?: StringFieldUpdateOperationsInput | string
    flagHash?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    accessType?: EnumLabAccessTypeFieldUpdateOperationsInput | $Enums.LabAccessType
    maxDurationMin?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabInstanceCreateInput = {
    id?: string
    status?: $Enums.LabInstanceStatus
    externalId?: string | null
    accessUrl?: string | null
    startedAt?: Date | string
    expiresAt: Date | string
    destroyedAt?: Date | string | null
    score?: number
    lastActivityAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lab: LabCreateNestedOneWithoutInstancesInput
    user: UserCreateNestedOneWithoutLabInstancesInput
    submissions?: FlagSubmissionCreateNestedManyWithoutLabInstanceInput
  }

  export type LabInstanceUncheckedCreateInput = {
    id?: string
    labId: string
    userId: string
    status?: $Enums.LabInstanceStatus
    externalId?: string | null
    accessUrl?: string | null
    startedAt?: Date | string
    expiresAt: Date | string
    destroyedAt?: Date | string | null
    score?: number
    lastActivityAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: FlagSubmissionUncheckedCreateNestedManyWithoutLabInstanceInput
  }

  export type LabInstanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumLabInstanceStatusFieldUpdateOperationsInput | $Enums.LabInstanceStatus
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    accessUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destroyedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lab?: LabUpdateOneRequiredWithoutInstancesNestedInput
    user?: UserUpdateOneRequiredWithoutLabInstancesNestedInput
    submissions?: FlagSubmissionUpdateManyWithoutLabInstanceNestedInput
  }

  export type LabInstanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    labId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumLabInstanceStatusFieldUpdateOperationsInput | $Enums.LabInstanceStatus
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    accessUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destroyedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: FlagSubmissionUncheckedUpdateManyWithoutLabInstanceNestedInput
  }

  export type LabInstanceCreateManyInput = {
    id?: string
    labId: string
    userId: string
    status?: $Enums.LabInstanceStatus
    externalId?: string | null
    accessUrl?: string | null
    startedAt?: Date | string
    expiresAt: Date | string
    destroyedAt?: Date | string | null
    score?: number
    lastActivityAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LabInstanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumLabInstanceStatusFieldUpdateOperationsInput | $Enums.LabInstanceStatus
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    accessUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destroyedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabInstanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    labId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumLabInstanceStatusFieldUpdateOperationsInput | $Enums.LabInstanceStatus
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    accessUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destroyedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlagSubmissionCreateInput = {
    id?: string
    submittedFlag: string
    isCorrect: boolean
    scoreAwarded?: number
    submittedAt?: Date | string
    labInstance: LabInstanceCreateNestedOneWithoutSubmissionsInput
    user: UserCreateNestedOneWithoutFlagSubmissionsInput
  }

  export type FlagSubmissionUncheckedCreateInput = {
    id?: string
    labInstanceId: string
    userId: string
    submittedFlag: string
    isCorrect: boolean
    scoreAwarded?: number
    submittedAt?: Date | string
  }

  export type FlagSubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedFlag?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    scoreAwarded?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    labInstance?: LabInstanceUpdateOneRequiredWithoutSubmissionsNestedInput
    user?: UserUpdateOneRequiredWithoutFlagSubmissionsNestedInput
  }

  export type FlagSubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    labInstanceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    submittedFlag?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    scoreAwarded?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlagSubmissionCreateManyInput = {
    id?: string
    labInstanceId: string
    userId: string
    submittedFlag: string
    isCorrect: boolean
    scoreAwarded?: number
    submittedAt?: Date | string
  }

  export type FlagSubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedFlag?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    scoreAwarded?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlagSubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    labInstanceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    submittedFlag?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    scoreAwarded?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScenarioCreateInput = {
    id?: string
    title: string
    description: string
    category: $Enums.ScenarioCategory
    difficulty: $Enums.ScenarioDifficulty
    timeEstimate: number
    skills?: ScenarioCreateskillsInput | string[]
    risk: string
    targetSector?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    simulations?: SimulationCreateNestedManyWithoutScenarioInput
  }

  export type ScenarioUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    category: $Enums.ScenarioCategory
    difficulty: $Enums.ScenarioDifficulty
    timeEstimate: number
    skills?: ScenarioCreateskillsInput | string[]
    risk: string
    targetSector?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    simulations?: SimulationUncheckedCreateNestedManyWithoutScenarioInput
  }

  export type ScenarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumScenarioCategoryFieldUpdateOperationsInput | $Enums.ScenarioCategory
    difficulty?: EnumScenarioDifficultyFieldUpdateOperationsInput | $Enums.ScenarioDifficulty
    timeEstimate?: IntFieldUpdateOperationsInput | number
    skills?: ScenarioUpdateskillsInput | string[]
    risk?: StringFieldUpdateOperationsInput | string
    targetSector?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    simulations?: SimulationUpdateManyWithoutScenarioNestedInput
  }

  export type ScenarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumScenarioCategoryFieldUpdateOperationsInput | $Enums.ScenarioCategory
    difficulty?: EnumScenarioDifficultyFieldUpdateOperationsInput | $Enums.ScenarioDifficulty
    timeEstimate?: IntFieldUpdateOperationsInput | number
    skills?: ScenarioUpdateskillsInput | string[]
    risk?: StringFieldUpdateOperationsInput | string
    targetSector?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    simulations?: SimulationUncheckedUpdateManyWithoutScenarioNestedInput
  }

  export type ScenarioCreateManyInput = {
    id?: string
    title: string
    description: string
    category: $Enums.ScenarioCategory
    difficulty: $Enums.ScenarioDifficulty
    timeEstimate: number
    skills?: ScenarioCreateskillsInput | string[]
    risk: string
    targetSector?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScenarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumScenarioCategoryFieldUpdateOperationsInput | $Enums.ScenarioCategory
    difficulty?: EnumScenarioDifficultyFieldUpdateOperationsInput | $Enums.ScenarioDifficulty
    timeEstimate?: IntFieldUpdateOperationsInput | number
    skills?: ScenarioUpdateskillsInput | string[]
    risk?: StringFieldUpdateOperationsInput | string
    targetSector?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScenarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumScenarioCategoryFieldUpdateOperationsInput | $Enums.ScenarioCategory
    difficulty?: EnumScenarioDifficultyFieldUpdateOperationsInput | $Enums.ScenarioDifficulty
    timeEstimate?: IntFieldUpdateOperationsInput | number
    skills?: ScenarioUpdateskillsInput | string[]
    risk?: StringFieldUpdateOperationsInput | string
    targetSector?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SimulationCreateInput = {
    id?: string
    status?: $Enums.SimulationStatus
    currentStep?: number
    score?: number | null
    timeTakenSec?: number
    riskReduced?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    report?: ReportCreateNestedOneWithoutSimulationInput
    scenario: ScenarioCreateNestedOneWithoutSimulationsInput
    user: UserCreateNestedOneWithoutSimulationsInput
    steps?: SimulationStepCreateNestedManyWithoutSimulationInput
  }

  export type SimulationUncheckedCreateInput = {
    id?: string
    userId: string
    scenarioId: string
    status?: $Enums.SimulationStatus
    currentStep?: number
    score?: number | null
    timeTakenSec?: number
    riskReduced?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    report?: ReportUncheckedCreateNestedOneWithoutSimulationInput
    steps?: SimulationStepUncheckedCreateNestedManyWithoutSimulationInput
  }

  export type SimulationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSimulationStatusFieldUpdateOperationsInput | $Enums.SimulationStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    timeTakenSec?: IntFieldUpdateOperationsInput | number
    riskReduced?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    report?: ReportUpdateOneWithoutSimulationNestedInput
    scenario?: ScenarioUpdateOneRequiredWithoutSimulationsNestedInput
    user?: UserUpdateOneRequiredWithoutSimulationsNestedInput
    steps?: SimulationStepUpdateManyWithoutSimulationNestedInput
  }

  export type SimulationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    status?: EnumSimulationStatusFieldUpdateOperationsInput | $Enums.SimulationStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    timeTakenSec?: IntFieldUpdateOperationsInput | number
    riskReduced?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    report?: ReportUncheckedUpdateOneWithoutSimulationNestedInput
    steps?: SimulationStepUncheckedUpdateManyWithoutSimulationNestedInput
  }

  export type SimulationCreateManyInput = {
    id?: string
    userId: string
    scenarioId: string
    status?: $Enums.SimulationStatus
    currentStep?: number
    score?: number | null
    timeTakenSec?: number
    riskReduced?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SimulationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSimulationStatusFieldUpdateOperationsInput | $Enums.SimulationStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    timeTakenSec?: IntFieldUpdateOperationsInput | number
    riskReduced?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SimulationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    status?: EnumSimulationStatusFieldUpdateOperationsInput | $Enums.SimulationStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    timeTakenSec?: IntFieldUpdateOperationsInput | number
    riskReduced?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SimulationStepCreateInput = {
    id?: string
    stepNumber: number
    title: string
    narrative: string
    attackerGoal: string
    options?: SimulationStepCreateoptionsInput | string[]
    correctOption: number
    selectedOption?: number | null
    isCorrect?: boolean | null
    timeTakenSec?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    simulation: SimulationCreateNestedOneWithoutStepsInput
  }

  export type SimulationStepUncheckedCreateInput = {
    id?: string
    simulationId: string
    stepNumber: number
    title: string
    narrative: string
    attackerGoal: string
    options?: SimulationStepCreateoptionsInput | string[]
    correctOption: number
    selectedOption?: number | null
    isCorrect?: boolean | null
    timeTakenSec?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SimulationStepUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    narrative?: StringFieldUpdateOperationsInput | string
    attackerGoal?: StringFieldUpdateOperationsInput | string
    options?: SimulationStepUpdateoptionsInput | string[]
    correctOption?: IntFieldUpdateOperationsInput | number
    selectedOption?: NullableIntFieldUpdateOperationsInput | number | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timeTakenSec?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    simulation?: SimulationUpdateOneRequiredWithoutStepsNestedInput
  }

  export type SimulationStepUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    simulationId?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    narrative?: StringFieldUpdateOperationsInput | string
    attackerGoal?: StringFieldUpdateOperationsInput | string
    options?: SimulationStepUpdateoptionsInput | string[]
    correctOption?: IntFieldUpdateOperationsInput | number
    selectedOption?: NullableIntFieldUpdateOperationsInput | number | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timeTakenSec?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SimulationStepCreateManyInput = {
    id?: string
    simulationId: string
    stepNumber: number
    title: string
    narrative: string
    attackerGoal: string
    options?: SimulationStepCreateoptionsInput | string[]
    correctOption: number
    selectedOption?: number | null
    isCorrect?: boolean | null
    timeTakenSec?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SimulationStepUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    narrative?: StringFieldUpdateOperationsInput | string
    attackerGoal?: StringFieldUpdateOperationsInput | string
    options?: SimulationStepUpdateoptionsInput | string[]
    correctOption?: IntFieldUpdateOperationsInput | number
    selectedOption?: NullableIntFieldUpdateOperationsInput | number | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timeTakenSec?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SimulationStepUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    simulationId?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    narrative?: StringFieldUpdateOperationsInput | string
    attackerGoal?: StringFieldUpdateOperationsInput | string
    options?: SimulationStepUpdateoptionsInput | string[]
    correctOption?: IntFieldUpdateOperationsInput | number
    selectedOption?: NullableIntFieldUpdateOperationsInput | number | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timeTakenSec?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateInput = {
    id?: string
    score: number
    timeTakenSec: number
    correctActions: number
    totalActions: number
    riskReduced: number
    summary: string
    strengths?: ReportCreatestrengthsInput | string[]
    areasToImprove?: ReportCreateareasToImproveInput | string[]
    recommendations?: ReportCreaterecommendationsInput | string[]
    completedAt?: Date | string
    createdAt?: Date | string
    simulation: SimulationCreateNestedOneWithoutReportInput
    user: UserCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateInput = {
    id?: string
    simulationId: string
    userId: string
    score: number
    timeTakenSec: number
    correctActions: number
    totalActions: number
    riskReduced: number
    summary: string
    strengths?: ReportCreatestrengthsInput | string[]
    areasToImprove?: ReportCreateareasToImproveInput | string[]
    recommendations?: ReportCreaterecommendationsInput | string[]
    completedAt?: Date | string
    createdAt?: Date | string
  }

  export type ReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    timeTakenSec?: IntFieldUpdateOperationsInput | number
    correctActions?: IntFieldUpdateOperationsInput | number
    totalActions?: IntFieldUpdateOperationsInput | number
    riskReduced?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    strengths?: ReportUpdatestrengthsInput | string[]
    areasToImprove?: ReportUpdateareasToImproveInput | string[]
    recommendations?: ReportUpdaterecommendationsInput | string[]
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    simulation?: SimulationUpdateOneRequiredWithoutReportNestedInput
    user?: UserUpdateOneRequiredWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    simulationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    timeTakenSec?: IntFieldUpdateOperationsInput | number
    correctActions?: IntFieldUpdateOperationsInput | number
    totalActions?: IntFieldUpdateOperationsInput | number
    riskReduced?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    strengths?: ReportUpdatestrengthsInput | string[]
    areasToImprove?: ReportUpdateareasToImproveInput | string[]
    recommendations?: ReportUpdaterecommendationsInput | string[]
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyInput = {
    id?: string
    simulationId: string
    userId: string
    score: number
    timeTakenSec: number
    correctActions: number
    totalActions: number
    riskReduced: number
    summary: string
    strengths?: ReportCreatestrengthsInput | string[]
    areasToImprove?: ReportCreateareasToImproveInput | string[]
    recommendations?: ReportCreaterecommendationsInput | string[]
    completedAt?: Date | string
    createdAt?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    timeTakenSec?: IntFieldUpdateOperationsInput | number
    correctActions?: IntFieldUpdateOperationsInput | number
    totalActions?: IntFieldUpdateOperationsInput | number
    riskReduced?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    strengths?: ReportUpdatestrengthsInput | string[]
    areasToImprove?: ReportUpdateareasToImproveInput | string[]
    recommendations?: ReportUpdaterecommendationsInput | string[]
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    simulationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    timeTakenSec?: IntFieldUpdateOperationsInput | number
    correctActions?: IntFieldUpdateOperationsInput | number
    totalActions?: IntFieldUpdateOperationsInput | number
    riskReduced?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    strengths?: ReportUpdatestrengthsInput | string[]
    areasToImprove?: ReportUpdateareasToImproveInput | string[]
    recommendations?: ReportUpdaterecommendationsInput | string[]
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningTopicCreateInput = {
    id?: string
    title: string
    description: string
    level: $Enums.LearningLevel
    lessons: number
    createdAt?: Date | string
    updatedAt?: Date | string
    progress?: UserProgressCreateNestedManyWithoutTopicInput
  }

  export type LearningTopicUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    level: $Enums.LearningLevel
    lessons: number
    createdAt?: Date | string
    updatedAt?: Date | string
    progress?: UserProgressUncheckedCreateNestedManyWithoutTopicInput
  }

  export type LearningTopicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    level?: EnumLearningLevelFieldUpdateOperationsInput | $Enums.LearningLevel
    lessons?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: UserProgressUpdateManyWithoutTopicNestedInput
  }

  export type LearningTopicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    level?: EnumLearningLevelFieldUpdateOperationsInput | $Enums.LearningLevel
    lessons?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: UserProgressUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type LearningTopicCreateManyInput = {
    id?: string
    title: string
    description: string
    level: $Enums.LearningLevel
    lessons: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningTopicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    level?: EnumLearningLevelFieldUpdateOperationsInput | $Enums.LearningLevel
    lessons?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningTopicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    level?: EnumLearningLevelFieldUpdateOperationsInput | $Enums.LearningLevel
    lessons?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProgressCreateInput = {
    id?: string
    progress?: number
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topic: LearningTopicCreateNestedOneWithoutProgressInput
    user: UserCreateNestedOneWithoutProgressInput
  }

  export type UserProgressUncheckedCreateInput = {
    id?: string
    userId: string
    topicId: string
    progress?: number
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: LearningTopicUpdateOneRequiredWithoutProgressNestedInput
    user?: UserUpdateOneRequiredWithoutProgressNestedInput
  }

  export type UserProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProgressCreateManyInput = {
    id?: string
    userId: string
    topicId: string
    progress?: number
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type SimulationListRelationFilter = {
    every?: SimulationWhereInput
    some?: SimulationWhereInput
    none?: SimulationWhereInput
  }

  export type LabInstanceListRelationFilter = {
    every?: LabInstanceWhereInput
    some?: LabInstanceWhereInput
    none?: LabInstanceWhereInput
  }

  export type UserProgressListRelationFilter = {
    every?: UserProgressWhereInput
    some?: UserProgressWhereInput
    none?: UserProgressWhereInput
  }

  export type FlagSubmissionListRelationFilter = {
    every?: FlagSubmissionWhereInput
    some?: FlagSubmissionWhereInput
    none?: FlagSubmissionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SimulationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LabInstanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlagSubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    skillLevel?: SortOrder
    totalScore?: SortOrder
    rank?: SortOrder
    accuracy?: SortOrder
    trend?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notificationsEnabled?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    totalScore?: SortOrder
    rank?: SortOrder
    accuracy?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    skillLevel?: SortOrder
    totalScore?: SortOrder
    rank?: SortOrder
    accuracy?: SortOrder
    trend?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notificationsEnabled?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    skillLevel?: SortOrder
    totalScore?: SortOrder
    rank?: SortOrder
    accuracy?: SortOrder
    trend?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notificationsEnabled?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    totalScore?: SortOrder
    rank?: SortOrder
    accuracy?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumScenarioDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.ScenarioDifficulty | EnumScenarioDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.ScenarioDifficulty[] | ListEnumScenarioDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScenarioDifficulty[] | ListEnumScenarioDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumScenarioDifficultyFilter<$PrismaModel> | $Enums.ScenarioDifficulty
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumLabAccessTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LabAccessType | EnumLabAccessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LabAccessType[] | ListEnumLabAccessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LabAccessType[] | ListEnumLabAccessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLabAccessTypeFilter<$PrismaModel> | $Enums.LabAccessType
  }

  export type LabCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    timeEstimate?: SortOrder
    skills?: SortOrder
    risk?: SortOrder
    dockerImage?: SortOrder
    flagHash?: SortOrder
    points?: SortOrder
    accessType?: SortOrder
    maxDurationMin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LabAvgOrderByAggregateInput = {
    timeEstimate?: SortOrder
    points?: SortOrder
    maxDurationMin?: SortOrder
  }

  export type LabMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    timeEstimate?: SortOrder
    risk?: SortOrder
    dockerImage?: SortOrder
    flagHash?: SortOrder
    points?: SortOrder
    accessType?: SortOrder
    maxDurationMin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LabMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    timeEstimate?: SortOrder
    risk?: SortOrder
    dockerImage?: SortOrder
    flagHash?: SortOrder
    points?: SortOrder
    accessType?: SortOrder
    maxDurationMin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LabSumOrderByAggregateInput = {
    timeEstimate?: SortOrder
    points?: SortOrder
    maxDurationMin?: SortOrder
  }

  export type EnumScenarioDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScenarioDifficulty | EnumScenarioDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.ScenarioDifficulty[] | ListEnumScenarioDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScenarioDifficulty[] | ListEnumScenarioDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumScenarioDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.ScenarioDifficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScenarioDifficultyFilter<$PrismaModel>
    _max?: NestedEnumScenarioDifficultyFilter<$PrismaModel>
  }

  export type EnumLabAccessTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LabAccessType | EnumLabAccessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LabAccessType[] | ListEnumLabAccessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LabAccessType[] | ListEnumLabAccessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLabAccessTypeWithAggregatesFilter<$PrismaModel> | $Enums.LabAccessType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLabAccessTypeFilter<$PrismaModel>
    _max?: NestedEnumLabAccessTypeFilter<$PrismaModel>
  }

  export type EnumLabInstanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LabInstanceStatus | EnumLabInstanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LabInstanceStatus[] | ListEnumLabInstanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LabInstanceStatus[] | ListEnumLabInstanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLabInstanceStatusFilter<$PrismaModel> | $Enums.LabInstanceStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type LabScalarRelationFilter = {
    is?: LabWhereInput
    isNot?: LabWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LabInstanceCountOrderByAggregateInput = {
    id?: SortOrder
    labId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    externalId?: SortOrder
    accessUrl?: SortOrder
    startedAt?: SortOrder
    expiresAt?: SortOrder
    destroyedAt?: SortOrder
    score?: SortOrder
    lastActivityAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LabInstanceAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type LabInstanceMaxOrderByAggregateInput = {
    id?: SortOrder
    labId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    externalId?: SortOrder
    accessUrl?: SortOrder
    startedAt?: SortOrder
    expiresAt?: SortOrder
    destroyedAt?: SortOrder
    score?: SortOrder
    lastActivityAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LabInstanceMinOrderByAggregateInput = {
    id?: SortOrder
    labId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    externalId?: SortOrder
    accessUrl?: SortOrder
    startedAt?: SortOrder
    expiresAt?: SortOrder
    destroyedAt?: SortOrder
    score?: SortOrder
    lastActivityAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LabInstanceSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type EnumLabInstanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LabInstanceStatus | EnumLabInstanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LabInstanceStatus[] | ListEnumLabInstanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LabInstanceStatus[] | ListEnumLabInstanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLabInstanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.LabInstanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLabInstanceStatusFilter<$PrismaModel>
    _max?: NestedEnumLabInstanceStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type LabInstanceScalarRelationFilter = {
    is?: LabInstanceWhereInput
    isNot?: LabInstanceWhereInput
  }

  export type FlagSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    labInstanceId?: SortOrder
    userId?: SortOrder
    submittedFlag?: SortOrder
    isCorrect?: SortOrder
    scoreAwarded?: SortOrder
    submittedAt?: SortOrder
  }

  export type FlagSubmissionAvgOrderByAggregateInput = {
    scoreAwarded?: SortOrder
  }

  export type FlagSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    labInstanceId?: SortOrder
    userId?: SortOrder
    submittedFlag?: SortOrder
    isCorrect?: SortOrder
    scoreAwarded?: SortOrder
    submittedAt?: SortOrder
  }

  export type FlagSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    labInstanceId?: SortOrder
    userId?: SortOrder
    submittedFlag?: SortOrder
    isCorrect?: SortOrder
    scoreAwarded?: SortOrder
    submittedAt?: SortOrder
  }

  export type FlagSubmissionSumOrderByAggregateInput = {
    scoreAwarded?: SortOrder
  }

  export type EnumScenarioCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ScenarioCategory | EnumScenarioCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ScenarioCategory[] | ListEnumScenarioCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScenarioCategory[] | ListEnumScenarioCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumScenarioCategoryFilter<$PrismaModel> | $Enums.ScenarioCategory
  }

  export type ScenarioCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    timeEstimate?: SortOrder
    skills?: SortOrder
    risk?: SortOrder
    targetSector?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScenarioAvgOrderByAggregateInput = {
    timeEstimate?: SortOrder
  }

  export type ScenarioMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    timeEstimate?: SortOrder
    risk?: SortOrder
    targetSector?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScenarioMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    timeEstimate?: SortOrder
    risk?: SortOrder
    targetSector?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScenarioSumOrderByAggregateInput = {
    timeEstimate?: SortOrder
  }

  export type EnumScenarioCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScenarioCategory | EnumScenarioCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ScenarioCategory[] | ListEnumScenarioCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScenarioCategory[] | ListEnumScenarioCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumScenarioCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ScenarioCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScenarioCategoryFilter<$PrismaModel>
    _max?: NestedEnumScenarioCategoryFilter<$PrismaModel>
  }

  export type EnumSimulationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SimulationStatus | EnumSimulationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SimulationStatus[] | ListEnumSimulationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SimulationStatus[] | ListEnumSimulationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSimulationStatusFilter<$PrismaModel> | $Enums.SimulationStatus
  }

  export type ReportNullableScalarRelationFilter = {
    is?: ReportWhereInput | null
    isNot?: ReportWhereInput | null
  }

  export type ScenarioScalarRelationFilter = {
    is?: ScenarioWhereInput
    isNot?: ScenarioWhereInput
  }

  export type SimulationStepListRelationFilter = {
    every?: SimulationStepWhereInput
    some?: SimulationStepWhereInput
    none?: SimulationStepWhereInput
  }

  export type SimulationStepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SimulationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    scenarioId?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    score?: SortOrder
    timeTakenSec?: SortOrder
    riskReduced?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SimulationAvgOrderByAggregateInput = {
    currentStep?: SortOrder
    score?: SortOrder
    timeTakenSec?: SortOrder
    riskReduced?: SortOrder
  }

  export type SimulationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    scenarioId?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    score?: SortOrder
    timeTakenSec?: SortOrder
    riskReduced?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SimulationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    scenarioId?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    score?: SortOrder
    timeTakenSec?: SortOrder
    riskReduced?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SimulationSumOrderByAggregateInput = {
    currentStep?: SortOrder
    score?: SortOrder
    timeTakenSec?: SortOrder
    riskReduced?: SortOrder
  }

  export type EnumSimulationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SimulationStatus | EnumSimulationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SimulationStatus[] | ListEnumSimulationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SimulationStatus[] | ListEnumSimulationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSimulationStatusWithAggregatesFilter<$PrismaModel> | $Enums.SimulationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSimulationStatusFilter<$PrismaModel>
    _max?: NestedEnumSimulationStatusFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type SimulationScalarRelationFilter = {
    is?: SimulationWhereInput
    isNot?: SimulationWhereInput
  }

  export type SimulationStepSimulationIdStepNumberCompoundUniqueInput = {
    simulationId: string
    stepNumber: number
  }

  export type SimulationStepCountOrderByAggregateInput = {
    id?: SortOrder
    simulationId?: SortOrder
    stepNumber?: SortOrder
    title?: SortOrder
    narrative?: SortOrder
    attackerGoal?: SortOrder
    options?: SortOrder
    correctOption?: SortOrder
    selectedOption?: SortOrder
    isCorrect?: SortOrder
    timeTakenSec?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SimulationStepAvgOrderByAggregateInput = {
    stepNumber?: SortOrder
    correctOption?: SortOrder
    selectedOption?: SortOrder
    timeTakenSec?: SortOrder
  }

  export type SimulationStepMaxOrderByAggregateInput = {
    id?: SortOrder
    simulationId?: SortOrder
    stepNumber?: SortOrder
    title?: SortOrder
    narrative?: SortOrder
    attackerGoal?: SortOrder
    correctOption?: SortOrder
    selectedOption?: SortOrder
    isCorrect?: SortOrder
    timeTakenSec?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SimulationStepMinOrderByAggregateInput = {
    id?: SortOrder
    simulationId?: SortOrder
    stepNumber?: SortOrder
    title?: SortOrder
    narrative?: SortOrder
    attackerGoal?: SortOrder
    correctOption?: SortOrder
    selectedOption?: SortOrder
    isCorrect?: SortOrder
    timeTakenSec?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SimulationStepSumOrderByAggregateInput = {
    stepNumber?: SortOrder
    correctOption?: SortOrder
    selectedOption?: SortOrder
    timeTakenSec?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    simulationId?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    timeTakenSec?: SortOrder
    correctActions?: SortOrder
    totalActions?: SortOrder
    riskReduced?: SortOrder
    summary?: SortOrder
    strengths?: SortOrder
    areasToImprove?: SortOrder
    recommendations?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportAvgOrderByAggregateInput = {
    score?: SortOrder
    timeTakenSec?: SortOrder
    correctActions?: SortOrder
    totalActions?: SortOrder
    riskReduced?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    simulationId?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    timeTakenSec?: SortOrder
    correctActions?: SortOrder
    totalActions?: SortOrder
    riskReduced?: SortOrder
    summary?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    simulationId?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    timeTakenSec?: SortOrder
    correctActions?: SortOrder
    totalActions?: SortOrder
    riskReduced?: SortOrder
    summary?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportSumOrderByAggregateInput = {
    score?: SortOrder
    timeTakenSec?: SortOrder
    correctActions?: SortOrder
    totalActions?: SortOrder
    riskReduced?: SortOrder
  }

  export type EnumLearningLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.LearningLevel | EnumLearningLevelFieldRefInput<$PrismaModel>
    in?: $Enums.LearningLevel[] | ListEnumLearningLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.LearningLevel[] | ListEnumLearningLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLearningLevelFilter<$PrismaModel> | $Enums.LearningLevel
  }

  export type LearningTopicCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    level?: SortOrder
    lessons?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningTopicAvgOrderByAggregateInput = {
    lessons?: SortOrder
  }

  export type LearningTopicMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    level?: SortOrder
    lessons?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningTopicMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    level?: SortOrder
    lessons?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningTopicSumOrderByAggregateInput = {
    lessons?: SortOrder
  }

  export type EnumLearningLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LearningLevel | EnumLearningLevelFieldRefInput<$PrismaModel>
    in?: $Enums.LearningLevel[] | ListEnumLearningLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.LearningLevel[] | ListEnumLearningLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLearningLevelWithAggregatesFilter<$PrismaModel> | $Enums.LearningLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLearningLevelFilter<$PrismaModel>
    _max?: NestedEnumLearningLevelFilter<$PrismaModel>
  }

  export type LearningTopicScalarRelationFilter = {
    is?: LearningTopicWhereInput
    isNot?: LearningTopicWhereInput
  }

  export type UserProgressUserIdTopicIdCompoundUniqueInput = {
    userId: string
    topicId: string
  }

  export type UserProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    progress?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProgressAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type UserProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    progress?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    topicId?: SortOrder
    progress?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProgressSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type ReportCreateNestedManyWithoutUserInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type SimulationCreateNestedManyWithoutUserInput = {
    create?: XOR<SimulationCreateWithoutUserInput, SimulationUncheckedCreateWithoutUserInput> | SimulationCreateWithoutUserInput[] | SimulationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SimulationCreateOrConnectWithoutUserInput | SimulationCreateOrConnectWithoutUserInput[]
    createMany?: SimulationCreateManyUserInputEnvelope
    connect?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
  }

  export type LabInstanceCreateNestedManyWithoutUserInput = {
    create?: XOR<LabInstanceCreateWithoutUserInput, LabInstanceUncheckedCreateWithoutUserInput> | LabInstanceCreateWithoutUserInput[] | LabInstanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LabInstanceCreateOrConnectWithoutUserInput | LabInstanceCreateOrConnectWithoutUserInput[]
    createMany?: LabInstanceCreateManyUserInputEnvelope
    connect?: LabInstanceWhereUniqueInput | LabInstanceWhereUniqueInput[]
  }

  export type UserProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<UserProgressCreateWithoutUserInput, UserProgressUncheckedCreateWithoutUserInput> | UserProgressCreateWithoutUserInput[] | UserProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProgressCreateOrConnectWithoutUserInput | UserProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserProgressCreateManyUserInputEnvelope
    connect?: UserProgressWhereUniqueInput | UserProgressWhereUniqueInput[]
  }

  export type FlagSubmissionCreateNestedManyWithoutUserInput = {
    create?: XOR<FlagSubmissionCreateWithoutUserInput, FlagSubmissionUncheckedCreateWithoutUserInput> | FlagSubmissionCreateWithoutUserInput[] | FlagSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlagSubmissionCreateOrConnectWithoutUserInput | FlagSubmissionCreateOrConnectWithoutUserInput[]
    createMany?: FlagSubmissionCreateManyUserInputEnvelope
    connect?: FlagSubmissionWhereUniqueInput | FlagSubmissionWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type SimulationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SimulationCreateWithoutUserInput, SimulationUncheckedCreateWithoutUserInput> | SimulationCreateWithoutUserInput[] | SimulationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SimulationCreateOrConnectWithoutUserInput | SimulationCreateOrConnectWithoutUserInput[]
    createMany?: SimulationCreateManyUserInputEnvelope
    connect?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
  }

  export type LabInstanceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LabInstanceCreateWithoutUserInput, LabInstanceUncheckedCreateWithoutUserInput> | LabInstanceCreateWithoutUserInput[] | LabInstanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LabInstanceCreateOrConnectWithoutUserInput | LabInstanceCreateOrConnectWithoutUserInput[]
    createMany?: LabInstanceCreateManyUserInputEnvelope
    connect?: LabInstanceWhereUniqueInput | LabInstanceWhereUniqueInput[]
  }

  export type UserProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserProgressCreateWithoutUserInput, UserProgressUncheckedCreateWithoutUserInput> | UserProgressCreateWithoutUserInput[] | UserProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProgressCreateOrConnectWithoutUserInput | UserProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserProgressCreateManyUserInputEnvelope
    connect?: UserProgressWhereUniqueInput | UserProgressWhereUniqueInput[]
  }

  export type FlagSubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FlagSubmissionCreateWithoutUserInput, FlagSubmissionUncheckedCreateWithoutUserInput> | FlagSubmissionCreateWithoutUserInput[] | FlagSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlagSubmissionCreateOrConnectWithoutUserInput | FlagSubmissionCreateOrConnectWithoutUserInput[]
    createMany?: FlagSubmissionCreateManyUserInputEnvelope
    connect?: FlagSubmissionWhereUniqueInput | FlagSubmissionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ReportUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutUserInput | ReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutUserInput | ReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutUserInput | ReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type SimulationUpdateManyWithoutUserNestedInput = {
    create?: XOR<SimulationCreateWithoutUserInput, SimulationUncheckedCreateWithoutUserInput> | SimulationCreateWithoutUserInput[] | SimulationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SimulationCreateOrConnectWithoutUserInput | SimulationCreateOrConnectWithoutUserInput[]
    upsert?: SimulationUpsertWithWhereUniqueWithoutUserInput | SimulationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SimulationCreateManyUserInputEnvelope
    set?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
    disconnect?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
    delete?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
    connect?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
    update?: SimulationUpdateWithWhereUniqueWithoutUserInput | SimulationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SimulationUpdateManyWithWhereWithoutUserInput | SimulationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SimulationScalarWhereInput | SimulationScalarWhereInput[]
  }

  export type LabInstanceUpdateManyWithoutUserNestedInput = {
    create?: XOR<LabInstanceCreateWithoutUserInput, LabInstanceUncheckedCreateWithoutUserInput> | LabInstanceCreateWithoutUserInput[] | LabInstanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LabInstanceCreateOrConnectWithoutUserInput | LabInstanceCreateOrConnectWithoutUserInput[]
    upsert?: LabInstanceUpsertWithWhereUniqueWithoutUserInput | LabInstanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LabInstanceCreateManyUserInputEnvelope
    set?: LabInstanceWhereUniqueInput | LabInstanceWhereUniqueInput[]
    disconnect?: LabInstanceWhereUniqueInput | LabInstanceWhereUniqueInput[]
    delete?: LabInstanceWhereUniqueInput | LabInstanceWhereUniqueInput[]
    connect?: LabInstanceWhereUniqueInput | LabInstanceWhereUniqueInput[]
    update?: LabInstanceUpdateWithWhereUniqueWithoutUserInput | LabInstanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LabInstanceUpdateManyWithWhereWithoutUserInput | LabInstanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LabInstanceScalarWhereInput | LabInstanceScalarWhereInput[]
  }

  export type UserProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserProgressCreateWithoutUserInput, UserProgressUncheckedCreateWithoutUserInput> | UserProgressCreateWithoutUserInput[] | UserProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProgressCreateOrConnectWithoutUserInput | UserProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserProgressUpsertWithWhereUniqueWithoutUserInput | UserProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserProgressCreateManyUserInputEnvelope
    set?: UserProgressWhereUniqueInput | UserProgressWhereUniqueInput[]
    disconnect?: UserProgressWhereUniqueInput | UserProgressWhereUniqueInput[]
    delete?: UserProgressWhereUniqueInput | UserProgressWhereUniqueInput[]
    connect?: UserProgressWhereUniqueInput | UserProgressWhereUniqueInput[]
    update?: UserProgressUpdateWithWhereUniqueWithoutUserInput | UserProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserProgressUpdateManyWithWhereWithoutUserInput | UserProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserProgressScalarWhereInput | UserProgressScalarWhereInput[]
  }

  export type FlagSubmissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<FlagSubmissionCreateWithoutUserInput, FlagSubmissionUncheckedCreateWithoutUserInput> | FlagSubmissionCreateWithoutUserInput[] | FlagSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlagSubmissionCreateOrConnectWithoutUserInput | FlagSubmissionCreateOrConnectWithoutUserInput[]
    upsert?: FlagSubmissionUpsertWithWhereUniqueWithoutUserInput | FlagSubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FlagSubmissionCreateManyUserInputEnvelope
    set?: FlagSubmissionWhereUniqueInput | FlagSubmissionWhereUniqueInput[]
    disconnect?: FlagSubmissionWhereUniqueInput | FlagSubmissionWhereUniqueInput[]
    delete?: FlagSubmissionWhereUniqueInput | FlagSubmissionWhereUniqueInput[]
    connect?: FlagSubmissionWhereUniqueInput | FlagSubmissionWhereUniqueInput[]
    update?: FlagSubmissionUpdateWithWhereUniqueWithoutUserInput | FlagSubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FlagSubmissionUpdateManyWithWhereWithoutUserInput | FlagSubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FlagSubmissionScalarWhereInput | FlagSubmissionScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutUserInput | ReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutUserInput | ReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutUserInput | ReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type SimulationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SimulationCreateWithoutUserInput, SimulationUncheckedCreateWithoutUserInput> | SimulationCreateWithoutUserInput[] | SimulationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SimulationCreateOrConnectWithoutUserInput | SimulationCreateOrConnectWithoutUserInput[]
    upsert?: SimulationUpsertWithWhereUniqueWithoutUserInput | SimulationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SimulationCreateManyUserInputEnvelope
    set?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
    disconnect?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
    delete?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
    connect?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
    update?: SimulationUpdateWithWhereUniqueWithoutUserInput | SimulationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SimulationUpdateManyWithWhereWithoutUserInput | SimulationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SimulationScalarWhereInput | SimulationScalarWhereInput[]
  }

  export type LabInstanceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LabInstanceCreateWithoutUserInput, LabInstanceUncheckedCreateWithoutUserInput> | LabInstanceCreateWithoutUserInput[] | LabInstanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LabInstanceCreateOrConnectWithoutUserInput | LabInstanceCreateOrConnectWithoutUserInput[]
    upsert?: LabInstanceUpsertWithWhereUniqueWithoutUserInput | LabInstanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LabInstanceCreateManyUserInputEnvelope
    set?: LabInstanceWhereUniqueInput | LabInstanceWhereUniqueInput[]
    disconnect?: LabInstanceWhereUniqueInput | LabInstanceWhereUniqueInput[]
    delete?: LabInstanceWhereUniqueInput | LabInstanceWhereUniqueInput[]
    connect?: LabInstanceWhereUniqueInput | LabInstanceWhereUniqueInput[]
    update?: LabInstanceUpdateWithWhereUniqueWithoutUserInput | LabInstanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LabInstanceUpdateManyWithWhereWithoutUserInput | LabInstanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LabInstanceScalarWhereInput | LabInstanceScalarWhereInput[]
  }

  export type UserProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserProgressCreateWithoutUserInput, UserProgressUncheckedCreateWithoutUserInput> | UserProgressCreateWithoutUserInput[] | UserProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProgressCreateOrConnectWithoutUserInput | UserProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserProgressUpsertWithWhereUniqueWithoutUserInput | UserProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserProgressCreateManyUserInputEnvelope
    set?: UserProgressWhereUniqueInput | UserProgressWhereUniqueInput[]
    disconnect?: UserProgressWhereUniqueInput | UserProgressWhereUniqueInput[]
    delete?: UserProgressWhereUniqueInput | UserProgressWhereUniqueInput[]
    connect?: UserProgressWhereUniqueInput | UserProgressWhereUniqueInput[]
    update?: UserProgressUpdateWithWhereUniqueWithoutUserInput | UserProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserProgressUpdateManyWithWhereWithoutUserInput | UserProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserProgressScalarWhereInput | UserProgressScalarWhereInput[]
  }

  export type FlagSubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FlagSubmissionCreateWithoutUserInput, FlagSubmissionUncheckedCreateWithoutUserInput> | FlagSubmissionCreateWithoutUserInput[] | FlagSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlagSubmissionCreateOrConnectWithoutUserInput | FlagSubmissionCreateOrConnectWithoutUserInput[]
    upsert?: FlagSubmissionUpsertWithWhereUniqueWithoutUserInput | FlagSubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FlagSubmissionCreateManyUserInputEnvelope
    set?: FlagSubmissionWhereUniqueInput | FlagSubmissionWhereUniqueInput[]
    disconnect?: FlagSubmissionWhereUniqueInput | FlagSubmissionWhereUniqueInput[]
    delete?: FlagSubmissionWhereUniqueInput | FlagSubmissionWhereUniqueInput[]
    connect?: FlagSubmissionWhereUniqueInput | FlagSubmissionWhereUniqueInput[]
    update?: FlagSubmissionUpdateWithWhereUniqueWithoutUserInput | FlagSubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FlagSubmissionUpdateManyWithWhereWithoutUserInput | FlagSubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FlagSubmissionScalarWhereInput | FlagSubmissionScalarWhereInput[]
  }

  export type LabCreateskillsInput = {
    set: string[]
  }

  export type LabInstanceCreateNestedManyWithoutLabInput = {
    create?: XOR<LabInstanceCreateWithoutLabInput, LabInstanceUncheckedCreateWithoutLabInput> | LabInstanceCreateWithoutLabInput[] | LabInstanceUncheckedCreateWithoutLabInput[]
    connectOrCreate?: LabInstanceCreateOrConnectWithoutLabInput | LabInstanceCreateOrConnectWithoutLabInput[]
    createMany?: LabInstanceCreateManyLabInputEnvelope
    connect?: LabInstanceWhereUniqueInput | LabInstanceWhereUniqueInput[]
  }

  export type LabInstanceUncheckedCreateNestedManyWithoutLabInput = {
    create?: XOR<LabInstanceCreateWithoutLabInput, LabInstanceUncheckedCreateWithoutLabInput> | LabInstanceCreateWithoutLabInput[] | LabInstanceUncheckedCreateWithoutLabInput[]
    connectOrCreate?: LabInstanceCreateOrConnectWithoutLabInput | LabInstanceCreateOrConnectWithoutLabInput[]
    createMany?: LabInstanceCreateManyLabInputEnvelope
    connect?: LabInstanceWhereUniqueInput | LabInstanceWhereUniqueInput[]
  }

  export type EnumScenarioDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.ScenarioDifficulty
  }

  export type LabUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumLabAccessTypeFieldUpdateOperationsInput = {
    set?: $Enums.LabAccessType
  }

  export type LabInstanceUpdateManyWithoutLabNestedInput = {
    create?: XOR<LabInstanceCreateWithoutLabInput, LabInstanceUncheckedCreateWithoutLabInput> | LabInstanceCreateWithoutLabInput[] | LabInstanceUncheckedCreateWithoutLabInput[]
    connectOrCreate?: LabInstanceCreateOrConnectWithoutLabInput | LabInstanceCreateOrConnectWithoutLabInput[]
    upsert?: LabInstanceUpsertWithWhereUniqueWithoutLabInput | LabInstanceUpsertWithWhereUniqueWithoutLabInput[]
    createMany?: LabInstanceCreateManyLabInputEnvelope
    set?: LabInstanceWhereUniqueInput | LabInstanceWhereUniqueInput[]
    disconnect?: LabInstanceWhereUniqueInput | LabInstanceWhereUniqueInput[]
    delete?: LabInstanceWhereUniqueInput | LabInstanceWhereUniqueInput[]
    connect?: LabInstanceWhereUniqueInput | LabInstanceWhereUniqueInput[]
    update?: LabInstanceUpdateWithWhereUniqueWithoutLabInput | LabInstanceUpdateWithWhereUniqueWithoutLabInput[]
    updateMany?: LabInstanceUpdateManyWithWhereWithoutLabInput | LabInstanceUpdateManyWithWhereWithoutLabInput[]
    deleteMany?: LabInstanceScalarWhereInput | LabInstanceScalarWhereInput[]
  }

  export type LabInstanceUncheckedUpdateManyWithoutLabNestedInput = {
    create?: XOR<LabInstanceCreateWithoutLabInput, LabInstanceUncheckedCreateWithoutLabInput> | LabInstanceCreateWithoutLabInput[] | LabInstanceUncheckedCreateWithoutLabInput[]
    connectOrCreate?: LabInstanceCreateOrConnectWithoutLabInput | LabInstanceCreateOrConnectWithoutLabInput[]
    upsert?: LabInstanceUpsertWithWhereUniqueWithoutLabInput | LabInstanceUpsertWithWhereUniqueWithoutLabInput[]
    createMany?: LabInstanceCreateManyLabInputEnvelope
    set?: LabInstanceWhereUniqueInput | LabInstanceWhereUniqueInput[]
    disconnect?: LabInstanceWhereUniqueInput | LabInstanceWhereUniqueInput[]
    delete?: LabInstanceWhereUniqueInput | LabInstanceWhereUniqueInput[]
    connect?: LabInstanceWhereUniqueInput | LabInstanceWhereUniqueInput[]
    update?: LabInstanceUpdateWithWhereUniqueWithoutLabInput | LabInstanceUpdateWithWhereUniqueWithoutLabInput[]
    updateMany?: LabInstanceUpdateManyWithWhereWithoutLabInput | LabInstanceUpdateManyWithWhereWithoutLabInput[]
    deleteMany?: LabInstanceScalarWhereInput | LabInstanceScalarWhereInput[]
  }

  export type LabCreateNestedOneWithoutInstancesInput = {
    create?: XOR<LabCreateWithoutInstancesInput, LabUncheckedCreateWithoutInstancesInput>
    connectOrCreate?: LabCreateOrConnectWithoutInstancesInput
    connect?: LabWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLabInstancesInput = {
    create?: XOR<UserCreateWithoutLabInstancesInput, UserUncheckedCreateWithoutLabInstancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLabInstancesInput
    connect?: UserWhereUniqueInput
  }

  export type FlagSubmissionCreateNestedManyWithoutLabInstanceInput = {
    create?: XOR<FlagSubmissionCreateWithoutLabInstanceInput, FlagSubmissionUncheckedCreateWithoutLabInstanceInput> | FlagSubmissionCreateWithoutLabInstanceInput[] | FlagSubmissionUncheckedCreateWithoutLabInstanceInput[]
    connectOrCreate?: FlagSubmissionCreateOrConnectWithoutLabInstanceInput | FlagSubmissionCreateOrConnectWithoutLabInstanceInput[]
    createMany?: FlagSubmissionCreateManyLabInstanceInputEnvelope
    connect?: FlagSubmissionWhereUniqueInput | FlagSubmissionWhereUniqueInput[]
  }

  export type FlagSubmissionUncheckedCreateNestedManyWithoutLabInstanceInput = {
    create?: XOR<FlagSubmissionCreateWithoutLabInstanceInput, FlagSubmissionUncheckedCreateWithoutLabInstanceInput> | FlagSubmissionCreateWithoutLabInstanceInput[] | FlagSubmissionUncheckedCreateWithoutLabInstanceInput[]
    connectOrCreate?: FlagSubmissionCreateOrConnectWithoutLabInstanceInput | FlagSubmissionCreateOrConnectWithoutLabInstanceInput[]
    createMany?: FlagSubmissionCreateManyLabInstanceInputEnvelope
    connect?: FlagSubmissionWhereUniqueInput | FlagSubmissionWhereUniqueInput[]
  }

  export type EnumLabInstanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.LabInstanceStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type LabUpdateOneRequiredWithoutInstancesNestedInput = {
    create?: XOR<LabCreateWithoutInstancesInput, LabUncheckedCreateWithoutInstancesInput>
    connectOrCreate?: LabCreateOrConnectWithoutInstancesInput
    upsert?: LabUpsertWithoutInstancesInput
    connect?: LabWhereUniqueInput
    update?: XOR<XOR<LabUpdateToOneWithWhereWithoutInstancesInput, LabUpdateWithoutInstancesInput>, LabUncheckedUpdateWithoutInstancesInput>
  }

  export type UserUpdateOneRequiredWithoutLabInstancesNestedInput = {
    create?: XOR<UserCreateWithoutLabInstancesInput, UserUncheckedCreateWithoutLabInstancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLabInstancesInput
    upsert?: UserUpsertWithoutLabInstancesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLabInstancesInput, UserUpdateWithoutLabInstancesInput>, UserUncheckedUpdateWithoutLabInstancesInput>
  }

  export type FlagSubmissionUpdateManyWithoutLabInstanceNestedInput = {
    create?: XOR<FlagSubmissionCreateWithoutLabInstanceInput, FlagSubmissionUncheckedCreateWithoutLabInstanceInput> | FlagSubmissionCreateWithoutLabInstanceInput[] | FlagSubmissionUncheckedCreateWithoutLabInstanceInput[]
    connectOrCreate?: FlagSubmissionCreateOrConnectWithoutLabInstanceInput | FlagSubmissionCreateOrConnectWithoutLabInstanceInput[]
    upsert?: FlagSubmissionUpsertWithWhereUniqueWithoutLabInstanceInput | FlagSubmissionUpsertWithWhereUniqueWithoutLabInstanceInput[]
    createMany?: FlagSubmissionCreateManyLabInstanceInputEnvelope
    set?: FlagSubmissionWhereUniqueInput | FlagSubmissionWhereUniqueInput[]
    disconnect?: FlagSubmissionWhereUniqueInput | FlagSubmissionWhereUniqueInput[]
    delete?: FlagSubmissionWhereUniqueInput | FlagSubmissionWhereUniqueInput[]
    connect?: FlagSubmissionWhereUniqueInput | FlagSubmissionWhereUniqueInput[]
    update?: FlagSubmissionUpdateWithWhereUniqueWithoutLabInstanceInput | FlagSubmissionUpdateWithWhereUniqueWithoutLabInstanceInput[]
    updateMany?: FlagSubmissionUpdateManyWithWhereWithoutLabInstanceInput | FlagSubmissionUpdateManyWithWhereWithoutLabInstanceInput[]
    deleteMany?: FlagSubmissionScalarWhereInput | FlagSubmissionScalarWhereInput[]
  }

  export type FlagSubmissionUncheckedUpdateManyWithoutLabInstanceNestedInput = {
    create?: XOR<FlagSubmissionCreateWithoutLabInstanceInput, FlagSubmissionUncheckedCreateWithoutLabInstanceInput> | FlagSubmissionCreateWithoutLabInstanceInput[] | FlagSubmissionUncheckedCreateWithoutLabInstanceInput[]
    connectOrCreate?: FlagSubmissionCreateOrConnectWithoutLabInstanceInput | FlagSubmissionCreateOrConnectWithoutLabInstanceInput[]
    upsert?: FlagSubmissionUpsertWithWhereUniqueWithoutLabInstanceInput | FlagSubmissionUpsertWithWhereUniqueWithoutLabInstanceInput[]
    createMany?: FlagSubmissionCreateManyLabInstanceInputEnvelope
    set?: FlagSubmissionWhereUniqueInput | FlagSubmissionWhereUniqueInput[]
    disconnect?: FlagSubmissionWhereUniqueInput | FlagSubmissionWhereUniqueInput[]
    delete?: FlagSubmissionWhereUniqueInput | FlagSubmissionWhereUniqueInput[]
    connect?: FlagSubmissionWhereUniqueInput | FlagSubmissionWhereUniqueInput[]
    update?: FlagSubmissionUpdateWithWhereUniqueWithoutLabInstanceInput | FlagSubmissionUpdateWithWhereUniqueWithoutLabInstanceInput[]
    updateMany?: FlagSubmissionUpdateManyWithWhereWithoutLabInstanceInput | FlagSubmissionUpdateManyWithWhereWithoutLabInstanceInput[]
    deleteMany?: FlagSubmissionScalarWhereInput | FlagSubmissionScalarWhereInput[]
  }

  export type LabInstanceCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<LabInstanceCreateWithoutSubmissionsInput, LabInstanceUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: LabInstanceCreateOrConnectWithoutSubmissionsInput
    connect?: LabInstanceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFlagSubmissionsInput = {
    create?: XOR<UserCreateWithoutFlagSubmissionsInput, UserUncheckedCreateWithoutFlagSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlagSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type LabInstanceUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<LabInstanceCreateWithoutSubmissionsInput, LabInstanceUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: LabInstanceCreateOrConnectWithoutSubmissionsInput
    upsert?: LabInstanceUpsertWithoutSubmissionsInput
    connect?: LabInstanceWhereUniqueInput
    update?: XOR<XOR<LabInstanceUpdateToOneWithWhereWithoutSubmissionsInput, LabInstanceUpdateWithoutSubmissionsInput>, LabInstanceUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateOneRequiredWithoutFlagSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutFlagSubmissionsInput, UserUncheckedCreateWithoutFlagSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlagSubmissionsInput
    upsert?: UserUpsertWithoutFlagSubmissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFlagSubmissionsInput, UserUpdateWithoutFlagSubmissionsInput>, UserUncheckedUpdateWithoutFlagSubmissionsInput>
  }

  export type ScenarioCreateskillsInput = {
    set: string[]
  }

  export type SimulationCreateNestedManyWithoutScenarioInput = {
    create?: XOR<SimulationCreateWithoutScenarioInput, SimulationUncheckedCreateWithoutScenarioInput> | SimulationCreateWithoutScenarioInput[] | SimulationUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: SimulationCreateOrConnectWithoutScenarioInput | SimulationCreateOrConnectWithoutScenarioInput[]
    createMany?: SimulationCreateManyScenarioInputEnvelope
    connect?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
  }

  export type SimulationUncheckedCreateNestedManyWithoutScenarioInput = {
    create?: XOR<SimulationCreateWithoutScenarioInput, SimulationUncheckedCreateWithoutScenarioInput> | SimulationCreateWithoutScenarioInput[] | SimulationUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: SimulationCreateOrConnectWithoutScenarioInput | SimulationCreateOrConnectWithoutScenarioInput[]
    createMany?: SimulationCreateManyScenarioInputEnvelope
    connect?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
  }

  export type EnumScenarioCategoryFieldUpdateOperationsInput = {
    set?: $Enums.ScenarioCategory
  }

  export type ScenarioUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SimulationUpdateManyWithoutScenarioNestedInput = {
    create?: XOR<SimulationCreateWithoutScenarioInput, SimulationUncheckedCreateWithoutScenarioInput> | SimulationCreateWithoutScenarioInput[] | SimulationUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: SimulationCreateOrConnectWithoutScenarioInput | SimulationCreateOrConnectWithoutScenarioInput[]
    upsert?: SimulationUpsertWithWhereUniqueWithoutScenarioInput | SimulationUpsertWithWhereUniqueWithoutScenarioInput[]
    createMany?: SimulationCreateManyScenarioInputEnvelope
    set?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
    disconnect?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
    delete?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
    connect?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
    update?: SimulationUpdateWithWhereUniqueWithoutScenarioInput | SimulationUpdateWithWhereUniqueWithoutScenarioInput[]
    updateMany?: SimulationUpdateManyWithWhereWithoutScenarioInput | SimulationUpdateManyWithWhereWithoutScenarioInput[]
    deleteMany?: SimulationScalarWhereInput | SimulationScalarWhereInput[]
  }

  export type SimulationUncheckedUpdateManyWithoutScenarioNestedInput = {
    create?: XOR<SimulationCreateWithoutScenarioInput, SimulationUncheckedCreateWithoutScenarioInput> | SimulationCreateWithoutScenarioInput[] | SimulationUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: SimulationCreateOrConnectWithoutScenarioInput | SimulationCreateOrConnectWithoutScenarioInput[]
    upsert?: SimulationUpsertWithWhereUniqueWithoutScenarioInput | SimulationUpsertWithWhereUniqueWithoutScenarioInput[]
    createMany?: SimulationCreateManyScenarioInputEnvelope
    set?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
    disconnect?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
    delete?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
    connect?: SimulationWhereUniqueInput | SimulationWhereUniqueInput[]
    update?: SimulationUpdateWithWhereUniqueWithoutScenarioInput | SimulationUpdateWithWhereUniqueWithoutScenarioInput[]
    updateMany?: SimulationUpdateManyWithWhereWithoutScenarioInput | SimulationUpdateManyWithWhereWithoutScenarioInput[]
    deleteMany?: SimulationScalarWhereInput | SimulationScalarWhereInput[]
  }

  export type ReportCreateNestedOneWithoutSimulationInput = {
    create?: XOR<ReportCreateWithoutSimulationInput, ReportUncheckedCreateWithoutSimulationInput>
    connectOrCreate?: ReportCreateOrConnectWithoutSimulationInput
    connect?: ReportWhereUniqueInput
  }

  export type ScenarioCreateNestedOneWithoutSimulationsInput = {
    create?: XOR<ScenarioCreateWithoutSimulationsInput, ScenarioUncheckedCreateWithoutSimulationsInput>
    connectOrCreate?: ScenarioCreateOrConnectWithoutSimulationsInput
    connect?: ScenarioWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSimulationsInput = {
    create?: XOR<UserCreateWithoutSimulationsInput, UserUncheckedCreateWithoutSimulationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSimulationsInput
    connect?: UserWhereUniqueInput
  }

  export type SimulationStepCreateNestedManyWithoutSimulationInput = {
    create?: XOR<SimulationStepCreateWithoutSimulationInput, SimulationStepUncheckedCreateWithoutSimulationInput> | SimulationStepCreateWithoutSimulationInput[] | SimulationStepUncheckedCreateWithoutSimulationInput[]
    connectOrCreate?: SimulationStepCreateOrConnectWithoutSimulationInput | SimulationStepCreateOrConnectWithoutSimulationInput[]
    createMany?: SimulationStepCreateManySimulationInputEnvelope
    connect?: SimulationStepWhereUniqueInput | SimulationStepWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedOneWithoutSimulationInput = {
    create?: XOR<ReportCreateWithoutSimulationInput, ReportUncheckedCreateWithoutSimulationInput>
    connectOrCreate?: ReportCreateOrConnectWithoutSimulationInput
    connect?: ReportWhereUniqueInput
  }

  export type SimulationStepUncheckedCreateNestedManyWithoutSimulationInput = {
    create?: XOR<SimulationStepCreateWithoutSimulationInput, SimulationStepUncheckedCreateWithoutSimulationInput> | SimulationStepCreateWithoutSimulationInput[] | SimulationStepUncheckedCreateWithoutSimulationInput[]
    connectOrCreate?: SimulationStepCreateOrConnectWithoutSimulationInput | SimulationStepCreateOrConnectWithoutSimulationInput[]
    createMany?: SimulationStepCreateManySimulationInputEnvelope
    connect?: SimulationStepWhereUniqueInput | SimulationStepWhereUniqueInput[]
  }

  export type EnumSimulationStatusFieldUpdateOperationsInput = {
    set?: $Enums.SimulationStatus
  }

  export type ReportUpdateOneWithoutSimulationNestedInput = {
    create?: XOR<ReportCreateWithoutSimulationInput, ReportUncheckedCreateWithoutSimulationInput>
    connectOrCreate?: ReportCreateOrConnectWithoutSimulationInput
    upsert?: ReportUpsertWithoutSimulationInput
    disconnect?: ReportWhereInput | boolean
    delete?: ReportWhereInput | boolean
    connect?: ReportWhereUniqueInput
    update?: XOR<XOR<ReportUpdateToOneWithWhereWithoutSimulationInput, ReportUpdateWithoutSimulationInput>, ReportUncheckedUpdateWithoutSimulationInput>
  }

  export type ScenarioUpdateOneRequiredWithoutSimulationsNestedInput = {
    create?: XOR<ScenarioCreateWithoutSimulationsInput, ScenarioUncheckedCreateWithoutSimulationsInput>
    connectOrCreate?: ScenarioCreateOrConnectWithoutSimulationsInput
    upsert?: ScenarioUpsertWithoutSimulationsInput
    connect?: ScenarioWhereUniqueInput
    update?: XOR<XOR<ScenarioUpdateToOneWithWhereWithoutSimulationsInput, ScenarioUpdateWithoutSimulationsInput>, ScenarioUncheckedUpdateWithoutSimulationsInput>
  }

  export type UserUpdateOneRequiredWithoutSimulationsNestedInput = {
    create?: XOR<UserCreateWithoutSimulationsInput, UserUncheckedCreateWithoutSimulationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSimulationsInput
    upsert?: UserUpsertWithoutSimulationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSimulationsInput, UserUpdateWithoutSimulationsInput>, UserUncheckedUpdateWithoutSimulationsInput>
  }

  export type SimulationStepUpdateManyWithoutSimulationNestedInput = {
    create?: XOR<SimulationStepCreateWithoutSimulationInput, SimulationStepUncheckedCreateWithoutSimulationInput> | SimulationStepCreateWithoutSimulationInput[] | SimulationStepUncheckedCreateWithoutSimulationInput[]
    connectOrCreate?: SimulationStepCreateOrConnectWithoutSimulationInput | SimulationStepCreateOrConnectWithoutSimulationInput[]
    upsert?: SimulationStepUpsertWithWhereUniqueWithoutSimulationInput | SimulationStepUpsertWithWhereUniqueWithoutSimulationInput[]
    createMany?: SimulationStepCreateManySimulationInputEnvelope
    set?: SimulationStepWhereUniqueInput | SimulationStepWhereUniqueInput[]
    disconnect?: SimulationStepWhereUniqueInput | SimulationStepWhereUniqueInput[]
    delete?: SimulationStepWhereUniqueInput | SimulationStepWhereUniqueInput[]
    connect?: SimulationStepWhereUniqueInput | SimulationStepWhereUniqueInput[]
    update?: SimulationStepUpdateWithWhereUniqueWithoutSimulationInput | SimulationStepUpdateWithWhereUniqueWithoutSimulationInput[]
    updateMany?: SimulationStepUpdateManyWithWhereWithoutSimulationInput | SimulationStepUpdateManyWithWhereWithoutSimulationInput[]
    deleteMany?: SimulationStepScalarWhereInput | SimulationStepScalarWhereInput[]
  }

  export type ReportUncheckedUpdateOneWithoutSimulationNestedInput = {
    create?: XOR<ReportCreateWithoutSimulationInput, ReportUncheckedCreateWithoutSimulationInput>
    connectOrCreate?: ReportCreateOrConnectWithoutSimulationInput
    upsert?: ReportUpsertWithoutSimulationInput
    disconnect?: ReportWhereInput | boolean
    delete?: ReportWhereInput | boolean
    connect?: ReportWhereUniqueInput
    update?: XOR<XOR<ReportUpdateToOneWithWhereWithoutSimulationInput, ReportUpdateWithoutSimulationInput>, ReportUncheckedUpdateWithoutSimulationInput>
  }

  export type SimulationStepUncheckedUpdateManyWithoutSimulationNestedInput = {
    create?: XOR<SimulationStepCreateWithoutSimulationInput, SimulationStepUncheckedCreateWithoutSimulationInput> | SimulationStepCreateWithoutSimulationInput[] | SimulationStepUncheckedCreateWithoutSimulationInput[]
    connectOrCreate?: SimulationStepCreateOrConnectWithoutSimulationInput | SimulationStepCreateOrConnectWithoutSimulationInput[]
    upsert?: SimulationStepUpsertWithWhereUniqueWithoutSimulationInput | SimulationStepUpsertWithWhereUniqueWithoutSimulationInput[]
    createMany?: SimulationStepCreateManySimulationInputEnvelope
    set?: SimulationStepWhereUniqueInput | SimulationStepWhereUniqueInput[]
    disconnect?: SimulationStepWhereUniqueInput | SimulationStepWhereUniqueInput[]
    delete?: SimulationStepWhereUniqueInput | SimulationStepWhereUniqueInput[]
    connect?: SimulationStepWhereUniqueInput | SimulationStepWhereUniqueInput[]
    update?: SimulationStepUpdateWithWhereUniqueWithoutSimulationInput | SimulationStepUpdateWithWhereUniqueWithoutSimulationInput[]
    updateMany?: SimulationStepUpdateManyWithWhereWithoutSimulationInput | SimulationStepUpdateManyWithWhereWithoutSimulationInput[]
    deleteMany?: SimulationStepScalarWhereInput | SimulationStepScalarWhereInput[]
  }

  export type SimulationStepCreateoptionsInput = {
    set: string[]
  }

  export type SimulationCreateNestedOneWithoutStepsInput = {
    create?: XOR<SimulationCreateWithoutStepsInput, SimulationUncheckedCreateWithoutStepsInput>
    connectOrCreate?: SimulationCreateOrConnectWithoutStepsInput
    connect?: SimulationWhereUniqueInput
  }

  export type SimulationStepUpdateoptionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type SimulationUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<SimulationCreateWithoutStepsInput, SimulationUncheckedCreateWithoutStepsInput>
    connectOrCreate?: SimulationCreateOrConnectWithoutStepsInput
    upsert?: SimulationUpsertWithoutStepsInput
    connect?: SimulationWhereUniqueInput
    update?: XOR<XOR<SimulationUpdateToOneWithWhereWithoutStepsInput, SimulationUpdateWithoutStepsInput>, SimulationUncheckedUpdateWithoutStepsInput>
  }

  export type ReportCreatestrengthsInput = {
    set: string[]
  }

  export type ReportCreateareasToImproveInput = {
    set: string[]
  }

  export type ReportCreaterecommendationsInput = {
    set: string[]
  }

  export type SimulationCreateNestedOneWithoutReportInput = {
    create?: XOR<SimulationCreateWithoutReportInput, SimulationUncheckedCreateWithoutReportInput>
    connectOrCreate?: SimulationCreateOrConnectWithoutReportInput
    connect?: SimulationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReportsInput = {
    create?: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsInput
    connect?: UserWhereUniqueInput
  }

  export type ReportUpdatestrengthsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ReportUpdateareasToImproveInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ReportUpdaterecommendationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SimulationUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<SimulationCreateWithoutReportInput, SimulationUncheckedCreateWithoutReportInput>
    connectOrCreate?: SimulationCreateOrConnectWithoutReportInput
    upsert?: SimulationUpsertWithoutReportInput
    connect?: SimulationWhereUniqueInput
    update?: XOR<XOR<SimulationUpdateToOneWithWhereWithoutReportInput, SimulationUpdateWithoutReportInput>, SimulationUncheckedUpdateWithoutReportInput>
  }

  export type UserUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsInput
    upsert?: UserUpsertWithoutReportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReportsInput, UserUpdateWithoutReportsInput>, UserUncheckedUpdateWithoutReportsInput>
  }

  export type UserProgressCreateNestedManyWithoutTopicInput = {
    create?: XOR<UserProgressCreateWithoutTopicInput, UserProgressUncheckedCreateWithoutTopicInput> | UserProgressCreateWithoutTopicInput[] | UserProgressUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: UserProgressCreateOrConnectWithoutTopicInput | UserProgressCreateOrConnectWithoutTopicInput[]
    createMany?: UserProgressCreateManyTopicInputEnvelope
    connect?: UserProgressWhereUniqueInput | UserProgressWhereUniqueInput[]
  }

  export type UserProgressUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<UserProgressCreateWithoutTopicInput, UserProgressUncheckedCreateWithoutTopicInput> | UserProgressCreateWithoutTopicInput[] | UserProgressUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: UserProgressCreateOrConnectWithoutTopicInput | UserProgressCreateOrConnectWithoutTopicInput[]
    createMany?: UserProgressCreateManyTopicInputEnvelope
    connect?: UserProgressWhereUniqueInput | UserProgressWhereUniqueInput[]
  }

  export type EnumLearningLevelFieldUpdateOperationsInput = {
    set?: $Enums.LearningLevel
  }

  export type UserProgressUpdateManyWithoutTopicNestedInput = {
    create?: XOR<UserProgressCreateWithoutTopicInput, UserProgressUncheckedCreateWithoutTopicInput> | UserProgressCreateWithoutTopicInput[] | UserProgressUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: UserProgressCreateOrConnectWithoutTopicInput | UserProgressCreateOrConnectWithoutTopicInput[]
    upsert?: UserProgressUpsertWithWhereUniqueWithoutTopicInput | UserProgressUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: UserProgressCreateManyTopicInputEnvelope
    set?: UserProgressWhereUniqueInput | UserProgressWhereUniqueInput[]
    disconnect?: UserProgressWhereUniqueInput | UserProgressWhereUniqueInput[]
    delete?: UserProgressWhereUniqueInput | UserProgressWhereUniqueInput[]
    connect?: UserProgressWhereUniqueInput | UserProgressWhereUniqueInput[]
    update?: UserProgressUpdateWithWhereUniqueWithoutTopicInput | UserProgressUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: UserProgressUpdateManyWithWhereWithoutTopicInput | UserProgressUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: UserProgressScalarWhereInput | UserProgressScalarWhereInput[]
  }

  export type UserProgressUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<UserProgressCreateWithoutTopicInput, UserProgressUncheckedCreateWithoutTopicInput> | UserProgressCreateWithoutTopicInput[] | UserProgressUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: UserProgressCreateOrConnectWithoutTopicInput | UserProgressCreateOrConnectWithoutTopicInput[]
    upsert?: UserProgressUpsertWithWhereUniqueWithoutTopicInput | UserProgressUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: UserProgressCreateManyTopicInputEnvelope
    set?: UserProgressWhereUniqueInput | UserProgressWhereUniqueInput[]
    disconnect?: UserProgressWhereUniqueInput | UserProgressWhereUniqueInput[]
    delete?: UserProgressWhereUniqueInput | UserProgressWhereUniqueInput[]
    connect?: UserProgressWhereUniqueInput | UserProgressWhereUniqueInput[]
    update?: UserProgressUpdateWithWhereUniqueWithoutTopicInput | UserProgressUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: UserProgressUpdateManyWithWhereWithoutTopicInput | UserProgressUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: UserProgressScalarWhereInput | UserProgressScalarWhereInput[]
  }

  export type LearningTopicCreateNestedOneWithoutProgressInput = {
    create?: XOR<LearningTopicCreateWithoutProgressInput, LearningTopicUncheckedCreateWithoutProgressInput>
    connectOrCreate?: LearningTopicCreateOrConnectWithoutProgressInput
    connect?: LearningTopicWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProgressInput = {
    create?: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressInput
    connect?: UserWhereUniqueInput
  }

  export type LearningTopicUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<LearningTopicCreateWithoutProgressInput, LearningTopicUncheckedCreateWithoutProgressInput>
    connectOrCreate?: LearningTopicCreateOrConnectWithoutProgressInput
    upsert?: LearningTopicUpsertWithoutProgressInput
    connect?: LearningTopicWhereUniqueInput
    update?: XOR<XOR<LearningTopicUpdateToOneWithWhereWithoutProgressInput, LearningTopicUpdateWithoutProgressInput>, LearningTopicUncheckedUpdateWithoutProgressInput>
  }

  export type UserUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressInput
    upsert?: UserUpsertWithoutProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProgressInput, UserUpdateWithoutProgressInput>, UserUncheckedUpdateWithoutProgressInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumScenarioDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.ScenarioDifficulty | EnumScenarioDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.ScenarioDifficulty[] | ListEnumScenarioDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScenarioDifficulty[] | ListEnumScenarioDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumScenarioDifficultyFilter<$PrismaModel> | $Enums.ScenarioDifficulty
  }

  export type NestedEnumLabAccessTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LabAccessType | EnumLabAccessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LabAccessType[] | ListEnumLabAccessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LabAccessType[] | ListEnumLabAccessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLabAccessTypeFilter<$PrismaModel> | $Enums.LabAccessType
  }

  export type NestedEnumScenarioDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScenarioDifficulty | EnumScenarioDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.ScenarioDifficulty[] | ListEnumScenarioDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScenarioDifficulty[] | ListEnumScenarioDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumScenarioDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.ScenarioDifficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScenarioDifficultyFilter<$PrismaModel>
    _max?: NestedEnumScenarioDifficultyFilter<$PrismaModel>
  }

  export type NestedEnumLabAccessTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LabAccessType | EnumLabAccessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LabAccessType[] | ListEnumLabAccessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LabAccessType[] | ListEnumLabAccessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLabAccessTypeWithAggregatesFilter<$PrismaModel> | $Enums.LabAccessType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLabAccessTypeFilter<$PrismaModel>
    _max?: NestedEnumLabAccessTypeFilter<$PrismaModel>
  }

  export type NestedEnumLabInstanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LabInstanceStatus | EnumLabInstanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LabInstanceStatus[] | ListEnumLabInstanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LabInstanceStatus[] | ListEnumLabInstanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLabInstanceStatusFilter<$PrismaModel> | $Enums.LabInstanceStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumLabInstanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LabInstanceStatus | EnumLabInstanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LabInstanceStatus[] | ListEnumLabInstanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LabInstanceStatus[] | ListEnumLabInstanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLabInstanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.LabInstanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLabInstanceStatusFilter<$PrismaModel>
    _max?: NestedEnumLabInstanceStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumScenarioCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ScenarioCategory | EnumScenarioCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ScenarioCategory[] | ListEnumScenarioCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScenarioCategory[] | ListEnumScenarioCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumScenarioCategoryFilter<$PrismaModel> | $Enums.ScenarioCategory
  }

  export type NestedEnumScenarioCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScenarioCategory | EnumScenarioCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ScenarioCategory[] | ListEnumScenarioCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScenarioCategory[] | ListEnumScenarioCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumScenarioCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ScenarioCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScenarioCategoryFilter<$PrismaModel>
    _max?: NestedEnumScenarioCategoryFilter<$PrismaModel>
  }

  export type NestedEnumSimulationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SimulationStatus | EnumSimulationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SimulationStatus[] | ListEnumSimulationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SimulationStatus[] | ListEnumSimulationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSimulationStatusFilter<$PrismaModel> | $Enums.SimulationStatus
  }

  export type NestedEnumSimulationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SimulationStatus | EnumSimulationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SimulationStatus[] | ListEnumSimulationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SimulationStatus[] | ListEnumSimulationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSimulationStatusWithAggregatesFilter<$PrismaModel> | $Enums.SimulationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSimulationStatusFilter<$PrismaModel>
    _max?: NestedEnumSimulationStatusFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumLearningLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.LearningLevel | EnumLearningLevelFieldRefInput<$PrismaModel>
    in?: $Enums.LearningLevel[] | ListEnumLearningLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.LearningLevel[] | ListEnumLearningLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLearningLevelFilter<$PrismaModel> | $Enums.LearningLevel
  }

  export type NestedEnumLearningLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LearningLevel | EnumLearningLevelFieldRefInput<$PrismaModel>
    in?: $Enums.LearningLevel[] | ListEnumLearningLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.LearningLevel[] | ListEnumLearningLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLearningLevelWithAggregatesFilter<$PrismaModel> | $Enums.LearningLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLearningLevelFilter<$PrismaModel>
    _max?: NestedEnumLearningLevelFilter<$PrismaModel>
  }

  export type ReportCreateWithoutUserInput = {
    id?: string
    score: number
    timeTakenSec: number
    correctActions: number
    totalActions: number
    riskReduced: number
    summary: string
    strengths?: ReportCreatestrengthsInput | string[]
    areasToImprove?: ReportCreateareasToImproveInput | string[]
    recommendations?: ReportCreaterecommendationsInput | string[]
    completedAt?: Date | string
    createdAt?: Date | string
    simulation: SimulationCreateNestedOneWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutUserInput = {
    id?: string
    simulationId: string
    score: number
    timeTakenSec: number
    correctActions: number
    totalActions: number
    riskReduced: number
    summary: string
    strengths?: ReportCreatestrengthsInput | string[]
    areasToImprove?: ReportCreateareasToImproveInput | string[]
    recommendations?: ReportCreaterecommendationsInput | string[]
    completedAt?: Date | string
    createdAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutUserInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput>
  }

  export type ReportCreateManyUserInputEnvelope = {
    data: ReportCreateManyUserInput | ReportCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SimulationCreateWithoutUserInput = {
    id?: string
    status?: $Enums.SimulationStatus
    currentStep?: number
    score?: number | null
    timeTakenSec?: number
    riskReduced?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    report?: ReportCreateNestedOneWithoutSimulationInput
    scenario: ScenarioCreateNestedOneWithoutSimulationsInput
    steps?: SimulationStepCreateNestedManyWithoutSimulationInput
  }

  export type SimulationUncheckedCreateWithoutUserInput = {
    id?: string
    scenarioId: string
    status?: $Enums.SimulationStatus
    currentStep?: number
    score?: number | null
    timeTakenSec?: number
    riskReduced?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    report?: ReportUncheckedCreateNestedOneWithoutSimulationInput
    steps?: SimulationStepUncheckedCreateNestedManyWithoutSimulationInput
  }

  export type SimulationCreateOrConnectWithoutUserInput = {
    where: SimulationWhereUniqueInput
    create: XOR<SimulationCreateWithoutUserInput, SimulationUncheckedCreateWithoutUserInput>
  }

  export type SimulationCreateManyUserInputEnvelope = {
    data: SimulationCreateManyUserInput | SimulationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LabInstanceCreateWithoutUserInput = {
    id?: string
    status?: $Enums.LabInstanceStatus
    externalId?: string | null
    accessUrl?: string | null
    startedAt?: Date | string
    expiresAt: Date | string
    destroyedAt?: Date | string | null
    score?: number
    lastActivityAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lab: LabCreateNestedOneWithoutInstancesInput
    submissions?: FlagSubmissionCreateNestedManyWithoutLabInstanceInput
  }

  export type LabInstanceUncheckedCreateWithoutUserInput = {
    id?: string
    labId: string
    status?: $Enums.LabInstanceStatus
    externalId?: string | null
    accessUrl?: string | null
    startedAt?: Date | string
    expiresAt: Date | string
    destroyedAt?: Date | string | null
    score?: number
    lastActivityAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: FlagSubmissionUncheckedCreateNestedManyWithoutLabInstanceInput
  }

  export type LabInstanceCreateOrConnectWithoutUserInput = {
    where: LabInstanceWhereUniqueInput
    create: XOR<LabInstanceCreateWithoutUserInput, LabInstanceUncheckedCreateWithoutUserInput>
  }

  export type LabInstanceCreateManyUserInputEnvelope = {
    data: LabInstanceCreateManyUserInput | LabInstanceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserProgressCreateWithoutUserInput = {
    id?: string
    progress?: number
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topic: LearningTopicCreateNestedOneWithoutProgressInput
  }

  export type UserProgressUncheckedCreateWithoutUserInput = {
    id?: string
    topicId: string
    progress?: number
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProgressCreateOrConnectWithoutUserInput = {
    where: UserProgressWhereUniqueInput
    create: XOR<UserProgressCreateWithoutUserInput, UserProgressUncheckedCreateWithoutUserInput>
  }

  export type UserProgressCreateManyUserInputEnvelope = {
    data: UserProgressCreateManyUserInput | UserProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FlagSubmissionCreateWithoutUserInput = {
    id?: string
    submittedFlag: string
    isCorrect: boolean
    scoreAwarded?: number
    submittedAt?: Date | string
    labInstance: LabInstanceCreateNestedOneWithoutSubmissionsInput
  }

  export type FlagSubmissionUncheckedCreateWithoutUserInput = {
    id?: string
    labInstanceId: string
    submittedFlag: string
    isCorrect: boolean
    scoreAwarded?: number
    submittedAt?: Date | string
  }

  export type FlagSubmissionCreateOrConnectWithoutUserInput = {
    where: FlagSubmissionWhereUniqueInput
    create: XOR<FlagSubmissionCreateWithoutUserInput, FlagSubmissionUncheckedCreateWithoutUserInput>
  }

  export type FlagSubmissionCreateManyUserInputEnvelope = {
    data: FlagSubmissionCreateManyUserInput | FlagSubmissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReportUpsertWithWhereUniqueWithoutUserInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutUserInput, ReportUncheckedUpdateWithoutUserInput>
    create: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutUserInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutUserInput, ReportUncheckedUpdateWithoutUserInput>
  }

  export type ReportUpdateManyWithWhereWithoutUserInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutUserInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: StringFilter<"Report"> | string
    simulationId?: StringFilter<"Report"> | string
    userId?: StringFilter<"Report"> | string
    score?: IntFilter<"Report"> | number
    timeTakenSec?: IntFilter<"Report"> | number
    correctActions?: IntFilter<"Report"> | number
    totalActions?: IntFilter<"Report"> | number
    riskReduced?: IntFilter<"Report"> | number
    summary?: StringFilter<"Report"> | string
    strengths?: StringNullableListFilter<"Report">
    areasToImprove?: StringNullableListFilter<"Report">
    recommendations?: StringNullableListFilter<"Report">
    completedAt?: DateTimeFilter<"Report"> | Date | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
  }

  export type SimulationUpsertWithWhereUniqueWithoutUserInput = {
    where: SimulationWhereUniqueInput
    update: XOR<SimulationUpdateWithoutUserInput, SimulationUncheckedUpdateWithoutUserInput>
    create: XOR<SimulationCreateWithoutUserInput, SimulationUncheckedCreateWithoutUserInput>
  }

  export type SimulationUpdateWithWhereUniqueWithoutUserInput = {
    where: SimulationWhereUniqueInput
    data: XOR<SimulationUpdateWithoutUserInput, SimulationUncheckedUpdateWithoutUserInput>
  }

  export type SimulationUpdateManyWithWhereWithoutUserInput = {
    where: SimulationScalarWhereInput
    data: XOR<SimulationUpdateManyMutationInput, SimulationUncheckedUpdateManyWithoutUserInput>
  }

  export type SimulationScalarWhereInput = {
    AND?: SimulationScalarWhereInput | SimulationScalarWhereInput[]
    OR?: SimulationScalarWhereInput[]
    NOT?: SimulationScalarWhereInput | SimulationScalarWhereInput[]
    id?: StringFilter<"Simulation"> | string
    userId?: StringFilter<"Simulation"> | string
    scenarioId?: StringFilter<"Simulation"> | string
    status?: EnumSimulationStatusFilter<"Simulation"> | $Enums.SimulationStatus
    currentStep?: IntFilter<"Simulation"> | number
    score?: IntNullableFilter<"Simulation"> | number | null
    timeTakenSec?: IntFilter<"Simulation"> | number
    riskReduced?: IntFilter<"Simulation"> | number
    startedAt?: DateTimeFilter<"Simulation"> | Date | string
    completedAt?: DateTimeNullableFilter<"Simulation"> | Date | string | null
    createdAt?: DateTimeFilter<"Simulation"> | Date | string
    updatedAt?: DateTimeFilter<"Simulation"> | Date | string
  }

  export type LabInstanceUpsertWithWhereUniqueWithoutUserInput = {
    where: LabInstanceWhereUniqueInput
    update: XOR<LabInstanceUpdateWithoutUserInput, LabInstanceUncheckedUpdateWithoutUserInput>
    create: XOR<LabInstanceCreateWithoutUserInput, LabInstanceUncheckedCreateWithoutUserInput>
  }

  export type LabInstanceUpdateWithWhereUniqueWithoutUserInput = {
    where: LabInstanceWhereUniqueInput
    data: XOR<LabInstanceUpdateWithoutUserInput, LabInstanceUncheckedUpdateWithoutUserInput>
  }

  export type LabInstanceUpdateManyWithWhereWithoutUserInput = {
    where: LabInstanceScalarWhereInput
    data: XOR<LabInstanceUpdateManyMutationInput, LabInstanceUncheckedUpdateManyWithoutUserInput>
  }

  export type LabInstanceScalarWhereInput = {
    AND?: LabInstanceScalarWhereInput | LabInstanceScalarWhereInput[]
    OR?: LabInstanceScalarWhereInput[]
    NOT?: LabInstanceScalarWhereInput | LabInstanceScalarWhereInput[]
    id?: StringFilter<"LabInstance"> | string
    labId?: StringFilter<"LabInstance"> | string
    userId?: StringFilter<"LabInstance"> | string
    status?: EnumLabInstanceStatusFilter<"LabInstance"> | $Enums.LabInstanceStatus
    externalId?: StringNullableFilter<"LabInstance"> | string | null
    accessUrl?: StringNullableFilter<"LabInstance"> | string | null
    startedAt?: DateTimeFilter<"LabInstance"> | Date | string
    expiresAt?: DateTimeFilter<"LabInstance"> | Date | string
    destroyedAt?: DateTimeNullableFilter<"LabInstance"> | Date | string | null
    score?: IntFilter<"LabInstance"> | number
    lastActivityAt?: DateTimeNullableFilter<"LabInstance"> | Date | string | null
    createdAt?: DateTimeFilter<"LabInstance"> | Date | string
    updatedAt?: DateTimeFilter<"LabInstance"> | Date | string
  }

  export type UserProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: UserProgressWhereUniqueInput
    update: XOR<UserProgressUpdateWithoutUserInput, UserProgressUncheckedUpdateWithoutUserInput>
    create: XOR<UserProgressCreateWithoutUserInput, UserProgressUncheckedCreateWithoutUserInput>
  }

  export type UserProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: UserProgressWhereUniqueInput
    data: XOR<UserProgressUpdateWithoutUserInput, UserProgressUncheckedUpdateWithoutUserInput>
  }

  export type UserProgressUpdateManyWithWhereWithoutUserInput = {
    where: UserProgressScalarWhereInput
    data: XOR<UserProgressUpdateManyMutationInput, UserProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type UserProgressScalarWhereInput = {
    AND?: UserProgressScalarWhereInput | UserProgressScalarWhereInput[]
    OR?: UserProgressScalarWhereInput[]
    NOT?: UserProgressScalarWhereInput | UserProgressScalarWhereInput[]
    id?: StringFilter<"UserProgress"> | string
    userId?: StringFilter<"UserProgress"> | string
    topicId?: StringFilter<"UserProgress"> | string
    progress?: IntFilter<"UserProgress"> | number
    completedAt?: DateTimeNullableFilter<"UserProgress"> | Date | string | null
    createdAt?: DateTimeFilter<"UserProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserProgress"> | Date | string
  }

  export type FlagSubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: FlagSubmissionWhereUniqueInput
    update: XOR<FlagSubmissionUpdateWithoutUserInput, FlagSubmissionUncheckedUpdateWithoutUserInput>
    create: XOR<FlagSubmissionCreateWithoutUserInput, FlagSubmissionUncheckedCreateWithoutUserInput>
  }

  export type FlagSubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: FlagSubmissionWhereUniqueInput
    data: XOR<FlagSubmissionUpdateWithoutUserInput, FlagSubmissionUncheckedUpdateWithoutUserInput>
  }

  export type FlagSubmissionUpdateManyWithWhereWithoutUserInput = {
    where: FlagSubmissionScalarWhereInput
    data: XOR<FlagSubmissionUpdateManyMutationInput, FlagSubmissionUncheckedUpdateManyWithoutUserInput>
  }

  export type FlagSubmissionScalarWhereInput = {
    AND?: FlagSubmissionScalarWhereInput | FlagSubmissionScalarWhereInput[]
    OR?: FlagSubmissionScalarWhereInput[]
    NOT?: FlagSubmissionScalarWhereInput | FlagSubmissionScalarWhereInput[]
    id?: StringFilter<"FlagSubmission"> | string
    labInstanceId?: StringFilter<"FlagSubmission"> | string
    userId?: StringFilter<"FlagSubmission"> | string
    submittedFlag?: StringFilter<"FlagSubmission"> | string
    isCorrect?: BoolFilter<"FlagSubmission"> | boolean
    scoreAwarded?: IntFilter<"FlagSubmission"> | number
    submittedAt?: DateTimeFilter<"FlagSubmission"> | Date | string
  }

  export type LabInstanceCreateWithoutLabInput = {
    id?: string
    status?: $Enums.LabInstanceStatus
    externalId?: string | null
    accessUrl?: string | null
    startedAt?: Date | string
    expiresAt: Date | string
    destroyedAt?: Date | string | null
    score?: number
    lastActivityAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLabInstancesInput
    submissions?: FlagSubmissionCreateNestedManyWithoutLabInstanceInput
  }

  export type LabInstanceUncheckedCreateWithoutLabInput = {
    id?: string
    userId: string
    status?: $Enums.LabInstanceStatus
    externalId?: string | null
    accessUrl?: string | null
    startedAt?: Date | string
    expiresAt: Date | string
    destroyedAt?: Date | string | null
    score?: number
    lastActivityAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: FlagSubmissionUncheckedCreateNestedManyWithoutLabInstanceInput
  }

  export type LabInstanceCreateOrConnectWithoutLabInput = {
    where: LabInstanceWhereUniqueInput
    create: XOR<LabInstanceCreateWithoutLabInput, LabInstanceUncheckedCreateWithoutLabInput>
  }

  export type LabInstanceCreateManyLabInputEnvelope = {
    data: LabInstanceCreateManyLabInput | LabInstanceCreateManyLabInput[]
    skipDuplicates?: boolean
  }

  export type LabInstanceUpsertWithWhereUniqueWithoutLabInput = {
    where: LabInstanceWhereUniqueInput
    update: XOR<LabInstanceUpdateWithoutLabInput, LabInstanceUncheckedUpdateWithoutLabInput>
    create: XOR<LabInstanceCreateWithoutLabInput, LabInstanceUncheckedCreateWithoutLabInput>
  }

  export type LabInstanceUpdateWithWhereUniqueWithoutLabInput = {
    where: LabInstanceWhereUniqueInput
    data: XOR<LabInstanceUpdateWithoutLabInput, LabInstanceUncheckedUpdateWithoutLabInput>
  }

  export type LabInstanceUpdateManyWithWhereWithoutLabInput = {
    where: LabInstanceScalarWhereInput
    data: XOR<LabInstanceUpdateManyMutationInput, LabInstanceUncheckedUpdateManyWithoutLabInput>
  }

  export type LabCreateWithoutInstancesInput = {
    id?: string
    slug: string
    title: string
    description: string
    category: string
    difficulty: $Enums.ScenarioDifficulty
    timeEstimate: number
    skills?: LabCreateskillsInput | string[]
    risk: string
    dockerImage: string
    flagHash: string
    points?: number
    accessType: $Enums.LabAccessType
    maxDurationMin?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LabUncheckedCreateWithoutInstancesInput = {
    id?: string
    slug: string
    title: string
    description: string
    category: string
    difficulty: $Enums.ScenarioDifficulty
    timeEstimate: number
    skills?: LabCreateskillsInput | string[]
    risk: string
    dockerImage: string
    flagHash: string
    points?: number
    accessType: $Enums.LabAccessType
    maxDurationMin?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LabCreateOrConnectWithoutInstancesInput = {
    where: LabWhereUniqueInput
    create: XOR<LabCreateWithoutInstancesInput, LabUncheckedCreateWithoutInstancesInput>
  }

  export type UserCreateWithoutLabInstancesInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    skillLevel?: string
    totalScore?: number
    rank?: number | null
    accuracy?: number
    trend?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationsEnabled?: boolean
    reports?: ReportCreateNestedManyWithoutUserInput
    simulations?: SimulationCreateNestedManyWithoutUserInput
    progress?: UserProgressCreateNestedManyWithoutUserInput
    flagSubmissions?: FlagSubmissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLabInstancesInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    skillLevel?: string
    totalScore?: number
    rank?: number | null
    accuracy?: number
    trend?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationsEnabled?: boolean
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    simulations?: SimulationUncheckedCreateNestedManyWithoutUserInput
    progress?: UserProgressUncheckedCreateNestedManyWithoutUserInput
    flagSubmissions?: FlagSubmissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLabInstancesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLabInstancesInput, UserUncheckedCreateWithoutLabInstancesInput>
  }

  export type FlagSubmissionCreateWithoutLabInstanceInput = {
    id?: string
    submittedFlag: string
    isCorrect: boolean
    scoreAwarded?: number
    submittedAt?: Date | string
    user: UserCreateNestedOneWithoutFlagSubmissionsInput
  }

  export type FlagSubmissionUncheckedCreateWithoutLabInstanceInput = {
    id?: string
    userId: string
    submittedFlag: string
    isCorrect: boolean
    scoreAwarded?: number
    submittedAt?: Date | string
  }

  export type FlagSubmissionCreateOrConnectWithoutLabInstanceInput = {
    where: FlagSubmissionWhereUniqueInput
    create: XOR<FlagSubmissionCreateWithoutLabInstanceInput, FlagSubmissionUncheckedCreateWithoutLabInstanceInput>
  }

  export type FlagSubmissionCreateManyLabInstanceInputEnvelope = {
    data: FlagSubmissionCreateManyLabInstanceInput | FlagSubmissionCreateManyLabInstanceInput[]
    skipDuplicates?: boolean
  }

  export type LabUpsertWithoutInstancesInput = {
    update: XOR<LabUpdateWithoutInstancesInput, LabUncheckedUpdateWithoutInstancesInput>
    create: XOR<LabCreateWithoutInstancesInput, LabUncheckedCreateWithoutInstancesInput>
    where?: LabWhereInput
  }

  export type LabUpdateToOneWithWhereWithoutInstancesInput = {
    where?: LabWhereInput
    data: XOR<LabUpdateWithoutInstancesInput, LabUncheckedUpdateWithoutInstancesInput>
  }

  export type LabUpdateWithoutInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumScenarioDifficultyFieldUpdateOperationsInput | $Enums.ScenarioDifficulty
    timeEstimate?: IntFieldUpdateOperationsInput | number
    skills?: LabUpdateskillsInput | string[]
    risk?: StringFieldUpdateOperationsInput | string
    dockerImage?: StringFieldUpdateOperationsInput | string
    flagHash?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    accessType?: EnumLabAccessTypeFieldUpdateOperationsInput | $Enums.LabAccessType
    maxDurationMin?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabUncheckedUpdateWithoutInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumScenarioDifficultyFieldUpdateOperationsInput | $Enums.ScenarioDifficulty
    timeEstimate?: IntFieldUpdateOperationsInput | number
    skills?: LabUpdateskillsInput | string[]
    risk?: StringFieldUpdateOperationsInput | string
    dockerImage?: StringFieldUpdateOperationsInput | string
    flagHash?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    accessType?: EnumLabAccessTypeFieldUpdateOperationsInput | $Enums.LabAccessType
    maxDurationMin?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutLabInstancesInput = {
    update: XOR<UserUpdateWithoutLabInstancesInput, UserUncheckedUpdateWithoutLabInstancesInput>
    create: XOR<UserCreateWithoutLabInstancesInput, UserUncheckedCreateWithoutLabInstancesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLabInstancesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLabInstancesInput, UserUncheckedUpdateWithoutLabInstancesInput>
  }

  export type UserUpdateWithoutLabInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    skillLevel?: StringFieldUpdateOperationsInput | string
    totalScore?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    accuracy?: FloatFieldUpdateOperationsInput | number
    trend?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    reports?: ReportUpdateManyWithoutUserNestedInput
    simulations?: SimulationUpdateManyWithoutUserNestedInput
    progress?: UserProgressUpdateManyWithoutUserNestedInput
    flagSubmissions?: FlagSubmissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLabInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    skillLevel?: StringFieldUpdateOperationsInput | string
    totalScore?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    accuracy?: FloatFieldUpdateOperationsInput | number
    trend?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
    simulations?: SimulationUncheckedUpdateManyWithoutUserNestedInput
    progress?: UserProgressUncheckedUpdateManyWithoutUserNestedInput
    flagSubmissions?: FlagSubmissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FlagSubmissionUpsertWithWhereUniqueWithoutLabInstanceInput = {
    where: FlagSubmissionWhereUniqueInput
    update: XOR<FlagSubmissionUpdateWithoutLabInstanceInput, FlagSubmissionUncheckedUpdateWithoutLabInstanceInput>
    create: XOR<FlagSubmissionCreateWithoutLabInstanceInput, FlagSubmissionUncheckedCreateWithoutLabInstanceInput>
  }

  export type FlagSubmissionUpdateWithWhereUniqueWithoutLabInstanceInput = {
    where: FlagSubmissionWhereUniqueInput
    data: XOR<FlagSubmissionUpdateWithoutLabInstanceInput, FlagSubmissionUncheckedUpdateWithoutLabInstanceInput>
  }

  export type FlagSubmissionUpdateManyWithWhereWithoutLabInstanceInput = {
    where: FlagSubmissionScalarWhereInput
    data: XOR<FlagSubmissionUpdateManyMutationInput, FlagSubmissionUncheckedUpdateManyWithoutLabInstanceInput>
  }

  export type LabInstanceCreateWithoutSubmissionsInput = {
    id?: string
    status?: $Enums.LabInstanceStatus
    externalId?: string | null
    accessUrl?: string | null
    startedAt?: Date | string
    expiresAt: Date | string
    destroyedAt?: Date | string | null
    score?: number
    lastActivityAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lab: LabCreateNestedOneWithoutInstancesInput
    user: UserCreateNestedOneWithoutLabInstancesInput
  }

  export type LabInstanceUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    labId: string
    userId: string
    status?: $Enums.LabInstanceStatus
    externalId?: string | null
    accessUrl?: string | null
    startedAt?: Date | string
    expiresAt: Date | string
    destroyedAt?: Date | string | null
    score?: number
    lastActivityAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LabInstanceCreateOrConnectWithoutSubmissionsInput = {
    where: LabInstanceWhereUniqueInput
    create: XOR<LabInstanceCreateWithoutSubmissionsInput, LabInstanceUncheckedCreateWithoutSubmissionsInput>
  }

  export type UserCreateWithoutFlagSubmissionsInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    skillLevel?: string
    totalScore?: number
    rank?: number | null
    accuracy?: number
    trend?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationsEnabled?: boolean
    reports?: ReportCreateNestedManyWithoutUserInput
    simulations?: SimulationCreateNestedManyWithoutUserInput
    labInstances?: LabInstanceCreateNestedManyWithoutUserInput
    progress?: UserProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFlagSubmissionsInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    skillLevel?: string
    totalScore?: number
    rank?: number | null
    accuracy?: number
    trend?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationsEnabled?: boolean
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    simulations?: SimulationUncheckedCreateNestedManyWithoutUserInput
    labInstances?: LabInstanceUncheckedCreateNestedManyWithoutUserInput
    progress?: UserProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFlagSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFlagSubmissionsInput, UserUncheckedCreateWithoutFlagSubmissionsInput>
  }

  export type LabInstanceUpsertWithoutSubmissionsInput = {
    update: XOR<LabInstanceUpdateWithoutSubmissionsInput, LabInstanceUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<LabInstanceCreateWithoutSubmissionsInput, LabInstanceUncheckedCreateWithoutSubmissionsInput>
    where?: LabInstanceWhereInput
  }

  export type LabInstanceUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: LabInstanceWhereInput
    data: XOR<LabInstanceUpdateWithoutSubmissionsInput, LabInstanceUncheckedUpdateWithoutSubmissionsInput>
  }

  export type LabInstanceUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumLabInstanceStatusFieldUpdateOperationsInput | $Enums.LabInstanceStatus
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    accessUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destroyedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lab?: LabUpdateOneRequiredWithoutInstancesNestedInput
    user?: UserUpdateOneRequiredWithoutLabInstancesNestedInput
  }

  export type LabInstanceUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    labId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumLabInstanceStatusFieldUpdateOperationsInput | $Enums.LabInstanceStatus
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    accessUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destroyedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutFlagSubmissionsInput = {
    update: XOR<UserUpdateWithoutFlagSubmissionsInput, UserUncheckedUpdateWithoutFlagSubmissionsInput>
    create: XOR<UserCreateWithoutFlagSubmissionsInput, UserUncheckedCreateWithoutFlagSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFlagSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFlagSubmissionsInput, UserUncheckedUpdateWithoutFlagSubmissionsInput>
  }

  export type UserUpdateWithoutFlagSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    skillLevel?: StringFieldUpdateOperationsInput | string
    totalScore?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    accuracy?: FloatFieldUpdateOperationsInput | number
    trend?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    reports?: ReportUpdateManyWithoutUserNestedInput
    simulations?: SimulationUpdateManyWithoutUserNestedInput
    labInstances?: LabInstanceUpdateManyWithoutUserNestedInput
    progress?: UserProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFlagSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    skillLevel?: StringFieldUpdateOperationsInput | string
    totalScore?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    accuracy?: FloatFieldUpdateOperationsInput | number
    trend?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
    simulations?: SimulationUncheckedUpdateManyWithoutUserNestedInput
    labInstances?: LabInstanceUncheckedUpdateManyWithoutUserNestedInput
    progress?: UserProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SimulationCreateWithoutScenarioInput = {
    id?: string
    status?: $Enums.SimulationStatus
    currentStep?: number
    score?: number | null
    timeTakenSec?: number
    riskReduced?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    report?: ReportCreateNestedOneWithoutSimulationInput
    user: UserCreateNestedOneWithoutSimulationsInput
    steps?: SimulationStepCreateNestedManyWithoutSimulationInput
  }

  export type SimulationUncheckedCreateWithoutScenarioInput = {
    id?: string
    userId: string
    status?: $Enums.SimulationStatus
    currentStep?: number
    score?: number | null
    timeTakenSec?: number
    riskReduced?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    report?: ReportUncheckedCreateNestedOneWithoutSimulationInput
    steps?: SimulationStepUncheckedCreateNestedManyWithoutSimulationInput
  }

  export type SimulationCreateOrConnectWithoutScenarioInput = {
    where: SimulationWhereUniqueInput
    create: XOR<SimulationCreateWithoutScenarioInput, SimulationUncheckedCreateWithoutScenarioInput>
  }

  export type SimulationCreateManyScenarioInputEnvelope = {
    data: SimulationCreateManyScenarioInput | SimulationCreateManyScenarioInput[]
    skipDuplicates?: boolean
  }

  export type SimulationUpsertWithWhereUniqueWithoutScenarioInput = {
    where: SimulationWhereUniqueInput
    update: XOR<SimulationUpdateWithoutScenarioInput, SimulationUncheckedUpdateWithoutScenarioInput>
    create: XOR<SimulationCreateWithoutScenarioInput, SimulationUncheckedCreateWithoutScenarioInput>
  }

  export type SimulationUpdateWithWhereUniqueWithoutScenarioInput = {
    where: SimulationWhereUniqueInput
    data: XOR<SimulationUpdateWithoutScenarioInput, SimulationUncheckedUpdateWithoutScenarioInput>
  }

  export type SimulationUpdateManyWithWhereWithoutScenarioInput = {
    where: SimulationScalarWhereInput
    data: XOR<SimulationUpdateManyMutationInput, SimulationUncheckedUpdateManyWithoutScenarioInput>
  }

  export type ReportCreateWithoutSimulationInput = {
    id?: string
    score: number
    timeTakenSec: number
    correctActions: number
    totalActions: number
    riskReduced: number
    summary: string
    strengths?: ReportCreatestrengthsInput | string[]
    areasToImprove?: ReportCreateareasToImproveInput | string[]
    recommendations?: ReportCreaterecommendationsInput | string[]
    completedAt?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateWithoutSimulationInput = {
    id?: string
    userId: string
    score: number
    timeTakenSec: number
    correctActions: number
    totalActions: number
    riskReduced: number
    summary: string
    strengths?: ReportCreatestrengthsInput | string[]
    areasToImprove?: ReportCreateareasToImproveInput | string[]
    recommendations?: ReportCreaterecommendationsInput | string[]
    completedAt?: Date | string
    createdAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutSimulationInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutSimulationInput, ReportUncheckedCreateWithoutSimulationInput>
  }

  export type ScenarioCreateWithoutSimulationsInput = {
    id?: string
    title: string
    description: string
    category: $Enums.ScenarioCategory
    difficulty: $Enums.ScenarioDifficulty
    timeEstimate: number
    skills?: ScenarioCreateskillsInput | string[]
    risk: string
    targetSector?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScenarioUncheckedCreateWithoutSimulationsInput = {
    id?: string
    title: string
    description: string
    category: $Enums.ScenarioCategory
    difficulty: $Enums.ScenarioDifficulty
    timeEstimate: number
    skills?: ScenarioCreateskillsInput | string[]
    risk: string
    targetSector?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScenarioCreateOrConnectWithoutSimulationsInput = {
    where: ScenarioWhereUniqueInput
    create: XOR<ScenarioCreateWithoutSimulationsInput, ScenarioUncheckedCreateWithoutSimulationsInput>
  }

  export type UserCreateWithoutSimulationsInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    skillLevel?: string
    totalScore?: number
    rank?: number | null
    accuracy?: number
    trend?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationsEnabled?: boolean
    reports?: ReportCreateNestedManyWithoutUserInput
    labInstances?: LabInstanceCreateNestedManyWithoutUserInput
    progress?: UserProgressCreateNestedManyWithoutUserInput
    flagSubmissions?: FlagSubmissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSimulationsInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    skillLevel?: string
    totalScore?: number
    rank?: number | null
    accuracy?: number
    trend?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationsEnabled?: boolean
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    labInstances?: LabInstanceUncheckedCreateNestedManyWithoutUserInput
    progress?: UserProgressUncheckedCreateNestedManyWithoutUserInput
    flagSubmissions?: FlagSubmissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSimulationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSimulationsInput, UserUncheckedCreateWithoutSimulationsInput>
  }

  export type SimulationStepCreateWithoutSimulationInput = {
    id?: string
    stepNumber: number
    title: string
    narrative: string
    attackerGoal: string
    options?: SimulationStepCreateoptionsInput | string[]
    correctOption: number
    selectedOption?: number | null
    isCorrect?: boolean | null
    timeTakenSec?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SimulationStepUncheckedCreateWithoutSimulationInput = {
    id?: string
    stepNumber: number
    title: string
    narrative: string
    attackerGoal: string
    options?: SimulationStepCreateoptionsInput | string[]
    correctOption: number
    selectedOption?: number | null
    isCorrect?: boolean | null
    timeTakenSec?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SimulationStepCreateOrConnectWithoutSimulationInput = {
    where: SimulationStepWhereUniqueInput
    create: XOR<SimulationStepCreateWithoutSimulationInput, SimulationStepUncheckedCreateWithoutSimulationInput>
  }

  export type SimulationStepCreateManySimulationInputEnvelope = {
    data: SimulationStepCreateManySimulationInput | SimulationStepCreateManySimulationInput[]
    skipDuplicates?: boolean
  }

  export type ReportUpsertWithoutSimulationInput = {
    update: XOR<ReportUpdateWithoutSimulationInput, ReportUncheckedUpdateWithoutSimulationInput>
    create: XOR<ReportCreateWithoutSimulationInput, ReportUncheckedCreateWithoutSimulationInput>
    where?: ReportWhereInput
  }

  export type ReportUpdateToOneWithWhereWithoutSimulationInput = {
    where?: ReportWhereInput
    data: XOR<ReportUpdateWithoutSimulationInput, ReportUncheckedUpdateWithoutSimulationInput>
  }

  export type ReportUpdateWithoutSimulationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    timeTakenSec?: IntFieldUpdateOperationsInput | number
    correctActions?: IntFieldUpdateOperationsInput | number
    totalActions?: IntFieldUpdateOperationsInput | number
    riskReduced?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    strengths?: ReportUpdatestrengthsInput | string[]
    areasToImprove?: ReportUpdateareasToImproveInput | string[]
    recommendations?: ReportUpdaterecommendationsInput | string[]
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateWithoutSimulationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    timeTakenSec?: IntFieldUpdateOperationsInput | number
    correctActions?: IntFieldUpdateOperationsInput | number
    totalActions?: IntFieldUpdateOperationsInput | number
    riskReduced?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    strengths?: ReportUpdatestrengthsInput | string[]
    areasToImprove?: ReportUpdateareasToImproveInput | string[]
    recommendations?: ReportUpdaterecommendationsInput | string[]
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScenarioUpsertWithoutSimulationsInput = {
    update: XOR<ScenarioUpdateWithoutSimulationsInput, ScenarioUncheckedUpdateWithoutSimulationsInput>
    create: XOR<ScenarioCreateWithoutSimulationsInput, ScenarioUncheckedCreateWithoutSimulationsInput>
    where?: ScenarioWhereInput
  }

  export type ScenarioUpdateToOneWithWhereWithoutSimulationsInput = {
    where?: ScenarioWhereInput
    data: XOR<ScenarioUpdateWithoutSimulationsInput, ScenarioUncheckedUpdateWithoutSimulationsInput>
  }

  export type ScenarioUpdateWithoutSimulationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumScenarioCategoryFieldUpdateOperationsInput | $Enums.ScenarioCategory
    difficulty?: EnumScenarioDifficultyFieldUpdateOperationsInput | $Enums.ScenarioDifficulty
    timeEstimate?: IntFieldUpdateOperationsInput | number
    skills?: ScenarioUpdateskillsInput | string[]
    risk?: StringFieldUpdateOperationsInput | string
    targetSector?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScenarioUncheckedUpdateWithoutSimulationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumScenarioCategoryFieldUpdateOperationsInput | $Enums.ScenarioCategory
    difficulty?: EnumScenarioDifficultyFieldUpdateOperationsInput | $Enums.ScenarioDifficulty
    timeEstimate?: IntFieldUpdateOperationsInput | number
    skills?: ScenarioUpdateskillsInput | string[]
    risk?: StringFieldUpdateOperationsInput | string
    targetSector?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutSimulationsInput = {
    update: XOR<UserUpdateWithoutSimulationsInput, UserUncheckedUpdateWithoutSimulationsInput>
    create: XOR<UserCreateWithoutSimulationsInput, UserUncheckedCreateWithoutSimulationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSimulationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSimulationsInput, UserUncheckedUpdateWithoutSimulationsInput>
  }

  export type UserUpdateWithoutSimulationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    skillLevel?: StringFieldUpdateOperationsInput | string
    totalScore?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    accuracy?: FloatFieldUpdateOperationsInput | number
    trend?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    reports?: ReportUpdateManyWithoutUserNestedInput
    labInstances?: LabInstanceUpdateManyWithoutUserNestedInput
    progress?: UserProgressUpdateManyWithoutUserNestedInput
    flagSubmissions?: FlagSubmissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSimulationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    skillLevel?: StringFieldUpdateOperationsInput | string
    totalScore?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    accuracy?: FloatFieldUpdateOperationsInput | number
    trend?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
    labInstances?: LabInstanceUncheckedUpdateManyWithoutUserNestedInput
    progress?: UserProgressUncheckedUpdateManyWithoutUserNestedInput
    flagSubmissions?: FlagSubmissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SimulationStepUpsertWithWhereUniqueWithoutSimulationInput = {
    where: SimulationStepWhereUniqueInput
    update: XOR<SimulationStepUpdateWithoutSimulationInput, SimulationStepUncheckedUpdateWithoutSimulationInput>
    create: XOR<SimulationStepCreateWithoutSimulationInput, SimulationStepUncheckedCreateWithoutSimulationInput>
  }

  export type SimulationStepUpdateWithWhereUniqueWithoutSimulationInput = {
    where: SimulationStepWhereUniqueInput
    data: XOR<SimulationStepUpdateWithoutSimulationInput, SimulationStepUncheckedUpdateWithoutSimulationInput>
  }

  export type SimulationStepUpdateManyWithWhereWithoutSimulationInput = {
    where: SimulationStepScalarWhereInput
    data: XOR<SimulationStepUpdateManyMutationInput, SimulationStepUncheckedUpdateManyWithoutSimulationInput>
  }

  export type SimulationStepScalarWhereInput = {
    AND?: SimulationStepScalarWhereInput | SimulationStepScalarWhereInput[]
    OR?: SimulationStepScalarWhereInput[]
    NOT?: SimulationStepScalarWhereInput | SimulationStepScalarWhereInput[]
    id?: StringFilter<"SimulationStep"> | string
    simulationId?: StringFilter<"SimulationStep"> | string
    stepNumber?: IntFilter<"SimulationStep"> | number
    title?: StringFilter<"SimulationStep"> | string
    narrative?: StringFilter<"SimulationStep"> | string
    attackerGoal?: StringFilter<"SimulationStep"> | string
    options?: StringNullableListFilter<"SimulationStep">
    correctOption?: IntFilter<"SimulationStep"> | number
    selectedOption?: IntNullableFilter<"SimulationStep"> | number | null
    isCorrect?: BoolNullableFilter<"SimulationStep"> | boolean | null
    timeTakenSec?: IntNullableFilter<"SimulationStep"> | number | null
    createdAt?: DateTimeFilter<"SimulationStep"> | Date | string
    updatedAt?: DateTimeFilter<"SimulationStep"> | Date | string
  }

  export type SimulationCreateWithoutStepsInput = {
    id?: string
    status?: $Enums.SimulationStatus
    currentStep?: number
    score?: number | null
    timeTakenSec?: number
    riskReduced?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    report?: ReportCreateNestedOneWithoutSimulationInput
    scenario: ScenarioCreateNestedOneWithoutSimulationsInput
    user: UserCreateNestedOneWithoutSimulationsInput
  }

  export type SimulationUncheckedCreateWithoutStepsInput = {
    id?: string
    userId: string
    scenarioId: string
    status?: $Enums.SimulationStatus
    currentStep?: number
    score?: number | null
    timeTakenSec?: number
    riskReduced?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    report?: ReportUncheckedCreateNestedOneWithoutSimulationInput
  }

  export type SimulationCreateOrConnectWithoutStepsInput = {
    where: SimulationWhereUniqueInput
    create: XOR<SimulationCreateWithoutStepsInput, SimulationUncheckedCreateWithoutStepsInput>
  }

  export type SimulationUpsertWithoutStepsInput = {
    update: XOR<SimulationUpdateWithoutStepsInput, SimulationUncheckedUpdateWithoutStepsInput>
    create: XOR<SimulationCreateWithoutStepsInput, SimulationUncheckedCreateWithoutStepsInput>
    where?: SimulationWhereInput
  }

  export type SimulationUpdateToOneWithWhereWithoutStepsInput = {
    where?: SimulationWhereInput
    data: XOR<SimulationUpdateWithoutStepsInput, SimulationUncheckedUpdateWithoutStepsInput>
  }

  export type SimulationUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSimulationStatusFieldUpdateOperationsInput | $Enums.SimulationStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    timeTakenSec?: IntFieldUpdateOperationsInput | number
    riskReduced?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    report?: ReportUpdateOneWithoutSimulationNestedInput
    scenario?: ScenarioUpdateOneRequiredWithoutSimulationsNestedInput
    user?: UserUpdateOneRequiredWithoutSimulationsNestedInput
  }

  export type SimulationUncheckedUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    status?: EnumSimulationStatusFieldUpdateOperationsInput | $Enums.SimulationStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    timeTakenSec?: IntFieldUpdateOperationsInput | number
    riskReduced?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    report?: ReportUncheckedUpdateOneWithoutSimulationNestedInput
  }

  export type SimulationCreateWithoutReportInput = {
    id?: string
    status?: $Enums.SimulationStatus
    currentStep?: number
    score?: number | null
    timeTakenSec?: number
    riskReduced?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scenario: ScenarioCreateNestedOneWithoutSimulationsInput
    user: UserCreateNestedOneWithoutSimulationsInput
    steps?: SimulationStepCreateNestedManyWithoutSimulationInput
  }

  export type SimulationUncheckedCreateWithoutReportInput = {
    id?: string
    userId: string
    scenarioId: string
    status?: $Enums.SimulationStatus
    currentStep?: number
    score?: number | null
    timeTakenSec?: number
    riskReduced?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    steps?: SimulationStepUncheckedCreateNestedManyWithoutSimulationInput
  }

  export type SimulationCreateOrConnectWithoutReportInput = {
    where: SimulationWhereUniqueInput
    create: XOR<SimulationCreateWithoutReportInput, SimulationUncheckedCreateWithoutReportInput>
  }

  export type UserCreateWithoutReportsInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    skillLevel?: string
    totalScore?: number
    rank?: number | null
    accuracy?: number
    trend?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationsEnabled?: boolean
    simulations?: SimulationCreateNestedManyWithoutUserInput
    labInstances?: LabInstanceCreateNestedManyWithoutUserInput
    progress?: UserProgressCreateNestedManyWithoutUserInput
    flagSubmissions?: FlagSubmissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReportsInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    skillLevel?: string
    totalScore?: number
    rank?: number | null
    accuracy?: number
    trend?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationsEnabled?: boolean
    simulations?: SimulationUncheckedCreateNestedManyWithoutUserInput
    labInstances?: LabInstanceUncheckedCreateNestedManyWithoutUserInput
    progress?: UserProgressUncheckedCreateNestedManyWithoutUserInput
    flagSubmissions?: FlagSubmissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
  }

  export type SimulationUpsertWithoutReportInput = {
    update: XOR<SimulationUpdateWithoutReportInput, SimulationUncheckedUpdateWithoutReportInput>
    create: XOR<SimulationCreateWithoutReportInput, SimulationUncheckedCreateWithoutReportInput>
    where?: SimulationWhereInput
  }

  export type SimulationUpdateToOneWithWhereWithoutReportInput = {
    where?: SimulationWhereInput
    data: XOR<SimulationUpdateWithoutReportInput, SimulationUncheckedUpdateWithoutReportInput>
  }

  export type SimulationUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSimulationStatusFieldUpdateOperationsInput | $Enums.SimulationStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    timeTakenSec?: IntFieldUpdateOperationsInput | number
    riskReduced?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scenario?: ScenarioUpdateOneRequiredWithoutSimulationsNestedInput
    user?: UserUpdateOneRequiredWithoutSimulationsNestedInput
    steps?: SimulationStepUpdateManyWithoutSimulationNestedInput
  }

  export type SimulationUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    status?: EnumSimulationStatusFieldUpdateOperationsInput | $Enums.SimulationStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    timeTakenSec?: IntFieldUpdateOperationsInput | number
    riskReduced?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: SimulationStepUncheckedUpdateManyWithoutSimulationNestedInput
  }

  export type UserUpsertWithoutReportsInput = {
    update: XOR<UserUpdateWithoutReportsInput, UserUncheckedUpdateWithoutReportsInput>
    create: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReportsInput, UserUncheckedUpdateWithoutReportsInput>
  }

  export type UserUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    skillLevel?: StringFieldUpdateOperationsInput | string
    totalScore?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    accuracy?: FloatFieldUpdateOperationsInput | number
    trend?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    simulations?: SimulationUpdateManyWithoutUserNestedInput
    labInstances?: LabInstanceUpdateManyWithoutUserNestedInput
    progress?: UserProgressUpdateManyWithoutUserNestedInput
    flagSubmissions?: FlagSubmissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    skillLevel?: StringFieldUpdateOperationsInput | string
    totalScore?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    accuracy?: FloatFieldUpdateOperationsInput | number
    trend?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    simulations?: SimulationUncheckedUpdateManyWithoutUserNestedInput
    labInstances?: LabInstanceUncheckedUpdateManyWithoutUserNestedInput
    progress?: UserProgressUncheckedUpdateManyWithoutUserNestedInput
    flagSubmissions?: FlagSubmissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserProgressCreateWithoutTopicInput = {
    id?: string
    progress?: number
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProgressInput
  }

  export type UserProgressUncheckedCreateWithoutTopicInput = {
    id?: string
    userId: string
    progress?: number
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProgressCreateOrConnectWithoutTopicInput = {
    where: UserProgressWhereUniqueInput
    create: XOR<UserProgressCreateWithoutTopicInput, UserProgressUncheckedCreateWithoutTopicInput>
  }

  export type UserProgressCreateManyTopicInputEnvelope = {
    data: UserProgressCreateManyTopicInput | UserProgressCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type UserProgressUpsertWithWhereUniqueWithoutTopicInput = {
    where: UserProgressWhereUniqueInput
    update: XOR<UserProgressUpdateWithoutTopicInput, UserProgressUncheckedUpdateWithoutTopicInput>
    create: XOR<UserProgressCreateWithoutTopicInput, UserProgressUncheckedCreateWithoutTopicInput>
  }

  export type UserProgressUpdateWithWhereUniqueWithoutTopicInput = {
    where: UserProgressWhereUniqueInput
    data: XOR<UserProgressUpdateWithoutTopicInput, UserProgressUncheckedUpdateWithoutTopicInput>
  }

  export type UserProgressUpdateManyWithWhereWithoutTopicInput = {
    where: UserProgressScalarWhereInput
    data: XOR<UserProgressUpdateManyMutationInput, UserProgressUncheckedUpdateManyWithoutTopicInput>
  }

  export type LearningTopicCreateWithoutProgressInput = {
    id?: string
    title: string
    description: string
    level: $Enums.LearningLevel
    lessons: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningTopicUncheckedCreateWithoutProgressInput = {
    id?: string
    title: string
    description: string
    level: $Enums.LearningLevel
    lessons: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningTopicCreateOrConnectWithoutProgressInput = {
    where: LearningTopicWhereUniqueInput
    create: XOR<LearningTopicCreateWithoutProgressInput, LearningTopicUncheckedCreateWithoutProgressInput>
  }

  export type UserCreateWithoutProgressInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    skillLevel?: string
    totalScore?: number
    rank?: number | null
    accuracy?: number
    trend?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationsEnabled?: boolean
    reports?: ReportCreateNestedManyWithoutUserInput
    simulations?: SimulationCreateNestedManyWithoutUserInput
    labInstances?: LabInstanceCreateNestedManyWithoutUserInput
    flagSubmissions?: FlagSubmissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProgressInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.UserRole
    skillLevel?: string
    totalScore?: number
    rank?: number | null
    accuracy?: number
    trend?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationsEnabled?: boolean
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    simulations?: SimulationUncheckedCreateNestedManyWithoutUserInput
    labInstances?: LabInstanceUncheckedCreateNestedManyWithoutUserInput
    flagSubmissions?: FlagSubmissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
  }

  export type LearningTopicUpsertWithoutProgressInput = {
    update: XOR<LearningTopicUpdateWithoutProgressInput, LearningTopicUncheckedUpdateWithoutProgressInput>
    create: XOR<LearningTopicCreateWithoutProgressInput, LearningTopicUncheckedCreateWithoutProgressInput>
    where?: LearningTopicWhereInput
  }

  export type LearningTopicUpdateToOneWithWhereWithoutProgressInput = {
    where?: LearningTopicWhereInput
    data: XOR<LearningTopicUpdateWithoutProgressInput, LearningTopicUncheckedUpdateWithoutProgressInput>
  }

  export type LearningTopicUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    level?: EnumLearningLevelFieldUpdateOperationsInput | $Enums.LearningLevel
    lessons?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningTopicUncheckedUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    level?: EnumLearningLevelFieldUpdateOperationsInput | $Enums.LearningLevel
    lessons?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutProgressInput = {
    update: XOR<UserUpdateWithoutProgressInput, UserUncheckedUpdateWithoutProgressInput>
    create: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProgressInput, UserUncheckedUpdateWithoutProgressInput>
  }

  export type UserUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    skillLevel?: StringFieldUpdateOperationsInput | string
    totalScore?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    accuracy?: FloatFieldUpdateOperationsInput | number
    trend?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    reports?: ReportUpdateManyWithoutUserNestedInput
    simulations?: SimulationUpdateManyWithoutUserNestedInput
    labInstances?: LabInstanceUpdateManyWithoutUserNestedInput
    flagSubmissions?: FlagSubmissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    skillLevel?: StringFieldUpdateOperationsInput | string
    totalScore?: IntFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    accuracy?: FloatFieldUpdateOperationsInput | number
    trend?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
    simulations?: SimulationUncheckedUpdateManyWithoutUserNestedInput
    labInstances?: LabInstanceUncheckedUpdateManyWithoutUserNestedInput
    flagSubmissions?: FlagSubmissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReportCreateManyUserInput = {
    id?: string
    simulationId: string
    score: number
    timeTakenSec: number
    correctActions: number
    totalActions: number
    riskReduced: number
    summary: string
    strengths?: ReportCreatestrengthsInput | string[]
    areasToImprove?: ReportCreateareasToImproveInput | string[]
    recommendations?: ReportCreaterecommendationsInput | string[]
    completedAt?: Date | string
    createdAt?: Date | string
  }

  export type SimulationCreateManyUserInput = {
    id?: string
    scenarioId: string
    status?: $Enums.SimulationStatus
    currentStep?: number
    score?: number | null
    timeTakenSec?: number
    riskReduced?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LabInstanceCreateManyUserInput = {
    id?: string
    labId: string
    status?: $Enums.LabInstanceStatus
    externalId?: string | null
    accessUrl?: string | null
    startedAt?: Date | string
    expiresAt: Date | string
    destroyedAt?: Date | string | null
    score?: number
    lastActivityAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProgressCreateManyUserInput = {
    id?: string
    topicId: string
    progress?: number
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlagSubmissionCreateManyUserInput = {
    id?: string
    labInstanceId: string
    submittedFlag: string
    isCorrect: boolean
    scoreAwarded?: number
    submittedAt?: Date | string
  }

  export type ReportUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    timeTakenSec?: IntFieldUpdateOperationsInput | number
    correctActions?: IntFieldUpdateOperationsInput | number
    totalActions?: IntFieldUpdateOperationsInput | number
    riskReduced?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    strengths?: ReportUpdatestrengthsInput | string[]
    areasToImprove?: ReportUpdateareasToImproveInput | string[]
    recommendations?: ReportUpdaterecommendationsInput | string[]
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    simulation?: SimulationUpdateOneRequiredWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    simulationId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    timeTakenSec?: IntFieldUpdateOperationsInput | number
    correctActions?: IntFieldUpdateOperationsInput | number
    totalActions?: IntFieldUpdateOperationsInput | number
    riskReduced?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    strengths?: ReportUpdatestrengthsInput | string[]
    areasToImprove?: ReportUpdateareasToImproveInput | string[]
    recommendations?: ReportUpdaterecommendationsInput | string[]
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    simulationId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    timeTakenSec?: IntFieldUpdateOperationsInput | number
    correctActions?: IntFieldUpdateOperationsInput | number
    totalActions?: IntFieldUpdateOperationsInput | number
    riskReduced?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    strengths?: ReportUpdatestrengthsInput | string[]
    areasToImprove?: ReportUpdateareasToImproveInput | string[]
    recommendations?: ReportUpdaterecommendationsInput | string[]
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SimulationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSimulationStatusFieldUpdateOperationsInput | $Enums.SimulationStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    timeTakenSec?: IntFieldUpdateOperationsInput | number
    riskReduced?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    report?: ReportUpdateOneWithoutSimulationNestedInput
    scenario?: ScenarioUpdateOneRequiredWithoutSimulationsNestedInput
    steps?: SimulationStepUpdateManyWithoutSimulationNestedInput
  }

  export type SimulationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    status?: EnumSimulationStatusFieldUpdateOperationsInput | $Enums.SimulationStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    timeTakenSec?: IntFieldUpdateOperationsInput | number
    riskReduced?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    report?: ReportUncheckedUpdateOneWithoutSimulationNestedInput
    steps?: SimulationStepUncheckedUpdateManyWithoutSimulationNestedInput
  }

  export type SimulationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    status?: EnumSimulationStatusFieldUpdateOperationsInput | $Enums.SimulationStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    timeTakenSec?: IntFieldUpdateOperationsInput | number
    riskReduced?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabInstanceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumLabInstanceStatusFieldUpdateOperationsInput | $Enums.LabInstanceStatus
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    accessUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destroyedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lab?: LabUpdateOneRequiredWithoutInstancesNestedInput
    submissions?: FlagSubmissionUpdateManyWithoutLabInstanceNestedInput
  }

  export type LabInstanceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    labId?: StringFieldUpdateOperationsInput | string
    status?: EnumLabInstanceStatusFieldUpdateOperationsInput | $Enums.LabInstanceStatus
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    accessUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destroyedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: FlagSubmissionUncheckedUpdateManyWithoutLabInstanceNestedInput
  }

  export type LabInstanceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    labId?: StringFieldUpdateOperationsInput | string
    status?: EnumLabInstanceStatusFieldUpdateOperationsInput | $Enums.LabInstanceStatus
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    accessUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destroyedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: LearningTopicUpdateOneRequiredWithoutProgressNestedInput
  }

  export type UserProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProgressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlagSubmissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedFlag?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    scoreAwarded?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    labInstance?: LabInstanceUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type FlagSubmissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    labInstanceId?: StringFieldUpdateOperationsInput | string
    submittedFlag?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    scoreAwarded?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlagSubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    labInstanceId?: StringFieldUpdateOperationsInput | string
    submittedFlag?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    scoreAwarded?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabInstanceCreateManyLabInput = {
    id?: string
    userId: string
    status?: $Enums.LabInstanceStatus
    externalId?: string | null
    accessUrl?: string | null
    startedAt?: Date | string
    expiresAt: Date | string
    destroyedAt?: Date | string | null
    score?: number
    lastActivityAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LabInstanceUpdateWithoutLabInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumLabInstanceStatusFieldUpdateOperationsInput | $Enums.LabInstanceStatus
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    accessUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destroyedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLabInstancesNestedInput
    submissions?: FlagSubmissionUpdateManyWithoutLabInstanceNestedInput
  }

  export type LabInstanceUncheckedUpdateWithoutLabInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumLabInstanceStatusFieldUpdateOperationsInput | $Enums.LabInstanceStatus
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    accessUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destroyedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: FlagSubmissionUncheckedUpdateManyWithoutLabInstanceNestedInput
  }

  export type LabInstanceUncheckedUpdateManyWithoutLabInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumLabInstanceStatusFieldUpdateOperationsInput | $Enums.LabInstanceStatus
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    accessUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destroyedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlagSubmissionCreateManyLabInstanceInput = {
    id?: string
    userId: string
    submittedFlag: string
    isCorrect: boolean
    scoreAwarded?: number
    submittedAt?: Date | string
  }

  export type FlagSubmissionUpdateWithoutLabInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedFlag?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    scoreAwarded?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFlagSubmissionsNestedInput
  }

  export type FlagSubmissionUncheckedUpdateWithoutLabInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    submittedFlag?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    scoreAwarded?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlagSubmissionUncheckedUpdateManyWithoutLabInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    submittedFlag?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    scoreAwarded?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SimulationCreateManyScenarioInput = {
    id?: string
    userId: string
    status?: $Enums.SimulationStatus
    currentStep?: number
    score?: number | null
    timeTakenSec?: number
    riskReduced?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SimulationUpdateWithoutScenarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSimulationStatusFieldUpdateOperationsInput | $Enums.SimulationStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    timeTakenSec?: IntFieldUpdateOperationsInput | number
    riskReduced?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    report?: ReportUpdateOneWithoutSimulationNestedInput
    user?: UserUpdateOneRequiredWithoutSimulationsNestedInput
    steps?: SimulationStepUpdateManyWithoutSimulationNestedInput
  }

  export type SimulationUncheckedUpdateWithoutScenarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumSimulationStatusFieldUpdateOperationsInput | $Enums.SimulationStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    timeTakenSec?: IntFieldUpdateOperationsInput | number
    riskReduced?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    report?: ReportUncheckedUpdateOneWithoutSimulationNestedInput
    steps?: SimulationStepUncheckedUpdateManyWithoutSimulationNestedInput
  }

  export type SimulationUncheckedUpdateManyWithoutScenarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumSimulationStatusFieldUpdateOperationsInput | $Enums.SimulationStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    timeTakenSec?: IntFieldUpdateOperationsInput | number
    riskReduced?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SimulationStepCreateManySimulationInput = {
    id?: string
    stepNumber: number
    title: string
    narrative: string
    attackerGoal: string
    options?: SimulationStepCreateoptionsInput | string[]
    correctOption: number
    selectedOption?: number | null
    isCorrect?: boolean | null
    timeTakenSec?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SimulationStepUpdateWithoutSimulationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    narrative?: StringFieldUpdateOperationsInput | string
    attackerGoal?: StringFieldUpdateOperationsInput | string
    options?: SimulationStepUpdateoptionsInput | string[]
    correctOption?: IntFieldUpdateOperationsInput | number
    selectedOption?: NullableIntFieldUpdateOperationsInput | number | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timeTakenSec?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SimulationStepUncheckedUpdateWithoutSimulationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    narrative?: StringFieldUpdateOperationsInput | string
    attackerGoal?: StringFieldUpdateOperationsInput | string
    options?: SimulationStepUpdateoptionsInput | string[]
    correctOption?: IntFieldUpdateOperationsInput | number
    selectedOption?: NullableIntFieldUpdateOperationsInput | number | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timeTakenSec?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SimulationStepUncheckedUpdateManyWithoutSimulationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    narrative?: StringFieldUpdateOperationsInput | string
    attackerGoal?: StringFieldUpdateOperationsInput | string
    options?: SimulationStepUpdateoptionsInput | string[]
    correctOption?: IntFieldUpdateOperationsInput | number
    selectedOption?: NullableIntFieldUpdateOperationsInput | number | null
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    timeTakenSec?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProgressCreateManyTopicInput = {
    id?: string
    userId: string
    progress?: number
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProgressUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProgressNestedInput
  }

  export type UserProgressUncheckedUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProgressUncheckedUpdateManyWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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