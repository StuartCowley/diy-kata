const {
  humanCatDogYears,
  calculateCatOrDogYears,
} = require("../src");

describe("humanCatDogYears", () => {
  test("returns array of human, cat and dog years when passed human years", () => {
    const testArray = humanCatDogYears(10);

    expect(testArray.length).toBe(3);
    expect(testArray[0]).toBe(10);
    expect(testArray[1]).toBe(56);
    expect(testArray[2]).toBe(64);

    expect(humanCatDogYears(3)).toEqual([3, 28, 29]);
  });
});

describe("call calculateCatOrDogYears to calculate cat years", () => {
  test("returns cat years when passed human years", () => {
    // expect(calculateCatYears(10)).toBe(56);
    expect(calculateCatOrDogYears(1, true)).toBe(15);
    expect(calculateCatOrDogYears(2, true)).toBe(24);
    expect(calculateCatOrDogYears(3, true)).toBe(28);
    expect(calculateCatOrDogYears(10, true)).toBe(56);
  });
});

 describe("call calculateCatOrDogYears to calculate dog years", () => {
  test("returns dog years when passed human years", () => {
    expect(calculateCatOrDogYears(10, false)).toBe(64);
  });
});
