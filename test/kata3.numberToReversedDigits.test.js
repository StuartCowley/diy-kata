const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the numbers digits", () => {
    expect(numberToReversedDigits(12345)).toStrictEqual([5, 4, 3, 2, 1]);
  });

  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(123456789)).toStrictEqual([9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });
});