const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {});
  expect(
    joinNames([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])
  ).toEqual("Bart, Lisa & Maggie");

  expect(
    joinNames([
      { name: "Peter Parker" },
      { name: "Dexter Morgan" },
      { name: "Bruce Wayne" },
      { name: "Axel Foley" },
    ])
  ).toEqual(
    "Peter Parker, Dexter Morgan, Bruce Wayne & Axel Foley"
  );
});