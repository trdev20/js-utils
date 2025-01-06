import { Arr } from "../types";

/**
 * Checks if a value is an array
 */
export const isArray = <ItemType = unknown>(value: unknown): value is Arr<ItemType> => Array.isArray(value);

/**
 * Checks if an array is empty
 */
export const isEmptyArray = (arr: unknown[]): arr is [] => arr.length === 0;

/**
 * Checks if an array is equal to another array
 */
export const arraysAreEqual = (arr1: Arr, arr2: Arr): boolean =>
  JSON.stringify(arr1) === JSON.stringify(arr2);
