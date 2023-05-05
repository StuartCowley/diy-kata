const humanCatDogYears = (number) => {
  let catYears = 0;
  let dogYears = 0;
  if (number > 1) {
    catYears = 15 + 9 + (number - 2) * 4;
    dogYears = 15 + 9 + (number - 2) * 5;
  }
  return [number, catYears, dogYears];
};

module.exports = humanCatDogYears;
