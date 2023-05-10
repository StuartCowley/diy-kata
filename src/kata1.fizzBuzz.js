const fizzBuzz = (number) => {
  const isDivisableBy3 = number % 3 === 0;
  const isDivisableBy5 = number % 5 === 0;
  if (isDivisableBy5 && isDivisableBy3) {
    return "FizzBuzz";
  }

  if (isDivisableBy5) {
    return "Buzz";
  }
  if (isDivisableBy3) {
    return "Fizz";
  }
  return number;
};

module.exports = fizzBuzz;
