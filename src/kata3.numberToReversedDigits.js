const numberToReversedDigits = (number) => {
  const numArray = number.toString().split('').map(Number);
  const reversedArray = numArray.reverse();
  return reversedArray;
};

module.exports = numberToReversedDigits;
