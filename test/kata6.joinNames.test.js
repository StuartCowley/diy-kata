const { joinNames } = require("../src");




describe("joinNames", () => {
  it("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([{name:"Bart"},{name:"Lisa"},{name:"Maggie"}])).toBe("Bart, Lisa & Maggie")
    expect(joinNames([{name:"Mia"},{name:"James"},{name:"Rachel"},{name:"Jessica"}])).toEqual("Mia, James, Rachel & Jessica")
    expect(joinNames([{name:"Micheal"},{name:"Julia"},{name:"Fred"},{name:"Paul"},{name:"Pete"}])).toEqual("Micheal, Julia, Fred, Paul & Pete")
  });
});
