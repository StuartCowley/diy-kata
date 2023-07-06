
function getEmployerRole(employeeName, employees) {
const employee = employees.find((emp) => emp.name ===employeeName);

if (employee) {
    return employee.role;
}
return "Employee not found";
}



module.exports = getEmployerRole;
