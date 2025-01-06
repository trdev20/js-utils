import { isNumber, isOdd, isPrime, isPositive } from "./number";

describe("Number validators", () => {
  describe("isNumber", () => {
    it("should return true for valid numbers", () => {
      expect(isNumber(123)).toBe(true);
      expect(isNumber(0)).toBe(true);
      expect(isNumber(-123)).toBe(true);
    });

    it("should return false for non-numbers", () => {
      expect(isNumber("123")).toBe(false);
      expect(isNumber(null)).toBe(false);
      expect(isNumber(undefined)).toBe(false);
      expect(isNumber(NaN)).toBe(false);
    });
  });

  describe("isOdd", () => {
    it("should return true for odd numbers", () => {
      expect(isOdd(1)).toBe(true);
      expect(isOdd(3)).toBe(true);
      expect(isOdd(-3)).toBe(true);
    });

    it("should return false for even numbers", () => {
      expect(isOdd(2)).toBe(false);
      expect(isOdd(0)).toBe(false);
      expect(isOdd(-2)).toBe(false);
    });
  });

  describe("isPositive", () => {
    it("should return true for positive numbers", () => {
      expect(isPositive(1)).toBe(true);
      expect(isPositive(0)).toBe(true);
      expect(isPositive(4)).toBe(true);
    });

    it("should return false for negative numbers", () => {
      expect(isPositive(-1)).toBe(false);
      expect(isPositive(-4)).toBe(false);
    });
  });

  describe("isPrime", () => {
    it("should return true for prime numbers", () => {
      expect(isPrime(2)).toBe(true);
      expect(isPrime(3)).toBe(true);
      expect(isPrime(5)).toBe(true);
      expect(isPrime(7)).toBe(true);
      expect(isPrime(11)).toBe(true);
      expect(isPrime(13)).toBe(true);
      expect(isPrime(17)).toBe(true);
      expect(isPrime(19)).toBe(true);
      expect(isPrime(23)).toBe(true);
      expect(isPrime(29)).toBe(true);
    });

    it("should return false for non-prime numbers", () => {
      expect(isPrime(1)).toBe(false);
      expect(isPrime(4)).toBe(false);
      expect(isPrime(6)).toBe(false);
      expect(isPrime(8)).toBe(false);
      expect(isPrime(9)).toBe(false);
    });
  });
});
