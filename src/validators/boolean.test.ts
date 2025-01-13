import { isBoolean, isFalse, isTrue } from "./boolean";

describe("boolean validators", () => {
  describe("isBoolean", () => {
    it("should return true for boolean values", () => {
      expect(isBoolean(true)).toBe(true);
      expect(isBoolean(false)).toBe(true);
      expect(isBoolean(Boolean(""))).toBe(true);
    });

    it("should return false for non-boolean values", () => {
      expect(isBoolean(1)).toBe(false);
      expect(isBoolean("true")).toBe(false);
      expect(isBoolean({})).toBe(false);
    });
  });

  describe("isTrue", () => {
    it("should return true for true values", () => {
      expect(isTrue(true)).toBe(true);
      expect(isTrue(Boolean("nice"))).toBe(true);
    });

    it("should return false for false values", () => {
      expect(isTrue(false)).toBe(false);
      expect(isTrue(Boolean(""))).toBe(false);
    });
  });

  describe("isFalse", () => {
    it("should return true for false values", () => {
      expect(isFalse(false)).toBe(true);
      expect(isFalse(Boolean(""))).toBe(true);
    });

    it("should return false for true values", () => {
      expect(isFalse(true)).toBe(false);
      expect(isFalse(Boolean("nice"))).toBe(false);
    });
  });
});
