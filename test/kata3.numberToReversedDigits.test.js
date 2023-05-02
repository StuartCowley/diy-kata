const { numberToReversedDigits } = require("../src");

describe('numberToReversedDigits', () => {
  it('returns a reversed array of the numbers digits', () => {
    expect(numberToReversedDigits(123)).toStrictEqual([3, 2, 1]);
  });
  xit('returns 10-15 in reverse as an array', () => {
    expect(numberToReversedDigits(101112131415)).toStrictEqual([15, 14, 13, 12, 11, 10]);
  });
  xit('returns 20-16 in reverse as an array', () => {
    expect(numberToReversedDigits(1617181920)).toStrictEqual([20, 19, 18, 17, 16]);
  });
});