const getEmployerRole = (employeeName, employees) => {
	const person = employees.find((employee) => employee.name === employeeName);
	if (!person) {
		return "they retired last year";
	}
	return person.role;
};

module.exports = getEmployerRole;
