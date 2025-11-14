import { describe, it, expect, beforeEach, afterEach } from "vitest";
import HandleValues from "./HandleValues";

// Opgave 1
// - Skriv tests for en funktion, der håndterer både tal, strenge og null-værdier.
// - Sørg for at dække både gyldige og ugyldige input.
describe("HandleValues Component", () => {

    // Opgave 2
    // - Brug `beforeEach` til at opsætte testdata og `afterEach` til at rydde op.
    // - Organisér dine tests i grupper med `describe`.

    let testData;

    // numbers
    describe("HandleValues numbers", () => {

        beforeEach(() => {
            testData = null;
        });
        afterEach(() => {
            testData = null;
        });

        it("should handle valid numbers", () => {
            testData = 4;
            expect(HandleValues(testData)).toBe("Number: 4");
        });

        it("should handle NaN / invalid numbers", () => {
            testData = NaN;
            expect(HandleValues(testData)).toBe("Invalid number");
        });
    })

    // strings
    describe("HandleValues strings", () => {

        beforeEach(() => {
            testData = null;
        });
        afterEach(() => {
            testData = null;
        });

        it("should handle valid strings", () => {
            testData = "Hello";
            expect(HandleValues(testData)).toBe("String: Hello");
        });

        it("should handle empty strings or white space strings", () => {
            testData = "";
            expect(HandleValues(testData)).toBe("Empty string");
            testData = "  ";
            expect(HandleValues(testData)).toBe("Empty string");
        });
    });

    // null values
    describe("HandleValues null", () => {

        beforeEach(() => {
            testData = null;
        });
        afterEach(() => {
            testData = null;
        });

        it("should handle null values", () => {
            expect(HandleValues(testData)).toBe("No value");
        });
    });
    
    // unknown types
    describe("HandleValues unknown types", () => {

        beforeEach(() => {
            testData = null;
        });
        afterEach(() => {
            testData = null;
        });

        it("should not fail on unexpected types", () => {
            testData = { key: "value" };
            expect(HandleValues(testData)).toBe("Unknown type");
        });
    });

});
