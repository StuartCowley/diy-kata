const { joinNames } = require("../src");

describe("joinNames", () => {
  it("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames(['Bart', 'Lisa', 'Maggie'])).toEqual('Bart, Lisa & Maggie');
    expect(joinNames(['Bart', 'Lisa', 'Maggie', 'Marge'])).toEqual('Bart, Lisa, Maggie & Marge')
  });
});
