const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it('should return "yes" when passed true', () => {
    expect(booleanToWord(true)).toBe('yes');
  });

  it('should return "no" when passed false', () => {
    expect(booleanToWord(false)).toBe('no');
  });
});