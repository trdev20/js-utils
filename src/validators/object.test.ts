import { isEmptyObject, isObject, objectsAreEqual } from "./object";

describe("Object validators", () => {
  describe("isObject", () => {
    it("should return true for objects", () => {
      expect(isObject({})).toBe(true);
      expect(isObject({ a: 1 })).toBe(true);
      expect(isObject({ a: 1, b: 2 })).toBe(true);
    });

    it("should return false for non-objects", () => {
      expect(isObject(1)).toBe(false);
      expect(isObject("a")).toBe(false);
      expect(isObject(null)).toBe(false);
      expect(isObject(undefined)).toBe(false);
      expect(isObject([])).toBe(false);
      expect(isObject(() => {})).toBe(false);
    });
  });

  describe("isEmptyObject", () => {
    it("should return true for empty objects", () => {
      expect(isEmptyObject({})).toBe(true);
    });

    it("should return false for non-empty objects", () => {
      expect(isEmptyObject({ a: 1 })).toBe(false);
      expect(isEmptyObject({ a: 1, b: 2 })).toBe(false);
    });
  });

  describe("objectsAreEqual", () => {
    it("should return true for objects with the same keys and values", () => {
      expect(objectsAreEqual({ a: 1 }, { a: 1 })).toBe(true);
    });

    it("should return false for objects with different keys", () => {
      expect(objectsAreEqual({ a: 1 }, { a: 2 })).toBe(false);
      expect(objectsAreEqual({ a: 1 }, { b: 1 })).toBe(false);
      expect(objectsAreEqual({ a: 1 }, { c: 3 })).toBe(false);
    });
  });
});
