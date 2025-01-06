/**
 * Checks if a value is a string
 */
export const isString = (value: unknown): value is string => {
  return typeof value === "string";
};

/**
 * Checks if a string is empty
 */
export const isEmptyString = (value: string): value is "" => {
  return value.length === 0;
};

/**
 * Checks if a string is whitespaces
 */
export const isWhitespaces = (value: string): boolean => {
  return value.length > 0 && value.trim().length === 0;
};

/**
 * Checks if a string is empty or whitespaces
 */
export const isEmptyOrWhitespaces = (value: string): boolean => {
  return value.trim().length === 0;
};
