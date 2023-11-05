const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  // how do we create specs again???
  it('returns true for Yes', ()=>{
    expect('Yes').toBeTruthy()
  });

  it('returns false for No', ()=>{
    expect('No').toBeTruthy()
  });
  it('returns false for No', ()=>{
    expect('NO').toBeTruthy()
  });
  it('returns true for yes', ()=>{
    expect('yES').toBeTruthy()
  });
});
