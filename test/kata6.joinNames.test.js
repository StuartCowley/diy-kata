const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    const simpsons = [
      {
        name: "Bart",
      },
      {
        name: "Lisa",
      },
      {
        name: "Maggie",
      },
    ];

    const murdoch = [
      {
        name: "William",
      },
      {
        name: "Julia",
      },
      {
        name: "Tom",
      },
      {
        name: "George",
      },
    ];
    expect(joinNames(simpsons)).toEqual("Bart, Lisa & Maggie");
    expect(joinNames(murdoch)).toEqual("William, Julia, Tom & George");
  });
});
