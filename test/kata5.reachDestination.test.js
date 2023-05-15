const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toBe("I should be there in 4.5 hours");
    expect(reachDestination(150, 17)).toBe("I should be there in 9.0 hours");
  });
});
