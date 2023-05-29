const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns 'Yes' when passed true", () => {
    expect(booleanToWord(true)).toBe("Yes");
  });

  it("Returns 'No' when passed false", () => {
    expect(booleanToWord(false)).toBe("No");
  });
});