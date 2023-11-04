const { humanCatDogYears } = require("../src");

describe("calculateCatDogYears", () => {
  it("Calculate cat and dog years from human years", () => {
    expect(humanCatDogYears(10)).toEqual(10, 56, 64);
    expect(humanCatDogYears(20)).toEqual(20, 96, 114);
  });
});
