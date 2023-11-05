const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([{

      name: 'Bart'
    
    }, {
    
      name: 'Lisa'
    
    }, {
    
      name: 'Maggie'
    
    }])).toEqual('Bart, Lisa & Maggie')
  });
  test("returns a string of two names separated by an ampersand", () => {
    expect(joinNames([{name: 'Bart'}, {name:'Lisa'}])).toEqual("Bart & Lisa")
  });
  test("returns a string of one name", () => {
    expect(joinNames([{name: 'Bart'}])).toEqual('Bart')
  });
  test("returns a string of one name", () => {
    expect(joinNames([{name: ''}])).toEqual('')
  });
}
);
