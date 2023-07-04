const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toStrictEqual([5, 4, 3, 2, 1]);
    expect(numberToReversedDigits(58432)).toStrictEqual([2, 3, 4, 8, 5]);
    expect(numberToReversedDigits(946182)).toStrictEqual([2, 8, 1, 6, 4, 9]);


  });
});
