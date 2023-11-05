const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toEqual('I should be there in 4.5hours.')
  });
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(32, 10)).toEqual('I should be there in 3hours.')
  });
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(33, 10)).toEqual('I should be there in 3.5hours.')
  });
});
