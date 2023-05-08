const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it("returns an array of three numbers, the human years, the equivalent cat years and dog years", () => {
    expect(humanCatDogYears(10)).toBe([10, 56, 64]);
  });
});
