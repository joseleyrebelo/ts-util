import { buildTypeGuarding } from "./lib";

export const typeGuardingBase = {
  // @notice - alternatives : typeof x === "string" || x instanceof String;
  string: (x: any): x is string => x === x + "",
  object: (x: any): x is object => typeof x === "object",
  boolean: (x: any): x is boolean => typeof x === "boolean",
  array: (x: any): x is Array<any> => x instanceof Array,
  date: (x: any): x is Date => x instanceof Date,
  number: (x: any): x is number => typeof x === "number",
	function: (x: any): x is (...args: any[]) => any => x instanceof Function,

  // Custom types
  // null: (x: any) => x === null,
  // undefined: (x: any) => typeof x === "undefined",
  // empty: (x: any) => x === null || !(Object.keys(x) || x).length,
  // falsy: (x: any) => typeof x === "undefined" ||  x === null || !(Object.keys(x) || x).length,
} as const;


export const typeGuarding = buildTypeGuarding(typeGuardingBase);

export const { isString, isObject, isBoolean, isArray, isDate, isNumber, isFunction } =
  typeGuarding;

export const typeGuard = <T = void,>(x: any, verifier: () => boolean): x is T => verifier()
