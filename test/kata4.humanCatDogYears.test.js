const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it("returns array of 10, 56, 64", () => {
    expect(humanCatDogYears(10)).toStrictEqual([10, 56, 64]);
  });

  it("returns array of 5, 36, 39", () => {
    expect(humanCatDogYears(5)).toStrictEqual([5, 36, 39]);
  });

  it("returns array of 13, 36, 39", () => {
    expect(humanCatDogYears(13)).toStrictEqual([13, 68, 79]);
  });
});
