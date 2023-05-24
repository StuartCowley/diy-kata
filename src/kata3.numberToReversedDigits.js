const numberToReversedDigits = (number) => {
  const digits = number
    .toString()
    .split("")
    .map((x) => Number(x));
  return digits.reverse();
};

module.exports = numberToReversedDigits;
