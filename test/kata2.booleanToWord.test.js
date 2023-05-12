const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
	test("returns 'yes' when passed true", () => {
		expect(booleanToWord(true)).toBe("yes");
	});

	test("returns 'no' when passed false", () => {
		expect(booleanToWord(false)).toBe("no");
	});
});
