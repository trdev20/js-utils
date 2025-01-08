import {
  upperFirst,
  slugify,
  upperFirstWord,
  lowerFirst,
  lowerFirstWord,
  padEnd,
  padStart,
} from "./string";

describe("String operators", () => {
  describe("upperFirst", () => {
    it("should capitalize the first letter of a string", () => {
      expect(upperFirst("hello")).toEqual("Hello");
      expect(upperFirst("hello world")).toEqual("Hello world");
      expect(upperFirst("")).toEqual("");
      expect(upperFirst("123")).toEqual("123");
    });
  });

  describe("upperFirstWord", () => {
    it("should capitalize the first letter of each word in a string", () => {
      expect(upperFirstWord("hello world")).toEqual("Hello World");
      expect(upperFirstWord("hello-world")).toEqual("Hello-World");
      expect(upperFirstWord("hello_world")).toEqual("Hello_World");
      expect(upperFirstWord("hello world")).toEqual("Hello World");
      expect(upperFirstWord("Hello WORLD! 123&@#!")).toEqual("Hello WORLD! 123&@#!");
    });
  });

  describe("lowerFirst", () => {
    it("should lowercase the first letter of each word in a string", () => {
      expect(lowerFirst("hello")).toEqual("hello");
      expect(lowerFirst("Hello")).toEqual("hello");
      expect(lowerFirst("HellO")).toEqual("hellO");
      expect(lowerFirst("Hello World")).toEqual("hello World");
    });
  });

  describe("lowerFirstWord", () => {
    it("should lowercase the first letter of each word in a string", () => {
      expect(lowerFirstWord("hello")).toEqual("hello");
      expect(lowerFirstWord("Hello World")).toEqual("hello world");
      expect(lowerFirstWord("Hello-World")).toEqual("hello-world");
      expect(lowerFirstWord("Hello_ World")).toEqual("hello_ world");
      expect(lowerFirstWord("Hello WORLD! 123&@#!")).toEqual("hello wORLD! 123&@#!");
    });
  });

  describe("padStart", () => {
    it("should pad the start of a string with a specified text", () => {
      expect(padStart("world", "hello ")).toEqual("hello world");
    });
  });

  describe("padEnd", () => {
    it("should pad the end of a string with a specified text", () => {
      expect(padEnd("hello", " world")).toEqual("hello world");
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
