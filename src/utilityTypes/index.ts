export type Intersect<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

// export type PropOf<T> = {
//   [K in keyof T]: K extends number ? `${K}` : K;
// }[keyof T];

export type StringKeyOf<T extends {}> = Exclude<keyof T, number | symbol>;

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
