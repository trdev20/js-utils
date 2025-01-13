import { isEmptyOrWhitespaces, isEmptyString, isNonEmptyString, isString, isWhitespaces } from "./string";

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

  describe("isNonEmptyString", () => {
    it("should return true for non-empty strings", () => {
      expect(isNonEmptyString("hello")).toBe(true);
      expect(isNonEmptyString("123")).toBe(true);
    });

    it("should return false for empty strings", () => {
      expect(isNonEmptyString("")).toBe(false);
    });
  });

  describe("isWhitespaces", () => {
    it("should return true for whitespaces", () => {
      expect(isWhitespaces(" ")).toBe(true);
      expect(isWhitespaces("  ")).toBe(true);
      expect(isWhitespaces("   ")).toBe(true);
    });

    it("should return false for non-whitespaces", () => {
      expect(isWhitespaces("hello")).toBe(false);
      expect(isWhitespaces("123")).toBe(false);
    });
  });

  describe("isEmptyOrWhitespaces", () => {
    it("should return true for empty strings and whitespaces", () => {
      expect(isEmptyOrWhitespaces("")).toBe(true);
      expect(isEmptyOrWhitespaces(" ")).toBe(true);
      expect(isEmptyOrWhitespaces("  ")).toBe(true);
    });

    it("should return false for non-empty strings", () => {
      expect(isEmptyOrWhitespaces("hello")).toBe(false);
      expect(isEmptyOrWhitespaces("123")).toBe(false);
    });
  });
});
