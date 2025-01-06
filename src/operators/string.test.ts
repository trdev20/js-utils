import { upperFirst, toCamelCase, truncate, slugify } from "./string";

describe("String operators", () => {
  describe("upperFirst", () => {
    it("should capitalize the first letter of a string", () => {
      expect(upperFirst("hello")).toEqual("Hello");
      expect(upperFirst("HELLO")).toEqual("HELLO");
      expect(upperFirst("")).toEqual("");
    });
  });

  describe("toCamelCase", () => {
    it("should convert a string to camelCase", () => {
      expect(toCamelCase("hello-world")).toEqual("helloWorld");
      expect(toCamelCase("hello_world")).toEqual("helloWorld");
      expect(toCamelCase("hello world")).toEqual("helloWorld");
      expect(toCamelCase("helloWorld")).toEqual("helloWorld");
      expect(toCamelCase("Hello WORLD")).toEqual("helloWORLD");
    });
  });

  describe("truncate", () => {
    it("should truncate a string to a specified length", () => {
      expect(truncate("hello world", 5)).toEqual("hello...");
      expect(truncate("hello world", 10)).toEqual("hello worl...");
      expect(truncate("hello world", 0)).toEqual("hello world");
      expect(truncate("hello world", -1)).toEqual("hello world");
    });
  });

  describe("slugify", () => {
    it("should slugify a string", () => {
      expect(slugify("hello world")).toEqual("hello-world");
      expect(slugify("hello-world")).toEqual("hello-world");
      expect(slugify("hello_world")).toEqual("hello-world");
      expect(slugify("hello world")).toEqual("hello-world");
      expect(slugify("Hello WORLD! 123&@#!")).toEqual("hello-world-123");
    });
  });
});
