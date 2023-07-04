const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  test("returns the role of an employee after their name has been called", () => {

  const employees = [
    { name: "Spongebob", role: "Fry-Cook" },
    { name: "Squidward", role: "Front of House" },
    { name: "Patrick", role: "Customer" },
  ];

expect(getEmployerRole("Spongebob", employees)).toBe("Fry-Cook");
expect(getEmployerRole("Squidward", employees)).toBe("Front of House");
expect(getEmployerRole("Patrick", employees)).toBe("Customer");
 });
});
