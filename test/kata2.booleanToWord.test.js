const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns Yes if passed true", () => {
    expect(booleanToWord(true)).toBe("Yes");
  });

  it("returns No if passed false", () => {
    expect(booleanToWord(false)).toBe("No");
  });
});
