import { isNumber, isObject } from "../validators";

/**
 * Gets the number of decimal places in a number
 */
export const getDecimalLength = (num: number): number => {
  if (!Number.isFinite(num)) return 0;
  const str = Math.abs(num).toString();
  const decimalIndex = str.indexOf(".");
  return decimalIndex === -1 ? 0 : str.length - decimalIndex - 1;
};

export type MinmaxObjParams = { min: number; value: number; max: number };

/**
 * Clamps a value between a minimum and maximum value
 */
export function minmax(min: number, value: number, max: number): number;
export function minmax(obj: MinmaxObjParams): number;
export function minmax(arg1: number | MinmaxObjParams, value?: number, max?: number): number {
  let validMin: number;
  let validMax: number;
  let validValue: number;

  if (isNumber(arg1)) {
    [validMin, validValue, validMax] = [arg1, value!, max!];
  } else {
    [validMin, validValue, validMax] = [arg1.min, arg1.value, arg1.max];
  }

  if (validMin > validMax) {
    [validMin, validMax] = [validMax, validMin];
  }

  return Math.max(validMin, Math.min(validValue, validMax));
}
