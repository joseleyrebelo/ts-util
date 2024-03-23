export const objKeys = <Type extends {}>(data: Type) =>
  Object.keys(data) as (keyof Type)[];
