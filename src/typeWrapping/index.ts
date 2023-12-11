import { Intersect } from "../utilityTypes";

/**
 * @todo
 * - Properly assess this solution.
 * - Does it have a better implementations?
 * */
export const intersectTypeWrap = <Type>(value: Type) =>
  value as Intersect<Type>;
