const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(reachDestination(44, 10)).toEqual("I should be there in 4.5 hours.");
  });
});
