const { joinNames } = require("../src");

describe("joinNames", () => {
  // eslint-disable-next-line prettier/prettier
  const namesOne = [
    { name: "Bart" },
    { name: "Lisa" },
    { name: "Maggie" }
  ];
  const namesTwo = [
    { name: "John" },
    { name: "Paul" },
    { name: "Ringo" },
    { name: "George" },
  ];
  // eslint-disable-next-line prettier/prettier
  const namesThree = [
    { name: "Kurt" },
    { name: "Dave" },
  ];

  // eslint-disable-next-line prettier/prettier
  const namesFour = [
    { name: "Josh" },
  ]
  it("returns Bart, Lisa & Maggie", () => {
    expect(joinNames(namesOne)).toBe("Bart, Lisa & Maggie");
  });

  it("returns the Beatles", () => {
    expect(joinNames(namesTwo)).toBe("John, Paul, Ringo & George");
  });

  it("returns Kurt & Dave", () => {
    expect(joinNames(namesThree)).toBe("Kurt & Dave");
  });

  it("returns Josh", () => {
    expect(joinNames(namesFour)).toBe("Josh");
  });
});
