import { pick, omit, fixObject } from "./object";

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

  describe("fixObject", () => {
    it("should update top-level keys and values of an object", () => {
      const input = { a: 1, b: 2, c: { d: 3, e: 4 } };
      const output = { "-a": 1, "-b": 2, "-c": { d: 3, e: 4 } };
      const updateKey = (k: unknown) => `-${k}`;
      expect(fixObject(input, { updateKey })).toEqual(output);
    });

    it("should update nested keys and values of an object", () => {
      const input = { a: 1, b: 2, c: { d: 3, e: 4 } };
      const output = { "-a": 1, "-b": 2, "-c": { "-d": 3, "-e": 4 } };
      const updateKey = (k: unknown) => `-${k}`;
      expect(fixObject(input, { updateKey, deep: true })).toEqual(output);
    });
  });
});
