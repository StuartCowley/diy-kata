const numberToReversedDigits = (number) => {
    const reversedArray = Array.from(String(number), n => Number(n));
    reversedArray.reverse();
    return reversedArray;
  };
  module.exports = numberToReversedDigits;