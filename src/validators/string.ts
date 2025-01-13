import { not } from "../logic";

/**
 * Checks if a value is a string
 */
export const isString = (value: unknown): value is string => typeof value === "string";

/**
 * Checks if a string is empty
 */
export const isEmptyString = (value: unknown): value is "" => isString(value) && value.length === 0;

/**
 * Checks if a value is a non-empty string
 */
export const isNonEmptyString = (value: unknown): value is string =>
  isString(value) && not(isEmptyString(value));

/**
 * Checks if a string is whitespaces
 */
export const isWhitespaces = (value: unknown): value is string =>
  isString(value) && value.length > 0 && value.trim().length === 0;

/**
 * Checks if a string is empty or whitespaces
 */
export const isEmptyOrWhitespaces = (value: unknown): value is string =>
  isString(value) && value.trim().length === 0;
