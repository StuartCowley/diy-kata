const joinNames = (namesObj) => {
  const formattedNames = namesObj.map((obj) => obj.name);

  if (formattedNames.length === 0) {
    return "There are no names!";
  }

  if (formattedNames.length === 1) {
    return [formattedNames[0]];
  }

  const last = formattedNames.pop();
  return `${formattedNames.join(", ")} & ${last}`;
};

module.exports = joinNames;
