const getEmployerRole = (employeeName, employees) => {
  const anEmployee = employees.find(
    (employee) => employee.name === employeeName
  );
  return anEmployee.role;
};

module.exports = getEmployerRole;
