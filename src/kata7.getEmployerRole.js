const getEmployerRole = (employeeName, employees) => {
  const employee = employees.find((e) => e.name === employeeName);
  return employee ? employee.role : "Employee Not Found";
};

module.exports = getEmployerRole;
