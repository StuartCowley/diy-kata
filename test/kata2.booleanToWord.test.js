const { booleanToWord } = require("../src");

it("returns Yes when the boolean is true", () => {
  const result = booleanToWord(true)

  expect(result).toBe('Yes')
});
