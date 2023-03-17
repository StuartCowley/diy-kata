const numberToReversedDigits = (number) => {
  const arrayOfDigits = Array.from(String(number), Number);

  return arrayOfDigits.reverse();
};

module.exports = numberToReversedDigits;
