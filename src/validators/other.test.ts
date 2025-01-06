import { isOneOf } from "./other";

describe("Other validators", () => {
  describe("isOneOf", () => {
    it("should return true if the value is in the array", () => {
      expect(isOneOf("a", ["a", "b", "c"])).toBe(true);
    });

    it("should return false if the value is not in the array", () => {
      expect(isOneOf("d", ["a", "b", "c"])).toBe(false);
      expect(isOneOf(1, [])).toBe(false);
    });
  });
});
