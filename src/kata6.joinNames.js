// eslint-disable-next-line arrow-body-style
const joinNames = (namesObj) => {
  const namesOnly = namesObj.map(obj => obj.name);
  let namesString = "";

  if (namesOnly.length === 1) {
    namesString = namesOnly[0];
  }
  if (namesObj.length === 2) {
    namesString = namesOnly.join(" & ")
  }
  if (namesObj.length > 2) {
    namesString = namesOnly.slice(0, -1).join(", ") + " & " + namesOnly.slice(-1);
  }

  return namesString;
};
module.exports = joinNames;
