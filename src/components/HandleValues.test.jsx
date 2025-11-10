import { describe, it, expect, beforeEach, afterEach } from "vitest";
import HandleValues from "./HandleValues";

describe("HandleValues", () => {
  let testData;

  beforeEach(() => {
    testData = null;
  });
  afterEach(() => {
    testData = null;
  });

  it("should handle null values", () => {
    expect(HandleValues(testData)).toBe("No value");
  });

  it("should handle valid numbers", () => {
    testData = 4;
    expect(HandleValues(testData)).toBe("Number: 4");
  });

  it("should handle NaN", () => {
    testData = NaN;
    expect(HandleValues(testData)).toBe("Invalid number");
  });

  it("should handle valid strings", () => {
    testData = "Hello";
    expect(HandleValues(testData)).toBe("String: Hello");
  });

  it("should handle empty strings", () => {
    testData = "";
    expect(HandleValues(testData)).toBe("Empty string");
    testData = "  ";
    expect(HandleValues(testData)).toBe("Empty string");
  });

  it("should not fail on unexpected types", () => {
    testData = { key: "value" };
    expect(HandleValues(testData)).toBe("Unknown type");
  });

});
