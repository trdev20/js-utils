import { isDirectory, isFile, pathsAreEqual } from "./path";

describe("Path validators", () => {
  describe("pathsAreEqual", () => {
    it("should return true if the paths are equal", () => {
      expect(
        pathsAreEqual("C:/Users/John/Documents/file.txt", "C:/Users/John/Documents/file.txt"),
      ).toBe(true);
      expect(pathsAreEqual(__filename, __filename)).toBe(true);
    });

    it("should return false if the paths are not equal", () => {
      expect(pathsAreEqual(__dirname, __filename)).toBe(false);
    });
  });
  
  describe("isDirectory", () => {
    it("should return true if the path is a directory", () => {
      expect(isDirectory(__dirname)).toBe(true);
    });
  });

  describe("isFile", () => {
    it("should return true if the path is a file", () => {
      expect(isFile(__filename)).toBe(true);
    });
  });
});
