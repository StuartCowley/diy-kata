const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it("returns an array of human, and equivalent cat and dog years", () => {
    expect(humanCatDogYears(10)).toStrictEqual([10, 56, 64]);
  });
});
