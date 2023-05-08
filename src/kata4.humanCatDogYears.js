const humanCatDogYears = (number) => {
  const humanYears = number;
  function catYears(humanAge) {
    if (humanAge <= 1) {
      return 15;
    }
    if (humanAge <= 2) {
      return 24;
    }
    return 24 + (humanAge - 2) * 4;
  }

  function dogYears(humanAge) {
    if (humanAge <= 1) {
      return 15;
    }
    if (humanAge <= 2) {
      return 24;
    }
    return 24 + (humanAge - 2) * 5;
  }
  return [humanYears, catYears(number), dogYears(number)];
};

module.exports = humanCatDogYears;
