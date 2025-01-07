import { forwardToBackSlash, backToForwardSlash, removeExtension } from "./path";

describe("Path operators", () => {
  describe("forwardToBackSlash", () => {
    it("should convert forward slashes to back slashes", () => {
      expect(forwardToBackSlash("C:/Users/John/Documents/file.txt")).toBe(
        "C:\\Users\\John\\Documents\\file.txt",
      );
    });
  });

  describe("backToForwardSlash", () => {
    it("should convert back slashes to forward slashes", () => {
      expect(backToForwardSlash("C:\\Users\\John\\Documents\\file.txt")).toBe(
        "C:/Users/John/Documents/file.txt",
      );
    });
  });

  describe("removeExtension", () => {
    it("should remove the extension from a path", () => {
      expect(removeExtension("C:/Users/John/Documents/file.txt")).toBe(
        "C:/Users/John/Documents/file",
      );
      expect(removeExtension("C:/Users/John/Documents/file.txt.md")).toBe(
        "C:/Users/John/Documents/file.txt",
      );
      expect(removeExtension("C:/Users/John/Documents/file")).toBe("C:/Users/John/Documents/file");
    });
  });
});
