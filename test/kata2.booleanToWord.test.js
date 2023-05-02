const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns 'Yes' when passed the boolean true", () => {
    expect(booleanToWord(true)).toBe('Yes')
  })

  it("Returns 'No' when passed the boolean false", () => {
    expect(booleanToWord(false)).toBe('No')
  })
});
