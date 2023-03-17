const joinNames = (namesArray) => {
  const names = namesArray.map((person) => person.name);

  const joinedNames = names.join(", ");

  const index = joinedNames.lastIndexOf(",");

  const firstHalf = joinedNames.slice(0, index);
  const lastHalf = joinedNames.slice(index + 1, joinedNames.length);

  return `${firstHalf} &${lastHalf}`;
};

module.exports = joinNames;
