const getEmployerRole = (employeeName, employees) => {
  console.log(employeeName);

  const found = employees.find((employee) => employee.name === employeeName);
  console.log(found);
  return found.role;
};

module.exports = getEmployerRole;
