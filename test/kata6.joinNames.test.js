const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])
    ).toBe("Bart, Lisa & Maggie");
  });
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([
        { name: "Picard" },
        { name: "Janeway" },
        { name: "Riker" },
        { name: "Kirk" },
        { name: "Archer" },
      ])
    ).toBe("Picard, Janeway, Riker, Kirk & Archer");
  });
});
