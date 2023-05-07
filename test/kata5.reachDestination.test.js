const { reachDestination } = require("../src");

describe("reachDestination", () => {
	test("returns string with estimated time of arrival", () => {
		expect(reachDestination(44, 10)).toEqual("I should be there in 4.5 hours.");
		expect(reachDestination(750, 3)).toEqual("I should be there in 250 hours.");
	});
});
