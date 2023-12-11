const objKeys = (data) => Object.keys(data);
const intersectTypeWrap = (value) => value;
const newConsolidator = (sorter) => {
  return (initial) => initial.map((entry) => sorter(entry));
};
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const buildTypeGuarding = (initialValue) => Object.keys(initialValue).reduce(
  (result, current) => ({
    ...result,
    ["is" + capitalize(current)]: initialValue[current]
  }),
  {}
);
const typeGuardingBase = {
  // @notice - alternatives : typeof x === "string" || x instanceof String;
  string: (x) => x === x + "",
  object: (x) => typeof x === "object",
  boolean: (x) => typeof x === "boolean",
  array: (x) => x instanceof Array,
  date: (x) => x instanceof Date,
  number: (x) => typeof x === "number"
  // Custom types
  // null: (x: any) => x === null,
  // undefined: (x: any) => typeof x === "undefined",
  // empty: (x: any) => x === null || !(Object.keys(x) || x).length,
  // falsy: (x: any) => typeof x === "undefined" ||  x === null || !(Object.keys(x) || x).length,
};
const typeGuarding = buildTypeGuarding(typeGuardingBase);
const { isString, isObject, isBoolean, isArray, isDate, isNumber } = typeGuarding;
export {
  intersectTypeWrap,
  isArray,
  isBoolean,
  isDate,
  isNumber,
  isObject,
  isString,
  newConsolidator,
  objKeys,
  typeGuarding,
  typeGuardingBase
};
