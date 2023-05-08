const humanCatDogYears = (number) => {
  const humanYears = number;
  function catYears(humanAge) {
    let catAge = 0;
    if (humanAge <= 1) {
      catAge = 15;
    } else if (humanAge <= 2) {
      catAge = 15 + 9;
    } else if (humanAge > 2) {
      const afterTwo = number - 2;
      catAge = 24;
      catAge += afterTwo * 4;
    }
    return catAge;
  }
  function dogYears(humanAge) {
    let dogAge = 0;
    if (humanAge <= 1) {
      dogAge = 15;
    } else if (humanAge <= 2) {
      dogAge = 15 + 9;
    } else if (humanAge > 2) {
      const afterTwo = number - 2;
      dogAge = 24;
      dogAge += afterTwo * 5;
    }
    return dogAge;
  }

  return [humanYears, catYears(number), dogYears(number)];
};

module.exports = humanCatDogYears;
