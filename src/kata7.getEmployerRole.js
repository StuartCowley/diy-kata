const getEmployerRole = (employeeName, employees) => {
  const employee = employees.find((person) => person.name === employeeName);
  return employee.role;
};

module.exports = getEmployerRole;
