import { keys, values, entries } from "./object";

describe("Object getters", () => {
  describe("keys", () => {
    it("should return correct keys", () => {
      expect(keys({ a: 1, b: 2, c: 3 })).toEqual(["a", "b", "c"]);
    });
  });

  describe("values", () => {
    it("should return correct values", () => {
      expect(values({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3]);
    });
  });

  describe("entries", () => {
    it("should return correct entries", () => {
      expect(entries({ a: 1, b: 2, c: 3 })).toEqual([
        ["a", 1],
        ["b", 2],
        ["c", 3],
      ]);
    });
  });
});
