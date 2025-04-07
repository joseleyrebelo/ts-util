export type Intersect<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

// export type PropOf<T> = {
//   [K in keyof T]: K extends number ? `${K}` : K;
// }[keyof T];

export type StringKeyOf<T extends {}> = Exclude<keyof T, number | symbol>;

export type Prettify<T> = {[K in keyof T]: T[K];} & {}; 

export type ShiftTuple<Tuple extends any[]> = ((
  ...args: Tuple
) => any) extends (first: any, ...rest: infer Rest) => any
  ? Rest
  : any[]

export type AsyncFunction<A extends any[], R extends any> = 
(...args: A) => Promise<R>
