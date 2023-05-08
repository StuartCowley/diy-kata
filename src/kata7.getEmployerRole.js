// eslint-disable-next-line arrow-body-style
const getEmployerRole = (employeeName, employees) => {
  const findRole = employees.find(({ name }) => name === employeeName);
  return findRole.role;
};

module.exports = getEmployerRole;
