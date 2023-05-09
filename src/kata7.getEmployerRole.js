const getEmployerRole = (employeeName, employees) => {
  // having trouble pushing to github, adding comment here
  const employee = employees.find((e) => e.name === employeeName);
  return employee ? employee.role : "Employee Not Found";
};

module.exports = getEmployerRole;
