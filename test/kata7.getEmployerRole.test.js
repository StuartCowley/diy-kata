const { getEmployerRole } = require ("../src");

const employees=[{
  name: "Satti",
  role: 'Developer',
},

{
  name:"Jenny",
  role:"Sales Associate",
},

{
  name:"Javid",
  role:"Human Recommended Reading Assistant",
}

]

describe("getEmployerRole", () => {
  it("returns the employee's role in the company", () => {
    expect(getEmployerRole("Satti",employees)).toEqual("Developer");
    expect(getEmployerRole("Jenny",employees)).toEqual("Sales Associate");
    expect(getEmployerRole("Javid",employees)).toEqual("Human Recommended Reading Assistant");
  });
});
