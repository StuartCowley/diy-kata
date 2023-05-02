const numberToReversedDigits = (number) => {
//   const num1 = 12345;
  /* const num2 = 6789;
  const num3 = 2468; */
  /* const num = 12345;
  return Array.from(num, Number); */
  const numArray = number.toString().split('').map(Number);
  const reversedArray = numArray.reverse();
  return reversedArray;
};

module.exports = numberToReversedDigits;
