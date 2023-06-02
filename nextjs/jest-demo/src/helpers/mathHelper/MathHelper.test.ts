import { MathHelper } from "./math.helper";

describe("MathHelper", () => {
  describe("roundAccurately", () => {
    test("should round a number to 2 decimal places", () => {
      expect(MathHelper.roundAccurately(3.14159)).toBe(3.14);
      expect(MathHelper.roundAccurately(0.12345)).toBe(0.12);
      expect(MathHelper.roundAccurately(10)).toBe(10);
    });
  });
    describe("pageCount", () => {
      test("should calculate the correct page count", () => {
        expect(MathHelper.pageCount(10, 5)).toBe(2);
        expect(MathHelper.pageCount(15, 5)).toBe(3);
        expect(MathHelper.pageCount(20, 10)).toBe(2);
        expect(MathHelper.pageCount(8, 10)).toBe(1);
      });
    });

    describe("generateRandom", () => {
      test("should generate a random number within the specified range", () => {
        const rand = MathHelper.generateRandom(5, 10);
        expect(rand).toBeGreaterThanOrEqual(5);
        expect(rand).toBeLessThanOrEqual(10);
      });

      test("should generate a random number between 0 and 100 if no range is specified", () => {
        const rand = MathHelper.generateRandom();
        expect(rand).toBeGreaterThanOrEqual(0);
        expect(rand).toBeLessThanOrEqual(100);
      });
    });

    describe("getComparePercentage", () => {
      test("should calculate the correct percentage when compare is less than count", () => {
        expect(MathHelper.getComparePercentage(20, 100)).toBe(20);
        expect(MathHelper.getComparePercentage(25, 200)).toBe(50);
        expect(MathHelper.getComparePercentage(10, 50)).toBe(5);
      });

      test("should calculate the correct negative percentage when compare is greater than count", () => {
        expect(MathHelper.getComparePercentage(150, 100)).toBe(-150);
        expect(MathHelper.getComparePercentage(300, 200)).toBe(-600);
        expect(MathHelper.getComparePercentage(80, 50)).toBe(-40);
      });

      test("should return 0 when compare and count are both 0", () => {
        expect(MathHelper.getComparePercentage(0, 0)).toBe(0);
      });
    });
});
