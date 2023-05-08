// eslint-disable-next-line arrow-body-style
const getEmployerRole = (employeeName, employees) => {
  //   const findRole = employees.find((employee) => employee.name === employees);
  //   if (findRole) {
  //     return findRole;
  //   }
  //   return "Human Recommended Reading Assistant";
  const findRole = employees.find(({ name }) => name === employeeName);
  return findRole.role;
};

module.exports = getEmployerRole;
