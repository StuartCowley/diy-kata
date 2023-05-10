const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns 12345 arrayed and reversed", () => {
    expect(numberToReversedDigits(12345)).toStrictEqual([5, 4, 3, 2, 1]);
  });

  test("returns 6789 arrayed and reversed", () => {
    expect(numberToReversedDigits(6789)).toStrictEqual([9, 8, 7, 6]);
  });

  test("returns 2468 arrayed and reversed", () => {
    expect(numberToReversedDigits(2468)).toStrictEqual([8, 6, 4, 2]);
  });
});
