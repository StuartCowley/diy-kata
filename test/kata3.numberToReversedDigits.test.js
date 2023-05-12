const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
	test("returns a reversed array of the number's digits", () => {
		expect(numberToReversedDigits(62492)).toEqual([2, 9, 4, 2, 6]);
	});
});
