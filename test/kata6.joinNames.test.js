const { joinNames } = require("../src");

const inputNames = [{name: "Bart"}, {name: "Lisa"}, {name: "Maggie"}];
describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames(inputNames)).toEqual("Bart, Lisa & Maggie");
  });
});
