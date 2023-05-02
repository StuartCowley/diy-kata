const { numberToReversedDigits } = require("../src");

describe('numberToReversedDigits', () => {
  it('returns a reversed array of the numbers digits', () => {
    expect(numberToReversedDigits(123)).toStrictEqual([3, 2, 1]);
  });
  it('returns 1-10 in reverse as an array', () => {
    expect(numberToReversedDigits(123456789)).toStrictEqual([9,8,7,6,5,4,3,2,1]);
  });
  it('returns odd numbers in reverse as an array', () => {
    expect(numberToReversedDigits(13579)).toStrictEqual([9,7,5,3,1]);
  });
});