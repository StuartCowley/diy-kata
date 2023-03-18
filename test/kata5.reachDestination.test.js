const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toEqual("I should be there in 4.5 hours.");
    expect(reachDestination(34, 10)).toEqual("I should be there in 3.5 hours.");
    expect(reachDestination(52, 8)).toEqual("I should be there in 6.5 hours.");
    expect(reachDestination(51, 10)).toBe("I should be there in 5.5 hours.");
  });
});
