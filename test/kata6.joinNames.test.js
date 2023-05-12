const { joinNames } = require("../src");

describe("joinNames", () => {
	test("returns string of names, seperated by commas and an ampersand", () => {
		expect(
			joinNames([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])
		).toEqual("Bart, Lisa & Maggie");
		expect(joinNames([{ name: "Matilda" }])).toEqual("Matilda");
		expect(joinNames([{ name: "Milly" }, { name: "Billy" }])).toEqual(
			"Milly & Billy"
		);
		expect(
			joinNames([
				{ name: "Josie" },
				{ name: "Tess" },
				{ name: "Naughty-George" },
				{ name: "Cleo" },
				{ name: "Elsa" },
				{ name: "Bruno" },
			])
		).toEqual("Josie, Tess, Naughty-George, Cleo, Elsa & Bruno");
	});
});
