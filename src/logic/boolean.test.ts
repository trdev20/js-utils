import { not } from "./boolean";

describe("boolean", () => {
  describe("not", () => {
    it("should return the opposite of the input", () => {
      const booleanValues = [true, false];
      const randomIndex = Math.floor(Math.random() * booleanValues.length);
      const randomBoolean = booleanValues[randomIndex];

      expect(not(true)).toBe(false);
      expect(not(false)).toBe(true);
      expect(not(randomBoolean)).toBe(!randomBoolean);
    });
  });
});
