const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it("calculate cat and dog years based on human years", () => {
    expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
    expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
  });
});

// Look Ma, no handlebars!!!
