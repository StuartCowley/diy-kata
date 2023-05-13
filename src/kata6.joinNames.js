const joinNames = (namesObj) => {
  let namesString = "";
  for (let i = 0; i < namesObj.length; i += 1) {
    if (i === namesObj.length - 1) {
      namesString += " & " + namesObj[i].name;
    } else if (i === namesObj.length - 2) {
      namesString += namesObj[i].name;
    } else {
      namesString += namesObj[i].name + ', ';
    }
  }
  return namesString;
};

module.exports = joinNames;
