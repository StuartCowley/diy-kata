const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  test("returns human years", () => {
    expect(humanCatDogYears(10)[0]).toBe(10);
  });

  test("returns cat years", () => {
    expect(humanCatDogYears(10)[1]).toBe(56);
  });

  test("returns dog years", () => {
    expect(humanCatDogYears(10)[2]).toBe(64);
  });
});
