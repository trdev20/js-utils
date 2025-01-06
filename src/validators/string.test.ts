import { isEmptyString, isString } from "./string";

describe("String validators", () => {
  describe("isString", () => {
    it("should return true for strings", () => {
      expect(isString("hello")).toBe(true);
      expect(isString("123")).toBe(true);
    });

    it("should return false for non-strings", () => {
      expect(isString(123)).toBe(false);
      expect(isString(null)).toBe(false);
      expect(isString(undefined)).toBe(false);
    });
  });

  describe("isEmptyString", () => {
    it("should return true for empty strings", () => {
      expect(isEmptyString("")).toBe(true);
    });

    it("should return false for non-empty strings", () => {
      expect(isEmptyString(" ")).toBe(false);
      expect(isEmptyString("hello")).toBe(false);
      expect(isEmptyString("123")).toBe(false);
    });
  });
});
