const i = (e) => Object.keys(e), o = (e) => e.charAt(0).toUpperCase() + e.slice(1), r = (e) => e, p = (e) => (t) => t.map((n) => e(n)), s = (e) => Object.keys(e).reduce(
  (t, n) => ({
    ...t,
    ["is" + o(n)]: e[n]
  }),
  {}
), c = {
  // @notice - alternatives : typeof x === "string" || x instanceof String;
  string: (e) => e === e + "",
  object: (e) => typeof e == "object",
  boolean: (e) => typeof e == "boolean",
  array: (e) => e instanceof Array,
  date: (e) => e instanceof Date,
  number: (e) => typeof e == "number",
  function: (e) => e instanceof Function
  // Custom types
  // null: (x: any) => x === null,
  // undefined: (x: any) => typeof x === "undefined",
  // empty: (x: any) => x === null || !(Object.keys(x) || x).length,
  // falsy: (x: any) => typeof x === "undefined" ||  x === null || !(Object.keys(x) || x).length,
}, a = s(c), { isString: y, isObject: b, isBoolean: u, isArray: d, isDate: f, isNumber: j, isFunction: g } = a, l = (e, t) => t();
export {
  o as capitalize,
  r as intersectTypeWrap,
  d as isArray,
  u as isBoolean,
  f as isDate,
  g as isFunction,
  j as isNumber,
  b as isObject,
  y as isString,
  p as newConsolidator,
  i as objKeys,
  l as typeGuard,
  a as typeGuarding,
  c as typeGuardingBase
};
