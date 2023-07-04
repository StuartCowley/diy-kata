const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44,10)).toEqual("I should be there in 4.5 hours.");
    expect(reachDestination(60,15)).toEqual("I should be there in 4 hours.");
    expect(reachDestination(120,11)).toEqual("I should be there in 11 hours.");
    expect(reachDestination(46,7)).toEqual("I should be there in 6.5 hours.");
  });
});


//time=distance/speed