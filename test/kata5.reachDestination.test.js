const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with 4.5 as arrival time", () => {
    expect(reachDestination(44, 10)).toBe("I should be there in 4.5 hours.");
  });

  test("returns string with 10 as arrival time", () => {
    expect(reachDestination(66, 7)).toBe("I should be there in 9.5 hours.");
  });

  test("returns string with 9 as arrival time", () => {
    expect(reachDestination(90, 10)).toBe("I should be there in 9 hours.");
  });
});
