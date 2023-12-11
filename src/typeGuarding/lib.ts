import { TypeGuarding, TypeGuardingBase } from "./types";

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const buildTypeGuarding = (initialValue: TypeGuardingBase) =>
  Object.keys(initialValue).reduce<TypeGuarding>(
    (result, current) => ({
      ...result,
      ["is" + capitalize(current)]:
        initialValue[current as keyof TypeGuardingBase],
    }),
    {} as TypeGuarding
  );
