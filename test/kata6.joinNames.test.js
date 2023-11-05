const { joinNames } = require("../src");
const namesObj = [{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}]

describe("joinNames", () => {
  test("returns string of names, separated by commas and an ampersand", () => {
    expect(joinNames(namesObj)).toEqual('Bart, Lisa & Maggie');
  });
});
