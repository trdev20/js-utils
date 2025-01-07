/**
 * Converts a path to forward slashes
 */

export const forwardToBackSlash = (path: string): string => path.replace(/\//g, "\\");

/**
 * Converts a path to back slashes
 */

export const backToForwardSlash = (path: string): string => path.replace(/\\/g, "\/");

/**
 * Removes the extension from a path
 */

export const removeExtension = (path: string): string => path.replace(/\.[^.]+$/, "");
