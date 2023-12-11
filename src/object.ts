import { StringKeyOf } from "./utilityTypes";

/**
 * Expects object keys to be type string.
 */
export const objKeys = <Type extends object>(data: Type) =>
  Object.keys(data) as StringKeyOf<Type>[];

// const m = (obj: { [x: string]: string }) => {
//   const s = (s: string) => s;
//   const t = objKeys(obj);
//   return s(t);
// };
