import { typeGuardingBase } from ".";

// Base

export type TypeGuardingBase = typeof typeGuardingBase;

export type TypeGuardersBase = keyof TypeGuardingBase;

// Final

export type TypeGuarding = {
  [key in keyof TypeGuardingBase &
    string as `is${Capitalize<key>}`]: TypeGuardingBase[key];
};

export type TypeGuarders = keyof TypeGuarding;
