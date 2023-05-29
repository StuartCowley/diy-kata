const joinNames = (namesObj) => {
    const formatNames = namesObj.map((obj) => obj.name);
  
    if (formatNames.length === 0) {
      return "There are no names!";
    }
  
    if (formatNames.length === 1) {
      return [formatNames[0]];
    }
  
    const last = formatNames.pop();
    return `${formatNames.join(", ")} & ${last}`;
  };
  
  module.exports = joinNames;