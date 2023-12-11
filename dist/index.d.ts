export declare type Intersect<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

/**
 * @todo
 * - Properly assess this solution.
 * - Does it have a better implementations?
 * */
export declare const intersectTypeWrap: <Type>(value: Type) => Intersect<Type>;

export declare const isArray: (x: any) => x is any[];

export declare const isBoolean: (x: any) => x is boolean;

export declare const isDate: (x: any) => x is Date;

export declare const isNumber: (x: any) => x is number;

export declare const isObject: (x: any) => x is object;

export declare const isString: (x: any) => x is string;

export declare const newConsolidator: <Unsorted, Sorted>(sorter: (entry: Unsorted) => Sorted) => (initial: Unsorted[]) => Sorted[];

/**
 * Expects object keys to be type string.
 */
export declare const objKeys: <Type extends object>(data: Type) => StringKeyOf<Type>[];

export declare type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

export declare type StringKeyOf<T extends {}> = Exclude<keyof T, number | symbol>;

declare type TypeGuarding = {
    [key in keyof TypeGuardingBase & string as `is${Capitalize<key>}`]: TypeGuardingBase[key];
};

export declare const typeGuarding: TypeGuarding;

declare type TypeGuardingBase = typeof typeGuardingBase;

export declare const typeGuardingBase: {
    readonly string: (x: any) => x is string;
    readonly object: (x: any) => x is object;
    readonly boolean: (x: any) => x is boolean;
    readonly array: (x: any) => x is any[];
    readonly date: (x: any) => x is Date;
    readonly number: (x: any) => x is number;
};

export { }
