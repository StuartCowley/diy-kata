const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns Yes or No when passed a boolean", () => {
    expect(booleanToWord(true)).toEqual("Yes");
    expect(booleanToWord(false)).toEqual("No");
  });
});
