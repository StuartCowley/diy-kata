const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns yes when equal to true", () => {
    expect(booleanToWord(true)).toBe("yes");
  });

  it("returns no when equal to false", () => {
    expect(booleanToWord(false)).toBe("no");
  });
});
