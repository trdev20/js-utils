import { getAllIndices, getMinMax } from "./array";

describe("Array getters", () => {
  describe("getAllIndices", () => {
    it("should return correct indices", () => {
      expect(getAllIndices([1, 2, 3, 2, 1], (x) => x === 2)).toEqual([1, 3]);
      expect(getAllIndices([1, 2, 3, 2, 1], (x) => x < 3)).toEqual([0, 1, 3, 4]);
      expect(getAllIndices([1, 2, 3, 2, 1], (x) => x > 2)).toEqual([2]);
    });
  });

  describe("getMinMax", () => {
    it("should return correct min and max", () => {
      expect(getMinMax([1, 2, 3, 2, 1])).toEqual({ min: 1, max: 3 });
      expect(getMinMax([1, 1, 1, 1, 1])).toEqual({ min: 1, max: 1 });
    });
  });
});
