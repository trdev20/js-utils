import { Obj } from "../types";

/**
 * Same as `Object.keys` but returns the keys with a more specific type.
 *
 * @example
 * ```js
 * const obj = { a: 1, b: 2, c: 3 };
 * const keys1 = Object.keys(obj); // string[]
 * const keys2 = keys(obj); // ("a" | "b" | "c")[]
 * ```
 */

export const keys = <T extends Obj>(obj: T): (keyof T)[] => Object.keys(obj);

/**
 * Same as `Object.values`
 */

export const values = <T extends Obj>(obj: T) => Object.values(obj);

/**
 * Same as `Object.entries` but returns the entries of an object with a more specific type. (keys)
 */
export const entries = <T extends Obj>(obj: T) => Object.entries(obj) as [keyof T, T[keyof T]][];
