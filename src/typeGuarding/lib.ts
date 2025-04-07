import { capitalize } from "../capitalize";
import { TypeGuarding, TypeGuardingBase } from "./types";

export const buildTypeGuarding = (initialValue: TypeGuardingBase) =>
  Object.keys(initialValue).reduce<TypeGuarding>(
    (result, current) => ({
      ...result,
      ["is" + capitalize(current)]:
        initialValue[current as keyof TypeGuardingBase],
    }),
    {} as TypeGuarding
  );
