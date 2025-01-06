/**
 * Returns a new array with unique items
 */
export const uniqueArr = <T>(arr: T[]): T[] => {
  return Array.from(new Set(arr));
};

/**
 * Chunks array into smaller arrays of specified size
 */
export const chunkArr = <T>(arr: T[], size: number): T[][] => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size),
  );
};

/**
 * Returns the intersection of two arrays
 */
export const intersection = <T>(arr1: T[], arr2: T[]): T[] => {
  return arr1.filter((item) => arr2.includes(item));
};

/**
 * Returns the difference between two arrays
 */
export const difference = <T>(arr1: T[], arr2: T[]): T[] => {
  return arr1.filter((item) => !arr2.includes(item));
};
