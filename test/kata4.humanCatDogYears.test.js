const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it("should calculate the correct ages in cat and dog years", () => {
    expect(humanCatDogYears(0)).toEqual([0, 0, 0]);
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    expect(humanCatDogYears(20)).toEqual([20, 96, 114]);
  });
});
