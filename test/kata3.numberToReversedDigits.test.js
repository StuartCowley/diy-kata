const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toStrictEqual([5,4,3,2,1])
  });

  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(224466)).toStrictEqual([6,6,4,4,2,2])
  });
});