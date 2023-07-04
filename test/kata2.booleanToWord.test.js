const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("boolean passes yes if true", () => {
    expect(booleanToWord(true)).toEqual("yes");
  })

  it("boolean passes no if false", () => {
    expect(booleanToWord(false)).toEqual("no");
  })

});



