const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("divides distance by speed and rounds the figure up", () => {
    expect(reachDestination(100, 50)).toBe("2.0");
    expect(reachDestination(150, 40)).toBe("4.0");
    expect(reachDestination(75,60)).toBe("1.5");
  });
});
