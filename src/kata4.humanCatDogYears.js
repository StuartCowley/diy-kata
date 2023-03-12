const humanCatDogYears = (number) => {
  const array = [number, calculateCatOrDogYears(number, true), calculateCatOrDogYears(number, false)];
console.log(array);
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
};
console.log(total);
  return total;
};

/* const calculateDogYears = (numberOfYears) => {
  let total = 0;

  for (let i = 1; i <= numberOfYears; i++) {
    if (i === 1) {
      total = 15;
    } else if (i === 2) {
      total += 9;
    } else {
      total += 5;
    }
  }
  console.log(total);
  return total;
}; */

module.exports = {
  humanCatDogYears,
  calculateCatOrDogYears,
};
