const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it("returns an array of three numbers, the human years, the equivalent cat years and dog years", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
  });
  it("returns an array of three numbers, the human years, the equivalent cat years and dog years", () => {
    expect(humanCatDogYears(20)).toEqual([20, 96, 114]);
  });
});

module.exports = humanCatDogYears;
