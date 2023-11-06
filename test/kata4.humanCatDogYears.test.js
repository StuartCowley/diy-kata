const { humanCatDogYears } = require("../src");

  describe("CatDogYears", () => {
    xit("calculate cat and dog years based on human years", () => {
    expect(humanCatDogYears(10)).toEqual(10, 56, 64);
    })
});
// Look Ma, no handlebars!!!
