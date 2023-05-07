const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {});
  expect(
    joinNames([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])
  ).toEqual("Bart, Lisa & Maggie");

  expect(
    joinNames([
      { name: "Peter Griffin" },
      { name: "Stewie Griffin" },
      { name: "Lois Griffin" },
      { name: "Meg Griffin" },
      { name: "Brian Griffin" },
      { name: "Chris Griffin" },
    ])
  ).toEqual(
    "Peter Griffin, Stewie Griffin, Lois Griffin, Meg Griffin, Brian Griffin & Chris Griffin"
  );
});
