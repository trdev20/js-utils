import type { Obj } from "../types";

/**
 * Checks if a value is an object.
 */
export const isObject = (value: unknown): value is Obj =>
  value != null && value.constructor.name === "Object";

/**
 * Checks if an object is empty.
 */
export const isEmptyObject = (obj: Obj): obj is {} => Object.keys(obj).length === 0;

/**
 * Checks if two objects are equal.
 */
export const objectsAreEqual = (obj1: Obj, obj2: Obj): boolean =>
  JSON.stringify(obj1) === JSON.stringify(obj2);
