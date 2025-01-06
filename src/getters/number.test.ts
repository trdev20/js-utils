import { getDecimalLength, minmax } from "./number";

describe("Number getters", () => {
  describe("getDecimalLength", () => {
    it("should return correct decimal length", () => {
      expect(getDecimalLength(1.23)).toBe(2);
      expect(getDecimalLength(1)).toBe(0);
      expect(getDecimalLength(-1.23)).toBe(2);
      expect(getDecimalLength(NaN)).toBe(0);
      expect(getDecimalLength(Infinity)).toBe(0);
    });
  });

  describe("minmax", () => {
    it("should return correct minmax", () => {
      expect(minmax(1, 2, 3)).toBe(2);
      expect(minmax({ min: 1, value: 2, max: 3 })).toBe(2);
      expect(minmax(1, 20, 3)).toBe(3);
      expect(minmax({ min: 1, value: 20, max: 3 })).toBe(3);
      expect(minmax(1, -50, 30)).toBe(1);
      expect(minmax({ min: 1, value: -50, max: 30 })).toBe(1);
      expect(minmax(1, 50, -30)).toBe(1);
    });
  });
});
