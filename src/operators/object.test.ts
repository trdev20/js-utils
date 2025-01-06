import { pick, omit } from "./object";

describe("Object operators", () => {
  describe("pick", () => {
    it("should pick specified properties from an object", () => {
      expect(pick({ a: 1, b: 2, c: 3 }, ["a", "c"])).toEqual({ a: 1, c: 3 });
      expect(pick({ a: 1, b: 2, c: 3 }, [])).toEqual({});
    });
  });

  describe("omit", () => {
    it("should omit specified properties from an object", () => {
      expect(omit({ a: 1, b: 2, c: 3 }, ["a", "c"])).toEqual({ b: 2 });
      expect(omit({ a: 1, b: 2, c: 3 }, [])).toEqual({ a: 1, b: 2, c: 3 });
    });
  });
});
