/**
 * Checks if a value is a boolean
 */

export const isBoolean = (value: unknown): value is boolean => typeof value === "boolean";

/**
 * Checks if a value is true
 */

export const isTrue = (value: unknown): value is true => value === true;

/**
 * Checks if a value is false
 */

export const isFalse = (value: unknown): value is false => value === false;
