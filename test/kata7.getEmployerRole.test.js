const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  const employees = [
    {
      name: "Satti",

      role: "Developer",
    },
    {
      name: "Jenny",

      role: "Sales Associate",
    },
    {
      name: "Javid",

      role: "Human Recommended Reading Assistant",
    },
  ];
  it("returns Javid's role", () => {
    expect(getEmployerRole("Javid", employees)).toBe(
      "Human Recommended Reading Assistant"
    );
  });
  it("returns Jenny's role", () => {
    expect(getEmployerRole("Jenny", employees)).toBe("Sales Associate");
  });

  it("returns Satti's role", () => {
    expect(getEmployerRole("Satti", employees)).toBe("Developer");
  });
});
