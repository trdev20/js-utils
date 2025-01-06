import { isEmptyArray, arraysAreEqual } from "./array";

describe("Array validators", () => {
  describe("isEmptyArray", () => {
    it("should return true for empty arrays", () => {
      expect(isEmptyArray([])).toBe(true);
    });

    it("should return false for non-empty arrays", () => {
      expect(isEmptyArray([1, 2, 3])).toBe(false);
      expect(isEmptyArray([{}])).toBe(false);
      expect(isEmptyArray([[]])).toBe(false);
      expect(isEmptyArray([null])).toBe(false);
      expect(isEmptyArray([undefined])).toBe(false);
    });
  });

  describe("ArraysAreEqual", () => {
    it("should return true for arrays with the same elements in the same order", () => {
      expect(arraysAreEqual([], [])).toBe(true);
      expect(arraysAreEqual([0], [0])).toBe(true);
      expect(arraysAreEqual([1, 2, 3], [1, 2, 3])).toBe(true);
      expect(arraysAreEqual([1, 2, 3, [4, 5, { six: 6 }]], [1, 2, 3, [4, 5, { six: 6 }]])).toBe(
        true,
      );
    });

    it("should return false for arrays with different elements", () => {
      expect(arraysAreEqual([], [1])).toBe(false);
      expect(arraysAreEqual([1, 2, 3], [1, 3, 2])).toBe(false);
    });

    it("should return false for arrays with different lengths", () => {
      expect(arraysAreEqual([1, 2, 3], [1, 2])).toBe(false);
      expect(arraysAreEqual([1, 2], [1, 2, 3])).toBe(false);
    });
  });
});
