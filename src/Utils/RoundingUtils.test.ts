
import { describe, it, expect } from "vitest";
import RoundingUtils from "../Utils/RoundingUtils";

describe("RoundingUtils", () => {
  describe("roundToOne", () => {
    it("should round to one decimal place", () => {
  expect(RoundingUtils.roundToOne(1.24)).toBe(1.2);
  expect(RoundingUtils.roundToOne(1.25)).toBe(1.3);
  expect(RoundingUtils.roundToOne(1.26)).toBe(1.3);
  expect(RoundingUtils.roundToOne(-1.26)).toBe(-1.3);
    });
  });

  describe("roundToTwo", () => {
    it("should round to two decimal places", () => {
      expect(RoundingUtils.roundToTwo(1.234)).toBe(1.23);
      expect(RoundingUtils.roundToTwo(1.235)).toBe(1.24);
      expect(RoundingUtils.roundToTwo(-1.235)).toBe(-1.24);
    });
  });

  describe("roundToThree", () => {
    it("should round to three decimal places", () => {
  expect(RoundingUtils.roundToThree(1.2345)).toBe(1.235);
  expect(RoundingUtils.roundToThree(1.2344)).toBe(1.234);
  expect(RoundingUtils.roundToThree(-1.2345)).toBe(-1.234);
    });
  });

  describe("removeDecimals", () => {
    it("should remove decimals and return integer part", () => {
      expect(RoundingUtils.removeDecimals(123.456)).toBe(123);
      expect(RoundingUtils.removeDecimals(-123.456)).toBe(-123);
      expect(RoundingUtils.removeDecimals(0.999)).toBe(0);
    });
  });
});
