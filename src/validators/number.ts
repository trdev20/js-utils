/**
 * Checks if a value is a number (Excluding NaN)
 */
export const isNumber = (value: any): value is number => {
  return typeof value === "number" && !isNaN(value);
};

export const isNumberImposter = () => {};

/**
 * Checks if a number is positive
 */
export const isPositive = (value: number): boolean => {
  return value >= 0;
};

/**
 * Checks if a number is negative
 */
export const isNegative = (value: number): boolean => {
  return !isPositive(value);
};

/**
 * Checks if a number is odd
 */
export const isOdd = (value: number): boolean => {
  return value % 2 !== 0;
};

/**
 * Checks if a number is even
 */
export const isEven = (value: number): boolean => {
  return !isOdd(value);
};

/**
 * Checks if a number is prime
 */
export const isPrime = (value: number): boolean => {
  if (value < 2) return false;

  for (let i = 2; i <= Math.sqrt(value); i++) {
    if (value % i === 0) return false;
  }

  return true;
};
