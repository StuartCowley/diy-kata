const { joinNames } = require("../src");

describe("joinNames", () => {
  it("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])
    ).toBe("Bart, Lisa & Maggie");
  });
  it("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([
        { name: "Velma" },
        { name: "Daphne" },
        { name: "Fred" },
        { name: "Shaggy" },
        { name: "Scooby-Doo" },
      ])
    ).toBe("Velma, Daphne, Fred, Shaggy & Scooby-Doo");
  });
});
