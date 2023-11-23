declare type Intersect<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

/**
 * @todo - resolve not returning string only (returns "string | number" when Type only as string)
 */
export declare const objKeys: <Type extends object>(data: Type) => (keyof Intersect<Type>)[];

export { }
