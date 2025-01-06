import { Prettify } from "../types";

/**
 * Gets the indices of all occurrences of an element in an array
 */
export const getAllIndices = <T>(arr: T[], checkFn: (item: T) => boolean): number[] => {
  return arr.reduce<number[]>((acc, item, index) => {
    if (checkFn(item)) acc.push(index);
    return acc;
  }, []);
};

/**
 * Gets the minimum and maximum values in a numeric array
 */
export const getMinMax = (arr: number[]): { min: number; max: number } | undefined => {
  if (arr.length === 0) return undefined;

  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
  };
};

/**
 * Filters out values from an array. Only works with readonly arrays.
 *
 * @example
 * ```js
 * const arr = [1, 2, 3, "nice"] as const;
 * // readonly [1, 2, 3, "nice"]
 *
 * const arr2 = filterOut(arr, [2, "nice"] as const);
 * // [1, 3]
 * ```
 */
export const filterOut = <
  Array extends unknown[] | readonly unknown[],
  Values extends readonly unknown[],
>(
  array: Array,
  values: Values,
): Prettify<FilterOut<Array, Values[number]>> => {
  return array.filter((item) => !values.includes(item)) as any;
};

type FilterOut<
  Array extends unknown[] | readonly unknown[],
  Values extends Array[number],
> = Array extends [infer First, ...infer Rest]
  ? First extends Values
    ? FilterOut<Rest, Values>
    : [First, ...FilterOut<Rest, Values>]
  : Array extends readonly [infer First, ...infer Rest]
    ? First extends Values
      ? FilterOut<Rest, Values>
      : readonly [First, ...FilterOut<Rest, Values>]
    : Array;
