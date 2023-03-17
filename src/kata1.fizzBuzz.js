const fizzBuzz = (number) => {
  const divisableBy3 = number % 3;
  const divisableBy5 = number % 5;
  const divisableBy7 = number % 7;

  let returnValue = "";
  if (divisableBy3 === 0) {
    returnValue += "Fizz";
  }

  if (divisableBy5 === 0) {
    returnValue += "Buzz";
  }

  if (divisableBy7 === 0) {
    returnValue += "Whizz";
  }

  if (returnValue === "") {
    return number;
  }
  return returnValue;
};

module.exports = fizzBuzz;
