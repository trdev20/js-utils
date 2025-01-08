import { Obj } from "../types";
import { isObject } from "../validators";

/**
 * Picks specified properties from an object
 */
export const pick = <T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> => {
  return keys.reduce(
    (acc, key) => {
      if (key in obj) acc[key] = obj[key];
      return acc;
    },
    {} as Pick<T, K>,
  );
};

/**
 * Omits specified properties from an object
 */
export const omit = <T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> => {
  const result = { ...obj };
  keys.forEach((key) => delete result[key]);
  return result;
};

/**
 * Updates keys and values of an object
 */

export const fixObject = (
  obj: Obj,
  { updateValue, updateKey, updateKeyAndValue, deep }: FixObjectUpdate,
): Obj => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      const newKey = updateKey ? updateKey(key) : updateKeyAndValue ? updateKeyAndValue(key) : key;
      let newValue;

      if (deep && isObject(value)) {
        newValue = fixObject(value, { updateValue, updateKey, updateKeyAndValue, deep });
      } else {
        newValue = updateValue
          ? updateValue(value)
          : updateKeyAndValue
            ? updateKeyAndValue(value)
            : value;
      }

      return [newKey, newValue];
    }),
  );
};
export type FixObjectUpdate = {
  updateKey?: (key: unknown) => unknown;
  updateValue?: (value: unknown) => unknown;
  updateKeyAndValue?: (keyOrValue: unknown) => unknown;
  deep?: boolean;
};
