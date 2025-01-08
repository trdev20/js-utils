import { ELLIPSIS, EMPTY_STRING, SPACE } from "../constants";

/**
 * Capitalizes the first letter of a string
 */
export const upperFirst = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

/**
 * Capitalizes the first letter of each word in a string
 */
export const upperFirstWord = (str: string): string => str.replace(/[a-z]+/gi, upperFirst);

/**
 * Lowercases the first letter of a string
 */
export const lowerFirst = (str: string): string => str.charAt(0).toLowerCase() + str.slice(1);

/**
 * Lowercases the first letter of each word in a string
 */
export const lowerFirstWord = (str: string): string => str.replace(/[a-z]+/gi, lowerFirst);

/**
 * Pads the start of a string with a specified text
 */
export const padStart = (str: string, textToAdd: string): string => `${textToAdd}${str}`;

/**
 * Pads the end of a string with a specified text
 */
export const padEnd = (str: string, textToAdd: string): string => `${str}${textToAdd}`;

/**
 * Slugifies a string (converts to URL-friendly format)
 */
export const slugify = (str: string): string => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, EMPTY_STRING)
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, EMPTY_STRING);
};
