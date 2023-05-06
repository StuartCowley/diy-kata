const { booleanToWord } = require("../src/kata2.booleanToWord");

describe("booleanToWord", () => {
	test("returns 'yes' when passed true", () => {
		expect(true).toEqual("yes");
	});

	test("returns 'no' when passed false", () => {
		expect(false).toEqual("no");
	});
});
