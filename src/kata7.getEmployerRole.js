const getEmployerRole = (employeeName, employees) => {
    const employee = employees.find((anEmployee) => anEmployee.name === employeeName);
    return employee ? employee.role : "Employee Not Found";
  };
  
  module.exports = getEmployerRole;