const humanCatDogYears = (number) => {
  const array = [
    number,
    calculateCatOrDogYears(number, true),
    calculateCatOrDogYears(number, false),
  ];
  return array;
};

const calculateCatOrDogYears = (numberOfYears, isCatYears) => {
  let total = 0;
  const catOrDogYear = isCatYears ? 4 : 5;

  for (let i = 1; i <= numberOfYears; i++) {
    if (i === 1) {
      total = 15;
    } else if (i === 2) {
      total += 9;
    } else {
      total += catOrDogYear;
    }
  }
  return total;
};

module.exports = {
  humanCatDogYears,
  calculateCatOrDogYears,
};
