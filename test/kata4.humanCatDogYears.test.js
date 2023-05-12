const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
	test("returns array of human, cat, dog years", () => {
		expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
		expect(humanCatDogYears(3)).toEqual([3, 28, 29]);
		expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
	});
});
