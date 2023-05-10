const humanCatDogYears = (number) => {
  function calculateCatYears(humanYears) {
    if (humanYears === 1) {
      return 15;
    }
    if (humanYears === 2) {
      return 24;
    }
    return 24 + (humanYears - 2) * 4;
  }
  function calculateDogYears(humanYears) {
    if (humanYears === 1) {
      return 15;
    }
    if (humanYears === 2) {
      return 24;
    }
    return 24 + (humanYears - 2) * 5;
  }

  const catYears = calculateCatYears(number);
  const dogYears = calculateDogYears(number);
  const resultArray = [number, catYears, dogYears];
  return resultArray;
};

module.exports = humanCatDogYears;

