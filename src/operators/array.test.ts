import { uniqueArr, chunkArr, intersection, difference } from "./array";

describe("Array operators", () => {
  describe("unique", () => {
    it("should remove duplicates from array", () => {
      expect(uniqueArr([1, 2, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
      expect(uniqueArr(["a", "b", "b", "c"])).toEqual(["a", "b", "c"]);
    });
  });

  describe("chunk", () => {
    it("should split array into chunks", () => {
      expect(chunkArr([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
      expect(chunkArr([1, 2, 3, 4], 2)).toEqual([
        [1, 2],
        [3, 4],
      ]);
    });
  });

  describe("intersection", () => {
    it("should return the intersection of two arrays", () => {
      expect(intersection([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
      expect(intersection([1, 2, 3], [4, 3, 2])).toEqual([2, 3]);
      expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
      expect(intersection([], [1, 2, 3])).toEqual([]);
      expect(intersection([1, 2, 3], [])).toEqual([]);
    });
  });

  describe("difference", () => {
    it("should return the difference between two arrays", () => {
      expect(difference([1, 2, 3], [1, 2, 3])).toEqual([]);
      expect(difference([1, 2, 3], [4, 3, 2])).toEqual([1]);
      expect(difference([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3]);
      expect(difference([], [1, 2, 3])).toEqual([]);
      expect(difference([1, 2, 3], [])).toEqual([1, 2, 3]);
    });
  });
});
