const joinNames = (names) => {;
    if (names.length === 0) {
      return "";
    } else if (names.length === 1) {
      return names[0];
    } else if (names.length === 2) {
      return names.join(" & ");
    } else {
      const last = names.pop();
      return names.join(", ") + " & " + last;
    }
  };

module.exports = joinNames;
