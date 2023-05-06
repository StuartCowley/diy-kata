const joinNames = (namesObj) => {
  const justNames = namesObj.map((people) => people.name);
  const lastName = justNames.splice(-1);
  const firstHalf = justNames.join(", ");
  const lastStr = lastName.toString();
  return `${firstHalf} & ${lastStr}`;
};
module.exports = joinNames;
