const numberToReversedDigits = (number) => {
  const reversedString = number.toString().split("").reverse().join("");
  const reversedDigits = reversedString
    .split("")
    .map((digit) => parseInt(digit, 10));
  return reversedDigits;
};

module.exports = numberToReversedDigits;
