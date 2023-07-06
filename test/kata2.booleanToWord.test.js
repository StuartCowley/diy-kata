const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
it('returns yes when passed to true', () => {
    expect(booleanToWord(true)).toBe('yes')
    expect(booleanToWord(false)).toBe('no')
})
});
